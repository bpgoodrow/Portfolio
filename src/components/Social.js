import React from "react";
import './Social.css';
import { motion } from "framer-motion";

function Social () {
  return(
    <React.Fragment>
      <motion.div
        initial={{height: 0}}
        animate={{height: 1}}
        exit={{y: window.innerHeight, transition: {duration: .5}}}
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
                  ./instagram.png
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
          5
        </div>
      </div>
      </motion.div>
    </React.Fragment>
  )
}

export default Social;