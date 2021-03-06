import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';


const MyBooking = () => {
    const {user} = useAuth()
    
    const [order, setOrder] = useState([])
    useEffect(()=>{
        fetch(`https://thawing-ridge-33922.herokuapp.com/myorder?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setOrder(data)
        })
    },[])

    const handleDelete = id => {
        const url = `https://thawing-ridge-33922.herokuapp.com/myorder/${id}`
        const procced = window.confirm('are you sure??')
        if (procced) {
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {

                        alert('deleted')
                        const availableUser = order.filter(booking => booking._id !== id)
                        setOrder(availableUser)
                    }

                }) 
        }
    }
    return (
        <div>
            <h2>Your order {order.length}</h2>
            {
                order.map(booking => <div key={booking._id}>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>{booking.place}</h2>
                            <br />
                            {booking ?
                            <button onClick={()=>handleDelete(booking._id)}>delete</button>
                        : <p></p>}
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyBooking;