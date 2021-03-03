import { AnyAction as Action } from 'redux';
import PostType from '../PostType';

export default interface IAuthActionCreator {
  doInitLoadingDone(): Action;
  doClearErrorMessage(): Action;
  doSignOut(): any;
  doSignIn(dataLogin: any): any;
}
