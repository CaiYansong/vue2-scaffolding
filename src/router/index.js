import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
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

const router = new VueRouter({
  routes,
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export default router;
