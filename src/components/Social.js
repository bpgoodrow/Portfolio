import React from "react";
import './Social.css';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Social () {
  return(
    <React.Fragment>
      <motion.div
        initial={{ y: window.innerHeight, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: .4 }}
      >
      <div className="socialHeader">
        <div>
          S
        </div>
        <div>
          O
        </div>
        <div>
          C
        </div>
        <div>
          I
        </div>
        <div>
          A
        </div>
        <div>
          L
        </div>
      </div>

      <div className="socialBody">
        <div className="socialHero">
          <div className="socialHeroText">
            Check out my work or give me a follow
          </div>

          <div className="socialHeroParentLinkContainer">
            <div className="socialHeroLinkContainer">
            <div className="socialHeroLinkGitHub">
              <a href="https://github.com/bpgoodrow/" target="_blank">
                <img
                  alt="github logo"
                  srcset="
                  ./github.png
                  "
                />
              </a>
            </div>
            <div className="socialHeroLinkLinkedIn">
              <a href="https://www.linkedin.com/in/bengoodrow/" target="_blank">
                <img
                  alt="Linkedin logo"
                  srcset="
                  ./linkedin.png
                  "
                />
              </a>
            </div>
            <div className="socialHeroLinkInstagram">
              <a href="https://www.instagram.com/bpgoodrow/" target="_blank">
                <img
                  alt="Instagram logo"
                  srcset="
                  ./instalogo.png
                  "
                />
              </a>
            </div>
            <div className="socialHeroLinkFacebook">
              <img
                alt="Facebook logo"
                srcset="
                ./facebook.png
                "
                />
            </div>
            </div>
          </div>
        </div>

        <div className="socialNumber">
          <div className="socialNumberChild">
            5 
          </div>
          
        </div>
      </div>
      <div className="footerLinks">
            <NavLink to="/aboutme" className="footerLinkAboutMe">1. ABOUT ME</NavLink>
            <NavLink to="/contact" className="footerLinkContact">2. CONTACT</NavLink>
            <NavLink to="/portfolio" className="footerLinkPortfolio">3. PORTFOLIO</NavLink>
            <NavLink to="/skills" className="footerLinkSkills">4. SKILLS</NavLink>
            <NavLink to="/social" className="footerLinkSocial">5. SOCIAL</NavLink>
          </div>
      </motion.div>
    </React.Fragment>
  )
}

export default Social;