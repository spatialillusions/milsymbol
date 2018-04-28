import ms from "../index";
import sampleSymbolSvgs from "./sample-symbol-svgs";

describe("ms.Symbol", () => {
  // TODO: pass options
  describe("when called with a sample SIDC", () => {
    const symbol = new ms.Symbol("SFG-UCI----D");
    it("should return a symbol object", () => {
      expect(symbol).toBeInstanceOf(Object);
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
      getMetadata: {
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
          expect(symbol[methodName]).toBeInstanceOf(Function);
        });
        it(`should return a ${returns.name}`, () => {
          const result = symbol[methodName]();
          expect(typeof result).toBe(returns.name.toLowerCase());
        });
      });
    });
  });
  Object.keys(sampleSymbolSvgs).forEach(SIDC => {
    describe(`with sample SIDC ${SIDC}`, () => {
      const symbol = new ms.Symbol(SIDC, { size: 40 });
      it("should create a symbol", () => {
        expect(symbol).toBeInstanceOf(Object);
        // TODO: what else should we check to verify that symbol looks good?
      });
      // TODO: consider a less brittle XML diff method
      const trimmedString = value => value.replace(/\s/g, "");
      it("should produce the correct SVG", () => {
        expect(trimmedString(symbol.asSVG())).toEqual(
          trimmedString(sampleSymbolSvgs[SIDC])
        );
      });
    });
  });
});
