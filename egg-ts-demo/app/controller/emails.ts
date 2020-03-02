import { Controller } from "egg";

export default class EmailsController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = "发送邮件";
    ctx.logger.debug('debug info');
    ctx.logger.info('some request data: %j', ctx.request.body);
    ctx.logger.warn('WARNNING!!!!');

    // 错误日志记录，直接会将错误日志完整堆栈信息记录下来，并且输出到 errorLog 中
    // 为了保证异常可追踪，必须保证所有抛出的异常都是 Error 类型，因为只有 Error 类型才会带上堆栈信息，定位到问题。
    ctx.logger.error(new Error('whoops'));
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
