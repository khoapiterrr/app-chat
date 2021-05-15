import { Router } from 'express';
import MessageController from '../controllers/message.controller';
import { CreateMessage } from '../dtos/message.dto';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import { paginationMiddleware } from '../middlewares/pagination.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

class MessageRoute implements Route {
  public path = '/message';
  public router = Router();
  public messageController = new MessageController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route('/')
      .get(authMiddleware, paginationMiddleware({}), this.messageController.getListChat)
      .post(authMiddleware, validationMiddleware(CreateMessage, 'body'), this.messageController.sendMessage);

    this.router.get('/:receiverId', authMiddleware, paginationMiddleware({}), this.messageController.getMessageWithFriendId);
  }
}

export default MessageRoute;
