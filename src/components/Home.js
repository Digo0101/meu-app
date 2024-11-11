import React from 'react';
import './Home.css'; // Adicione o arquivo CSS para a página

function Home() {
  return (
    <div className="home-container">
      <section className="home-section">
        <img src="/path/to/sono.jpg" alt="Sono Revitalizante" className="home-image" />
        <h2>Durma Melhor, Viva Melhor: A Ciência por Trás de um Sono Revitalizante</h2>
        <p>Você sabia que o sono é o segredo para uma vida saudável?</p>
        <p>Um descanso de qualidade é essencial para o bom funcionamento do corpo e da mente...</p>
        <h3>Dicas rápidas para um sono de qualidade:</h3>
        <ul>
          <li>Estabeleça uma rotina de sono, indo para a cama e acordando no mesmo horário todos os dias.</li>
          <li>Evite estimulantes como cafeína e tecnologia uma hora antes de dormir.</li>
          <li>Crie um ambiente aconchegante: luz baixa, temperatura agradável e um colchão confortável fazem toda a diferença.</li>
        </ul>
      </section>

      <section className="home-section">
        <img src="/path/to/alimentacao.jpg" alt="Alimentação Saudável" className="home-image" />
        <h2>Alimentação Saudável: O Combustível que Seu Corpo Precisa para Viver Plenamente</h2>
        <p>Você é o que você come!</p>
        <p>A qualidade da sua alimentação impacta diretamente na sua saúde e bem-estar...</p>
        <h3>Benefícios de uma alimentação saudável:</h3>
        <ul>
          <li>Melhora o funcionamento do sistema digestivo e a imunidade.</li>
          <li>Aumenta a energia, foco e disposição ao longo do dia.</li>
          <li>Previne doenças como obesidade, diabetes e doenças cardiovasculares.</li>
        </ul>
      </section>

      <section className="home-section">
        <img src="/path/to/exercicio.jpg" alt="Exercícios Físicos" className="home-image" />
        <h2>Exercícios Físicos: O Poder do Movimento para uma Vida Saudável e Ativa</h2>
        <p>A chave para uma vida longa e saudável está no movimento!</p>
        <p>A prática regular de exercícios não só melhora a saúde física, mas também é uma poderosa aliada da saúde mental...</p>
        <h3>Benefícios de se exercitar regularmente:</h3>
        <ul>
          <li>Aumenta a saúde cardiovascular e a resistência física.</li>
          <li>Controla o peso e melhora a composição corporal.</li>
          <li>Reduz os níveis de ansiedade, estresse e até sintomas de depressão.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
