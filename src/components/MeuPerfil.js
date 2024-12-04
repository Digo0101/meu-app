import React, { useState, useEffect } from 'react';
import { useRecompensas } from '../context/RecompensasContext';
import  supabase  from '../supabaseClient'; // Importando o cliente Supabase
import './MeuPerfil.css';

function MeuPerfil() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [atividades, setAtividades] = useState([]);
  const [fotoPerfil, setFotoPerfil] = useState('');
  const { recompensas } = useRecompensas();

  // Carrega as informações do usuário e atividades do Supabase
  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error('Erro ao buscar usuário:', userError);
        return;
      }

      if (user) {
        // Busca dados do perfil do usuário
        const { data, error } = await supabase
          .from('usuarios')
          .select('email, foto_perfil')
          .eq('id', user.id)
          .single();
        
        if (error) {
          console.error('Erro ao buscar dados do usuário:', error);
        } else {
          setEmail(data.email);
          setFotoPerfil(data.foto_perfil);
        }

        // Busca atividades registradas
        const { data: atividadesData, error: atividadesError } = await supabase
          .from('atividades')
          .select('*')
          .eq('usuario_id', user.id);

        if (atividadesError) {
          console.error('Erro ao buscar atividades:', atividadesError);
        } else {
          setAtividades(atividadesData);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSenhaChange = (e) => setSenha(e.target.value);

  const handleSaveChanges = async () => {
    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error('Erro ao obter usuário:', userError);
        alert('Erro ao obter usuário.');
        return;
      }

      if (user) {
        // Atualiza as informações de email e senha do usuário
        const { error } = await supabase
          .from('usuarios')
          .update({ email, senha })
          .eq('id', user.id);

        if (error) {
          console.error('Erro ao salvar alterações:', error);
          alert('Erro ao salvar alterações.');
        } else {
          alert('Alterações salvas com sucesso!');
        }
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
      alert('Erro inesperado ao salvar alterações.');
    }
  };

  return (
    <div className="meu-perfil-container">
      <h1>Meu Perfil</h1>
      
      {/* Foto de Perfil */}
      <div className="foto-perfil">
        {fotoPerfil ? (
          <img src={fotoPerfil} alt="Foto do usuário" />
        ) : (
          <p>Foto de perfil não definida.</p>
        )}
      </div>

      {/* Dados Cadastrados */}
      <section className="informacoes-cadastradas">
        <h2>Dados Cadastrados</h2>
        <p><strong>Nome:</strong> João Silva</p>
        <p><strong>Email:</strong> {email}</p>
      </section>

      {/* Trocar Dados */}
      <section className="trocar-dados">
        <h2>Trocar Dados</h2>
        <div>
          <label>Novo Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Nova Senha:</label>
          <input type="password" value={senha} onChange={handleSenhaChange} />
        </div>
        <button onClick={handleSaveChanges}>Salvar Alterações</button>
      </section>

      {/* Conquistas da Gamificação */}
      <section className="conquistas">
        <h2>Conquistas da Gamificação</h2>
        {recompensas && recompensas.length > 0 ? (
          <ul>
            {recompensas.map((recompensa, index) => (
              <li key={index} className="recompensa-item">
                <div className="recompensa-imagem">
                  <img src={recompensa.imagem} alt={recompensa.titulo} />
                </div>
                <div className="recompensa-info">
                  <strong>Selo:</strong> {recompensa.titulo} - {recompensa.descricao}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Você ainda não conquistou nenhuma recompensa.</p>
        )}
      </section>

      {/* Atividades Realizadas */}
      <section className="atividades-feitas">
        <h2>Atividades Realizadas</h2>
        {atividades.length > 0 ? (
          <ul>
            {atividades.map((atividade, index) => (
              <li key={index}>{atividade.titulo}</li>
            ))}
          </ul>
        ) : (
          <p>Você ainda não registrou atividades.</p>
        )}
      </section>

      {/* Motivação */}
      <section className="motivacao">
        <h2>Motivação</h2>
        <p>Mantenha-se focado nos seus objetivos! Cada passo conta.</p>
      </section>

      {/* Metas */}
      <section className="metas">
        <h2>Metas</h2>
        <p>Meta de Saúde: 10 mil passos diários</p>
        <p>Meta de Nutrição: 2 frutas por dia</p>
      </section>
    </div>
  );
}

export default MeuPerfil;
