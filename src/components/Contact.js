import React, { useState, useRef } from 'react';
import './Contact.css';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import emailjs from '@emailjs/browser';
import FooterNav from './FooterNav';

const Contact = () => {

  const [buttonText, setButtonText] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gf7t3i6', 'template_za24svi', form.current, 'tPq88Q7x8tb9yuPwd')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  function handleClick() {
    setButtonText('Message Sent!')
  }

  return (
    <React.Fragment>
      
       <motion.div
        initial={{ y: window.innerHeight, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .4 }}
      >
        <div className="contactWrapper">
          <div className="contactHeader">
            <div>
              C
            </div>
            <div>
              O
            </div>
            <div>
              N
            </div>
            <div>
              T
            </div>
            <div>
              A
            </div>
            <div>
              C
            </div>
            <div>
              T
            </div>
          </div>
        <div className="contactBody">
          <div className="contactHero">
            <div className='contactHeroHeader'>
              Drop me a line, I'm always happy to chat
            </div>
            <div className='contactHeroForm'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='contactHeroFormName'>
                  <input type="text" name="user_name" placeholder='Name'/>
                </div>
                <div className='contactHeroFormEmail'>
                  <input type="email" name="user_email" placeholder='Email Address'/>
                </div>
                <div className='contactHeroFormMessage'>
                    <textarea name="message" placeholder='Message'/>
                </div>
                <div className='contactHeroFormButtonReplyContainer'>
                  <div className='contactHeroFormButton'>
                    <button class="button" onClick={handleClick}><span>Submit </span></button>
                  </div>
                  <div className='contactHeroFormReply'>
                    {buttonText}
                  </div>
                </div>
              </form>
            </div>

        </div>
        <div className="contactNumber">
          2
        </div>
      </div>
      <FooterNav/>
      </div>
      </motion.div>
    </React.Fragment>
  )
}

export default Contact;