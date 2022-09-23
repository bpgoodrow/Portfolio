import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <React.Fragment>
      <Link to ="/about-me"><h4>About Me</h4></Link>
    </React.Fragment>
  )
}

export default AboutMe;