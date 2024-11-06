const express = require('express');
const router = express.Router();
const exerciciosController = require('../controllers/exerciciosController');

router.get('/', exerciciosController.listarExercicios);
router.get('/:id', exerciciosController.detalhesExercicio);

module.exports = router;
