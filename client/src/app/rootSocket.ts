import { isAuthenticated } from 'api/permissionChecker';
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
};
export default function getSocket() {
  return socket;
}
export const socketDisconnect = () => {
  socket.disconnect();
};
