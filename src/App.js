import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Cadastro from './Cadastro'; 
import Receitas from './components/Receitas';
import Sobre from './components/Sobre';
import Gamificacao from './components/Gamificacao';
import Exercicios from './components/Exercicios';
import Noticias from './components/Noticias';
import MeuPerfil from './components/MeuPerfil';
import ApoioUsuario from './components/ApoioUsuario';
import ReceitaDetalhada from './components/ReceitaDetalhada';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Receitas" element={<Receitas/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Exercicios" element={<Exercicios/>} />
          <Route path="/Gamificacao" element={<Gamificacao/>}/>
          <Route path="/Noticias" element={<Noticias/>}/>
          <Route path="/Noticias" element={<Noticias/>}/>
          <Route path="/MeuPerfil" element={<MeuPerfil/>}/>
          <Route path="/ApoioUsuario" element={<ApoioUsuario/>}/>
          <Route path="/Receitas/:id" element={<ReceitaDetalhada/>}/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
