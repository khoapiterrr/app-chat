/* eslint-disable consistent-return */
import produce from 'immer';
import { AnyAction as Action } from 'redux';

export const initialState = {
  data: [],
  isLoading: true,
};

const reducer = (state = initialState, { type, payload }: Action) =>
  produce(state, (draftState) => {
    switch (type) {
      case 'GET_DATA_SUCCEEDED': {
        draftState.data = payload;
        draftState.isLoading = false;
        break;
      }
      case 'GET_DATA_ERROR': {
        draftState.isLoading = false;
        break;
      }

      default:
        return draftState;
    }
  });

export default reducer;
