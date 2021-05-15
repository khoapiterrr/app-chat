import * as constants from './constants';
import { Dispatch } from 'react';
import getStore, { getHistory } from 'app/store';
import Errors from 'containers/shared/handleError';
import { showSnackbar } from 'containers/layout/actions';
import { alertType } from 'constants/constants';
import {
  fetchListChat,
  fetchMessageWithFriend,
  createMessageApi,
} from './service';
import { emitSentMessage } from './socket';
const messageActionCreator: any = {
  doToggleScrollToBottom: () => ({
    type: constants.CHAT_SCROLL_TO_BOTTOM_TOGGLE,
  }),
  doClear: () => ({
    type: constants.CHAT_CLEAR_DATA,
  }),
  doShowUserInfo: () => ({
    type: constants.SHOW_USER_INFO,
  }),
  doHideUserInfo: () => ({
    type: constants.hIDE_USER_INFO,
  }),
  doToggleUserInfo: () => ({
    type: constants.TOGGLE_USER_INFO,
  }),
  // Lấy danh sách những cuộc trò chuyện
  list: (page: number) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: constants.CHAT_GET_START });
      let response = await fetchListChat({ page });

      dispatch({
        type: constants.CHAT_GET_SUCCESS,
        payload: {
          messages: response.data,
          skip: page,
        },
      });
    } catch (error) {
      const mes = Errors.handle(error);
      if (mes) {
        dispatch(showSnackbar(mes, alertType.ERROR));
      }
      dispatch({
        type: constants.CHAT_GET_ERROR,
      });
      getHistory().push('/');
    }
  },
  // lấy thông tin cuộc trò chuyện theo id
  doFind: (id: string, page: number) => async (dispatch: Dispatch<any>) => {
    try {
      if (!id) {
        return;
      }
      dispatch({
        type: constants.CHAT_FIND_START,
      });

      const response = await fetchMessageWithFriend(id, page);
      console.log(response.data);
      dispatch({
        type: constants.CHAT_FIND_SUCCESS,
        payload: { data: response.data, page },
      });
    } catch (error) {
      const mes = Errors.handle(error);
      if (mes) {
        dispatch(showSnackbar(mes, alertType.ERROR));
      }
      dispatch({
        type: constants.CHAT_FIND_ERROR,
      });
    }
  },
  doCreate: (info: any) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({
        type: constants.CHAT_CREATE_START,
      });

      const response = await createMessageApi(info);

      emitSentMessage(response.data);

      let state = getStore().getState();
      let currentUser = state.auth.userCurrent;
      dispatch({
        type: constants.CHAT_CREATE_SUCCESS,
        payload: { message: response.data, currentUser },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: constants.CHAT_CREATE_ERROR,
      });
    }
  },
};
export default messageActionCreator;
