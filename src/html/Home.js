import React, { Component }  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Container, Row, Col, Button } from 'reactstrap';
import Trash from '../images/trash.png'

class Home extends React.Component {
	render() {
			return(
				<React.Fragment>

					<div className="container">
						<div className="row">
						<div className="row">
							<div className="col-sm-12 col-lg-8 MainPic mt-2 mx-auto">
							</div>
						</div>
				

						<div className="row my-3">
							<div className="RedDivBorder"></div>
						</div>

						<div className="row">
							<div class="text-center mb-3 text-center mx-auto">
								<h2>What we do</h2>
							</div>
						</div>

					<div class="col-sm-12 col-md-4">

						<img src='../images/trash.png' class="img-fluid Centered" alt="Trash5" width="100px"/>
					

						<p>Manage all forms of waste</p>
							<p>Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
					</div>
				

					<div class="col-sm-12 col-md-4 Two">	
					<img src='../images/Sprayer.png' alt="Trash5" width="110px" />
						<p>Clean windows</p>
							<p>Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
					</div>
						<div class="col-sm-12 col-md-4 Three">

						<img src='../images/MOP.jpg' alt="Trash5" width="110px" />
							<p>Disinfect Floors</p>
							<p>Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
						</div>
						</div>

						<div className="row my-3">
							<div className="RedDivBorder"></div>
						</div>
						
                <div className="row">
                    <div class="text-center mb-3 text-center mx-auto">
                          <h2>How we keep employees safe</h2>
                    </div>
                </div>
    
            <div class="row">
              <div class="col-sm-12 col-md-6 One">
    
			  <img src='../images/CDC.jpg' alt="Trash5" width="110px" />

                  <p>Manage all forms of waste</p>
                    <p>Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
                </div>
              <div class="col-sm-12 col-md-6 Two">
                  
        
			  <img src='../images/Machine.jpg' alt="Trash5" width="110px" />

                  <p>Clean windows</p>
                    <p>Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
              </div>
        
            </div>
					</div>

			<div className="Space">
				<p>Text</p>
			</div>



					</React.Fragment>
			)
		}
	}


export default Home;