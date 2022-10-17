import React, { useState } from "react";
import NavLinks from "./NavLinks";
import './MobileNavigation.css';
import {CgMenu} from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  const hamburgerIcon = <CgMenu className="hamburger"
            size="40px" color="black"
            onClick={() => setOpen(!open)}
            />

  const closeHamburgerIcon = <CgClose className="hamburger"
  size="40px" color="black"
  onClick={() => setOpen(!open)}
  />         
  return(
    <nav>
      <div className="mobileNavigation">
        <div className="mobileLinks">
          { open && <NavLinks /> }
        </div>
        <div className="hamburgerContainer">
          { open ? closeHamburgerIcon : hamburgerIcon }
        </div>
      </div>
    </nav>
  );
}

export default MobileNavigation;