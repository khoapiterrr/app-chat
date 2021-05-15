import auth from './Auth/reducer';
import language from './LanguageProvider/reducer';
import layout from './layout/reducer';
import contact from './Contact/reducer';
import message from './ChatPage/reducer';
const rootReducers = {
  auth,
  language,
  layout,
  contact,
  message,
};

export default rootReducers;
