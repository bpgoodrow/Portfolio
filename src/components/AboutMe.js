import React from "react";
import './AboutMe.css';

function AboutMe() {
  return (
    <React.Fragment>
        <div className="aboutMeHeader">
          <div>
            A
          </div>
          <div>
            B
          </div>
          <div>
            O
          </div>
          <div>
            U
          </div>
          <div>
            T
          </div>
          <div>
            M
          </div>
          <div>
            E
          </div>
        </div>
        <div className="aboutMeBody">
          <div className="aboutMeHero">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="aboutMeNumber">
            1
          </div>
          <div className="aboutMeSideBar">
            <div className="aboutMeSideBarNested">
              width: calc(1.414 * 200px);
              transform: rotate(45deg);
              transform-origin: top left;
              border-top: 1px solid blue;
              position: absolute;
              top: -2px;
              left: -1px;
              box-sizing: border-box;
              width: calc(1.414 * 200px);
              transform: rotate(45deg);
              transform-origin: top left;
              border-top: 1px solid blue;
              position: absolute;
              top: 
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default AboutMe;