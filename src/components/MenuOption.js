import React from "react";
import './MenuOption.css';
import { motion } from "framer-motion";

const MenuOption = ({ title }) => {
  return(
    <motion.div
      initial={{ y: window.innerHeight, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .8 }}
    >
    <div className="menuOption">
      {title}
    </div>
    </motion.div>
  )
}

export default MenuOption;