import CustomLoadable from 'components/CustomLoadable';
import React from 'react';
import { Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';
import routes from './routes';
const HomeRouter = () => {
  return (
    <Switch>
      {routes.homeRoutes.map((route) => (
        <PrivateRoute
          key={route.path}
          path={route.path}
          component={CustomLoadable({ loader: route.loader })}
          exact={!!route.exact}
        />
      ))}
    </Switch>
  );
};

export default HomeRouter;
