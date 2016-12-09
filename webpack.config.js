var webpack = require('webpack');
var path = require('path');

var OUT_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: SRC_DIR + '/dropdown_menu.js',
  output: {
    path: OUT_DIR,
    filename: 'dropdown_menu.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};

module.exports = config;
