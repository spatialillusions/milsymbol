import { ms } from "../index.mjs";
import { landunit, landinstallation } from "../src/numbersidc.js";
ms.reset();
ms.addIcons(landunit);
ms.addIcons(landinstallation);

// Regression test for #361: the echelon outline must use the same offset as
// the echelon geometry, otherwise it is drawn above the marker.
function echelonOffsets(sidc) {
  const symbol = new ms.Symbol(sidc, {
    size: 60,
    outlineWidth: 7,
    outlineColor: "white"
  });
  const [outline, geometry] = symbol.drawInstructions
    .flat(Infinity)
    .filter(
      (instruction) =>
        instruction &&
        instruction.type === "translate" &&
        JSON.stringify(instruction.draw).includes("milsymbol-echelon")
    );
  return [outline && outline.y, geometry ? geometry.y : "no echelon geometry"];
}

export default {
  "Echelon outline offset": {
    "Friendly regiment": echelonOffsets("10031000171211000000"),
    "Hostile regiment": echelonOffsets("10061000171211000000"),
    "Friendly team/crew": echelonOffsets("10031000111211000000"),
    "Friendly installation": echelonOffsets("10032000161112000000")
  }
};
