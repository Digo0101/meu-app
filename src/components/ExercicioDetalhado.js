import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListadeExercicios } from './data/exerciciosData';

function ExercicioDetalhado() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Converte o id para um número inteiro para garantir que o acesso ao array esteja correto
  const exercicioId = parseInt(id, 10);

  // Pega o exercício correspondente ao id
  const exercicio = ListadeExercicios[exercicioId];

  // Sempre chama o hook useState
  const [atividadeRegistrada, setAtividadeRegistrada] = useState(false);

  // Se o exercício não for encontrado, mostra uma mensagem
  if (!exercicio) {
    return <p>Exercício não encontrado</p>;
  }

  // Função para registrar a atividade
  const registrarAtividade = () => {
    setAtividadeRegistrada(true);

    // Recupera atividades registradas ou cria uma nova lista
    const atividadesRegistradas = JSON.parse(localStorage.getItem('atividadesRegistradas')) || [];
    
    // Adiciona o exercício à lista de atividades
    atividadesRegistradas.push(exercicio);

    // Salva a lista atualizada no localStorage
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
        title="YouTube video player" 
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
