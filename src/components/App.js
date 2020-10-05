import React from 'react';

import Slider from './Slider';
import Navbar from './Navbar';
import Infoblock from './Infoblock';
import Portfolio from './Portfolio';
import About from './About';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Slider />
      <Infoblock />
      <Portfolio />
      <About />
      
    </div>
  );
}

export default App;