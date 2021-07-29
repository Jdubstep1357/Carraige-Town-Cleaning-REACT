import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, NavItem, Nav, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import TopModal from './TopModal';
import BottomModal from './BottomModal';
import { CLEANERS } from '../shared/cleaners';
import { MAIN } from '../shared/main';
 
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
                        <NavbarBrand className="mr-auto TopText" href="/">Logo</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="navbar TopText">
                                <NavItem>
                                    <NavLink className="nav-link" to="/Home">
                                        <p class="TopText">Home</p>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/About">
                                        <p class="TopText">About</p>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/Locations">
                                        <p class="TopText">Locations</p>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/Covid">
                                        <p class="TopText">Covid</p>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button onClick={this.toggleModal}>
                                    <p class="ModalButton">Ready to work?</p>
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>

                    
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <TopModal />
                    </ModalHeader>
                    <ModalBody>
                        <BottomModal />
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