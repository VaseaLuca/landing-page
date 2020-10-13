import React from 'react';

import Slider from "./Slider";
import Infoblock from "./Infoblock";
import Portfolio from "./Portfolio";
import About from "./About";
import Work from "./Work";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
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

export default Home;