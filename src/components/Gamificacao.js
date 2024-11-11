import React from 'react';
import './Gamificacao.css';
import { useRecompensas } from '../context/RecompensasContext'; // Usando o hook diretamente

// Definindo as recompensas
const recompensas = [
  {
    titulo: '2 Litros de Água',
    descricao: 'Parabéns! Você bebeu 2L de água hoje!',
    imagem: '/images/selo-agua.png',
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
];

function Gamificacao() {
  const { adicionarRecompensa } = useRecompensas(); // Usando o hook para acessar o contexto

  // Função para adicionar a recompensa ao contexto
  const conquistarRecompensa = (recompensa) => {
    adicionarRecompensa(recompensa);
  };

  return (
    <div className="gamificacao-container">
      <h2>Gamificação - Conquiste suas Recompensas!</h2>
      <div className="recompensas-grid">
        {recompensas.map((recompensa, index) => (
          <div key={index} className="recompensa-card">
            <img src={recompensa.imagem} alt={recompensa.titulo} className="recompensa-imagem" />
            <h3>{recompensa.titulo}</h3>
            <p>{recompensa.descricao}</p>
            <button onClick={() => conquistarRecompensa(recompensa)}>
              Conquistar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gamificacao;
