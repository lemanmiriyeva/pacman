import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GameBoard from './components/GameBoard';
import './App.css'
import Story1 from './components/Story';
import Story2 from './components/Story2';

const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pacman" element={<GameBoard />} />
        <Route path="/story1" element={<Story1 />} />
        <Route path="/story2" element={<Story1 />} />
        
      </Routes>
    </Router>
  );
};

export default App;
