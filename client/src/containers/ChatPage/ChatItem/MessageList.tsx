import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import mesSelectors from '../selectors';
import authSelectors from 'containers/Auth/selectors';
import InfiniteScroll from 'react-infinite-scroller';
import ChatItem from './ChatItem';
import { Link } from 'react-router-dom';

interface ParamTypes {
  userId: string | undefined;
}

const MessageList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams<ParamTypes>();
  const messages = useSelector(mesSelectors.selectMessages);
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const messageListLoading = useSelector(mesSelectors.selectMessageListLoading);
  const hasMoreMessageList = useSelector(mesSelectors.selectHasMoreMessageList);
  const loadMoreMessageList = () => {};
  return (
    <>
      {messages?.length > 0 ? (
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={loadMoreMessageList}
          hasMore={!messageListLoading && hasMoreMessageList}
          useWindow={false}>
          {messages?.map((item: any) => {
            if (!currentUser) return <span></span>;
            let user;
            if (item.conversationType === 'ChatGroup') {
              user = item.receiver;
            } else {
              user =
                item.sender._id === currentUser._id
                  ? item.receiver
                  : item.sender;
            }
            return (
              <Link to={`/messages/${user._id}`} key={user._id}>
                <ChatItem
                  avatar={user.avatar}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  item={item}
                  active={user._id === userId}
                />
              </Link>
            );
          })}
        </InfiniteScroll>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default MessageList;
