import { User } from '../../interfaces/users.interface';
import { emitNotifyToArray } from '../helper';

export const acceptRequestContact = (io, data, clients, user: User) => {
  const notif = {
    message: `${user.firstName} ${user.lastName} has added you to the contacts`,
    avatar: user.avatar,
    firstName: user.firstName,
    lastName: user.lastName,
  };
  // emit notifications
  if (clients[data.id]) {
    emitNotifyToArray(clients, data.id, io, 'res-accept-request-contact', notif);
  }
};

export const addNewContact = (io, data, clients, user: User) => {
  const notif = {
    message: `${user.firstName} ${user.lastName} wants to add you to the contacts`,
    avatar: user.avatar,
    firstName: user.firstName,
    lastName: user.lastName,
    id: user._id,
    _id: user._id,
  };
  // emit notifications
  if (clients[data.contactId]) {
    emitNotifyToArray(clients, data.contactId, io, 'res-add-new-contact', notif);
  }
};
