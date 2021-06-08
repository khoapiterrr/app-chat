import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row } from 'reactstrap';
import { getOffset } from 'utils/common';
import messageActionCreator from './actions';
import ChatContent from './ChatContent';
import MessageList from './ChatItem/MessageList';
import './styles.scss';
import UserInfo from './UserInfo';
import selectors from './selectors';
import contactActionCreator from 'containers/Contact/actions';

interface ParamTypes {
  userId: string | undefined;
}

const ChatPage = () => {
  const [style, setStyle] = useState({});
  const dispatch = useDispatch();
  const isShowUserInfo = useSelector(selectors.selectIsShowUserInfo);
  const { userId } = useParams<ParamTypes>();
  useEffect(() => {
    const ofTop = getOffset(document.getElementById('listChat')).top;
    setStyle({ ...style, height: `calc(100vh - ${ofTop}px)` });

    dispatch(contactActionCreator.listContacts());
    dispatch(contactActionCreator.listRequests());
    dispatch(contactActionCreator.listRequestsSent());
    dispatch(messageActionCreator.list());
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(messageActionCreator.doFind(userId));
    }
  }, [userId, dispatch]);

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
                <MessageList />
              </div>
            </div>
          </div>
          {userId && <ChatContent />}

          {userId && isShowUserInfo && <UserInfo userId={userId as string} />}
          {!userId && <h2 className='welcome'>Welcome to the chat </h2>}
        </Row>
      </div>
    </div>
  );
};

export default ChatPage;
