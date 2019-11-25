import { Controller } from "egg";

const getRandom = (max: number, min: number): number =>
  Math.round(Math.random() * (max - min + 1) + min);


const delayer = async(time = 2000)=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export default class OtherController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = "体系外测试接口";
  }

  public async reqListDetail() {
    const { ctx } = this;
    const { id } = ctx.params;
    const time = getRandom(300, 2500);
    console.log(time)
    await delayer(time);
    ctx.body = id;
  }
}
