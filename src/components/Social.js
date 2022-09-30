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
          <div className="socialHeroLinkContainer">
            <div className="socialHeroLinkGitHub">
              <img
                alt="github logo"
                srcset="
                ./github.png
                "
              />
            </div>
            <div className="socialHeroLinkLinkedIn">

            </div>
            <div className="socialHeroLinkInstagram">

            </div>
            <div className="socialHeroLinkFacebook">

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