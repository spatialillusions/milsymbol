import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/ground.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function landcivilian(
    sId,
    sIdm1,
    sIdm2,
    bbox,
    symbolSet,
    icn,
    _STD2525
  ) {
    //Land civilian individuals/organization
    if (symbolSet == "11") {
      sId["110000"] = [icn["GR.I.CIVILIAN"]];
      sId["110100"] = [icn["GR.IC.ENVIRONMENTAL PROTECTION"]];
      sId["110200"] = [icn["GR.IC.GOVERNMENT ORGANIZATION"]];
      sId["110300"] = [icn["ST.IC.INDIVIDUAL"]];
      sId["110400"] = [icn["ST.IC.GROUP"]];
      sId["110500"] = [icn["ST.IC.KILLING VICTIM"]];
      sId["110600"] = [icn["ST.IC.KILLING VICTIMS"]];
      sId["110700"] = [
        icn["ST.IC.INDIVIDUAL"],
        icn["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]
      ]; //VICTIM OF AN ATTEMPTED CRIME
      sId["110800"] = [icn["ST.IC.SPY"]];
      sId["110900"] = [icn["ST.IC.COMPOSITE LOSS"]];
      sId["111000"] = [icn["GR.IC.EMERGENCY MEDICAL OPERATION"]];

      sIdm1["01"] = [icn["ST.M1.ASSASSINATION"]];
      sIdm1["02"] = [icn["ST.M1.EXECUTION (WRONGFUL KILLING)"]];
      sIdm1["03"] = [icn["ST.M1.MURDER"]];
      sIdm1["04"] = [icn["ST.M1.HIJACKING/HIJACKED"]];
      sIdm1["05"] = [icn["ST.M1.KIDNAPPING"]];
      sIdm1["06"] = [icn["ST.M1.PIRACY"]];
      sIdm1["07"] = [icn["ST.M1.RAPE"]];
      sIdm1["08"] = [icn["ST.M1.CIVILIAN"]];
      sIdm1["09"] = [icn["ST.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES"]];
      sIdm1["10"] = [icn["ST.M1.FOREIGN FIGHTERS"]];
      sIdm1["11"] = [icn["ST.M1.GANG"]];
      sIdm1["12"] = [icn["ST.M1.GOVERNMENT ORGANIZATION"]];
      sIdm1["13"] = [icn["ST.M1.LEADER"]];
      sIdm1["14"] = [icn["ST.M1.NONGOVERNMENTAL ORGANIZATION (NGO)"]];
      sIdm1["15"] = [icn["ST.M1.COERCED/IMPRESSED"]];
      sIdm1["16"] = [icn["ST.M1.WILLING RECRUIT"]];
      sIdm1["17"] = [icn["ST.M1.RELIGIOUS"]];
      sIdm1["18"] = [icn["ST.M1.TARGETED"]];
      sIdm1["19"] = [icn["ST.M1.TERRORIST"]];
      sIdm1["20"] = [icn["ST.M1.SPEAKER"]];
      sIdm1["21"] = [icn["ST.M1.ACCIDENT"]];
      sIdm1["22"] = [icn["ST.M1.COMBAT"]];
      sIdm1["23"] = [icn["ST.M1.OTHER"]];
      sIdm1["24"] = [icn["ST.M1.LOOT"]];
      sIdm1["25"] = [icn["GR.M1.HIJACKER"]];
      sIdm1["26"] = [icn["GR.M1.CYBERSPACE"]];

      sIdm2["01"] = [icn["ST.M2.LEADER OR LEADERSHIP"]];
      sIdm2["02"] = [icn["GR.M2.CYBERSPACE"]];
    }
  }
};
