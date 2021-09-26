import React, { Component }  from 'react';
import { Button } from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'images/favicon.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'images/Logo.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'images/Trash.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

 function Locations() {
      const history = useHistory();

      const States = () => {
          history.push("/states");
      }

      return (
      <UncontrolledCarousel items={items} />
      )
  }


export default Locations;




