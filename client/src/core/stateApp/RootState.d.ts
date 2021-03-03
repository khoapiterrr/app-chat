import IAuthState from './IAuthState';
import ILanguageState from './ILanguageState';
import ILayoutState from './ILayoutState';

export default interface RootState {
  router: any;
  auth?: IAuthState | null;
  language?: ILanguageState | null;
  layout?: ILayoutState | null;
}
