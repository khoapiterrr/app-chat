import axiosClient from '../../api/axiosClient';
import { ISignIn, ISignUp } from './interfaces';
import queryString from 'query-string';

export const fetchFriendSuggestions = () => {
  return axiosClient.get('/users/findFriendSuggestions');
};

export const fetchSearchFriends = (keyword: string) => {
  const filter = {
    keyword,
  };

  return axiosClient.get(`/users/findFriend?${queryString.stringify(filter)}`);
};
