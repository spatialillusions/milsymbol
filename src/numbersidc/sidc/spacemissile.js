import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/space.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function spacemissile(
    sId,
    sIdm1,
    sIdm2,
    bbox,
    symbolSet,
    icn,
    _STD2525
  ) {
    //Space Missile
    if (symbolSet == "06") {
      sId["110000"] = [icn["SPACE.MISSILE.ICON"]];

      sIdm1["01"] = [icn["SPACE.MISSILE.M1.BALLISTIC"]];
      sIdm1["02"] = [icn["SPACE.MISSILE.M1.SPACE"]];
      sIdm1["03"] = [icn["SPACE.MISSILE.M1.INTERCEPTOR"]];

      sIdm2["01"] = [icn["SPACE.MISSILE.M2.SHORT RANGE"]];
      sIdm2["02"] = [icn["SPACE.MISSILE.M2.MEDIUM RANGE"]];
      sIdm2["03"] = [icn["SPACE.MISSILE.M2.INTERMEDIATE RANGE"]];
      sIdm2["04"] = [icn["SPACE.MISSILE.M2.LONG RANGE"]];
      sIdm2["05"] = [icn["SPACE.MISSILE.M2.INTERCONTINENTAL"]];
      sIdm2["06"] = [icn["SPACE.MISSILE.M2.ARROW"]];
      sIdm2["07"] = [icn["SPACE.MISSILE.M2.GROUND-BASED INTERCEPTOR (GBI)"]];
      sIdm2["08"] = [icn["SPACE.MISSILE.M2.PATRIOT"]];
      sIdm2["09"] = [
        icn["SPACE.MISSILE.M2.STANDARD MISSILE - TERMINAL PHASE (SM-T)"]
      ];
      sIdm2["10"] = [icn["SPACE.MISSILE.M2.STANDARD MISSILE - 3 (SM-3)"]];
      sIdm2["11"] = [
        icn["SPACE.MISSILE.M2.TERMINAL HIGH-ALTITUDE AREA DEFENSE (THAAD)"]
      ];
      sIdm2["12"] = [icn["SPACE.MISSILE.M2.SPACE"]];
      sIdm2["13"] = [icn["SPACE.MISSILE.M2.CLOSE RANGE"]];
      sIdm2["14"] = [icn["SPACE.MISSILE.M2.DEBRIS"]];
      sIdm2["15"] = [icn["SPACE.MISSILE.M2.UNKNOWN"]];
    }
  }
};
