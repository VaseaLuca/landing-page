import React from 'react'

import mountain1 from "../assets/mountain1.jpg";
import couple1 from "../assets/couple1.jpg";
import couple2 from "../assets/couple2.jpg";
import couple3 from '../assets/couple3.jpg';
import couple4 from "../assets/couple-park.jpg";
import mountain2 from "../assets/mountain2.jpg";
import Workcard from './Workcard';
import './Work.css';

const Work = () => {
  return (
    <div className="work">
      <div className="work-row-one">
        <Workcard
          img={mountain1}
          category="Travel"
          description="Tempor orci dapibus ultrices in iaculis nunc sed"
          date="August 19, 2020"
        />
        <Workcard
          img={couple1}
          category="Couple"
          description="Adipiscing diam donec adipiscing nec feugiat"
          date="April 22, 2020"
        />
        <Workcard
          img={couple2}
          category="Couple"
          description="Magna fermentum iaculis eu non in vitae ultrices"
          date="March 11, 2020"
        />
      </div>
      <div className='work-row-two'>
        <Workcard
          img={couple3}
          category="Couple"
          description="Ut tellus elementum sagittis vitae et leo duis"
          date="September 9, 2020"
        />
        <Workcard
          img={couple4}
          category="Couple"
          description="Amet nisl suscipit adipiscing bibendum est"
          date="September 2, 2020"
        />
        <Workcard
          img={mountain2}
          category="Travel"
          description="Massa id neque aliquam vestibulum morbi blandit"
          date="August 14, 2020"
        />
      </div>
    </div>
  );
}

export default Work;
