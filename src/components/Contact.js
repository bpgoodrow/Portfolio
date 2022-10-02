import React from "react";
import './Contact.css';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <React.Fragment>
      
       <motion.div
        initial={{ y: window.innerHeight, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // exit={{ y: window.innerHeight, opacity: 0 }}
        transition={{ duration: .4 }}
      >
        <div className="contactWrapper">
      <div className="contactHeader">
        <div>
          C
        </div>
        <div>
          O
        </div>
        <div>
          N
        </div>
        <div>
          T
        </div>
        <div>
          A
        </div>
        <div>
          C
        </div>
        <div>
          T
        </div>
      </div>
      <div className="contactBody">
        <div className="contactHero">
        <form>
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Email Address
            <input type="text" name="name" />
          </label>
          <label>
            Message
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        </div>
        <div className="contactNumber">
          2
        </div>
      </div>
      <div className="footerLinks">
            <NavLink to="/aboutme" className="footerLinkAboutMe">1. ABOUT ME</NavLink>
            <NavLink to="/contact" className="footerLinkContact">2. CONTACT</NavLink>
            <NavLink to="/portfolio" className="footerLinkPortfolio">3. PORTFOLIO</NavLink>
            <NavLink to="/skills" className="footerLinkSkills">4. SKILLS</NavLink>
            <NavLink to="/social" className="footerLinkSocial">5. SOCIAL</NavLink>
          </div>
      </div>
      </motion.div>
    </React.Fragment>
  )
}

export default Contact;