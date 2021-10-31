import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://thawing-ridge-33922.herokuapp.com/addservice',data)
         .then(res => {
             console.log(res);
        if(res.data){
            alert('Destination added')
            reset()
        }
    })
    }
    return (
        <div className='my-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Service name' />
                 <br /> <br />
                <input {...register("img" ,{required: true})} placeholder='Service image url' /> 
                <br /> <br />
                <input type="number" {...register("price")} placeholder='Price' /> 
                <br /> <br />
                <textarea {...register("description", { required: true, maxLength: 2000 })} placeholder='Service description' /> <br /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;