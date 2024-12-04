import React, { useState } from 'react';
import './EntreEmContato.css';

function EntreEmContato() {
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const enviarMensagem = () => {
    if (mensagem.trim() !== '') {
      setEnviado(true);
      setMensagem('');
    }
  };

  return (
    <div>
      <h1>Entre em Contato</h1>
      <textarea
        placeholder="Escreva sua mensagem aqui..."
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        rows="5"
        cols="40"
      ></textarea>
      <button onClick={enviarMensagem}>Enviar</button>
      {enviado && <p>Sua mensagem foi enviada com sucesso!</p>}
    </div>
  );
}

export default EntreEmContato;
