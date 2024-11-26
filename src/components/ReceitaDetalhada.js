// src/components/ReceitaDetalhada.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ReceitaDetalhada.css';

const receitasDetalhes = {
  BolodeCaneca: { 
    titulo: "Bolo de Caneca", 
    imagem: "https://via.placeholder.com/400x300?text=Bolo+de+Caneca", // URL da imagem
    passos: [
      "Passo 1: Pré-aqueça o forno a 180°C.",
      "Passo 2: Misture a farinha, açúcar e lavanda em uma tigela.",
      "Passo 3: Adicione os ovos e mexa até formar uma massa homogênea.",
      "Passo 4: Coloque em uma forma e asse por 40 minutos."
    ]
  },
  CookiesChocolate: { 
    titulo: "Cookies de Chocolate", 
    imagem: "https://via.placeholder.com/400x300?text=Cookies+de+Chocolate", // URL da imagem
    passos: [
      "Passo 1: Pré-aqueça o forno a 180°C.",
      "Passo 2: Misture a farinha, açúcar e chocolate em uma tigela.",
      "Passo 3: Adicione os ovos e a manteiga e misture.",
      "Passo 4: Coloque em uma forma e asse por 15 minutos."
    ]
  },
  AveiocaNutri: { 
    titulo: "Aveioca - Nutri", 
    imagem: "https://via.placeholder.com/400x300?text=Aveioca+Nutri", // URL da imagem
    passos: [
      "Passo 1: Misture a aveia com água até formar uma massa.",
      "Passo 2: Coloque na frigideira antiaderente e asse dos dois lados.",
      "Passo 3: Recheie com ingredientes de sua escolha."
    ]
  },
  BolodeBananaCaneca: { 
    titulo: "Bolo de Banana na Caneca", 
    imagem: "https://via.placeholder.com/400x300?text=Bolo+de+Banana", // URL da imagem
    passos: [
      "Ingredientes",
      "1 BANANA MADURA AMASSADA",
      "1 COLHER DE CAFÉ DE FERMENTO EM PÓ",
      "1 OVO INTEIRO",
      "10G DE CACAU EM PÓ 100% - OPCIONAL",
      "10G DE FARELO DE AVEIA",
      "CANELA EM PÓ A GOSTO - OPCIONAL",
      "MISTURAR TODOS OS INGREDIENTES E LEVAR AO MICROONDAS POR APROXIMADAMENTE 2 MINUTOS."
    ]
  },
  Crepioca: { 
    titulo: "Crepioca", 
    imagem: "https://via.placeholder.com/400x300?text=Crepioca", // URL da imagem
    passos: [
      "Ingredientes",
      "1 BANANA MADURA AMASSADA",
      "1 COLHER DE CAFÉ DE FERMENTO EM PÓ",
      "1 OVO INTEIRO",
      "10G DE CACAU EM PÓ 100% - OPCIONAL",
      "10G DE FARELO DE AVEIA",
      "CANELA EM PÓ A GOSTO - OPCIONAL",
      "MISTURAR TODOS OS INGREDIENTES E LEVAR AO MICROONDAS POR APROXIMADAMENTE 2 MINUTOS."
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
      <img src={receita.imagem} alt={receita.titulo} className="receita-imagem" />
      <ul>
        {receita.passos.map((passo, index) => (
          <li key={index}>{passo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReceitaDetalhada;
