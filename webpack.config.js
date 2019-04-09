const resolve = require('path').resolve;

module.exports = {
  entry: {
    pf: './lib/index.js',
    entry: './lib/entry.js',
  },
  output: {
    filename: '[name].min.js',
    library: 'PF',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'dist/'),
  },
  resolve: {
    extensions: [ '.js' ],
  },
  module: {
    rules: [
    ],
  },
  plugins: [
  ],
  externals: {
  },
  performance: {
    hints: false
  },
};
