import getSocket from 'app/rootSocket';
import getStore from 'app/store';
import { alertType } from 'constants/constants';
import { showSnackbar } from 'containers/layout/actions';
import { PopupCenter } from 'utils/common';
import * as constants from './constants';

// emit sự kiện kiểm tra status của listener
export const emitCheckListenerStatus = (payload: any) => {
  getSocket().emit('caller-server-check-listener-status', payload);
};

// lắng nghe sự kiện status listener
export const onListenerOffline = (payload: any) => {
  if (payload.status === 'offline') {
    // Nếu listener offline thì trả thông báo về cho caller
    // console.log('onListenerOfflineonListenerOffline', payload);
    getStore().dispatch(
      showSnackbar(
        `${payload.listener.firstName} ${payload.listener.lastName}   is not online now.`,
        alertType.ERROR,
      ),
    );
  } else {
    // Nếu listener online thì open popup
    getStore().dispatch({
      type: constants.CALL_RESPONSE_CONTACTING,
      payload: payload,
    });
  }
};

// lắng nghe sự kiện yêu cầu peerid
export const onRequestPeerId = (payload: any) => {
  // let state = getStore().getState();
  PopupCenter(
    `${process.env.REACT_APP_PAGE}/call/${payload?._id}?status=requestAnswer`,
    'answer videos',
    1300,
    700,
  );

  // getSocket().emit('listener-server-listener-peer-id', {
  //   ...payload,
  //   peerId: state.call.peerId,
  // });
  // getStore();
};
