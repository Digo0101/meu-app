const mongoose = require('mongoose');
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

// Conectar ao MongoDB usando a variável de ambiente
const dbURI = process.env.MONGO_URI; // A URL de conexão deve estar no .env

const connectDB = async () => {
  try {
    // Conexão ao banco de dados MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1); // Encerra o processo caso haja erro na conexão
  }
};

module.exports = connectDB;
