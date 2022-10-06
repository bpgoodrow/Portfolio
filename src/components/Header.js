import React from "react";
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import './Header.css';

function Header() {
  return(
    <motion.div
      initial={{ y: window.innerHeight, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <NavLink to="/" className="headerStyle">
        HOME
      </NavLink>
    </motion.div>
  );
}

export default Header;