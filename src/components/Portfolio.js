import React from "react";
import './Portfolio.css';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import FooterNav from "./FooterNav";

function Portfolio() {
  return(
    <React.Fragment>
       <motion.div
       initial={{ y: window.innerHeight, opacity: 0 }}
       animate={{ y: 1, opacity: 1 }}
       transition={{ duration: .4 }}
      >
      <div className="portfolioHeader">
        <div>
          P
        </div>
        <div>
          O
        </div>
        <div>
          R
        </div>
        <div>
          T
        </div>
        <div>
          F
        </div>
        <div>
          O
        </div>
        <div>
          L
        </div>
        <div>
          I
        </div>
        <div>
          O
        </div>
      </div>
      <div className="portfolioBody">
        <div className="portfolioHero">
          <div className="portfolioHeroRow1">
            <div className="projectOption">
              <a href="https://github.com/bpgoodrow/Portfolio">Portfolio</a>
            </div>
            <div className="projectOption">
              <a href="https://github.com/bpgoodrow/Wrench-Knight">Wrench Knight</a>
            </div>
          </div>
          <div className="portfolioHeroRow2">
            <div className="projectOption">
              <a href="https://github.com/bpgoodrow/Arkham-Horror">Arkham</a>
            </div>
            <div className="projectOption">
              <a href="https://github.com/bpgoodrow/FunctionalJSRPG">Worker Game</a>
            </div>
          </div>
        </div>
        <div className="portfolioNumber">
          <div className="portfolioNumberChild">
           3 
          </div>
          
        </div>
      </div>
      <FooterNav/>
      </motion.div>
    </React.Fragment>
  )
}

export default Portfolio;