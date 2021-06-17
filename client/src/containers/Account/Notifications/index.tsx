import CustomSvgIcons from 'components/CustomSvgIcons';
import React from 'react';
import contactSelectors from 'containers/Contact/selectors';
import contactActionCreator from 'containers/Contact/actions';
import { useDispatch, useSelector } from 'react-redux';
import { avatarFB } from 'constants/constants';

const Notifications = () => {
  const dispatch = useDispatch();
  const friendRequestSend = useSelector(contactSelectors.selectRequestsSent);

  const handleOnDestroyRequestSent = (e: any, data: any) => {
    e.preventDefault();
    dispatch(contactActionCreator.doDestroyRequestSent(data, () => {}));
  };
  return (
    <>
      {console.log(friendRequestSend.length)}
      <div className='ui-block'>
        <div className='ui-block-title'>
          <h6 className='title'>Send Requests</h6>
        </div>
        <div className='ui-block-content'>
          <ul className='notification-list friend-requests'>
            {friendRequestSend?.map((item: any) => (
              <li>
                <div className='author-thumb'>
                  <img
                    src={item?.avatar ?? avatarFB}
                    style={{ width: 32 }}
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
                    className='accept-request request-del'
                    onClick={(e) => handleOnDestroyRequestSent(e, item)}>
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
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Notifications;
