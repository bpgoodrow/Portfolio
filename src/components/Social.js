import React from "react";
import './Social.css';
import { motion } from "framer-motion";
import FooterNav from "./FooterNav";
import SpotifyPlayer from "react-spotify-web-playback";

function Social () {
  
  return(
    <React.Fragment>
      <motion.div
        initial={{ y: window.innerHeight, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: .4 }}
      >
      <div className="socialHeader">
        <div>
          M
        </div>
        <div>
          U
        </div>
        <div>
          S
        </div>
        <div>
          I
        </div>
        <div>
          C
        </div>
      </div>

      <div className="socialBody">
        <div className="socialHero">
          <div className="socialHeroText">
            Music has always been a huge part of my life.
            <br/>
            Here a couple projects I'm in:
          </div>
          <div className="spotifyContainer">
            <div>
              <a href="https://open.spotify.com/track/6hAs8YvZ6OQKzUxbpTtqaS?si=da09b2c9139f49e9" target='_blank'>
                <img src="./coyotetalk.png"/>
              </a>
            </div>
            <div>
              <a href="https://open.spotify.com/track/0BbNkc3fCOXFK8933NsLvT?si=d3f6705a3b864b22" target='_blank'>
                <img src="./pvnchr.png"/>
              </a>
            </div>
          </div>
        </div>

        <div className="socialNumber">
          <div className="socialNumberChild">
            5 
          </div>
          
        </div>
      </div>
      <FooterNav/>
      </motion.div>
    </React.Fragment>
  )
}

export default Social;