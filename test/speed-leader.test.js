import { ms, std2525c } from "../index.mjs";
ms.reset();
ms.addIcons(std2525c);

// The speed leader extends from the center of the frame (MIL-STD-2525B-E),
// so it is drawn after the frame. Otherwise the frame fill hides the part
// inside the frame and the visible line is shorter than speedLeader.
function drawnAfterFrame(sidc, options) {
  const svg = new ms.Symbol(
    sidc,
    Object.assign({ size: 45, direction: 60 }, options)
  ).asSVG();
  const frame = svg.indexOf('fill="rgb(128,224,255)"');
  const line = svg.indexOf('d="M 100,100  l');
  if (frame == -1 || line == -1) return "missing frame or line";
  return line > frame;
}

export default {
  "Speed leader": {
    "Sea, drawn after the frame": [
      drawnAfterFrame("SFSPCLCC----", { speedLeader: 30 }),
      true
    ],
    "Air, drawn after the frame": [
      drawnAfterFrame("SFAPMF------", { speedLeader: 30 }),
      true
    ]
  }
};
