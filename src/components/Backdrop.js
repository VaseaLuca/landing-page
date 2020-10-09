import React from 'react'

import './Backdrop.css';

const Backdrop = ({ click, open }) => {
  return <div className={`${open && `backdrop`}`} onClick={click}></div>;
}

export default Backdrop;
