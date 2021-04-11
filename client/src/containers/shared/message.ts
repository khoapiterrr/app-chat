// import { notification } from 'antd';
export default class Message {
  static success(arg: any) {
    // notification.success({
    //   message: arg,
    //   description: '',
    // });
    console.log('success: ' + arg);
  }

  static error(arg: any) {
    // notification.error({
    //   message: arg,
    //   description: '',
    // });
    console.log('error: ' + arg);
  }

  // static info(arg) {
  //   message.open({
  //     content: arg.message,
  //     icon: (
  //       <span style={{ marginRight: '5px' }}>
  //         {' '}
  //         <AvatarCus record={arg} />
  //       </span>
  //     ),
  //   });
  // }
}
