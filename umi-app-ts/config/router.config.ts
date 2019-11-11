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
            path: '/forms/',
            redirect: '/forms/overform',
          },
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
        path: '/css3/',
        name: 'CSS3',
        icon: 'star',
        isNavigate: true,
        component: './CSS3/Index',
        routes: [
          {
            path: '/css3/',
            redirect: '/css3/transitions',
          },
          {
            path: '/css3/transitions',
            name: 'Transitions',
            component: './CSS3/components/Transitions/Transitions',
          },
          {
            path: '/css3/animations',
            name: 'Animations',
            component: './CSS3/components/Animations/Animations',
          },
        ],
      },
      {
        path: '/test/',
        name: 'Test',
        icon: 'code',
        isNavigate: true,
        component: './Test/Index',
        routes: [
          {
            path: '/test/',
            redirect: '/test/keylist',
          },
          {
            path: '/test/keylist',
            name: 'keylist',
            component: './Test/components/Keylist/Index',
          },
          {
            path: '/test/multiple',
            name: 'multiple',
            component: './Test/components/Multiple',
          },
          {
            path: '/test/introjs',
            name: 'introjs',
            component: './Test/components/Introjs',
          },
          {
            path: '/test/introjs-react',
            name: 'introjs-react',
            component: './Test/components/Introjsreact',
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
