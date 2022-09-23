import React from "react";
// import AboutMe from "./AboutMe";
// import Social from "./Social";
// import Portfolio from "./Portfolio";
// import Skills from "./Skills";
// import Contact from "./Contact";
import './PortfolioControl.css'

const PortfolioControl = () => {
  return (
    <React.Fragment>
      <div className="portfolioControl">
      <a className="menuOptions" href="/aboutMe">
        <div>
          ABOUT ME
        </div>
      </a>
        <a div className="menuOptions" href="/contact">
          <div>
            SOCIAL
          </div>
        </a>
        <a div className="menuOptions" href="/portfolio">
          <div>
            PORTFOLIO
          </div>
        </a>
        <a div className="menuOptions" href="/skills">
          <div>
            SKILLS
          </div>
        </a>
        <a div className="menuOptions" href="/contact">
          <div>  
            CONTACT
          </div>
        </a>
      </div>
    </React.Fragment>
    )
}

export default PortfolioControl;