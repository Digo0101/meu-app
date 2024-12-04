import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  useEffect(() => {
    if (submenuRef.current) {
      const rect = submenuRef.current.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        submenuRef.current.style.left = 'auto';
        submenuRef.current.style.right = '0';
      } else {
        submenuRef.current.style.left = '';
        submenuRef.current.style.right = '';
      }
    }
  }, [submenuOpen]);

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        <h1 className="navbar-logo">VitaSync</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/home">Tela de inicio</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/apoio-usuario">Apoio ao Usuário</Link></li>
        <li
          className="submenu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Mais</span>
          {submenuOpen && (
            <ul className="submenu-dropdown" ref={submenuRef}>
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
