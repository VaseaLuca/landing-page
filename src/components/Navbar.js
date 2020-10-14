import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';
import logo from '../assets/logo-white.png';
import './Navbar.css';

const Navbar = ({ openSideDrawer, isSidedrawerOpen }) => {
  return (
    <div className="nav">
      <div className="navbar">
        <Link to='/' className="nav-left">
          <img className="nav-logo" src={logo} alt="logo" />
        </Link>
        <div className="nav-space" />
        <div className="nav-right">
          <div className="menu">
            <Menu
              openSideDrawer={openSideDrawer}
              isSidedrawerOpen={isSidedrawerOpen}
            />
          </div>
          <Link to='/portfolio' className="nav-menu">Portfolio</Link>
          <Link to='/client' className="nav-menu">Client Area</Link>
          <Link to='/pricing' className="nav-menu">Pricing</Link>
          <Link to='/contact' className="nav-menu">Contact us</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;