import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login realizado');
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
