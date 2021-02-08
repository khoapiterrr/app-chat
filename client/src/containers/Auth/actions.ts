import { Dispatch } from 'react';
import { AnyAction as Action } from 'redux';
import IAuthActionCreator from '../../core/actions/IAuthActionCreator';
import * as constants from './constants';

const authActionCreator: IAuthActionCreator = {
  doInitLoadingDone: (): Action => {
    return { type: constants.SIGNIN_INIT_LOADING_DONE };
  },

  doClearErrorMessage: (): Action => {
    return { type: constants.ERROR_MESSAGE_CLEAR };
  },
  doSignOut: () => (dispatch: Dispatch<Action>) => {
    window.localStorage.removeItem('asauth');

    // getHistory().push('/signin');
    dispatch({ type: 'RESET' });
  },

  // doSignIn: (): void => (dispatch): void => {
  //   window.localStorage.removeItem('asauth');

  //   // getHistory().push('/signin');
  //   dispatch({ type: 'RESET' });
  // },
};
export default authActionCreator;
