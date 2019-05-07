module.exports = {
  assetsDir: '.',
  publicPath: './{$STATIC_URL}',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/dev': {
        target: process.env.BACKEND_URL,
        ws: false
      }
    }
  }
}
