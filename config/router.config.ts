import { IRoute } from 'umi-types';

const routers: IRoute[] = [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/MainLayout',
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        isNavigate: true,
        component: './Welcome',
      },
      {
        path: '/tags',
        name: '标签管理',
        icon: 'tags',
        isNavigate: true,
        component: './Tags/Index',
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

export default routers;