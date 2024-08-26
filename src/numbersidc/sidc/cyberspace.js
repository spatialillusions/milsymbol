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

      sId["180000"] = [icn["CY.IC.NETWORK"]];
    }
  }
};
