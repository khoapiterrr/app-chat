import { model, Schema, Document, Types } from 'mongoose';
import { Contact } from '../interfaces/contact.interface';
import { SCHEMA_NAME } from './schemaName';

const contactSchema: Schema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: SCHEMA_NAME.users,
    },
    contactId: {
      type: Types.ObjectId,
      ref: SCHEMA_NAME.users,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const contactModel = model<Contact & Document>(SCHEMA_NAME.contact, contactSchema);
export default contactModel;
