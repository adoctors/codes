import { IRoute } from 'umi-types';

const router: IRoute[] = [
  {
    path: '/login',
    component: './Login/Login',
  },

  {
    path: '/',
    component: '../layouts/MainLayout',
    routes: [
      {
        path: '/',
        redirect: '/forms/overform',
      },
      {
        path: '/forms/',
        name: 'Forms相关',
        icon: 'form',
        isNavigate: true,
        component: './Forms/Index',
        routes: [
          {
            path: '/forms/overform',
            name: 'form跨组件测试',
            component: './Forms/components/OverForm/OverForm',
          },
          {
            path: '/forms/baseform',
            name: 'form开始',
            component: './Forms/components/BaseForm/BaseForm',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },

  {
    component: './404',
  },
];

export default router;
