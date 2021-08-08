import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
} from '@material-ui/core';
import classnames from 'classnames';
import { useToggleModal } from 'components/CustomModal';
import playBell from 'containers/shared/sound/bell';
import InputField from 'custom-fields/InputField';
import firebaseApp, { providerFb } from 'firebaseSetting';
import { FastField, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup } from 'reactstrap';
import * as Yup from 'yup';
import authActionCreator from '../actions';
import RestorePassword from '../RestorePassword';
import selectors from '../selectors';
import classes from './styles.module.scss';
interface IProps {
  goToSignUp?: any;
}
const SignIn: React.FC<IProps> = ({ goToSignUp }) => {
  const { formatMessage } = useIntl();
  const [openModal, toggleModal]: [
    openModal: boolean,
    toggleModal: () => void,
  ] = useToggleModal();
  const dispatch = useDispatch();
  const signInLoading = useSelector(selectors.selectSignInLoading);
  const signInError = useSelector(selectors.selectSignInError);

  const { LINK_LOGIN_FACEBOOK, LINK_LOGIN_GITHUB, LINK_LOGIN_gOOGLE } =
    process.env;

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
  const onSubmit = (value: any) => {
    dispatch(authActionCreator.doSignIn(value));
  };
  useEffect(() => {
    console.log('Sign In form');
  }, []);
  const handleLoginWithFacebook = (event: any) => {
    event.preventDefault();

    providerFb.addScope('user_birthday');
    firebaseApp
      .auth()
      .signInWithPopup(providerFb)
      .then((authData) => {
        console.log(authData.user, 'authData');
        const { profile } = authData?.additionalUserInfo as any;
        const { user } = authData;
        const register = {
          firstName: profile.first_name,
          lastName: profile.last_name,
          email: profile.email,
          avatar: user!.photoURL,
          facebookId: profile.id,
        };
        dispatch(authActionCreator.doSignInWithFb(register));
      });
  };
  const playBellLoginTwitter = (e: any) => {
    e.preventDefault();
    // console.log('gaf');
    // playBell('new-message');
  };
  return (
    <>
      <div className='title h6'>
        <FormattedMessage
          id='Auth.form.login.title'
          defaultMessage='Login to your Account'
        />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(formikProps) => {
          return (
            <Form className='content'>
              <div className='row'>
                <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                  <FormGroup>
                    <FastField
                      name='email'
                      component={InputField}
                      label={formatMessage({ id: 'Auth.form.email.label' })}
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

                  <div className='remember' style={{ margin: 0 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                      }
                      label={
                        <FormattedMessage id='Auth.form.rememberMe.label' />
                      }
                    />
                    <a
                      href=' #'
                      className='forgot'
                      data-toggle='modal'
                      onClick={toggleModal}
                      data-target='#restore-password'>
                      <FormattedMessage id='Auth.form.forgotPassword.label' />
                    </a>
                  </div>
                  {signInError && (
                    <p className='text-danger pb-3 pt-2'>{signInError}</p>
                  )}
                  <button
                    type='submit'
                    disabled={signInLoading}
                    className={classnames(
                      'btn',
                      'btn-lg',
                      `${classes.btnAccount}`,
                      'full-width',
                    )}>
                    {signInLoading ? (
                      <CircularProgress color='secondary' size='1rem' />
                    ) : (
                      <FormattedMessage id='Auth.form.button.login' />
                    )}
                  </button>
                  <div className='or' />
                  <a
                    href=' #'
                    className='btn btn-lg bg-facebook full-width btn-icon-left'
                    onClick={handleLoginWithFacebook}>
                    <i className='fab fa-facebook-f' aria-hidden='true' />
                    <FormattedMessage id='Auth.form.loginService.facebook' />
                  </a>
                  <a
                    href=' #'
                    className='btn btn-lg bg-twitter full-width btn-icon-left'
                    onClick={playBellLoginTwitter}>
                    <i className='fab fa-twitter' aria-hidden='true' />
                    <FormattedMessage
                      id='Auth.form.loginService.twitter'
                      defaultMessage='Login With Twitter'
                    />
                  </a>
                  <p>
                    <FormattedMessage id='Auth.form.question.haveAccount' /> !
                    <a href=' #' onClick={goToSignUp}>
                      <FormattedMessage id='Auth.form.button.register-now' />!
                    </a>
                    <FormattedMessage
                      id='Auth.form.question.haveAccount.decs'
                      defaultMessage=' messages not found Language'
                    />
                    !
                  </p>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      <RestorePassword openModal={openModal} toggleModal={toggleModal} />;
    </>
  );
};

export default SignIn;
