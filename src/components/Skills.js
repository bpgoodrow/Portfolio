import React from "react";
import './Skills.css';
import { motion } from "framer-motion";

function Skills() {
  return (
    <React.Fragment>
      <motion.div
        initial={{height: 0}}
        animate={{height: 1}}
        exit={{y: window.innerHeight, transition: {duration: .5}}}
      >
    <div className="skillsHeader">
      <div>
        S
      </div>
      <div>
        K
      </div>
      <div>
        I
      </div>
      <div>
        L
      </div>
      <div>
        L
      </div>
      <div>
        S
      </div>
    </div>
    <div className="skillsBody">
      <div className="skillsHero">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div className="skillsNumber">
        4
      </div>
    </div>
    </motion.div>
  </React.Fragment>
  )
}

export default Skills;