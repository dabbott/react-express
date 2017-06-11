const { resolve } = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const paths = {
  dist: resolve(__dirname, "dist"),
  src: resolve(__dirname, "src"),
  static: resolve(__dirname, "static"),
  server: resolve(__dirname, "server", "build"),
  babelConfig: resolve(__dirname, ".babelrc")
};

module.exports = (env = {}) => {
  const { dev, client, server } = env;

  const copyPlugin = new CopyWebpackPlugin([
    { from: paths.static, to: paths.dist }
  ]);

  const base = {
    context: paths.src,
    output: {
      filename: "bundle.js",
      path: paths.dist,
      publicPath: "/"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules(?!\/react-disqus-thread)/,
          loaders: ["babel-loader"]
        },
        {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader", "postcss-loader"]
        }
      ]
    },
    resolve: {
      alias: {
        react: resolve(__dirname, "node_modules", "react")
      }
    }
  };

  const node = Object.assign({}, base, {
    entry: "./server.js",
    output: {
      filename: "server-bundle.js",
      path: paths.server,
      library: "app",
      libraryTarget: "umd"
    },
    target: "node",
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(dev ? "development" : "production")
        },
        isServer: 1,
        isClient: 0
      }),
      new webpack.NamedModulesPlugin()
    ],
    externals: ["react", "react-dom", "react-router"]
  });

  const devConfig = {
    entry: [
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:3210",
      "webpack/hot/only-dev-server",
      "./index.js"
    ],
    devServer: {
      hot: true,
      contentBase: paths.dist,
      publicPath: "/",
      historyApiFallback: true,
      port: 3210
    },
    devtool: "inline-source-map",
    plugins: [
      copyPlugin,
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development")
        },
        isServer: 0,
        isClient: 1
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  };

  const prodConfig = {
    entry: ["./index.js"],
    plugins: [
      copyPlugin,
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        },
        isServer: 0,
        isClient: 1
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  };

  return [
    ...(client
      ? [Object.assign(base, dev && !server ? devConfig : prodConfig)]
      : []),
    ...(server ? [node] : [])
  ];
};
