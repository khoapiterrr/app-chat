import { AnyAction as Action } from 'redux';
import PostType from '../PostType';

export default interface IAccountActionCreator {
  updateProfile(userId: string, data: any, callback: any): any;
}
