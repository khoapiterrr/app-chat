import socketioJwt from 'socketio-jwt';
import { User } from '../interfaces/users.interface';
import UserService from '../services/users.service';
import { logger } from '../utils/logger';
import { checkListenerStatus, sendPeerToAnswers, sendPeerToCaller } from './call/checkListenerStatus';
import { sentMessage } from './chat/sentMessage';
import { typingOff } from './chat/typingOff';
import { typingOn } from './chat/typingOn';
import { acceptRequestContact, addNewContact } from './contact';
import { pushSocketIdToArray, removeSocketIdToArray } from './helper';

class ServerSocket {
  public socketIo;
  public clients = {};
  public userService = new UserService();
  /**
   *
   */
  constructor(_socketIo) {
    // super();
    this.socketIo = _socketIo;
  }
  initializeSocket = () => {
    this.socketIo.use(
      socketioJwt.authorize({
        secret: process.env.JWT_SECRET,
        handshake: true,
      }),
    );

    this.socketIo.on('connection', async socket => {
      try {
        const currentUser: User = await this.userService.findUserById(socket.decoded_token._id);
        console.log(this.clients, 'currentUser');
        if (currentUser) {
          this.clients = pushSocketIdToArray(this.clients, currentUser._id, socket.id);
        }

        // handle disconnect
        socket.on('disconnect', () => {
          this.clients = removeSocketIdToArray(this.clients, currentUser._id, socket);
        });

        socket.on('add-new-contact', data => addNewContact(this.socketIo, data, this.clients, currentUser));

        socket.on('accept-request-contact', data => acceptRequestContact(this.socketIo, data, this.clients, currentUser));

        socket.on('sent-message', data => sentMessage(this.socketIo, data, this.clients, currentUser));

        socket.on('typing-on', data => typingOn(this.socketIo, data, this.clients, currentUser));

        socket.on('typing-off', data => typingOff(this.socketIo, data, this.clients, currentUser));

        socket.on('caller-server-check-listener-status', data => checkListenerStatus(this.socketIo, data, this.clients, currentUser));

        socket.on('send-peer-to-request-call-user', data => sendPeerToAnswers(this.socketIo, data, this.clients, currentUser));

        socket.on('listener-user-send-peer', data => sendPeerToCaller(this.socketIo, data, this.clients, currentUser));
      } catch (error) {
        logger.error(error);
      }
    });
  };
}
export default ServerSocket;
