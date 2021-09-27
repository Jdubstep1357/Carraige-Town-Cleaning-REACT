import React, { Component }  from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import NavbarTop from './NavbarTop';
import { postCleaner } from '../redux/ActionCreators';

//recieves value and makes sure that value recieves true or false
const required = val => val && val.length;
//wrap a function inside of a function (2 arrow functions)
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
//checks to see if email begins with A-Z and checks for numbers
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class BottomModal extends Component {




toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
}



handleSubmit(values) {

    postCleaner(this.props.cleanerId, values.fullname, values.email, values.phone);
}

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            Name: '',
            Email: '',
            phoneNumber: '',
            touched: {
                Name: false,
                Email: false,
                phoneNumber: false
            }
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

  
 
    



    render() {
        


        return(
            <React.Fragment>
               <div className="row row-content">
            
                    <div className="col-md-10">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            
                            <Row className="form-group">
                                <Label htmlFor="Name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".Name" id="Name" 
                                        name="Name" 
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
                                <Label htmlFor="Email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".Email" id="Email" 
                                        name="Email"
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
                                <Label htmlFor="phoneNumber" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text model=".Phone" id="Phone" name="phoneNumber"
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
                                <Col md={{size: 10, offset: 2}} />
                                <Button type="submit" color="primary">Submit</Button>
                            </Row>
                           
                        </LocalForm>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BottomModal;