import { Dispatch } from 'react';
import { AnyAction as Action } from 'redux';
import IAuthActionCreator from '../../core/actions/IAuthActionCreator';
import { changePasswordApi, updateProfileApi } from './service';
import { getHistory } from 'app/store';
import * as constants from './constants';
import Errors from 'containers/shared/handleError';
import { showSnackbar } from 'containers/layout/actions';
import { alertType } from 'constants/constants';
import { ISignUp } from './interfaces';
import { socketDisconnect, configSocket } from 'app/rootSocket';
import IAccountActionCreator from 'core/actions/IAccountActionCreator';

const accountActionCreator: IAccountActionCreator = {
  updateProfile:
    (userId: string, dataInfo: any, callback: any) =>
    async (dispatch: Dispatch<any>) => {
      try {
        const response = await updateProfileApi(userId, dataInfo);

        if (callback) {
          callback(response.data);
        }
      } catch (error) {
        const mes = Errors.handle(error);
        if (mes) {
          dispatch(showSnackbar(mes, alertType.ERROR));
        }
      }
    },
  changePassword:
    (dataInfo: any, callback: any) => async (dispatch: Dispatch<any>) => {
      try {
        await changePasswordApi(dataInfo);

        if (callback) {
          callback();
        }
        dispatch(showSnackbar('Đổi mật khẩu thành công', alertType.SUCCESS));
      } catch (error) {
        const mes = Errors.handle(error);
        if (mes) {
          dispatch(showSnackbar(mes, alertType.ERROR));
        }
      }
    },
};
export default accountActionCreator;
