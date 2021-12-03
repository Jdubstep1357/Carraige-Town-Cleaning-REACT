import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>

				<div className="container">
					<div className="row">
						<div className="row">
						<img src='images/Main_logo.png' class="img-fluid Centered Padding" alt="Logo" width="110px"/>
						</div>


						<div className="row my-3">
							<div className="RedDivBorder"></div>
						</div>

						<div className="row">
							<div class="text-center mb-3 text-center mx-auto">
								<h1 class="text-center BigFont">What we do</h1>
							</div>
						</div>

						<div class="col-sm-12 col-md-4">

							<img src='images/trash.png' class="img-fluid Centered" alt="Trash5" width="100px" />


							<h1 class="text-center HeaderFont">Manage all forms of waste</h1>
							<p class="ParaText">Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
						</div>


						<div class="col-sm-12 col-md-4 Two">
							<img src='../images/Sprayer.png' class="img-fluid Centered" alt="Trash5" width="110px" />
							<h1 class="text-center HeaderFont">Clean windows</h1>
							<p class="ParaText">Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
						</div>
						<div class="col-sm-12 col-md-4 Three">

							<img src='../images/MOP.jpg' class="img-fluid Centered" alt="Trash5" width="110px" />
							<h3 class="text-center HeaderFont">Disinfect Floors</h3>
							<p class="ParaText">Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
						</div>
					</div>

					<div className="row my-3">
						<div className="RedDivBorder"></div>
					</div>

					<div className="row">
						<div class="text-center mb-3 text-center mx-auto">
							<h1  class="BigFont">How we keep employees safe</h1>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-12 col-md-6 One">

							<img src='../images/CDC.jpg' class="img-fluid Centered" alt="Trash5" width="110px" />

							<h3 class="text-center HeaderFont">Obey CDC guidelines</h3>
							<p class="ParaText">Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
						</div>
						<div class="col-sm-12 col-md-6 Two">


							<img src='../images/Machine.jpg' class="img-fluid Centered" alt="Trash5" width="110px" />

							<h3 class="text-center HeaderFont">Clean windows</h3>
							<p class="ParaText">Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum </p>
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