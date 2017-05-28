const path = require('path')

module.exports = {
  devtool: 'source-map', 

  target: 'electron',

  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname, 'bundles'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}