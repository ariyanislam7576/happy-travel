import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Cart = () => {
    const {id} = useParams()
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:4500/addservice/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setService(data)
        })
    },[])

    return (
        <div className='container my-5'>
            <div className="row text-center">
                <div className="col-md-12 ">
                <h2>{service.name}</h2>
                <h5>a{service.price}</h5>
                <p>{service.description}</p>
                <button className="btn-danger px-2 rounded">procced to shipping</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;