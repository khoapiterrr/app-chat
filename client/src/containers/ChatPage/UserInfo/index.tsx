import React, { useState, useEffect } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './styles.scss';
import { getOffset } from 'utils/common';
import AvatarDefault from 'assets/images/default-avatar.png';
import { IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import actions from '../actions';
import useSearchInfo from 'Hooks/useSearchInfo';

interface IProps {
  userId: string;
  [extraProps: string]: any;
}

const UserInfo: React.FC<IProps> = ({ userId }) => {
  const dispatch = useDispatch();
  const userInfo = useSearchInfo(userId);
  const [showPersionalInfo, setShowPersionalInfo] = useState(false);
  const [showCustomChat, setShowCustomChat] = useState(false);
  const [showShareDocuments, setShowShareDocuments] = useState(false);
  const [style, setStyle] = useState({});
  useEffect(() => {
    const ofTop = getOffset(document.getElementById('userInfo')).top;
    setStyle({ ...style, height: `calc(100vh - ${ofTop}px)` });
  }, []);
  const handleClose = () => {
    dispatch(actions.doHideUserInfo());
  };
  return (
    <div className='user-info-wrapper' id='userInfo' style={style}>
      <div className='title'>
        <h4 className='title'>User Info</h4>
        <span style={{ cursor: 'pointer' }} onClick={handleClose}>
          <HighlightOffIcon />
        </span>
      </div>

      <div className='bg-white d-flex flex-column justify-content-center align-items-center rounded py-3 mb-3'>
        <img
          src={userInfo?.avatar ?? AvatarDefault}
          alt='Image avatar'
          className='info-avatar'
        />
        <h4 className='title'>{`${userInfo?.firstName} ${userInfo?.lastName}`}</h4>
        <span>Admin</span>
      </div>

      <div className='bg-white position-relative d-flex flex-column rounded p-2 mb-3'>
        <h5 className='title'>Personal Information</h5>
        {showPersionalInfo ? (
          <div className='info-chat'>
            <p className='d-flex align-items-center pl-1'>
              <MailOutlineIcon />
              &nbsp; {userInfo?.email}
            </p>
            {userInfo?.phoneNumber && (
              <p className='d-flex align-items-center pl-1'>
                <PhoneIcon />
                &nbsp;{userInfo?.phoneNumber}
              </p>
            )}

            <p className='d-flex align-items-center pl-1'>
              <HomeIcon />
              &nbsp; at Ha Noi
            </p>
          </div>
        ) : null}
        <div
          className='position-absolute'
          style={{ top: '0.5rem', right: '0.5rem' }}>
          <a href='# ' onClick={() => setShowPersionalInfo(!showPersionalInfo)}>
            {showPersionalInfo ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </a>
        </div>
      </div>

      <div className='bg-white position-relative  rounded p-2 mb-3'>
        <h5 className='title'>Shared document</h5>
        {showShareDocuments ? (
          <div className='share-document d-flex flex-column'>
            <a href=''> Change theme</a>
            <a href=''> Change emoticons</a>
            <a href=''> Edit aliases</a>
            <a href=''> Search in conversation</a>
          </div>
        ) : null}
        <div
          className='position-absolute'
          style={{ top: '0.5rem', right: '0.5rem' }}>
          <a
            href='# '
            onClick={() => setShowShareDocuments(!showShareDocuments)}>
            {showShareDocuments ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
