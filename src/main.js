import Vue from 'vue';
import less from 'less';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';

import App from './App.vue';
import store from './store';

Vue.use(less);

new Vue({
  store,
  components: { App },
  render: h => h(App),
}).$mount('#app');

// qiankun 相关配置
registerMicroApps([
  {
    name: 'react-app', // app name registered
    // 微应用远程地址
    entry: '//localhost:7101',
    // 渲染的容器
    container: '#container',
    // 路由匹配规则
    activeRule: '/react-app',
  },
  {
    name: 'vue-app',
    entry: '//localhost:7102',
    container: '#vue-app',
    activeRule: '/yourActiveRule2',
  },
]);

// 主应用启动后默认进入的微应用。
setDefaultMountApp('/react-app');

start();
