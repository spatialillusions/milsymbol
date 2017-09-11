const path = require("path");

module.exports = function(env) {
  var target = "umd";
  if (env) {
    target = env.target || target;
  }

  var libraryName = "milsymbol"; // Library base name
  if (target == "umd") {
    // If UMD target, set library name to object
    libraryName = {
      root: "ms",
      amd: "milsymbol",
      commonjs: "milsymbol"
    };
  }
  if (target == "var") {
    // If Var target, name the library ms
    libraryName = "ms";
  }

  return {
    entry: "./src/index.js",
    output: {
      filename: "milsymbol.js",
      path: path.resolve(__dirname, "dist"),
      library: libraryName,
      libraryTarget: target,
      umdNamedDefine: target == "amd" ? false : true
    }
  };
};
