import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignTabs from './components/SignTab';
import SignIn from 'containers/Auth/SignIn';
import SignUp from 'containers/Auth/SignUp';
import { useIntl } from 'react-intl';

const AuthPage = () => {
  const [tabCurrent, setTabCurrent] = useState(true);
  const { formatMessage } = useIntl();
  return (
    <React.Fragment>
      <LoginPage tabLink={() => setTabCurrent(false)}>
        <SignTabs
          onClickTabsSignIn={setTabCurrent}
          tabCurrent={tabCurrent}
          formTitle={
            tabCurrent
              ? formatMessage({ id: 'Auth.form.login.title' })
              : formatMessage({ id: 'Auth.form.register.title' })
          }>
          {tabCurrent ? (
            <SignIn goToSignUp={() => setTabCurrent(false)} />
          ) : (
            <SignUp />
          )}
        </SignTabs>
      </LoginPage>
    </React.Fragment>
  );
};

export default AuthPage;
