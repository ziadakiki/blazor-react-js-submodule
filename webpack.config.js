const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: {
          loader: 'url-loader?limit=100000'
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../wwwroot/js'),
    publicPath: path.resolve(__dirname, '../wwwroot/js'),
    filename: "bundle.js",
    library: "BlazorReact",
    libraryTarget: "window"
  },
  externals: {
    'react': 'React'
  }
};