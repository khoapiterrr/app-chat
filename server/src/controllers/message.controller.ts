import { NextFunction, Response } from 'express';
import * as _ from 'lodash';
import HttpException from '../exceptions/HttpException';
import { RequestWithUser } from '../interfaces/auth.interface';
import messageService from '../services/message.service';
import userService from '../services/users.service';
class MessageController {
  public messageService = new messageService();
  public userService = new userService();
  /**
   * todo: implement pagination for messages
   */
  public getListChat = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const { pagination } = req;
      const senderId = req.user._id;

      const personalMessages = await this.messageService.listPersonal(senderId, pagination);

      const dataReturn = _.sortBy(personalMessages, item => {
        return -item.updatedAt;
      });
      res.status(200).json({ data: dataReturn, message: 'Create message' });
    } catch (error) {
      next(error);
    }
  };

  /**
   * todo: implement send message to group
   */
  public sendMessage = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const senderId = req.user._id;
      const { conversationType } = req.body;
      // Nếu tin nhắn group thì conversation id = group id
      let conversationId = null;

      if (conversationType === 'ChatGroup') {
        // do something
      } else if (conversationType === 'User') {
        // check người dùng tồn tại hay không
        const user = await this.userService.findUserById(req.body.receiver);
        if (user) conversationId = [senderId, req.body.receiver].sort().join('.');
      }

      if (!conversationId) {
        // Nếu không tồn tại users hay group => return lỗi
        throw new HttpException(400, 'Something went wrong');
      }

      const saveMessage = await this.messageService.createMessage({ ...req.body, conversationId, sender: senderId });

      res.status(201).json({ data: saveMessage, message: 'Create message' });
    } catch (error) {
      next(error);
    }
  };

  public getMessageWithFriendId = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const senderId = req.user._id;
      const { pagination, params } = req;
      const receiverId = params.receiverId;
      const receiverInfo = await this.userService.users.findById(receiverId);
      let responseList = [];
      const responseData: any = {};

      if (!receiverInfo) {
        // Tìm id hiện tại có phải là group chat hay không
        // receiverInfo = await ChatGroup.findById(receiverId);
        // // Nếu không phải group chat thì trả về lỗi không tìm thấý
        // if (!receiverInfo || !receiverInfo.members.includes(req.user.id)) {
        //   throw new APIError({
        //     message: 'Not found',
        //     status: httpStatus.BAD_REQUEST,
        //   });
        // }
        // // Lấy danh sách cuộc trò chuyện
        // const groupMessages = await Message.getGroup({
        //   groupId: receiverInfo.id,
        //   skip,
        //   limit,
        // });
        // // Lấy thông tin của admin
        // const admin = await User.findById(receiverInfo.admin);
        // // Lấy thông tin members
        // let members = await User.find({
        //   _id: { $in: receiverInfo.members },
        // });
        // members = members.map(member => {
        //   const tempMember = {
        //     id: member.id,
        //     firstname: member.firstname,
        //     lastname: member.lastname,
        //     picture: member.picture,
        //   };
        //   if (member.id === receiverInfo.admin) {
        //     tempMember.admin = true;
        //   }
        //   return tempMember;
        // });
        // // Transform kết quả trả về
        // responsceList = await groupMessages.map(message => message.transform());
        // responeData.conversationType = 'ChatGroup';
        // responeData.receiver = {
        //   id: receiverInfo.id,
        //   picture: receiverInfo.picture,
        //   name: receiverInfo.name,
        //   members,
        // };
      } else {
        // personal chat
        const personalMessages = await this.messageService.getPersonal(senderId, receiverId, pagination);
        responseList = [...personalMessages];
        responseData.conversationType = 'User';
        responseData.receiver = {
          avatar: receiverInfo.avatar,
          firstName: receiverInfo.firstName,
          lastName: receiverInfo.lastName,
          _id: receiverInfo._id,
        };
      }

      responseData.messages = responseList.reverse();
      res.status(200).json({ data: responseData, message: 'Get message with my friend' });
    } catch (error) {
      next(error);
    }
  };
}
export default MessageController;
