import React from 'react';
import { FastField, Form, Formik } from 'formik';
import { Grid, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import InputField from 'custom-fields/InputField';
import * as Yup from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';
import './styles.scss';
const SignUp = () => {
  const { formatMessage } = useIntl();
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const onSubmit = (values: any) => {
    console.log(values, 'submit');
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(
      formatMessage({ id: 'Auth.form.firstName.error.empty' }),
    ),
    lastName: Yup.string().required(
      formatMessage({ id: 'Auth.form.lastName.error.empty' }),
    ),
    email: Yup.string()
      .required(formatMessage({ id: 'Auth.form.email.error.empty' }))
      .email(formatMessage({ id: 'Auth.form.email.error.invalid' })),
    password: Yup.string()
      .required(formatMessage({ id: 'Auth.form.password.error.empty' }))
      .min(6, formatMessage({ id: 'Auth.form.password.error.mainLength' })),
  });

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
              <Grid item sm={6}>
                <FastField
                  name='firstName'
                  component={InputField}
                  label={formatMessage({
                    id: 'Auth.form.firstName.label',
                  })}
                />
              </Grid>
              <Grid item sm={6}>
                <FastField
                  name='lastName'
                  component={InputField}
                  label={formatMessage({
                    id: 'Auth.form.lastName.label',
                  })}
                />
              </Grid>
              <Grid item sm={12}>
                <FastField
                  name='email'
                  component={InputField}
                  label={formatMessage({
                    id: 'Auth.form.email.label',
                  })}
                />
              </Grid>
              <Grid item sm={12}>
                <FastField
                  type='password'
                  name='password'
                  component={InputField}
                  label={formatMessage({
                    id: 'Auth.form.password.label',
                  })}
                />
              </Grid>
              <Grid item sm={12}>
                <FastField
                  type='date'
                  name='birthday'
                  defaultValue='1999-06-23'
                  component={InputField}
                  label={formatMessage({
                    id: 'Auth.form.birthday.label',
                  })}
                />
              </Grid>
              <Grid item sm={12}>
                <FastField
                  type='gender'
                  name='gender'
                  component={InputField}
                  label={formatMessage({
                    id: 'Auth.form.gender.label',
                  })}
                />
              </Grid>
              <Grid item sm={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  }
                  label={formatMessage({ id: 'Auth.form.checkbox.terms' })}
                />
              </Grid>
              <Grid item sm={12}>
                <Button
                  id='signup'
                  variant='contained'
                  className='w-100'
                  size='large'
                  color='secondary'>
                  <FormattedMessage id='Auth.form.button.submit.register' />
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUp;
