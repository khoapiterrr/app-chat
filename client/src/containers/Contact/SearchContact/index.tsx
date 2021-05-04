import React from 'react';
import NotFoundResult from 'assets/images/no_results_gray_wash.svg';
import './styles.scss';
import AvatarDefault from 'assets/images/default-avatar.png';
import CustomSvgIcons from 'components/CustomSvgIcons';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import contactActionCreator from '../actions';

interface IProps {
  keyword?: any;
}

const SearchContact: React.FC<IProps> = ({ keyword }) => {
  const [resultSearch, setResultSearch] = React.useState<any[]>();
  const dispatch = useDispatch();
  React.useEffect(() => {
    let isCancelled = false;
    dispatch(
      contactActionCreator.fetchSearchFriendCB(keyword, (res: any) => {
        if (!isCancelled) {
          console.log(res, 'his ae');
          setResultSearch(res);
        }
      }),
    );
    return () => {
      isCancelled = true;
    };
  }, [keyword]);
  return (
    <div className='SearchContact'>
      {resultSearch && !(resultSearch?.length > 0) ? (
        <div className='notfound'>
          <img src={NotFoundResult} alt='' />
          <br />
          <h2 className='text-center'>
            <b>Kết quả tìm kiếm không phù hợp</b>
          </h2>
        </div>
      ) : (
        <div className='ui-block'>
          <div className='ui-block-title'>
            <h6 className='title'>
              <FormattedMessage id='Result.search.searchPage' /> "{keyword}"
            </h6>
          </div>
          <ul className='widget w-friend-pages-added notification-list friend-requests'>
            {resultSearch?.map((item) => (
              <li className='inline-items'>
                <div className='author-thumb'>
                  <img
                    src={item?.avatar ?? AvatarDefault}
                    style={{ width: 32 }}
                    alt='author'
                  />
                </div>
                <div className='notification-event'>
                  <a href='#' className='h6 notification-friend'>
                    {`${item.firstName} ${item.lastName}`}
                  </a>
                  <span className='chat-message-item'>8 Friends in Common</span>
                </div>
                {item.type !== 'you' ? (
                  <span className='notification-icon'>
                    <a href='#' className='accept-request'>
                      <span className='icon-add without-text'>
                        <CustomSvgIcons
                          className='olymp-happy-face-icon'
                          id='olymp-happy-face-icon'
                        />
                      </span>
                    </a>
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchContact;
