import React from 'react'
import "./Footer.css"
import {FaFacebookF, FaInstagram, FaGithub} from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>CHANDAN</a>

      <ul className='permalinks'>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="#testmonial">TESTMONIAL</a></li>
      </ul>
      <div className="footer_social">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://github.com"><FaGithub/></a>
      </div>
      <div className="footer_copy">
        <small>
          &copy; CHANDAN PORTFOLIO, all right reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer