# ESCOLA ESTADUAL GOVERNADOR MILTON CAMPOS
### Curso Técnico em Informática para Internet

<br><br><br><br><br><br><br><br>

# O ENCONTREI!
### Tecnologia e Inteligência Artificial a Serviço da Gestão de Achados e Perdidos e Cidadania Solidária em Ambientes Escolares

<br><br><br><br><br><br><br><br>

**Belo Horizonte**  
**2026**

---

<div style="page-break-after: always;"></div>

# ESCOLA ESTADUAL GOVERNADOR MILTON CAMPOS
### Curso Técnico em Informática para Internet

<br><br><br>

# O ENCONTREI!
### Tecnologia e Inteligência Artificial a Serviço da Gestão de Achados e Perdidos e Cidadania Solidária em Ambientes Escolares

<br><br><br><br>

<div style="margin-left: 40%; text-align: justify;">
Documentação técnica apresentada como requisito parcial para a Feira de Ciências e Tecnologia da Escola Estadual Governador Milton Campos, no Curso Técnico em Informática para Internet, na disciplina de Projeto Integrador / Desenvolvimento de Sistemas.
</div>

<br><br><br><br><br><br>

**Belo Horizonte**  
**2026**

---

<div style="page-break-after: always;"></div>

# SUMÁRIO

```
1 INTRODUÇÃO ..................................................................................................................... 4
2 CONTEXTUALIZAÇÃO DO PROBLEMA ...................................................................... 5
  2.1 O extravio recorrente de pertences e a ineficácia dos métodos tradicionais ................. 5
  2.2 Dores identificadas: estudante, comunidade escolar e gestão institucional ................. 5
3 DADOS QUANTITATIVOS E QUALITATIVOS ............................................................ 7
  3.1 Indicadores educacionais e materiais: a escala do problema ....................................... 7
  3.2 Dimensão qualitativa: experiência humana documentada ........................................... 8
  3.3 Comparativo com soluções existentes ........................................................................... 8
4 JUSTIFICATIVA E RELEVÂNCIA ACADÊMICA ........................................................ 9
  4.1 Fundamentação legal e normativa ................................................................................. 9
  4.2 Relevância tecnológica e inovação da abordagem ....................................................... 10
5 OBJETIVOS ........................................................................................................................ 10
  5.1 Objetivo geral ................................................................................................................ 10
  5.2 Objetivos específicos .................................................................................................... 10
6 VISÃO E MISSÃO DO PROJETO ................................................................................... 11
7 SOLUÇÃO PROPOSTA: O SISTEMA O ENCONTREI! ................................................. 11
  7.1 Conceito e arquitetura geral .......................................................................................... 11
  7.2 Fluxo de funcionamento ................................................................................................ 12
  7.3 Regras de negócio críticas ............................................................................................ 13
  7.4 Especificação de Requisitos Funcionais (RF01 a RF10) .............................................. 13
  7.5 Especificação de Requisitos Não Funcionais (RNF01 a RNF10) ................................. 14
  7.6 Demonstração das Telas da Aplicação .......................................................................... 15
8 BENEFÍCIOS DO SISTEMA ............................................................................................ 16
9 O QUE FOI CONSTRUÍDO: PROTÓTIPO FUNCIONAL ........................................... 17
10 REQUISITOS PARA IMPLEMENTAÇÃO COMPLETA ................................................ 18
11 ALINHAMENTO COM OS ODS – AGENDA 2030/ONU ............................................... 19
12 CONSIDERAÇÕES FINAIS .............................................................................................. 20
REFERÊNCIAS ..................................................................................................................... 21
```

---

<div style="page-break-after: always;"></div>

# 1 INTRODUÇÃO

O ambiente educacional constitui o espaço primordial para o desenvolvimento cognitivo, social e cidadão de crianças e jovens, sendo assegurado pela Constituição da República Federativa do Brasil de 1988 e regulamentado pela Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/1996). Para que o processo de ensino e aprendizagem transcorra de maneira plena e equitativa, a preservação do bem-estar psicológico e a segurança dos recursos materiais dos discentes — como uniformes, agasalhos, livros, calculadoras, dispositivos eletrônicos e materiais pedagógicos — desempenham papel crucial na permanência e no rendimento escolar.

Entretanto, a rotina diária das instituições de ensino público e privado de grande porte, e em particular nas escolas estaduais de Belo Horizonte, capital do estado de Minas Gerais, evidencia uma crônica e generalizada problemática: a perda e o esquecimento sistemático de pertences pessoais nas dependências escolares. Em decorrência do ritmo dinâmico de trocas de salas, práticas desportivas nas quadras poliesportivas, intervalos nos pátios e atividades laboratoriais, centenas de itens são extraviados semanalmente sem que haja um canal de comunicação estruturado, ágil e auditável capaz de conectá-los aos seus legítimos donos (ANAE, 2023).

A resposta convencional adotada pelas escolas tem sido historicamente precária, baseando-se em caixas plásticas de "Achados e Perdidos" alocadas em cantos de secretarias, avisos manuscritos em murais ou publicações caóticas em grupos informais de aplicativos de mensagens instantâneas. Esse cenário analógico resulta em baixíssimos índices de recuperação (inferiores a 25%), desperdício financeiro substancial suportado pelas famílias e acúmulo desordenado de bens que, invariavelmente, acabam deteriorados ou descartados como lixo ao final do ano letivo.

Diante dessa problemática, o presente trabalho descreve a concepção, modelagem e desenvolvimento do sistema **O Encontrei!**, uma plataforma digital multiplataforma concebida por estudantes do Curso Técnico em Informática para Internet da Escola Estadual Governador Milton Campos. O sistema tem por finalidade centralizar o registro, agilizar a localização e automatizar o cruzamento inteligente de dados entre pertences perdidos e encontrados no perímetro escolar, restabelecendo a posse dos objetos de forma rápida, segura e humanizada.

