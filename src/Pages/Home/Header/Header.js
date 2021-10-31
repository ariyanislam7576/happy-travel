import userEvent from '@testing-library/user-event';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Happy Travel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='mx-3 text-white text-decoration-none' to="/home">Home</NavLink>
                            <NavLink className='mx-3 text-white text-decoration-none' to="/manageorder">Manage Order</NavLink>
                            <NavLink className='mx-3 text-white text-decoration-none' to="/mybooking">My Order</NavLink>
                            <NavLink className='mx-3 text-white text-decoration-none' to="/addservice">Add Destination</NavLink>
                            {user.email ?
                                <button onClick={logOut} className="btn-dark border-0">Log Out</button>
                                :
                                <NavLink className='mx-3 text-white text-decoration-none' to="/login">Log In</NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                    {user?.email ?
                        <Navbar.Text>
                            Signed in as: <a href="#login">
                                {user?.displayName || user?.email}</a>
                        </Navbar.Text>
                        :
                        <p></p>
                }
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;