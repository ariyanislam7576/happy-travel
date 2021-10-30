import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SingleService = (props) => {
    const { _id,img,name,description,price} = props?.service
    return (
        <div>
            <Col>
                <Card>
                    <img src={img} alt="" />
                    <Card.Body className='text-start'>
                        <Card.Title className='text-right'>{name}</Card.Title>
                        <h4 className='text-right'>${price}</h4>
                        <Card.Text >
                            {description.slice(0,100)}
                        </Card.Text>
                        <NavLink to={`/addservice/${_id}`}><button className="btn-danger px-2 rounded">Booking Now</button></NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleService;

/**/