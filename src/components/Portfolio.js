import React from "react";

import couple from "../assets/couple.jpg";
import coupleSingle from "../assets/couple-single.jpg";
import portrait from "../assets/portrait.jpg";
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-first">
        <img src={couple} alt="" />
        <div className="portfolio-text">Contact Us</div>
      </div>
      <div className="portfolio-space" />
      <div className="portfolio-second">
        <img src={coupleSingle} alt="" />
        <div className="portfolio-text">View My Portfolio</div>
      </div>
      <div className="portfolio-space" />
      <div className="portfolio-third">
        <img src={portrait} alt="" />
        <div className="portfolio-third-top">CRAS TINCIDUNT DONEC</div>
        <div className="portfolio-third-bottom">
          Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
