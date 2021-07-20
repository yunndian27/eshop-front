module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '購物網站'
        return args
      })
  }
}
