// Vercel Serverless Function — Entry Point
// Exporta o Express app como handler de Serverless Function

// Carregar variáveis de ambiente primeiro
require('dotenv').config({ path: require('path').join(__dirname, '..', 'backend', '.env') });

const app = require('../backend/src/servidor');

module.exports = app;
