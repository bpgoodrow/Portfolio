import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from "./AboutMe";
import Social from "./Social";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";


function PortfolioControl() {
  return (
      <Router>
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/social" element={<Social /> } />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path ="/contact" element={<Contact />} />
        </Routes>
      </Router>
  )
}

export default PortfolioControl;