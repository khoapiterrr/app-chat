import mailjet from 'node-mailjet';
import { mailRestorePwd, SendParamsMessage } from '../interfaces/mail.interface';
import { config } from '../config/config';

export const sendMailJet = async (mailInfo: SendParamsMessage) => {
  const mailjetConfig = mailjet.connect(config.mailJet.key, config.mailJet.secret);

  return mailjetConfig.post('send', { version: 'v3.1' }).request({
    Messages: [mailInfo],
  });
  // request
  //   .then(result => {
  //     console.log(result.body);
  //   })
  //   .catch(err => {
  //     console.log(err.statusCode);
  //   });
};

export const sendMailRestorePassword = async (info: mailRestorePwd) => {
  const dataMail = {
    From: {
      Email: 'khoapiterrr99@gmail.com',
      Name: 'Lê Trọng Khoa',
    },
    To: [
      {
        Email: info.email,
        Name: info.fullName,
      },
    ],
    Subject: 'App-chat - Restore Password by KhoaPiterrr',
    // TextPart: 'hí ae tôi đây mk là :' + info.newPassword,
    HTMLPart: `<div style="background-color: #f5f5f5;  padding-top: 80px; position: relative;">
    <div style="width: 400px; margin:0 auto; background-color: #fff;border-top: 5px solid #fead0d; text-align: center; padding:40px;">
      <h2>Mật khẩu của bạn là:</h2>
      <h4><b>${info.newPassword}</b></h4>
      <p style="font-size:12px;line-height:18px; color:#8c8c8c">
        <br>
        Cảm ơn bạn,<br>
        Trọng Khoa</p>
    </div>
  </div>`,
  };
  const res = await sendMailJet(dataMail);
  console.log(res, 'resresresresresresresresresresresresresresresresresresresresresresresresresresresresresres');

  return res;
};
