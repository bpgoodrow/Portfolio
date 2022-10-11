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
              <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/6hAs8YvZ6OQKzUxbpTtqaS?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/0BbNkc3fCOXFK8933NsLvT?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              
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