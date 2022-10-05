import React from "react";
import { NavLink } from "react-router-dom";
import './FooterNavOption.css';
import FooterNavOption from "./FooterNavOption";

const FooterNav = () => {
  return (
    <div className="footerNav">
      <NavLink to="/aboutme" className="footerNavOption">
        <FooterNavOption title="ABOUT ME" />
      </NavLink>
      <NavLink to="/contact" className="footerNavOption">
        <FooterNavOption title="CONTACT" />
      </NavLink>
      <NavLink to="/portfolio" className="footerNavOption">
        <FooterNavOption title="PROJECTS" />
      </NavLink>
      <NavLink to="/skills" className="footerNavOption">
        <FooterNavOption title="SKILLS" />
      </NavLink>
      <NavLink to="/social" className="footerNavOption">
        <FooterNavOption title="MUSIC" />
      </NavLink>
    </div>
  )
}

export default FooterNav;