import { model, Schema, Document, Types } from 'mongoose';
import { SCHEMA_NAME } from './schemaName';
import { Messages } from '../interfaces/messages.interface';

const messageTypes = ['text', 'image', 'file', 'notification'];
const conversationTypes = ['User', 'ChatGroup'];

const messagesSchema: Schema = new Schema({
  sender: {
    type: Types.ObjectId,
    ref: SCHEMA_NAME.users,
  },
  receiver: {
    type: Types.ObjectId,
    required: true,
    refPath: 'conversationType',
  },
  conversationType: {
    type: String,
    enum: conversationTypes,
    default: 'User',
  },
  type: {
    type: String,
    enum: messageTypes,
    default: 'text',
  },
  message: {
    type: String,
    maxlength: 1000,
    min: 1,
  },
  images: [String],
  files: [
    {
      name: String,
      path: String,
    },
  ],
  services: {
    facebook: String,
    google: String,
  },
  conversationId: String,
});
const messagesModel = model<Messages & Document>(SCHEMA_NAME.messages, messagesSchema);

export default messagesModel;
