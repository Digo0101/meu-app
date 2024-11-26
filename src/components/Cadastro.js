import React, { useState } from 'react';
import './Cadastro.css'; // Importa o CSS do Cadastro

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    confirmarEmail: '',
    senha: '',
    confirmarSenha: '',
    autenticacaoEmail: false,
    sexo: '',
    condicoesMedicas: '',
    objetivos: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email) newErrors.email = 'Email é obrigatório';
    if (formData.email !== formData.confirmarEmail)
      newErrors.confirmarEmail = 'Os e-mails não coincidem';
    if (!formData.senha) newErrors.senha = 'Senha é obrigatória';
    if (formData.senha !== formData.confirmarSenha)
      newErrors.confirmarSenha = 'As senhas não coincidem';
    if (!formData.sexo) newErrors.sexo = 'Sexo é obrigatório';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend
      console.log(formData);
      // Limpa os campos após o envio
      setFormData({
        nome: '',
        email: '',
        confirmarEmail: '',
        senha: '',
        confirmarSenha: '',
        autenticacaoEmail: false,
        sexo: '',
        condicoesMedicas: '',
        objetivos: ''
      });
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          {errors.nome && <span className="error">{errors.nome}</span>}
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-group">
          <input
            type="email"
            name="confirmarEmail"
            placeholder="Confirmar Email"
            value={formData.confirmarEmail}
            onChange={handleChange}
            required
          />
          {errors.confirmarEmail && <span className="error">{errors.confirmarEmail}</span>}
        </div>

        <div className="input-group">
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
          {errors.senha && <span className="error">{errors.senha}</span>}
        </div>

        <div className="input-group">
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
          />
          {errors.confirmarSenha && <span className="error">{errors.confirmarSenha}</span>}
        </div>

        <div className="input-group">
          <label>
            <input
              type="checkbox"
              name="autenticacaoEmail"
              checked={formData.autenticacaoEmail}
              onChange={handleChange}
            />
            Ativar autenticação de dois fatores para o email
          </label>
        </div>

        <div className="input-group">
          <select
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            required
          >
            <option value="">Selecione seu sexo</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
          {errors.sexo && <span className="error">{errors.sexo}</span>}
        </div>

        <div className="input-group">
          <textarea
            name="condicoesMedicas"
            placeholder="Condições médicas pré-existentes"
            value={formData.condicoesMedicas}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <textarea
            name="objetivos"
            placeholder="Objetivos com o site de saúde e bem-estar"
            value={formData.objetivos}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
