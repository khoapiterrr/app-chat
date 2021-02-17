import { Avatar } from '@material-ui/core';
import React from 'react';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import InfoIcon from '@material-ui/icons/Info';
const ChatContentHeader = () => {
  return (
    <div className='ChatContentHeader bg-white d-flex align-items-center rounded p-3'>
      <Avatar
        alt='Trong khoa'
        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
        className='avatar mr-2'
      />
      <div className='info-user'>
        <h5 className='title' style={{ marginBottom: '0' }}>
          KhoaPiterrr
        </h5>
        <span>Online</span>
      </div>
      <div className='contact d-flex justify-content-end'>
        <VideocamOutlinedIcon className='icon' />
        <CallOutlinedIcon className='icon' />
        <InfoIcon className='icon' />
      </div>
    </div>
  );
};

export default ChatContentHeader;
