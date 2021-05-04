import { alertType } from 'constants/constants';
import { showSnackbar } from 'containers/layout/actions';
import Errors from 'containers/shared/handleError';
import { Dispatch } from 'react';
import { fetchUserByIdApi } from './service';

export const fetchUserByIdCB = (id: string, cb: any) => async (
  dispatch: Dispatch<any>,
) => {
  try {
    let response = await fetchUserByIdApi(id);
    if (cb) {
      cb(response.data);
    }
  } catch (error) {
    const mes = Errors.handle(error);
    if (mes) {
      dispatch(showSnackbar(mes, alertType.ERROR));
    }
  }
};
