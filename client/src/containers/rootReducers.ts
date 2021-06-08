import auth from './Auth/reducer';
import language from './LanguageProvider/reducer';
import layout from './layout/reducer';
import contact from './Contact/reducer';
import message from './ChatPage/reducer';
import call from './CallPage/reducer';
const rootReducers = {
  auth,
  language,
  layout,
  contact,
  message,
  call,
};

export default rootReducers;
