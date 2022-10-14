import React, { useState, useRef } from 'react';
import './Contact.css';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import FooterNav from './FooterNav';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {

  const [replyText, setReplyText] = useState('');
  const form = useRef();
  const captchaRef = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gf7t3i6', 'template_za24svi', form.current, 'tPq88Q7x8tb9yuPwd')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          setReplyText('Message Sent!')
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

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
              Drop me a line or give me a follow, 
              <br/>
              I'm always happy to chat
            </div>
            <div className='contactHeroForm'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='contactHeroFormReply'>
                    {replyText}
                </div>
                <div className='contactHeroFormName'>
                  <input type="text" name="user_name" placeholder='Name'/>
                </div>
                <div className='contactHeroFormEmail'>
                  <input type="email" name="user_email" placeholder='Email Address'/>
                </div>
                <div className='contactHeroFormMessage'>
                    <textarea name="message" placeholder='Message'/>
                </div>
                
                <div className='recaptcha'>
                  <ReCAPTCHA 
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                  ref={captchaRef}
                />
                </div>
                <div className='contactHeroFormButtonReplyContainer'>
                  <div className='contactHeroFormButton'>
                    <button class="button"><span>Submit </span></button>
                  </div>
                </div>
              </form>
            </div>

            <div className='contactHeroSocialLinks'>
              <div>
                <a href="https://github.com/bpgoodrow/" target="_blank">
                  <img
                    alt="github logo"
                    srcset="
                    ./github.png
                    "
                  />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/bengoodrow/" target="_blank">
                  <img
                    alt="Linkedin logo"
                    srcset="
                    ./linkedin.png
                    "
                  />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/bpgoodrow/" target="_blank">
                  <img
                    alt="Instagram logo"
                    srcset="
                    ./insta.png
                    "
                  />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/" target="_blank">
                  <img
                    alt="Facebook logo"
                    srcset="
                    ./facebook.png
                    "
                    />
                </a>
              </div>
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