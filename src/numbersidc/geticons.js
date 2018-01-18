//import { ms } from "../ms.js";
export function geticons(ms, symbolSet, iconParts, STD2525) {
  var iconSIDC = {};
  var iconModifier1 = {};
  var iconModifier2 = {};
  var iconBbox = {};

  for (var i in ms._iconSIDC.number) {
    if (!ms._iconSIDC.number.hasOwnProperty(i)) continue;
    ms._iconSIDC.number[i].call(
      this,
      iconSIDC,
      iconModifier1,
      iconModifier2,
      iconBbox,
      symbolSet,
      iconParts,
      STD2525
    );
  }
  return {
    icons: iconSIDC,
    m1: iconModifier1,
    m2: iconModifier2,
    bbox: iconBbox
  };
}
