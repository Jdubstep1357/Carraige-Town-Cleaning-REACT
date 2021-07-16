import React, { Component }  from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';


class BottomModal extends Component {

    /*constructor is another name for object
    super is defined when one wants to access props in constructor
    */
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            phoneNumber: ''
        };
    

        //Makes it so we can use this keyword and have it point to correct object
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        //displays checkedbox as clicked on or not
        const value = target.type === 'checkbox' ? target.checked: target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current state is: " + JSON.stringify(this.state));
        //Stops page from refreshing
        event.preventDefault();
    }

    render() {
        return(
            <React.Fragment>
               <div className="row row-content">
                    <div className="col-12">
                        <h2>Send us your Feedback</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            
                            <FormGroup row>
                                <Label htmlFor="Name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="Name" name="Name"
                                        placeholder="Name"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="Email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" id="Email" name="Email" placeholder="Email"
                                    value={this.state.Email}
                                    onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                           
                            <FormGroup row>
                                <Label htmlFor="phoneNumber" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="tel" id="Phone" name="phoneNumber" placeholder="Phone"
                                    value={this.state.phoneNumber}
                                    onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}} />
                                <Button type="submit" color="primary">Submit</Button>
                            </FormGroup>
                           
                        </Form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BottomModal;