const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./', 'dist'),
  },
};

module.exports = merge(commonConfig, prodConfig);
