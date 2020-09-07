const path = require("path");
const common = require("../webpack.common");
const { merge } = require("webpack-merge");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { JSBASEPATH, DIST_PATH } = require('../build.config');


module.exports = merge(common, {
  // ENV
  mode: 'production',
  // OUTPUT
  output: {
    filename: `${JSBASEPATH}[name].[contentHash].js`, // cache buster
    path: path.join(DIST_PATH, "dist"),
  },

  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),   // css minimizer
      new TerserPlugin(),                     // js minimizer
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
    ]
  },
});
