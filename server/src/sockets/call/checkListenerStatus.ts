import { emitNotifyToArray } from '../helper';
import userModel from '../../models/users.model';

export const checkListenerStatus = (io, data, clients, user) => {
  console.log(data, 'data checkListenerStatus');
  const status = clients[data.listenerId] ? 'online' : 'offline';

  if (status === 'offline') {
    emitNotifyToArray(clients, data.caller._id, io, 'server-caller-listener-status', {
      ...data,
      status,
    });
  }

  if (clients[data.listenerId]) {
    // b3: nếu listener online, gửi request tới listener yêu cầu peerid
    emitNotifyToArray(clients, data.listenerId, io, 'server-listener-request-peer-id', user);
  }
};

export const sendPeerToAnswers = (io, data, clients, user) => {
  emitNotifyToArray(clients, data.listenerId, io, 'send-peer-answer-to-caller', {
    signal: data.signalData,
  });
};

export const sendPeerToCaller = (io, data, clients, user) => {
  console.log('sendPeerToCaller', data);
  emitNotifyToArray(clients, data.to, io, 'user-call-accepted', data.signal);
};