A solução foi estruturada sob os alicerces da Engenharia de Software moderna, da Cidadania Digital e da Inovação Social, empregando o paradigma da Arquitetura por Fatias Verticais (*Vertical Slice Architecture* - VSA), banco de dados relacional gerenciado por ORM tipado, Interface de Programação de Aplicações RESTful (API REST), comunicação full-duplex bidirecional em tempo real via WebSockets, algoritmos de correspondência híbridos potencializados por Modelos de Linguagem de Grande Porte (Large Language Models - LLMs) e conformidade integral com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).

---

# 2 CONTEXTUALIZAÇÃO DO PROBLEMA

## 2.1 O extravio recorrente de pertences e a ineficácia dos métodos tradicionais

Belo Horizonte conta com uma rede educacional dinâmica que abrange mais de 380 mil estudantes matriculados na educação básica (INEP, 2024), distribuídos em centenas de instituições públicas estaduais e municipais. A Escola Estadual Governador Milton Campos, inserida nesse contexto metropolitano, abriga diariamente milhares de alunos, docentes e funcionários que compartilham múltiplos ambientes coletivos: dezenas de salas de aula, auditórios, cantinas, laboratórios científicos e praças de convivência.

O fluxo massivo de pessoas potencializa o extravio de pertences essenciais. O esquecimento de um casaco de uniforme durante uma oscilação térmica, a perda de um estojo com materiais técnicos de desenho ou o esquecimento de uma carteira de estudante com passe de ônibus representam incidentes rotineiros que geram desamparo imediato.

A dinâmica observada no modelo analógico pode ser sintetizada no seguinte ciclo de ineficiência: o objeto esquecido é recolhido por um colega bem-intencionado ou funcionário da limpeza; sem um canal formal para divulgar o achado, o item é entregue em algum balcão administrativo ou guardado indefinidamente em salas de apoio. O proprietário, sem saber onde procurar ou por timidez e falta de tempo no intervalo, não realiza a busca ativa. Gera-se, portanto, um fosso informacional intransponível: a oferta do objeto encontrado não encontra a demanda do proprietário que o procura.

## 2.2 Dores identificadas: estudante, comunidade escolar e gestão institucional

A investigação empírica conduzida no ambiente escolar permitiu mapear e segmentar as fricções e prejuízos sofridos por cada ator da comunidade:

### 2.2.1 Do ponto de vista do estudante que perdeu o pertence
O estudante lesado enfrenta abalo emocional, sensação de frustração, impotência e desconforto perante o receio de repreensão familiar. Nos estratos de média e baixa renda, a perda de um agasalho oficial da escola ou de um smartphone representa um impacto severo no orçamento familiar. Há ainda o prejuízo pedagógico direto quando são perdidos cadernos com registros exclusivos de matérias, apostilas ou calculadoras científicas necessárias para avaliações.

### 2.2.2 Do ponto de vista de quem encontra o objeto (achador)
Aquele que encontra um bem alheio comumente experimenta uma paralisia de ação: o receio de ser falsamente acusado de apropriação indevida, a falta de praticidade para identificar a qual turma ou turno o objeto pertence e o constrangimento de transportar volumes extras pelo campus desestimulam a iniciativa solidária. A inexistência de um sistema que reconheça ou valorize a devolução faz com que o comportamento passivo de "deixar onde está" predomine.

### 2.2.3 Do ponto de vista da administração escolar e equipe de apoio
Os setores de secretaria, portaria e zeladoria tornam-se depósitos improvisados de vestuário e utensílios esquecidos. Funcionários administrativos perdem horas produtivas atendendo a buscas informais, sem qualquer protocolo de custódia, catalogação ou registro de entrega. Ao fim de cada semestre letivo, dezenas de caixas abarrotadas de uniformes e garrafas sem identificação colocam a gestão diante do dilema legal e moral do descarte ou doação de materiais deteriorados.

---

<div style="page-break-after: always;"></div>

# 3 DADOS QUANTITATIVOS E QUALITATIVOS

## 3.1 Indicadores educacionais e materiais: a escala do problema

A fundamentação da relevância e da urgência do sistema **O Encontrei!** baseia-se em dados de órgãos governamentais, levantamentos socioeconômicos e pesquisas de campo sobre a rotina de escolas públicas brasileiras, sintetizados na Tabela 1.

**Tabela 1 – Indicadores institucionais e educacionais sobre perdas e descarte de pertences no Brasil e em Belo Horizonte**

| Indicador | Dado | Fonte |
| :--- | :--- | :--- |
| Alunos matriculados na Educação Básica em BH | Aprox. 380 mil estudantes | INEP / Censo Escolar (2024) |
| Escolas públicas estaduais e municipais em BH | Mais de 350 unidades ativas | SEE-MG / SMED-BH (2024) |
| Média anual de itens extraviados por escola de porte médio/grande | 400 a 1.200 pertences/ano | Estudo Amostral Escolar / FNDE (2023) |
| Taxa de abandono/não recuperação em caixas convencionais | Mais de 75% dos itens catalogados | ANAE (2023) |
| Custo médio anual suportado pelas famílias para reposição de materiais | R$ 350 a R$ 1.200 por aluno/ano | PROCON-MG / DIEESE (2024) |
| Estudantes com posse de smartphone (faixa 12 a 18 anos) | 89% dos matriculados | CGI.br / TIC Kids Online Brasil (2023) |
| Escolas estaduais com conexão de banda larga instalada | 94% das unidades em MG | MEC / Censo da Educação Básica (2023) |
| Tempo médio de retenção de um objeto até seu descarte ou perda de utilidade | 6 a 12 meses | Levantamento interno de campo (2026) |
| Custo do sistema O Encontrei! para estudantes e escolas | Gratuito (open-source educacional) | Elaborado pelos autores (2026) |

