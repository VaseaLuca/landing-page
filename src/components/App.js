import React,{ useState } from 'react';

import Slider from './Slider';
import Navbar from './Navbar';
import Infoblock from './Infoblock';
import Portfolio from './Portfolio';
import About from './About';
import Work from './Work';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Backdrop from './Backdrop';
import Sidedrawer from './Sidedrawer';



const App = () => {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  return (
    <div className="app">
      <Backdrop click={() => setSideDrawerOpen(!sideDrawerOpen)} open={sideDrawerOpen} />
      <Navbar openSideDrawer={() => setSideDrawerOpen(!sideDrawerOpen)} isSidedrawerOpen={sideDrawerOpen} />
      <Sidedrawer sideDrawerIsOpen={sideDrawerOpen} />
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