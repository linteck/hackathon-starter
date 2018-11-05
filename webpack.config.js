const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  mode: 'development',
  resolve: {
    modules: [
      path.resolve(__dirname, "public"), 
      "node_modules"
    ]
  },
  plugins: [
    //new CleanWebpackPlugin(['public/js']),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'views/calendar.pug'
    })
  ],
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'examples'),
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test : /\.pug$/,
        exclude: /node_modules/,
        use: [ require.resolve('babel-loader'),
            {
              loader: require.resolve('pug-as-jsx-loader')
            }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};
