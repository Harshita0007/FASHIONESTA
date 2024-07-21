import React from 'react';
import './Footer.css';
import logo from '../Assests/logo.png.png';
import inst from '../Assests/instagram-icon.webp';
import whatsapp from '../Assests/whatsapp-color-icon.webp';
import pinterest from '../Assests/pinterest-color-icon.webp';

const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-logo">
    <img src={logo}  alt="" />
    <p>FASHIONESTA</p>
    </div>
    <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Abouts</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icons">
        <div className="footer-icon-container">
         <img src={inst} alt="" />
        </div>
        <div className="footer-icon-container">
         <img src={whatsapp} alt="" />
        </div>
        <div className="footer-icon-container">
         <img src={pinterest} alt="" />
        </div>
    </div>
    <div className="footer-copywrite">
    <hr/>
    <p>Copyright @ 2023- All Right Reserved.</p>

    </div>
      
    </div>
  )
}

export default Footer
