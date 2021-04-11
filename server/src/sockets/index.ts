import socketioJwt from 'socketio-jwt';
import { User } from '../interfaces/users.interface';
import UserService from '../services/users.service';
import { logger } from '../utils/logger';
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
        // logger.info(`socket id: ${socket.id} connection to socket ${JSON.stringify(currentUser)}`);
        if (currentUser) {
          this.clients = pushSocketIdToArray(this.clients, currentUser._id, socket.id);
        }
        console.log(this.clients);
        // handle disconnect
        socket.on('disconnect', () => {
          this.clients = removeSocketIdToArray(this.clients, currentUser._id, socket);
        });
      } catch (error) {
        logger.error(error);
      }
    });
  };
}
export default ServerSocket;
