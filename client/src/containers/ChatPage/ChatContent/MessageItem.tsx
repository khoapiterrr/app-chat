import React from 'react';
import AvatarDefault from 'assets/images/default-avatar.png';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import classnames from 'classnames';
import { Tooltip } from '@material-ui/core';
import moment from 'moment';
interface IProps {
  message: any;
  self: boolean;
  currentUserId?: string;
}
const MessageItem: React.FC<IProps> = ({ message, self, currentUserId }) => {
  const getFullName = (record: any) => {
    if (record && record.firstName && record.lastName)
      return record.firstName + ' ' + record.lastName;
    return '';
  };
  return (
    <div className={classnames(message, { self: self })}>
      <div className='message-wrapper'>
        <div className='message-content'>
          <span>{message?.message}</span>
        </div>
      </div>
      <div className='message-options'>
        <Tooltip
          title={`${getFullName(message.sender)} \n${moment(
            message?.updatedAt,
          ).format('dd, MMMM Do YY h:mm a')}`}>
          <div className='avatar avatar-sm'>
            <img alt='' src={message.sender?.avatar ?? AvatarDefault} />
          </div>
        </Tooltip>
        <span className='message-date'>
          {moment(message?.updatedAt).format('dd, h:mm a')}
        </span>
        <div className='dropdown'>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
