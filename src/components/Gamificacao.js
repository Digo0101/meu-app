// src/components/Gamificacao.js
import React from 'react';
import './Gamificacao.css';

const recompensas = [
  {
    titulo: '2 Litros de Água',
    descricao: 'Parabéns! Você bebeu 2L de água hoje!',
    imagem: '/images/selo-agua.png', // Certifique-se de que as imagens existam na pasta public/images
  },
  {
    titulo: '30 Minutos de Exercício',
    descricao: 'Incrível! Você completou 30 minutos de exercícios físicos!',
    imagem: '/images/selo-exercicio.png',
  },
  {
    titulo: 'Sono de Qualidade',
    descricao: 'Ótimo! Você dormiu 8 horas!',
    imagem: '/images/selo-sono.png',
  },
  // Adicione mais recompensas conforme necessário
];

function Gamificacao() {
  return (
    <div className="gamificacao-container">
      <h2>Gamificação - Conquiste suas Recompensas!</h2>
      <div className="recompensas-grid">
        {recompensas.map((recompensa, index) => (
          <div key={index} className="recompensa-card">
            <img src={recompensa.imagem} alt={recompensa.titulo} className="recompensa-imagem" />
            <h3>{recompensa.titulo}</h3>
            <p>{recompensa.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gamificacao;