*Fonte: Elaborado pelos autores (2026).*

A análise dos dados revela que, anualmente, dezenas de milhares de itens de valor afetivo e material circulam sem destino nas escolas de Belo Horizonte, gerando prejuízos acumulados da ordem de milhões de reais às famílias e sobrecarregando a infraestrutura das escolas públicas mineiras.

## 3.2 Dimensão qualitativa: experiência humana documentada

Para além dos índices numéricos, os relatos coletados junto à comunidade escolar evidenciam a angústia provocada pela ineficiência dos métodos arcaicos:

> *"Perdi meu casaco de moletom da escola durante a aula de educação física no pátio. Fui na secretaria três vezes na mesma semana, mas me disseram que a caixa estava cheia demais e mandaram eu voltar depois. Quando finalmente consegui olhar, meu casaco já não estava lá. Minha mãe teve que parcelar outro no cartão, e passamos aperto naquele mês."* (Depoimento de estudante do 2º ano do Ensino Médio, EE Gov. Milton Campos, 2026).

> *"A coordenação não tem como gerenciar centenas de casacos e garrafas térmicas que os alunos largam nas salas e na quadra. Não temos pessoal nem espaço físico de almoxarifado para virar guarda-volumes. Um sistema digital onde os próprios alunos resolvam entre si, com a escola apenas chancelando a devolução, muda completamente nossa rotina."* (Depoimento de Supervisora Pedagógica, 2026).

## 3.3 Comparativo com soluções existentes

A avaliação comparativa apresentada na Tabela 2 demonstra a superioridade funcional e de segurança da plataforma O Encontrei! em relação aos métodos usuais.

**Tabela 2 – Comparativo entre o O Encontrei! e soluções existentes**

| Solução | Tipo de Solução | Automatização por IA | Custo ao Usuário | Notificação em Tempo Real | Privacidade e Proteção (LGPD) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Caixa Física de Achados (Secretaria) | Analógica / Manual | Inexistente | Gratuito | Nenhuma (busca cega) | Nula (itens expostos publicamente) |
| Grupos de WhatsApp / Turma | Comunicação Informal | Inexistente | Gratuito | Caótica (alto ruído e desorganização) | Crítica (números de telefone expostos) |
| Avisos no Mural do Pátio | Analógica / Papel | Inexistente | Baixo | Inexistente | Inexistente |
| Aplicativos Comerciais Genéricos | Plataforma Externa | Parcial / Rara | Oneroso / Anúncios | Condicionada | Genérica (compartilhamento de dados) |
| **O Encontrei! (Proposto)** | **Ecossistema Digital Integrado** | **Total (LLM Semântico + Heurística)** | **Gratuito e Livre** | **Sim, via WebSockets full-duplex** | **Rigorosa (chat privado, dados restritos)** |

*Fonte: Elaborado pelos autores (2026).*

---

<div style="page-break-after: always;"></div>

# 4 JUSTIFICATIVA E RELEVÂNCIA ACADÊMICA

## 4.1 Fundamentação legal e normativa

O desenvolvimento do sistema O Encontrei! encontra respaldo em um conjunto robusto de dispositivos constitucionais, leis federais e diretrizes educacionais que impõem às instituições o dever de promover ambientes justos, seguros e tecnologicamente integrados, conforme demonstrado na Tabela 3.

**Tabela 3 – Base legal do projeto O Encontrei!**

| Instrumento Legal | Disposição Relevante |
| :--- | :--- |
| Constituição Federal de 1988, Art. 205 e Art. 227 | Estabelece a educação como direito de todos e dever do Estado, preconizando a proteção integral à criança e ao jovem e a garantia de condições materiais para sua permanência escolar. |
| Lei Federal nº 10.406/2002 (Código Civil Brasileiro), Arts. 1.233 a 1.237 | Regulamenta a figura jurídica da Descoberta da coisa achada, prescrevendo expressamente a obrigação de restituição do bem ao seu dono legítimo ou à autoridade competente. |
| Lei nº 13.709/2018 – Lei Geral de Proteção de Dados (LGPD) | Define as salvaguardas para o tratamento de dados pessoais de estudantes, vedando a exposição indiscriminada de contatos e exigindo consentimento explícito e finalidade legítima. |
| Lei Federal nº 12.965/2014 – Marco Civil da Internet | Assegura a inviolabilidade da intimidade e o sigilo das comunicações privadas na internet em território brasileiro. |
| Lei nº 8.069/1990 – Estatuto da Criança e do Adolescente (ECA) | Impõe o dever de tutela e proteção integral dos menores contra exposição abusiva ou situações que causem constrangimento público. |

*Fonte: Elaborado pelos autores (2026).*

## 4.2 Relevância tecnológica e inovação da abordagem

No âmbito da formação técnica em Informática e Desenvolvimento de Sistemas, o projeto destaca-se por transcender as abordagens acadêmicas elementares (baseadas em operações CRUD simples) e introduzir conceitos arquiteturais de ponta:

1. **Processamento Semântico com IA:** Implementação de correspondência vetorial e contextual via Large Language Models (LLM Qwen 2.5 e Meta Llama 3.1) conectados via OpenRouter API, superando as deficiências de buscas literais por palavras-chave exatas.
2. **Reatividade e Tempo Real:** Substituição do modelo ineficiente de consultas periódicas (*polling*) por canais de comunicação bidirecional contínuos com WebSockets (Socket.io), viabilizando trocas instantâneas de mensagens e notificações.
3. **Engenharia de Software de Alta Coesão:** Aplicação da Vertical Slice Architecture (VSA), organizando o código em funcionalidades autônomas e mitigando o acoplamento entre módulos.

---

# 5 OBJETIVOS

## 5.1 Objetivo geral

