import React, { Component } from 'react';
import Home from './Home';
import NavbarTop from './NavbarTop';
import Covid from './Covid';
import {Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import About from './About';
import Locations from './Locations';



//router
class MainComponent extends Component {
    render() {
      
      const HomePage = () => {
        return(
          <Home />
        );
      }

      const AboutPage = () => {
        return (
          <About />
        );
      }

      //Connects to each thing
      return(
        <div>
        <NavbarTop />
        <Switch>
          <Route path='/Home' component={HomePage} />
          <Route path='/About' component={AboutPage} />
          <Route path='/Covid' component={Covid} />
          <Route path='/Locations' component={Locations} />
        </Switch>

        <Footer />
        </div>

      );
    }
  }

  export default MainComponent;