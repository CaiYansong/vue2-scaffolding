import Vue from 'vue';
import less from 'less';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(less);

new Vue({
  router,
  store,
  components: { App },
  render: h => h(App),
}).$mount('#app');
