// src/components/Exercicios.js
import React from 'react';
import './Exercicios.css';

const ListadeExercicios = [
  { titulo: "Caminhada", imgSrc: "/path/to/caminhada.jpg" },
  { titulo: "Supino", imgSrc: "/path/to/supino.jpg" },
  // Adicione mais exercícios aqui
];

function Exercicios() {
  return (
    <div className="exercicios-container">
      {ListadeExercicios.map((exercicio, index) => (
        <div key={index} className="exercise-card">
          <img src={exercicio.imgSrc} alt={exercicio.titulo} className="exercise-image" />
          <div className="exercise-info">
            <h3>{exercicio.titulo}</h3>
            <button className="learn-more-btn">Saiba mais</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Exercicios;
