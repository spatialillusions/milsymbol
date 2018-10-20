import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/air.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function air(sId, sIdm1, sIdm2, bbox, symbolSet, icn, _STD2525) {
    //Air
    if (symbolSet == "01") {
      sId["110000"] = [icn["AR.I.MILITARY"]];
      sId["110100"] = [icn["AR.I.FIXED-WING DSymbol"]];
      sId["110101"] = [icn["AR.I.MEDICAL EVACUATION"]];
      sId["110102"] = [icn["AR.I.ATTACK/STRIKE"]];
      sId["110103"] = [icn["AR.I.BOMBER"]];
      sId["110104"] = [icn["AR.I.FIGHTER"]];
      sId["110105"] = [icn["AR.I.FIGHTER/BOMBER"]];
      sId["110106"] = []; //{Reserved for Future Use}
      sId["110107"] = [icn["AR.I.CARGO"]];
      sId["110108"] = [icn["AR.I.JAMMER / ELECTRONIC COUNTER-MEASURES"]];
      sId["110109"] = [icn["AR.I.TANKER"]];
      sId["110110"] = [icn["AR.I.PATROL"]];
      sId["110111"] = [icn["AR.I.RECONNAISSANCE"]];
      sId["110112"] = [icn["AR.I.TRAINER"]];
      sId["110113"] = [icn["AR.I.UTILITY"]];
      sId["110114"] = [icn["AR.I.VSTOL"]];
      sId["110115"] = [icn["AR.I.AIRBORNE COMMAND POST"]];
      sId["110116"] = [icn["AR.I.AIRBORNE EARLY WARNING"]];
      sId["110117"] = [icn["AR.I.ANTISURFACE WARFARE"]];
      sId["110118"] = [icn["AR.I.ANTISUBMARINE WARFARE"]];
      sId["110119"] = [icn["AR.I.COMMUNICATIONS"]];
      sId["110120"] = [icn["AR.I.COMBAT SEARCH AND RESCUE"]];
      sId["110121"] = [icn["AR.I.ELECTRONIC SUPPORT"]];
      sId["110122"] = [icn["AR.I.GOVERNMENT"]];
      sId["110123"] = [icn["AR.I.MINE COUNTERMEASURES"]];
      sId["110124"] = [icn["AR.I.PERSONNEL RECOVERY DSymbol"]];
      sId["110125"] = [icn["AR.I.SEARCH AND RESCUE"]];
      sId["110126"] = [icn["AR.I.SPECIAL OPERATIONS FORCES"]];
      sId["110127"] = [icn["AR.I.ULTRA LIGHT"]];
      sId["110128"] = [icn["AR.I.PHOTOGRAPHIC RECONNAISSANCE"]];
      sId["110129"] = [icn["AR.I.VIP"]];
      sId["110130"] = [icn["AR.I.SUPRESSION OF ENEMY AIR DEFENCE"]];
      sId["110131"] = [icn["AR.I.PASSENGER"]];
      sId["110132"] = [icn["AR.I.ESCORT"]];
      sId["110133"] = [icn["AR.I.ELECTRONIC ATTACK (EA)"]];
      sId["110200"] = [icn["AR.I.MILITARY ROTARY WING"]];
      sId["110300"] = [icn["AR.I.UNMANNED AERIAL VEHICLE"]];
      sId["110400"] = [icn["AR.I.VERTICAL-TAKEOFF UAV (VT-UAV)"]];
      sId["110500"] = [icn["AR.I.MILITARY BALLOON"]];
      sId["110600"] = [icn["AR.I.MILITARY AIRSHIP"]];
      sId["110700"] = [icn["AR.I.TETHERED LIGHTER THAN AIR"]];
      sId["120000"] = [icn["AR.I.CIVILIAN"]];
      sId["120100"] = [icn["AR.I.CIVILIAN FIXED-WING DSymbol"]];
      sId["120200"] = [icn["AR.I.CIVILIAN ROTARY WING"]];
      sId["120300"] = [icn["AR.I.CIVILIAN UNMANNED AERIAL VEHICLE"]];
      sId["120400"] = [icn["AR.I.CIVILIAN BALLOON"]];
      sId["120500"] = [icn["AR.I.CIVILIAN AIRSHIP"]];
      sId["120600"] = [icn["AR.I.CIVILIAN TETHERED LIGHTER THAN AIR"]];
      sId["130000"] = [icn["AR.I.WEAPON"]];
      sId["130100"] = [icn["AR.I.BOMB"]];
      sId["130200"] = [icn["AR.I.UNDERWATER DECOY DSymbol"]];
      sId["140000"] = [icn["AR.I.MANUAL TRACK"]];

      sIdm1["01"] = [icn["AIR.M1.ATTACK"]];
      sIdm1["02"] = [icn["AIR.M1.BOMBER"]];
      sIdm1["03"] = [icn["AIR.M1.CARGO"]];
      sIdm1["04"] = [icn["AIR.M1.FIGHTER"]];
      sIdm1["05"] = [icn["AIR.M1.INTERCEPTOR"]];
      sIdm1["06"] = [icn["AIR.M1.TANKER"]];
      sIdm1["07"] = [icn["AIR.M1.UTILITY"]];
      sIdm1["08"] = [icn["AIR.M1.VSTOL"]];
      sIdm1["09"] = [icn["AIR.M1.PASSENGER"]];
      sIdm1["10"] = [icn["AIR.M1.ULTRA LIGHT"]];
      sIdm1["11"] = [icn["AIR.M1.AIRBORNE COMMAND POST"]];
      sIdm1["12"] = [icn["AIR.M1.AIRBORNE EARLY WARNING"]];
      sIdm1["13"] = [icn["AIR.M1.GOVERNMENT"]];
      sIdm1["14"] = [icn["AIR.M1.MEDEVAC"]];
      sIdm1["15"] = [icn["AIR.M1.ESCORT"]];
      sIdm1["16"] = [icn["AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES"]];
      sIdm1["17"] = [icn["AIR.M1.PATROL"]];
      sIdm1["18"] = [icn["AIR.M1.RECONNAISSANCE"]];
      sIdm1["19"] = [icn["AIR.M1.TRAINER"]];
      sIdm1["20"] = [icn["AIR.M1.PHOTOGRAPHIC"]];
      sIdm1["21"] = [icn["AIR.M1.PERSONNEL RECOVERY"]];
      sIdm1["22"] = [icn["AIR.M1.ANTISUBMARINE WARFARE"]];
      sIdm1["23"] = [icn["AIR.M1.COMMUNICATIONS"]];
      sIdm1["24"] = [icn["AIR.M1.ELECTRONIC SUPPORT (ES)"]];
      sIdm1["25"] = [icn["AIR.M1.MINE COUNTERMEASURES"]];
      sIdm1["26"] = [icn["AIR.M1.SEARCH AND RESCUE"]];
      sIdm1["27"] = [icn["AIR.M1.SPECIAL OPERATIONS FORCES"]];
      sIdm1["28"] = [icn["AIR.M1.SURFACE WARFARE"]];
      sIdm1["29"] = [icn["AIR.M1.VIP"]];
      sIdm1["30"] = [icn["AIR.M1.COMBAT SEARCH AND RESCUE"]];
      sIdm1["31"] = [icn["AIR.M1.SUPRESSION OF ENEMY AIR DEFENCE"]];
      sIdm1["32"] = [icn["AIR.M1.ANTISURFACE WARFARE"]];
      sIdm1["33"] = [icn["AIR.M1.FIGHTER/BOMBER"]];
      sIdm1["34"] = [icn["AIR.M1.INTENSIVE CARE"]];
      sIdm1["35"] = [icn["AIR.M1.ELECTRONIC ATTACK (EA)"]];
      sIdm1["36"] = [icn["AIR.M1.MULTIMISSION"]];
      sIdm1["37"] = [icn["AIR.M1.HIJACKING"]];
      sIdm1["38"] = [icn["AIR.M1.ASW HELO-LAMPS"]];
      sIdm1["39"] = [icn["AIR.M1.ASW HELO - SH-60R"]];
      sIdm1["40"] = [icn["AIR.M1.HIJACKER"]];
      sIdm1["41"] = [icn["AIR.M1.CYBERSPACE"]];

      sIdm2["01"] = [icn["AIR.M2.HEAVY"]];
      sIdm2["02"] = [icn["AIR.M2.MEDIUM"]];
      sIdm2["03"] = [icn["AIR.M2.LIGHT"]];
      sIdm2["04"] = [icn["AIR.M2.BOOM-ONLY"]];
      sIdm2["05"] = [icn["AIR.M2.DROUGE-ONLY"]];
      sIdm2["06"] = [icn["AIR.M2.BOOM AND DROUGE"]];
      sIdm2["07"] = [icn["AIR.M2.CLOSE RANGE"]];
      sIdm2["08"] = [icn["AIR.M2.SHORT RANGE"]];
      sIdm2["09"] = [icn["AIR.M2.MEDIUM RANGE"]];
      sIdm2["10"] = [icn["AIR.M2.LONG RANGE"]];
      sIdm2["11"] = [icn["AIR.M2.DOWNLINKED"]];
      sIdm2["12"] = [icn["AIR.M2.CYBERSPACE"]];
    }
  }
};
