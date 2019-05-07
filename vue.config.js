module.exports = {
  assetsDir: '.',
  publicPath: process.env.NODE_ENV === 'development' ? '' : './{$STATIC_URL}',
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
