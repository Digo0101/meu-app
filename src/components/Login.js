import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form>
          <div className="input-group">
            <label>Email *</label>
            <input type="email" placeholder="Digite seu email" required />
          </div>
          <div className="input-group">
            <label>Senha *</label>
            <input type="password" placeholder="Digite uma senha" required />
          </div>
          <div className="captcha">
            <input type="checkbox" />
            <label>Não sou um robô</label>
          </div>
          <div className="button-group">
            <button type="submit" className="login-button">Login</button>
            <button type="button" className="register-button">Cadastrar-se</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
