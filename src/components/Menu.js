import React, {useState} from 'react';

import './Menu.css';

const Menu = ({ openSideDrawer, isSidedrawerOpen, isNotHome }) => {
  const [trigger, settrigger] = useState(false);

  return (
    <div
      className="menu"
      onClick={(() => settrigger(!trigger), openSideDrawer)}
    >
      <div className={`menu-stick ${isNotHome && `menu-stick-dark`} ${isSidedrawerOpen && `trigger`}`}></div>
    </div>
  );
};

export default Menu;