import React, { useState } from 'react';
import { useRecompensas } from '../context/RecompensasContext';

import './MeuPerfil.css';

function MeuPerfil() {
  const [email, setEmail] = useState('seuemail@exemplo.com');
  const [senha, setSenha] = useState('');
  const { recompensas } = useRecompensas(); // Obtenha as recompensas do contexto

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSenhaChange = (e) => setSenha(e.target.value);

  return (
    <div className="meu-perfil-container">
      <h1>Meu Perfil</h1>
      
      <div className="foto-perfil">
        <img src="caminho/para/foto.jpg" alt="Foto do usuário" />
      </div>

      <section className="informacoes-cadastradas">
        <h2>Dados Cadastrados</h2>
        <p>Nome: João Silva</p>
        <p>Email: {email}</p>
      </section>

      <section className="trocar-dados">
        <h2>Trocar Dados</h2>
        <div>
          <label>Novo Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Nova Senha:</label>
          <input type="password" value={senha} onChange={handleSenhaChange} />
        </div>
        <button>Salvar Alterações</button>
      </section>

      <section className="conquistas">
        <h2>Conquistas da Gamificação</h2>
        {recompensas.length > 0 ? (
          <ul>
            {recompensas.map((recompensa, index) => (
              <li key={index}>
                Selo: {recompensa.titulo} - {recompensa.descricao}
              </li>
            ))}
          </ul>
        ) : (
          <p>Você ainda não conquistou nenhuma recompensa.</p>
        )}
      </section>

      <section className="atividades-feitas">
        <h2>Atividades Realizadas</h2>
        {recompensas.length > 0 ? (
          recompensas.map((recompensa, index) => (
            <p key={index}>{recompensa.titulo}</p>
          ))
        ) : (
          <p>Você ainda não registrou atividades.</p>
        )}
      </section>

      <section className="motivacao">
        <h2>Motivação</h2>
        <p>Mantenha-se focado nos seus objetivos! Cada passo conta.</p>
      </section>

      <section className="metas">
        <h2>Metas</h2>
        <p>Meta de Saúde: 10 mil passos diários</p>
        <p>Meta de Nutrição: 2 frutas por dia</p>
      </section>
    </div>
  );
}

export default MeuPerfil;
