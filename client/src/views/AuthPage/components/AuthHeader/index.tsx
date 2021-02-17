import React from 'react';
import CustomSvgIcons from 'components/CustomSvgIcons';
import LogoWeb from 'assets/images/ltk.png';
import classes from './styles.module.scss';

const AuthHeader = () => {
  return (
    <div
      className='header--standard header--standard-landing'
      id='header--standard'>
      <div className='container'>
        <div className='header--standard-wrap'>
          <a href='#' className='logo'>
            <div className='img-wrap'>
              <img src={LogoWeb} alt='Olympus' className={classes.logoWeb} />
              <img src={LogoWeb} alt='Olympus' className='logo-colored' />
            </div>
            <div className='title-block'>
              <h6 className='logo-title'>l.t.K</h6>
              <div className='sub-title'>SOCIAL NETWORK</div>
            </div>
          </a>
          <a href='#' className='open-responsive-menu js-open-responsive-menu'>
            <CustomSvgIcons id='olymp-menu-icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
