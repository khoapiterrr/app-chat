import { isAuthenticated } from 'api/permissionChecker';
import { onListenerOffline, onRequestPeerId } from 'containers/CallPage/socket';
import {
  onSentMessage,
  onTypingOff,
  onTypingOn,
} from 'containers/ChatPage/socket';
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
    transports: ['websocket', 'polling'],
  });
  socket.on('connect', onConnected);
  socket.on('disconnect', onDisconnect);
  socket.on('res-add-new-contact', onAddContact);
  socket.on('res-accept-request-contact', onAcceptRequestContact);
  socket.on('res-sent-message', onSentMessage);
  // socket.on('res-create-group', onCreateGroup);
  socket.on('res-typing-on', onTypingOn);
  socket.on('res-typing-off', onTypingOff);

  // Trả về trạng thái on/off của listener
  socket.on('server-caller-listener-status', onListenerOffline);

  // lắng nghe yêu cầu peerid
  socket.on('server-listener-request-peer-id', onRequestPeerId);

  return socket;
};
export default function getSocket() {
  return socket;
}
export const socketDisconnect = () => {
  socket.disconnect();
};
