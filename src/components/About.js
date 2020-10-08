import React from 'react'

import cover from '../assets/cover.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-block">
      <div className="about">
        <div className="about-coverPhoto">
          <div className='pseudo-blockOne'>Hey, I’m Basil</div>
          <div className='pseudo-blockTwo'>THE PERSON BEHIND THIS SHOTS</div>
          <img className="coverPhoto-img" src={cover} alt="cover" />
        </div>
        <div className="about-text-block">
          <div className="block-one">Hey, I’m Basil</div>
          <div className="block-two">THE PERSON BEHIND THIS SHOTS</div>
          <div className="block-three">
            Pharetra massa massa ultricies mi quis hendrerit dolor magna eget
          </div>
          <div className="block-four">
            Feugiat vivamus at augue eget arcu. Adipiscing at in tellus integer
            feugiat scelerisque varius. Quis enim lobortis scelerisque fermentum
            dui faucibus in ornare
          </div>
          <div className="block-five">MORE ABOUT ME</div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default About ;
