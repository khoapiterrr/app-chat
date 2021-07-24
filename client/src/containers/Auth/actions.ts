import { Dispatch } from 'react';
import { AnyAction as Action } from 'redux';
import IAuthActionCreator from '../../core/actions/IAuthActionCreator';
import {
  fetchCurrentAuth,
  postSignIn,
  postSignUp,
  putRestorePwdApi,
} from './service';
import { getHistory } from 'app/store';
import * as constants from './constants';
import Errors from 'containers/shared/handleError';
import { showSnackbar } from 'containers/layout/actions';
import { alertType } from 'constants/constants';
import { ISignUp } from './interfaces';
import { socketDisconnect, configSocket } from 'app/rootSocket';

const authActionCreator: IAuthActionCreator = {
  doInitLoadingDone: (): Action => {
    return { type: constants.SIGNIN_INIT_LOADING_DONE };
  },

  doClearErrorMessage: (): Action => {
    return { type: constants.ERROR_MESSAGE_CLEAR };
  },

  doSignOut: () => (dispatch: Dispatch<Action>) => {
    window.localStorage.removeItem('token');
    getHistory().push('/login');
    dispatch({ type: 'RESET' });
    socketDisconnect();
  },

  doSignIn: (userInfo) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: constants.SIGNUP_START });

      // call api: signin
      let response = await postSignIn(userInfo);
      console.log(userInfo, 'userInfo');
      window.localStorage.setItem('token', response.data.token);
      dispatch({
        type: constants.SIGNIN_SUCCESS,
        payload: response.data,
      });
      getHistory().push('/messages');
      configSocket();
    } catch (error) {
      dispatch({
        type: constants.SIGNIN_ERROR,
        payload: Errors.selectMessage(error),
      });
    }
  },

  doSignUp:
    (userInfo: ISignUp, callback) => async (dispatch: Dispatch<any>) => {
      try {
        dispatch({ type: constants.SIGNUP_START });

        // call api: signin
        const res = await postSignUp(userInfo);

        dispatch({ type: constants.SIGNUP_SUCCESS });
        dispatch(showSnackbar('Sign Up Successfully', alertType.SUCCESS));
        if (callback) {
          callback(true);
        }
      } catch (error) {
        dispatch({
          type: constants.SIGNUP_ERROR,
          payload: Errors.selectMessage(error),
        });
        if (callback) {
          callback(false);
        }
      }
    },

  doRestorePassword:
    (email: string, callback) => async (dispatch: Dispatch<any>) => {
      try {
        // call api: signin
        await putRestorePwdApi(email);
        if (callback) {
          callback();
          dispatch(
            showSnackbar(
              'Vui lòng kiểm tra lại mail để lấy mật khẩu',
              alertType.SUCCESS,
            ),
          );
        }
      } catch (error) {
        console.log(
          JSON.stringify(Errors.selectMessage(error)),
          'doRestorePassword error',
        );

        dispatch(showSnackbar(Errors.selectMessage(error), alertType.ERROR));
      }
    },

  fetchCurrentUser: () => async (dispatch: Dispatch<any>) => {
    try {
      // call api: signin
      let response = await fetchCurrentAuth();
      dispatch({
        type: constants.SIGNIN_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      const mes = Errors.handle(error);
      if (mes) {
        dispatch(showSnackbar(mes, alertType.ERROR));
      }
    }
  },
};
export default authActionCreator;
