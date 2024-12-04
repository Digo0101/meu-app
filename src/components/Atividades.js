import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';


function Atividades() {
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    const fetchAtividades = async () => {
      const { data, error } = await supabase
        .from('atividades')
        .select('*');

      if (error) {
        console.error('Erro ao buscar atividades:', error);
      } else {
        setAtividades(data);
      }
    };

    fetchAtividades();
  }, []);

  return (
    <div>
      <h2>Atividades Realizadas</h2>
      {atividades.map((atividade) => (
        <div key={atividade.id}>
          <h3>{atividade.titulo}</h3>
          <p>{atividade.descricao}</p>
          <img src={atividade.imagem} alt={atividade.titulo} />
        </div>
      ))}
    </div>
  );
}

export default Atividades;
