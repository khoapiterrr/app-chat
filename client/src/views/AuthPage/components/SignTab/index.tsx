import React, { ReactNode } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Logo from 'assets/images/ltk.png';
import CustomSvgIcons from 'components/CustomSvgIcons';
import classnames from 'classnames';
import SignIn from 'containers/Auth/SignIn';
import SignUp from 'containers/Auth/SignUp';

interface IProps {
  onClickChangeTab?: any;
  tabCurrent?: string;
  formTitle?: string;
  children?: ReactNode;
}
const SignTabs: React.FC<IProps> = ({
  children,
  tabCurrent,
  onClickChangeTab,
  formTitle,
}) => {
  return (
    <React.Fragment>
      {/* Login-Registration Form  */}
      <div className='registration-login-form'>
        {/* Nav tabs */}
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: tabCurrent === 'login' })}
              onClick={() => onClickChangeTab('login')}>
              <CustomSvgIcons id='olymp-login-icon' />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: tabCurrent === 'register' })}
              onClick={() => onClickChangeTab('register')}>
              <CustomSvgIcons id='olymp-register-icon' />
            </NavLink>
          </NavItem>
        </Nav>
        {/* Tab panes */}
        <TabContent activeTab={tabCurrent}>
          <TabPane tabId='login'>
            <SignIn goToSignUp={() => onClickChangeTab('register')} />
          </TabPane>
          <TabPane tabId='register'>
            <SignUp goToSign={() => onClickChangeTab('login')} />
          </TabPane>
        </TabContent>
      </div>
      {/* ... end Login-Registration Form  */}
    </React.Fragment>
  );
};

SignTabs.defaultProps = {
  onClickChangeTab: null,
  tabCurrent: 'login',
  formTitle: 'Login to your Account',
};

export default SignTabs;
