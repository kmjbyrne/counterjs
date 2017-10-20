'use strict';

var webpack = require('webpack');

module.exports = function makeWebpackConfig() {
    var config = {};
    config.entry = {
      app: './src/counter.js'
    };
    config.output = {
      path: __dirname + 'dist',
      publicPath: 'http://localhost:3000/',
      filename: '[name].min.js',
      chunkFilename: '[name].min.js'
    };
    config.devtool = "source-map";
    config.module = {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { presets: ['es2015'] }
      }]
    };
    config.devServer = {
      contentBase: './src'
    };
    return config;
}();
