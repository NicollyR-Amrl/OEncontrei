// Entry point da função serverless Vercel
try {
  require('dotenv').config();
} catch (e) {}

const app = require('../backend/src/servidor');

module.exports = app;
