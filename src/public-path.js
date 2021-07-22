// 解决引入 less 导致页面空白的问题
if (!window.less) {
  window.less = {
    async: true,
  };
} else {
  window.less.async = true;
}

const { name } = require('../package.json');

(function () {
  // eslint-disable-next-line no-underscore-dangle
  if (window.__POWERED_BY_QIANKUN__) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      __webpack_public_path__ = `//localhost:${process.env.VUE_APP_PORT}${process.env.BASE_URL}`
      return;
    }
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ + 'micro/' + name;
  }
}());
