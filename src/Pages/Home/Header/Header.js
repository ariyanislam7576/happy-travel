import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Happy Travel</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className='mx-3 text-decoration-none' to="/home">Home</NavLink>
                        <NavLink className='mx-3 text-decoration-none' to="/about">About</NavLink>
                        <NavLink className='mx-3 text-decoration-none' to="/mybooking">My booking</NavLink> <NavLink className='mx-3 text-decoration-none' to="/addservice">Add Service</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;