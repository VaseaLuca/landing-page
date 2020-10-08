import React from 'react';
import Slider from 'react-slick';

import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slide2.jpg';
import slider3 from '../assets/slide3.jpg';
import slider4 from "../assets/couple-park.jpg";
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
  
  const slides = [slider1, slider2, slider3, slider4];

  const sliderImg = slides.map((slide,index)=> {
    return <div key={index}><img className='slider-img' src={slide} alt=""/></div>
  })


  return (
    <div className="slider">
      <Slider {...settings}>
        {sliderImg}
      </Slider>
    </div>
  );
}
export default SimpleSlider;