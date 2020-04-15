import routes from './router.config';
import webpackPlugin from './chainWebpack.config';
import path from 'path';

// ref: https://umijs.org/config/
const config = {
  title: 'adoctors',
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
  },
  routes,
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

  lessLoader: {
    javascriptEnabled: true,
    paths: [path.resolve(__dirname, '../src/')],
  },
  chainWebpack: webpackPlugin,
};

export default config;
