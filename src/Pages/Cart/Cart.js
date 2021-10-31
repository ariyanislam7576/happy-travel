import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';

const Cart = () => {
    const {user} = useAuth()
    const { id } = useParams()
    const [service, setService] = useState([])
    const { register, handleSubmit, reset, } = useForm();
    useEffect(() => {
        fetch(`https://thawing-ridge-33922.herokuapp.com/addservice/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setService(data)
            })
    }, [])
    const onSubmit = data => {
        axios.post('http://localhost:4500/manageorders',data)
         .then(res => {
             console.log(res);
        if(res.data){
            alert('ticked booked')
            reset()
        }
    })
    }
    return (
        <div className='container my-5'>
            <Row xs={1} md={3} className="g-4 text-center">
                <Col>
                    <Card>
                        <img src={service.img} alt="" />
                        <Card.Body className="text-start">
                            <Card.Title>{service.name}</Card.Title>
                            <h3>${service.price}</h3>
                            <Card.Text>
                                {service.description?.slice(0,200)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 60 })} placeholder='name' />
                 <br /> <br />
                <input type="email" defaultValue={user?.email} {...register("email" ,{required: true})} placeholder='email' /> 
                <br /> <br />
                <input defaultValue={service.name} {...register("place" ,{required: true})} placeholder='Destination name' /> 
                <br /> <br />
                <input  {...register("address", { required: true, maxLength: 40 })} placeholder='address' />
                 <br /> <br />
                <input type="number" {...register("phone")} placeholder='Phone' /> 
                <br /> <br />
                <textarea {...register("description", { required: false, maxLength: 2000 })} placeholder='description' /> <br /> <br />
                <input type="submit" value="procced to booking" />
            </form>
            </Row>
        </div>
    );
};

export default Cart;