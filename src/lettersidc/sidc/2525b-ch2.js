import { ms } from "../../ms.js";
import { metadata as metadata_letter } from "../metadata.js";
ms._getMetadata.letter = metadata_letter;
import { geticons as getIcons_letter } from "../geticons.js";
ms._getIcons.letter = getIcons_letter;

import std2525bicons from "../../iconparts/2525b.js";
ms.addIconParts(std2525bicons);

export default {
  type: "letter",
  icons: function std2525b(sId, bbox, icn, _STD2525) {
    // These symbols are in 2525B but not in 2525C and because of this they need to be added
    // The icons are in iconparts/2525b.js

    sId["S-S-S-----"] = icn["2525B.STN"]; //WAR.SSUF.CBTT.STN
    sId["S-S-SP----"] = icn["2525B.STN.PKT"]; //WAR.SSUF.CBTT.STN.PKT
    sId["S-S-SA----"] = icn["2525B.STN.ASWSHP"]; //WAR.SSUF.CBTT.STN.ASWSHP
    sId["S-S-NN----"] = icn["2525B.NCBTT.STN"]; //WAR.SSUF.NCBTT.STN
    sId["S-S-NNR---"] = icn["2525B.STN.RSC"]; //WAR.SSUF.NCBTT.STN.RSC

    sId["S-U-SS----"] = icn["2525B.SUB.STN"]; //WAR.SBSUF.SUB.STN
    sId["S-U-SSA---"] = icn["2525B.ASWSUB"]; //WAR.SBSUF.SUB.STN.ASWSUB

    // Tactical points
    sId["G-O-SBWD--"] = icn["TP.WRECK, DANGEROUS"]; //TACGRP.OTH.SSUBSR.BTMRTN.WRKD
    bbox["G-O-SBXD--"] = { x1: 35, x2: 165, y1: 70, y2: 130 };
  }
};
