import React from 'react'
import { Link } from 'react-router-dom';

import img1 from "../assets/portfolio/family0.jpg";
import img2 from "../assets/portfolio/protfolio2.jpg";
import './Pricing.css';


const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-block">
        <div className="pricing-photo">
          <img src={img1} alt="" />
        </div>
        <div className='pricing-space' />
        <div className="pricing-text">
          <div className="pricing-description">Family Kit</div>
          <div className="pricing-price">- Starts from 180$ -</div>
          <Link to='/contact' ><div className="pricing-know">Know More</div></Link>
        </div>
      </div>
      <hr/>
      <div className="pricing-block-two">
        <div className="pricing-text">
          <div className="pricing-description">Family Kit</div>
          <div className="pricing-price">- Starts from 150$ -</div>
          <Link to='/contact' ><div className="pricing-know">Know More</div></Link>
        </div>
        <div className="pricing-photo">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
