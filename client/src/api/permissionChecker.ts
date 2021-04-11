import { isEmpty } from 'utils/common';
export const isAuthenticated = () => {
  if (typeof window === 'undefined') return true;
  let token = window.localStorage.getItem('token');
  return isEmpty(token) ? false : token;
};
