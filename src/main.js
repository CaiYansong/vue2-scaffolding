import Vue from 'vue';
import less from 'less';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';

import App from './App.vue';
import store from './store';
import microApps from './micro-app';

Vue.use(less);

new Vue({
  store,
  components: { App },
  render: h => h(App),
}).$mount('#app');

// qiankun 相关配置
registerMicroApps(microApps);

// 主应用启动后默认进入的微应用。
setDefaultMountApp('/react-app');

start();
