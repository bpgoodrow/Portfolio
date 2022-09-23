import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return(
    <div className="headerStyle">
      <h4><NavLink to="/" className="headerStyle">Home</NavLink></h4>
    </div>
  );
}

export default Header;