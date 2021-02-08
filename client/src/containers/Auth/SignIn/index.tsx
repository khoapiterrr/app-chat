import React, { useEffect } from 'react';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import * as Yup from 'yup';
import { FormattedMessage, useIntl } from 'react-intl';
import { Grid, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import ServiceLogin from 'components/ServiceLogin';
import githubImage from 'assets/images/github-image.png';
import googleImage from 'assets/images/shapes-and-symbols.png';
import FacebookIcon from '@material-ui/icons/Facebook';

interface IProps {
  goToSignUp?: any;
}
const SignIn: React.FC<IProps> = ({ goToSignUp }) => {
  const { formatMessage } = useIntl();
  const {
    LINK_LOGIN_FACEBOOK,
    LINK_LOGIN_GITHUB,
    LINK_LOGIN_gOOGLE,
  } = process.env;

  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(formatMessage({ id: 'Auth.form.email.error.empty' }))
      .email(formatMessage({ id: 'Auth.form.email.error.invalid' })),
    password: Yup.string()
      .required(formatMessage({ id: 'Auth.form.password.error.empty' }))
      .min(6, formatMessage({ id: 'Auth.form.password.error.mainLength' })),
  });
  const onSubmit = () => {
    console.log('do onSubmit');
  };
  useEffect(() => {
    console.log('Sign In form');
  }, []);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log(values, errors, touched, isSubmitting);
        return (
          <Form className='content__form'>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              spacing={3}>
              <Grid item sm={12}>
                <FastField
                  name='email'
                  component={InputField}
                  label={formatMessage({ id: 'Auth.form.email.label' })}
                />
              </Grid>

              <Grid item sm={12}>
                <FastField
                  type='password'
                  name='password'
                  component={InputField}
                  label={formatMessage({ id: 'Auth.form.password.label' })}
                />
              </Grid>
              <Grid item sm={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  }
                  label={formatMessage({ id: 'Auth.form.rememberMe.label' })}
                />
              </Grid>
              <Grid item sm={6} className='text-right'>
                <FormattedMessage id='Auth.form.forgotPassword.label' />
              </Grid>
              <Grid item sm={12}>
                <Button
                  id='login'
                  variant='contained'
                  className='w-100'
                  size='large'
                  color='secondary'>
                  <FormattedMessage id='Auth.form.button.login' />
                </Button>
              </Grid>
              <div className='or'></div>
              <Grid item sm={12}>
                <ServiceLogin
                  id='facebook'
                  link={LINK_LOGIN_FACEBOOK}
                  icon={<FacebookIcon />}
                  label={formatMessage({
                    id: 'Auth.form.loginService.facebook',
                  })}
                />
              </Grid>

              <Grid item sm={12}>
                <ServiceLogin
                  id='google'
                  link={LINK_LOGIN_gOOGLE}
                  icon={<img src={googleImage} alt='google' />}
                  label={formatMessage({
                    id: 'Auth.form.loginService.google',
                  })}
                />
              </Grid>
              <Grid item sm={12}>
                <ServiceLogin
                  id='github'
                  link={LINK_LOGIN_GITHUB}
                  icon={<img src={githubImage} alt='Github' />}
                  label={formatMessage({
                    id: 'Auth.form.loginService.github',
                  })}
                />
              </Grid>
              <Grid item sm={12}>
                <p>
                  <FormattedMessage id='Auth.form.question.haveAccount' /> !{' '}
                  <a href='#' onClick={goToSignUp}>
                    <FormattedMessage id='Auth.form.button.register-now' />!
                  </a>{' '}
                  <FormattedMessage
                    id='Auth.form.question.haveAccount.decs'
                    defaultMessage=' messages not found Language'
                  />
                  !
                </p>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignIn;
