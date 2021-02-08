/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data.
 *
 */

import translationMessages, { languageNativeNames } from './translations';

const languages = Object.keys(translationMessages);

export { languages, translationMessages, languageNativeNames };
