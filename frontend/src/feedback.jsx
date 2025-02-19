import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from './header';
import Footer from './footer';
import { useNavigate } from "react-router-dom";
function Feedback() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y9p1z4h', 'template_yromq4p', form.current, {
        publicKey: 'E_0Yd3INjYfT5DGKe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('FeedBack Sended');
          navigate("/");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <Header/>
    <h2 align="center">Feedback</h2>
    <div id='feedback' align="center" className='container'>
      <br/>
    <form ref={form} onSubmit={sendEmail}>
      <label className='control-label'>Name</label>
      <input className='form-control' placeholder='Your Name' type="text" name="from_name" /><br/>
      <label className='control-label'>Email</label>
      <input className='form-control' placeholder='Your Email' type="email" name="to_name" /><br/>
      <label className='control-label'>Message</label>
      <textarea className='form-control'placeholder='Your Message' name="message" /><br/>
      <input className='btn btn-success topnav' type="submit" value="Send" />
    </form>
    </div>
    <Footer/>
    </>
  );
};
export default Feedback