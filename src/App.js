import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './html/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

//in configureStore.js, return store is returned here
const store = ConfigureStore();


//router
class App extends Component {
  render() {

    //Provider allows redux store to connect all components with children of App
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>   
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