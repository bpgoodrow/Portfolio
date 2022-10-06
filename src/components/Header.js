import React from "react";
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import './Header.css';

function Header() {
  return(
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileTap={{ scale: 0.9 }}
    >
      <NavLink to="/" className="headerStyle">
        HOME
      </NavLink>
    </motion.div>
  );
}

export default Header;