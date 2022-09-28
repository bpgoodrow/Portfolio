import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return(
    <NavLink to="/" className="headerStyle">
      <h4>Home</h4>
    </NavLink>
  );
}

export default Header;