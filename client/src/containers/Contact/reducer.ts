import { AnyAction as Action } from 'redux';
import * as constants from './constants';
import produce from 'immer';
import IAuthState from 'core/stateApp/IAuthState';
const initialState: IAuthState = {
  initLoading: true,
  signInLoading: false,
  signUpLoading: false,
  signInError: null,
  sigUpError: null,
  userCurrent: null,
};

const authReducer = (state = initialState, { type, payload }: Action) =>
  produce(state, (draft) => {
    switch (type) {
      case constants.SIGNIN_INIT_LOADING_DONE:
        draft.initLoading = false;
        break;
      case constants.SIGNIN_START:
        draft.signInLoading = true;
        draft.signInError = null;
        break;
      case constants.SIGNIN_SUCCESS:
        draft.signInLoading = false;
        draft.signInError = null;
        draft.userCurrent = payload;
        break;
      case constants.SIGNIN_ERROR:
        draft.signInLoading = false;
        draft.signInError = payload || null;
        break;
      case constants.SIGNUP_START:
        draft.signUpLoading = true;
        draft.sigUpError = null;
        break;
      case constants.SIGNUP_SUCCESS:
        draft.signUpLoading = false;
        draft.sigUpError = null;
        break;
      case constants.SIGNUP_ERROR:
        draft.signUpLoading = false;
        draft.sigUpError = payload || null;
        break;
    }
  });

export default authReducer;
