import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/air.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function airmissile(
    sId,
    sIdm1,
    sIdm2,
    bbox,
    symbolSet,
    icn,
    _STD2525
  ) {
    //Air Missile
    if (symbolSet == "02") {
      sId["110000"] = [icn["AIR.MISSILE.ICON"]];

      sIdm1["01"] = [icn["AIR.MISSILE.M1.AIR"]];
      sIdm1["02"] = [icn["AIR.MISSILE.M1.SURFACE"]];
      sIdm1["03"] = [icn["AIR.MISSILE.M1.SUBSURFACE"]];
      sIdm1["04"] = [icn["AIR.MISSILE.M1.SPACE"]];
      sIdm1["05"] = [icn["AIR.MISSILE.M1.ANTI-BALLISTIC"]];
      sIdm1["06"] = [icn["AIR.MISSILE.M1.BALLISTIC"]];
      sIdm1["07"] = [icn["AIR.MISSILE.M1.CRUISE"]];
      sIdm1["08"] = [icn["AIR.MISSILE.M1.INTERCEPTOR"]];

      sIdm2["01"] = [icn["AIR.MISSILE.M2.AIR"]];
      sIdm2["02"] = [icn["AIR.MISSILE.M2.SURFACE"]];
      sIdm2["03"] = [icn["AIR.MISSILE.M2.SUBSURFACE"]];
      sIdm2["04"] = [icn["AIR.MISSILE.M2.SPACE"]];
      sIdm2["05"] = [icn["AIR.MISSILE.M2.LAUNCHED"]];
      sIdm2["06"] = [icn["AIR.MISSILE.M2.MISSILE"]];
      sIdm2["07"] = [icn["AIR.MISSILE.M2.PATRIOT"]];
      sIdm2["08"] = [icn["AIR.MISSILE.M2.STANDARD MISSILE - 2 (SM-2)"]];
      sIdm2["09"] = [icn["AIR.MISSILE.M2.STANDARD MISSILE - 6 (SM-6)"]];
      sIdm2["10"] = [icn["AIR.MISSILE.M2.EVOLVED SEA SPARROW MISSILE (ESSM)"]];
      sIdm2["11"] = [icn["AIR.MISSILE.M2.ROLLING AIRFRAME MISSILE (RAM)"]];
      sIdm2["12"] = [icn["AIR.MISSILE.M2.SHORT RANGE"]];
      sIdm2["13"] = [icn["AIR.MISSILE.M2.MEDIUM RANGE"]];
      sIdm2["14"] = [icn["AIR.MISSILE.M2.INTERMEDIATE RANGE"]];
      sIdm2["15"] = [icn["AIR.MISSILE.M2.LONG RANGE"]];
      sIdm2["16"] = [icn["AIR.MISSILE.M2.INTERCONTINENTAL"]];
    }
  }
};
