import Vue from 'vue';

import less from 'less';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(less);
Vue.use(ElementUI);

const instance = new Vue({
  render: h => h(App),
}).$mount('#app');

// 定义 loader 方法，loading 改变时，将变量赋值给 App.vue 的 data 中的 isLoading
export function loader(loading) {
  if (instance && instance.$children && instance.$children[0].isLoading !== loading) {
    // instance.$children[0] 是 App.vue，此时直接改动 App.vue 的 isLoading
    instance.$children[0].isLoading = loading;
  }
}

export default instance;
