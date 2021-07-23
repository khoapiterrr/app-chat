import React, { MutableRefObject, useRef } from 'react';
import ChatUsersItem from '../ChatUsersItem';
import AvatarUser from 'assets/images/avatar62-sm.jpg';
import CustomSvgIcons from 'components/CustomSvgIcons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import contactSelectors from 'containers/Contact/selectors';
import AvatarDefault from 'assets/images/default-avatar.png';
import { avatarFB } from 'constants/constants';
const RightMessagesBG = () => {
  const contacts = useSelector(contactSelectors.selectContacts);

  const [listFriend, setListFriend] = React.useState<any>(contacts);
  const rightMesSideBar: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const openRightMessages = (e: any) => {
    e.preventDefault();
    rightMesSideBar.current!.classList.toggle('open');
  };

  const handleOnchangeKeyword = (event: any) => {
    setListFriend(
      contacts?.filter((x: any) =>
        `${x.firstName} ${x.lastName}`
          .toLowerCase()
          .includes(event.target.value),
      ),
    );
  };
  return (
    <div className='fixed-sidebar right' ref={rightMesSideBar}>
      <div className='fixed-sidebar-right sidebar--small' id='sidebar-right'>
        <div className='mCustomScrollbar' data-mcs-theme='dark'>
          <div className='scrollbar-hidden'>
            <ul className='chat-users'>
              {listFriend?.map((item: any) => (
                <ChatUsersItem
                  avatar={item?.avatar ?? avatarFB}
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
            {listFriend?.map((item: any) => (
              <ChatUsersItem
                avatar={item?.avatar ?? avatarFB}
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
              // value={keyworkSearch}
              onChange={handleOnchangeKeyword}
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
