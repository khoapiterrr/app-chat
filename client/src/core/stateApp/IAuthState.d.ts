import { User } from 'core/api/user.interface';

export default interface IAuthState {
  initLoading?: boolean;
  signInLoading?: boolean;
  signUpLoading?: boolean;
  signInError: any;
  sigUpError: any;
  userCurrent?: User | null;
}
