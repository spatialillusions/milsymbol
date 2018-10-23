import { metadata as metadata_letter } from "../metadata.js";
import { geticons as getIcons_letter } from "../geticons.js";
import signalsintelligence from "../../iconparts/signals-intelligence.js";

export default {
  type: "letter",
  getMetadata: metadata_letter,
  getIcons: getIcons_letter,
  iconParts: [signalsintelligence],
  icons: function signalsIntelligence(sId, bbox, icn, _STD2525) {
    //Adds support for 2525C Signals Intelligence
    sId["I-P-S-----"] = []; // N/A
    sId["I-P-SC----"] = []; // N/A
    sId["I-P-SCD---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.SIERRA"],
      icn["SI.M2.DELTA"],
      icn["SI.M3.SPACE"]
    ];
    sId["I-P-SR----"] = []; // N/A
    sId["I-P-SRD---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.DELTA"],
      icn["SI.M2.TANGO"],
      icn["SI.M3.SPACE"]
    ];
    sId["I-P-SRE---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.ECHO"],
      icn["SI.M2.SIERRA"],
      icn["SI.M3.SPACE"]
    ];
    sId["I-P-SRI---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.INDY"],
      icn["SI.M2.FOXTROT"],
      icn["SI.M3.SPACE"]
    ];
    sId["I-P-SRM---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.FOXTROT"],
      icn["SI.M3.SPACE"]
    ];
    sId["I-P-SRT---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.ALPHA"],
      icn["SI.M3.SPACE"]
    ];
    sId["I-P-SRS---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.SIERRA"],
      icn["SI.M2.PAPA"],
      icn["SI.M3.SPACE"]
    ];
    sId["I-P-SRU---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.UNIFORM"],
      icn["SI.M2.NOVEMBER"],
      icn["SI.M3.SPACE"]
    ];
    sId["I-A-S-----"] = []; // N/A
    sId["I-A-SC----"] = []; // N/A
    sId["I-A-SCC---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.CHARLIE"],
      icn["SI.M2.MIKE"]
    ];
    sId["I-A-SCO---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.OSCAR"],
      icn["SI.M2.LIMA"]
    ];
    sId["I-A-SCP---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.PAPA"],
      icn["SI.M2.PAPA"]
    ];
    sId["I-A-SCS---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.SIERRA"],
      icn["SI.M2.UNIFORM"]
    ];
    sId["I-A-SR----"] = []; // N/A
    sId["I-A-SRAI--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.ALPHA"],
      icn["SI.M2.INDY"]
    ];
    sId["I-A-SRAS--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.ALPHA"],
      icn["SI.M2.BRAVO"]
    ];
    sId["I-A-SRC---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.CHARLIE"],
      icn["SI.M2.INDY"]
    ];
    sId["I-A-SRD---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.DELTA"],
      icn["SI.M2.TANGO"]
    ];
    sId["I-A-SRE---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.ECHO"],
      icn["SI.M2.WHISKEY"]
    ];
    sId["I-A-SRF---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.FOXTROT"],
      icn["SI.M2.CHARLIE"]
    ];
    sId["I-A-SRI---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.INDY"],
      icn["SI.M2.FOXTROT"]
    ];
    sId["I-A-SRMA--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.ALPHA"]
    ];
    sId["I-A-SRMD--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.DELTA"]
    ];
    sId["I-A-SRMG--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.GOLF"]
    ];
    sId["I-A-SRMT--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.TANGO"]
    ];
    sId["I-A-SRMF--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.FOXTROT"]
    ];
    sId["I-A-SRTI--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.INDY"]
    ];
    sId["I-A-SRTA--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.ALPHA"]
    ];
    sId["I-A-SRTT--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.TANGO"]
    ];
    sId["I-A-SRU---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.UNIFORM"],
      icn["SI.M2.NOVEMBER"]
    ];
    sId["I-G-S-----"] = []; // N/A
    sId["I-G-SC----"] = []; // N/A
    sId["I-G-SCC---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.CHARLIE"],
      icn["SI.M2.MIKE"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SCO---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.OSCAR"],
      icn["SI.M2.LIMA"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SCP---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.PAPA"],
      icn["SI.M2.PAPA"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SCS---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.SIERRA"],
      icn["SI.M2.UNIFORM"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SCT---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.SIERRA"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SR----"] = []; // N/A
    sId["I-G-SRAT--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.ALPHA"],
      icn["SI.M2.TANGO"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRAA--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.ALPHA"],
      icn["SI.M2.ALPHA"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRB---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.BRAVO"],
      icn["SI.M2.SIERRA"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRCS--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.CHARLIE"],
      icn["SI.M2.SIERRA"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRCA--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.CHARLIE"],
      icn["SI.M2.ALPHA"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRD---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.DELTA"],
      icn["SI.M2.TANGO"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRE---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.ECHO"],
      icn["SI.M2.WHISKEY"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRF---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.FOXTROT"],
      icn["SI.M2.CHARLIE"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRH---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.HOTEL"],
      icn["SI.M2.FOXTROT"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRI---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.INDY"],
      icn["SI.M2.FOXTROT"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRMM--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.ECHO"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRMA--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.ALPHA"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRMG--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.GOLF"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRMT--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.TANGO"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRMF--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.FOXTROT"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRS---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.SIERRA"],
      icn["SI.M2.TANGO"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRTA--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.ALPHA"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRTI--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.INDY"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRTT--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.TANGO"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-G-SRU---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.UNIFORM"],
      icn["SI.M2.NOVEMBER"],
      icn["SI.M3.GROUND"]
    ];
    sId["I-S-S-----"] = []; // N/A
    sId["I-S-SC----"] = []; // N/A
    sId["I-S-SCC---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.CHARLIE"],
      icn["SI.M2.MIKE"]
    ];
    sId["I-S-SCO---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.OSCAR"],
      icn["SI.M2.LIMA"]
    ];
    sId["I-S-SCP---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.PAPA"],
      icn["SI.M2.PAPA"]
    ];
    sId["I-S-SCS---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.SIERRA"],
      icn["SI.M2.UNIFORM"]
    ];
    sId["I-S-SR----"] = []; // N/A
    sId["I-S-SRAT--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.ALPHA"],
      icn["SI.M2.TANGO"]
    ];
    sId["I-S-SRAA--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.ALPHA"],
      icn["SI.M2.ALPHA"]
    ];
    sId["I-S-SRCA--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.CHARLIE"],
      icn["SI.M2.ALPHA"]
    ];
    sId["I-S-SRCI--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.CHARLIE"],
      icn["SI.M2.INDY"]
    ];
    sId["I-S-SRD---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.DELTA"],
      icn["SI.M2.TANGO"]
    ];
    sId["I-S-SRE---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.ECHO"],
      icn["SI.M2.WHISKEY"]
    ];
    sId["I-S-SRF---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.FOXTROT"],
      icn["SI.M2.CHARLIE"]
    ];
    sId["I-S-SRH---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.HOTEL"],
      icn["SI.M2.FOXTROT"]
    ];
    sId["I-S-SRI---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.INDY"],
      icn["SI.M2.FOXTROT"]
    ];
    sId["I-S-SRMM--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.ECHO"]
    ];
    sId["I-S-SRMA--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.ALPHA"]
    ];
    sId["I-S-SRMG--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.GOLF"]
    ];
    sId["I-S-SRMT--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.TANGO"]
    ];
    sId["I-S-SRMF--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.FOXTROT"]
    ];
    sId["I-S-SRS---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.SIERRA"],
      icn["SI.M2.SIERRA"]
    ];
    sId["I-S-SRTA--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.ALPHA"]
    ];
    sId["I-S-SRTI--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.INDY"]
    ];
    sId["I-S-SRTT--"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.TANGO"]
    ];
    sId["I-S-SRU---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.UNIFORM"],
      icn["SI.M2.NOVEMBER"]
    ];
    sId["I-U-S-----"] = []; // N/A
    sId["I-U-SC----"] = []; // N/A
    sId["I-U-SCO---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.OSCAR"],
      icn["SI.M2.LIMA"]
    ];
    sId["I-U-SCP---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.PAPA"],
      icn["SI.M2.PAPA"]
    ];
    sId["I-U-SCS---"] = [
      icn["SI.IC.COMMUNICATIONS"],
      icn["SI.M1.SIERRA"],
      icn["SI.M2.UNIFORM"]
    ];
    sId["I-U-SR----"] = []; // N/A
    sId["I-U-SRD---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.DELTA"],
      icn["SI.M2.TANGO"]
    ];
    sId["I-U-SRE---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.ECHO"],
      icn["SI.M2.WHISKEY"]
    ];
    sId["I-U-SRM---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.MIKE"],
      icn["SI.M2.FOXTROT"]
    ];
    sId["I-U-SRS---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.SIERRA"],
      icn["SI.M2.SIERRA"]
    ];
    sId["I-U-SRT---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.TANGO"],
      icn["SI.M2.ALPHA"]
    ];
    sId["I-U-SRU---"] = [
      icn["SI.IC.RADAR"],
      icn["SI.M1.UNIFORM"],
      icn["SI.M2.NOVEMBER"]
    ];
  }
};
