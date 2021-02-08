import { model, Schema, Document } from 'mongoose';
import { User } from '../interfaces/users.interface';
import { SCHEMA_NAME } from './schemaName';
/**
 * User Roles
 */
const roles: string[] = ['user', 'admin'];

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    services: {
      facebookId: String,
      googleId: String,
      githubId: String,
    },
    role: {
      type: String,
      enum: roles,
      default: 'user',
    },
    avatar: {
      type: String,
      trim: true,
    },
    loginAt: {
      type: Date,
    },
    deleteFlag: {
      type: Boolean,
      default: false,
    },
    gender: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      default: 'offline',
    },
  },
  {
    timestamps: true,
  },
);

const userModel = model<User & Document>(SCHEMA_NAME.users, userSchema);

export default userModel;
