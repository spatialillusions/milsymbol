import { metadata as metadata_letter } from "../metadata.js";
import { geticons as getIcons_letter } from "../geticons.js";
import icons from "../../iconparts/air.js";

export default {
  type: "letter",
  getMetadata: metadata_letter,
  getIcons: getIcons_letter,
  iconParts: [icons],
  icons: function air(sId, bbox, icn, _STD2525) {
    // AIR ===========================================================================
    sId["S-A-------"] = [];
    sId["S-A-M-----"] = [icn["AR.I.MILITARY"]];
    sId["S-A-MF----"] = [icn["AR.I.FF.MILITARY FIXED WING"]];
    sId["S-A-MFB---"] = [icn["AR.I.BOMBER"]];
    sId["S-A-MFF---"] = [icn["AR.I.FIGHTER"]];
    sId["S-A-MFFI--"] = [icn["AR.I.FIGHTER INTERCEPTOR"]];
    sId["S-A-MFT---"] = [icn["AR.I.TRAINER"]];
    sId["S-A-MFA---"] = [icn["AR.I.ATTACK/STRIKE"]];
    sId["S-A-MFL---"] = [icn["AR.I.VSTOL"]];
    sId["S-A-MFK---"] = [icn["AR.I.TANKER"]];
    sId["S-A-MFKB--"] = [icn["AR.I.TANKER"], icn["AIR.M1.BOOM-ONLY"]];
    sId["S-A-MFKD--"] = [icn["AR.I.TANKER"], icn["AIR.M1.DROUGE-ONLY"]];
    sId["S-A-MFC---"] = [icn["AR.I.CARGO"]];
    sId["S-A-MFCL--"] = [icn["AR.I.CARGO"], icn["AIR.M2.LIGHT"]];
    sId["S-A-MFCM--"] = [icn["AR.I.CARGO"], icn["AIR.M2.MEDIUM"]];

    sId["S-A-MFCH--"] = [icn["AR.I.CARGO"], icn["AIR.M2.HEAVY"]];
    sId["S-A-MFJ---"] = [icn["AR.I.JAMMER / ELECTRONIC COUNTER-MEASURES"]];
    sId["S-A-MFO---"] = [icn["AR.I.MEDICAL EVACUATION"]];
    sId["S-A-MFR---"] = [icn["AR.I.RECONNAISSANCE"]];
    sId["S-A-MFRW--"] = [icn["AR.I.AIRBORNE EARLY WARNING"]];
    sId["S-A-MFRZ--"] = [icn["AR.I.ELECTRONIC SUPPORT MEASURES"]];
    sId["S-A-MFRX--"] = _STD2525
      ? [icn["AR.I.2525 PHOTOGRAPHIC"]]
      : [icn["AR.I.RECONNAISSANCE"], icn["AIR.M2.PHOTOGRAPHIC"]];
    sId["S-A-MFP---"] = [icn["AR.I.PATROL"]];
    sId["S-A-MFPN--"] = [icn["AR.I.ANTISURFACE WARFARE"]];
    sId["S-A-MFPM--"] = [icn["AR.I.MINE COUNTERMEASURES"]];
    sId["S-A-MFU---"] = [icn["AR.I.UTILITY"]];
    sId["S-A-MFUL--"] = [icn["AR.I.UTILITY"], icn["AIR.M2.LIGHT"]];
    sId["S-A-MFUM--"] = [icn["AR.I.UTILITY"], icn["AIR.M2.MEDIUM"]];
    sId["S-A-MFUH--"] = [icn["AR.I.UTILITY"], icn["AIR.M2.HEAVY"]];
    sId["S-A-MFY---"] = [icn["AR.I.COMMUNICATIONS"]];
    sId["S-A-MFH---"] = [icn["AR.I.PERSONNEL RECOVERY"]];
    sId["S-A-MFD---"] = [icn["AR.I.AIRBORNE COMMAND POST"]];
    sId["S-A-MFQ---"] = [icn["AR.I.UNMANNED AERIAL VEHICLE"]];
    sId["S-A-MFQA--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.ATTACK"]
    ];
    sId["S-A-MFQB--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.BOMBER"]
    ];
    sId["S-A-MFQC--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.CARGO"]
    ];
    sId["S-A-MFQD--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.AIRBORNE COMMAND POST"]
    ];
    sId["S-A-MFQF--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.FIGHTER"]
    ];
    sId["S-A-MFQH--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.COMBAT SEARCH AND RESCUE"]
    ];
    sId["S-A-MFQJ--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES"]
    ];
    sId["S-A-MFQK--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.TANKER"]
    ];
    sId["S-A-MFQL--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.VSTOL"]
    ];
    sId["S-A-MFQM--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
    ];
    sId["S-A-MFQI--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.MINE COUNTERMEASURES"]
    ];
    sId["S-A-MFQN--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.ANTISURFACE WARFARE"]
    ];
    sId["S-A-MFQP--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.PATROL"]
    ];
    sId["S-A-MFQR--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.RECONNAISSANCE"]
    ];
    sId["S-A-MFQRW-"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.AIRBORNE EARLY WARNING"]
    ];
    sId["S-A-MFQRZ-"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.ELECTRONIC SURVEILLANCE MEASURES"]
    ];
    sId["S-A-MFQRX-"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.PHOTOGRAPHIC"]
    ];
    sId["S-A-MFQS--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.ANTISUBMARINE WARFARE"]
    ];
    sId["S-A-MFQT--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.TRAINER"]
    ];
    sId["S-A-MFQU--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.UTILITY"]
    ];
    sId["S-A-MFQY--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.COMMUNICATIONS"]
    ];
    sId["S-A-MFQO--"] = [
      icn["AR.I.UNMANNED AERIAL VEHICLE"],
      icn["AIR.M1.MEDEVAC"]
    ];
    sId["S-A-MFS---"] = [icn["AR.I.ANTISUBMARINE WARFARE"]];
    sId["S-A-MFM---"] = [icn["AR.I.SPECIAL OPERATIONS FORCES"]];
    sId["S-A-MH----"] = [icn["AR.I.MILITARY ROTARY WING"]];
    sId["S-A-MHA---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.ATTACK"]
    ];
    sId["S-A-MHS---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.ANTISUBMARINE WARFARE"]
    ];
    sId["S-A-MHU---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.UTILITY"]
    ];
    sId["S-A-MHUL--"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.UTILITY"],
      icn["AIR.M2.LIGHT"]
    ];
    sId["S-A-MHUM--"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.UTILITY"],
      icn["AIR.M2.MEDIUM"]
    ];
    sId["S-A-MHUH--"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.UTILITY"],
      icn["AIR.M2.HEAVY"]
    ];
    sId["S-A-MHI---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.MINE COUNTERMEASURES"]
    ];
    sId["S-A-MHH---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.COMBAT SEARCH AND RESCUE"]
    ];
    sId["S-A-MHR---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.RECONNAISSANCE"]
    ];
    sId["S-A-MHQ---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.UNMANNED AERIAL VEHICLE"]
    ];
    sId["S-A-MHC---"] = [icn["AR.I.MILITARY ROTARY WING"], icn["AIR.M1.CARGO"]];
    sId["S-A-MHCL--"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.CARGO"],
      icn["AIR.M2.LIGHT"]
    ];
    sId["S-A-MHCM--"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.CARGO"],
      icn["AIR.M2.MEDIUM"]
    ];
    sId["S-A-MHCH--"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.CARGO"],
      icn["AIR.M2.HEAVY"]
    ];
    sId["S-A-MHT---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.TRAINER"]
    ];
    sId["S-A-MHO---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.MEDEVAC"]
    ];
    sId["S-A-MHM---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
    ];
    sId["S-A-MHD---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.AIRBORNE COMMAND POST"]
    ];
    sId["S-A-MHK---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.TANKER"]
    ];
    sId["S-A-MHJ---"] = [
      icn["AR.I.MILITARY ROTARY WING"],
      icn["AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES"]
    ];
    sId["S-A-ML----"] = [icn["AR.I.FF.MILITARY BALLOON"]];
    sId["S-A-MV----"] = [icn["AR.I.VIP"]];
    sId["S-A-ME----"] = [icn["AR.I.ESCORT"]];
    sId["S-A-W-----"] = [icn["AIR.MISSILE.ICON"]];
    sId["S-A-WM----"] = [icn["AIR.MISSILE.ICON"]];
    sId["S-A-WMS---"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.SURFACE"],
      icn["AIR.MISSILE.M2.LAUNCHED"]
    ];
    sId["S-A-WMSS--"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.SURFACE"],
      icn["AIR.MISSILE.M2.SURFACE"]
    ];
    sId["S-A-WMSA--"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.SURFACE"],
      icn["AIR.MISSILE.M2.AIR"]
    ];
    sId["S-A-WMSU--"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.SURFACE"],
      icn["AIR.MISSILE.M2.SUBSURFACE"]
    ];
    sId["S-A-WMSB--"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.IC.ANTIBALLISTIC MISSILE"]
    ];
    sId["S-A-WMA---"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.AIR"],
      icn["AIR.MISSILE.M2.LAUNCHED"]
    ];
    sId["S-A-WMAS--"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.AIR"],
      icn["AIR.MISSILE.M2.SURFACE"]
    ];
    sId["S-A-WMAA--"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.AIR"],
      icn["AIR.MISSILE.M2.AIR"]
    ];
    sId["S-A-WMAP--"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.AIR"],
      icn["AIR.MISSILE.M2.SPACE"]
    ];
    sId["S-A-WMU---"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.SUBSURFACE"],
      icn["AIR.MISSILE.M2.SURFACE"]
    ];
    sId["S-A-WML---"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.LAND"],
      icn["AIR.MISSILE.M2.AIR"]
    ];
    sId["S-A-WMCM--"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.CRUISE"],
      icn["AIR.MISSILE.M2.MISSILE"]
    ];
    sId["S-A-WMB---"] = [
      icn["AIR.MISSILE.ICON"],
      icn["AIR.MISSILE.M1.BALLISTIC"],
      icn["AIR.MISSILE.M2.MISSILE"]
    ];
    sId["S-A-WB----"] = [icn["AIR.MISSILE.IC.BOMB"]];
    sId["S-A-WD----"] = [icn["AR.I.AIR DECOY"]];
    sId["S-A-C-----"] = [icn["AR.I.CIVILIAN"]];
    sId["S-A-CF----"] = [icn["AR.I.FF.CIVILIAN FIXED WING"]];
    sId["S-A-CH----"] = [icn["AR.I.FF.CIVILIAN ROTARY WING"]];
    sId["S-A-CL----"] = [icn["AR.I.FF.CIVILIAN BALLOON"]];
  }
};
