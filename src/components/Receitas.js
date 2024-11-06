// src/components/Receitas.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Receitas.css';

function Receitas() {
  const [receitas, setReceitas] = useState([
    { id: 'BolodeCaneca', nome: 'Bolo de Caneca', nivel: 'intermediario', imagem: 'https://via.placeholder.com/200' },
    { id: 'CookiesChocolate', nome: 'Cookies de Chocolate', nivel: 'facil', imagem: 'https://via.placeholder.com/200' },
    { id: 'AveiocaNutri', nome: 'Aveioca - Nutri', nivel: 'facil', imagem: 'https://via.placeholder.com/200' },
    // Adicione mais receitas conforme necessário
  ]);

  const [filtro, setFiltro] = useState('');

  const filtrarReceitas = (nivel) => {
    setFiltro(nivel);
  };

  const receitasFiltradas = filtro
    ? receitas.filter((receita) => receita.nivel === filtro)
    : receitas;

  return (
    <div className="receitas-container">
      <h1>Receitas</h1>
      <p>Número de receitas encontradas: <strong>{receitasFiltradas.length}</strong></p>

      <div className="filtro-nivel">
        <span>Filtrar por Nível:</span>
        <button onClick={() => filtrarReceitas('dificil')}>Difícil</button>
        <button onClick={() => filtrarReceitas('facil')}>Fácil</button>
        <button onClick={() => filtrarReceitas('intermediario')}>Intermediário</button>
      </div>

      <div className="receitas-grid">
        {receitasFiltradas.map((receita) => (
          <div key={receita.id} className="receita-card">
            <img src={receita.imagem} alt={receita.nome} className="receita-imagem" />
            <div className="receita-info">
              <span className="receita-nivel">{receita.nivel}</span>
              <h3>{receita.nome}</h3>
              <Link to={`/receitas/${receita.id}`}>Ver Receita</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Receitas;
