const { assert } = require("chai");
const ms = require("../src/index");

describe("ms.Symbol", () => {
  // TODO: pass options
  describe("when called with SIDC", () => {
    const symbol = new ms.Symbol("SFG-UCI----D");
    it("should return a symbol object", () => {
      assert.isObject(symbol);
    });
    const publicApiMethods = {
      asCanvas: {
        returns: Object
      },
      asDOM: {
        returns: Object
      },
      asSVG: {
        returns: String
      },
      getAnchor: {
        returns: Object
      },
      getColors: {
        returns: Object
      },
      getOctagonAnchor: {
        returns: Object
      },
      getProperties: {
        returns: Object
      },
      getSize: {
        returns: Object
      },
      isValid: {
        returns: Boolean // TOOD make it possible to pass extended option and return an Object
      },
      setOptions: {
        returns: Object
      },
      toDataURL: {
        returns: String
      }
    };
    Object.keys(publicApiMethods).forEach(methodName => {
      const { returns } = publicApiMethods[methodName];
      describe(`API method ${methodName}`, () => {
        it("should be a function", () => {
          assert.isFunction(symbol[methodName]);
        });
        it(`should return a ${returns.name}`, () => {
          const result = symbol[methodName]();
          assert[`is${returns.name}`](result);
        });
      });
    });
  });
});
