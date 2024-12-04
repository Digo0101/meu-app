import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListadeExercicios } from './data/exerciciosData';

function ExercicioDetalhado() {
  const { id } = useParams();
  const navigate = useNavigate();

  const exercicioId = parseInt(id, 10);
  const exercicio = ListadeExercicios[exercicioId];

  const [atividadeRegistrada, setAtividadeRegistrada] = useState(false);

  if (!exercicio) {
    return <p>Exercício não encontrado</p>;
  }

  const registrarAtividade = () => {
    setAtividadeRegistrada(true);
    const atividadesRegistradas = JSON.parse(localStorage.getItem('atividadesRegistradas')) || [];
    atividadesRegistradas.push(exercicio);
    localStorage.setItem('atividadesRegistradas', JSON.stringify(atividadesRegistradas));
  };

  return (
    <div className="exercicio-detalhado-container">
      <h2>{exercicio.titulo}</h2>
      <p>{exercicio.descricao}</p>
      <iframe 
        width="560" 
        height="315" 
        src={exercicio.videoUrl} 
        title={exercicio.titulo} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>

      <button onClick={registrarAtividade}>
        {atividadeRegistrada ? 'Atividade Registrada' : 'Registrar Atividade'}
      </button>
      
      <button onClick={() => navigate('/meu-perfil')}>Ir para Meu Perfil</button>
    </div>
  );
}

export default ExercicioDetalhado;
