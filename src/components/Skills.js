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
        <div className="row1">
          <div className="css3">
            <img src="./css3logo.png"/>
          </div>
          <div>
            <img src="./html5logo2.png"/>
          </div>
          <div>
            <img src="./jslogo1.png"/>
          </div>
        </div>
        <div className="row2">
          <div>
            <img src="./reactlogo2.png"/>
          </div>
          <div>
            <img src="./firebaselogo.png"/>
          </div>
          <div>
            <img src="./csharplogo2.png"/>
          </div>
        </div>
      </div>
      <div className="skillsNumber">
        <div className="skillsNumberChild">
          4 
        </div>
        
      </div>
    </div>
    <div className="footerNavSkills">
      <FooterNav/>
    </div>
    </motion.div>
  </React.Fragment>
  )
}

export default Skills;