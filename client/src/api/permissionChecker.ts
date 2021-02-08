export const isAuthenticated = (): string | boolean => {
  if (typeof window === 'undefined') return true;
  let token = window.localStorage.getItem('token');
  return token ? token : false;
};
