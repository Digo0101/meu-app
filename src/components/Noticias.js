// src/components/Noticias.js
import React from 'react';
import './Noticias.css';

const noticias = [
  {
    titulo: 'Musculação e a onda do momento',
    descricao: 'A musculação tem ganhado destaque entre os jovens.',
    imagem: '/images/noticia-musculacao.png', // Substitua pelo caminho correto da imagem
  },
  {
    titulo: 'Dr. Mosaico fala sobre dengue',
    descricao: 'Dr. Mosaico fala um pouco sobre a dengue.',
    imagem: '/images/noticia-dengue.png',
  },
  {
    titulo: 'Práticas de caminhada ajudam na saúde',
    descricao: 'A caminhada é uma atividade física aeróbica que...',
    imagem: '/images/noticia-caminhada.png',
  },
  {
    titulo: 'Hábitos alimentares saudáveis salvam vidas',
    descricao: 'Os hábitos alimentares saudáveis trazem diversos...',
    imagem: '/images/noticia-alimentacao.png',
  },
  // Adicione mais notícias conforme necessário
];

function Noticias() {
  return (
    <div className="noticias-container">
      <header className="noticias-header">
        <img src="/images/cabecalho-noticias.png" alt="Cabeçalho Notícias" className="cabecalho-imagem" />
        <div className="noticias-introducao">
          <h2>Notícias</h2>
          <p>Essa é a página onde você verá suas notícias atualizadas todos os dias.</p>
        </div>
      </header>
      <div className="noticias-grid">
        {noticias.map((noticia, index) => (
          <div key={index} className="noticia-card">
            <img src={noticia.imagem} alt={noticia.titulo} className="noticia-imagem" />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noticias;
