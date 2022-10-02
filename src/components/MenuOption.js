import React from "react";
import './MenuOption.css';
import { motion } from "framer-motion";

const MenuOption = ({ title }) => {
  return(
    <motion.div
    // initial={{ y: window.innerHeight, opacity: 0 }}
    //     animate={{ y: 1, opacity: 1 }}
    //     exit={{ y: window.innerHeight, opacity: 1 }}
    //     transition={{ duration: 1 }}
    >
    <div className="menuOption">
      {title}
    </div>
    </motion.div>
  )
}

export default MenuOption;