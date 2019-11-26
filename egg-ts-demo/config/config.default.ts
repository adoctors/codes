import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1566368051526_9068";

  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };

  config.mongoose = {
    clients: {
      layev: {
        url: "mongodb://39.104.89.130:37991/layev?authSource=admin",
        options: {
          user: "rcrai_admin",
          pass: "rcrai_keg",
          useUnifiedTopology: true
        }
      },
      recurrent_voice: {
        url: "mongodb://39.104.89.130:37991/recurrent_voice?authSource=admin",
        options: {
          user: "rcrai_admin",
          pass: "rcrai_keg",
          useUnifiedTopology: true
        }
      }
    }
  };

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
