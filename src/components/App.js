import React from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
