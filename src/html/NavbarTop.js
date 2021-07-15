import React, { Component }  from 'react';
import { NavLink, Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';
import { Route, Switch, Link } from 'react-router-dom';

class NavbarTop extends Component {

    constructor(props) {
        super(props);

        //bind event handler
        //ensures that when called this is binded to component
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    //! is the logica
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>NuCamp</h1>
                                <h2>a better way to camp</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
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
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavbarTop;