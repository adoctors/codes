import { IPlugin } from 'umi-types';

const plugins: IPlugin[] = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'rcrai',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      headScripts: [
        {
          src: '<%= PUBLIC_PATH %>page.head.script.js',
        },
      ],
      locale: {
        enable: true,
        default: 'zh-CN',
        baseNavigator: true,
      },
    },
  ],
];

export default plugins;
