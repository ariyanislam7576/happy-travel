import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const useCart = () => {
    const { id } = useParams()
    const [cart,setCart] = useState([])
    useEffect(() => {
        fetch(`https://thawing-ridge-33922.herokuapp.com/addservice/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCart(data)
            })
    }, [])
    return {
        cart
    }
};

export default useCart;