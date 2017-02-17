const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/app.ts',
  },
  resolve: { extensions: ['.js', '.ts'] },
  module: { rules: [
    {
      test: /\.ts$/,
      use: ['awesome-typescript-loader']
    },{
      test: /\.html$/,
      use: 'html-loader'
    },{
      test: /\.css$/,
      include: path.resolve(__dirname, '/src'),
      use: ExtractTextPlugin.extract({fallbackLoader: "style-loader",loader: "css-loader"})
    }
  ]},
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'bundle.js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash].css')
  ]
};
