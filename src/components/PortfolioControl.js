import React from "react";
import MenuOption from "./MenuOption";
import './PortfolioControl.css'
import { NavLink } from "react-router-dom";

const PortfolioControl = () => {
  return (
    <React.Fragment>
      <div className="portfolioControl">
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
      </div>
    </React.Fragment>
    )
}

export default PortfolioControl;