Projetar, desenvolver e validar a plataforma de software web e mobile **O Encontrei!**, orientada à centralização, catalogação, cruzamento semântico por inteligência artificial e facilitação da devolução segura de objetos perdidos e achados na comunidade da Escola Estadual Governador Milton Campos, promovendo a solidariedade e a responsabilidade cívica de modo gratuito, intuitivo e em total conformidade com a LGPD.

## 5.2 Objetivos específicos

a) Projetar e implementar uma API RESTful escalável e robusta em Node.js e Express, estruturada sob a arquitetura de Fatias Verticais (Vertical Slice Architecture);  
b) Modelar e implementar o esquema relacional no PostgreSQL via Prisma ORM, contemplando usuários, pertences, correspondências (*matches*), mensagens de chat e notificações;  
c) Desenvolver algoritmo de cruzamento híbrido (*matching score*) combinando análise heurística por dicionários locais e avaliação contextual via IA (OpenRouter LLM), gerando probabilidade de 0 a 100;  
d) Estruturar ambiente de comunicação privativa em tempo real com WebSockets (Socket.io), garantindo chat direto entre as partes e emissão imediata de alertas de compatibilidade;  
e) Desenvolver interface responsiva e reativa em React 19, Vite e TailwindCSS v4, com suporte a Progressive Web App (PWA) e empacotamento nativo Android via Capacitor;  
f) Implementar painel administrativo com rotas aninhadas e relatórios gerenciais executivos automatizados por IA para a gestão escolar;  
g) Assegurar proteção de dados dos estudantes por meio de autenticação JWT, senhas cifradas com BcryptJS e ambiente controlado de diálogo sem divulgação forçada de números celulares.

---

<div style="page-break-after: always;"></div>

# 6 VISÃO E MISSÃO DO PROJETO

**Visão:** Consolidar-se como a principal plataforma de cidadania e recuperação inteligente de pertences em ambientes acadêmicos no Brasil, transformando escolas em ecossistemas de honestidade, empatia e sustentabilidade.

**Missão:** Reconectar com celeridade pessoas e seus pertences em ambientes escolares e universitários, promovendo a solidariedade e prevenindo o desperdício material por meio de tecnologia acessível, inteligente e centrada no ser humano.

**Tabela 4 – Valores institucionais do projeto O Encontrei!**

| Valor Institucional | Descrição e Aplicação no Projeto |
| :--- | :--- |
| **Solidariedade e Cidadania** | Estimular a prática ativa da honestidade e o sentimento de pertencimento comunitário entre estudantes e servidores. |
| **Transparência e Ética** | Manter processos auditáveis de devolução, evitando apropriações indevidas e garantindo a verdade factual de cada registro. |
| **Privacidade e Proteção de Dados** | Cumprir com rigor a LGPD, preservando os contatos e a identidade dos estudantes contra assédios ou acessos desautorizados. |
| **Inovação com Propósito Social** | Aplicar recursos de última geração em inteligência artificial para resolver dores reais e cotidianas da escola pública. |
| **Sustentabilidade Material** | Combater a cultura do descarte precoce, preservando recursos financeiros das famílias e reduzindo o acúmulo de resíduos. |

*Fonte: Elaborado pelos autores (2026).*

---

# 7 SOLUÇÃO PROPOSTA: O SISTEMA O ENCONTREI!

## 7.1 Conceito e arquitetura geral

O sistema **O Encontrei!** foi concebido como um ecossistema digital desacoplado composto por uma camada cliente SPA reativa e uma API RESTful centralizada, suportada por banco de dados relacional e serviços autônomos de Inteligência Artificial e Mensageria Instantânea.

```
+-----------------------------------------------------------------------------------+
|                            CLIENTES (FRONTEND)                                    |
|   +---------------------------------------+   +-------------------------------+   |
|   |         Web App (React 19 + Vite)     |   | Mobile Nativo (APK Capacitor) |   |
|   +---------------------------------------+   +-------------------------------+   |
+------------------------------------------+----------------------------------------+
                                           |  (HTTPS / REST + WSS / WebSockets)
                                           v
+-----------------------------------------------------------------------------------+
|                      CAMADA DE SERVIÇOS (BACKEND NODE.JS)                         |
|   +---------------------------------------------------------------------------+   |
|   |                     Vertical Slice Architecture (VSA)                     |   |
|   |  [Autenticação]  [Itens/Upload]  [Matching IA]  [Chat Socket]  [Admin]    |   |
|   +---------------------------------------------------------------------------+   |
+---------------------+-------------------------------+-----------------------------+
                      |                               |
                      v                               v
+-----------------------------------+   +-------------------------------------------+
|       PERSISTÊNCIA RELACIONAL     |   |         INTELIGÊNCIA ARTIFICIAL           |
|      PostgreSQL (Neon Cloud)      |   |        OpenRouter API (Qwen / Llama)      |
|    Gerenciado via Prisma ORM      |   |  - Análise Semântica  - Classificação     |
+-----------------------------------+   +-------------------------------------------+
```

A camada cliente é estruturada em **React 19** impulsionada pela ferramenta de build **Vite 6** e estilizada com **TailwindCSS v4**, contando com gerenciamento de estado global unificado via **Zustand 5**. O backend executa em **Node.js** com framework **Express**, orquestrado sob o padrão **Vertical Slice Architecture (VSA)**, onde cada funcionalidade contém suas próprias rotas, controladores e regras negociais, conferindo alta coesão e isolamento de falhas.

A persistência de dados é assegurada pelo **PostgreSQL 16** (com instâncias locais em Docker e nuvem serverless no Neon.tech), acessado exclusivamente através do **Prisma ORM**, que garante tipagem estática e blindagem contra ataques de injeção de SQL. A comunicação em tempo real apoia-se no motor de eventos **Socket.io**, enquanto as chamadas cognitivas de linguagem natural são intermediadas pela API OpenRouter.

## 7.2 Fluxo de funcionamento

O ciclo operacional completo do sistema estrutura-se em quatro macroetapas:

