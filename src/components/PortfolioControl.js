import React from "react";
import MenuOption from "./MenuOption";
import './PortfolioControl.css'
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const PortfolioControl = () => {
  return (
    <React.Fragment>
      <motion.div className="portfolioControl"
      initial={{ y: window.innerHeight, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .4 }}
      whileTap={{ scale: 0.8 }}
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
          <MenuOption title="MUSIC" />
        </NavLink>
      </motion.div>
    </React.Fragment>
    )
}

export default PortfolioControl;