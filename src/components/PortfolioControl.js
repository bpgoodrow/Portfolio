import React from "react";
import AboutMe from "./AboutMe";
import Social from "./Social";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";

function PortfolioControl() {
  return (
    <React.Fragment>
      <AboutMe />
      <Social />
      <Portfolio />
      <Skills />
      <Contact />
    </React.Fragment>
  )
}

export default PortfolioControl;