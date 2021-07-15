import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  NavbarTop  from './html/NavbarTop';
import Footer from './html/Footer';
import Home from './html/Home';
import About from './html/About';
import Locations from './html/Locations';
import Covid from './html/Covid';


//router
class App extends Component {
  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }

    return(
      <div>
        <NavbarTop />
        
        <Router>
          
          <Link className="Home" to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Locations">Locations</Link>
          <Link to="/Covid">Covid</Link>
          

          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Locations">
              <Locations />
            </Route>
            <Route path="/Covid">
              <Covid />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}


export default App;
