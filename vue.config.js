module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // 配置页面 title
        args[0].title = 'Page Title';
        return args;
      });
  },
};
