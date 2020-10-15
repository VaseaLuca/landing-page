import React from 'react'

import './PortfolioCard.css';

const PortfolioCard = ({ img, name, view }) => {
  return (
    <div className="portfolioCard">
      <div className="portfolioCard-block">
          <div className="portfolioCard-img">
            <img src={img} alt="img" />
          </div>
          <div className="portfolioCard-space" />
          <div className="portfolioCard-name">{name}</div>
          <div className="portfolioCard-view">{view}</div>
      </div>
    </div>
  );
}

export default PortfolioCard;
