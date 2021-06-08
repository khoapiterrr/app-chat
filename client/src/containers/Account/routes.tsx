import { getHistory } from 'app/store';
import CustomLoadable from 'components/CustomLoadable';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, useRouteMatch } from 'react-router';
import PublicRoute from 'routes/PublicRoute';
import routes from 'routes/routes';
import contactActionCreator from 'containers/Contact/actions';

const Routes = () => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(contactActionCreator.listContacts());
    dispatch(contactActionCreator.listRequests());
    dispatch(contactActionCreator.listRequestsSent());
  }, []);
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
