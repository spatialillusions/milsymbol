module.exports = {
  entry: './milsymbol.js',
  output: {
    filename: 'milsymbol.js',
    path: '../dist',
    library: 'MS',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}