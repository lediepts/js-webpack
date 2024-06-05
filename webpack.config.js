// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const glob = require('glob');

const config = {
  context: path.resolve(__dirname, './src/'),
  entry: glob.sync(path.resolve(__dirname, './src/*.js')).reduce(function (obj, el) {
    obj[path.parse(el).name] = el;
    return obj
  }, {}),
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: '[name].js',
    clean: true
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  return config;
};
