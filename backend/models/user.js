const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Para fazer o hash da senha

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

// Antes de salvar o usuário, vamos fazer o hash da senha
userSchema.pre('save', async function (next) {
  if (this.isModified('senha')) {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
  next();
});

// Método para comparar a senha informada com a senha salva no banco de dados
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.senha);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
