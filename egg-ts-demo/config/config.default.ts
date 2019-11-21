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
        url: "mongodb://xx.xx.xx.xx:xxx/dbName1?authSource=auth",
        options: {
          user: "xx",
          pass: "xx",
          useUnifiedTopology: true
        }
      },
      recurrent_voice: {
        url: "mongodb://xx.xx.xx.xx:xxx/dbName2?authSource=auth",
        options: {
          user: "xx",
          pass: "xx",
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
