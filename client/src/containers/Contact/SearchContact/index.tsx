import React from 'react';
import NotFoundResult from 'assets/images/no_results_gray_wash.svg';
import './styles.scss';
import AvatarDefault from 'assets/images/default-avatar.png';
import CustomSvgIcons from 'components/CustomSvgIcons';

interface IProps {
  keyword?: any;
}

const SearchContact: React.FC<IProps> = ({ keyword }) => {
  const [resultSearch, setResultSearch]: [
    resultSearch: any,
    setResultSearch: any,
  ] = React.useState();

  React.useEffect(() => {}, [keyword]);
  return (
    <div className='SearchContact'>
      {resultSearch?.length > 0 ? (
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
            <h6 className='title'>Kết quả tìm kiếm "{keyword}"</h6>
          </div>
          <ul className='widget w-friend-pages-added notification-list friend-requests'>
            <li className='inline-items'>
              <div className='author-thumb'>
                <img src={AvatarDefault} style={{ width: 32 }} alt='author' />
              </div>
              <div className='notification-event'>
                <a href='#' className='h6 notification-friend'>
                  Francine Smith
                </a>
                <span className='chat-message-item'>8 Friends in Common</span>
              </div>
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
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchContact;
