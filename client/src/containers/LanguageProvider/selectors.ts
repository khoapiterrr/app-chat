import { createSelector } from 'reselect';

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state: any) => state.language;

/**
 * Select the language locale
 */

const selectLocale = createSelector(
  [selectLanguage],
  (languageState): string => languageState.locale,
);

const selectors = { selectLocale, selectLanguage };

export default selectors;
