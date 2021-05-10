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

export const addContactApi = (data: any) => {
  return axiosClient.post(`/contact`, data);
};

export const updateContact = (data: any) => {
  return axiosClient.put(`/contact/${data._id}`);
};

export const deleteContactApi = (id: string) => {
  return axiosClient.delete(`/contact/${id}`);
};

export const getListContactsByType = (type: string) => {
  return axiosClient.get(`/contact/${type}`);
};
