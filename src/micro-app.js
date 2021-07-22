import actions from '@/actions';

const microApps = [
  {
    name: 'qiankun-micro-vue2',
    entry: process.env.VUE_APP_MICRO_VUE2,
    activeRule: '/qiankun-micro-vue2',
  },
  {
    name: 'qiankun-micro-vue3',
    entry: process.env.VUE_APP_MICRO_VUE3,
    activeRule: '/qiankun-micro-vue3',
  },
  {
    name: 'react-app',
    entry: process.env.VUE_APP_MICRO_REACT,
    activeRule: '/react-app',
  },
];

const apps = microApps.map(item => ({
  ...item,
  // 子应用挂载的 div
  container: '#container',
  props: {
    // 下发基础路由
    routerBase: item.activeRule,
    // 下发 getGlobalState 方法
    getGlobalState: actions.getGlobalState,
  },
}));

export default apps;
