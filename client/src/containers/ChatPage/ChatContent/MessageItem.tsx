import React from 'react';
import AvatarDefault from 'assets/images/default-avatar.png';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import classnames from 'classnames';
import { Tooltip } from '@material-ui/core';
import moment from 'moment';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Lightbox from 'react-image-lightbox';

interface IProps {
  message: any;
  self: boolean;
  currentUserId?: string;
}

const MessageItem: React.FC<IProps> = ({ message, self, currentUserId }) => {
  const images = message?.images;
  const [photoIndex, setPhotoIndex] = React.useState<number>(-1);
  const getFullName = (record: any) => {
    if (record && record.firstName && record.lastName)
      return record.firstName + ' ' + record.lastName;
    return '';
  };
  const handleClickLightbox = (e: any, index: number) => {
    e.preventDefault();
    setPhotoIndex(index);
  };
  return (
    <div className={classnames({ message: true }, { self: self })}>
      <div className='message-wrapper'>
        <div className='message-content'>
          {message?.type === 'text' ? (
            <span style={{ wordWrap: 'break-word' }}>{message?.message}</span>
          ) : message?.type === 'image' ? (
            <div className='form-row'>
              {message?.images?.map((linkUrl: string, index: number) => (
                <div className='col'>
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
          ) : message?.type === 'file' ? (
            message?.files?.map((fileItem: any) => (
              <div className='document'>
                <div className='btn btn-primary btn-icon rounded-circle text-light mr-2'>
                  <AttachFileIcon />
                </div>
                <div className='document-body'>
                  <h6>
                    <a
                      href={fileItem?.path}
                      target='_blank'
                      className='text-reset'
                      title='global-warming-data-2020.xlxs'>
                      {fileItem?.name}
                    </a>
                  </h6>
                </div>
              </div>
            ))
          ) : null}

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
      </div>
      <div className='message-options'>
        <Tooltip
          title={`${getFullName(message.sender)} \n${moment(
            message?.updatedAt,
          ).format('dd, MMMM Do YY h:mm a')}`}>
          <div className='avatar avatar-sm'>
            <img alt='' src={message.sender?.avatar ?? AvatarDefault} />
          </div>
        </Tooltip>
        <span className='message-date'>
          {moment(message?.updatedAt).format('dd, h:mm a')}
        </span>
        <div className='dropdown'>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
