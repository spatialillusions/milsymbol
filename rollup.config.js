import copy from "rollup-plugin-copy";

export default [
  {
    input: "index.js",
    output: {
      file: "dist/milsymbol.development.js",
      format: "umd",
      amd: {
        id: "milsymbol"
      },
      banner:
        "/**!\n" +
        "* @license\n" +
        "* The MIT License (MIT)\n" +
        "* \n" +
        "* Copyright (c) 2017 Måns Beckman - www.spatialillusions.com\n" +
        "* \n" +
        "* Permission is hereby granted, free of charge, to any person obtaining a copy\n" +
        '* of this software and associated documentation files (the "Software"), to deal\n' +
        "* in the Software without restriction, including without limitation the rights\n" +
        "* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n" +
        "* copies of the Software, and to permit persons to whom the Software is\n" +
        "* furnished to do so, subject to the following conditions:\n" +
        "* \n" +
        "* The above copyright notice and this permission notice shall be included in all\n" +
        "* copies or substantial portions of the Software.\n" +
        "* \n" +
        '* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
        "* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n" +
        "* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n" +
        "* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n" +
        "* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n" +
        "* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n" +
        "* SOFTWARE.\n" +
        "* \n" +
        "* More information can be found at www.spatialillusions.com \n" +
        "*/",
      name: "ms"
    },
    plugins: [
      copy({
        "node_modules/milstd2525/milstd2525.js": "docs/milstd-2525.js",
        "node_modules/stanagapp6/stanagapp6.js": "docs/stanag-app6.js",
        verbose: true
      })
    ]
  }
];
