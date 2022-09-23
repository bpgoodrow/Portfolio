import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import PortfolioControl from './PortfolioControl';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header>
        <Link to="/home">Home</Link>
      </Header>
      <Routes>
        <Route path="home/*" element={<PortfolioControl />} />
          <Route path="about-me" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
