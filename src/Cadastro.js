// src/Cadastro.js
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="confirmarEmail"
          placeholder="Confirmar Email"
          value={formData.confirmarEmail}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmarSenha"
          placeholder="Confirmar Senha"
          value={formData.confirmarSenha}
          onChange={handleChange}
          required
        />
        <label>
          <input
            type="checkbox"
            name="autenticacaoEmail"
            checked={formData.autenticacaoEmail}
            onChange={handleChange}
          />
          Ativar autenticação de dois fatores para o email
        </label>
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
        <textarea
          name="condicoesMedicas"
          placeholder="Condições médicas pré-existentes"
          value={formData.condicoesMedicas}
          onChange={handleChange}
        />
        <textarea
          name="objetivos"
          placeholder="Objetivos com o site de saúde e bem-estar"
          value={formData.objetivos}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
