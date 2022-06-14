// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Welcome to my Personal Website'
      // args[0].subtitle = 'Hello! This is my personal website for professional purpose only. Including my projects, about myself and contact! Enjoy my personal website!'
      return args
    })
  },
  publicPath: '/'
}
