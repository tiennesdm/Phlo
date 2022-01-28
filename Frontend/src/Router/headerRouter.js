import React, { useMemo } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
// import WithHeader from '../Layout/WithHeader';
import routes from '../Routes/routes';

const Router = () => {
    const routeComponents = useMemo(() => {
        return routes.map((route, index) => {
            if (route.isExternal) {
                return <Route path={route.routepath} key={index} />;
            } else {
                // return <WithHeader path={route.routepath} key={index} />;
            }
        });
    }, []);
    return <Switch>{routeComponents}</Switch>;
};

export default withRouter(Router);
