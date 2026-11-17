// Servidor principal do "O Encontrei!"
// Inicializa Express, Socket.io (apenas local), e todas as rotas

try {
  require('dotenv').config();
} catch (e) {}
const express = require('express');
const cors = require('cors');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

// Inicializar Prisma
const prisma = new PrismaClient();

// Criar app Express
const app = express();

// Detectar se está na Vercel (serverless) ou rodando local
const isServerless = !!(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);

// Configurar origens permitidas (web + app mobile Capacitor)
const origensPermitidas = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
  'capacitor://localhost',  // App Android (Capacitor)
  'http://localhost',       // Capacitor iOS/Android fallback
];

function verificarOrigem(origin, callback) {
  // Permitir requests sem origin (ex: apps mobile, Postman, Vercel internamente)
  if (!origin) return callback(null, true);
  if (
    origensPermitidas.includes(origin) ||
    origin.endsWith('.vercel.app') ||
    process.env.CORS_ALLOW_ALL === 'true' ||
    process.env.NODE_ENV === 'production'
  ) {
    return callback(null, true);
  }
  return callback(null, true);
}

// Middlewares globais
app.use(cors({
  origin: verificarOrigem,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir uploads estáticos
const os = require('os');
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/uploads', express.static(path.join(os.tmpdir(), 'uploads')));

// Disponibilizar prisma para as rotas
app.set('prisma', prisma);

// Rota de saúde com diagnóstico de banco
app.get(['/', '/saude', '/api', '/api/saude'], async (req, res) => {
  let dbStatus = 'desconhecido';
  let dbError = null;
  let usuariosCadastrados = 0;

  if (!process.env.DATABASE_URL) {
    dbStatus = 'DATABASE_URL não configurada nas variáveis de ambiente da Vercel';
  } else {
    try {
      usuariosCadastrados = await prisma.usuario.count();
      dbStatus = 'conectado';
    } catch (e) {
      dbStatus = 'falha de conexão';
      dbError = e.message;
    }
  }

  res.json({
    status: 'ok',
    mensagem: 'O Encontrei! API está funcionando 🎉',
    serverless: isServerless,
    bancoDeDados: {
      status: dbStatus,
      temDatabaseUrl: !!process.env.DATABASE_URL,
      usuariosCadastrados,
      erro: dbError
    }
  });
});

// Importar rotas
const autenticacaoRotas = require('./rotas/autenticacao.rotas');
const itensRotas = require('./rotas/itens.rotas');
const matchingRotas = require('./rotas/matching.rotas');
const chatRotas = require('./rotas/chat.rotas');
const notificacoesRotas = require('./rotas/notificacoes.rotas');
const adminRotas = require('./rotas/admin.rotas');
const iaRotas = require('./rotas/ia.rotas');

// Registrar rotas tanto com /api quanto sem /api para compatibilidade total com Vercel Serverless
['/api', ''].forEach(prefixo => {
  app.use(`${prefixo}/autenticacao`, autenticacaoRotas);
  app.use(`${prefixo}/itens`, itensRotas);
  app.use(`${prefixo}/matching`, matchingRotas);
  app.use(`${prefixo}/chat`, chatRotas);
  app.use(`${prefixo}/notificacoes`, notificacoesRotas);
  app.use(`${prefixo}/admin`, adminRotas);
  app.use(`${prefixo}/ia`, iaRotas);
});

// Tratamento de erros global
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  res.status(err.status || 500).json({
    erro: true,
    mensagem: err.message || 'Erro interno do servidor'
  });
});

// =====================================================
// Socket.io — APENAS quando rodando local (não serverless)
// Na Vercel, o chat opera via REST API (polling)
// =====================================================
let server = null;
let io = null;

if (!isServerless) {
  const http = require('http');
  const { Server } = require('socket.io');
  const jwt = require('jsonwebtoken');

  server = http.createServer(app);

  io = new Server(server, {
    cors: {
      origin: verificarOrigem,
      methods: ['GET', 'POST']
    }
  });

  app.set('io', io);

  // Mapa de usuários conectados
  const usuariosConectados = new Map();

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Autenticação necessária'));
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.usuarioId = decoded.id;
      next();
    } catch (err) {
      next(new Error('Token inválido'));
    }
  });

  io.on('connection', (socket) => {
    console.log(`✅ Usuário conectado: ${socket.usuarioId}`);
    usuariosConectados.set(socket.usuarioId, socket.id);

    // Entrar na sala pessoal do usuário
    socket.join(socket.usuarioId);

    // Enviar mensagem
    socket.on('enviar_mensagem', async (dados) => {
      try {
        const { destinatarioId, conteudo } = dados;

        // Salvar no banco
        const mensagem = await prisma.mensagem.create({
          data: {
            conteudo,
            remetenteId: socket.usuarioId,
            destinatarioId
          },
          include: {
            remetente: { select: { id: true, nome: true, avatar: true } }
          }
        });

        // Enviar para o destinatário
        io.to(destinatarioId).emit('nova_mensagem', mensagem);

        // Criar notificação
        await prisma.notificacao.create({
          data: {
            titulo: 'Nova mensagem',
            mensagem: `${mensagem.remetente.nome} enviou uma mensagem`,
            tipo: 'mensagem',
            usuarioId: destinatarioId
          }
        });

        // Notificar em tempo real
        io.to(destinatarioId).emit('nova_notificacao', {
          tipo: 'mensagem',
          mensagem: `${mensagem.remetente.nome} enviou uma mensagem`
        });

        // Confirmar envio
        socket.emit('mensagem_enviada', mensagem);
      } catch (erro) {
        console.error('Erro ao enviar mensagem:', erro);
        socket.emit('erro', { mensagem: 'Erro ao enviar mensagem' });
      }
    });

    // Marcar mensagens como lidas
    socket.on('marcar_lidas', async (dados) => {
      try {
        const { remetenteId } = dados;
        await prisma.mensagem.updateMany({
          where: {
            remetenteId,
            destinatarioId: socket.usuarioId,
            lida: false
          },
          data: { lida: true }
        });
      } catch (erro) {
        console.error('Erro ao marcar mensagens como lidas:', erro);
      }
    });

    // Digitando...
    socket.on('digitando', (dados) => {
      io.to(dados.destinatarioId).emit('usuario_digitando', {
        usuarioId: socket.usuarioId
      });
    });

    socket.on('disconnect', () => {
      console.log(`❌ Usuário desconectado: ${socket.usuarioId}`);
      usuariosConectados.delete(socket.usuarioId);
    });
  });
}

// Iniciar servidor apenas se executado diretamente (local)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const listener = server || app;
  listener.listen(PORT, () => {
    console.log(`🚀 O Encontrei! Backend rodando na porta ${PORT}`);
    if (io) console.log(`📡 Socket.io pronto para conexões`);
  });
}

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

module.exports = app;
