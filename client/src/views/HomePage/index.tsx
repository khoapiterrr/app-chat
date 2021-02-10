import Header from 'containers/Header';
import LeftMenu from 'containers/LeftMenu';
import RightMessages from 'containers/RightMessages';
import React, { FC } from 'react';

const HomePage: FC = () => {
  console.log('this is a home page');
  return (
    <>
      <Header />
      <LeftMenu />
      <RightMessages />
    </>
  );
};
export default HomePage;
