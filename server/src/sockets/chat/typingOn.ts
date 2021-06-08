import { emitNotifyToArray } from '../helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const typingOn = (io, data, clients, user) => {
  console.log('typingOn');
  if (data.conversationType === 'ChatGroup') {
    console.log(data, 'data');
    // lọc danh sách, bỏ id của người hiện tại
    const receivers = data.receiver.members.filter(item => item.id !== data.info.id);
    receivers.forEach(item => {
      if (clients[item.id]) {
        emitNotifyToArray(clients, item.id, io, 'res-typing-on', data);
      }
    });
  } else if (data.conversationType === 'User') {
    if (clients[data.receiver._id]) {
      console.log(data.receiver._id);
      emitNotifyToArray(clients, data.receiver._id, io, 'res-typing-on', data);
    }
  }
};
