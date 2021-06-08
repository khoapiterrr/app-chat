import React, { MutableRefObject, useRef } from 'react';
import ChatUsersItem from '../ChatUsersItem';
import AvatarUser from 'assets/images/avatar62-sm.jpg';
import CustomSvgIcons from 'components/CustomSvgIcons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import contactSelectors from 'containers/Contact/selectors';
import AvatarDefault from 'assets/images/default-avatar.png';
const RightMessagesBG = () => {
  const contacts = useSelector(contactSelectors.selectContacts);
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
              {contacts?.map((item: any) => (
                <ChatUsersItem
                  avatar={
                    item?.avatar ??
                    'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/184357069_2879808265627694_3492303132633566580_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Z8osWdrHmV4AX_zTOTP&tn=MqdNpmKyF81KT_i2&_nc_ht=scontent.fhan4-1.fna&oh=52c96bf52bda6007462e4280fc442c77&oe=60DDDDB2'
                  }
                  status='online'
                />
              ))}
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
            {contacts?.map((item: any) => (
              <ChatUsersItem
                avatar={
                  item?.avatar ??
                  'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/184357069_2879808265627694_3492303132633566580_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Z8osWdrHmV4AX_zTOTP&tn=MqdNpmKyF81KT_i2&_nc_ht=scontent.fhan4-1.fna&oh=52c96bf52bda6007462e4280fc442c77&oe=60DDDDB2'
                }
                status='online'
                isOpen={true}
                id={item?._id}
                authorName={`${item.firstName} ${item.lastName}`}
              />
            ))}
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
