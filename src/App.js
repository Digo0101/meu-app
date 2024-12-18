// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Atividades from './components/Atividades';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Receitas from './components/Receitas';
import Sobre from './components/Sobre';
import Gamificacao from './components/Gamificacao';
import Exercicios from './components/Exercicios';
import Noticias from './components/Noticias';
import MeuPerfil from './components/MeuPerfil';
import ApoioUsuario from './components/ApoioUsuario';
import ReceitaDetalhada from './components/ReceitaDetalhada';
import ExercicioDetalhado from './components/ExercicioDetalhado';
import Home from './components/Home';
import ComoTrocarSenha from './components/ComoTrocarSenha';
import TrocarSenha from './components/TrocarSenha';
import ComoAtualizarDados from './components/ComoAtualizarDados';
import EntreEmContato from './components/EntreEmContato';
import ComoVisualizarConquistas from './components/ComoVisualizarConquistas';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecompensasProvider } from './context/RecompensasContext';

function App() {
  return (
    <RecompensasProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/atividade" element={<Atividades />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/exercicios" element={<Exercicios />} />
            <Route path="/gamificacao" element={<Gamificacao />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/meu-perfil" element={<MeuPerfil />} />
            <Route path="/apoio-usuario" element={<ApoioUsuario />} />
            <Route path="/receitas" element={<Receitas />} />
            <Route path="/receitas/:id" element={<ReceitaDetalhada />} />
            <Route path="/exercicio/:id" element={<ExercicioDetalhado />} />
            <Route path="/comotrocarsenha" element={<ComoTrocarSenha />} />
            <Route path="/trocar-senha" element={<TrocarSenha />} />
            <Route path="/comoatualizardados" element={<ComoAtualizarDados />} />
            <Route path="/entreemcontato" element={<EntreEmContato/>}/>
            <Route path="/comovisualizarconquistas" element={<ComoVisualizarConquistas />} />
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </RecompensasProvider>
  );
}

export default App;
