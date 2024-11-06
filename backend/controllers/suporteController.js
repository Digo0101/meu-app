// backend/controllers/suporteController.js
const Suporte = require('../models/Suporte');

exports.criarSolicitacao = async (req, res) => {
    const novaSolicitacao = new Suporte(req.body);
    await novaSolicitacao.save();
    res.json(novaSolicitacao);
};

exports.obterSolicitacoes = async (req, res) => {
    const solicitacoes = await Suporte.find();
    res.json(solicitacoes);
};
