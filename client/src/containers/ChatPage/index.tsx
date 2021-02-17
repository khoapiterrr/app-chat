import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { getOffset } from 'utils/common';
import './styles.scss';
import ChatItem from './ChatItem';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UserInfo from './UserInfo';
import ChatContent from './ChatContent';
const ChatPage = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const ofTop = getOffset(document.getElementById('listChat')).top;
    setStyle({ ...style, height: `calc(100vh - ${ofTop}px)` });
  }, []);
  return (
    <div className='page'>
      <div className='message-home-page'>
        <Row>
          <div className='conversion-wrapper'>
            <h4 className='title'>Conversion</h4>
            <div className='conversation'>
              <form action='' id='searchContactChat'>
                <div className='input-group mb-2'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text' id='basic-addon1'>
                      <SearchIcon />
                    </span>
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search here'
                    id='searchContactChat'
                  />
                </div>
              </form>
              <div className='row mb-3'>
                <div className='col-md-6 d-flex align-items-center'>
                  Recent Chats
                  <ExpandMoreIcon />
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-end'>
                  New Chat
                  <ExpandMoreIcon />
                </div>
              </div>
              <div
                className='list-chat scroll-chat'
                id='listChat'
                style={style}>
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
              </div>
            </div>
          </div>
          <ChatContent />
          <UserInfo />
        </Row>
      </div>
    </div>
  );
};

export default ChatPage;
