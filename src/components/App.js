import React from 'react';
import Header from './Header';
import PortfolioControl from './PortfolioControl';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Social from './Social';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route exact path="/" element={<PortfolioControl />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
