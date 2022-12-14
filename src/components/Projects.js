import React from "react";
import './Projects.css';
import { motion } from "framer-motion";
import FooterNav from "./FooterNav";

function Portfolio() {
  return(
       <motion.div
       initial={{ y: window.innerHeight, opacity: 0 }}
       animate={{ y: 1, opacity: 1 }}
       transition={{ duration: .4 }}
      >
      <div className="portfolioHeader">
        <div>
          P
        </div>
        <div>
          R
        </div>
        <div>
          O
        </div>
        <div>
          J
        </div>
        <div>
          E
        </div>
        <div>
          C
        </div>
        <div>
          T
        </div>
        <div>
          S
        </div>
      </div>
      <div className="portfolioBody">
        <div className="portfolioHero">
          <div className="portfolioHeroRow1">
            <div className="projectOption">
              <a href="https://github.com/bpgoodrow/Portfolio" target="_blank">
                <img src="./portfolio.png" alt="portfolio image" />
              </a>
            </div>
            <div className="projectOption">
              <a href="https://github.com/bpgoodrow/Wrench-Knight" target="_blank">
              <img src="./wrench-knight.png" alt="portfolio image" />
              </a>
            </div>
          </div>
          <div className="portfolioHeroRow2">
            <div className="projectOption">
              <a href="https://github.com/bpgoodrow/Arkham-Horror" target="_blank">
                <img src="./arkham-horror.png" alt="arkham horror game"/>
              </a>
            </div>
            <div className="projectOption">
              <a href="https://github.com/bpgoodrow/FunctionalJSRPG" target="_blank">
                <img src="./paper-pusher.png" alt="paper push game"/>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolioNumber">
          <div className="portfolioNumberChild">
           3 
          </div>
        </div>
      </div>
      <div className="footerNavProjects">
        <FooterNav/>
      </div>
      </motion.div>
  )
}

export default Portfolio;