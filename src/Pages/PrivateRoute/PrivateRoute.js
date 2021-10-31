import React from 'react';
import { Spinner } from 'react-bootstrap';
// import useAuth from '../../Hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading){
        return <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    } 
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;