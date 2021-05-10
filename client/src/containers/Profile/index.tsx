import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import authSelectors from '../Auth/selectors';
import { fetchUserByIdCB } from './actions';
import bgDefault from 'assets/images/bgDefault.jpg';
import AvatarDefault from 'assets/images/default-avatar.png';
import CustomSvgIcons from 'components/CustomSvgIcons';
import { User } from 'core/api/user.interface';
import avatar38 from 'assets/images/avatar38-sm.jpg';

interface ParamTypes {
  id: string | undefined;
}
const Profile: React.FC = () => {
  let { id } = useParams<ParamTypes>();
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const [profileUser, setProfileUser] = React.useState<User>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (id === 'me') {
      id = currentUser?._id;
    }
    dispatch(fetchUserByIdCB(id as string, (res: any) => setProfileUser(res)));
  }, [id, currentUser]);
  const onClickUnknow = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <div className='header-spacer' />
      {/* Top Header-Profile */}
      <div className='container'>
        <div className='row'>
          <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
            <div className='ui-block'>
              <div className='top-header'>
                <div className='top-header-thumb'>
                  <img
                    src={bgDefault}
                    alt='nature'
                    style={{ height: '50vh', objectFit: 'cover' }}
                  />
                </div>
                <div className='profile-section'>
                  <div className='row'>
                    <div className='col col-lg-5 col-md-5 col-sm-12 col-12'>
                      <ul className='profile-menu'>
                        <li>
                          <a
                            href='!# '
                            onClick={onClickUnknow}
                            className='active'>
                            Timeline
                          </a>
                        </li>
                        <li>
                          <a href='!# ' onClick={onClickUnknow}>
                            About
                          </a>
                        </li>
                        <li>
                          <a href='!# ' onClick={onClickUnknow}>
                            Friends
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='col col-lg-5 ml-auto col-md-5 col-sm-12 col-12'>
                      <ul className='profile-menu'>
                        <li>
                          <a href='#' onClick={onClickUnknow}>
                            Photos
                          </a>
                        </li>
                        <li>
                          <a href='#' onClick={onClickUnknow}>
                            Videos
                          </a>
                        </li>
                        <li>
                          <div className='more'>
                            <CustomSvgIcons
                              className='olymp-three-dots-icon'
                              id='olymp-three-dots-icon'
                            />
                            <ul className='more-dropdown more-with-triangle'>
                              <li>
                                <a href='#'>Report Profile</a>
                              </li>
                              <li>
                                <a href='#'>Block Profile</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='control-block-button'>
                    <a
                      href='!# '
                      onClick={onClickUnknow}
                      className='btn btn-control bg-blue'>
                      <CustomSvgIcons
                        className='olymp-happy-face-icon'
                        id='olymp-happy-face-icon'
                      />
                    </a>
                    <a
                      href='!# '
                      onClick={onClickUnknow}
                      className='btn btn-control bg-purple'>
                      <CustomSvgIcons
                        className='olymp-chat---messages-icon'
                        id='olymp-chat---messages-icon'
                      />
                    </a>
                    <div className='btn btn-control bg-primary more'>
                      <CustomSvgIcons
                        className='olymp-settings-icon'
                        id='olymp-settings-icon'
                      />
                      <ul className='more-dropdown more-with-triangle triangle-bottom-right'>
                        <li>
                          <a
                            href='!# '
                            onClick={onClickUnknow}
                            data-toggle='modal'
                            data-target='#update-header-photo'>
                            Update Profile Photo
                          </a>
                        </li>
                        <li>
                          <a
                            href='!# '
                            onClick={onClickUnknow}
                            data-toggle='modal'
                            data-target='#update-header-photo'>
                            Update Header Photo
                          </a>
                        </li>
                        <li>
                          <a href='!# '>Account Settings</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='top-header-author'>
                  <a
                    href='!# '
                    onClick={onClickUnknow}
                    className='author-thumb'>
                    <img
                      src={profileUser?.avatar ?? AvatarDefault}
                      alt='author'
                    />
                  </a>
                  <div className='author-content'>
                    <a
                      href='!# '
                      onClick={onClickUnknow}
                      className='h4 author-name'>
                      {`${profileUser?.firstName} ${profileUser?.lastName}`}
                    </a>
                    <div className='country'>{`${profileUser?.city}, ${profileUser?.country}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          {/* Main Content */}
          <div className='col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12'>
            <div id='newsfeed-items-grid'>
              <div className='ui-block'>
                {/* Post */}
                <article className='hentry post'>
                  <div className='post__author author vcard inline-items'>
                    <img
                      src={profileUser?.avatar ?? AvatarDefault}
                      alt='author'
                    />
                    <div className='author-date'>
                      <a
                        className='h6 post__author-name fn'
                        href='#'
                        onClick={onClickUnknow}>
                        {`${profileUser?.firstName} ${profileUser?.lastName}`}
                      </a>
                      <div className='post__date'>
                        <time className='published' dateTime='2017-03-24T18:18'>
                          19 hours ago
                        </time>
                      </div>
                    </div>
                    <div className='more'>
                      <CustomSvgIcons
                        className='olymp-three-dots-icon'
                        id='olymp-three-dots-icon'
                      />
                      <ul className='more-dropdown'>
                        <li>
                          <a href='#'>Edit Post</a>
                        </li>
                        <li>
                          <a href='#'>Delete Post</a>
                        </li>
                        <li>
                          <a href='#'>Turn Off Notifications</a>
                        </li>
                        <li>
                          <a href='#'>Select as Featured</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque.
                  </p>
                  <div className='post-additional-info inline-items'>
                    <a href='#' className='post-add-icon inline-items'>
                      <svg className='olymp-heart-icon'>
                        <use xlinkHref='svg-icons/sprites/icons.svg#olymp-heart-icon' />
                      </svg>
                      <CustomSvgIcons
                        className='olymp-heart-icon'
                        id='olymp-heart-icon'
                      />
                      <span>8</span>
                    </a>
                    <ul className='friends-harmonic'>
                      <li>
                        <a href='#'>
                          <img src={avatar38} alt='friend' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img src={avatar38} alt='friend' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img src={avatar38} alt='friend' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img src={avatar38} alt='friend' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img src={avatar38} alt='friend' />
                        </a>
                      </li>
                    </ul>
                    <div className='names-people-likes'>
                      <a href='#'>KhoaPiterr</a> and
                      <br />6 more liked this
                    </div>
                    <div className='comments-shared'>
                      <a href='#' className='post-add-icon inline-items'>
                        <CustomSvgIcons
                          className='olymp-speech-balloon-icon'
                          id='olymp-speech-balloon-icon'
                        />
                        <span>17</span>
                      </a>
                      <a href='#' className='post-add-icon inline-items'>
                        <CustomSvgIcons
                          className='olymp-share-icon'
                          id='olymp-share-icon'
                        />
                        <span>24</span>
                      </a>
                    </div>
                  </div>
                  <div className='control-block-button post-control-button'>
                    <a href='#' className='btn btn-control featured-post'>
                      <CustomSvgIcons
                        className='olymp-trophy-icon'
                        id='olymp-trophy-icon'
                      />
                    </a>
                    <a href='#' className='btn btn-control'>
                      <CustomSvgIcons
                        className='olymp-like-post-icon'
                        id='olymp-like-post-icon'
                      />
                    </a>
                    <a href='#' className='btn btn-control'>
                      <CustomSvgIcons
                        className='olymp-comments-post-icon'
                        id='olymp-comments-post-icon'
                      />
                    </a>
                    <a href='#' className='btn btn-control'>
                      <CustomSvgIcons
                        className='olymp-share-icon'
                        id='olymp-share-icon'
                      />
                    </a>
                  </div>
                </article>
                {/* .. end Post */}
              </div>
            </div>
          </div>
          {/* ... end Main Content */}
          {/* Left Sidebar */}
          <div className='col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12'>
            <div className='ui-block'>
              <div className='ui-block-title'>
                <h6 className='title'>Profile Intro</h6>
              </div>
              <div className='ui-block-content'>
                {/* W-Personal-Info */}
                <ul className='widget w-personal-info item-block'>
                  <li>
                    <span className='title'>About Me:</span>
                    <span className='text'>
                      Hi, I’m Khoapiterrr, I’m 21 and I work as a Digital
                      Designer
                    </span>
                  </li>
                </ul>
                {/* .. end W-Personal-Info */}
                {/* W-Socials */}
                <div className='widget w-socials'>
                  <h6 className='title'>Other Social Networks:</h6>

                  <a
                    href={
                      profileUser?.facebookLink ??
                      'https://www.facebook.com/KhoaPiterrr/'
                    }
                    target='_blank'
                    className='social-item bg-facebook'>
                    <i className='fab fa-facebook-f' aria-hidden='true' />
                    Facebook
                  </a>

                  {profileUser?.twitterLink && (
                    <a
                      href={profileUser?.twitterLink}
                      target='_blank'
                      className='social-item bg-twitter'>
                      <i className='fab fa-twitter' aria-hidden='true' />
                      Twitter
                    </a>
                  )}
                </div>
                {/* ... end W-Socials */}
              </div>
            </div>
          </div>
          {/* ... end Left Sidebar */}
          {/* Right Sidebar */}
          <div className='col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12'>
            <div className='ui-block'>
              <div className='ui-block-title'>
                <h6 className='title'>Friends (86)</h6>
              </div>
              <div className='ui-block-content'>
                {/* W-Faved-Page */}
                <ul className='widget w-faved-page js-zoom-gallery'>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='author' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='user' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='author' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='user' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='author' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='author' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='user' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='author' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='author' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='user' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='user' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='user' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='user' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src={avatar38} alt='user' />
                    </a>
                  </li>
                  <li className='all-users'>
                    <a href='#'>+74</a>
                  </li>
                </ul>
                {/* .. end W-Faved-Page */}
              </div>
            </div>
          </div>
          {/* ... end Right Sidebar */}
        </div>
      </div>
    </>
  );
};

export default Profile;
