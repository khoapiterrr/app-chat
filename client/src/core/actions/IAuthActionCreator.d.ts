import { AnyAction as Action } from 'redux';
import PostType from '../PostType';

export default interface IAuthActionCreator {
  doInitLoadingDone(): Action;
  doClearErrorMessage(): Action;
  doSignOut(): any;
  doSignIn(dataLogin: any): any;
  doSignInWithFb(dataLogin: any): any;
  fetchCurrentUser(): any;
  doSignUp(data: any, callback: any): any;
  doRestorePassword(email: string, callback: any): any;
}
