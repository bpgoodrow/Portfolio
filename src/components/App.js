import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import PortfolioControl from './PortfolioControl';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Header />
        <Rout path='/' element={<PortfolioControl />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
