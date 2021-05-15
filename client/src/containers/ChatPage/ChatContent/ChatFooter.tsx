import React, { useRef, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useDispatch, useSelector } from 'react-redux';
import mesSelectors from '../selectors';
import authSelectors from 'containers/Auth/selectors';
import { emitTypingOff } from '../socket';
import * as constants from '../constants';
import messageActionCreator from '../actions';

const ChatFooter = () => {
  const inputMessageRef = useRef<any>();
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
    console.log(event);
    if (event.keyCode === 13) {
      handleSendClick();
    }
  };

  return (
    <div className='chat-footer bg-white rounded' id='chatFooter'>
      <div className='form-row align-items-center px-2'>
        <div className='col'>
          <div className='input-group align-items-center'>
            <div className='input-group-prepend mr-sm-2 mr-1'>
              <div className='dropdown'>
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
              placeholder='Write your message...'
              rows={1}
              onKeyUp={handleOnPressEnter}></textarea>
            <div className='input-group-prepend mr-sm-2 mr-1'>
              <div className='w-100 dropdown'>
                <MoodOutlinedIcon />
              </div>
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
  );
};

export default ChatFooter;
