import CustomSvgIcons from 'components/CustomSvgIcons';
import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'utils/common';
interface IProps {
  status?: string;
  author?: string;
  avatar?: any;
  isOpen?: boolean;
  authorName?: string;
  id?: string;
}
const ChatUsersItem: React.FC<IProps> = ({
  status,
  author,
  avatar,
  isOpen,
  id,
  authorName,
}) => {
  return (
    <li className='inline-items js-chat-open'>
      <div className='author-thumb'>
        <img
          alt='author'
          src={avatar}
          style={{ width: 32 }}
          className='avatar'
        />
        <span className={`icon-status ${status}`} />
      </div>
      {isEmpty(isOpen) ? null : (
        <React.Fragment>
          <div className='author-status'>
            <a href='# ' className='h6 author-name'>
              {authorName}
            </a>
            <span className='status text-uppercase'>{status}</span>
          </div>
          <div className='more'>
            <CustomSvgIcons
              className='olymp-three-dots-icon'
              id='olymp-three-dots-icon'
            />
            <ul className='more-icons'>
              <li>
                <Link to={`/messages/${id}`}>
                  <CustomSvgIcons
                    data-toggle='tooltip'
                    data-placement='top'
                    data-original-title='START CONVERSATION'
                    className='olymp-comments-post-icon'
                    id='olymp-comments-post-icon'
                  />
                </Link>
              </li>
              <li>
                <CustomSvgIcons
                  data-toggle='tooltip'
                  data-placement='top'
                  data-original-title='ADD TO CONVERSATION'
                  className='olymp-add-to-conversation-icon'
                  id='olymp-add-to-conversation-icon'
                />
              </li>
              <li>
                <CustomSvgIcons
                  data-toggle='tooltip'
                  data-placement='top'
                  data-original-title='BLOCK FROM CHAT'
                  className='olymp-block-from-chat-icon'
                  id='olymp-block-from-chat-icon'
                />
              </li>
            </ul>
          </div>
        </React.Fragment>
      )}
    </li>
  );
};

export default ChatUsersItem;
