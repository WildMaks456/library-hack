import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Добро пожаловать!</h1>
      <NavLink to="/account">
        <button>Вход</button>
      </NavLink>
    </div>
  );
}

export default App;
