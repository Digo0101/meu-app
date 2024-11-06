// src/components/ReceitaDetalhada.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ReceitaDetalhada.css';

const receitasDetalhes = {
  BolodeCaneca: { 
    titulo: "Bolo de Caneca", 
    passos: [
      "Passo 1: Pré-aqueça o forno a 180°C.",
      "Passo 2: Misture a farinha, açúcar e lavanda em uma tigela.",
      "Passo 3: Adicione os ovos e mexa até formar uma massa homogênea.",
      "Passo 4: Coloque em uma forma e asse por 40 minutos."
    ]
  },
  CookiesChocolate: { 
    titulo: "Cookies de Chocolate", 
    passos: [
      "Passo 1: Pré-aqueça o forno a 180°C.",
      "Passo 2: Misture a farinha, açúcar e chocolate em uma tigela.",
      "Passo 3: Adicione os ovos e a manteiga e misture.",
      "Passo 4: Coloque em uma forma e asse por 15 minutos."
    ]
  },
  AveiocaNutri: { 
    titulo: "Aveioca - Nutri", 
    passos: [
      "Passo 1: Misture a aveia com água até formar uma massa.",
      "Passo 2: Coloque na frigideira antiaderente e asse dos dois lados.",
      "Passo 3: Recheie com ingredientes de sua escolha."
    ]
  },
  // Adicione mais receitas conforme necessário
};

function ReceitaDetalhada() {
  const { id } = useParams();
  const receita = receitasDetalhes[id];

  if (!receita) {
    return <div>Receita não encontrada</div>;
  }

  return (
    <div className="receita-detalhada">
      <h2>{receita.titulo}</h2>
      <ul>
        {receita.passos.map((passo, index) => (
          <li key={index}>{passo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReceitaDetalhada;
