import CustomSvgIcons from 'components/CustomSvgIcons';
import React from 'react';
import './styles.scss';
import contactActionCreator from '../actions';
import { useDispatch } from 'react-redux';
import AvatarDefault from 'assets/images/default-avatar.png';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const FriendSuggestions = () => {
  const [friendSuggestions, setFriendSuggestions] = React.useState<any[]>();
  const dispatch = useDispatch();
  const handleClickAddFriends = (event: any, contactId: string) => {
    event.preventDefault();
    dispatch(
      contactActionCreator.addContact({ contactId: contactId }, () => {
        dispatch(
          contactActionCreator.fetchFriendSuggestionsCB((res: any) => {
            setFriendSuggestions(res);
            console.log(res);
          }),
        );
      }),
    );
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
            {/* <FormattedMessage id='Label.title.contact' /> */}
            Gợi ý kết bạn
          </h6>
          <a href='# !' className='more'>
            <CustomSvgIcons
              className='olymp-three-dots-icon'
              id='olymp-three-dots-icon'
            />
          </a>
        </div>
        <ul className='widget w-friend-pages-added notification-list friend-requests'>
          {friendSuggestions?.length ? (
            friendSuggestions?.map((item: any, index: number) => {
              return (
                <li className='inline-items' key={index}>
                  <div className='author-thumb'>
                    <img
                      src={item?.avatar ?? AvatarDefault}
                      className='avatar-cover-parent'
                      alt='author'
                    />
                  </div>
                  <div className='notification-event'>
                    <Link
                      to={`/profile/${item._id}`}
                      className='h6 notification-friend'>
                      {`${item.firstName} ${item.lastName}`}
                    </Link>
                    <span className='chat-message-item'>
                      6 <FormattedMessage id='Label.mutualFriend' />
                    </span>
                  </div>
                  <span className='notification-icon'>
                    <a
                      href='# !'
                      className='accept-request'
                      onClick={(e) => handleClickAddFriends(e, item?._id)}>
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
            })
          ) : (
            <p className='text-center pt-2'>Không tìm thấy bạn bè phù hợp</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default FriendSuggestions;
