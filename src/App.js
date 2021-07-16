import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import  NavbarTop  from './html/NavbarTop';
import Footer from './html/Footer';
import Home from './html/Home';
import About from './html/About';
import Locations from './html/Locations';
import Covid from './html/Covid';
import Main from './html/MainComponent';


//router
class App extends Component {
  render() {


    return(
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>   
    );
  }
}


export default App;

/* ROUTE INFORMATION

<div>
<NavbarTop />

<Router>
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
    <Redirect to="/Home" />
  </Switch>
</Router>
<Footer />
</div>
*/