/* eslint-disable react/prop-types */
import { isAuthenticated } from 'api/permissionChecker';
import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import authSelectors from 'containers/Auth/selectors';
import authActionCreator from 'containers/Auth/actions';
import contactActionCreator from 'containers/Contact/actions';
import { useDispatch, useSelector } from 'react-redux';
import { configSocket } from 'app/rootSocket';

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      configSocket();
    }

    if (!currentUser && isAuthenticated()) {
      console.log(currentUser);
      dispatch(authActionCreator.fetchCurrentUser());
      dispatch(contactActionCreator.listContacts());
      dispatch(contactActionCreator.listRequests());
      dispatch(contactActionCreator.listRequestsSent());
    }
  }, []);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated() && currentUser ? (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
