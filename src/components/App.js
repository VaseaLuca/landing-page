import React from 'react';

import Slider from './Slider';
import Navbar from './Navbar';
import Infoblock from './Infoblock';
import Portfolio from './Portfolio';
import About from './About';
import Work from './Work';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Slider />
      <Infoblock />
      <Portfolio />
      <About />
      <Work />
    </div>
  );
}

export default App;