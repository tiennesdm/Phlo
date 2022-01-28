import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../GlobalContexts/AppContext';
/**
 * PrivateRoute
 * @param {Object} props
 * 
 * 
 * *****/
const PrivateRoute = (props) => {
    const { authenticated } = useContext(AppContext);
    const { component, ...others } = props;
    const Component = component;


    useEffect(()=>{

    },[authenticated])

    // Route conditions

    return !authenticated ? (
        <Route
            {...others}
            render={(props) => (
                <Redirect
                    to={{
                        pathname: '/auth/login',
                        search: `?redirect=${props.location.pathname}`,
                        state: { from: props.location },
                    }}
                />
            )}
        />
    ) : (
        <Route {...others} render={(props) => <Component {...props} />} />
    );
};

export default PrivateRoute;
