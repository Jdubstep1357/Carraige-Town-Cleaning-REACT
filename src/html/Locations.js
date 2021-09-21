import React, { Component }  from 'react';
import { Button } from 'reactstrap';
import  States  from './States';
import { useHistory } from 'react-router-dom';

function Locations() {
    const history = useHistory();

    const States = () => {
        history.push("/states");
    }

    return (
        <Button onClick = {States}>Click me!</Button>
    )
}

export default Locations;




