import React from 'react';
import { Spinner } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    const {loading} = useFirebase()
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