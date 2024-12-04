import React, { createContext, useState, useContext } from 'react';

const RecompensasContext = createContext();

export const useRecompensas = () => {
  return useContext(RecompensasContext);
};

export const RecompensasProvider = ({ children }) => {
  const [recompensas, setRecompensas] = useState([]);

  const adicionarRecompensa = (novaRecompensa) => {
    setRecompensas([...recompensas, novaRecompensa]);
  };

  return (
    <RecompensasContext.Provider value={{ recompensas, adicionarRecompensa }}>
      {children}
    </RecompensasContext.Provider>
  );
};
