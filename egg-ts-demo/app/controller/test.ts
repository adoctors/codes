import { Context } from "egg";

exports.index = async (ctx: Context) => {
  ctx.body = {
    code: 0,
    name: "PostgreSQL",
  };
};
