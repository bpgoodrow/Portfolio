import React, { useEffect } from "react";
import './AboutMe.css';
import { motion } from "framer-motion";
import FooterNav from "./FooterNav";

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
              <div className="aboutMeHeroHeader">
                <h1>Hey, I'm Ben</h1>
              </div>
              <div className="aboutMeHeroBody">
                <div>
                  I'm a software developer currently residing in Portland, OR with my partner, dog and cat.
                  I believe in writing code with the user in mind first, understanding what my application can do for them.
                  I love finding the intersection of design and functionality, writing code to make things look great as well as execute efficiently.
                  I'm always interested in new opportunities, whether fulltime or freelance.
                  Outside of development I enjoy playing music, spending time outdoors, and pursuing my passion for baking.
                </div>
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
          <FooterNav title="ABOUT ME" />
        </div>
      </motion.div>
    </React.Fragment>
  )
}

export default AboutMe;