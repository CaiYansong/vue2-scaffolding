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
  devServer: {
    // 注意，需要修改 .env 与在主应用中注册时一致
    port: process.env.VUE_APP_PORT,
    headers: {
      // 本地开发，解决跨域问题
      'Access-Control-Allow-Origin': '*',
    },
  },
};
