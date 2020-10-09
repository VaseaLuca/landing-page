import React, {useState} from 'react';

import './Menu.css';

const Menu = () => {
  const [trigger, settrigger] = useState(false);

  return (
    <div className="menu" onClick={() => settrigger(!trigger)}>
      <div className={`menu-stick ${trigger && `trigger`}`}></div>
    </div>
  );
};

export default Menu;