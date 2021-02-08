import React, { ReactNode } from 'react';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Logo from 'assets/images/ltk.png';
import './styles.scss';

interface IProps {
  onClickTabsSignIn?: any;
  tabCurrent?: boolean;
  formTitle?: string;
  children?: ReactNode;
}
const SignTabs: React.FC<IProps> = ({
  children,
  tabCurrent,
  onClickTabsSignIn,
  formTitle,
}) => {
  const onClickTabs = (tab: boolean) => {
    if (tab !== tabCurrent) {
      onClickTabsSignIn(tab);
    }
  };
  return (
    <React.Fragment>
      <div className='register-login-form'>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <a
              href='javascript:void(0)'
              className={tabCurrent === true ? 'nav-link active' : 'nav-link'}
              onClick={() => onClickTabs(true)}>
              <PowerSettingsNewIcon color='disabled' />

              <div className='ripple-container' />
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='javascript:void(0)'
              className={tabCurrent === false ? 'nav-link active' : 'nav-link'}
              onClick={() => onClickTabs(false)}>
              <LockOpenIcon color='disabled' />

              <div className='ripple-container' />
            </a>
          </li>
        </ul>
        <div className='content'>
          <div className='title'>
            <img src={Logo} alt='' /> {formTitle}
          </div>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

SignTabs.defaultProps = {
  onClickTabsSignIn: null,
  tabCurrent: true,
  formTitle: 'Login to your Account',
};

export default SignTabs;
