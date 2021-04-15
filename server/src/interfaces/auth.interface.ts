import { Request } from 'express';
import { ParamsRequest } from './app';
import { User } from './users.interface';

export interface DataStoredInToken {
  _id: string;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: User;
  pagination: ParamsRequest;
}
