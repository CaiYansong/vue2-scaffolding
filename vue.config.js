const { name } = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const prodPath = '/micro/' + name;
const localPath = '//localhost:' + process.env.VUE_APP_PORT;

module.exports = {
  lintOnSave: false,
  publicPath: isProd ? prodPath : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // 配置页面 title
        args[0].title = 'Page Title';
        return args;
      });

    config.module
      .rule("fonts")
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 10000,
        name: 'static/fonts/[name].[hash:8].[ext]',
        publicPath: isProd ? prodPath : localPath,
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