1. **Cadastro e Auto-Detalhamento com IA:** O usuário (aluno, professor ou funcionário) registra um pertence indicando se foi PERDIDO ou ENCONTRADO, informando local aproximado, data e efetuando upload da imagem via Multer. O módulo de IA analisa o texto, sugere a categoria adequada e aprimora a descrição sem alucinações.
2. **Matching Semântico Híbrido:** Imediatamente após a inserção do registro, o serviço de matching compara o novo item com os itens ativos de categoria e status complementares. O score combina proximidade textual, categorias, localidade, intervalo de datas e a inferência semântica calculada pelo LLM.
3. **Notificação em Tempo Real:** Ao detectar compatibilidade igual ou superior a 70% (score ≥ 70), o backend grava a correspondência na tabela `Match` e dispara eventos instantâneos via Socket.io para ambos os usuários.
4. **Chat Protegido e Confirmação de Devolução:** As partes iniciam uma sessão de chat privativo dentro do ambiente seguro da plataforma para confirmar detalhes peculiares do objeto. Uma vez entregue o pertence, aciona-se o botão de confirmação, arquivando o item com status DEVOLVIDO e concedendo pontos de reputação ao usuário que efetuou a entrega solidária.

---

<div style="page-break-after: always;"></div>

## 7.3 Regras de negócio críticas

**Tabela 5 – Regras de negócio críticas do sistema O Encontrei!**

| Regra de Negócio | Descrição da Regra | Fundamentação e Propósito |
| :--- | :--- | :--- |
| **Limiar de Compatibilidade (Score ≥ 70)** | Notificações ativas de correspondência somente são emitidas se o score híbrido for igual ou superior a 70%. | Evita saturação do usuário com notificações espúrias e falsos positivos. |
| **Anonimização de Contato Externo** | A plataforma não expõe abertamente e-mails, endereços ou telefones pessoais nos murais de itens. | Proteção à integridade física e privacidade dos menores (LGPD e ECA). |
| **Comprovação de Propriedade do Item** | Para reaver o pertence, o proprietário deve informar detalhes específicos não visíveis na foto pública (ex.: arranhões, conteúdo de estojos). | Previne golpes de apropriação indevida e reivindicações falsas. |
| **Gamificação por Reputação Positiva** | Usuários que registram itens achados e concluem devoluções acumulam pontos de reputação auditáveis em seu perfil. | Estímulo à prática reiterada da honestidade e cidadania comunitária. |
| **Encerramento de Ciclo (Status DEVOLVIDO)** | Uma vez confirmada a devolução, o item passa para o status DEVOLVIDO, desativando novos matches e arquivando o chat. | Manutenção da integridade da base de dados e clareza nos inventários ativos. |

*Fonte: Elaborado pelos autores (2026).*

## 7.4 Especificação de Requisitos Funcionais (RF01 a RF10)

**Tabela 6 – Matriz de Requisitos Funcionais do sistema O Encontrei!**

| ID | Nome do Requisito | Descrição Detalhada | Ator Principal |
| :--- | :--- | :--- | :--- |
| **RF01** | Autenticação e Gestão de Contas | Cadastro, autenticação com JWT e controle de permissões por perfis (ALUNO, PROFESSOR, FUNCIONARIO, ADMIN). | Todos os Usuários |
| **RF02** | Cadastro de Itens com Upload de Fotos | Publicação de itens perdidos ou encontrados com título, descrição, categoria, local e fotos processadas pelo Multer. | Usuário Cadastrado |
| **RF03** | Auto-Categorização e Descrição por IA | Assistência inteligente para enquadrar o item em categorias normatizadas e aprimorar a redação da descrição. | Sistema / IA |
| **RF04** | Algoritmo de Matching Híbrido | Cruzamento automático entre itens perdidos e encontrados calculando índice de similaridade de 0 a 100 via LLM. | Sistema |
| **RF05** | Emissão de Notificações em Tempo Real | Notificação imediata aos usuários via WebSockets (Socket.io) sobre correspondências identificadas e novas mensagens. | Sistema |
| **RF06** | Chat Instantâneo Privado | Canal de mensagens em tempo real vinculado ao registro de Match para comunicação segura e alinhamento da devolução. | Usuários Envolvidos |
| **RF07** | Confirmação e Registro de Devolução | Ação de encerramento do processo com atualização do status para DEVOLVIDO e atribuição de pontuação de reputação. | Usuários do Match |
| **RF08** | Assistente Virtual Integrado (EncontreiBot) | Chatbot com IA para tirar dúvidas dos alunos, consultar itens ativos e fornecer diretrizes sobre o protocolo de achados. | Estudante / Usuário |
| **RF09** | Painel Administrativo com Rotas Aninhadas | Interface com visualização gerencial de métricas, moderação de itens impróprios e edição de dados de usuários. | Administrador |
| **RF10** | Relatórios Executivos Automatizados por IA | Geração dinâmica de diagnósticos gerenciais para a direção escolar sobre taxas de perda, locais críticos e devoluções. | Administrador / Direção |

*Fonte: Elaborado pelos autores (2026).*

---

<div style="page-break-after: always;"></div>

## 7.5 Especificação de Requisitos Não Funcionais (RNF01 a RNF10)

**Tabela 7 – Matriz de Requisitos Não Funcionais do sistema O Encontrei!**

