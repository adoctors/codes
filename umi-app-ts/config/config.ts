import { IConfig } from 'umi-types';
import routes from './router.config';
import plugins from './plugins.config';
import webpackPlugin from './chainWebpack.config';
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

  /** 非根目录打包*/
  // base: '/dist',
  // history: 'hash',
  // publicPath: '/dist/',
  /** 非根目录打包*/

  lessLoaderOptions: {
    javascriptEnabled: true,
    paths: [path.resolve(__dirname, '../src/')],
  },
  chainWebpack: webpackPlugin,
};

export default config;
