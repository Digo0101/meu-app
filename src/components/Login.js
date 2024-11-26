import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        // Armazenar o token JWT no localStorage ou contexto global
        localStorage.setItem('token', data.token);
        console.log('Login realizado');
        navigate('/meu-perfil'); // Redireciona para a página de perfil
      } else {
        setError(data.message); // Exibe mensagem de erro
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao fazer login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Digite seu email" 
              required 
            />
          </div>
          <div className="input-group">
            <label>Senha:</label>
            <input 
              type="password" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              placeholder="Digite sua senha" 
              required 
            />
          </div>
          <button type="submit" className="login-btn">Entrar</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        <button 
          className="link-btn" 
          onClick={() => navigate('/como-trocar-senha')}
        >
          Trocar Senha
        </button>
      </div>
    </div>
  );
}

export default Login;
