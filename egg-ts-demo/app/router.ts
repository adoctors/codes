import { Application } from "egg";

export default (app: Application) => {
  const { controller, router, middleware, config } = app;

  router.get("/", controller.home.index);
  router.resources("test-index", "/api/test", controller.test);
  router.get("/rule/:id", controller.home.detail);
  router.get("/v5/rules", controller.rule2.index);
  router.get("/v5/configs", controller.configs.index);
  router.get("/other", controller.others.index);
  router.get("/other/yzm", controller.others.yzm);
  router.get("/other/email", controller.emails.index);
  router.get("/other/email/send", controller.emails.send);
  router.get("/other/req_list/:id", controller.others.reqListDetail);

  const proxy = middleware.proxy(config.proxy);
  // const jwt = middleware.jwt(config.jwt);
  // router.use(jwt);
  router.get("/api/open/custom/config", proxy);
  // -----如果仅用url配合use中间件则不生效
  // router.get("/api/open/custom/config");
};
