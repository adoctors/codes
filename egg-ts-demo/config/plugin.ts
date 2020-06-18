import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  proxy: {
    enable: true,
    package: 'koa-proxy'
  }
};

export default plugin;
