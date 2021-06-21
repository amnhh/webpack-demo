const path = require('path')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const r = _ => path.resolve(__dirname, '../', _)


module.exports = {
  entry: r('./src/index.js'),
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: r('./dist/simple-config-build'),
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
}
