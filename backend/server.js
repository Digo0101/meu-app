const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

const exerciciosRoutes = require('./routes/exerciciosRoutes');
const suporteRoutes = require('./routes/suporteRoutes');
const authRoutes = require('./routes/authRoutes'); // Importando as rotas de autenticação

// Carregar variáveis de ambiente
dotenv.config();

// Inicializando o Express
const app = express();

// Middleware para converter corpo das requisições em JSON
app.use(express.json());

// Conectando ao MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Definir as rotas
app.use('/api/usuarios', userRoutes);
app.use('/api/receitas', receitasRoutes);
app.use('/api/exercicios', exerciciosRoutes);
app.use('/api/suporte', suporteRoutes);
app.use('/api/auth', authRoutes); // Usando a rota de autenticação

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Ocorreu um erro interno no servidor' });
});

// Iniciando o servidor na porta 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
