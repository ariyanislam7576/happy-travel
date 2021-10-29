import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SingleService = (props) => {
    const { _id,img,name,description,price} = props.service
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h4>{price}</h4>
                        <Card.Text>
                            {description}
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