import React from 'react';
import CustomSvgIcons from 'components/CustomSvgIcons';
import Avatar from 'assets/images/avatar56-sm.jpg';
const HeaderBG = () => {
  return (
    <header className='header' id='site-header'>
      <div className='page-title'>
        <h6>Profile Page</h6>
      </div>
      <div className='header-content-wrapper'>
        <form className='search-bar w-search notification-list friend-requests'>
          <div className='form-group with-button'>
            <input
              className='form-control js-user-search'
              placeholder='Search here people or pages...'
              type='text'
            />
            <button>
              {/* <SearchIcon className='olymp-magnifying-glass-icon' /> */}
              <CustomSvgIcons id='olymp-magnifying-glass-icon' />
            </button>
          </div>
        </form>
        <a href='#' className='link-find-friend'>
          Find Friends
        </a>
        <div className='control-block'>
          <div className='control-icon more has-items'>
            <CustomSvgIcons id='olymp-happy-face-icon' />
            <div className='label-avatar bg-blue'>6</div>
            <div className='more-dropdown more-with-triangle triangle-top-center'>
              <div className='ui-block-title ui-block-title-small'>
                <h6 className='title'>FRIEND REQUESTS</h6>
                <a href='#'>Find Friends</a>
                <a href='#'>Settings</a>
              </div>
              <div className='mCustomScrollbar' data-mcs-theme='dark'>
                <ul className='notification-list friend-requests'>
                  <li>
                    <div className='author-thumb'>
                      <img src='img/avatar55-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      <a href='#' className='h6 notification-friend'>
                        Tamara Romanoff
                      </a>
                      <span className='chat-message-item'>
                        Mutual Friend: Sarah Hetfield
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <a href='#' className='accept-request'>
                        <span className='icon-add without-text'>
                          <CustomSvgIcons id='olymp-happy-face-icon' />
                        </span>
                      </a>
                      <a href='#' className='accept-request request-del'>
                        <span className='icon-minus'>
                          <CustomSvgIcons id='olymp-happy-face-icon' />
                        </span>
                      </a>
                    </span>
                    <div className='more'>
                      <CustomSvgIcons id='olymp-three-dots-icon' />
                    </div>
                  </li>
                  <li>
                    <div className='author-thumb'>
                      <img src='img/avatar56-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      <a href='#' className='h6 notification-friend'>
                        Tony Stevens
                      </a>
                      <span className='chat-message-item'>
                        4 Friends in Common
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <a href='#' className='accept-request'>
                        <span className='icon-add without-text'>
                          <svg className='olymp-happy-face-icon'>
                            <use xlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon' />
                          </svg>
                        </span>
                      </a>
                      <a href='#' className='accept-request request-del'>
                        <span className='icon-minus'>
                          <svg className='olymp-happy-face-icon'>
                            <use xlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon' />
                          </svg>
                        </span>
                      </a>
                    </span>
                    <div className='more'>
                      <svg className='olymp-three-dots-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon' />
                      </svg>
                    </div>
                  </li>
                  <li className='accepted'>
                    <div className='author-thumb'>
                      <img src='img/avatar57-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      You and{' '}
                      <a href='#' className='h6 notification-friend'>
                        Mary Jane Stark
                      </a>{' '}
                      just became friends. Write on
                      <a href='#' className='notification-link'>
                        her wall
                      </a>
                      .
                    </div>
                    <span className='notification-icon'>
                      <svg className='olymp-happy-face-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon' />
                      </svg>
                    </span>
                    <div className='more'>
                      <svg className='olymp-three-dots-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon' />
                      </svg>
                      <svg className='olymp-little-delete'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete' />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className='author-thumb'>
                      <img src='img/avatar58-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      <a href='#' className='h6 notification-friend'>
                        Stagg Clothing
                      </a>
                      <span className='chat-message-item'>
                        9 Friends in Common
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <a href='#' className='accept-request'>
                        <span className='icon-add without-text'>
                          <svg className='olymp-happy-face-icon'>
                            <use xlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon' />
                          </svg>
                        </span>
                      </a>
                      <a href='#' className='accept-request request-del'>
                        <span className='icon-minus'>
                          <svg className='olymp-happy-face-icon'>
                            <use xlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon' />
                          </svg>
                        </span>
                      </a>
                    </span>
                    <div className='more'>
                      <svg className='olymp-three-dots-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon' />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
              <a href='#' className='view-all bg-blue'>
                Check all your Events
              </a>
            </div>
          </div>
          <div className='control-icon more has-items'>
            {/* <svg className='olymp-chat---messages-icon'>
              <use xlinkHref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon' />
            </svg> */}
            <CustomSvgIcons id='olymp-chat---messages-icon' />
            <div className='label-avatar bg-purple'>2</div>
            <div className='more-dropdown more-with-triangle triangle-top-center'>
              <div className='ui-block-title ui-block-title-small'>
                <h6 className='title'>Chat / Messages</h6>
                <a href='#'>Mark all as read</a>
                <a href='#'>Settings</a>
              </div>
              <div className='mCustomScrollbar' data-mcs-theme='dark'>
                <ul className='notification-list chat-message'>
                  <li className='message-unread'>
                    <div className='author-thumb'>
                      <img src='img/avatar59-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      <a href='#' className='h6 notification-friend'>
                        Diana Jameson
                      </a>
                      <span className='chat-message-item'>
                        Hi James! It’s Diana, I just wanted to let you know that
                        we have to reschedule...
                      </span>
                      <span className='notification-date'>
                        <time
                          className='entry-date updated'
                          dateTime='2004-07-24T18:18'>
                          4 hours ago
                        </time>
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <svg className='olymp-chat---messages-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon' />
                      </svg>
                    </span>
                    <div className='more'>
                      <svg className='olymp-three-dots-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon' />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className='author-thumb'>
                      <img src='img/avatar60-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      <a href='#' className='h6 notification-friend'>
                        Jake Parker
                      </a>
                      <span className='chat-message-item'>
                        Great, I’ll see you tomorrow!.
                      </span>
                      <span className='notification-date'>
                        <time
                          className='entry-date updated'
                          dateTime='2004-07-24T18:18'>
                          4 hours ago
                        </time>
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <svg className='olymp-chat---messages-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon' />
                      </svg>
                    </span>
                    <div className='more'>
                      <svg className='olymp-three-dots-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon' />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className='author-thumb'>
                      <img src={Avatar} alt='author' />
                    </div>
                    <div className='notification-event'>
                      <a href='#' className='h6 notification-friend'>
                        Elaine Dreyfuss
                      </a>
                      <span className='chat-message-item'>
                        We’ll have to check that at the office and see if the
                        client is on board with...
                      </span>
                      <span className='notification-date'>
                        <time
                          className='entry-date updated'
                          dateTime='2004-07-24T18:18'>
                          Yesterday at 9:56pm
                        </time>
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <CustomSvgIcons id='olymp-chat---messages-icon' />
                    </span>
                    <div className='more'>
                      <CustomSvgIcons id='olymp-three-dots-icon' />
                    </div>
                  </li>
                  <li className='chat-group'>
                    <div className='author-thumb'>
                      <img src='img/avatar11-sm.jpg' alt='author' />
                      <img src='img/avatar12-sm.jpg' alt='author' />
                      <img src='img/avatar13-sm.jpg' alt='author' />
                      <img src='img/avatar10-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      <a href='#' className='h6 notification-friend'>
                        You, Faye, Ed &amp; Jet +3
                      </a>
                      <span className='last-message-author'>Ed:</span>
                      <span className='chat-message-item'>
                        Yeah! Seems fine by me!
                      </span>
                      <span className='notification-date'>
                        <time
                          className='entry-date updated'
                          dateTime='2004-07-24T18:18'>
                          March 16th at 10:23am
                        </time>
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <svg className='olymp-chat---messages-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-chat---messages-icon' />
                      </svg>
                    </span>
                    <div className='more'>
                      <svg className='olymp-three-dots-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon' />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
              <a href='#' className='view-all bg-purple'>
                View All Messages
              </a>
            </div>
          </div>
          <div className='control-icon more has-items'>
            <CustomSvgIcons id='olymp-thunder-icon' />
            <div className='label-avatar bg-primary'>8</div>
            <div className='more-dropdown more-with-triangle triangle-top-center'>
              <div className='ui-block-title ui-block-title-small'>
                <h6 className='title'>Notifications</h6>
                <a href='#'>Mark all as read</a>
                <a href='#'>Settings</a>
              </div>
              <div className='mCustomScrollbar' data-mcs-theme='dark'>
                <ul className='notification-list'>
                  <li>
                    <div className='author-thumb'>
                      <img src='img/avatar62-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      <div>
                        <a href='#' className='h6 notification-friend'>
                          Mathilda Brinker
                        </a>{' '}
                        commented on your new{' '}
                        <a href='#' className='notification-link'>
                          profile status
                        </a>
                        .
                      </div>
                      <span className='notification-date'>
                        <time
                          className='entry-date updated'
                          dateTime='2004-07-24T18:18'>
                          4 hours ago
                        </time>
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <CustomSvgIcons id='olymp-comments-post-icon' />
                    </span>
                    <div className='more'>
                      <CustomSvgIcons id='olymp-three-dots-icon' />
                      <CustomSvgIcons id='olymp-little-delete' />
                    </div>
                  </li>
                  <li className='un-read'>
                    <div className='author-thumb'>
                      <img src='img/avatar63-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      <div>
                        You and{' '}
                        <a href='#' className='h6 notification-friend'>
                          Nicholas Grissom
                        </a>{' '}
                        just became friends. Write on{' '}
                        <a href='#' className='notification-link'>
                          his wall
                        </a>
                        .
                      </div>
                      <span className='notification-date'>
                        <time
                          className='entry-date updated'
                          dateTime='2004-07-24T18:18'>
                          9 hours ago
                        </time>
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <svg className='olymp-happy-face-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon' />
                      </svg>
                    </span>
                    <div className='more'>
                      <svg className='olymp-three-dots-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon' />
                      </svg>
                      <svg className='olymp-little-delete'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete' />
                      </svg>
                    </div>
                  </li>
                  <li className='with-comment-photo'>
                    <div className='author-thumb'>
                      <img src='img/avatar64-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      <div>
                        <a href='#' className='h6 notification-friend'>
                          Sarah Hetfield
                        </a>{' '}
                        commented on your{' '}
                        <a href='#' className='notification-link'>
                          photo
                        </a>
                        .
                      </div>
                      <span className='notification-date'>
                        <time
                          className='entry-date updated'
                          dateTime='2004-07-24T18:18'>
                          Yesterday at 5:32am
                        </time>
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <svg className='olymp-comments-post-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-comments-post-icon' />
                      </svg>
                    </span>
                    <div className='comment-photo'>
                      <img src='img/comment-photo1.jpg' alt='photo' />
                      <span>
                        “She looks incredible in that outfit! We should see
                        each...”
                      </span>
                    </div>
                    <div className='more'>
                      <svg className='olymp-three-dots-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon' />
                      </svg>
                      <svg className='olymp-little-delete'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete' />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className='author-thumb'>
                      <img src='img/avatar65-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      <div>
                        <a href='#' className='h6 notification-friend'>
                          Green Goo Rock
                        </a>{' '}
                        invited you to attend to his event Goo in{' '}
                        <a href='#' className='notification-link'>
                          Gotham Bar
                        </a>
                        .
                      </div>
                      <span className='notification-date'>
                        <time
                          className='entry-date updated'
                          dateTime='2004-07-24T18:18'>
                          March 5th at 6:43pm
                        </time>
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <svg className='olymp-happy-face-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-happy-face-icon' />
                      </svg>
                    </span>
                    <div className='more'>
                      <svg className='olymp-three-dots-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon' />
                      </svg>
                      <svg className='olymp-little-delete'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete' />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className='author-thumb'>
                      <img src='img/avatar66-sm.jpg' alt='author' />
                    </div>
                    <div className='notification-event'>
                      <div>
                        <a href='#' className='h6 notification-friend'>
                          James Summers
                        </a>{' '}
                        commented on your new{' '}
                        <a href='#' className='notification-link'>
                          profile status
                        </a>
                        .
                      </div>
                      <span className='notification-date'>
                        <time
                          className='entry-date updated'
                          dateTime='2004-07-24T18:18'>
                          March 2nd at 8:29pm
                        </time>
                      </span>
                    </div>
                    <span className='notification-icon'>
                      <svg className='olymp-heart-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-heart-icon' />
                      </svg>
                    </span>
                    <div className='more'>
                      <svg className='olymp-three-dots-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-three-dots-icon' />
                      </svg>
                      <svg className='olymp-little-delete'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-little-delete' />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
              <a href='#' className='view-all bg-primary'>
                View All Notifications
              </a>
            </div>
          </div>
          <div className='author-page author vcard inline-items more'>
            <div className='author-thumb'>
              <img alt='author' src='img/author-page.jpg' className='avatar' />
              <span className='icon-status online' />
              <div className='more-dropdown more-with-triangle'>
                <div className='mCustomScrollbar' data-mcs-theme='dark'>
                  <div className='ui-block-title ui-block-title-small'>
                    <h6 className='title'>Your Account</h6>
                  </div>
                  <ul className='account-settings'>
                    <li>
                      <a href='29-YourAccount-AccountSettings.html'>
                        <svg className='olymp-menu-icon'>
                          <use xlinkHref='svg-icons/sprites/icons.svg#olymp-menu-icon' />
                        </svg>
                        <span>Profile Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href='36-FavPage-SettingsAndCreatePopup.html'>
                        <svg
                          className='olymp-star-icon left-menu-icon'
                          data-toggle='tooltip'
                          data-placement='right'
                          data-original-title='FAV PAGE'>
                          <use xlinkHref='svg-icons/sprites/icons.svg#olymp-star-icon' />
                        </svg>
                        <span>Create Fav Page</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <svg className='olymp-logout-icon'>
                          <use xlinkHref='svg-icons/sprites/icons.svg#olymp-logout-icon' />
                        </svg>
                        <span>Log Out</span>
                      </a>
                    </li>
                  </ul>
                  <div className='ui-block-title ui-block-title-small'>
                    <h6 className='title'>Chat Settings</h6>
                  </div>
                  <ul className='chat-settings'>
                    <li>
                      <a href='#'>
                        <span className='icon-status online' />
                        <span>Online</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <span className='icon-status away' />
                        <span>Away</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <span className='icon-status disconected' />
                        <span>Disconnected</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <span className='icon-status status-invisible' />
                        <span>Invisible</span>
                      </a>
                    </li>
                  </ul>
                  <div className='ui-block-title ui-block-title-small'>
                    <h6 className='title'>Custom Status</h6>
                  </div>
                  <form className='form-group with-button custom-status'>
                    <input
                      className='form-control'
                      type='text'
                      defaultValue='Space Cowboy'
                    />
                    <button className='bg-purple'>
                      <svg className='olymp-check-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-check-icon' />
                      </svg>
                    </button>
                  </form>
                  <div className='ui-block-title ui-block-title-small'>
                    <h6 className='title'>About Olympus</h6>
                  </div>
                  <ul>
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
            <a href='02-ProfilePage.html' className='author-name fn'>
              <div className='author-title'>
                James Spiegel{' '}
                <svg className='olymp-dropdown-arrow-icon'>
                  <use xlinkHref='svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon' />
                </svg>
              </div>
              <span className='author-subtitle'>SPACE COWBOY</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBG;
