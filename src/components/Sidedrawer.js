import React from 'react'
import { Link } from 'react-router-dom';

import './Sidedrawer.css';


const Sidedrawer = ({ sideDrawerIsOpen }) => {
  return (
    <div className={`sidedrawer ${sideDrawerIsOpen && `open`}`}>
      <ul>
        <Link to='/portfolio'><li>Portfolio</li></Link>
        <Link to='/client'><li>Client Area</li></Link>
        <Link to='pricing'><li>Pricing</li></Link>
        <Link to='contact'><li>Contact us</li></Link>
      </ul>
    </div>
  );
};

export default Sidedrawer
