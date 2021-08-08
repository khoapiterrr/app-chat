import React, { ReactNode } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

interface IProps {
  children?: ReactNode;
  tabLink?: any;
  onClickChangeTab?: any;
}
const LoginPage: React.FC<IProps> = ({
  tabLink,
  children,
  onClickChangeTab,
}) => {
  return (
    <div className='container'>
      <div className='row display-flex'>
        <div className='col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
          <div className='landing-content'>
            <h1>
              <FormattedMessage id='Auth.intro.welcome' />
            </h1>
            <p>
              <FormattedMessage id='Auth.intro.description' />
            </p>
            <a
              href='# !'
              onClick={(e) => {
                e.preventDefault();
                onClickChangeTab('register');
              }}
              className='btn btn-md btn-border c-white'>
              <FormattedMessage id='Auth.form.button.register-now' /> !
            </a>
          </div>
        </div>
        <div className='col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
