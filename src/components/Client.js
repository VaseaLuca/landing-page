import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";
import './Client.css';

const Client = () => {
  return (
    <div className="client">
      <div className="client-block">
        <div className="client-logo">
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="client-text">Enter password to view your story</div>
        <div className="client-input">
          <form action="">
            <input type="password" name="" id="" placeholder="Enter Password" />
          </form>
        </div>
        <div className="client-button-block">
          <button className="client-button">Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Client;
