import React, { Component } from 'react';
import Home from './Home';
import NavbarTop from './NavbarTop';
import Covid from './Covid';
import {Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from './Footer';
import About from './About';
import Locations from './Locations';
import Main from '../shared/main';
import { postCleaner } from '../redux/ActionCreators';

//set up redux
//takes state as argument and returns arrays as props
const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    cleaner: state.cleaner,
    main: state.main
  }
}

const mapDispatchToProps = {
  postCleaner: (cleanerId, email, phone, fullname) => (postCleaner(cleanerId, email, phone, fullname)),
};

//router
class MainComponent extends Component {
    render() {
      
      //takes the information and filters out the specific array
    
      const HomePage = () => {
        return(
          <Home />
        );
      };

      //mains refers to before redux was identified ie: comments: COMMENTS 
      //
  

      const AboutPage = () => {
        return (
          <About />
        );
      }

      //Connects to each thing
      // : on campsiteId tells what follows forward slash is going to be parameter and takes whatever it is and puts it in main
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

  //set up connect method for mapStateToProps
  //withRouter wraps export in it so it will still work
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));

  //Figure out the filter part