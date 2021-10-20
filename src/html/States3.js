//THIS ALLOWS ONE TO BE ABLE TO DISPLAY INFO AFTER CLICK ON BUTTON

import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, NavItem, Nav, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import TopModal from './TopModal';
import LocationThirteenModal from './LocationThirteenModal';
import LocationFourteenModal from './LocationFourteenModal';
import LocationFifteenModal from './LocationFifteenModal';
import LocationSixteenModal from './LocationSixteenModal';
import LocationSeventeenModal from "./LocationSeventeenModal";
import LocationEighteenModal from './LocationEighteenModal';

class States3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            isModalOpen2: false,
            isModalOpen3: false,
            isModalOpen4: false,
            isModalOpen5: false,
            isModalOpen6: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
        this.toggleModal3 = this.toggleModal3.bind(this);
        this.toggleModal4 = this.toggleModal4.bind(this);
        this.toggleModal5 = this.toggleModal5.bind(this);
        this.toggleModal6 = this.toggleModal6.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleModal2() {
        this.setState({
            isModalOpen2: !this.state.isModalOpen2
        });
    }

    toggleModal3() {
        this.setState({
            isModalOpen3: !this.state.isModalOpen3
        });
    }

    toggleModal4() {
        this.setState({
            isModalOpen4: !this.state.isModalOpen4
        });
    }

    toggleModal5() {
        this.setState({
            isModalOpen5: !this.state.isModalOpen5
        });
    }

    toggleModal6() {
        this.setState({
            isModalOpen6: !this.state.isModalOpen6
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div class="row mx-auto mb-5 mt-3">
                        <div class="col-sm-12 col-lg New2">
                            <h1>Our Locations</h1>
                        </div>
                    </div>

                    <div class="row mb-5 mt-4">
                        <div class="card col-sm-12 col-md-5 col-offset-md-1">
                            <img class="card-img-top Background" alt="Card 2" src="images/favicon.png" />
                            <div class="card-body">
                                <h2 class="New">Location 13</h2>
                                <p class="card-text">Text here that describes the site itself. Add a photo of someone inside of the company who works at Carraige Town Cleaning and Disinfectants</p>
                            </div>
                            <Button onClick={this.toggleModal}>
                                <p className="ModalButton">Interested?</p>
                            </Button>

                        </div>

                        <div class="card col-sm-12 col-md-5 col-offset-md-1">
                            <img class="card-img-top Background" alt="Card " src="images/favicon.png" />
                            <div class="card-body">
                                <h2 class="New">Location 14</h2>
                                <p class="card-text">Text here that describes the site itself. Add a photo of someone inside of the company who works at Carraige Town Cleaning and Disinfectants</p>
                            </div>
                            <Button onClick={this.toggleModal2}>
                                <p className="ModalButton">Interested?</p>
                            </Button>

                        </div>
                    </div>

                    <div class="row mb-5 mt-4">
                        <div class="card col-sm-12 col-md-5 col-offset-md-1">
                            <img class="card-img-top Background" alt="Card " src="images/favicon.png" />
                            <div class="card-body">
                                <h2 class="New">Location 15</h2>
                                <p class="card-text">Text here that describes the site itself. Add a photo of someone inside of the company who works at Carraige Town Cleaning and Disinfectants</p>
                            </div>
                            <Button onClick={this.toggleModal3}>
                                <p className="ModalButton">Interested?</p>
                            </Button>

                        </div>

                        <div class="card col-sm-12 col-md-5 col-offset-md-1">
                            <img class="card-img-top Background" alt="Card " src="images/favicon.png" />
                            <div class="card-body">
                                <h2 class="New">Location 16</h2>
                                <p class="card-text">Text here that describes the site itself. Add a photo of someone inside of the company who works at Carraige Town Cleaning and Disinfectants</p>
                            </div>
                            <Button onClick={this.toggleModal4}>
                                <p className="ModalButton">Interested?</p>
                            </Button>

                        </div>
                    </div>

                    <div class="row mb-5 mt-4">
                        <div class="card col-sm-12 col-md-5 col-offset-md-1">
                            <img class="card-img-top Background" alt="Card " src="images/favicon.png" />
                            <div class="card-body">
                                <h2 class="New">Location 17</h2>
                                <p class="card-text">Text here that describes the site itself. Add a photo of someone inside of the company who works at Carraige Town Cleaning and Disinfectants</p>
                            </div>
                            <Button onClick={this.toggleModal5}>
                                <p className="ModalButton">Interested?</p>
                            </Button>

                        </div>

                        <div class="card col-sm-12 col-md-5 col-offset-md-1">
                            <img class="card-img-top Background" alt="Card " src="images/favicon.png" />
                            <div class="card-body">
                                <h2 class="New">Location 18</h2>
                                <p class="card-text">Text here that describes the site itself. Add a photo of someone inside of the company who works at Carraige Town Cleaning and Disinfectants</p>
                            </div>
                            <Button onClick={this.toggleModal6}>
                                <p className="ModalButton">Interested?</p>
                            </Button>

                        </div>
                    </div>


                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <TopModal />
                    </ModalHeader>
                    <ModalBody>
                        <LocationThirteenModal />
                    </ModalBody>

                </Modal>

                <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModal2}>
                    <ModalHeader toggle={this.toggleModal2}>
                        <TopModal />
                    </ModalHeader>
                    <ModalBody>
                        <LocationFourteenModal />
                    </ModalBody>

                </Modal>

                <Modal isOpen={this.state.isModalOpen3} toggle={this.toggleModal3}>
                    <ModalHeader toggle={this.toggleModal3}>
                        <TopModal />
                    </ModalHeader>
                    <ModalBody>
                        <LocationFifteenModal />
                    </ModalBody>

                </Modal>

                <Modal isOpen={this.state.isModalOpen4} toggle={this.toggleModal4}>
                    <ModalHeader toggle={this.toggleModal4}>
                        <TopModal />
                    </ModalHeader>
                    <ModalBody>
                        <LocationSixteenModal />
                    </ModalBody>

                </Modal>

                <Modal isOpen={this.state.isModalOpen5} toggle={this.toggleModal5}>
                    <ModalHeader toggle={this.toggleModal5}>
                        <TopModal />
                    </ModalHeader>
                    <ModalBody>
                        <LocationSeventeenModal />
                    </ModalBody>

                </Modal>

                <Modal isOpen={this.state.isModalOpen6} toggle={this.toggleModal6}>
                    <ModalHeader toggle={this.toggleModal6}>
                        <TopModal />
                    </ModalHeader>
                    <ModalBody>
                        <LocationEighteenModal />
                    </ModalBody>

                </Modal>

            </React.Fragment>
        )
    }
}

export default States3;

