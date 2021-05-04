import CustomSvgIcons from 'components/CustomSvgIcons';
import React from 'react';
import './styles.scss';
import contactActionCreator from '../actions';
import { useDispatch } from 'react-redux';
import AvatarDefault from 'assets/images/default-avatar.png';
import { FormattedMessage, useIntl } from 'react-intl';

const FriendSuggestions = () => {
  const [friendSuggestions, setFriendSuggestions] = React.useState<any[]>();
  const dispatch = useDispatch();

  const handleClickAddFriends = (event: any) => {
    event.preventDefault();
    console.log('heheheh');
  };
  React.useEffect(() => {
    let isCancelled = false;
    dispatch(
      contactActionCreator.fetchFriendSuggestionsCB((res: any) => {
        if (!isCancelled) {
          console.log(res, 'res');
          setFriendSuggestions(res);
        }
      }),
    );
    return () => {
      isCancelled = true;
    };
  }, []);
  return (
    <>
      <div className='ui-block'>
        <div className='ui-block-title'>
          <h6 className='title'>
            <FormattedMessage id='Label.title.contact' />
          </h6>
          <a href='# !' className='more'>
            <CustomSvgIcons
              className='olymp-three-dots-icon'
              id='olymp-three-dots-icon'
            />
          </a>
        </div>
        <ul className='widget w-friend-pages-added notification-list friend-requests'>
          {friendSuggestions?.map((item: any, index: number) => {
            return (
              <li className='inline-items' key={index}>
                <div className='author-thumb'>
                  <img
                    src={item?.avatar ?? AvatarDefault}
                    style={{ width: '100%' }}
                    alt='author'
                  />
                </div>
                <div className='notification-event'>
                  <a href='#' className='h6 notification-friend'>
                    {`${item.firstName} ${item.lastName}`}
                  </a>
                  <span className='chat-message-item'>
                    6 <FormattedMessage id='Label.mutualFriend' />
                  </span>
                </div>
                <span className='notification-icon'>
                  <a
                    href='# !'
                    className='accept-request'
                    onClick={handleClickAddFriends}>
                    <span className='icon-add without-text'>
                      <CustomSvgIcons
                        className='olymp-happy-face-icon'
                        id='olymp-happy-face-icon'
                      />
                    </span>
                  </a>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FriendSuggestions;
