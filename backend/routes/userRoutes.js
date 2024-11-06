// backend/routes/userRoutes.js
const express = require('express');
const { cadastro, login } = require('../controllers/userController');
const router = express.Router();

router.post('/cadastro', cadastro);
router.post('/login', login);

module.exports = router;
