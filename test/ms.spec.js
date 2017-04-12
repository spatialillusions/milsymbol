const { assert, expect } = require('chai');
const ms = require('../build/milsymbol');

describe('ms', () => {
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
      returns: Object,
      parameters: ['Light']
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
      returns: Object,
      parameters: [{}]
    },
    setColorMode: {
      returns: Object,
      parameters: ['TestMode', {}]
    },
    setDashArrays: {
      returns: Object
    },
    setHqStafLength: {
      returns: Number,
      parameters: [100]
    },
    setStandard: {
      returns: Boolean
    },
    setSymbolParts: {
      returns: Object
    }
  };
  Object.keys(publicApiMethods).forEach(methodName => {
    const { returns, parameters = [], fails } = publicApiMethods[methodName];
    describe(`API method ${methodName}`, () => {
      it('should be a function', () => {
        assert.isFunction(ms[methodName]);
      });
      it(`should return a ${returns.name}`, () => {
        const result = ms[methodName](...parameters);
        assert[`is${returns.name}`](result);
      });
    });
  });
});
