import axiosClient from '../../api/axiosClient';

export const fetchListChat = ({ page = 1 }) => {
  return axiosClient.get(`/message?pageIndex=${page}`);
};

export const fetchMessageWithFriend = (id: string, page = 1) => {
  return axiosClient.get(`/message/${id}?pageIndex=${page}`);
};

export const createMessageApi = (info: any) => {
  return axiosClient.post(`/message`, info);
};

export const updateMessageApi = (id: string, info: any) => {
  return axiosClient.put(`/message/${id}`, info);
};
