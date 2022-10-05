import React from "react";
import './Social.css';
import { motion } from "framer-motion";
import FooterNav from "./FooterNav";

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
          M
        </div>
        <div>
          U
        </div>
        <div>
          S
        </div>
        <div>
          I
        </div>
        <div>
          C
        </div>
      </div>

      <div className="socialBody">
        <div className="socialHero">
          <div className="socialHeroText">
            Music has always been a huge part of my life. Here a couple projects I'm in.
          </div>
          <div className="spotifyContainer">

          </div>
        </div>

        <div className="socialNumber">
          <div className="socialNumberChild">
            5 
          </div>
          
        </div>
      </div>
      <FooterNav/>
      </motion.div>
    </React.Fragment>
  )
}

export default Social;