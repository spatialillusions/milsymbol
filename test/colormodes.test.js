import { ms } from "../index.mjs";
import { landunit } from "../src/numbersidc.js";
ms.reset();
ms.addIcons(landunit);

const suspectColor = ms.getColorMode("FrameColor").Suspect;
const suspectSymbol = new ms.Symbol("13051000001100000000", {
  fill: false,
  uniqueDesignation: "ALPHA",
});
const instructions = suspectSymbol.drawInstructions.flat(Infinity);
const suspectFrame = instructions.find(
  (instruction) => instruction.strokedasharray
);
const suspectIdentifier = instructions.find(
  (instruction) => instruction.type === "text" && instruction.text === "ALPHA"
);

export default {
  "Color modes": {
    "Suspect frame color uses valid CSS syntax": [
      suspectColor,
      "rgb(255, 188, 1)",
    ],
    "Unfilled 2525E suspect frame uses suspect color": [
      suspectFrame && suspectFrame.stroke,
      suspectColor,
    ],
    "Unfilled 2525E suspect identifier uses suspect color": [
      suspectIdentifier && suspectIdentifier.fill,
      suspectColor,
    ],
  },
};
