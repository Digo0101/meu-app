const express = require('express');
const router = express.Router();
const receitasController = require('../controllers/receitasController');

router.get('/', receitasController.listarReceitas);
router.get('/:id', receitasController.detalhesReceita);

module.exports = router;
