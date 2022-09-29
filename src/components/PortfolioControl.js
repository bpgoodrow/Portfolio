import React from "react";
import MenuOption from "./MenuOption";
import './PortfolioControl.css'
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const PortfolioControl = () => {
  return (
    <React.Fragment>
      <motion.div className="portfolioControl"
      initial={{height: 0}}
      animate={{height: 1 }}
      exit={{y: window.innerHeight, transition: {duration: 0.5}}}
      >
      <NavLink to="/aboutMe" className="menuOptions">
        <MenuOption title="ABOUT ME" />
      </NavLink>
        <NavLink to="/contact" className="menuOptions">
          <MenuOption title="CONTACT" />
        </NavLink>
        <NavLink to="/portfolio" className="menuOptions">
          <MenuOption title="PORTFOLIO" />
        </NavLink>
        <NavLink to="/skills" className="menuOptions">
          <MenuOption title="SKILLS" />
        </NavLink>
        <NavLink to="/social" className="menuOptions">
          <MenuOption title="SOCIAL" />
        </NavLink>
      </motion.div>
    </React.Fragment>
    )
}

export default PortfolioControl;