import React, { useContext, useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

export default function Contact() {


  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v6jom8z', 'template_jkvssh4', form.current, {
        publicKey: 'mc2cMwxW6iPO3YQa_v',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur"
            style={{ background: "#ABF1FF94" }}
          >
          </div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className='user' placeholder='Name' id="" />
          <input type="email" name="email_name" className='user' placeholder='Email' id="" />
          <textarea name="message" className='user' placeholder='Message' id=""></textarea>
          <input type="submit" value="Send" name="" className='button' id="" />
          <span>{done && "Thanks for Contacting me!"}</span>
          <div
            className='blur c-blur'
            style={{ background: "var(--purple)" }}
          >
          </div>
        </form>
      </div>
    </div>
  )
}
