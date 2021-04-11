import React, { FC } from 'react';
import CustomModal from 'components/CustomModal';

interface IProps {
  openModal: boolean;
  toggleModal: any;
}
const RestorePassword: FC<IProps> = ({ openModal, toggleModal }) => {
  return (
    <CustomModal
      openModal={openModal}
      header={<h6 className='title'>Restore your Password</h6>}
      toggleModal={toggleModal}>
      <form method='get'>
        <p>
          Enter your email and click the send code button. You’ll receive a code
          in your email. Please use that code below to change the old password
          for a new one.
        </p>
        <div className='form-group label-floating'>
          <label className='control-label'>Your Email</label>
          <input
            className='form-control'
            type='email'
            defaultValue='james-spiegel@yourmail.com'
          />
        </div>
        <button className='btn btn-purple btn-lg full-width'>
          Send me the Code
        </button>
        <div className='form-group label-floating'>
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
        </button>
      </form>
    </CustomModal>
  );
};

export default RestorePassword;
