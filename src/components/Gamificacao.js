import React, { useState } from 'react';
import './Gamificacao.css';
import { useRecompensas } from '../context/RecompensasContext'; // Usando o hook diretamente

// Definindo as recompensas
const recompensas = [
  {
    titulo: '2 Litros de Água',
    descricao: 'Parabéns! Você bebeu 2L de água hoje!',
    imagem: '/images/agua.jpg',
  },
  {
    titulo: '30 Minutos de Exercício',
    descricao: 'Incrível! Você completou 30 minutos de exercícios físicos!',
    imagem: '/images/exercicio.jpg',
  },
  {
    titulo: 'Sono de Qualidade',
    descricao: 'Ótimo! Você dormiu 8 horas!',
    imagem: '/images/sono.jpg',
  },
  {
    titulo: 'Caminhar 1000 passos',
    descricao: 'Você conseguiu caminhar 1000 passos!',
    imagem: '/images/ca.avif',
  },
  {
    titulo: 'Meditar por 10 minutos',
    descricao: 'Ótimo, você conseguiu meditar por 10 minutos!',
    imagem: '/images/medita.jpg',
  },
  {
    titulo: 'Andar de bicicleta',
    descricao: 'Ótimo, você conseguiu andar 2km de bicicleta!',
    imagem: '/images/bici.webp',
  },
  {
    titulo: 'Jogar bola',
    descricao: 'Ótimo, você conseguiu jogar uma partida de futebol de 40 minutos!',
    imagem: '/images/bola.webp',
  },
];

function Gamificacao() {
  const { adicionarRecompensa } = useRecompensas(); // Usando o hook para acessar o contexto
  const [mensagemConquista, setMensagemConquista] = useState('');
  const [notificacaoVisivel, setNotificacaoVisivel] = useState(false);

  // Função para adicionar a recompensa ao contexto e mostrar a notificação
  const conquistarRecompensa = (recompensa) => {
    adicionarRecompensa(recompensa);
    setMensagemConquista(`Você conquistou: ${recompensa.titulo}!`);
    setNotificacaoVisivel(true);
    setTimeout(() => {
      setNotificacaoVisivel(false);
    }, 3000);
  };

  return (
    <div className="gamificacao-container">
      <h2>Gamificação - Conquiste suas Recompensas!</h2>
      {notificacaoVisivel && (
        <div className="notificacao">
          <p>{mensagemConquista}</p>
        </div>
      )}
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
