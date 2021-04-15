import { model, Schema, Document, Types } from 'mongoose';
import { GroupChat } from '../interfaces/groupChat.interface';
import { SCHEMA_NAME } from './schemaName';

const groupChatSchema: Schema = new Schema({
  name: String,
  admin: String,
  picture: {
    type: String,
    trim: true,
  },
  members: [Types.ObjectId],
});

const groupChatModel = model<GroupChat & Document>(SCHEMA_NAME.groupsChat, groupChatSchema);

export default groupChatModel;
