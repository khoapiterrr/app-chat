import { Dispatch } from 'react';
import { AnyAction as Action } from 'redux';
import IAuthActionCreator from '../../core/actions/IAuthActionCreator';
import { fetchFriendSuggestions, fetchSearchFriends } from './service';
import { getHistory } from 'app/store';
import * as constants from './constants';
import Errors from 'containers/shared/handleError';
import { showSnackbar } from 'containers/layout/actions';
import { alertType } from 'constants/constants';
import { ISignUp } from './interfaces';
import IContactActionCreator from 'core/actions/IContactActionCreator';

const contactActionCreator: IContactActionCreator = {
  fetchFriendSuggestionsCB: (callback) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await fetchFriendSuggestions();
      if (callback) {
        callback(response.data);
      }
    } catch (error) {
      const mes = Errors.handle(error);
      if (mes) {
        dispatch(showSnackbar(mes, alertType.ERROR));
      }
    }
  },
  fetchSearchFriendCB: (keyword = '', callback) => async (
    dispatch: Dispatch<any>,
  ) => {
    try {
      const response = await fetchSearchFriends(keyword);
      if (callback) {
        callback(response.data);
      }
    } catch (error) {
      const mes = Errors.handle(error);
      if (mes) {
        dispatch(showSnackbar(mes, alertType.ERROR));
      }
    }
  },
};

export default contactActionCreator;
