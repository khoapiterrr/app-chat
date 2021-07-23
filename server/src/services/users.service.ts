import bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/users.dto';
import HttpException from '../exceptions/HttpException';
import { User } from '../interfaces/users.interface';
import userModel from '../models/users.model';
import contactModel from '../models/contact.model';
import { isEmpty } from '../utils/util';
import { DefaultObject, ParamsRequest } from '../interfaces/app';
import FriendService from './friend.service';
import { Contact } from '../interfaces/contact.interface';

class UserService {
  public users = userModel;
  public contacts = contactModel;
  public friendService = new FriendService();

  public async findAllUser(queryParams: ParamsRequest): Promise<User[]> {
    const { keyword } = queryParams;
    const reg = new RegExp(keyword, 'i');

    const users: User[] = await this.users.aggregate([
      {
        $project: {
          fullname: { $concat: ['$firstName', ' ', '$lastName'] },
          fullname1: { $concat: ['$lastName', ' ', '$firstName'] },
          email: 1,
          phoneNumber: 1,
          firstName: 1,
          lastName: 1,
          avatar: 1,
          // id: '$_id',
        },
      },
      {
        $match: {
          $or: [{ fullname: reg }, { fullname1: reg }, { email: reg }, { phoneNumber: reg }],
        },
      },
      {
        $project: {
          fullname: 0,
          fullname1: 0,
          email: 0,
          phoneNumber: 0,
        },
      },
      { $sort: { createdAt: 1 } },
      // { $skip: offset },
      // { $limit: size },
    ]);
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    const findUser: User = await this.users.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });
    await this.friendService.addDefaultFriend(createUserData._id);
    return createUserData;
  }

  public async updateUser(userId: string, userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const updateUserById: User = await this.users.findByIdAndUpdate(userId, { ...userData });
    if (!updateUserById) throw new HttpException(409, "You're not user");

    return updateUserById;
  }

  public async deleteUserData(userId: string): Promise<User> {
    const deleteUserById: User = await this.users.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "You're not user");

    return deleteUserById;
  }

  public async findFriend(currentUser: User, queryParams: ParamsRequest) {
    const currentUserId: string = currentUser._id;
    const users: User[] = await this.findAllUser(queryParams);
    const usersId = [];

    users.forEach(user => usersId.push(user._id));

    const contacts = await this.contacts.find({
      $or: [
        {
          $and: [
            {
              userId: currentUserId,
            },
            {
              contactId: { $in: usersId },
            },
          ],
        },
        {
          $and: [
            {
              contactId: currentUserId,
            },
            {
              userId: { $in: usersId },
            },
          ],
        },
      ],
    });

    const responseUsers = [];

    users.forEach(userItem => {
      const tmpItem = { ...userItem, type: 'notContact' };

      if (userItem._id.toString() === currentUserId.toString()) {
        tmpItem.type = 'you';
      } else {
        contacts.forEach(contactItem => {
          if (userItem._id.toString() === contactItem.userId.toString()) {
            // request sent
            if (!!contactItem.status) {
              // accepted
              tmpItem.type = 'contact';
              return;
            } else {
              tmpItem.type = 'request';
              return;
            }
          } else if (userItem._id.toString() === contactItem.contactId.toString()) {
            // request
            if (!!contactItem.status) {
              // accepted
              tmpItem.type = 'contact';
              return;
            } else {
              tmpItem.type = 'requestSent';
              return;
            }
          }
        });
      }
      responseUsers.push(tmpItem);
    });

    return responseUsers;
  }

  // TODO: random users to friendSuggestions
  public friendSuggestions = async (userId: string) => {
    const listContactAdded: Contact[] = await this.contacts.find({
      $or: [
        {
          contactId: userId,
        },
        {
          userId: userId,
        },
      ],
    });
    const friends = [userId];
    if (!isEmpty(listContactAdded)) {
      listContactAdded?.map(item => {
        friends.push(...[item.contactId, item.userId]);
      });
    }
    const filter: DefaultObject = {
      $and: [
        {
          _id: { $nin: friends },
        },
      ],
    };

    const friendSuggestions: User[] = await this.users.find({ ...filter }).limit(6);
    friendSuggestions?.map(async item => {
      // console.log(item._id, userId);
      // const mutualFriend = await this.friendService.findMutualFriend(item._id, userId);
      // console.log(mutualFriend, 'mutualFriend');
      return { ...item };
    });
    return friendSuggestions;
  };

  public changeStatus = async (status: string, userId: string) => {
    const findUser = await this.users.findByIdAndUpdate(userId, { status: status });
    return findUser;
  };
}

export default UserService;
