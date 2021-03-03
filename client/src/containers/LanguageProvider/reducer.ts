import { AnyAction as Action } from 'redux';
import produce from 'immer';
import { get, includes, split } from 'lodash';
import { localLanguageStorageKey } from 'constants/constants';
// Import supported languages from the translations folder
import translations from 'translations';
import { CHANGE_LOCALE } from './constants';
import ILanguageState from 'core/stateApp/ILanguageState';

const languages = Object.keys(translations);

// Detect user language.
const userLanguage =
  window.localStorage.getItem(localLanguageStorageKey) ||
  window.navigator.language ||
  (window.navigator as any).userLanguage;

let foundLanguage = includes(languages, userLanguage) && userLanguage;

if (!foundLanguage) {
  // Split user language in a correct format.
  const userLanguageShort = get(split(userLanguage, '-'), '0');

  // Check that the language is included in the admin configuration.
  foundLanguage = includes(languages, userLanguageShort) && userLanguageShort;
}

const initialState: ILanguageState = {
  locale: foundLanguage || 'en',
};

const languageProviderReducer = (
  state = initialState,
  { type, payload }: Action,
) =>
  produce(state, (draft) => {
    switch (type) {
      case CHANGE_LOCALE:
        // Set user language in local storage.
        window.localStorage.setItem(localLanguageStorageKey, payload);
        // return state.set('locale', action.locale);
        draft.locale = payload;
        break;

      default:
        break;
    }
  });

export default languageProviderReducer;
