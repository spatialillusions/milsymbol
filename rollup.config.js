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
  banner:
    "/*!\n" +
    "@file milsymbol.js JavaScript library for generating military symbols \n" +
    "@copyright Måns Beckman 2017 \n" +
    "@license MIT \n" +
    "For more information go to www.spatialillusions.com \n" +
    "*/",
  name: "ms",
  plugins: [json()]
};
