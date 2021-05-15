import { Avatar } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';
import ImageIcon from '@material-ui/icons/Image';
import moment from 'moment';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { textAbstract } from 'utils/common';
import classnames from 'classnames';
interface IProps {
  avatar: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  [extraProps: string]: any;
}

const ChatItem: React.FC<IProps> = ({
  avatar,
  lastName,
  firstName,
  item,
  active,
}) => {
  return (
    <div className={classnames('list-chat-item', { active: active })}>
      <Avatar alt='Trong khoa' src={avatar} className='avatar mr-2' />
      <div className='info-chat-item'>
        <p className='h6 user-name'>{`${firstName} ${lastName}`}</p>
        <span className='chat-message-item'>
          <span>
            {item.type === 'text' || item.type === 'notification' ? (
              item.message ? (
                textAbstract(item.message, 20)
              ) : (
                ''
              )
            ) : item.type === 'image' ? (
              <>
                <ImageIcon />
                Photo(s)
              </>
            ) : item.type === 'file' ? (
              <>
                <AttachmentIcon type='paper-clip' />
                File(s)
              </>
            ) : null}{' '}
          </span>
          <span>● {moment(item.updatedAt).fromNow()}</span>
        </span>
      </div>

      <div className='more-icon'>
        <MoreHorizIcon />
      </div>
    </div>
  );
};

export default ChatItem;
