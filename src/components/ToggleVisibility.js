import React, { useState } from 'react';
import Header from './Header';
import AnimatedRoutes from './AnimatedRoutes';
import { NavLink } from 'react-router-dom';

const ToggleVisibility = ({ children }) => {

  const [show, setShow ] = useState();

  function toggleShow() {
    setShow(!show);
  }

  const text = show ? null : "BG."

  return (
    <div className="componentContainer">
      {show && children }
      <div onClick={toggleShow}>
        <h1>
          {text}
        </h1>
      </div>
    </div>
  )
}

export default ToggleVisibility;