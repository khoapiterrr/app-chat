import { AnyAction as Action } from 'redux';
import PostType from '../PostType';

export default interface IContactActionCreator {
  fetchFriendSuggestionsCB(callback: any): any;
  fetchSearchFriendCB(keyword: string, callback: any): any;
}
