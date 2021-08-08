import React from 'react';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import * as Yup from 'yup';
import { FormGroup } from 'reactstrap';
import { useDispatch } from 'react-redux';
import accountActionCreator from '../actions';
import { FormattedMessage } from 'react-intl';
const ChangePwd = () => {
  const dispatch = useDispatch();
  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .required('Vui lòng nhập mật khẩu cũ')
      .min(6, 'Mật khẩu phải có tối thiểu 6 kí tự'),
    newPassword: Yup.string()
      .required('Vui lòng nhập mật khẩu mới')
      .min(6, 'Mật khẩu phải có tối thiểu 6 kí tự')
      .notOneOf(
        [Yup.ref('currentPassword'), null],
        'Mật khẩu mới không được trùng mật khẩu cũ',
      ),
    confirmNewPassword: Yup.string()
      .required('Vui lòng nhập mật khẩu xác thực')
      .min(6, 'Mật khẩu phải có tối thiểu 6 kí tự')
      .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu không trùng khớp'),
  });
  const onSubmit = (values: any, { resetForm }: any) => {
    dispatch(
      accountActionCreator.changePassword(values, () => {
        resetForm({ values: initialValues });
      }),
    );
  };
  return (
    <>
      <div className='ui-block'>
        <div className='ui-block-title'>
          <h6 className='title'>
            <FormattedMessage id='ChangePassword.label' />
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
                    <div className='col col-lg-8 col-md-8 col-sm-12 col-12'>
                      <FormGroup>
                        <FastField
                          name='currentPassword'
                          type='password'
                          component={InputField}
                          label={
                            <FormattedMessage id='ChangePassword.oldPwd' />
                          }
                          className='mt-4'
                        />
                      </FormGroup>
                      <FormGroup>
                        <FastField
                          name='newPassword'
                          type='password'
                          component={InputField}
                          label={
                            <FormattedMessage id='ChangePassword.newPwd' />
                          }
                          className='mt-4'
                        />
                      </FormGroup>
                      <FormGroup>
                        <FastField
                          name='confirmNewPassword'
                          component={InputField}
                          type='password'
                          label={
                            <FormattedMessage id='ChangePassword.newPwdConfirm' />
                          }
                        />
                      </FormGroup>
                      <button
                        className='btn btn-primary btn-lg full-width'
                        type='submit'>
                        <FormattedMessage id='ChangePassword.label' />
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

export default ChangePwd;
