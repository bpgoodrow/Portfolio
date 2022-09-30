import React from "react";
import './Contact.css';
import { motion } from "framer-motion";

function Contact() {
  return (
    <React.Fragment>
      <div className="body">
       <motion.div
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
      </motion.div>
      </div>
    </React.Fragment>
  )
}

export default Contact;