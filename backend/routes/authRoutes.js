const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Para gerar um token JWT
const router = express.Router();

// Endpoint de login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Email ou senha inválidos' });
    }

    // Verificar se a senha corresponde
    const match = await user.matchPassword(senha);
    if (!match) {
      return res.status(400).json({ message: 'Email ou senha inválidos' });
    }

    // Gerar um token JWT para o usuário
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Retornar o token para o frontend
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
});

module.exports = router;
