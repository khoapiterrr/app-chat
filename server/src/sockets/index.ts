import socketioJwt from 'socketio-jwt';
import { User } from '../interfaces/users.interface';
import UserService from '../services/users.service';
import { logger } from '../utils/logger';
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

        if (currentUser) {
          this.clients = pushSocketIdToArray(this.clients, currentUser._id, socket.id);
        }

        // handle disconnect
        socket.on('disconnect', () => {
          this.clients = removeSocketIdToArray(this.clients, currentUser._id, socket);
        });

        socket.on('add-new-contact', data => addNewContact(this.socketIo, data, this.clients, currentUser));

        socket.on('accept-request-contact', data => acceptRequestContact(this.socketIo, data, this.clients, currentUser));
      } catch (error) {
        logger.error(error);
      }
    });
  };
}
export default ServerSocket;
