import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/views/hello/index.vue'),
  },
];

const setupRouter = () => createRouter({
  history: createWebHashHistory(),
  routes,
});

export default setupRouter;
