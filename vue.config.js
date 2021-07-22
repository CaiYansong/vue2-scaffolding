const { name } = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const prodPath = '/micro/' + name;
const localPath = '//localhost:' + process.env.VUE_APP_PORT;
const publicPath = isProd ? prodPath : localPath;

module.exports = {
  lintOnSave: false,
  publicPath,
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
      publicPath,
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
