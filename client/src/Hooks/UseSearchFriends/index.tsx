import React, { useEffect, useReducer } from 'react';
import reducer, { initialState } from './reducer';
import axiosClient from 'api/axiosClient';
import queryString from 'query-string';
const useSearchFriends = (keyword: string) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (keyword) {
      fetchSearch();
    }
  }, [keyword]);

  const fetchSearch = async () => {
    try {
      const filter = {
        keyword,
      };

      const response = await axiosClient.get(
        `/users/findFriend?${queryString.stringify(filter)}`,
      );
      dispatch({
        type: 'GET_DATA_SUCCEEDED',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_DATA_ERROR',
      });
      console.log(error);
    }
  };

  const afterDestroyRequest = (data: any) => {
    const newState = state.data?.map((item: any) => {
      if (item._id === data._id) {
        return Object.assign({}, item, { type: 'notContact' });
      }
      return item;
    });
    dispatch({
      type: 'GET_DATA_SUCCEEDED',
      payload: newState,
    });
  };

  const afterAddRequest = (data: any) => {
    const newState = state.data?.map((item: any) => {
      if (item._id === data._id) {
        return Object.assign({}, item, { type: 'requestSent' });
      }
      return item;
    });
    dispatch({
      type: 'GET_DATA_SUCCEEDED',
      payload: newState,
    });
  };
  const afterAddSuccess = (data: any) => {
    const newState = state.data?.map((item: any) => {
      if (item._id === data._id) {
        return Object.assign({}, item, { type: 'contact' });
      }
      return item;
    });
    dispatch({
      type: 'GET_DATA_SUCCEEDED',
      payload: newState,
    });
  };

  return { ...state, afterDestroyRequest, afterAddRequest, afterAddSuccess };
};

export default useSearchFriends;
