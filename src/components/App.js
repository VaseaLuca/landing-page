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
//   const [windowSize, setWindowSize] = useState({width:undefined})

//   useEffect(()=> {
//     function handleResize() {
//       setWindowSize({width: window.innerWidth})
//     }
    
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   function resizeScreen() {
//     if(windowSize.width > 1024) {
//    return () => setSideDrawerOpen(!sideDrawerOpen);
//   } else {
//     return  () => setSideDrawerOpen(!sideDrawerOpen);
//   }
//    }
// resizeScreen();

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