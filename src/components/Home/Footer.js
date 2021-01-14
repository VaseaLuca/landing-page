import React from 'react';
import { Link } from 'react-router-dom';

import fb_logo from '../../assets/facebook.png';
import ig_logo from '../../assets/instagram.png';

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
          <Link to='/portfolio'><div className="footer-menu">Portfolio</div></Link>
          <Link to='/client'><div className="footer-menu">Client Area</div></Link>
        </div>
        <div className="footer-menu-align-second">
          <Link to='/pricing'><div className="footer-menu">Pricing</div></Link>
          <Link to='/contact'><div className="footer-menu">Contact us</div></Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
