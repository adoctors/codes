import { Controller } from "egg";

export default class Rule2Controller extends Controller {
  public async index() {
    const { ctx } = this;
    const rules = await ctx.model.Rule2.find();

    ctx.body = {
      message: "ok",
      code: 0,
      data: rules
    };
  }
}
