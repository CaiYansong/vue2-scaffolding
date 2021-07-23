import './public-path';
import Vue from 'vue';
import less from 'less';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 按需引入
// import { Button } from 'element-ui';
// 子路由使用 history 的写法
// import VueRouter from 'vue-router';
// import routes from '@/router/routes';

// 子路由使用 hash 的写法
import router from '@/router';
import store from '@/store';
import globalRegister from '@/actions/global-register';
import App from './App.vue';

Vue.use(less);
Vue.use(ElementUI);
// 按需引入
// Vue.component(Button.name, Button);

let instance = null;
function render(props = {}) {
  const { container } = props;

  // 子路由使用 history 的写法
  // const router = new VueRouter({
  //   // 注意这里的 name，不要写死，直接使用主应用传过来的 name
  //   // eslint-disable-next-line no-underscore-dangle
  //   base: window.__POWERED_BY_QIANKUN__ ? `${props.name}` : '/',
  //   mode: 'history',
  //   routes,
  // });

  instance = new Vue({
    router,
    store,
    components: { App },
    render: h => h(App),
  })
    // props.container.querySelector 防止找不到节点导致显示失败
    .$mount(container ? container.querySelector('#app') : '#app');
}

// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  // 独立运行时，也注册一个名为global的store module
  globalRegister(store);
  render();
}

// qiankun 相关配置
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  globalRegister(store, props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}
