import React from 'react';

import './Workcard.css';

const Workcard = ({ img, category, description, date, landscape }) => {
  return (
    <div className={`workcard ${landscape && 'workcard-landscape' }`}>
      <img className='work-img' src={img} alt="img" />
      <div className="work-category">{category}</div>
      <div className="work-description">{description}</div>
      <div className="work-date">{date}</div>
    </div>
  );
};
export default Workcard;