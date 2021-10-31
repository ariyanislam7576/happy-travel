import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    const {loading} = useAuth()
    if (loading) {
        return <Spinner animation="border" />
    }
    return (
        <div>
             <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;