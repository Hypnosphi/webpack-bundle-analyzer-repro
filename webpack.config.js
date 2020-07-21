const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'production',
  output: {
    library: 'MyLibrary',
    libraryTarget: 'global'
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
