import friendModel from '../models/friends.model';
import { Friends } from '../interfaces/friends.interface';
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

  public findListFriendByUserId = async (userId: string): Promise<Friends> => {
    const findFriend = await this.friends.findOne({ userId: userId });
    return findFriend;
  };
}
export default FriendService;
