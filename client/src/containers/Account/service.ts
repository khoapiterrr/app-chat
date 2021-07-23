import { User } from 'core/api/user.interface';
import axiosClient from 'api/axiosClient';

export const updateProfileApi = async (userId: string, data: User) => {
  return axiosClient.put(`/users/${userId}`, data);
};

export const changePasswordApi = async (data: any) => {
  return axiosClient.put(`/auth/change-password`, data);
};
