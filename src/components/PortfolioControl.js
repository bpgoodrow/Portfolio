import React from "react";
import AboutMe from "./AboutMe";
import Social from "./Social";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import './PortfolioControl.css'


const PortfolioControl = () => {
  return (
    <React.Fragment>
      <div className="portfolioControl">
        <div className="menuOptions">
          <AboutMe />
        </div>
        <div className="menuOptions">
          <Social />
        </div>
        <div className="menuOptions">
          <Portfolio />
        </div>
        <div className="menuOptions">
          <Skills />
        </div>
        <div className="menuOptions">
          <Contact />
        </div>
      </div>
    </React.Fragment>
    )
}

export default PortfolioControl;