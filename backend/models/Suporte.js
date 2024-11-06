// backend/models/Suporte.js
const mongoose = require('mongoose');

const SuporteSchema = new mongoose.Schema({
    usuarioId: mongoose.Schema.Types.ObjectId,
    descricao: String,
    status: { type: String, default: 'pendente' },
});

module.exports = mongoose.model('Suporte', SuporteSchema);
