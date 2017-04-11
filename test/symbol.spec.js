const { assert, expect } = require('chai');
const ms = require('../build/milsymbol');

describe('ms.Symbol', () => {
  // TODO: pass options
  describe('when called with SIDC', () => {
    const symbol = new ms.Symbol('SFG-UCI----D');
    it('should return a symbol object', () => {
      assert.isObject(symbol);
    });
    // Most of these don't work yet because of how window/document APIs are used
    const publicApiMethods = {
      asCanvas: {
        returns: String
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
        returns: Object,
        works: true
      },
      getSize: {
        returns: Object
      },
      setOptions: {
        returns: Object
      },
      toDataURL: {
        returns: String
      }
    };
    Object.keys(publicApiMethods).forEach(methodName => {
      const apiMethod = symbol[methodName];
      const { returns, works } = publicApiMethods[methodName];
      describe(`API method ${methodName}`, () => {
        it('should be a function', () => {
          assert.isFunction(apiMethod);
        });
        if (works) {
          it(`should return a ${returns.name}`, () => {
            const result = apiMethod();
            assert[`is${returns.name}`](result);
          });
        }
      });
    });
  });
});
