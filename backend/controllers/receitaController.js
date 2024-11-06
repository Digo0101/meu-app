// backend/controllers/receitaController.js
const Receita = require('../models/Receita');

exports.obterReceitas = async (req, res) => {
    const receitas = await Receita.find();
    res.json(receitas);
};

exports.obterReceitaPorId = async (req, res) => {
    const receita = await Receita.findById(req.params.id);
    res.json(receita);
};

exports.criarReceita = async (req, res) => {
    const novaReceita = new Receita(req.body);
    await novaReceita.save();
    res.json(novaReceita);
};
