import { Controller } from "egg";

export default class ConfigsController extends Controller {
  public async index() {
    const { ctx } = this;
    const queryData = await ctx.model.Configs.find({});
    ctx.body = {
      message: "ok",
      data: {
        queryData
      }
    };
  }
}
