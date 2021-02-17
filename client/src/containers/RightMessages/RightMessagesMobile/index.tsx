import CustomSvgIcons from 'components/CustomSvgIcons';
import React, { MutableRefObject, useRef, useState } from 'react';
import ChatUsersItem from '../ChatUsersItem';
import AvatarUser from 'assets/images/avatar62-sm.jpg';
import classnames from 'classnames';
const RightMessagesMobile = () => {
  const rightMesSideBar: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const openRightMessages = (e: any) => {
    e.preventDefault();
    e.target.classList.add('active');
    console.log(e.target.classList);
    console.log(e);
    rightMesSideBar.current!.classList.toggle('open');
    if (rightMesSideBar.current!.classList.contains('open')) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  return (
    <div
      className='fixed-sidebar right fixed-sidebar-responsive'
      id='sidebar-right-responsive'
      ref={rightMesSideBar}>
      <div className='fixed-sidebar-right sidebar--small'>
        <a
          href='# '
          className={classnames('js-sidebar-open', { active: isActive })}
          onClick={openRightMessages}>
          <CustomSvgIcons className='olymp-menu-icon' id='olymp-menu-icon' />
          <CustomSvgIcons className='olymp-close-icon' id='olymp-close-icon' />
        </a>
      </div>
      <div className='fixed-sidebar-right sidebar--large'>
        <div className='mCustomScrollbar' data-mcs-theme='dark'>
          <div className='ui-block-title ui-block-title-small'>
            <a href='#' className='title'>
              Close Friends
            </a>
            <a href='#'>Settings</a>
          </div>
          <ul className='chat-users'>
            <ChatUsersItem
              avatar={AvatarUser}
              status='online'
              isOpen={true}
              authorName='Trọng khoa'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='away'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='online'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='away'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='online'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='disconected'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='online'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='away'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='disconected'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='online'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='online'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='away'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='disconected'
            />
            <ChatUsersItem
              avatar={AvatarUser}
              isOpen={true}
              authorName='Trọng khoa'
              status='online'
            />
          </ul>
        </div>
        <div className='search-friend inline-items'>
          <form className='form-group'>
            <input
              className='form-control'
              placeholder='Search Friends...'
              type='text'
            />
          </form>
          <a href='29-YourAccount-AccountSettings.html' className='settings'>
            <CustomSvgIcons
              className='olymp-settings-icon'
              id='olymp-settings-icon'
            />
          </a>
          <a href='#' className='js-sidebar-open'>
            <CustomSvgIcons
              className='olymp-close-icon'
              id='olymp-close-icon'
            />
          </a>
        </div>
        <a href='#' className='olympus-chat inline-items js-chat-open'>
          <h6 className='olympus-chat-title'>OLYMPUS CHAT</h6>

          <CustomSvgIcons
            className='olymp-chat---messages-icon'
            id='olymp-chat---messages-icon'
          />
        </a>
      </div>
    </div>
  );
};

export default RightMessagesMobile;
