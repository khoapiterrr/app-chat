import React, { useEffect, useState } from 'react';
import LoginPage from './components/LoginPage';
import SignTabs from './components/SignTab';
import SignIn from 'containers/Auth/SignIn';
import SignUp from 'containers/Auth/SignUp';
import { useIntl } from 'react-intl';
import AuthHeader from './components/AuthHeader';

const AuthPage = () => {
  // tab: login, register
  const [activeTab, setActiveTab] = useState('login');
  const { formatMessage } = useIntl();
  useEffect(() => {
    const _bodyDom = document.querySelector('body');
    _bodyDom?.classList.add('landing-page');

    return () => {
      _bodyDom?.classList.remove('landing-page');
      _bodyDom?.classList.add('page-has-left-panels', 'page-has-right-panels');
    };
  }, []);
  const onClickChangeTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <React.Fragment>
      {/* background  */}
      <div className='content-bg-wrap'></div>
      <AuthHeader />

      <div className='header-spacer--standard'></div>
      <LoginPage>
        <SignTabs tabCurrent={activeTab} onClickChangeTab={onClickChangeTab} />
      </LoginPage>
    </React.Fragment>
  );
};

export default AuthPage;
