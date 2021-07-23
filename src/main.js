import Vue from 'vue';
import less from 'less';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';

import App from './App.vue';
import microApps from './micro-app';

Vue.use(less);

new Vue({
  components: { App },
  render: h => h(App),
}).$mount('#app');

// qiankun 相关配置
registerMicroApps(microApps);

// 主应用启动后默认进入的微应用。
setDefaultMountApp('/qiankun-micro-vue2');

start({
  prefetch: true,
  sandbox: {
    experimentalStyleIsolation: true,
  },
});
