import { Controller } from "egg";
const svgCaptcha = require("svg-captcha");

// const getRandom = (max: number, min: number): number =>
//   Math.round(Math.random() * (max - min + 1) + min);

const delayer = async (time = 200) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export default class OtherController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = "体系外测试接口";
  }

  public async yzm() {
    const { ctx } = this;
    const { text, data } = svgCaptcha.create();
    ctx.response.type = "image/svg+xml";
    console.log(text);
    ctx.body = data;
  }

  public async reqListDetail() {
    const { ctx } = this;
    const { id } = ctx.params;
    // svgCaptcha
    console.log(this.ctx);
    // const time = getRandom(300, 2500);
    // console.log(time)
    await delayer();
    ctx.body = `--- res_con( ${id} )---`;
  }
}
