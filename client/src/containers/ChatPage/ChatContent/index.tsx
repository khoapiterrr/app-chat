import React, { useState, useEffect, useRef } from 'react';
import ChatContentHeader from './ChatContentHeader';
import avatarLTK from 'assets/images/avatarkhoalt.jpg';
import { getOffset } from 'utils/common';
import './styles.scss';
import ChatFooter from './ChatFooter';
import { useDispatch, useSelector } from 'react-redux';
import mesSelectors from '../selectors';
import Conversation from './Conversation';
import messageActionCreator from '../actions';
import { useParams } from 'react-router-dom';
import Spinner from 'components/Spinner';
interface ParamTypes {
  userId: string | undefined;
}

const ChatContent = () => {
  const dispatch = useDispatch();
  const { userId } = useParams<ParamTypes>();
  const scrollRef = useRef<any>();
  const [style, setStyle] = useState({});
  const record = useSelector(mesSelectors.selectRecord);
  const isScrollToBottom = useSelector(mesSelectors.selectScrollToBottom);
  useEffect(() => {
    const ofTop = getOffset(document.getElementById('conversationContent')).top;
    const chatFooterEl = document.getElementById('chatFooter');
    setStyle({
      ...style,
      height: `calc(100vh - ${ofTop}px - ${
        chatFooterEl?.offsetHeight ?? 50
      }px - 10px)`,
    });
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  }, [record]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }, 0);
    }
  };
  if (isScrollToBottom) {
    scrollToBottom();

    dispatch(messageActionCreator.doToggleScrollToBottom());
  }
  useEffect(() => {
    if (isScrollToBottom) {
      scrollToBottom();
      dispatch(messageActionCreator.doToggleScrollToBottom());
    }
  }, []);
  useEffect(() => {
    if (isScrollToBottom) {
      scrollToBottom();
      dispatch(messageActionCreator.doToggleScrollToBottom());
    }
  }, [isScrollToBottom, record?.messages]);

  useEffect(() => {
    console.log('scrollToBottom', userId);
    scrollToBottom();
  }, [userId]);
  return (
    <div className='chat-wrapper'>
      <ChatContentHeader />

      <div
        className='conversation-content'
        id='conversationContent'
        ref={scrollRef}
        style={style}>
        {/* <div className='message-day'>
          <div className='message-divider sticky-top pb-2' data-label='Today'>
            &nbsp;
          </div>
        </div> */}
        {record?.receiver?._id !== userId ? (
          <div className='loading-mes'>
            <Spinner />
          </div>
        ) : (
          record?.messages && <Conversation messages={record?.messages} />
        )}
      </div>

      <ChatFooter />
    </div>
  );
};

export default ChatContent;
