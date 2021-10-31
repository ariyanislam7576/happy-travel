import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle} = useAuth()
    const location = useLocation()
    const history = useHistory()

   const handleGoogleSingIn = () => {
       signInUsingGoogle()
       .then(result => {
           history.push(location.state?.from || '/home')
       })
   }


        return (

        <div className='my-5'>
            <div>
                <input type="text" placeholder='Enter your name' /><br /><br />
                <input type="email" placeholder='Enter your email' /> <br /> <br />
                <input type="submit" value="Submit" />
            </div>
            <br />
            <button onClick={handleGoogleSingIn} className="btn-secondary">Sing in with Google</button>
        </div>
    );
};

export default Login;