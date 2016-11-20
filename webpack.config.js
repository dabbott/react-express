const {resolve} = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const update = require('immutability-helper')

const paths = {
  dist: resolve(__dirname, 'dist'),
  src: resolve(__dirname, 'src'),
  static: resolve(__dirname, 'static'),
}

module.exports = (env = {}) => {
  const {dev} = env

  const copyPlugin = new CopyWebpackPlugin([
    {from: paths.static, to: paths.dist},
  ])

  const base = {
    output: {
      filename: 'bundle.js',
      path: paths.dist,
      publicPath: '/',
    },
    context: paths.src,
    module: {
      loaders: [
        {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
        {test: /\.css$/, loaders: ['style-loader', 'css-loader', 'postcss-loader']},
      ],
    },
  }

  const devConfig = {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3210',
      'webpack/hot/only-dev-server',
      './index.js',
    ],
    devServer: {
      hot: true,
      contentBase: paths.dist,
      outputPath: paths.dist,
      publicPath: '/',
      historyApiFallback: true,
      port: 3210,
    },
    devtool: 'inline-source-map',
    plugins: [
      copyPlugin,
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  }

  const prodConfig = {
    entry: [
      './index.js',
    ],
    plugins: [
      copyPlugin,
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),
      new webpack.optimize.DedupePlugin(),
      // new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ],
  }

  return Object.assign(base, dev ? devConfig : prodConfig)
}
