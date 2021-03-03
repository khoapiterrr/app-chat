import { Dispatch } from 'react';
import { AnyAction as Action } from 'redux';
import IAuthActionCreator from '../../core/actions/IAuthActionCreator';
import { postSignIn } from './service';
import { getHistory } from 'app/store';
import * as constants from './constants';

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
  },

  doSignIn: (userInfo) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: constants.SIGNIN_START });

      // call api: signin
      let response = await postSignIn(userInfo);

      window.localStorage.setItem('token', JSON.stringify(response.data.token));

      dispatch({
        type: constants.SIGNIN_SUCCESS,
        payload: response.data,
      });
      getHistory().push('/');
    } catch (error) {
      // dispatch({
      //   type: constants.SIGNIN_ERROR,
      //   payload: Errors.selectMessage(error),
      // });
      console.log(JSON.stringify(error));
      console.log(error.message);
    }
  },
  // doSignIn: (): void => (dispatch): void => {
  //   window.localStorage.removeItem('asauth');

  //   // getHistory().push('/signin');
  //   dispatch({ type: 'RESET' });
  // },
};
export default authActionCreator;
