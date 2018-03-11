module.exports = {
    mode: 'development',
    entry: './docs/all.js',
    output: {
      path: __dirname +'/docs',
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: './docs'
    },
  };