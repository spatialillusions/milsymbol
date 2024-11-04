import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/ground.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function cyberspace(
    sId,
    sIdm1,
    sIdm2,
    bbox,
    symbolSet,
    icn,
    _STD2525
  ) {
    //Adds support for Cyberspace
    if (symbolSet == "60") {
      sId["110000"] = [];
      sId["110100"] = [icn["CY.IC.COMBAT MISSION TEAM"]];
      sId["110200"] = [icn["CY.IC.NATIONAL MISSION TEAM"]];
      sId["110300"] = [icn["CY.IC.CYBER PROTECTION TEAM"]];
      sId["110400"] = []; // Disused
      sId["110500"] = []; // Disused
      sId["110600"] = [icn["CY.IC.DEFENSIVE CYBERSPACE OPERATION"]];
      sId["110700"] = [icn["CY.IC.OFFENSIVE CYBERSPACE OPERATION"]];
      sId["110800"] = [icn["CY.IC.INTERNET SERVICE PROVIDER"]];
      sId["110900"] = [icn["CY.IC.SECURITY"]];
      sId["111000"] = [icn["CY.IC.OPERATIONS"]];

      sId["120000"] = [icn["CY.IC.THREAT ACTOR"]];
      sId["120200"] = [icn["CY.IC.INSIDER"]];

      sId["130000"] = [];
      sId["130100"] = [icn["CY.IC.FIREWALL"]];
      sId["130200"] = [icn["CY.IC.FIRMWARE"]];

      sId["140000"] = [icn["CY.IC.APPLICATION"]];

      sId["140300"] = [icn["CY.IC.SEARCH ENGINE"]];
      sId["140400"] = [icn["CY.IC.SOCIAL MEDIA"]];

      sId["150000"] = [];
      sId["150100"] = [icn["CY.IC.MALWARE"]];
      sId["150200"] = [icn["CY.IC.PHISIHNG"]];
      sId["150300"] = [icn["CY.IC.SPEAR PHISIHNG"]];
      sId["150400"] = [icn["CY.IC.WHALE PHISHING"]];

      sId["160000"] = [icn["CY.IC.DOCUMENT"]];
      sId["160100"] = [icn["CY.IC.CRYPTO"]];
      sId["160200"] = [icn["CY.IC.PERSONA"]];

      sId["170000"] = [];
      sId["170100"] = [icn["CY.IC.SERVER"]];
      sId["170200"] = [icn["CY.IC.WORKSTATION"]];
      sId["170300"] = [];
      sId["170301"] = [icn["CY.IC.MOBILE"]];
      sId["170302"] = [icn["CY.IC.TABLET"]];
      sId["170303"] = [icn["CY.IC.LAPTOP"]];
      sId["170304"] = [icn["CY.IC.HEALTH MONITOR"]];
      sId["170305"] = [icn["CY.IC.SMARTVEST"]];
      sId["170306"] = [icn["CY.IC.SMARTWATCH"]];
      sId["170307"] = [icn["CY.IC.WEARABLE"]];
      sId["170400"] = [icn["CY.IC.IOT"]];
      sId["170500"] = [icn["CY.IC.PRINTER"]];
      sId["170600"] = [icn["CY.IC.ROUTER"]];
      sId["170700"] = [icn["CY.IC.SWITCH"]];
      sId["180000"] = [icn["CY.IC.NETWORK"]];

      sIdm1["01"] = [icn["CY.M1.DEFENSIVE CYBERSPACE"]];
      sIdm1["02"] = [icn["CY.M1.OFFENSIVE CYBERSPACE"]];
      sIdm1["03"] = [icn["CY.M1.SOCIAL"]];
      sIdm1["04"] = [icn["CY.M1.WIRED"]];
      sIdm1["05"] = [icn["CY.M1.WIRELESS"]];
      sIdm1["06"] = [icn["CY.M1.RADIO FREQUENCY"]];
      sIdm1["07"] = [icn["CY.M1.OPERATING SYSTEM"]];
      sIdm1["08"] = [icn["CY.M1.CONTINUITY OF OPERATIONS"]];
      sIdm1["09"] = [icn["CY.M1.INTERNET SERVICE PROVIDER"]];
      sIdm1["10"] = [icn["CY.M1.FINANCE"]];
      sIdm1["11"] = [icn["CY.M1.OUT OF BAND"]];
      sIdm1["12"] = [icn["CY.M1.CLOUD"]];
      sIdm1["13"] = [icn["CY.M1.DATA"]];

      sIdm2["01"] = [icn["CY.M2.SECURED"]];
      sIdm2["02"] = [icn["CY.M2.OPEN"]];
      sIdm2["03"] = [icn["CY.M2.RESPONSE ACTIONS"]];
      sIdm2["04"] = []; // Icon not avialable
      sIdm2["05"] = [icn["CY.M2.INTERNAL DEFENSE MEASURES"]];
      sIdm2["06"] = [icn["CY.M2.ADVANCED PERSISTENT THREAT"]];
      sIdm2["07"] = [icn["CY.M2.NATION STATE"]];
      sIdm2["08"] = [icn["CY.M2.NATION STATE SPONSORED"]];
    }
  },
};
