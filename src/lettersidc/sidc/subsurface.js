import { metadata as metadata_letter } from "../metadata.js";
import { geticons as getIcons_letter } from "../geticons.js";
import icons from "../../iconparts/subsurface.js";

export default {
  type: "letter",
  getMetadata: metadata_letter,
  getIcons: getIcons_letter,
  iconParts: [icons],
  icons: function subsurface(sId, bbox, icn, _STD2525) {
    // SUBSURFACE ====================================================================
    sId["S-U-------"] = [];
    sId["S-U-S-----"] = [icn["SU.IC.SUBMARINE"]];
    sId["S-U-SF----"] = [icn["SU.IC.SUBMARINE, SURFACED"]];
    sId["S-U-SB----"] = [icn["SU.IC.SUBMARINE, BOTTOMED"]];
    sId["S-U-SR----"] = [icn["SU.IC.SUBMARINE"], icn["SU.M2.CERTSUB"]];
    sId["S-U-SX----"] = [icn["SU.IC.NON-SUBMARINE"]];
    sId["S-U-SN----"] = [icn["SU.IC.SUBMARINE NUCLEAR PROPULSION"]];
    sId["S-U-SNF---"] = [icn["SU.IC.SUBMARINE NUCLEAR PROPULSION, SURFACED"]];
    sId["S-U-SNA---"] = [
      icn["SU.IC.SUBMARINE NUCLEAR PROPULSION"],
      icn["SU.IC.SUBMARINE ATTACK (SSN)"]
    ];
    sId["S-U-SNM---"] = [
      icn["SU.IC.SUBMARINE NUCLEAR PROPULSION"],
      icn["SU.IC.SUBMARINE MISSILE (TYPE UNKNOWN)"]
    ];
    sId["S-U-SNG---"] = [
      icn["SU.IC.SUBMARINE NUCLEAR PROPULSION"],
      icn["SU.IC.SUBMARINE GUIDED MISSILE (SSGN)"]
    ];
    sId["S-U-SNB---"] = [
      icn["SU.IC.SUBMARINE NUCLEAR PROPULSION"],
      icn["SU.IC.SUBMARINE BALLISTIC MISSILE (SSBN)"]
    ];
    sId["S-U-SC----"] = [icn["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"]];
    sId["S-U-SCF---"] = [
      icn["SU.IC.SUBMARINE CONVENTIONAL PROPULSION, SURFACED"]
    ];
    sId["S-U-SCA---"] = [
      icn["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"],
      icn["SU.IC.SUBMARINE ATTACK (SSN)"]
    ];
    sId["S-U-SCM---"] = [
      icn["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"],
      icn["SU.IC.SUBMARINE MISSILE (TYPE UNKNOWN)"]
    ];
    sId["S-U-SCG---"] = [
      icn["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"],
      icn["SU.IC.SUBMARINE GUIDED MISSILE (SSGN)"]
    ];
    sId["S-U-SCB---"] = [
      icn["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"],
      icn["SU.IC.SUBMARINE BALLISTIC MISSILE (SSBN)"]
    ];
    sId["S-U-SO----"] = [icn["SU.IC.OTHER SUBMERSIBLE"]];
    sId["S-U-SOF---"] = [icn["SU.IC.OTHER SUBMERSIBLE, SURFACED"]];
    sId["S-U-SU----"] = [
      icn[
        "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"
      ]
    ];
    sId["S-U-SUM---"] = [
      icn[
        "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"
      ],
      icn["SU.M1.MINE COUNTERMEASURES"]
    ];
    sId["S-U-SUS---"] = [
      icn[
        "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"
      ],
      icn["SU.M1.ANTISUBMARINE WARFARE"]
    ];
    sId["S-U-SUN---"] = [
      icn[
        "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"
      ],
      icn["SU.M1.SURFACE WARFARE"]
    ];
    sId["S-U-S1----"] = [
      icn["SU.IC.SUBMARINE"],
      icn["SU.M2.POSSIBLE SUBMARINE - LOW 1"]
    ];
    sId["S-U-S2----"] = [
      icn["SU.IC.SUBMARINE"],
      icn["SU.M2.POSSIBLE SUBMARINE - LOW 2"]
    ];
    sId["S-U-S3----"] = [
      icn["SU.IC.SUBMARINE"],
      icn["SU.M2.POSSIBLE SUBMARINE - HIGH 3"]
    ];
    sId["S-U-S4----"] = [
      icn["SU.IC.SUBMARINE"],
      icn["SU.M2.POSSIBLE SUBMARINE - HIGH 4"]
    ];
    sId["S-U-SL----"] = [
      icn["SU.IC.SUBMARINE"],
      icn["SU.M2.PROBABLE SUBMARINE"]
    ];
    sId["S-U-SK----"] = [icn["SU.IC.SUBMARINE, SNORKELING"]];
    sId["S-U-W-----"] = [icn["SU.IC.UNDERWATER WEAPON"]];
    sId["S-U-WT----"] = [icn["SU.IC.TORPEDO"]];
    sId["S-U-WM----"] = [icn["SU.IC.SEA MINE"]];
    sId["S-U-WMD---"] = [icn["SU.IC.SEA MINE NEUTRALIZED"]];
    sId["S-U-WMG---"] = [icn["SU.IC.SEA MINE - BOTTOM"]];
    sId["S-U-WMGD--"] = [icn["SU.IC.SEA MINE NEUTRALIZED - BOTTOM"]];
    sId["S-U-WMGX--"] = [icn["SU.IC.SEA MINE EXERCISE MINE - BOTTOM"]];
    sId["S-U-WMGE--"] = [icn["SU.IC.SEA MINE MILEC - BOTTOM"]];
    sId["S-U-WMGC--"] = [icn["SU.IC.SEA MINE MILCO - BOTTOM"]];
    sId["S-U-WMGR--"] = [icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - BOTTOM"]];
    sId["S-U-WMGO--"] = [
      icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - BOTTOM"]
    ];
    sId["S-U-WMM---"] = [icn["SU.IC.SEA MINE - MOORED"]];
    sId["S-U-WMMD--"] = [icn["SU.IC.SEA MINE NEUTRALIZED - MOORED"]];
    sId["S-U-WMMX--"] = [icn["SU.IC.SEA MINE EXERCISE MINE - MOORED"]];
    sId["S-U-WMME--"] = [icn["SU.IC.SEA MINE MILEC - MOORED"]];
    sId["S-U-WMMC--"] = [icn["SU.IC.SEA MINE MILCO - MOORED"]];
    sId["S-U-WMMR--"] = [icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - MOORED"]];
    sId["S-U-WMMO--"] = [
      icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - MOORED"]
    ];
    sId["S-U-WMF---"] = [icn["SU.IC.SEA MINE - FLOATING"]];
    sId["S-U-WMFD--"] = [icn["SU.IC.SEA MINE NEUTRALIZED - FLOATING"]];
    sId["S-U-WMFX--"] = [icn["SU.IC.SEA MINE EXERCISE MINE - FLOATING"]];
    sId["S-U-WMFE--"] = [icn["SU.IC.SEA MINE MILEC - FLOATING"]];
    sId["S-U-WMFC--"] = [icn["SU.IC.SEA MINE MILCO - FLOATING"]];
    sId["S-U-WMFR--"] = [
      icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - FLOATING"]
    ];
    sId["S-U-WMFO--"] = [
      icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - FLOATING"]
    ];
    sId["S-U-WMO---"] = [icn["SU.IC.SEA MINE (IN OTHER POSITION)"]];
    sId["S-U-WMOD--"] = [icn["SU.IC.SEA MINE (IN OTHER POSITION) NEUTRALIZED"]];
    sId["S-U-WMX---"] = [icn["SU.IC.SEA MINE EXERCISE MINE"]];
    sId["S-U-WME---"] = [icn["SU.IC.SEA MINE MILEC"]];
    sId["S-U-WMA---"] = [icn["SU.IC.SEA MINE MINE ANCHOR"]];
    sId["S-U-WMC---"] = [icn["SU.IC.SEA MINE MILCO"]];
    sId["S-U-WMR---"] = [icn["SU.IC.SEA MINE NEGATIVE REACQUISITION"]];
    sId["S-U-WMB---"] = [icn["SU.IC.SEA MINE GENERAL OBSTRUCTOR"]];
    sId["S-U-WMBD--"] = [icn["SU.IC.SEA MINE GENERAL OBSTRUCTOR NEUTRALIZED"]];
    sId["S-U-WMN---"] = [icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"]];
    sId["S-U-WMS---"] = [icn["SU.IC.SEA MINE - RISING"]];
    sId["S-U-WMSX--"] = [icn["SU.IC.SEA MINE EXERCISE MINE - RISING"]];
    sId["S-U-WMSD--"] = [icn["SU.IC.SEA MINE NEUTRALIZED - RISING"]];
    sId["S-U-WV----"] = [
      icn[
        "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"
      ]
    ];
    sId["S-U-WD----"] = [icn["SU.IC.UNDERWATER DECOY"]];
    sId["S-U-WDM---"] = [icn["SU.IC.SEA MINE DECOY"]];
    sId["S-U-WDMG--"] = [icn["SU.IC.SEA MINE DECOY, BOTTOM/GROUND"]];
    sId["S-U-WDMM--"] = [icn["SU.IC.SEA MINE DECOY, MOORED"]];
    sId["S-U-N-----"] = [icn["SU.IC.NON-SUBMARINE"]];
    sId["S-U-ND----"] = [icn["SU.IC.DIVER, CIVILIAN"]];
    sId["S-U-NB----"] = []; // N/A
    sId["S-U-E-----"] = [icn["SU.IC.ENVIRONMENTAL REPORT LOCATION"]];
    sId["S-U-V-----"] = [icn["SU.IC.DIVE REPORT LOCATION"]];
    sId["S-U-X-----"] = [icn["SU.IC.UNEXPLODED EXPLOSIVE ORDNANCE"]];
    sId["S-U-NBS---"] = [icn["SU.IC.SEABED INSTALLATION/MANMADE"]];
    sId["S-U-NBR---"] = [icn["SU.IC.SEABED ROCK/STONE, OBSTACLE, OTHER"]];
    sId["S-U-NBW---"] = [icn["SU.IC.WRECK"]];
    sId["S-U-NM----"] = [icn["SU.IC.MARINE LIFE"]];
    sId["S-U-NA----"] = [icn["SU.IC.SEA ANOMALY"]];
  }
};
