import React from "react";
import FooterNavOption from "./FooterNavOption";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return(
    <div>
      <NavLink to="/aboutme" className="footerNavOption">
          <FooterNavOption FooterTitle="ABOUTME" />
        </NavLink>
        <NavLink to="/contact" className="footerNavOption">
          <FooterNavOption FooterTitle="CONTACT" />
        </NavLink>
        <NavLink to="/portfolio" className="footerNavOption">
          <FooterNavOption FooterTitle="PROJECTS" />
        </NavLink>
        <NavLink to="/skills" className="footerNavOption">
          <FooterNavOption FooterTitle="SKILLS" />
        </NavLink>
        <NavLink to="/social" className="footerNavOption">
          <FooterNavOption FooterTitle="MUSIC" />
        </NavLink>
      </div>
  );
}

export default NavLinks;