import * as constants from './constants';
import produce from 'immer';
import { AnyAction as Action } from 'redux';
import { PopupCenter } from 'utils/common';
const initialState = {
  caller: {},
  listener: {},
  status: null,
  peerId: '',
  localStream: null,
  remoteStream: null,
  iceServer: null,
  peer: null,
  audioInput: undefined,
  videoInput: undefined,
  audioOutput: undefined,
  videoOutput: undefined,
  showRequestAnswers: undefined,
};
const callReducer = (state = initialState, { type, payload }: Action) =>
  produce(state, (draft: any) => {
    switch (type) {
      case constants.CALL_SET_AUDIO_VIDEO_SOURCE:
        draft.audioInput = payload.audioInput || state.audioInput;
        draft.videoInput = payload.videoInput || state.videoInput;
        draft.audioOutput = payload.audioOutput || state.audioOutput;
        draft.videoOutput = payload.videoOutput || state.videoOutput;
        break;
      case constants.SHOW_REQUEST_ANSWERS:
        draft.showRequestAnswers = true;
        break;
      case constants.HIDE_REQUEST_ANSWERS:
        draft.showRequestAnswers = false;
        break;

      case constants.CALL_CREATE_PEER:
        draft.peer = payload;
        break;
      case constants.CALL_GET_PEER_ID:
        draft.peerId = payload;
        break;

      case constants.CALL_RESPONSE_CONTACTING:
        draft.status = 'contacting';

        PopupCenter(
          `http://localhost:8686/call/${payload.listener?._id}`,
          'Call videos',
          1300,
          700,
        );

        draft.caller = payload.caller;
        draft.listener = payload.listener;
        break;
    }
  });
export default callReducer;
