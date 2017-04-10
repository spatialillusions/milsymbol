const path = require('path');
const CustomVarLibraryNamePlugin = require('webpack-custom-var-library-name-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'milsymbol.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'milsymbol',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new CustomVarLibraryNamePlugin({
      name: 'ms'
    })
  ]
}