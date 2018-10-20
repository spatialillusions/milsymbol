import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/space.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function spaceunit(sId, sIdm1, sIdm2, bbox, symbolSet, icn, _STD2525) {
    //Space
    if (symbolSet == "05") {
      sId["110000"] = [icn["SP.I.MILITARY"]];
      sId["110100"] = [icn["SP.I.SPACE VEHICLE"]];
      sId["110200"] = [icn["SP.I.RE-ENTRY VEHICLE"]];
      sId["110300"] = [icn["SPACE.PLANET LANDER"]];
      sId["110400"] = [icn["SP.I.ORBITER SHUTTLE"]];
      sId["110500"] = [icn["SP.I.CAPSULE"]];
      sId["110600"] = [icn["SP.I.SATELLITE, GENERAL"]];
      sId["110700"] = [icn["SP.I.SATELLITE"]];
      sId["110800"] = [icn["SP.I.ANTISATELLITE WEAPON"]];
      sId["110900"] = [icn["SP.I.ASTRONOMICAL SATELLITE"]];
      sId["111000"] = [icn["SP.I.BIOSATELLITE"]];
      sId["111100"] = [icn["SP.I.COMMUNICATIONS SATELLITE"]];
      sId["111200"] = [icn["SP.I.EARTH OBSERVATION SATELLITE"]];
      sId["111300"] = [icn["SP.I.MINIATURIZED SATELLITE"]];
      sId["111400"] = [icn["SP.I.NAVIGATIONAL SATELLITE"]];
      sId["111500"] = [icn["SP.I.RECONNAISSANCE SATELLITE"]];
      sId["111600"] = [icn["SP.I.SPACE STATION"]];
      sId["111700"] = [icn["SP.I.TETHERED SATELLITE"]];
      sId["111800"] = [icn["SP.I.WEATHER SATELLITE"]];
      sId["111900"] = [icn["SP.I.SPACE LAUNCH VEHICLE"]];

      sId["120000"] = [icn["SP.I.CIVILIAN"]];
      sId["120100"] = [icn["SP.I.CIVILIAN ORBITER SHUTTLE"]];
      sId["120200"] = [icn["SP.I.CIVILIAN CAPSULE"]];
      sId["120300"] = [icn["SP.I.CIVILIAN SATELLITE"]];
      sId["120400"] = [icn["SP.I.CIVILIAN ASTRONOMICAL SATELLITE"]];
      sId["120500"] = [icn["SP.I.CIVILIAN BIOSATELLITE"]];
      sId["120600"] = [icn["SP.I.CIVILIAN COMMUNICATIONS SATELLITE"]];
      sId["120700"] = [icn["SP.I.CIVILIAN EARTH OBSERVATION SATELLITE"]];
      sId["120800"] = [icn["SP.I.CIVILIAN MINIATURIZED SATELLITE"]];
      sId["120900"] = [icn["SP.I.CIVILIAN NAVIGATIONAL SATELLITE"]];
      sId["121000"] = [icn["SP.I.CIVILIAN SPACE STATION"]];
      sId["121100"] = [icn["SP.I.CIVILIAN TETHERED SATELLITE"]];
      sId["121200"] = [icn["SP.I.CIVILIAN WEATHER SATELLITE"]];
      sId["130000"] = [icn["SP.I.MANUAL TRACK"]];

      sIdm1["01"] = [icn["SP.M1.LOW EARTH ORBIT (LEO)"]];
      sIdm1["02"] = [icn["SP.M1.MEDIUM EARTH ORBIT (MEO)"]];
      sIdm1["03"] = [icn["SP.M1.HIGH EARTH ORBIT (HEO)"]];
      sIdm1["04"] = [icn["SP.M1.GEOSYNCHRONOUS ORBIT (GSO)"]];
      sIdm1["05"] = [icn["SP.M1.GEOSTATIONARY ORBIT (GO)"]];
      sIdm1["06"] = [icn["SP.M1.MOLNIYA ORBIT (MO)"]];
      sIdm1["07"] = [icn["SP.M1.CYBERSPACE"]];

      sIdm2["01"] = [icn["SP.M2.OPTICAL"]];
      sIdm2["02"] = [icn["SP.M2.INFRARED"]];
      sIdm2["03"] = [icn["SP.M2.RADAR"]];
      sIdm2["04"] = [icn["SP.M2.SIGNALS INTELLIGENCE (SIGINT)"]];
      sIdm2["05"] = [icn["SP.M2.CYBERSPACE"]];
    }
  }
};
