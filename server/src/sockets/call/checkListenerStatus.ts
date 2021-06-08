import { emitNotifyToArray } from '../helper';

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sendPeerToAnswers = (io, data, clients, user) => {
  emitNotifyToArray(clients, data.listenerId, io, 'send-peer-answer-to-caller', {
    signal: data.signalData,
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sendPeerToCaller = (io, data, clients, user) => {
  console.log('sendPeerToCaller', data);
  emitNotifyToArray(clients, data.to, io, 'user-call-accepted', data.signal);
};
