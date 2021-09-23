import React, { Component }  from 'react';
import { Button } from 'reactstrap';
import  States  from './States';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function Locations() {
    const history = useHistory();

    const States = () => {
        history.push("/states");
    }

    return (

        /* CAROUSEL */
        <React.Fragment>
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=f5f5f5"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=eee"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=e5e5e5"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        <Button onClick = {States}>Click me!</Button>
        </React.Fragment>
    )
}

export default Locations;




