// import { useContext } from "react"
// import { AuthContext } from "../context/AuthProvider"

// const useAuth = () => {
//     return useContext(AuthContext);
// }

// export default useAuth;

import React from 'react';
import { useContext } from 'react';
import {AuthContext} from '../Context/AuthProvider'


const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;