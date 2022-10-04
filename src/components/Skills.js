import React from "react";
import './Skills.css';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import FooterNav from "./FooterNav";

function Skills() {
  return (
    <React.Fragment>
      <motion.div
      initial={{ y: window.innerHeight, opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      transition={{ duration: .4 }}
      >
    <div className="skillsHeader">
      <div>
        S
      </div>
      <div>
        K
      </div>
      <div>
        I
      </div>
      <div>
        L
      </div>
      <div>
        L
      </div>
      <div>
        S
      </div>
    </div>
    <div className="skillsBody">
      <div className="skillsHero">
        <div>
          <img src="./css3logo.png"/>
        </div>
      </div>
      <div className="skillsNumber">
        <div className="skillsNumberChild">
          4 
        </div>
        
      </div>
    </div>
    <FooterNav/>
    </motion.div>
  </React.Fragment>
  )
}

export default Skills;