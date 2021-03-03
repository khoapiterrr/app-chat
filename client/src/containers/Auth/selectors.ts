import RootState from 'core/stateApp/RootState';
import { createSelector } from 'reselect';

const selectRaw = (state: RootState) => state.auth;

// select errors
const selectSignInError = createSelector(
  [selectRaw],
  (auth) => auth?.signInError,
);

const selectSigUpError = createSelector(
  [selectRaw],
  (auth) => auth?.sigUpError,
);

const selectInitLoading = createSelector(
  [selectRaw],
  (auth) => auth?.initLoading,
);

const selectSignInLoading = createSelector(
  [selectRaw],
  (auth) => auth?.signInLoading,
);

const selectors = {
  selectSigUpError,
  selectSignInError,
  selectInitLoading,
  selectSignInLoading,
};

export default selectors;
