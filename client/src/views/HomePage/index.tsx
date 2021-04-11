import Header from 'containers/Header';
import RightMessages from 'containers/RightMessages';
import React, { FC } from 'react';
import HomeRouter from 'routes/HomeRoutes';

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <RightMessages />
      <HomeRouter />
    </>
  );
};
export default HomePage;
