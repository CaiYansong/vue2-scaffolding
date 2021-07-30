module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  "plugins": [
    // [
    //   // ant design vue 按需引入
    //   "import", 
    //   {
    //     "libraryName": "ant-design-vue",
    //     "libraryDirectory": "es",
    //     "style": true,
    //   },
    // ],
    
    [
      // Element Plus 按需引入
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
  ],
};
