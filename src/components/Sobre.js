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
          <img src="/images/ro.jpg" alt="Rodrigo Martínez" />
          <h3>Rodrigo Martínez</h3>
          <p>Desenvolvedor Full Stack</p>
        </div>
        <div className="membro">
          <img src="/images/lucas.jpg" alt="Lucas Vilas" />
          <h3>Lucas Vilas</h3>
          <p>Desenvolvedor Full Stack</p>
        </div>
        <div className="membro">
          <img src="/images/mu.jpg" alt="Murilo Enrico" />
          <h3>Murilo Enrico</h3>
          <p>Front End e Designer</p>
        </div>
        <div className="membro">
          <img src="/images/geo.jpg" alt="Giovani Monteiro" />
          <h3>Giovani Monteiro</h3>
          <p>Banco de Dados</p>
        </div>
        <div className="membro">
          <img src="/images/jm.jpg" alt="João Murari" />
          <h3>João Murari</h3>
          <p>Banco de Dados</p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
