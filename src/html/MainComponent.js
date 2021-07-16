import React, { Component } from 'react';
import Home from './Home';
import NavbarTop from './NavbarTop';
import Covid from './Covid';
import {Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from './Footer';
import About from './About';
import Locations from './Locations';

//set up redux
//takes state as argument and returns arrays as props
const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    cleaner: state.cleaner
  }
}

//router
class MainComponent extends Component {
    render() {
      
      //takes the information and filters out the specific array
      //cleaners is example of input that i want to make
      
      //CHECL IF CLEANERS NEEDS AN S OR NOT WITH INSTRUCTOR
      const HomePage = () => {
        return(
          <Home 
            cleaners={this.props.cleaners.filter(cleaners => cleaners.featured[0])}
            main={this.props.main.filter(main => main.featured[0])}
            
          />
        );
      };

      //mains refers to before redux was identified ie: comments: COMMENTS 
      //
      const MainWithId = ({ match }) {
        return (
          <MainId campsite={this.state.main.filter(main => main.id === +match.params.mainId[0])}
        )
      }

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
          
          <Route path='/directory/:mainId' component={MainId} />
        </Switch>

        <Footer />
        </div>

      );
    }
  }

  //set up connect method for mapStateToProps
  //withRouter wraps export in it so it will still work
  export default withRouter(connect(mapStateToProps)(MainComponent));

  //Figure out the filter part