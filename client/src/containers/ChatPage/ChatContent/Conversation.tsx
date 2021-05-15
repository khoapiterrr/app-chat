import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mesSelectors from '../selectors';
import authSelectors from 'containers/Auth/selectors';
import InfiniteScroll from 'react-infinite-scroller';
import { CircularProgress } from '@material-ui/core';
import MessageItem from './MessageItem';

interface IProps {
  messages: any;
}

const Conversation: React.FC<IProps> = ({ messages }) => {
  const dispatch = useDispatch();
  const hasMoreConversation = useSelector(
    mesSelectors.selectHasMoreConversation,
  );
  const sending = useSelector(mesSelectors.selectSending);
  const findLoading = useSelector(mesSelectors.selectFindLoading);
  const currentUser = useSelector(authSelectors.selectCurrentUser);

  const handleInfiniteOnLoad = () => {
    console.log('load more messages');
  };
  return (
    <>
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={false}
        useWindow={false}
        isReverse={true}>
        <div style={{ textAlign: 'center' }}>
          {findLoading && hasMoreConversation && (
            <CircularProgress color='secondary' />
          )}
        </div>
        {!currentUser ? (
          <span></span>
        ) : (
          messages?.map((chat: any, index: any) => {
            if (chat.type === 'notification') {
              return (
                <div key={index} className='notification-message'>
                  <span>{chat.message}</span>
                </div>
              );
            }
            return (
              <MessageItem
                key={index}
                message={chat}
                currentUserId={currentUser._id}
                self={currentUser._id === chat.sender._id}
              />
            );
          })
        )}
      </InfiniteScroll>
    </>
  );
};

export default Conversation;
