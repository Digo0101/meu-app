// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">VitaSync</h1>
      <ul className="navbar-links">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/ApoioUsuario">ApoioUsuario </Link></li>
        <li 
          className="submenu"
          onMouseEnter={toggleSubmenu}
          onMouseLeave={toggleSubmenu}
        >
          <span>Conteúdos</span>
          {submenuOpen && (
            <ul className="submenu-dropdown">
              <li><Link to="/Noticias">Notícias</Link></li>
              <li><Link to="/receitas">Receitas</Link></li>
              <li><Link to="/Exercicios">Exercícios</Link></li>
              <li><Link to="/Gamificacao">Gamificação </Link></li>
              <li><Link to="/MeuPerfil">MeuPerfil </Link></li>
              

              
              
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
