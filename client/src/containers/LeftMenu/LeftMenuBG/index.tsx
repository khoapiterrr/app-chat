import React, { MutableRefObject, useRef } from 'react';
import LogoWeb from 'assets/images/logo.png';
import CustomSvgIcons from 'components/CustomSvgIcons';

const LeftMenuBG = () => {
  const leftMenu: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const openMenu = (e: any) => {
    e.preventDefault();
    leftMenu.current!.classList.toggle('open');
  };
  return (
    <div className='fixed-sidebar' ref={leftMenu}>
      <div className='fixed-sidebar-left sidebar--small' id='sidebar-left'>
        <a href='02-ProfilePage.html' className='logo'>
          <div className='img-wrap'>
            <img src={LogoWeb} alt='Olympus' />
          </div>
        </a>
        <div className='mCustomScrollbar' data-mcs-theme='dark'>
          <ul className='left-menu'>
            <li>
              <a href='# ' className='js-sidebar-open' onClick={openMenu}>
                <CustomSvgIcons
                  id='olymp-menu-icon'
                  data-toggle='tooltip'
                  className='olymp-star-icon left-menu-icon'
                  data-placement='right'
                  data-original-title='OPEN MENU'
                />
              </a>
            </li>
            <li>
              <a href='03-Newsfeed.html'>
                <CustomSvgIcons
                  id='olymp-newsfeed-icon'
                  className='olymp-star-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='OPEN MENU'
                />
              </a>
            </li>
            <li>
              <a href='16-FavPagesFeed.html'>
                <CustomSvgIcons
                  id='olymp-star-icon'
                  className='olymp-star-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='FAV PAGE'
                  data-original-title='OPEN MENU'
                />
              </a>
            </li>
            <li>
              <a href='17-FriendGroups.html'>
                <CustomSvgIcons
                  id='olymp-happy-faces-icon'
                  data-toggle='tooltip'
                  className='olymp-star-icon left-menu-icon'
                  data-placement='right'
                  data-original-title='FRIEND GROUPS'
                />
              </a>
            </li>
            <li>
              <a href='19-WeatherWidget.html'>
                <CustomSvgIcons
                  id='olymp-weather-icon'
                  data-toggle='tooltip'
                  className='olymp-star-icon left-menu-icon'
                  data-placement='right'
                  data-original-title='WEATHER APP'
                />
              </a>
            </li>

            <li>
              <a href='24-CommunityBadges.html'>
                <CustomSvgIcons
                  id='olymp-badge-icon'
                  data-toggle='tooltip'
                  className='olymp-star-icon left-menu-icon'
                  data-placement='right'
                  data-original-title='Community Badges'
                />
              </a>
            </li>
            <li>
              <a href='25-FriendsBirthday.html'>
                <CustomSvgIcons
                  id='olymp-cupcake-icon'
                  className='olymp-cupcake-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='Friends Birthdays'
                />
              </a>
            </li>
            <li>
              <a href='26-Statistics.html'>
                <CustomSvgIcons
                  id='olymp-stats-icon'
                  className='olymp-stats-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='Account Stats'
                />
              </a>
            </li>
            <li>
              <a href='27-ManageWidgets.html'>
                <CustomSvgIcons
                  id='olymp-manage-widgets-icon'
                  className='olymp-manage-widgets-icon left-menu-icon'
                  data-toggle='tooltip'
                  data-placement='right'
                  data-original-title='Manage Widgets'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='fixed-sidebar-left sidebar--large' id='sidebar-left-1'>
        <a href='02-ProfilePage.html' className='logo'>
          <div className='img-wrap'>
            <img src={LogoWeb} alt='Olympus' />
          </div>
          <div className='title-block'>
            <h6 className='logo-title'>olympus</h6>
          </div>
        </a>
        <div className='mCustomScrollbar' data-mcs-theme='dark'>
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
          <div className='profile-completion'>
            <div className='skills-item'>
              <div className='skills-item-info'>
                <span className='skills-item-title'>Profile Completion</span>
                <span className='skills-item-count'>
                  <span
                    className='count-animate'
                    data-speed={1000}
                    data-refresh-interval={50}
                    data-to={76}
                    data-from={0}
                  />
                  <span className='units'>76%</span>
                </span>
              </div>
              <div className='skills-item-meter'>
                <span
                  className='skills-item-meter-active bg-primary'
                  style={{ width: '76%' }}
                />
              </div>
            </div>
            <span>
              Complete <a href='#'>your profile</a> so people can know more
              about you!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenuBG;
