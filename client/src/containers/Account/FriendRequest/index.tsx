import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactSelectors from 'containers/Contact/selectors';
import contactActionCreator from 'containers/Contact/actions';
import CustomSvgIcons from 'components/CustomSvgIcons';
import { avatarFB } from 'constants/constants';

const FriendRequest = () => {
  const dispatch = useDispatch();
  const friendRequest = useSelector(contactSelectors.selectRequests);

  const handleOnDestroyRequest = (e: any, data: any) => {
    e.preventDefault();
    dispatch(contactActionCreator.doDestroyRequest(data, () => {}));
  };

  const handleOnUpdateContact = (e: any, data: any) => {
    e.preventDefault();
    dispatch(contactActionCreator.doUpdateContact(data, () => {}));
  };
  return (
    <>
      <div className='ui-block'>
        <div className='ui-block-title'>
          <h6 className='title'>Friend Requests</h6>
        </div>
        <div className='ui-block-content'>
          <ul className='notification-list friend-requests'>
            {friendRequest?.length > 0 ? (
              friendRequest?.map((item: any) => (
                <li>
                  <div className='author-thumb'>
                    <img
                      src={item?.avatar ?? avatarFB}
                      style={{ width: 32, height: 32, objectFit: 'cover' }}
                      alt='author'
                    />
                  </div>
                  <div className='notification-event'>
                    <a href='#' className='h6 notification-friend'>
                      {`${item?.firstName} ${item?.lastName}`}
                    </a>
                    <span className='chat-message-item'>
                      Mutual Friend: KhoaPiterrr
                    </span>
                  </div>
                  <span className='notification-icon'>
                    <a
                      href='#'
                      className='accept-request'
                      onClick={(e) => handleOnUpdateContact(e, item)}>
                      <span className='icon-add'>
                        <CustomSvgIcons
                          className='olymp-happy-face-icon'
                          id='olymp-happy-face-icon'
                        />
                      </span>
                      Accept Friend Request
                    </a>
                    <a
                      href='#'
                      className='accept-request request-del'
                      onClick={(e) => handleOnDestroyRequest(e, item)}>
                      <span className='icon-minus'>
                        <CustomSvgIcons
                          className='olymp-happy-face-icon'
                          id='olymp-happy-face-icon'
                        />
                      </span>
                    </a>
                  </span>
                  <div className='more'>
                    <CustomSvgIcons
                      className='olymp-three-dots-icon'
                      id='olymp-three-dots-icon'
                    />
                    <CustomSvgIcons
                      className='olymp-little-delete'
                      id='olymp-little-delete'
                    />
                  </div>
                </li>
              ))
            ) : (
              <p className='text-center pt-2'>Không có lời mời kết bạn nào.</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
