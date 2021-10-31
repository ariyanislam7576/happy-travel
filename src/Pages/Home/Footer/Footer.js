import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="row my-5 bg-dark text-white">
                <div className="col-md-4 text-start m-3">
                    <h2>Happy Travel</h2>
                    <p>Find Traveling Website safe and secure! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.!</p>
                </div>
                <div className="col-md-3">
                <Nav className="me-auto d-block">
                        <NavLink className='m-3 d-block text-decoration-none' to="/home">Home</NavLink>
                        <NavLink className='m-3 d-block text-decoration-none' to="/manageorder">Manage Order</NavLink>
                        <NavLink className='m-3 d-block text-decoration-none' to="/Mybooking">My booking</NavLink>
                        <NavLink className='m-3 d-block text-decoration-none' to="/addservice">Add Service</NavLink>
                    </Nav>
                </div>
                <div className="col-md-4 m-3">
                    <h3>Connect with us</h3>
                    <img style={{width: "35px",margin: "10px"}} src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="" />
                    <img style={{width: "35px" ,margin: "10px"}} src="https://cdn-icons.flaticon.com/png/128/3256/premium/3256013.png?token=exp=1635650043~hmac=95c5790f0a2d7db3bc18610f2c86f237" alt="" />
                    <img style={{width: "35px" ,margin: "10px"}} src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" />
                    <img style={{width: "35px", margin: "10px"}} src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" />
                    <br />
                    <p>Dowload our app</p>
                    <img style={{width: "35px" ,margin: "10px"}} src="https://cdn-icons.flaticon.com/png/512/2200/premium/2200326.png?token=exp=1635650317~hmac=a5f8e4488dbe4c82e053cfc17a512cd5" alt="" />
                    <br />
                    <img style={{width: "35px" ,margin: "0px 30px"}} src="https://cdn-icons-png.flaticon.com/512/300/300218.png" alt="" />
                    <img style={{width: "35px" ,margin: " 0px 30px"}} src="https://cdn-icons-png.flaticon.com/512/831/831276.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default Footer;