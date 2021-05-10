import { isAuthenticated } from 'api/permissionChecker';
import {
  onAcceptRequestContact,
  onAddContact,
} from 'containers/Contact/socket';
import { io } from 'socket.io-client';

const endpoint: string = process.env.REACT_APP_SOCKET_ENDPOINT as string;
let socket: any = null;

const onConnected = () => {
  console.log('socket: connected');
};

const onDisconnect = () => {
  console.log('socket: disconnect');
};
export const configSocket = () => {
  if (socket?.disconnected) {
    socket.connect();
  }
  if (socket) return;

  socket = io(endpoint, {
    query: {
      token: isAuthenticated() as string,
    },
  });
  socket.on('connect', onConnected);
  socket.on('disconnect', onDisconnect);
  socket.on('res-add-new-contact', onAddContact);
  socket.on('res-accept-request-contact', onAcceptRequestContact);
  return socket;
};
export default function getSocket() {
  return socket;
}
export const socketDisconnect = () => {
  socket.disconnect();
};
