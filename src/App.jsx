import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GameBoard from './components/GameBoard';
import './App.css'
import Story from './components/Story';

const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pacman" element={<GameBoard />} />
        <Route path="/story" element={<Story />} />
        
      </Routes>
    </Router>
  );
};

export default App;
