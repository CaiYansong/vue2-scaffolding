import store from './store';

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
  // 子应用挂载的div
  container: '#container',
  props: {
    // 下发基础路由
    routerBase: item.activeRule,
    // 下发getGlobalState方法
    getGlobalState: store.getGlobalState,
  },
}));

export default apps;
