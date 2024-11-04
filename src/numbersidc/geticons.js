export function geticons(ms, symbolSet, iconParts, STD2525) {
  const iconSIDC = {};
  const iconModifier1 = {};
  const iconModifier2 = {};
  const iconBbox = {};

  for (const i in ms._iconSIDC.number) {
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
    bbox: iconBbox,
  };
}
