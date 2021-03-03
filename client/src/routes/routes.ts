import IRoute from 'core/interfaces/IRoute';

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    loader: () => import('views/HomePage'),
    label: 'Trang chủ',
  },
  {
    path: '/messages',
    exact: true,
    loader: () => import('views/MessagesPage'),
    label: 'Messages',
  },
  {
    path: '/login',
    exact: true,
    loader: () => import('views/AuthPage'),
    label: 'Login',
  },
];

export default routes;
