import React, { MutableRefObject, useRef } from 'react';
import LogoWeb from 'assets/images/logo.png';
import CustomSvgIcons from 'components/CustomSvgIcons';
import authorpage from 'assets/images/author-page.jpg';
const LeftMenuMobile = () => {
  const leftMenu: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const openMenu = (e: any) => {
    e.preventDefault();
    leftMenu.current!.classList.toggle('open');
  };
  return (
    <div className='fixed-sidebar fixed-sidebar-responsive' ref={leftMenu}>
      <div
        className='fixed-sidebar-left sidebar--small'
        id='sidebar-left-responsive'>
        <a href='# ' className='logo js-sidebar-open' onClick={openMenu}>
          <img src={LogoWeb} alt='Olympus' />
        </a>
      </div>
      <div
        className='fixed-sidebar-left sidebar--large'
        id='sidebar-left-1-responsive'>
        <a href='# ' className='logo'>
          <div className='img-wrap'>
            <img src={LogoWeb} alt='Olympus' />
          </div>
          <div className='title-block'>
            <h6 className='logo-title'>olympus</h6>
          </div>
        </a>
        <div className='mCustomScrollbar' data-mcs-theme='dark'>
          <div className='control-block'>
            <div className='author-page author vcard inline-items'>
              <div className='author-thumb'>
                <img alt='author' src={authorpage} className='avatar' />
                <span className='icon-status online' />
              </div>
              <a href='02-ProfilePage.html' className='author-name fn'>
                <div className='author-title'>
                  James Spiegel{' '}
                  <CustomSvgIcons
                    className='olymp-dropdown-arrow-icon'
                    id='olymp-dropdown-arrow-icon'
                  />
                </div>
                <span className='author-subtitle'>SPACE COWBOY</span>
              </a>
            </div>
          </div>
          <div className='ui-block-title ui-block-title-small'>
            <h6 className='title'>MAIN SECTIONS</h6>
          </div>
          <ul className='left-menu'>
            <li>
              <a href='# ' className='js-sidebar-open' onClick={openMenu}>
                <CustomSvgIcons
                  className='olymp-close-icon left-menu-icon'
                  id='olymp-close-icon'
                />
                <span className='left-menu-title'>Collapse Menu</span>
              </a>
            </li>
            <li>
              <a href='03-Newsfeed.html'>
                <CustomSvgIcons
                  className='olymp-newsfeed-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='NEWSFEED'
                  id='olymp-newsfeed-icon'
                />
                <span className='left-menu-title'>Newsfeed</span>
              </a>
            </li>
            <li>
              <a href='16-FavPagesFeed.html'>
                <CustomSvgIcons
                  className='olymp-star-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='FAV PAGE'
                  id='olymp-star-icon'
                />
                <span className='left-menu-title'>Fav Pages Feed</span>
              </a>
            </li>
            <li>
              <a href='17-FriendGroups.html'>
                <CustomSvgIcons
                  className='olymp-happy-faces-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='FRIEND GROUPS'
                  id='olymp-happy-faces-icon'
                />
                <span className='left-menu-title'>Friend Groups</span>
              </a>
            </li>
            <li>
              <a href='18-MusicAndPlaylists.html'>
                <CustomSvgIcons
                  className='olymp-headphones-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='MUSIC&PLAYLISTS'
                  id='olymp-headphones-icon'
                />
                <span className='left-menu-title'>Music &amp; Playlists</span>
              </a>
            </li>
            <li>
              <a href='19-WeatherWidget.html'>
                <CustomSvgIcons
                  className='olymp-weather-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='WEATHER APP'
                  id='olymp-weather-icon'
                />
                <span className='left-menu-title'>Weather App</span>
              </a>
            </li>
            <li>
              <a href='20-CalendarAndEvents-MonthlyCalendar.html'>
                <CustomSvgIcons
                  className='olymp-calendar-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='CALENDAR AND EVENTS'
                  id='olymp-calendar-icon'
                />
                <span className='left-menu-title'>Calendar and Events</span>
              </a>
            </li>
            <li>
              <a href='24-CommunityBadges.html'>
                <CustomSvgIcons
                  className='olymp-badge-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='Community Badges'
                  id='olymp-badge-icon'
                />
                <span className='left-menu-title'>Community Badges</span>
              </a>
            </li>
            <li>
              <a href='25-FriendsBirthday.html'>
                <CustomSvgIcons
                  className='olymp-cupcake-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='Friends Birthdays'
                  id='olymp-cupcake-icon'
                />
                <span className='left-menu-title'>Friends Birthdays</span>
              </a>
            </li>
            <li>
              <a href='26-Statistics.html'>
                <CustomSvgIcons
                  className='olymp-stats-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='Account Stats'
                  id='olymp-stats-icon'
                />
                <span className='left-menu-title'>Account Stats</span>
              </a>
            </li>
            <li>
              <a href='27-ManageWidgets.html'>
                <CustomSvgIcons
                  className='olymp-manage-widgets-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='Manage Widgets'
                  id='olymp-manage-widgets-icon'
                />
                <span className='left-menu-title'>Manage Widgets</span>
              </a>
            </li>
          </ul>
          <div className='ui-block-title ui-block-title-small'>
            <h6 className='title'>YOUR ACCOUNT</h6>
          </div>
          <ul className='account-settings'>
            <li>
              <a href='#'>
                <CustomSvgIcons
                  className='olymp-menu-icon'
                  id='olymp-menu-icon'
                />
                <span>Profile Settings</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <CustomSvgIcons
                  className='olymp-star-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='FAV PAGE'
                  id='olymp-star-icon'
                />
                <span>Create Fav Page</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <CustomSvgIcons
                  className='olymp-logout-icon'
                  id='olymp-logout-icon'
                />
                <span>Log Out</span>
              </a>
            </li>
          </ul>
          <div className='ui-block-title ui-block-title-small'>
            <h6 className='title'>About Olympus</h6>
          </div>
          <ul className='about-olympus'>
            <li>
              <a href='#'>
                <span>Terms and Conditions</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>FAQs</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Careers</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftMenuMobile;
