import React, { Component, useState }  from 'react';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class Locations extends React.Component {
  render() {

    function History() {
          const history = useHistory();

          const States = () => {
              history.push("/states");
              history.push("/states2");
              history.push("/states3");
            }

          }

          return (
            <React.Fragment>
              <h1 className="stateHeader">States</h1>
              <Carousel className="col-5 carousel">
                <Link to="/States">
                  <div>
                    <h4>Location 1</h4>
                    <img src="images/favicon.png" />
                    <p>Some text here</p>
                  </div>
                </Link>
                <Link to="/States2">
                  <div>
                    <h4>Location 2</h4>
                    <img src="images/favicon.png" />
                    <p>Some text here</p>
                  </div>
                </Link>
                <Link to="/States3">
                  <div>
                    <h4>Location 3</h4>
                    <img src="images/favicon.png" />
                    <p>Some text here</p>
                  </div>
                </Link>              
              </Carousel>
            </React.Fragment>
 
          );
      };
    
  }
  


export default Locations;




