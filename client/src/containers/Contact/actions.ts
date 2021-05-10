import { Dispatch } from 'react';
import { AnyAction as Action } from 'redux';
import IAuthActionCreator from '../../core/actions/IAuthActionCreator';
import {
  fetchFriendSuggestions,
  fetchSearchFriends,
  addContactApi,
  deleteContactApi,
  getListContactsByType,
  updateContact,
} from './service';
import { getHistory } from 'app/store';
import * as constants from './constants';
import Errors from 'containers/shared/handleError';
import { showSnackbar } from 'containers/layout/actions';
import { alertType } from 'constants/constants';
import { ISignUp } from './interfaces';
import IContactActionCreator from 'core/actions/IContactActionCreator';
import { emitAddNewContact, emitAcceptRequestContact } from './socket';

const contactActionCreator: IContactActionCreator = {
  listContacts: () => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: constants.CONTACT_GET_START });

      let response = await getListContactsByType('contact');

      dispatch({
        type: constants.CONTACT_GET_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      const mes = Errors.handle(error);
      if (mes) {
        dispatch(showSnackbar(mes, alertType.ERROR));
      }
    }
  },
  listRequests: () => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: constants.REQUEST_GET_START });

      let response = await getListContactsByType('request');

      dispatch({
        type: constants.REQUEST_GET_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      const mes = Errors.handle(error);
      if (mes) {
        dispatch(showSnackbar(mes, alertType.ERROR));
      }
    }
  },
  listRequestsSent: () => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: constants.REQUEST_SENT_GET_START });

      let response = await getListContactsByType('requestsent');

      dispatch({
        type: constants.REQUEST_SENT_GET_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      const mes = Errors.handle(error);
      if (mes) {
        dispatch(showSnackbar(mes, alertType.ERROR));
      }
    }
  },
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

  addContact: (data: any, callback: any) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await addContactApi(data);
      emitAddNewContact(response.data);
      dispatch(showSnackbar('Add Contact successfully', alertType.SUCCESS));
      dispatch({
        type: constants.REQUEST_SENT_SUCCESS,
        payload: response.data,
      });
      if (callback) {
        callback();
      }
    } catch (error) {
      const mes = Errors.handle(error);
      if (mes) {
        dispatch(showSnackbar(mes, alertType.ERROR));
      }
    }
  },
  doDestroyRequest: (userInfo: any, callback: any) => async (
    dispatch: Dispatch<any>,
  ) => {
    try {
      dispatch({
        type: constants.REQUEST_DESTROY_START,
      });

      await deleteContactApi(userInfo._id);

      dispatch({
        type: constants.REQUEST_DESTROY_SUCCESS,
        payload: userInfo._id,
      });
      // dispatch({
      //   type: userConstants.USER_REMOVE_CONTACT_SUCCESS,
      //   payload: { ...userInfo, type: 'notContact' },
      // });
      console.log(callback, 'callback');
      if (callback) {
        callback();
      }
    } catch (error) {
      const mes = Errors.handle(error);
      if (mes) {
        dispatch(showSnackbar(mes, alertType.ERROR));
      }
    }
  },
  doDestroyRequestSent: (userInfo: any, callback: any) => async (
    dispatch: Dispatch<any>,
  ) => {
    try {
      dispatch({
        type: constants.REQUEST_SENT_DESTROY_START,
      });

      await deleteContactApi(userInfo._id);

      dispatch({
        type: constants.REQUEST_SENT_DESTROY_SUCCESS,
        payload: userInfo._id,
      });
      // dispatch({
      //   type: userConstants.USER_REMOVE_CONTACT_SUCCESS,
      //   payload: { ...userInfo, type: 'notContact' },
      // });
      console.log(callback, 'callback');
      if (callback) {
        callback();
      }
    } catch (error) {
      const mes = Errors.handle(error);
      if (mes) {
        dispatch(showSnackbar(mes, alertType.ERROR));
      }
    }
  },
  doUpdateContact: (userInfo: any, callback: any) => async (
    dispatch: Dispatch<any>,
  ) => {
    try {
      const response = await updateContact(userInfo);
      emitAcceptRequestContact({ id: response.data.userId });

      dispatch({
        type: constants.CONTACT_UPDATE_SUCCESS,
        payload: { ...userInfo, type: 'contact' },
      });
      if (callback) {
        callback();
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
