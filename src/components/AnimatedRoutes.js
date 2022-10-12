import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Social from './Social';
import PortfolioControl from './PortfolioControl';
import { AnimatePresence } from 'framer-motion';
import BgLandingPage from "./ToggleVisibility";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<PortfolioControl />} />
        <Route path="/bglandingpage" element={<BgLandingPage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;