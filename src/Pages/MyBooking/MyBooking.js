import React, { useEffect } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const MyBooking = () => {
    const {user} = useFirebase()
    console.log(user.email);
    // const []
    useEffect(()=>{
        fetch(`http://localhost:4500/manageorders/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    },[])
    return (
        <div>
            <h2>this is my booking</h2>
        </div>
    );
};

export default MyBooking;