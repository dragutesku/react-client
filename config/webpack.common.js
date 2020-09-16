const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CSSPATH } = require('./build.config');

// NOTE: Can run webpack-dev-server so i dont need node

module.exports = {
  /**
   * :INPUT 
   * entry point for the files 
  **/
  entry: {
   bundle: './src/index.js',
   vendor: './src/vendor.js'
  },
  /** 
   * :PLUGING
   *  @HtmlWebpackPlugin    - html loader, loads cache busters and files
   *  @CleanWebpackPlugin   - cleans the dist folder
   *  @MiniCssExtractPlugin - bundles and loads css
  **/
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${CSSPATH}[name].[contentHash].css`
    }),
  ],
  /** 
   * :RULES
   *  Test for file extensions and does magic with them
   *  - order is from bottom to top on witch the rules work
   *  style-loader - injects styles into the DOM
   *  css-loader - turns css into commonjs
   *  MiniCssExtractPlugin.loader - extract css into files
   *  html-loader - loads html
   *  file-loader - loads common files
  **/
  module: {
    rules: [
      // INJECTS THE MINIMAL UI INTO THE PAGE
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs'
          }
        }
      }
    ]
  },
};