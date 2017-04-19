const { assert } = require("chai");
const ms = require("../src/index");

describe("ms", () => {
  const publicApiMethods = {
    BBox: {
      returns: Object
    },
    ColorMode: {
      returns: Object
    },
    addIconParts: {
      returns: Object
    },
    addLabelOverrides: {
      returns: Object
    },
    addSIDCicons: {
      returns: Object
    },
    addSymbolPart: {
      returns: Object
    },
    getColorMode: {
      parameters: ["Light"],
      returns: Object
    },
    getDashArrays: {
      returns: Object
    },
    getHqStafLength: {
      returns: Number
    },
    getSymbolParts: {
      returns: Array
    },
    getVersion: {
      returns: String
    },
    outline: {
      parameters: [{}],
      returns: Object
    },
    setColorMode: {
      parameters: ["TestMode", {}],
      returns: Object
    },
    setDashArrays: {
      returns: Object
    },
    setHqStafLength: {
      parameters: [100],
      returns: Number
    },
    setStandard: {
      returns: Boolean
    },
    setSymbolParts: {
      returns: Object
    }
  };
  Object.keys(publicApiMethods).forEach(methodName => {
    const { returns, parameters = [] } = publicApiMethods[methodName];
    describe(`API method ${methodName}`, () => {
      it("should be a function", () => {
        assert.isFunction(ms[methodName]);
      });
      it(`should return a ${returns.name}`, () => {
        const result = ms[methodName](...parameters);
        assert[`is${returns.name}`](result);
      });
    });
  });
});
