import React from 'react';

import './Workcard.css';

const Workcard = ({ img, category,description,date }) => {
  return (
    <div className="workcard">
      <img className='work-img' src={img} alt="img" />
        <div className="work-category">{category}</div>
        <div className="work-description">{description}</div>
        <div className="work-date">{date}</div>
    </div>
  );
}
export default Workcard;