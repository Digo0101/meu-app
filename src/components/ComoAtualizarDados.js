import React from 'react';
import './ComoVisualizarConquistas.css';

function ComoVisualizarConquistas() {
  return (
    <div className="visualizar-conquistas-container">
      <h1>Como Visualizar Minhas Conquistas</h1>
      
      <section className="passos">
        <h2>Passo a Passo</h2>
        <ol>
          <li>Acesse o menu principal do aplicativo.</li>
          <li>Selecione a opção <strong>"Meu Perfil"</strong>.</li>
          <li>Desça até a seção <strong>"Conquistas da Gamificação"</strong>.</li>
          <li>Veja a lista de conquistas disponíveis, incluindo os selos e descrições.</li>
        </ol>
      </section>
      
      <section className="dica">
        <h3>Dica:</h3>
        <p>Complete mais atividades diárias para desbloquear novas conquistas e selos!</p>
      </section>
    </div>
  );
}

export default ComoVisualizarConquistas;
