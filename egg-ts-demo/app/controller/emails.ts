import { Controller } from "egg";

export default class EmailsController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = "发送邮件";
  }

  public async send() {
    const { ctx } = this;
    const email = "qkeliang@163.com"; // 接收者的邮箱
    const subject = "测试邮件";
    const text = "这是一封测试邮件";
    const html =
      '<h2>测试一下::</h2><a class="elem-a" href="https://baidu.com"><span class="content-elem-span">测试链接</span></a>';

    const has_send = await ctx.service.emails.sendMail(
      email,
      subject,
      text,
      html
    );

    if (has_send) {
      ctx.body = {
        message: "发送成功"
      };
      return;
    }
    ctx.body = {
      message: "发送失败"
    };
  }
}
