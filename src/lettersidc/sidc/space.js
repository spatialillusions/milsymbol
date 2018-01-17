import { ms } from "../../ms.js";
import icons from "../../iconparts/space.js";
ms.addIconParts(icons);

export default function space(sId, bbox, icn, _STD2525) {
  // SPACE =========================================================================
  sId["S-P-------"] = [];
  sId["S-P-S-----"] = [icn["SP.I.FF.SATELLITE"]];
  sId["S-P-V-----"] = [icn["SP.I.FF.CREWED SPACE VEHICLE"]];
  sId["S-P-T-----"] = [icn["SP.I.FF.SPACE STATION"]];
  sId["S-P-L-----"] = [icn["SP.I.SPACE LAUNCH VEHICLE"]];
}
