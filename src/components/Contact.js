import React from "react";
import './Contact.css';
import { motion } from "framer-motion";

function Contact() {
  return (
    <React.Fragment>
       <motion.div className="body"
        initial={{height: 0}}
        animate={{height: 1}}
        exit={{y: window.innerHeight, transition: {duration: .5}}}
      >
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="contactNumber">
          2
        </div>
      </div>
      </motion.div>
    </React.Fragment>
  )
}

export default Contact;