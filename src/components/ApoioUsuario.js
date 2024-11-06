import React from 'react';
import './ApoioUsuario.css';

function ApoioUsuario() {
  return (
    <div className="apoio-usuario-container">
      <h1>Apoio ao Usuário</h1>
      
      <section className="suporte">
        <h2>Suporte Técnico</h2>
        <p>Para dúvidas técnicas, entre em contato com nossa equipe de suporte.</p>
        <p>Email: suporte@vitasync.com</p>
      </section>

      <section className="perguntas-frequentes">
        <h2>Perguntas Frequentes</h2>
        <ul>
          <li>Como trocar minha senha?</li>
          <li>Como posso atualizar meus dados?</li>
          <li>Como visualizar minhas conquistas?</li>
        </ul>
      </section>

      <section className="contato">
        <h2>Entre em Contato</h2>
        <p>Precisa de mais ajuda? Estamos aqui para você.</p>
        <button>Enviar Mensagem</button>
      </section>
    </div>
  );
}

export default ApoioUsuario;
