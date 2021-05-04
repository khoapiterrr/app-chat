import axiosClient from '../../api/axiosClient';

export const fetchUserByIdApi = async (id: string) => {
  const response = await axiosClient.get('/users/' + id);
  return response;
};
