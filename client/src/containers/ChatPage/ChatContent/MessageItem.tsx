import React from 'react';
import avatarLTK from 'assets/images/avatarkhoalt.jpg';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import classnames from 'classnames';
interface IProps {
  message: any;
  self: boolean;
}
const MessageItem: React.FC<IProps> = ({ message, self }) => {
  return (
    <div className={classnames(message, { self: self })}>
      <div className='message-wrapper'>
        <div className='message-content'>
          <span>{message}</span>
        </div>
      </div>
      <div className='message-options'>
        <div className='avatar avatar-sm'>
          <img alt='' src={avatarLTK} />
        </div>
        <span className='message-date'>9:12am</span>
        <div className='dropdown'>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
