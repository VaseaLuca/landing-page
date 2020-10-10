import React, {useState} from 'react';

import './Menu.css';

const Menu = ({ openSideDrawer, isSidedrawerOpen }) => {
  const [trigger, settrigger] = useState(false);


  return (
    <div
      className="menu"
      onClick={(() => settrigger(!trigger), openSideDrawer)}
    >
      <div className={`menu-stick ${isSidedrawerOpen && `trigger`}`}></div>
    </div>
  );
};

export default Menu;