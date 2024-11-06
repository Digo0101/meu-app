const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const receitasRoutes = require('./routes/receitasRoutes');
const exerciciosRoutes = require('./routes/exerciciosRoutes');
const suporteRoutes = require('./routes/suporteRoutes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

app.use('/api/usuarios', userRoutes);
app.use('/api/receitas', receitasRoutes);
app.use('/api/exercicios', exerciciosRoutes);
app.use('/api/suporte', suporteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
