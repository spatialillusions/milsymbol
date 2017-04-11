const { assert, expect } = require('chai');
const ms = require('../build/milsymbol');

describe('ms', () => {
  const publicApiMethods = {
    BBox: {
        returns: Object,
        works: true
    },
    ColorMode: {
        returns: Object,
        works: true
    },
    addIconParts: {
        returns: Object,
        works: true
    },
    addLabelOverrides: {
        returns: Object,
        works: true
    },
    addSIDCicons: {
        returns: Object,
        works: true
    },
    addSymbolPart: {
        returns: Object,
        works: true
    },
    getColorMode: {
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
        returns: Object
    },
    setColorMode: {
        returns: Object
    },
    setDashArrays: {
        returns: Object
    },
    setHqStafLength: {
        returns: Number
    },
    setStandard: {
        returns: Boolean,
        works: true
    },
    setSymbolParts: {
        returns: Object
    }
  };
  Object.keys(publicApiMethods).forEach(methodName => {
    const apiMethod = ms[methodName];
    const { returns, works } = publicApiMethods[methodName];
    describe(`API method ${methodName}`, () => {
      it('should be a function', () => {
        assert.isFunction(apiMethod);
      });
      // Most of these don't work yet because of how window/document APIs are used
      if (works) {
          it(`should return a ${returns.name}`, () => {
            const result = apiMethod();
            assert[`is${returns.name}`](result);
          });
        }
    });
  });
});
