// backend/controllers/userController.js
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.cadastro = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(senha, 10);
        const novoUsuario = new Usuario({ nome, email, senha: hashedPassword });
        await novoUsuario.save();
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao cadastrar usuário' });
    }
};

exports.login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario || !await bcrypt.compare(senha, usuario.senha)) {
            return res.status(400).json({ error: 'Credenciais inválidas' });
        }
        const token = jwt.sign({ id: usuario._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Erro no login' });
    }
};

// Funções para atualizar dados do usuário e gerenciar conquistas podem ser adicionadas aqui
