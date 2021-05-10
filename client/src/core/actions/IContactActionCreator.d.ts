import { AnyAction as Action } from 'redux';
import PostType from '../PostType';

export default interface IContactActionCreator {
  listContacts(): any;
  listRequests(): any;
  listRequestsSent(): any;
  fetchFriendSuggestionsCB(callback: any): any;
  fetchSearchFriendCB(keyword: string, callback: any): any;
  addContact(data: any, callback: any = null): any;
  doDestroyRequest(data: any, callback: any = null): any;
  doUpdateContact(data: any, callback: any = null): any;
  doDestroyRequestSent(data: any, callback: any = null): any;
}
