//import resolve from "rollup-plugin-node-resolve";
//import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "dist/milsymbol.development.js",
    format: "umd",
    amd: {
      id: "milsymbol"
    }
  },
  //freeze: false,
  name: "ms",
  plugins: [
    /*resolve(), commonjs()*/
  ]
};
