var webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  node: {
    net: "empty",
    tls: "empty",
    fs: "empty"
  },
  cache: true,
  entry: './public/index.js',
  output: {
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "'" + process.env.NODE_ENV + "'"
    })
  ],
  module: {
    loaders: [
      { test: /\.css/, loader: "style-loader!css-loader" },
      { test: /\.gif/, loader: "url-loader?limit=10000&minetype=image/gif" },
      { test: /\.jpg/, loader: "url-loader?limit=10000&minetype=image/jpg" },
      { test: /\.png/, loader: "url-loader?limit=10000&minetype=image/png" },
      { test: /\.js$/, loader: "jsx-loader" }
    ]
  }
};
