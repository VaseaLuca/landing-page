import React,{ useState } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Navbar';
import Backdrop from './Backdrop';
import Sidedrawer from './Sidedrawer';
import Home from './Home';
import Portfolio from './PortfolioArea';
import Client from './Client';
import Pricing from './Pricing';
import Contact from './Contact_US';


const App = () => {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  return (
    <div className="app">
      <Backdrop click={() => setSideDrawerOpen(!sideDrawerOpen)} open={sideDrawerOpen} />
      <Navbar openSideDrawer={() => setSideDrawerOpen(!sideDrawerOpen)} isSidedrawerOpen={sideDrawerOpen} />
      <Sidedrawer sideDrawerIsOpen={sideDrawerOpen} />
      <Route path='/' exact component={Home} />
      <Route path='/portfolio' exact component={Portfolio} />
      <Route path='/client' exact component={Client} />
      <Route path='/pricing' exact component={Pricing} />
      <Route path='/contact' exact component={Contact} />
    </div>
  );
}

export default App;