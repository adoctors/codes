import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const queryData = await ctx.model.Rule.find({});
    const queryData2 = await ctx.model.Rule.find({
      _id: "5bfbc78a8ffaed549cf5da26"
    });
    const queryData3 = await ctx.model.Rule.find({ 语义点: "身份确认" });
    // ctx.body = await ctx.service.test.sayHi('egg');
    ctx.body = {
      message: "ok",
      data: {
        queryData,
        queryData2,
        queryData3
      }
    };
  }

  public async detail() {
    const { ctx } = this;
    const data = await ctx.model.Rule.find({ _id: ctx.params.id });
    // ctx.body = await ctx.service.test.sayHi('egg');
    ctx.body = {
      message: "ok",
      code: 0,
      data
    };
  }
}
