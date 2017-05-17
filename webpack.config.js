const path = require("path");
const CustomVarLibraryNamePlugin = require("webpack-custom-var-library-name-plugin");

module.exports = function(env) {
  var target = "umd";
  if (env) {
    target = env.target || target;
  }
  return {
    entry: "./src/index.js",
    output: {
      filename: "milsymbol.js",
      path: path.resolve(__dirname, "dist"),
      library: "milsymbol",
      libraryTarget: target,
      umdNamedDefine: target == "amd" ? false : true
    },
    plugins: [
      new CustomVarLibraryNamePlugin({
        name: "ms"
      })
    ]
  };
};
