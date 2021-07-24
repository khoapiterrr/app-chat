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
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      minlength: 6,
      maxlength: 128,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    facebookId: String,
    googleId: String,
    githubId: String,
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
    token: {
      type: String,
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
    facebookLink: String,
    websiteLink: String,
    twitterLink: String,
    spotifyLink: String,
    description: String,
    country: String,
    city: String,
    province: String,
    background: String,
  },
  {
    timestamps: true,
  },
);

const userModel = model<User & Document>(SCHEMA_NAME.users, userSchema);

export default userModel;
