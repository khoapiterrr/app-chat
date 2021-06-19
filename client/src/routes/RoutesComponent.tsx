import CustomLoadable from 'components/CustomLoadable';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import routes from './routes';
const RoutesComponent = () => {
  console.log('RoutesComponent');
  return (
    <Switch>
      {routes.authRoutes.map((route) => (
        <AuthRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={CustomLoadable({ loader: route.loader })}
        />
      ))}
      {routes.privateRoutes.map((route) => (
        <PrivateRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={CustomLoadable({ loader: route.loader })}
        />
      ))}
    </Switch>
  );
};

export default RoutesComponent;
