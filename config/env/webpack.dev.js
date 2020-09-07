const path = require("path");
const common = require("../webpack.common");
const { merge } = require("webpack-merge");
const { JSBASEPATH, DIST_PATH } = require('../build.config');

module.exports = merge(common, {
  // ENV
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',

  // OUTPUT
  output: {
    filename: `${JSBASEPATH}[name].[contentHash].js`, // cache buster
    path: path.join(DIST_PATH, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',  // handles js compilation, polifils, react
          'eslint-loader'  // includes eslint-loader
        ]
      },
    ]
  },
});