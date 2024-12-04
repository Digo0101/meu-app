import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient'; // Importe o cliente do Supabase
import './Cadastro.css';

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
    objetivos: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        // Inserção do usuário na tabela de users
        const { error: insertError } = await supabase
          .from('users') // Nome da tabela no Supabase
          .insert([{
            nome: formData.nome,
            email: formData.email,
            senha: formData.senha, // Lembre-se de usar hash de senha no backend!
            sexo: formData.sexo,
            condicoes_medicas: formData.condicoesMedicas,
            objetivos: formData.objetivos,
            autenticacao_email: formData.autenticacaoEmail,
          }]);

        if (insertError) {
          console.error('Erro ao cadastrar:', insertError);
          alert('Ocorreu um erro ao realizar o cadastro. Tente novamente.');
        } else {
          console.log('Cadastro realizado com sucesso');
          
          // Realizar login após cadastro
          const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.senha,
          });

          if (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login: ' + error.message);
          } else {
            console.log('Login realizado com sucesso:', data);
            navigate('/meu-perfil'); // Redireciona para a página do perfil
          }

          // Limpar o formulário após sucesso
          setFormData({
            nome: '',
            email: '',
            confirmarEmail: '',
            senha: '',
            confirmarSenha: '',
            autenticacaoEmail: false,
            sexo: '',
            condicoesMedicas: '',
            objetivos: '',
          });
        }
      } catch (err) {
        console.error('Erro inesperado:', err);
        alert('Erro inesperado. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
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

        <button type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
