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
        chatFooterEl!.offsetHeight
      }px - 10px)`,
    });
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };
  if (isScrollToBottom) {
    console.log(isScrollToBottom, 'isScrollToBottom');
    scrollToBottom();
    dispatch(messageActionCreator.doToggleScrollToBottom());
  }
  useEffect(() => {
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
        {record?.messages && <Conversation messages={record?.messages} />}
      </div>

      <ChatFooter />
    </div>
  );
};

export default ChatContent;
