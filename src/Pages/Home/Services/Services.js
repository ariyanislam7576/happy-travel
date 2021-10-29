import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleService from './SingleService/SingleService';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:4500/addservice')
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])

    return (
        <div className="container">
            <Row xs={1} md={3} className="g-4 my-5">
            {
                service.map(s => <SingleService key={s._id}
                service={s}
                ></SingleService>)
            }
            </Row>
            
        </div>
    );
};

export default Services;