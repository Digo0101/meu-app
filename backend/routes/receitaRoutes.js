// backend/routes/receitasRoutes.js
const express = require('express');
const router = express.Router();

// Exemplo de rota para listar receitas
router.get('/', (req, res) => {
  res.send('Lista de receitas');
});

// Exportando as rotas para serem usadas no server.js
module.exports = router;
