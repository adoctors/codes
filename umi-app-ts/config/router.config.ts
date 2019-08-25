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
        redirect: '/tags',
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

export default router;
