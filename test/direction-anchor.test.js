import { ms, std2525c } from "../index.mjs";
import { landunit } from "../src/numbersidc.js";
ms.reset();
ms.addIcons(std2525c);
ms.addIcons(landunit);

// With directionStaffAnchor, ground symbols with a direction of movement
// indicator are anchored at the end of the staff the arrow is drawn on.
// The anchor is given relative to the frame center (the octagon anchor),
// which does not move when the arrow grows the symbol.
function anchor(sidc, options) {
  const symbol = new ms.Symbol(sidc, Object.assign({ size: 50 }, options));
  const a = symbol.getAnchor();
  const c = symbol.getOctagonAnchor();
  return [a.x - c.x, a.y - c.y].join(",");
}
const on = { directionStaffAnchor: true };

export default {
  "Direction staff anchor": {
    // Frame bottom at 150, staff 100 long: 150 units below the center, 75 px at size 50
    "Ground unit": [
      anchor("SFGPUCI-----", Object.assign({ direction: 45 }, on)),
      "0,75"
    ],
    "Ground unit, number SIDC": [
      anchor("10031000001211000000", Object.assign({ direction: 45 }, on)),
      "0,75"
    ],
    "Hostile ground equipment": [
      anchor("SHGPEVAT----", Object.assign({ direction: 270 }, on)),
      "0,86"
    ],
    "Off by default": [anchor("SFGPUCI-----", { direction: 45 }), "0,0"],
    "Ground unit without direction": [anchor("SFGPUCI-----", on), "0,0"],
    "Ground unit with speed leader": [
      anchor(
        "SFGPUCI-----",
        Object.assign({ direction: 45, speedLeader: 40 }, on)
      ),
      "0,0"
    ],
    "Headquarters keeps its staff anchor": [
      anchor("SFGPUCI---A-", Object.assign({ direction: 45 }, on)),
      anchor("SFGPUCI---A-", { direction: 45 })
    ],
    "Air (arrow from the center)": [
      anchor("SFAPMFF-----", Object.assign({ direction: 90 }, on)),
      "0,0"
    ]
  }
};
