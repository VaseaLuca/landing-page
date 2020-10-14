import React from 'react';

import Slider from "./Home/Slider";
import Infoblock from "./Home/Infoblock";
import Portfolio from "./Home/Portfolio";
import About from "./Home/About";
import Work from "./Home/Work";
import Testimonials from "./Home/Testimonials";
import Footer from "./Home/Footer";

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