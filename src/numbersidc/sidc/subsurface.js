import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/subsurface.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function subsurface(
    sId,
    sIdm1,
    sIdm2,
    bbox,
    symbolSet,
    icn,
    _STD2525
  ) {
    //Subsurface
    if (symbolSet == "35") {
      sId["110000"] = [icn["SU.IC.MILITARY"]];
      sId["110100"] = [icn["SU.IC.SUBMARINE"]];
      sId["110101"] = [icn["SU.IC.SUBMARINE, SURFACED"]];
      sId["110102"] = [icn["SU.IC.SUBMARINE, SNORKELING"]];
      sId["110103"] = [icn["SU.IC.SUBMARINE, BOTTOMED"]];
      sId["110200"] = [icn["SU.IC.OTHER SUBMERSIBLE"]];
      sId["110300"] = [icn["SU.IC.NON-SUBMARINE"]];
      sId["110400"] = [
        icn[
          "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"
        ]
      ];
      sId["110500"] = [icn["SU.IC.DIVER, MILITARY"]];
      sId["120000"] = [icn["SU.IC.CIVILIAN"]];
      sId["120100"] = [icn["SU.IC.SUBMERSIBLE, CIVILIAN"]];
      sId["120200"] = [
        icn[
          "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV), CIVILIAN"
        ]
      ];
      sId["120300"] = [icn["SU.IC.DIVER, CIVILIAN"]];
      sId["130000"] = [icn["SU.IC.UNDERWATER WEAPON"]];
      sId["130100"] = [icn["SU.IC.TORPEDO"]];
      sId["130200"] = [icn["SU.IC.IMPROVISED EXPLOSIVE DEVICE (IED)"]];
      sId["130300"] = [icn["SU.IC.UNDERWATER DECOY DSymbol"]];
      sId["140000"] = [
        icn["SU.IC.ECHO TRACKER CLASSIFIER (ETC)/POSSIBLE CONTACT (POSCON)"]
      ];
      sId["150000"] = [icn["SU.IC.FUSED TRACK"]];
      sId["160000"] = [icn["SU.IC.MANUAL TRACK"]];

      sId["200000"] = [icn["SU.IC.SEABED INSTALLATION, MAN-MADE, MILITARY"]];
      sId["210000"] = [
        icn["SU.IC.SEABED INSTALLATION, MAN-MADE, NON-MILITARY"]
      ];

      sIdm1["01"] = [icn["SU.M1.ANTISUBMARINE WARFARE"]];
      sIdm1["02"] = [icn["SU.M1.AUXILIARY"]];
      sIdm1["03"] = [icn["SU.M1.COMMAND AND CONTROL"]];
      sIdm1["04"] = [icn["SU.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE"]];
      sIdm1["05"] = [icn["SU.M1.MINE COUNTERMEASURES"]];
      sIdm1["06"] = [icn["SU.M1.MINE WARFARE"]];
      sIdm1["07"] = [icn["SU.M1.SURFACE WARFARE"]];
      sIdm1["08"] = [icn["SU.M1.ATTACK"]];
      sIdm1["09"] = [icn["SU.M1.BALLISTIC MISSILE"]];
      sIdm1["10"] = [icn["SU.M1.GUIDED MISSILE"]];
      sIdm1["11"] = [icn["SU.M1.OTHER GUIDED MISSILES (POINT DEFENCE)"]];
      sIdm1["12"] = [icn["SU.M1.SPECIAL OPERATIONS FORCE"]];
      sIdm1["13"] = [icn["SU.M1.POSSIBLE SUBMARINE - LOW 1"]];
      sIdm1["14"] = [icn["SU.M1.POSSIBLE SUBMARINE - LOW 2"]];
      sIdm1["15"] = [icn["SU.M1.POSSIBLE SUBMARINE - HIGH 3"]];
      sIdm1["16"] = [icn["SU.M1.POSSIBLE SUBMARINE - HIGH 4"]];
      sIdm1["17"] = [icn["SU.M1.PROBABLE SUBMARINE"]];
      sIdm1["18"] = [icn["SU.M1.CERTAIN SUBMARINE"]];
      sIdm1["19"] = [icn["SU.M1.ANTI-TORPEDO TORPEDO"]];
      sIdm1["20"] = [icn["SU.M1.HIJACKING/HIJACKED"]];
      sIdm1["21"] = [icn["SU.M1.HIJACKER"]];
      sIdm1["22"] = [icn["SU.M1.CYBERSPACE"]];

      sIdm2["01"] = [icn["SU.M2.AIR INDEPENDENT PROPULSION"]];
      sIdm2["02"] = [icn["SU.M2.DIESEL PROPULSION"]];
      sIdm2["03"] = [icn["SU.M2.DIESEL - TYPE 1"]];
      sIdm2["04"] = [icn["SU.M2.DIESEL - TYPE 2"]];
      sIdm2["05"] = [icn["SU.M2.DIESEL - TYPE 3"]];
      sIdm2["06"] = [icn["SU.M2.NUCLEAR POWERED"]];
      sIdm2["07"] = [icn["SU.M2.NUCLEAR - TYPE 1"]];
      sIdm2["08"] = [icn["SU.M2.NUCLEAR - TYPE 2"]];
      sIdm2["09"] = [icn["SU.M2.NUCLEAR - TYPE 3"]];
      sIdm2["10"] = [icn["SU.M2.NUCLEAR - TYPE 4"]];
      sIdm2["11"] = [icn["SU.M2.NUCLEAR - TYPE 5"]];
      sIdm2["12"] = [icn["SU.M2.NUCLEAR - TYPE 6"]];
      sIdm2["13"] = [icn["SU.M2.NUCLEAR - TYPE 7"]];
      sIdm2["14"] = [icn["SU.M2.AUTONOMOUS CONTROL"]];
      sIdm2["15"] = [icn["SU.M2.REMOTELY PILOTED"]];
      sIdm2["16"] = [icn["SU.M2.EXPENDABLE"]];
      sIdm2["17"] = [icn["SU.M2.CYBERSPACE"]];
    }
  }
};
