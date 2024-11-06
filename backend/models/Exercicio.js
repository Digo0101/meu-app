// backend/models/Exercicio.js
const mongoose = require('mongoose');

const ExercicioSchema = new mongoose.Schema({
    nome: String,
    imagem: String,
    descricao: String,
    categoria: String,
});

module.exports = mongoose.model('Exercicio', ExercicioSchema);
