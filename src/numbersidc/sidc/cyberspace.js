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
      sId["110400"] = [icn["CY.IC.NATION STATE CYBER THREAT ACTOR"]];
      sId["110500"] = [icn["CY.IC.NON NATION STATE CYBER THREAT ACTOR"]];
      /*
      //sId['120000'] = 'Infection';
      sId["120100"] = [icn["CY.IC.ADVANCED PERSISTENT THREAT (APT)"]];
      sId["120101"] = [icn["CY.IC.APT WITH C2"]];
      sId["120102"] = [icn["CY.IC.APT WITH SELF PROPAGATION"]];
      sId["120103"] = [icn["CY.IC.APT WITH C2 AND SELF PROPAGATION"]];
      sId["120104"] = [icn["CY.IC.APT OTHER"]];
      sId["120200"] = [icn["CY.IC.NON-ADVANCED PERSISTENT THREAT (NAPT)"]];
      sId["120201"] = [icn["CY.IC.NAPT WITH C2"]];
      sId["120202"] = [icn["CY.IC.NAPT WITH SELF PROPAGATION"]];
      sId["120203"] = [icn["CY.IC.NAPT WITH C2 AND SELF PROPAGATION"]];
      sId["120204"] = [icn["CY.IC.NAPT OTHER"]];
      //sId['130000'] = 'Health and Status';
      sId["130100"] = [icn["CY.IC.NORMAL"]];
      sId["130200"] = [icn["CY.IC.NETWORK OUTAGE"]];
      sId["130300"] = [icn["CY.IC.UNKNOWN"]];
      sId["130400"] = [icn["CY.IC.IMPAIRED"]];
      //sId['140000'] = 'Device Type';
      sId["140100"] = [icn["CY.IC.CORE ROUTER"]];
      sId["140200"] = [icn["CY.IC.ROUTER"]];
      sId["140300"] = [icn["CY.IC.CROSS DOMAIN SOLUTION"]];
      sId["140400"] = [icn["CY.IC.MAIL SERVER"]];
      sId["140500"] = [icn["CY.IC.WEB SERVER"]];
      sId["140600"] = [icn["CY.IC.DOMAIN SERVER"]];
      sId["140700"] = [icn["CY.IC.FILE SERVER"]];
      sId["140800"] = [icn["CY.IC.PEER-TO-PEER NODE"]];
      sId["140900"] = [icn["CY.IC.FIREW ALL"]];
      sId["141000"] = [icn["CY.IC.SWITCH"]];
      sId["141100"] = [icn["CY.IC.HOST"]];
      sId["141200"] = [icn["CY.IC.VIRTUAL PRIVATE NETWORK (VPN)"]];
      //sId['150000'] = 'Device Domain';
      sId["150100"] = [icn["CY.IC.DEPARTMENT OF DEFENSE (DOD)"]];
      sId["150200"] = [icn["CY.IC.GOVERNMENT"]];
      sId["150300"] = [icn["CY.IC.CONTRACTOR"]];
      sId["150400"] = [
        icn["CY.IC.SUPERVISORY CONTROL AND DATA ACQUISITION (SCADA)"]
      ];
      sId["150500"] = [icn["CY.IC.NON-GOVERNMENT"]];
      //sId['160000'] = 'Effect';
      sId["160100"] = [icn["CY.IC.INFECTION"]];
      sId["160200"] = [icn["CY.IC.DEGRADATION"]];
      sId["160300"] = [icn["CY.IC.DATA SPOOFING"]];
      sId["160400"] = [icn["CY.IC.DATA MANIPULATION"]];
      sId["160500"] = [icn["CY.IC.EXFILTRATION"]];
      sId["160600"] = [icn["CY.IC.POWER OUTAGE"]];
      sId["160700"] = [icn["CY.IC.NETWORK OUTAGE"]];
      sId["160800"] = [icn["CY.IC.SERVICE OUTAGE"]];
      sId["160900"] = [icn["CY.IC.DEVICE OUTAGE"]];
      */
    }
  }
};
