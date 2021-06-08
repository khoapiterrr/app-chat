import { emitNotifyToArray } from '../helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const callerRequestCall = (io, data, clients, user) => {
  if (clients[data.listener.id]) {
    emitNotifyToArray(clients, data.listener.id, io, 'server-listener-request-call', data);
  }
};
