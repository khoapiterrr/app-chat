import React from 'react';
import CustomSvgIcons from 'components/CustomSvgIcons';
import Avatar from 'assets/images/avatar56-sm.jpg';
import classes from './styles.module.scss';
import classnames from 'classnames';
import authSelectors from 'containers/Auth/selectors';
import { useDispatch, useSelector } from 'react-redux';

import authActionCreator from 'containers/Auth/actions';
import { Link } from 'react-router-dom';
import { getHistory } from 'app/store';
import LogoWeb from 'assets/images/logo.png';
import contactSelectors from 'containers/Contact/selectors';
import AvatarDefault from 'assets/images/default-avatar.png';
import contactActionCreator from 'containers/Contact/actions';
import { avatarFB } from 'constants/constants';
import {
  getSetting,
  initSetting,
  setSetting,
} from 'containers/shared/settings';
import { FormattedMessage } from 'react-intl';

const HeaderBG = () => {
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = React.useState();
  const friendRequest = useSelector(contactSelectors.selectRequests);

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(authActionCreator.doSignOut());
  };
  const handleSearchFriend = (e: any) => {
    e.preventDefault();
    getHistory().push(`/search?q=${keyword}`);
  };

  const handleOnDestroyRequest = (e: any, data: any) => {
    e.preventDefault();
    dispatch(contactActionCreator.doDestroyRequest(data, () => {}));
  };

  const handleOnUpdateContact = (e: any, data: any) => {
    e.preventDefault();
    dispatch(contactActionCreator.doUpdateContact(data, () => {}));
  };
  const handleTurnOnNotify = (e: any) => {
    e.preventDefault();
    if (getSetting() && !getSetting().sound) {
      initSetting();
    }
  };
  const handleTurnOffNotify = (e: any) => {
    e.preventDefault();
    if (getSetting() && getSetting().sound) {
      initSetting();
      setSetting({ sound: false });
    }
  };
  return (
    <header className='header' id='site-header'>
      <div className={classes.fixedLogo}>
        <Link to='/messages' className='logo'>
          <div className='img-wrap'>
            <img src={LogoWeb} alt='Olympus' />
          </div>
        </Link>
      </div>
      <div className='page-title'>
        <h6>App chat</h6>
      </div>
      <div className='header-content-wrapper'>
        <form className='search-bar w-search notification-list friend-requests'>
          <div className='form-group with-button'>
            <input
              name='keywork'
              className='form-control js-user-search'
              placeholder='Search here people or pages...'
              type='text'
              onChange={(e: any) => setKeyword(e.target.value)}
            />
            <button type='submit' onClick={handleSearchFriend}>
              {/* <SearchIcon className='olymp-magnifying-glass-icon' /> */}
              <CustomSvgIcons id='olymp-magnifying-glass-icon' />
            </button>
          </div>
        </form>
        <Link to={`/search?q=${keyword}`} className='link-find-friend'>
          Find Friends
        </Link>
        <div className='control-block'>
          <div className='control-icon more has-items'>
            <CustomSvgIcons id='olymp-happy-face-icon' />
            {friendRequest?.length > 0 && (
              <div className='label-avatar bg-blue'>
                {friendRequest?.length}
              </div>
            )}
            <div className='more-dropdown more-with-triangle triangle-top-center'>
              <div className='ui-block-title ui-block-title-small'>
                <h6 className='title'>Yêu cầu kết bạn</h6>
                {/* <a href='#'>Find Friends</a>
                <a href='#'>Settings</a> */}
              </div>
              <div className='mCustomScrollbar' data-mcs-theme='dark'>
                <ul className='notification-list friend-requests'>
                  {friendRequest?.length > 0 ? (
                    friendRequest?.map((item: any) => (
                      <li>
                        <div className='author-thumb'>
                          <img
                            src={item?.avatar ?? avatarFB}
                            style={{
                              width: 32,
                              height: 32,
                              objectFit: 'cover',
                            }}
                            alt={item?.avatar}
                          />
                        </div>
                        <div className='notification-event'>
                          <Link
                            to={`/profile/${item._id}`}
                            className='h6 notification-friend'>
                            {`${item.firstName} ${item.lastName}`}
                          </Link>
                          <span className='chat-message-item'>
                            Bạn chung: Trong Khoa
                          </span>
                        </div>
                        <span className='notification-icon'>
                          <a
                            href='#'
                            className='accept-request'
                            onClick={(e) => handleOnUpdateContact(e, item)}>
                            <span className='icon-add without-text'>
                              <CustomSvgIcons id='olymp-happy-face-icon' />
                            </span>
                          </a>
                          <a
                            href='#'
                            className='accept-request request-del'
                            onClick={(e) => handleOnDestroyRequest(e, item)}>
                            <span className='icon-minus'>
                              <CustomSvgIcons id='olymp-happy-face-icon' />
                            </span>
                          </a>
                        </span>
                        <div className='more'>
                          <CustomSvgIcons id='olymp-three-dots-icon' />
                        </div>
                      </li>
                    ))
                  ) : (
                    <p className='text-center pt-2'>
                      Không có yêu cầu kết bạn nào
                    </p>
                  )}
                </ul>
              </div>
              <Link to='/account/friend-requests' className='view-all bg-blue'>
                Kiếm tra tất cả
              </Link>
            </div>
          </div>

          <div className='author-page author vcard inline-items more'>
            <div className='author-thumb'>
              <img
                alt='author'
                src={currentUser?.avatar ?? avatarFB}
                className={classnames(classes.avatar, 'avatar')}
              />
              <span className='icon-status online' />
              <div className='more-dropdown more-with-triangle'>
                <div className='mCustomScrollbar' data-mcs-theme='dark'>
                  <div className='ui-block-title ui-block-title-small'>
                    <h6 className='title'>
                      <FormattedMessage id='Account.setting.label' />
                    </h6>
                  </div>
                  <ul className='account-settings'>
                    <li>
                      <Link to='/account/personal-info'>
                        <CustomSvgIcons
                          className='olymp-logout-icon'
                          id='olymp-menu-icon'
                        />
                        <span>
                          <FormattedMessage id='Account.setting' />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <a href='# !' onClick={handleLogout}>
                        <CustomSvgIcons
                          className='olymp-logout-icon'
                          id='olymp-logout-icon'
                        />
                        <span>
                          <FormattedMessage id='Account.logout' />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className='ui-block-title ui-block-title-small'>
                    <h6 className='title'>
                      <FormattedMessage id='Account.settingChat.label' />
                    </h6>
                  </div>
                  <ul className='chat-settings'>
                    <li>
                      <a href='! #' onClick={handleTurnOnNotify}>
                        <span className='icon-status online' />
                        <span>Online</span>
                      </a>
                    </li>
                    <li>
                      <a href='! #' onClick={handleTurnOffNotify}>
                        <span className='icon-status away' />
                        <span>Away</span>
                      </a>
                    </li>
                    <li>
                      <a href='! #' onClick={handleTurnOffNotify}>
                        <span className='icon-status disconected' />
                        <span>Disconnected</span>
                      </a>
                    </li>
                    <li>
                      <a href='! #' onClick={handleTurnOffNotify}>
                        <span className='icon-status status-invisible' />
                        <span>Invisible</span>
                      </a>
                    </li>
                  </ul>
                  <div className='ui-block-title ui-block-title-small'>
                    <h6 className='title'>
                      <FormattedMessage id='Account.settingStatus.label' />
                    </h6>
                  </div>
                  <form className='form-group with-button custom-status'>
                    <input
                      className='form-control'
                      type='text'
                      defaultValue='hi my friend'
                    />
                    <button className='bg-purple'>
                      <CustomSvgIcons
                        className='olymp-check-icon'
                        id='olymp-check-icon'
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <Link to='/profile/me' className='author-name fn'>
              <div className='author-title'>
                {`${currentUser?.firstName ?? ''} ${
                  currentUser?.lastName ?? ''
                }`}
                <CustomSvgIcons
                  className='olymp-dropdown-arrow-icon'
                  id='olymp-dropdown-arrow-icon'
                />
              </div>
              <span className='author-subtitle'>SPACE COWBOY</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBG;
