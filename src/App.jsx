// src/App.jsx

import React from 'react';
import GameBoard from './components/GameBoard';
import './App.css';

const App = () => {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Pac-Man Game</h1>
      <GameBoard />
    </div>
  );
};

export default App;
