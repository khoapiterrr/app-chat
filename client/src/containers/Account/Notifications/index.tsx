import CustomSvgIcons from 'components/CustomSvgIcons';
import React from 'react';
import contactSelectors from 'containers/Contact/selectors';
import contactActionCreator from 'containers/Contact/actions';
import { useDispatch, useSelector } from 'react-redux';

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
                    src={
                      item?.avatar ??
                      `https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/184357069_2879808265627694_3492303132633566580_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Z8osWdrHmV4AX_zTOTP&tn=MqdNpmKyF81KT_i2&_nc_ht=scontent.fhan4-1.fna&oh=52c96bf52bda6007462e4280fc442c77&oe=60DDDDB2`
                    }
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
