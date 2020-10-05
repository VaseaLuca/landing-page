import React from 'react';
import Slider from 'react-slick';

import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slide2.jpg';
import './Slider.css';


const SimpleSlider = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      autopaySpeed: 27600,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      accessibility: true,
    };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div className=''>
          <img className="slider-img" src={slider1} alt="slide1" />
        </div>
        <div className=''>
          <img className="slider-img" src={slider2} alt="slide2" />
        </div>
        
      </Slider>
    </div>
  );
}
export default SimpleSlider;