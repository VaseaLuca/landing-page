import React from 'react'

import './Infoblock.css';

const Infoblock = () => {
  return (
    <div className="info-block">
      <div className="info-block-row">
        <div className="info-block-rowOne">
          Soul Family <br/> Photography taken <br/> with passion
        </div>
        <div className="info-block-row-space" />
        <div className="info-block-rowTwo">
          I’M A SELF TAUGHT FAMILY AND <br/> LIFESTYLE PHOTOGRAPHER, <br/> BASED IN IASI.
        </div>
      </div>
      <div className="info-block-rowThree">
        Nullam vehicula ipsum a arcu. Neque convallis a cras semper. Arcu non
        odio <br/> euismod lacinia at quis risus. Consequat ac felis donec et odio.
        Amet tellus cras adipiscing enim eu
      </div>
    </div>
  );
}

export default Infoblock
