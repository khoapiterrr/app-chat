import { Avatar } from '@material-ui/core';
import React from 'react';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import InfoIcon from '@material-ui/icons/Info';
import mesSelectors from '../selectors';
import authSelectors from 'containers/Auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import AvatarDefault from 'assets/images/default-avatar.png';
import mesActions from '../actions';

const ChatContentHeader = () => {
  const dispatch = useDispatch();
  const record = useSelector(mesSelectors.selectRecord);
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  // const peerId = useSelector(callSelectors.selectPeerId);
  const handleCallVideoClick = () => {
    // b01. kiểm trả listener có online hay không
    let caller = {
      _id: currentUser?._id,
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      avatar: currentUser?.avatar,
    };
    console.log('caller', caller);
    // emitCheckListenerStatus({ caller, listener: record.receiver });
  };
  const handleToggleUserInfo = () => {
    dispatch(mesActions.doToggleUserInfo());
  };
  return (
    <div className='ChatContentHeader bg-white d-flex align-items-center rounded p-3'>
      <Avatar
        alt='Trong khoa'
        src={record?.receiver?.avatar ?? AvatarDefault}
        className='avatar mr-2'
      />
      <div className='info-user'>
        <h5 className='title' style={{ marginBottom: '0' }}>
          {`${record?.receiver?.firstName} ${record?.receiver?.lastName}`}
        </h5>
        <span>{record?.receiver?.status}</span>
      </div>
      <div className='contact d-flex justify-content-end'>
        <VideocamOutlinedIcon className='icon' />
        <CallOutlinedIcon className='icon' />
        <span style={{ cursor: 'pointer' }} onClick={handleToggleUserInfo}>
          <InfoIcon className='icon' />
        </span>
      </div>
    </div>
  );
};

export default ChatContentHeader;
