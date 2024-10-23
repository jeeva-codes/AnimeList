import React from 'react'
import '../About/About.css'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
const About = () => {
  return (
    <div>
        <div className="about-container">
        <div className="message-container">
            {/* <h1>Notice</h1> */}
            <p>This website provides an anime list based on user input, utilizing the open-source Jikan API for accurate and comprehensive information.
              API i used :<span id='api-link'>https://api.jikan.moe/</span> </p>
        </div>
        <div className="contact-container">
        <div className="contact-links">
        <h2 className='contact-links-title'>Get in Touch</h2>
      <div className="contact-form">
      <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="28bfeca3-c4f9-440b-b8b1-43170f36278a"></input>
      <input type="text" name='name' required placeholder='Enter Your Name' className='contact-input' />
      <input type="email" name='email' required placeholder='Enter Your E-mail' className='contact-input' />
      <textarea name="message" required placeholder='Write us a Message' className='contact-input'></textarea>
      <button type='submit' className='submit-btn'>Submit<FaArrowRight className='arrowicon' /></button>
      </form>
      </div>
     
        <div className="contact-links-icons">
              <ul style={{listStyleType:'none'}} className='icons'>
                <li><a href='https://github.com/jeeva-codes' target="_blank"> <IoLogoGithub className='icon' /></a></li>
                <li><a href='https://www.linkedin.com/in/jeeva-m-b9b373334' target="_blank">  <FaLinkedin  className='icon'/></a></li>
                <li><a href='mailto: jeevacode2@gmail.com' target="_blank">  <BiLogoGmail  className='icon'/></a></li>
                <li><a href='https://www.instagram.com/_jeeva_madjack_?igsh=MTJ5d3phMjI3Zjg0OQ==' target="_blank">  <FaInstagram  className='icon'/></a></li>
              </ul>
      <p><FaMobileAlt /> : +91 6374874464</p>
        </div>
      </div>
    </div>
    
        </div>
        </div>

  )
}

export default About