import React from "react";
import { NavLink } from "react-router-dom";
import './FooterNav.css';

const FooterNav = () => {
  return (
    <div className="footerNav">
      <NavLink to="/aboutme" className="footerNavAboutMe">
        <div>
          1 // ABOUT ME
        </div>
      </NavLink>
      <NavLink to="/contact" className="footerNavContact">
        2 // CONTACT
      </NavLink>
      <NavLink to="/portfolio" className="footerNavPortfolio">
        3 // PORTFOLIO
      </NavLink>
      <NavLink to="/skills" className="footerNavSkills">
        4 // SKILLS
      </NavLink>
      <NavLink to="/social" className="footerNavSocial">
        5 // SOCIAL
      </NavLink>
    </div>
  )
}

export default FooterNav;