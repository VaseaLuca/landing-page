import React from 'react';

import testimonials_img from "../../assets/cave-photo.jpg";

import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className='testimonials-text-block'>
      <div className="testimonials-text">Testimonials:</div>
      <div className="testimonials">
        <div className="testimonials-img">
          <img src={testimonials_img} alt="" />
          <div className="testimonials-more">Read more Testimonials</div>
        </div>
        <div className="testimonials-block">
          <div className="testimonials-blockOne">
            Dignissim suspendisse in est ante in nibh mauris. Mi bibendum neque
            egestas congue quisque egestas.
          </div>
          <div className="testimonials-blockTwo">
            Dignissim suspendisse in est ante in nibh mauris. Mi bibendum neque
            egestas congue quisque egestas. Tincidunt ornare massa eget egestas.
            Adipiscing diam donec adipiscing tristique risus nec feugiat.
            Aliquet nibh praesent tristique magna.
          </div>
          <div className="testimonials-blockThree">Alice Donovan</div>
          <div className="testimonials-blockFour">Iasi, Romania</div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
