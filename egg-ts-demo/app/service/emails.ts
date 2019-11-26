import { Service } from "egg";

const nodemailer = require("nodemailer");
const user_email = "xxx@qq.com";
const auth_code = "xxx";

const transporter = nodemailer.createTransport({
  service: "qq",
  secureConnection: true,
  port: 465,
  auth: {
    user: user_email, // 账号
    pass: auth_code // 授权码
  }
});

export default class Emails extends Service {
  /**
   * @param email - 接收者邮件
   * @param subject - 标题
   * @param text - 文本
   * @param html - 邮件结构
   */
  public async sendMail(
    email: string,
    subject: string,
    text: string,
    html: string
  ) {
    const mailOptions = {
      from: user_email, // 发送者,与上面的user一致
      to: email, // 接收者,可以同时发送多个,以逗号隔开
      subject, // 标题
      text, // 文本
      html
    };

    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (err) {
      return false;
    }
  }
}
