import React from 'react';

import Slider from './Slider';
import Navbar from './Navbar';
import Infoblock from './Infoblock';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Slider />
      <Infoblock />
    </div>
  );
}

export default App;