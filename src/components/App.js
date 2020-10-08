import React from 'react';

import Slider from './Slider';
import Navbar from './Navbar';
import Infoblock from './Infoblock';
import Portfolio from './Portfolio';
import About from './About';
import Work from './Work';
import Testimonials from './Testimonials';
import Footer from './Footer';


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Slider />
      <Infoblock />
      <Portfolio />
      <About />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;