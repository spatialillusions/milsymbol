import json from "rollup-plugin-json";
export default {
  input: "src/index.js",
  output: {
    file: "dist/milsymbol.development.js",
    format: "umd",
    amd: {
      id: "milsymbol"
    }
  },
  name: "ms",
  plugins: [json()]
};
