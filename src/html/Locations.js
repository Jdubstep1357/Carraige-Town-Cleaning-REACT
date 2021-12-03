import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link, useHistory } from 'react-router-dom';


class Locations extends Component {
  render() {

    // function History() {
    //   const history = useHistory();

    //   const States = () => {
    //     history.push("/states");
    //     history.push("/states2");
    //     history.push("/states3");
    //   }

    // }

    return (
      <React.Fragment>
        <h1 className="stateHeader">States</h1>
        <Carousel className="col-5 carousel">
          <Link to="/States">
            <div>
              <h4 class="ParaText">Location 1</h4>
              <img src="images/favicon.png" alt="" />
              <p>Some text here</p>
            </div>
          </Link>
          <Link to="/States2">
            <div>
              <h4>Location 2</h4>
              <img src="images/favicon.png" alt="" />
              <p>Some text here</p>
            </div>
          </Link>
          <Link to="/States3">
            <div>
              <h4>Location 3</h4>
              <img src="images/favicon.png" alt="" />
              <p>Some text here</p>
            </div>
          </Link>
        </Carousel>
      </React.Fragment>

    );
  }

}



export default Locations;




