/* eslint-disable react/prop-types */
import { isAuthenticated } from 'api/permissionChecker';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute: React.FC<any> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default AuthRoute;
