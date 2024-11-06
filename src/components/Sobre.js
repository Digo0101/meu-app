import React from 'react';
import './Sobre.css';


function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-header">
       
        <h1>Sobre o Vitasync</h1>
        <p>
          O Vitasync é um projeto dedicado a trazer saúde e conforto aos nossos usuários, com uma equipe dedicada e motivada para oferecer o melhor em tecnologia e bem-estar. 
        </p>
      </div>
      
      <h2>Nosso time</h2>
      <p>Aqui podemos ver nosso time de desenvolvedores que estão nessa batalha de trazer saúde e conforto a vocês, todos sendo muito dedicados.</p>
      
      <div className="time-container">
        <div className="membro">
          <img src="https://via.placeholder.com/150" alt="Rodrigo Martínez" />
          <h3>Rodrigo Martínez</h3>
          <p>Art Director</p>
        </div>
        <div className="membro">
          <img src="https://via.placeholder.com/150" alt="Lucas Vilas" />
          <h3>Lucas Vilas</h3>
          <p>Tech Lead</p>
        </div>
        <div className="membro">
          <img src="https://via.placeholder.com/150" alt="Murilo Enrico" />
          <h3>Murilo Enrico</h3>
          <p>Product Manager</p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
