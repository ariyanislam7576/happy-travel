import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-md-4 text-start">
                    <h2>Happy Travel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore fugit atque nulla placeat illum excepturi mollitia suscipit vel, delectus nihil consectetur necessitatibus aspernatur culpa sapiente aperiam vero, quod magnam!</p>
                </div>
                <div className="col-md-4">
                <Nav className="me-auto d-block">
                        <NavLink className='m-3 d-block text-decoration-none' to="/home">Home</NavLink>
                        <NavLink className='m-3 d-block text-decoration-none' to="/about">About</NavLink>
                        <NavLink className='m-3 d-block text-decoration-none' to="/Mybooking">My booking</NavLink>
                        <NavLink className='m-3 d-block text-decoration-none' to="/addservice">Add Service</NavLink>
                    </Nav>
                </div>
                <div className="col-md-4">
                    <div>
                        <input type="text" placeholder='Enter your name' /><br /><br />
                        <input type="email" placeholder='Enter your email' /> <br /> <br />
                        <textarea name="" id="" cols="23" rows="5" placeholder='Say something about our service' ></textarea><br /> <br />
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;