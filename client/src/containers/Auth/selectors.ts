import { createSelector } from 'reselect';

const selectRaw = (state: any) => state.auth;

// select errors
const selectSignInError = createSelector(
  [selectRaw],
  (auth) => auth.signinError,
);
const selectSigUpError = createSelector([selectRaw], (auth) => auth.sigUpError);

const selectors = {
  selectSigUpError,
  selectSignInError,
};

export default selectors;
