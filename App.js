import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Pages/Home.js';
import Nav from './Pages/Nav.js';
import Footer from './Pages/Footer.js';
import './App.css';
import P790 from './Pages/ClubPages/P790';
import P770 from './Pages/ClubPages/P770';
import P7MC from './Pages/ClubPages/P7MC';
import P7MB from './Pages/ClubPages/P7MB';
import Cart from './Pages/Cart';
import {CartArrayProvider} from './CartArrayContext';
import ScrollToTop from './ScrollToTop.js';

function App() {

  return (
      <Router>
        <ScrollToTop />
        <div>
          <Nav />
          <CartArrayProvider>
            <Switch>
                <Route path="/" exact component={Home} />
                  <Route path="/P790" exact component={P790} />
                  <Route path="/P770" exact component={P770} />
                  <Route path="/P7MC" exact component={P7MC} />
                  <Route path="/P7MB" exact component={P7MB} />
                  <Route path="/Cart" exact component={Cart} />
            </Switch>
          </CartArrayProvider>
          <Footer />
        </div>
      </Router>
  )
}

export default App;
