import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/signals-intelligence.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function signalsIntelligence(
    sId,
    sIdm1,
    sIdm2,
    bbox,
    symbolSet,
    icn,
    _STD2525
  ) {
    //Adds support for Signals Intelligence
    if (
      symbolSet == "50" ||
      symbolSet == "51" ||
      symbolSet == "52" ||
      symbolSet == "53" ||
      symbolSet == "54"
    ) {
      sId["110000"] = [];
      sId["110100"] = [icn["SI.IC.COMMUNICATIONS"]];
      sId["110200"] = [icn["SI.I.JAMMER / ELECTRONIC COUNTER-MEASURES"]];
      sId["110300"] = [icn["SI.IC.RADAR"]];

      //sIdm1['00'] = 'Unspecified';
      sIdm1["01"] = [icn["SI.M1.ANTI-AIRCRAFT FIRE CONTROL"]];
      sIdm1["02"] = [icn["SI.M1.AIRBORNE SEARCH AND BOMBING"]];
      sIdm1["03"] = [icn["SI.M1.AIRBORNE INTERCEPT"]];
      sIdm1["04"] = [icn["SI.M1.ALTIMETER"]];
      sIdm1["05"] = [icn["SI.M1.AIRBORNE RECONNAISSANCE AND MAPPING"]];
      sIdm1["06"] = [icn["SI.M1.AIR TRAFFIC CONTROL"]];
      sIdm1["07"] = [icn["SI.M1.BEACON TRANSPONDER (NOT IFF)"]];
      sIdm1["08"] = [icn["SI.M1.BATTLEFIELD SURVEILLANCE"]];
      sIdm1["09"] = [icn["SI.M1.CONTROLLED APPROACH"]];
      sIdm1["10"] = [icn["SI.M1.CONTROLLED INTERCEPT"]];
      sIdm1["11"] = [icn["SI.M1.CELLULAR/MOBILE"]];
      sIdm1["12"] = [icn["SI.M1.COASTAL SURVEILLANCE"]];
      sIdm1["13"] = [icn["SI.M1.DECOY/MIMIC"]];
      sIdm1["14"] = [icn["SI.M1.DATA TRANSMISSION"]];
      sIdm1["15"] = [icn["SI.M1.EARTH SURVEILLANCE"]];
      sIdm1["16"] = [icn["SI.M1.EARLY WARNING"]];
      sIdm1["17"] = [icn["SI.M1.FIRE CONTROL"]];
      sIdm1["18"] = [icn["SI.M1.GROUND MAPPING"]];
      sIdm1["19"] = [icn["SI.M1.HEIGHT FINDING"]];
      sIdm1["20"] = [icn["SI.M1.HARBOR SURVEILLANCE"]];
      sIdm1["21"] = [icn["SI.M1.IDENTIFICATION, FRIEND OR FOE (INTERROGATOR)"]];
      sIdm1["22"] = [icn["SI.M1.INSTRUMENT LANDING SYSTEM"]];
      sIdm1["23"] = [icn["SI.M1.IONOSPHERIC SOUNDING"]];
      sIdm1["24"] = [icn["SI.M1.IDENTIFICATION, FRIEND OR FOE (TRANSPONDER)"]];
      sIdm1["25"] = [icn["SI.M1.BARRAGE JAMMER"]];
      sIdm1["26"] = [icn["SI.M1.CLICK JAMMER"]];
      sIdm1["27"] = [icn["SI.M1.DECEPTIVE JAMMER"]];
      sIdm1["28"] = [icn["SI.M1.FREQUENCY SWEPT JAMMER"]];
      sIdm1["29"] = [icn["SI.M1.JAMMER (GENERAL)"]];
      sIdm1["30"] = [icn["SI.M1.NOISE JAMMER"]];
      sIdm1["31"] = [icn["SI.M1.PULSED JAMMER"]];
      sIdm1["32"] = [icn["SI.M1.REPEATER JAMMER"]];
      sIdm1["33"] = [icn["SI.M1.SPOT NOISE JAMMER"]];
      sIdm1["34"] = [icn["SI.M1.TRANSPONDER JAMMER"]];
      sIdm1["35"] = [icn["SI.M1.MISSILE ACQUISITION"]];
      sIdm1["36"] = [icn["SI.M1.MISSILE CONTROL"]];
      sIdm1["37"] = [icn["SI.M1.MISSILE DOWNLINK"]];
      sIdm1["38"] = [icn["SI.M1.METEOROLOGICAL"]];
      sIdm1["39"] = [icn["SI.M1.MULTI-FUNCTION"]];
      sIdm1["40"] = [icn["SI.M1.MISSILE GUIDANCE"]];
      sIdm1["41"] = [icn["SI.M1.MISSILE HOMING"]];
      sIdm1["42"] = [icn["SI.M1.MISSILE TRACKING"]];
      sIdm1["43"] = [icn["SI.M1.NAVIGATIONAL/GENERAL"]];
      sIdm1["44"] = [icn["SI.M1.NAVIGATIONAL/DISTANCE MEASURING EQUIPMENT"]];
      sIdm1["45"] = [icn["SI.M1.NAVIGATION/TERRAIN FOLLOWING"]];
      sIdm1["46"] = [icn["SI.M1.NAVIGATIONAL/WEATHER AVOIDANCE"]];
      sIdm1["47"] = [icn["SI.M1.OMNI-LINE OF SIGHT (LOS)"]];
      sIdm1["48"] = [icn["SI.M1.PROXIMITY USE"]];
      sIdm1["49"] = [icn["SI.M1.POINT-TO-POINT LINE OF SIGHT (LOS)"]];
      sIdm1["50"] = [icn["SI.M1.INSTRUMENTATION"]];
      sIdm1["51"] = [icn["SI.M1.RANGE ONLY"]];
      sIdm1["52"] = [icn["SI.M1.SONOBUOY"]];
      sIdm1["53"] = [icn["SI.M1.SATELLITE DOWNLINK"]];
      sIdm1["54"] = [icn["SI.M1.SPACE"]];
      sIdm1["55"] = [icn["SI.M1.SURFACE SEARCH"]];
      sIdm1["56"] = [icn["SI.M1.SHELL TRACKING"]];
      sIdm1["57"] = [icn["SI.M1.SATELLITE UPLINK"]];
      sIdm1["58"] = [icn["SI.M1.TARGET ACQUISITION"]];
      sIdm1["59"] = [icn["SI.M1.TARGET ILLUMINATION"]];
      sIdm1["60"] = [icn["SI.M1.TROPOSPHERIC SCATTER"]];
      sIdm1["61"] = [icn["SI.M1.TARGET TRACKING"]];
      sIdm1["62"] = [icn["SI.M1.UNKNOWN"]];
      sIdm1["63"] = [icn["SI.M1.VIDEO REMOTING"]];
      sIdm1["64"] = [icn["SI.M1.EXPERIMENTAL"]];
      sIdm1["65"] = [icn["SI.M1.CYBER"]];

      sIdm2["01"] = [icn["SI.M2.CYBER"]];
    }
  }
};
