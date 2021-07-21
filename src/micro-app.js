import actions from '@/actions';

const microApps = [
  {
    name: 'vue-app',
    entry: process.env.VUE_APP_MICRO_VUE,
    activeRule: '/vue-app',
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
