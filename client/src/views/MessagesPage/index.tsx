import ChatPage from 'containers/ChatPage';
import Header from 'containers/Header';
import LeftMenu from 'containers/LeftMenu';
import RightMessages from 'containers/RightMessages';
import React, { useEffect } from 'react';

const MessagesPage = () => {
  useEffect(() => {
    const _bodyDom = document.querySelector('body');
    _bodyDom?.classList.remove('landing-page');
    _bodyDom?.classList.remove('page-has-left-panels', 'page-has-right-panels');
  }, []);
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
