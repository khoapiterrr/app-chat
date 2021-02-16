import { Avatar } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';

const ChatItem = () => {
  return (
    <div className='list-chat-item'>
      <Avatar
        alt='Trong khoa'
        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
        className='avatar mr-2'
      />
      <div className='info-chat-item'>
        <p className='h6 user-name'>Trong Khoa</p>
        <span className='chat-message-item'>
          Mutual Friend: Sarah Hetfield &nbsp; <span>● 6.50 pm</span>
        </span>
      </div>
      <div className='seen'>
        <span>5</span>
      </div>
      <div className='more-icon'>
        <MoreHorizIcon />
      </div>
    </div>
  );
};

export default ChatItem;