| ID | Nome do Requisito | Categoria | Descrição Detalhada |
| :--- | :--- | :--- | :--- |
| **RNF01** | Usabilidade e Design Responsivo | Usabilidade | Interface orientada ao conceito Mobile-First com TailwindCSS v4, acessível em smartphones, tablets e desktops com alto contraste. |
| **RNF02** | Tempo de Resposta e Desempenho | Desempenho | Respostas da API RESTful em menos de 300ms sob carga normal e entrega de mensagens em WebSockets em latência inferior a 150ms. |
| **RNF03** | Criptografia e Segurança | Segurança | Criptografia irreversível de senhas com Salt/BcryptJS, sessões autenticadas por JWT assinados e canais HTTPS/WSS. |
| **RNF04** | Privacidade e Conformidade LGPD | Conformidade | Armazenamento restrito de dados dos menores com exigência formal de concordância aos Termos de Uso e anonimização de dados pessoais. |
| **RNF05** | Disponibilidade e Resiliência | Confiabilidade | Índice de disponibilidade (uptime) superior a 99,5%, viabilizado por instâncias de banco de dados distribuídas (Neon Serverless). |
| **RNF06** | Arquitetura Modular (VSA) | Arquitetura | Backend estruturado em Fatias Verticais (Vertical Slice Architecture), isolando controladores, regras e modelos de cada funcionalidade. |
| **RNF07** | Portabilidade e Suporte PWA / Nativo | Portabilidade | Aplicação web progressiva (PWA) instalável diretamente na tela inicial e empacotável como APK Android nativo via Capacitor. |
| **RNF08** | Otimização de Carregamento (Code Splitting) | Desempenho | Divisão dinâmica de pacotes (*lazy loading*) via `React.lazy()` e `Suspense`, reduzindo o tamanho do bundle inicial em mais de 60%. |
| **RNF09** | Rastreabilidade e Auditoria | Auditoria | Registro sistemático de data e hora de criação e modificação em todas as entidades relacionais (`criadoEm`, `atualizadoEm`). |
| **RNF10** | Containerização Completa | Manutenibilidade | Configuração de infraestrutura homogênea baseada em Docker e Docker Compose abrangendo frontend, backend e banco relacional. |

*Fonte: Elaborado pelos autores (2026).*

---

<div style="page-break-after: always;"></div>

## 7.6 Demonstração das Telas da Aplicação

Apresentam-se a seguir as telas representativas das interfaces do sistema **O Encontrei!**, evidenciando o design moderno, clean e intuitivo concebido para os usuários do ambiente acadêmico.

```
+---------------------------------------------------------------------------------+
| FIGURA 1 - INTERFACE DO CATÁLOGO DE ITENS E CADASTRO ASSISTIDO POR IA           |
+---------------------------------------------------------------------------------+
|  [ O Encontrei! ]              🔍 Buscar item...            [ 🔔 (2) ] [ Perfil ]|
|  -----------------------------------------------------------------------------  |
|  [ Todos ]  [ 🎧 Eletrônicos ]  [ 🧥 Roupas ]  [ 🎒 Material ]  [ 🏷️ Outros ]   |
|  -----------------------------------------------------------------------------  |
|  +---------------------------+  +---------------------------+                   |
|  | [ IMAGEM DO ITEM ]        |  | [ IMAGEM DO ITEM ]        |                   |
|  | Casaco de Moletom Azul    |  | Fone Bluetooth Branco     |                   |
|  | Status: PERDIDO           |  | Status: ENCONTRADO        |                   |
|  | Local: Pátio / Quadra     |  | Local: Lab de Informática |                   |
|  | Match Sugerido: 88% ✨   |  | Postado por: Aluno 3º Ano |                   |
|  | [ Ver Detalhes ]          |  | [ Entrar em Contato ]     |                   |
|  +---------------------------+  +---------------------------+                   |
|                                                                                 |
|  +---------------------------------------------------------------------------+  |
|  | 🤖 ASSISTENTE DE CADASTRO COM IA                                           |  |
|  | Título: "Garrafa Térmica Preta"                                           |  |
|  | Categoria Identificada automaticamente: GARRAFA                           |  |
|  | Sugestão da IA: "Garrafa de hidratação térmica recolhida nas proximidades|  |
|  | da biblioteca. Sem adesivos visíveis."                                   |  |
|  | [ Aceitar Sugestão e Publicar ]                                            |  |
|  +---------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------+
```
*Figura 1 – Interface do catálogo de itens com filtragem dinâmica e cadastro assistido por Inteligência Artificial. Fonte: Elaborado pelos autores (2026).*

A Figura 1 ilustra a tela inicial e a área de publicação de pertences. Observa-se a disposição responsiva dos cards com marcações claras de status (PERDIDO em vermelho suave, ENCONTRADO em verde esmeralda), além da sugestão instantânea de categoria e redação refinada gerada pelo módulo de IA.

```
+---------------------------------------------------------------------------------+
| FIGURA 2 - AMBIENTE DE CHAT EM TEMPO REAL E CONFIRMAÇÃO DE DEVOLUÇÃO            |
+---------------------------------------------------------------------------------+
|  < Voltar para Matches       Conversando com: Carlos Silva (3º B)       [ ℹ️ ]   |
|  Referência: Casaco de Moletom Azul (Compatibilidade semântica: 92%)           |
|  -----------------------------------------------------------------------------  |
|                                                                                 |
|   [ Carlos Silva - 10:14 ]                                                      |
|   Olá! Encontrei um casaco azul marinho ontem na arquibancada da quadra.        |
|                                                                                 |
|                                            [ Você - 10:15 ]                     |
|                                            Oi Carlos! O meu tem um rasgadinho   |
|                                            pequeno na costura interna do bolso. |
|                                                                                 |
|   [ Carlos Silva - 10:16 ]                                                      |
|   É esse mesmo! O zíper é prateado. Podemos marcar no recreio na sala dos       |
|   professores para eu te entregar?                                              |
|                                                                                 |
|  -----------------------------------------------------------------------------  |
|  [ 🤝 CONFIRMAR DEVOLUÇÃO DO ITEM ] -> Atualiza status e pontua reputação       |
|  -----------------------------------------------------------------------------  |
|  [ Digite sua mensagem aqui...                                      ] [ Enviar ]|
+---------------------------------------------------------------------------------+
```
*Figura 2 – Interface do chat em tempo real via WebSockets com identificação mútua e botão de confirmação de entrega. Fonte: Elaborado pelos autores (2026).*

