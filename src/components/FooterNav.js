import React from "react";
import { NavLink } from "react-router-dom";
import './FooterNav.css';

const FooterNav = () => {
  return (
    <div className="footerNav">
      <NavLink to="/aboutme" className="footerNavAboutMe">
        <div>
          // ABOUT ME
        </div>
      </NavLink>
      <NavLink to="/contact" className="footerNavContact">
        // CONTACT
      </NavLink>
      <NavLink to="/portfolio" className="footerNavPortfolio">
        // PORTFOLIO
      </NavLink>
      <NavLink to="/skills" className="footerNavSkills">
        // SKILLS
      </NavLink>
      <NavLink to="/social" className="footerNavSocial">
        // SOCIAL
      </NavLink>
    </div>
  )
}

export default FooterNav;