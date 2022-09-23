import React from "react";
import './MenuOption.css';

const MenuOption = ({ title }) => {
  return(
    <div className="menuOption">
      <h4 className="menuOptionTitle">{title}</h4>
    </div>
  )
}

export default MenuOption;