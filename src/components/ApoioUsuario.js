import React from 'react';
import { Link } from 'react-router-dom';
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
          <li>
            <Link to="/comotrocarsenha">Como trocar minha senha?</Link>
          </li>
          <li>
            <Link to="/comoatualizardados">Como posso atualizar meus dados?</Link>
          </li>
          <li>
            <Link to="/comovisualizarconquistas">Como visualizar minhas conquistas?</Link>
          </li>
        </ul>
      </section>

      <section className="contato">
        <h2>Entre em Contato</h2>
        <p>Precisa de mais ajuda? Estamos aqui para você.</p>
        <Link to="/entreemcontato" className="contact-link">
          <button>Enviar Mensagem</button>
        </Link>
      </section>
    </div>
  );
}

export default ApoioUsuario;
