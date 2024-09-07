import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='wrapper'>
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
