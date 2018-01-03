import json from "rollup-plugin-json";

export default [
  {
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
  },
  {
    // Generate documentation for APP6-B
    input: "src/app6b.js",
    output: {
      file: "docs/app6b.js",
      format: "umd"
    },
    name: "app6b",
    plugins: [json()]
  },
  {
    // Generate documentation for APP6-D
    input: "src/app6d.js",
    output: {
      file: "docs/app6d.js",
      format: "umd"
    },
    name: "app6d",
    plugins: [json()]
  },
  {
    // Generate documentation for 2525-B
    input: "src/2525b.js",
    output: {
      file: "docs/2525b.js",
      format: "umd"
    },
    name: "std2525b",
    plugins: [json()]
  },
  {
    // Generate documentation for 2525-C
    input: "src/2525c.js",
    output: {
      file: "docs/2525c.js",
      format: "umd"
    },
    name: "std2525c",
    plugins: [json()]
  },
  {
    // Generate documentation for 2525-D
    input: "src/2525d.js",
    output: {
      file: "docs/2525d.js",
      format: "umd"
    },
    name: "std2525d",
    plugins: [json()]
  }
];
