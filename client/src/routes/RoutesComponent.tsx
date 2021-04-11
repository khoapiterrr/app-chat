import CustomLoadable from 'components/CustomLoadable';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import routes from './routes';
// Lazy load - Code splitting
const HomePage = React.lazy(() => import('views/HomePage'));
const AuthPage = React.lazy(() => import('views/AuthPage'));
const RoutesComponent = () => {
  return (
    <Switch>
      {/* <Route exact path='/' component={AuthPage} />
      <Route exact path='/login' component={HomePage} /> */}

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
