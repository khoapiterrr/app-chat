import getSocket from 'app/rootSocket';
import getStore from 'app/store';
import * as constants from './constants';

export const emitSentMessage = (payload: any) => {
  getSocket().emit('sent-message', payload);
};

export const onSentMessage = (payload: any) => {
  let state = getStore().getState();
  let currentUser = state.auth.userCurrent;

  getStore().dispatch({
    type: constants.SOCKET_SENT_MESSAGE,
    payload: { message: payload, currentUser: currentUser },
  });
};

export const emitCreateGroup = (payload: any) => {
  getSocket().emit('create-group', payload);
};

export const onCreateGroup = (payload: any) => {
  getStore().dispatch({
    type: constants.CHAT_CREATE_GROUP_SUCCESS,
    payload: payload,
  });
};

export const emitTypingOn = (payload: any) => {
  getSocket().emit('typing-on', payload);
};

export const onTypingOn = (payload: any) => {
  getStore().dispatch({
    type: constants.SOCKET_TYPING_ON,
    payload: payload,
  });
};

export const emitTypingOff = (payload: any) => {
  getSocket().emit('typing-off', payload);
};

export const onTypingOff = (payload: any) => {
  getStore().dispatch({
    type: constants.SOCKET_TYPING_OFF,
    payload: payload,
  });
};
