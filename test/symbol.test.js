import {
  ms, // Base for milsymbol
  app6b, // APP6-B
  std2525b, // 2525B
  std2525c, // 2525C
  app6d, // APP6-D
  std2525d // 2525D
  //path2d // Pollyfill for Path2D in IE or node-canvas
} from "../index.esm.js";
ms.reset();

ms.addIcons(app6b);
ms.addIcons(std2525b);
ms.addIcons(std2525c);
ms.addIcons(app6d);
ms.addIcons(std2525d);
//ms.Path2D = path2d;

import sampleSymbolSvgs from "./sample-symbol-svgs";

let sampleSvgs = {};
for (let key in sampleSymbolSvgs) {
  sampleSvgs[key] = [
    new ms.Symbol(key, { size: 40 }).asSVG(),
    sampleSymbolSvgs[key]
  ];
}

const symbol = new ms.Symbol("SFG-UCI----D");

export default {
  "ms.Symbol": {
    "Returns a symbol object": [typeof symbol, "object"],
    //asCanvas: [typeof symbol.asCanvas(), "object"], // TODO
    //asDOM: [typeof symbol.asDOM(), "object"], // TODO
    asSVG: [typeof symbol.asSVG(), "string"],
    getAnchor: [typeof symbol.getAnchor(), "object"],
    getColors: [typeof symbol.getColors(), "object"],
    getOctagonAnchor: [typeof symbol.getOctagonAnchor(), "object"],
    getOptions: [typeof symbol.getOptions(), "object"],
    getMetadata: [typeof symbol.getMetadata(), "object"],
    getSize: [typeof symbol.getSize(), "object"],
    getStyle: [typeof symbol.getStyle(), "object"],
    isValid: [typeof symbol.isValid(), "boolean"], // TOOD make it possible to pass extended option and return an Object
    setOptions: [typeof symbol.setOptions(), "object"]
    //toDataURL: [typeof symbol.toDataURL(), "string"] // TODO
  },
  "Sample SVGs": sampleSvgs
};
