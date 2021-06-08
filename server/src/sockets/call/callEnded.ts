import { emitNotifyToArray } from '../helper';

export const callEnded = (io, data, clients, user) => {
  // nhận sự kiện 1 trong 2 user kết thúc cuộc hội thoại
  if (clients[data.id]) {
    emitNotifyToArray(clients, data.id, io, 'server--call-ended', 'callEnded');
  }
};
