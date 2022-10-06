import React from 'react';
import Header from './Header';
import './App.css';
import './BgLandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
// import { NavLink } from "react-router-dom";
// import BgLandingPage from './BgLandingPage';


function App() {
  return (
    <Router>
    <div className='app'>
      <Header/>
      <AnimatedRoutes/>
    </div>
   </Router>
  );
}

export default App;
