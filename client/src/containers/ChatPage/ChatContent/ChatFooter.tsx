import React, { useRef, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useDispatch, useSelector } from 'react-redux';
import mesSelectors from '../selectors';
import authSelectors from 'containers/Auth/selectors';
import { emitTypingOff, emitTypingOn } from '../socket';
import * as constants from '../constants';
import messageActionCreator from '../actions';
import { debounce } from 'lodash';
import { Picker } from 'emoji-mart';
import { IconButton, Popover, withStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { DropzoneDialog } from 'material-ui-dropzone';
import { uploadFileToFirebase } from 'utils/firebaseUltil';
import { FileObject } from 'core/api/objectFile.interface';

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#ff5e3ab3',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
      '& .MuiListItemIcon-root': {
        minWidth: 40,
      },
    },
  },
}))(MenuItem);

const ChatFooter = () => {
  const inputMessageRef = useRef<any>();
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
  const [anchorElAction, setAnchorElAction] = React.useState<any>(null);
  const [openDropzoneDialog, setOpenDropzoneDialog] = React.useState<any>('');
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickAction = (event: any) => {
    setAnchorElAction(event.currentTarget);
  };

  const handleCloseAction = () => {
    setAnchorElAction(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const dispatch = useDispatch();
  const [typing, setTyping] = useState(false);
  const record = useSelector(mesSelectors.selectRecord);
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const inputMessage = useSelector(mesSelectors.selectInputMessage);

  const handleTypingOff = () => {
    emitTypingOff({
      info: currentUser,
      receiver: record.receiver,
      conversationType: record.conversationType,
    });
  };

  const onInputMessageChange = (message: string) => {
    dispatch({
      type: constants.INPUT_MESSAGE_CHANGE,
      payload: message,
    });
    if (message.trim() === '') {
      handleTypingOff();
    }
  };

  const addEmoji = (e: any) => {
    onInputMessageChange(inputMessage.text + e.native);
  };

  const sendText = () => {
    if (inputMessage.text.trim() !== '') {
      // Gửi text và emoji
      dispatch(
        messageActionCreator.doCreate({
          message: inputMessage.text,
          type: 'text',
          receiver: record.receiver._id,
          conversationType: record.conversationType,
        }),
      );
      onInputMessageChange('');
    }
  };

  const handleSendClick = () => {
    sendText();
    // sendImage();
    // sendFile();
    dispatch(messageActionCreator.doToggleScrollToBottom());

    handleTypingOff();
    inputMessageRef.current!.value = '';
    inputMessageRef?.current!.focus();
  };
  const handleOnPressEnter = (event: any) => {
    if (!typing) {
      setTyping(true);
      if (inputMessage.text.trim() !== '') {
        emitTypingOn({
          info: currentUser,
          receiver: record.receiver,
          conversationType: record.conversationType,
        });
      }
    }
    debounce(() => {
      handleTypingOff();
      setTyping(false);
    }, 1000);
    if (event.keyCode === 13) {
      handleSendClick();
    }
  };
  const handleOnClickFile = (e: any) => {
    handleCloseAction();
    setOpenDropzoneDialog('files');
  };
  const handleOnClickImage = (e: any) => {
    handleCloseAction();
    setOpenDropzoneDialog('images');
  };
  const handleSaveFiles = async (files: any) => {
    if (files.length > 0) {
      setOpenDropzoneDialog(false);
      const listResult = await uploadFileToFirebase(files);
      dispatch(
        messageActionCreator.doCreate({
          images:
            openDropzoneDialog === 'images'
              ? listResult.map((item: FileObject) => item.path)
              : null,
          files: openDropzoneDialog === 'files' ? listResult : null,
          type: openDropzoneDialog === 'images' ? 'image' : 'file',
          receiver: record.receiver._id,
          conversationType: record.conversationType,
        }),
      );
    }
  };
  return (
    <>
      {record?.receiver?._id && (
        <div className='chat-footer bg-white rounded' id='chatFooter'>
          <div className='form-row align-items-center px-2'>
            <div className='col'>
              <div className='input-group align-items-center'>
                <div className='input-group-prepend mr-sm-2 mr-1'>
                  <div
                    className='dropdown'
                    style={{ cursor: 'pointer' }}
                    onClick={handleClickAction}>
                    <AddIcon />
                  </div>
                </div>
                <textarea
                  className='form-control transparent-bg border-0 no-resize hide-scrollbar'
                  ref={inputMessageRef}
                  value={inputMessage.text}
                  onChange={(e) => {
                    onInputMessageChange(e.target.value);
                  }}
                  placeholder='Nhập văn bản nhắn tin....'
                  rows={1}
                  onKeyUp={handleOnPressEnter}></textarea>
                <div className='input-group-prepend mr-sm-2 mr-1'>
                  <div
                    className='w-100 dropdown'
                    onClick={handleClick}
                    style={{ cursor: 'pointer' }}>
                    <MoodOutlinedIcon />
                  </div>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                    <Picker set='facebook' sheetSize={32} onSelect={addEmoji} />
                  </Popover>
                  <Popover
                    id={id}
                    open={Boolean(anchorElAction)}
                    anchorEl={anchorElAction}
                    onClose={handleCloseAction}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                    <StyledMenuItem onClick={handleOnClickImage}>
                      <ListItemIcon>
                        <SendIcon fontSize='small' />
                      </ListItemIcon>
                      <ListItemText primary='Gửi ảnh' />
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleOnClickFile}>
                      <ListItemIcon>
                        <DraftsIcon fontSize='small' />
                      </ListItemIcon>
                      <ListItemText primary='Gửi file' />
                    </StyledMenuItem>
                  </Popover>
                  <DropzoneDialog
                    open={Boolean(openDropzoneDialog)}
                    onSave={handleSaveFiles}
                    acceptedFiles={
                      openDropzoneDialog === 'images'
                        ? ['image/jpeg', 'image/png', 'image/bmp']
                        : [
                            '.xlsx',
                            '.xls',
                            '.doc',
                            '.docx',
                            '.ppt',
                            '.pptx',
                            '.txt',
                            '.pdf',
                          ]
                    }
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={() => setOpenDropzoneDialog(false)}
                    submitButtonText={
                      openDropzoneDialog === 'images' ? 'Gửi ảnh' : 'Gửi files'
                    }
                    cancelButtonText='Hủy'
                    dialogTitle={
                      openDropzoneDialog === 'images'
                        ? 'Gửi tin nhắn ảnh'
                        : 'Gửi tin nhắn files'
                    }
                  />
                </div>
              </div>
            </div>
            <div className='col-auto'>
              <div
                className='btn btn-primary btn-icon text-light mb-1'
                role='button'>
                <SendOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatFooter;
