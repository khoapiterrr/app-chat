import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
const ChatFooter = () => {
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
              placeholder='Write your message...'
              rows={1}
              defaultValue={''}></textarea>
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
