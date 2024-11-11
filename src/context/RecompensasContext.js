// src/context/RecompensasContext.js
import React, { createContext, useState } from 'react';
import { useContext } from 'react';

// Criação do contexto
export const RecompensaContext = createContext();

// Provider para envolver o App
export function RecompensasProvider({ children }) {
  const [recompensas, setRecompensas] = useState([]);

  // Função para adicionar uma recompensa
  const adicionarRecompensa = (novaRecompensa) => {
    setRecompensas([...recompensas, novaRecompensa]);
  };

  return (
    <RecompensaContext.Provider value={{ recompensas, adicionarRecompensa }}>
      {children}
    </RecompensaContext.Provider>
  );
}

// Hook para acessar o contexto
export function useRecompensas() {
  return useContext(RecompensaContext);
}
