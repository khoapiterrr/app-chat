import React from 'react';
import { FastField, Form, Formik } from 'formik';
import { Checkbox, FormControlLabel, Button } from '@material-ui/core';
import InputField from 'custom-fields/InputField';
import * as Yup from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';
import './styles.scss';
import { FormGroup } from 'reactstrap';
import SelectField from 'custom-fields/SelectField';

const SignUp = () => {
  const { formatMessage } = useIntl();
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
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
  const genders = [
    {
      id: 'Male',
      title: 'Male',
    },
    {
      id: 'Female',
      title: 'Female',
    },
  ];
  return (
    <>
      <div className='title h6'>Register to Olympus</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(formikProps) => {
          const { values, errors, touched, isSubmitting } = formikProps;
          console.log(values, errors, touched, isSubmitting);
          return (
            <Form className='content'>
              <div className='row'>
                <div className='col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                  <FormGroup>
                    <FastField
                      name='firstName'
                      component={InputField}
                      label={formatMessage({
                        id: 'Auth.form.firstName.label',
                      })}
                    />
                  </FormGroup>
                </div>
                <div className='col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                  <FormGroup>
                    <FastField
                      name='lastName'
                      component={InputField}
                      label={formatMessage({
                        id: 'Auth.form.lastName.label',
                      })}
                    />
                  </FormGroup>
                </div>
                <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                  <FormGroup>
                    <FastField
                      name='email'
                      component={InputField}
                      label={formatMessage({
                        id: 'Auth.form.email.label',
                      })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FastField
                      type='password'
                      name='password'
                      component={InputField}
                      label={formatMessage({
                        id: 'Auth.form.password.label',
                      })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FastField
                      type='date'
                      name='birthday'
                      defaultValue='1999-06-23'
                      component={InputField}
                      label={formatMessage({
                        id: 'Auth.form.birthday.label',
                      })}
                    />
                  </FormGroup>
                  {/* <FormGroup>
                    <FastField
                      type='gender'
                      name='gender'
                      component={InputField}
                      label={formatMessage({
                        id: 'Auth.form.gender.label',
                      })}
                    />
                  </FormGroup> */}
                  <FormGroup>
                    <FastField
                      type='gender'
                      name='gender'
                      component={SelectField}
                      value={10}
                      options={genders}
                      label={formatMessage({
                        id: 'Auth.form.gender.label',
                      })}
                    />
                  </FormGroup>
                  <div className='remember'>
                    <div className='checkbox'>
                      <FormControlLabel
                        control={
                          <Checkbox
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                          />
                        }
                        label={formatMessage({
                          id: 'Auth.form.checkbox.terms',
                        })}
                      />
                    </div>
                  </div>
                  <a href=' #' className='btn btn-purple btn-lg full-width'>
                    <FormattedMessage id='Auth.form.button.submit.register' />
                  </a>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUp;
