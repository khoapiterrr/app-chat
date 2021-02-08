import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';
import rootReducers from 'containers/rootReducers';

const reducers = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    ...rootReducers,
  });

export default reducers;
