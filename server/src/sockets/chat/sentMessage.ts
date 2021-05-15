import { emitNotifyToArray } from '../helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sentMessage = (io, data, clients, user) => {
  if (data.conversationType === 'ChatGroup') {
    data.receiver.members.forEach(item => {
      if (clients[item]) {
        emitNotifyToArray(clients, item, io, 'res-sent-message', data);
      }
    });
  } else if (data.conversationType === 'User') {
    if (clients[data.receiver._id]) {
      emitNotifyToArray(clients, data.receiver._id, io, 'res-sent-message', data);
    }
    if (clients[data.sender._id]) {
      emitNotifyToArray(clients, data.sender._id, io, 'res-sent-message', data);
    }
  }
};
