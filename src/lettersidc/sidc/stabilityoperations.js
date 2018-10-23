import { metadata as metadata_letter } from "../metadata.js";
import { geticons as getIcons_letter } from "../geticons.js";
import icons from "../../iconparts/ground.js";

export default {
  type: "letter",
  getMetadata: metadata_letter,
  getIcons: getIcons_letter,
  iconParts: [icons],
  icons: function stabilityoperations(sId, bbox, icn, _STD2525) {
    //Adds support for 2525C Stability Operations
    sId["O-V-A-----"] = [icn["ST.IC.ARSON/FIRE"]];
    sId["O-V-M-----"] = [icn["ST.IC.KILLING VICTIM"]];
    sId["O-V-MA----"] = [icn["ST.IC.KILLING VICTIM"], icn["ST.M1.MURDER"]];
    sId["O-V-MB----"] = [
      icn["ST.IC.KILLING VICTIM"],
      icn["ST.M1.EXECUTION (WRONGFUL KILLING)"]
    ];
    sId["O-V-MC----"] = [
      icn["ST.IC.KILLING VICTIM"],
      icn["ST.M1.ASSASSINATION"]
    ];
    sId["O-V-B-----"] = [icn["ST.IC.BOMB"]];
    sId["O-V-Y-----"] = [icn["ST.IC.BOOBY TRAP"]];
    sId["O-V-D-----"] = [icn["ST.IC.DRIVE-BY SHOOTING"]];
    sId["O-V-S-----"] = [icn["ST.IC.SNIPING"]];
    sId["O-V-P-----"] = [icn["ST.IC.POISONING"]];
    sId["O-V-E-----"] = [icn["ST.IC.EXPLOSION"]];
    sId["O-V-EI----"] = [icn["ST.IC.EXPLOSION"], icn["ST.IC.IED"]];
    sId["O-L-B-----"] = [icn["ST.IC.BLACK LIST LOCATION"]];
    sId["O-L-G-----"] = [icn["ST.IC.GRAY LIST LOCATION"]];
    sId["O-L-W-----"] = [icn["ST.IC.WHITE LIST LOCATION"]];
    sId["O-L-M-----"] = [icn["ST.IC.MASS GRAVE LOCATION"]];
    sId["O-O-P-----"] = [icn["ST.IC.PATROLLING"]];
    sId["O-O-R-----"] = []; // N/A
    sId["O-O-RW----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.WILLING"]];
    sId["O-O-RC----"] = [
      icn["ST.IC.INDIVIDUAL"],
      icn["ST.M1.COERCED/IMPRESSED"]
    ];
    sId["O-O-D-----"] = [icn["ST.IC.DEMONSTRATION"]];
    sId["O-O-M-----"] = [icn["ST.IC.MINE LAYING"]];
    sId["O-O-Y-----"] = [icn["ST.IC.PSYCHOLOGICAL OPERATIONS"]];
    sId["O-O-YT----"] = [
      icn["ST.IC.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS"]
    ];
    sId["O-O-YW----"] = [
      icn["ST.IC.PSYCHOLOGICAL OPERATIONS"],
      icn["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"]
    ];
    sId["O-O-YH----"] = [
      icn["ST.IC.PSYCHOLOGICAL OPERATIONS"],
      icn["ST.M1.HOUSE-TO-HOUSE"]
    ];
    sId["O-O-F-----"] = [icn["ST.IC.SEARCHING"]];
    sId["O-O-S-----"] = [icn["ST.IC.SPY"]];
    sId["O-O-O-----"] = [icn["ST.IC.FOOD DISTRIBUTION"]];
    sId["O-O-E-----"] = [icn["ST.IC.EXTORTION"]];
    sId["O-O-H-----"] = []; // N/A
    sId["O-O-HT----"] = [
      icn["ST.IC.KNOWN INSURGENT VEHICLE"],
      icn["ST.M1.HIJACKING/HIJACKED"]
    ];
    sId["O-O-HA----"] = [
      icn["ST.IC.HIJACKING (AIRPLANE)"],
      icn["ST.M1.HIJACKING/HIJACKED"]
    ];
    sId["O-O-HV----"] = [
      icn["ST.IC.HIJACKING (BOAT)"],
      icn["ST.M1.HIJACKING/HIJACKED"]
    ];
    sId["O-O-K-----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.KIDNAPPING"]];
    sId["O-O-KA----"] = [
      icn["ST.IC.INDIVIDUAL"],
      icn["ST.M1.KIDNAPPING"],
      icn["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]
    ];
    sId["O-O-A-----"] = [icn["ST.IC.ARREST"]];
    sId["O-O-U-----"] = [icn["ST.IC.DRUG RELATED ACTIVITIES"]];
    sId["O-O-C-----"] = [icn["ST.IC.COMPOSITE LOSS"]];
    sId["O-O-CA----"] = [icn["ST.IC.COMPOSITE LOSS"], icn["ST.M1.COMBAT"]];
    sId["O-O-CB----"] = [icn["ST.IC.COMPOSITE LOSS"], icn["ST.M1.ACCIDENT"]];
    sId["O-O-CC----"] = [icn["ST.IC.COMPOSITE LOSS"], icn["ST.M1.OTHER"]];
    sId["O-I-R-----"] = [icn["ST.IC.GROUP"]];
    sId["O-I-S-----"] = [icn["ST.IC.SAFE HOUSE"]];
    sId["O-I-G-----"] = [icn["ST.IC.GRAFFITI"]];
    sId["O-I-V-----"] = [icn["ST.IC.VANDALISM/LOOT/RANSACK/PLUNDER/SACK"]];
    sId["O-I-I-----"] = [icn["ST.IC.KNOWN INSURGENT VEHICLE"]];
    sId["O-I-D-----"] = [
      icn["ST.IC.KNOWN INSURGENT VEHICLE"],
      icn["ST.M1.DRUG"]
    ];
    sId["O-I-F-----"] = [icn["ST.IC.INTERNAL SECURITY FORCE"]];
    sId["O-P-------"] = [icn["ST.IC.INDIVIDUAL"]];
    sId["O-P-A-----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.LEADER"]];
    sId["O-P-B-----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.TARGETED"]];
    sId["O-P-C-----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.TERRORIST"]];
    sId["O-G-------"] = [icn["ST.IC.GROUP"]];
    sId["O-G-A-----"] = [
      icn["ST.IC.GROUP"],
      icn["ST.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES"]
    ];
    sId["O-G-B-----"] = [
      icn["ST.IC.GROUP"],
      icn["ST.M1.NONGOVERNMENTAL ORGANIZATION (NGO)"]
    ];
    sId["O-G-C-----"] = [icn["ST.IC.GROUP"], icn["ST.M1.TERRORIST"]];
    sId["O-G-D-----"] = [icn["ST.IC.GROUP"], icn["ST.M1.RELIGIOUS"]];
    sId["O-G-E-----"] = [icn["ST.IC.GROUP"], icn["ST.M1.FOREIGN FIGHTERS"]];
    sId["O-G-F-----"] = [icn["ST.IC.GROUP"], icn["ST.M1.GANG"]];
    sId["O-R-------"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.RAPE"]];
    sId["O-R-A-----"] = [
      icn["ST.IC.INDIVIDUAL"],
      icn["ST.M1.RAPE"],
      icn["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]
    ];
  }
};
