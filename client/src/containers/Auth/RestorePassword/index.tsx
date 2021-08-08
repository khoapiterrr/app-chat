import React, { FC } from 'react';
import CustomModal from 'components/CustomModal';
import { useDispatch } from 'react-redux';
import authActionCreator from '../actions';
import { FormattedMessage } from 'react-intl';

interface IProps {
  openModal: boolean;
  toggleModal: any;
}
const RestorePassword: FC<IProps> = ({ openModal, toggleModal }) => {
  const [email, setEmail] = React.useState<string>('');
  const [loading, setLoading] = React.useState<Boolean>(false);
  const dispatch = useDispatch();
  const handleSubmitForm = (event: any) => {
    setLoading(true);
    event.preventDefault();
    console.log(email, 'email');
    dispatch(
      authActionCreator.doRestorePassword(email, (res: any) => {
        if (res) {
          toggleModal();
        }
        setLoading(false);
      }),
    );
  };
  const handleOnChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  return (
    <CustomModal
      openModal={openModal}
      header={
        <h6 className='title'>
          <FormattedMessage id='Auth.RestorePwd.title' />
        </h6>
      }
      toggleModal={toggleModal}>
      <form method='get' onSubmit={handleSubmitForm}>
        <p>
          {/* Enter your email and click the send code button. You’ll receive a code
          in your email. Please use that code below to change the old password
          for a new one. */}
          <FormattedMessage id='Auth.RestorePwd.desc' />
        </p>
        <div className='form-group label-floating'>
          <label className='control-label'>
            <FormattedMessage id='Auth.form.email.label' />
          </label>
          <input
            className='form-control'
            type='email'
            onChange={handleOnChangeEmail}
          />
        </div>
        <button
          className='btn btn-purple btn-lg full-width'
          disabled={Boolean(loading)}>
          <FormattedMessage id='Auth.RestorePwd.submit' />
        </button>
        {/* <div className='form-group label-floating'>
          <label className='control-label'>Enter the Code</label>
          <input className='form-control' type='text' />
        </div>
        <div className='form-group label-floating'>
          <label className='control-label'>Your New Password</label>
          <input
            className='form-control'
            type='password'
            defaultValue='olympus'
          />
        </div>
        <button className='btn btn-primary btn-lg full-width'>
          Change your Password!
        </button> */}
      </form>
    </CustomModal>
  );
};

export default RestorePassword;
