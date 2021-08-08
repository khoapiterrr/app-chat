import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import AvatarDefault from 'assets/images/default-avatar.png';
import useSearchInfo from 'Hooks/useSearchInfo';
import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { getOffset } from 'utils/common';
import actions from '../actions';
import mesSelectors from '../selectors';
import './styles.scss';

interface IProps {
  userId: string;
  [extraProps: string]: any;
}

const UserInfo: React.FC<IProps> = ({ userId }) => {
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();
  const userInfo = useSearchInfo(userId);
  const record = useSelector(mesSelectors.selectRecord);
  const [showPersionalInfo, setShowPersionalInfo] = useState(true);
  const [showCustomChat, setShowCustomChat] = useState(false);
  const [showShareDocuments, setShowShareDocuments] = useState(false);
  const [showShareImages, setShowShareImages] = useState(true);
  const [style, setStyle] = useState({});
  const [photoIndex, setPhotoIndex] = useState<number>(-1);
  const images: string[] = [];
  record?.messages
    ?.filter((x: any) => x.type === 'image')
    ?.map((itemFiles: any) =>
      itemFiles?.images?.map((itemSingleFile: any) =>
        images.push(itemSingleFile),
      ),
    );

  useEffect(() => {
    const ofTop = getOffset(document.getElementById('userInfo')).top;
    setStyle({ ...style, height: `calc(100vh - ${ofTop}px)` });
  }, []);
  const handleClose = () => {
    dispatch(actions.doHideUserInfo());
  };
  const handleClickLightbox = (e: any, index: number) => {
    e.preventDefault();
    setPhotoIndex(index);
  };
  return (
    <div className='user-info-wrapper' id='userInfo' style={style}>
      <div className='title'>
        <h4 className='title'>
          {formatMessage({ id: 'MesConversation.info' })}
        </h4>

        <span style={{ cursor: 'pointer' }} onClick={handleClose}>
          <HighlightOffIcon />
        </span>
      </div>

      <div className='bg-white d-flex flex-column justify-content-center align-items-center rounded py-3 mb-3'>
        <img
          src={userInfo?.avatar ?? AvatarDefault}
          alt='Image avatar'
          className='info-avatar'
        />
        <h4 className='title'>{`${userInfo?.firstName ?? ''} ${
          userInfo?.lastName ?? ''
        }`}</h4>
      </div>

      <div className='bg-white position-relative d-flex flex-column rounded p-2 mb-3'>
        <h5 className='title'>
          {formatMessage({ id: 'MesConversation.infoUser' })}
        </h5>
        {showPersionalInfo ? (
          <div className='info-chat'>
            <p className='d-flex align-items-center pl-1'>
              <MailOutlineIcon />
              &nbsp; {userInfo?.email}
            </p>
            {userInfo?.phoneNumber && (
              <p className='d-flex align-items-center pl-1'>
                <PhoneIcon />
                &nbsp;{userInfo?.phoneNumber}
              </p>
            )}

            <p className='d-flex align-items-center pl-1'>
              <HomeIcon />
              &nbsp; at Ha Noi
            </p>
          </div>
        ) : null}
        <div
          className='position-absolute'
          style={{ top: '0.5rem', right: '0.5rem' }}>
          <a
            href='# '
            onClick={(e) => {
              e.preventDefault();
              setShowPersionalInfo(!showPersionalInfo);
            }}>
            {showPersionalInfo ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </a>
        </div>
      </div>

      <div className='bg-white position-relative  rounded p-2 mb-3'>
        <h5 className='title'>
          {formatMessage({ id: 'MesConversation.shareFile' })}
        </h5>
        {showShareDocuments ? (
          <div className='share-document d-flex flex-column'>
            {record?.messages
              ?.filter((x: any) => x.type === 'file')
              ?.map((itemFiles: any) =>
                itemFiles?.files?.map((itemSingleFile: any) => (
                  <a href={itemSingleFile.path} target='_blank'>
                    {itemSingleFile.name}
                  </a>
                )),
              )}
          </div>
        ) : null}
        <div
          className='position-absolute'
          style={{ top: '0.5rem', right: '0.5rem' }}>
          <a
            href='# '
            onClick={(e) => {
              e.preventDefault();
              setShowShareDocuments(!showShareDocuments);
            }}>
            {showShareDocuments ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </a>
        </div>
      </div>
      <div className='bg-white position-relative  rounded p-2 mb-3'>
        <h5 className='title'>
          {formatMessage({ id: 'MesConversation.imgFile' })}
        </h5>
        {showShareImages ? (
          <div className='share-document row'>
            {images?.map((linkUrl: string, index: number) => (
              <div className='col-md-6'>
                <a
                  className='popup-media'
                  href='linkUrl'
                  onClick={(event: any) => handleClickLightbox(event, index)}>
                  <img
                    className='img-fluid rounded img-mes'
                    src={linkUrl}
                    alt=''
                  />
                </a>
              </div>
            ))}
          </div>
        ) : null}

        <div
          className='position-absolute'
          style={{ top: '0.5rem', right: '0.5rem' }}>
          <a
            href='# '
            onClick={(e: any) => {
              e.preventDefault();
              setShowShareImages(!showShareImages);
            }}>
            {showShareImages ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </a>
        </div>
      </div>
      {photoIndex >= 0 && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setPhotoIndex(-1)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default UserInfo;
