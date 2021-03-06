import React, { Component } from 'react';
import Home from './Home';
import Home2 from './Home2';
import NavbarTop from './NavbarTop';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from './Footer';
import Locations from './Locations';
import { postCleaner } from '../redux/ActionCreators';
import States from './States';
import States2 from './States2';
import States3 from './States3';


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
  postCleaner: (cleanerId, fullname, phone, email, location) => (postCleaner(cleanerId, fullname, phone, email, location)),
};

//router
class MainComponent extends Component {
  render() {

    //takes the information and filters out the specific array



    //mains refers to before redux was identified ie: comments: COMMENTS 
    //



    //Connects to each thing
    // : on campsiteId tells what follows forward slash is going to be parameter and takes whatever it is and puts it in main

    //If I make Home at top, it still displays information above at the page.
    
    //None of the CSS seems to appear on Home component alone...
    return (
      <div>

      <NavbarTop />

      <Route exact path="/" component={Home2} />
      
        <Switch>
          <Route path='/Home' component={Home} />
          <Route path='/Locations' component={Locations} />
          <Route path='/States' component={States} />
          <Route path='/States2' component={States2} />
          <Route path='/States3' component={States3} />
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