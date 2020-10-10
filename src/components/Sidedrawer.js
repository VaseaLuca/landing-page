import React from 'react'


import './Sidedrawer.css';


const Sidedrawer = ({ sideDrawerIsOpen }) => {
  return (
    <div className={`sidedrawer ${sideDrawerIsOpen && `open`}`}>
      <ul>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Pricing</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default Sidedrawer
