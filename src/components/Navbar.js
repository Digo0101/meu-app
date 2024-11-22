import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Importando o useNavigate
import './Navbar.css';

function Navbar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const navigate = useNavigate(); // Inicializando o useNavigate

  const toggleSubmenu = () => {
    setSubmenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}> {/* Usando navigate aqui */}
        <h1 className="navbar-logo">VitaSync</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/apoio-usuario">Apoio ao Usuário</Link></li>
        <li 
          className="submenu"
          onMouseEnter={toggleSubmenu}
          onMouseLeave={toggleSubmenu}
        >
          <span>Conteúdos</span>
          {submenuOpen && (
            <ul className="submenu-dropdown">
              <li><Link to="/noticias">Notícias</Link></li>
              <li><Link to="/receitas">Receitas</Link></li>
              <li><Link to="/exercicios">Exercícios</Link></li>
              <li><Link to="/gamificacao">Gamificação</Link></li>
              <li><Link to="/meu-perfil">Meu Perfil</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
