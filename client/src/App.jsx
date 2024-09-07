import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='wrapper'>
        <Content />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Добро пожаловать!</h1>
        <NavLink to="/account">
          <button>Вход</button>
        </NavLink>

      </div>
    </div>
  );
}

export default App;
