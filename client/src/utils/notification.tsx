import { ToastContextType } from 'components/Toast/ToastProvider';

export default class Notifications {
  toast: ToastContextType;
  /**
   *
   */
  constructor(toast: ToastContextType) {
    this.toast = toast;
  }
  static error(arg) {
    this.toast.pushError();
  }
}
