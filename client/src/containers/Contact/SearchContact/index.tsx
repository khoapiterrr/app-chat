import React from 'react';
import NotFoundResult from 'assets/images/no_results_gray_wash.svg';
import './styles.scss';
import AvatarDefault from 'assets/images/default-avatar.png';
import CustomSvgIcons from 'components/CustomSvgIcons';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import contactActionCreator from '../actions';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { cloneDeep } from 'lodash';
import useSearchFriends from 'Hooks/UseSearchFriends';
interface IProps {
  keyword?: any;
}

const SearchContact: React.FC<IProps> = ({ keyword }) => {
  const dispatch = useDispatch();
  const { data, afterDestroyRequest, afterAddRequest, afterAddSuccess } =
    useSearchFriends(keyword);
  const handleOnDestroyRequestSent = (e: any, data: any) => {
    e.preventDefault();
    dispatch(
      contactActionCreator.doDestroyRequestSent(data, () => {
        afterDestroyRequest(data);
      }),
    );
  };
  const handleOnDestroyRequest = (e: any, data: any) => {
    e.preventDefault();
    dispatch(
      contactActionCreator.doDestroyRequest(data, () => {
        afterDestroyRequest(data);
      }),
    );
  };
  const handleOnUpdateContact = (e: any, data: any) => {
    e.preventDefault();
    dispatch(
      contactActionCreator.doUpdateContact(data, () => {
        afterAddSuccess(data);
      }),
    );
  };
  const handleOnAddContact = (e: any, data: any) => {
    e.preventDefault();
    dispatch(
      contactActionCreator.addContact({ contactId: data._id }, () => {
        afterAddRequest(data);
      }),
    );
  };

  return (
    <div className='SearchContact'>
      {data && !(data?.length > 0) ? (
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
            {data?.map((item: any) => (
              <li className='inline-items'>
                <div className='author-thumb'>
                  <img
                    src={item?.avatar ?? AvatarDefault}
                    style={{ width: 32, height: 32, objectFit: 'cover' }}
                    alt='author'
                  />
                </div>
                <div className='notification-event'>
                  <Link
                    to={`/profile/${item._id}`}
                    className='h6 notification-friend'>
                    {`${item.firstName} ${item.lastName}`}
                  </Link>
                  <span className='chat-message-item'>8 Friends in Common</span>
                </div>
                {item.type === 'requestSent' ? (
                  <Tooltip title='Cancel request' aria-label='Cancel request'>
                    <span className='notification-icon'>
                      <a
                        href='#'
                        className='accept-request request-del'
                        onClick={(e) => handleOnDestroyRequestSent(e, item)}>
                        <span className='icon-minus'>
                          <CustomSvgIcons id='olymp-happy-face-icon' />
                        </span>
                      </a>
                    </span>
                  </Tooltip>
                ) : item.type === 'contact' ? (
                  <Tooltip title='Chat' aria-label='Chat'>
                    <span className='notification-icon'>
                      <Link
                        to={`/messages/${item._id}`}
                        className='accept-request'>
                        <span className='icon-add without-text'>
                          <CustomSvgIcons id='olymp-chat---messages-icon' />
                        </span>
                      </Link>
                    </span>
                  </Tooltip>
                ) : item.type === 'notContact' ? (
                  <Tooltip title='Add contact' aria-label='Add contact'>
                    <span className='notification-icon'>
                      <a
                        href='#'
                        className='accept-request'
                        onClick={(e) => handleOnAddContact(e, item)}>
                        <span className='icon-add without-text'>
                          <CustomSvgIcons
                            className='olymp-happy-face-icon'
                            id='olymp-happy-face-icon'
                          />
                        </span>
                      </a>
                    </span>
                  </Tooltip>
                ) : item.type === 'request' ? (
                  <>
                    <Tooltip title='Accept contact' aria-label='Accept contact'>
                      <span className='notification-icon'>
                        <a
                          href='#'
                          className='accept-request'
                          onClick={(e) => handleOnUpdateContact(e, item)}>
                          <PersonAddOutlinedIcon />
                        </a>
                      </span>
                    </Tooltip>

                    <Tooltip title='Reject' aria-label='Reject'>
                      <span
                        className='notification-icon'
                        style={{ marginRight: 8 }}>
                        <a
                          href='#'
                          className='accept-request request-del'
                          onClick={(e) => handleOnDestroyRequest(e, item)}>
                          <DeleteOutlinedIcon />
                        </a>
                      </span>
                    </Tooltip>
                  </>
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
