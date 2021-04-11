/* eslint-disable array-callback-return */
import { getHistory } from 'app/store';
import Message from './message';
// import { fetchRefreshToken } from '../../AuthPage/service';
const DEFAULT_ERROR_MESSAGE = 'Something went wrong!';

function selectErrorMessage(error: any) {
  if (error?.response?.data?.data) {
    let errorMsg = '';
    console.log(error.response.data.data, 'error.response.data.data');
    error.response.data.data[0].messages.map((item: any) => {
      errorMsg += item.message + '\n';
    });
    return errorMsg;
  }
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.response?.data?.messages) {
    let errorMsg = '';
    error.response.data.message[0].messages.map((item: any) => {
      errorMsg += item.message + '\n';
    });
    return errorMsg;
  }
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return error.response.data.message;
    // console.log(error.response.status);
  }
  // Something happened in setting up the request that triggered an Error
  return error.message || DEFAULT_ERROR_MESSAGE;
}

function selectErrorCode(error: any) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return error.response.status;
  }
  return 500;
}

export default class Errors {
  static handle(error: any) {
    if (process.env.NODE_ENV !== 'test') {
      console.error(selectErrorMessage(error));
      console.error(error);
    }
    if (selectErrorCode(error) === 401) {
      // gửi yêu cầu token mới với refresh token và email
      // window.localStorage.removeItem('token');
      getHistory().push('/401');
      return;
    }
    if (selectErrorCode(error) === 403) {
      console.log(`You don't have permission to access this resource`);
      getHistory().push('/403');
      return `You don't have permission to access this resource`;
    }

    if (
      selectErrorCode(error) === 400 ||
      selectErrorCode(error) === 409 ||
      selectErrorCode(error) === 404
    ) {
      return `${selectErrorMessage(error)}`;
    }
    return `${selectErrorMessage(error)}`;
  }

  static errorCode(error: any) {
    return selectErrorCode(error);
  }

  static selectMessage(error: any) {
    return selectErrorMessage(error);
  }

  static showMessage(error: any) {
    Message.error(selectErrorMessage(error));
  }
}
