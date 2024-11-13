// src/components/Noticias.js
import React from 'react';
import './Noticias.css';

const noticias = [
  {
    titulo: 'Meditação ',
    descricao: 'Os benefícios da Meditação para nossa Saúde',
    imagem: '/images/noticia-meditacao.png',
    link: 'https://futurodasaude.com.br/beneficios-da-meditacao/?utm_source=goads&utm_medium=search&utm_campaign=Branding&gad_source=1&gclid=Cj0KCQiAlsy5BhDeARIsABRc6ZskA3ROvN6_OwQn-qi8y11FSbGiLB_pQN2bNfwjhXYNPRFVTu-N5UEaAiVEEALw_wcB',
  },
  {
    titulo: 'Solteiros tem 80% mais chance de depressão',
    descricao: 'Homens solteiros e pessoas com maior nível educacional são os mais vulneráveis, mas há variações significativas entre diferentes culturas',
    imagem: '/images/noticia-dengue.png',
    link: 'https://veja.abril.com.br/saude/solteiros-tem-ate-80-mais-risco-de-depressao-do-que-casados-diz-estudo-global/',
  },
  {
    titulo: 'Hábitos alimentares saudáveis salvam vidas',
    descricao: 'Cinco anos após perder o certificado de eliminação do sarampo, em 2019, o Brasil voltou a receber da Organização Pan-Americana da Saúde (Opas) o status de país livre da doença',
    imagem: '/images/noticia-caminhada.png',
    link: 'https://agenciabrasil.ebc.com.br/saude/noticia/2024-11/apos-cinco-anos-brasil-recupera-certificado-de-eliminacao-do-sarampo',
  },
  {
    titulo: 'Cancer de Prostata',
    descricao: 'cancer de prostata o que e ',
    imagem: '/images/noticia-alimentacao.png',
    link: 'https://vencerocancer.org.br/tipos-de-cancer/cancer-de-prostata-o-que-e/',
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
          <a 
            key={index} 
            href={noticia.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="noticia-card"
          >
            <img src={noticia.imagem} alt={noticia.titulo} className="noticia-imagem" />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descricao}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Noticias;