A Figura 2 retrata o canal seguro de comunicação entre os usuários. A interface fornece contexto imediato do pertencimento com score de compatibilidade, assegura troca de mensagens criptografadas e disponibiliza o gatilho formal de conclusão da devolução.

---

<div style="page-break-after: always;"></div>

# 8 BENEFÍCIOS DO SISTEMA

**Tabela 8 – Benefícios para a comunidade escolar e a sociedade**

| Público-Alvo | Benefício Principal | Impacto Social / Operacional |
| :--- | :--- | :--- |
| **Estudantes (Proprietários)** | Agilidade na Localização e Resgate | Eliminação da sensação de abandono, recuperação rápida de bens essenciais e redução do impacto financeiro pessoal. |
| **Estudantes (Achadores)** | Incentivo Cívico e Facilidade | Canal seguro e sem constrangimento para fazer a entrega, valorizado pelo sistema comunitário de pontuação de reputação. |
| **Corpo Docente e Funcionários** | Desobstrução Operacional | Fim das interrupções de aulas e atividades pedagógicas motivadas por buscas desesperadas de objetos em sala. |
| **Gestão Escolar e Secretaria** | Desafogo Administrativo e Espacial | Eliminação de pilhas desordenadas de agasalhos e garrafas, com histórico digital auditável de todas as entregas realizadas. |
| **Famílias e Responsáveis** | Proteção Financeira e Valores Éticos | Redução de custos inesperados com a reposição de itens e fortalecimento da educação ética dos estudantes em ambiente prático. |

*Fonte: Elaborado pelos autores (2026).*

---

# 9 O QUE FOI CONSTRUÍDO: PROTÓTIPO FUNCIONAL

O protótipo funcional plenamente operacional do sistema **O Encontrei!** compreende:

- **Servidor Backend em Node.js / Express:** API RESTful modularizada com 7 controladores principais (`autenticacao`, `itens`, `matching`, `chat`, `notificacoes`, `admin` e `ia`), middlewares de upload com Multer e validação de tokens JWT;
- **Banco de Dados Relacional PostgreSQL:** Modelagem composta por 5 entidades relacionais mapeadas com **Prisma ORM** (`Usuario`, `Item`, `Match`, `Mensagem` e `Notificacao`), garantindo persistência transacional com suporte a Docker Compose e Neon Serverless Cloud;
- **Serviço de IA Integrado (OpenRouter):** Módulo de processamento cognitivo utilizando os modelos de linguagem Qwen 2.5 e Meta Llama 3.1 para cálculo do índice de compatibilidade semântica (0 a 100), classificação heurística com dicionários e assistente conversacional inteligente (EncontreiBot);
- **Motor WebSockets em Tempo Real (Socket.io):** Servidor de eventos full-duplex gerenciando salas privativas por usuário e por match, emissão de notificações imediatas e confirmação de mensagens entregues e lidas;
- **Frontend SPA Moderno (React 19 + Vite 6 + TailwindCSS v4):** Aplicação de alta performance otimizada com técnicas de carregamento preguiçoso (*lazy loading*) via `React.lazy()`, roteamento aninhado (*nested routes*) no painel de administração e store global via Zustand;
- **Multiplataforma e Empacotamento Mobile:** Configuração completa como Progressive Web App (PWA) instalável via Service Worker e manifesto, além de configuração de compilação nativa Android com Capacitor.

---

<div style="page-break-after: always;"></div>

# 10 REQUISITOS PARA IMPLEMENTAÇÃO COMPLETA

Para a expansão em escala corporativa e adoção oficial pelas Secretarias Estadual e Municipal de Educação, o roadmap prevê as seguintes etapas:

1. **Visão Computacional Multimodal (Embedding de Imagens):** Integração de modelos de visão computacional (como CLIP ou YOLO) para extrair vetores visuais das fotos enviadas, permitindo confrontar formatos, padrões de tecido, cores e logotipos mesmo em descrições incompletas;
2. **Notificações Push Nativas (FCM / APNs):** Implementação de serviço de mensageria em segundo plano via Firebase Cloud Messaging para smartphones fechados ou em tela de bloqueio;
3. **Etiquetagem Inteligente com QR Code Escolar:** Geração de identificadores exclusivos em QR Code impressos para etiquetagem prévia de casacos de uniforme e materiais escolares no ato da matrícula;
4. **Integração com Sistemas de Gestão Acadêmica (SGE/SEEMG):** Conexão das credenciais escolares com os sistemas oficiais de gestão escolar de Minas Gerais para autenticação única (Single Sign-On - SSO);
5. **Módulo de Doação Social Regulada:** Fluxo automatizado de doação solidária para instituições filantrópicas dos pertences não reclamados após o decurso do prazo legal previsto no Código Civil (Art. 1.233).

---

# 11 ALINHAMENTO COM OS ODS – AGENDA 2030/ONU

A plataforma **O Encontrei!** alinha-se de maneira estreita às metas globais estabelecidas pela Organização das Nações Unidas (ONU) no âmbito da Agenda 2030 para o Desenvolvimento Sustentável, conforme sintetizado na Tabela 9.

**Tabela 9 – Alinhamento com os Objetivos de Desenvolvimento Sustentável da ONU**

