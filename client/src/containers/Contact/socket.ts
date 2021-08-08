import getStore from 'app/store';
import { CONTACT_REQUEST_ADD } from './constants';
import { showSnackbar } from '../layout/actions';
import { alertType } from 'constants/constants';
import getSocket from 'app/rootSocket';
import playBell from 'containers/shared/sound/bell';

export const onAddContact = (payload: any) => {
  playBell('notification');
  getStore().dispatch(showSnackbar(payload.message, alertType.SUCCESS));
  getStore().dispatch({ type: CONTACT_REQUEST_ADD, payload });
};

export const emitAcceptRequestContact = (payload: any) => {
  getSocket().emit('accept-request-contact', payload);
};

export const onAcceptRequestContact = (payload: any) => {
  playBell('notification');
  getStore().dispatch(showSnackbar(payload.message, alertType.SUCCESS));
};

export const emitAddNewContact = (payload: any) => {
  getSocket().emit('add-new-contact', payload);
};
