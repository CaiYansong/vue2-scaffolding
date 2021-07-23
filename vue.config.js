const { name } = require('./package.json');

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/micro/' + name : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // 配置页面 title
        args[0].title = 'Page Title';
        return args;
      });
  },
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        lessOptions: {
           javascriptEnabled: true
        },
      },
    },
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
