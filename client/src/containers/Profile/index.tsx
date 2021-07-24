import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import authSelectors from '../Auth/selectors';
import { fetchUserByIdCB } from './actions';
import bgDefault from 'assets/images/bgDefault.jpg';
import AvatarDefault from 'assets/images/default-avatar.png';
import CustomSvgIcons from 'components/CustomSvgIcons';
import { User } from 'core/api/user.interface';
import avatar38 from 'assets/images/avatar38-sm.jpg';
import contactSelectors from '../Contact/selectors';
import { alertType, avatarFB } from 'constants/constants';
import { DropzoneDialog } from 'material-ui-dropzone';
import { uploadSingleFile } from 'utils/firebaseUltil';
import accountActionCreator from '../Account/actions';
import { showSnackbar } from 'containers/layout/actions';

interface ParamTypes {
  id: string | undefined;
}
const Profile: React.FC = () => {
  let { id } = useParams<ParamTypes>();
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const [profileUser, setProfileUser] = React.useState<User>();
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.selectContacts);
  const [openDropzoneDialog, setOpenDropzoneDialog] = useState<any>('');
  React.useEffect(() => {
    if (id === 'me') {
      id = currentUser?._id;
    }
    dispatch(fetchUserByIdCB(id as string, (res: any) => setProfileUser(res)));
  }, [id, currentUser]);
  const onClickUnknow = (e: any) => {
    e.preventDefault();
  };
  const handleClickUpAvatar = (e: any) => {
    onClickUnknow(e);
    setOpenDropzoneDialog('avatar');
  };
  const handleClickUpBg = (e: any) => {
    onClickUnknow(e);
    setOpenDropzoneDialog('Bg');
  };
  const handleSaveFiles = async (files: any) => {
    if (files.length > 0) {
      setOpenDropzoneDialog(false);
      const result = await uploadSingleFile(files[0]);
      dispatch(
        accountActionCreator.updateProfile(
          profileUser!._id,
          {
            ...profileUser,
            avatar:
              openDropzoneDialog === 'avatar'
                ? result.path
                : profileUser?.avatar,
            background:
              openDropzoneDialog === 'Bg'
                ? result.path
                : profileUser?.background,
          },
          (res: any) => {
            console.log(res, 'data');
            dispatch(showSnackbar('Cập nhật thành công', alertType.SUCCESS));
          },
        ),
      );
    }
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
                    src={profileUser?.background ?? bgDefault}
                    alt='nature'
                    style={{ height: '50vh', objectFit: 'cover' }}
                  />
                </div>
                <div className='profile-section'>
                  <div className='row'>
                    <div className='col col-lg-5 col-md-5 col-sm-12 col-12'></div>
                    <div className='col col-lg-5 ml-auto col-md-5 col-sm-12 col-12'></div>
                  </div>
                  <div className='control-block-button'>
                    {/* <a
                      href='!# '
                      onClick={onClickUnknow}
                      className='btn btn-control bg-blue'>
                      <CustomSvgIcons
                        className='olymp-happy-face-icon'
                        id='olymp-happy-face-icon'
                      />
                    </a> */}
                    {currentUser?._id !== profileUser?._id ? (
                      <Link
                        to={`/messages/${profileUser?._id}`}
                        className='btn btn-control bg-purple'>
                        <CustomSvgIcons
                          className='olymp-chat---messages-icon'
                          id='olymp-chat---messages-icon'
                        />
                      </Link>
                    ) : (
                      <div className='btn btn-control bg-primary more'>
                        <CustomSvgIcons
                          className='olymp-settings-icon'
                          id='olymp-settings-icon'
                        />
                        <ul className='more-dropdown more-with-triangle triangle-bottom-right'>
                          <li>
                            <a
                              href='!# '
                              onClick={handleClickUpBg}
                              data-toggle='modal'
                              data-target='#update-header-photo'>
                              Tải ảnh bìa
                            </a>
                          </li>
                          <li>
                            <a
                              href='!# '
                              onClick={handleClickUpAvatar}
                              data-toggle='modal'
                              data-target='#update-header-photo'>
                              Tải ảnh đại diện
                            </a>
                          </li>
                          <li>
                            <Link to='/account/personal-info'>
                              Cài đặt tài khoản
                            </Link>
                          </li>
                        </ul>
                        <DropzoneDialog
                          open={Boolean(openDropzoneDialog)}
                          onSave={handleSaveFiles}
                          acceptedFiles={[
                            'image/jpeg',
                            'image/png',
                            'image/bmp',
                          ]}
                          showPreviews={true}
                          filesLimit={1}
                          maxFileSize={5000000}
                          onClose={() => setOpenDropzoneDialog(false)}
                          submitButtonText={
                            openDropzoneDialog === 'Bg'
                              ? 'Tải ảnh bìa'
                              : 'Tải ảnh đại diện'
                          }
                          cancelButtonText='Hủy'
                          dialogTitle={
                            openDropzoneDialog === 'Bg'
                              ? 'Thay đổi ảnh bìa'
                              : 'Thay đổi ảnh đại diện'
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className='top-header-author'>
                  <a
                    href='!# '
                    onClick={onClickUnknow}
                    className='author-thumb'>
                    <img
                      src={profileUser?.avatar ?? avatarFB}
                      style={{ width: '100%' }}
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
                    <div className='country'>{`${
                      profileUser?.city ?? 'Hà nội'
                    }, ${profileUser?.country ?? 'Việt Nam'}`}</div>
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
                          a few seconds ago.
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
                    Xin chào các bạn đây là chức năng cập nhật trạng thái, Chúng
                    tôi sẽ cập nhật chức năng trong thời gian gần nhất cảm ơn
                    các bạn đã quan tâm.
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
                      <span>1</span>
                    </a>
                    <ul className='friends-harmonic'>
                      <li>
                        <a href='#'>
                          <img
                            src={
                              'https://scontent-hkt1-2.xx.fbcdn.net/v/t35.18174-12/p1080x2048/26772005_1984909901784206_926763981_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=g-txI0tfU5EAX9NYg97&_nc_ht=scontent-hkt1-2.xx&oh=f13d34f40f2292ce172866483ef589c3&oe=60FD8992'
                            }
                            alt='friend'
                          />
                        </a>
                      </li>
                    </ul>
                    <div className='names-people-likes'>
                      <a href='#'>KhoaPiterr</a>
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
                {/* Profile Intro */}
                <h6 className='title'>Thông tin</h6>
              </div>
              <div className='ui-block-content'>
                {/* W-Personal-Info */}
                <ul className='widget w-personal-info item-block'>
                  <li>
                    <span className='title'>Giới thiệu:</span>
                    <span className='text'>
                      Xin chào, tôi là{' '}
                      {`${profileUser?.firstName} ${profileUser?.lastName}`},
                      rất vui khi bạn ghé thăm.
                    </span>
                  </li>
                </ul>
                {/* .. end W-Personal-Info */}
                {/* W-Socials */}
                <div className='widget w-socials'>
                  <h6 className='title'>Các mạng xã hội:</h6>

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
                <h6 className='title'>Bạn bè ({contacts?.length})</h6>
              </div>
              <div className='ui-block-content'>
                {/* W-Faved-Page */}
                <ul className='widget w-faved-page js-zoom-gallery'>
                  {contacts?.map((item: any) => (
                    <li>
                      <a href='#'>
                        <img src={item.avatar ?? avatarFB} alt='author' />
                      </a>
                    </li>
                  ))}
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
