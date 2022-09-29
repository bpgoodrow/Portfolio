import React from "react";
import './MenuOption.css';
import { motion } from "framer-motion";

const MenuOption = ({ title }) => {
  return(
    <motion.div
        initial={{height: 0}}
        animate={{height: 1}}
        exit={{y: window.innerHeight, transition: {duration: .5}}}
      >
    <div className="menuOption">
      {title}
    </div>
    </motion.div>
  )
}

export default MenuOption;