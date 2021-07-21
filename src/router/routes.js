const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: 'hello',
        name: 'hello',
        component: () => import('@/views/hello/index.vue'),
      },
    ],
  },
];
export default routes;
