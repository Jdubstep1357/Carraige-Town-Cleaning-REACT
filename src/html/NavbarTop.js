import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, NavItem, Nav, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from './Home';

class NavbarTop extends Component {

    constructor(props) {
        super(props);


        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
         //bind event handler
        //ensures that when called this is binded to component
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }


    //! is the logica
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
     
                <Navbar sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">Logo</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Home">Home</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/About">About</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/Locations">Locations</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/Covid">Covid</NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <p>Ready to work?</p>
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>

                    
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <p>Hello</p>
                    </ModalHeader>
                    <ModalBody>
                    
                    </ModalBody>

                </Modal>
            </React.Fragment>
        );
    }
    /*isOpen refers to true/false statement of modal, which is set to this.state = false
    toggle refers to the toggle action which closes it when opened
    */
}

export default NavbarTop;