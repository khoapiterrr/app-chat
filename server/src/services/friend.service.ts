import friendModel from '../models/friends.model';
import userModel from '../models/users.model';
import { Friends } from '../interfaces/friends.interface';
import { UserInfo } from '../interfaces/users.interface';
class FriendService {
  public friends = friendModel;
  public findMutualFriend = async (currentId, friendId) => {
    const mutualFriend = this.friends.aggregate([
      {
        $match: {
          userId: { $in: [currentId, friendId] },
        },
      },
      {
        $unwind: '$friends',
      },
      {
        $group: {
          userId: '$friends',
          count: { $sum: 1 },
        },
      },
      {
        $match: {
          count: 2,
        },
      },
      {
        $project: {
          userId: 1,
        },
      },
    ]);

    return mutualFriend;
  };
  public addDefaultFriend = async (userId: string) => {
    return this.friends.create({ userId: userId });
  };

  public findListFriendByUserId = async (userId: string): Promise<Friends> => {
    const findFriend = await this.friends.findOne({ userId: userId });
    return findFriend;
  };

  public removeFriendByUserId = async (userId: string, friendId: string) => {
    return this.friends.updateOne({ userId: userId }, { $pull: { friendId: friendId } });
  };
  public addFriendByUserId = async (userId: string, friendId: string) => {
    return await Promise.all([
      this.friends.updateOne({ userId: userId }, { $push: { friendId: friendId } }),
      this.friends.updateOne({ userId: friendId }, { $push: { friendId: userId } }),
    ]);
  };
  public getListFriendsInfo = async (userId: string): Promise<UserInfo[]> => {
    const friends: Friends = await await this.friends.findOne({ userId: userId });
    const friendsInfo: UserInfo[] = [];
    if (friends.friends?.length > 0) {
      for (const item of friends.friends) {
        const userItem = (await userModel.findById(item)) as UserInfo;
        friendsInfo.push(userItem);
      }
    }
    return friendsInfo;
  };
}
export default FriendService;
