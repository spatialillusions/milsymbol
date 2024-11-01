//import { ms } from "../ms.js";
export function geticons(ms, iconParts, STD2525) {
  const iconSIDC = {};
  const iconBbox = {};

  for (const i in ms._iconSIDC.letter) {
    if (!ms._iconSIDC.letter.hasOwnProperty(i)) continue;
    ms._iconSIDC.letter[i].call(this, iconSIDC, iconBbox, iconParts, STD2525);
  }
  return { icons: iconSIDC, bbox: iconBbox };
}
