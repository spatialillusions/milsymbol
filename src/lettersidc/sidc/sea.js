import { metadata as metadata_letter } from "../metadata.js";
import { geticons as getIcons_letter } from "../geticons.js";
import icons from "../../iconparts/sea.js";

export default {
  type: "letter",
  getMetadata: metadata_letter,
  getIcons: getIcons_letter,
  iconParts: [icons],
  icons: function sea(sId, bbox, icn, _STD2525) {
    // SEA ===========================================================================
    sId["S-S-------"] = [];
    sId["S-S-C-----"] = [icn["SE.IC.COMBATANT"]];
    sId["S-S-CL----"] = [icn["SE.IC.SURFACE COMBATANT, LINE"]];
    sId["S-S-CLCV--"] = [icn["SE.IC.CARRIER"]];
    sId["S-S-CLBB--"] = [icn["SE.IC.BATTLESHIP"]];
    sId["S-S-CLCC--"] = [icn["SE.IC.CRUISER"]];
    sId["S-S-CLDD--"] = [icn["SE.IC.DESTROYER"]];
    sId["S-S-CLFF--"] = [icn["SE.IC.FRIGATE"]];
    sId["S-S-CLLL--"] = [icn["SE.IC.LITTORAL COMBATANT SHIP"]];
    sId["S-S-CLLLAS"] = [
      icn["SE.IC.LITTORAL COMBATANT SHIP"],
      icn["SE.M2.ANTISUBMARINE WARFARE"]
    ];
    sId["S-S-CLLLMI"] = [
      icn["SE.IC.LITTORAL COMBATANT SHIP"],
      icn["SE.M2.MINE WARFARE"]
    ];
    sId["S-S-CLLLSU"] = [
      icn["SE.IC.LITTORAL COMBATANT SHIP"],
      icn["SE.M2.SURFACE WARFARE"]
    ];
    sId["S-S-CA----"] = [icn["SE.IC.AMPHIBIOUS WARFARE SHIP"]];
    sId["S-S-CALA--"] = [
      _STD2525
        ? icn["SE.IC.AMPHIBIOUS ASSAULT"]
        : icn["SE.IC.AMPHIBIOUS ASSAULT SHIP, GENERAL"]
    ];
    sId["S-S-CALS--"] = [icn["SE.IC.LANDING SHIP"]];
    sId["S-S-CALSM-"] = [icn["SE.IC.LANDING SHIP"], icn["SE.M2.MEDIUM"]];
    sId["S-S-CALST-"] = [icn["SE.IC.LANDING SHIP"], icn["SE.M2.TANK"]];
    sId["S-S-CALC--"] = [icn["SE.IC.LANDING CRAFT"]];
    sId["S-S-CM----"] = [icn["SE.IC.MINE WARFARE VESSEL"]];
    sId["S-S-CMML--"] = [icn["SE.IC.MINELAYER"]];
    sId["S-S-CMMS--"] = [icn["SE.IC.MINESWEEPER"]];
    sId["S-S-CMMH--"] = [icn["SE.IC.MINEHUNTER"]];
    sId["S-S-CMMA--"] = [icn["SE.IC.MINE COUNTER MEASURE SUPPORT SHIP"]];
    sId["S-S-CMMD--"] = [icn["SE.IC.MINESWEEPER, DRONE"]];
    sId["S-S-CP----"] = [icn["SE.IC.PATROL"]];
    sId["S-S-CPSB--"] = [icn["SE.IC.PATROL CRAFT"]];
    sId["S-S-CPSU--"] = [icn["SE.IC.PATROL ANTI SUBMARINE WARFARE"]];
    sId["S-S-CPSUM-"] = [icn["SE.IC.PATROL ANTISHIP MISSILE"]];
    sId["S-S-CPSUT-"] = [icn["SE.IC.PATROL TORPEDO"]];
    sId["S-S-CPSUG-"] = [icn["SE.IC.PATROL GUN"]];
    sId["S-S-CH----"] = [icn["SE.IC.HOVERCRAFT"]];
    //1.X.4.1.6  in 2525 listed as 1.X.4.1.7
    sId["S-S-G-----"] = [icn["SE.IC.NAVY TASK ORGANIZATION UNIT"]];
    //1.X.4.1.6.1  in 2525 listed as 1.X.4.1.7.1 Different SIDC listed let's support both
    sId["S-S-GF----"] = sId["S-S-GT----"] = [icn["SE.IC.NAVY TASK FORCE"]];
    //1.X.4.1.6.2  in 2525 listed as 1.X.4.1.7.2
    sId["S-S-GG----"] = [icn["SE.IC.NAVY TASK GROUP"]];
    //1.X.4.1.6.3  in 2525 listed as 1.X.4.1.7.3
    sId["S-S-GU----"] = [icn["SE.IC.NAVY TASK UNIT"]];
    sId["S-S-GE----"] = [icn["SE.IC.NAVY TASK ELEMENT"]];
    //1.X.4.1.6.5  in 2525 listed as 1.X.4.1.7.4
    sId["S-S-GC----"] = [icn["SE.IC.CONVOY"]];
    sId["S-S-CD----"] = [icn["SE.IC.SEA SURFACE DECOY"]];
    sId["S-S-CU----"] = [icn["SE.IC.UNMANNED SURFACE WATER VEHICLE"]];
    sId["S-S-CUM---"] = [
      icn["SE.IC.UNMANNED SURFACE WATER VEHICLE"],
      icn["SE.M1.MINE COUNTERMEASURES"]
    ];
    sId["S-S-CUS---"] = [
      icn["SE.IC.UNMANNED SURFACE WATER VEHICLE"],
      icn["SE.M1.ANTISUBMARINE WARFARE"]
    ];
    sId["S-S-CUN---"] = [
      icn["SE.IC.UNMANNED SURFACE WATER VEHICLE"],
      icn["SE.M1.SURFACE WARFARE"]
    ];
    sId["S-S-CUR---"] = [
      icn["SE.IC.UNMANNED SURFACE WATER VEHICLE"],
      icn["SE.M1.REMOTE MULTI-MISSION VEHIHLE"]
    ];
    sId["S-S-N-----"] = [icn["SE.IC.NONCOMBATANT"]];
    sId["S-S-NR----"] = [icn["SE.IC.AUXILIARY SHIP"]];
    sId["S-S-NRA---"] = [icn["SE.IC.AMMUNITION SHIP"]];
    sId["S-S-NRO---"] = [icn["SE.IC.OILER, REPLENISHMENT"]];
    //1.X.4.2.2 Different SIDC listed let's support both
    sId["S-S-NF----"] = sId["S-S-NFT---"] = [icn["SE.IC.TUG, OCEAN GOING"]];
    sId["S-S-NI----"] = [icn["SE.IC.INTELLIGENCE COLLECTOR"]];
    sId["S-S-NM----"] = [icn["SE.IC.HOSPITAL SHIP"]];
    sId["S-S-NS----"] = [icn["SE.IC.SERVICE CRAFT, YARD, GENERAL"]];
    sId["S-S-NR----"] = [icn["SE.IC.REPAIR SHIP"]];
    sId["S-S-NTS---"] = [icn["SE.IC.SUBMARINE TENDER"]];
    sId["S-S-NH----"] = [icn["SE.IC.HOVERCRAFT NONCOMBATANT"]];
    //sId["S-S-NS----"] = [icn["SE.IC.TUG, HARBOUR"]];
    sId["S-S-X-----"] = []; // N/A
    sId["S-S-XM----"] = [icn["SE.IC.MERCHANT SHIP, GENERAL"]];
    sId["S-S-XMC---"] = [icn["SE.IC.CARGO, GENERAL"]];
    sId["S-S-XME---"] = sId["S-S-XMR---"] = [icn["SE.IC.ROLL ON-ROLL OFF"]];
    sId["S-S-XMO---"] = [icn["SE.IC.OILER/TANKER"]];
    sId["S-S-XMT---"] = sId["S-S-XMTU--"] = [
      icn["SE.IC.TUG, OCEAN GOING CIVILIAN"]
    ];
    sId["S-S-XMF---"] = [icn["SE.IC.FERRY"]];
    sId["S-S-XMP---"] = [icn["SE.IC.PASSENGER SHIP"]];
    sId["S-S-XMH---"] = [icn["SE.IC.TRANSPORT SHIP, HAZARDOUS MATERIAL"]];
    sId["S-S-XMD---"] = [icn["SE.IC.DREDGE"]];
    sId["S-S-XMTO--"] = [icn["SE.IC.TOW"]];
    sId["S-S-XF----"] = [icn["SE.IC.FISHING VESSEL"]];
    sId["S-S-XFDF--"] = [icn["SE.IC.DRIFTER"]];
    sId["S-S-XFTR--"] = [icn["SE.IC.TRAWLER"]];
    sId["S-S-XFDR--"] = [icn["SE.IC.FISHING VESSEL DREDGE"]];
    sId["S-S-XR----"] = [icn["SE.IC.LEISURE CRAFT, SAILING BOAT"]];
    sId["S-S-XL----"] = [icn["SE.IC.LAW ENFORCEMENT VESSEL"]];
    sId["S-S-XH----"] = [icn["SE.IC.HOVERCRAFT CIVILIAN"]];
    sId["S-S-XA----"] = [icn["SE.IC.LEISURE CRAFT, MOTORIZED"]];
    sId["S-S-XAR---"] = [
      icn["SE.IC.LEISURE CRAFT, MOTORIZED, RIGID-HULL INFLATABLE BOAT"]
    ];
    sId["S-S-XAS---"] = [icn["SE.IC.LEISURE CRAFT, MOTORIZED, SPEEDBOAT"]];
    sId["S-S-XP----"] = [icn["SE.IC.LEISURE CRAFT, JETSKI"]];
    sId["S-S-O-----"] = [icn["SE.IC.OWN SHIP"]];
    sId["S-S-E-----"] = []; // N/A
    sId["S-S-ED----"] = [icn["SE.IC.DITCHED AIRCRAFT"]];
    sId["S-S-EP----"] = [icn["SE.IC.PERSON IN WATER"]];
    sId["S-S-EV----"] = [icn["SE.IC.DISTRESSED VESSEL"]];
    sId["S-S-Z-----"] = []; // N/A
    sId["S-S-ZM----"] = [icn["SE.IC.SEA MINELIKE"]];
    sId["S-S-ZN----"] = [icn["SE.IC.NAVIGATIONAL"]];
    sId["S-S-ZI----"] = [icn["SE.IC.ICEBERG"]];
  }
};
