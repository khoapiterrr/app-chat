import IRoute from 'core/interfaces/IRoute';

const privateRoutes: IRoute[] = [
  {
    path: '/messages/:userId',
    exact: true,
    loader: () => import('views/MessagesPage'),
    label: 'Messages',
  },
  {
    path: '/messages',
    exact: true,
    loader: () => import('views/MessagesPage'),
    label: 'Messages',
  },
  {
    path: '/call/:peerId',
    exact: false,
    loader: () => import('containers/CallPage'),
    label: 'Trang chủ',
  },
  {
    path: '/',
    exact: false,
    loader: () => import('views/HomePage'),
    label: 'Trang chủ',
  },
];

const authRoutes: IRoute[] = [
  {
    path: '/login',
    exact: true,
    loader: () => import('views/AuthPage'),
    label: 'Login',
  },
];
const homeRoutes: IRoute[] = [
  {
    path: '/search',
    exact: true,
    loader: () => import('views/SearchPage'),
    label: 'search',
  },
  {
    path: '/account',
    exact: false,
    loader: () => import('views/YourAccount'),
    label: 'YourAccount',
  },
  {
    path: '/profile/:id',
    exact: false,
    loader: () => import('views/ProfilePage'),
    label: 'ProfilePage',
  },
];

const accountRoutes: IRoute[] = [
  {
    path: '/personal-info',
    exact: true,
    loader: () => import('containers/Account/PersonalInfo'),
    label: 'PersonalInfo',
  },
  {
    path: '/notification',
    exact: true,
    loader: () => import('containers/Account/Notifications'),
    label: 'Notifications',
  },
  {
    path: '/friend-requests',
    exact: true,
    loader: () => import('containers/Account/FriendRequest'),
    label: 'FriendRequest',
  },
  {
    path: '/change-password',
    exact: true,
    loader: () => import('containers/Account/ChangePwd'),
    label: 'ChangePwd',
  },
];
const routes = { authRoutes, privateRoutes, homeRoutes, accountRoutes };

export default routes;
