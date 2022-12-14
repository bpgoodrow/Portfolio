import React from "react";
import { NavLink } from "react-router-dom";
import './FooterNavOption.css';
import FooterNavOption from "./FooterNavOption";
import MobileNavigation from "./MobileNavigation";

const FooterNav = () => {
  return (
    <div>
    <div className="footerNav">
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
    <div className="mobileFooterNav">
      <MobileNavigation />
    </div>
  </div>
  )
}

export default FooterNav;