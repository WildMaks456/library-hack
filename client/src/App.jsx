import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
          <Header/>
          <div className="start-page">
              <p>Карагандинская областная
                  универсальная научная
                  библиотека им. Н.В. Гоголя</p>
          </div>
          <div className='wrapper'>
              <Content/>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
