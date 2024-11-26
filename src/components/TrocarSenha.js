import React, { useState } from 'react';
import './TrocarSenha.css';

function TrocarSenha() {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleTrocarSenha = (e) => {
    e.preventDefault();
    if (novaSenha !== confirmarSenha) {
      setMensagem('As novas senhas não coincidem. Tente novamente.');
      return;
    }
    // Simula a troca de senha
    setMensagem('Senha alterada com sucesso!');
  };

  return (
    <div className="trocar-senha-container">
      <h1>Trocar Senha</h1>
      <form onSubmit={handleTrocarSenha} className="trocar-senha-form">
        <div className="form-group">
          <label htmlFor="senhaAtual">Senha Atual</label>
          <input
            type="password"
            id="senhaAtual"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="novaSenha">Nova Senha</label>
          <input
            type="password"
            id="novaSenha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmarSenha">Confirmar Nova Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Trocar Senha</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}

export default TrocarSenha;
