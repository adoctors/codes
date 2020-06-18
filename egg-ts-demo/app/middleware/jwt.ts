module.exports = (options) => {
  return async function (ctx, next) {
    const token = ctx.request.header.authorization;
    if (!token) {
      ctx.body = {
        code: 10001,
        message: '没有token',
      };
    } else {
      let decode;
      try {
        // 解码验证当前token
        decode = ctx.app.jwt.verify(token, options.secret);

        if (!decode || !decode.username) {
          ctx.body = {
            code: 10001,
            message: '没有token',
          };
        }
        if (Date.now() - decode.expire > 0) {
          ctx.body = {
            code: 10001,
            message: 'Token已过期',
          };
        }

        ctx.$middleware = ctx.$middleware || {};
        ctx.$middleware.username = decode.username;
        await next();
      } catch (e) {
        console.log(e);
      }
    }
  };
};