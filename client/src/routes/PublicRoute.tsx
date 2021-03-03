import React from 'react';
import { Route } from 'react-router-dom';
interface IProps {
  component: any;
  [extraProps: string]: any;
}

const PublicRoute: React.FC<IProps> = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

export default PublicRoute;
