import React, { useState } from 'react';
import './ToggleVisibility.css';

const ToggleVisibility = ({ children }) => {

  const [show, setShow ] = useState();

  function toggleShow() {
    setShow(!show);
  }

  const logo = show ? null : 
    <div className="logoContainer">  
      <div onClick={toggleShow} className="logo">
        <picture>
          <source media="(max-width: 799px" srcSet='./Logo(1).png' />
          <source media="(min-width: 800px" srcSet='./Logo(2).png' />
          <img src='./Logo(2).png' alt='Ben Goodrow Dev Logo' />
        </picture>
      </div>
    </div>

  return (
    <div>
      {show && children }
      {logo}
    </div>
  )
}

export default ToggleVisibility;