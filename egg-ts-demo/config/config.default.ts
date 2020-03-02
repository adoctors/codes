import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

const path = require("path");

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
      recurrent_voice: {
        url: "mongodb://localhost:27017/rcrai_web",
        options: {}
      },
      layev: {
        url: "mongodb://localhost:27017/layev",
        options: {}
      }
    }
  };
  
  config.logger = {
    // 日志输出配置，该配置会输出两份
    // egg-ts-demo-web.log  区块清晰
    // egg-ts-demo-web.json.log   容易工具化
    outputJSON: true,
    dir: path.join(appInfo.root, "logs/dev"),
    appLogName: "dev.log"
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
