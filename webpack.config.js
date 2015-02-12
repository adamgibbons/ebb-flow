module.exports = {
  entry: './app/index.js',
  output: {
    path: 'app',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader?harmony'}
    ]
  }
};