import * as constants from './constants';
import { Dispatch } from 'react';
import { AnyAction as Action } from 'redux';

export const doWindowResize = (windowWidth: number) => ({
  type: constants.LAYOUT_WINDOW_RESIZE,
  payload: windowWidth,
});
export const doToggleRightSidebar = () => {
  return {
    type: constants.LAYOUT_RIGHT_SIDEBAR_TOGGLE,
  };
};
export const doHideRightSidebar = () => {
  return {
    type: constants.LAYOUT_RIGHT_SIDEBAR_HIDE,
  };
};
export const doShowRightSidebar = () => {
  return {
    type: constants.LAYOUT_RIGHT_SIDEBAR_SHOW,
  };
};
export const doHideLeftSidebar = () => {
  return {
    type: constants.LAYOUT_LEFT_SIDEBAR_HIDE,
  };
};
export const doShowLeftSidebar = () => {
  return {
    type: constants.LAYOUT_LEFT_SIDEBAR_SHOW,
  };
};
export const doToggleSound = () => {
  return {
    type: constants.LAYOUT_SOUND_TOGGLE,
  };
};

export const showSnackbar = (message: string, variant: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: constants.SNACKBAR_SHOW,
      payload: { mes: message, variant },
    });
  };
};

export const clearSnackbar = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: constants.SNACKBAR_CLEAR });
  };
};
