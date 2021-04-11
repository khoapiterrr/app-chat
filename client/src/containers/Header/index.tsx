import React from 'react';
import { useDispatch } from 'react-redux';
import HeaderBG from './HeaderBG';
import HeaderMobile from './HeaderMobile';
import authActionCreator from 'containers/Auth/actions';

const Header = () => {
  return (
    <>
      <HeaderBG />
      <HeaderMobile />
    </>
  );
};

export default Header;
