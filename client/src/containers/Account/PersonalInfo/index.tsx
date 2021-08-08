import React from 'react';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import * as Yup from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';
import { FormGroup } from 'reactstrap';
import SelectField from 'custom-fields/SelectField';
import authSelectors from 'containers/Auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import accountActionCreator from '../actions';
import { showSnackbar } from 'containers/layout/actions';
import { alertType } from 'constants/constants';

const PersonalInfo = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const initialValues = {
    ...currentUser,
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    email: currentUser?.email,
    gender: currentUser?.gender,
    facebookLink: currentUser?.facebookLink,
    websiteLink: currentUser?.websiteLink,
    twitterLink: currentUser?.twitterLink,
    spotifyLink: currentUser?.spotifyLink,
    description: currentUser?.description,
    country: currentUser?.country,
    city: currentUser?.city,
    province: currentUser?.province,
    phoneNumber: currentUser?.phoneNumber,
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Vui lòng nhập họ và tên đệm'),
    lastName: Yup.string().required('Vui lòng nhập tên của bạn'),
    email: Yup.string().required('Vui lòng nhập địa chỉ email'),
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
  const onSubmit = (values: any, { resetForm }: any) => {
    console.log(values);
    dispatch(
      accountActionCreator.updateProfile(
        currentUser!._id,
        values,
        (res: any) => {
          dispatch(
            showSnackbar(
              formatMessage({
                id: 'Account.personalInfo.submitSuccess',
              }),
              alertType.SUCCESS,
            ),
          );
          resetForm({ values });
        },
      ),
    );
  };
  return (
    <>
      <div className='ui-block'>
        <div className='ui-block-title'>
          <h6 className='title'>
            <FormattedMessage id='Account.personalInfo.label' />
          </h6>
        </div>
        <div className='ui-block-content'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(formikProps) => {
              return (
                <Form className='content'>
                  <div className='row'>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                      <FormGroup>
                        <FastField
                          name='firstName'
                          component={InputField}
                          label={formatMessage({
                            id: 'Auth.form.firstName.label',
                          })}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FastField
                          name='email'
                          component={InputField}
                          disabled={true}
                          label={formatMessage({
                            id: 'Auth.form.email.label',
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
                    </div>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                      <FormGroup>
                        <FastField
                          name='lastName'
                          component={InputField}
                          label={formatMessage({
                            id: 'Auth.form.lastName.label',
                          })}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FastField
                          name='websiteLink'
                          component={InputField}
                          label={formatMessage({
                            id: 'Auth.form.yourWebsite.label',
                          })}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FastField
                          name='phoneNumber'
                          component={InputField}
                          label={formatMessage({
                            id: 'Auth.form.phoneNumber.label',
                          })}
                        />
                      </FormGroup>
                    </div>
                    <div className='col col-lg-4 col-md-4 col-sm-12 col-12'>
                      <FormGroup>
                        <FastField
                          name='country'
                          component={InputField}
                          label={formatMessage({
                            id: 'Auth.form.country.label',
                          })}
                        />
                      </FormGroup>
                    </div>
                    <div className='col col-lg-4 col-md-4 col-sm-12 col-12'>
                      <FormGroup>
                        <FastField
                          name='province'
                          component={InputField}
                          label={formatMessage({
                            id: 'Auth.form.province.label',
                          })}
                        />
                      </FormGroup>
                    </div>
                    <div className='col col-lg-4 col-md-4 col-sm-12 col-12'>
                      <FormGroup>
                        <FastField
                          name='city'
                          component={InputField}
                          label={formatMessage({
                            id: 'Auth.form.city.label',
                          })}
                        />
                      </FormGroup>
                    </div>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                      <FormGroup>
                        <FastField
                          name='description'
                          multiline={true}
                          component={InputField}
                          label={formatMessage({
                            id: 'Auth.form.description.label',
                          })}
                        />
                      </FormGroup>
                    </div>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                      <FormGroup>
                        <FastField
                          name='birthplace'
                          component={InputField}
                          label={formatMessage({
                            id: 'Auth.form.birthplace.label',
                          })}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FastField
                          type='gender'
                          name='gender'
                          component={SelectField}
                          value={formikProps.values.gender}
                          options={genders}
                          label={formatMessage({
                            id: 'Auth.form.gender.label',
                          })}
                        />
                      </FormGroup>
                    </div>
                    <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                      <FormGroup>
                        <FastField
                          name='facebookLink'
                          component={InputField}
                          label={formatMessage({
                            id: 'Auth.form.facebook.label',
                          })}
                        />
                      </FormGroup>

                      <FormGroup>
                        <FastField
                          name='twitterLink'
                          component={InputField}
                          label={formatMessage({
                            id: 'Auth.form.twitter.label',
                          })}
                        />
                      </FormGroup>
                    </div>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                      <button
                        className='btn btn-secondary btn-lg full-width'
                        type='button'>
                        {formatMessage({
                          id: 'Account.reset',
                        })}
                      </button>
                    </div>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                      <button
                        className='btn btn-primary btn-lg full-width'
                        type='submit'>
                        {formatMessage({
                          id: 'Account.saveAll',
                        })}
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
