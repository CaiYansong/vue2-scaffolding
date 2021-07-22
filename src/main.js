import './public-path';
import { createApp } from 'vue';
import less from 'less';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 按需引入
// import Button from 'ant-design-vue/lib/button';
// import 'ant-design-vue/lib/button/style'; 
// 或者 ant-design-vue/lib/button/style/css 加载 css 文件
// app.use(Button)

import setupRouter from '@/router';
import store from '@/store';
import globalRegister from '@/actions/global-register';
import App from './App.vue';

let app = null;
let router = null;

function render(props) {
  const { container } = props || {};
  // 这里需要注意，往下注入的必须和子打包配置一致
  router = setupRouter();
  app = createApp(App);
  app.use(less);
  app.use(Antd);
  app.use(router);
  app.use(store);

  router.isReady().then(() => {
    app.mount(container ? container.querySelector('#app') : '#app');
  });
}

// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  // 独立运行时，也注册一个名为global的store module
  globalRegister(store);
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  globalRegister(store, props);
  render(props);
}

export async function unmount() {
  app.unmount();
  // eslint-disable-next-line no-underscore-dangle
  app._container.innerHTML = '';
  app = null;
  router = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}
