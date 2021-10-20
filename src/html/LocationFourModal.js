import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { postCleaner } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';

import { connect } from 'react-redux';

//Wiscoinsin locations 
/*
Appleton,
EauClaire,
GreenBay,
MadisonEast,
MadisonWest,
Milwaukee
*/

//recieves value and makes sure that value recieves true or false
const required = val => val && val.length;
//wrap a function inside of a function (2 arrow functions)
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
//checks to see if email begins with A-Z and checks for numbers
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class LocationFourModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      fullname: '',
      email: '',
      phone: '',
      location: '',
      touched: {
        fullname: false,
        email: false,
        phone: false
      }
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }



  handleSubmit(values) {
    //alert(`id: ${this.props.cleanerId} name: ${values.fullname} phone: ${values.phone} email: ${values.email}`);
    // console.log(baseUrl)

    console.log(this.props.postCleaner);
    this.props.postCleaner(this.props.cleanerId, values.fullname, values.phone, values.email, values.location);
    alert(`Welcome to Carriage Town Cleaning and thanks for signing up!`);
  }

  render() {


    console.log('bottom modal props: ', this.props);

    return (
      <React.Fragment>
        <div className="row row-content">

          <div className="col-md-10">
            <LocalForm onSubmit={values => this.handleSubmit(values)}>

              <Row className="form-group">
                <Label htmlFor="fullname" md={2}>Name</Label>
                <Col md={10}>
                  <Control.text model=".fullname" id="fullname"
                    name="fullname"
                    className="form-control"
                    placeholder="Name"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(20),
                    }}

                  />

                  <Errors
                    className="text-danger"
                    model=".Name"
                    show="touched"
                    component="div"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be at least 2 characters',
                      maxLength: 'Must be 20 characters or less',
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="email" md={2}>Email</Label>
                <Col md={10}>
                  <Control.text model=".email" id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    validators={{
                      required,
                      validEmail
                    }}

                  />

                  <Errors
                    className="text-danger"
                    model=".Email"
                    show="touched"
                    component="div"
                    messages={{
                      required: 'Required',
                      validEmail: 'Must be a valid email'
                    }}
                  />


                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="phone" md={2}>Phone</Label>
                <Col md={10}>
                  <Control.text model=".phone" id="phone" name="phone"
                    className="form-control"
                    placeholder="Phone"
                    validators={{
                      required,
                      minLength: minLength(10),
                      maxLength: maxLength(15),
                      isNumber
                    }}

                  />

                  <Errors
                    className="text-danger"
                    model=".Phone"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 10 characters",
                      MaxLength: "Must be at 20 characters or less",
                      isNumber: "Must be a number"
                    }}
                  />

                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="location" md={2}>Location</Label>
                <Col md={10}>
                  <Control.select model=".location" id="location" name="location"
                    className="form-control"
                    placeholder="location"
                    validators={{
                      required
                    }}

                  > <option selected value="">select a location</option>
                    <option value="Location4">Location 4</option>
                    <option disabled hidden value="MadisonEast">MadisonEast</option>
                    <option disabled hidden value="Milwaukee">Milwaukee</option>
                  </Control.select>

                  <Errors
                    className="text-danger"
                    model=".location"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required"
                    }}
                  />

                </Col>
              </Row>

              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }} />
                <Button type="submit" color="primary">Submit</Button>
              </Row>

            </LocalForm>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  postCleaner: (cleanerId, fullname, phone, email, location) => postCleaner(cleanerId, fullname, phone, email, location)
};

export default connect(null, mapDispatchToProps)(LocationFourModal)