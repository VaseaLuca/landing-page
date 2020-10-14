import React from 'react'

import PortfolioCard from './PortfolioCard';
import './PortfolioArea.css';
import portfolio1 from "../assets/portfolio/protfolio2.jpg";
import portfolio2 from "../assets/portfolio/protfolio4.jpg";
import portfolio3 from "../assets/portfolio/protfolio3.jpg";
import portfolio4 from "../assets/portfolio/portfolio7.jpg";
import portfolio5 from "../assets/portfolio/family0.jpg";
import portfolio6 from "../assets/portfolio/protfolio1.jpg";

const PortfolioArea = () => {
  return (
    <div className="portfolioArea">
      <div className="portfolioArea-block">
        <PortfolioCard img={portfolio1} name="Anna & John" view="View" />
        <PortfolioCard img={portfolio2} name="Maia & Leon" view="View" />
        <PortfolioCard img={portfolio3} name="Alex & Irren" view="View" />
        <PortfolioCard img={portfolio4} name={`Miller's Family`} view="View" />
        <PortfolioCard img={portfolio5} name={`Smith's Family`} view="View" />
        <PortfolioCard img={portfolio6} name="Jacob & Anastasia" view="View" />
      </div>
    </div>
  );
}

export default PortfolioArea;
