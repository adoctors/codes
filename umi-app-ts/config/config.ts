import { IConfig } from 'umi-types';
import routes from './router.config';
import plugins from './plugins.config';
import path from 'path';

// ref: https://umijs.org/config/
const config: IConfig = {
  plugins,
  routes,
  treeShaking: true,
  targets: {
    ie: 11,
  },
  manifest: {
    basePath: '/',
  },
};

export default config;
