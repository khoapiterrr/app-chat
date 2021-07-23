import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Row } from 'reactstrap';
import { getOffset } from 'utils/common';
import messageActionCreator from './actions';
import ChatContent from './ChatContent';
import MessageList from './ChatItem/MessageList';
import './styles.scss';
import UserInfo from './UserInfo';
import selectors from './selectors';
import contactActionCreator from 'containers/Contact/actions';
import { debounce } from 'lodash';
import contactSelectors from '../Contact/selectors';
import { Avatar } from '@material-ui/core';
import { getHistory } from 'app/store';

interface ParamTypes {
  userId: string | undefined;
}

const ChatPage = () => {
  const [style, setStyle] = useState({});
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.selectContacts);

  const [listFriend, setListFriend] = React.useState<any>(contacts);

  const [keyword, setKeyword] = useState<string>();
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

  const handleSearch = (event: any) => {
    setKeyword(event.target.value);
    setListFriend(
      contacts?.filter((x: any) =>
        `${x.firstName} ${x.lastName}`
          .toLowerCase()
          .includes(event.target.value),
      ),
    );
  };
  const handleClickItemSearch = (e: any, userId: string) => {
    e.preventDefault();
    getHistory().push(`/messages/${userId}`);
    setKeyword('');
  };
  return (
    <div className='page'>
      <div className='message-home-page'>
        <Row>
          <div className='conversion-wrapper'>
            <h4 className='title'>Cuộc trò chuyện</h4>
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
                    placeholder='Tìm kiếm ở đây'
                    // value={keyword}
                    onChange={debounce(handleSearch, 300)}
                    id='searchContactChat'
                  />
                </div>
              </form>
              <div className='row mb-3'>
                <div className='col-md-6 d-flex align-items-center'>
                  Trò chuyện gần đây
                  <ExpandMoreIcon />
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-end'>
                  Tạo nhóm
                  <ExpandMoreIcon />
                </div>
              </div>
              {keyword ? (
                listFriend?.length > 0 ? (
                  <div className='list-chat scroll-chat' id='listChat'>
                    {listFriend?.map((item: any) => (
                      <a
                        href='# !'
                        onClick={(e) => handleClickItemSearch(e, item._id)}>
                        <div className='list-chat-item'>
                          <Avatar
                            alt={`${item?.firstName} ${item?.lastName}`}
                            src={item?.avatar}
                            className='avatar mr-2'
                          />
                          <div className='info-chat-item'>
                            <p className='h6 user-name'>{`${item?.firstName} ${item?.lastName}`}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <h3 style={{ textAlign: 'center', marginTop: 20 }}>
                    Không tìm thấy
                  </h3>
                )
              ) : (
                <div
                  className='list-chat scroll-chat'
                  id='listChat'
                  style={style}>
                  <MessageList />
                </div>
              )}
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
