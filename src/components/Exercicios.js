import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import './Exercicios.css';
import { ListadeExercicios } from './data/exerciciosData'; // Importando de exerciciosData

function Exercicios() {
  const navigate = useNavigate(); // Inicializando o useNavigate

  const handleLearnMore = (id) => {
    // Redireciona para a página de detalhes do exercício
    navigate(`/exercicio/${id}`);
  };

  return (
    <div className="exercicios-container">
      {ListadeExercicios.map((exercicio, index) => (
        <div key={index} className="exercise-card">
          <img src={exercicio.imgSrc} alt={exercicio.titulo} className="exercise-image" />
          <div className="exercise-info">
            <h3>{exercicio.titulo}</h3>
            <button className="learn-more-btn" onClick={() => handleLearnMore(index)}>
              Saiba mais
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Exercicios;
