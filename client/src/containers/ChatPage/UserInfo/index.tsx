import React, { useState, useEffect } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './styles.scss';
import { getOffset } from 'utils/common';

const UserInfo = () => {
  const [showPersionalInfo, setShowPersionalInfo] = useState(false);
  const [showCustomChat, setShowCustomChat] = useState(false);
  const [showShareDocuments, setShowShareDocuments] = useState(false);
  const [style, setStyle] = useState({});
  useEffect(() => {
    const ofTop = getOffset(document.getElementById('userInfo')).top;
    setStyle({ ...style, height: `calc(100vh - ${ofTop}px)` });
  }, []);
  return (
    <div className='user-info-wrapper' id='userInfo' style={style}>
      <div className='title'>
        <h4 className='title'>User Info</h4>
        <span>
          <HighlightOffIcon />
        </span>
      </div>

      <div className='bg-white d-flex flex-column justify-content-center align-items-center rounded py-3 mb-3'>
        <img
          src='https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=Z6d5Xfk_T_sAX80fRVU&_nc_ht=scontent-hkg4-1.xx&oh=68f0b162fb7e4a833792b2a871648223&oe=6052EC8E'
          alt='Image avatar'
          className='info-avatar'
        />
        <h4 className='title'>Conversion</h4>
        <span>Admin</span>
      </div>

      <div className='bg-white position-relative d-flex flex-column rounded p-2 mb-3'>
        <h5 className='title'>Personal Information</h5>
        {showPersionalInfo ? (
          <div className='info-chat'>
            <p className='d-flex align-items-center pl-1'>
              <MailOutlineIcon />
              &nbsp; KhoaPiterrr@gmail.com
            </p>
            <p className='d-flex align-items-center pl-1'>
              <PhoneIcon />
              &nbsp; +84 0912 342
            </p>
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
        <h5 className='title'>Customize your chat</h5>
        {showCustomChat ? (
          <div className='custom-chat d-flex flex-column'>
            <a href=''> Change theme</a>
            <a href=''> Change emoticons</a>
            <a href=''> Edit aliases</a>
            <a href=''> Search in conversation</a>
          </div>
        ) : null}
        <div
          className='position-absolute'
          style={{ top: '0.5rem', right: '0.5rem' }}>
          <a href='# ' onClick={() => setShowCustomChat(!showCustomChat)}>
            {showCustomChat ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
