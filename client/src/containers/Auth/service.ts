import axiosClient from '../../api/axiosClient';
import { ISignIn, ISignUp } from './interfaces';

export const postSignIn = async (data: ISignIn) => {
  const response = await axiosClient.post('/auth/login', data);
  return response;
};

export const postSignUp = async (data: ISignUp) => {
  const response = await axiosClient.post('/auth/signup', data);
  return response;
};

export const fetchCurrentAuth = async () => {
  return axiosClient.get('/auth/me');
};
export const putRestorePwdApi = async (email: string) => {
  return axiosClient.put('/auth/restore-password', { email });
};

export const loginWithFbApi = async (data: any) => {
  return axiosClient.post('/auth/login-with-fb', data);
};
