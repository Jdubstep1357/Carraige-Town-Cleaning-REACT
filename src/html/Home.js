import React, { Component }  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';



function Home(props) {
    return(
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-8 MainPic mt-2 mx-auto">
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row my-3">
                <div className="RedDivBorder"></div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div class="text-center mb-3 text-center mx-auto">
		  	        <h2>What we do</h2>
		        </div>
            </div>
        </div>

        <div class="row">
		  <div class="col-sm-12 col-md-4 One">

		  	<div class="col-8 offset-2 align-content-center Blue">
			  <p>hi</p>
			  </div>
			  <p>Manage all forms of waste</p>
				<p>Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
		    </div>
		  <div class="col-sm-12 col-md-4 Two">
			  
	
			  <div class="col-8 offset-2 align-content-center Blue">
			  	<p>Hi2</p>
			  </div>
			  <p>Clean windows</p>
				<p>Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
		  </div>
		  <div class="col-sm-12 col-md-4 Three">

			  <div class="col-8 offset-2 align-content-center Blue">
			  	<p>Hi2</p>
			  </div>
			  <p>Disinfect Floors</p>
			<p>Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
		  </div>
		</div>

        </React.Fragment>
    )
}

export default Home;