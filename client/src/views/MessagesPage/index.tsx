import ChatPage from 'containers/ChatPage';
import Header from 'containers/Header';
import LeftMenu from 'containers/LeftMenu';
import RightMessages from 'containers/RightMessages';
import React from 'react';

const MessagesPage = () => {
  return (
    <>
      <Header />
      {/* <LeftMenu />
      <RightMessages /> */}

      <div className='header-spacer' style={{ height: '85px' }}></div>

      <ChatPage />
    </>
  );
};

export default MessagesPage;
