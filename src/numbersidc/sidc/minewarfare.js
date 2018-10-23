import { ms } from "../../ms.js";
import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/subsurface.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function minewarfare(
    sId,
    sIdm1,
    sIdm2,
    bbox,
    symbolSet,
    icn,
    _STD2525
  ) {
    //Mine Warfare
    if (symbolSet == "36") {
      sId["110000"] = [icn["SU.IC.SEA MINE"]];
      sId["110100"] = [icn["SU.IC.SEA MINE - BOTTOM"]];
      sId["110200"] = [icn["SU.IC.SEA MINE - MOORED"]];
      sId["110300"] = [icn["SU.IC.SEA MINE - FLOATING"]];
      sId["110400"] = [icn["SU.IC.SEA MINE - RISING"]];
      sId["110500"] = [icn["SU.IC.SEA MINE (IN OTHER POSITION)"]];
      sId["110600"] = [icn["SU.IC.SEA MINE - KINGFISHER"]];
      sId["110700"] = [icn["SU.IC.SEA MINE - SMALL OBJECT"]];
      sId["110800"] = [icn["SU.IC.SEA MINE EXERCISE MINE"]];
      sId["110801"] = [icn["SU.IC.SEA MINE EXERCISE MINE - BOTTOM"]];
      sId["110802"] = [icn["SU.IC.SEA MINE EXERCISE MINE - MOORED"]];
      sId["110803"] = [icn["SU.IC.SEA MINE EXERCISE MINE - FLOATING"]];
      sId["110804"] = [icn["SU.IC.SEA MINE EXERCISE MINE - RISING"]];
      sId["110900"] = [icn["SU.IC.SEA MINE NEUTRALIZED"]];
      sId["110901"] = [icn["SU.IC.SEA MINE NEUTRALIZED - BOTTOM"]];
      sId["110902"] = [icn["SU.IC.SEA MINE NEUTRALIZED - MOORED"]];
      sId["110903"] = [icn["SU.IC.SEA MINE NEUTRALIZED - FLOATING"]];
      sId["110904"] = [icn["SU.IC.SEA MINE NEUTRALIZED - RISING"]];
      sId["110905"] = [icn["SU.IC.SEA MINE (IN OTHER POSITION) NEUTRALIZED"]];
      sId["120000"] = [icn["SU.IC.UNEXPLODED EXPLOSIVE ORDNANCE"]];
      sId["130000"] = [icn["SU.IC.SEA MINE DECOY"]];
      sId["130100"] = [icn["SU.IC.SEA MINE DECOY, BOTTOM/GROUND"]];
      sId["130200"] = [icn["SU.IC.SEA MINE DECOY, MOORED"]];
      sId["140000"] = []; //'Mine-Like Contact (MILCO)';
      sId["140100"] = [ms._scale(1.3, icn["SU.IC.SEA MINE MILCO"])];
      sId["140101"] = [
        ms._scale(1.3, [
          icn["SU.IC.SEA MINE MILCO"],
          icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]
        ])
      ];
      sId["140102"] = [
        ms._scale(1.3, [
          icn["SU.IC.SEA MINE MILCO"],
          icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]
        ])
      ];
      sId["140103"] = [
        ms._scale(1.3, [
          icn["SU.IC.SEA MINE MILCO"],
          icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]
        ])
      ];
      sId["140104"] = [
        ms._scale(1.3, [
          icn["SU.IC.SEA MINE MILCO"],
          icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]
        ])
      ];
      sId["140105"] = [
        ms._scale(1.3, [
          icn["SU.IC.SEA MINE MILCO"],
          icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]
        ])
      ];
      sId["140200"] = [icn["SU.IC.SEA MINE MILCO - BOTTOM"]];
      sId["140201"] = [
        icn["SU.IC.SEA MINE MILCO - BOTTOM"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]
      ];
      sId["140202"] = [
        icn["SU.IC.SEA MINE MILCO - BOTTOM"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]
      ];
      sId["140203"] = [
        icn["SU.IC.SEA MINE MILCO - BOTTOM"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]
      ];
      sId["140204"] = [
        icn["SU.IC.SEA MINE MILCO - BOTTOM"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]
      ];
      sId["140205"] = [
        icn["SU.IC.SEA MINE MILCO - BOTTOM"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]
      ];
      sId["140300"] = [icn["SU.IC.SEA MINE MILCO - MOORED"]];
      sId["140301"] = [
        icn["SU.IC.SEA MINE MILCO - MOORED"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]
      ];
      sId["140302"] = [
        icn["SU.IC.SEA MINE MILCO - MOORED"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]
      ];
      sId["140303"] = [
        icn["SU.IC.SEA MINE MILCO - MOORED"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]
      ];
      sId["140304"] = [
        icn["SU.IC.SEA MINE MILCO - MOORED"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]
      ];
      sId["140305"] = [
        icn["SU.IC.SEA MINE MILCO - MOORED"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]
      ];
      sId["140400"] = [icn["SU.IC.SEA MINE MILCO - FLOATING"]];
      sId["140401"] = [
        icn["SU.IC.SEA MINE MILCO - FLOATING"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]
      ];
      sId["140402"] = [
        icn["SU.IC.SEA MINE MILCO - FLOATING"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]
      ];
      sId["140403"] = [
        icn["SU.IC.SEA MINE MILCO - FLOATING"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]
      ];
      sId["140404"] = [
        icn["SU.IC.SEA MINE MILCO - FLOATING"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]
      ];
      sId["140405"] = [
        icn["SU.IC.SEA MINE MILCO - FLOATING"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]
      ];
      sId["150000"] = [ms._scale(1.3, icn["SU.IC.SEA MINE MILEC"])];
      sId["150100"] = [icn["SU.IC.SEA MINE MILEC - BOTTOM"]];
      sId["150200"] = [icn["SU.IC.SEA MINE MILEC - MOORED"]];
      sId["150300"] = [icn["SU.IC.SEA MINE MILEC - FLOATING"]];
      sId["160000"] = [
        ms._scale(1.3, icn["SU.IC.SEA MINE NEGATIVE REACQUISITION"])
      ];
      sId["160100"] = [icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - BOTTOM"]];
      sId["160200"] = [icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - MOORED"]];
      sId["160300"] = [icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - FLOATING"]];
      sId["170000"] = [
        ms._scale(1.3, icn["SU.IC.SEA MINE GENERAL OBSTRUCTOR"])
      ];
      sId["170100"] = [icn["SU.IC.SEA MINE GENERAL OBSTRUCTOR NEUTRALIZED"]];
      sId["180000"] = [ms._scale(1.3, icn["SU.IC.SEA MINE MINE ANCHOR"])];
      sId["190000"] = [
        ms._scale(1.3, icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"])
      ];
      sId["190100"] = [
        icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - BOTTOM"]
      ];
      sId["190200"] = [
        icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - MOORED"]
      ];
      sId["190300"] = [
        icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - FLOATING"]
      ];
      sId["200000"] = [icn["SU.IC.ENVIRONMENTAL REPORT LOCATION"]];
      sId["210000"] = [icn["SU.IC.DIVE REPORT LOCATION"]];
    }
  }
};
