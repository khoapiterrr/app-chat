/* eslint-disable @typescript-eslint/no-unused-vars */
import { DefaultObject, ParamsRequest } from '../interfaces/app';
import { Messages } from '../interfaces/messages.interface';
import messageModel from '../models/messages.model';
export default class MessageService {
  public messages = messageModel;

  // Lấy danh sách tin nhắn riếng tư
  /**
   * todo: implement pagination
   * @param senderId người nhắn
   * @param receiverId người nhận
   * @param queryParams phân trange
   * @returns
   */
  public getPersonal = async (senderId: string, receiverId: string, queryParams: ParamsRequest) => {
    try {
      // const { offset, size } = queryParams;
      const filter: DefaultObject = {
        $or: [
          {
            $and: [{ sender: senderId }, { receiver: receiverId }],
          },
          {
            $and: [{ sender: receiverId }, { receiver: senderId }],
          },
        ],
      };
      return (
        this.messages
          .find(filter)
          .sort('-createdAt')
          // .skip(offset)
          // .limit(size)
          .populate('sender', '_id avatar lastName firstName')
          .populate('receiver', '_id avatar lastName firstName')
      );
    } catch (error) {
      console.log(error);
    }
  };

  public listPersonal = async (currentUserId: string, queryParams: ParamsRequest) => {
    // const { size, offset } = queryParams;
    return this.messages.aggregate([
      {
        $match: {
          $and: [
            {
              $or: [{ sender: currentUserId }, { receiver: currentUserId }],
            },
            { conversationType: 'User' },
          ],
        },
      },
      { $sort: { updatedAt: -1 } },
      {
        $group: {
          _id: '$conversationId',
          message: { $first: '$message' },
          type: { $first: '$type' },
          conversationType: { $first: '$conversationType' },
          lastImages: { $first: '$message' },
          sender: { $first: '$sender' },
          receiver: { $first: '$receiver' },
          updatedAt: { $first: '$updatedAt' },
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'sender',
          foreignField: '_id',
          as: 'sender',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'receiver',
          foreignField: '_id',
          as: 'receiver',
        },
      },
      { $unwind: { path: '$sender' } },
      { $unwind: { path: '$receiver' } },
      {
        $project: {
          _id: 0,
          message: 1,
          type: 1,
          conversationType: 1,
          'sender._id': 1,
          'sender.firstName': 1,
          'sender.lastName': 1,
          'sender.avatar': 1,
          'receiver._id': 1,
          'receiver.firstName': 1,
          'receiver.lastName': 1,
          'receiver.avatar': 1,
          updatedAt: 1,
        },
      },
      // ignore pagination
      // { $skip: +offset },
      // { $limit: size },
    ]);
  };

  public checkMessageAndRemove = async (currentUserId: string, messageUserId: string) => {
    const checkExits = await this.messages.findOne({
      $or: [
        {
          $and: [{ userId: currentUserId }, { messageId: messageUserId }],
        },
        {
          $and: [{ userId: messageUserId }, { messageId: currentUserId }],
        },
      ],
    });
  };

  public createMessage = async (dataMessage: Messages) => {
    const saveMes = await this.messages.create(dataMessage);
    console.log(saveMes);
    return await this.messages
      .findById(saveMes._id)
      .populate('receiver', 'id avatar lastName firstName')
      .populate('sender', 'id avatar lastName firstName');
  };
}
