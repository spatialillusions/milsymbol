var CustomVarLibraryNamePlugin = require('webpack-custom-var-library-name-plugin');

module.exports = {
  entry: './build/milsymbol.js',
  output: {
    filename: 'milsymbol.js',
    path: './dist',
    library: 'milsymbol',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new CustomVarLibraryNamePlugin({
      name: 'MS'
    })
  ]
}