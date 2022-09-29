import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return(
    <NavLink to="/" className="headerStyle">
      HOME
    </NavLink>
  );
}

export default Header;