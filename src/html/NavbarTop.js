import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import TopModal from './TopModal';
import BottomModal from './BottomModal';
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
                        <NavbarBrand className="mr-auto TopText" href="/">
                            <img src='../images/Logo.png' alt="Trash5" width="110px" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="navbar TopText">
                                <NavItem>
                                    <NavLink className="nav-link" to="/Home">
                                        <div className="BackBlack">
                                            <p className="TopText">Home</p>
                                        </div>
                                    </NavLink>
                                </NavItem>



                                <NavItem>
                                    <NavLink className="nav-link" to="/Locations">
                                        <div className="BackBlack">
                                            <p class="TopText">Locations</p>
                                        </div>
                                    </NavLink>
                                </NavItem>

                            </Nav>
                            <Button className="offset-md-4" onClick={this.toggleModal}>
                                <p class="ModalButton">Ready to work?</p>
                            </Button>
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