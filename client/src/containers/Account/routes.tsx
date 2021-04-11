import { getHistory } from 'app/store';
import CustomLoadable from 'components/CustomLoadable';
import React from 'react';
import { Switch, useRouteMatch } from 'react-router';
import PublicRoute from 'routes/PublicRoute';
import routes from 'routes/routes';

const Routes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      {routes.accountRoutes.map((route) => (
        <PublicRoute
          key={`${path}${route.path}`}
          exact={route.exact}
          path={`${path}${route.path}`}
          component={CustomLoadable({ loader: route.loader })}
        />
      ))}
    </Switch>
  );
};

export default Routes;
