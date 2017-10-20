'use strict';

var webpack = require('webpack');

module.exports = function makeWebpackConfig() {
    var config = {};
    config.entry = {
      counter: './src/counter.js'
    };
    config.output = {
      path: __dirname,
      publicPath: 'http://localhost:4000/',
      filename: './dist/[name].min.js',
      chunkFilename: '[name].min.js'
    };
    config.devtool = "inline-source-map";
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
