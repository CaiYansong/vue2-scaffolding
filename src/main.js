import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import 'nprogress/nprogress.css'

import microApps from './micro-app';
import { loader } from './render';

// qiankun 相关配置

// 给子应用配置加上loader方法
const apps = microApps.map(item => ({
  ...item,
  loader,
}));

registerMicroApps(apps);

// 主应用启动后默认进入的微应用。
setDefaultMountApp('/qiankun-micro-vue2');

start({
  prefetch: true,
  sandbox: {
    experimentalStyleIsolation: true,
  },
});
