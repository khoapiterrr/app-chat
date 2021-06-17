import { getHistory } from 'app/store';
import Header from 'containers/Header';
import RightMessages from 'containers/RightMessages';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeRouter from 'routes/HomeRoutes';
import authActionCreator from 'containers/Auth/actions';

const HomePage: FC = () => {
  const pathName = useSelector((rx: any) => rx.router?.location.pathname);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (pathName === '/') {
      getHistory().push('/messages');
    }
  }, [pathName]);
  React.useEffect(() => {
    dispatch(authActionCreator.fetchCurrentUser());
  }, []);
  return (
    <>
      <Header />
      <RightMessages />
      <HomeRouter />
    </>
  );
};
export default HomePage;
