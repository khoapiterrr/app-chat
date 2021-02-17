import React, { MutableRefObject, useRef } from 'react';
import ChatUsersItem from '../ChatUsersItem';
import AvatarUser from 'assets/images/avatar62-sm.jpg';
import CustomSvgIcons from 'components/CustomSvgIcons';
import { Link } from 'react-router-dom';

const RightMessagesBG = () => {
  const rightMesSideBar: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const openRightMessages = (e: any) => {
    e.preventDefault();
    rightMesSideBar.current!.classList.toggle('open');
  };
  return (
    <div className='fixed-sidebar right' ref={rightMesSideBar}>
      <div className='fixed-sidebar-right sidebar--small' id='sidebar-right'>
        <div className='mCustomScrollbar' data-mcs-theme='dark'>
          <div className='scrollbar-hidden'>
            <ul className='chat-users'>
              <ChatUsersItem avatar={AvatarUser} status='online' />
              <ChatUsersItem avatar={AvatarUser} status='away' />
              <ChatUsersItem avatar={AvatarUser} status='online' />
              <ChatUsersItem avatar={AvatarUser} status='away' />
              <ChatUsersItem avatar={AvatarUser} status='online' />
              <ChatUsersItem avatar={AvatarUser} status='disconected' />
              <ChatUsersItem avatar={AvatarUser} status='online' />
              <ChatUsersItem avatar={AvatarUser} status='away' />
              <ChatUsersItem avatar={AvatarUser} status='disconected' />
              <ChatUsersItem avatar={AvatarUser} status='online' />
              <ChatUsersItem avatar={AvatarUser} status='online' />
              <ChatUsersItem avatar={AvatarUser} status='away' />
              <ChatUsersItem avatar={AvatarUser} status='disconected' />
              <ChatUsersItem avatar={AvatarUser} status='online' />
            </ul>
          </div>
        </div>
        <div className='search-friend inline-items'>
          <a href='# ' className='js-sidebar-open' onClick={openRightMessages}>
            <CustomSvgIcons className='olymp-menu-icon' id='olymp-menu-icon' />
          </a>
        </div>
        <Link to='/messages' className='olympus-chat inline-items'>
          <CustomSvgIcons
            className='olymp-chat---messages-icon'
            id='olymp-chat---messages-icon'
          />
        </Link>
      </div>
      <div className='fixed-sidebar-right sidebar--large' id='sidebar-right-1'>
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
            <svg className='olymp-settings-icon'>
              <use xlinkHref='svg-icons/sprites/icons.svg#olymp-settings-icon' />
            </svg>
          </a>
          <a href='#' className='js-sidebar-open' onClick={openRightMessages}>
            <CustomSvgIcons
              className='olymp-close-icon'
              id='olymp-close-icon'
            />
          </a>
        </div>
        <Link to='/messages' className='olympus-chat inline-items'>
          <h6 className='olympus-chat-title'>OLYMPUS CHAT</h6>
          <CustomSvgIcons
            className='olymp-chat---messages-icon'
            id='olymp-chat---messages-icon'
          />
        </Link>
      </div>
    </div>
  );
};

export default RightMessagesBG;
