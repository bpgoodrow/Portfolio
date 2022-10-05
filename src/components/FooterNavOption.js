import React from "react";
import './FooterNav.css';

const FooterNavOption = ({ FooterTitle }) => {
  return(
    <div className="footerNavOption">
      <span>{FooterTitle}</span>
    </div>
  )
}

export default FooterNavOption;