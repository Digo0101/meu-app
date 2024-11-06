// backend/controllers/exercicioController.js
const Exercicio = require('../models/Exercicio');

exports.obterExercicios = async (req, res) => {
    const exercicios = await Exercicio.find();
    res.json(exercicios);
};

exports.criarExercicio = async (req, res) => {
    const novoExercicio = new Exercicio(req.body);
    await novoExercicio.save();
    res.json(novoExercicio);
};
