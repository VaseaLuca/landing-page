import React from 'react'

import fb_logo from '../assets/facebook.png';
import ig_logo from '../assets/instagram.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-block-one">
        <div className="footer-next">Next Steps</div>
        <div className="footer-text">
          Cras pulvinar mattis nunc sed. Viverra nam libero justo laoreet sit
          amet cursus sit amet. Dolor sit amet consectetur
        </div>
        <div className="footer-img">
          <img className="footer-fb" src={fb_logo} alt="" />
          <img className="footer-ig" src={ig_logo} alt="" />
        </div>
      </div>
        <div className='footer-line'/>
      <div className="footer-block-two">
        <div className="footer-menu-align-first">
          <div className="footer-menu">Portfolio</div>
          <div className="footer-menu">Blog</div>
        </div>
        <div className="footer-menu-align-second">
          <div className="footer-menu">Pricing</div>
          <div className="footer-menu">Contact us</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
