import { ms } from "../../ms.js";
import { metadata as metadata_letter } from "../metadata.js";
import { geticons as getIcons_letter } from "../geticons.js";
import icons from "../../iconparts/ground.js";
import icons_air from "../../iconparts/air.js";

export default {
  type: "letter",
  getMetadata: metadata_letter,
  getIcons: getIcons_letter,
  iconParts: [icons, icons_air],
  icons: function sof(sId, bbox, icn, _STD2525) {
    // SOF ===========================================================================
    sId["S-F-------"] = [icn["GR.IC.SPECIAL OPERATIONS FORCES"]];
    sId["S-F-A-----"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
    ];
    sId["S-F-AF----"] = [
      icn["AR.I.MILITARY FIXED WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
    ];
    sId["S-F-AFA---"] = [
      icn["AR.I.MILITARY FIXED WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["SOF.M2.ATTACK"]
    ];
    sId["S-F-AFK---"] = [
      icn["AR.I.MILITARY FIXED WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["SOF.M2.REFUEL"]
    ];
    sId["S-F-AFU---"] = [
      icn["AR.I.MILITARY FIXED WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["SOF.M2.UTILITY"]
    ];
    sId["S-F-AFUL--"] = [
      icn["AR.I.MILITARY FIXED WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["AIR.M2.LIGHT"]
    ];
    sId["S-F-AFUM--"] = [
      icn["AR.I.MILITARY FIXED WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["AIR.M2.MEDIUM"]
    ];
    sId["S-F-AFUH--"] = [
      icn["AR.I.MILITARY FIXED WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["AIR.M2.HEAVY"]
    ];
    sId["S-F-AV----"] = [
      icn["AR.I.MILITARY FIXED WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["SOF.M2.VSTOL"]
    ];
    sId["S-F-AH----"] = _STD2525
      ? [
          icn["GR.IC.AVIATION ROTARY WING"],
          icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
          icn["GR.IC.AVIATION ROTARY WING 2525C"]
        ]
      : [
          icn["GR.IC.AVIATION ROTARY WING"],
          icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
        ];
    sId["S-F-AHH---"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["SOF.M2.COMBAT SEARCH AND RESCUE"]
    ];
    sId["S-F-AHA---"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["SOF.M2.ATTACK"]
    ];
    sId["S-F-AHU---"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["SOF.M2.UTILITY"]
    ];
    sId["S-F-AHUL--"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["AIR.M2.LIGHT"]
    ];
    sId["S-F-AHUM--"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["AIR.M2.MEDIUM"]
    ];
    sId["S-F-AHUH--"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
      icn["AIR.M2.HEAVY"]
    ];
    sId["S-F-SN----"] = sId["S-F-N-----"] = [
      icn["GR.IC.NAVAL"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
    ];
    sId["S-F-SNS---"] = sId["S-F-NS----"] = [icn["GR.IC.SEA-AIR-LAND"]];
    sId["S-F-SNU---"] = sId["S-F-NU----"] = [
      icn["SOF.IC.UNDERWATER DEMOLITION TEAM"]
    ];
    sId["S-F-SNB---"] = sId["S-F-NB----"] = [
      icn["GR.IC.COMBATANT"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
    ];
    sId["S-F-SNN---"] = sId["S-F-NN----"] = [
      icn["GR.IC.SUBMARINE NUCLEAR PROPULSION"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
    ];
    sId["S-F-G-----"] = [
      icn["GR.IC.FF.INFANTRY"],
      icn["GR.IC.SPECIAL OPERATIONS FORCES"]
    ];
    sId["S-F-GS----"] = [icn["GR.IC.SPECIAL FORCES"]];
    sId["S-F-GR----"] = sId["S-F-GSR---"] = [
      icn["GR.IC.FF.INFANTRY"],
      icn["AIR.M1.RECONNAISSANCE"],
      icn["GR.M2.AIRBORNE"]
    ];
    sId["S-F-GP----"] = sId["S-F-GSP---"] = [
      icn["GR.EQ.PSYCHOLOGICAL OPERATIONS EQUIPMENT"]
    ];
    sId["S-F-GPA---"] = sId["S-F-GSPA--"] = [
      icn["GR.EQ.PSYCHOLOGICAL OPERATIONS EQUIPMENT"],
      ms._translate(0, -30, ms._scale(0.7, icn["AR.I.MILITARY FIXED WING"]))
    ];
    sId["S-F-GC----"] = sId["S-F-GCA---"] = [icn["GR.IC.CIVIL AFFAIRS"]];
    sId["S-F-GB----"] = sId["S-F-B-----"] = [
      icn["GR.IC.SPECIAL OPERATIONS FORCES"],
      icn["GR.M2.SUPPORT"]
    ];
  }
};
