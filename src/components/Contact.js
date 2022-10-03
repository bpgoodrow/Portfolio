import React, { useRef } from 'react';
import './Contact.css';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gf7t3i6', 'template_za24svi', form.current, 'tPq88Q7x8tb9yuPwd')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <React.Fragment>
      
       <motion.div
        initial={{ y: window.innerHeight, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
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
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
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