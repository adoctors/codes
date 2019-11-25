import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  router.get("/", controller.home.index);
  router.get("/rule/:id", controller.home.detail);
  router.get("/v5/rules", controller.rule2.index);
  router.get("/v5/configs", controller.configs.index);
  router.get("/other", controller.others.index);
  router.get("/other/req_list/:id", controller.others.reqListDetail);
};
