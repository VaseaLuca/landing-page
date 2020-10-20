import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Menu from './Menu';
import logo from '../assets/logo-white.png';
import logo_dark from '../assets/logo.png';
import './Navbar.css';


const Navbar = ({ openSideDrawer, isSidedrawerOpen }) => {

  const [isNotHome, setIsNotHome] = useState(false);
  const [isClient, setIsClient] = useState(false);

  let location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/portfolio" ||
      location.pathname === "/client" ||
      location.pathname === "/pricing" ||
      location.pathname === "/contact"
    ) {
      setIsNotHome(true);
    }
    if (location.pathname === "/") {
      setIsNotHome(false);
    }
    if (location.pathname === '/client'){
      setIsClient(true);
    } else {
      setIsClient(false);
    }
  }, [location]);

  return (
    <div className={`nav ${isClient && `none`}`}>
      <div className="navbar">
        <Link to='/' className="nav-left">
          <img className={`nav-logo`} src={`${isNotHome? logo_dark : logo}`} alt="logo" />
        </Link>
        <div className="nav-space" />
        <div className="nav-right">
          <div className="menu">
            <Menu openSideDrawer={openSideDrawer} isSidedrawerOpen={isSidedrawerOpen} isNotHome={isNotHome} />
          </div>
          <Link to='/portfolio' className={`nav-menu ${isNotHome && `nav-menu-dark`}`}>Portfolio</Link>
          <Link to='/client' className={`nav-menu ${isNotHome && `nav-menu-dark`}`}>Client Area</Link>
          <Link to='/pricing' className={`nav-menu ${isNotHome && `nav-menu-dark`}`}>Pricing</Link>
          <Link to='/contact' className={`nav-menu ${isNotHome && `nav-menu-dark`}`}>Contact us</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;