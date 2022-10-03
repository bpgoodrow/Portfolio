import React, { useEffect } from "react";
import './AboutMe.css';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

function AboutMe() {

  return (
    <React.Fragment>
      
       <motion.div
        initial={{ y: window.innerHeight, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .4 }}
      >
        <div className="aboutMeWrapper">
          <div className="aboutMeHeader">
            <div>
              A
            </div>
            <div>
              B
            </div>
            <div>
              O
            </div>
            <div>
              U
            </div>
            <div>
              T
            </div>
            <div>
              M
            </div>
            <div>
              E
            </div>
          </div>
          <div className="aboutMeBody">
            <div className="aboutMeHero">
              <div className="aboutMeHeroTop">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="aboutMeNumber">
              1
            </div>
            <div className="aboutMeSideBar">
              <div className="aboutMeSideBarNested">
              </div>
            </div>
          </div>
          <div className="footerLinks">
            <NavLink to="/aboutme" className="footerLinkAboutMe">1 // ABOUT ME</NavLink>
            <NavLink to="/contact" className="footerLinkContact">2 // CONTACT</NavLink>
            <NavLink to="/portfolio" className="footerLinkPortfolio">3 // PORTFOLIO</NavLink>
            <NavLink to="/skills" className="footerLinkSkills">4 // SKILLS</NavLink>
            <NavLink to="/social" className="footerLinkSocial">5 // SOCIAL</NavLink>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  )
}

export default AboutMe;