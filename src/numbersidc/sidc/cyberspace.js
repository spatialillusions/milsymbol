import { ms } from "../../ms.js";
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
    _STD2525,
    edition
  ) {
    //Adds support for Cyberspace
    if (symbolSet == "60") {
      sId["110000"] = [];
      sId["110100"] =
        edition == "D"
          ? [icn["CY.IC.COMMAND AND CONTROL (C2)"]]
          : [icn["CY.IC.COMBAT MISSION TEAM"]];
      sId["110200"] =
        edition == "D"
          ? [icn["CY.IC.HERDER"]]
          : [icn["CY.IC.NATIONAL MISSION TEAM"]];
      sId["110300"] =
        edition == "D"
          ? [icn["CY.IC.CALLBACK DOMAIN"]]
          : [icn["CY.IC.CYBER PROTECTION TEAM"]];
      sId["110400"] = edition == "D" ? [icn["CY.IC.ZOMBIE"]] : []; // Disused
      sId["110500"] = []; // Disused
      sId["110600"] = [icn["CY.IC.DEFENSIVE CYBERSPACE OPERATION"]];
      sId["110700"] = [icn["CY.IC.OFFENSIVE CYBERSPACE OPERATION"]];
      sId["110800"] = [icn["CY.IC.INTERNET SERVICE PROVIDER"]];
      sId["110900"] = [icn["CY.IC.SECURITY"]];
      sId["111000"] = [icn["CY.IC.OPERATIONS"]];

      sId["120000"] = edition == "D" ? [] : [icn["CY.IC.THREAT ACTOR"]];
      sId["120100"] = [icn["CY.IC.ADVANCED PERSISTENT THREAT (APT)"]];
      sId["120101"] = [icn["CY.IC.APT WITH C2"]];
      sId["120102"] = [icn["CY.IC.APT WITH SELF PROPAGATION"]];
      sId["120103"] = [icn["CY.IC.APT WITH C2 AND SELF PROPAGATION"]];
      sId["120104"] = [icn["CY.IC.APT OTHER"]];
      sId["120200"] =
        edition == "D"
          ? [icn["CY.IC.NON-ADVANCED PERSISTENT THREAT (NAPT)"]]
          : [icn["CY.IC.INSIDER"]];
      sId["120201"] = [icn["CY.IC.NAPT WITH C2"]];
      sId["120202"] = [icn["CY.IC.NAPT WITH SELF PROPAGATION"]];
      sId["120203"] = [icn["CY.IC.NAPT WITH C2 AND SELF PROPAGATION"]];
      sId["120204"] = [icn["CY.IC.NAPT OTHER"]];
      sId["130000"] = [];
      sId["130100"] =
        edition == "D" ? [icn["CY.IC.NORMAL"]] : [icn["CY.IC.FIREWALL"]];
      sId["130200"] =
        edition == "D"
          ? [icn["CY.IC.NETWORK OUTAGE"]]
          : [icn["CY.IC.FIRMWARE"]];
      sId["130300"] = [icn["CY.IC.UNKNOWN"]];
      sId["130400"] = [icn["CY.IC.IMPAIRED"]];

      sId["140000"] = edition == "D" ? [] : [icn["CY.IC.APPLICATION"]];
      sId["140100"] = [icn["CY.IC.CORE ROUTER"]];
      sId["140200"] = [icn["CY.IC.ROUTER TEXT"]];
      sId["140300"] =
        edition == "D"
          ? [icn["CY.IC.CROSS DOMAIN SOLUTION"]]
          : [icn["CY.IC.SEARCH ENGINE"]];
      sId["140400"] =
        edition == "D"
          ? [icn["CY.IC.MAIL SERVER"]]
          : [icn["CY.IC.SOCIAL MEDIA"]];
      sId["140500"] = [icn["CY.IC.WEB SERVER"]];
      sId["140600"] = [icn["CY.IC.DOMAIN SERVER"]];
      sId["140700"] = [icn["CY.IC.FILE SERVER"]];
      sId["140800"] = [icn["CY.IC.PEER-TO-PEER NODE"]];
      sId["140900"] = [icn["CY.IC.FIREWALL TEXT"]];
      sId["141000"] = [icn["CY.IC.SWITCH TEXT"]];
      sId["141100"] = [icn["CY.IC.HOST"]];
      sId["141200"] = [icn["CY.IC.VIRTUAL PRIVATE NETWORK (VPN)"]];
      sId["150000"] = [];
      sId["150100"] =
        edition == "D"
          ? [icn["CY.IC.DEPARTMENT OF DEFENSE (DOD)"]]
          : [icn["CY.IC.MALWARE"]];
      sId["150200"] =
        edition == "D" ? [icn["CY.IC.GOVERNMENT"]] : [icn["CY.IC.PHISIHNG"]];
      sId["150300"] =
        edition == "D"
          ? [icn["CY.IC.CONTRACTOR"]]
          : [icn["CY.IC.SPEAR PHISIHNG"]];
      sId["150400"] =
        edition == "D"
          ? [icn["CY.IC.SUPERVISORY CONTROL AND DATA ACQUISITION (SCADA)"]]
          : [icn["CY.IC.WHALE PHISHING"]];
      sId["150500"] = [icn["CY.IC.NON-GOVERNMENT"]];

      sId["160000"] = edition == "D" ? [] : [icn["CY.IC.DOCUMENT"]];
      sId["160100"] =
        edition == "D" ? [icn["CY.IC.INFECTION"]] : [icn["CY.IC.CRYPTO"]];
      sId["160200"] =
        edition == "D" ? [icn["CY.IC.DEGRADATION"]] : [icn["CY.IC.PERSONA"]];
      sId["160300"] = [icn["CY.IC.DATA SPOOFING"]];
      sId["160400"] = [icn["CY.IC.DATA MANIPULATION"]];
      sId["160500"] = [icn["CY.IC.EXFILTRATION"]];
      sId["160600"] = [icn["CY.IC.POWER OUTAGE"]];
      sId["160700"] = [icn["CY.IC.NETWORK OUTAGE"]];
      sId["160800"] = [icn["CY.IC.SERVICE OUTAGE"]];
      sId["160900"] = [icn["CY.IC.DEVICE OUTAGE"]];

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
  }
};
