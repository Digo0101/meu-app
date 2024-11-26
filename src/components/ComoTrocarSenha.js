import React from 'react';
import './ComoTrocarSenha.css';

function ComoTrocarSenha() {
  return (
    <div className="como-trocar-senha-container">
      <h1>Como Trocar Minha Senha</h1>
      
      <section>
        <h2>Passo a Passo para Alterar sua Senha</h2>
        <ol>
          <li>
            <strong>Acesse a Página de Alteração de Senha:</strong>
            <p>Vá até a página de troca de senha em nosso site.</p>
          </li>
          <li>
            <strong>Informe sua Nova Senha:</strong>
            <p>Digite uma senha segura que você possa lembrar.</p>
          </li>
          <li>
            <strong>Confirme sua Nova Senha:</strong>
            <p>Digite novamente a nova senha para garantir que ambas sejam iguais.</p>
          </li>
          <li>
            <strong>Envia para Confirmar:</strong>
            <p>Após preencher os campos, clique em "Alterar Senha" para concluir a troca.</p>
          </li>
        </ol>
      </section>

      <section>
        <h2>Recomendações para uma Senha Segura</h2>
        <ul>
          <li>Use uma combinação de letras, números e caracteres especiais.</li>
          <li>Evite usar informações pessoais (como nomes ou datas de nascimento).</li>
          <li>Utilize pelo menos 8 caracteres para maior segurança.</li>
        </ul>
      </section>

      <section>
        <h2>Pronto para Trocar sua Senha?</h2>
        <p>Se você já entendeu como trocar a senha, <a href="/trocar-senha">clique aqui</a> para ir à página de alteração.</p>
      </section>
    </div>
  );
}

export default ComoTrocarSenha;
