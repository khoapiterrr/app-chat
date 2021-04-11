import { createStore, applyMiddleware, Action } from 'redux';
import thunkMiddleware from 'redux-thunk';

import createRootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const resetEnhanser = (rootReducer: any) => (state: any, action: Action) => {
  if (action.type !== 'RESET') return rootReducer(state, action);
  const newState = rootReducer(undefined, {});
  newState.router = state.router;
  return newState;
};

let store: any;

export function configStore(preloadState?: any) {
  const middlewares = [thunkMiddleware, routerMiddleware(history)].filter(
    Boolean,
  );
  store = createStore(
    resetEnhanser(createRootReducer(history)),
    preloadState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  return store;
}

// // Hot reloading
// if (module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept('./reducers', () => {
//     store.replaceReducer(createRootReducer(history));
//   });
// }
export function getHistory() {
  return history;
}

export default function getStore() {
  return store;
}
