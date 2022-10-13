import React, { useState } from 'react';
import Header from './Header';
import AnimatedRoutes from './AnimatedRoutes';
import { NavLink } from 'react-router-dom';

const ToggleVisibility = ({ children }) => {

  const [show, setShow ] = useState();

  function toggleShow() {
    setShow(!show);
  }

  const logo = show ? null : <img src='./Logo.png'/>

  return (
    <div className="componentContainer">
      {show && children }
      <div onClick={toggleShow}>
          {logo}
      </div>
    </div>
  )
}

export default ToggleVisibility;