import { Context } from "egg";

exports.index = async (ctx: Context) => {
  console.log(ctx.pgModel.Staffs)
  // await ctx.pgModel.Staffs.create({ name: 'first blood' });
  const staffs = await ctx.pgModel.Staffs.findAll();
  console.log(staffs)
  ctx.body = {
    code: 0,
    name: "PostgreSQL",
  };
};
