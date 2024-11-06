// backend/models/Receita.js
const mongoose = require('mongoose');

const ReceitaSchema = new mongoose.Schema({
    nome: String,
    nivel: String,
    imagem: String,
    passos: [String],
});

module.exports = mongoose.model('Receita', ReceitaSchema);