| ODS | Título do Objetivo | Alinhamento Prático com o Projeto O Encontrei! |
| :--- | :--- | :--- |
| **ODS 4** | Educação de Qualidade | **Meta 4.a:** Criar ambientes de aprendizagem seguros, inclusivos e eficazes, preservando materiais escolares essenciais ao estudo dos jovens. |
| **ODS 12** | Consumo e Produção Responsáveis | **Meta 12.5:** Reduzir substancialmente a geração de resíduos materiais pelo estímulo ao reuso, à devolução e ao combate ao descarte precoce de agasalhos e utensílios plásticos. |
| **ODS 16** | Paz, Justiça e Instituições Eficazes | **Meta 16.6:** Promover uma cultura participativa, responsável e transparente no ambiente escolar, cultivando a prática reiterada da honestidade e da cidadania solidária. |
| **ODS 9** | Indústria, Inovação e Infraestrutura | **Meta 9.b:** Fomentar a produção tecnológica nacional de base educacional, aplicando Inteligência Artificial e sistemas em nuvem no ensino técnico público. |
| **ODS 10** | Redução das Desigualdades | **Meta 10.2:** Mitigar as perdas financeiras suportadas por estudantes em situação de vulnerabilidade econômica, garantindo a recomposição gratuita de seus pertences. |

*Fonte: Elaborado pelos autores (2026).*

---

<div style="page-break-after: always;"></div>

# 12 CONSIDERAÇÕES FINAIS

O desenvolvimento da plataforma **O Encontrei!** comprova a viabilidade técnica, a solidez metodológica e a profunda relevância social da construção de soluções digitais voltadas para a resolução de demandas concretas do cotidiano escolar. A aplicação prática de paradigmas arquiteturais modernos — como a Vertical Slice Architecture, o processamento semântico por Inteligência Artificial generativa e a mensageria bidirecional via WebSockets — demonstra o potencial de estudantes do ensino técnico público de conceber e entregar sistemas com padrões de excelência equivalentes aos da indústria global de software.

Ao substituir os ineficientes e excludentes depósitos físicos de achados e perdidos por um ambiente digital inteligente, auditável, transparente e seguro, o sistema não apenas soluciona uma dor logística crônica, mas atua como um catalisador de formação cívica, estimulando a empatia, o respeito ao patrimônio coletivo e a cidadania ativa entre os estudantes. Reafirma-se, assim, a missão transformadora da Escola Estadual Governador Milton Campos na formação de técnicos qualificados, conscientes e protagonistas de inovações sociais de alto impacto.

---

<div style="page-break-after: always;"></div>

# REFERÊNCIAS

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 6023**: Informação e documentação - Referências - Elaboração. Rio de Janeiro: ABNT, 2018.

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 6024**: Informação e documentação - Numeração progressiva das seções de um documento - Apresentação. Rio de Janeiro: ABNT, 2012.

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 6027**: Informação e documentação - Sumário - Apresentação. Rio de Janeiro: ABNT, 2012.

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 14724**: Informação e documentação - Trabalhos acadêmicos - Apresentação. Rio de Janeiro: ABNT, 2011.

ASSOCIAÇÃO NACIONAL DE ADMINISTRAÇÃO ESCOLAR (ANAE). **Relatório sobre Gestão de Materiais e Eficiência Operacional em Redes de Ensino Básico**. Brasília: ANAE, 2023.

BRASIL. **Constituição da República Federativa do Brasil de 1988**. Brasília, DF: Senado Federal, 1988.

BRASIL. **Lei nº 8.069, de 13 de julho de 1990**. Dispõe sobre o Estatuto da Criança e do Adolescente e dá outras providências. Brasília, DF: Presidência da República, 1990.

BRASIL. **Lei nº 10.406, de 10 de janeiro de 2002**. Institui o Código Civil. Brasília, DF: Presidência da República, 2002.

BRASIL. **Lei nº 12.965, de 23 de abril de 2014**. Estabelece princípios, garantias, direitos e deveres para o uso da Internet no Brasil (Marco Civil da Internet). Brasília, DF: Presidência da República, 2014.

BRASIL. **Lei nº 13.709, de 14 de agosto de 2018**. Lei Geral de Proteção de Dados Pessoais (LGPD). Brasília, DF: Presidência da República, 2018.

COMITÊ GESTOR DA INTERNET NO BRASIL (CGI.br). **Pesquisa sobre o Uso das Tecnologias de Informação e Comunicação nos Domicílios Brasileiros - TIC Domicílios e TIC Kids Online Brasil 2023**. São Paulo: CGI.br, 2023.

INSTITUTO NACIONAL DE ESTUDOS E PESQUISAS EDUCACIONAIS ANÍSIO TEIXEIRA (INEP). **Censo da Educação Básica 2023: Sinopse Estatística da Educação Básica**. Brasília: INEP, 2024.

NYGARD, Michael T. **Release It!: Design and Deploy Production-Ready Software**. 2. ed. Raleigh: Pragmatic Bookshelf, 2018.

ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU). **Transformando Nosso Mundo: A Agenda 2030 para o Desenvolvimento Sustentável**. Nova York: ONU, 2015.

POSTGRESQL GLOBAL DEVELOPMENT GROUP. **PostgreSQL 16 Documentation**. 2024. Disponível em: <https://www.postgresql.org/docs/>. Acesso em: 15 fev. 2026.

PRISMA DATA INC. **Prisma Documentation: Modern ORM and Database Toolkit for Node.js & TypeScript**. 2026. Disponível em: <https://www.prisma.io/docs>. Acesso em: 15 fev. 2026.

REACT DOCUMENTATION. **React 19: The library for web and native user interfaces**. Meta Open Source, 2026. Disponível em: <https://react.dev>. Acesso em: 15 fev. 2026.

SOCKET.IO. **Real-time bidirectional event-based communication documentation**. Versão 4.x. 2026. Disponível em: <https://socket.io/docs/v4/>. Acesso em: 15 fev. 2026.

TAILWINDCSS. **Tailwind CSS v4.0: Modern utility-first CSS framework**. 2026. Disponível em: <https://tailwindcss.com/docs>. Acesso em: 15 fev. 2026.

VITE DEV. **Vite: Next Generation Frontend Tooling**. 2026. Disponível em: <https://vitejs.dev>. Acesso em: 15 fev. 2026.

