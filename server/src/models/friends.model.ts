import { model, Schema, Document, Types } from 'mongoose';
import { Friends } from '../interfaces/friends.interface';
import { SCHEMA_NAME } from './schemaName';

const friendsSchema: Schema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: SCHEMA_NAME.users,
  },
  friends: [
    {
      type: Types.ObjectId,
    },
  ],
});

const friendsModel = model<Friends & Document>(SCHEMA_NAME.friends, friendsSchema);

export default friendsModel;
