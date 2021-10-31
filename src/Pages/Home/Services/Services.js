import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useFirebase from '../../../Hooks/useFirebase';
import SingleService from './SingleService/SingleService';

const Services = () => {
    const {loading} = useFirebase()
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://thawing-ridge-33922.herokuapp.com/addservice')
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
    if (loading) {
        return <Spinner animation="border" />
    }
    return (
        <div className="container">
            <h2 className='text-primary mt-5'>Book Your fevourite place</h2>
            <Row xs={1} md={3} className="g-4 my-3">
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