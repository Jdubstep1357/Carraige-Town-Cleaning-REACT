import React, { Component }  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

//PASSES IN IMAGE
function RenderCard({item}) {
    return (
        <Card>
            <Link to={`/directory/${main.id}`} />
            <CardImg src={item.image} alt={item.text} />
            <CardBody>
                <CardTitle>{item.text}</CardTitle>
            </CardBody>
        </Card>
    )
}

function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                  <Render item={props.main} />  
                </div>
            </div>
        </div>
    )
}

export default Home;