import React, { useMemo } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import routes from '../Routes/routes';
import lazyComponent from './lazyComponent';

const Router = () => {
    const routeComponents = useMemo(() => {
        return routes.map((route, index) => {
            if (route.isPrivate) {
                return (
                    <PrivateRoute
                        key={index}
                        path={route.routepath}
                        exact
                        component={lazyComponent(route.componentName, route.componentPath,)}
                    />
                );
            } else {
                return (
                    <Route
                        key={index}
                        path={route.routepath}
                        component={lazyComponent(route.componentName, route.componentPath,)}
                    />
                );
            }
        });
    }, []);
    return (
        <Switch>
            {/* redirects url . like most probably we will redirect / to /devices */}
            {/* <Route path="/" exact render={() => <Redirect to="/dashboard" />} /> */}

            {routeComponents}
            {/* error routes */}
            {/* <Route path="/error/500" component={Error500} />
            <Route path="*" component={Error404} /> */}
        </Switch>
    );
};

export default withRouter(Router);
