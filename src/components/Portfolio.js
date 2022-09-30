import React from "react";
import './Portfolio.css';
import { motion } from "framer-motion";

function Portfolio() {
  return(
    <React.Fragment>
       <motion.div
        initial={{height: 0}}
        animate={{height: 1}}
        exit={{y: window.innerHeight, transition: {duration: .5}}}
      >
      <div className="portfolioHeader">
        <div>
          P
        </div>
        <div>
          O
        </div>
        <div>
          R
        </div>
        <div>
          T
        </div>
        <div>
          F
        </div>
        <div>
          O
        </div>
        <div>
          L
        </div>
        <div>
          I
        </div>
        <div>
          O
        </div>
      </div>
      <div className="portfolioBody">
        <div className="portfolioHero">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="portfolioNumber">
          3
        </div>
      </div>
      </motion.div>
    </React.Fragment>
  )
}

export default Portfolio;