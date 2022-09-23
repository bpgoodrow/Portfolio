import React from "react";
import './MenuOption.css';

const MenuOption = ({ title }) => {
  return(
    <div className="menuOption">
      <div className="menuOptionTitle">{title}</div>
    </div>
  )
}

export default MenuOption;