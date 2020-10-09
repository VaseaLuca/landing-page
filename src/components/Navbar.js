import React from 'react';

import Menu from './Menu';
import logo from '../assets/logo-white.png';
import './Navbar.css';

const Navbar = ({ drawer }) => {
  return (
    <div className='nav'>
      <div className="navbar">
        <div className="nav-left">
          <img className="nav-logo" src={logo} alt="logo" />
        </div>
        <div className="nav-space" />
        <div className="nav-right">
          <div className='menu'><Menu /></div>
          <div className="nav-menu">Portfolio</div>
          <div className="nav-menu">Blog</div>
          <div className="nav-menu">Pricing</div>
          <div className="nav-menu">Contact us</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;