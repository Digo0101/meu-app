const express = require('express');
const router = express.Router();
const suporteController = require('../controllers/suporteController');

router.post('/enviar', suporteController.enviarMensagem);

module.exports = router;
