import React, { ReactNode } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import './styles.scss';

interface IProps {
  children?: ReactNode;
  tabLink?: any;
}
const LoginPage: React.FC<IProps> = ({ tabLink, children }) => {
  return (
    <React.Fragment>
      <div className='bg-page'>
        <div className='content-bg-wrap'></div>
        <Container fixed={true} className='layout-content'>
          <Grid
            container
            direction='row'
            spacing={8}
            alignItems='center'
            justify='center'>
            <Grid item xl={5} md={5} sm={10} style={{ zIndex: 2000 }}>
              <div className='lading-content'>
                <h1>
                  <FormattedMessage id='Auth.intro.welcome' />
                </h1>
                <p>
                  <FormattedMessage id='Auth.intro.description' />
                </p>
                <a href='javascript:void(0)'>
                  <Button
                    variant='outlined'
                    onClick={tabLink}
                    className='c-white'>
                    <FormattedMessage id='Auth.form.button.register' /> !
                  </Button>
                </a>
              </div>
            </Grid>
            <Grid item xl={5} md={5} sm={10}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
