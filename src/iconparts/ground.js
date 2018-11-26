// TODO remove this import
import { ms } from "../ms.js";

import {
  defaultProperties,
  text,
  textm1,
  textm2
} from "./iconparts-functions.js";

export default function(
  iconParts,
  metadata,
  colors,
  STD2525,
  monoColor,
  alternateMedal
) {
  /*
  iconParts
  The existing object of icon parts
  
  metadata
  propterties object
  
  colors
  color object
  
  STD2525
  Is it 2525 then true, otherwise false
  
  alternateMedal
  true/false for sea mine stuff
  */

  var frame = metadata.frame;
  var affiliation = metadata.affiliation || "Friend";
  var baseGeometry = metadata.baseGeometry;
  var numberSIDC = metadata.numberSIDC;
  //var fillColor = colors.fillColor[affiliation];
  var iconColor = colors.iconColor[affiliation];
  var iconFillColor = colors.iconFillColor[affiliation];
  //  var none = colors.none[affiliation];
  var black = colors.black[affiliation];
  var white = colors.white[affiliation];

  //var numberSIDC = metadata.numberSIDC;
  var icn = {};

  icn["GR.IC.MILITARY"] = text("MIL");
  icn["GR.I.GOVERNMENT"] = text("GOV");
  icn["GR.IC.SUBMARINE NUCLEAR PROPULSION"] = {
    type: "path",
    d: "m 75,110 -10,-10 10,-10 0,-10 50,0 0,10 10,10 -10,10 z"
  };
  icn["GR.IC.FERRY"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      d: "m 75,100 0,-35 50,0 0,35 20,0 -15,35 -60,0 -15,-35 z"
    },
    {
      type: "text",
      stroke: false,
      x: 100,
      y: 115,
      fontsize: 30,
      text: STD2525 ? "FE" : "F"
    }
  ];
  icn["GR.IC.ADMINISTRATIVE"] = text("ADM");
  icn["GR.IC.MANUAL TRACK"] = text("MAN");
  icn["GR.IC.AIR DEFENSE CHAPARRAL"] = [
    {
      type: "path",
      fill: false,
      d:
        "m 85,80 30,0 c 5.54,0 10,4.46 10,10 l 0,5 c 0,5.54 -4.46,10 -10,10 l -30,0 c -5.54,0 -10,-4.46 -10,-10 l 0,-5 c 0,-5.54 4.46,-10 10,-10 z"
    },
    { type: "text", stroke: false, x: 100, y: 101, fontsize: 20, text: "C" }
  ];
  icn["GR.IC.AIR DEFENSE COMPOSITE"] = {
    type: "path",
    d:
      "M85,120 C85,110 115,110 115,120 M90,115 L90,90 C90,80 110,80 110,90 L110,115 M100,112 l0,-30",
    fill: false
  };
  icn["GR.IC.AIR DEFENSE H/MAD"] = text("HMD");
  icn["GR.IC.AIR DEFENSE H/MAD HAWK"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 101,
    fontsize: 20,
    text: "H"
  };
  icn["GR.IC.AIR DEFENSE H/MAD PATRIOT"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 101,
    fontsize: 20,
    text: "P"
  };
  icn["GR.IC.AIR DEFENSE MISSILE"] = {
    type: "path",
    d: "M90,120 L90,90 C90,80 110,80 110,90 L110,120",
    fill: false
  };
  icn["GR.IC.FLOATING CRAFT"] = {
    type: "path",
    d: "m 90,75 20,0 0,-10 -5,0 0,-10 -10,0 0,10 -5,0 z",
    stroke: false
  };
  icn["GR.IC.AIR AND MISSILE DEFENSE"] = text("MD");
  icn["GR.IC.MILITARY HISTORY"] = text("MH");
  icn["GR.IC.AIR DEFENSE TARGETING UNIT"] = [
    {
      type: "path",
      d: "M80,100 l20,-15 0,15 20,-15 M75,80 C75,100 85,115 105,115",
      fill: false
    },
    { type: "circle", cx: 75, cy: 110, r: 5 }
  ];
  icn["GR.IC.AIR DEFENSE THEATER MISSILE DEFENSE UNIT"] = text("TMD");
  icn["GR.IC.AIR DEFENSE SHORT RANGE"] = text("SRD");
  icn["GR.IC.AIR DEFENSE STINGER"] = [
    {
      type: "path",
      fill: false,
      d:
        "m 85,80 30,0 c 5.54,0 10,4.46 10,10 l 0,5 c 0,5.54 -4.46,10 -10,10 l -30,0 c -5.54,0 -10,-4.46 -10,-10 l 0,-5 c 0,-5.54 4.46,-10 10,-10 z"
    },
    { type: "text", stroke: false, x: 100, y: 101, fontsize: 20, text: "S" }
  ];
  icn["GR.IC.AIR DEFENSE VULCAN"] = [
    {
      type: "path",
      fill: false,
      d:
        "m 85,80 30,0 c 5.54,0 10,4.46 10,10 l 0,5 c 0,5.54 -4.46,10 -10,10 l -30,0 c -5.54,0 -10,-4.46 -10,-10 l 0,-5 c 0,-5.54 4.46,-10 10,-10 z"
    },
    { type: "text", stroke: false, x: 100, y: 101, fontsize: 20, text: "V" }
  ];
  icn["GR.IC.AIR DEFENSE GUN UNIT"] = {
    type: "path",
    d: "M100,80 L100,120 M92,90 l0,20 M108,90 l0,20",
    fill: false
  };
  icn["GR.IC.AIR TRAFFIC SERVICES"] = {
    type: "path",
    d:
      "m 100,95 0,25 m 7.5,-32.5 c 0,4.1 -3.4,7.5 -7.5,7.5 -4.1,0 -7.5,-3.4 -7.5,-7.5 0,-4.1 3.4,-7.5 7.5,-7.5 4.1,0 7.5,3.4 7.5,7.5 z M 60,85 l 40,15 40,-15 0,30 -40,-15 -40,15 z"
  };
  icn["GR.IC.AIRPORT OF DEBARKATION"] = [
    {
      type: "path",
      fill: false,
      d:
        "M80,70 l40,0 M80,80 l25,-25 M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19"
    },
    { type: "circle", cx: 100, cy: 100, r: 20, fill: false }
  ];
  icn["GR.IC.ALLIED COMMAND EUROPE RAPID REACTION CORPS (ARRC)"] = text("ARRC");
  icn["GR.IC.ALLIED COMMAND OPERATIONS"] = text("ACO");
  icn["GR.IC.AMMUNITION"] = {
    type: "path",
    d: "m 90,117 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0",
    fill: false
  };
  icn["GR.IC.ARMOUR"] = {
    type: "path",
    d: "M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z",
    fill: false
  };
  icn["GR.IC.ARMOR, WHEELED"] = [
    {
      type: "path",
      d: "m 120,80 c 25,0 25,30 0,30 l -40,0 C 55,110 55,80 80,80 Z",
      fill: false
    },
    { type: "circle", cx: 70, cy: 115, r: 5, fill: false },
    { type: "circle", cx: 100, cy: 115, r: 5, fill: false },
    { type: "circle", cx: 130, cy: 115, r: 5, fill: false }
  ];
  icn["GR.IC.AVIATION ROTARY WING"] = {
    type: "path",
    d: "M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z"
  };
  icn["GR.IC.AVIATION ROTARY WING 2525C"] = {
    type: "path",
    d: "M100,100 L100,140"
  };
  icn["GR.IC.AVIATION FIXED WING"] = {
    type: "path",
    d:
      "M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z"
  };
  icn["GR.IC.COMBATANT"] = [
    {
      type: "path",
      d:
        "m 86.9,110 c -3.6,2 -7.2,3.9 -10.8,5.9 2.1,2.9 6.7,3.9 10,2.1 2.6,-0.9 4.7,-3.8 3.1,-6.1 -0.8,-0.6 -1.5,-1.3 -2.3,-1.9 z m 26.3,0.1 c 3.6,2 7.2,3.9 10.8,5.9 -2.1,2.9 -6.7,3.9 -10,2.1 -2.6,-0.9 -4.7,-3.8 -3.1,-6.1 0.8,-0.6 1.5,-1.3 2.3,-1.9 z",
      fill: false
    },
    {
      type: "path",
      d:
        "m 112.9,110 c -5.6,-4 -11.3,-7.9 -16.1,-12.5 -4.2,-4.5 -7,-9.8 -9.2,-15.1 -0.8,4.4 -0.9,9.3 2.4,13.2 3.6,4.5 8.6,8.1 13.5,11.8 2.3,1.7 4.7,3.3 7.1,4.8 0.8,-0.7 1.5,-1.5 2.3,-2.2 m -25.7,0 c 5.6,-4 11.3,-7.9 16.1,-12.5 4.2,-4.5 7,-9.8 9.2,-15.1 0.8,4.4 0.9,9.3 -2.4,13.2 -3.6,4.5 -8.6,8.1 -13.5,11.8 -2.3,1.7 -4.7,3.3 -7.1,4.8 -0.8,-0.7 -1.5,-1.5 -2.3,-2.2",
      fill: white,
      strokewidth: 2
    }
  ];
  icn["GR.IC.AVIATION COMPOSITE"] = {
    type: "path",
    d:
      "m 100,100 15.7,7.9 c 11.8,0 11.8,-15.7 0,-15.7 z m 0,0 -15.7,-7.9 c -11.8,0 -11.8,15.7 0,15.7 z m -10,-20 10,20 -10,20 20,0 -10,-20 10,-20 z"
  };
  icn["GR.IC.AVIATION TACTICAL AIR CONTROL PARTY"] = text("TACP");
  icn["GR.IC.AVIATION FORWARD AIR CONTROLLER"] = text("FAC");
  icn["GR.IC.SPECIAL TROOPS"] = text("ST");
  icn["GR.IC.RANGER"] = text("RGR");
  icn["GR.IC.BAND"] = text("BAND");
  icn["GR.IC.ARMY MUSIC"] = {
    type: "path",
    d:
      "m 99.6,110.5 c -4.8,-1.4 -10.9,2.2 -10.4,7.7 1,2.5 6.2,2.4 9.6,-0.2 1.9,-1.5 2.7,-3.8 2.3,-6.9 l -0.1,-21.3 c 12.7,5.8 7.6,14.8 5.6,20.7 4.7,-4.9 5.8,-13.2 1.5,-17.9 -4.4,-4.6 -5,-7 -8.4,-13 z",
    stroke: false
  };
  icn[
    "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
  ] = text("ATF");
  icn["GR.IC.CBRN"] = [
    {
      type: "path",
      d: "m 80,120 c 0,-20 10,-32 50,-35 m -10,35 C 120,100 110,88 70,85",
      fill: false
    },
    { type: "circle", cx: 75, cy: 90, r: 6 },
    { type: "circle", cx: 125, cy: 90, r: 6 }
  ];
  icn[
    "GR.CHEMICAL, BIOLOGICAL, RADIOLOGICAL, NUCLEAR, AND HIGH-YIELD EXPLOSIVES"
  ] = [
    {
      type: "path",
      d: "m 90,80 20,0 10,20 -10,20 -20,0 -10,-20 z",
      fill: iconFillColor
    },
    text("E")
  ];
  icn["GR.IC.SPACE"] = [
    {
      type: "path",
      d:
        "m 100,80 -1.25,16.5 -4.2,-3.3 2.5,4.9 -5.5,1.7 -0.4,-0 0.2,0 -0.2,0 0.4,-0 5.4,2.3 -1.8,4.6 3.6,-3.5 1.3,16.5 1.3,-16.5 4.2,3.3 -2.5,-4.9 5.5,-1.7 0.4,0 -0.2,-0 0.2,0 -0.4,0 -5.3,-1.7 2.5,-4.6 -4,3.2 z",
      stroke: false
    }
  ];
  icn["GR.IC.CIVIL AFFAIRS"] = text("CA");
  icn["GR.IC.CIVIL-MILITARY-COOPERATION"] = {
    type: "path",
    d: "m 60,80 80,0 0,20 c 0,25 -80,25 -80,0 z",
    fill: false
  };
  icn["GR.I.CIVILIAN"] = text("CIV");
  icn["GR.I.CIVILIAN"].fill =
    STD2525 || numberSIDC ? iconFillColor : !frame ? iconFillColor : false;
  icn["GR.I.CIVILIAN"].stroke = black;
  icn["GR.I.CIVILIAN"].strokewidth = 3;
  icn["GR.IC.COMMAND AND CONTROL"] = text("C2");
  icn["GR.IC.COMBAT"] = text("CBT");
  icn["GR.IC.COMBAT SERVICE SUPPORT"] = text("CSS");
  icn["GR.IC.COMBAT SUPPORT"] = text("CS");
  icn["GR.IC.COMBAT SUPPORT (MANOEUVRE ENHANCEMENT)"] = {
    type: "path",
    d: "m 85,80 0,25 15,15 15,-15 0,-25 z"
  };
  icn["GR.IC.COMBINED ARMS"] = {
    type: "path",
    d:
      "m 70,80 60,40 m 0,-40 -60,40 m 55,-40 c 25,0 25,40 0,40 l -50,0 C 50,120 50,80 75,80 z",
    fill: false
  };
  icn["GR.IC.COUNTER-INTELLIGENCE"] = text("CI");
  icn["GR.IC.CRIMINAL INVESTIGATION DIVISION"] = text("CID");
  icn["GR.IC.DIVING"] = []; //TODO
  icn["GR.IC.DOG"] = text("DOG");
  icn["GR.IC.DRILLING"] = { type: "path", d: "m 85,80 5,40 20,0 5,-40 z" };
  icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"] = text("DEA");
  icn["GR.IC.ELECTRONIC RANGING"] = {
    type: "path",
    d: "M120,130 c-40,20 -80,-45 -40,-70 z M100,95 L140,75",
    fill: STD2525 ? iconFillColor : false
  };
  icn["GR.IC.ELECTRONIC WARFARE"] = text("EW");
  icn["GR.IC.EMERGENCY MEDICAL OPERATION"] = {
    type: "path",
    d:
      "m 90,60 0,22.7 -19.7,-11.3 -10,17.3 L 80,100 l -19.7,11.3 10,17.3 L 90,117.3 90,140 l 20,0 0,-22.7 19.7,11.3 10,-17.3 L 120,100 l 19.7,-11.3 -10,-17.3 L 110,82.7 110,60 90,60 z"
  };
  icn["GR.IC.ENGINEER"] = {
    type: "path",
    fill: false,
    d: "M60,120 L60,80 140,80 140,120 M100,80 L100,110"
  };
  icn["GR.IC.ENGINEER MECHANIZED"] = {
    type: "path",
    fill: false,
    d:
      "m 100,90 0,15 m -25,5 0,-20 50,0 0,20 m 0,-30 c 25,0 25,40 0,40 l -50,0 C 50,120 50,80 75,80 Z"
  };
  icn["GR.IC.ENGINEER UTILITY VEHICLE"] = {
    type: "path",
    fill: false,
    d:
      "m 100,100 0,10 m -15,5 0,-15 30,0 0,15 M 70,80 c 0,15 60,15 60,0 l 0,40 -60,0 z"
  };
  icn["GR.IC.ENVIRONMENTAL PROTECTION"] = {
    type: "path",
    d:
      "m 100,80 -10,15 5,0 -10,10 5,0 -10,10 15,0 0,5 10,0 0,-5 15,0 -10,-10 5,0 -10,-10 5,0 z",
    fill: false
  };
  icn["GR.IC.EXPLOSIVE ORDNANCE DISPOSAL"] = text("EOD");
  icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"] = text("FBI");
  icn["GR.IC.FIELD ARTILLERY"] = { type: "circle", cx: 100, cy: 100, r: 15 };
  icn["GR.IC.FIELD ARTILLERY OBSERVER"] = [
    { type: "circle", cx: 100, cy: 108, r: 5 },
    { type: "path", d: "m 80,120 30,-20 m -30,20 20,-40 20,40 z", fill: false }
  ];
  icn["GR.IC.FIELD CAMP CONSTRUCTION"] = [
    icn["GR.IC.ENGINEER"],
    { type: "text", stroke: false, x: 100, y: 77, fontsize: 25, text: "CAMP" }
  ];
  icn["GR.IC.FINANCE"] = {
    type: "path",
    d: "m 80,95 10,-10 20,0 10,10 m -40,0 0,20 40,0 0,-20 z",
    fill: false
  };
  icn["GR.IC.FIRE PROTECTION"] = {
    type: "path",
    d:
      "m 120,90 -5,5 -10,-10 5,-5 -20,0 5,5 -10,10 -5,-5 0,20 5,-5 10,10 -5,5 20,0 -5,-5 10,-10 5,5 z"
  };
  icn["GR.IC.FIXED WING MISO"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : false,
      stroke: black,
      d:
        "M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0"
    },
    {
      type: "path",
      d:
        "M 78.8 61.5 C 68.1 61.5 68.1 78.5 78.8 78.5 L 100 70 L 78.8 61.5 z M 100 70 L 121.3 78.5 C 131.9 78.5 131.9 61.5 121.3 61.5 L 100 70 z"
    }
  ];
  icn["GR.IC.GEOSPATIAL SUPPORT"] = text("GEO");
  icn["GR.IC.GOVERNMENT ORGANIZATION"] = text("GO");
  icn["GR.IC.INFORMATION OPERATIONS"] = text(
    STD2525 && !numberSIDC ? "IW" : "IO"
  );
  icn["GR.IC.INTERNATIONAL SECURITY ASSISTANCE FORCE (ISAF)"] = text("ISAF");
  icn["GR.IC.INTERROGATION"] = text("IPW");
  icn["GR.IC.JOINT FIRE SUPPORT"] = text("JFS");
  icn["GR.IC.JOINT INFORMATION BUREAU"] = text("JIB");
  icn["GR.IC.JOINT INTELLIGENCE CENTRE"] = text("JIC");
  icn["GR.IC.JUDGE ADVOCATE GENERAL"] = text("JAG");
  icn["GR.IC.LABOUR"] = {
    type: "path",
    d: "m 90,85 20,0 m -10,0 0,25 -10,0 10,10 10,-10 -10,0",
    fill: false
  };
  icn["GR.IC.LAUNDRY/BATH"] = {
    type: "path",
    d: "m 95,80 10,10 0,30 m 0,-30 -10,0 m 10,0 -10,10",
    fill: false
  };
  icn["GR.IC.LAW ENFORCEMENT"] = {
    type: "path",
    d:
      "M 100,118 C 76,109 85,95 82,82 c 6,7 12,7 18,0 6,7 12,7 18,0 -3,13 6,27 -18,36 z",
    fill: false
  };
  icn["GR.IC.LAW ENFORCEMENT VESSEL"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      d: "m 75,100 0,-35 50,0 0,35 20,0 -15,35 -60,0 -15,-35 z"
    },
    { type: "path", d: "m 135,100 -15,35 -10,0 15,-35 z" }
  ];
  icn["GR.IC.LIAISON"] = text("LO");
  icn["GR.IC.MAINTENANCE"] = {
    type: "path",
    d: "M70,90 c10,0 10,20 0,20 m10,-10 l40,0 m10,-10 c-10,0 -10,20 0,20",
    fill: false
  };
  icn["GR.IC.MATERIEL"] = text("MAT");
  icn["GR.IC.MEDICAL EVACUATION HELICOPTER"] = {
    type: "path",
    d:
      "M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z M95.5,80 l9,0 0,-9 9,0 0,-9 -9,0 0,-9 -9,0 0,9 -9,0 0,9 9,0 Z"
  };
  icn["GR.IC.MESSENGER"] = text("M");
  icn["GR.IC.METEOROLOGICAL"] = text("MET");
  icn["GR.IC.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)"] = {
    type: "path",
    d:
      "M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0"
  };
  icn["GR.IC.MILITARY INTELLIGENCE"] = text("MI");
  icn["GR.IC.MILITARY POLICE"] = text("MP");
  icn["GR.IC.MINE"] = {
    type: "path",
    d:
      "m 120,100 c 0,5.5 -9,10 -20,10 -11,0 -20,-4.5 -20,-10 0,-5.5 9,-10 20,-10 11,0 20,4.5 20,10 z m -5,-20 -30,40 m 0,-40 30,40 m -15,-40 0,40"
  };
  icn["GR.IC.MINE CLEARING"] = [
    icn["GR.IC.MINE"],
    { type: "text", stroke: false, x: 100, y: 77, fontsize: 25, text: "CLR" }
  ];
  icn["GR.IC.MINE LAUNCHING"] = [
    icn["GR.IC.MINE"],
    { type: "path", d: "m 80,125 0,10 40,0 0,-10 z" }
  ];
  icn["GR.IC.MINE LAYING"] = [
    icn["GR.IC.MINE"],
    { type: "path", d: "m 80,65 0,10 40,0 0,-10 z" }
  ];
  icn["GR.IC.MISSILE"] = {
    type: "path",
    d: "M90,120 L90,90 C90,80 110,80 110,90 L110,120 M100,120 L100,80",
    fill: false
  };
  icn["GR.IC.MISSILE.LIGHT"] = { type: "path", d: "M90,90 L110,90" };
  icn["GR.IC.MISSILE.MEDIUM"] = {
    type: "path",
    d: "M90,90 L110,90 M90,97 L110,97"
  };
  icn["GR.IC.MISSILE.HEAVY"] = {
    type: "path",
    d: "M90,90 L110,90 M90,97 L110,97 M90,104 L110,104"
  };
  icn["GR.IC.MORALE, WELFARE, AND RECREATION"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 30,
    text: "MWR"
  };
  icn["GR.IC.MORTAR"] = [
    { type: "circle", cx: 100, cy: 115, r: 5, fill: false },
    { type: "path", d: "M100,111 l0,-30 M90,90 l10,-10 10,10", fill: false }
  ];
  icn["GR.IC.MORTUARY AFFAIRS"] = {
    type: "path",
    d: "m 90,95 20,0 m -10,-10 0,30 m -15,-35 30,0 0,40 -30,0 z",
    fill: false
  };
  icn["GR.IC.MULTINATIONAL (MN)"] = text("MN");
  icn["GR.IC.NAVAL"] = [
    {
      type: "path",
      d:
        "m 105,85 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -20,5 30,0 m -15,0 0,30",
      fill: false
    },
    {
      type: "path",
      d:
        "M 82.3 102.6 C 82.3 113.9 84.2 115.9 84.2 115.9 L 86.5 114.1 C 90.2 117.8 94.8 120.8 99.9 120.9 L 100.5 120.9 L 101 120.9 C 106.2 120.8 110.8 117.8 114.4 114.1 L 116.7 115.9 C 116.7 115.9 118.6 113.9 118.7 102.6 C 113.9 106.8 108.9 109 108.9 109 L 110.9 110.7 C 110.9 110.7 106.8 115.2 100.5 115.2 L 100.5 115.2 C 100.5 115.2 100.4 115.2 100.4 115.2 C 94.2 115.2 90 110.7 90 110.7 L 92 109 C 92 109 87 106.8 82.3 102.6 z",
      stroke: false
    }
  ];
  icn["GR.IC.OBSERVER/OBSERVATION"] = {
    type: "path",
    d: "m 100,80 -25,40 50,0 z",
    fill: false
  };
  icn["GR.IC.ORDNANCE"] = {
    type: "path",
    d:
      "M 90,97 83,83 m 27,14 7,-14 M 95,95 90,81 m 15,14 5,-14 m 10,26.5 c 0,6.9 -9,12.5 -20,12.5 -11,0 -20,-5.6 -20,-12.5 0,-6.9 9,-12.5 20,-12.5 11,0 20,5.6 20,12.5 z",
    fill: false
  };
  icn["GR.IC.PERSONNEL SERVICES"] = text("PS");
  icn["GR.IC.PETROLEUM OIL LUBRICANTS"] = {
    type: "path",
    d: "m 100,119 0,-24 m 0,0 C 99,95 85,81 85,81 l 30,0 z",
    fill: false
  };
  icn["GR.IC.PIPELINE"] = {
    type: "path",
    d:
      "m 115,110 15,0 m -15,-15 15,0 m -45,15 -15,0 M 85,95 70,95 m 30,-15 0,10 -15,0 0,25 30,0 0,-25 -15,0 m -10,-10 20,0",
    fill: false
  };
  icn["GR.IC.POSTAL"] = {
    type: "path",
    d: "m 80,80 30,0 c -1.4,15.5 0,25 10,35 -20,0 -40,-20 -40,-35 z",
    fill: false
  };
  icn["GR.IC.PUBLIC AFFAIRS"] = text("PA");
  icn["GR.IC.PUBLIC AFFAIRS BROADCAST"] = text("BPAD");
  icn["GR.IC.PSYCHOLOGICAL OPERATIONS"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : false,
    stroke: black,
    d:
      "M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0"
  }; //TODO
  icn["GR.IC.QUARTERMASTER"] = {
    type: "path",
    fill: false,
    d:
      "m 115,95 c 0,15 15,15 15,0 0,-15 -15,-15 -15,0 z m 0,0 -45,0 0,10 10,0 0,-10"
  };
  icn["GR.IC.RADAR"] = {
    type: "path",
    d: "M72,95 l30,-25 0,25 30,-25 M70,70 c0,35 15,50 50,50",
    fill: false
  };
  icn["GR.IC.RADIO"] = [
    { type: "circle", cx: 100, cy: 130, r: 10, fill: false },
    {
      type: "path",
      fill: false,
      d: "M100,120 l0,-60 M70,70 l10,-10 10,10 10,-10 10,10 10,-10 10,10"
    }
  ];
  icn["GR.IC.RADIO RELAY"] = [
    { type: "circle", cx: 100, cy: 130, r: 10, fill: false },
    {
      type: "path",
      fill: false,
      d: "M100,120 l-15,-40 15,0 0,-20 M70,60 l60,0"
    }
  ];
  icn["GR.IC.RADIO TELETYPE CENTRE"] = [
    { type: "text", stroke: false, x: 100, y: 135, fontsize: 30, text: "C" },
    {
      type: "path",
      fill: false,
      d: "M100,140 l0,-80  M70,60 l60,0 M80,70 l40,0"
    }
  ];
  icn["GR.IC.RAILHEAD"] = [
    {
      type: "path",
      fill: false,
      d: "M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19"
    },
    { type: "circle", cx: 100, cy: 100, r: 20, fill: false },
    ms._translate(0, -50, [
      { type: "path", d: "M60,120 l80,0", fill: false },
      { type: "circle", fill: false, cx: 65, cy: 125, r: 5 },
      { type: "circle", fill: false, cx: 75, cy: 125, r: 5 },
      { type: "circle", fill: false, cx: 125, cy: 125, r: 5 },
      { type: "circle", fill: false, cx: 135, cy: 125, r: 5 }
    ])
  ];
  icn["GR.IC.RELIGIOUS SUPPORT"] = text("REL");
  icn["GR.IC.REPLACEMENT HOLDING UNIT"] = text("RHU");
  icn["GR.IC.SEA-AIR-LAND"] = text("SEAL");
  icn["GR.IC.SUPPORT"] = text("SPT");
  icn["GR.IC.ARMY FIELD SUPPORT"] = text("AFS");
  icn["GR.IC.CONTRACTING SERVICES"] = text("KS");
  icn["GR.IC.SEAPORT OF DEBARKATION"] = [
    {
      type: "path",
      fill: false,
      d: "M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19"
    },
    { type: "circle", cx: 100, cy: 100, r: 20, fill: false },
    ms._translate(0, -35, ms._scale(0.6, icn["GR.IC.NAVAL"]))
  ];
  icn["GR.IC.SECURITY"] = text("SEC");
  icn["GR.IC.SECURITY POLICE (AIR)"] = [
    text("SP"),
    {
      type: "path",
      d:
        "M 78.8 121.5 C 68.1 121.5 68.1 138.5 78.8 138.5 L 100 130 L 78.8 121.5 z M 100 130 L 121.3 138.5 C 131.9 138.5 131.9 121.5 121.3 121.5 L 100 130 z"
    }
  ];
  icn["GR.IC.SENSOR"] = {
    type: "path",
    d:
      "m 100,80 c 0,7.5 12.5,20 20,20 -7.5,0 -20,12.5 -20,20 0,-7.5 -12.5,-20 -20,-20 7.5,0 20,-12.5 20,-20 z"
  };
  icn["GR.IC.SHORE PATROL"] = text("SP");
  icn["GR.IC.SNIPER"] = {
    type: "path",
    fill: false,
    d:
      "M 60 85 L 90 85 L 60 85 z M 110 85 L 140 85 L 110 85 z M 100 90 L 100 115 L 100 90 z"
  };
  icn["GR.IC.PARACHUTE RIGGER"] = {
    type: "path",
    fill: false,
    d: "m 120,100 -20,20 -20,-20 m 0,0 c 0,-25 40,-25 40,0 l -40,0"
  };
  icn["GR.IC.SPECIAL FORCES"] = text("SF");
  icn["GR.IC.SPECIAL OPERATIONS FORCES"] = text("SOF");
  icn["GR.IC.SURVEILLANCE"] = { type: "path", d: "m 100,80 -25,40 50,0 z" };
  icn["GR.IC.SURVEY"] = [
    { type: "path", d: "M85,120 l15,-15 15,15 ", fill: false },
    {
      type: "path",
      d: "M100,105 l0,-25 20,12.5 z",
      fill: STD2525 ? iconFillColor : false
    }
  ];
  icn["GR.IC.SUSTAINMENT"] = text("SUST");
  icn["GR.IC.TELEPHONE SWITCH"] = [
    { type: "text", stroke: false, x: 100, y: 135, fontsize: 30, text: "C" },
    { type: "path", fill: false, d: "M100,140 l0,-80  M70,60 l60,0" }
  ];
  icn["GR.IC.TOPOGRAPHIC"] = {
    type: "path",
    fill: false,
    d: "m 85,105 c 10,5 20,5 30,0 m -15,-15 15,30 m -30,0 15,-30 0,-10"
  };
  icn["GR.IC.TRANSPORTATION"] = [
    {
      type: "path",
      fill: false,
      d: "M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19"
    },
    { type: "circle", cx: 100, cy: 100, r: 20, fill: false }
  ];
  icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"] = text("TSA");
  icn["GR.IC.UNMANNED SYSTEMS"] = {
    type: "path",
    d: "m 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z",
    stroke: false
  };
  icn["GR.IC.SEARCH AND RESCUE"] = text("SAR");
  icn["GR.IC.DIVER, CIVILIAN"] = {
    type: "path",
    fill: iconFillColor,
    d:
      "M 114.3,94 C 114.3,102.3 107.9,109 100,109 c -7.9,0 -14.2,-6.7 -14.2,-15 0,-8.3 6.4,-15 14.2,-15 7.9,0 14.3,6.7 14.3,15 z m 0,27 14.3,15 -57,0 14.3,-15 M 125.7,79 l 14.3,0 0,30 -14.3,0 m -51.3,0 -14.3,0 0,-30 14.3,0 m 54.2,15 c 0,16.6 -12.8,30 -28.5,30 -15.7,0 -28.5,-13.4 -28.5,-30 C 71.5,77.4 84.3,64 100,64 115.7,64 128.5,77.4 128.5,94 z"
  };
  icn["GR.IC.VIDEO IMAGERY"] = {
    type: "path",
    fill: false,
    d: "m 140,110 -26,0 m 7,-20 19,0 m -15,-10 -65,0 0,40 50,0 z m 15,5 0,30"
  };
  icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"] = text("USSS");
  icn["GR.IC.WATER"] = {
    type: "path",
    d: "m 65,90 50,0 c 10,0 20,10 20,20 m -40,-30 20,0 m -10,0 0,10",
    fill: false
  };
  icn["GR.IC.WATER PURIFICATION"] = [
    icn["GR.IC.WATER"],
    { type: "text", stroke: false, x: 90, y: 110, fontsize: 20, text: "PURE" }
  ];
  icn["GR.IC.FF.AIR ASSAULT WITH ORGANIC LIFT"] = {
    Unknown: {
      type: "path",
      d: "M35,120 L 90,120 l10,10 10,-10 L165,120",
      fill: false
    },
    Friend: {
      type: "path",
      d: "M25,120 L 90,120 l10,10 10,-10 L175,120",
      fill: false
    },
    Neutral: {
      type: "path",
      d: "M45,120 L 90,120 l10,10 10,-10 L155,120",
      fill: false
    },
    Hostile: {
      type: "path",
      d: "M50,120 L 90,120 l10,10 10,-10 L150,120",
      fill: false
    }
  }[affiliation];
  icn["GR.IC.FF.AIR DEFENCE"] = {
    Unknown: {
      type: "path",
      d: "m 55,135 c 10,-20 80,-20 90,0",
      fill: false
    },
    Friend: { type: "path", d: "M25,150 C25,110 175,110 175,150", fill: false },
    Neutral: {
      type: "path",
      d: "M45,150 C45,110 155,110 155,150",
      fill: false
    },
    Hostile: { type: "path", d: "M70,140 C70,115 130,115 130,140", fill: false }
  }[affiliation];
  icn["GR.IC.FF.AIR AND NAVAL GUNFIRE LIAISON COMPANY"] = []; //TODO
  icn["GR.IC.FF.AMPHIBIOUS"] = {
    Unknown: {
      type: "path",
      d:
        "m 30,95 c 10,0 0,15 13.5,15 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 13.5,0 3.5,-15 13.5,-15",
      fill: false
    },
    Friend: {
      type: "path",
      d:
        "m 25,90 c 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 20,-20",
      fill: false
    },
    Neutral: {
      type: "path",
      d:
        "m 45,110 c 18.8,0 0,-20 18,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18,20",
      fill: false
    },
    Hostile: {
      type: "path",
      d:
        "m 32,95 c 10,0 0,15 11.5,15 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 11.5,0 1.5,-15 11.5,-15",
      fill: false
    }
  }[affiliation];
  icn["GR.IC.FF.ANALYSIS"] = {
    type: "path",
    d: "m 100,120 0,-65 m 0,90 -30,-25 60,0 z",
    fill: false
  };
  icn["GR.IC.FF.ANTITANK/ANTIARMOUR"] = {
    Unknown: { type: "path", fill: false, d: "M55,135 L100,33 145,135" },
    Friend: { type: "path", fill: false, d: "M25,150 L100,52 175,150" },
    Neutral: { type: "path", fill: false, d: "M45,150 L100,47 155,150" },
    Hostile: { type: "path", fill: false, d: "M60,132 L100,30 140,132" }
  }[affiliation];
  icn["GR.IC.FF.BORDER PATROL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 122.8 66.8 C 119.9 66.8 117.4 68.6 117.4 71.6 L 117.4 73.1 L 128.7 73.1 L 128.7 72.4 C 128.7 68.8 126.5 66.8 122.8 66.8 z M 108.6 74.8 L 108.6 76 L 117.6 76 L 117.5 77.5 L 118 80.8 C 119.1 81.5 118.9 82.5 120.8 83.5 C 122.1 84.1 124 84 125.2 83.4 C 127.5 82.4 129 79.2 128.3 76 L 137.5 76 L 137.5 74.8 L 108.6 74.8 z M 94.8 82.1 C 93.3 82.1 92 83.5 92 85 L 92 85.2 C 92 86.6 96 91.3 97 92.6 C 98.2 94.3 100.8 98.8 103.2 98.8 C 104.5 98.8 111.1 93.7 112.6 92.8 L 112.6 106.2 L 126.4 85.6 C 123 85.6 114.9 85.2 112.2 85.9 C 110.2 86.4 105 91.6 103.6 91.7 C 103.4 91 100.6 87.5 100 86.5 C 99.2 85.4 97.2 82.1 95.6 82.1 L 94.8 82.1 z M 130.4 85.6 C 129.6 85.6 117.5 104.1 116.3 106.2 L 128.1 106.2 L 128.1 110.6 L 112.5 110.6 L 112.5 133.2 L 120.7 133.2 L 122 117.5 L 124.3 117.5 L 125.6 133.2 L 133.5 133.2 L 133.5 87.9 C 133.5 87.2 131.2 85.6 130.4 85.6 z M 66.9 90.7 C 66.5 91.4 62.5 96.9 62.5 96.9 C 62.5 97.8 76.7 107.2 78.5 108.3 C 81.4 110.2 83.9 112.1 86.7 114 C 88.2 115 89.4 115.9 90.8 116.8 C 92.1 117.7 94.1 118.5 94.1 120.4 L 94.1 133.2 L 105.5 133.2 L 105.5 121.7 C 105.5 120.6 107.2 119 107.2 118.8 C 107.2 117.6 106.1 118.6 105.6 116.9 C 105.2 115.4 105.4 115.6 104.5 114.5 C 103.5 113.1 101.9 112 99.8 112 C 96.8 112 97.6 111.8 95.3 110.3 C 93.9 109.3 92.5 108.4 91.2 107.4 C 88.7 105.5 85.8 103.5 83.2 101.8 C 80.9 100.3 68.2 91 66.9 90.7 z M 67.9 92.6 L 72.7 95.7 L 72.8 103 L 67.9 99.9 L 67.9 92.6 z M 77.8 99.3 L 82.6 102.6 L 82.6 110 L 77.8 106.6 L 77.8 99.3 z M 87.4 106.2 L 92.5 109.5 L 92.4 116.9 L 87.4 113.5 L 87.4 106.2 z"
    },
    {
      type: "path",
      fill: STD2525 ? iconFillColor : false,
      stroke: false,
      d:
        "M 117.4 73.1 L 117.4 74.8 L 128.7 74.8 L 128.7 73.1 L 117.4 73.1 z M 126.4 85.6 L 112.6 106.2 L 112.6 110.6 L 128.1 110.6 L 128.1 106.2 L 116.4 106.2 C 117.5 104.1 129.6 85.6 130.4 85.6 L 126.4 85.6 z M 67.9 92.6 L 67.9 99.9 L 72.8 103 L 72.7 95.7 L 67.9 92.6 z M 77.8 99.3 L 77.8 106.6 L 82.6 110 L 82.6 102.6 L 77.8 99.3 z M 87.4 106.2 L 87.4 113.5 L 92.4 116.9 L 92.5 109.5 L 87.4 106.2 z "
    }
  ];
  icn["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"] = {
    type: "path",
    fill: false,
    d: "m 80,60 20,20 20,-20 m -20,0 0,80"
  };
  icn["GR.IC.FF.CORPS SUPPORT"] = {
    Unknown: { type: "path", d: "M160,75 l-15,25 15,25", fill: false },
    Friend: { type: "path", d: "M175,50 l-30,50 30,50", fill: false },
    Neutral: { type: "path", d: "M155,50 l-20,50 20,50", fill: false },
    Hostile: { type: "path", d: "M150,80 l-15,20 15,20", fill: false }
  }[affiliation];
  icn["GR.IC.FF.CUSTOMS SERVICE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 115.5 69.8 C 115.8 70.4 116.9 72.9 117.5 72.9 L 128.3 72.9 L 128.3 69.8 L 115.5 69.8 z M 117.3 74.7 C 116.8 74.7 116 75.7 115.8 76.1 L 117.2 76.1 L 117.2 76.8 C 117.2 79.6 119.8 81.8 122.8 81.8 C 126.5 81.8 128.3 78.6 128.3 74.7 L 117.3 74.7 z M 111.3 83.6 C 110.5 83.6 99.4 91.8 97.8 92.9 C 95.6 94.4 93 96.1 91 97.7 C 89.1 99.2 85.4 100.5 85.4 103.6 L 85.4 104 C 85.4 104.7 87.1 106.7 88.2 106.7 L 88.8 106.7 C 90.2 106.7 108 93.4 111.3 91.7 L 111.3 105.3 L 126 83.6 L 111.3 83.6 z M 75.3 83.6 C 74.5 83.6 73.4 84.4 73.4 85 L 73.4 108.9 C 73.4 109.8 73.9 110.2 74.4 110.5 L 78.5 110.5 L 78.5 83.6 L 75.3 83.6 z M 78.5 110.5 L 78.5 135.2 L 105.6 135.2 L 105.6 110.5 L 78.5 110.5 z M 130.5 83.6 C 129.6 83.6 123.8 92.9 122.9 94.2 C 121.9 95.7 115.7 104.5 115.5 105.3 L 127.6 105.3 L 127.6 110.3 L 111.5 110.3 L 111.5 134.8 L 119.6 134.8 C 120.6 134.8 121.1 127.9 121.3 126.6 C 121.7 123.9 122.4 120.4 122.6 117.8 L 122.9 117.8 L 125.4 134.8 L 133.9 134.8 L 133.9 86.7 C 133.9 85.6 131.9 83.6 130.7 83.6 L 130.5 83.6"
    },
    {
      type: "path",
      fill: STD2525 ? iconFillColor : false,
      stroke: false,
      d:
        "M 117.5 72.9 L 117.3 74.7 L 128.3 74.7 L 128.3 72.9 L 117.5 72.9 z M 126 83.7 L 111.3 105.3 L 111.5 110.3 L 127.7 110.3 L 127.7 105.3 L 115.5 105.3 C 115.7 104.5 121.9 95.7 122.9 94.3 C 123.8 92.9 129.6 83.7 130.5 83.7 L 126 83.7 z "
    }
  ];
  icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"] = {
    type: "path",
    stroke: false,
    d:
      "M 100.2 62.3 C 100.1 63.2 99 66.3 98.7 67.4 C 97.8 69.9 99.4 70 99.4 72.3 L 99.4 73 C 99.4 73.7 98.9 73.5 98.3 73.8 C 96.6 72.4 94.2 71 91.3 71 L 90 71 C 84.2 71 80 75.5 74.6 75.5 L 73.9 75.5 C 72.3 75.5 71.5 74.1 71.3 75.8 L 74.3 77.2 C 71.8 82.4 69.9 89.7 67.5 95.5 C 66.3 98.6 65.3 101.6 64.1 104.7 C 63.5 106.3 63.1 107.7 62.5 109.3 C 62 110.5 61.8 113.1 60.2 113.2 C 62.4 116.4 68 120.5 73.3 120.5 L 76 120.5 C 81.6 120.5 87.3 116.6 89.5 113.2 L 88.2 113.2 L 75.4 77.2 L 74.5 77.2 L 74.5 77 L 75.4 77.2 L 78.6 77.7 L 79.3 77.7 L 89.3 76.2 L 90.4 76.3 C 93.7 76.3 93.8 80.2 94.7 80.2 L 97.7 80.2 L 97.7 129.2 L 86.1 129.2 L 86.1 131.5 L 81.4 131.5 L 81.4 134.1 L 77.5 134.1 L 77.5 138.2 L 123.3 138.2 L 123.3 133.9 L 119.3 133.9 L 119.3 131.6 L 114.5 131.6 L 114.5 129.2 L 102.6 129.2 L 102.6 80.2 L 106 80.2 C 107 80.2 106.6 76.4 110.7 76.4 L 111.3 76.4 L 121.2 77.7 L 122.2 77.7 L 125.4 77.3 C 124.3 79.7 123.1 83.8 122.1 86.4 C 120.9 89.6 119.9 92.6 118.7 95.8 C 117.5 98.9 116.6 101.9 115.4 105 C 114.9 106.4 114.2 108.1 113.7 109.6 C 113.4 110.4 113.1 111.1 112.9 111.9 C 112.5 113.2 112.8 113.2 111.2 113.2 C 113.3 116.4 119.2 120.5 124.6 120.5 L 127.2 120.5 C 132.6 120.5 138.8 116.4 140.9 113.2 L 139.8 113.2 L 126.4 77.1 C 127.4 76.9 129.3 76.2 129.3 75.3 C 129.3 74.5 127.8 75.5 126.7 75.5 L 126.3 75.5 C 120.8 75.5 116.6 71 110.9 71 L 109.6 71 C 106.7 71 104.2 72.4 102.6 73.8 C 101.8 73.4 101.3 73.6 101.3 72.3 C 101.3 71.9 102.4 68.8 102.5 68.5 L 100.6 62.3 L 100.2 62.3 z M 126.1 80.8 L 137.8 113.2 L 114.1 113.2 L 126.1 80.8 z M 74.8 80.8 L 86.5 113.2 L 63.1 113.1 L 74.8 80.8 z"
  };
  icn["GR.IC.FF.DIRECTION FINDING"] = {
    type: "path",
    d: "M100,140 l0,-80 M80,80 l20,-20 20,20",
    fill: false
  };
  icn["GR.IC.FF.DIVISION AND BELOW SUPPORT"] = {
    Unknown: { type: "path", d: "M40,75 l15,25 -15,25", fill: false },
    Friend: { type: "path", d: "M25,50 l30,50 -30,50", fill: false },
    Neutral: { type: "path", d: "M45,50 l20,50 -20,50", fill: false },
    Hostile: { type: "path", d: "M50,80 l15,20 -15,20", fill: false }
  }[affiliation];
  icn["GR.IC.FF.EMERGENCY OPERATION"] = [
    {
      type: "path",
      d:
        "M 100 65 L 115.2 91.3 L 130.3 117.5 C 133.3 112.4 135 106.4 135 100 C 135 80.7 119.3 65 100 65 z M 100 65 C 80.7 65 65 80.7 65 100 C 65 106.4 66.7 112.4 69.7 117.5 L 84.8 91.3 L 100 65 z M 69.7 117.5 C 75.7 128 87 135 100 135 C 113 135 124.3 128 130.3 117.5 L 100 117.5 L 69.7 117.5 z"
    },
    {
      type: "path",
      fill: STD2525 ? iconFillColor : false,
      stroke: false,
      d: "M 69.7,117.5 100,65 l 30.3,52.5 z"
    }
  ];
  icn["GR.IC.FF.FIELD ARTILLERY ROCKET"] = {
    type: "path",
    d: "M100,150 l0,-97 M85,130 l0,-50 M115,130 l0,-50 M85,73 l15,-20 15,20",
    fill: false
  };
  icn["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"] = {
    Unknown: { type: "path", d: "M35,80 l130,0 ", fill: false },
    Friend: { type: "path", d: "M25,80 l150,0 ", fill: false },
    Neutral: { type: "path", d: "M45,80 l110,0 ", fill: false },
    Hostile: { type: "path", d: "M50,80 l100,0 ", fill: false }
  }[affiliation];
  icn["GR.IC.FF.HORSE"] = {
    type: "path",
    d:
      "m 129,72.8 c 0,0 -6.3,2 -9,2.6 -3.4,0.7 -4.9,1.8 -7.7,3.1 -4.2,1.9 -6.8,3.6 -11.3,4.3 -3.3,0.5 -7.7,1.7 -11,1 -3.9,-0.9 -6.1,-2.9 -10.1,-2.9 -3.7,-0 -7.4,-0.6 -10.6,1.3 -2.6,1.6 -4.7,4.2 -5.8,7.1 -2.3,5.4 -0.8,12.5 -1.2,18.4 -0.2,3.1 -0.4,9.3 -0.6,10.2 0,0 1.6,-0 3.4,-2.5 0.9,-1.2 1.7,-3.4 1.9,-4.9 0.5,-3.1 -0.7,-7.5 -0.4,-10 1.1,-0.3 2.4,2.8 2.6,4.7 0.2,2 -1,3.3 -1.4,5.2 -0.5,3 0.3,5 0.6,8.3 0.1,1.6 0.8,3.9 0.5,6 -0.2,2 -0.2,4.3 -0.2,4.3 l 6.9,0 -0.4,-3.8 c 0,0 -1.8,-2.5 -2.1,-4.3 -0.5,-2.7 -0.5,-5.4 0.2,-8 0.5,-2 3.1,-4.3 4.1,-6.1 1.8,-3.1 3.1,-7.1 3.1,-7.1 0,0 5.1,3.4 9.1,4.2 3.8,0.8 11.6,1.4 11.6,1.4 0,0 -0.2,7.3 0.1,12.4 -0,0.1 0.3,3.9 0.3,3.1 -1.4,3.2 -0,8.2 -0,8.2 0,0 2.9,0 6.3,-0 l -0.3,-3.4 c 0,0 -1.5,-3.5 -1.5,-5.3 0,-3.1 0.1,-5.9 0.9,-8.9 0.4,-1.2 0.7,-2.9 1.3,-4 1.4,-2.2 3.1,-3.8 4.2,-6.1 1.1,-2.6 2.3,-5.3 3.6,-7.9 1.6,-3.3 7.8,-7.3 7.8,-7.3 0,0 5,2.9 8.4,4.9 1.2,0.7 3,0.1 3.7,-1 0.7,-1.1 0.8,-2.2 0.3,-3.3 -3.2,-6.7 -7.8,-9.4 -7.8,-9.4 z",
    stroke: false
  };
  icn["GR.IC.FF.INFANTRY"] = {
    Unknown: { type: "path", d: "M50,65L150,135M50,135L150,65" },
    Friend: { type: "path", d: "M25,50 L175,150 M25,150 L175,50" },
    Neutral: { type: "path", d: "M45,45L155,155M45,155L155,45" },
    Hostile: { type: "path", d: "M60,70L140,130M60,130L140,70" }
  }[affiliation];
  icn["GR.IC.FF.INFANTRY DISMOUNTED"] = {
    Unknown: { type: "path", d: "M50,65L150,135M50,135L150,65" },
    Friend: { type: "path", d: "m 45,70 110,60 M 45,130 155,70" },
    Neutral: { type: "path", d: "M45,45L155,155M45,155L155,45" },
    Hostile: { type: "path", d: "M60,70L140,130M60,130L140,70" }
  }[affiliation];
  icn["GR.IC.FF.INTERCEPT"] = {
    type: "path",
    d: "M100,120 l0,-60 M80,120 l20,20 20,-20"
  };
  icn["GR.IC.FF.JAMMING"] = {
    Unknown: {
      type: "path",
      d:
        "M63,60 c10,0 0,10 7,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 7,-10 M40,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10",
      fill: false
    },
    Friend: {
      type: "path",
      d:
        "M25,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 M25,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10",
      fill: false
    },
    Neutral: {
      type: "path",
      d:
        "M45,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10  M45,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10",
      fill: false
    },
    Hostile: {
      type: "path",
      d:
        "M67,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 13,10   M52,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 7,-10",
      fill: false
    }
  }[affiliation];
  icn["GR.IC.FF.LAW ENFORCEMENT"] = {
    type: "path",
    d:
      "m 99.6,51 c -2.8,0 -5,2.3 -5,5.3 0,2.1 1.2,3.9 2.8,4.7 L 87.8,78.3 69.5,78.4 c -0.1,-2.8 -2.3,-5.1 -5,-5.1 -2.8,0 -5,2.3 -5,5.3 0,2.9 2.2,5.3 5,5.3 0.7,0 1.4,-0.2 2,-0.4 l 9.2,16.8 -9.4,17.2 c -0.6,-0.2 -1.2,-0.4 -1.8,-0.4 -2.8,0 -5,2.4 -5,5.3 0,2.9 2.2,5.3 5,5.3 2.8,0 5,-2.3 5,-5.3 0,-0.1 -0,-0.2 -0,-0.3 l 18.3,0.1 9.5,17.1 c -1.6,0.9 -2.7,2.6 -2.7,4.6 0,2.9 2.3,5.3 5,5.3 2.8,0 5,-2.3 5,-5.3 0,-1.9 -0.9,-3.5 -2.3,-4.4 l 9.6,-17.3 18.7,-0.1 c -0,0.1 -0,0.2 -0,0.3 0,2.9 2.3,5.3 5,5.3 2.8,0 5,-2.3 5,-5.3 0,-2.9 -2.2,-5.3 -5,-5.3 -0.8,0 -1.5,0.2 -2.1,0.5 l -9.5,-17.4 9.5,-17.4 c 0.6,0.3 1.4,0.5 2.1,0.5 2.8,0 5,-2.4 5,-5.3 0,-2.9 -2.2,-5.3 -5,-5.3 -2.8,0 -5,2.3 -5,5.3 0,0.1 0,0.2 0,0.3 L 111.8,78.3 102.1,60.8 c 1.5,-0.9 2.5,-2.6 2.5,-4.5 0,-2.9 -2.2,-5.3 -5,-5.3 z"
  };
  icn["GR.IC.FF.MAIN GUN SYSTEM"] = {
    Unknown: { type: "path", d: "M55,65L55,135" },
    Friend: { type: "path", d: "M55,50L55,150" },
    Neutral: { type: "path", d: "M55,45L55,155" },
    Hostile: { type: "path", d: "M55,72L55,128" }
  }[affiliation];
  icn["GR.IC.FF.MEDICAL"] = {
    type: "path",
    d:
      "M100," +
      baseGeometry.bbox.y1 +
      "L100," +
      baseGeometry.bbox.y2 +
      "M" +
      baseGeometry.bbox.x1 +
      ",100L" +
      baseGeometry.bbox.x2 +
      ",100"
  };
  /*icn["GR.IC.FF.MEDICAL DISMOUNTED"] = {
    Unknown: { type: "path", d: "m 47.9,100 104,0 M 100,49.1 100,162" },
    Friend: { type: "path", d: "m 45,100 110,0 m -55,-55 0,110" },
    Neutral: { type: "path", d: "m 45,100 110,0 m -55,-55 0,110" },
    Hostile: { type: "path", d: "m 48.1,100 103.7,0 M 100,37.8 100,150.5" }
  }[affiliation];*/
  icn["GR.IC.FF.MEDICAL THEATER"] = {
    Unknown: {
      type: "path",
      d:
        "M100,170 l0,-140 M40,75 l15,25 -15,25 M160,75 l-15,25 15,25 M55,100 l90,0",
      fill: false
    },
    Friend: {
      type: "path",
      d:
        "M100,150 l0,-100 M25,50 l30,50 -30,50 M175,50 l-30,50 30,50 M55,100 l90,0",
      fill: false
    },
    Neutral: {
      type: "path",
      d:
        "M100,155 l0,-110  M45,50 l20,50 -20,50 M155,50 l-20,50 20,50 M65,100 l70,0",
      fill: false
    },
    Hostile: {
      type: "path",
      d:
        "M100,172 l0,-144 M50,80 l15,20 -15,20 M150,80 l-15,20 15,20 M65,100 l70,0",
      fill: false
    }
  }[affiliation];
  icn["GR.IC.FF.MEDICAL CORPS"] = {
    Unknown: {
      type: "path",
      d: "M100,170 l0,-140 M160,75 l-15,25 15,25 M30,100 l115,0",
      fill: false
    },
    Friend: {
      type: "path",
      d: "M100,150 l0,-100  M175,50 l-30,50 30,50 M25,100 l120,0",
      fill: false
    },
    Neutral: {
      type: "path",
      d: "M100,155 l0,-110 M155,50 l-20,50 20,50 M45,100 l90,0",
      fill: false
    },
    Hostile: {
      type: "path",
      d: "M100,172 l0,-144  M150,80 l-15,20 15,20 M28,100 l110,0",
      fill: false
    }
  }[affiliation];
  icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"] = [
    icn["GR.IC.FF.MEDICAL"],
    { type: "path", fill: false, d: "M70,90 l0,20  M130,90 l0,20" }
  ];
  icn["GR.IC.FF.MILITARY POLICE"] = {
    type: "path",
    d:
      "M 100,140 C 53.7465,122.654 71.0916,95.6737 65.3099,70.6197 c 11.5634,13.4906 23.1267,13.4906 34.6901,0 11.564,13.4906 23.126,13.4906 34.69,0 C 128.908,95.6737 146.254,122.654 100,140 Z",
    fill: false
  };
  icn["GR.IC.FF.MOTORIZED"] = {
    type: "path",
    d: "M100," + baseGeometry.bbox.y1 + "L100," + baseGeometry.bbox.y2
  };
  icn["GR.IC.FF.NAVAL"] = [
    { type: "path", d: "M 100,145 100,65", fill: false },
    { type: "path", d: "m 70,70 60,0", fill: false },
    {
      type: "path",
      d:
        "m 57.8,105.5 c -2.2,0.1 1.3,20.6 2.8,22.1 0.8,0.8 3.5,-3.8 4.6,-2.6 17.4,20.2 33,19.7 34.7,19.6 0,0 0.2,-0 0.3,0 1.7,0.1 17.3,0.5 34.7,-19.6 1,-1.2 3.7,3.4 4.6,2.6 1.4,-1.5 4.9,-21.9 2.8,-22.1 -2.2,-0.1 -4,4.2 -6.7,6.4 -3,2.4 -7.5,3.4 -7.7,4.5 -0.1,0.8 4.9,3.5 3.9,4.9 -5.1,6.3 -15.1,16.6 -31.3,17 l -0.3,4.3 -0.3,-4.3 c -16.2,-0.4 -26.3,-10.7 -31.3,-17 -1.1,-1.3 4,-4.1 3.9,-4.9 -0.2,-1 -4.7,-2 -7.7,-4.5 -2.7,-2.3 -4.5,-6.6 -6.7,-6.4 z",
      stroke: false
    },
    { type: "circle", cx: 100, cy: 60, r: 5, fill: false }
  ];
  icn["GR.IC.FF.PRISON"] = {
    type: "path",
    stroke: false,
    d:
      "M 62.5 67.9 L 62.5 73.4 L 69.9 73.4 L 69.9 106 C 66.8 106.7 64.4 109.6 64.4 113.4 C 64.4 116 65.8 116.9 65.9 118.4 C 66 120.4 65.6 122.5 65.6 124.7 L 65.6 126.6 L 62.5 126.6 L 62.5 132.1 L 137.5 132.1 L 137.5 126.6 L 136 126.6 L 135.6 117.5 C 138.3 113.4 135.8 107 131.5 106 L 131.5 73.4 L 137.5 73.4 L 137.5 67.9 L 62.5 67.9 z M 74.5 73.4 L 87.2 73.4 L 87.2 108.4 C 87.2 109.2 84.8 109.7 83.9 110.6 C 83.1 111.3 82.2 112.7 81.6 113.6 C 80.5 115.2 78.6 118.7 78.6 121.1 L 76.1 117 C 76.5 116.4 76.9 114.6 76.9 113.7 L 76.9 112.2 C 76.9 109.5 74.5 107.9 74.5 106.5 L 74.5 73.4 z M 91.5 73.4 L 110.2 73.4 L 110.2 90.9 C 109 89.6 108.8 87.8 106.8 85.7 C 105.4 84.3 103.5 83 100.8 83 L 100.3 83 C 98.2 83 96.1 83.6 94.9 84.5 C 94.3 85 93.6 85.4 93.1 86 C 92.4 86.6 92.2 87.3 91.5 87.8 L 91.5 73.4 z M 114.3 73.4 L 127.2 73.4 L 127.2 106.5 C 127.2 106.9 124.8 109.2 124.4 111.1 C 123.7 114.2 124.5 114.6 125 117 L 123.3 120.2 C 122.7 118.3 120.7 115 119.7 113.5 C 118.3 111.4 117.3 109.1 114.3 108.9 L 114.3 73.4 z M 99.7 84.9 L 100.6 84.9 C 104.8 84.9 108.5 90.4 108.5 94.7 L 108.5 96.4 C 108.5 100.4 105 106.2 101.3 106.2 L 99.4 106.2 C 94.9 106.2 91.4 100.2 91.6 95.5 C 91.8 90.7 94.9 84.9 99.7 84.9 z M 110.3 100.5 L 110.2 106.9 L 106.7 106.3 L 110.3 100.5 z M 91.5 103.6 L 94.3 106.8 L 91.5 107.4 L 91.5 103.6 z M 70.7 107.9 C 72.9 107.9 74.7 110.4 74.7 112.7 L 74.7 113.4 C 74.7 117.9 70 120.2 67.6 116.7 C 65.7 113.8 66.9 107.9 70.7 107.9 z M 130.6 107.9 C 132.8 107.9 134.4 110.8 134.4 113.2 L 134.4 113.4 C 134.4 116.7 133 116.7 132 118.2 L 128.9 118.3 L 126.7 115.4 L 126.5 113.2 C 126.1 111 128.2 107.9 130.6 107.9 z M 105.9 108.2 C 107.2 108.2 108.9 109 110.2 109.3 L 110.2 126.6 L 91.5 126.6 L 91.5 110.1 C 91.5 108.6 96.6 108.9 98.4 108.9 C 101.1 108.9 104 108.2 105.9 108.2 z M 114.3 110.8 C 117.2 112.3 117.4 113.4 119 116.4 C 120.1 118.5 121.7 120.9 121.7 124 C 121.9 124.2 122.3 124.9 122.7 124.9 C 124 124.9 125.5 119.8 126.7 118.9 L 126.7 119.4 L 127.2 119.4 L 127.2 126.6 L 114.3 126.6 L 114.3 110.8 z M 87.2 111.3 L 87.2 126.6 L 74.5 126.6 L 74.5 118.9 C 75.8 119.4 77.4 125.4 78.6 125.4 C 80.6 125.4 80.7 119.6 81.9 117.5 C 83.2 115.3 84.4 111.9 87.2 111.3 z M 133.6 119.7 L 133.9 126.6 L 131.5 126.6 L 131.5 120.4 L 133.6 119.7 z M 68.1 119.9 C 68.6 120.1 69.9 120.3 69.9 121.1 L 69.9 126.6 L 67.7 126.6 L 68.1 119.9 z"
  };
  icn["GR.IC.FF.JAIL BREAK"] = [
    icn["GR.IC.FF.PRISON"],
    { type: "path", strokewidth: 5, d: "m 70,130 L130,70", fill: false }
  ];
  icn["GR.IC.FF.RECONNAISSANCE"] = {
    Unknown: { type: "path", d: "M50,135L150,65" },
    Friend: { type: "path", d: "M25,150L175,50" },
    Neutral: { type: "path", d: "M45,155L155,45" },
    Hostile: { type: "path", d: "M60,130L140,70" }
  }[affiliation];
  icn["GR.IC.FF.RECONNAISSANCE DISMOUNTED"] = {
    Unknown: { type: "path", d: "M50,135L150,65" },
    Friend: { type: "path", d: "M 45,130 155,70" },
    Neutral: { type: "path", d: "M45,155L155,45" },
    Hostile: { type: "path", d: "M60,130L140,70" }
  }[affiliation];
  icn["GR.IC.FF.RECONNAISSANCE EQUPIMENT"] = {
    Unknown: { type: "path", d: "M50,135L150,65" },
    Friend: { type: "path", d: "M 50.6 132.9 L 149.3 67" },
    Neutral: { type: "path", d: "M45,155L155,45" },
    Hostile: { type: "path", d: "M60,130L140,70" }
  }[affiliation];
  icn["GR.IC.FF.SEARCH"] = {
    type: "path",
    d: "m 100,145 0,-90 m 30,65 -30,25 -30,-25",
    fill: false
  };
  icn["GR.IC.FF.SENSOR"] = [
    {
      type: "path",
      d:
        "M" +
        baseGeometry.bbox.x1 +
        ",100 L75,100 M" +
        (200 - baseGeometry.bbox.x1) +
        ",100 L125,100"
    },
    {
      type: "path",
      d: "M65,85 l70,0 -15,30 -40,0 z",
      fill: STD2525 ? iconFillColor : false
    }
  ];
  icn["GR.IC.FF.SIGNAL"] = {
    Unknown: { type: "path", fill: false, d: "M50,65 100,110 100,90 150,135" },
    Friend: { type: "path", fill: false, d: "M25,50 100,110 100,90 175,150" },
    Neutral: { type: "path", fill: false, d: "M45,45 100,110 100,90 155,155" },
    Hostile: { type: "path", fill: false, d: "M57,70 100,110 100,90 143,130" }
  }[affiliation];
  icn["GR.IC.FF.SIGNAL DISMOUNTED"] = {
    Unknown: { type: "path", fill: false, d: "M50,65 100,110 100,90 150,135" },
    Friend: {
      type: "path",
      fill: false,
      d: "M 52,66.8 100,110 l 0,-20 47.9,43.1"
    },
    Neutral: { type: "path", fill: false, d: "M45,45 100,110 100,90 155,155" },
    Hostile: { type: "path", fill: false, d: "M57,70 100,110 100,90 143,130" }
  }[affiliation];
  icn["GR.IC.FF.SOUND"] = [
    {
      type: "path",
      d:
        "M" +
        baseGeometry.bbox.x1 +
        ",100 L75,100 M" +
        (200 - baseGeometry.bbox.x1) +
        ",100 L125,100"
    },
    {
      type: "path",
      d: "M65,85 l70,0 -15,30 -40,0 z",
      fill: STD2525 ? iconFillColor : false
    },
    { type: "text", stroke: false, x: 100, y: 110, fontsize: 25, text: "S" }
  ];
  icn["GR.IC.FF.SUPPLY"] = {
    Unknown: { type: "path", d: "M35,120 l130,0 ", fill: false },
    Friend: { type: "path", d: "M25,120 l150,0", fill: false },
    Neutral: { type: "path", d: "M45,120 l110,0", fill: false },
    Hostile: { type: "path", d: "M50,120 l100,0 ", fill: false }
  }[affiliation];
  icn["GR.IC.FF.SUPPLY CORPS"] = {
    Unknown: {
      type: "path",
      d: "M160,75 l-15,25 15,25 M35,120 l120,0",
      fill: false
    },
    Friend: {
      type: "path",
      d: "M175,50 l-30,50 30,50 M25,120 l135,0",
      fill: false
    },
    Neutral: {
      type: "path",
      d: "M155,50 l-20,50 20,50 M45,120 l100,0",
      fill: false
    },
    Hostile: {
      type: "path",
      d: "M150,80 l-15,20 15,20 M50,120 l100,0",
      fill: false
    }
  }[affiliation];
  icn["GR.IC.FF.SUPPLY DIVISION AND BELOW"] = {
    Unknown: {
      type: "path",
      d: "m 45,120 120,0 M 40,75 55,100 40,125",
      fill: false
    },
    Friend: {
      type: "path",
      d: "m 45,120 130,0 M 25,50 55,100 25,150",
      fill: false
    },
    Neutral: {
      type: "path",
      d: "m 57,120 98,0 M 45,50 65,100 45,150",
      fill: false
    },
    Hostile: {
      type: "path",
      d: "m 50,120 100,0 M 50,80 65,100 50,120",
      fill: false
    }
  }[affiliation];
  icn["GR.IC.FF.SUPPLY THEATER"] = {
    Unknown: {
      type: "path",
      d: "M40,75 l15,25 -15,25 M160,75 l-15,25 15,25 M45,120 l110,0 ",
      fill: false
    },
    Friend: {
      type: "path",
      d: "M25,50 l30,50 -30,50 M175,50 l-30,50 30,50 M40,120 l120,0 ",
      fill: false
    },
    Neutral: {
      type: "path",
      d: " M45,50 l20,50 -20,50 M155,50 l-20,50 20,50 M55,120 l90,0 ",
      fill: false
    },
    Hostile: {
      type: "path",
      d: "M50,80 l15,20 -15,20 M150,80 l-15,20 15,20 M50,120 l100,0",
      fill: false
    }
  }[affiliation];
  icn["GR.IC.FF.CLASS ALL"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 30,
    text: "ALL"
  };
  icn["GR.IC.FF.CLASS MULTIPLE"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 30,
    text: "MULT"
  };
  icn["GR.IC.FF.CLASS I"] = {
    type: "path",
    d: "m 105,85 c -5,10 -5,20 0,30 m 0,-30 c -20,0 -20,30 0,30",
    fill: false
  };
  icn["GR.IC.FF.NATO SUPPLY CLASS I"] = text("I");
  icn["GR.IC.FF.CLASS II"] = icn["GR.IC.QUARTERMASTER"];
  icn["GR.IC.FF.NATO SUPPLY CLASS II"] = text("II");
  icn["GR.IC.FF.CLASS III"] = {
    type: "path",
    d: "m 100,120 0,-20 -15,-20 30,0 -15,20 ",
    fill: false
  };
  icn["GR.IC.FF.CLASS IV"] = icn["GR.IC.ENGINEER"];
  icn["GR.IC.FF.NATO SUPPLY CLASS IV"] = text("IV");
  icn["GR.IC.FF.CLASS V"] = {
    type: "path",
    d: "m 90,115 0,-25 c 0,-10 20,-10 20,0 l 0,25 m -25,0 30,0",
    fill: false
  };
  icn["GR.IC.INTERPRETER/TRANSLATOR"] = [
    {
      type: "path",
      d: "m 65,90 15,0 0,-10 20,20 -20,20 0,-10 -15,0 z",
      fill: iconFillColor
    },
    {
      type: "path",
      d: "m 135,90 -15,0 0,-10 -20,20 20,20 0,-10 15,0 z"
    }
  ];
  icn["GR.IC.FF.NATO SUPPLY CLASS ALL"] = text("ALL");
  icn["GR.IC.FF.CLASS VI"] = [
    { type: "circle", cx: 100, cy: 85, r: 5, fill: false },
    {
      type: "path",
      d: "m 85,95 30,0 m -15,15 0,-20 m -10,30 10,-10 10,10",
      fill: false
    }
  ];
  icn["GR.IC.FF.CLASS VII"] = [
    { type: "circle", cx: 75, cy: 100, r: 7 },
    { type: "circle", cx: 125, cy: 100, r: 7 },
    { type: "path", d: "M75,100 c0,-20 50,-20 50,0", fill: false }
  ];
  icn["GR.IC.FF.CLASS VIII"] = {
    Unknown: {
      type: "path",
      fill: false,
      d: "M100,120 l0,-90 M165,80 l-130,0"
    },
    Friend: { type: "path", fill: false, d: "M100,120 l0,-70 M175,80 l-150,0" },
    Neutral: {
      type: "path",
      fill: false,
      d: "M100,120 l0,-75 M155,80 l-110,0"
    },
    Hostile: { type: "path", fill: false, d: "M100,120 l0,-92 M153,80 l-106,0" }
  }[affiliation];
  icn["GR.IC.FF.CLASS VIII.THEATER"] = {
    Unknown: {
      type: "path",
      fill: false,
      d: "M100,120 l0,-90 M155,80 l-110,0"
    },
    Friend: { type: "path", fill: false, d: "M100,120 l0,-70 M155,80 l-110,0" },
    Neutral: { type: "path", fill: false, d: "M100,120 l0,-75 M145,80 l-90,0" },
    Hostile: { type: "path", fill: false, d: "M100,120 l0,-92 M153,80 l-106,0" }
  }[affiliation];
  icn["GR.IC.FF.CLASS VIII.CORPS"] = {
    Unknown: {
      type: "path",
      fill: false,
      d: "M100,120 l0,-90 M155,80 l-120,0"
    },
    Friend: { type: "path", fill: false, d: "M100,120 l0,-70 M155,80 l-130,0" },
    Neutral: {
      type: "path",
      fill: false,
      d: "M100,120 l0,-75 M145,80 l-100,0"
    },
    Hostile: { type: "path", fill: false, d: "M100,120 l0,-92 M153,80 l-106,0" }
  }[affiliation];
  icn["GR.IC.FF.CLASS IX"] = [
    { type: "circle", cx: 100, cy: 100, r: 10, fill: false },
    {
      type: "path",
      d:
        "m 100,110 0,10 m 0,-30 0,-10 m 8.7,14.2 8.4,-4.8 m -8.4,15.9 8,5.4 m -25.4,-5.4 -8.2,5.4 m 8.2,-16.3 -8,-5.4",
      fill: false
    }
  ];
  icn["GR.IC.EQUIPMENT MANUFACTURE"] = [
    { type: "circle", cx: 100, cy: 100, r: 20, fill: false },
    {
      type: "path",
      d:
        "m 100,120 0,20 m 0,-60 0,-20 m 18.1,28.4 16,-9.6 m -16,31.2 16,12 M 82.5,110 66.1,122 M 82.5,88.8 66.5,78",
      fill: false
    }
  ];
  icn["GR.IC.FF.CLASS X"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 30,
    text: "CA"
  };
  icn["GR.IC.FF.THEATRE SUPPORT"] = {
    Unknown: {
      type: "path",
      d: "M40,75 l15,25 -15,25 M160,75 l-15,25 15,25",
      fill: false
    },
    Friend: {
      type: "path",
      d: "M25,50 l30,50 -30,50 M175,50 l-30,50 30,50",
      fill: false
    },
    Neutral: {
      type: "path",
      d: "M45,50 l20,50 -20,50 M155,50 l-20,50 20,50",
      fill: false
    },
    Hostile: {
      type: "path",
      d: "M50,80 l15,20 -15,20 M150,80 l-15,20 15,20",
      fill: false
    }
  }[affiliation];
  icn["GR.IC.FF.US MARSHALS SERVICE"] = {
    type: "path",
    d:
      "m 100,70 7.1,20.3 21.5,0.4 -17.1,13 6.2,20.6 L 100,112 82.4,124.3 88.6,103.7 71.5,90.7 92.9,90.3 z m 0,-5 c -19.3,0 -35,15.7 -35,35 0,19.3 15.7,35 35,35 19.3,0 35,-15.7 35,-35 0,-19.3 -15.7,-35 -35,-35 z m 0,5 c 16.6,0 30,13.4 30,30 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 z"
  };
  icn["GR.M1.ACCIDENT"] = textm1("ACC");
  icn["GR.M1.AIRMOBILE/AIR ASSAULT"] = {
    type: "path",
    fill: false,
    d: "M85,55 L100,75 115,55"
  };
  icn["GR.M1.ARMORED"] = {
    type: "path",
    fill: false,
    d: "m 90,60 20,0 c 10,0 10,15 0,15 L 90,75 C 80,75 80,60 90,60"
  };
  icn["GR.M1.CARGO"] = {
    type: "path",
    fill: false,
    d: "m 100,60 0,15 -15,0 0,-15 30,0 0,15 -15,0"
  };
  icn["GR.M1.AMMUNITION"] = {
    type: "path",
    d: "M95,75 L95,60 C95,55 105,55 105,60 L105,75 M90,75 L110,75",
    fill: false
  };
  icn["GR.M1.AMPHIBIOUS WARFARE SHIP "] = {
    type: "path",
    d: "M 113,75 100,75 90,64.3 95,65 l 0,-8 10,0 0,8 5.5,-0.6 L 100,75"
  };
  icn["GR.M1.ANTISUBMARINE WARFARE"] = textm1("P");
  icn["GR.M1.AREA"] = textm1("AREA");
  icn["GR.M1.ARMY"] = textm1("XXXX");
  icn["GR.M1.ATTACK"] = textm1("A");
  icn["GR.M1.AVIATION"] = { type: "path", d: "m 75,60 0,15 50,-15 0,15 z" };
  icn["GR.M1.BATTALION"] = textm1("II");
  icn["GR.M1.BIOLOGICAL"] = textm1("B");
  icn["GR.M1.BORDER"] = textm1("BOR");
  icn["GR.M1.BRIDGING"] = {
    type: "path",
    fill: false,
    d: "m 80,80 5,-5 30,0 5,5 m -40,-20 5,5 30,0 5,-5"
  };
  icn["GR.M1.BRIGADE"] = textm1("X");
  icn["GR.M1.CHEMICAL"] = textm1("C");
  icn["GR.M1.INTRUSION"] = textm1("I");
  icn["GR.M1.CHEMICAL SURVEILLANCE"] = textm1("RS");
  icn["GR.M1.CIVILIAN"] = textm1("CIV");
  icn["GR.M1.CLOSE PROTECTION"] = textm1("CLP");
  icn["GR.M1.COMBAT"] = textm1("CBT");
  icn["GR.M1.COMMAND AND CONTROL"] = textm1("C2");
  icn["GR.M1.COMMAND AND CONTROL ROTARY WING"] = STD2525
    ? textm1("Y")
    : textm1("C2");
  icn["GR.M1.TILT-ROTOR"] = textm1("TR");
  icn["GR.M1.COMMAND POST NODE"] = textm1("CPN");
  icn["GR.M1.COMMUNICATIONS CONTINGENCY PACKAGE"] = textm1("CCP");
  icn["GR.M1.CONSTRUCTION"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 75,
    fontsize: 20,
    text: "CONST"
  };
  icn["GR.M1.COMPANY"] = textm1("I");
  icn["GR.M1.CORPS"] = textm1("XXX");
  icn["GR.M1.CROSS CULTURAL COMMUNICATION"] = textm1("CCC");
  icn["GR.M1.CROWD AND RIOT CONTROL"] = textm1("CRC");
  icn["GR.M1.DECONTAMINATION"] = textm1("D");
  icn["GR.M1.DETENTION"] = textm1("DET");
  icn["GR.M1.DEPUTY"] = textm1("DEP");
  icn["GR.M1.DIRECT COMMUNICATIONS"] = {
    type: "path",
    fill: false,
    d:
      "m 95,65 -5,5 5,5 m 10,-10 5,5 -5,5 M 90,70 c 20,0 20,0 20,0 m 15,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -40,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z"
  };
  icn["GR.M1.DIVING"] = {
    type: "path",
    fill: false,
    d:
      "m 104.6,64.8 c 0,2.7 -2.1,4.8 -4.6,4.8 -2.5,0 -4.6,-2.2 -4.6,-4.8 0,-2.7 2.1,-4.8 4.6,-4.8 2.5,0 4.6,2.2 4.6,4.8 z m 0,8.7 4.6,4.8 -18.3,0 4.6,-4.8 M 108.3,60 l 4.6,0 0,9.6 -4.6,0 m -16.5,0 -4.6,0 0,-9.6 4.6,0 m 17.4,4.8 c 0,5.3 -4.1,9.6 -9.2,9.6 -5.1,0 -9.2,-4.3 -9.2,-9.6 0,-5.3 4.1,-9.6 9.2,-9.6 5.1,0 9.2,4.3 9.2,9.6 z"
  };
  icn["GR.M1.DIVISION"] = textm1("XX");
  icn["GR.M1.MARINE DIVISION"] = textm1("D");
  icn["GR.M1.DOG"] = textm1("DOG");
  icn["GR.M1.DRILLING"] = { type: "path", d: "m 90,60 5,15 10,0 5,-15 z" };
  icn["GR.M1.ELECTRO-OPTICAL"] = textm1("EO");
  icn["GR.M1.ENHANCED"] = textm1("ENH");
  icn["GR.M1.EXPLOSIVE ORDNANCE DISPOSAL"] = textm1("EOD");
  icn["GR.M1.EARLY WARNING RADAR"] = textm1("EWR");
  icn["GR.M1.FIRE DIRECTION CENTRE"] = textm1("FDC");
  icn["GR.M1.FORCE"] = textm1("F");
  icn["GR.M1.FORWARD"] = textm1("FWD");
  icn["GR.M1.GROUND STATION MODULE"] = textm1("GSM");
  icn["GR.M1.HIJACKING"] = textm1("H");
  icn["GR.M1.INDIVIDUAL"] = {
    type: "path",
    fill: false,
    d: "M85,65 l30,0"
  };
  icn["GR.M1.INTRUSION"] = textm1("I");
  icn["GR.M1.J1"] = textm1("J1");
  icn["GR.M1.J2"] = textm1("J2");
  icn["GR.M1.J3"] = textm1("J3");
  icn["GR.M1.J4"] = textm1("J4");
  icn["GR.M1.J5"] = textm1("J5");
  icn["GR.M1.J6"] = textm1("J6");
  icn["GR.M1.J7"] = textm1("J7");
  icn["GR.M1.J8"] = textm1("J8");
  icn["GR.M1.J9"] = textm1("J9");
  icn["GR.M1.JOINT NETWORK NODE"] = textm1("JNN");
  icn["GR.M1.LANDING SUPPORT"] = textm1("LS");
  icn["GR.M1.LARGE COMMUNICATIONS CONTINGENCY PACKAGE"] = textm1("LCCP");
  icn["GR.M1.LARGE EXTENSION NODE"] = textm1("LEN");
  icn["GR.M1.LOAD HANDLING SYSTEM"] = textm1("LHS");
  icn["GR.M1.MAINTENANCE"] = {
    type: "path",
    fill: false,
    d: "m 84,70 32,0 m 4,-5 c -5,0 -5,10 0,10 M 80,65 c 5,0 5,10 0,10"
  };
  icn["GR.M1.MEDEVAC"] = {
    type: "path",
    stroke: false,
    d: "M95.5,80 l9,0 0,-9 9,0 0,-9 -9,0 0,-9 -9,0 0,9 -9,0 0,9 9,0 Z"
  };
  icn["GR.M1.METEOROLOGICAL"] = textm1("MET");
  icn["GR.M1.MINE COUNTERMEASURE"] = textm1("MCM");
  icn["GR.M1.MISSILE"] = {
    type: "path",
    d: "M95,80 L95,60 C95,55 105,55 105,60 L105,80 M100,80 L100,55",
    fill: false
  };
  icn["GR.M1.(MOBILE) ADVISOR AND SUPPORT"] = {
    type: "path",
    d:
      "m 105,65 5,5 -5,5 M 90,70 c 20,0 20,0 20,0 m 15,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -40,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z",
    fill: false
  };
  icn["GR.M1.MOBILE SUBSCRIBER EQUIPMENT"] = textm1("MSE");
  icn["GR.M1.MOBILITY ASSAULT"] = textm1("MA");
  icn["GR.M1.MOBILITY SUPPORT"] = textm1("MS");
  icn["GR.M1.MOVEMENT CONTROL CENTRE"] = textm1("MCC");
  icn["GR.M1.MULTINATIONAL"] = textm1("MN");
  icn["GR.M1.MULTINATIONAL SPECIALIZED UNIT"] = textm1("MSU");
  icn["GR.M1.MULTIPLE ROCKET LAUNCHER"] = {
    type: "path",
    d: "M85,75 l15,-15 15,15 M85,67 l15,-15 15,15",
    fill: false
  };
  icn["GR.M1.NATO MEDICAL ROLE 1"] = {
    type: "text",
    stroke: false,
    x: 120,
    y: 77,
    fontsize: 25,
    text: "1"
  };
  icn["GR.M1.NATO MEDICAL ROLE 2"] = {
    type: "text",
    stroke: false,
    x: 120,
    y: 77,
    fontsize: 25,
    text: "2"
  };
  icn["GR.M1.NATO MEDICAL ROLE 3"] = {
    type: "text",
    stroke: false,
    x: 120,
    y: 77,
    fontsize: 25,
    text: "3"
  };
  icn["GR.M1.NATO MEDICAL ROLE 4"] = {
    type: "text",
    stroke: false,
    x: 120,
    y: 77,
    fontsize: 25,
    text: "4"
  };
  icn["GR.M1.NAVAL"] = ms._translate(
    0,
    -35,
    ms._scale(0.6, icn["GR.IC.NAVAL"])
  );
  icn["GR.M1.NODE CENTRE"] = textm1("NC");
  icn["GR.M1.NUCLEAR"] = textm1("N");
  icn["GR.M1.OF-1"] = textm1("OF-1");
  icn["GR.M1.OF-2"] = textm1("OF-2");
  icn["GR.M1.OF-3"] = textm1("OF-3");
  icn["GR.M1.OF-4"] = textm1("OF-4");
  icn["GR.M1.OF-5"] = textm1("OF-5");
  icn["GR.M1.OF-6"] = textm1("OF-6");
  icn["GR.M1.OF-7"] = textm1("OF-7");
  icn["GR.M1.OF-8"] = textm1("OF-8");
  icn["GR.M1.OF-9"] = textm1("OF-9");
  icn["GR.M1.OF-10"] = textm1("OF-10");
  icn["GR.M1.OF-D"] = textm1("OF-D");
  icn["GR.M1.OPERATIONS"] = textm1("OPS");
  icn["GR.M1.OPTICAL"] = textm1("OPT");
  icn["GR.M1.OR-1"] = textm1("OR-1");
  icn["GR.M1.OR-2"] = textm1("OR-2");
  icn["GR.M1.OR-3"] = textm1("OR-3");
  icn["GR.M1.OR-4"] = textm1("OR-4");
  icn["GR.M1.OR-5"] = textm1("OR-5");
  icn["GR.M1.OR-6"] = textm1("OR-6");
  icn["GR.M1.OR-7"] = textm1("OR-7");
  icn["GR.M1.OR-8"] = textm1("OR-8");
  icn["GR.M1.OR-9"] = textm1("OR-9");
  icn["GR.M1.OTHER"] = textm1("OTH");
  icn["GR.M1.PALLETIZED LOAD SYSTEM"] = textm1("PLS");
  icn["GR.M1.PERSONNEL RECOVERY"] = textm1("H");
  icn["GR.M1.PLATOON"] = [
    { type: "circle", stroke: false, cx: 80, cy: 68, r: 8 },
    { type: "circle", stroke: false, cx: 100, cy: 68, r: 8 },
    { type: "circle", stroke: false, cx: 120, cy: 68, r: 8 }
  ];
  icn["GR.M1.RADAR"] = {
    type: "path",
    fill: false,
    d: "m 85,55 c 0.1,21.4 11.7,24.6 25,25 M 116,55 101,67.5 101,55 86.6,66.9"
  };
  icn[
    "GR.M1.RADIO FREQUENCY IDENTIFICATION (RFID) INTERROGATOR/ SENSOR"
  ] = textm1("RF");
  icn["GR.M1.RAILROAD"] = ms._translate(0, -50, [
    { type: "path", d: "M60,120 l80,0", fill: false },
    { type: "circle", fill: false, cx: 65, cy: 125, r: 5 },
    { type: "circle", fill: false, cx: 75, cy: 125, r: 5 },
    { type: "circle", fill: false, cx: 125, cy: 125, r: 5 },
    { type: "circle", fill: false, cx: 135, cy: 125, r: 5 }
  ]);
  icn["GR.M1.RADIOLOGICAL"] = textm1("RAD");
  icn["GR.M1.RANGER"] = textm1("RGR");
  icn["GR.M1.RECON"] = textm1("R");
  icn["GR.M1.REGIMENT"] = textm1("III");
  icn["GR.M1.RETRANSMISSION SITE"] = textm1("RTNS");
  icn["GR.M1.ROBOTIC"] = {
    type: "path",
    d:
      "m 100,52.7 14.9,14.8 c 0.4,-0.3 0.9,-0.4 1.4,-0.4 1.5,0 2.7,1.2 2.7,2.7 0,1.4 -1.2,2.7 -2.7,2.7 -1.5,0 -2.7,-1.3 -2.7,-2.7 0,-0.4 0.1,-0.7 0.2,-1 l -10.4,-5.2 -2.5,8.6 c 0.2,0.1 0.4,0.2 0.6,0.3 0.7,0.5 1.2,1.3 1.2,2.3 0,1.5 -1.2,2.7 -2.7,2.7 -0.55,0 -1.06,-0.2 -1.49,-0.5 -0.73,-0.4 -1.22,-1.3 -1.22,-2.2 0,-1.2 0.77,-2.2 1.85,-2.6 l -2.53,-8.6 -10.42,5.2 c 0.12,0.3 0.18,0.6 0.18,1 0,1.5 -1.21,2.7 -2.7,2.7 -1.49,0 -2.7,-1.2 -2.7,-2.7 0,-1.5 1.21,-2.7 2.7,-2.7 0.52,0 1.01,0.1 1.42,0.4 l 14.9,-14.8 0,0 0,0 z",
    stroke: false
  };
  icn["GR.M1.ASSAULT"] = textm1("ASLT");
  icn["GR.M1.WEAPON"] = textm1("WPN");
  icn["GR.M1.WEAPONS"] = textm1("W");
  icn["GR.M1.CRIMINAL INVESTIGATION DIVISION"] = textm1("CID");
  icn["GR.M1.DIGITAL"] = textm1("DIG");
  icn["GR.M1.NETWORK OR NETWORK OPERATIONS"] = textm1("NET");
  icn[
    "GR.M1.AIRFIELD, AERIAL PORT OF DEBARKATION, OR AERIAL PORT OF EMBARKATION"
  ] = {
    type: "path",
    d: "m 80,70 40,0 M 80,80 111,55",
    fill: false
  };
  icn["GR.M1.PIPELINE"] = {
    type: "path",
    d:
      "m 92,66 -12,0 m 12,8 -12,0 m 28,0 12,0 m -12,-8 12,0 m -20,-11 0,7 m -5,-7 10,0 m -13,7 0,16 16,0 0,-16 -16,0",
    fill: false
  };
  icn["GR.M1.POSTAL"] = {
    type: "path",
    d: "m 90,60 15,0 c 0,5 0,10 10,15 -15,0 -20,0 -25,-15",
    fill: false
  };
  icn["GR.M1.WATER"] = {
    type: "path",
    d: "m 90,55 20,0 m -10,10 0,-10 m -25,10 40,0 c 10,0 15,5 15,10",
    fill: false
  };
  icn["GR.M1.INDEPENDENT COMMAND"] = {
    type: "path",
    d:
      "m 111.8,59.2 0,15.8 m -7.9,-7.9 15.8,0 m -31.6,-7.9 0,15.8 m 7.9,-7.9 -15.8,0",
    fill: false
  };
  icn["GR.M1.MULTI-PURPOSE BLADE"] = {
    type: "path",
    d: "m 80,65 20,-10 20,10 m -20,15 0,-25",
    fill: false
  };
  icn["GR.M1.TANK-WIDTH MINE PLOW"] = {
    type: "path",
    d:
      "m 80,65 5,-2.5 m 5,-2.5 5,-2.5 m 10,0 5,2.5 m 5,2.5 5,2.5 m -20,15 0,-20",
    fill: false
  };
  icn["GR.M1.ROUTE, RECONNAISSANCE, AND CLEARANCE"] = textm1("RRC");
  icn["GR.M1.SEARCH AND RESCUE"] = textm1("SAR");
  icn["GR.M1.SECTION"] = [
    { type: "circle", stroke: false, cx: 90, cy: 68, r: 8 },
    { type: "circle", stroke: false, cx: 110, cy: 68, r: 8 }
  ];
  icn["GR.M1.SECURITY"] = textm1("SEC");
  icn["GR.M1.SENSOR"] = {
    type: "path",
    d:
      "m 100,55 c -2,5 -5,8 -10,10 5,2 8,5 10,10 2,-5 5,-8 10,-10 -5,-2 -8,-5 -10,-10 z"
  };
  icn["GR.M1.SENSOR CONTROL MODULE"] = textm1("SCM");
  icn["GR.M1.SIGNALS INTELLIGENCE"] = {
    type: "path",
    fill: false,
    d: "m 100,55 0,23 m -15,-18 5,-5 5,5 5,-5 5,5 5,-5 5,5"
  };
  icn["GR.M1.SIGNAL SUPPORT"] = textm1("SPT");
  icn["GR.M1.SINGLE SHELTER SWITCH"] = textm1("SSS");
  icn["GR.M1.SINGLE ROCKET LAUNCHER"] = {
    type: "path",
    d: "M85,75 l15,-15 15,15",
    fill: false
  };
  icn["GR.M1.SMALL EXTENSION NODE"] = textm1("SEN");
  icn["GR.M1.SMOKE"] = textm1("S");
  icn["GR.M1.SMOKE/DECON"] = textm1("SD");
  icn["GR.M1.SNIPER"] = {
    type: "path",
    d: "M75,60 l20,0 M100,76 l0,-18 M125,60 l-20,0",
    fill: false
  };
  icn["GR.M1.SOUND RANGING"] = textm1("SDR");
  icn["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"] = textm1("SOF");
  icn["GR.M1.SPECIAL WEAPONS AND TACTICS"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 77,
    fontsize: 23,
    text: "SWAT"
  };
  icn["GR.M1.SQUAD"] = { type: "circle", stroke: false, cx: 100, cy: 68, r: 8 };
  icn["GR.M1.SUPPORT"] = textm1("SPT");
  icn["GR.M1.SURVEY"] = {
    type: "path",
    d: "m 108,78 -8,-8 m 0,0 -8,8 m 8,-8 0,-15 15,8 z"
  };
  icn["GR.M1.TACTICAL EXPLOITATION"] = textm1("TE");
  icn["GR.M1.TARGET ACQUISITION"] = textm1("TA");
  icn["GR.M1.TEAM"] = [
    { type: "circle", fill: false, cx: 100, cy: 65, r: 10 },
    { type: "path", d: "m 90,75 l20,-20" }
  ];
  icn["GR.M1.THEATRE"] = textm1("XXXXX");
  icn["GR.M1.TOPOGRAPHIC"] = {
    type: "path",
    fill: false,
    d: "m 92,65 c 6,3 10,3 16,0 m -18,13 10,-23 10,23"
  };
  icn["GR.M1.TRAINING CAMP"] = textm1("TNG");
  icn["GR.M1.HIJACKER"] = textm1("HJ");
  icn["GR.M1.UNMANNED AERIAL VEHICLE"] = {
    type: "path",
    stroke: false,
    d: "m 80,65 20,13 20,-13 0,-5 -20,10 -20,-10 z"
  };
  icn["GR.M1.UPGRADED EARLY WARNING RADAR"] = textm1("UEW");
  icn["GR.M1.UTILITY"] = textm1("U");
  icn["GR.M1.VIDEO IMAGERY"] = {
    type: "path",
    fill: false,
    d: "m 120,65 -11,0 m 11,10 -14,0 m 4,-14 -30,0 0,18 25,0 z m 10,2 0,14"
  };
  icn["GR.M1.WO-1"] = textm1("WO-1");
  icn["GR.M1.WO-2"] = textm1("WO-2");
  icn["GR.M1.WO-3"] = textm1("WO-3");
  icn["GR.M1.WO-4"] = textm1("WO-4");
  icn["GR.M1.WO-5"] = textm1("WO-5");
  icn["GR.M1.YARD"] = textm1("YRD");
  icn["GR.M2.AIRBORNE"] = {
    type: "path",
    d: "M75,140 C75,125 100,125 100,140 C100,125 125,125 125,140",
    fill: false
  };
  icn["GR.M2.ARCTIC"] = {
    type: "path",
    d: "M115,125 C125,125 125,135 115,135 L85,135 C75,135 75,125 85,125",
    fill: false
  };
  icn["GR.M2.ATTACK"] = textm2("A");
  icn["GR.M2.LANDING CRAFT"] = textm2("LC");
  icn["GR.M2.LANDING SHIP"] = textm2("LS");
  icn["GR.M2.SERVICE CRAFT/YARD"] = textm2("YY");
  icn["GR.M2.TUG HARBOR"] = textm2("YT");
  icn["GR.M2.OCEAN GOING TUG BOAT"] = textm2("AT");
  icn["GR.M2.SURFACE DEPLOYMENT AND DISTRIBUTION COMMAND"] = textm2("SDDC");
  icn["GR.M2.COMPOSITE"] = textm2("COMP");
  icn["GR.M2.LIGHT AND MEDIUM"] = textm2("L/M");
  icn["GR.M2.BATTLE DAMAGE REPAIR"] = textm2("BDR");
  icn["GR.M2.BICYCLE EQUIPPED"] = {
    type: "circle",
    cx: 100,
    cy: 132,
    r: 11,
    fill: false
  };
  icn["GR.M2.CASUALTY STAGING"] = textm2("CS");
  icn["GR.M2.CLEARING"] = textm2("CLR");
  icn["GR.M2.CLOSE RANGE"] = textm2("CR");
  icn["GR.M2.COMBAT SEARCH AND RESCUE"] = textm2("CSAR");
  icn["GR.M2.CONTROL"] = {
    type: "path",
    d:
      "m 98,130 2,-4 2,4 m -8,8 -4,-2 4,-2 m 8,8 -2,4 -2,-4 m 8,-8 4,2 -4,2 m -14,-2 16,0 m -8,-8 0,16",
    fill: false
  };
  icn["GR.M2.NONCOMBATANT GENERIC VESSEL"] = {
    type: "path",
    d: "m 95,135 0,-10 10,0 0,10 5,0 0,10 -20,0 0,-10 z",
    stroke: false
  };
  icn["GR.M2.SHELTER"] = {
    type: "path",
    d: "m 85,140 30,0 -5,-15 -10,-5 -10,5 z",
    stroke: false
  };
  icn["GR.M2.SELF-PROPELLED"] = {
    type: "path",
    d: "m 85,125 30,0 c 10,0 10,15 0,15 l -30,0 c -10,0 -10,-15 0,-15",
    fill: false
  };
  icn["GR.M2.CROSS-COUNTRY TRUCK"] = [
    { type: "path", d: "M60,120 l80,0", fill: false },
    { type: "circle", fill: false, cx: 65, cy: 125, r: 5 },
    { type: "circle", fill: false, cx: 100, cy: 125, r: 5 },
    { type: "circle", fill: false, cx: 135, cy: 125, r: 5 }
  ];
  icn["GR.M2.CAVALRY"] = {
    type: "text",
    stroke: false,
    x: 110,
    y: 140,
    fontsize: 25,
    text: "CAV"
  };
  icn["GR.M2.DECONTAMINATION"] = textm2("D");
  icn["GR.M2.DEMOLITION"] = textm2("DEM");
  icn["GR.M2.DENTAL"] = {
    type: "text",
    stroke: false,
    x: 115,
    y: 133,
    fontsize: 25,
    text: "D"
  };
  icn["GR.M2.DIGITAL"] = textm2("DIG");
  icn["GR.M2.ENHANCED POSITION LOCATION REPORTING SYSTEM"] = {
    type: "path",
    d: "m 87,142 13,-12 13,12 m -13,-20 0,20 0,0",
    fill: false
  };
  icn["GR.M2.EQUIPMENT"] = textm2("E");
  icn["GR.M2.EQUIMENT/TROOP"] = textm2("E/T");
  icn["GR.M2.HEAVY"] = textm2("H");
  icn["GR.M2.HIGH ALTITUDE"] = textm2("HA");
  icn["GR.M2.HIGH TO MEDIUM ALTITUDE"] = textm2("HMA");
  icn["GR.M2.HIGH TO LOW ALTITUDE"] = textm2("HLA");
  icn["GR.M1.CYBERSPACE"] = textm1("CYB");
  icn["GR.M2.AIR ASSAULT"] = {
    type: "path",
    fill: false,
    d: "m 85,125 15,20 15,-20"
  };
  icn["GR.M2.VERY HEAVY"] = textm2("VH");
  icn["GR.M2.CYBERSPACE"] = textm2("CYB");
  icn["GR.M2.NAVY BARGE, SELF-PROPELLED"] = textm2("YS");
  icn["GR.M2.NAVY BARGE, NOT SELF-PROPELLED"] = textm2("YB");
  icn["GR.M2.LAUNCH"] = textm2("YFT");
  icn["GR.M1.TACTICAL SATELLITE COMMUNICATIONS"] = [
    {
      type: "path",
      d: "m 105,65 10,0 m -30,0 10,0 M 85,77 c 10,-7 20,-7 30,0",
      fill: false
    },
    {
      type: "path",
      d:
        "m 75.4,60.9 0,9.1 13.1,0 0,-9.1 z m 36,0 0,9.1 13.1,0 0,-9.1 z m -18,0 0,9.1 13.1,0 0,-9.1 z",
      stroke: false
    }
  ];
  icn["GR.M2.INTERMODAL"] = {
    type: "path",
    d: "m 80,125 40,0 0,-4 8,9 -8,9 0,-4 -40,0 0,4 -8,-9 8,-9 z",
    fill: false
  };
  icn["GR.M2.INTENSIVE CARE"] = textm2("IC");
  icn["GR.M2.J1"] = textm2("J1");
  icn["GR.M2.J2"] = textm2("J2");
  icn["GR.M2.J3"] = textm2("J3");
  icn["GR.M2.J4"] = textm2("J4");
  icn["GR.M2.J5"] = textm2("J5");
  icn["GR.M2.J6"] = textm2("J6");
  icn["GR.M2.J7"] = textm2("J7");
  icn["GR.M2.J8"] = textm2("J8");
  icn["GR.M2.J9"] = textm2("J9");
  icn["GR.M2.LIGHT"] = textm2("L");
  icn["GR.M2.LABORATORY"] = textm2("LAB");
  icn["GR.M2.LAUNCHER"] = {
    type: "path",
    fill: false,
    d: "M80,140 L115,120 120,140"
  };
  icn["GR.M2.LONG RANGE"] = textm2("LR");
  icn["GR.M2.LONG RANGE SURVEILLANCE"] = {
    type: "text",
    stroke: false,
    x: 110,
    y: 140,
    fontsize: 25,
    text: "LRS"
  };
  icn["GR.M2.LOW ALTITUDE"] = textm2("LA");
  icn["GR.M2.MEDIUM"] = textm2("M");
  icn["GR.M2.MEDIUM ALTITUDE"] = textm2("MA");
  icn["GR.M2.MEDIUM TO LOW ALTITUDE"] = textm2("MLA");
  icn["GR.M2.MEDIUM RANGE"] = textm2("MR");
  icn["GR.M2.MOUNTAIN"] = {
    type: "path",
    stroke: false,
    d: "M90,140 L100,120 110,140"
  };
  icn["GR.M2.MULTIPLE ALTITUDES"] = textm2("H/MA");
  icn["GR.M2.MULTI-CHANNEL"] = textm2("MC");
  icn["GR.M2.OF-1"] = textm2("OF-1");
  icn["GR.M2.OF-2"] = textm2("OF-2");
  icn["GR.M2.OF-3"] = textm2("OF-3");
  icn["GR.M2.OF-4"] = textm2("OF-4");
  icn["GR.M2.OF-5"] = textm2("OF-5");
  icn["GR.M2.OF-6"] = textm2("OF-6");
  icn["GR.M2.OF-7"] = textm2("OF-7");
  icn["GR.M2.OF-8"] = textm2("OF-8");
  icn["GR.M2.OF-9"] = textm2("OF-9");
  icn["GR.M2.OF-10"] = textm2("OF-10");
  icn["GR.M2.OF-D"] = textm2("OF-D");
  icn["GR.M2.OPTICAL"] = textm2("OPT");
  icn["GR.M2.OR-1"] = textm2("OR-1");
  icn["GR.M2.OR-2"] = textm2("OR-2");
  icn["GR.M2.OR-3"] = textm2("OR-3");
  icn["GR.M2.OR-4"] = textm2("OR-4");
  icn["GR.M2.OR-5"] = textm2("OR-5");
  icn["GR.M2.OR-6"] = textm2("OR-6");
  icn["GR.M2.OR-7"] = textm2("OR-7");
  icn["GR.M2.OR-8"] = textm2("OR-8");
  icn["GR.M2.OR-9"] = textm2("OR-9");
  icn["GR.M2.GUERILLA"] = textm2("G");
  icn["GR.M2.AMPHIBIOUS"] = {
    Unknown: {
      type: "path",
      d:
        "M 64 144.9 C 80.4 143.9 63.1 125 81.4 125 C 100.2 125 81.4 145 100.2 145 C 119 145 100.2 125 119 125 C 137.1 125 120.2 143.6 135.9 144.9",
      fill: false
    },
    Friend: {
      type: "path",
      d:
        "m 25,145 c 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 18.8,20 18.8,0 0,-20 18.8,-20 18.8,0 0,20 20,20",
      fill: false
    },
    Neutral: {
      type: "path",
      d:
        "M 45 125 C 61.7 125.9 44.2 145 62.6 145 C 81.4 145 62.6 125 81.4 125 C 100.2 125 81.4 145 100.2 145 C 119 145 100.2 125 119 125 C 137.8 125 119 145 137.8 145 C 155.9 145 138.9 126.2 154.8 125 ",
      fill: false
    },
    Hostile: {
      type: "path",
      d:
        "M 70.4 142.4 C 74.8 137 66.8 125 81.4 125 C 100.2 125 81.4 145 100.2 145 C 119 145 100.2 125 119 125 C 133.3 125 125.7 136.6 129.7 142.1 ",
      fill: false
    }
  }[affiliation];
  icn["GR.M2.PACK ANIMAL"] = {
    type: "path",
    d: "m 84,140 9,-15 7,15 7,-15 9,15",
    fill: false
  };
  icn["GR.M2.PATIENT EVACUATION COORDINATION"] = textm2("PEC");
  icn["GR.M2.PREVENTIVE MAINTENANCE"] = textm2("PM");
  icn["GR.M2.PSYCHOLOGICAL"] = {
    type: "text",
    stroke: false,
    x: 115,
    y: 133,
    fontsize: 25,
    text: "P"
  };
  icn["GR.M2.RADIO RELAY LINE OF SIGHT"] = [
    { type: "circle", cx: 100, cy: 132, r: 11, fill: false },
    {
      type: "path",
      d:
        "M 90.8 128.2 C 90.3 129.3 90 130.6 90 132 C 90 133.4 90.3 134.7 90.8 135.8 L 100 132 L 90.8 128.2 z M 100 132 L 109.3 135.8 C 109.7 134.7 110 133.4 110 132 C 110 130.6 109.7 129.3 109.3 128.2 L 100 132 z"
    }
  ];
  icn["GR.M2.RAILROAD"] = [
    { type: "path", d: "M60,120 l80,0", fill: false },
    { type: "circle", fill: false, cx: 65, cy: 125, r: 5 },
    { type: "circle", fill: false, cx: 75, cy: 125, r: 5 },
    { type: "circle", fill: false, cx: 125, cy: 125, r: 5 },
    { type: "circle", fill: false, cx: 135, cy: 125, r: 5 }
  ];
  icn["GR.M2.TRACTOR TRAILER"] = [
    { type: "path", d: "M60,120 l80,0", fill: false },
    { type: "circle", fill: false, cx: 65, cy: 125, r: 5 },
    { type: "circle", fill: false, cx: 75, cy: 125, r: 5 },
    { type: "circle", fill: false, cx: 135, cy: 125, r: 5 }
  ];
  icn["GR.M2.RECOVERY (UNMANNED SYSTEMS)"] = {
    type: "path",
    d: "m 70,125 c0,20 60,20 60,0",
    fill: false
  };
  icn["GR.M2.RECOVERY (MAINTENANCE)"] = {
    type: "path",
    fill: false,
    d: "M75,125 c8,0 8,16 0,16 m8,-8 l35,0 m8,-8 c-8,0 -8,16 0,16"
  };
  icn["GR.M2.REFUEL"] = textm2("K");
  icn["GR.M2.RESCUE COORDINATION CENTRE"] = textm2("RCC");
  icn["GR.M2.RIVERINE"] = {
    type: "path",
    d: "m 80,125 c 0,10 40,10 40,0 z",
    fill: false
  };
  icn["GR.M2.ROBOTIC"] = {
    type: "path",
    d:
      "M100,121.68L114.895,136.459C115.309,136.201 115.798,136.052 116.321,136.052C117.812,136.052 119.022,137.262 119.022,138.753C119.022,140.243 117.812,141.454 116.321,141.454C114.831,141.454 113.62,140.243 113.62,138.753C113.62,138.407 113.686,138.076 113.805,137.772L103.378,132.6L100.851,141.224C101.072,141.298 101.28,141.4 101.471,141.526C102.211,142.008 102.701,142.843 102.701,143.791C102.701,145.281 101.491,146.492 100,146.492C99.451,146.492 98.939,146.327 98.512,146.045C97.776,145.562 97.29,144.73 97.29,143.785C97.29,142.592 98.064,141.579 99.138,141.222L96.613,132.606L86.186,137.778C86.305,138.082 86.37,138.413 86.37,138.759C86.37,140.25 85.16,141.46 83.669,141.46C82.179,141.46 80.969,140.25 80.969,138.759C80.969,137.268 82.179,136.058 83.669,136.058C84.193,136.058 84.681,136.207 85.095,136.465L99.991,121.671L100,121.662L100,121.68Z",
    stroke: false
  };
  icn["GR.M2.SECURITY FORCE ASSISTANCE"] = textm2("SFA");
  icn["GR.M2.SINGLE CHANNEL"] = textm2("SC");
  icn["GR.M2.SKI"] = {
    type: "path",
    d: "m 95,145 -9,-8 m 28,0 -9,8 m -15,-24 20,20 m 0,-20 -20,20",
    fill: false
  };
  icn["GR.M2.SHORT RANGE"] = textm2("SR");
  icn["GR.M2.STRATEGIC"] = textm2("STR");
  icn["GR.M2.STRATEGIC MISSILE"] = textm2("S");
  icn["GR.M2.SUPPORT"] = textm2("SPT");
  icn["GR.M2.TACTICAL"] = textm2("TAC");
  icn["GR.M2.TACTICAL MISSILE"] = textm2("T");
  icn["GR.M2.TARGET ACQUISITION"] = textm2("TA");
  icn["GR.M2.TOWED"] = [
    { type: "path", d: "M70,120 l60,0", fill: false },
    { type: "circle", fill: false, cx: 65, cy: 120, r: 5 },
    { type: "circle", fill: false, cx: 135, cy: 120, r: 5 }
  ];
  icn["GR.M2.TROOP"] = textm2("T");
  icn["GR.M2.TRACKED"] = {
    type: "path",
    d: "M 70,120 l 60,0 c10,0 10,10 0,10 l -60,0 c-10,0 -10,-10 0,-10",
    fill: false
  };
  icn["GR.M2.TRUCK"] = [
    { type: "path", d: "M60,120 l80,0", fill: false },
    { type: "circle", fill: false, cx: 65, cy: 125, r: 5 },
    { type: "circle", fill: false, cx: 135, cy: 125, r: 5 }
  ];
  icn["GR.M2.UTILITY"] = textm2("U");
  icn["GR.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING "] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 135,
    fontsize: 20,
    text: "VSTOL"
  };
  icn["GR.M2.VETERINARY"] = {
    type: "text",
    stroke: false,
    x: 115,
    y: 133,
    fontsize: 25,
    text: "V"
  };
  icn["GR.M2.WHEELED"] = [
    { type: "circle", cx: 70, cy: 125, r: 5, fill: false },
    { type: "circle", cx: 100, cy: 125, r: 5, fill: false },
    { type: "circle", cx: 130, cy: 125, r: 5, fill: false }
  ];
  icn["GR.M2.WHEELED LIMITED"] = [
    { type: "circle", cx: 70, cy: 125, r: 5, fill: false },
    { type: "circle", cx: 130, cy: 125, r: 5, fill: false }
  ];
  icn["GR.M2.WO-1"] = textm2("WO-1");
  icn["GR.M2.WO-2"] = textm2("WO-2");
  icn["GR.M2.WO-3"] = textm2("WO-3");
  icn["GR.M2.WO-4"] = textm2("WO-4");
  icn["GR.M2.WO-5"] = textm2("WO-5");
  // Ground Equipment --------------------------------------------------------------
  icn["GR.EQ.SHORT RANGE"] = { type: "path", d: "m 85,100 30,0", fill: false };
  icn["GR.EQ.INTERMEDIATE RANGE"] = {
    type: "path",
    d: "m 85,105 30,0 m -30,-10 30,0",
    fill: false
  };
  icn["GR.EQ.LONG RANGE"] = {
    type: "path",
    d: "m 85,110 30,0 m -30,-20 30,0 m -30,10 30,0",
    fill: false
  };
  icn["GR.EQ.WEAPON"] = { type: "path", d: "m 100,60 0,80", fill: false };
  icn["GR.EQ.RIFLE"] = {
    type: "path",
    d: "m 100,60 0,80 M 85,75 100,60 115,75",
    fill: false
  };
  icn["GR.EQ.RIFLE DISMOUNTED1"] = {
    type: "path",
    d: "m 90,90 10,-10 10,10 m -10,-10 0,40",
    fill: false
  };
  icn["GR.EQ.MACHINE GUN"] = {
    type: "path",
    d: "m 100,60 0,80 M 85,75 100,60 115,75 M 80,140 120,140",
    fill: false
  };
  icn["GR.EQ.GRENADE LAUNCHER"] = [
    icn["GR.EQ.RIFLE"],
    { type: "circle", cx: 100, cy: 90, r: 15, fill: false }
  ];
  icn["GR.EQ.FLAME THROWER"] = {
    type: "path",
    fill: false,
    d: "m 90,135 0,-70 c 0,-15 20,-15 20,0"
  };
  icn["GR.EQ.AIR DEFENCE GUN"] = [
    {
      type: "path",
      d:
        "m 85,140 30,0 c 0,-20 -30,-20 -30,0 z m 15,-80 0,65 m 15,-45 0,40 m -30,-40 0,40",
      fill: false
    }
  ];
  if (!STD2525 && !numberSIDC) {
    icn["GR.EQ.AIR DEFENCE GUN"].push({
      type: "path",
      d: "M 85,75 100,60 115,75",
      fill: false
    });
  }
  icn["GR.EQ.ANTITANK GUN"] = {
    type: "path",
    d: "m 85,140 15,-15 15,15 m -15,-80 0,65 m -15,-45 0,40 m 30,-40 0,40",
    fill: false
  };
  icn["GR.EQ.DIRECT FIRE GUN"] = {
    type: "path",
    d: "m 100,60 0,80 m 15,-60 0,40 m -30,-40 0,40",
    fill: false
  };
  icn["GR.EQ.RECOILLESS GUN"] = {
    type: "path",
    d: "m 85,75 15,-15 15,15 m 0,5 0,40 m -30,-40 0,40 m 15,-60 0,80",
    fill: false
  };
  icn["GR.EQ.HOWITZER"] = [
    { type: "circle", cx: 100, cy: 130, r: 10, fill: false },
    {
      type: "path",
      d: "m 115,80 0,40 m -30,-40 0,40 m 15,-60 0,60",
      fill: false
    }
  ];
  if (!STD2525) {
    icn["GR.EQ.HOWITZER"].push({
      type: "path",
      d: "M 85,75 100,60 115,75",
      fill: false
    });
  }
  icn["GR.EQ.HOWITZER TRACKED"] = {
    type: "path",
    d: "M 70,120 l 60,0 c10,0 10,10 0,10 l -60,0 c-10,0 -10,-10 0,-10",
    fill: false
  };
  icn["GR.EQ.MISSILE LAUNCHER"] = {
    type: "path",
    d: "m 100,140 0,-80 m -15,80 0,-65 c 0,-20 30,-20 30,0 l 0,65",
    fill: false
  };
  icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"] = {
    type: "path",
    d:
      "m 85,140 30,0 c 0,-20 -30,-20 -30,0 z m 15,-15 0,-65 m -15,80 0,-65 c 0,-20 30,-20 30,0 l 0,65",
    fill: false
  };
  icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "R"
  };
  icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"] = [
    { type: "text", stroke: false, x: 68, y: 110, fontsize: 25, text: "E" },
    { type: "text", stroke: false, x: 132, y: 110, fontsize: 25, text: "R" }
  ];
  icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 145,
    fontsize: 30,
    text: "T"
  };
  icn["GR.EQ.ANTITANK MISSILE LAUNCHER"] = {
    type: "path",
    d:
      "m 85,140 15,-15 15,15 M 85,120 85,75 c 0,-20 30,-20 30,0 l 0,45 m -15,5 0,-65",
    fill: false
  };
  icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"] = [
    icn["GR.EQ.MISSILE LAUNCHER"]
  ];
  if (STD2525) {
    icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"].push({
      type: "path",
      d: "m 85,140 30,0",
      fill: false
    });
  }
  icn["GR.EQ.MORTAR"] = [
    { type: "path", d: "m 100,60 0,60 M 85,75 100,60 115,75", fill: false },
    { type: "circle", cx: 100, cy: 130, r: 10, fill: false }
  ];
  icn["GR.EQ.SINGLE ROCKET LAUNCHER"] = {
    type: "path",
    d: "m 85,75 15,-15 15,15 m -15,-5 0,70 M 85,85 100,70 115,85",
    fill: false
  };
  icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"] = {
    type: "path",
    d:
      "m 115,90 0,40 m -30,-40 0,40 m 0,-55 15,-15 15,15 m -15,-5 0,70 M 85,85 100,70 115,85",
    fill: false
  };
  icn["GR.EQ.ANTITANK ROCKET LAUNCHER"] = {
    type: "path",
    d:
      "m 85,140 15,-15 15,15 M 85,85 100,70 115,85 m -15,-15 0,55 M 85,75 100,60 115,75",
    fill: false
  };
  icn["GR.EQ.NON-LETHAL WEAPON"] = {
    type: "path",
    d: "m 100,60 0,80 M 80,60 l40,0",
    fill: false
  };
  icn["GR.EQ.NON-LETHAL GRENADE LAUNCHER"] = [
    icn["GR.EQ.NON-LETHAL WEAPON"],
    { type: "circle", cx: 100, cy: 90, r: 15, fill: false }
  ];
  icn["GR.EQ.TASER"] = [icn["GR.EQ.NON-LETHAL WEAPON"], text("Z")];
  icn["GR.EQ.WATER CANNON"] = [icn["GR.EQ.NON-LETHAL WEAPON"], text("W")];
  icn["GR.EQ.LIMITED CROSS-COUNTRY"] = [
    { type: "path", d: "m 70,130 60,0", fill: false },
    { type: "circle", cx: 75, cy: 135, r: 5, fill: false },
    { type: "circle", cx: 125, cy: 135, r: 5, fill: false }
  ];
  icn["GR.EQ.CROSS-COUNTRY"] = [
    { type: "path", d: "m 70,130 60,0", fill: false },
    { type: "circle", cx: 75, cy: 135, r: 5, fill: false },
    { type: "circle", cx: 100, cy: 135, r: 5, fill: false },
    { type: "circle", cx: 125, cy: 135, r: 5, fill: false }
  ];
  icn["GR.EQ.ARMOURED FIGHTING VEHICLE"] = {
    type: "path",
    d: "m 70,100 30,-30 30,30 -30,30 z m 60,-30 0,60 m -60,-60 0,60 0,0",
    fill: false
  };
  icn["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"] = [
    icn["GR.EQ.ARMOURED FIGHTING VEHICLE"]
  ];
  if (numberSIDC) {
    icn["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"].push({
      type: "text",
      stroke: false,
      x: 100,
      y: 110,
      fontsize: 30,
      text: "C2"
    });
  } else {
    icn["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"].push({
      type: "path",
      d: "m 80,90 20,15 0,-10 20,15",
      fill: false
    });
  }
  icn["GR.EQ.ARMOURED PERSONNEL CARRIER"] = {
    type: "path",
    fill: false,
    d: "m 70,80 30,-10 30,10 m -60,-10 0,60 60,0 0,-60"
  };
  icn["GR.EQ.ARMOURED PERSONNEL CARRIER COMBAT SERVICE SUPPORT VEHICLE"] = [
    icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
    { type: "path", d: "m 70,120 60,0", fill: false }
  ];
  icn["GR.EQ.ARMOURED PERSONNEL CARRIER ENGINEER RECON VEHICLE"] = {
    type: "path",
    fill: false,
    d: "M 130,80 70,130"
  };
  icn["GR.EQ.COMBAT SERVICE SUPPORT VEHICLE"] = {
    type: "path",
    fill: false,
    d: "M 70,120 130,120"
  };
  icn["GR.EQ.ARMOURED MEDICAL PERSONNEL CARRIER"] = {
    type: "path",
    fill: false,
    d: "m 70,100 60,0 m -30,-30 0,60"
  };
  icn[
    "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
  ] = [
    {
      type: "path",
      d:
        "m 60,120 80,0 M 120,80 c 25,0.2 25,40 0,40 l -40,0 C 55,120 55,80 80,80 Z",
      fill: false
    },
    icn["GR.M2.WHEELED LIMITED"]
  ];
  icn["GR.EQ.ARMOURED VEHICLE"] = text("A");
  icn["GR.EQ.ARMORED CARRIER WITH VOLCANO"] = text("V");
  icn["GR.EQ.TANK"] = {
    type: "path",
    fill: false,
    d: "m 70,80 60,0 m -60,40 60,0 m -60,-50 0,60 0,0 m 60,-60 0,60"
  };
  icn["GR.EQ.ASSAULT BREACHER VEHICLE (ABV) WITH COMBAT DOZER BLADE"] = {
    type: "path",
    fill: false,
    d:
      "m 100,95 30,25 m -30,-60 0,35 -30,25 m 10,-60 40,0 m -50,20 60,0 m -60,40 60,0 m -60,-50 0,60 0,0 m 60,-60 0,60"
  };
  icn["GR.EQ.LIGHT TANK"] = { type: "path", fill: false, d: "m 100,80 0,40" };
  icn["GR.EQ.MEDIUM TANK"] = {
    type: "path",
    fill: false,
    d: "m 105,80 0,40 m -10,-40 0,40"
  };
  icn["GR.EQ.HEAVY TANK"] = {
    type: "path",
    fill: false,
    d: "m 110,80 0,40 m -20,-40 0,40 m 10,-40 0,40"
  };
  icn["GR.EQ.TANK RECOVERY VEHICLE"] = {
    type: "path",
    fill: false,
    d:
      "m 85,100 30,0 m 10,-10 c -13.1,0 -12.4,20 0,20 M 75,90 c 12.7,0.3 12.7,20.3 0,20"
  };
  icn["GR.EQ.BRIDGE"] = {
    type: "path",
    d:
      "m 115,75 -10,10 0,30 10,10 m -30,-50 10,10 0,30 -10,10 m -15,-55 60,0 0,60 -60,0 0,-60",
    fill: false
  };
  icn["GR.EQ.FIXED BRIDGE"] = {
    type: "path",
    d: "M 100,70 100,130",
    fill: false
  };
  icn["GR.EQ.FOLDING GIRDER BRIDGE"] = {
    type: "path",
    d: "M 110, 80 90,80 90,120 110,120",
    fill: false
  };
  icn["GR.EQ.HOLLOW DECK BRIDGE"] = {
    type: "path",
    d: "M 110, 80 90,80 90,120 110,120 z",
    fill: false
  };
  icn["GR.EQ.DRILL"] = icn["GR.IC.DRILLING"];
  icn["GR.EQ.DOZER"] = {
    type: "path",
    d:
      "m 90,60 20,0 m -10,0 0,20 m -30,0 60,0 m -60,-10 0,60 0,0 m 60,-60 0,60 m -60,-10 60,0",
    fill: false
  };
  icn["GR.EQ.DOZER ARMORED"] = {
    type: "path",
    d:
      "m 70,130 60,0 m -30,-70 0,10 m -30,10 30,-10 30,10 m 0,-10 0,60 m -60,-60 0,60 0,0 m 20,-70 20,0",
    fill: false
  };
  icn["GR.EQ.EARTHMOVER"] = {
    type: "path",
    d:
      "m 100,60 0,20 m -25,-15 5,-5 40,0 5,5 m -55,15 60,0 m -60,40 60,0 m 0,-50 0,60 m -60,-60 0,60 0,0",
    fill: false
  };
  icn["GR.EQ.MULTIFUNCTIONAL EARTHMOVER/DIGGER"] = [
    icn["GR.EQ.EARTHMOVER"],
    text("MF")
  ];
  icn["GR.EQ.MINE CLEARING EQUIPMENT"] = {
    type: "path",
    d: "m 100,80 0,15 -30,25 60,0 -30,-25",
    fill: false
  };
  icn["GR.EQ.MINE LAYING VEHICLE"] = [
    {
      type: "path",
      d: "m 90,85 20,30 m 0,-30 -20,30 m 10,-30 0,30",
      fill: false
    },
    { type: "circle", cx: 100, cy: 100, r: 10 }
  ];
  icn["GR.EQ.MINE SCATTERABLE"] = [
    text("S"),
    { type: "circle", cx: 85, cy: 115, r: 5, fill: false },
    { type: "circle", cx: 100, cy: 115, r: 5, fill: false },
    { type: "circle", cx: 115, cy: 115, r: 5, fill: false }
  ];
  icn["GR.EQ.UTILITY VEHICLE"] = {
    type: "path",
    fill: false,
    d: "m 70,65 c 0,15 60,15 60,0 l 0,65 -60,0 z"
  };
  icn["GR.EQ.UTILITY VEHICLE BACKHOE"] = [
    { type: "path", fill: false, d: "M 130,130 100,80 75,95 75,95" },
    { type: "path", d: "M 75,105 85,95 75,95 z" }
  ];
  icn["GR.EQ.UTILITY VEHICLE FERRY TRANSPORTER"] = {
    type: "path",
    fill: false,
    d: "m 75,100 c 15,15 35,15 50,0 z"
  };
  icn["GR.EQ.UTILITY VEHICLE LIGHT"] = {
    type: "path",
    fill: false,
    d: "M 100,78.3 100,130"
  };
  icn["GR.EQ.UTILITY VEHICLE MEDIUM"] = {
    type: "path",
    fill: false,
    d: "m 105,130 0,-52 M 95,130 l0,-52"
  };
  icn["GR.EQ.UTILITY VEHICLE HEAVY"] = {
    type: "path",
    fill: false,
    d: "m 110,130 0,-53 m -20,50 0,-53 m 10,1.3 0,52"
  };
  icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"] = {
    type: "path",
    fill: false,
    d: "m 130,130 -40,-40 0,25 c 0,5 -10,5 -10,0"
  };
  icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK.LIGHT"] = {
    type: "path",
    fill: false,
    d: "m 105,115 10,-10"
  };
  icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK.HEAVY"] = {
    type: "path",
    fill: false,
    d: "m 120,110 -10,10 m -10,-10 10,-10 m -5,15 10,-10"
  };
  icn["GR.EQ.MEDICAL VEHICLE"] = {
    type: "path",
    fill: false,
    d: "m 70,100 l 60,0 M 100,78.3 100,130"
  };
  icn["GR.EQ.MEDICAL EVACUATION"] = {
    type: "path",
    d: "m 95,85 10,0 0,10 10,0 0,10 -10,0 0,10 -10,0 0,-10 -10,0 0,-10 10,0 z"
  };
  icn["GR.EQ.MOBILE EMERGENCY PHYSICIAN"] = {
    type: "path",
    fill: false,
    d: "m 70,100 l 60,0 M 100,78.3 100,130 M 85,85 115,85"
  };
  icn["GR.EQ.BUS"] = [icn["GR.EQ.UTILITY VEHICLE"], text("B")];
  icn["GR.EQ.SEMI-TRAILER TRUCK"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    { type: "path", fill: false, d: "m 140,90 0,20 m -10,-10 10,0" },
    { type: "circle", cx: 75, cy: 135, r: 5, fill: false },
    { type: "circle", cx: 85, cy: 135, r: 5, fill: false },
    { type: "circle", cx: 125, cy: 135, r: 5, fill: false }
  ];
  icn["GR.EQ.WATER VEHICLE"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    {
      type: "path",
      fill: false,
      d:
        "m 70,95 c 10,0 0,10 10,10 10,0 0,-10 10,-10 10,0 0,10 10,10 10,0 0,-10 10,-10 10,0 0,10 10,10 10,0 0,-10 10,-10"
    },
    { type: "circle", cx: 75, cy: 135, r: 5, fill: false },
    { type: "circle", cx: 125, cy: 135, r: 5, fill: false }
  ];
  icn["GR.EQ.TRAIN LOCOMOTIVE"] = {
    type: "path",
    fill: false,
    d: "m 70,70 0,60 60,0 0,-30 -30,0 0,-30 z"
  };
  icn["GR.EQ.RAILCAR"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    { type: "circle", fill: false, cx: 75, cy: 135, r: 5 },
    { type: "circle", fill: false, cx: 85, cy: 135, r: 5 },
    { type: "circle", fill: false, cx: 115, cy: 135, r: 5 },
    { type: "circle", fill: false, cx: 125, cy: 135, r: 5 }
  ];
  icn["GR.EQ.CBRN EQUIPMENT"] = [
    {
      type: "path",
      d: "M80,140 c0,-20 10,-60 50,-63 m-10,63 c0,-20 -10,-60 -50,-63 ",
      fill: false
    },
    { type: "circle", cx: 70, cy: 85, r: 8 },
    { type: "circle", cx: 130, cy: 85, r: 8 }
  ];
  icn["GR.EQ.COMPUTER SYSTEM"] = {
    type: "path",
    d: "m 100,132 0,-10 -35,0 0,-50 70,0 0,50 -35,0 m -25,10 50,0",
    fill: false
  };
  icn["GR.EQ.COMMAND LAUNCH EQUIPMENT (CLE)"] = text("CLE");
  icn["GR.EQ.GENERATOR SET"] = text("G");
  icn[
    "GR.EQ.GROUND-BASED MIDCOURSE DEFENSE (GMD) FIRE CONTROL (GFC) CENTER"
  ] = text("GFC");
  icn[
    "GR.EQ.IN-FLIGHT INTERCEPTOR COMMUNICATIONS SYSTEM (IFICS) DATA TERMINAL (IDT)"
  ] = {
    type: "path",
    fill: false,
    d:
      "m 80,82.4 45,-2 -4,37 m -6,-1 0,-35 -34,9 m 12,21 0,8 M 80,82.4 c 0,25 16,35 41,35"
  };
  icn["GR.EQ.LASER"] = {
    type: "path",
    fill: false,
    d:
      "m 100,55 0,25 10,5 -20,5 20,5 -20,5 10,5 0,15 10,5 -20,5 20,5 -20,5 20,5 M 90,65 100,55 110,65"
  };
  icn["GR.EQ.TENT"] = {
    type: "path",
    fill: false,
    d: "m 65,124.4 10,-37 25,-10 25,10 10,37 z"
  };
  icn["GR.EQ.TENT CIVILIAN"] = {
    type: "path",
    fill: false,
    d: "m 75,120 10,-30 15,-10 15,10 10,30 z"
  };
  icn["GR.EQ.TENT MILITARY"] = {
    type: "path",
    d: "m 75,120 10,-30 15,-10 15,10 10,30 z"
  };
  icn["GR.EQ.UNIT DEPLOYMENT SHIPMENTS"] = text("DPLY");
  icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"] = {
    type: "path",
    fill: false,
    d: "m 100,125 0,-20"
  };
  icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"] = {
    type: "path",
    fill: false,
    d: "m 103,105 0,20 m -6,-20 0,20"
  };
  icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"] = {
    type: "path",
    fill: false,
    d: "m 106,105 0,20 m -12,-20 0,20 m 6,-20 0,20"
  };
  icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"] = {
    type: "path",
    fill: false,
    d: "m 140,105 0,20 m -10,-10 10,0"
  };
  icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 90,125 20,0 m -20,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 35,0 5,0 0,-20 -20,0 0,-20 -20,0 0,20 -20,0 0,20 5,0 m 50,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z"
    },
    {
      type: "path",
      fill: false,
      strokewidth: 2,
      d: "m 95,90 0,15 10,0 0,-15 z"
    }
  ];
  icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 90,125 20,0 m -20,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 35,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 0,0 5,0 0,-20 -20,0 -20,0 0,-20 -20,0 0,20 0,20 5,0"
    },
    {
      type: "path",
      fill: false,
      strokewidth: 2,
      d: "m 75,90 0,15 10,0 0,-15 z"
    }
  ];
  icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 90,125 20,0 m -20,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 35,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 0,0 5,0 0,-20 0,-20 -20,0 -20,0 -20,0 0,20 0,20 5,0"
    },
    {
      type: "path",
      fill: false,
      strokewidth: 2,
      d:
        "m 115,90 0,15 10,0 0,-15 z m -20,0 0,15 10,0 0,-15 z m -20,0 0,15 10,0 0,-15 z"
    }
  ];
  icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 90,125 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 35,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m -35,0 20,0 m 15,0 5,0 0,-20 0,-20 -20,0 -20,0 0,20 -20,0 0,20 5,0"
    },
    {
      type: "path",
      fill: false,
      strokewidth: 2,
      d: "m 95,90 0,15 10,0 0,-15 z"
    }
  ];
  icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : false,
    d:
      "m 90,125 20,0 m -20,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 35,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 0,0 5,0 0,-20 -60,0 0,20 5,0 m 15,-20 5,-15"
  };
  icn["GR.EQ.PACK ANIMAL"] = {
    type: "path",
    fill: false,
    d: "m 70,125 15,-50 15,50 15,-50 15,50 "
  };
  icn["GR.EQ.MISSILE SUPPORT"] = [
    { type: "text", stroke: false, x: 100, y: 100, fontsize: 20, text: "MSL" },
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 20, text: "SPT" }
  ];
  icn["GR.EQ.MISSILE TRANSLOADER"] = [
    { type: "text", stroke: false, x: 100, y: 110, fontsize: 30, text: "MSL" },
    { type: "path", fill: false, d: "m 75,70 50,0 m -25,10 c 0,-5 0,-10 0,-10" }
  ];
  icn["GR.EQ.MISSILE TRANSPORTER"] = [
    { type: "text", stroke: false, x: 100, y: 110, fontsize: 30, text: "MSL" },
    { type: "path", fill: false, d: "m 55,85 90,0" }
  ];
  icn["GR.EQ.MISSILE CRANE/LOADING DEVICE"] = [
    { type: "text", stroke: false, x: 100, y: 110, fontsize: 30, text: "MSL" },
    {
      type: "path",
      fill: false,
      d: "m 75,80 25,-20 c 0,0 0,15 0,15 l 5,0 0,-5"
    }
  ];
  icn["GR.EQ.MISSILE PROPELLANT TRANSPORTER"] = [
    { type: "text", stroke: false, x: 90, y: 110, fontsize: 20, text: "MSL" },
    { type: "path", fill: false, d: "m 120,115 0,-15 -10,-10 20,0 -10,10" }
  ];
  icn["GR.EQ.MISSILE WARHEAD TRANSPORTER"] = [
    { type: "text", stroke: false, x: 100, y: 100, fontsize: 20, text: "MSL" },
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 20, text: "WHD" }
  ];
  icn["GR.EQ.LAND MINE"] = numberSIDC
    ? { type: "circle", cx: 100, cy: 100, r: 22, fill: false }
    : [
        { type: "path", fill: false, d: "m 70,65 60,0 -30,65 z" },
        {
          type: "text",
          stroke: false,
          x: 100,
          y: 90,
          fontfamily: "Arial",
          fontsize: 30,
          text: "M"
        }
      ];
  icn["GR.EQ.ANTIPERSONNEL LAND MINE"] = [
    { type: "circle", cx: 100, cy: 100, r: 22 },
    {
      type: "path",
      d: "M117,82 l20,-18 -18,25z M83,82 l-20,-18 18,25z",
      stroke: false
    }
  ];
  icn["GR.EQ.ANTIPERSONNEL LAND MINE LESS THAN LETHAL"] = [
    { type: "circle", cx: 100, cy: 100, r: 22, fill: false },
    {
      type: "path",
      d: "M117,82 l20,-18 -18,25z M83,82 l-20,-18 18,25z",
      stroke: false
    }
  ];
  icn["GR.EQ.ANTITANK MINE"] = { type: "circle", cx: 100, cy: 100, r: 22 };
  icn["GR.EQ.IMPROVISED EXPLOSIVE DEVICE"] = text("IED");
  icn["GR.EQ.LAND MINES"] = [
    { type: "text", stroke: false, x: 100, y: 110, fontsize: 30, text: "M" },
    {
      type: "path",
      fill: false,
      d: STD2525 ? "m 135,70 -70,0 35,70 z" : "m 65,130 70,0 -35,-70 z"
    }
  ];
  icn["GR.EQ.SENSOR"] = {
    type: "path",
    d:
      "m 100,60 c 0,15 25,40 40,40 -15,0 -40,25 -40,40 0,-15 -25,-40 -40,-40 15,0 40,-25 40,-40 z"
  };
  icn["GR.EQ.SENSOR EMPLACED"] = [
    ms._scale(0.75, icn["GR.EQ.SENSOR"]),
    {
      type: "path",
      fill: false,
      d: "m 70,75 10,-15 10,15 10,-15 10,15 10,-15 10,15"
    }
  ];
  icn["GR.EQ.RADAR"] = {
    type: "path",
    d: "M72,95 l30,-25 0,25 30,-25 M70,70 c0,35 15,50 50,50",
    fill: false
  };
  icn["GR.EQ.ANTENNAE"] = [];
  icn["GR.EQ.PSYCHOLOGICAL OPERATIONS EQUIPMENT"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : false,
    stroke: black,
    d:
      "m 110,95 10,0 m -10,10 10,0 m -10,10 10,0 m -10,-30 10,0 m -10,-5 -10,10 -30,0 0,20 30,0 10,10 z"
  };
  // Installation
  icn["GR.IN.IC.ELDER CARE"] = {
    type: "path",
    d:
      "m 120.1,119.1 c 0,-6.3 2.3,-8.2 3.9,-12.6 1,-2.6 1.6,-3.3 1.8,-6.5 0.2,-2.4 0.9,-4.7 0.9,-7.2 v -2.6 c 0,-2.6 -2.2,-8.9 -3.3,-10.5 -1.3,-2 -4.8,-5.4 -6.7,-6.9 -2.2,-1.8 -5.4,-4.6 -8.2,-5.6 -1.6,-0.5 -9.8,-2.4 -11.4,-2.3 l -5.7,0.6 v 0.8 c 0,0.8 2,2.7 2.4,3.3 0,3.3 0.8,6.8 -1.3,8.4 -2.2,1.6 -2.8,3.4 -3.8,6.3 -0.4,1 -0.9,3.1 -1,4 -0.2,1 -0.2,4 -0.4,4.6 -1.1,2.4 -2.6,4.2 -3.8,6.4 l -5.1,0.5 c -2.1,3.2 -4.6,4.1 -4.6,9.6 v 26.4 c 0.6,0.2 0.4,0.2 0.9,0.2 0.5,0 0.3,-0.1 0.9,-0.2 v -27.5 c 0,-0.7 0.8,-3 1.1,-3.5 0.4,0.2 0.8,0.6 1.3,0.6 0.3,0 1.1,-0.3 1.3,-0.4 l 2.6,0.9 0.8,-0.6 0.6,2.5 c 0.4,0.3 0.4,0.5 0.8,0.5 h 0.4 c 0.5,0 0.6,-0.2 0.6,-0.6 v -0.4 c 0,-1 -1.2,-3 -1.5,-3.7 1.2,-2.5 6.3,-2.6 8.2,-5.8 0.9,-1.6 1.8,-3 2.6,-4.5 0.4,-0.9 2.3,-4.1 2.4,-4.4 h 4.4 c 2.3,0 2.1,2.5 2.6,4.2 0.6,2 2,2 2,4.6 0,2.8 -2.9,7 -4,9 -0.3,0.7 -3.9,8.8 -3.9,8.9 v 2 c 0,3 2.6,9.1 2.6,11.2 v 2.2 c -1.2,0.3 -6.8,2.4 -6.8,3.5 0,0.3 0.4,0.6 0.9,0.6 h 6.8 c 2.3,0 4.5,-1 6.6,-1.1 v -3 c 0,-0.6 -1.1,-2.2 -1.1,-3.7 -0.9,-1.3 -1.8,-6 -1.8,-8.2 0,-3.2 1.2,-5.4 2.5,-7.4 2.5,-4 0.4,-2.3 4.6,-5.1 l 1.8,1.7 c -1,1.8 -2.3,3.7 -2.3,6.4 v 5.9 h 0.4 v 0.6 c 0,0.9 5,9 5.7,10.3 -1.5,2.3 -6.7,1.6 -6.8,5 h 7.5 c 1.2,0 3.3,-1 4.5,-1.4 1.6,-0.5 2.9,-1.1 2.9,-3 0,-0.7 -2.9,-4.6 -3.6,-5.7 -0.3,-0.4 -2.4,-6 -2.4,-6.6 v -0.4 z m -45.3,-47.9 v 0.6 c 0,4.3 3.7,7.9 8.1,7.9 h 0.2 c 3.7,0 7.7,-3.6 7.7,-7 v -2.2 c 0,-3.2 -3.9,-6.8 -7.5,-6.8 h -1.2 c -3.4,0 -7.3,4 -7.3,7.5 z",
    stroke: false
  };
  icn["GR.IN.IC.RAW MATERIAL PRODUCTION/STORAGE"] = [
    { type: "text", stroke: false, x: 100, y: 90, fontsize: 30, text: "PS" },
    { type: "text", stroke: false, x: 100, y: 120, fontsize: 30, text: "RM" }
  ];
  icn["GR.IN.IC.MINE"] = {
    type: "path",
    d:
      "m 105,85 10,10 5,-5 c -5,-5 -10,-5 -15,-5 z M 95,85 85,95 80,90 c 5,-5 10,-5 15,-5 z m -5,5 30,30 m -40,0 30,-30"
  };
  icn["GR.IN.IC.PROCESSING FACILITY"] = [
    { type: "text", stroke: false, x: 100, y: 90, fontsize: 30, text: "PROC" },
    { type: "text", stroke: false, x: 100, y: 120, fontsize: 30, text: "FAC" }
  ];
  icn["GR.IN.IC.UTILITY FACILITY"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 30,
    text: "UTIL"
  };
  icn["GR.IN.IC.RESEARCH"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 30,
    text: "R&D"
  };
  icn["GR.IN.IC.TELECOMMUNICATIONS"] = {
    type: "path",
    d: "m 95,80 10,20 -10,0 10,20",
    fill: false
  };
  icn["GR.IN.IC.ELECTRIC POWER"] = {
    type: "path",
    d:
      "m 100,60.5 c -16.4,0 -29.6,13.2 -29.6,29.6 0,12.8 8.3,23.9 19.7,27.8 l 0,19.7 c 3.2,1.2 6.3,1.8 9.9,1.8 3.6,0 6.7,-0.6 9.9,-1.8 l 0,-19.8 c 11.5,-3.9 19.8,-15 19.7,-27.8 0,-16.4 -13.2,-29.6 -29.6,-29.6 z",
    fill: false
  };
  icn["GR.IN.IC.ELECTRIC POWER NUCLEAR"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 105,
    fontsize: 40,
    text: "N"
  };
  icn["GR.IN.IC.ELECTRIC POWER DAM"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 105,
    fontsize: 40,
    text: "H"
  };
  icn["GR.IN.IC.ELECTRIC POWER FOSSIL"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 105,
    fontsize: 40,
    text: "F"
  };
  icn["GR.IN.IC.ATOMIC ENERGY"] = {
    type: "path",
    d: STD2525
      ? "M 90.4,119 C 84.2,115 80,109 80,101 l 20,0 -9.6,18 z m 19.6,0 -10,-18 20,0 c 0,8 -4,14 -10,18 z M 100,101 89.7,83.8 c 3,-2 6.5,-3 10.3,-3 4,0 7,1 10,3 L 100,101 Z"
      : "M 89.9,82.5 110,82.7 89.7,117.1 80,99.9 120.1,100 110,117.3 z",
    fill: false
  };
  icn["GR.IN.IC.ATOMIC ENERGY WEAPONS GRADE"] = {
    type: "path",
    d: STD2525
      ? "M 90.4,119 C 84.2,115 80,109 80,101 l 20,0 -9.6,18 z m 19.6,0 -10,-18 20,0 c 0,8 -4,14 -10,18 z M 100,101 89.7,83.8 c 3,-2 6.5,-3 10.3,-3 4,0 7,1 10,3 L 100,101 Z"
      : "M 89.9,82.5 110,82.7 89.7,117.1 80,99.9 120.1,100 110,117.3 z"
  };
  icn["GR.IN.IC.AIRCRAFT PRODUCTION & ASSEMBLY"] = {
    type: "path",
    stroke: false,
    d:
      "m 95.1,109.3 c 0,0 -20.8,4.9 -30.1,6.7 -2.2,0.4 -5.7,0.2 -6.5,-2 -0.4,-1.1 3.3,-6.6 6.5,-7.3 8.7,-1.9 25.7,-5.5 25.7,-5.5 l 3.1,-16.1 4,-0.8 0.3,15.9 25.6,-5.8 6.5,-13.2 5.3,-1.4 -3.3,16.1 14,4.8 -4.3,1.2 -13.7,-2.8 -23.6,6.7 31.6,11.8 -5.5,2.5 z"
  };
  icn["GR.IN.IC.BRIDGE"] = {
    type: "path",
    d: "m 70,115 10,-10 40,0 10,10 m -60,-30 10,10 40,0 10,-10",
    fill: false
  };
  icn["GR.IN.IC.BASE"] = {
    type: "path",
    d: "m 75,85 50,30 m -50,0 50,-30",
    fill: false
  };
  icn["GR.IN.IC.SEA SURFACE INSTALLATION, OIL RIG/PLATFORM"] = [
    {
      type: "path",
      d: "m 85,105 0,-40 m 25,40 0,15 m -35,0 0,-15 50,0 0,15",
      fill: false
    },
    { type: "path", d: "m 85,90 15,0 0,15 -15,0 0,-15" }
  ];
  icn["GR.IN.IC.MILITARY/CIVILIAN.MATERIEL"] = text("MAT");
  icn["GR.IN.IC.MILITARY/CIVILIAN.PRINTED MEDIA"] = [
    { type: "circle", cx: 100, cy: 90, r: 10, fill: false },
    { type: "circle", cx: 100, cy: 110, r: 10, fill: false },
    { type: "path", d: "m 65,100 75,0", fill: false }
  ];
  icn[
    "GR.IN.IC.INFRASTRUCTURE.BANKING FINANCE AND INSURANCE  INFRASTRUCTURE.ECONOMIC INFRASTRUCTURE ASSET"
  ] = text("ECON");
  icn[
    "GR.IN.IC.INFRASTRUCTURE.TELECOMMUNICATIONS INFRASTRUCTURE.TELECOMMUNICATIONS"
  ] = {
    type: "path",
    d:
      "m 90,105 20,0 0,0 m -25,15 15,-30 15,30 m -55,-40 25,10 0,-10 15,10 15,-10 0,10 25,-10",
    fill: false
  };
  icn["GR.IN.M1.RADIOLOGICAL"] = textm1("R");
  icn["GR.IN.M1.COAL"] = textm1("CO");
  icn["GR.IN.M1.GEOTHERMAL"] = textm1("GT");
  icn["GR.IN.M1.HYDROELECTRIC"] = textm1("HY");
  icn["GR.IN.M1.NATURAL GAS"] = textm1("NG");
  icn["GR.IN.M1.PETROLEUM"] = {
    type: "path",
    d: "m 100,75 0,-10 -6,-10 12,0 -6,10",
    fill: false
  };
  icn["GR.IN.M1.CIVILIAN"] = textm1("CIV");
  icn["GR.IN.M1.CIVILIAN TELEPHONE"] = textm1("T");
  icn["GR.IN.M1.CIVILIAN TELEVISION"] = textm1("TV");
  icn["GR.IN.M2.CHEMICAL WARFARE PRODUCTION"] = textm2("C");
  icn["GR.IN.M2.NUCLEAR WARFARE PRODUCTION"] = textm2("N");
  icn["GR.IN.M2.RADIOLOGICAL WARFARE PRODUCTION"] = textm2("R");
  icn["GR.IN.M2.ATOMIC ENERGY REACTOR"] = textm2("A");
  icn["GR.IN.M2.NUCLEAR MATERIAL PRODUCTION"] = textm2("P");
  icn["GR.IN.M2.NUCLEAR MATERIAL STORAGE"] = textm2("S");
  icn["GR.IN.M2.CHEMICAL & BIOLOGICAL WARFARE"] = textm2("B");
  icn["GR.IN.M2.SHIP CONSTRUCTION"] = textm2("YRD");
  icn["GR.IN.M2.WEAPONS GRADE PRODUCTION"] = textm2("W");

  // SUBSURFACE

  icn["SOF.IC.UNDERWATER DEMOLITION TEAM"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 32,
    text: "UDT"
  };
  icn["SOF.M2.ATTACK"] = textm2("A");
  icn["SOF.M2.REFUEL"] = textm2("K");
  icn["SOF.M2.UTILITY"] = textm2("U");
  icn["SOF.M2.VSTOL"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 135,
    fontsize: 20,
    text: "VSTOL"
  };
  icn["SOF.M2.COMBAT SEARCH AND RESCUE"] = STD2525
    ? textm2("CSAR")
    : textm2("H");

  // STABILITY OPERATIONS ==========================================================
  icn["ST.IC.ARREST"] = {
    type: "path",
    d:
      "m 92.5,100 15,0 m -2.5,-10 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -5,5 0,20 m 20,-15 c 0,11 -9,20 -20,20 -11,0 -20,-9 -20,-20 0,-11 9,-20 20,-20 11,0 20,9 20,20 z",
    fill: false
  };
  icn["ST.IC.ARSON/FIRE"] = STD2525
    ? [
        {
          type: "path",
          d:
            "m 84.6,101.6 c 1.3,23.1 31,23.2 30.7,-1.9 -1.5,2.1 -4.6,6.5 -8.1,7.3 1.9,-2.4 2.6,-8.5 2.4,-12.9 -1.7,3.4 -4,7.9 -7,7.8 1.7,-4.3 2.7,-9.4 -0.5,-13.7 -0.2,3 0.8,7.1 -1.9,7 -2.7,-0.1 -2.9,-4.4 -1.1,-10.8 -4,4.1 -6.2,9.8 -3.8,17.5 -1.9,-0.2 -4.4,-1.9 -7,-7.8 -1.5,4.9 1.2,9.6 3.2,13.7 -2.4,-1.1 -6,-3 -7,-6.2 z",
          stroke: false
        },
        {
          type: "text",
          stroke: false,
          x: 100,
          y: 75,
          fontsize: 25,
          text: "ASN"
        }
      ]
    : {
        type: "text",
        stroke: false,
        x: 100,
        y: 110,
        fontsize: 35,
        text: "FIRE"
      };
  icn["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"] = {
    type: "path",
    d:
      "m 127,127 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5",
    fill: false
  };
  icn["ST.IC.BLACK LIST LOCATION"] = text("BLK");
  icn["ST.IC.BLACK MARKETING"] = [
    { type: "text", stroke: false, x: 100, y: 95, fontsize: 30, text: "BLK" },
    { type: "text", stroke: false, x: 100, y: 125, fontsize: 30, text: "MKT" }
  ];
  icn["ST.IC.BOMB"] = text("BOMB");
  icn["ST.IC.BOOBY TRAP"] = {
    type: "path",
    d: "m 85,105 15,-25 15,25 m -35,5 c 0,-10 40,-10 40,0 0,10 -40,10 -40,0 z",
    fill: false
  };
  icn["ST.IC.COMPOSITE LOSS"] = {
    type: "path",
    d:
      "m 100,85 0,30 m -35,-15 45,0 m 20,0 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z",
    fill: false
  };
  icn["ST.IC.DEMONSTRATION"] = text("MASS");
  icn["ST.IC.DRIVE-BY SHOOTING"] = {
    type: "path",
    d:
      "m 95,85 5,-5 5,5 m -5,-5 0,30 m -15,0 30,0 m 5,5 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -30,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z",
    fill: false
  };
  icn["ST.IC.DRUG RELATED ACTIVITIES"] = text("DRUG");
  icn["ST.IC.EXPLOSION"] = {
    type: "path",
    d:
      "m 110,55 5,20 15,-10 0,15 15,5 -15,10 15,10 -15,5 5,15 -20,-5 -5,20 -10,-15 -10,20 -5,-25 -20,10 5,-15 L 55,105 70,95 60,85 70,80 70,65 85,75 90,55 100,70 z",
    fill: false
  };
  icn["ST.IC.EXTORTION"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 130,
    fontsize: 80,
    text: "$"
  };
  icn["ST.IC.FOOD DISTRIBUTION"] = [
    {
      type: "path",
      d: "m 105,85 c -5,10 -5,20 0,30 m 0,-30 c -20,0 -20,30 0,30",
      fill: false
    },
    {
      Unknown: { type: "path", d: "M35,120 l130,0 ", fill: false },
      Friend: { type: "path", d: "M25,120 l150,0 ", fill: false },
      Neutral: { type: "path", d: "M45,120 l110,0 ", fill: false },
      Hostile: { type: "path", d: "M50,120 l100,0 ", fill: false }
    }[affiliation]
  ];
  icn["ST.IC.GRAFFITI"] = {
    type: "path",
    d:
      "m 110,80 c -10,0 -10,10 0,10 10,0 10,10 0,10 -10,0 -10,10 0,10 10,0 10,10 0,10 M 90,80 c -10,0 -10,10 0,10 10,0 10,10 0,10 -10,0 -10,10 0,10 10,0 10,10 0,10",
    fill: false
  };
  icn["ST.IC.GROUP"] = {
    type: "path",
    d:
      "m 133,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m -52,-12.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m 23,-7.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0",
    fill: false
  };
  icn["ST.IC.HIJACKING (AIRPLANE)"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : false,
    d:
      "m 70,95 0,10 65,0 0,-10 z m 55,10 0,10 5,0 0,-10 z m 0,-10 0,-10 5,0 0,10 z m -45,10 0,15 10,0 0,-15 z m 0,-10 0,-15 10,0 0,15 z"
  };
  icn["ST.IC.HIJACKING (BOAT)"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 105,80 0,20 20,0 z m -5,25 0,-25 m -30,25 10,15 40,0 10,-15 z"
  };
  icn["ST.IC.GRAY LIST LOCATION"] = text("GRAY");
  icn["ST.IC.IED"] = text("IED");
  icn["ST.IC.INDIVIDUAL"] = {
    type: "path",
    d:
      "m 108,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0",
    fill: false
  };
  icn["ST.IC.INTERNAL SECURITY FORCE"] = text("ISF");
  icn["ST.IC.KILLING VICTIM"] = [
    {
      type: "path",
      d:
        "m 108,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0",
      fill: false
    },
    {
      Unknown: { type: "path", fill: false, d: "M50,65 150,135" },
      Friend: { type: "path", fill: false, d: "M25,50 175,150" },
      Neutral: { type: "path", fill: false, d: "M45,45 155,155" },
      Hostile: { type: "path", fill: false, d: "M57,70 143,130" }
    }[affiliation]
  ];
  icn["ST.IC.KILLING VICTIMS"] = [
    {
      type: "path",
      d:
        "m 133,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m -52,-12.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m 23,-7.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0",
      fill: false
    },
    {
      Unknown: { type: "path", fill: false, d: "M50,65 150,135" },
      Friend: { type: "path", fill: false, d: "M25,50 175,150" },
      Neutral: { type: "path", fill: false, d: "M45,45 155,155" },
      Hostile: { type: "path", fill: false, d: "M57,70 143,130" }
    }[affiliation]
  ];
  icn["ST.IC.KNOWN INSURGENT VEHICLE"] = {
    type: "path",
    d:
      "m 65,95 70,0 m 0,10 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z m -50,0 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z",
    fill: false
  };
  icn["ST.IC.MASS GRAVE LOCATION"] = {
    type: "path",
    d:
      "m 77.5,90 10,0 m -5,-5 0,15 m 7.5,-20 0,30 -15,0 0,-30 z m 22.5,10 10,0 m -5,-5 0,15 m -7.5,-20 0,30 15,0 0,-30 z m -15,20 10,0 m -5,-5 0,20 m -7.5,-25 15,0 0,30 -15,0 z",
    fill: false
  };
  icn["ST.IC.MINE LAYING"] = [
    { type: "path", d: "m 60,85 80,0 0,30 -80,0 z", fill: false },
    {
      type: "path",
      d:
        "m 135,100 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z m -25,0 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z m -25,0 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z",
      stroke: false
    }
  ];
  icn["ST.IC.PATROLLING"] = {
    type: "path",
    d:
      "m 131,97 0,-14 5,0 c 4,0 4,7 0,7 l -5,0 m -71,15 15,10 M 60,105 75,95 m -15,10 40,0 -15,-15 40,0",
    fill: false
  };
  icn["ST.IC.POISONING"] = {
    type: "path",
    d:
      "m 85,95 c 0,-20 30,-20 30,0 0,20 -30,20 -30,0 z m -15,10 60,15 m -60,0 60,-15",
    fill: false
  };
  icn["ST.IC.PSYCHOLOGICAL OPERATIONS"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : false,
    stroke: black,
    d:
      "m 110,95 10,0 m -10,10 10,0 m -10,10 10,0 m -10,-30 10,0 m -10,-5 -10,10 -30,0 0,20 30,0 10,10 z"
  };
  icn["ST.IC.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS"] = [
    icn["ST.IC.PSYCHOLOGICAL OPERATIONS"],
    {
      Unknown: {
        type: "path",
        fill: false,
        d: "M50,65 100,110 100,90 150,135"
      },
      Friend: { type: "path", fill: false, d: "M25,50 100,110 100,90 175,150" },
      Neutral: {
        type: "path",
        fill: false,
        d: "M45,45 100,110 100,90 155,155"
      },
      Hostile: { type: "path", fill: false, d: "M57,70 100,110 100,90 143,130" }
    }[affiliation]
  ];
  icn["ST.IC.RIOT"] = text("RIOT");
  icn["ST.IC.SAFE HOUSE"] = text("SAFE");
  icn["ST.IC.SEARCHING"] = {
    type: "path",
    d:
      "m 140,105 c -10,0 -5,0 -10,0 -15,0 -5,-15 -20,-15 -15,0 -5,20 -20,20 -15,0 -5,-20 -20,-20 -10,0 -10,10 -10,10 m 70,0 10,5 -10,5",
    fill: false
  };
  icn["ST.IC.SPY"] = text("SPY");
  icn["ST.IC.SNIPING"] = [
    { type: "path", d: "m 95,85 5,-5 5,5 m -5,-5 0,40", fill: false },
    { type: "text", stroke: false, x: 100, y: 75, fontsize: 25, text: "S" }
  ];
  icn["ST.IC.VANDALISM/LOOT/RANSACK/PLUNDER/SACK"] = {
    type: "path",
    d:
      "m 115,100 c 0,-5 5,-10 10,-10 M 85,100 C 85,95 80,90 75,90 m 5,25 c -0.5,-29.5 40,-30 40,0 z",
    fill: false
  };
  icn["ST.IC.WHITE LIST LOCATION"] = text("WHT");
  icn["ST.IC.ROBBERY"] = text("ROB");
  icn["ST.IC.THEFT"] = text("THF");
  icn["ST.IC.BURGLARY"] = text("BUR");
  icn["ST.IC.SMUGGLING"] = text("SMGL");
  icn["ST.IC.SABOTAGE"] = text("SAB");
  icn["ST.IC.ILLEGAL DRUG OPERATION"] = text("DRUG");
  icn["ST.IC.SPY"] = text("SPY");
  icn["ST.IC.WARRANT SERVED"] = text("WNT");
  icn["ST.IC.POLLING PLACE/ELECTION"] = text("VOTE");
  icn["ST.IC.NATURAL EVENT"] = text("NAT");
  icn["ST.IC.GEOLOGIC"] = text("GEOL");
  icn["ST.IC.HYDRO-METEOROLOGICAL"] = text("HYDR");
  icn["ST.IC.INFESTATION"] = text("INFS");
  icn["ST.IC.GRENADE"] = text("G");
  icn["ST.IC.INCENDIARY"] = text("I");
  icn["ST.IC.MINE"] = text("M");
  icn["ST.IC.HOUSE"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : false,
    d: "m 70,100 60,0 m -30,-20 -30,20 0,35 60,0 0,-35 -30,-20 z"
  };
  icn["ST.IC.ROCK THROWING"] = {
    type: "path",
    d:
      "m 90,60 25,25 M 70,65 95,90 M 60,80 80,100 m 45,-5 5,15 -5,15 -20,10 -20,-5 -5,-20 5,-5 10,0 5,-10 10,-5 15,5 z"
  };
  icn["ST.M1.ACCIDENT"] = textm1("ACC");
  icn["ST.M1.ASSASSINATION"] = textm1("AS");
  icn["ST.M1.CIVILIAN"] = textm1("CIV");
  icn["ST.M1.COERCED/IMPRESSED"] = textm1("C");
  icn["ST.M1.COMBAT"] = textm1("CBT");
  icn["ST.M1.DEAD BODY"] = textm1("DB");
  icn["ST.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES"] = textm1("DPRE");
  icn["ST.M1.DRUG"] = textm1("DRUG");
  icn["ST.M1.EVICTION"] = textm1("EV");
  icn["ST.M1.EXECUTION (WRONGFUL KILLING)"] = textm1("EX");
  icn["ST.M1.EXFILTRATION"] = textm1("EXFL");
  icn["ST.M1.FOREIGN FIGHTERS"] = textm1("FF");
  icn["ST.M1.GANG"] = textm1("GANG");
  icn["ST.M1.GOVERNMENT ORGANIZATION"] = textm1("GO");
  icn["ST.M1.HIJACKING/HIJACKED"] = textm1("H");
  icn["ST.M1.HOUSE-TO-HOUSE"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : false,
    d: "m 110,65 -20,0 0,15 20,0 z m -10,-10 -10,10 20,0 z"
  };
  icn["ST.M1.IED"] = textm1("IED");
  icn["ST.M1.INCIDENT"] = textm1("INC");
  icn["ST.M1.INFILTRATION"] = textm1("INFL");
  icn["ST.M1.KIDNAPPING"] = textm1("K");
  icn["ST.M1.LABRATORY"] = textm1("LAB");
  icn["ST.M1.LEADER"] = textm1("LDR");
  icn["ST.M1.LOOT"] = textm1("LOOT");
  icn["ST.M1.MEETING"] = textm1("MTG");
  icn["ST.M1.MURDER"] = textm1("MU");
  icn["ST.M1.NONGOVERNMENTAL ORGANIZATION (NGO)"] = textm1("NGO");
  icn["ST.M1.OTHER"] = textm1("OTH");
  icn["ST.M1.PIRACY"] = textm1("PI");
  icn["ST.M1.PREMATURE"] = textm1("P");
  icn["ST.M1.RAID"] = textm1("RAID");
  icn["ST.M1.RAPE"] = textm1("RA");
  icn["ST.M1.RELIGIOUS"] = textm1("REL");
  icn["ST.M1.SPEAKER"] = textm1("SPK");
  icn["ST.M1.TARGETED"] = textm1("TGT");
  icn["ST.M1.TERRORIST"] = textm1("TER");
  icn["ST.M1.TRAFFICKING"] = textm1("TFK");
  icn["ST.M1.WILLING RECRUIT"] = textm1("WR");
  icn["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"] = icn["ST.M1.WILLING"] = textm1(
    "W"
  );
  icn["ST.M1.FALSE"] = textm1("FAL");
  icn["ST.M1.FIND"] = textm1("FND");
  icn["ST.M1.FOUND AND CLEARED"] = textm1("CLR");
  icn["ST.M1.HOAX (DECOY)"] = {
    type: "path",
    d:
      "M 90,75 80,67.5 90,60 90,75 Z m 15,0 -10,-7.5 10,-7.5 0,15 z m 15,0 -10,-7.5 10,-7.5 0,15 z"
  };
  icn["ST.M1.ATTEMPTED"] = textm1("ATT");
  icn["ST.M1.ACCIDENT"] = textm1("ACC");
  icn["ST.M1.INCIDENT"] = textm1("INC");
  icn["ST.M1.THEFT"] = textm1("THF");
  icn["ST.M1.PIRATE"] = [
    { type: "circle", cx: 100, cy: 60, r: 7, fill: false },
    {
      type: "path",
      fill: false,
      d: "m 82.5,75 35,-15 m 0,15 -35,-15 m 3,7 5,10 m 27,-10 -10,10"
    }
  ];
  icn["ST.M2.LEADER OR LEADERSHIP"] = textm2("LDR");
  icn["ST.M2.RELIGIOUS"] = textm2("REL");
  icn["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 98.7,66.7 c -3.2,0.7 -6.3,3.7 -6.4,7 0.3,3.6 5.3,2.8 7,0.6 2,-1.2 1.7,-4.5 4.5,-3.7 2.6,-0.6 3.2,3.2 5.9,3.2 1.6,1.5 4.4,-0.6 5.4,1.2 0.7,1.1 1.5,2.2 2.2,3.3 -2,3.1 -1.3,7.9 1.9,10 3.5,1.1 4.8,-3.5 4.1,-6.2 -0.2,-3 -2.5,-5 -5.1,-5.4 -1.5,-1.9 -2.7,-3.4 -1.6,-5.6 -1,-3.3 -5.1,-4.5 -8.2,-4.3 -2.2,0.3 -2.9,2.6 -5.3,1.9 -1.9,0.4 -1.9,-2.8 -4.3,-2 z m 0.2,1.3 c 2.7,0.5 0.9,0.6 -0.6,1.3 -0.5,2.2 3.8,0.4 1.4,2.9 -0.9,1.9 -5.8,4.7 -5.9,1.1 0.1,-2.5 2.7,-4.8 5.1,-5.2 z m 10.3,0.1 c 2.4,-0.5 7.1,2.3 5.6,3.7 -0.8,-2.1 -3,0 -1.2,1.2 -1.7,0.9 -7.4,-1.6 -5.7,-2.4 2.5,0.8 2.8,-2.7 -0,-1.9 -1.4,0.2 1.1,-0.8 1.3,-0.6 z M 81.9,71.6 c -1.8,1.9 -3.6,3.9 -5.5,5.8 -7.5,-0.1 -14,6.2 -15.7,13.2 -0.6,4.2 0.5,8.5 2.8,12 0.7,3.9 -3.2,6.7 -3,10.7 -0.8,7.4 4.8,14.5 11.7,16.8 2.3,-0.4 1.3,1.3 1.4,2 1.5,-0.4 3,-0.8 4.6,-1.2 -0.2,1.5 -0.1,2.7 1.4,1.2 0.9,-0.3 2.3,-2.2 2.9,-1.5 0.2,2.2 1.2,0.1 2,-0.7 0.8,-1.2 1.6,-2.3 2.4,-0.5 1.2,-2.4 4.1,-7.2 -0.8,-7.3 -3.4,2.3 -7.5,4.6 -11.8,3.5 -6.3,-1.5 -10.9,-8.8 -8.2,-14.9 0.4,-3.9 6.8,-3.4 5,-8.2 -1.8,-2.6 -5.7,-2.9 -5.7,-7 -1.5,-7.3 5.6,-14.7 13,-13.7 4.7,0.5 7.4,4.9 10.8,7.6 1.9,1.9 4.1,5.1 5.9,1.4 2.8,-2 4.3,-4.7 1.8,-7.6 C 94.8,79.7 90.9,77.3 88,74.4 86.3,72.9 83.9,72.6 81.9,71.6 z m 3.3,3.8 c 1.6,1.1 2.9,2.1 0.3,3.3 -0.9,3.7 -5.1,-0.5 -1.5,-1.5 0.4,-0.6 0.9,-1.1 1.2,-1.8 z m 34.2,3.1 c 3,1.4 3.9,6.4 1.4,8.8 -2.9,0.1 -3.6,-4.3 -3.1,-6.6 0.1,-2.9 2.5,2.7 2.5,-0.7 -0.2,-0.5 -0.5,-1 -0.8,-1.4 z M 127.3,90.2 c -4.3,0.4 -8.8,-0 -13.1,1 -2.1,1.1 -5.7,1.5 -4.6,4.5 0.1,1.8 0.2,3.6 0.4,5.4 -4.9,4.9 -5.5,13.3 -2.2,19.2 2.4,4.3 7,7 11.8,7.8 3.3,4.9 7.3,-1.3 11.2,-1.7 5.5,-2.5 8.9,-8.5 8.5,-14.5 0.2,-5 -2.4,-10.1 -6.7,-12.8 -0.1,-2.3 -0.2,-4.6 -0.3,-6.9 -1.6,-0.8 -3.4,-1.4 -5.1,-2.1 z M 127.8,92.5 c -0.9,1.7 0.6,3.8 -0.9,4.9 -2.3,0.7 -1.7,-2.4 -1.9,-3.8 -0.6,-1.7 1.9,-0.7 2.8,-1 z m -2.9,8.3 c 4.1,0.9 8,3.7 9.3,7.9 0.9,3.7 0.5,8 -2.3,10.9 -1.7,2 -5.3,4.3 -7.7,3.1 -3.1,-0.8 -5.8,2.1 -8.6,-0.5 -6.9,-4.2 -7.2,-16 0.2,-19.8 2.7,-1.6 6,-1.6 9.1,-1.6 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "M 85.1 75.3 C 85 75.8 84.2 76.7 83.9 77.1 C 83.6 77.6 82.4 77.9 82.4 78.6 L 82.4 79 C 82.4 79.4 83.3 80.1 83.6 80.1 L 83.8 80.1 C 84.8 80.1 85 79.1 85.4 78.6 C 85.7 78.2 86.7 77.4 87.2 77 L 85.1 75.3 z M 127.8 92.5 L 125 92.7 L 125.2 96.5 C 125.3 97.5 125.9 97.3 126.5 97.6 C 127.1 97.3 127.8 97.1 127.8 96.3 C 127.8 95.8 127.7 95.6 127.5 95.3 L 127.8 92.5 z"
    }
  ];
  icn["AC.IC.CRIMINAL.CIVIL DISTURBANCE"] = {
    type: "path",
    stroke: false,
    d:
      "m 110.6,142.4 0,-28.6 -7.1,0 0,28.6 z m -21.2,0 7.1,0 0,-28.6 -7.1,0 z m 7.1,-28.6 h 7.1 v -11.8 h 24.4 V 77.2 h -6.3 v 18.6 h -18 v -10.7 c 0,-0.9 2.1,-1.2 3,-1.7 0.8,-0.4 2.1,-1.4 2.7,-2 1.5,-1.4 3.2,-3.6 3.8,-5.9 1.6,-6.3 -0.2,-10.6 -3.8,-14.1 -3,-3.1 -9.2,-4.9 -14.3,-2.7 -3.6,1.6 -8.4,6.2 -8.4,11 v 3.2 c 0,2.8 1.9,6.2 3.3,7.7 1,1 1.8,1.7 3,2.5 1,0.6 3.6,1.3 3.6,2.2 v 10.7 H 78.4 v -18.6 h -6.3 v 24.9 h 24.4 v 11.8 h -0 z"
  };
  icn["AC.IC.SHOOTING"] = {
    type: "path",
    stroke: false,
    d:
      "m 93.2,89.7 h 16.8 v 9.3 c -2.6,0 -7.3,1.6 -9,1 -2.3,-0.8 -5.4,-2 -7.8,-2.6 v -7.8 l 0,0 z m -30,0 h 26.1 v 9.6 c 0,0.9 4.1,2 5,2.3 1.9,0.6 3.6,1.4 5.5,2 2,0.7 3.4,0.4 6,-0.1 1.6,-0.3 5.7,-0.4 6.6,-0.9 0.6,2.7 4.6,14 4.6,15.2 0,1.6 -1.2,4 -1.3,5.7 l 21.5,0 -8.2,-25.9 7.8,-7.7 c -0.8,-1.6 -4.1,-13.4 -5.2,-13.4 h -68.4 v 13.2 l 0,0 z"
  };
  icn["AC.IC.FIRE EVENT"] = {
    type: "path",
    stroke: false,
    d:
      "m 96.5,78.5 c 0,-5.1 4.1,-9.7 4.1,-13 v -0.4 c 0,-1.3 -0,-3.8 -1.1,-4.1 -1,4.5 -3.5,8 -5.9,11.2 -1.2,1.6 -2.4,3.3 -3.6,5 -1,1.4 -3.1,3.5 -3.1,5.5 0,1.4 6.1,17.7 3,17.7 -0.1,0 -3.8,-2.5 -4.2,-2.9 -1.4,-1 -2.4,-2.3 -3.3,-3.7 -3.1,-4.6 -2.4,-4.4 -3.8,-10.3 -1.5,0.4 -2.6,5 -2.9,6.9 -0.4,2.4 -0.3,6.6 0.2,9 0.6,2.8 1.4,5 2.5,7.3 0.6,1.2 3,5.5 3.1,6.5 -2.2,-0.5 -7,-4.6 -8.6,-6.2 -1.5,-1.5 -5.5,-8.3 -5.9,-8.6 0,9.9 5,22.8 9.8,27.6 3.1,3.1 6.3,6.4 10.2,8.6 2.4,1.5 10.5,4.3 14.3,4.3 h 2.4 c 2.8,0 10.8,-3 12.9,-4.2 3.4,-1.9 6.9,-4.7 9,-7.9 4.4,-6.5 8,-15 8,-25.8 v -1.3 l -0.4,-5.8 c -0.7,0.4 -2.2,4.4 -2.5,5.2 -0.5,1.3 -2,3.4 -2.9,4.6 -1.4,2.1 -5.2,6.3 -7.8,6.9 v -1.1 c 0,-4.4 2.8,-8.8 2.8,-12.4 v -1.9 l -1.3,-12.2 h -0.6 c -0.3,3.9 -1.6,7.9 -3.4,10.5 -1.3,2 -5.3,5.6 -7.7,6.2 -0.2,-0.4 -0.4,-0.6 -0.4,-1.3 v -2.3 c 0,-5.1 3,-8.9 3,-12.8 v -0.8 c 0,-1.5 -2.1,-3.9 -2.9,-5.2 -0.7,-1.1 -2.4,-4.3 -3.5,-4.6 v 1.3 c 0,6.2 -1.4,10.6 -5.6,12.6 -1.1,-1.7 -3.6,-3.2 -3.6,-6.2 v -1.9 l 0,0 z"
  };
  icn["AC.IC.NON-REsIdENTIAL FIRE"] = {
    type: "path",
    stroke: false,
    d:
      "m 121.2,122.3 -6.2,0 0,5.9 6.2,0 z m -12.1,0 -6.1,0 0,5.9 6.1,0 z m -12.2,0 -5.9,0 0,5.9 5.9,0 z m -12.3,0 -5.7,0 0,5.9 5.7,0 z m 30.4,-4.8 h 6.1 v -6.2 h -2.5 c -1.2,0 -2.5,1.5 -3.6,1.8 v 4.4 z m -5.9,-6.2 -6.1,0 0,6.2 6.1,0 z m -12.2,0 -5.9,0 0,6.2 5.9,0 z m -12.3,0 -5.7,0 0,6.2 5.7,0 z m 25,-33.4 c 0,-3.4 3.4,-7.4 3.4,-9.1 0,-1.4 -0.8,-4.2 -1.8,-4.6 0,7.1 -8.6,12.8 -8.6,15.7 v 0.4 c 0,0.7 1.9,5.2 2.3,6.6 0.4,1.7 1.4,5.6 1.6,7.3 -6.2,-0.1 -7.3,-9.8 -10.3,-11.8 l -0.3,3 0,4.6 c 0,4.7 3.4,11.4 5.6,13.9 1,1.1 4.2,3.7 5.5,4.3 0.8,0.4 6.3,3 6.6,3 1.4,0 9.2,-7.2 10.5,-8.6 2.5,-2.5 4,-9.6 4,-14.8 v -0.7 l -0.7,-5.7 c -1,0.6 -2.1,5.6 -2.8,7 -1.5,3.2 -1.8,3.1 -5.4,4 -0.3,-12.2 6.7,-8.3 -2.7,-19.1 0,4.9 -0.9,7.9 -4.1,9.6 -1.4,-0.7 -3,-2.7 -3,-4.8 z m -14.8,26.4 h 3.6 c -0.1,-0.6 -0.3,-1.4 -1.1,-1.4 h -1.2 v -2.7 c 0,-0.9 -0.9,-2.4 -1.4,-3 v 7 z m -16.4,-28.6 h 3.9 v 28.6 h 8.9 v -28.6 h 3.6 v 5.4 c 0.3,-0.2 1.4,-1.4 1.4,-1.8 v -5 h -6.4 v 28.6 h -6.4 v -28.6 h -6.1 v 28.6 h -5.2 v 32.7 h 54.8 v -30.7 c -0.4,0.2 -1.1,1 -1.1,1.6 v 27.5 h -52.5 v -29.8 h 5.2 v -28.6 h -0 z"
  };
  icn["AC.IC.REsIdENTIAL FIRE"] = {
    type: "path",
    stroke: false,
    d:
      "m 91.5,88.3 -0.7,-3 -30.1,25.2 15.6,0.1 v 25.6 h 50.5 v -25.6 h 12.4 c -0.4,-0.5 -7.6,-5.9 -8,-5.9 -0.3,0 -1.2,1.6 -1.4,1.9 l 1.4,1.4 h -2.4 c -0.7,0.5 -4.9,3.1 -4.9,3.8 v 22.3 h -18.3 v -12.9 h -8.7 v 12.9 h -18.1 v -23.5 h 22.6 l -2.2,-2.7 -30.7,-0.1 L 91.5,88.3 z m 27.6,28 -8.2,0 0,8.5 8.2,0 z m -27,0.2 -8.7,0 0,8.2 8.7,0 z m 11,-36.4 c 0,0.9 2.1,5.3 2.5,6.9 0.4,1.8 1.5,6.1 1.5,7.8 -7.1,-1.6 -6.9,-9.9 -10.3,-12.2 -1.7,7.5 0.8,15.1 3.7,19.5 2.4,3.6 2.6,3.4 6,6 0.4,0.4 7.9,4.3 7.9,4.3 2,0 9.6,-7.1 11.1,-8.6 1.8,-1.8 5.6,-10.8 5.6,-14.4 V 83.5 c 0,-1.9 -0.3,-3.2 -1.4,-4 0,2 -1.8,7 -2.6,8.4 -0.8,1.8 -4.3,4.2 -6.3,4.7 v -1.7 c 0,-4.4 2.4,-6.8 2.4,-10.1 0,-2 -4,-7.2 -5.2,-8 0,5.4 -0.7,8 -4.2,9.8 -1.2,-0.7 -3.1,-2.6 -3.1,-4.4 v -1 c 0,-1.5 1.8,-5.4 2.5,-6.6 2,-3.9 0.5,-3.8 -0.4,-7 h -0.4 c -1.3,5.5 -0.8,4.8 -3.8,8.9 -1,1.4 -5.4,5.9 -5.4,7.5 z"
  };
  icn["AC.IC.SCHOOL FIRE"] = {
    type: "path",
    stroke: false,
    d:
      "m 131.3,73 c -4,-1 -17,-7.2 -19.8,-7.2 h -2.4 V 96 h -0.7 c 0,5.6 -3.8,15.3 -6.2,18.6 -2,2.7 -3.7,4.1 -6.2,6.2 -0.8,0.6 -7,4.9 -7,5.4 v 8 h 44.1 V 96 h -20.4 l 0,-14.8 18.8,-8.2 z m -49.2,11.8 c 0,-3 3.6,-8 3.6,-10 0,-1.8 -0.8,-3.9 -2,-4.6 -0.4,0.8 -0.4,3.6 -0.9,5 -0.3,0.7 -1.8,2.7 -2.3,3.5 -1.6,2.3 -3.4,4.2 -5.1,6.4 -2.2,2.8 0,5 1.1,8.2 0.8,2.2 1.4,7.9 2.1,9.4 C 71.9,102.4 70.6,91.8 67.6,89.9 l -0.6,7.6 0.1,0.2 c 0,5 3.6,12.3 5.9,15 1.1,1.3 4.3,3.6 5.9,4.6 1.1,0.7 2.5,1 3.7,1.6 0.4,0.2 3.2,1.9 3.2,1.9 2.1,0 9.9,-7.4 11.5,-9 1.8,-1.8 5.8,-11 5.8,-14.4 v -6.3 c 0,-2.1 -0.4,-2.6 -0.7,-4.2 h -0.8 c -0.2,1.9 -2.2,7.1 -3,8.7 -0.7,1.3 -6.3,5.7 -6.3,3.7 v -1.2 c 0,-3.8 2.4,-7.2 2.4,-10 v -0.8 c 0,-1.5 -4.3,-6.8 -5.4,-7.6 0,2.5 0.1,4.8 -0.8,6.5 -0.5,0.9 -2.5,3.5 -3.6,3.5 -1.1,0 -3.2,-3.4 -3.2,-5.1 z"
  };
  icn["AC.IC.HOT SPOT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 96.3,78.5 c 0,-5.1 4.1,-9.7 4.1,-13 v -0.4 c 0,-1.3 -0,-3.8 -1.1,-4.1 -1,4.5 -3.5,8 -5.9,11.2 -1.3,1.6 -2.3,3.3 -3.6,4.9 -1,1.3 -3.1,3.4 -3.1,5.5 0,1.4 6.1,17.7 3,17.7 -0.1,0 -3.7,-2.5 -4.2,-2.9 -1.4,-1 -2.4,-2.3 -3.3,-3.7 -3.1,-4.6 -2.4,-4.4 -3.8,-10.3 -1.5,0.4 -2.6,5 -2.9,6.9 -0.4,2.4 -0.3,6.7 0.3,9 0.6,2.8 1.3,5 2.5,7.3 0.6,1.2 3.1,5.5 3.1,6.5 -2.2,-0.5 -7.1,-4.6 -8.6,-6.1 -1.5,-1.5 -5.5,-8.3 -5.9,-8.6 0,9.9 5,22.8 9.8,27.6 3.1,3.1 6.3,6.4 10.1,8.7 2.5,1.5 10.5,4.3 14.3,4.3 h 2.4 c 2.9,0 10.8,-3 12.9,-4.2 3.4,-1.9 6.9,-4.7 9,-7.9 4.4,-6.5 8,-15 8,-25.7 V 99.9 l -0.4,-5.8 c -0.7,0.4 -2.2,4.4 -2.5,5.2 -0.5,1.3 -2,3.4 -2.8,4.6 -1.4,2.1 -5.2,6.3 -7.9,6.9 v -1.1 c 0,-4.4 2.8,-8.8 2.8,-12.4 v -1.9 l -1.3,-12.2 -0.7,8e-4 c -0.3,3.9 -1.7,7.9 -3.4,10.5 -1.3,2 -5.3,5.6 -7.7,6.2 -0.2,-0.4 -0.4,-0.6 -0.4,-1.3 v -2.4 c 0,-5.1 3,-8.9 3,-12.8 V 82.6 c 0,-1.5 -2.1,-3.9 -2.9,-5.2 -0.7,-1.1 -2.4,-4.3 -3.5,-4.6 v 1.3 c 0,6.2 -1.4,10.6 -5.6,12.6 -1.1,-1.7 -3.6,-3.1 -3.6,-6.2 v -1.9 l 0,0 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 113,126.9 c 0,6.3 -5.1,11.4 -11.4,11.4 -6.3,0 -11.4,-5.1 -11.4,-11.4 0,-6.3 5.1,-11.4 11.4,-11.4 6.3,0 11.4,5.1 11.4,11.4 z"
    }
  ];
  icn["AC.IC.FIRE ORIGIN"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 96.3,78.5 c 0,-5.1 4.1,-9.7 4.1,-13 v -0.4 c 0,-1.3 -0,-3.8 -1.1,-4.1 -1,4.5 -3.5,8 -5.9,11.2 -1.3,1.6 -2.3,3.3 -3.6,4.9 -1,1.3 -3.1,3.4 -3.1,5.5 0,1.4 6.1,17.7 3,17.7 -0.1,0 -3.7,-2.5 -4.2,-2.9 -1.4,-1 -2.4,-2.3 -3.3,-3.7 -3.1,-4.6 -2.4,-4.4 -3.8,-10.3 -1.5,0.4 -2.6,5 -2.9,6.9 -0.4,2.4 -0.3,6.7 0.3,9 0.6,2.8 1.3,5 2.5,7.3 0.6,1.2 3.1,5.5 3.1,6.5 -2.2,-0.5 -7.1,-4.6 -8.6,-6.1 -1.5,-1.5 -5.5,-8.3 -5.9,-8.6 0,9.9 5,22.8 9.8,27.6 3.1,3.1 6.3,6.4 10.1,8.7 2.5,1.5 10.5,4.3 14.3,4.3 h 2.4 c 2.9,0 10.8,-3 12.9,-4.2 3.4,-1.9 6.9,-4.7 9,-7.9 4.4,-6.5 8,-15 8,-25.7 V 99.9 l -0.4,-5.8 c -0.7,0.4 -2.2,4.4 -2.5,5.2 -0.5,1.3 -2,3.4 -2.8,4.6 -1.4,2.1 -5.2,6.3 -7.9,6.9 v -1.1 c 0,-4.4 2.8,-8.8 2.8,-12.4 v -1.9 l -1.3,-12.2 -0.7,8e-4 c -0.3,3.9 -1.7,7.9 -3.4,10.5 -1.3,2 -5.3,5.6 -7.7,6.2 -0.2,-0.4 -0.4,-0.6 -0.4,-1.3 v -2.4 c 0,-5.1 3,-8.9 3,-12.8 V 82.6 c 0,-1.5 -2.1,-3.9 -2.9,-5.2 -0.7,-1.1 -2.4,-4.3 -3.5,-4.6 v 1.3 c 0,6.2 -1.4,10.6 -5.6,12.6 -1.1,-1.7 -3.6,-3.1 -3.6,-6.2 v -1.9 l 0,0 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "M 99.6 105.9 C 93.3 105.9 88.2 111 88.2 117.3 C 88.2 123.6 93.3 128.7 99.6 128.7 C 105.9 128.7 111 123.6 111 117.3 C 111 111 105.9 105.9 99.6 105.9 z M 105 109.4 L 106.8 111 L 101.2 117.1 L 107.3 123.2 L 105.6 124.9 L 99.5 118.8 L 93.7 125.3 L 91.9 123.6 L 97.8 117.2 L 92.1 111.4 L 93.8 109.8 L 99.5 115.4 L 105 109.4 z"
    }
  ];
  icn["AC.IC.SMOKE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 99.3,69.2 c 0.2,-2.6 4.4,-5.5 7.2,-6 4.2,-0.8 6.9,1.2 9.1,3.3 1.1,1.1 1.9,2.7 2.4,4.3 0.6,2.2 1.9,1.3 4,2.5 2.4,1.4 4.9,4.4 5.6,7.4 5.3,0 10.3,4.8 10.3,9.9 v 1.3 c 0,3 -1.2,4.9 -2.8,6.5 -1.1,1.1 -1.2,1.2 -2.6,2.1 -1.3,0.8 -2.5,0.6 -2.7,2 -0.6,4.6 -4.2,9 -9.4,9 3.3,5 2.3,8.7 -0.6,13 0,4.8 -0.2,6.2 -2.8,8.8 -2.4,2.5 -4.5,2.4 -8.6,2.4 0.7,-1 1.2,-1 2,-2.4 0.6,-1.1 0.8,-1.7 1.4,-2.9 1,-2.2 1.8,-3.7 1.8,-6.8 v -2.1 c 0,-1.4 -0.2,-2.4 -0.8,-3.2 -1.2,5.2 -1.4,6.4 -5.7,8.6 0,-8.3 3.8,-6.8 -1.9,-13.4 0,3.8 -0.2,5.6 -2.7,6.9 -0.8,-0.5 -2.1,-1.7 -2.1,-2.9 v -0.4 c 0,-2 2.5,-5.2 2.5,-6.7 v -0.4 c 0,-1.1 -0.4,-2.1 -1,-2.5 0,2.9 -3.4,7.6 -4.9,9.2 -1.6,1.7 -1.1,2.8 -0.2,5 0.7,1.7 1.1,3.5 1.1,5.8 v 1 c -3.2,-0.3 -4.4,-6.2 -6.1,-8.2 0,3.4 -0.8,6.3 0.4,9.4 0.8,1.9 2.4,5.6 4.4,6.1 v 0.4 l -3.4,0.6 -0.2,-0.1 c -3.4,0 -6.4,-2.4 -7.8,-4.4 -0.8,-1.1 -1.5,-2.7 -1.7,-4.4 -0.3,-2.3 0.6,-3.6 0.6,-5 0,0 -5.1,-4.7 -4.4,-9 l 0.2,-1.7 c -0.4,-0.5 -1.4,-1.4 -2,-2.2 -0.6,-0.8 -1.1,-1.8 -1.6,-2.6 -1.4,0 -2,0.6 -3.2,0.6 h -0.6 c -5.4,0 -10.5,-5.2 -10.5,-10.5 v -0.8 c 0,-4.9 4.1,-9.2 9,-9.2 h 2.1 c 0.8,-3.2 5.7,-6.9 10.1,-5.9 -0.4,-1.5 -1,-2.7 -1,-4.8 v -0.4 c 0,-3.8 3.2,-7.8 6.1,-8.8 1.9,-0.7 3.9,-1 6.1,-0.4 2.3,0.6 3.7,2.2 4.8,2.5 l 0,0 z m -0.4,-1.9 c -1.3,-0.1 -2.9,-2.1 -5.9,-2.1 h -1.9 c -5,0 -10.6,5.8 -10,11.4 l 0.5,3.4 h -0.6 c -4.3,0 -7.1,3.2 -8.6,6.1 -2.3,-1.1 -6.8,1.2 -7.9,2.4 -1.6,1.6 -3.6,4.2 -3.6,7.3 v 1.5 c 0,3.6 2.4,7.3 4.5,8.9 1.8,1.3 2,1.6 4.4,2.4 2.7,0.9 3.7,0.1 5.9,0.2 l 3.1,3.7 c -0.6,1.3 0.4,4.9 0.9,6 0.5,1.2 0.7,1.4 1.4,2.4 0.2,0.4 1.7,2 1.7,2 0,1.1 -0.4,1.4 -0.4,2.7 v 0.2 c 0,6.3 4.8,12 10.7,12 2.1,0 3.6,-0.4 5,-1 2.6,1.4 7.1,3 9.2,-0.1 l 3.4,0.5 c 2.7,0.4 6.8,-2.2 7.9,-3.6 1,-1.4 3.7,-6 2.4,-8.8 1.1,-0.7 2.6,-3.7 2.7,-5.5 0.1,-1.7 0.2,-1.8 -0.1,-3.6 -0.2,-1.4 -0.9,-2.2 -1,-3.2 4,-0.3 8.4,-5.2 8.4,-9.7 2.5,-1.6 3.4,-1.2 5.6,-3.8 1.3,-1.4 2.6,-4.4 2.6,-7 0,-6.3 -4.7,-12 -10.7,-12 -0.9,-4 -4.8,-8.3 -9.2,-8.6 -0.4,-4.4 -5.7,-9.4 -10.7,-9.4 -4.1,-0 -8.9,2.7 -9.6,5.6 l 0,0 z m 15.8,38.4 c 0.5,0 1,0.1 1,-0.4 0,-3.1 -4.1,-6.7 -7.6,-6.7 h -1.9 c -0.6,0 -1,0.8 -0.6,1 0.4,0.2 1.6,0.1 2,0.1 1.2,0 2.6,0.5 3.4,1 2.1,1.6 2.8,2.1 3.5,5.1 z m -34.5,-12.6 v 1.7 c 0,1.4 0.6,2.2 0.6,3.2 0,0 -3.6,3.4 -3.8,5.4 l 0.6,0.2 c 1,-0.6 1.6,-2.6 3,-4 1,-0.9 3.1,-2.2 4.8,-2.2 h 0.6 c 1.3,0 3.6,1 3.6,-0.2 0,-0.9 -2.6,-1 -3.6,-1 h -0.2 c -1.6,0 -3,0.6 -4,1.3 -0.1,-1 -0.6,-1.9 -0.6,-3.2 0,-4.6 3.7,-8.6 8.4,-8.6 h 1 c 1,0 1.5,0.2 2.3,0.4 0.1,-0.2 0.4,-0.6 0.4,-0.7 0,-0.7 -1.8,-1 -2.5,-1 h -1.5 c -4.5,-8e-4 -9.2,4.4 -9.2,8.6 z m 19.1,-15.8 0.6,0.6 c 1.6,-0.9 3.4,-2.3 5.9,-2.3 h 1 c 5.5,0 10.1,4.4 10.1,9.7 v 0.6 c -1.5,-0 -2.6,-0.8 -4.6,-0.8 h -1 c -1.5,0 -4.1,0.3 -4.2,1.7 0.6,0.1 0.4,0.2 0.8,0.2 0.9,0 1.4,-0.6 3,-0.6 h 2.3 c 2.2,0 5.6,1.8 6.6,3.1 2,2.6 1.8,3.7 2.6,7.2 0.5,0 1,0.1 1,-0.4 0,-4 -2.6,-8.1 -5.2,-9.4 0,-6.9 -4.5,-12.4 -11.1,-12.4 h -1.3 c -2.3,0 -5.6,1.6 -6.5,2.9 z"
    }
  ];
  icn["AC.IC.SPECIAL NEEDS FIRE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 75.3,133.9 h 49.4 v -28.9 c -0.6,0.4 -2.4,1.2 -2.4,2 v 24.8 H 77.4 v -30 h -2.2 v 32.1 l 0,0 z M 93,129.1 h 2 c 4.2,0 7.6,-2.4 9.3,-5 l -1.3,-3.5 c -1.2,0.3 -2.1,5.2 -8.6,5.2 h -0.8 c -3.4,0 -6.3,-3.3 -7.2,-6 -0.6,-1.7 -0.6,-3.6 0,-5.4 0.8,-2.5 1.6,-2.4 2.6,-4 l -0.4,-3.4 c -3.2,0.8 -7.1,8 -5.7,12.8 1.2,4.1 5.4,9.2 10.2,9.2 z M 88.9,97.9 v 0.4 c 0,0.8 0.5,1.4 0.8,2 l 1.4,14.7 11.3,0 4.3,10.2 6.2,-2 -1,-3 -3.5,1 C 108,119.9 104.8,111.7 104,111.7 H 94.1 C 94,111 93.8,110.9 93.8,110.1 v -1.1 h 7.6 v -2.4 h -8 l -0.2,-3.7 v -2.2 c 3.4,-0.8 2.7,-6.2 -1.1,-6.2 -1.8,0 -3.2,1.4 -3.2,3.2 z m 19.9,-7.4 v 1 l -0.4,0.3 C 105.1,89.7 101,86.1 101,80.8 99.6,81.7 98.8,84.8 98.8,87.1 v 1.1 c 0,4.5 3,10.7 5,13.3 2.8,3.7 7.4,4.8 11.6,7 1.6,-0.8 9.3,-5.4 10,-6.3 1.3,-1.7 4.2,-9.8 4.2,-12.4 0,-1.9 -0.3,-8.2 -1.3,-8.8 -0.7,2.7 -0.8,4.7 -2.3,6.8 -1,1.4 -3.3,3.5 -5,4 l -0.2,-2.4 v -0.2 c 0,-3 2,-5.4 2,-8.8 0,-1 -3.4,-6.1 -4.1,-6.2 0,1.8 -0.2,4.1 -0.6,5.4 -0.3,1 -1.9,3.4 -2.9,3.4 h -0.6 c -0.4,-1.4 -1.9,-1.7 -1.9,-4.8 V 76.9 c 0,-2.3 2.6,-5.5 2.6,-7.8 l 0,-0.6 -0.3,-2.4 c -1,0.2 -1,1.9 -1.4,2.9 -0.4,1 -1,2 -1.6,2.9 -1.3,1.7 -2.6,3.4 -3.9,5.1 -2,2.8 -2.1,2.7 -1,6.1 0.6,2 1.7,4.8 1.7,7.4 z m 24.3,10.2 -3.3,-2 -1.2,1.9 3.5,2 z m -66.2,0 1,1.9 c 5,-2.7 11,-6.9 16,-10.1 2.7,-1.7 5.2,-3.4 7.8,-5.1 1.4,-0.9 2.6,-1.6 3.9,-2.6 1.8,-1.2 1.9,-1.9 2.4,-4.3 l -31.2,20.2 z"
    }
  ];
  icn["AC.IC.WILD FIRE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 110.8,139.5 c 0.2,-0.5 6.5,-6.2 7.4,-7 2.6,-2.6 5.6,-5.2 7.8,-8.1 3.9,-5.2 8,-15 8,-24 v -6.9 c 0,-1 0,-2.2 -0.8,-2.4 -0.8,3.4 -3.3,7.7 -5.1,10.1 -0.5,0.6 -7.9,8.7 -7.9,6.2 0,-4.7 2.5,-8.4 2.9,-13.4 0.2,-2.9 -0.8,-11.4 -1.4,-14.3 -0.9,0.7 -1.2,4.2 -1.7,5.7 -0.6,1.7 -1.2,3.6 -2.1,5 -0.7,1.1 -6.1,7.2 -7,7.2 -0.7,0 -1.6,-2.9 -1.6,-4.1 0,-4.7 3.3,-9.7 3.3,-13.4 v -0.6 c 0,-2.4 -1.9,-3.6 -3,-5.6 -0.6,-1 -2.7,-4.7 -3.7,-4.8 v 2.9 c 0,2.2 -0.5,5.6 -1.3,7.1 -0.4,0.8 -3.2,4.1 -4,4.1 -1,0 -3.9,-3.9 -3.9,-5.7 v -3.5 c 0,-4.1 4.1,-8.6 4.1,-12.6 v -0.2 c 0,-1.5 -0,-4 -1.4,-4.1 -0.7,8 -12.6,18.7 -12.6,21.8 0,4.4 3.9,9.2 3.9,15.9 v 2.2 c 0,0.7 -0.2,0.8 -0.2,1.4 -0.8,-0.2 -1.4,-1.3 -1.9,-2 -0.7,-0.8 -1.4,-1.1 -2.2,-1.7 -1.5,-1 -2.7,-2.3 -3.8,-3.7 -1.9,-2.5 -4.1,-6.7 -4.1,-10.9 -1.8,0.5 -3.3,6.3 -3.3,8.8 v 3.5 c 0,8.3 5.9,15.1 5.9,18.1 -3.2,-1.7 -6,-3.9 -8.5,-6.4 -1.2,-1.2 -5.5,-8.5 -6.2,-8.7 0,5.7 1.7,10.3 2.6,15.1 0.5,2.3 1.2,5.1 1.9,7.1 1,2.7 1.9,3.3 3.4,5.3 3,4 4.9,6 8.3,9.4 1.5,1.5 2.9,2.9 4.4,4.4 l 4.7,3.4 5.9,2.8 V 129.9 h -13 l 9.9,-11.5 -7.4,-0.1 9.8,-11.1 -6.6,-0.1 10.9,-17.3 0.1,-0.2 11.2,17.5 -6.1,-0 9.4,11 -7.6,0 10.1,11.7 -13.1,0.1 v 13 l 6,-3.4 z"
    }
  ];
  icn["AC.IC.HAZARDOUS MATERIALS INCIDENT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 60.7,100.6 78.5,-0 -39.3,39.2 -39.2,-39.2 z M 127.6,87.8 c 0.6,0.4 6.1,5.9 6.1,6.2 V 100 h -6.1 V 87.8 z M 115.3,75.5 c 0.6,0.4 6.1,5.9 6.1,6.2 V 100 h -6.1 V 75.5 z M 90.8,69.5 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 100 H 90.8 V 69.5 z m -12.2,12.2 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 100 H 78.6 V 81.7 z m -6.3,6 0,12.2 H 66.4 V 94.2 c 0,-0.3 -0,-0.3 -0.1,-0.4 l 6,-6 z m 30.8,-24.5 6.2,6.1 c -0.2,0.4 -0.1,-0.1 -0.1,0.4 V 100 h -6.1 V 63.3 z M 56.7,100 100,143.3 143.3,100 100,56.7 56.7,100 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 103.1,63.3 6.2,6.1 c -0.2,0.4 -0.1,-0.1 -0.1,0.4 V 100 h -6.1 V 63.3 z m -30.8,24.5 0,12.2 H 66.4 V 94.2 c 0,-0.3 -0,-0.3 -0.1,-0.4 l 6,-6 z m 6.3,-6 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 100 H 78.6 V 81.7 z m 12.2,-12.2 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 100 H 90.8 V 69.5 z m 24.5,6 c 0.6,0.4 6.1,5.9 6.1,6.2 V 100 h -6.1 V 75.5 z m 12.3,12.3 c 0.6,0.4 6.1,5.9 6.1,6.2 V 100 h -6.1 V 87.8 z m -66.9,12.8 78.5,-0 -39.3,39.2 -39.2,-39.2 z"
    }
  ];
  icn["AC.IC.CHEMICAL AGENT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 100.7,107.7 c -3.2,2e-5 -5.8,1 -7.6,3 -1.9,2 -2.8,4.7 -2.8,8.1 -2e-6,3.4 0.9,6.1 2.8,8.1 1.9,2 4.4,3 7.6,3 1.3,0 2.4,-0.2 3.6,-0.5 1.1,-0.3 2.2,-0.9 3.2,-1.5 l 0.1,-0.1 0,-0.1 0,-3 0,-0.5 -0.3,0.3 c -0.9,0.9 -1.9,1.5 -3,1.9 -1.1,0.4 -2.2,0.7 -3.4,0.7 -2.4,0 -4.1,-0.7 -5.3,-2.1 -1.2,-1.4 -1.9,-3.5 -1.9,-6.2 -4e-6,-2.7 0.6,-4.8 1.9,-6.2 1.2,-1.4 3,-2.1 5.3,-2.1 1.2,2e-5 2.3,0.2 3.4,0.6 1.1,0.4 2.1,1.1 3,1.9 l 0.3,0.3 0,-0.5 0,-3 -0.2,0 0.1,-0.2 c -1,-0.7 -2.1,-1.2 -3.2,-1.5 -1.1,-0.3 -2.3,-0.5 -3.6,-0.5 z M 92.7,64.2 h 14.7 v 33 c 0,8.2 12.9,9.6 12.4,21.8 -0.3,6.8 -7,18.6 -14.3,18.6 h -11 c -6.8,0 -14.6,-13.1 -14.3,-20 0.6,-10.6 12.4,-12.8 12.4,-20.4 v -33 z m -14.7,55 c 0,6.8 7.9,20.2 14.7,20.2 h 14.7 c 8.1,0 14.7,-13 14.7,-22 0,-11.8 -12.8,-13.6 -12.8,-22 V 60.6 H 90.8 V 95.4 c 0,7.8 -12.8,8.7 -12.8,23.9 l 0,0 z"
    },
    {
      type: "path",
      stroke: false,
      fill: colors.fillColor.Unknown,
      d:
        "m 92.7,64.2 0,33 c 0,7.6 -11.9,9.8 -12.4,20.4 C 79.9,124.5 87.7,137.6 94.5,137.6 l 11,0 c 7.2,0 14,-11.8 14.3,-18.6 0.5,-12.2 -12.4,-13.6 -12.4,-21.8 l 0,-33 -14.7,0 z M 100.7,107.7 c 1.3,2e-5 2.5,0.2 3.6,0.5 1.1,0.3 2.2,0.8 3.2,1.5 l -0.1,0.2 0.2,0 0,3 0,0.5 -0.3,-0.3 c -0.9,-0.9 -1.9,-1.5 -3,-1.9 -1.1,-0.4 -2.2,-0.6 -3.4,-0.6 -2.4,2e-5 -4.1,0.7 -5.3,2.1 -1.2,1.4 -1.9,3.5 -1.9,6.2 -4e-6,2.7 0.6,4.8 1.9,6.2 1.2,1.4 3,2.1 5.3,2.1 1.2,0 2.3,-0.2 3.4,-0.7 1.1,-0.4 2.1,-1.1 3,-1.9 l 0.3,-0.3 0,0.5 0,3 0,0.1 -0.1,0.1 c -1,0.7 -2.1,1.2 -3.2,1.5 -1.1,0.3 -2.3,0.5 -3.6,0.5 -3.2,0 -5.8,-1 -7.6,-3 -1.9,-2 -2.8,-4.7 -2.8,-8.1 -2e-6,-3.4 0.9,-6.1 2.8,-8.1 1.9,-2 4.4,-3 7.6,-3 z"
    }
  ];
  icn["AC.IC.CORROSIVE MATERIAL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 102.9,135.4 c 0.8,0 1.4,-0.8 1.4,-1.5 0,-0.7 -0.6,-1.5 -1.2,-1.5 H 102.3 c -0.5,0 -1.2,0.7 -1.2,1.4 v 0.3 c 0,0.8 0.6,1.4 1.4,1.4 H 102.9 z M 96.9,132.5 c 0,0.7 0.6,1.5 1.2,1.5 h 0.6 c 0.8,0 1.4,-0.8 1.4,-1.5 v -0.2 c 0,-0.7 -0.6,-1.5 -1.2,-1.5 H 98.1 c -0.6,0 -1.2,0.9 -1.2,1.5 v 0.2 z m 8.5,-0.9 c 1.3,0 2.2,-1.8 1.1,-2.8 -1,-1 -2.8,-0.2 -2.8,1.1 0,0.8 0.9,1.7 1.7,1.7 z m -6.2,-4.4 c 0,0.6 0.6,1.5 1.2,1.5 h 0.6 c 0.8,0 1.4,-0.6 1.4,-1.4 v -0.6 c 0,-0.5 -0.7,-1.2 -1.4,-1.2 h -0.3 c -0.8,0 -1.5,0.8 -1.5,1.6 z m -0.6,-4.1 c 0.6,0 1.2,-0.8 1.2,-1.5 0,-1 -0.7,-1.7 -1.7,-1.7 -0.6,0 -1.5,0.6 -1.5,1.2 v 0.6 c 0,0.7 0.7,1.4 1.2,1.4 h 0.8 V 123.1 z m 2.4,-2.7 c 0,0.6 0.7,1.5 1.2,1.5 h 0.8 c 0.4,0 1.2,-0.8 1.2,-1.2 v -0.8 c 0,-0.6 -0.8,-1.2 -1.5,-1.2 h -0.1 c -0.8,0 -1.5,0.8 -1.5,1.5 v 0.1 z m -2.7,-3.5 c 0.6,0 1.4,-0.8 1.4,-1.5 v -0.2 c 0,-2.2 -3.2,-1.8 -3.2,-0.3 v 0.8 c 0,0.7 1.1,1.2 1.8,1.2 z m 4.1,-3.6 c 0,2 3.3,1.9 3.2,-0.1 -0.1,-2.3 -3.2,-1.8 -3.2,-0.3 v 0.4 z m 4.7,-16.2 0,2.9 -3,-0.2 0.9,2.8 -1.1,0.1 -1.6,-0.9 -0.4,3 -1,-1.5 -3.3,1 -0.6,-3.2 -2,1.3 -0.6,-1.6 -2.5,0.4 1.5,-2.7 -0.6,-1.5 -22.2,0 0,12.4 59.2,0 0,-12.4 z M 94.3,85.2 v 1.4 c 0,4.4 2.1,8.7 5.7,9.4 3.7,0.8 7,-4.5 7,-8 v -1.5 c 0,-3 -2.1,-8.6 -3,-11.3 -0.5,-1.4 -3.1,-10.6 -3.9,-10.6 -0.8,0 -0.9,4.5 -1.1,5.4 -0.6,2.1 -0.9,3.2 -1.6,5.1 -0.8,2.3 -3.2,7.6 -3.2,10.1 l 0,0 z"
    }
  ];
  icn["AC.IC.HAZARDOUS WHEN WET"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 60.6,100.5 78.8,-0 -39.4,39.4 L 60.6,100.5 z M 127.6,87.8 c 0.6,0.4 6.1,5.9 6.1,6.2 v 5.8 H 127.6 V 87.8 z M 115.3,75.5 c 0.6,0.4 6.1,5.9 6.1,6.2 v 18.1 h -6.1 V 75.5 z M 90.8,69.5 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 99.8 H 90.8 V 69.5 z M 78.6,81.7 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 99.8 H 78.6 V 81.7 z m -6.3,6 0,12.1 H 66.4 V 94.2 c 0,-0.3 -0,-0.3 -0.1,-0.4 l 6,-6 z m 30.8,-24.5 6.2,6.1 c -0.2,0.4 -0.1,-0.2 -0.1,0.4 v 30 h -6.1 V 63.3 z M 56.7,100 100,143.3 143.3,100 100,56.7 56.7,100 z m 41.2,25.3 c 0.2,1 0.6,1.6 1.6,1.8 l -0.8,0.6 c -1.3,-0.6 -1.3,-0.1 -1.7,-1.9 l 0.9,-0.4 z m -2.4,-1 c 0,2.9 1.3,4.9 4.2,4.9 h 0.9 c 1.9,0 3,-1 3.6,-2.3 0.9,-1.8 0.6,-3.1 -0.2,-4.6 -0.8,-1.4 -1.6,-2.3 -2.2,-3.8 -0.5,-1.2 -0.8,-3.8 -1.7,-4.4 C 99.6,118.1 95.5,122.5 95.5,124.2 z m -12.6,-9.4 c 0.4,0.9 0.4,1.4 1.5,1.7 l -0.6,0.6 C 82.2,116.7 82.6,116.5 82,115.3 l 0.9,-0.5 z m 1.6,3.8 H 86 c 2.3,0 3.7,-2.2 3.7,-4.6 0,-1.2 -1.9,-3.9 -2.6,-4.9 -0.9,-1.4 -1.2,-4.7 -2.2,-5.4 -0.2,3 -2.3,5.9 -3.6,8 -1.9,2.9 -0.4,6.9 3.1,6.9 z m 28.4,-3.8 c 0.2,1.6 0.9,1.1 1.5,2 l -0.8,0.3 c -1,-0.2 -1.7,-0.8 -1.8,-1.9 L 112.9,114.8 z m 2,-11.1 c -0.3,3.6 -2.2,5.6 -3.6,8.1 -1.7,3.1 -0.3,6.8 3.2,6.8 h 1.3 c 2.2,0 3.7,-1.7 3.7,-3.9 v -0.9 c 0,-1.4 -1.9,-3.8 -2.6,-4.9 -0.9,-1.4 -0.7,-4.4 -2,-5.2 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 112.9,114.8 c 0.2,1.6 0.9,1.1 1.5,2 l -0.8,0.3 c -1,-0.2 -1.7,-0.8 -1.8,-1.9 L 112.9,114.8 z m -30,0 c 0.4,0.9 0.4,1.4 1.5,1.7 l -0.6,0.6 C 82.2,116.7 82.6,116.5 82,115.3 l 0.9,-0.5 z m 15,10.4 c 0.2,1 0.6,1.6 1.6,1.8 l -0.8,0.6 c -1.3,-0.6 -1.3,-0.1 -1.7,-1.9 l 0.9,-0.4 z m 5.2,-62 6.2,6.1 c -0.2,0.4 -0.1,-0.2 -0.1,0.4 v 30 h -6.1 V 63.3 z m -30.8,24.5 0,12.1 H 66.4 V 94.2 c 0,-0.3 -0,-0.3 -0.1,-0.4 l 6,-6 z m 6.3,-6 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 99.8 H 78.6 V 81.7 z m 12.2,-12.2 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 99.8 H 90.8 V 69.5 z m 24.5,6 c 0.6,0.4 6.1,5.9 6.1,6.2 v 18.1 h -6.1 V 75.5 z m 12.4,12.3 c 0.6,0.4 6.1,5.9 6.1,6.2 v 5.8 H 127.6 V 87.8 z m 11.7,12.6 -78.8,0 39.4,39.4 L 139.4,100.4 z M 85,103.7 c 1,0.7 1.3,4 2.2,5.4 0.6,1 2.6,3.6 2.6,4.9 0,2.4 -1.4,4.6 -3.7,4.6 l -1.5,0 c -3.5,0 -5,-4 -3.1,-6.9 1.3,-2.1 3.4,-5 3.6,-8 z m 29.8,0 c 1.3,0.9 1.2,3.8 2,5.2 0.7,1.1 2.6,3.5 2.6,4.9 l 0,0.9 c 0,2.2 -1.6,3.9 -3.7,3.9 l -1.3,0 c -3.5,0 -4.9,-3.7 -3.2,-6.8 1.4,-2.5 3.4,-4.5 3.7,-8.1 z M 100,114.1 c 0.8,0.6 1.2,3.1 1.7,4.3 0.6,1.5 1.5,2.4 2.2,3.8 0.8,1.5 1.2,2.7 0.3,4.6 -0.6,1.3 -1.7,2.3 -3.6,2.3 l -0.9,0 c -2.8,0 -4.2,-2 -4.2,-4.9 0,-1.7 4.1,-6.1 4.5,-10.1 z"
    }
  ];
  icn["AC.IC.EXPLOSIVE MATERIAL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 96.5,104.6 0,0.2 -0.2,0 0,4 0,0.2 0.2,0 3.2,0 0.2,0 0,-0.2 0,-4 0,-0.2 -0.2,0 -3.2,0 z m 2.3,-20 c -1.1,2.4e-5 -2.2,0.1 -3.2,0.5 -1,0.3 -2,0.8 -3,1.4 l -0.1,0.1 0,0.1 0,3 0,0.4 0.3,-0.2 c 1,-0.7 2,-1.2 2.9,-1.6 0.9,-0.4 1.8,-0.5 2.6,-0.5 1.1,2.1e-5 2,0.3 2.6,0.8 0.7,0.5 1,1.2 1,2.1 -10e-6,0.5 -0.1,1 -0.4,1.4 -0.2,0.5 -0.7,1 -1.3,1.5 l -0,0 -1.4,1.4 c -1,0.9 -1.6,1.7 -1.9,2.5 -0.3,0.7 -0.5,1.6 -0.5,2.7 l 0,2.4 0,0.2 0.2,0 3,0 0,-0.2 0.2,0 0,-1.9 c -8e-6,-0.5 0,-1 0,-1.3 0,-0.3 0.1,-0.6 0.1,-0.8 0.1,-0.2 0.2,-0.5 0.4,-0.8 0.2,-0.3 0.5,-0.7 1,-1.1 l 1.4,-1.4 c 1,-0.9 1.6,-1.7 2,-2.5 0.4,-0.8 0.6,-1.6 0.6,-2.4 -2e-5,-1.7 -0.6,-3.1 -1.8,-4.2 -1.2,-1.1 -2.8,-1.6 -4.8,-1.6 z m 4.8,-31.1 -1.5,4.5 -4.3,12.9 -4.5,-7 -1.6,-2.5 -0.3,2.9 -1.3,14.4 -9.5,-10.7 -2.8,-3.2 1.1,4.1 3.4,12.9 -13.1,-0.7 -0.7,-0 -0.3,0.6 -0.1,0.2 -0.4,0.8 0.7,0.5 11.3,8.1 -20.1,1.4 -5.6,0.4 5.4,1.6 18,5.3 -12.3,7.1 -0.8,0.4 0.3,0.8 0.1,0.2 0.3,0.7 0.8,-0.1 16.1,-2 -4.8,8.3 -1.5,2.6 2.7,-1.1 8.8,-3.7 -3.4,14.5 -1.1,4.5 2.8,-3.7 8.9,-11.6 5,19.2 0.2,0.8 0.8,0 0.4,0 0.9,0 0.1,-1 0.9,-18.7 9.2,11.2 2.6,3.2 -0.9,-4 -3.3,-15.2 10.6,5.9 4.7,2.6 -3.4,-4.1 -5.5,-6.6 15.6,4.4 4,1.2 -3.1,-2.9 -10.7,-9.9 13.7,-2.1 4.6,-0.7 -4.5,-1.2 -15.5,-4.3 18.9,-9.6 4.7,-2.4 -5.2,0.5 -17.1,1.6 6.7,-10.8 2,-3.2 -3.3,1.8 -14.6,7.9 5.2,-16.5 1.7,-5.5 -3.5,4.5 -10.6,14 -1.7,-18.8 -0.4,-4.8 z m -1.1,9.7 1.5,16.6 0.2,2.6 1.6,-2 8.7,-11.5 -4.2,13.4 -0.8,2.4 2.2,-1.2 13.4,-7.3 -5.8,9.3 -1.1,1.7 2,-0.2 13.9,-1.3 -16.5,8.4 -2.3,1.2 2.5,0.7 13.5,3.7 -11.2,1.7 -2,0.3 1.5,1.4 9.1,8.4 -14.6,-4.2 -3.1,-0.9 2.1,2.5 4.2,5 -7.8,-4.3 -1.9,-1.1 0.5,2.2 2.9,13.3 -8.2,-10 -1.6,-2 -0.1,2.6 -0.8,16.1 -4.2,-16.3 -0.5,-2 -1.2,1.6 -7.3,9.5 2.8,-11.9 0.4,-1.9 -1.8,0.7 -7.9,3.3 4.3,-7.4 1,-1.7 -2,0.2 -13.9,1.7 10.3,-6 0.5,-0.3 0,-0.6 0,-0.3 0,-0.8 -0.7,-0.2 -14.5,-4.2 17.3,-1.2 2.8,-0.2 -2.3,-1.6 -11,-8 11.5,0.6 1.4,0.1 -0.3,-1.3 -2.7,-10.1 8.2,9.3 1.5,1.8 0.2,-2.3 1.3,-13.8 4,6.3 1.1,1.8 0.7,-2 3.4,-10.3 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "M 102.5 63.2 L 99 73.5 L 98.4 75.5 L 97.3 73.7 L 93.2 67.4 L 91.9 81.3 L 91.7 83.6 L 90.2 81.8 L 82 72.5 L 84.7 82.7 L 85.1 84 L 83.7 83.9 L 72.2 83.4 L 83.2 91.3 L 85.5 93 L 82.7 93.2 L 65.4 94.3 L 79.9 98.5 L 80.7 98.8 L 80.7 99.5 L 80.7 99.8 L 80.7 100.3 L 80.2 100.7 L 69.8 106.6 L 83.8 104.9 L 85.8 104.7 L 84.8 106.4 L 80.4 113.8 L 88.3 110.6 L 90.1 109.8 L 89.7 111.7 L 86.9 123.6 L 94.2 114.1 L 95.5 112.5 L 96 114.4 L 100.2 130.8 L 101 114.6 L 101.2 112 L 102.8 114 L 111 124 L 108.1 110.7 L 107.6 108.5 L 109.6 109.6 L 117.3 113.9 L 113.2 108.9 L 111.1 106.4 L 114.3 107.3 L 128.9 111.5 L 119.7 103.1 L 118.2 101.7 L 120.3 101.3 L 131.4 99.6 L 117.9 95.9 L 115.4 95.2 L 117.8 94 L 134.3 85.6 L 120.3 86.9 L 118.3 87.1 L 119.4 85.4 L 125.2 76.1 L 111.8 83.3 L 109.6 84.5 L 110.3 82.2 L 114.5 68.8 L 105.8 80.3 L 104.3 82.3 L 104 79.8 L 102.5 63.2 z M 98.8 84.5 C 100.8 84.5 102.4 85.1 103.6 86.1 C 104.8 87.2 105.5 88.6 105.5 90.3 C 105.5 91.2 105.3 92 104.9 92.7 C 104.5 93.5 103.8 94.3 102.8 95.2 L 101.5 96.6 C 101 97.1 100.6 97.4 100.4 97.7 C 100.2 98 100.1 98.2 100 98.5 C 100 98.7 99.9 98.9 99.9 99.2 C 99.8 99.5 99.8 100 99.8 100.5 L 99.8 102.4 L 99.7 102.4 L 99.7 102.7 L 96.6 102.7 L 96.4 102.7 L 96.4 102.4 L 96.4 100 C 96.4 98.9 96.6 98 96.9 97.3 C 97.2 96.6 97.9 95.8 98.8 94.8 L 100.2 93.4 C 100.8 92.9 101.2 92.4 101.5 91.9 C 101.7 91.4 101.9 91 101.9 90.5 C 101.9 89.6 101.5 88.9 100.9 88.3 C 100.2 87.8 99.4 87.5 98.3 87.5 C 97.5 87.5 96.6 87.7 95.7 88.1 C 94.8 88.5 93.8 89 92.8 89.7 L 92.5 89.9 L 92.5 89.5 L 92.5 86.5 L 92.5 86.4 L 92.6 86.3 C 93.6 85.7 94.6 85.3 95.6 85 C 96.7 84.7 97.7 84.5 98.8 84.5 z M 96.5 104.6 L 99.8 104.6 L 99.9 104.6 L 99.9 104.8 L 99.9 108.8 L 99.9 109 L 99.8 109 L 96.5 109 L 96.3 109 L 96.3 108.8 L 96.3 104.8 L 96.5 104.8 L 96.5 104.6 z"
    }
  ];
  icn["AC.IC.FLAMMABLE GAS"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 93.3,82.5 c 0,-4.3 13.8,-4.3 13.8,0 v 55.6 c 0,1.3 -4.4,1.2 -5.9,1.2 h -2 c -1.5,0 -5.9,0.1 -5.9,-1.2 V 82.5 l 4e-4,0 z m 5.3,-20.6 h -6.5 v 2.9 h 6.3 v 3.2 h -3.7 v 2 h 3.7 v 5.3 h -4.6 v 4.5 c -1.1,0.3 -2,1.6 -2,3 v 54.8 c 0,3.3 3.7,3.2 7.1,3.2 h 2.4 c 3.4,0 7.1,0.2 7.1,-3.2 V 83.1 c 0,-2.8 -1.8,-2.8 -1.8,-3.7 v -4.1 h -4.7 v -10.4 h 6.3 v -3 h -6.7 v -2.5 h -2.9 v 2.5 l 0,0 z m 21.8,32.3 v 0.6 c 0,2.2 2.3,5.1 1.6,8.1 -1.3,-0.3 -3.1,-2 -3.8,-3 -0.3,-0.4 -0.9,-1.7 -1.2,-2.2 -0.4,-0.9 -0.4,-2.3 -0.7,-2.8 -1.1,0.8 -1.6,3.5 -1.6,5.5 v 0.2 c 0,3.2 2.4,7.5 3.8,9.6 2,3 6.3,3.3 8.4,5.1 1.6,-0.9 6.9,-3.7 7.7,-4.9 0.9,-1.2 3.2,-7.4 3,-9.6 l -0.7,-5.9 h -0.4 c -0,3.2 -2.7,7.6 -5.5,7.9 v -2 c 0,-1.7 1.4,-4 1.4,-6.1 v -0.2 c 0,-0.9 -2.4,-4.4 -3.2,-4.7 0,3.4 -0.3,5.5 -2.5,6.7 -0.8,-0.7 -1.8,-1.6 -1.8,-3.1 v -1.2 c 0,-2.1 2,-4.1 2,-6.1 0,-0.9 -0.1,-1.6 -0.6,-2 -0.9,3.8 -5.9,8.9 -5.9,10.2 z m -52.7,0 v 0.4 c 0,1.2 1.8,4.3 1.8,6.1 v 2.2 c -2.4,-0.2 -5.7,-5 -5.7,-8.1 -1.7,1.1 -1.5,4.3 -1.4,6.7 0.1,2.4 1.3,4.7 2.2,6.3 1.3,2.6 1.6,2.9 4,4.5 0.6,0.4 5.3,2.8 5.9,2.8 1.2,0 6.8,-3.9 7.5,-4.7 0.9,-1 3.3,-7.3 3.1,-9.1 l -0.6,-6.5 h -0.4 c -0.5,2.3 -0.3,3.3 -1.6,5 -0.6,0.8 -2.7,2.7 -3.8,2.8 0,-0.9 -0.2,-0.7 -0.2,-1.4 0,-1.8 1.4,-4.3 1.7,-6.6 0.1,-1 -2.6,-4.6 -3.3,-5 0.4,2 -0.8,6.5 -2.4,6.5 h -0.2 c -0.9,0 -1.8,-2.2 -1.8,-3.4 0,-3.9 2.6,-4.5 1.6,-8.8 -0,0 -2.2,4.5 -2.9,5.4 -0.6,0.6 -3.5,4.3 -3.5,4.9 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 93.3,82.5 c 0,-4.3 13.8,-4.3 13.8,0 v 55.6 c 0,1.3 -4.4,1.2 -5.9,1.2 h -2 c -1.5,0 -5.9,0.1 -5.9,-1.2 V 82.5 l 4e-4,0 z"
    }
  ];
  icn["AC.IC.FLAMMABLE LIQUID"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 100.1,135.4 c -7.4,0 -11.3,-5.4 -13.1,-11.1 -2.1,-6.7 -2.4,-14.4 0.8,-20.2 5.9,-10.6 10.7,-21.6 11.9,-36.7 4,4.6 3.6,17.4 6.3,23.9 2.6,6.5 8.9,13.4 8.9,21 v 1.7 c 0,10 -4.5,21.3 -14.2,21.3 h -0.7 v 0 z m -0.6,1.7 h 1.9 c 10.1,0 15.4,-11.7 15.4,-21.9 v -3 c 0,-9.5 -7.7,-15.8 -9.9,-24.1 -2.4,-8.9 -1.7,-21.2 -9.1,-25.1 0,8.6 -1.3,16 -3.6,22.4 -1.2,3.3 -2.4,6.2 -3.6,9.5 -1.2,2.7 -3.1,5.8 -4.5,8.6 -1.4,2.7 -3,6.1 -2.6,10.5 0.4,4.4 0.6,7.6 1.8,11.3 2,5.9 6.7,11.9 14.3,11.9 z M 122,87 v 0.2 c 0,2.3 2.4,5.5 1.7,8.6 -1.3,-0.1 -3.5,-2.2 -4.1,-3.2 -0.5,-0.9 -0.9,-1.3 -1.2,-2.4 -0.3,-0.7 -0.6,-2.6 -0.8,-3 -1.2,0.9 -1.7,4 -1.7,6.1 0,3.2 2.6,8.4 4,10.4 1,1.3 2.5,2.3 4.1,3.1 0.6,0.3 4.8,2.4 5,2.4 0.9,0 7.6,-4.4 8.2,-5.1 0.9,-1.1 3.5,-8 3.3,-10.1 l -0.7,-6.8 h -0.4 c -0.1,3.5 -2.8,8.2 -5.9,8.4 0,0 0.3,-3.5 0.5,-4.4 0.3,-1.3 1,-2.9 1,-4.3 V 86.8 c 0,-1 -2.7,-4.6 -3.4,-5.1 0,3.7 -0.2,6 -2.7,7.2 -0.7,-0.6 -1.9,-1.7 -1.9,-3 v -1.4 c 0,-2.3 2.1,-4.7 2.1,-6.5 l 0,-0.2 -0.3,-1.9 c -1,0.2 -1.1,2 -1.5,2.9 -0.5,0.9 -1.2,1.9 -1.8,2.6 -0.9,1.2 -3.5,4.1 -3.5,5.7 z m -56.6,0 c 0,1.3 1.9,4.7 1.9,7 v 1.9 c -2.6,-0.2 -6.1,-5.2 -6.1,-8.6 -3.4,2.4 -0.7,11.4 0.9,14.1 1.5,2.6 1.8,3 4.4,4.7 0.4,0.3 6.1,3.1 6.2,3.1 1.3,0 4.1,-2.5 5.3,-3.2 2.5,-1.2 2.9,-1.7 4.2,-4.3 0.4,-0.9 1.6,-5.4 1.9,-6.6 0.4,-2.1 -0.5,-5.8 -0.5,-7.9 h -0.5 c -0.3,3.5 -2.9,8.4 -5.9,8.4 -0,-0.9 -0.2,-0.5 -0.2,-1.2 0,-2 1.5,-4.9 1.8,-7.1 0.2,-1.2 -2.7,-5.2 -3.5,-5.4 1,2.1 -1.1,6.1 -2.7,7 -0.9,-0.6 -1.9,-2.2 -1.9,-3.6 v -0.4 c 0,-3.7 2.7,-4.6 1.7,-9.1 -0.5,0.4 -0.8,2 -1.4,3 -0.7,1 -1,1.7 -1.8,2.7 -0.8,1 -3.6,4.2 -3.6,5.5 l 0,0 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 100.1,135.4 c -7.4,0 -11.3,-5.4 -13.1,-11.1 -2.1,-6.7 -2.4,-14.4 0.8,-20.2 5.9,-10.6 10.7,-21.6 11.9,-36.7 4,4.6 3.6,17.4 6.3,23.9 2.6,6.5 8.9,13.4 8.9,21 v 1.7 c 0,10 -4.5,21.3 -14.2,21.3 h -0.7 v 0 z"
    }
  ];
  icn["AC.IC.FLAMMABLE SOLID"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 68.6,102 c 0,-2 1.9,-4.2 1.9,-6.3 v -1.5 c 0,-0.6 -0.1,-0.4 -0.4,-0.7 -0.8,3.7 -6.1,9.1 -6.1,10.4 0,1.6 1.9,4.6 1.9,8.2 -2.6,-0.2 -5.9,-4.9 -5.9,-8 -0.8,0.9 -1.5,2.6 -1.5,4.3 0,4.4 1.7,8.1 3.5,10.6 0.8,1.2 7,5.2 8.7,5.2 1.1,0 6.7,-3.7 7.3,-4.4 0.9,-1.2 3.2,-6.8 3.2,-8.6 0,-1.6 -0,-6.6 -0.9,-7.2 -1.1,4.8 -1.5,5.9 -5.4,8.1 0,-4.3 1.3,-5.7 1.3,-8.2 v -0.4 c 0,-0.1 -2.8,-4.4 -3,-4.6 0,2.4 -0.7,6.7 -2.6,6.7 -1,8e-4 -2,-2.4 -2,-3.7 z m 60.3,-0.4 c 0,-1.7 2.2,-4.5 2.2,-6.3 0,-0.7 -0.2,-1.6 -0.7,-1.9 -0.9,3.7 -5.9,8.9 -5.9,10.2 v 0.4 c 0,1.9 1.5,3.7 1.5,6.1 v 2.2 c -2.3,-0.6 -5.6,-4.9 -5.7,-8 -1,0.7 -1.5,3 -1.5,4.8 v 1.1 c 0,2.8 2.5,7.7 3.8,9.5 2,2.7 6.4,3.1 8.4,4.8 2.1,-1.1 3.1,-1.8 5.1,-2.9 2.6,-1.6 2.2,-1.5 3.5,-4.3 0.7,-1.4 1.7,-4.5 1.8,-6.2 0.1,-1.5 -0.1,-6.4 -0.9,-7 -0.8,3.5 -2.1,7.1 -5.4,8 -0,-0.7 -0.2,-0.7 -0.2,-1.5 v -0.2 c 0,-1.8 1.7,-4.9 1.5,-6.4 -0.1,-0.8 -2.5,-4.8 -3,-5.1 0,2.8 -0.5,6.7 -3,6.7 -0.4,-1.3 -1.5,-1 -1.5,-3.9 z m -35.6,1.9 v -20 l 20,-0.4 v 19.4 l -20,1 z m -13.9,-7.6 0,-16.8 10.8,4 v 19.8 c -1.2,-0.7 -10.9,-6.2 -10.9,-7 z m 1.5,-18.4 c 5.7,0 11.4,0 17.2,0 2.1,0 12.1,3.1 13.2,3.9 l -3.7,0.3 H 92.6 c -0.9,0 -11.1,-3.7 -11.7,-4.1 z m -3.5,-1.5 0,14.7 -0.3,6.7 c 2.2,1.2 5.3,3 7.5,4.5 1.9,1.2 5.5,4 8.1,4 7.6,0 15.3,-1.1 23.1,-1.1 l -0,-23.6 c -1,-0.5 -14.8,-5.4 -15.2,-5.4 l -3.9,-0.1 -19.3,0.4 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 80.9,77.5 c 5.7,0 11.4,0 17.2,0 2.1,0 12.1,3.1 13.2,3.9 l -3.7,0.3 H 92.6 c -0.9,0 -11.1,-3.7 -11.7,-4.1 z m -1.5,18.4 0,-16.8 10.8,4 v 19.8 c -1.2,-0.7 -10.9,-6.2 -10.9,-7 z m 13.9,7.6 v -20 l 20,-0.4 v 19.4 l -20,1 z"
    }
  ];
  icn["AC.IC.NON-FLAMMABLE GAS"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 92.7,81.3 c 0,-4.6 14.7,-4.6 14.7,0 v 59.4 c 0,1.4 -4.7,1.3 -6.3,1.3 h -2.1 c -1.6,0 -6.3,0.1 -6.3,-1.3 V 81.3 z m 5.7,-22 h -7 v 3.2 h 6.7 v 3.3 h -4 v 2.1 h 4 v 5.7 h -4.8 v 4.8 c -1.1,0.3 -2.1,1.7 -2.1,3.1 v 58.6 c 0,3.5 4,3.3 7.6,3.3 h 2.5 c 3.6,0 7.6,0.2 7.6,-3.3 V 81.9 c 0,-3 -1.9,-3 -1.9,-4 v -4.4 h -5 v -11.1 h 6.7 v -3.1 h -7.2 v -2.7 h -3.1 v 2.7 l -4e-4,0 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 92.7,81.3 c 0,-4.6 14.7,-4.6 14.7,0 v 59.4 c 0,1.4 -4.7,1.3 -6.3,1.3 h -2.1 c -1.6,0 -6.3,0.1 -6.3,-1.3 V 81.3 z"
    }
  ];
  icn["AC.IC.ORGANIC PEROXIDE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 132.1,128.2 v 6.2 l -36.6,2.2 v -6.7 l 0.6,0.1 36,-1.7 z m -63.8,-11.1 c 2.6,1.7 26.1,12.1 26.1,13.2 v 5.9 l -0.1,0.2 -26,-14.7 v -4.6 z m 61.1,10 c -4.7,0 -33,2.1 -34.6,1.5 -1.8,-0.7 -23.8,-11.4 -24.4,-12 3.8,0 7.5,0 11.3,0 2.9,0 8.8,-0.8 10,1.1 l -9,0.6 2.1,0.7 v 0.4 h -1.2 l -1.8,0.2 c 2,1.3 18.3,5.2 22.4,5.2 h 1.9 c 4.8,0 9.2,-1.3 13,-1.4 0.7,0 9.9,3.3 10.4,3.7 z m -25.4,-23.2 1.1,9.4 5.4,-6.8 -2.5,8.2 7.7,-4.3 -3.7,5.9 8.4,-0.8 -9.2,4.7 8.1,2.6 -14.4,1.7 c -3.3,0.2 -19,-3.7 -20.5,-4.8 l 10.3,-0.6 -6.2,-4.5 6.8,0.1 -1.7,-5.9 5.1,5.2 0.7,-7.5 2.6,3.9 2.1,-6.6 z m 0.7,-2.2 -0.1,-0.6 h -0.3 l -1.8,6.2 -0.4,-0 -2.4,-3.7 -0,2.1 -0.7,-1.1 -0.6,6.2 -4.9,-5.4 0.6,2.6 -1.5,-1.2 1.8,6.2 -2.5,0 -4,-0.2 1.5,1.1 -2.4,-0.1 1.5,1.4 h -21.3 c -0.1,0.5 -0.2,0.5 -0.2,1.1 v 5 c 0,1.6 4.8,3.7 6.2,4.4 2.3,1.3 4.6,2.4 6.9,3.8 4.4,2.7 9.2,5 13.7,7.6 1.8,1.1 6.8,0.5 9.6,0.2 2.8,-0.3 7.2,-0.2 9.9,-0.7 2.8,-0.5 7,-0.4 9.9,-0.7 2.7,-0.4 7.4,-0.6 10,-0.7 v -7.9 c 0,-0.9 -5.3,-2.4 -6.4,-2.8 -1.6,-0.5 -5.7,-1.9 -6.8,-2.6 l 2.9,-0.3 -8.4,-2.2 0,-0.4 9.2,-4.7 -1.5,0.2 1.7,-1.1 -10,1 3.9,-6.6 -8.1,4.7 2.9,-10 -6.4,8.4 -1.1,-11.1 -0.6,1.9 z m 1.1,-6.2 c -5.6,0 -9.6,-3.4 -9.6,-9 v -1.1 c 0,-4.8 9,-12.5 9,-21.1 2.8,3.2 2.2,7.6 4.3,11 1.2,1.9 5.3,7.8 5.3,9.9 v 1.1 c 0,5.3 -3.7,9.2 -9,9.2 z m -10.9,-10 v 1.1 c 0,13.7 21.1,13.2 21.1,0.8 v -2.1 c 0,-3.5 -4.5,-8.3 -5.9,-11.7 -2.2,-5.1 -1.1,-8.8 -6.2,-11.6 0,11.2 -9,17.6 -9,23.5 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 105.7,95.5 c -5.6,0 -9.6,-3.4 -9.6,-9 v -1.1 c 0,-4.8 9,-12.5 9,-21.1 2.8,3.2 2.2,7.6 4.3,11 1.2,1.9 5.3,7.8 5.3,9.9 v 1.1 c 0,5.3 -3.7,9.2 -9,9.2 z m -1.8,8.4 1.1,9.4 5.4,-6.8 -2.5,8.2 7.7,-4.3 -3.7,5.9 8.4,-0.8 -9.2,4.7 8.1,2.6 -14.4,1.7 c -3.3,0.2 -19,-3.7 -20.5,-4.8 l 10.3,-0.6 -6.2,-4.5 6.8,0.1 -1.7,-5.9 5.1,5.2 0.7,-7.5 2.6,3.9 2.1,-6.6 z m -35.6,13.2 c 2.6,1.7 26.1,12.1 26.1,13.2 v 5.9 l -0.1,0.2 -26,-14.7 v -4.6 z m 63.8,11.1 v 6.2 l -36.6,2.2 v -6.7 l 0.6,0.1 36,-1.7 z m -2.7,-1.1 c -4.7,0 -33,2.1 -34.6,1.5 -1.8,-0.7 -23.8,-11.4 -24.4,-12 3.8,0 7.5,0 11.3,0 2.9,0 8.8,-0.8 10,1.1 l -9,0.6 2.1,0.7 v 0.4 h -1.2 l -1.8,0.2 c 2,1.3 18.3,5.2 22.4,5.2 h 1.9 c 4.8,0 9.2,-1.3 13,-1.4 0.7,0 9.9,3.3 10.4,3.7 z"
    }
  ];
  icn["AC.IC.OXIDIZER"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 80.9,135.3 0,0.2 0,4.2 0,0.2 0.2,0 40.7,0 0.2,0 0,-0.2 0,-4.2 0,-0.2 -0.2,0 -40.7,0 -0.2,0 z m 6.5,-20.7 c 0,-7.4 6.1,-14 13.4,-14 h 1.1 c 7.5,0 13.6,6.6 13.6,14 0,7.1 -6.2,13.9 -13.2,13.9 h -1.9 c -6.8,-0 -13,-6.8 -13,-13.9 z m 12.8,-35.9 c -0.7,0 -2.1,-2.1 -2.3,-2.9 -0.3,-1.2 -0.4,-3 0,-4.4 0.5,-2.1 2.8,-5.9 2.8,-7.5 0,-1.1 -0.1,-3 -1.3,-3.1 -1,4.4 -2.1,4.9 -4.1,8 -1,1.5 -4.7,5.8 -4.7,7.3 v 0.4 c 0,2.4 3.1,8.1 2.7,10.5 l -0.2,1.7 c -3.5,-0.8 -8.1,-7.3 -8.1,-12 -1.4,0.1 -2.5,4.4 -2.5,6.1 v 2.9 c 0,5.7 3.3,8.3 4.2,12 -2.7,-1.4 -4,-2.2 -5.9,-4.4 -1.1,-1.2 -3.7,-5.6 -4.1,-5.9 -1.1,2.4 1.7,10.3 2.4,12.1 0.7,1.7 1.4,3.5 2.3,5 1.1,1.8 2.2,2.6 3.2,4.1 0,1.7 -0.5,2.4 -0.6,4.7 -0,1.8 -0,2.6 0.2,4.6 0.2,2.1 2.1,6.1 3.2,7.3 2.4,2.6 2.4,2.8 5.6,4.8 2,1.3 4.9,2.2 8.1,2.2 h 0.6 c 6.4,0 11.4,-3.5 14.2,-7.2 3.8,-5.2 3.8,-9.9 2.2,-16.7 3.5,-6.6 5.9,-9.3 5.9,-19.7 v -0.4 l -0.4,-4 c -0.1,0 -3.3,6.2 -3.8,7 -1,1.5 -3.7,4.8 -5.7,5 0.1,-3.2 2.1,-6.2 2.1,-9.4 v -2.2 l -1.1,-8 c -1,0.7 -1.5,5.9 -3,7.7 -0.4,0.5 -5.6,5.5 -5.6,3.6 v -1.7 c 0,-3.1 2.1,-6.3 2.1,-9 v -1.3 c 0,-0.8 -3.9,-6.5 -4.6,-6.9 0,2.3 -0.2,4.4 -0.7,6.2 -0.3,1.1 -2,3.7 -3,3.7 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 87.4,114.5 c 0,-7.4 6.1,-14 13.4,-14 h 1.1 c 7.5,0 13.6,6.6 13.6,14 0,7.1 -6.2,13.9 -13.2,13.9 h -1.9 c -6.8,-0 -13,-6.8 -13,-13.9 z"
    }
  ];
  icn["AC.IC.RADIOACTIVE MATERIAL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 83.7,130.4 c -10.1,-5.6 -16.6,-17 -16.4,-28.5 l 17.8,-0 c -0.2,5 3.1,10.7 7.5,13.1 l -9,15.4 z m 49.1,-28.2 c 0.2,11.5 -6.4,22.9 -16.4,28.5 l -9,-15.4 c 4.4,-2.4 7.7,-8.1 7.6,-13.1 l 17.8,0 z M 83.5,73.8 c 9.9,-5.9 23,-5.9 32.9,0 l -8.9,15.5 c -4.3,-2.6 -10.9,-2.6 -15.1,0 l -8.9,-15.5 z m 26.5,28.5 c 0,5.5 -4.4,9.9 -9.9,9.9 -5.5,0 -9.9,-4.4 -9.9,-9.9 0,-5.5 4.4,-9.9 9.9,-9.9 5.5,0 9.9,4.4 9.9,9.9 z"
    }
  ];
  icn["AC.IC.SPONTANEOUSLY COMBUSTIBLE MATERIAL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 101.2,128.4 -2.1,0 0,12.6 2.1,0 z m 26.5,0.6 -8.7,-8.6 -1.2,1.2 8.7,8.7 z m -45,-7.5 -1.3,-1.3 -8.8,8.8 1.3,1.4 z m 55.5,-19.7 -12.2,0 0,1.9 12.2,0 z m -63.3,0 -13.1,0 0,1.9 12.8,0 z m 52.8,-25.3 -1.3,-1.2 -9,8.7 1.5,1.5 z m -46.1,9.1 1.4,-1.5 -9.3,-9.2 -0,0.2 -1.2,1.3 z m 19.5,-26.5 -2.1,0 0,9.7 2.1,0 z M 91.7,88 v 0.6 c 0,0.5 1.4,4.3 1.7,5.1 0.7,2.2 0.7,3.4 0.7,5.7 -1.2,-0.1 -4.4,-3 -5.1,-4 -1.7,-2.5 -1.7,-3.4 -2.5,-6.7 -0.9,0.7 -1.9,3.8 -1.9,5.5 v 2.3 c 0,5.6 3.6,8.4 3.8,11.1 -0.9,-0.2 -4.8,-3.2 -5.4,-3.8 -0.7,-0.8 -3.3,-5.3 -3.8,-5.4 0,3.9 1.1,6.9 2.1,9.7 0.6,1.5 1.2,2.9 1.7,4.2 0.8,2.2 1.4,2 2.6,3.5 2.9,3.6 9.4,8.3 15.7,8.3 h 0.8 c 2.2,0 6.4,-1.7 7.9,-2.6 2.4,-1.3 4.5,-2.7 6,-4.8 2.8,-3.8 5.3,-9.3 5.3,-16 v -2.7 l -0.2,-2.3 h -0.4 c -1.1,4.7 -4.2,8.4 -8,10.5 0,-3.6 1.3,-5.3 1.9,-8.4 0.4,-2.4 -1,-6.9 -1,-9.2 -0.4,0.3 -1.2,5.4 -2.5,7 -0.3,0.4 -5.1,5.2 -5.1,3.1 v -2.1 c 0,-3 1.9,-4.8 1.9,-8.2 0,-0.8 -3.5,-6 -4.1,-6.3 l 0.1,0.9 c 0,1.2 -0.4,4.1 -0.7,5 -0.2,0.5 -2.3,3 -2.6,3 -1.2,0 -2.5,-2.9 -2.5,-4.4 v -1.1 c 0,-2.9 2.8,-6.1 2.6,-8 l -0.5,-2.9 c -0.5,0.4 -1.2,3 -1.6,3.9 -0.6,1.3 -1.4,2.2 -2.2,3.2 C 95.4,82.4 91.7,87.1 91.7,88 z"
    }
  ];
  icn["AC.IC.UNEXPLODED ORDNANCE"] = text("UXO");
  icn["AC.IC.TOXIC INFECTIOUS MATERIAL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 104.6,116.2 c 0,-3.6 0.9,-4.6 1.5,-7.3 l -2.5,-1.2 c -2.4,2.1 -4.4,1.6 -6.8,0 l -2.5,1.4 c 0.2,2.6 2,3.9 1.5,8.7 -0.4,3.1 -1.1,5.8 -2.6,7.8 -2.9,3.9 -7,7.4 -13.7,7.4 h -1 c -4.7,0 -10.2,-3.2 -12,-6 l -1.2,0.6 c 3.3,4.9 11.4,10 19.8,10 h 0.2 c 6.4,0 10.9,-2.7 14.8,-5.3 3.7,2.5 7.6,5 13.8,5 h 3 c 3.8,0 8.2,-1.6 10.6,-3.2 1.8,-1.2 6.7,-4.5 7.2,-6.6 -1.1,-0.3 -0.5,-0.5 -1.3,-0.5 -0.5,0 -1.7,1.9 -2.2,2.3 -0.8,0.6 -1.8,1.1 -2.6,1.6 -1.4,0.9 -4.7,1.8 -7,1.8 h -1.8 c -7.9,0 -15.3,-7.7 -15.3,-15.8 v -0.8 z m 2.3,3.5 2.5,4.3 c 3.2,-0.8 7.7,-5.2 9.3,-7.8 2.2,-3.7 3.5,-7.8 3.5,-13.8 h -5.5 c 0.1,5.2 -0.1,7.2 -2.5,10.8 -1.2,1.8 -1.7,2.1 -3.2,3.6 -1,1 -3.6,2.2 -4.1,2.9 z m -28.6,-13.8 c 0,7.4 6.8,16.7 12.5,18 l 2.3,-4.5 c -6.5,-3.4 -9.5,-8 -9.5,-17.1 h -5.3 v 3.5 z m -2.5,-17 v 1 c 0,0.5 -5,3.2 -5.8,3.8 -1.6,1.1 -3.5,3.2 -4.7,4.8 -2.8,3.6 -4.8,8.1 -4.8,14.2 0,4.4 1,6 1.8,9.4 l 1.2,-0.6 c -0.1,-1.5 -0.8,-2.3 -0.8,-4 v -2 c 0,-7.8 7.9,-15.6 16,-15.6 h 1.8 c 2.6,0 5.9,1.3 7.5,2.2 2.2,1.3 3.6,3.6 5.3,4.8 l 2.3,-1 v -1.8 c 0,-2 1.6,-3.9 3.3,-4.3 v -3 c -7.6,-0.2 -15.3,-7.8 -15.3,-15.5 v -1.5 c 0,-4.1 2.1,-8.6 4.2,-10.6 1.3,-1.2 2.5,-2.3 4,-3.2 0.8,-0.5 5.1,-1.5 5.1,-2.5 v -1 c -6.6,1.6 -11.7,3.8 -15.4,8.5 -4.3,5.5 -5.7,9 -5.7,17.9 l 0,0 z m 27.6,-25.4 c 0,0.6 4.2,2.1 5,2.5 1.2,0.6 3.5,2.4 4.2,3.5 2.1,2.9 4.3,6 4.3,11 0,8.2 -7.4,16.3 -15.6,16.3 v 3 c 2.3,0.2 4.4,3.4 3.3,5.8 0.6,0.2 2.5,1.2 2.5,1.2 0.7,0 5,-7 14.3,-7 h 0.2 c 4.5,0 9,2.6 11.1,5 1.7,1.9 5.3,7.6 4.8,11.4 l -0.8,5.5 1.2,0.6 c 0.1,-0.9 0.8,-2.3 1.1,-3.6 0.3,-1.2 0.4,-3 0.4,-4.4 v -3.3 c 0,-8.4 -8.3,-18.8 -15,-20.3 0,-5 0.4,-6.4 -0.9,-10.9 -0.9,-2.8 -2.6,-6.4 -4.3,-8.3 -5.1,-5.3 -7.5,-7 -15.9,-9 v 1 l -4e-4,0 z m -15.8,22.6 2.8,4.8 c 3,-1.6 4.8,-3.3 9.5,-3.3 h 0.5 c 5.8,0 6.9,2.6 9.7,3.2 l 2.6,-4.7 c -9.5,-5 -15.7,-5 -25.1,0 z"
    }
  ];
  icn["AC.IC.TOXIC GAS"] = [
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 90.2,102.3 c 0.6,-1.9 5.7,-1.9 11.3,-0 5.6,1.9 9.6,4.9 9,6.8 -0.6,1.9 -5.7,1.9 -11.3,0 -5.6,-1.9 -9.6,-4.9 -9,-6.8 z m 7.7,-22.2 c 10e-7,3.7 -1.7,6.7 -3.8,6.7 -2.1,-2e-6 -3.8,-3 -3.8,-6.7 2e-6,-3.7 1.7,-6.7 3.8,-6.7 2.1,0 3.8,3 3.8,6.7 z m 17,2.2 c 0,4.1 -2.8,7.3 -6.3,7.3 -3.5,2e-6 -6.3,-3.3 -6.3,-7.3 0,-4.1 2.8,-7.3 6.3,-7.3 3.5,0 6.3,3.3 6.3,7.3 z m -7.9,49.6 c -1,2.9 -8.5,2.9 -16.6,0 -8.2,-2.9 -13.9,-7.6 -12.9,-10.5 1,-2.9 8.5,-2.9 16.6,-0 8.2,2.9 13.9,7.6 12.9,10.5 z"
    },
    {
      type: "path",
      stroke: false,
      d:
        "M 107.5 64.3 C 102.2 64.2 96.9 67.1 92.8 71.6 C 90.6 73.6 89.2 76.8 89.2 80.4 C 89.2 83 90 85.4 91.2 87.3 C 92.1 89.9 92.7 91.8 92.7 94.5 L 92.4 96.7 L 90.7 101.6 C 92.3 100.5 96.7 100.7 101.5 102.3 C 106.6 104 110.4 106.7 110.5 108.6 L 112 104.2 C 115.9 104 120.5 96.9 122.7 87.6 C 124.9 77.9 123.5 69.3 119.8 67.9 C 118.4 66.6 116.1 65.5 112.8 65.3 C 111.1 64.6 109.3 64.3 107.5 64.3 z M 94.1 73.4 C 94.4 73.4 94.6 73.4 94.8 73.5 C 95.1 73.6 95.3 73.8 95.6 73.9 C 96.2 74.4 96.8 75.3 97.2 76.3 C 97.5 77.1 97.7 77.9 97.8 78.7 C 97.9 79.2 97.9 79.6 97.9 80.1 C 97.9 80.5 97.9 81 97.8 81.4 C 97.7 82.3 97.5 83.1 97.2 83.8 C 96.9 84.7 96.4 85.4 95.9 85.9 C 95.6 86.2 95.2 86.5 94.8 86.6 C 94.7 86.6 94.6 86.7 94.5 86.7 C 94.3 86.7 94.2 86.7 94.1 86.7 C 93.8 86.7 93.6 86.7 93.3 86.6 C 93 86.5 92.6 86.2 92.3 85.9 C 92.2 85.8 92.1 85.7 92 85.6 C 91.6 85.1 91.2 84.5 91 83.8 C 90.8 83.4 90.7 83.1 90.6 82.7 C 90.4 81.9 90.3 81 90.3 80.1 C 90.3 79.1 90.4 78.3 90.6 77.5 C 90.7 77.1 90.8 76.7 91 76.3 C 91.2 75.6 91.6 75 92 74.5 C 92.2 74.3 92.4 74.1 92.6 73.9 C 92.9 73.8 93.1 73.6 93.3 73.5 C 93.6 73.4 93.8 73.4 94.1 73.4 z M 108.6 75 C 110.4 75 112.1 75.9 113.3 77.3 C 113.3 77.4 113.4 77.5 113.5 77.6 C 113.5 77.6 113.5 77.6 113.5 77.7 C 113.6 77.8 113.7 78 113.8 78.2 C 113.8 78.3 113.9 78.3 113.9 78.4 C 114 78.5 114 78.5 114 78.6 C 114.1 78.7 114.2 78.8 114.2 79 C 114.3 79.1 114.3 79.3 114.4 79.4 C 114.4 79.5 114.5 79.5 114.5 79.6 C 114.5 79.7 114.6 79.9 114.6 80 C 114.6 80.1 114.6 80.2 114.7 80.3 C 114.7 80.4 114.7 80.6 114.8 80.8 C 114.9 81.3 114.9 81.8 114.9 82.3 C 114.9 84.6 114 86.6 112.6 88 C 112 88.6 111.3 89 110.5 89.3 C 110.3 89.4 110.1 89.5 109.9 89.5 C 109.5 89.6 109 89.7 108.6 89.7 C 108.2 89.7 107.7 89.6 107.3 89.5 C 107.3 89.5 107.3 89.5 107.3 89.5 C 107.1 89.5 106.9 89.4 106.7 89.3 C 105.9 89 105.2 88.6 104.6 88 C 104 87.4 103.5 86.6 103.1 85.8 C 102.9 85.4 102.7 85 102.6 84.5 C 102.5 84.3 102.5 84 102.4 83.8 C 102.4 83.5 102.4 83.3 102.3 83.1 C 102.3 82.8 102.3 82.6 102.3 82.3 C 102.3 82 102.3 81.8 102.3 81.5 C 102.3 81.5 102.4 81.5 102.4 81.4 C 102.4 81 102.5 80.5 102.6 80.1 C 102.6 80.1 102.6 80.1 102.6 80 C 103.4 77.1 105.8 75 108.6 75 z M 88.8 104 C 86.6 104 84.8 104.4 83.9 105.2 L 83.8 105.2 L 83.7 105.3 C 83.4 105.6 83.2 105.9 83.1 106.2 C 83 106.5 83 106.8 83 107.2 L 78.1 120.5 C 80.2 118.5 86.9 118.7 94.2 121.3 C 101.2 123.8 106.4 127.7 107.1 130.6 L 111.8 117.8 C 112.2 117.5 112.5 117.2 112.7 116.8 C 113.7 113.8 107.9 109.1 99.8 106.2 C 95.7 104.8 91.8 104 88.8 104 z M 82 120.8 C 79 120.8 76.9 121.5 76.4 123 C 75.4 125.9 81.1 130.7 89.3 133.6 C 97.4 136.5 104.9 136.5 105.9 133.6 C 107 130.6 101.2 125.9 93 123 C 89 121.5 85 120.8 82 120.8 z M 86.1 125.6 C 87.4 125.5 89.4 125.9 91.5 126.6 C 94.8 127.8 97.2 129.6 96.9 130.6 C 96.5 131.6 93.5 131.5 90.1 130.3 C 86.8 129.1 84.4 127.3 84.7 126.3 C 84.9 125.9 85.4 125.7 86.1 125.6 z "
    }
  ];
  icn["AC.IC.AFTERSHOCK"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 99,62.5 -0,0 -0,0 -0.9,0 -0,0 -0,0 -0.9,0.1 -0,0 -0,0 -0.9,0.1 -0,0 -0,0 -0.9,0.1 -0,0 -0,0 -0.9,0.1 -0,0 -0,0 -0.9,0.1 -0,0 -0,0 -0.9,0.2 -0,0 -0,0 -0.7,0.1 0.6,2.7 0.7,-0.1 0,-0 0.8,-0.1 0,-0 0.8,-0.1 0,0 0.8,-0.1 0,0 0.9,-0.1 0,0 0.9,-0.1 0,0 0.9,-0.1 0,0 0.9,-0 0,0 0.9,-0 0,0 0,0 0.9,0 0,0 0.9,0 0,0 0.1,0 0.2,-2.8 -0.1,-0 -0,0 -0,0 -0.9,-0 -0,0 -0,0 -1,-0 -0,0 -0,0 z m 8.8,3.6 0.2,0 0,0 0.8,0.2 0,0 0.8,0.2 0,0 0.8,0.2 0,0 0.8,0.3 0,0 0,0 0.8,0.3 0,0 0.8,0.3 0,0 0.8,0.3 0,0 0.8,0.3 0,0 0.8,0.3 0,0 0.8,0.4 0,0 0,0 0.7,0.4 0,0 0.1,0 1.3,-2.5 -0.1,-0.1 -0,-0 -0,0 -0.8,-0.4 -0,-0 -0,0 -0.8,-0.4 -0,0 -0,-0 -0.8,-0.4 -0,-0 -0,0 -0.8,-0.4 -0,0 -0,-0 -0.8,-0.3 -0,-0 -0,0 -0.8,-0.3 -0,-0 -0,0 -0.8,-0.3 -0,0 -0,-0 -0.9,-0.3 -0,0 -0,0 -0.9,-0.3 -0,0 -0,0 -0.9,-0.2 -0,0 -0,-0 -0.9,-0.2 -0,0 -0,0 -0.2,-0.1 z m -22.7,-0.7 -0,0 -0,0 -0.8,0.4 -0,0 -0,0 -0.8,0.4 -0,0 -0,0 -0.8,0.4 -0,0 -0,0 -0.8,0.4 -0,0 -0,0 -0.8,0.4 -0,0 -0,0 -0.8,0.5 -0,0 -0,0 -0.8,0.5 -0,0 -0,0 -0.7,0.5 -0,0 -0,0 -0.7,0.5 -0,0 -0,0 -0.7,0.5 -0,0 -0,0 -0.7,0.5 -0,0 -0,0 -0.1,0.1 1.7,2.2 0.1,-0.1 0,-0 0.7,-0.5 0,-0 0.7,-0.5 0,-0 0.7,-0.5 0,-0 0.7,-0.5 0,-0 0.7,-0.4 0,-0 0.7,-0.4 0,-0 0.7,-0.4 0,-0 0.7,-0.4 0,-0 0,0 0.8,-0.4 0,-0 0.8,-0.3 0,-0 0.8,-0.3 0,-0 0.3,-0.1 -1,-2.6 z m 36.9,7.3 0.6,0.5 0,0 0.6,0.5 0,0 0.6,0.5 0,0 0.6,0.5 0,0 0.6,0.6 0,0 0,0 0.6,0.6 0,0 0.6,0.6 0,0 0.5,0.6 0,0 0.5,0.6 0,0 0.5,0.6 0,0 0.5,0.6 0,0 0.4,0.5 2.3,-1.7 -0.4,-0.6 -0,-0 0,-0 -0.6,-0.7 -0,-0 0,-0 -0.6,-0.7 -0,-0 -0,-0 -0.6,-0.7 -0,-0 -0,-0 -0.6,-0.7 -0,-0 -0,-0 -0.6,-0.6 -0,-0 -0,-0 -0.6,-0.6 -0,-0 -0,-0 -0.6,-0.6 -0,-0 -0,0 -0.7,-0.6 -0,-0 -0,0 -0.7,-0.6 -0,-0 -0,-0 -0.7,-0.6 -0,-0 -0,-0 -0.6,-0.5 z m -51,2.7 -0,0 -0,0 -0.6,0.7 -0,0 -0,0 -0.6,0.7 0,0 -0,0 -0.6,0.7 0,0 -0,0 -0.5,0.7 -0,0 -0,0 -0.5,0.7 -0,0 -0,0 -0.5,0.7 -0,0 0,0 -0.5,0.7 -0,0 0,0 -0.5,0.8 0,0 -0,0 -0.4,0.8 -0,0 0,0 -0.4,0.8 0,0 -0,0 -0.3,0.6 2.5,1.3 0.3,-0.6 0,-0 0.4,-0.7 0,-0 0.4,-0.7 0,-0 0.4,-0.7 0,-0 0.4,-0.7 0,-0 0.5,-0.7 0,-0 0.5,-0.7 0,-0 0.5,-0.7 0,-0 0.5,-0.6 0,-0 0.5,-0.6 0,-0 0.5,-0.6 0,-0 0.5,-0.5 -2.1,-1.9 z m 60.9,9.4 0.1,0.1 0,0 0,0 0.3,0.7 0,0 0.3,0.7 0,0 0.3,0.8 0,0 0.3,0.8 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0.2,0.8 0,0 0.2,0.8 0,0 0.2,0.8 0,0 0.2,0.8 0,0 0.2,0.8 0,0 0,0.2 2.8,-0.5 -0,-0.3 -0,-0 0,-0 -0.2,-0.9 0,-0 0,-0 -0.2,-0.9 0,-0 -0,-0 -0.2,-0.9 0,-0 -0,-0 -0.2,-0.9 0,-0 -0,-0 -0.3,-0.8 -0,-0 0,-0 -0.3,-0.8 0,-0 -0,-0 -0.3,-0.8 0,-0 -0,-0 -0.3,-0.8 -0,-0 0,-0 -0.3,-0.8 0,-0 -0,-0 -0.3,-0.8 -0,-0 -0,-0 -0.4,-0.8 -0,-0 0,-0 -0.1,-0.2 z m -68.8,4.9 -0,0 0,0 -0.2,0.9 -0,0 0,0 -0.2,0.9 -0,0 0,0 -0.2,0.9 0,0 0,0 -0.2,0.9 0,0 -0,0 -0.1,0.9 0,0 0,0 -0.1,0.9 -0,0 0,0 -0.1,0.9 0,0 -0,0 -0.1,0.9 0,0 0,0 -0.1,0.9 0,0 0,0 -0,0.9 0,0 0,0 -0,0.9 0,0 0,0 0,0 1.4,-0 0.3,0 1.1,0 0,-0 0,-0.9 0,-0 0,-0.9 -0,0 0.1,-0.8 0,-0 0.1,-0.9 -0,0 0.1,-0.9 0.1,-0.9 -0,0 0.1,-0.8 0,-0 0.2,-0.8 0,-0 0.2,-0.8 0,-0 0.2,-0.8 0,-0 0.2,-0.8 0,-0 0.1,-0.2 -2.7,-0.8 z m 73,10.3 -0.6,0 0,0 0,0 -0,0.9 0,0 -0,0.9 0,0 -0.1,0.8 0,0 -0.1,0.9 0,0 -0.1,0.9 -0.1,0.9 0,0 -0.1,0.8 0,0 -0.2,0.8 -0,0 -0.2,0.8 -0,0 -0.2,0.8 0,0 -0.2,0.8 -0,0 -0.1,0.2 2.7,0.8 0.1,-0.2 0,-0 0,-0 0.2,-0.9 0,-0 0,-0 0.2,-0.9 0,-0 0,-0 0.2,-0.9 0,-0 0,-0 0.2,-0.9 0,-0 0,-0 0.1,-0.9 0,-0 0,-0 0.1,-0.9 0,-0 0,-0 0.1,-0.9 0,-0 0,-0 0.1,-0.9 0,-0 0,-0 0.1,-0.9 0,-0 0,-0 0,-0.9 0,-0 0,-0 0,-0.9 -1.4,-0 1.4,-0 0,-0 z m -73.9,6.4 0,0.3 0,0 0,0 0.2,0.9 0,0 0,0 0.2,0.9 0,0 0,0 0.2,0.9 0,0 0,0 0.2,0.9 0,0 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0,0 0.4,0.8 0,0 0,0 0.1,0.2 2.5,-1.3 -0.1,-0.1 -0,-0 -0.3,-0.7 -0,-0 -0.3,-0.7 -0,-0 -0.3,-0.8 -0,-0 -0.3,-0.8 -0,-0 -0.3,-0.8 -0,-0 0,-0 -0.3,-0.8 -0,-0 -0.2,-0.8 -0,-0 -0.2,-0.8 0,-0 -0.2,-0.8 -0,-0 -0.2,-0.8 -0,-0 -0.2,-0.8 0,-0 -0,-0.2 z m 69.4,9.4 -0,0 -0.4,0.7 -0,0 -0.4,0.7 -0,0 -0.4,0.7 -0,0 -0.4,0.7 -0,0 -0.5,0.7 -0,0 -0.5,0.7 -0,0 -0.5,0.7 -0,0 -0.5,0.6 -0,0 -0.5,0.6 -0,0 -0.5,0.6 -0,0 -0.5,0.6 2.1,1.9 0.5,-0.6 0,-0 0,-0 0.6,-0.7 0,-0 0,-0 0.6,-0.7 0,-0 0,-0 0.6,-0.7 0,-0 0,-0 0.5,-0.7 0,-0 0,-0 0.5,-0.7 0,-0 0,-0 0.5,-0.7 0,-0 0,-0 0.5,-0.7 0,-0 0,-0 0.5,-0.8 0,-0 0,-0 0.4,-0.8 0,-0 0,-0 0.4,-0.8 0,-0 0,-0 0.3,-0.6 -2.5,-1.3 z m -62.8,6.1 0.4,0.6 0,0 0,0 0.6,0.7 0,0 0,0 0.6,0.7 0,0 0,0 0.6,0.7 0,0 0,0 0.6,0.7 0,0 0,0 0.6,0.6 0,0 0,0 0.6,0.6 0,0 0,0 0.6,0.6 0,0 0,0 0.7,0.6 0,0 0,0 0.7,0.6 0,0 0,0 0.7,0.6 0,0 0,0 0.6,0.5 1.7,-2.2 -0.6,-0.5 -0,-0 -0.6,-0.5 -0,-0 -0.6,-0.5 -0,-0 -0.6,-0.5 -0,-0 -0.6,-0.6 -0,-0 -0,-0 -0.6,-0.6 -0,-0 -0.6,-0.6 -0,-0 -0.5,-0.6 -0,-0 -0.5,-0.6 -0,-0 -0.5,-0.6 -0,-0 -0.5,-0.6 -0,-0 -0.4,-0.5 z m 53.1,5.4 -0,0 -0.7,0.5 -0,0 -0.7,0.5 -0,0 -0.7,0.5 -0,0 -0.7,0.5 -0,0 -0.7,0.4 -0,0 -0.7,0.4 -0,0 -0.7,0.4 -0,0 -0.7,0.4 -0,0 -0,0 -0.8,0.4 -0,0 -0.8,0.3 -0,0 -0.8,0.3 -0,0 -0.3,0.1 1,2.6 0.4,-0.1 0,-0 0,0 0.8,-0.4 0,0 0,-0 0.8,-0.4 0,-0 0,0 0.8,-0.4 0,0 0,-0 0.8,-0.4 0,0 0,-0 0.8,-0.4 0,-0 0,0 0.8,-0.5 0,0 0,-0 0.8,-0.5 0,-0 0,0 0.7,-0.5 0,0 0,-0 0.7,-0.5 0,-0 0,0 0.7,-0.5 0,-0 0,-0 0.7,-0.5 0,-0 0,-0 0.1,-0.1 -1.7,-2.2 z m -40.4,5.6 0.1,0.1 0,0 0,0 0.8,0.4 0,0 0,0 0.8,0.4 0,0 0,0 0.8,0.4 0,0 0,0 0.8,0.4 0,0 0,0 0.8,0.3 0,0 0,0 0.8,0.3 0,0 0,0 0.8,0.3 0,0 0,0 0.9,0.3 0,0 0,0 0.9,0.3 0,0 0,0 0.9,0.2 0,0 0,0 0.9,0.2 0,0 0,0 0.2,0.1 0.6,-2.7 -0.2,-0 -0,-0 -0.8,-0.2 -0,-0 -0.8,-0.2 -0,-0 -0.8,-0.2 -0,-0 -0.8,-0.3 -0,-0 -0,0 -0.8,-0.3 0,-0 -0.8,-0.3 -0,-0 -0.8,-0.3 -0,-0 -0.8,-0.3 -0,-0 -0.8,-0.3 -0,-0 -0.8,-0.4 -0,0 -0,-0 -0.7,-0.4 -0,-0 -0.1,-0 z m 25.6,1.1 -0,0 -0.8,0.1 -0,0 -0.8,0.1 -0,0 -0.8,0.1 0,-0 -0.9,0.1 0,-0 -0.9,0.1 -0,0 -0.9,0.1 -0,0 -0.9,0 -0,0 -0.9,0 -0,0 -0,0 -0.9,-0 -0,0 -0.9,-0 -0,0 -0.1,0 -0.2,2.8 0.1,0 0,0 0,0 0.9,0 0,0 0,0 1,0 0,0 0,0 1,-0 0,0 0,0 0.9,-0 0,0 0,0 0.9,-0.1 0,0 0,0 0.9,-0.1 0,-0 0,0 0.9,-0.1 0,0 0,0 0.9,-0.1 0,-0 0,0 0.9,-0.1 0,0 0,0 0.9,-0.2 0,0 0,0 0.7,-0.1 -0.6,-2.7 z m -7.2,-58.9 -0,1.2 0.1,0 0,0 1.3,0 0,-0 1.3,0.1 1.1,0.1 0.1,0 0,0 1.1,0.2 0.1,0 0.7,0.1 0.7,-3.1 -0.7,-0.2 -0,0 -0,-0 -1.3,-0.2 -0,0 -0,-0 -1.3,-0.2 -0,0 -0,0 -1.3,-0.1 -0,0 -0.1,0 -1.3,-0 -0,0 -0,0 -0,0 z m -5.5,-1.4 -0,0 -0,0 -1.3,0.3 -0,0 -0,0 -1.2,0.3 -0,0 -0,0 -1.2,0.4 -0,0 -0,0 -0.9,0.3 1.1,3 0.8,-0.3 0.1,-0 0,0 1.1,-0.4 0,-0 1.1,-0.3 1.2,-0.3 0.1,-0 1.1,-0.2 -0.6,-3.1 z m 14.8,4.4 0.2,0.1 0.1,0 1.1,0.5 1,0.5 0.1,0 1,0.5 0,0 0,0 0.9,0.6 0.1,0 0.5,0.4 1.8,-2.6 -0.6,-0.4 -0,-0 -0,-0 -1.1,-0.7 -0,-0 -0,-0 -1.1,-0.6 -0,-0 -0,-0 -1.1,-0.6 -0,-0 -0,-0 -1.1,-0.5 -0,-0 -0,-0 -0.3,-0.1 z m -23.6,-1.1 -0,0 -0,0 -1.1,0.7 -0,0 -0,0 -1,0.7 -0,0 -0,0 -1,0.8 -0,0 -0,0 -0.9,0.8 -0,0 -0,0 -0.8,0.7 2.2,2.4 0.7,-0.7 0.1,-0.1 0.8,-0.7 0,-0 0,-0 0.9,-0.7 0.1,-0 0.9,-0.6 0.1,-0 0.9,-0.6 0,-0 0,-0 -0.4,-0.6 -1.2,-2.2 z m 31.5,6.2 0.1,0.1 0,0 0,0 0.8,0.8 0.1,0.1 0.7,0.8 0.1,0.1 0.7,0.8 0,0 0,0.1 0.6,0.9 0,0.1 0,0 0.5,0.7 2.7,-1.8 -0.5,-0.8 -0,-0 -0,-0 -0.7,-1 -0,-0 -0,-0 -0.8,-0.9 -0,-0 -0,-0 -0.8,-0.9 -0,-0 -0,-0 -0.9,-0.9 -0,-0 -0,-0 -0.1,-0.1 z m -40.1,1.8 -0,0 -0,0 -0.7,1 -0,0 -0,0 -0.6,1.1 -0,0 -0,0 -0.6,1.1 -0,0 -0,0 -0.5,1.1 -0,0 -0,0 -0,0.1 2.4,1 0.5,0.3 0,-0 0.5,-1 0,-0.1 0,-0 0.5,-0.9 0,-0.1 0.6,-0.9 0.6,-1 0,-0 0,-0.1 0.6,-0.8 -2.6,-1.9 z m 45.4,5.9 0.4,1.1 0,0.1 0.3,1 0,0.1 0.3,1.1 0.3,1.1 0.2,1 3.1,-0.6 -0.2,-1.1 0,-0 -0,-0 -0.3,-1.2 -0,-0 -0,-0.1 -0.3,-1.2 -0,-0 -0,-0 -0.4,-1.2 -0,-0 -0,-0 -0.5,-1.1 z m -49.6,3.8 -0,0 0,0 -0.2,1.3 0,0 -0,0 -0.2,1.3 -0,0 0,0 -0.1,1.3 0,0 0,0.1 -0,1.3 0,0 0,0 0,0 1.9,-0 1.3,0 0,-0.1 0,-0 0,-1.2 0.1,-1.1 0,0 0.1,-1.2 0,-0.1 0,-0 0.2,-1.1 0.2,-0.9 -3.1,-0.7 z m 52.8,5.5 -1.2,-0 0,0.1 0,0 -0,1.2 -0.1,1.1 -0,0 -0.1,1.2 0,0 -0,0.1 -0.2,1.1 -0.2,0.9 3.1,0.8 0.2,-0.9 0,-0 0,-0 0.2,-1.3 0,-0 0,-0 0.2,-1.3 0,-0 0,-0 0.1,-1.3 0,-0 0,-0.1 0,-1.3 -1.6,-0 1.6,-0 0,-0 z m -53,4.3 0.2,1.1 0,0 0,0 0.3,1.2 0,0 0,0.1 0.3,1.2 0,0 0,0 0.4,1.2 0,0 0,0 0.5,1.1 3,-1.2 -0.4,-1 -0,-0.1 -0.3,-1 -0,-0.1 -0.3,-1.1 -0.3,-1.1 -0.2,-1 z m 49.9,4.9 -0.5,1 -0,0.1 -0,0 -0.5,1 -0,0.1 -0.6,0.9 -0.6,1 -0,0 -0,0.1 -0.6,0.8 2.6,1.9 0.6,-0.9 0,-0 0,-0 0.7,-1 0,-0 0,-0 0.6,-1.1 0,-0 0,-0 0.6,-1.1 0,-0 0,-0 0.5,-1.1 0,-0 0,-0 0,-0 -2.2,-0.9 -0.8,-0.3 z m -46,5 0.5,0.8 0,0 0,0 0.7,1 0,0 0,0 0.8,0.9 0,0 0,0 0.8,0.9 0,0 0,0 0.9,0.9 0,0 0,0 0.1,0.1 2.2,-2.3 -0.1,-0.1 -0,-0 -0,-0 -0.8,-0.8 -0.1,-0.1 -0.7,-0.8 -0.1,-0.1 -0.7,-0.8 -0,-0 -0,-0.1 -0.6,-0.9 -0.1,-0.1 -0.5,-0.7 z m 40,3.3 -0.1,0.1 -0.8,0.7 -0,0 -0,0 -0.9,0.7 -0.1,0 -0.9,0.6 -0.1,0 -0.9,0.6 0,-0 -0.1,0 0,0 -0,0 0.3,0.4 1.3,2.4 0,-0 0,-0 0,-0 1.1,-0.7 0,-0 0,-0 1,-0.7 0,-0 0,-0 1,-0.8 0,-0 0,-0 0.9,-0.8 0,-0 0,-0 0.8,-0.7 -2.2,-2.4 z m -32.6,4.4 0.6,0.4 0,0 0,0 1.1,0.7 0,0 0,0 1.1,0.6 0,0 0,0 1.1,0.6 0,0 0,0 1.1,0.5 0,0 0,0 0.3,0.1 1.1,-3 -0.2,-0.1 -0.1,-0 -1.1,-0.5 -1,-0.5 -0.1,-0 -1,-0.6 0,0 -0.9,-0.6 -0.1,-0 -0.5,-0.4 z m 24.5,0.3 -0.1,0 -1.1,0.3 -0.1,0 -1.1,0.3 -1.2,0.3 -0.1,0 -1.1,0.2 0.6,3.1 1.2,-0.2 0,0 0,-0 1.3,-0.3 0,0 0,-0 1.2,-0.3 0,-0 0,-0 1.2,-0.4 0,-0 0,-0 0.9,-0.3 -1.1,-3 z m -14.8,3.9 0.7,0.2 0,0 0,0 1.3,0.2 0,0 0,0 1.3,0.2 0,0 0,0 1.3,0.1 0,0 0.1,0 1.3,0 0,0 0,0 0,0 -0.1,-1.6 0,-0.1 0,-1.5 -0.1,0 -1.3,-0 0,0 -1.3,-0.1 -1.1,-0.1 -0.1,-0 -0,0 -1.1,-0.2 -0.1,-0 -0.7,-0.1 z m 6.3,-43.1 -0.4,0 0.1,4 0.3,-0 0.1,0 0.1,0 0.6,0 0.1,0 0.6,0 0.1,0 0.6,0.1 0.1,0 0.6,0.1 0.7,0.1 0.1,0 0.1,0 0.6,0.2 0.5,0.2 0.1,0 0.5,0.2 0.1,0 0,0 0.5,0.2 0.1,0 0.4,0.2 1.8,-3.6 -0.5,-0.3 -0,-0 -0.1,-0 -0.7,-0.3 -0.1,-0 -0.1,-0 -0.7,-0.3 -0,-0 -0.1,-0 -0.7,-0.2 -0.1,-0 -0,-0 -0.7,-0.2 -0.1,-0 -0.1,-0 -0.7,-0.2 -0.1,-0 -0.1,-0 -0.8,-0.1 -0,-0 -0.1,-0 -0.8,-0.1 -0.1,-0 -0.1,0 -0.8,-0.1 -0.1,0 -0.1,0 -0.8,-0 -0.1,-0 z m -5.1,0.7 -0.1,0 -0,0 -0.7,0.2 -0.1,0 -0.1,0 -0.7,0.3 -0,0 -0.1,0 -0.7,0.3 -0.1,0 -0,0 -0.7,0.3 -0,0 -0,0 -0.7,0.4 -0,0 -0.1,0 -0.6,0.4 -0,0 -0,0 -0.6,0.4 -0,0 -0,0 -0.6,0.4 -0,0 -0,0 -0.6,0.5 -0,0 -0,0 -0.5,0.5 -0,0 -0,0 -0.2,0.2 2.9,2.8 0.1,-0.1 0.1,-0.1 0.4,-0.4 0.1,-0.1 0.4,-0.3 0,-0 0.1,-0.1 0.4,-0.3 0.5,-0.4 0.1,-0.1 0.6,-0.3 0,-0 0.5,-0.3 0.1,-0 0.5,-0.3 0.1,-0 0.5,-0.2 0,0 0.1,-0 0.6,-0.2 0,-0 0.5,-0.2 0.1,-0 0.1,-0 -1.1,-3.9 z m 14.2,6.7 0.4,0.3 0.5,0.5 0.1,0.1 0.3,0.4 0.1,0.1 0.3,0.4 0.1,0.1 0.3,0.4 0,0 0,0.1 0.3,0.4 0.1,0.1 0.3,0.5 0,0 0,0.1 0.3,0.5 0,0.1 0.2,0.5 0,0.1 0.2,0.5 0,0.1 0,0 0.2,0.6 3.8,-1.3 -0.2,-0.7 -0,-0.1 -0,-0.1 -0.3,-0.7 -0,-0.1 -0,-0 -0.3,-0.7 -0,-0.1 -0,-0 -0.3,-0.7 -0,-0.1 -0,-0 -0.4,-0.6 -0,-0 -0,-0.1 -0.4,-0.6 -0,-0 -0,-0.1 -0.4,-0.6 -0,-0.1 -0,-0 -0.5,-0.6 -0,-0 -0,-0 -0.5,-0.5 -0,-0 -0,-0 -0.5,-0.5 -0,-0 -0,-0 -0.5,-0.4 z m -24.4,1.4 -0,0 -0,0.1 -0.3,0.7 -0,0 -0,0.1 -0.3,0.7 -0,0 -0,0.1 -0.3,0.7 -0,0.1 -0,0.1 -0.2,0.7 -0,0.1 -0,0.1 -0.2,0.7 -0,0.1 0,0.1 -0.2,0.7 -0,0.1 -0,0.1 -0.1,0.7 -0,0.1 0,0.1 -0.1,0.8 0,0.1 -0,0.1 -0.1,0.8 0,0.1 0,0.1 -0,0.8 0,0.1 0,0.1 0,0.3 4,-0.1 -0,-0.2 0,-0.1 0,-0 0,-0.7 0,-0.6 0,-0.1 0,-0 0.1,-0.5 0.1,-0.6 0,-0.1 0.1,-0.5 0,-0 0,-0.1 0.1,-0.5 0.2,-0.6 0,-0.1 0,-0 0.2,-0.5 0.3,-0.6 0.1,-0.1 0.3,-0.5 0,-0.1 0,-0 0,-0 -3.5,-2 z m 28.7,7.6 0,0.5 0,0.1 0,0 -0,0.6 -0.1,0.7 -0,0.1 0,0.1 -0.1,0.6 -0.1,0.5 -0,0.1 -0.1,0.5 0,0 -0,0.1 -0.1,0.5 -0,0.1 -0.2,0.5 -0,0 -0,0.1 -0.2,0.5 -0,0 -0,0.1 -0.2,0.5 -0,0.1 -0.3,0.5 -0,0.1 -0,0 -0.2,0.3 3.5,2 0.2,-0.4 0,-0.1 0,-0 0.3,-0.7 0,-0 0,-0.1 0.3,-0.7 0,-0 0,-0.1 0.3,-0.7 0,-0.1 0,-0.1 0.2,-0.7 0,-0 0,-0.1 0.2,-0.7 0,-0.1 0,-0.1 0.2,-0.7 0,-0.1 0,-0.1 0.1,-0.7 0,-0.1 0,-0.1 0.1,-0.8 0,-0.1 0,-0.1 0.1,-0.8 0,-0.1 0,-0.1 0,-0.8 -2,-0.1 2,-0.1 -0,-0.6 z m -30.1,5.3 0.1,0.3 0,0.1 0,0 0.2,0.7 0,0.1 0,0.1 0.3,0.7 0,0.1 0,0 0.3,0.7 0,0.1 0,0 0.3,0.7 0,0 0,0.1 0.4,0.6 0,0 0,0.1 0.4,0.6 0,0 0,0 0.4,0.6 0,0 0,0 0.5,0.6 0,0 0,0 0.5,0.5 0,0 0,0 0.5,0.5 0,0 0,0 0.2,0.2 2.7,-2.9 -0.2,-0.1 -0.1,-0.1 -0,-0 -0.4,-0.4 -0.1,-0.1 -0.4,-0.4 -0,-0.1 -0,-0 -0.3,-0.4 -0.1,-0.1 -0.4,-0.5 -0.3,-0.4 -0.1,-0.1 -0.3,-0.5 -0,-0 -0,-0.1 -0.3,-0.5 -0.1,-0.1 -0.2,-0.5 -0,-0.1 -0,-0 -0.2,-0.5 -0,-0.1 -0,-0.1 -0.2,-0.6 -0,-0.1 z m 25.8,4.8 -0.1,0.1 -0.4,0.3 -0,0 -0.1,0.1 -0.4,0.3 -0.1,0.1 -0.5,0.3 -0,0 -0.1,0 -0.5,0.3 -0.1,0 -0,0 -0.6,0.3 -0.5,0.3 -0.1,0 -0.5,0.2 -0,0 -0.1,0 -0.5,0.2 -0.1,0 -0.5,0.2 -0.5,0.1 1.1,3.9 0.5,-0.1 0,-0 0.1,-0 0.7,-0.2 0.1,-0 0,-0 0.7,-0.3 0.1,-0 0.1,-0 0.7,-0.3 0.1,-0 0,-0 0.7,-0.3 0.1,-0 0,-0 0.7,-0.4 0,-0 0,-0 0.6,-0.4 0,-0 0.1,-0 0.6,-0.4 0,-0 0,-0 0.6,-0.5 0,-0 0,-0 0.6,-0.5 0,-0 0,-0 0.5,-0.5 -2.7,-2.9 z m -15.5,1.8 -1.9,3.5 0.1,0.1 0,0 0,0 0.7,0.3 0,0 0.1,0 0.7,0.3 0.1,0 0,0 0.7,0.3 0.1,0 0.1,0 0.7,0.2 0,0 0.1,0 0.7,0.2 0,0 0.1,0 0.8,0.2 0.1,0 0.1,0 0.8,0.1 0.1,0 0.1,0 0.8,0.1 0.1,0 0.1,0 0.8,0.1 0.1,0 0.1,0 0.8,0 0.1,0 0.1,0 0.1,0 -0.1,-4 -0.1,0 -0.1,0 -0.6,-0 -0.1,0 -0.6,-0 0,-0 -0.7,-0.1 -0,0 -0.1,-0 -0.6,-0.1 -0.1,-0 -0.6,-0.1 0,-0 -0.7,-0.2 -0.5,-0.2 0,-0 -0.6,-0.2 -0.1,-0 -0,0 -0.5,-0.2 -0.1,-0 -0.5,-0.3 -0.1,-0.1 z M 100,93.2 c -3.5,-4e-4 -6.7,2.9 -6.7,6.5 l 0,0.4 c 0,3.5 3,6.5 6.5,6.5 l 0.4,0 c 3.4,0 6.5,-3 6.5,-6.3 l 0,-0.9 c 0,-3.4 -3.3,-6.3 -6.8,-6.3 z"
    }
  ];
  icn["AC.IC.AVALANCHE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 115.7,87.3 -3.6,0.9 11,38 -4.6,1.5 9.6,9.2 3.1,-13 -4.6,1.4 z m 3,46.4 -8.5,-10 4.3,-1.2 -11.2,-40.6 -34.5,51.9 z m -12.1,-59.8 0,8.4 1.6,0 0,-8.3 7.1,4.3 0.8,-1.3 -7.4,-4.1 7.5,-4.4 -1,-1.2 -7,4 0,-8.2 -1.6,0 0,8.2 -7.4,-4 -0.6,1.1 7.2,4.4 -7.2,4.1 0.6,1.4 z"
    }
  ];
  icn["AC.IC.EARTHQUAKE EPICENTER"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 62.8,99.8 c 0,-10.8 4.9,-20.2 10.3,-25.7 5.1,-5.1 14.8,-11.3 24.7,-11.3 h 4.1 c 4.9,0 10.5,1.9 13.9,3.6 5,2.5 6.4,4 10.4,7 4.6,3.6 11.1,15.4 11.1,23.8 v 5.3 c 0,17.4 -17.5,34.6 -35.1,34.6 h -4.6 c -10.3,0 -19.4,-6.2 -24.6,-11.4 -5.5,-5.4 -10.3,-15 -10.3,-25.8 z m 39.4,38.5 c 10.7,0 20,-6.3 25.5,-11.8 6.7,-6.7 9.9,-13.9 10.7,-26.5 1.3,-19.2 -17.7,-38.1 -36.2,-38.1 h -4.8 c -10.3,0 -20.1,6.6 -25.2,12.1 -3,3.2 -5.6,6.7 -7.5,11.1 -1.1,2.8 -3.5,11.3 -3,15.3 0.7,6.4 0.9,10.4 3.4,15.3 2.2,4.4 4,7.6 7.3,11 5,5.3 15.2,11.7 25.3,11.7 h 4.6 z m -3.9,-11.6 c -13.6,0 -24.7,-13.1 -25.2,-26.8 -0.5,-13.2 12.5,-26.4 25.4,-26.4 h 2.9 c 12.8,0 25.2,12.4 25.2,25.2 v 2.4 c 0,12.8 -12.4,25.7 -25.2,25.7 h -3.1 v -0 z m -27.1,-26.9 c 0,8.8 3.7,16 8.1,20.5 2.3,2.4 5.2,4.4 8.3,5.9 4.2,2.2 6.3,1.9 11.5,2.8 2.9,0.5 10,-1.3 12,-2.2 4.6,-2.2 5,-2.9 8.6,-5.6 4.3,-3.1 9.1,-12.3 9.1,-19.7 v -3.4 c 0,-13.7 -13.6,-26.8 -27.3,-26.8 h -3.2 c -14.5,-4e-4 -27.1,13.6 -27.1,28.5 z m 28.5,14.8 c -8.4,0 -13.5,-6.5 -14.4,-14.4 -0.7,-7.3 6.8,-14.6 13.9,-14.6 h 1.7 c 7.3,0 13.6,6.9 13.6,14.5 0,7.7 -6.2,14.5 -13.8,14.5 h -1 z m -18.6,-14.8 c 0,11.5 8,18.1 18.4,19.3 6.2,0.8 10.3,-2.9 13.6,-5.3 2.8,-2 5.8,-8.3 5.8,-13.3 V 99.8 c 0,-10.4 -8.3,-18.6 -18.6,-18.6 h -0.7 c -9.9,0 -18.4,8.6 -18.4,18.6 z m 10.9,0 v 0.2 c 0,3.7 3.5,7.7 7,7.7 h 1.7 c 3.9,0 7.3,-3.9 7.3,-7.7 0,-4 -3.5,-8 -7,-8 h -1.7 c -3.5,0 -7.3,4 -7.3,7.7 z"
    }
  ];
  icn["AC.IC.LANDSLIDE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 129.4,110.8 c -2.7,0 -6.2,4.1 -4.3,5.1 -1,1.5 -3.6,2 -3.6,4 0,1.8 2.6,4.7 3.4,6.2 1.1,2 3.2,3.2 6.2,3.2 h 1.8 c 2.7,0 4.6,-2.6 4.6,-5.3 v -1 c 0,-3.4 -1,-5 -2.1,-7.5 -1,-2.4 -1.6,-4.6 -4.9,-4.6 h -1 z m -22.2,-35 -5.3,-5.2 -39.3,58.3 55.8,0.1 v -1.2 c 0,-0.7 -1,-1.5 -1.5,-1.8 0,-2 -0.6,-1.6 -0.9,-2.9 -0.2,-0.9 -0.1,-2.7 -0.1,-3.7 0,-2.8 -0.1,-4.3 -1.7,-5.6 -2.2,-1.9 -1.3,-1.5 -4.3,-3.1 -2,-1 -1.5,-2.1 -5.2,-2.2 v -1.5 c 0,-1.9 -2,-3.6 -2.8,-4.8 0,-2.3 -0.5,-4.7 -0.5,-6.8 0,-1.6 -0.2,-2 -0.2,-3.3 -0.1,-1.7 -0.8,-1.5 -0.8,-2.8 v -0.2 c 0,-3 0.5,-4.5 2.1,-6 2.2,-2.1 0.9,-2.2 3.8,-3.9 l 0.8,-3.3 0,0 z m 9.7,34 c 0,3.6 6.1,2.8 6.1,-0.8 0,-4.2 -6.1,-1.9 -6.1,0.8 z m 2.8,-16.4 c -2.2,0 -7,6.4 -4,8.6 1.7,1.2 2.6,1.6 5.3,0.6 2,-0.8 2.8,-1.6 2.8,-4.3 4e-4,-2.4 -2,-4.8 -4,-4.8 z m -8.4,5.3 c 0.8,0 1,-0.7 1.3,-1.3 -0.6,-1.4 -0.5,-2.5 -2.6,-2.5 h -0.2 c -1,0 -2,0.6 -2,1.5 0,0.7 1.6,2.3 2.8,2.3 h 0.8 z m -3.3,-13.7 c -0.1,1 -0.3,0.6 -0.3,1.5 0,1 0.8,3 1.8,3 h 0.2 c 3.1,0 3.1,-0.2 4.8,-1.5 -1,-2.3 -0.4,-3.6 -4.2,-3.6 -1.1,0 -1.4,0.3 -2.3,0.5 z"
    }
  ];
  icn["AC.IC.SUBSIDENCE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 56.8,75.6 0,2 14.4,0 3.8,7.9 c -0.1,0.3 -0.3,0.7 -0.3,1.6 l 0,0.6 c 0,0.7 0.3,1.1 0.7,1.5 0.3,0.4 0.7,0.8 1.1,1.3 0.7,0.8 1.5,1.5 1.8,2 l -0.3,4.1 c -0.1,1 0.4,2 1,2.6 0.6,0.6 1.3,1.1 2,1.5 0.7,0.4 1.3,0.8 1.7,1.2 0.4,0.4 0.6,0.6 0.6,1 0,1.3 -0.5,2.2 -0.5,4.2 0,0.9 0.5,1.7 1.1,2.1 0.6,0.4 1.2,0.7 1.8,0.9 0.6,0.2 1.1,0.4 1.4,0.6 0.3,0.2 0.3,0.2 0.3,0.3 0,0.6 -0.1,0.8 -0.3,1.2 -0.2,0.3 -0.5,0.7 -0.5,1.5 l 0,0.6 c 0,1.8 1,2.9 1.9,3.5 0.8,0.6 1.3,0.8 1.5,1.3 0,0 0,0 0,0 0.2,0.8 0.3,2 0.7,3.1 0.2,0.6 0.5,1.2 1,1.6 0.5,0.5 1.2,0.7 2,0.7 l 0.3,0 c 1.1,0 1.9,-0 2.6,-0.2 0.7,-0.1 1.3,-0.4 1.7,-0.9 0.4,-0.5 0.5,-1.1 0.7,-1.7 0.1,-0.6 0.2,-1.3 0.3,-2.1 7.6e-4,-0 -7.6e-4,-0 0,-0 0.2,-1.4 0.7,-2.1 1.3,-2.8 0.5,-0.7 1.2,-1.7 1.2,-3.1 0,-0.6 -0.2,-1 -0.5,-1.3 -0.2,-0.3 -0.5,-0.7 -0.7,-1 -0.5,-0.7 -0.8,-1.5 -0.8,-2.4 l 0,-0.9 c 0,-0 -0,-0 0.1,-0.2 0.2,-0.2 0.5,-0.4 0.8,-0.6 0.4,-0.3 0.8,-0.5 1.1,-1 0.4,-0.4 0.7,-1.1 0.7,-1.8 0,-1.2 -0.5,-2.4 -0.9,-3.5 -0.4,-1.1 -0.8,-2.2 -0.8,-2.5 0,-0.5 0.2,-1 0.6,-1.6 0.4,-0.6 1,-1.3 1.5,-2.2 0.5,-0.8 0.9,-1.8 0.9,-3 -0,-1.1 -0.5,-2.4 -1.6,-3.6 l -0,-0 -0,0 c -0.3,-0.3 -0.7,-1.3 -0.8,-2.2 -0.1,-0.9 0.1,-1.9 0.4,-2.3 0.3,-0.5 0.9,-0.9 1.7,-1.4 0.7,-0.6 1.5,-1.6 1.5,-3 l 0,-1.4 38.1,0 0,-2 -40.1,0 -30.6,0 -0.6,0 -15,0 z"
    }
  ];
  icn["AC.IC.VOLCANIC ERUPTION"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 122.2,66 -10.4,17.9 1.7,1 10.4,-17.9 -1.7,-1 z m -23.2,0.5 0,17.9 2,0 0,-17.9 -2,0 z m -19.5,-0.4 -1.8,0.8 8,17.9 1.8,-0.8 -8,-17.9 z M 99.3,120.8 c -1.7,-0 -3.3,0.8 -4.5,2 -1.2,1.2 -2,2.9 -2,4.5 l 0,1.9 c 0,1.7 0.8,3.3 2,4.5 1.2,1.2 2.8,2 4.5,2 l 1.3,0 c 1.7,0 3.3,-0.8 4.5,-2 1.2,-1.2 2,-2.8 2,-4.5 l 0,-1.9 c 0,-1.7 -0.8,-3.3 -2,-4.5 -1.2,-1.2 -2.8,-2 -4.5,-2 l -1.2,0 -0,0 z M 80.3,86.5 c -0.5,0 -0.9,0.3 -1.4,0.8 -0.4,0.5 -0.8,1.2 -1.3,2 -0.8,1.7 -1.6,3.9 -2.4,6.3 -1.5,4.7 -2.8,9.8 -3.4,11.4 l -0,0 c -2,7 -5.8,15.2 -7,21.6 l -0.1,0.2 0.2,0 20.9,0.6 0.2,0 0,-0.2 0,-1.9 0,-0.2 -0.2,-0 -17.6,-0.7 L 80.5,89.4 l 39.1,0 11.9,37.1 -17.5,0.7 -0.2,0 0,0.2 0,1.9 0,0.2 0.2,-0 20.9,-0.6 0.2,0 -0.1,-0.2 c -1.3,-6.4 -5.1,-14.7 -7,-21.6 L 128.1,107 c -0.6,-1.6 -1.9,-6.7 -3.4,-11.4 -0.8,-2.3 -1.6,-4.6 -2.4,-6.3 -0.4,-0.8 -0.8,-1.5 -1.3,-2 -0.4,-0.5 -0.9,-0.8 -1.4,-0.8 l -39.4,0 z"
    }
  ];
  icn["AC.IC.VOLCANIC THREAT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 80.3,85.6 c -0.5,0 -0.9,0.3 -1.4,0.8 -0.4,0.5 -0.8,1.2 -1.3,2 -0.8,1.7 -1.6,3.9 -2.4,6.3 -1.5,4.7 -2.8,9.8 -3.4,11.3 l 0,0 -0,0 c -2,7 -5.8,15.2 -7,21.6 l -0.1,0.2 0.2,0 20.9,0.6 0.2,0 0,-0.2 0,-1.9 0,-0.2 -0.2,-0 -17.6,-0.7 12,-37.1 39.1,0 11.9,37.1 -17.5,0.7 -0.2,0 0,0.2 0,1.9 0,0.2 0.2,0 20.9,-0.6 0.2,-0 -0.1,-0.2 c -1.3,-6.4 -5.1,-14.7 -7,-21.6 l -0,0 0,-0 c -0.6,-1.6 -1.9,-6.7 -3.4,-11.3 -0.8,-2.3 -1.6,-4.6 -2.4,-6.3 -0.4,-0.8 -0.8,-1.5 -1.3,-2 -0.4,-0.5 -0.9,-0.8 -1.4,-0.8 l -39.4,0 z M 99.3,120 c -1.7,-0 -3.3,0.8 -4.5,2 -1.2,1.2 -2,2.9 -2,4.5 l 0,1.9 c 0,1.7 0.8,3.3 2,4.5 1.2,1.2 2.8,2 4.5,2 l 1.3,0 c 1.7,0 3.3,-0.8 4.5,-2 1.2,-1.2 2,-2.8 2,-4.5 l 0,-1.9 c 0,-1.7 -0.8,-3.3 -2,-4.5 -1.2,-1.2 -2.8,-2 -4.5,-2 l -1.2,0 -0,0 z m -2.7,-42.1 0,0.2 -0.2,0 0,4.2 0,0.2 0.2,0 3.3,0 0.2,0 0,-0.2 0,-4.2 0,-0.2 -0.2,0 -3.3,0 z M 99,57.1 c -1.1,2.5e-5 -2.3,0.2 -3.3,0.5 -1.1,0.3 -2.1,0.8 -3.2,1.4 l -0.1,0.1 0,0.1 0,3.1 0,0.4 0.3,-0.2 c 1.1,-0.7 2,-1.3 3,-1.6 1,-0.4 1.9,-0.6 2.7,-0.6 1.1,2.2e-5 2,0.3 2.7,0.8 0.7,0.6 1,1.3 1,2.2 -1e-5,0.5 -0.1,1 -0.4,1.5 -0.3,0.5 -0.7,1 -1.3,1.6 l 0,0 -1.5,1.5 c -1,0.9 -1.7,1.8 -2,2.5 -0.3,0.7 -0.5,1.7 -0.5,2.8 l 0,2.5 0,0.2 0.2,0 3.1,0 0,-0.2 0.2,0 0,-2 c -10e-6,-0.6 0,-1 0.1,-1.3 0,-0.3 0.1,-0.6 0.1,-0.8 0.1,-0.2 0.2,-0.5 0.4,-0.8 0.2,-0.3 0.6,-0.7 1.1,-1.2 l 1.4,-1.4 c 1,-0.9 1.7,-1.8 2.1,-2.6 l 0,-0 c 0.4,-0.8 0.6,-1.6 0.6,-2.5 -2e-5,-1.8 -0.6,-3.3 -1.9,-4.3 -1.3,-1.1 -2.9,-1.6 -5,-1.6 z"
    }
  ];
  icn["AC.IC.CAVE ENTRANCE"] = [
    { type: "path", fill: false, d: "m 55,100 55,0 30,-20 0,40 -30,-20" }
  ];
  icn["AC.IC.DROUGHT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 87.6,127.4 c 1.3,0.6 4.5,0 6.1,0 h 4.2 l -2,-5.9 -4.9,-0.3 c -5.7,10.8 -2.4,4.3 -3.4,6.2 z m -24.1,-7 c -0.6,1.9 17.6,6.9 20.5,7.4 2.7,-1.8 4.5,-2.4 4.8,-6.7 -4,0 -11.4,-0.8 -14.8,-1.7 -2.2,-0.6 -4.2,-1.2 -6.4,-1.7 -3.5,-0.9 -4.2,-1.5 -4.2,2.6 z m 35.9,6.1 6.7,-0.3 18.6,-1.7 c 1.5,-0.4 4.5,-0.4 6,-1.4 -1.3,-2.6 -2.4,-4.1 -3.7,-6.6 -1.4,-2.6 -1.9,-4.9 -3,-7.2 -3.7,0.8 -4.7,3.5 -6.3,4 -3.5,1.1 -4.8,0.4 -6.7,3.8 -1.7,3 -2.5,3.3 -5.3,5.2 -2.4,1.7 -3.6,2.8 -6.3,4.2 z m -2.8,-9 c 0,3.7 0.5,4.2 2.2,7.3 l 8.5,-7.1 -0.2,-0.2 c -1.7,-0.4 -2.4,-1.5 -4.8,-2.2 -1.6,-0.4 -4.1,-1.3 -5.8,-1.4 v 3.6 h 0.1 z m 37.6,0.5 c -0.9,0 -1,-0.2 -1.9,-0.2 l 1,2.4 2.7,-2.8 c -0.9,0.2 -0.8,0.5 -1.8,0.5 z m -51.3,-0.3 c -0.1,1.9 7.7,1.5 9.3,1.5 h 2.8 c 0,-1.7 -0.7,-2.8 -0.8,-4.4 -0.1,-2.5 -0.4,-1.8 -3.1,-2.1 -4,-0.4 -4.6,-2 -7.7,-2.8 l -0.6,7.7 z m -25.5,-12.6 3,12.1 c 0.7,-3 2.2,-4.5 2.8,-7.3 0.3,-1.8 0.1,-2.6 0.9,-4 0.4,-0.7 1.3,-2.8 1.5,-3.6 -1.4,-0.3 -6.9,-1.6 -8.6,-1.6 l 0.4,4.4 z m 69.9,-2.2 c -1,4.1 -0.7,3.5 1,7 1.2,2.4 2,4.4 3.1,6.6 5.8,-0.5 6.2,-0.5 9.4,-3.6 1.6,-1.6 1,-6.8 2,-8.3 -2.5,-1.2 -1.7,-0.6 -4.6,-1.3 -4.5,-1 -6.6,-0.4 -10.9,-0.3 z m -30.9,1.1 v 0.8 c 0,2.2 -0.1,3.3 0,5.4 0.1,3.3 -0.3,2.5 3.1,2.8 1.2,0.1 3.5,1 4.5,1.4 0.7,0.4 1.5,0.5 2,0.8 0.8,0.4 0.3,0.6 1.7,1.4 l -0.2,-0.2 5.6,-4.7 c 3.1,0 4.2,0.4 5.8,-1.3 2.4,-2.5 0.8,-1.4 4,-3.1 l 0.6,-3.1 c -2.5,0.6 -5.5,2.2 -8.2,1.1 -2.6,-1.1 -3.8,-2.8 -7.4,-2.8 l -1.6,-0.3 -9.9,1.8 z m -32.1,11.2 c 1.3,0 5.8,0.7 6.9,1 1.4,0.4 4.7,2.3 5.6,2.3 h 2.8 c 1,0 0.9,-0.3 1.7,-0.5 l 1.7,-8.3 -5.2,-4.5 -9,-2 c -0.4,1.7 -2.4,3 -3.1,5.1 -0.3,0.7 -1.5,6.3 -1.5,7 z m 41,-35.1 c 1,1.2 1.4,2.8 2.2,4.2 0.4,0.6 2.9,3.3 2.9,3.5 0,0.8 -0.9,2.3 -1.3,2.3 -2.7,0 -3.8,-6.7 -3.8,-10 z m -1.8,-1.2 c -0.3,1 -1.9,4.5 -2.5,5.6 -0.9,1.8 -1.9,3.5 -4.4,3.5 -0.5,0 -1,-0.4 -1,-0.8 0,-3.1 3.8,-5.8 5.2,-7.6 l 2.8,-0.8 z m 9.5,8.6 h -0.8 c -2.3,0 -6.9,-8 -6.9,-9.7 0,-0.1 0.3,-0.5 0.3,-0.5 1.7,0.5 7.9,6 7.9,8.7 -4e-4,0.5 -0.4,0.8 -0.5,1.5 z m 0.6,-6 c -0.7,-0.3 -1.7,-1 -2.4,-1.3 -1.4,-0.8 -3.5,-2.9 -4.7,-3.3 l 1.1,-1.3 c 3.1,1.5 10.1,1.3 10.1,5.7 0,0.3 -0.8,0.8 -1,1 -0.8,-0.3 -2,-0.4 -3.1,-0.8 z m -24.9,1.3 h -1 c 1,-2 -2.2,-6.7 -4.4,-7.2 -2.2,1.2 -4.2,0.6 -5.5,3.3 -0.4,1 -0.7,2.2 -1.5,2.8 -0.8,0.6 -2.4,0.8 -2.4,1.9 0,1.5 4.3,0.4 4.9,-0.2 1.2,-1.1 2.4,-2.1 4.5,-2.1 2,0 2.9,5.8 3.1,8.2 0.2,3.2 -2.3,7.7 -2.2,9.5 l 0.9,6.8 -4.4,-0.3 c 2.1,3.1 8.5,6 13.4,6.4 l -0.4,-7.7 -5.6,1.3 c 0,-4.4 -2,-5.5 -0.5,-9.5 0.6,-1.7 1,-2.2 1,-4.7 0,-1.1 0.2,-4.6 0.6,-5.3 1.5,-2.5 1.9,-5.6 3.1,-8.4 1.2,-2.8 5,-2.6 8.3,-3.5 l 1.2,1.3 -1,0.3 0.8,1.8 c -1.7,2 -2.9,2.9 -4.5,5 -0.8,1 -3.8,6.3 -0.6,6.3 h 1 c 3.9,0 5.1,-7.1 6.9,-9.2 0.4,4.4 1.2,9.5 4.4,11.2 1.7,-0.4 2.2,-1.1 2.6,-2.8 0.7,0.2 0.5,0.3 1,0.3 1.3,0 2,-1.1 2,-2.3 V 85.8 c 0,-2.1 -1.2,-2.4 -1.5,-3.8 0.8,0.4 2.2,1 3.3,1 h 0.5 c 1.2,0 1.3,-0.6 1.8,-1.3 -0.2,-2.5 -1.5,-3.9 -3.5,-4.6 -1.3,-0.4 -5.2,-1.7 -6.7,-1.7 l 0.5,-1 h -0.7 l 0.8,-1.6 -4.9,1 c -0.9,-0.6 -1.2,-1.5 -2.6,-1.5 h -1.8 C 92.3,72.2 88.7,75.8 88.7,82.9 l 0,0 z"
    }
  ];
  icn["AC.IC.FLOOD"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M77.2,92.9L77.3,92.8L99.3,72.5L99.7,72.1L100,72.1L100.4,72.5L122.4,92.8L123.5,93.9L122.4,93.9L122.4,115.902C123.023,115.106 123.657,114.5 124.4,114.5C125.454,114.199 124.857,116.712 125.5,117.6C125.988,118.273 126.805,118.721 127.609,118.928C130.146,119.58 132.747,117.303 134.5,116.2C135.043,115.859 136.356,115.26 136.4,115.9C136.652,119.558 136.526,123.235 136.4,126.9L63.7,126.9L63.7,114.9C64.819,117.943 66.835,120.948 70.637,119.05C72.357,118.192 73.209,115.745 75.1,115.4C75.464,115.334 76.266,116.335 77.1,117.278L77.1,93.9L76.2,93.9L77.1,93L77.1,92.9L77.2,92.9ZM121.2,117.544L121.2,94.1L78.3,94.1L78.3,118.49C78.521,118.667 78.727,118.795 78.911,118.845C83.407,120.084 82.345,116.009 86.9,115.5C87.588,115.423 90.549,119.114 91.583,119.536C95.694,121.215 95.826,116.694 98.9,115.9C100.074,115.597 100.538,118.237 100.9,118.5C101.86,119.198 103.028,119.651 104.2,119.837C109.33,120.655 108.685,117.216 111.9,114.9C112.848,114.217 113.556,116.602 113.563,116.613C115.1,119.229 115.092,120.273 118.659,119.606C119.666,119.418 120.465,118.529 121.2,117.544ZM99.75,73.846L99.8,73.8L99.7,73.8L99.75,73.846L79.3,92.7L120.2,92.7L99.75,73.846Z"
    }
  ];
  icn["AC.IC.INVERSION"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 69.5,87.9 C 69.5,86.7 73.6,83.9 75.5,83.9 h 0.3 c 3.3,0 9,9.1 15.2,9.1 h 1.8 c 5.4,0 11.3,-9.1 14.9,-9.1 3.5,0 8.8,9.1 15.2,9.1 h 0.9 c 8.5,0 10.5,-4.4 15.5,-7 l -5.3,-6.4 c -3.4,1.8 -4.1,4.6 -9.5,5.3 -2.2,0.3 -6.6,-3.9 -8.3,-5.5 -8,-6.8 -13,-3 -19.4,2 -3.9,3.1 -3.9,5.3 -8.5,1.3 -2.2,-1.8 -5.6,-4.8 -8.2,-6 -3.8,-1.8 -8.6,-0.7 -11.4,1.2 -1.6,1 -7.3,5.2 -7.3,6.9 v 52.2 h 8.2 V 87.9 z m -9.4,-16.4 79.9,0 0,-8.5 -79.9,0 z"
    }
  ];
  icn["AC.IC.TSUNAMI"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 63,122 39.5,-0.1 30.8,0.3 c -7.1,0 -12.8,-1.7 -16.9,-4.8 -3.7,-2.9 -7.7,-8 -7.7,-14.4 0,-9.1 6.9,-16.5 15.8,-16.5 h 0.7 c 6.5,0 8.2,2.8 11.8,5.3 -2,-8.6 -10.6,-14.2 -21.4,-14.2 h -0.2 c -18.2,0 -44.9,33 -52.4,44.3 l 0,0 0,0 z"
    }
  ];
  icn["AC.IC.BIRD"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 81.6,92.5 -18.4,2.9 v 0.3 l 6.6,0.5 c -0.7,0.5 -3.3,1.1 -4.5,1.5 -2.6,0.9 -2,0.3 -3.5,2.4 l 3.4,0.1 -1,1 c 1.8,0 3.3,0.1 4.8,0.2 1.4,0.1 1.9,-1.3 3.5,-1.4 3,-0.2 5.7,0.2 9.3,0.3 l -0.8,0.5 c 0.6,0.1 0.7,0.2 1.4,0.2 h 1.6 l 0.1,0.9 2.9,1.2 1.6,-0.1 c 1.6,1.1 1.9,2.3 5.2,2.4 0.2,2.7 0.6,3.8 3,4.4 v 0.8 c 0,2.2 0.2,4.8 2.1,5 l 1.2,5.3 h -0.4 v 0.4 c -0.3,-0.3 -1.4,-1.2 -1.8,-1.2 h -0.2 c -0.5,0 -0.5,0.1 -1,0.2 0.6,0.8 2.7,1.7 3.1,2.7 0.5,1.6 0.1,3.8 0.2,5.3 l 0.9,0.6 0.8,-0.1 0.1,-0.8 -0.1,-2.7 c 0.7,0.5 2.7,3 3.3,3 h 1 c -0.5,-2 -1.8,-2.4 -2.7,-3.9 l 3.7,1.1 c -1,-1.5 -0.9,-1.8 -2.9,-2.3 -3.1,-0.8 -1.8,-1.9 -3.1,-2.2 l -1,-5.4 c 1,-0.2 1.4,-1 1.4,-2.2 l 0.1,-1.6 -0.3,-2.6 h 1 c 0.7,0 0.7,-0.2 1.4,-0.4 0.1,1.6 1.2,3.3 2.7,3.4 l 3.1,6.3 c -0.3,0.3 -0.4,0.3 -0.4,0.8 v 0.7 l -4.4,-0.9 v 0.2 c 0.8,0.7 3.7,1.7 5.1,2.8 1.1,0.8 1.2,0.6 2,1.9 0.3,0.5 1.3,2.2 1.9,2.2 h 0.8 l 0.2,-0.1 -1.7,-3.2 4.3,1.9 c -0.1,-2.1 -2.1,-1.5 -3.6,-2.8 h 3 c -1.3,-1.1 -1.6,-0.9 -3.5,-1.2 -1.6,-0.2 -1.7,-1.2 -2.7,-2.1 -1.1,-1.2 -2,-4.9 -2.9,-6.6 1.2,-1.8 1,-1.4 1,-4.4 4.8,-2.3 5.6,-2.1 9.3,-5.9 2.7,-2.7 3.9,-6.1 5.8,-9.7 0.9,-1.8 1.5,-3.3 2.2,-5.2 0.7,-1.8 0.7,-4.7 1.4,-6.3 2.3,-4.6 9,-3.2 10.3,-5.2 l -4.4,0.2 v -0.2 l 5,-0.6 c -2.2,-1.9 -4.8,-1.4 -8.3,-1.8 -2.1,-0.3 -2.9,0.7 -4.4,-0.3 -1.4,-1 -1.6,-1.2 -3.7,-1.5 -3.1,-0.5 -5.6,1.2 -7.4,2.5 -1.7,1.3 -3.2,5.2 -4.2,6.1 -0.3,0.2 -6.1,2.7 -7.1,3.2 -2.9,1.5 -3.5,2.5 -7.3,3.1 -6.3,1 -9.9,3.4 -14.2,6.3 l 0,0 z"
    }
  ];
  icn["AC.IC.INSECT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 77.4,88.8 0.1,-0.3 6.1,4.9 -0.1,0.2 c -2.2,1.5 -7.7,9 -10,9 l -1.6,-0.1 5.6,-13.7 z m 7.1,3.3 c -0.4,-1.7 -5,-6.4 -6.7,-7.2 -0.4,0.3 -1.8,1 -1.8,1.6 0,0.8 0.3,1 0.5,1.5 l -5.6,14.7 h -1 c 0.2,0.9 0.5,0.7 0.5,1 0,0.3 -3,7.8 -3.3,8.7 -0.6,1.4 -1,2.7 -1.6,4.2 -0.3,0.8 -0.6,1.6 -0.9,2.2 -0.5,1.1 -0.6,0.3 -1.4,1.7 l -1.3,0.3 c 0.3,0.5 1.8,0.5 2.5,0.4 1.2,-0.2 0.4,-1 0.8,-2.2 0.7,-1.8 1.4,-3.5 2.1,-5.4 0.5,-1.2 3.7,-10.3 4.6,-10.3 h 1.3 c 0.8,0 1,0.3 1.5,0.5 l 2.3,-2.8 c 2.7,1.8 8.5,4.6 12.8,4.6 h 0.7 l 0.2,-0.1 -3.5,-5 -9.9,-0.1 6.5,-6.3 c 4.3,2.9 11.7,16.9 14.9,16.9 h 0.3 c 1.4,0 1.3,-0.6 1.8,-1.6 -0.9,-3.7 -4.8,-6.3 -7.3,-8.5 -2.4,-2 -6.1,-6.5 -8.3,-7.9 1.2,-1.7 10.3,-10.8 12.2,-11.3 l 0.9,7.7 0.1,2.9 -1.2,7.4 h -1.8 l 5.2,4.4 7.2,-3.9 c -0.5,2.1 -0.3,2.5 -2.2,3.4 -0.6,0.3 -3.7,1.9 -3.7,2.3 0,0.5 0.7,1.7 0.7,3.1 0,2.9 -3.1,4.4 -5.8,3.3 -2.1,-1 -4.9,-5.1 -5.5,-5.1 h -1 c -4.6,0 -6.7,1.6 -10.5,1.6 h -0.5 c -1.9,0 -2.5,-0.7 -4.1,-0.7 h -0.5 c -0.6,0 -1,0.4 -1,1 0,3.2 12.3,4.7 16.9,4.6 l 13.1,-0.3 v 0.3 c -0.9,1.3 -5.8,4.8 -8,4.8 -0.1,0.2 -0.5,0.7 -0.5,0.8 0,0.7 0.1,0.7 0.3,1.3 0.7,0.1 0.5,0.3 1,0.3 0.5,0 0.5,-0.2 1,-0.5 v -1.3 l 7.7,-5.4 -1.6,6.1 c -0.9,0.1 -1.3,0.4 -1.3,1.3 0,0.9 0.5,0.7 1.4,1.2 l 1.2,-1.4 c 0,-0.2 -0.7,-1.3 -0.7,-1.4 0,-1.3 2.4,-7.6 2.8,-9.5 l 15.6,-0.5 1.2,8.4 -0.4,0.1 c 0.3,0.5 0.3,1 1,1 1,0 1.1,-0.3 1.6,-0.7 -0.5,-1 -0.5,-1.9 -1.7,-1.3 l -0.8,-6.7 4.8,5.5 -0.7,0.8 1.4,1.2 c 0.5,-0.3 1,-0.2 1,-1 v -0.5 c 0,-0.9 -0.9,-1 -1.6,-1.2 l -4.5,-5 0.3,-1 h -8.5 c 0,-5 2,-8.2 2.3,-12.4 l -9.2,0.4 -0.8,2.5 h -4.6 c -1.8,0 -2.8,-8 -2.9,-10.3 0,-2.4 -0.3,-4.1 -0.2,-6.4 0.1,-1.4 1,-5.1 -1,-5.1 h -0.7 c -1,0 -1.3,1 -1.6,1.8 -0.3,1 -1,1.4 -1.6,2 -1.2,1.3 -2.3,2.4 -3.5,3.6 -1.2,1.2 -6.2,6.7 -7.4,7 l 0,0 z m 37.9,8 c 0,-0.3 0.3,-0.5 0.7,-0.5 h 0.7 l 0.1,0.5 -0.3,1 h -1 c -0.1,-0.7 -0.3,-0.4 -0.3,-1 z m 3.6,-1.8 c -0.2,0 -1.6,-1.8 -3.3,-1.8 h -0.5 c -2,0 -2,2.2 -2.5,3.9 -0.5,1.4 -1.4,3.7 -1.4,5.4 0,0.6 0.4,1 1,1 2.4,0 6.4,-5.2 6.9,-7.4 3.9,0 11.1,-1.1 11.8,-3.9 -2.6,0.7 -2.9,2.4 -8,2.8 1.8,-1.6 5.6,-4.3 5.9,-7.2 h -0.5 c -0.8,3.1 -5.6,7.2 -9.5,7.2 z"
    }
  ];
  icn["AC.IC.MICROBIAL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 83.9,93.3 c -3.3,0 -6,2.7 -6,6 0,3.3 2.7,6 6,6 3.3,0 6,-2.7 6,-6 0,-3.3 -2.7,-6 -6,-6 z M 100,85.5 c -11.1,0 -21.2,1.5 -28.6,4.1 -3.7,1.3 -6.7,2.8 -8.8,4.5 -2.1,1.7 -3.4,3.7 -3.4,5.9 0,2.2 1.3,4.2 3.4,5.9 2.1,1.7 5.1,3.2 8.8,4.5 7.4,2.5 17.5,4.1 28.6,4.1 11.1,0 21.2,-1.5 28.6,-4.1 3.7,-1.3 6.7,-2.8 8.8,-4.5 2.1,-1.7 3.4,-3.7 3.4,-5.9 0,-2.2 -1.3,-4.2 -3.4,-5.9 -2.1,-1.7 -5.1,-3.2 -8.8,-4.5 C 121.2,87.1 111.1,85.5 100,85.5 z m 0,1.4 c 11,0 21,1.5 28.2,4 3.6,1.2 6.5,2.7 8.4,4.3 1.9,1.6 2.9,3.2 2.9,4.8 0,1.6 -1,3.3 -2.9,4.8 -1.9,1.6 -4.8,3 -8.4,4.3 -7.2,2.5 -17.1,4 -28.2,4 -11,0 -21,-1.5 -28.2,-4 -3.6,-1.2 -6.5,-2.7 -8.4,-4.3 -1.9,-1.6 -2.9,-3.2 -2.9,-4.8 0,-1.6 1,-3.3 2.9,-4.8 1.9,-1.6 4.8,-3 8.4,-4.3 7.2,-2.5 17.1,-4 28.2,-4 z"
    }
  ];
  icn["AC.IC.REPTILE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 93.5,82.3 c 0,-2 1.8,-2.7 1.8,-4.3 0,-1 -0.6,-1.5 -1.2,-2 -2.8,0.3 -6.5,0.6 -7.4,2.7 -0.5,1.2 -0.5,2.4 -1.2,3.9 -0.5,1 -1.2,2.4 -1.2,3.8 0,0.8 0.4,0.7 0.4,1.6 v 0.8 c 0,2.2 -2.4,3.5 -0.6,6.1 -0.2,0.3 -2,1.5 -2.4,1.7 -1.7,1 -1.8,-0.6 -2.6,-0.6 h -0.8 l -0.3,-1.2 c -0.5,-0.3 -1,-0.8 -1.7,-0.8 -0.8,0 -0.8,0.5 -0.6,1 l -2.1,0.4 -0.8,2.3 h 1 c 0.9,0 1.4,0.4 1.6,1.2 l -1.5,1.2 -0.1,0.4 c 2.8,0.3 4.6,-0.6 7.2,-1.2 1.5,-0.4 6.8,-0.6 7.3,-1 l 0.1,-2.2 c 1,0.3 2,1.3 3.1,1.7 1.2,0.4 1.7,0.8 3.1,1.2 2.4,0.6 4.5,1.2 7.7,1.2 h 0.6 l 6.1,-0.6 c 0,2.6 2.3,2.5 2.8,4.5 -1.3,-0.3 -2.3,-2 -3.5,-2 -0.1,0 -0.4,0.1 -0.6,0.2 l 0.3,1.2 -1.6,0.3 v 0.8 l 0.6,0.4 -0.9,0.6 1,1 c -0.2,0.8 -0.7,0.6 -0.7,1.3 0,0.4 0.1,0.6 0.6,0.6 0.6,0 1.6,-1 2.8,-1 1.9,0 8.3,0.8 8.3,-0.8 v -0.2 c 0,-1.5 -3.5,-1.6 -3.3,-5.5 5,2.6 9.3,7.4 4.5,13.6 -1.5,2 -4.1,3.6 -6.7,4.5 -1.4,0.5 -7.4,1.9 -9.3,1.5 -4.2,-0.8 -5.4,-0.8 -8.8,-2.4 -2.6,-1.2 -4.7,-2.5 -7,-4 -3.9,-2.4 -10,-6.1 -16.1,-6.1 -5,0 -11.4,3.1 -11.4,7.9 1.2,-0.6 1.3,-1.3 2.1,-2.2 0.5,-0.6 1.7,-1.3 2.4,-1.7 1.5,-1 3.9,-1.8 6.5,-1.8 h 1 c 4.4,0 11.6,4.7 14.5,6.7 4.5,3.1 8.1,5.5 14.7,6.7 7,1.2 12.7,-0.1 17.4,-2.8 1.9,-1.1 4.3,-3.3 5.5,-5.1 1,-1.6 2.9,-5.4 2.7,-8 l -0.3,-2.6 c 0.3,0.1 2.8,3.7 3.6,4.5 0.8,0.8 3.8,2.5 5.3,2.5 1,0 4.4,-2.2 4.7,-2.9 l -1.3,-0.6 1.2,-1 c -1.5,-1 -0.8,-0.6 -2.4,-0.6 h -1 c 0,-1.4 -0.3,-1.8 -1.3,-1.6 l 0.2,0.1 -1.7,3.4 c -1.4,0 -2.9,-0.9 -3.6,-1.8 0,-0.1 -1.3,-3.8 -1.3,-3.9 -0.6,-2 -0.6,-2.2 -1.8,-3.6 -1.2,-1.3 -1.9,-1.2 -3.4,-1.9 l -0.1,0.6 c -0.6,-1.8 -6.2,-6.5 -8.1,-7.4 -2.2,-1.2 -3.2,-1.2 -6,-1.7 -2.1,-0.3 -5.4,0.3 -7,-0.5 0.4,-1.5 1.6,-0.6 1.6,-2.2 0,-0.5 -0.7,-0.4 -1.2,-0.4 0.6,-1.2 -0.3,-1 -1.3,-1 0.1,-0.3 0.4,-0.6 0.4,-1 0,-0.3 -0.3,-0.4 -0.6,-0.4 -0.4,0 0,0.6 -1.3,0.6 -0.3,-1 -0.3,-1.3 -1.5,-1.4 v 1.6 h -1.3 v 0.6 c 0,0.8 0.6,1.5 1,2.2 -0.4,0.7 -0.3,2 -1.4,2 -0.6,0 -1.8,-1.5 -3.1,-1.9 -1.3,-0.4 -3,0.5 -3,-1.5 -0,-0.9 2.1,-2.5 2.8,-3.5 l 0,0 z"
    }
  ];
  icn["AC.IC.RODENT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 117.2,80.3 c 0.6,1.2 0.6,1.7 1.5,2.6 0.6,0.7 1.8,1.2 1.9,2.2 -2,-0.1 -4.2,-3.3 -4.4,-5.3 -2.1,-0.5 -8.4,-3.6 -10.9,-4.7 -3.1,-1.3 -8.3,-2.7 -12.7,-2.7 h -2.2 c -4,0 -9,2.5 -11.3,4.2 -3,2.2 -5.2,5.2 -5.2,10.4 v 0.7 c -4.6,1.1 -11.7,8.4 -11.7,13.9 v 2.4 c 0,6.2 7.7,10 11.8,12.7 2.5,1.7 4.7,3.3 7,5.1 2.2,1.7 4.7,4.2 6.7,5.5 -2.1,-9 -22.4,-12.7 -22.4,-25.1 0,-4.5 4.9,-9.3 8.5,-10.2 -0.1,0.6 -0.3,0.6 -0.3,1.3 v 0.5 c 0,4.5 7.8,4.1 11.5,3 5.1,-1.5 8.1,-2.2 13.6,-1.2 5.4,1.1 8.3,1.5 12.7,3.6 3.7,1.9 2,1.2 4.2,3.8 1.1,1.3 1,1.1 2.9,1.3 0.8,0.1 1.8,1 2.4,1.5 h 1.7 c -1.3,-2.6 -4.9,-2.9 -5.6,-5.8 0.8,-1.5 1.7,-1.7 3.9,-1.7 0.8,0 1,0.2 1.7,0.3 -0.3,-0.6 -0.6,-1.7 0.5,-1.7 h 1.9 c 4.5,0 9,2.5 12.7,0 0,-3 0.4,-2.2 -0.9,-4.9 -0.5,-0.8 -2.1,-2.7 -2.8,-3.4 -1.6,-1.5 -5.7,-4.1 -6.7,-5.5 0,-2.8 -0.4,-3.4 -2.7,-3.9 l -0.5,1 0.5,2.7 -1,0.3 v 0.9 h -0.8 c -0.2,-2.4 -1.2,-5.8 -3.6,-5.8 h -0.2 c -1.8,-4e-4 -1.5,1 -2,1.9 z m 9.5,24.6 h 1.2 c -0.2,-2.6 -5.1,-2.8 -5.4,-5.4 l -2.2,0.3 c 0.2,1.5 1.1,2.9 2.4,3.5 0.9,0.3 1.5,0 2.3,0.6 0.4,0.3 1.1,1 1.7,1 z m -45.1,-6.1 c 1.2,1.8 5.9,4.2 8.8,4.2 1,0 1.6,-0.8 1.9,-1.5 -0.9,-1.3 -2.9,-2.8 -4.7,-3.1 -3.7,-0.8 -2.9,0.1 -6,0.4 l 0,0 z m 9.5,-1.9 c 1.3,2 5,2.9 8.3,2.9 0.8,0 1.4,-0.4 1.9,-0.7 -2,-2.9 -6.1,-2.6 -10.2,-2.2 z"
    }
  ];
  icn["AC.IC.PHARMACY"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 83.3,74.5 h 13.2 c 3,0 6.2,3.8 6,7.3 -0.1,3.6 -2.9,6.6 -6.5,6.6 H 83.3 V 74.5 z m -8.7,45.9 h 8.7 V 98 h 2.4 c 0.6,0 13.6,16.1 13.6,17.2 0,0.6 -13.6,16.6 -15,19.3 l 10.5,-0.1 10.3,-12.2 9.6,12.3 10.9,-0 -15.2,-19.3 14.4,-17.8 -10.2,-0.1 -9.7,10.8 -7.4,-10 c 8.5,-2 14.1,-6.8 14.1,-17.2 0,-8.1 -7,-15.3 -15,-15.3 H 74.6 v 54.8 z"
    }
  ];
  icn["GR.IN.IC.EDUCATIONAL FACILITIES INFRASTRUCTURE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 99.6,107.1 h -14.8 v 31.7 h 32 v -31.7 h -14.8 V 95.2 c 0,-0.6 6.5,-3 7.5,-3.4 1.3,-0.5 6.9,-3 7.9,-3 -0.3,-0.4 -14.7,-6.3 -15.7,-6.3 h -2.3 v 24.5 z m -3.1,-45 -5.6,14.8 1.7,0 1.3,-3.8 0.1,-0.1 0.1,0 6.8,0 0.1,0 0.1,0.1 1.3,3.8 1.7,0 -5.6,-14.8 -2.1,0 z m 0.8,1.8 0.2,0.1 0.2,-0.1 2.8,7.5 0.1,0.3 -0.3,0 -5.6,0 -0.3,0 0.1,-0.3 2.8,-7.5 z m -14.8,-1.8 8.3,0 0,1.3 -6.5,0 -0.2,0 0,0.2 0,4.5 0,0.2 0.2,0 5.8,0 0,1.3 -5.8,0 -0.2,0 0,0.2 0,7 -1.6,0 0,-14.8 z m 30.3,-0.3 c 0.9,1.5e-5 1.7,0.1 2.5,0.4 l 0,0 c 0.8,0.2 1.4,0.6 2.1,1 l 0,1.6 c -0.6,-0.5 -1.3,-0.9 -1.9,-1.2 -0.8,-0.3 -1.7,-0.5 -2.6,-0.5 -1.8,1.4e-5 -3.2,0.6 -4.1,1.7 -1,1.1 -1.4,2.7 -1.4,4.7 -1e-5,2 0.5,3.6 1.4,4.7 1,1.1 2.4,1.7 4.1,1.6 0.9,2e-6 1.8,-0.2 2.6,-0.5 0.7,-0.3 1.3,-0.7 1.9,-1.2 l 0,1.6 c -0.7,0.4 -1.4,0.8 -2.1,1 -0.8,0.2 -1.6,0.4 -2.5,0.4 -2.3,0 -4,-0.7 -5.3,-2 -1.3,-1.4 -1.9,-3.2 -1.9,-5.6 0,-2.4 0.6,-4.3 1.9,-5.6 1.3,-1.4 3,-2 5.3,-2 z"
    }
  ];
  icn["ATMOSPHERIC.IC.DRIZZLE.INTERMITTENT LIGHT"] = [
    {
      type: "path",
      stroke: false,
      fill: "rgb(0, 128, 0)",
      d:
        "m 100,82.7 c -5.5,0 -10,4.5 -10,10 0,5.5 4.5,10 10,10 0.1,0 0.1,0 0.2,0 l -0.2,0.2 c 0.9,5 -8.4,14.4 -8.4,14.4 12.8,0.1 18.4,-13.4 18.3,-23.4 l -0,0 c 0,-0.4 0.1,-0.8 0.1,-1.2 0,-5.5 -4.5,-10 -10,-10 z"
    }
  ];
  icn["ATMOSPHERIC.IC.FOG.SKY OBSCURED"] = [
    {
      type: "path",
      stroke: false,
      fill: "rgb(255, 247, 0)",
      d:
        "m 49.6,59.7 0,8 100.9,0 0,-8 -100.9,0 z m 0,71.6 0,8 100.9,0 0,-8 -100.9,0 z m 0,-35.6 0,8 100.9,0 0,-8 -100.9,0 z"
    }
  ];
  icn["ATMOSPHERIC.IC.HAIL.LIGHT NOT ASSOCIATED WITH THUNDER"] = [
    {
      type: "path",
      stroke: false,
      fill: "rgb(198, 16, 33)",
      d:
        "m 100,45.5 -0.9,2.1 -16,36 -0.6,1.4 1.5,0 32,0 1.5,0 -0.6,-1.4 -16,-36 L 100,45.5 z m -21.4,46.7 0.4,1.3 20,60 0.9,2.9 0.9,-2.9 20,-60 0.4,-1.3 -1.4,0 -40,0 -1.4,0 z m 2.8,2 37.2,0 L 100,150 81.4,94.1 z"
    }
  ];
  icn["ATMOSPHERIC.IC.RAIN.INTERMITTENT LIGHT"] = [
    {
      type: "path",
      stroke: false,
      fill: "rgb(0, 128, 0)",
      d:
        "m 100,79.8 c -11.2,0 -20.2,9 -20.2,20.2 0,11.2 9,20.2 20.2,20.2 11.2,0 20.2,-9 20.2,-20.2 0,-11.2 -9,-20.2 -20.2,-20.2 z"
    }
  ];
  icn["ATMOSPHERIC.IC.DUST OR SAND.LIGHT TO MODERATE"] = [
    {
      type: "path",
      stroke: false,
      fill: "rgb(173, 105, 75)",
      d:
        "m 140.7,85 -2,2 13,13 -13,13 2,2 14,-14 1,-1 -1,-1 L 140.7,85 z m -93.5,13.6 0,2.8 106.5,0 0,-2.8 -106.5,0 z M 98.5,62.3 c -3.2,0 -6.4,0.8 -9.2,2.2 -3.7,1.8 -6.9,4.4 -9.3,7.3 -2.3,2.9 -3.9,6.1 -3.9,9.3 0,5.6 2.9,9.9 6.9,13.2 4,3.3 9,5.8 13.9,8.3 4.9,2.5 9.7,4.9 13.1,7.7 3.4,2.8 5.4,5.8 5.4,10.1 0,3.6 -4,9 -10,11.6 -6,2.6 -13.6,2.7 -20.9,-3.4 l -2.7,3.2 c 8.4,7.1 18,7.2 25.3,4 7.2,-3.1 12.5,-9.2 12.5,-15.4 0,-5.6 -2.9,-10 -6.9,-13.3 -4,-3.3 -9,-5.8 -13.9,-8.2 -4.9,-2.5 -9.7,-4.9 -13.1,-7.7 -3.4,-2.8 -5.4,-5.8 -5.4,-10 0,-1.7 1,-4.3 2.9,-6.7 1.9,-2.4 4.7,-4.7 7.8,-6.2 6.2,-3 13.5,-3.1 19.9,4.4 l 3.2,-2.7 C 109.5,64.4 103.9,62.3 98.5,62.3 z"
    }
  ];
  icn["ATMOSPHERIC.IC.SNOW.INTERMITTENT LIGHT"] = [
    {
      type: "path",
      stroke: false,
      fill: "rgb(0, 128, 0)",
      d:
        "m 111.5,78.9 -26.4,40 3.3,2.2 26.4,-40 -3.3,-2.2 z m -23.1,0 -3.3,2.2 26.4,40 3.3,-2.2 -26.4,-40 z M 80,98 l 0,4 40,0 0,-4 -40,0 z"
    }
  ];
  icn["ATMOSPHERIC.IC.STORMS.THUNDERSTORM LIGHT TO MODERATE - WITH HAIL"] = [
    {
      type: "path",
      stroke: false,
      fill: "rgb(198, 16, 33)",
      d:
        "M 101 51.9 L 99.7 54.4 L 85.8 82.3 L 84.8 84.3 L 87 84.3 L 114.9 84.3 L 117.2 84.3 L 116.2 82.3 L 102.2 54.4 L 101 51.9 z M 101 58.1 L 112.7 81.5 L 89.3 81.5 L 101 58.1 z M 78.3 87.7 L 78.3 90.5 L 83.9 90.5 L 83.9 145 L 86.7 145 L 86.7 90.5 L 117.8 90.5 L 102.8 116.4 L 102.4 117.1 L 102.9 117.8 L 117.8 140.9 L 111.2 136.8 L 109.8 139.2 L 120.9 146.2 L 123.3 147.7 L 123 144.9 L 121.7 130.9 L 118.9 131.2 L 119.6 138.6 L 105.7 117 L 121.5 89.8 L 122.7 87.7 L 120.3 87.7 L 78.3 87.7 z "
    }
  ];
  icn["ATMOSPHERIC.IC.STORMS.FUNNEL CLOUD (TORNADO/WATERSPOUT)"] = [
    {
      type: "path",
      stroke: false,
      fill: "rgb(198, 16, 33)",
      d:
        "M 125.7,59.1 112.4,72.4 112,72.8 l 0,0.6 0,53.3 0,0.6 0.4,0.4 13.3,13.3 1.9,-1.9 -12.9,-12.9 0,-52.2 12.9,-12.9 -1.9,-1.9 z m -51.5,0 -1.9,1.9 12.9,12.9 0,52.2 L 72.4,139.1 74.3,140.9 87.6,127.6 88,127.2 l 0,-0.6 0,-53.3 0,-0.6 L 87.6,72.4 74.3,59.1 z"
    }
  ];
  icn["ATMOSPHERIC.IC.TROPICAL STORM SYSTEMS.TROPICAL STORM"] = [
    {
      type: "path",
      stroke: false,
      fill: "rgb(198, 16, 33)",
      d:
        "M 112.1 55 C 96.9 59.9 76.7 81.8 82.2 101.4 C 82.9 110.6 90.6 117.9 100 117.9 C 100 117.9 100 117.9 100.1 117.9 C 99.3 128.2 87.9 145 87.9 145 C 103.1 140.1 123.3 118.2 117.8 98.6 C 117.1 89.4 109.4 82.1 100 82.1 C 100 82.1 100 82.1 99.9 82.1 C 100.7 71.8 112.1 55 112.1 55 z M 100 84.5 C 106.8 84.5 112.5 88.8 114.6 94.8 C 114.8 95.2 114.9 95.6 115 96 C 115 96.1 115 96.1 115 96.2 C 115.1 96.6 115.2 96.9 115.3 97.3 C 115.4 98.1 115.5 99.1 115.5 100 C 115.5 101.1 115.4 102.1 115.2 103.1 C 115 104.1 114.7 105 114.4 105.8 C 114.4 105.9 114.3 105.9 114.3 106 C 114.1 106.4 114 106.7 113.8 107.1 C 113.7 107.2 113.7 107.3 113.7 107.3 C 113.6 107.4 113.6 107.5 113.5 107.6 C 113.3 107.9 113.1 108.3 112.9 108.6 C 112.4 109.3 111.9 110 111.3 110.6 C 111.2 110.7 111.1 110.8 111.1 110.9 C 110.8 111.1 110.5 111.4 110.3 111.6 C 110.2 111.7 110.2 111.7 110.1 111.8 C 109.8 112 109.5 112.3 109.2 112.5 C 109.1 112.5 109.1 112.5 109.1 112.5 C 108.9 112.7 108.6 112.9 108.4 113 C 108.1 113.2 107.8 113.4 107.5 113.6 C 107.4 113.6 107.4 113.6 107.4 113.7 C 106.6 114.1 105.7 114.4 104.9 114.7 C 104.7 114.8 104.5 114.8 104.3 114.9 C 104 115 103.6 115.1 103.3 115.2 C 103.2 115.2 103.1 115.2 103.1 115.2 C 102.1 115.4 101.1 115.5 100 115.5 C 93.3 115.5 87.6 111.3 85.4 105.3 C 85.4 105.3 85.4 105.2 85.4 105.2 C 85.3 104.8 85.2 104.5 85.1 104.2 C 85 104 85 103.9 85 103.8 C 84.9 103.5 84.8 103.2 84.8 102.9 C 84.7 102.5 84.6 102 84.6 101.6 C 84.5 101.1 84.5 100.5 84.5 100 C 84.5 99 84.6 98 84.8 97 C 84.8 97 84.8 96.9 84.8 96.9 C 84.9 96.4 85 96 85.2 95.6 C 85.3 95.2 85.4 94.9 85.5 94.5 C 85.6 94.3 85.6 94.2 85.7 94 C 85.7 93.9 85.8 93.8 85.8 93.8 C 86 93.4 86.2 93 86.3 92.7 C 86.4 92.6 86.4 92.5 86.5 92.4 C 86.7 92.1 86.9 91.7 87.1 91.4 C 87.3 91.1 87.5 90.8 87.8 90.5 C 88 90.2 88.2 90 88.4 89.7 C 88.6 89.5 88.8 89.3 88.9 89.1 C 89 89 89.1 89 89.2 88.9 C 89.4 88.7 89.7 88.4 89.9 88.2 C 90.2 88 90.5 87.8 90.8 87.5 C 90.8 87.5 90.9 87.5 90.9 87.5 C 91.1 87.3 91.4 87.1 91.6 87 C 91.9 86.8 92.2 86.6 92.5 86.4 C 92.6 86.4 92.6 86.4 92.6 86.3 C 93.1 86.1 93.5 85.9 94 85.7 C 94.4 85.6 94.7 85.4 95.1 85.3 C 95.3 85.2 95.5 85.2 95.7 85.1 C 96 85 96.4 84.9 96.8 84.8 C 96.8 84.8 96.8 84.8 96.9 84.8 C 96.9 84.8 96.9 84.8 96.9 84.8 C 97.4 84.7 97.9 84.6 98.4 84.6 C 98.9 84.5 99.5 84.5 100 84.5 z "
    }
  ];
  icn["AC.IC.EMT STATION LOCATION"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 100 55 L 70 80 L 75 80 L 75 125 L 125 125 L 125 80 L 130 80 L 100 55 z M 95 80 L 105 80 L 105 91.3 L 114.8 85.7 L 119.8 94.3 L 110 100 L 119.8 105.7 L 114.8 114.3 L 105 108.7 L 105 120 L 95 120 L 95 108.7 L 85.2 114.3 L 80.2 105.7 L 90 100 L 80.2 94.3 L 85.2 85.7 L 95 91.3 L 95 80 z "
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "M 95 80 L 95 91.3 L 85.2 85.7 L 80.2 94.3 L 90 100 L 80.2 105.7 L 85.2 114.3 L 95 108.7 L 95 120 L 105 120 L 105 108.7 L 114.8 114.3 L 119.8 105.7 L 110 100 L 119.8 94.3 L 114.8 85.7 L 105 91.3 L 105 80 L 95 80 z "
    }
  ];
  icn["AC.IC.HEALTH DEPARTMENT FACILITY"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 131.4,83.6 100,68.4 68.5,83.5 z m -26.4,14.6 0,-9.7 -10.1,0 0,9.7 -9.5,0 0,10.4 9.5,0 0,9.5 10.1,0 0,-9.5 9.6,0 0,-10.4 z m -27.2,19.5 0,-27.8 1.4,0 0,-3.7 -7.3,0 0,3.7 1.2,0 0,27.8 -1.2,0 0,3.8 7.3,0 0,-3.8 z m 48.7,0 0,-27.8 1.4,0 0,-3.7 -7.3,0 0,3.7 1.2,0 0,27.8 -1.2,0 0,3.8 7.3,0 0,-3.8 z m -56.4,5.1 0,3 59.4,0 0,-3 z m -1.8,6.1 0,2.8 63.2,0 0,-2.8 z"
    }
  ];
  icn["AC.IC.MEDICAL FACILITIES OUTPATIENT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 81.8,63.6 26.6,9 0,63.9 -26.6,-9.1 v -63.8 l 0,0 z m -1.6,65 29.9,10.4 v -10.6 h 9.8 V 61 H 80.2 v 67.6 l 0,0 z m 21.4,-18.1 c 0,1.1 1,2.6 2.2,2.6 0.8,0 1.2,-0.8 1.2,-1.6 v -0.4 c 0,-1.2 -1.1,-3 -2,-3 -0.8,0 -1.4,0.8 -1.4,1.6 v 0.8 H 101.5 z M 85.9,90.9 c 0.9,0.1 5.3,1.8 5.3,2.4 v 7.1 l 5.7,2.2 v -7.5 l 5.5,1.9 V 89.1 C 101.5,88.8 96.9,87.2 96.9,86.6 V 79.5 L 91.2,77.6 v 7.4 l -5.3,-2 v 7.9 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "M 81.8 63.6 L 81.8 127.4 L 108.4 136.6 L 108.4 72.7 L 81.8 63.6 z M 91.2 77.6 L 96.9 79.5 L 96.9 86.6 C 96.9 87.2 101.5 88.9 102.3 89.1 L 102.3 97 L 96.8 95.2 L 96.8 102.6 L 91.1 100.4 L 91.1 93.3 C 91.1 92.6 86.8 91 85.9 90.9 L 85.9 83 L 91.2 85 L 91.2 77.6 z M 102.9 108.1 C 103.9 108.1 105 109.9 105 111.2 L 105 111.6 C 105 112.4 104.6 113.2 103.8 113.2 C 102.5 113.2 101.5 111.6 101.5 110.6 L 101.5 110.6 L 101.5 109.8 C 101.5 108.9 102.1 108.1 102.9 108.1 z "
    }
  ];
  icn["AC.IC.OPERATION/EMERGENCY MEDICAL OPERATION"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 73.7,89.7 c 0.4,4.9 2.3,11.3 3.4,15.6 1.4,5.7 3.5,8.7 6.1,13.1 2.2,3.6 3.4,9.6 5.6,13.4 0.7,1.3 2.8,5.3 3.6,6 0.5,0.4 5.5,4 5.6,4 1.6,0 9.7,-0.4 10.4,-0.7 0.3,-0.1 4.1,-6.6 4.1,-7 v -3 h -7.8 c -2.7,0 -5.6,-1.3 -8.4,-1.3 V 112.6 c 0,-2.4 1.3,-17.3 2.1,-18 0.8,-0.7 11.4,-8.2 11.9,-8.3 l -1,-8.5 c -0.5,0.2 -5.6,1 -6,0.9 -1,-0.2 -4.7,-1.4 -5.5,-1.8 -1.9,1.1 -4.4,1.8 -6.5,2.7 -1.6,0.7 -3.5,2.7 -5.5,3.7 -2.4,1.2 -3.9,1.7 -6.7,2.5 -1.6,0.4 -2.4,0.4 -3.3,1.5 -0.7,0.8 -1.7,1.8 -2.2,2.5 z m 27.8,36.1 c 0,-8.1 2,-16.8 1.9,-24.8 0,-1.2 0.2,-1.9 0.2,-3.2 0,-1.4 0.4,-1.4 1.2,-2.2 1.2,-1.1 2.4,-2 3.6,-3 2.1,-1.7 5,-4.8 7.1,-6.1 0.3,0.1 0.3,0.2 0.9,0.2 h 4.9 c 0.2,0.8 4.9,6.4 5.8,7.4 2.6,3.1 3.8,3.9 2.9,9.6 -0.5,3.2 -0.7,8.6 -1,12 -0.3,4 -0.9,8.1 -0.9,12.2 l -26.7,-2.2 z m -1.7,1.3 29.8,2.2 2.4,-31.4 -9.8,-12.6 -7.2,-0.3 c -0.2,0 -6.9,5.9 -7.8,6.5 -1.4,1.1 -2.5,2.3 -3.9,3.2 -1.7,1.2 -1.2,3.3 -1.4,5.9 -0.6,8.4 -2.1,18.1 -2.1,26.5 z m 12.8,-9 0.2,0 c 2.3,0 6.5,2.8 8.1,2.8 h 3 V 119.4 H 121.4 c -0.6,0 -6.1,-2.3 -7.2,-2.7 -1.5,-0.6 -6.6,0.3 -8.6,0.3 v 1.3 l 7.1,-0.3 z m -5.6,-7.9 0.2,1.5 c 3.1,-0.7 5.6,-1.4 8.7,-0.8 1.3,0.3 2.8,0.6 4.2,0.9 2.5,0.6 2.8,1.2 3.3,-1 -1.3,0 -6.8,-1.3 -8.4,-1.7 -2.5,-0.7 -5.5,0.4 -8.1,1.1 z m -0.2,-8.1 0.5,1.4 5.7,-1.9 5,3.7 8,-1 -0.3,-1.7 -7.3,1 c -0.8,-0.6 -4.7,-3.6 -5.3,-3.6 -0.5,0 -5.6,1.9 -6.2,2.2 z m 10.7,-7.3 h 1.1 c 1.2,0 2.5,-1.3 2.5,-2.5 v -0.4 c 0,-1.4 -1.6,-2.5 -3,-2.5 -4.4,-0 -3.6,5.5 -0.6,5.5 z M 67.9,81.8 c 0,1.5 3.2,4.4 4.2,5.1 l 1.5,-1.6 -2.1,-4.7 h -2.2 c -0.5,0 -1.5,1.1 -1.5,1.2 z M 110.2,70.5 c 0.8,0.4 2.4,0.8 2.4,1.9 0,0.9 -0.5,1.4 -0.6,2.1 l -2.6,-0.4 c -1,-0.1 -4.2,0.6 -5.8,0.6 v 1.1 c 0,1.1 4,0 5.6,0 h 0.4 c 1.7,0 5.4,1.2 6.2,1.9 0.5,0.5 1.4,5.2 1.9,6.2 1.8,-0.9 1.3,-0.5 0.6,-3.2 -0.3,-0.9 -1.1,-3.1 -1.1,-4 l -3.9,-1.6 1.2,-2.3 c -1.1,-2.1 -0.8,-3.6 -4,-3.6 l -0.3,1.2 z m -36.5,6.6 c 0,0.9 2,4.6 2.2,6 0.3,0.1 1.1,0.4 1.1,0.4 0.3,0 2.1,-0.9 2.8,-1.1 -0.7,-3.1 -1.7,-6.6 -4.3,-7.9 -0.2,0.7 -1.7,2.3 -1.7,2.5 z m 5.9,-3.6 c 1.9,4.1 0.4,3.7 4.2,7 l 2.4,-1.2 v -3.8 c 0,-1.5 -1.2,-3.6 -1.3,-5.3 l -1.9,-0.2 h -1.7 l -1.6,3.7 z m 7.6,-2.8 2.5,5 3.9,-0.8 c 0,-1 0.6,-2.5 0.6,-3.4 0,-2.2 -1.1,-4.7 -1.1,-6.9 H 88.5 l -1.3,6 z M 97.8,62.8 c 0,0.6 0.2,7.2 0.3,7.4 0.3,1 3.7,2.6 5.5,2.4 0.9,-0.1 2.5,-0.3 3.5,-0.4 1.8,-0.2 1.2,-0.6 1.5,-2.6 0.2,-1.9 0.6,-4.9 1.1,-6.8 -0.4,-0.8 -2.4,-4.7 -3.2,-4.7 h -5.1 c -0.7,0 -3,4 -3.5,4.7 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "M 115.6 86.6 C 113.5 88 110.6 91 108.5 92.7 C 107.3 93.7 106 94.6 104.8 95.7 C 104 96.4 103.6 96.5 103.6 97.8 C 103.6 99.2 103.4 99.9 103.4 101.1 C 103.5 109.1 101.5 117.8 101.5 125.9 L 128.2 128 C 128.2 124 128.8 119.9 129.1 115.8 C 129.3 112.4 129.6 107.1 130.1 103.8 C 131 98.1 129.8 97.3 127.2 94.2 C 126.3 93.1 121.6 87.6 121.4 86.8 L 116.5 86.8 C 115.9 86.8 115.9 86.7 115.6 86.6 z M 118.2 89.3 C 119.5 89.3 121.1 90.4 121.1 91.9 L 121.1 92.3 C 121.1 93.6 119.8 94.9 118.6 94.9 L 117.5 94.9 C 114.5 94.9 113.8 89.3 118.2 89.3 z M 113.1 100 C 113.7 100 117.6 103.1 118.4 103.7 L 125.7 102.6 L 126 104.3 L 118 105.3 L 113 101.6 L 107.3 103.6 L 106.9 102.2 C 107.5 101.9 112.5 100 113.1 100 z M 113.2 109 C 113.9 109 114.5 109.1 115.2 109.2 C 116.7 109.6 122.2 110.9 123.5 110.9 C 123 113 122.7 112.4 120.2 111.8 C 118.8 111.5 117.3 111.2 116 110.9 C 112.8 110.3 110.4 111 107.3 111.8 L 107.1 110.3 C 109 109.8 111.2 109.1 113.2 109 z M 112.5 116.5 C 113.2 116.5 113.8 116.6 114.2 116.8 C 115.2 117.1 120.8 119.4 121.4 119.4 L 123.9 119.4 L 123.9 121 L 121 121 C 119.4 121 115.1 118.2 112.9 118.2 L 112.6 118.2 L 105.6 118.4 L 105.6 117.1 C 107.1 117.1 110.4 116.5 112.5 116.5 z"
    }
  ];
  icn["AC.IC.TRIAGE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 91.6 69 C 87.3 69 83.6 71.5 83.6 75.3 L 83.6 83.3 L 80.5 83.3 C 74 83.3 73.6 88.1 71.2 91.5 C 69.3 94.3 63 94.4 63 100.9 L 63 131 L 137 131 L 137 102.6 C 137 99.5 136.2 97.3 134.7 95.6 C 133.2 94 130.8 93.6 129.1 92 C 126 88.8 126.9 83.3 119.1 83.3 L 116.2 83.3 L 116.2 75.5 C 116.2 71.3 112.9 69 108.4 69 L 91.6 69 z M 89.9 76 L 110.1 76 L 110.1 83.3 L 89.9 83.3 L 89.9 76 z M 95.3 90.4 L 104.4 90.4 L 104.4 99.4 L 112.2 94.9 L 116.8 102.8 L 109.1 107.3 L 116.8 111.9 L 112.1 119.8 L 104.4 115.3 L 104.4 124.1 L 95.3 124.1 L 95.3 115.3 L 87.6 119.7 L 83 111.8 L 90.7 107.3 L 83 102.8 L 87.6 94.9 L 95.3 99.3 L 95.3 90.4 z "
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 112.1,119.8 4.6,-7.9 -7.6,-4.6 7.7,-4.5 -4.6,-7.9 -7.7,4.4 -0,-8.9 -9.1,0 0,8.9 -7.7,-4.4 -4.5,7.9 7.6,4.5 -7.6,4.5 4.5,7.9 7.7,-4.4 0,8.8 9.1,0 0,-8.8 z"
    }
  ];
  icn["AC.IC.EMERGENCY PUBLIC INFORMATION CENTER"] = [
    icn["GR.IC.FF.EMERGENCY OPERATION"],
    text("i")
  ];
  icn["AC.IC.FIRE HYDRANT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 80,131.3 v -1 c 1.3,0.1 5.7,1.8 7.7,2.2 2.8,0.6 5.8,1 9.1,1 h 6.5 c 3.4,0 6.1,-0.4 8.9,-1 2,-0.4 6.5,-2.1 7.7,-2.2 v 1 c 0,2.9 -12.5,4.5 -16.6,4.5 h -6.4 c -4.1,0 -16.9,-1.6 -16.9,-4.5 l 0,0 z m 17.9,-43.4 4.5,0.1 12.4,0.4 v 8.3 h 6.3 v 11.9 h -6.3 v 17.4 l 4.5,1.3 c -1.2,1.6 -12.2,3.3 -15.8,3.3 h -6.4 c -3.5,0 -15,-1.8 -16,-3.2 l 4.6,-1.6 0.1,-17.2 h -6.3 V 96.7 h 6.3 v -8.3 l 12.4,-0.4 0,0 z m 25.7,5.9 h 3 v 6.7 h 3.2 v 3.9 h -3.2 v 6.7 h -3 V 93.8 z m -50,0 h 2.9 v 17.2 h -2.9 v -6.7 h -3.5 v -3.9 h 3.4 V 93.8 h 0.1 z m 26.1,-8.3 c -5.2,0 -9.7,0.2 -14.8,0.2 -4.4,0 -3.5,-2.6 -1.8,-2.8 2.1,-0.3 4.9,-0.1 6.9,-0.4 5.3,-0.8 23.6,-0.3 28.1,0.8 0.2,1.8 0.4,1.5 -1,2.4 l -15.8,-0.2 -1.6,0.1 z m -1,-21.1 h 2.9 v 3.8 h 2 v 1.8 c 3.2,0.7 5.3,1.1 7.4,3.1 1.3,1.3 3.5,4.3 3.7,6.7 l -10.4,-0.3 -9.9,0.1 0.2,-0.1 -9.1,0.5 c 0.4,-4.7 5.2,-9.7 10.4,-9.7 h 0.8 v -2 h 2 v -3.8 z m -2.6,1.2 h -2 v 2.2 c -5.7,0.5 -10.6,6.6 -11.1,12.5 -2.2,0.2 -2.3,1.3 -3.4,2.1 l -0.2,1.6 c -0.3,2.2 2,3.9 3.6,4.3 v 5.5 h -3.6 v -2.4 h -8.3 v 6.7 h -3.2 V 107 h 3.2 v 6.3 h 8.3 v -2.4 h 3.6 V 123.8 c -2.3,0.6 -5.5,2 -5.5,4.9 v 2 c 0,6.3 12.9,7.7 19.8,7.7 h 5.9 c 6.9,0 19.4,-1.2 19.4,-7.7 v -2 c 0,-2.8 -3,-4.3 -5.3,-4.9 v -12.9 h 3.6 v 2.4 h 8.1 V 107 h 3.2 v -9.1 h -3.2 v -6.4 h -8.1 v 2.4 h -3.6 v -5.5 c 1.6,-0.3 3.6,-1.8 3.6,-3.8 0,-2.2 -1.6,-3.9 -3.6,-4 -0.5,-5.9 -5.7,-12.1 -11.4,-12.6 v -2.2 h -2 V 61.6 h -7.9 v 4 z m 2.9,47.2 c -4,0 -8.3,-5 -8.1,-9.3 0.2,-4.4 4.2,-9 8.3,-9 h 2 c 4.2,0 8.3,4.7 8.3,9.1 0,4.3 -4,9.1 -8.1,9.1 h -2.4 l 0,0 z m -10.5,-9.9 v 1.8 c 0,5.2 5.4,10.8 10.5,10.8 h 2.4 c 5.6,0 10.8,-5.8 10.8,-11.8 0,-6 -5.3,-11.8 -10.9,-11.8 h -2.1 C 93.7,92 88.4,97.5 88.4,103 l 0,0 z m 9.5,0.8 c 0.3,-0.6 0.8,-1.8 1.4,-1.8 h 1.4 c 0.7,0 1.4,1.3 1.4,2 0,0.1 -0.9,1.6 -1.4,1.6 h -1.4 c -0.6,0.1 -1.1,-1.2 -1.4,-1.8 z m -2.9,0 2.2,4.3 h 5 c 0.7,0 2.4,-3.6 2.9,-4.3 l -2.4,-4.5 h -4.9 c -0.8,0.1 -2.5,3.7 -2.9,4.5 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 97.9,103.8 c 0.3,-0.6 0.8,-1.8 1.4,-1.8 h 1.4 c 0.7,0 1.4,1.3 1.4,2 0,0.1 -0.9,1.6 -1.4,1.6 h -1.4 c -0.6,0.1 -1.1,-1.2 -1.4,-1.8 z m 1.2,-9.1 c -4.1,0 -8.1,4.6 -8.3,9 -0.2,4.3 4.1,9.3 8.1,9.3 l 2.4,0 c 4,0 8.1,-4.9 8.1,-9.1 0,-4.4 -4.1,-9.1 -8.3,-9.1 l -2,0 z m -1.2,4.7 4.9,0 2.4,4.5 c -0.4,0.7 -2.1,4.3 -2.9,4.3 l -5,0 -2.3,-4.3 c 0.4,-0.8 2.1,-4.4 2.9,-4.5 z M 98.7,64.5 h 2.9 v 3.8 h 2 v 1.8 c 3.2,0.7 5.3,1.1 7.4,3.1 1.3,1.3 3.5,4.3 3.7,6.7 l -10.4,-0.3 -9.9,0.1 0.2,-0.1 -9.1,0.5 c 0.4,-4.7 5.2,-9.7 10.4,-9.7 h 0.8 v -2 h 2 v -3.8 z m 1,21.1 c -5.2,0 -9.7,0.2 -14.8,0.2 -4.4,0 -3.5,-2.6 -1.8,-2.8 2.1,-0.3 4.9,-0.1 6.9,-0.4 5.3,-0.8 23.6,-0.3 28.1,0.8 0.2,1.8 0.4,1.5 -1,2.4 l -15.8,-0.2 -1.6,0.1 z m -26.1,8.3 h 2.9 v 17.2 h -2.9 v -6.7 h -3.5 v -3.9 h 3.4 V 93.8 h 0.1 z m 50,0 h 3 v 6.7 h 3.2 v 3.9 h -3.2 v 6.7 h -3 V 93.8 z m -25.7,-5.9 -12.4,0.4 0,8.3 -6.3,0 0,11.9 6.3,0 -0.1,17.3 -4.6,1.6 c 1.1,1.5 12.5,3.3 16,3.3 l 6.4,0 c 3.6,0 14.7,-1.7 15.8,-3.3 l -4.5,-1.3 0,-17.4 6.3,0 0,-11.9 -6.3,0 0,-8.3 -12.4,-0.4 -4.5,-0.1 z m 1.2,4.2 2.1,0 c 5.7,0 10.9,5.8 10.9,11.8 0,5.9 -5.2,11.8 -10.8,11.8 l -2.4,0 c -5.2,0 -10.5,-5.6 -10.5,-10.8 l 0,-1.8 c 0,-5.5 5.3,-11 10.7,-10.9 z M 80,131.3 v -1 c 1.3,0.1 5.7,1.8 7.7,2.2 2.8,0.6 5.8,1 9.1,1 h 6.5 c 3.4,0 6.1,-0.4 8.9,-1 2,-0.4 6.5,-2.1 7.7,-2.2 v 1 c 0,2.9 -12.5,4.5 -16.6,4.5 h -6.4 c -4.1,0 -16.9,-1.6 -16.9,-4.5 l 0,0 z"
    }
  ];
  icn["AC.IC.OTHER WATER SUPPLY LOCATION"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 113.2,116.5 c 0,-2.9 4.4,-9.3 5.8,-11.8 2.8,-5 3.1,-6.8 4.6,-13 2.1,1.4 2.2,4.3 3,7.1 0.8,2.8 1.6,4.8 2.9,7 2.2,3.8 6.7,8 5,14.1 -1.6,5.8 -5.2,7.8 -12.2,7.5 -5.8,-0.2 -9.1,-4.9 -9.1,-11 z m -1.2,-0.4 v 0.6 c 0,7.5 4.6,12.2 12,12.2 6.8,0 12,-4.6 12,-11 v -1.3 c 0,-5 -4.7,-10 -6.6,-13.8 -1.1,-2.2 -1.6,-5.5 -2.3,-8.1 -0.9,-3.3 -2.4,-4 -4.8,-5.6 0,13.6 -10.3,20 -10.3,26.8 z m 4.8,3.6 c 0,2.4 1.8,4.4 3.8,4.4 0.7,0 1.5,-0.6 1.7,-1.3 -1.6,-0.4 -3.2,-2.5 -3.4,-4.4 l -2.1,1.3 z M 89.2,73 v 15.8 h -2.1 v -15.8 l 0.6,-0.1 1.5,0.1 z m -10.4,2.3 h 6.6 v 11 H 78.8 v -11 z m 37.2,1.1 c 0,-0.5 0.2,-0.6 0.6,-0.6 h 1.5 c 0.5,0 0.6,0.2 0.6,0.6 v 9.1 h -2.8 v -9.1 z m -24.9,-1.3 22.8,2.4 v 6.5 l -22.8,1.9 v -10.7 z m -27,11.8 h 12.9 v 1 l 8.3,0.1 1.2,2.4 1.6,0.3 c 0.6,0.1 1,-0.2 1.8,-0.3 l 0.9,-0.6 0.2,-2.4 22.8,-1.6 c 1.2,2.5 4.2,1.6 6.6,1 0,-0.7 0.2,-0.8 0.2,-1.5 v -9.5 c 0,-1.5 -0.8,-2.1 -2.3,-2.1 h -2.1 c -3.8,0 0.2,2.5 -5,1.6 -2.1,-0.4 -4.6,-0.4 -6.7,-0.7 -3.3,-0.5 -10.4,-1.3 -13.5,-1.3 -0.1,-3.1 -5.6,-3.3 -5.7,0.4 h -8.4 v 0.6 h -13 l 0.1,12.4 0,0 z m 15.6,-4.8 0,1.9 4.6,0 0,-1.9 z m 0,-4.2 0,1.7 4.6,0 0,-1.7 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 91,75.1 22.8,2.4 v 6.5 l -22.8,1.9 v -10.7 z m 24.9,1.3 c 0,-0.5 0.2,-0.6 0.6,-0.6 h 1.5 c 0.5,0 0.6,0.2 0.6,0.6 v 9.1 h -2.8 v -9.1 z M 78.8,75.3 l 0,11 6.6,0 0,-11 -6.6,0 z m 0.8,2.6 4.7,0 0,1.7 -4.7,0 0,-1.7 z m 0,4.2 4.7,0 0,1.9 -4.7,0 0,-1.9 z M 123.5,91.8 c -1.4,6.2 -1.8,8 -4.6,13 -1.3,2.5 -5.8,8.9 -5.8,11.8 0,6.1 3.3,10.8 9.1,11 7,0.2 10.5,-1.7 12.2,-7.5 1.7,-6.1 -2.8,-10.3 -5,-14.1 -1.3,-2.2 -2,-4.3 -2.9,-7 -0.8,-2.8 -0.9,-5.7 -3,-7.1 z m -4.6,26.7 c 0.2,1.9 1.8,4 3.4,4.4 -0.2,0.6 -1,1.3 -1.7,1.3 -2,0 -3.8,-2.1 -3.8,-4.4 l 2.1,-1.3 z M 89.2,73 v 15.8 h -2.1 v -15.8 l 0.6,-0.1 1.5,0.1 z"
    }
  ];
  icn["AC.IC.BANKING FINANCE AND INSURANCE INFRASTRUCTURE"] = text("€$£");
  icn["GR.IN.IC.PUBLIC VENUES INFRASTRUCTURE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 87.9,87.3 c -3.2,0 -5.8,2.6 -5.8,5.8 0,2.8 2.1,5.2 4.8,5.7 l 0,3.3 -3.8,0 0,2 3.8,0 0,9.4 2,0 0,-9.4 3.8,0 0,-2 -3.8,0 0,-3.3 c 2.7,-0.5 4.8,-2.8 4.8,-5.7 0,-3.2 -2.6,-5.8 -5.8,-5.8 z m 24,0 c -3.2,0 -5.8,2.6 -5.8,5.8 0,2.8 2.1,5.2 4.8,5.7 l 0,3.3 -3.8,0 0,2 3.8,0 0,9.4 2,0 0,-9.4 3.8,0 0,-2 -3.8,0 0,-3.3 c 2.7,-0.5 4.8,-2.8 4.8,-5.7 0,-3.2 -2.6,-5.8 -5.8,-5.8 z m -24,2 c 2.1,0 3.8,1.7 3.8,3.8 0,2.1 -1.7,3.8 -3.8,3.8 -2.1,0 -3.8,-1.7 -3.8,-3.8 0,-2.1 1.7,-3.8 3.8,-3.8 z m 24,0 c 2.1,0 3.8,1.7 3.8,3.8 0,2.1 -1.7,3.8 -3.8,3.8 -2.1,0 -3.8,-1.7 -3.8,-3.8 0,-2.1 1.7,-3.8 3.8,-3.8 z m 24.2,37.8 0,-3 -72.1,0 0,3 z m -3,-6.2 0,-2.8 -66.2,0 0,2.8 z M 66.8,98.2 c 0,1.3 -0.7,2.6 -0.7,4.3 -0,1.8 -0.2,3.1 -0.2,5 v 3.2 l 0.6,3.6 h 2.7 l -0.8,-6.4 v -1.8 c 0,-8.1 5,-17.9 9.3,-21.5 5.6,-4.6 11.6,-9.1 21.7,-9.1 h 0.9 c 9,0 17.1,4.4 21.6,8.8 3.2,3.2 4.1,4.7 6.4,8.7 1.4,2.4 3.3,8.4 3.3,12 v 4.3 c 0,1.4 -0.7,3 -0.7,4.4 v 0.5 h 2.7 l 0.6,-6.4 v -3.8 c 0,-1.6 -1,-5.2 -1.4,-6.6 -0.8,-2.5 -1.3,-3.6 -2.3,-5.7 -1.8,-3.8 -3.8,-6.4 -6.7,-9.3 -4.6,-4.6 -13.6,-9.6 -22.6,-9.6 h -2.5 c -7.8,0 -16.6,4.1 -20.6,7.9 -2.8,2.7 -4.4,4.1 -6.7,7.5 -1.1,1.6 -1.5,3 -2.5,4.6 -0.9,1.6 -1.2,4 -2,5.2 z"
    }
  ];
  icn["GR.IN.IC.RECREATIONAL AREA"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 96.4,78.8 8.1,-0 c 0.9,0 2.4,5.7 2.4,6.9 l 1.5,4.3 c 0,0.4 2,6.6 2,7 v 0.6 l -19.4,-0 5.4,-18.8 z m -19.9,-0 11.1,0 -3.5,11.2 c 0,1.7 -1.9,5.7 -1.9,6.9 v 0.6 h -20.8 v 7.2 l 18.5,0 -1.2,3 -0.1,0.8 -2.6,8.3 -3.6,11.5 c 1.1,0 9.3,0.1 9.7,-0.1 0.2,-0.1 2,-6.8 2.3,-7.7 0.5,-1.2 4.5,-15 4.5,-15.2 v -0.6 l 23.5,0 6.7,23.6 9.8,0 -1.4,-4.8 -0.7,-2.6 -2.4,-7.8 -0.9,-2.8 -1.7,-5.7 h 15.8 v -7.2 h -18.2 l -2.9,-8.9 -0.1,-0.8 -1,-3 -1.7,-6.2 h 10.6 v -7.2 h -47.9 v 7.2 l 0,0 0,0 z m 62.1,16.9 0,-6.1 -15.2,0 0,6.1 z m -62.3,0 0,-6.1 -14.9,0 0,6.1 z"
    }
  ];
  icn["GR.IN.IC.SPECIAL NEEDS INFRASTRUCTURE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 73.1,111.2 c 0,-3.8 1,-5.8 2.3,-8.4 1.4,-2.8 3.3,-3.8 4.6,-5.8 l -1.1,-8.2 c -2.6,0.7 -7.7,6.5 -9.2,9 -2.4,4.1 -3.8,7.9 -3.8,14.2 v 3.3 c 0,2.2 2.2,8.1 3.1,9.6 2,3.2 3,4.5 5.5,7.1 3.6,3.6 10.7,7.1 17.9,7.1 h 1 c 4.9,0 9.9,-1.6 13.1,-3.6 1.7,-1 8.5,-6.2 8.5,-7.8 0,-1.2 -3.1,-6.6 -3.5,-8.4 -1.2,1.5 -1.6,3 -3,4.8 -1.2,1.5 -2.3,2.7 -3.8,3.8 -2.6,2 -6.8,4 -11.3,4 h -1.2 c -10.2,0 -19.1,-9 -19.1,-19.3 v -1.4 l 0,0 z m 8.9,-37.9 c 0.5,0.4 0.5,2.9 0.5,4 L 85,106.8 l 25.4,0 10,23 c 1.5,-0.1 5.5,-1.5 7.1,-2.1 1.2,-0.4 6.5,-1.4 6.5,-2.6 v -0.2 c 0,-0.7 -1.9,-4.8 -2,-6.3 l -7.6,2.6 -9,-21.6 H 91.6 l -0.4,-6 h 17.3 v -5.4 H 90.8 l -1.1,-12.9 c 2.6,-0.2 5.2,-3.9 5.2,-6.7 v -2.2 h -0.5 v -0.8 c 0,-0.8 -2.1,-3.1 -2.7,-3.5 -1,-0.7 -3.3,-1.6 -4.8,-1.3 -2.2,0.4 -3.2,0.8 -4.4,2 -0.7,0.7 -2.2,3.2 -2.2,4.3 v 1.2 c 0,2.4 0.8,3.6 1.7,4.9 l 0,0 z m 0.5,4 c 0,-1.1 0,-3.6 -0.5,-4 0,1.1 -0,3.6 0.5,4 z"
    }
  ];
  icn["GR.IN.IC.ADULT DAY CARE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 107,118.3 v -0.2 c 0,-15.5 22.4,-14.7 22.4,-0.6 v 1.3 c 0,5.4 -5.3,10.4 -10.8,10.4 h -0.6 c -5.9,0 -11,-5.1 -11,-11 z m -1.6,-22.2 h 4.6 v 10 c 0,0 -3.2,3.3 -3.8,4.3 -0.5,0.8 -2.2,4.7 -2.2,5.8 v 2.3 c 0,6.8 6.6,13.7 13.3,13.7 h 1 c 5.8,0 10.8,-5 11,-5 h 7.1 v -1.9 h -3.2 c 0.2,-0.5 0.8,-1.3 0.8,-1.9 v -11 c 0,-1.9 -1,-3.3 -2.1,-4 h -3.3 l -0.8,-0.7 c 1.1,-0.3 2,-0.9 2,-2.2 v -0.4 c 0,-0.5 -1,-1.7 -1.6,-1.7 h -5 v -5.4 c 0,-2.7 -1.5,-4.2 -4.2,-4.2 h -2.1 c -5.9,0 -4.6,5.8 -4.6,11.6 l -0.6,0.4 V 94.7 c -0.4,-0.2 -0.4,-0.4 -0.8,-0.4 h -5.4 v 1.7 z m -22.6,1 c 0,-2.2 3.3,-4.8 4.5,-6.6 1.4,1 1.4,1.8 3.4,2.8 1.4,0.7 2.6,1.4 4,1.9 2.4,0.9 2.2,-0.1 4.3,1.9 0.9,0.9 1.8,2.5 3.5,2.5 0.4,0 0.8,-0.8 0.8,-1.3 v -1.1 c 0,-2.8 -3.3,-3.6 -5.3,-4.5 -2.3,-0.9 -5.3,-1.6 -6.1,-3.8 -0.8,-2.3 -2.2,-4.6 -2.9,-6.9 -0.7,-2.1 -1.9,-5.1 -4.6,-5.1 h -0.4 c -3,0 -7.4,7.5 -8.1,10.4 -0.6,2.3 -1.6,4.7 -2.1,7.2 -0.5,2.8 -0.6,5.2 -1.1,8 -0.3,1.8 0.1,2.3 -0.6,4 -0.4,1.2 -0.8,2.3 -1.2,3.4 -0.9,2.3 -1.7,4.6 -2.5,6.8 -0.8,2.1 -4.9,11.8 -4.9,13.5 0,2.6 6.2,1.3 7.7,1.1 -0,-1.9 -2.3,-1.6 -3.1,-2.7 2.1,-3.1 3.8,-6.3 5.8,-9.5 1,-1.7 4.6,-9.2 5.4,-9.8 0.6,0.4 3,3.1 3.8,3.9 1.9,1.9 2,1.8 2.8,4.8 1.1,4.2 1.9,7.7 1.9,13.1 l 1.7,0.2 4.2,-0 c 1.3,0 1.8,-0.2 2.3,-1 -0.6,-1 -3.1,-1.7 -4.6,-2.1 v -1.1 c 0,-0.4 -0.1,-0.4 -0.4,-0.8 v -12.1 c -1.5,-2.3 -2.9,-4.9 -4.6,-7.1 -1.1,-1.6 -3.8,-5.2 -3.8,-7.6 v -2.5 l 0,0 z m 30.3,-9.7 v 1.6 c 0,1.5 2.3,3.9 4.2,3.9 h 0.8 c 2.1,0 4.2,-2.3 4.2,-4.5 V 87.6 c 0,-2.2 -2.2,-4.2 -4.5,-4.2 h -0.1 c -2.3,-0 -4.6,2 -4.6,4 z m -28.4,-15.6 v 1.7 c 0,0.6 1,2.1 1.4,2.5 0.6,0.6 1.8,1.2 2.9,1.2 h 1 c 2,0 4.2,-2.2 4.2,-4 v -1.4 c 0,-1.6 -2.5,-3.9 -4.5,-3.9 h -0.7 c -1.8,0 -4.2,2.2 -4.2,3.9 z"
    }
  ];
  icn["GR.IN.IC.AGRICULTURE AND FOOD INFRASTRUCTURE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 79.5,127.9 h -7.8 v -21.4 c 0,-1 6.8,-13.3 7.4,-13.6 1,-0.6 13.9,-7.1 14.1,-7.1 0.5,0 13.2,6.3 14.4,7 0.4,0.3 7.7,13.1 7.7,13.7 v 21.4 h -7.6 V 110.4 H 79.5 v 17.5 z m 37.4,-39.4 h 15.4 v 39.8 h -12.1 v -18.8 h 2.6 c -0.5,-0.8 -5.8,-9.8 -5.8,-10 V 88.5 z m 0.2,-1.9 c 0,-4.4 2.9,-8.2 7.2,-8.2 h 0.4 c 4.5,0 7.6,3.7 7.6,8.2 h -15.2 v 0 z M 105.2,82.1 h 8.9 c -0.2,1.6 -0.9,2.5 -0.9,5 0,2 0,3.9 0,5.8 -1.4,-1 -0.9,-2.8 -3.2,-4 -1.2,-0.6 -3.8,-2 -4.8,-2.3 v -4.6 z m 0,-2.8 c 0,-2.8 3.8,-7.4 6.9,-7.4 h 0.6 c 3.1,0 5.5,1.8 6.7,3.7 -0.2,0.2 -4.8,4.3 -4.8,4.3 h -9.5 v -0.6 z m -11.9,1.5 c -3.2,1.7 -6.6,3.2 -9.9,4.8 -1.7,0.9 -3.3,1.5 -5,2.4 -2.8,1.4 -2.3,0.7 -4,3.1 -0.9,1.3 -1.8,3.2 -2.7,4.7 -0.9,1.6 -1.9,3 -2.8,4.6 -1.6,2.9 -3.6,6.5 -5.4,9.1 h 2.8 v 22.5 H 84 V 114.7 h 19 v 17.3 h 33.3 V 87.5 c 0,-7.5 -4.2,-13 -11.7,-13 h -1.7 c -0.8,-2.9 -5.9,-6.5 -10,-6.5 h -0.4 c -6.4,0 -11,5.9 -11,12.1 v 4.6 l -8.2,-3.9 0,0 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 79.5,110.4 h 28.1 v 17.5 h 7.6 v -21.4 c 0,-0.6 -7.2,-13.4 -7.7,-13.7 -1.1,-0.8 -13.8,-7.1 -14.4,-7.1 -0.1,0 -13,6.5 -14.1,7.1 -0.6,0.4 -7.3,12.6 -7.3,13.6 v 21.4 h 7.8 v -17.5 z m 37.4,-10.8 c 0,0.1 5.3,9.2 5.8,10 h -2.6 v 18.8 h 12.1 v -39.8 h -15.4 v 11 z m 0.2,-13 h 15.1 c 0,-4.6 -3,-8.2 -7.6,-8.2 h -0.4 c -4.2,-0 -7.2,3.8 -7.2,8.2 z m -11.9,0 c 1.1,0.2 3.6,1.7 4.8,2.3 2.2,1.1 1.7,3 3.2,3.9 0,-2 0,-3.9 0,-5.8 0,-2.5 0.7,-3.4 0.9,-5 h -8.9 v 4.6 z m 0,-7.4 v 0.6 h 9.5 c 0,0 4.6,-4.1 4.8,-4.3 -1.2,-1.8 -3.6,-3.7 -6.7,-3.7 h -0.6 c -3.1,0 -6.9,4.6 -6.9,7.4 z"
    }
  ];
  icn["GR.IN.IC.AGRICULTURAL LABORATORY"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 98.4,77.9 -0.1,0.3 2.6,0.6 0,-0.3 z m 2.1,7.3 0.4,-3.2 -0.3,-0.1 -0.4,3.2 z m -3.8,-16.8 0.1,-0.2 -1.4,-0.3 1,-2.6 -0.4,-0.3 -1.7,5.7 0.1,0 0.3,-0.1 0.7,-2.4 z m -1,5.3 c 0.8,0 0.5,-1.7 0.8,-2.3 l -0.4,-0.1 -0.4,2.4 z m 1.4,-5.5 0.6,-2.6 -0.4,-0.1 -0.6,2.7 z m 0.2,-2.7 0.1,-0.3 -1,-0.2 -0.1,0.2 z m 11.8,65.6 0,5.6 3.3,0 c 1.1,0 1.9,-0.2 2.4,-0.7 0.5,-0.5 0.8,-1.2 0.8,-2.1 -10e-6,-0.9 -0.3,-1.6 -0.8,-2.1 -0.5,-0.5 -1.3,-0.7 -2.4,-0.7 l -3.3,0 m 0,-6.2 0,4.6 3,0 c 1,0 1.7,-0.2 2.2,-0.6 0.5,-0.4 0.7,-1 0.7,-1.7 -10e-6,-0.8 -0.2,-1.3 -0.7,-1.7 -0.5,-0.4 -1.2,-0.6 -2.2,-0.6 l -3,0 m -2.1,-1.7 5.2,0 c 1.6,1e-5 2.8,0.3 3.6,1 0.8,0.7 1.3,1.6 1.3,2.8 -2e-5,0.9 -0.2,1.7 -0.7,2.2 -0.4,0.5 -1.1,0.9 -1.9,1 1,0.2 1.8,0.7 2.3,1.4 0.6,0.7 0.8,1.5 0.8,2.6 -1e-5,1.4 -0.5,2.4 -1.4,3.1 -0.9,0.7 -2.2,1.1 -3.9,1.1 l -5.4,0 0,-15.2 m -9.2,2 -2.8,7.5 5.6,0 -2.8,-7.5 m -1.2,-2 2.3,0 5.8,15.2 -2.1,0 -1.4,-3.9 -6.8,0 -1.4,3.9 -2.2,0 5.8,-15.2 m -16,0 2.1,0 0,13.4 7.4,0 0,1.7 -9.4,0 0,-15.2 M 98.6,92.5 c 0.9,-0.2 0.8,-1.8 1.1,-2.6 l 0.9,0.4 -1.4,4.2 -0.6,-2 z m -0.2,-0.4 0.1,0.2 c -0.5,-0.1 -0.8,-1.3 -0.8,-1.9 l 0.4,0.6 -0.3,-2.2 1.6,0.8 c -0,0.7 -0.4,2.3 -0.9,2.4 z m -0.9,-2.3 -0.6,-1.4 c 0.4,0.1 0.6,0.3 0.6,0.9 v 0.5 z m 2.6,-4.4 -0.6,3.9 -1.7,-0.8 v -3.4 -0.3 l 2.3,0.6 z m -2.6,-1.1 0.4,0.1 v 0.4 h -0.4 v 3.5 l -0.8,-0.4 0.1,0.4 h -0.2 c 0,-0.9 -1.2,-2.8 -1.6,-3.5 0.1,-0.1 0.1,-0.1 0.1,-0.4 v -0.4 l 2.4,0.6 0,-0.4 z m 6.1,-1.7 2.5,0.6 v 0.4 c 0,0.2 0,0.2 0.1,0.3 -1.2,0 -1.9,0.4 -2.8,0.8 l 0.2,-2 z m -6.1,1.7 -2.4,-0.8 0.1,-1.8 v -1 l 2.4,0.5 -0.2,3 z m 8.6,-1.6 c -0.3,0 -2.3,-0.4 -2.4,-0.6 0,0 0.2,-2.3 0.2,-2.7 l 2.2,0.4 0.1,1.6 -0,1.2 z m -12.7,-2.4 c 0.4,0 0.7,0.2 1.1,0.2 0.8,0.2 0.4,0.1 0.4,0.7 v 2.1 c -0.3,-0 -0.7,-0.2 -1,-0.3 -0.7,-0.2 -0.5,0.1 -0.5,-0.4 v -2.4 z m 10.7,-4.2 1.7,0.4 0.3,3 -2.2,-0.4 0.2,-3 z m -6.4,5.2 v -0.4 l -2.4,-0.5 0.3,-2.8 2.4,0.5 -0.2,2.9 h 0.3 v 0.4 h -0.3 z m -4,-4.2 1.6,0.4 -0.3,2.9 -1.5,-0.4 0.2,-2.9 z m 7.6,1.4 0.3,-3.1 2.4,0.6 -0.3,3 -2.4,-0.5 z m -0.4,-0.1 0.4,0.1 v 0.4 c 0.4,0 2.3,0.4 2.4,0.6 0,0.1 -0.2,2.3 -0.2,2.6 -0.8,0 -1.6,-0.4 -2.3,-0.4 -0.2,0 -0.2,0.2 -0.2,0.4 l 2.4,0.5 -0.2,2.2 h 0.2 c -0.5,0.7 -1.1,1.6 -1.4,2.4 -0.3,0.8 -0.7,2.1 -1.1,2.8 l -0.9,-0.4 0.6,-4 h -0.2 l -0.2,-0.1 v -0.4 l -2.3,-0.7 0.2,-3 2.5,0.5 v -0.3 h 0.4 l 0.2,-2.8 h -0.3 l -0.3,2.7 -2.4,-0.4 0.2,-2.9 c -0.3,-0.1 -0.2,0 -0.3,-0.4 h 0.2 l 0.2,0.1 0.4,-3.2 2.4,0.6 -0.3,3.1 z m 3.2,-5.4 v -0.3 l 0.3,0.1 v 0.3 c 1,0.1 1.1,0.1 1.2,1 0,0.3 0.2,1.8 0.3,1.9 l -1.7,-0.3 v 0.4 h -0.3 v -0.5 l -2.4,-0.6 0.3,-2.5 2.3,0.4 z m 0.2,-0.2 0.2,-2.9 c 0.6,0.1 0.7,2.4 0.8,3.1 l -1,-0.2 z m -5.1,-0.9 2.4,0.5 -0.3,2.6 -2.4,-0.6 0.4,-2.5 z m 4.9,0.8 c -3.3,-0.8 -2,0 -2,-3.3 l 2.2,0.4 -0.2,2.9 z m -4.4,-3.8 c 3.2,0.8 1.9,-0.2 1.9,3.2 l -2.3,-0.5 0.4,-2.7 z m -2.5,-0.4 2.1,0.4 -0.4,2.7 -2.2,-0.4 0.4,-2.6 z m 7.1,1.3 v -0.4 l -2.2,-0.4 0.2,-2.6 c 0.3,0 0.7,0.1 1.1,0.2 0.6,0.1 0.5,0 0.7,0.6 0.3,1 0.3,0.9 0.3,2.2 l 0.3,0.4 -0.4,0.1 z m -4.1,-3.9 1.8,0.4 -0.2,2.6 -2.1,-0.4 0.4,-2.6 z m 2.3,-2.2 1.4,2.6 -1.5,-0.2 0.1,-2.4 z m -1.6,-1.6 0,-0.1 1.2,1.2 -0.1,0 c 0.3,-0.1 0.3,-0.1 0.4,0.3 l -0.2,-0.2 -0.2,2.6 -1.8,-0.4 0.7,-3.5 z m -2.9,3 c 0.5,-1.1 0.3,-3.4 1.9,-3.4 0.3,0 0.2,0 0.5,0.1 l -0.6,3.7 -1.8,-0.4 z m -0.4,-0.1 0.4,0.1 v 0.3 l 1.8,0.4 -0.4,2.6 -2.1,-0.4 v 0.2 l -0.1,0.2 -0.2,-0.1 h -0.2 l -0.5,2.6 -1.6,-0.3 v 0.3 c 0.5,0 1,0.3 1.4,0.3 0.2,0 0,-0.2 0.5,-0.2 v 0.4 l 2.2,0.4 -0.3,2.4 -2.4,-0.6 v 0.4 l 2.3,0.6 -0.3,3.1 -2.4,-0.6 0.4,-3.2 h -0.4 c -0,0.8 -0.3,1.7 -0.3,2.4 -0,0.8 -0,0.7 -0.7,0.5 -0.2,-0 -0.9,-0.1 -0.9,-0.3 -0,-0.3 0.2,-2 0.3,-2.4 0.2,-1.2 0.5,-0.4 1.7,-0.3 l 0.1,-0.3 c -0.2,-0.1 -1.6,-0.3 -1.6,-0.5 0,-0.8 0.4,-1.5 0.4,-2.3 -0.6,0.1 -0.7,2.3 -0.8,3 -0.1,0.8 -0.4,2.6 -0.4,3.3 0,0.8 -0.2,2.4 -0.2,3.5 0,1.3 -0.1,2.4 -0.1,3.8 h 0.3 v -0.9 l 1.5,0.4 v 1 l -3.4,-0.5 h -0.1 c -5,0 -8.8,9.7 -8.8,15.4 0,2.3 0.8,5.4 2,6.2 0.7,-1.4 1.3,-3.1 2,-4.6 0.8,-1.5 1.4,-3.1 2.1,-4.6 0.3,-0.7 0.7,-1.5 1,-2.2 0.4,-0.8 0.8,-1.5 1.8,-1.2 0.9,0.3 1.9,3.2 2.1,4.6 0.5,3.8 0,9 0.6,12.6 0.7,4 2.3,6.4 5.4,8 1,-0.4 2.5,-0.6 3.4,-1.2 0.9,-0.6 1.8,-1.2 2.4,-2.2 1.2,-1.8 2,-4.1 2,-7.2 l 0,-0.6 -0.3,-5.6 v -0.3 c 0,-2.7 0.5,-8.3 2.8,-8.3 h 0.1 c 1.4,0 2,0.6 2.6,1.4 0.6,0.8 1.2,1.4 1.8,2.2 1.2,1.5 2.6,2.9 2.6,5.5 v 0.6 l 0.4,0.1 c 0.4,-1.6 1.8,-2.8 1.8,-5.2 v -1.5 c 0,-3.5 -1.4,-6.2 -3,-8.3 -0.8,-1.1 -1.8,-2 -2.8,-2.8 -0.7,-0.5 -2.7,-1.9 -3.8,-1.9 l -0.8,-0 -2.3,0.4 c -0.2,-0.8 0.1,-2 -0.1,-3.1 -0.1,-0.8 -0.2,-2.5 -0.2,-3.3 -0.2,-2.1 -0.5,-4.2 -0.9,-6.1 -0.6,-3.3 -2,-8.2 -4.6,-9.4 v 0.3 l -0.4,-0.1 0.1,-0.3 -0.8,-0.1 c -0.9,-0.1 -1.9,0.8 -2.3,1.3 -0.2,0.3 -1.7,2 -0.8,2 0.2,-0.6 1.3,-2.2 1.8,-2.4 l -0.8,2.7 z m 3,20.4 1.6,0.5 0.2,-0 c -0.1,-0.5 -1.4,-0.6 -1.8,-0.8 v 0.4 z m 3.6,-9.8 0.2,-2.6 -0.2,-0.1 -0.2,2.6 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 98.6,92.5 0.6,2 1.4,-4.2 -0.9,-0.4 c -0.3,0.7 -0.2,2.3 -1.1,2.6 z m -0.6,-1.4 -0.3,-0.6 c 0,0.6 0.4,1.8 0.8,1.9 l -0.1,-0.2 c 0.6,-0.2 0.9,-1.8 1,-2.4 l -1.6,-0.8 0.2,2.2 z m 2.4,-5.9 c 0.4,0.2 1.7,0.3 1.8,0.8 l -0.2,0 -1.6,-0.5 -0.6,4 0.9,0.5 c 0.4,-0.7 0.8,-2 1.1,-2.8 0.4,-0.8 1,-1.7 1.4,-2.4 h -0.2 l 0.2,-2.3 -2.4,-0.5 -0.4,3.2 z m -1,4.1 0.6,-3.9 -2.3,-0.6 0,0.2 0,3.4 z m 0.6,-4.2 0.4,-3.2 -2.5,-0.5 -0.2,3 z m 0.7,-6.6 0.3,-3.1 -2.4,-0.6 -0.4,3.2 z m -5.1,-4.8 -0.1,0.3 c -1.2,-0 -1.5,-0.9 -1.7,0.3 -0.1,0.4 -0.3,2.1 -0.3,2.4 0,0.2 0.7,0.2 1,0.3 0.7,0.2 0.7,0.2 0.7,-0.5 0,-0.8 0.3,-1.7 0.4,-2.4 h 0.4 l -0.4,3.2 2.4,0.6 0.4,-3.2 -2.3,-0.5 v -0.4 l 2.3,0.6 0.3,-2.4 -2.2,-0.4 c -0.3,0.6 0,2.3 -0.8,2.3 z m 8.3,-1 0.2,-2.9 -2.2,-0.4 c 0,3.4 -1.3,2.6 2,3.3 z m -6.2,11.7 -0.4,-0.1 v 0.4 l -2.4,-0.6 v 0.4 c 0,0.2 -0,0.2 -0.1,0.4 0.4,0.7 1.6,2.6 1.6,3.5 h 0.2 l -0.1,-0.4 0.8,0.4 v -3.5 h 0.4 l -0,-0.4 0,0 z m -0.3,5.4 0,-0.6 c 0,-0.5 -0.2,-0.8 -0.6,-0.9 l 0.6,1.4 z m 2.6,-4.8 0,0.4 0.2,0.1 0.2,0 0,-0.3 z m 3.3,-0.4 c 0.8,-0.4 1.5,-0.8 2.8,-0.8 -0.1,-0.1 -0.1,-0.1 -0.1,-0.2 v -0.4 l -2.5,-0.6 -0.2,2 z m -8.3,-1.1 2.4,0.8 0.2,-3 -2.5,-0.5 0,1 z m -1.8,-0.8 c 0,0.5 -0.2,0.2 0.5,0.4 0.3,0.1 0.6,0.2 1,0.3 v -2.1 c 0,-0.7 0.4,-0.6 -0.4,-0.7 -0.4,-0.1 -0.7,-0.2 -1.1,-0.2 v 2.4 z m 7.5,-4 h 0.3 l -0.2,2.8 h -0.4 v 0.4 l 0.3,0.1 c 0,-0.2 0,-0.4 0.2,-0.4 0.7,0 1.6,0.4 2.3,0.4 0,-0.3 0.3,-2.5 0.2,-2.6 -0,-0.2 -2,-0.6 -2.3,-0.6 v -0.4 l -0.4,-0.1 v 0.3 z m 3.3,-8.9 0.4,-0 -0.3,-0.4 c 0,-1.3 -0,-1.2 -0.3,-2.2 -0.2,-0.6 -0,-0.5 -0.7,-0.6 -0.4,-0.1 -0.8,-0.2 -1.1,-0.2 l -0.2,2.6 2.2,0.4 v 0.4 z m -2.4,-0.9 0.2,-2.6 -1.8,-0.4 -0.4,2.6 z m 4.4,13.8 0,-1.2 -0.1,-1.6 -2.2,-0.4 c 0,0.4 -0.2,2.7 -0.2,2.7 0.1,0.2 2.2,0.6 2.4,0.6 z m -7.8,-4.6 -0.2,2.9 2.4,0.4 0.3,-2.7 z m -0.2,3.2 0,-0.4 -0.3,0 0.2,-2.9 -2.3,-0.5 -0.3,2.8 2.4,0.5 0,0.4 z m -3.1,-1 0.3,-2.9 -1.6,-0.4 -0.2,2.9 z m 11.1,-0.8 -0.3,-3 -1.7,-0.4 -0.2,3 z m -2,-6.6 -2.3,-0.4 -0.3,2.5 2.4,0.6 z m -0.4,6 0.2,-3 -2.4,-0.6 -0.2,3.1 z m -2.4,-4 0.3,-2.6 -2.3,-0.5 -0.3,2.5 z m -2.9,3.2 0.1,-0.3 -0.2,-0.1 h -0.2 c 0,0.4 -0.1,0.3 0.2,0.4 z m 5.8,-2.4 1.7,0.3 c -0.1,-0.2 -0.2,-1.6 -0.3,-1.9 -0.1,-1 -0.2,-1 -1.2,-1 l -0.2,2.6 z m 0,0.3 0,-0.3 -0.3,-0.1 0,0.4 z m 0.2,-3 0,-0.3 -0.2,-0.1 0,0.3 z m 0,-0.3 1,0.2 c -0.1,-0.6 -0.2,-3 -0.8,-3 l -0.2,2.9 z m -5.1,-1.1 2.3,0.5 c 0,-3.4 1.3,-2.5 -1.9,-3.2 l -0.4,2.7 z m -2.5,-0.6 2.2,0.4 0.4,-2.7 -2.1,-0.4 z m 1.1,-5.6 -0.6,2.6 2.1,0.4 0.4,-2.6 -1.8,-0.4 0,-0.3 -0.4,-0.1 -0.1,0.3 z m -0.6,2.8 0,-0.2 -0.4,0 -0.1,0.2 0.2,0 0.2,0.1 z m 0.2,-2.9 -1,-0.2 -1,2.6 1.4,0.3 z m 4.8,0.7 1.5,0.2 -1.4,-2.6 z m -2.1,-0.4 1.8,0.4 0.2,-2.6 0.2,0.2 c -0,-0.4 -0,-0.3 -0.4,-0.3 l 0.1,-0.1 -1.2,-1.1 -0.1,0.1 -0.7,3.5 z m -2.2,-0.4 1.8,0.4 0.6,-3.7 c -0.4,-0 -0.2,-0.1 -0.6,-0.1 -1.6,0 -1.4,2.3 -1.9,3.4 z"
    }
  ];
  icn["GR.IN.IC.ANIMAL FEEDLOT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 121.6,107.1 -0.4,-2.3 -0.2,-2 h 16.3 l -1.7,13.2 h -13 v -0.6 l -1,-8.2 z m 16.1,4.3 0.4,-2.3 0.9,-6.2 -0.1,-1.6 h -19.6 l 1.4,10.7 0.3,0.6 0.5,4.3 -0.1,0.6 h 15.7 v -1.6 l 0.6,-4.6 z M 123,82.6 c -3.3,-0.8 -4.6,0.4 -6.8,1.9 h -1.4 c -0.3,0.4 -0.6,1.2 -1.2,1.2 h -1 c -2.2,0 -3.9,-1.8 -5.8,-1.8 h -0.6 c -0.9,0 -2.1,0.8 -3.9,0.8 -5.1,0 -3.9,0.2 -8,1.5 -2,0.6 -6.2,0.8 -8.9,0.8 h -5.2 c -2.8,0 -5,-0.6 -7.2,-0.6 -2.6,0 -4.7,0.2 -7.4,0.2 -0.5,0 -0.5,-0.1 -0.8,-0.2 -2.4,1.2 -3.1,4.2 -3.1,7.8 0,3.6 -0.6,6.3 -0.6,10.1 v 0.2 c 0,0.6 0.1,0.6 0.2,1 l 1,-0.3 0,-0.5 h 0.4 l 0.2,-12.2 h 0.2 c 0,2 0.1,4.5 0.6,6 0.4,1.2 1.7,3.8 1.7,4.9 v 0.2 l -1.6,13.2 h 3.7 c 0,-1.4 -0.4,-1.1 -0.4,-2.1 v -2.1 c 0,-1.4 1,-4.2 2.3,-4.3 0.4,1.5 3.3,3.7 3.3,6.8 v 0.6 c 0,0.6 -0.1,0.6 -0.2,1 0.4,-0.1 0.5,-0.2 1,-0.2 1.2,0 3.5,0.7 3.5,-0.4 0,-0.3 -1.9,-3.2 -2.2,-3.5 -0.4,-0.5 -1.3,-3.6 -1.3,-4.3 v -0.2 c 0,-0.2 1.2,-2.3 1.2,-4.8 4,2.2 3.5,2.7 9.9,2.7 2.2,0 4.2,0.5 6,0.4 1,-0 3.3,-1.4 4.3,-1.9 0,1.2 0.4,2.4 0.2,3.3 l -1.2,8 c 1,0.3 1.6,0.6 2.8,0.6 h 0.6 -0.2 l 0.7,-11.3 c 0.6,0.4 2.8,7.1 2.6,8.4 l -0.3,2.3 c 0.8,0.4 1.5,0.6 2.6,0.6 h 1 l -1.2,-7.4 -0.1,-0.8 c 0,-0.9 1.6,-0.7 2.5,-1.2 0.6,-0.3 1.4,-1.2 1.8,-1.7 1.1,-1.5 2,-2.7 3,-4.2 3.9,-5.4 3.5,-2.4 10.2,-4 v -0.6 h 1.6 c 1,0 1.8,-0.8 1.8,-1.8 v -0.4 c 0,-2.4 -2.5,-2.5 -2.5,-5.6 l -3.3,-3.4 5.4,-2.9 z m 14.6,28.9 c 0.4,-0.4 0.4,-1.5 0.4,-2.3 l -0.4,2.3 z m -16.1,-4.3 c 0,-0.8 0,-1.9 -0.4,-2.3 l 0.4,2.3 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 121.2,104.9 c 0.4,0.4 0.4,1.5 0.4,2.3 l 1,8.2 v 0.6 h 13 l 1.7,-13.2 h -16.3 l 0.2,2.1 z"
    }
  ];
  icn["GR.I.FF.SATELLITE"] = [
    {
      type: "path",
      stroke: !numberSIDC ? iconColor : false,
      fill: numberSIDC ? iconColor : false,
      d:
        "m 115,70 20,0 0,55 -20,0 z m -25,5 20,0 0,45 -20,0 z m -25,-5 20,0 0,55 -20,0 z"
    },
    {
      type: "path",
      fill: false,
      d: "m 110,100 5,0 m -30,0 5,0 m 10,27 0,-7 m -20,15 c 10,-10 30,-10 40,0"
    }
  ];
  icn["GR.IN.IC.FARM/RANCH"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 119.9,119 v -0.2 c 0,-2 1.5,-3.7 3.5,-3.7 h 0.4 c 2.2,0 3.7,1.6 3.7,4 v 0.6 c 0,1.2 -2.1,2.8 -3.7,2.8 h -0.4 c -1.9,0 -3.5,-1.6 -3.5,-3.5 z m -52,-10.7 c 1.3,-2 1.1,-2.7 3.2,-4.4 1.3,-1 3.3,-1.9 5.5,-1.9 h 0.6 c 4.7,0 9,4.1 9,8.8 v 1.1 c 0,5 -4,9.2 -8.8,9.2 H 76.9 c -5.4,0 -9.4,-4.2 -9.4,-9.6 0,-1.4 0.4,-1.6 0.4,-3 l 0,0 z m 7.9,-20.2 c -0.8,0 -1.5,-4.4 -1.8,-5.3 -0.2,-1 -1.3,-4.6 -1.3,-5.5 h 24.1 c 0.5,0 1.3,-0.8 1.3,-1.3 v -2.2 c 0,-0.7 -0.8,-1.1 -1.5,-1.1 h -31.8 c -0.7,0 -1.5,0.4 -1.5,1.1 v 2.2 c 0,0.5 0.8,1.3 1.3,1.3 h 3.5 l 2.6,16 -6.8,2.5 2.8,3.4 c -1,1.3 -2.3,2.1 -3.6,4.2 -0.4,0.8 -1.9,4.4 -1.9,5.5 v 2.2 c 0,5.4 1.6,8.8 4.3,11.5 2.3,2.3 6.5,4.8 11,4.8 h 0.4 c 8.8,0 15.8,-7.4 15.8,-16 h 13.4 c 0.6,0 1.9,1.4 2.4,1.8 h 8.6 c -1.1,1.6 -2.2,2.9 -2.2,5.7 0,4.6 3.9,8.6 8.6,8.6 4.4,0 8.8,-3.8 8.8,-7.9 v -2 c 0,-1.2 -1.5,-3.4 -2,-4.4 h 7.2 l 1,-4.6 h -7.2 v -0.6 l 1.2,-8.1 -0.1,-3.3 c 0,-0.6 -1.7,-2.1 -2.2,-2.4 l -16,-0.5 V 78.2 c 0,-0.5 -0.4,-0.9 -0.9,-0.9 -0.5,0 -0.9,0.4 -0.9,0.9 v 15.4 c -2.2,-0.2 -6,-0.4 -8.1,-0.4 -1.3,0 -2.9,0.1 -4.2,0 -2.1,-0.1 -2,-1.3 -2.9,-1.3 h -4.6 l 2,12.3 H 91.1 V 98.6 C 91.1,97.8 87.1,94.4 86.1,94.4 H 78.7 V 89.8 L 77.5,88.1 75.8,88 z M 88.1,92 c 0,0.5 0.1,0.2 0.2,0.9 h 0.6 c 0.9,0 8.5,-6.4 10.1,-6.8 V 85.4 c 0,-0.5 -0.2,-0.6 -0.6,-0.6 h -0.4 C 97.5,84.7 88.1,91.6 88.1,92 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 119.9,119 c 0,1.9 1.6,3.5 3.5,3.5 h 0.4 c 1.6,0 3.7,-1.6 3.7,-2.8 v -0.7 c 0,-2.3 -1.5,-4 -3.7,-4 h -0.4 c -2,0 -3.5,1.7 -3.5,3.7 v 0.2 z m -52,-10.7 c 0,1.4 -0.4,1.7 -0.4,3.1 0,5.4 4.1,9.6 9.4,9.6 h 0.6 c 4.8,0 8.8,-4.3 8.8,-9.2 v -1.1 c 0,-4.7 -4.3,-8.8 -9,-8.8 h -0.6 c -2.2,0 -4.3,0.9 -5.5,1.9 -2.2,1.7 -1.9,2.4 -3.2,4.4 z"
    }
  ];
  icn["GR.IN.IC.GRAIN STORAGE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 122.8,69.6 c 0.4,0.1 0.9,0.5 1.3,1 0.4,0.5 0.8,1.2 1.3,2 l 2.1,4.1 -2.2,0 -1.9,-3.9 c -0.5,-1 -1,-1.7 -1.5,-2 -0.5,-0.3 -1.1,-0.5 -1.9,-0.5 l -2.2,0 0,6.4 -2.1,0 0,-15.2 4.6,0 c 1.7,1.5e-5 3,0.4 3.9,1.1 0.9,0.7 1.3,1.8 1.3,3.3 -1e-5,1 -0.2,1.7 -0.7,2.4 -0.4,0.6 -1.1,1.1 -1.9,1.3 m -5.1,-6.4 0,5.4 2.6,0 c 1,8e-6 1.7,-0.2 2.2,-0.7 0.5,-0.5 0.8,-1.1 0.8,-2 -1e-5,-0.9 -0.3,-1.6 -0.8,-2 -0.5,-0.5 -1.2,-0.7 -2.2,-0.7 l -2.6,0 m -12.3,-0.3 c -1.5,1.4e-5 -2.7,0.6 -3.6,1.7 -0.9,1.1 -1.3,2.6 -1.3,4.5 0,1.9 0.4,3.4 1.3,4.5 0.9,1.1 2.1,1.7 3.6,1.7 1.5,1e-6 2.7,-0.6 3.5,-1.7 0.9,-1.1 1.3,-2.6 1.3,-4.5 -2e-5,-1.9 -0.4,-3.4 -1.3,-4.5 -0.9,-1.1 -2,-1.7 -3.5,-1.7 m 0,-1.7 c 2.1,1.6e-5 3.8,0.7 5.1,2.1 1.3,1.4 1.9,3.3 1.9,5.7 -2e-5,2.4 -0.6,4.3 -1.9,5.7 -1.3,1.4 -3,2.1 -5.1,2.1 -2.1,0 -3.8,-0.7 -5.1,-2.1 -1.3,-1.4 -1.9,-3.3 -1.9,-5.7 -10e-7,-2.4 0.6,-4.3 1.9,-5.7 1.3,-1.4 3,-2.1 5.1,-2.1 m -21,0.3 12.8,0 0,1.7 -5.4,0 0,13.4 -2.1,0 0,-13.4 -5.4,0 0,-1.7 m -2,0.5 0,2 c -0.8,-0.4 -1.5,-0.6 -2.2,-0.8 -0.7,-0.2 -1.4,-0.3 -2,-0.3 -1.1,1.4e-5 -2,0.2 -2.6,0.7 -0.6,0.4 -0.9,1 -0.9,1.8 -4e-6,0.7 0.2,1.2 0.6,1.5 0.4,0.3 1.2,0.6 2.3,0.8 l 1.2,0.3 c 1.5,0.3 2.7,0.8 3.4,1.5 0.7,0.7 1.1,1.7 1.1,2.9 -1.2e-5,1.5 -0.5,2.6 -1.5,3.3 -1,0.8 -2.4,1.1 -4.3,1.1 -0.7,0 -1.5,-0.1 -2.3,-0.2 -0.8,-0.2 -1.6,-0.4 -2.5,-0.7 l 0,-2.1 c 0.8,0.5 1.6,0.8 2.4,1.1 0.8,0.2 1.6,0.4 2.4,0.4 1.2,1e-6 2.1,-0.2 2.7,-0.7 0.6,-0.5 1,-1.1 1,-2 -10e-6,-0.7 -0.2,-1.3 -0.7,-1.7 -0.5,-0.4 -1.2,-0.7 -2.2,-0.9 l -1.2,-0.2 c -1.5,-0.3 -2.6,-0.8 -3.3,-1.4 -0.7,-0.6 -1,-1.6 -1,-2.7 -10e-7,-1.3 0.5,-2.4 1.4,-3.2 0.9,-0.8 2.3,-1.2 3.9,-1.2 0.7,1.6e-5 1.4,0.1 2.2,0.2 0.7,0.1 1.5,0.3 2.3,0.6 m 24.4,48.1 -0.2,2.4 h 0.4 l -1.7,3 -1,-1.7 -0.1,2 0.5,0.6 -1.2,3 -1.5,-3 0.4,3.6 0.8,0.2 -3.1,9.7 -0.5,-4.2 0.1,-1.8 c 0,-1.5 0.8,-4.7 1,-6.3 0.3,-1.7 1.3,-4.5 1.4,-6 0.6,0.1 0.4,0.2 0.8,0.2 0.4,0 2.3,-1.5 2.6,-1.8 l -3,0.6 0.8,-2.7 c 0.6,0.1 0.4,0.2 0.8,0.2 0.4,0 2.6,-1.7 2.8,-2 l -3,0.8 0.7,-2.4 c 1.3,0 2.1,-0.8 2.8,-1.4 l -2.4,0.4 0.8,-2 c 1.1,-0 1.5,-0.9 1.8,-1.8 l -1.3,0.7 2.3,-6.1 -0.8,-0.1 -2.1,5.9 -0.3,0 -0.5,-2.1 -0.1,-0 c 0,1.5 -0.4,1.6 -0.4,2.4 0,0.5 0.2,0.5 0.6,0.6 l -0.9,2.1 -1,-1.4 c -0.1,1.6 -0.4,1.9 0.7,2.4 l -0.8,2.4 -1.7,-2.2 0.4,2.8 0.6,0.5 -0.5,2.7 -1.5,-1.9 0.2,2.4 0.9,0.5 c 0,0.4 -1,4.6 -1.2,6 -0.4,2.3 -0.9,3.5 -0.9,6.3 l -1.2,-3.6 0.6,-0.8 -0,-2 -1.2,1.2 -0.8,-2.8 0.6,-0.8 -0,-2 -1.1,1.2 -0.7,-1.7 c 1,-0.5 1,-1.6 1,-3.2 l -1.3,2.1 c -0.7,-0.2 -1.1,-1.4 -1.3,-2.3 0.3,-0.4 0.6,-0.5 0.6,-1 v -1.6 h -0.4 l -0.7,1.8 c -0.2,-0.2 -0.7,-0.7 -0.7,-1.2 0,-0.4 0.6,-0.3 0.6,-1 v -0.2 c 0,-1.1 -0.4,-1.1 -0.4,-2.4 l -0.7,2.3 -0.3,0 -2.8,-5.9 -0.4,0.2 2.5,5.7 -1.3,-0.7 1,1.9 1,0 0.6,1 -2.6,-0.4 c 0.4,0.4 1.7,1.4 2.4,1.4 0.1,0 0.4,-0.1 0.6,-0.2 l 1,2.2 -3.2,-0.6 c 1.1,1 2,1.7 3.6,1.6 l 1.1,2.7 -2.9,-0.4 c 0.7,1 1.7,1.3 3,1.5 0.4,0.1 1.1,2.8 1.2,3.5 l -3,-0.6 2.2,1.6 h 1 c 1.2,2.3 2.4,11.9 2.4,15.8 h 1.4 l -0.2,-2.2 0,-1 c 0,-4 2.9,-9.3 3.2,-12.3 0.8,0.1 0.5,0.2 1,0.2 0.2,0 2.9,-1.2 3.2,-1.4 l -3.6,0.3 1.2,-3.1 0.8,0.4 3,-1.3 -3.2,0.2 1.4,-2.8 c 0.4,0.1 0.4,0.2 1,0.2 0.3,0 2.1,-1 2.4,-1.2 l -2.8,0.2 1.4,-2 c 1.5,0.1 1.5,-0.4 2.4,-1.6 l -1.4,0.4 c 0.5,-1.1 1.2,-2.2 1.8,-3.2 0.4,-0.6 2,-2.7 0.8,-3 l 0.2,0.1 -3.4,5.8 -0.4,-2.3 h -0.2 c 0,1.4 -0.6,1.7 -0.6,2.2 0,0.3 0.3,0.7 0.4,1 l -1.5,2 -0.7,-1.9 z m -25.4,13.5 c 0,-3.7 0.1,-9.1 0.7,-12.4 0.4,-2 0.1,-4 0.6,-6 0.4,-1.7 0.4,-4.2 0.8,-5.8 2.8,-10.1 1,-11.8 14.3,-11.8 h 4.4 c 11.6,0 12.6,1.2 14.2,11.3 1.2,7.6 2,14.6 2,23.6 v 8.3 l -0.4,3.6 c -1.1,1.6 -2.1,3.4 -4.9,3.4 H 86.7 c -5.4,0 -5.3,-6.4 -5.3,-11.9 v -2.4 z m -5.8,-32.5 c 2.1,-0.6 0.4,-1.3 4.4,-1 2.4,0.2 3,0.3 5,0.8 -0.7,1.1 -4.6,3 -6.5,3 h -0.4 c -0.9,0 -2.4,-1.2 -2.4,-2 v -0.8 h -0 z m 43.2,-1.5 c 2.2,-0.2 4.8,0.9 4.8,3.1 v 0.6 c 0,0.6 -0.6,0.8 -1.2,0.8 h -0.6 c -1.8,0 -6.2,-2.7 -6.9,-3.9 l 4,-0.6 z m -36.6,-6.7 c 0,-1 1,-2.2 1.8,-2.2 h 0.6 c 0.6,0 1.4,1.6 1.4,2.2 v 4.2 c 0,1.3 -0.4,1.5 -0.4,2.8 -1,-0.3 -3.4,-4.3 -3.4,-5.5 v -1.4 h -0 z m 31.7,2.8 c 0,-2.8 -0,-5.2 2.8,-5.2 h 0.6 c 0.6,0 1,0.7 1,1.4 0,2 -3,6.8 -4.4,7.3 v -3.6 h -0 z m 1.4,3.8 c 0.5,-1.8 3.8,-5 3.8,-7.1 v -1.4 c -0.6,-0.3 -0.7,-1.2 -1.6,-1.2 h -0.6 c -2.6,0 -3.8,2 -3.8,4.5 v 4.2 c -2,-0.5 -2.3,-1 -5.2,-1.2 -2,-0.2 -3.7,-0.4 -6,-0.4 h -3.6 c -4.8,0 -8.9,0.3 -12.1,2 0.2,-0.7 0.4,-0.9 0.4,-1.8 v -3.4 c 0,-1.4 -1,-3.8 -2.2,-3.8 h -0.8 c -0.8,0 -2.6,1.9 -2.6,3 0,2 2.1,5.5 3,6.8 l -5.7,-0.5 c -1.2,0 -3.4,1.1 -3.4,2.1 v 0.6 c 0,1.3 1.7,2.8 3,2.8 h 0.2 c 2.9,0 4.5,-2 6.3,-2.4 -1.9,3.5 -3.8,22 -3.8,28.1 v 6 c 0,5.9 0.3,12.3 6.1,12.3 h 26.1 c 4.1,0 6.1,-3.8 6.1,-7.9 v -10.5 c 0,-2.3 -0.2,-5.5 -0.4,-7.7 -0.2,-1.8 -0.8,-5.7 -0.8,-7.4 0,-2.6 -0.7,-4.7 -1,-7.1 -0.2,-2.1 -1.3,-4.3 -1.8,-6.2 1.2,0.6 4.9,3 6.1,3 h 1.2 c 1,0 1.8,-0.8 1.8,-1.8 v -0.2 c 0,-2.2 -1.5,-3.8 -3.8,-3.8 h -2.6 l -2.8,0.4 z m -28.1,0.6 c 0.5,1.9 8.9,3.2 11.9,3.2 h 1 c 3.1,0 12.5,-1.4 12.7,-3.6 -4.1,-1 -6.5,-1.8 -11.9,-1.8 h -1.4 c -2.4,0 -4.4,0.4 -6.5,0.6 -2.9,0.4 -3.8,1.1 -5.8,1.6 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 105.3,110.1 c -0.3,0.3 -2.2,1.8 -2.6,1.8 -0.4,0 -0.2,-0.1 -0.8,-0.2 0,1.5 -1.1,4.3 -1.3,6 -0.3,1.6 -1,4.8 -1,6.3 l -0.1,1.8 0.5,4.2 3.1,-9.7 -0.8,-0.2 -0.4,-3.6 1.5,3 1.2,-3 -0.5,-0.6 0.1,-2 1,1.7 1.7,-3 h -0.4 l 0.2,-2.4 -0.3,-1.2 -1.2,1.2 z m 0,0 1.2,-1.2 0.3,1.2 0.7,1.9 1.5,-2 c -0.1,-0.3 -0.4,-0.7 -0.4,-1 0,-0.5 0.6,-0.8 0.6,-2.2 h 0.2 l 0.4,2.3 3.4,-5.7 -0.2,-0.1 c 1.3,0.4 -0.4,2.4 -0.8,3 -0.6,1 -1.3,2.1 -1.8,3.2 l 1.4,-0.4 c -0.8,1.2 -0.9,1.7 -2.4,1.6 l -1.4,2 2.8,-0.2 c -0.3,0.2 -2,1.2 -2.4,1.2 -0.5,0 -0.5,-0.1 -1,-0.2 l -1.4,2.8 3.2,-0.2 -3,1.3 -0.8,-0.4 -1.2,3.1 3.6,-0.4 c -0.3,0.2 -2.9,1.4 -3.2,1.4 -0.5,0 -0.2,-0.1 -1,-0.2 -0.3,2.9 -3.2,8.2 -3.2,12.3 l -0.1,1 0.3,2.2 h -1.4 c 0,-4 -1.2,-13.6 -2.4,-15.8 h -1 l -2.2,-1.6 3,0.6 c 0,-0.7 -0.8,-3.4 -1.2,-3.5 -1.3,-0.2 -2.3,-0.5 -3,-1.5 l 2.9,0.4 -1.1,-2.8 c -1.5,0.1 -2.5,-0.6 -3.6,-1.6 l 3.2,0.6 -1.1,-2.2 c -0.2,0.1 -0.5,0.2 -0.6,0.2 -0.7,0 -2,-1 -2.4,-1.4 l 2.6,0.4 -0.6,-1 h -1 l -1,-1.9 1.3,0.7 -2.5,-5.7 0.4,-0.2 2.8,5.9 0.3,-0 0.7,-2.4 c 0,1.3 0.4,1.2 0.4,2.4 v 0.2 c 0,0.7 -0.6,0.6 -0.6,1 0,0.4 0.5,1 0.7,1.2 l 0.7,-1.8 h 0.4 v 1.6 c 0,0.5 -0.3,0.6 -0.6,1 0.2,0.9 0.5,2.1 1.3,2.3 l 1.3,-2.1 c 0,1.5 0,2.6 -1,3.2 l 0.7,1.7 1.1,-1.2 0,2 -0.6,0.8 0.8,2.8 1.2,-1.2 0,2 -0.6,0.7 1.2,3.6 c 0,-2.8 0.4,-4 0.9,-6.2 0.3,-1.3 1.3,-5.6 1.2,-6 l -0.9,-0.5 -0.2,-2.5 1.5,1.9 0.5,-2.7 -0.6,-0.5 -0.4,-2.8 1.7,2.2 0.8,-2.4 c -1,-0.5 -0.8,-0.8 -0.7,-2.4 l 1,1.4 0.9,-2.1 c -0.4,-0.1 -0.6,-0 -0.6,-0.6 0,-0.8 0.4,-0.9 0.4,-2.4 l 0.1,0 0.5,2.1 0.3,-0 2.1,-5.9 0.8,0.1 -2.3,6.1 1.3,-0.7 c -0.2,0.9 -0.6,1.8 -1.8,1.8 l -0.8,2 2.4,-0.4 c -0.7,0.6 -1.5,1.4 -2.8,1.4 l -0.7,2.4 3,-0.8 c -0.2,0.3 -2.4,2 -2.8,2 -0.4,0 -0.2,-0.1 -0.8,-0.2 l -0.8,2.7 3,-0.5 z M 87.1,90.1 c 2,-0.5 2.9,-1.2 5.8,-1.6 2.1,-0.3 4.1,-0.6 6.5,-0.6 h 1.4 c 5.4,0 7.8,0.8 11.9,1.8 -0.2,2.2 -9.6,3.6 -12.7,3.6 h -1 c -3,0 -11.4,-1.3 -11.9,-3.2 z m -5.8,33.5 v 2.4 c 0,5.5 -0.1,11.9 5.3,11.9 h 26.4 c 2.8,0 3.8,-1.7 4.9,-3.4 l 0.4,-3.6 v -8.3 c 0,-9 -0.8,-15.9 -2,-23.6 -1.6,-10.1 -2.6,-11.3 -14.2,-11.3 h -4.4 c -13.3,0 -11.6,1.7 -14.3,11.8 -0.4,1.6 -0.4,4 -0.8,5.8 -0.5,2 -0.2,3.9 -0.6,6 -0.6,3.3 -0.7,8.6 -0.7,12.4 z M 114.8,90.2 c 0.7,1.2 5.2,3.9 6.9,3.9 h 0.6 c 0.6,0 1.2,-0.2 1.2,-0.8 v -0.6 c 0,-2.2 -2.6,-3.3 -4.8,-3.1 l -4,0.6 0,0 z m -39.2,0.9 v 0.8 c 0,0.8 1.4,2 2.4,2 h 0.4 c 2,0 5.8,-1.9 6.5,-3 -2,-0.4 -2.6,-0.6 -5,-0.8 -3.8,-0.3 -2.1,0.4 -4.3,1 z m 38.3,-5.3 v 3.6 c 1.3,-0.5 4.4,-5.3 4.4,-7.3 0,-0.7 -0.4,-1.4 -1,-1.4 h -0.6 c -2.8,-0 -2.8,2.4 -2.8,5.1 z m -31.7,-2.8 v 1.4 c 0,1.3 2.4,5.3 3.4,5.5 0,-1.3 0.4,-1.5 0.4,-2.8 v -4.2 c 0,-0.6 -0.8,-2.2 -1.4,-2.2 h -0.6 c -0.8,0 -1.8,1.3 -1.8,2.2 z"
    }
  ];
  icn["GR.IN.IC.ATM"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 73.6,116.3 c 5.1,-0.1 15.8,-6.6 17,-6.6 0.4,0 7.4,3.8 8.9,4.2 -0.4,0.6 -5.1,4.6 -6.2,5.7 -1.2,1.2 -4.7,5.8 -5.5,6.4 -1.6,-0.8 -14,-8.9 -14.2,-9.6 z m -15.1,-6.2 11.9,-2.5 11.1,5.6 -9.6,3 16.2,10.7 -0,-0.2 6.4,-7.5 26.9,12.7 20.3,-46.8 -50.2,-17.2 c -0.6,2.2 -5.2,9.1 -6.5,11.8 -0.8,1.8 -2.3,4.4 -3.3,6 -1.2,1.8 -2.2,4.1 -3.3,6 -1.2,2 -2.1,3.8 -3.3,5.8 -1.2,1.9 -2.1,4.2 -3.3,6 -2.4,3.6 -0.2,2.7 -5.5,3.7 -2.6,0.5 -5.2,1 -7.7,1.6 m 62,21.5 -25.2,-11.8 4.8,-4 7.3,3.5 1.2,-2.4 -23.9,-11.7 v 0.2 l -1,2.2 6,2.9 -6.2,3.4 -11.8,-5.8 -0.2,0 20.7,-37 0.2,0.1 47.4,16.1 h 0.2 l -19.4,44.2 z m 7.8,-31.3 1.1,-2 -5.8,-2.3 -0.8,2.3 z m -2.7,5.2 1.2,-1.9 -5.6,-2.3 -0.8,2.2 z m -22,-7.3 c 0.6,0.4 2.1,1.4 2.1,2.1 v 2.4 c 0,0.8 -1.7,1.5 -2.6,1.5 h -0.2 c -0.8,0 -1,-0.2 -1.7,-0.4 l 2.4,-5.7 z m -3.4,-6.4 c 0,-2.2 1.1,-2.8 3.2,-2.8 h 0.2 c 0.7,0 1,0.2 1.5,0.4 l -2.2,5.1 c -0.9,-0 -2.8,-1.2 -2.8,-2.4 v -0.2 z m 5.6,-4.2 c -0.3,-0.1 -1.2,-0.5 -1.6,-0.5 h -1.9 c -0.7,0 -2.5,0.6 -2.9,0.9 -0.3,0.2 -1.4,2.1 -1.4,2.5 v 1.7 c 0,2.1 3.8,4.2 3.8,4.9 0,0.4 -2.2,4.6 -2.4,5.7 -0.6,-0.3 -2.5,-1.8 -2.5,-2.6 v -0.6 c 0,-0.8 0.6,-1.4 0.8,-2.1 -0.9,-0.2 -2,-1.1 -2.4,-1.2 -0.4,-0.1 -1,1.7 -1,2.3 v 0.4 c 0,2.7 4.2,5.4 4.2,5.7 0,0.6 -0.4,1.4 -0.5,2 l 1.7,0.8 0.6,-1.7 c 1.4,0 2,0.8 3.6,0.8 h 0.6 c 1.4,0 2.6,-0.5 3.2,-1.3 0.3,-0.4 1.5,-2.4 1.5,-3 v -0.4 c 0,-2.6 -2.8,-4.8 -4.4,-5.9 l 2.5,-5.6 h 0.4 c 0.4,1.2 1.5,0.6 1.5,3.6 l 2.8,1.2 v -1.7 c 0,-2 -2,-4.1 -3.8,-4.6 l 0.8,-2.1 -2.1,-0.5 -0.8,1.5 z m 13,18.4 -0.9,2 5.4,2.2 -0,-0.2 1.2,-1.8 z m -22.4,-25.2 26.1,9.5 -11,24.1 -26.7,-12.8 11.6,-20.8 z m -12.5,21.2 27.8,13.4 11.7,-25.7 c -1,-0.1 -11.8,-4.2 -13.4,-4.8 -1.2,-0.5 -13.3,-5 -13.5,-5 -0.9,0 -5.4,9.5 -6.4,10.8 -0.8,1.3 -5.9,10.3 -6.1,11.2 z m 31.7,11.2 5.4,2.2 -0.1,-0.2 1.3,-1.8 c -1.1,-0.2 -5,-2.2 -5.5,-2.2 -0.4,0 -1.1,1.6 -1.2,2.1 z m -25.8,0.6 4.3,2.9 -6,5.8 -6,-4.1 7.7,-4.6 z m -9.1,4.5 7.4,4.9 7.1,-6.6 c -0.5,-0.4 -5.3,-3.6 -5.4,-3.6 -1,0 -7.6,4.9 -9.1,5.3 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 115.7,111.8 c 0,-0.5 0.8,-2.1 1.2,-2.1 0.5,0 4.4,2 5.5,2.3 l -1.3,1.8 0.1,0.2 -5.4,-2.2 z m 3.2,-7.1 5.7,2.2 -1.2,1.8 0,0.2 -5.4,-2.2 0.9,-2 z m 2.4,-4.8 5.6,2.3 -1.2,1.9 -5.2,-2 0.8,-2.2 z m 2.5,-5.3 5.8,2.3 -1.1,2 -5.5,-2 0.8,-2.3 z m -39.7,6 c 0.2,-1 5.3,-10 6.1,-11.2 0.9,-1.4 5.4,-10.8 6.4,-10.8 0.2,0 12.3,4.5 13.5,5 1.7,0.7 12.5,4.8 13.5,4.8 l -11.7,25.7 -27.8,-13.4 z m 55.9,-14.6 h -0.2 l -47.4,-16.1 -0.2,-0.1 -20.7,37 0.2,-0 11.8,5.8 6.3,-3.4 -6,-2.9 1,-2.2 v -0.2 l 23.9,11.7 -1.2,2.4 -7.3,-3.5 -4.8,4 25.2,11.8 19.4,-44.2 0,0 z m -59.1,30.9 c 1.5,-0.4 8,-5.3 9.1,-5.3 0.2,0 4.9,3.2 5.5,3.6 l -7.2,6.6 -7.4,-4.9 z m -7.2,-0.6 c 0.2,0.8 12.6,8.8 14.2,9.6 0.8,-0.6 4.3,-5.2 5.5,-6.4 1.1,-1.1 5.8,-5.1 6.2,-5.7 -1.6,-0.3 -8.5,-4.1 -8.9,-4.1 -1.2,0 -11.9,6.5 -17,6.6 z m 26.6,-25.9 v 0.2 c 0,1.2 1.8,2.4 2.7,2.4 l 2.2,-5 c -0.4,-0.2 -0.8,-0.4 -1.5,-0.4 h -0.2 c -2.1,0 -3.2,0.7 -3.2,2.8 z m 0.9,12.1 c 0.7,0.2 0.9,0.4 1.7,0.4 h 0.2 c 1,0 2.6,-0.7 2.6,-1.5 v -2.4 c 0,-0.7 -1.6,-1.7 -2.1,-2.1 l -2.4,5.6 z m 5.5,-17.7 2.1,0.5 -0.8,2.1 c 1.8,0.4 3.8,2.5 3.8,4.6 v 1.7 l -2.8,-1.1 c 0,-3 -1.1,-2.4 -1.5,-3.6 h -0.4 l -2.5,5.6 c 1.6,1.1 4.4,3.3 4.4,5.9 v 0.4 c 0,0.6 -1.2,2.6 -1.5,3 -0.6,0.8 -1.8,1.3 -3.2,1.3 h -0.6 c -1.6,0 -2.2,-0.7 -3.6,-0.8 l -0.6,1.7 -1.7,-0.8 c 0.1,-0.6 0.5,-1.4 0.5,-2 0,-0.3 -4.2,-2.9 -4.2,-5.7 v -0.4 c 0,-0.6 0.6,-2.4 1,-2.4 0.4,0.1 1.4,1 2.4,1.2 -0.2,0.7 -0.7,1.3 -0.7,2.1 v 0.6 c 0,0.8 1.8,2.3 2.4,2.6 0.2,-1 2.4,-5.3 2.4,-5.7 0,-0.7 -3.8,-2.8 -3.8,-4.9 V 89.1 c 0,-0.4 1.1,-2.3 1.4,-2.5 0.4,-0.3 2.2,-0.9 2.9,-0.9 h 1.9 c 0.4,0 1.4,0.4 1.6,0.5 l 0.8,-1.4 z m -21.8,15.4 26.6,12.9 11,-24.1 -26,-9.5 -11.6,20.8 z m 5,12.1 -7.7,4.6 6,4.1 6,-5.8 z"
    }
  ];
  icn["GR.IN.IC.BANK"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 100.8,110.6 c 2.4,0 5.3,1.9 5.3,4.4 v 0.7 c 0,3.1 -2.1,4.9 -5.3,4.9 v -9.9 z m -6.6,-8.8 c 0,-2.3 1.7,-4.4 4,-4.4 h 0.7 v 9 c -1.9,-0.4 -4.6,-1.6 -4.6,-3.7 v -0.9 z m 6.6,-4.4 c 2.2,0 4.6,1.6 4.6,3.5 v 0.9 h 3.5 c 0,-5.3 -3.7,-6.7 -8.1,-7.7 v -2.4 h -2 v 2.4 c -3.9,0 -8.2,3.5 -8.2,7 v 2.6 c 0,1.3 2,3.6 3,4.2 1,0.6 3.8,1.8 5.1,1.9 v 10.6 c -3.4,-0.1 -5.2,-2.6 -5.2,-6.1 h -3.3 l 0.2,3.5 c 1.1,1.7 0.9,2.8 2.9,4.1 1.3,0.8 3.4,1.6 5.5,1.6 v 4 h 2 v -3.9 c 4.9,0 9,-3.4 9,-8.1 v -1.8 c 0,-4.2 -5.4,-6 -9,-6.8 v -9.4 z m -25.3,15.2 v -2.4 c 0,-2.2 2.6,-7.4 3.1,-9.4 0.7,-2.7 3.1,-5.9 4.7,-8 3.5,-4.6 8.5,-8.9 16.5,-8.9 h 4.4 c 3.4,0 8.8,4.3 10.4,6.5 1.3,1.7 2.2,3.1 3.4,5 0.5,0.7 2.7,5.2 2.7,5.9 v 0.7 h 0.4 v 0.7 c 0,0.4 0.9,1.5 0.8,3.1 l 0.5,0.7 c 0,2 1.1,6.8 1.3,9 0.4,3.2 1.3,5.6 -0.7,8.5 0,2.4 -5.2,8.7 -6.2,8.8 l -9.2,-1.5 c -1.8,-0.3 -6.8,2 -9.2,2 -2,0 -5.6,-1.7 -7.5,-1.7 -1.6,0 -3.2,1.3 -5.5,1.3 h -0.6 c -1.9,0 -5.9,-6.1 -7,-7.7 -1.8,-2.6 -2.4,-8 -2.4,-12.3 z m 30.7,-31 -6.1,-1.1 c -0.8,-0.1 -5.2,1.1 -5.8,1.3 l -6.3,-11.5 1.7,0.5 v -2.9 l 8.9,3.4 0.3,-3.5 3.2,2.5 5.7,-2.6 v 2.6 l 7.5,-1.4 -9.3,13 0,0 z m 11.8,-14.5 -9.1,1.6 v -2.8 c -0.9,0.5 -5.7,2.9 -6.6,2.9 -0.1,0 -3.4,-2.6 -4,-2.9 l -0.7,4 -8.8,-3.6 v 2.9 l -3.1,-1 8.1,15.1 -0.2,0.1 c -4.6,1.1 -10.3,6.8 -12.7,10.4 -0.8,1.1 -1.3,2.6 -2,3.7 -1.4,1.8 -0.9,2.5 -1.7,4 -0.6,1.1 -2.9,7.2 -2.9,8.6 v 3.7 c 0,1 0.7,5.8 1,6.7 0.4,1.4 0.4,2 0.8,3.2 0.3,0.9 0.9,1.6 1.4,2.3 1.3,2 4.8,7.5 7.6,7.5 2.5,0 4.3,-1.3 5.7,-1.3 2.3,0 5.2,1.7 7.3,1.7 h 0.7 c 2,0 5.7,-1.4 8,-1.9 1.8,-0.3 5.9,1 8.5,1 h 1.7 c 1.7,0 4.8,-4.2 5.8,-5.5 1.1,-1.4 1.3,-2.2 1.7,-4 0.1,-0.4 1.1,-4.3 1.1,-4.4 0,-3 -0.9,-4.1 -1.1,-5.9 -0.2,-2.4 -0.4,-4 -0.7,-6.1 -0.2,-1.7 -2.8,-8.6 -3.6,-10.3 -2.4,-4.9 -7.7,-13.2 -14,-13.7 l 11.7,-16.2 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 100.8,120.4 c 3.2,0 5.3,-1.7 5.3,-4.9 v -0.6 c 0,-2.5 -2.9,-4.3 -5.3,-4.4 v 9.8 z m -6.6,-18.7 v 0.9 c 0,2.2 2.8,3.3 4.6,3.7 v -9 h -0.7 c -2.3,0 -4,2 -4,4.4 z m 6.6,5 c 3.6,0.8 9,2.6 9,6.8 v 1.7 c 0,4.7 -4.1,8.1 -9,8.1 v 4 h -2 v -3.9 c -2,0 -4.2,-0.7 -5.5,-1.6 -2,-1.3 -1.7,-2.5 -2.9,-4.2 l -0.2,-3.5 h 3.3 c 0,3.5 1.8,6.1 5.3,6.2 v -10.6 c -1.3,-0.1 -4.1,-1.3 -5.1,-2 -1,-0.6 -3,-3 -3,-4.2 v -2.6 c 0,-3.5 4.2,-7 8.1,-7 v -2.4 h 2 v 2.4 c 4.4,1 8.1,2.3 8.1,7.7 h -3.5 v -0.9 c 0,-1.9 -2.5,-3.5 -4.6,-3.5 v 9.5 l 0,0 z m -25.3,5.8 c 0,4.3 0.6,9.8 2.4,12.3 1.1,1.6 5.1,7.7 7,7.7 h 0.7 c 2.3,0 3.9,-1.3 5.5,-1.3 1.9,0 5.5,1.7 7.5,1.7 2.5,0 7.4,-2.3 9.2,-2 l 9.1,1.5 c 1,0 6.2,-6.4 6.2,-8.8 2,-2.9 1,-5.3 0.7,-8.6 -0.2,-2.2 -1.3,-6.9 -1.3,-9 l -0.5,-0.6 c 0.1,-1.6 -0.8,-2.7 -0.8,-3.1 v -0.7 h -0.4 v -0.7 c 0,-0.7 -2.2,-5.2 -2.7,-5.9 -1.1,-1.9 -2.1,-3.2 -3.4,-5 -1.6,-2.2 -7,-6.5 -10.4,-6.5 h -4.4 c -8,0 -13,4.4 -16.5,8.9 -1.6,2.1 -4,5.3 -4.7,8 -0.5,2 -3.1,7.2 -3.1,9.4 v 2.4 z m 40,-44 -7.4,1.5 v -2.6 l -5.8,2.6 -3.2,-2.4 -0.3,3.5 -8.9,-3.4 v 2.9 l -1.7,-0.5 6.3,11.5 c 0.5,-0.2 5,-1.4 5.8,-1.3 l 6.1,1.1 9.3,-13 0,0 z"
    }
  ];
  icn["GR.IN.IC.BULLION STORAGE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 123.1,77.9 c 0.4,0.1 0.9,0.5 1.3,1 0.4,0.5 0.8,1.2 1.3,2 l 2.1,4.1 -2.2,0 -1.9,-3.9 c -0.5,-1 -1,-1.7 -1.5,-2 -0.5,-0.3 -1.1,-0.5 -1.9,-0.5 l -2.2,0 0,6.4 -2.1,0 0,-15.2 4.6,0 c 1.7,1.5e-5 3,0.4 3.9,1.1 0.9,0.7 1.3,1.8 1.3,3.3 -1e-5,1 -0.2,1.7 -0.7,2.4 -0.4,0.6 -1.1,1.1 -1.9,1.3 m -5.1,-6.4 0,5.4 2.6,0 c 1,8e-6 1.7,-0.2 2.2,-0.7 0.5,-0.5 0.8,-1.1 0.8,-2 -1e-5,-0.9 -0.3,-1.6 -0.8,-2 -0.5,-0.5 -1.2,-0.7 -2.2,-0.7 l -2.6,0 m -12.3,-0.3 c -1.5,1.4e-5 -2.7,0.6 -3.6,1.7 -0.9,1.1 -1.3,2.6 -1.3,4.5 -10e-6,1.9 0.4,3.4 1.3,4.5 0.9,1.1 2.1,1.7 3.6,1.7 1.5,10e-7 2.7,-0.6 3.5,-1.7 0.9,-1.1 1.3,-2.6 1.3,-4.5 -1e-5,-1.9 -0.4,-3.4 -1.3,-4.5 -0.9,-1.1 -2,-1.7 -3.5,-1.7 m 0,-1.7 c 2.1,1.5e-5 3.8,0.7 5.1,2.1 1.3,1.4 1.9,3.3 1.9,5.7 -1e-5,2.4 -0.6,4.3 -1.9,5.7 -1.3,1.4 -3,2.1 -5.1,2.1 -2.1,0 -3.8,-0.7 -5.1,-2.1 -1.3,-1.4 -1.9,-3.3 -1.9,-5.7 -10e-7,-2.4 0.6,-4.3 1.9,-5.7 1.3,-1.4 3,-2.1 5.1,-2.1 m -21,0.3 12.8,0 0,1.7 -5.4,0 0,13.4 -2.1,0 0,-13.4 -5.4,0 0,-1.7 m -2,0.5 0,2 c -0.8,-0.4 -1.5,-0.6 -2.2,-0.8 -0.7,-0.2 -1.4,-0.3 -2,-0.3 -1.1,1.4e-5 -2,0.2 -2.6,0.7 -0.6,0.4 -0.9,1 -0.9,1.8 -3e-6,0.7 0.2,1.2 0.6,1.5 0.4,0.3 1.2,0.6 2.3,0.8 l 1.2,0.3 c 1.5,0.3 2.7,0.8 3.4,1.5 0.7,0.7 1.1,1.7 1.1,2.9 -1.2e-5,1.5 -0.5,2.6 -1.5,3.3 -1,0.8 -2.4,1.1 -4.3,1.1 -0.7,0 -1.5,-0.1 -2.3,-0.2 -0.8,-0.2 -1.6,-0.4 -2.5,-0.7 l 0,-2.1 c 0.8,0.5 1.6,0.8 2.4,1.1 0.8,0.2 1.6,0.4 2.4,0.4 1.2,10e-7 2.1,-0.2 2.7,-0.7 0.6,-0.5 1,-1.1 1,-2 -1e-5,-0.7 -0.2,-1.3 -0.7,-1.7 -0.5,-0.4 -1.2,-0.7 -2.2,-0.9 l -1.2,-0.2 c -1.5,-0.3 -2.6,-0.8 -3.3,-1.4 -0.7,-0.6 -1,-1.6 -1,-2.7 -2e-6,-1.3 0.5,-2.4 1.4,-3.2 0.9,-0.8 2.3,-1.2 3.9,-1.2 0.7,1.5e-5 1.4,0.1 2.2,0.2 0.7,0.1 1.5,0.3 2.3,0.6 M 103.6,119.3 h 9.6 c 0.4,0 9,9.2 9.6,10.1 H 95.6 c 0.2,-1 7.4,-10.1 8,-10.1 z m -29.2,0 h 9.9 c 0.6,0 8.2,9 8.9,10.1 H 65.9 c 0.3,-1 7.8,-10.1 8.4,-10.1 l 0,0 z m 11.5,0 h 15.4 l -6.9,9.9 -8.5,-9.9 z m -5.5,-1 c 0.7,-1.1 7.6,-9.4 8.4,-9.4 h 9.2 c 0.7,0 8.9,8.5 9.2,9.4 H 80.4 z m 43.7,10.8 -9.5,-10.4 10.4,-14.3 9.7,8.5 -10.7,16.1 0,0 z m -4.8,-24.8 4.8,-0 -10.5,14.1 -4.1,-0.1 9.8,-13.9 z m -31.1,-0.2 2.8,0.1 c -1.1,1.6 -4.6,4.9 -6.2,6.8 -1.7,2.1 -4.2,5.1 -5.6,7.2 l -4.2,-0.1 13.2,-14.1 z m 21.1,-8.6 c 0.9,0.6 9,8.2 9,8.5 0,0.1 -9.3,13.6 -9.9,14 l -8.9,-9.9 9.8,-12.6 z M 89.1,108 c 0.9,-1.3 11.4,-12.6 12.1,-12.6 h 6.8 l -9.5,12.5 -9.4,0 z m 2.9,-4.6 h -4.6 c -1.2,1.8 -4.3,4.9 -6,6.6 -2.1,2.1 -3.9,4.4 -6,6.5 -1.3,1.3 -11.2,12.8 -11.4,13.7 0.5,0.1 0.5,0.2 1.2,0.2 l 59.3,-0 11.6,-17.5 -0.3,0.1 -10.5,-9.6 h -5.8 c -1.5,-1 -9.6,-8.9 -10.4,-8.9 h -8.2 c -0.9,0 -7.6,8 -9,8.9 l 0,0 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 103.6,119.3 c -0.5,0 -7.7,9.2 -8,10.1 h 27.3 c -0.6,-1 -9.2,-10.1 -9.6,-10.1 h -9.6 z m -29.2,0 c -0.6,0 -8.2,9.1 -8.4,10.1 h 27.3 c -0.7,-1.1 -8.3,-10.1 -8.9,-10.1 H 74.3 l 0,0 z m 50.7,-14.7 -10.4,14.3 9.5,10.4 10.7,-16.1 z m -30.7,24.7 6.9,-9.9 -15.4,0 z m 5.1,-21.1 8.9,9.9 c 0.6,-0.4 9.9,-13.9 9.9,-14 0,-0.3 -8.1,-7.9 -9,-8.5 l -9.9,12.6 z m -19.1,10.2 h 26.8 c -0.2,-0.9 -8.5,-9.4 -9.2,-9.4 h -9.2 c -0.9,0 -7.7,8.3 -8.4,9.4 z m 33.2,0.1 10.5,-14.1 -4.8,0 -9.8,13.9 z m -38.6,-0.2 4.2,0.1 c 1.4,-2.1 3.9,-5.1 5.6,-7.2 1.6,-1.9 5.1,-5.2 6.2,-6.8 l -2.8,-0.1 -13.2,14.1 z m 14.1,-10.3 9.4,-0 9.5,-12.5 h -6.7 c -0.7,0 -11.2,11.2 -12.1,12.6 z"
    }
  ];
  icn["GR.IN.IC.FEDERAL RESERVE BANK"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 65.6,125.4 h 68.8 v 4.4 H 65.6 v -4.4 z m 58.1,-31.3 h 5.3 v 29.9 h -5.3 v -29.9 z m -10.6,0 h 5.1 v 29.9 h -5.1 v -29.9 z m -31.3,0 h 5.3 v 29.9 H 81.8 v -29.9 z m -10.6,0 h 5.1 v 29.9 h -5.1 v -29.9 z m 27.7,1.5 h 2 v 1.4 h 0.5 c 2.9,0 6,2.3 6,5.3 l -2.9,0.4 c -0.2,-0 -1,-1.9 -1.4,-2.4 -0.4,-0.5 -1.5,-1.1 -2.3,-1.2 v 7.8 c 3,0.3 7.3,2.3 7.3,5.3 v 1.1 c 0,4 -3.4,6.7 -7.3,6.7 v 2.5 h -2 v -2.5 c -1.7,-0 -4.1,-0.8 -5.1,-1.7 -0.8,-0.7 -2.4,-2.8 -2.4,-4.1 v -0.9 l 3.1,-0.5 c 0,2.3 2,4.9 4.4,4.9 v -8.6 c -2.3,-0 -6.9,-2.5 -6.9,-5.1 v -1.8 c 0,-3 3.2,-5.3 6.2,-5.3 h 0.7 v -1.4 z m -33.3,-7.5 h 68.8 v 4.6 H 65.6 v -4.6 z M 100,70.3 c 0.7,0.6 6.5,3.4 7.9,4.1 2.7,1.4 5.2,2.7 7.9,4.1 2.7,1.3 5.3,2.7 7.9,4.1 1.1,0.6 7.7,3.6 8.1,4 H 68.5 l 31.5,-16.1 0,0 z m -35.9,17.1 v 6 c 0,0.4 0.3,0.7 0.7,0.7 h 4.9 v 29.9 h -5.6 v 7.4 h 71.7 v -7.4 h -5.5 v -29.9 h 4.9 c 0.4,0 0.5,-0.1 0.5,-0.5 v -6.7 c -2,-0.7 -6.7,-3.4 -8.9,-4.6 -3,-1.5 -5.9,-3 -8.9,-4.6 -1.7,-0.8 -17.8,-9.1 -17.9,-9.1 -0.4,0 -16.3,8.2 -18.1,9.2 -1.9,1 -17.8,8.7 -17.8,9.6 l 0,0 0,0 z m 36.7,30.4 c 1.7,0 4,-2 4,-3.5 v -1.4 c 0,-2.1 -2.3,-2.7 -4,-3.1 v 8 z m -5.6,-14 c 0,1.6 2.2,2.6 3.6,2.7 v -7.4 c -1.3,0.3 -3.6,1.4 -3.6,2.7 v 2 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 134.4,129.8 0,-4.4 -68.8,0 0,4.4 z m -5.5,-5.8 0,-29.9 -5.3,0 0,29.9 z m -10.8,0 0,-29.9 -5.1,0 0,29.9 z m -31.1,0 0,-29.9 -5.3,0 0,29.9 z m -10.7,0 0,-29.9 -5.1,0 0,29.9 z m -7.9,-37.5 63.3,0 c -0.4,-0.3 -6.9,-3.4 -8.1,-4 -2.7,-1.3 -5.2,-2.7 -7.9,-4.1 -2.7,-1.3 -5.2,-2.7 -7.9,-4.1 -1.4,-0.7 -7.2,-3.5 -7.9,-4.1 l -31.5,16.1 0,0 z m 65.9,6.2 0,-4.6 -68.8,0 0,4.6 z m -33.5,25.1 v -8 c 1.7,0.4 4,1 4,3.1 v 1.5 c 0,1.4 -2.2,3.5 -4,3.5 z m -5.6,-14 v -2 c 0,-1.3 2.4,-2.4 3.6,-2.7 v 7.4 c -1.5,-0.1 -3.6,-1.1 -3.6,-2.7 z m 3.6,-6.7 h -0.8 c -3,0 -6.2,2.3 -6.2,5.3 v 1.8 c 0,2.5 4.6,5.1 6.9,5.1 v 8.6 c -2.4,0 -4.4,-2.5 -4.4,-4.9 l -3.1,0.5 v 0.9 c 0,1.3 1.6,3.5 2.4,4.1 1,0.8 3.3,1.6 5.1,1.7 v 2.5 h 2 v -2.5 c 3.9,0 7.3,-2.7 7.3,-6.7 v -1.1 c 0,-3 -4.3,-5 -7.3,-5.3 v -7.8 c 0.8,0.1 1.9,0.6 2.3,1.2 0.3,0.5 1.1,2.3 1.4,2.4 l 2.9,-0.4 c 0,-3 -3.1,-5.3 -6,-5.3 h -0.6 v -1.4 h -2 v 1.4 z"
    }
  ];
  icn["GR.IN.IC.FINANCIAL EXCHANGE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 133.7,124.6 0,-1.4 -66.8,0 0.3,0 0,-47 -1,0 0,48.4 z m -29.5,-8.6 -9.8,-20.8 -5.9,14.4 -5.3,-6.5 -13.3,12.4 0.9,1 v 0.2 l 12.4,-11.3 5.5,7 h 0.3 c 0,-1 2.3,-5.6 2.8,-7 0.3,-1 1.1,-2.4 1.5,-3.4 0.3,-0.8 0.9,-3.1 1.5,-3.2 l 9.4,20.3 0.1,0.2 17.4,-27.4 0.2,0.1 8,15.6 1.4,-0.5 -9.4,-18 c -0.1,0.5 -7.7,12.1 -8.7,13.6 -1,1.6 -8.2,13.2 -8.9,13.4 z m 2.8,-19.4 V 89.2 c 2.1,0 4.1,1.4 4.1,3.6 v 0.2 c 0,2.1 -1.9,3.6 -4.1,3.6 z m -4.7,-13.6 c 0,-2 1,-3.4 3,-3.4 h 0.5 v 6.6 c -1.8,-0.1 -3.4,-1.3 -3.4,-3.2 z m 3.5,-5.6 h -1 c -2.6,0 -5.2,2.9 -5.2,5.6 v 1 c 0,1.1 1.3,2.8 2.1,3.4 1.1,0.8 2.5,1.2 4,1.5 v 7.8 c -2.6,-0.6 -4.1,-1.7 -4.1,-4.8 h -2.4 l 0.2,2.5 c 0.9,1.4 0.6,2.1 2.2,3.2 1.1,0.7 2.4,1.2 4.1,1.2 v 2.8 h 1.2 v -2.8 c 3,0 6.4,-2.3 6.4,-5 v -2.5 c 0,-2.9 -4,-4.3 -6.4,-4.8 v -6.9 c 2,0 3.4,1.4 3.4,3.3 h 2.7 c 0,-3.2 -2.8,-5.5 -6.1,-5.5 V 75.4 h -1.2 v 1.9 z"
    }
  ];
  icn["GR.IN.IC.FINANCIAL SERVICES, OTHER"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 103.4,138.2 -2.7,0 -0,-8.2 c -1.9,-0 -3.8,-0.3 -5.7,-0.7 -1.9,-0.4 -3.8,-1 -5.8,-1.9 l 0,-4.9 c 1.9,1.2 3.7,2.1 5.6,2.7 1.9,0.6 3.9,0.9 5.9,0.9 l 0,-12.5 c -4,-0.7 -7,-1.8 -8.8,-3.3 -1.8,-1.6 -2.7,-3.7 -2.7,-6.5 -5e-6,-3 1,-5.3 3,-7 2,-1.7 4.8,-2.7 8.6,-3 l 0,-6.4 2.7,0 0,6.3 c 1.7,0.1 3.3,0.3 4.9,0.5 1.6,0.3 3.1,0.7 4.6,1.1 l 0,4.8 c -1.5,-0.8 -3.1,-1.4 -4.7,-1.8 -1.6,-0.4 -3.2,-0.7 -4.9,-0.7 l 0,11.7 c 4.1,0.6 7.2,1.8 9.1,3.4 2,1.6 2.9,3.9 2.9,6.7 -3e-5,3.1 -1,5.5 -3.1,7.3 -2.1,1.8 -5,2.8 -8.9,3.1 l 0,8.3 m -2.7,-29.3 0,-11.2 c -2.1,0.2 -3.7,0.8 -4.8,1.8 -1.1,1 -1.7,2.3 -1.7,3.9 -1e-5,1.6 0.5,2.8 1.5,3.7 1,0.9 2.7,1.5 5,1.9 m 2.7,5.3 0,11.8 c 2.3,-0.3 4.1,-1 5.2,-2 1.2,-1 1.8,-2.3 1.8,-4 -3e-5,-1.6 -0.6,-2.9 -1.7,-3.8 -1.1,-0.9 -2.9,-1.6 -5.3,-2.1 m 5.8,-52.2 2.1,0 0,6.2 7.5,0 0,-6.2 2.1,0 0,15.2 -2.1,0 0,-7.2 -7.5,0 0,7.2 -2.1,0 0,-15.2 m -14.8,0 12.8,0 0,1.7 -5.4,0 0,13.4 -2.1,0 0,-13.4 -5.4,0 0,-1.7 m -8.1,1.4 c -1.5,1.3e-5 -2.7,0.6 -3.6,1.7 -0.9,1.1 -1.3,2.6 -1.3,4.5 -3e-6,1.9 0.4,3.4 1.3,4.5 0.9,1.1 2.1,1.7 3.6,1.7 1.5,1e-6 2.7,-0.6 3.5,-1.7 0.9,-1.1 1.3,-2.6 1.3,-4.5 -1.3e-5,-1.9 -0.4,-3.4 -1.3,-4.5 -0.9,-1.1 -2,-1.7 -3.5,-1.7 m 0,-1.7 c 2.1,1.5e-5 3.8,0.7 5.1,2.1 1.3,1.4 1.9,3.3 1.9,5.7 -1.5e-5,2.4 -0.6,4.3 -1.9,5.7 -1.3,1.4 -3,2.1 -5.1,2.1 -2.1,-10e-7 -3.8,-0.7 -5.1,-2.1 -1.3,-1.4 -1.9,-3.3 -1.9,-5.7 -1e-6,-2.4 0.6,-4.3 1.9,-5.7 1.3,-1.4 3,-2.1 5.1,-2.1"
    }
  ];
  icn["GR.IN.IC.COMMERCIAL INFRASTRUCTURE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 101.9,123.3 -1.7,0 -0,-5 c -1.2,-0 -2.3,-0.2 -3.5,-0.4 -1.2,-0.3 -2.3,-0.6 -3.5,-1.1 l 0,-3 c 1.1,0.7 2.3,1.2 3.4,1.6 1.2,0.4 2.4,0.5 3.6,0.5 l 0,-7.6 c -2.4,-0.4 -4.2,-1.1 -5.3,-2 -1.1,-1 -1.7,-2.3 -1.7,-3.9 -2e-6,-1.8 0.6,-3.2 1.8,-4.3 1.2,-1 2.9,-1.6 5.2,-1.8 l 0,-3.9 1.7,0 0,3.9 c 1,0 2,0.2 3,0.3 1,0.2 1.9,0.4 2.8,0.7 l 0,2.9 c -0.9,-0.5 -1.9,-0.8 -2.8,-1.1 -1,-0.3 -2,-0.4 -3,-0.4 l 0,7.1 c 2.5,0.4 4.4,1.1 5.5,2.1 1.2,1 1.8,2.4 1.8,4.1 -2e-5,1.9 -0.6,3.3 -1.9,4.4 -1.3,1.1 -3.1,1.7 -5.4,1.9 l 0,5 m -1.7,-17.8 0,-6.8 c -1.3,0.1 -2.3,0.5 -2.9,1.1 -0.7,0.6 -1,1.4 -1,2.3 -6e-6,1 0.3,1.7 0.9,2.2 0.6,0.5 1.6,0.9 3,1.1 m 1.7,3.2 0,7.2 c 1.4,-0.2 2.5,-0.6 3.2,-1.2 0.7,-0.6 1.1,-1.4 1.1,-2.4 -1e-5,-1 -0.3,-1.7 -1,-2.3 -0.7,-0.6 -1.7,-1 -3.2,-1.3 M 104.5,74.8 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 70 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z m -35.7,51.6 h 62.3 V 86.9 h -6.4 V 73.5 h -7.2 v 13.4 h -7.2 V 73.5 h -7.2 V 86.9 H 68.8 v 39.5 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 101.9,108.7 0,7.2 c 1.4,-0.2 2.5,-0.6 3.2,-1.2 0.7,-0.6 1.1,-1.4 1.1,-2.4 -1e-5,-1 -0.3,-1.7 -1,-2.3 -0.7,-0.6 -1.7,-1 -3.2,-1.3 m -1.7,-3.2 0,-6.8 c -1.3,0.1 -2.3,0.5 -2.9,1.1 -0.7,0.6 -1,1.4 -1,2.3 -6e-6,1 0.3,1.7 0.9,2.2 0.6,0.5 1.6,0.9 3,1.1 m 4.3,-30.7 0,13.4 -34.6,0 0,37 60.1,0 0,-37 -6.7,0 0,-13.4 -4.5,0 0,13.4 -9.9,0 0,-13.4 -4.5,0 z m -4.3,17.6 1.7,0 0,3.8 c 1,0 2,0.2 3,0.3 1,0.2 1.9,0.4 2.8,0.7 l 0,2.9 c -0.9,-0.5 -1.9,-0.8 -2.8,-1.1 -1,-0.3 -2,-0.4 -3,-0.5 l 0,7.1 c 2.5,0.4 4.3,1.1 5.5,2.1 1.2,1 1.8,2.4 1.8,4.1 -2e-5,1.9 -0.6,3.4 -1.9,4.4 -1.3,1.1 -3.1,1.7 -5.4,1.9 l 0,5 -1.7,0 -0,-5 c -1.2,-0 -2.3,-0.2 -3.5,-0.4 -1.2,-0.3 -2.3,-0.6 -3.5,-1.1 l 0,-3 c 1.1,0.7 2.3,1.3 3.4,1.6 1.2,0.4 2.4,0.5 3.6,0.5 l 0,-7.6 c -2.4,-0.4 -4.2,-1.1 -5.3,-2 -1.1,-1 -1.7,-2.2 -1.7,-3.9 -2e-6,-1.8 0.6,-3.2 1.8,-4.3 1.2,-1 3,-1.6 5.2,-1.8 l 0,-3.9 z"
    }
  ];
  icn["GR.IN.IC.CHEMICAL PLANT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 94.4,89.6 0,0.1 c -0.5,0.1 -1,0.3 -1.4,0.6 -0.5,0.5 -0.6,1.3 -0.5,1.9 0.2,0.8 0.8,1.5 1.7,1.8 -0,0.5 -0.1,1.7 0,3 l -0.1,0 c -0,2.7 -2.3,5.7 -4.9,8.8 -2.4,3 -5,6.4 -5.3,10.4 l -0.1,0 c 0,0.1 0,0.2 0,0.2 -0,0.1 -0,0.2 -0,0.3 l 0.1,0 c 0.2,2.4 1.7,4.2 3.7,5.3 2.1,1.2 4.6,1.7 6.8,1.6 l 0,-0 8.9,0 0,0.1 c 0.3,-0 0.5,-0 0.8,-0.1 l 0.5,0 0,-0.1 c 2.1,-0.2 4.2,-0.3 6,-1 1.1,-0.4 2.1,-1.1 2.8,-2.1 0.6,-0.9 0.9,-2.1 1.1,-3.6 l 0.2,0 c 0.2,-4.4 -2.1,-7.5 -4.5,-10.3 -2.3,-2.8 -4.7,-5.5 -5.4,-9.6 0,-1.3 0.1,-3 0.1,-3.3 0.2,-0.1 0.4,-0.2 0.6,-0.3 0.5,-0.4 0.9,-1 0.9,-1.7 -0,-0.7 -0.5,-1.3 -1.1,-1.6 -0.4,-0.2 -0.9,-0.3 -1.5,-0.4 l 0,-0.1 c -0.2,0 -0.4,-0 -0.6,0 -2.5,0 -7.2,0 -8.1,0 -0.1,-2.4e-4 -0.7,0 -0.7,0 z m 0.7,2 c 0.8,0 5.5,0 8.1,0 0.6,0 0.9,0.1 1.1,0.2 -0.2,0.1 -0.5,0.3 -0.9,0.4 l -8.1,0 c -0.4,-0.1 -0.7,-0.3 -0.7,-0.4 -0,-0.1 -0,-0.1 -0,-0.1 0,-0 0.1,-0.1 0.6,-0.1 z m 1.2,2.6 6.7,0 c -0,0.7 -0.1,1.9 -0.1,3.1 -0,0.1 -0,0.2 -0,0.3 l 0.1,0 c 0.9,4.5 3.5,7.6 5.8,10.3 2.2,2.7 4,5 4,8.4 l -0.1,0 c -0,1.4 -0.4,2.4 -0.8,3 -0.4,0.7 -1,1.1 -1.8,1.4 -1.4,0.6 -3.6,0.7 -5.8,0.9 l -10.3,0 0,0 c -1.6,0 -3.6,-0.4 -5.1,-1.3 -1.6,-0.9 -2.6,-2.2 -2.7,-3.9 0.1,-3.2 2.4,-6.3 4.9,-9.4 2.4,-3 5.1,-6.1 5.3,-9.6 l 0.1,-0 c -0.1,-1 -0.1,-2.7 -0,-3.3 z m -7,19.6 v 1.9 c 0,3.5 6,4.3 9.9,4.3 h 3.2 c 2.5,0 8,-2.2 8,-4.2 v -0.8 c 0,-3.2 -6.6,-9.4 -7.3,-12.4 h -7.5 c -0.6,2.5 -6.2,10 -6.2,11.2 z m 14.8,-39 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 69.6 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z m -35.7,51.6 h 62.3 V 86.9 h -6.4 V 73.5 h -7.2 v 13.4 h -7.2 V 73.5 h -7.2 v 13.4 h -34.4 v 39.5 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "M 104.1 74.8 L 104.1 88.2 L 69.6 88.2 L 69.6 125.2 L 129.6 125.2 L 129.6 88.2 L 122.9 88.2 L 122.9 74.8 L 118.5 74.8 L 118.5 88.2 L 108.6 88.2 L 108.6 74.8 L 104.1 74.8 z M 94.4 89.6 C 94.4 89.6 95.1 89.6 95.2 89.6 C 96.1 89.6 100.8 89.6 103.3 89.6 C 103.5 89.6 103.8 89.6 103.9 89.6 L 103.9 89.7 C 104.5 89.8 105 89.9 105.4 90.1 C 106 90.4 106.5 91 106.5 91.7 C 106.5 92.4 106.1 93 105.6 93.4 C 105.4 93.5 105.2 93.6 105 93.8 C 105 94 104.9 95.7 104.9 97.1 C 105.6 101.1 108 103.8 110.3 106.7 C 112.6 109.5 114.9 112.6 114.7 117 L 114.6 116.9 C 114.4 118.4 114.1 119.6 113.5 120.5 C 112.8 121.5 111.8 122.2 110.8 122.7 C 108.9 123.4 106.8 123.5 104.8 123.7 L 104.8 123.7 L 104.3 123.7 C 104.1 123.7 103.8 123.8 103.5 123.8 L 103.5 123.7 L 94.6 123.7 L 94.6 123.8 C 92.4 123.9 89.9 123.4 87.8 122.2 C 85.9 121.1 84.3 119.2 84.1 116.8 L 84.1 116.8 C 84.1 116.7 84.1 116.6 84.1 116.5 C 84.1 116.4 84 116.4 84 116.3 L 84.1 116.3 C 84.3 112.3 86.9 109 89.4 105.9 C 91.9 102.7 94.2 99.8 94.3 97.1 L 94.3 97.1 C 94.2 95.7 94.3 94.6 94.3 94 C 93.5 93.7 92.8 93.1 92.6 92.3 C 92.4 91.6 92.6 90.9 93.1 90.4 C 93.4 90 93.9 89.8 94.4 89.7 L 94.4 89.6 z M 95.1 91.6 C 94.7 91.6 94.5 91.7 94.5 91.8 C 94.5 91.8 94.5 91.7 94.6 91.8 C 94.6 91.9 94.8 92.2 95.3 92.2 L 103.4 92.2 C 103.8 92.1 104.1 92 104.3 91.8 C 104.1 91.8 103.8 91.6 103.2 91.6 C 100.6 91.6 95.9 91.6 95.1 91.6 z M 96.3 94.2 C 96.2 94.9 96.2 96.5 96.3 97.5 L 96.2 97.6 C 96 101.1 93.4 104.2 90.9 107.2 C 88.5 110.3 86.2 113.3 86.1 116.6 C 86.2 118.3 87.2 119.5 88.8 120.5 C 90.3 121.3 92.3 121.8 93.9 121.8 L 93.9 121.7 L 104.2 121.7 C 106.5 121.5 108.6 121.4 110 120.8 C 110.8 120.5 111.4 120.1 111.8 119.4 C 112.3 118.8 112.6 117.8 112.7 116.4 L 112.7 116.4 C 112.7 113 110.9 110.6 108.7 107.9 C 106.5 105.2 103.8 102.1 103 97.6 L 102.8 97.6 C 102.8 97.5 102.9 97.4 102.9 97.3 C 102.9 96.1 102.9 94.9 103 94.2 L 96.3 94.2 z M 95.5 102.6 L 103 102.6 C 103.8 105.7 110.3 111.9 110.3 115.1 L 110.3 115.9 C 110.3 117.9 104.9 120 102.4 120 L 99.2 120 C 95.3 120 89.3 119.2 89.3 115.7 L 89.3 113.8 C 89.3 112.6 94.9 105.1 95.5 102.6 z "
    }
  ];
  icn["GR.IN.IC.FIREARMS MANUFACTURER"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 104.1,74.8 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 69.6 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z m -35.7,51.6 h 62.3 V 86.9 h -6.4 V 73.5 h -7.2 v 13.4 h -7.2 V 73.5 h -7.2 v 13.4 h -34.4 v 39.5 z m 25.8,-26.6 h 10.8 v 5.8 c -1.6,0 -4.7,1 -5.8,0.7 -1.2,-0.4 -3.8,-1.5 -5,-1.6 v -4.8 z m -19.2,0 h 16.6 v 6 c 0,0.6 3,1.4 3.7,1.7 0.4,0.1 3.9,1.4 3.9,1.5 l 7.2,-0.9 0.8,2.7 1.1,3.7 c 0.3,0.4 1,2.4 1,3.1 v 0.2 c 0,1.1 -0.6,1.9 -0.6,3.5 l 13.5,-0 -0.9,-3 -0.6,-1.7 -3,-10 c -0.2,-0.4 -0.5,-0.7 -0.5,-1.3 0,-1.3 3.9,-4.1 4.7,-5.3 l -2.7,-8.4 h -43.9 v 8.4 l 0,0 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 94.2,99.9 h 10.8 v 5.8 c -1.6,0 -4.7,1 -5.8,0.7 -1.2,-0.4 -3.8,-1.5 -5,-1.6 v -4.8 z m 9.9,-25.1 0,13.4 -34.6,0 0,37 60.1,0 0,-37 -6.7,0 0,-13.4 -4.5,0 0,13.4 -9.9,0 0,-13.4 -4.5,0 z m -29.1,16.7 43.9,0 2.7,8.4 c -0.8,1.2 -4.7,4.1 -4.7,5.3 0,0.6 0.2,0.9 0.5,1.3 l 3.1,10 0.6,1.8 0.9,3 -13.5,0 c 0,-1.6 0.7,-2.4 0.7,-3.6 l 0,-0.2 c 0,-0.7 -0.7,-2.7 -1,-3.1 L 107.2,110.8 106.4,108.1 99.2,109 c -0,-0.1 -3.6,-1.4 -3.9,-1.5 -0.7,-0.3 -3.7,-1.1 -3.7,-1.7 l 0,-5.9 -16.6,0 0,-8.4 z"
    }
  ];
  icn["GR.IN.IC.FIREARMS RETAILER"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 85.1,123 -1.1,0 -0,-3.2 c -0.8,-0 -1.5,-0.1 -2.3,-0.3 -0.8,-0.2 -1.5,-0.4 -2.3,-0.7 l 0,-1.9 c 0.7,0.5 1.5,0.8 2.2,1 0.8,0.2 1.5,0.3 2.3,0.4 l 0,-4.9 c -1.6,-0.3 -2.7,-0.7 -3.5,-1.3 -0.7,-0.6 -1.1,-1.5 -1.1,-2.5 -2e-6,-1.2 0.4,-2.1 1.2,-2.8 0.8,-0.7 1.9,-1.1 3.4,-1.2 l 0,-2.5 1.1,0 0,2.5 c 0.7,0 1.3,0.1 1.9,0.2 0.6,0.1 1.2,0.3 1.8,0.5 l 0,1.9 c -0.6,-0.3 -1.2,-0.5 -1.8,-0.7 -0.6,-0.2 -1.3,-0.3 -1.9,-0.3 l 0,4.6 c 1.6,0.3 2.8,0.7 3.6,1.3 0.8,0.6 1.1,1.5 1.1,2.6 -1.2e-5,1.2 -0.4,2.2 -1.2,2.9 -0.8,0.7 -2,1.1 -3.5,1.2 l 0,3.3 m -1.1,-11.5 0,-4.4 c -0.8,0.1 -1.5,0.3 -1.9,0.7 -0.4,0.4 -0.7,0.9 -0.7,1.5 -4e-6,0.6 0.2,1.1 0.6,1.4 0.4,0.3 1.1,0.6 2,0.7 m 1.1,2.1 0,4.7 c 0.9,-0.1 1.6,-0.4 2.1,-0.8 0.5,-0.4 0.7,-0.9 0.7,-1.6 -1e-5,-0.6 -0.2,-1.1 -0.7,-1.5 -0.4,-0.4 -1.1,-0.6 -2.1,-0.8 m 22.6,-21.9 -8,20.8 0.8,0.3 8,-20.8 -0.8,-0.3 z m -43,6.5 0,0.8 0.3,26 0,0.8 0.8,0 32.2,-0.2 0.4,0 0.2,-0.3 7.3,-8.7 0.2,-0.2 -0,-0.3 -0.2,-10.1 0,-0.4 -0.3,-0.2 -8.4,-6.6 -0.2,-0.2 -0.3,0 -31.3,-0.4 -0.8,0 z m 1.6,1.6 30.2,0.3 7.9,6.2 0.2,9.4 -6.9,8.2 -31,0.2 -0.3,-24.3 z M 97.3,85.4 h 14.4 v 7.7 c -2.1,0 -6.2,1.4 -7.8,0.9 -1.6,-0.5 -5,-2.1 -6.6,-2.2 v -6.4 z m -25.5,0 h 22.1 v 7.9 c 0,0.8 4,1.9 4.8,2.2 0.5,0.2 5.2,1.9 5.2,2 l 9.6,-1.2 1,3.6 1.4,4.9 c 0.3,0.5 1.3,3.2 1.3,4.1 v 0.2 c 0,1.5 -0.9,2.5 -0.9,4.7 h 18 l -1.1,-3.9 -0.8,-2.4 -4,-13.4 c -0.3,-0.5 -0.6,-0.9 -0.6,-1.7 0,-1.7 5.2,-5.5 6.2,-7.1 l -3.6,-11.1 H 71.8 v 11.1 l 0,0 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 85.1,113.6 0,4.7 c 0.9,-0.1 1.6,-0.4 2.1,-0.8 0.5,-0.4 0.7,-0.9 0.7,-1.6 -1e-5,-0.6 -0.2,-1.1 -0.7,-1.5 -0.4,-0.4 -1.1,-0.6 -2.1,-0.8 m -1.1,-2.1 0,-4.4 c -0.8,0.1 -1.5,0.3 -1.9,0.7 -0.4,0.4 -0.7,0.9 -0.7,1.5 -4e-6,0.6 0.2,1.1 0.6,1.4 0.4,0.3 1.1,0.6 2,0.7 M 66.4,99.8 l 0.3,24.3 31,-0.2 6.9,-8.2 -0.2,-9.4 -7.9,-6.2 -30.2,-0.3 z m 17.7,3.3 1.1,0 0,2.5 c 0.7,0 1.3,0.1 1.9,0.2 0.6,0.1 1.2,0.2 1.8,0.4 l 0,1.9 c -0.6,-0.3 -1.2,-0.5 -1.8,-0.7 -0.6,-0.2 -1.3,-0.3 -1.9,-0.3 l 0,4.6 c 1.6,0.3 2.8,0.7 3.6,1.3 0.8,0.6 1.2,1.5 1.2,2.7 -1.2e-5,1.2 -0.4,2.2 -1.2,2.9 -0.8,0.7 -2,1.1 -3.5,1.2 l 0,3.3 -1.1,0 0,-3.2 c -0.8,-0 -1.5,-0.1 -2.3,-0.3 -0.8,-0.2 -1.5,-0.4 -2.3,-0.8 l 0,-1.9 c 0.7,0.5 1.5,0.8 2.2,1.1 0.8,0.2 1.5,0.3 2.3,0.3 l 0,-4.9 c -1.6,-0.3 -2.7,-0.7 -3.5,-1.3 -0.7,-0.6 -1.1,-1.5 -1.1,-2.5 -2e-6,-1.2 0.4,-2.1 1.2,-2.8 0.8,-0.7 1.9,-1.1 3.4,-1.2 l 0,-2.5 z"
    }
  ];
  icn["GR.IN.IC.HAZARDOUS MATERIAL PRODUCTION"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 104.7,71.8 h 5 v 15 h 11.1 v -15 h 5 v 15 h 7.5 v 41.4 h -67.4 V 86.8 h 38.8 v -15 z m -40,57.9 h 69.8 V 85.5 h -7.1 v -15.2 h -8 v 15.2 h -8 v -15.2 h -8 v 15.2 h -38.6 v 44.1 l 0,0 z m 15.5,-21.8 h 38.6 l -19.3,18.6 -19.3,-18.6 z m 21.8,-16.8 c 0.5,0.4 4.3,3.8 4.3,4.3 v 12 h -4.3 V 91.1 z m -5,-0 0,16.3 h -4.3 l 0.1,-12.2 4.1,-4.1 0,0 z m -12.1,12 c 0,-0.4 3.1,-3.2 3.6,-3.6 v 7.8 h -3.6 v -4.3 z m 25.7,-3.6 3.7,3.4 c -0.2,0.4 -0.2,-0.2 -0.2,0.5 v 4 h -3.6 v -7.9 z m 9.4,8.2 -20.5,-20 -20.4,20 20.4,19.9 20.5,-19.9 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 99.5,126.5 19.3,-18.6 -38.6,0 z m 0,1 -20.4,-19.9 20.4,-20 20.5,20 -20.5,19.8 z m 5.2,-40.8 h -38.8 v 41.4 h 67.4 V 86.8 h -7.5 v -15 h -5 v 15 h -11.1 v -15 h -5 v 15 z m 5.9,20.6 h 3.6 v -4 c 0,-0.7 -0,-0.1 0.2,-0.5 l -3.7,-3.4 v 7.9 z m -8.6,0 h 4.3 v -12 c 0,-0.4 -3.8,-3.9 -4.3,-4.3 v 16.3 z m -9.3,0 4.3,0 -0,-16.3 -4.1,4.1 z m -7.8,-4.3 v 4.3 h 3.6 v -7.9 c -0.5,0.3 -3.6,3.2 -3.6,3.6 z"
    }
  ];
  icn["GR.IN.IC.HAZARDOUS MATERIAL STORAGE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 122.4,68.8 c 0.4,0.1 0.9,0.5 1.3,1 0.4,0.5 0.8,1.2 1.3,2 l 2.1,4.1 -2.2,0 -1.9,-3.9 c -0.5,-1 -1,-1.7 -1.5,-2 -0.5,-0.3 -1.1,-0.5 -1.9,-0.5 l -2.2,0 0,6.4 -2.1,0 0,-15.2 4.6,0 c 1.7,1.5e-5 3,0.4 3.9,1.1 0.9,0.7 1.3,1.8 1.3,3.3 -10e-6,1 -0.2,1.7 -0.7,2.4 -0.4,0.6 -1.1,1.1 -1.9,1.3 m -5.1,-6.4 0,5.4 2.6,0 c 1,8e-6 1.7,-0.2 2.2,-0.7 0.5,-0.5 0.8,-1.1 0.8,-2 -10e-6,-0.9 -0.3,-1.6 -0.8,-2 -0.5,-0.5 -1.2,-0.7 -2.2,-0.7 l -2.6,0 m -12.3,-0.3 c -1.5,1.4e-5 -2.7,0.6 -3.6,1.7 -0.9,1.1 -1.3,2.6 -1.3,4.5 -1e-5,1.9 0.4,3.4 1.3,4.5 0.9,1.1 2.1,1.7 3.6,1.7 1.5,1e-6 2.7,-0.6 3.5,-1.7 0.9,-1.1 1.3,-2.6 1.3,-4.5 -10e-6,-1.9 -0.4,-3.4 -1.3,-4.5 -0.9,-1.1 -2,-1.7 -3.5,-1.7 m 0,-1.7 c 2.1,1.5e-5 3.8,0.7 5.1,2.1 1.3,1.4 1.9,3.3 1.9,5.7 -10e-6,2.4 -0.6,4.3 -1.9,5.7 -1.3,1.4 -3,2.1 -5.1,2.1 -2.1,-10e-7 -3.8,-0.7 -5.1,-2.1 -1.3,-1.4 -1.9,-3.3 -1.9,-5.7 -2e-6,-2.4 0.6,-4.3 1.9,-5.7 1.3,-1.4 3,-2.1 5.1,-2.1 m -21,0.3 12.8,0 0,1.7 -5.4,0 0,13.4 -2.1,0 0,-13.4 -5.4,0 0,-1.7 m -2,0.5 0,2 c -0.8,-0.4 -1.5,-0.6 -2.2,-0.8 -0.7,-0.2 -1.4,-0.3 -2,-0.3 -1.1,1.4e-5 -2,0.2 -2.6,0.7 -0.6,0.4 -0.9,1 -0.9,1.8 -3e-6,0.7 0.2,1.2 0.6,1.5 0.4,0.3 1.2,0.6 2.3,0.8 l 1.2,0.3 c 1.5,0.3 2.7,0.8 3.4,1.5 0.7,0.7 1.1,1.7 1.1,2.9 -1.2e-5,1.5 -0.5,2.6 -1.5,3.3 -1,0.8 -2.4,1.1 -4.3,1.1 -0.7,-10e-7 -1.5,-0.1 -2.3,-0.2 -0.8,-0.2 -1.6,-0.4 -2.5,-0.7 l 0,-2.1 c 0.8,0.5 1.6,0.8 2.4,1.1 0.8,0.2 1.6,0.4 2.4,0.4 1.2,1e-6 2.1,-0.2 2.7,-0.7 0.6,-0.5 1,-1.1 1,-2 -1e-5,-0.7 -0.2,-1.3 -0.7,-1.7 -0.5,-0.4 -1.2,-0.7 -2.2,-0.9 l -1.2,-0.2 c -1.5,-0.3 -2.6,-0.8 -3.3,-1.4 -0.7,-0.6 -1,-1.6 -1,-2.7 -2e-6,-1.3 0.5,-2.4 1.4,-3.2 0.9,-0.8 2.3,-1.2 3.9,-1.2 0.7,1.5e-5 1.4,0.1 2.2,0.2 0.7,0.1 1.5,0.3 2.3,0.6 M 70.6,110 h 57.9 l -29,27.9 -28.9,-27.9 z m 32.8,-25.2 c 0.8,0.5 6.4,5.8 6.4,6.4 v 17.9 h -6.4 V 84.8 z m -7.6,-0.1 0.1,24.4 h -6.5 l 0.2,-18.3 6.2,-6.1 0,0 z m -18.2,18 c 0,-0.7 4.7,-4.9 5.3,-5.3 v 11.8 h -5.3 v -6.5 z m 38.6,-5.3 5.6,5.2 c -0.3,0.7 -0.2,-0.3 -0.2,0.7 v 5.9 h -5.3 V 97.4 z m 14.2,12.3 -30.7,-30.1 -30.7,30 30.7,29.9 30.8,-29.8 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 99.5,137.9 29,-27.9 -57.9,0 z m 16.7,-28.7 h 5.3 v -5.9 c 0,-1 -0.1,-0.1 0.2,-0.7 l -5.6,-5.2 v 11.8 z m -12.8,0 h 6.4 V 91.2 c 0,-0.7 -5.6,-5.9 -6.4,-6.4 v 24.4 z m -14,-10e-6 6.5,0 -0.1,-24.4 -6.2,6.1 z m -11.8,-6.4 v 6.4 h 5.3 V 97.4 c -0.7,0.5 -5.3,4.7 -5.3,5.3 z"
    }
  ];
  icn["GR.IN.IC.INDUSTRIAL SITE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 104.1,74.8 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 69.6 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z m -35.7,51.6 h 62.3 V 86.9 h -6.4 V 73.5 h -7.2 v 13.4 h -7.2 V 73.5 h -7.2 v 13.4 h -34.4 v 39.5 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 104.1,74.8 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 69.6 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z"
    }
  ];
  icn["GR.IN.IC.LANDFILL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 124.1,115.8 c 0,2.5 1.6,2.7 3,3.6 h -22.8 c 1.2,-0.7 2.8,-1.2 2.8,-3.3 v -1.2 c 0,-1.3 -1.9,-2.8 -3.6,-2.8 -1,0 -1.8,0.4 -2.3,0.9 -0.4,0.4 -1.1,1.6 -1.1,2.1 v 1.3 c 0,0.2 0.9,1.7 1,1.9 0.6,0.7 1.2,0.6 1.8,1 h -8.6 c 0.6,-0.4 1.3,-0.5 1.8,-1.1 0.4,-0.4 0.6,-1.4 1,-1.6 v -1.7 c 0,-0.4 -0.9,-1.8 -1.2,-2.1 -0.6,-0.6 -1.3,-0.9 -2.4,-0.9 h -0.1 c -1.7,0 -3.5,1.5 -3.5,3.1 v 1.3 c 0,1.5 2,2.2 2.8,2.8 h -8.7 c -0.1,-3.2 -2.5,-1.8 -3.1,-3 -1.1,-1.9 0.9,-2.2 -2.8,-3.1 -3.1,-0.8 -2,-0.3 -3.9,-2.2 -0.6,-0.7 -3,-1.8 -4.2,-1.8 h -0.1 c -1,0 -1.9,1.2 -2.7,1.5 -1.1,0.5 -2.3,0.4 -3.2,1.1 -1.1,0.8 -2.3,4.4 -2.3,6.2 v 0.6 h -0.4 v 2.2 h 72.1 4.9 v -1.5 h -9.5 c 0.8,-0.5 0.9,-0.2 1.8,-1 0.4,-0.4 0.9,-1.5 1.2,-1.6 v -1.6 c 0,-0.5 -0.9,-1.9 -1.3,-2.2 -0.7,-0.5 -1.4,-0.8 -2.5,-0.8 -1.9,0 -3.6,1.5 -3.6,3.5 v 0.2 h 0 z m -1,-17.6 h 3.5 c 0.5,0 4.2,4.8 4.6,5.4 h -8.1 v -5.4 z m -4.1,-17.8 -0.7,-1.3 -7,3.9 1.4,3.5 -32,14.5 c 0.8,0.4 2.1,4.3 2.6,5.3 0.2,0.4 2.3,5 2.3,5.1 0,0.5 -0.9,0.2 -0.8,0.6 l 0.5,3.1 h 3.4 c 0,-2.4 2,-4.8 4.3,-4.8 h 1 c 2.4,0 4.3,2.3 4.3,4.8 h 0.6 c 0,-2.4 0.6,-2.3 1.5,-3.6 l -2.1,-5.6 9.5,-4.3 4.2,9.9 -5.1,0 c 0.9,1.3 1.6,1.3 1.6,3.6 h 14.4 v -0.5 c 0,-2.1 2.5,-4.3 4.8,-4.3 h 0.5 c 2.6,0 4.6,2.2 4.6,4.8 h 2.6 v -3.1 h -1.2 v -7.4 c 0,-1.2 -5.8,-6.8 -6.1,-8.1 h -6.4 v 15 h -4.1 l -5.3,-12.1 5.5,-2.3 -4.3,-9.5 5.6,-7.4 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d: "m 123.1,103.6 h 8.1 c -0.5,-0.6 -4.2,-5.4 -4.6,-5.4 h -3.5 v 5.4 z"
    }
  ];
  icn["GR.IN.IC.PHARMACEUTICAL MANUFACTURER"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 105.2,71.3 h 5.1 V 86.5 H 121.5 V 71.3 h 5.1 v 15.2 h 7.6 v 42.1 H 65.8 V 86.6 h 39.4 V 71.3 z M 64.5,130.1 h 71 V 85.3 h -7.3 V 69.9 h -8.2 V 85.3 h -8.2 V 69.9 H 103.7 V 85.3 H 64.5 v 44.8 z M 90.3,93.1 h 7.6 c 1.2,0 3.4,1.8 3.4,2.7 v 2.6 c 0,1.3 -2.4,2.9 -3.6,2.9 h -7.4 v -8.2 z m -4.9,26.5 h 4.9 v -13.1 l 1.7,0.1 7.6,10 -8.8,11 5.9,0.1 5.9,-7 c 1.2,0.3 4.2,5.9 5.6,6.9 h 6.2 c -0.9,-1.7 -8.4,-10.4 -8.4,-11 0,-0.3 7.4,-9.7 8.2,-10.4 l -6,-0.1 -5.6,6.2 -4.3,-5.7 c 5.2,-1.2 8.4,-3.3 8.4,-9.8 v -0.6 c 0,-2 -1.7,-4.7 -2.8,-5.8 -1,-1 -4.1,-2.4 -6.2,-2.4 H 85.4 v 31.6 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 85.4,88 h 12.4 c 2.1,0 5.1,1.4 6.1,2.4 1.1,1.1 2.8,3.8 2.8,5.8 v 0.6 c 0,6.5 -3.1,8.6 -8.4,9.8 l 4.3,5.7 5.6,-6.2 6.1,0.1 c -0.8,0.6 -8.2,10 -8.2,10.4 0,0.7 7.4,9.4 8.4,11.1 h -6.2 c -1.5,-1 -4.4,-6.6 -5.6,-6.9 l -5.9,6.9 -5.9,-0.1 8.8,-11 -7.6,-9.9 -1.8,-0.1 v 13.1 h -4.9 v -31.6 z m 19.8,-1.4 h -39.4 v 42.1 h 68.4 V 86.6 h -7.6 V 71.3 H 121.5 V 86.5 H 110.3 V 71.3 h -5.1 v 15.3 z m -14.9,14.7 h 7.4 c 1.2,0 3.6,-1.6 3.6,-2.9 v -2.5 c 0,-1 -2.2,-2.7 -3.4,-2.7 h -7.6 v 8.2 z"
    }
  ];
  icn["GR.IN.IC.CONTAMINATED HAZARDOUS WASTE SITE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 133.7,71.5 c -0.3,0 -0.7,0.1 -0.9,0.2 l -49.5,0 -0.7,0 0,0.1 c -0.7,0.3 -1.3,0.9 -1.8,1.7 -0.6,1 -1.2,2.5 -1.6,4.2 -0.9,3.5 -1.4,8.2 -1.4,13.4 0,4.8 0.5,9.2 1.2,12.6 -1,0.1 -2.1,0.5 -3,0.3 -1.2,-0.1 -2.5,-0.1 -3.8,-0.1 -1.3,0 -6.5,-0.9 -6.5,0.7 0,1.8 6,3.4 7.5,6.1 -0.8,1.5 -5.9,1.4 -8.1,1.8 -1.5,0.2 -3,0.2 -3.8,1.1 -1,1 0.2,2.3 1.1,2.7 1.7,0.9 6,1 8.2,1.5 1.3,0.3 2.6,0.7 3.1,1.9 0.4,1.1 0.6,2.6 2.2,2.6 l 0.1,0 c 2.1,0 5.1,-1.7 7.9,-1.7 l 1.1,0 c 6.2,0 6.8,7.4 12.3,7.7 3.5,0.2 5.3,-0.8 7.8,-1.9 1.6,-0.7 5.5,-2.8 7.3,-2.8 l 0.3,0 c 1.8,0 3.3,1.1 4.8,1.5 1.6,0.5 3.3,1 5.4,1 l 0.5,0 c 1.2,0 2.3,-0.2 3.2,-0.5 1.2,-0.4 1.1,-1 1.1,-2.4 -0.1,-1.9 -2.2,-3.3 -3.5,-4 -1.4,-0.9 -3.4,-1.8 -4.9,-2.6 -0.8,-0.4 -1.5,-0.9 -2.3,-1.4 -1.3,-1 -1,-0.6 -1.7,-2.1 1.2,-1.8 6.9,0.2 6.9,-1.9 0,-0.2 -0.3,-0.5 -0.7,-0.7 l 12.2,0 0.7,0 0,-0.4 c 0.7,-0.3 1.3,-0.9 1.8,-1.7 0.6,-1 1.2,-2.5 1.6,-4.2 0.9,-3.5 1.4,-8.2 1.4,-13.4 0,-5.2 -0.5,-9.9 -1.4,-13.4 -0.4,-1.7 -1,-3.2 -1.6,-4.2 -0.6,-1 -1.4,-1.8 -2.5,-1.8 z m 0.3,1.4 c 0.3,0 0.7,0.3 1.3,1.1 0.5,0.8 1,2.2 1.4,3.8 0.8,3.3 1.4,7.9 1.4,13.1 0,5.1 -0.5,9.8 -1.4,13.1 -0.4,1.7 -0.9,3 -1.4,3.8 -0.5,0.8 -1,1.1 -1.3,1.1 -0.2,0 -0.4,-0.1 -0.7,-0.4 l 0,0.7 -47.9,0 c 0.2,-0.2 0.4,-0.4 0.6,-0.8 0.6,-1 1.1,-2.3 1.5,-4 0.9,-3.4 1.4,-8.1 1.4,-13.2 0,-5.2 -0.5,-9.8 -1.4,-13.2 -0.4,-1.7 -0.9,-3.1 -1.5,-4 -0.2,-0.3 -0.4,-0.5 -0.6,-0.7 l 47.9,0 0,0.2 c 0.3,-0.3 0.5,-0.4 0.7,-0.4 z m -50.7,0.2 c 0.3,0 0.7,0.3 1.3,1.1 0.5,0.8 1,2.2 1.4,3.8 0.8,3.3 1.4,7.9 1.4,13.1 0,5.1 -0.5,9.8 -1.4,13.1 -0.4,1.7 -0.9,3 -1.4,3.8 -0.5,0.8 -1,1.1 -1.3,1.1 -0.3,0 -0.7,-0.3 -1.3,-1.1 -0.3,-0.5 -0.6,-1.1 -0.8,-1.8 0.4,1.7 1,3 1.7,3.5 l 8.3,-0.2 7.1,0.1 20.3,-0.1 c 0.5,0 1.5,0.5 2.3,1 l 0,0 c 0.5,0.3 0.8,0.6 1,0.7 -0.1,0.2 -0.4,0.3 -0.6,0.4 -0.2,0.1 -0.5,0.2 -0.8,0.2 -0.4,0.1 -0.9,0.1 -1.3,0.1 -0.2,-0 -0.5,-0 -0.7,-0 -0.4,-0 -0.9,-0 -1.2,-0 l -0.3,0 c -0.9,0 -1.7,0.5 -1.7,1.4 l 0,0.1 0,0.1 c 0,0.1 0,0.2 0,0.3 0.7,3 11.3,5.8 11.9,9.2 0,0.1 0,0.2 0,0.3 -0,0.1 -0,0.1 -0,0.1 -0.2,1.6 -2.9,2.2 -5.2,2.2 -0.7,0 -1.3,0 -1.8,-0.1 -2.6,-0.4 -5.4,-2.3 -7.3,-2.3 -5.3,0 -9.5,5.5 -15.2,4.8 -4.4,-0.6 -5.5,-7.9 -12.3,-7.9 l -1.3,0 c -3,0 -5.6,1.7 -8.4,1.7 -0.5,0 -0.7,-0.3 -0.9,-0.6 -0,-0 -0,-0.1 -0.1,-0.1 -0.2,-0.5 -0.3,-1.1 -0.6,-1.6 -0,-0 0,-0 0,-0 -0,-0.1 -0.1,-0.1 -0.1,-0.2 -0,-0 -0,-0.1 -0.1,-0.1 -0,-0.1 -0.1,-0.1 -0.1,-0.1 -0.1,-0.2 -0.3,-0.3 -0.4,-0.4 -1.2,-0.9 -2.3,-1.1 -4,-1.4 -1.9,-0.3 -5.8,-0.3 -7.3,-1.5 -0,-0 -0.1,-0.1 -0.1,-0.1 -0,-0 -0,-0 -0.1,-0.1 -0,-0 -0.1,-0.1 -0.1,-0.1 -0,-0 -0,-0 -0,-0.1 -0,-0 -0,-0 -0,-0 -0.2,-0.3 -0.4,-0.6 -0.4,-0.9 l 0,-0.3 c 0,-2.1 13.2,-0.9 13.2,-3.2 0,-0.3 -0.1,-0.6 -0.3,-0.8 -0,-0.1 -0.1,-0.1 -0.1,-0.2 -0,-0 -0,-0 -0.1,-0.1 -0.1,-0.1 -0.1,-0.1 -0.2,-0.2 -0,-0 -0,-0 -0.1,-0.1 -0.1,-0.1 -0.3,-0.3 -0.5,-0.4 -1.7,-1.3 -4.8,-2.7 -6.3,-3.9 -0.1,-0.1 -0.3,-0.2 -0.4,-0.3 -0,-0 -0,-0 -0.1,-0.1 -0,-0 -0.1,-0.1 -0.1,-0.1 -0,-0 -0,-0 -0.1,-0.1 -0,-0 -0.1,-0.1 -0.1,-0.1 -0.1,-0.1 -0.2,-0.2 -0.2,-0.4 0.3,-0.1 0.6,-0.3 1.1,-0.3 l 2.9,0 6.3,0.3 2.6,-0.3 c 9.4e-4,0 -9.4e-4,0 0,0 l 0.7,-0.1 0.8,0.1 c -0,-0 -0,-0 -0,-0 -0.8,-3.3 -1.4,-7.9 -1.4,-13.1 0,-5.1 0.5,-9.7 1.4,-13.1 0.4,-1.7 0.9,-3 1.4,-3.8 0.5,-0.8 1,-1.1 1.3,-1.1 z m 27.7,1.1 -17.4,17 17.4,16.9 17.4,-16.9 -17.4,-17 z m -2.2,2.9 0,13.8 -3.6,0 0.1,-10.4 3.5,-3.5 z m 4.3,0 c 0.4,0.3 3.6,3.3 3.6,3.7 l 0,10.2 -3.6,0 0,-13.8 z m 7.3,7.2 3.2,2.9 c -0.1,0.1 -0.1,0.1 -0.1,0.1 -0,-0 0,0 0,0.3 l 0,3.3 -3.1,0 0,-6.7 z m -18.8,0 0,6.7 -3,0 0,-3.7 c 0,-0.4 2.7,-2.8 3,-3 z m -7,7.1 32.8,0 -16.4,15.8 -16.4,-15.8 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 134,72.9 c -0.2,0 -0.4,0.1 -0.7,0.4 l 0,-0.2 -47.9,0 c 0.2,0.2 0.4,0.4 0.6,0.7 0.6,1 1.1,2.3 1.5,4 0.9,3.4 1.4,8.1 1.4,13.2 0,5.2 -0.5,9.8 -1.4,13.2 -0.4,1.7 -0.9,3.1 -1.5,4 -0.2,0.3 -0.4,0.5 -0.6,0.8 l 47.9,0 0,-0.7 c 0.3,0.3 0.5,0.4 0.7,0.4 0.3,0 0.7,-0.3 1.3,-1.1 0.5,-0.8 1,-2.2 1.4,-3.8 0.8,-3.3 1.4,-7.9 1.4,-13.1 0,-5.1 -0.5,-9.8 -1.4,-13.1 -0.4,-1.7 -0.9,-3 -1.4,-3.8 -0.5,-0.8 -1,-1.1 -1.3,-1.1 z m -50.7,0.2 c -0.3,0 -0.7,0.3 -1.3,1.1 -0.5,0.8 -1,2.2 -1.4,3.8 -0.8,3.3 -1.4,7.9 -1.4,13.1 0,5.1 0.5,9.8 1.4,13.1 0,0 0,0 0,0 l -0.8,-0.1 -3.3,0.4 -6.2,-0.3 -2.9,0 c -0.5,0 -0.8,0.1 -1.1,0.3 0.4,1.6 8.4,4.3 8.4,6.5 0,2.3 -13.2,1.1 -13.2,3.2 l 0,0.3 c 0,2.4 5.6,2.3 8,2.7 1.7,0.3 2.8,0.5 4,1.4 1.3,1 0.8,3.3 2.2,3.3 2.8,0 5.4,-1.7 8.4,-1.7 l 1.3,0 c 6.8,0 7.9,7.3 12.3,7.9 5.7,0.7 9.9,-4.8 15.2,-4.8 1.8,0 4.7,1.9 7.3,2.3 2.3,0.2 7,-0.2 7,-2.4 0,-3.6 -12,-6.5 -12,-9.8 l 0,-0.1 c 0,-0.9 0.9,-1.4 1.7,-1.4 l 0.3,0 c 1.4,0 3.9,0.3 4.7,-0.7 -0.3,-0.4 -2.5,-1.7 -3.2,-1.7 l -20.3,0.1 -7.1,-0.1 -8.3,0.2 c -0.7,-0.5 -1.3,-1.8 -1.7,-3.5 0.3,0.7 0.5,1.3 0.8,1.8 0.5,0.8 1,1.1 1.3,1.1 0.3,0 0.7,-0.3 1.3,-1.1 0.5,-0.8 1,-2.2 1.4,-3.8 0.8,-3.3 1.4,-7.9 1.4,-13.1 0,-5.1 -0.5,-9.7 -1.4,-13.1 -0.4,-1.7 -0.9,-3 -1.4,-3.8 -0.5,-0.8 -1,-1.1 -1.3,-1.1 z m 27.7,1.1 17.4,17 -17.4,16.9 -17.4,-16.9 17.4,-17 z m -2.2,2.9 -3.5,3.5 -0.1,10.4 3.6,0 -0,-13.8 z m 4.3,0 0,13.8 3.6,0 0,-10.2 c 0,-0.4 -3.2,-3.4 -3.6,-3.7 z m 7.3,7.2 0,6.7 3.1,0 0,-3.3 c 0,-0.3 -0,-0.3 -0,-0.3 0,0 0,0 0.1,-0.1 l -3.2,-2.9 z m -18.8,0 c -0.4,0.3 -3,2.7 -3,3 l 0,3.7 3,0 0,-6.7 z m -7,7.1 16.4,15.8 16.4,-15.8 -32.8,0 z"
    }
  ];
  icn["GR.IN.IC.TOXIC RELEASE INVENTORY"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 81.8,61 0,15.2 2,0 0,-6.4 2.2,0 c 0.8,6e-6 1.5,0.2 1.9,0.5 0.5,0.3 1,1 1.5,2 l 1.9,3.9 2.2,0 -2.1,-4.2 c -0.4,-0.9 -0.8,-1.5 -1.3,-2 -0.4,-0.5 -0.8,-0.8 -1.3,-0.9 0.8,-0.2 1.5,-0.7 1.9,-1.3 0.4,-0.6 0.7,-1.4 0.7,-2.4 -2e-5,-1.5 -0.4,-2.6 -1.3,-3.3 -0.9,-0.7 -2.1,-1.1 -3.9,-1.1 l -4.6,0 z m 14.5,0 0,15.2 9.8,0 0,-1.7 -7.7,0 0,-5.5 7.2,0 0,-1.7 -7.2,0 0,-4.5 7.5,0 0,-1.7 -9.6,0 z m 13.2,0 0,15.2 9.4,0 0,-1.7 -7.4,0 0,-13.4 -2,0 z m -25.6,1.7 2.6,0 c 1,1.4e-5 1.7,0.2 2.2,0.7 0.5,0.4 0.8,1.1 0.8,2 -10e-6,0.9 -0.3,1.6 -0.8,2 -0.5,0.5 -1.2,0.7 -2.2,0.7 l -2.6,0 0,-5.4 z m 16,14.7 c -4.3,1.1e-5 -8.3,0.4 -11.2,1.2 -1.4,0.4 -2.6,0.8 -3.5,1.3 -0.7,0.4 -1.2,0.9 -1.4,1.5 l -0.1,0 0,0.6 c -3.1e-5,0 0,0 0,0 l 0,31.1 -0.2,-0.7 c -0.1,0 -1.1,0.1 -2.4,0 -1.2,-0.1 -2.7,-0.2 -4.2,-0.3 -1.5,-0.1 -2.9,-0.2 -4,-0.1 -0.6,0 -1.1,0 -1.5,0.1 -0.2,0 -0.4,0.1 -0.6,0.2 -0.2,0.1 -0.4,0.2 -0.6,0.5 -0.3,0.4 -0.4,0.9 -0.3,1.4 0.1,0.5 0.3,0.8 0.5,1.2 0.5,0.7 1.2,1.2 1.9,1.7 0.7,0.5 1.4,1 1.9,1.5 0.5,0.5 0.7,0.9 0.6,1.2 -0,0.1 -0,0.2 -0.2,0.3 -0.2,0.2 -0.6,0.3 -1,0.5 -0.9,0.3 -2.2,0.5 -3.5,0.7 -1.3,0.2 -2.7,0.3 -3.7,0.5 -0.5,0.1 -1,0.2 -1.4,0.4 -0.2,0.1 -0.4,0.2 -0.6,0.3 -0.2,0.2 -0.4,0.4 -0.4,0.7 -0.1,0.9 0.3,1.7 1,2.3 0.7,0.6 1.5,1.1 2.6,1.6 2.1,0.9 4.9,1.7 7.9,2.4 2.9,0.7 5.9,1.2 8.3,1.7 2.4,0.4 4.4,0.8 4.8,0.9 2,0.6 3.3,1.8 4.9,3.2 1.5,1.3 3.2,2.8 5.8,3.5 3,0.8 6.2,-0.6 9.4,-2 3.2,-1.4 6.4,-2.8 9.1,-2.5 0.1,0 1,0.2 1.9,0.5 1,0.3 2.2,0.6 3.4,0.8 1.2,0.3 2.4,0.5 3.5,0.6 1.1,0.1 2,0.2 2.7,-0.5 0.8,-0.7 1.3,-1.4 1.4,-2.1 0.2,-0.8 -0,-1.5 -0.4,-2.2 -0.8,-1.3 -2.2,-2.3 -3.9,-3.2 -1.6,-0.9 -3.5,-1.8 -5,-2.6 -1.5,-0.8 -2.7,-1.6 -3,-1.9 -0.2,-0.3 -0.2,-0.2 -0.1,-0.4 0.1,-0.1 0.3,-0.4 0.7,-0.7 0.8,-0.5 2.2,-1 3.2,-1.5 0.5,-0.3 1,-0.5 1.3,-1 0.2,-0.3 0.3,-0.7 0.2,-1 -0.1,-0.4 -0.3,-0.6 -0.6,-0.8 -0.5,-0.4 -1.2,-0.7 -2.3,-1.1 -1.1,-0.3 -2.6,-0.7 -4.6,-1.1 l -0.3,1.3 0,-35.4 0,-0.6 -0.1,0 c -0.2,-0.6 -0.7,-1.1 -1.4,-1.5 -0.9,-0.5 -2.1,-1 -3.5,-1.3 -2.9,-0.7 -6.8,-1.2 -11.2,-1.2 z m 0,1.2 c 4.3,-1.1e-5 8.1,0.4 10.9,1.1 1.4,0.4 2.5,0.8 3.2,1.2 0.3,0.2 0.4,0.3 0.6,0.5 0.1,0.1 0.2,0.2 0.3,0.3 0,0 0,0 0,0.1 0,0 0,0.1 0,0.1 0,0 0,0.1 0,0.1 0,0 -0,0.1 -0,0.1 -0,0 -0,0 -0,0 -0,0 -0,0 -0,0.1 -0,0 -0,0 -0,0.1 -0,0 -0,0 -0,0.1 -0,0 -0,0.1 -0.1,0.1 -0,0.1 -0.1,0.1 -0.1,0.2 -0,0 -0,0 -0,0 -0.1,0.1 -0.3,0.3 -0.6,0.5 -0.7,0.4 -1.8,0.8 -3.2,1.2 -2.8,0.7 -6.6,1.2 -10.9,1.2 -4.3,1.1e-5 -8.1,-0.4 -10.9,-1.1 -1.4,-0.4 -2.5,-0.8 -3.2,-1.2 -0.3,-0.2 -0.5,-0.3 -0.6,-0.5 -0,-0 -0.1,-0.1 -0.1,-0.1 -0,-0 -0,-0 -0,-0 -0,-0 -0,-0.1 -0.1,-0.1 -0,-0 -0,-0 -0,-0 -0,-0 -0,-0.1 -0.1,-0.1 -0,-0.1 -0.1,-0.1 -0.1,-0.2 0,-0 0,-0.1 0,-0.1 0.1,-0.2 0.3,-0.6 0.9,-0.9 0.7,-0.4 1.8,-0.8 3.2,-1.2 2.8,-0.7 6.6,-1.1 10.9,-1.1 z m 15,5.3 0,34.1 0,0 0,5.6 c 0.1,0.2 0.2,0.3 0.2,0.4 0,0.2 -0.2,0.6 -0.9,1.1 -0.7,0.4 -1.8,0.8 -3.2,1.2 -2.8,0.7 -6.6,1.1 -10.9,1.1 -4.3,1e-5 -8.1,-0.4 -10.9,-1.1 -1.4,-0.4 -2.5,-0.8 -3.2,-1.2 -0.6,-0.4 -0.9,-0.7 -0.9,-1 l -0,0 0,-0.1 0,-1.9 c -0.1,0.1 -0.1,0.1 -0.2,0.1 l 0,-38.4 c 0.1,0.1 0.2,0.1 0.3,0.2 0.9,0.5 2.1,1 3.5,1.3 2.9,0.7 6.8,1.2 11.2,1.2 4.3,-1.2e-5 8.3,-0.5 11.2,-1.2 1.4,-0.4 2.6,-0.8 3.5,-1.3 0.1,-0.1 0.2,-0.1 0.3,-0.2 z m -15.2,6.1 -14.6,14.2 14.2,13.8 0.8,0 14.2,-13.8 -14.6,-14.3 z m -1.8,2.4 0,11.6 -3.1,0 0.1,-8.7 3,-2.9 z m 3.6,0 c 0.4,0.3 3,2.7 3,3 l 0,8.5 -3,0 0,-11.6 z m -9.7,6 0,5.6 -2.5,0 0,-3.1 c 0,-0.3 2.2,-2.3 2.5,-2.5 z m 15.8,0 2.6,2.5 c -0.1,0.3 -0.1,-0.1 -0.1,0.3 l 0,2.8 -2.5,0 0,-5.6 z m -21.7,6 27.5,0 -13.8,13.3 -13.7,-13.3 z m -12.8,9.3 c 1.1,-0 2.5,0 3.9,0.1 1.4,0.1 2.9,0.2 4.2,0.3 1.1,0.1 1.9,0.1 2.6,-0 l 0,10 0,0.6 0.3,0 c 0.2,0.6 0.7,1.1 1.4,1.5 0.9,0.5 2.1,1 3.5,1.3 2.9,0.7 6.8,1.2 11.2,1.2 4.3,-1e-5 8.3,-0.4 11.2,-1.2 1.4,-0.4 2.6,-0.8 3.5,-1.3 0.9,-0.5 1.5,-1.2 1.5,-2.1 0,-0.3 -0.1,-0.5 -0.2,-0.8 l 0,-5.6 c 1.9,0.4 3.4,0.8 4.4,1.1 0.9,0.3 1.3,0.5 1.6,0.7 -0.1,0.1 -0.1,0.1 -0.4,0.3 -0.8,0.4 -2.2,0.9 -3.3,1.6 -0.5,0.3 -1,0.7 -1.3,1.3 -0.3,0.6 -0.2,1.4 0.2,2 0.7,1 2,1.6 3.5,2.4 1.6,0.8 3.4,1.6 4.9,2.5 1.5,0.9 2.8,1.9 3.3,2.7 0.2,0.4 0.3,0.7 0.2,1 -0.1,0.3 -0.3,0.8 -0.9,1.3 0,-0 -0.6,0.2 -1.5,0.1 -0.9,-0.1 -2.1,-0.3 -3.3,-0.6 -1.2,-0.3 -2.4,-0.6 -3.3,-0.8 -1,-0.3 -1.7,-0.5 -2.2,-0.5 -3.3,-0.3 -6.7,1.3 -9.9,2.7 -3.2,1.4 -6.1,2.5 -8.4,1.9 -2.3,-0.6 -3.7,-1.8 -5.2,-3.2 -1.5,-1.3 -3.1,-2.8 -5.5,-3.5 -0.8,-0.2 -2.5,-0.5 -5,-0.9 -2.4,-0.4 -5.4,-1 -8.3,-1.6 -2.9,-0.7 -5.6,-1.5 -7.6,-2.3 -1,-0.4 -1.7,-0.9 -2.2,-1.3 -0.3,-0.3 -0.4,-0.5 -0.5,-0.7 0.2,-0.1 0.6,-0.2 1.1,-0.3 1,-0.2 2.3,-0.3 3.6,-0.5 1.4,-0.2 2.7,-0.4 3.9,-0.8 0.6,-0.2 1.1,-0.4 1.5,-0.8 0.4,-0.3 0.8,-0.8 0.8,-1.4 0.1,-1 -0.4,-1.8 -1.1,-2.5 -0.6,-0.7 -1.4,-1.2 -2.1,-1.7 -0.7,-0.5 -1.3,-1 -1.6,-1.4 -0.1,-0.2 -0.2,-0.3 -0.2,-0.4 -0,-0.1 0,-0.1 0.1,-0.2 0,-0 0.1,-0 0.1,-0 0.3,-0 0.7,-0.1 1.2,-0.1 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 85.8,104.4 13.7,13.3 13.8,-13.3 z m 21.7,-0.4 h 2.5 v -2.8 c 0,-0.5 -0,-0.1 0.1,-0.4 l -2.7,-2.4 v 5.6 z m -6.1,0 h 3.1 v -8.5 c 0,-0.3 -2.7,-2.8 -3.1,-3.1 v 11.6 z m -6.6,-8.7 -0.1,8.7 3.1,0 -0,-11.6 z m -5.7,5.6 v 3.1 h 2.5 v -5.6 c -0.3,0.2 -2.5,2.2 -2.5,2.5 z M 99.8,85.4 c -4.3,1.2e-5 -8.1,-0.4 -10.9,-1.1 -1.4,-0.4 -2.5,-0.8 -3.2,-1.2 -0.7,-0.4 -0.9,-0.8 -0.9,-1 0,-0.2 0.2,-0.6 0.9,-1 0.7,-0.4 1.8,-0.8 3.2,-1.2 2.8,-0.7 6.6,-1.2 10.9,-1.2 4.3,-1.1e-5 8.1,0.4 10.9,1.1 1.4,0.4 2.5,0.8 3.2,1.2 0.7,0.4 0.9,0.8 0.9,1 0,0.2 -0.2,0.6 -0.9,1 -0.7,0.4 -1.8,0.8 -3.2,1.2 -2.8,0.7 -6.6,1.2 -10.9,1.2 z m -15,-1.5 0,38.4 c 0.1,-0.1 0.1,-0.1 0.2,-0.1 l 0,1.8 0,0.1 0,0 c 0,0.2 0.3,0.6 0.9,0.9 0.7,0.4 1.8,0.9 3.2,1.2 2.8,0.7 6.6,1.2 10.9,1.2 4.3,-1e-5 8.2,-0.5 10.9,-1.2 1.4,-0.4 2.4,-0.8 3.2,-1.2 0.7,-0.4 0.9,-0.8 0.9,-1 0,-0.1 -0,-0.2 -0.2,-0.4 l 0,-5.6 -0,0 0,-34.1 c -0.1,0.1 -0.2,0.1 -0.3,0.2 -0.9,0.5 -2.1,1 -3.5,1.3 -2.9,0.7 -6.8,1.2 -11.2,1.2 -4.3,1.1e-5 -8.3,-0.4 -11.2,-1.2 -1.4,-0.4 -2.6,-0.8 -3.5,-1.3 -0.1,-0.1 -0.2,-0.1 -0.3,-0.2 z m 14.8,6.1 14.6,14.3 -14.2,13.8 -0.8,0 L 85,104.2 99.6,90 z m -26.7,23.7 c 1.1,-0 2.5,0 3.9,0.1 1.4,0.1 2.9,0.2 4.2,0.3 1.1,0.1 1.9,0.1 2.6,-0 l 0,10 0,0.6 0.3,0 c 0.2,0.6 0.7,1.1 1.4,1.5 0.9,0.5 2.1,1 3.5,1.3 2.9,0.7 6.8,1.2 11.2,1.2 4.3,-1e-5 8.3,-0.4 11.2,-1.2 1.4,-0.4 2.6,-0.8 3.5,-1.3 0.9,-0.5 1.5,-1.2 1.5,-2.1 0,-0.3 -0.1,-0.5 -0.2,-0.8 l 0,-5.6 c 1.9,0.4 3.4,0.8 4.4,1.1 0.9,0.3 1.3,0.5 1.6,0.7 -0.1,0.1 -0.1,0.1 -0.4,0.3 -0.8,0.4 -2.2,0.9 -3.3,1.6 -0.5,0.3 -1,0.7 -1.3,1.3 -0.3,0.6 -0.2,1.4 0.2,2 0.7,1 2,1.6 3.5,2.4 1.6,0.8 3.4,1.6 4.9,2.5 1.5,0.9 2.8,1.9 3.3,2.7 0.2,0.4 0.3,0.7 0.2,1 -0.1,0.3 -0.3,0.8 -0.9,1.3 0,-0 -0.6,0.2 -1.5,0.1 -0.9,-0.1 -2.1,-0.3 -3.3,-0.6 -1.2,-0.3 -2.4,-0.6 -3.3,-0.8 -1,-0.3 -1.7,-0.5 -2.2,-0.5 -3.3,-0.3 -6.7,1.3 -9.9,2.7 -3.2,1.4 -6.1,2.5 -8.4,1.9 -2.3,-0.6 -3.7,-1.8 -5.2,-3.2 -1.5,-1.3 -3.1,-2.8 -5.5,-3.5 -0.8,-0.2 -2.5,-0.5 -5,-0.9 -2.4,-0.4 -5.4,-1 -8.3,-1.6 -2.9,-0.7 -5.6,-1.5 -7.6,-2.3 -1,-0.4 -1.7,-0.9 -2.2,-1.3 -0.3,-0.3 -0.4,-0.5 -0.5,-0.7 0.2,-0.1 0.6,-0.2 1.1,-0.3 1,-0.2 2.3,-0.3 3.6,-0.5 1.4,-0.2 2.7,-0.4 3.9,-0.8 0.6,-0.2 1.1,-0.4 1.5,-0.8 0.4,-0.3 0.8,-0.8 0.8,-1.4 0.1,-1 -0.4,-1.8 -1.1,-2.5 -0.6,-0.7 -1.4,-1.2 -2.1,-1.7 -0.7,-0.5 -1.3,-1 -1.6,-1.4 -0.1,-0.2 -0.2,-0.3 -0.2,-0.4 -0,-0.1 0,-0.1 0.1,-0.2 0,-0 0.1,-0 0.1,-0 0.3,-0 0.7,-0.1 1.2,-0.1 z"
    }
  ];
  icn["GR.IN.IC.COLLEGE/UNIVERSITY"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 97.4,106.9 h -14.8 v 31.7 h 32 v -31.7 H 99.8 V 95.1 c 0,-0.6 6.5,-3 7.5,-3.4 1.3,-0.5 6.9,-3 7.9,-3 -0.3,-0.4 -14.7,-6.3 -15.7,-6.3 h -2.3 v 24.5 z m 23.3,-30.1 -9.6,0 0,-15.1 2,0 0,13.3 7.6,0 0,1.8 M 106,63.5 c 0.6,0.7 1.1,1.5 1.4,2.5 0.3,1 0.5,2.1 0.5,3.3 -1e-5,1.2 -0.2,2.4 -0.5,3.4 -0.3,1 -0.8,1.8 -1.4,2.5 -0.6,0.7 -1.4,1.2 -2.2,1.5 -0.8,0.3 -1.8,0.5 -2.9,0.5 -1.1,0 -2,-0.2 -2.9,-0.5 -0.9,-0.4 -1.6,-0.9 -2.2,-1.5 -0.6,-0.7 -1.1,-1.5 -1.4,-2.5 -0.3,-1 -0.5,-2.1 -0.5,-3.3 -10e-7,-1.2 0.2,-2.3 0.5,-3.3 0.3,-1 0.8,-1.8 1.4,-2.5 0.6,-0.7 1.3,-1.2 2.2,-1.5 0.9,-0.4 1.9,-0.5 2.9,-0.5 1.1,1.5e-5 2.1,0.2 2.9,0.5 0.9,0.4 1.6,0.9 2.2,1.5 m -0.2,5.8 c -2e-5,-2 -0.4,-3.5 -1.3,-4.5 -0.9,-1.1 -2.1,-1.6 -3.6,-1.6 -1.5,1.4e-5 -2.7,0.5 -3.6,1.6 -0.9,1.1 -1.3,2.6 -1.3,4.5 -3e-6,2 0.4,3.5 1.3,4.6 0.9,1 2.1,1.6 3.6,1.6 1.5,2e-6 2.7,-0.5 3.6,-1.6 0.9,-1.1 1.3,-2.6 1.3,-4.6 m -14,6.5 c -0.4,0.2 -0.7,0.3 -1,0.5 -0.3,0.1 -0.7,0.3 -1.2,0.4 -0.4,0.1 -0.9,0.2 -1.4,0.3 -0.5,0.1 -1,0.1 -1.6,0.1 -1.1,0 -2.1,-0.2 -3,-0.5 -0.9,-0.3 -1.7,-0.8 -2.3,-1.5 -0.7,-0.6 -1.2,-1.5 -1.5,-2.4 -0.4,-1 -0.5,-2.1 -0.5,-3.5 -10e-7,-1.2 0.2,-2.4 0.5,-3.3 0.4,-1 0.9,-1.8 1.5,-2.5 0.6,-0.7 1.4,-1.2 2.3,-1.5 0.9,-0.3 1.9,-0.5 3,-0.5 0.8,1.5e-5 1.6,0.1 2.4,0.3 0.8,0.2 1.7,0.5 2.7,1 l 0,2.4 -0.2,0 c -0.8,-0.7 -1.7,-1.2 -2.5,-1.5 -0.8,-0.3 -1.7,-0.5 -2.6,-0.5 -0.8,1.4e-5 -1.5,0.1 -2.1,0.4 -0.6,0.2 -1.2,0.6 -1.6,1.1 -0.5,0.5 -0.8,1.2 -1.1,1.9 -0.3,0.8 -0.4,1.7 -0.4,2.7 -3e-6,1.1 0.1,2 0.4,2.7 0.3,0.8 0.7,1.4 1.1,1.9 0.5,0.5 1,0.9 1.7,1.1 0.6,0.2 1.3,0.4 2,0.4 1,2e-6 1.9,-0.2 2.7,-0.5 0.8,-0.3 1.6,-0.8 2.4,-1.5 l 0.1,0 0,2.4"
    }
  ];
  icn["GR.IN.IC.SCHOOL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 98.4,96.4 H 83.7 v 31.7 h 32 V 96.4 H 100.9 V 84.6 c 0,-0.6 6.5,-3 7.5,-3.4 1.3,-0.5 6.9,-3 7.9,-3 -0.3,-0.4 -14.7,-6.3 -15.7,-6.3 H 98.4 V 96.4 z"
    }
  ];
  icn["GR.IN.IC.REST STOP"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 108.4,89.6 v -0.4 l 0.6,-0.6 -0.4,1.4 -3.8,13.4 -0.2,0.8 -0.4,0.6 0,0.9 -2,6.7 7.2,0 v 19.7 h 5.2 v -19.7 h 2.7 v 19.7 h 5.2 v -19.7 h 7.1 l -1.3,-5.3 -0.2,-0.8 -4.8,-16.4 -0.5,-1.4 0.6,0.7 0.1,0.4 c 2.1,2.4 5.4,14.2 8.6,14.2 h 0.4 c 1.2,0 2.1,-1.1 2.1,-2.3 v -0.6 c 0,-0.5 -4.8,-10 -5.3,-11.6 -0.7,-2 -1.7,-4.2 -2.6,-6 -1,-2.1 -1.2,-3.8 -4.6,-3.8 h -12.4 c -3.4,0 -3.6,1.8 -4.7,3.9 -0.9,1.7 -1.9,4 -2.5,5.9 -0.6,1.6 -5.2,11.1 -5.2,11.6 v 0.6 c 0,1.3 0.6,2.3 1.9,2.3 h 0.8 c 2.4,0 6.4,-12.2 8.2,-14.2 z m 0.2,0.4 0.4,-1.5 -0.6,0.6 0,0.4 z m 15.1,-0.4 -0.1,-0.4 -0.6,-0.6 0.5,1.4 z M 69.6,88.8 h 2.3 v 43.6 h 6.1 v -25.6 h 2.7 v 25.6 h 5.9 v -43.6 h 2.3 v 16.4 h 4.6 V 86.3 l -0.3,-2.3 h -0.4 c 0,-2.3 -1.7,-4.4 -4,-4.4 H 69.6 c -3,0 -4.4,3.4 -4.4,6.5 v 19.1 h 4.4 V 88.8 z M 110.7,72.8 c 0,2.7 2.4,5.4 5,5.4 h 0.2 c 1.6,0 2.8,-0.6 3.6,-1.4 0.5,-0.4 1.8,-2.4 1.8,-3 v -1.6 c 0,-2.4 -2.8,-4.6 -5.4,-4.6 -3,-0 -5.2,2.4 -5.2,5.2 z m -36.7,1.1 c 0,2 2.8,4.4 5,4.4 h 0.2 c 4.2,0 4.3,-3.4 5.2,-3.8 V 71.6 c 0,-1.8 -2.8,-4 -5.2,-4 -2.3,0 -5.2,2.2 -5.2,4 v 2.3 z"
    }
  ];
  icn["GR.IN.IC.CONTROL VALVE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 114,114.5 h 15.7 v 4 h 9.1 v -23.6 h -9.1 V 98.8 H 114.4 c -0.4,0 -2.6,-2.6 -2.6,-3.4 v -5.6 h -9.9 v -8.2 h 12.3 v -3.6 h -28.2 v 3.6 h 12.1 v 8.3 H 89.2 v 6.6 l -0.2,-0.2 -1.8,2.4 -17.2,0.1 V 95 H 61.2 v 23.6 h 8.9 v -4 H 87 c 0.4,0 2,2.4 2.4,2.8 0.5,0.6 2.2,1.9 2.9,2.4 1.9,1.2 4.7,2.4 7.8,2.4 h 0.6 c 3.5,0 5.8,-1 8.1,-2.4 1.4,-0.8 4.8,-3.8 5.2,-5.3 z"
    }
  ];
  icn["GR.IN.IC.DAM"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 68.3,89.1 c 2.3,0 3.2,-1.7 4.6,-2.6 1.1,0.8 2.2,2.6 4.4,2.6 h 0.2 c 2.6,0 3.3,-1.7 4.7,-2.6 1.4,0.9 2.2,2.6 4.7,2.6 2.4,0 3.3,-1.8 4.6,-2.6 0.6,0.4 1.1,1.1 1.9,1.6 0.4,0.2 2.2,0.9 2.2,1.3 v 6.8 C 94.1,95.8 91.8,93.8 91.5,92.6 h -0.3 c -0.3,1.1 -3,3.6 -4.5,3.6 -1.5,0 -4.1,-2.6 -4.4,-3.8 -1,0.6 -2.6,3.8 -4.6,3.8 h -0.4 c -1.2,0 -4,-2.7 -4.2,-3.7 -0.8,0.2 -2.6,3.7 -4.7,3.7 h -0.3 c -1.1,0 -1.7,-0.7 -2.4,-1.2 l -1,1.2 c 1,0.7 1.6,1.8 3.2,1.8 h 0.4 c 2.3,0 3.1,-1.8 4.6,-2.8 0.7,1.1 2.8,2.8 4.7,2.8 2.3,0 3.3,-2 4.6,-2.8 1.2,0.8 2.6,2.8 4.7,2.8 2.1,0 3.4,-2.1 4.7,-2.8 0.7,1 2.6,2.4 4,2.7 v 7 c -1.4,-0.1 -3.4,-2.4 -4,-3.5 -1.1,0.7 -2.5,3.6 -4.7,3.6 h -0.1 c -2.3,0 -4.1,-3.5 -4.7,-3.7 -0.3,1 -3,3.7 -4.1,3.7 h -0.4 c -2.2,0 -3.6,-2.9 -4.7,-3.7 -0.6,1 -2.8,3.7 -4.1,3.7 H 67.7 c -0.7,0 -1.7,-1 -2.2,-1.3 l -0.9,1.5 c 1.1,0.7 1.7,1.6 3.6,1.6 2.7,0 3.1,-1.8 4.7,-2.6 1.4,0.9 2,2.6 4.7,2.6 2.2,0 3.4,-1.8 4.6,-2.6 1.4,1 2.5,2.6 4.8,2.6 1.8,0 3.4,-2 4.4,-2.6 0.9,0.5 1,1 2,1.6 0.4,0.3 2.2,0.7 2.2,1.2 v 6.8 c -1.4,-0.3 -3.6,-2.2 -4,-3.5 -1.1,0.7 -2.5,3.8 -4.8,3.8 -1.4,0 -4.1,-2.6 -4.4,-3.8 -1.2,0.8 -2.6,3.8 -4.8,3.8 -2,0 -3.7,-3.2 -4.7,-3.8 -0.3,1 -3,3.8 -4.3,3.8 h -0.6 c -0.8,0 -1.8,-1 -2.4,-1.3 l -0.9,1.3 c 1.1,0.7 1.8,1.8 3.6,1.8 2.2,0 3.3,-1.8 4.7,-2.8 1.2,0.8 2.6,2.9 4.7,2.8 2.3,-0.1 3.3,-1.9 4.6,-2.8 1.2,0.8 2.7,2.8 4.7,2.8 1.9,0 3.4,-2 4.6,-2.8 1.6,1 1.8,2 4.1,2.5 v 5 h 17 l -1.4,-5.2 c 0.8,0.2 1,0.6 2.2,0.6 2,0 3.3,-1.9 4.6,-2.8 1.3,0.9 2.4,2.8 4.7,2.8 1.6,0 3.8,-1.8 4.4,-2.8 1.3,0.3 2.5,2.8 5.1,2.8 1.2,0 2.6,-1.4 3.4,-1.8 l -1,-1.3 c -0.7,0.4 -1.5,1.3 -2.6,1.3 -2.1,0 -3.7,-3.1 -4.7,-3.8 -0.7,1.4 -2.7,3.8 -4.7,3.8 -1.3,0 -4.3,-2.6 -4.4,-3.8 -1,0.7 -2.6,3.8 -4.7,3.8 h -0.2 c -1.1,0 -2.2,-0.9 -2.7,-1.5 -0.4,-0.4 -0.8,-2.5 -1.1,-3.2 -0.4,-1 -1.8,-5.6 -1.8,-6.6 l -0.3,-0.4 0,-0.6 -0.3,-0.4 v -0.6 l -0.3,-0.4 -5.3,-18.6 0.2,-0 -0.3,-0.4 0,-0.6 c -0.2,-0.3 -0.3,-0.3 -0.3,-0.6 v -0.4 h -5.6 v 7.8 c -1.4,-0.7 -1.2,-0.5 -2.4,-1.6 -0.1,-0.1 -1,-0.9 -1,-1 -0.4,-0.5 -0.1,-0.9 -0.8,-1.1 -0.1,1.2 -3.1,3.8 -4.3,3.8 h -0.2 c -2.5,0 -4.2,-3.6 -4.8,-3.8 -0.3,1.1 -3,3.8 -4.2,3.8 h -0.4 c -1.2,0 -4.2,-2.7 -4.2,-3.8 -0.5,0.1 -2.8,3.8 -4.4,3.8 H 67.7 c -0.7,0 -1.7,-1 -2.2,-1.3 l -0.9,1.3 c 1,0.7 1.6,1.6 3.4,1.6 h 0.3 v 0 z"
    }
  ];
  icn["GR.IN.IC.DISCHARGE OUTFALL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 63.2,111.4 v 13.4 h 73.6 V 111.7 l -3.1,0.5 -1.1,-0.1 c -2.2,0 -3.6,-0.7 -4.9,-1.6 -0.6,-0.4 -1.1,-1.1 -1.5,-1.8 -0.4,-0.6 -0.2,-2.1 -1,-2.1 h -0.4 c -0.8,0 -0.7,1.6 -1.2,2.2 -0.4,0.6 -0.9,1.2 -1.6,1.7 -1.3,1 -3,1.6 -5.1,1.6 h -0.9 c -3.2,0 -6.8,-2.1 -6.8,-5.1 -0.3,-0.2 -0.4,-0.4 -0.8,-0.4 h -0.3 c -0.7,0 -0.8,1.5 -1.1,2.1 -0.4,0.6 -1,1.4 -1.5,1.8 -1.2,1 -2.7,1.6 -4.8,1.6 h -0.9 c -3.5,0 -7.3,-2.1 -7.3,-5.4 -0.4,-0.1 -0.4,-0.2 -0.8,-0.2 h -0.3 c -0.6,0 -0.6,1.5 -1.1,2.2 -0.5,0.8 -0.7,1.1 -1.5,1.7 -1.3,1 -2.7,1.6 -4.8,1.6 H 82.9 c -3.5,0 -6.7,-2.2 -7,-5.4 -0.3,-0.1 -0.4,-0.2 -0.8,-0.2 h -0.1 c -0.7,0 -0.8,1.5 -1.2,2.2 -0.4,0.6 -0.9,1.2 -1.6,1.7 -1.4,1 -2.7,1.6 -5,1.6 h -1 c -1.2,0 -2.2,-0.4 -3,-0.8 l 0,0 z m 0,-21.6 19.5,0 0,1.2 2.7,0 0,-15.8 -2.7,0 0,1.2 -19.5,0 z M 89.7,80.9 v 0.1 c 8.1,0 16.2,1.2 20.6,4.9 2.8,2.4 3.1,4.5 3.1,9.6 0,4.1 0.5,8.3 4.5,8.3 h 0.8 c 1.7,0 2.8,-2.6 2.8,-4.3 v -0.9 c 0,-5.1 -3.3,-10.7 -5.9,-13.3 -1.6,-1.6 -3.6,-3 -6.1,-3.6 -2.2,-0.5 -6,-1.1 -8.6,-1.1 l -1.8,-0.1 -9.4,0.4 z"
    }
  ];
  icn["GR.IN.IC.GROUND WATER WELL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M86,64L86,70L75,110L81,110L92,70L99,70L99,130L86,130L86,140L120,140L120,130L110,130L110,89L120,89L120,93L130,93L130,87C130,82.631 125.551,83 125.551,83L110,83L110,70L113.774,70L113.774,64L86,64Z"
    }
  ];
  icn["GR.IN.IC.TELECOMMUNICATIONS INFRASTRUCTURE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 109.7,116.6 4.1,13.4 -0.2,0.1 -12.2,-8.4 8.3,-5.2 z m -19.7,0 8,5.1 -12.1,8.4 4.1,-13.6 z m 9.8,-9.8 8.8,8.2 c -1.7,0.5 -8.1,5.6 -8.8,5.6 -0.2,0 -8.2,-5.4 -8.6,-5.8 l 8.5,-8.1 z m 5.3,-4.8 3.1,9.8 -6.9,-6.4 3.7,-3.4 z m -10.5,0.1 3.8,3.3 -6.9,6.4 3.1,-9.7 z m 2.1,-1 6.4,-0 -3.2,3.2 -3.2,-3.2 z M 99.2,84.8 C 99.1,85.4 99,85.5 99,86.1 v 2 h -3 c -0.5,0 -0.8,0.3 -0.8,0.8 0,0.5 0.1,0.5 0.2,1 0.4,0.1 0.4,0.2 1,0.2 h 2.6 v 2.8 h -4.5 c -0.6,0 -1.2,0.2 -1.2,0.8 0,0.5 0.3,0.8 0.8,0.8 h 4.9 v 4.9 h -4.5 c -0.5,0 -0.5,0.1 -0.9,0.2 l -2.5,7.9 -1,3.2 -4.1,13.3 -1.1,3.1 c 0,2 -1.4,3.5 -1.4,5.5 0,0.4 0.1,0.2 0.2,0.8 h 0.5 c 0.6,0 15.1,-10.3 15.4,-10.3 0.6,0 14.2,9.4 15.8,10.5 0.4,-0.2 1,-0.4 1,-1 v -0.6 c 0,-0 -1.5,-4.4 -1.7,-5 -0.4,-1.1 -1.4,-4.3 -1.5,-5.2 l -1,-3.2 -4.1,-13.2 -0.9,-3.4 c -1,-0.4 -0.3,-2.6 -1.6,-2.6 h -4.8 v -5 h 4.8 c 0.5,0 0.8,-0.3 0.8,-0.8 0,-0.5 -0.3,-0.8 -0.8,-0.8 H 100.8 V 90.1 h 2.4 c 0.7,0 1.4,-0.4 1.4,-1 v -0.2 c 0,-0.5 -0.3,-0.8 -0.8,-0.8 h -2.9 v -2.6 c 0,-0.4 -0.6,-1 -0.8,-1 -0,-0 -0.7,0.1 -0.8,0.2 z m 6.7,-15.7 c 7,1.6 10.9,4.6 15.1,8.9 3,3 7.3,11 7.3,16.9 v 4 c 0,2.1 -1.5,7.7 -2.2,9 -0.7,1.1 -1.2,2.4 -1.9,3.6 -0.3,0.4 -2.4,3.3 -2.4,3.4 0,0.7 1,1.6 1.2,2.6 1.7,-0.4 4.8,-6.3 5.7,-8.2 1.2,-2.5 2.7,-7.8 2.7,-11.4 V 94.3 c 0,-0.1 -0.9,-4.9 -1,-5.5 -0.3,-0.9 -1.4,-3.7 -1.8,-4.8 -0.9,-2.2 -3.7,-6.4 -5.2,-8 -3.6,-3.6 -10.6,-9.2 -16.9,-9.7 l -0.4,2.8 z m -1.6,10.7 c 6,0.5 13.3,9.2 13.3,16.1 v 2.2 c 0,1.5 -1.4,5.5 -1.4,5.5 0,0.2 1.2,2.9 1.4,3.2 l 0.2,0.1 1.6,-3.4 0.1,-0.6 0.7,-5.9 0.2,-0.4 -1,-5.9 c -0.7,-0.3 -0.6,-1.4 -1.1,-2.2 -0.4,-0.8 -0.8,-1.6 -1.3,-2.3 -1.1,-1.6 -1.8,-2.6 -3.2,-3.9 -2.2,-2.2 -5.8,-4.2 -9.2,-5 l -0.3,2.8 z M 68.7,95.2 v 5.1 c 0,4.2 5.4,16.3 7.9,17 0.1,-0.5 1,-2.2 1,-2.6 0,0 -2.1,-2.9 -2.3,-3.4 -0.7,-1.3 -1.3,-2.4 -1.9,-3.8 -1,-2.6 -1.8,-6 -1.8,-9.6 v -2.4 c 0,-8 3.3,-12.9 6.9,-17.5 1.4,-1.8 4.7,-4.4 6.7,-5.6 1.4,-0.8 2.5,-1.4 4.1,-2.1 0.5,-0.2 4.5,-1.3 4.5,-1.6 l -0.2,-2.6 c -2.4,0.1 -8,2.6 -9.6,3.7 -3.2,1.9 -4.8,3.6 -7.3,6.1 -3.6,3.6 -7.8,12 -7.8,19.1 l 0,0 z m 10.7,0 v 2.9 c 0,1.9 0.2,3.1 0.8,4.5 0.2,0.4 1.5,4 1.5,4 l 0.4,-0 1.5,-2.9 c -0.9,-1.2 -1.4,-4 -1.4,-6.2 v -1.8 c 0,-3.7 2.3,-8.3 4.2,-10.3 1.8,-1.8 5.9,-5.5 9.1,-5.6 L 95,77.1 C 88,77.6 79.4,87.3 79.4,95.2 z"
    }
  ];
  icn["GR.IN.IC.TELECOMMUNICATIONS TOWER"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 102.5,119.2 12,-8 2.8,9.2 1.3,4 2.1,6.9 -18.2,-12 z m -23,12 3.4,-11.7 2,-5.9 0.8,-2.6 11.9,8.2 -18,12 z m 20.4,-34.6 13,12.2 c -1.5,1 -12.3,8.5 -13.1,8.5 -0.1,0 -11.6,-7.7 -12.7,-8.5 L 99.9,96.6 z m 7.7,-7.1 0.2,0.2 1.8,5.7 2.5,8.7 -10.1,-9.3 5.6,-5.2 0,0 z m -15.5,0.6 v -0.6 l 0.4,0.2 5.4,5 -10,9.4 2.6,-9 1.6,-5 z m 2.9,-1.7 9.8,-0 -5,4.4 -4.8,-4.4 z m 3.6,-23.1 v 3.6 h -4.4 c -0.5,0 -1,0.6 -1,1 v 0.6 c 0,0.7 0.8,1 1.5,1 h 4 v 4.2 h -7.2 c -0.5,0 -1,0.6 -1,1 v 0.2 c 0,1 0.5,1.5 1.5,1.5 h 6.8 v 7 h -6.8 c -0.8,0 -1,0.3 -1.3,0.7 l -0.6,2 -4.9,15.6 -3,9.6 -3.1,9.4 -0.1,0.8 -2.9,8.7 -0.1,0.8 -0.5,2.2 c 1,0.2 0.5,0.6 1.3,0.6 h 0.2 c 0.8,0 20.1,-13.7 23.1,-15.2 2.5,1.7 22.4,15.2 23.5,15.2 0.6,0 1,-0.7 1,-1.3 0,-0.1 -1.4,-4 -1.5,-4.2 l -0.1,-0.8 -3.1,-9.7 -2.9,-9.3 -4.7,-15.7 c -0.6,-0.8 -1.4,-3.8 -1.8,-5 -0.6,-1.8 -0.5,-4.3 -2.5,-4.3 h -6.8 v -7 h 7.2 c 0.5,0 1,-0.6 1,-1 v -0.4 c 0,-0.6 -0.2,-1.3 -0.8,-1.3 h -7.4 v -4.2 h 4 c 0.7,0 1.5,-0.4 1.5,-1 v -0.6 c 0,-0.7 -0.8,-1 -1.5,-1 h -4 v -4 c 0,-0.6 -0.7,-1 -1.3,-1 -0.8,-0 -1.3,0.6 -1.3,1.4 l 0,0 z m -6.6,24.8 0.4,-0.4 -0.4,-0.2 z"
    }
  ];
  icn["GR.IN.IC.AIR TRAFFIC CONTROL FACILITY"] = text("ATC");
  icn["GR.IN.IC.PROPANE FACILITY"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 98.7,73.1 v 0.2 c 0,1 0.5,1.5 1.5,1.5 0.5,0 1.1,-0.6 1.1,-1.1 0,-0.8 -0.2,-0.8 -0.2,-1.5 -0.5,-0.1 -0.5,-0.2 -1.1,-0.2 h -0.2 c -0.5,0 -1.1,0.6 -1.1,1.1 z m -12.6,58.5 h 28.4 v 3.3 h -28.4 v -3.3 z M 75.8,119 h 48.5 v 3.3 c 0,2 -8.8,7.8 -9.8,7.8 H 85.8 c -1,0 -10,-5.8 -10,-7.6 v -3.5 l 0,0 z m 0,-27.5 c 0,-1.1 7.2,-5.8 8.5,-6.6 2.6,-1.5 7.4,-3.7 11.4,-3.7 h 8.5 c 4.1,0 9.1,2 11.6,3.7 1.3,0.9 8.5,5.4 8.5,6.6 v 4.2 H 75.8 V 91.5 l 0,0 z M 98.2,77.1 c 0.7,0 0.8,0.2 1.5,0.2 h 0.4 c 0.8,0 0.8,-0.2 1.5,-0.2 v 1.8 l 1.2,0.8 -5.5,0 c 0.3,-0.5 0.9,-0.8 0.9,-1.3 l -0,-1.3 0,0 z m -1.1,-4 c 0,-1.4 1.4,-2.4 2.8,-2.4 1.3,0 2.8,0.9 2.8,2 v 1.1 c 0,1.4 -1.6,2.4 -3,2.4 -1,0 -2.6,-1.2 -2.6,-2.4 v -0.7 h -0 z m 12.2,-8.1 h 3.5 v 3.5 h -1.8 v 6.8 c 0.7,0 2.4,0.6 2.4,1.3 v 3.7 H 109.4 V 65.1 z m -22.7,0 h 4.2 V 80.3 H 85.8 v -4.1 c 0.8,-0.2 3.1,-0.8 3.1,-1.5 v -6.1 h -2.2 v -3.5 z m 5.7,0 h 15.5 v 15.3 c -1.6,-0.4 -4.8,-0.9 -4.8,-2.6 v -0.9 c 0,-1.5 0.9,-2.1 0.9,-2.6 v -1.1 c 0,-3.2 -3,-3.2 -3.3,-4.4 h 4.2 v -1.5 h -9.6 v 1.5 h 4.2 v 0.6 c -1.9,0.1 -3.1,1.9 -3.1,4 v 0.6 c 0,1 0.9,2 0.9,2.4 v 1.3 c 0,1.4 -3.4,2.3 -4.8,2.6 V 65.1 l 0,0 z m -7.2,4.8 h 2.2 v 4 c 0,0.8 -2.1,1.2 -2.8,1.3 v 6.8 h 3 c -0.6,0.4 -2.7,1.2 -3.6,1.8 -1.2,0.7 -2.2,1.4 -3.4,2.1 -0.9,0.6 -6.1,4.7 -6.3,4.8 v 31.6 c 0,1.9 3.2,4.4 4.5,5.3 1,0.6 5.8,3.3 5.8,4.1 v 4.8 h 31.2 v -4.8 c 0,-1.6 10,-4.6 10,-10 V 91.1 c 0,-0.9 -5,-4.4 -6,-5.1 -1.2,-0.8 -2.1,-1.4 -3.3,-2.1 -0.9,-0.6 -3.2,-1.4 -3.7,-1.9 h 2.4 v -6.8 c -0.7,-0.2 -2.6,-0.5 -2.6,-1.3 v -4 h 2 V 63.5 H 85.2 v 6.3 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 114.4,134.9 0,-3.3 -28.4,0 0,3.3 z M 75.8,122.5 c 0,1.9 9,7.6 10,7.6 h 28.6 c 1,0 9.8,-5.9 9.8,-7.8 v -3.3 H 75.8 v 3.5 l 0,0 z m 0,-31 v 4.2 h 48.5 V 91.5 c 0,-1.2 -7.2,-5.7 -8.5,-6.6 -2.5,-1.7 -7.5,-3.7 -11.6,-3.7 h -8.5 c -3.9,0 -8.8,2.2 -11.4,3.7 -1.3,0.8 -8.5,5.4 -8.5,6.6 l 0,0 z M 109.4,80.3 h 4.2 v -3.7 c 0,-0.8 -1.7,-1.2 -2.4,-1.3 v -6.8 h 1.8 V 65.1 H 109.4 V 80.3 z M 86.7,68.6 h 2.2 v 6.1 c 0,0.8 -2.3,1.4 -3,1.5 v 4.2 h 5 V 65.1 h -4.2 v 3.5 z m 11.6,9.8 c 0,0.6 -0.6,0.8 -0.9,1.3 l 5.5,-0.1 -1.1,-0.8 V 77.1 c -0.7,0 -0.8,0.2 -1.5,0.2 H 99.8 c -0.8,0 -0.8,-0.2 -1.5,-0.2 l -0,1.3 0,0 z m 2.8,-6.1 c 0.1,0.7 0.2,0.8 0.2,1.6 0,0.5 -0.6,1.1 -1.1,1.1 -1,0 -1.5,-0.5 -1.5,-1.5 v -0.2 c 0,-0.5 0.6,-1.1 1.1,-1.1 h 0.2 c 0.6,0 0.6,0.1 1.1,0.2 z m -3.9,0.9 v 0.7 c 0,1.2 1.6,2.4 2.6,2.4 1.4,0 3,-1 3,-2.4 V 72.7 c 0,-1 -1.6,-2 -2.8,-2 -1.4,0 -2.8,1 -2.8,2.4 z"
    }
  ];
  icn["GR.IN.IC.GOVERNMENT SITE INFRASTRUCTURE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 100,67.3 C 90.1122,72.1037 79.3336,77.3992 70,82 c -1.2,0.6 -3.8,1.3 -3.8,2.8 l -0.1,0 0,0.4 c 0,0.6 0.1,0.6 0.2,1.1 0.5,0.1 0.5,0.2 1.1,0.2 l 65,0 c 0.7,0 1.7,-0.6 1.7,-1.1 0,-2.2 -1.7,-2.4 -3.2,-3 C 119.391,76.7575 109.17,71.7941 100,67.3 Z m -0.1,3.4 c 0.2,0 24.5,12 25.9,13 l -51.6,0 0,-0.1 C 75,83 99.7,70.7 99.9,70.7 Z m 31.6,55.6 0,-3 -63.3,0 0,3 z m 2.3,6.4 0,-3 -67.7,0 0,3 z m -6.2,-40.7 2.4,0 0,-3.2 -7.9,0 0,3.2 2.1,0 -0.6,25.5 -1.5,0 0,3.8 7.9,0 0,-3.8 -1.5,0 z m -14.6,-3.2 -7.6,0 0,3.2 2.2,0 -0.9,25.4 -1.3,0 0,3.8 7.6,0 0,-3.8 -1.4,0 -0.7,-25.5 2.1,0 z m -20.8,3.1 2.3,0 0,-3.2 -7.8,0 0,3.2 2.3,0 -0.8,25.4 -1.5,0 0,3.8 7.8,0 0,-3.8 -1.7,0 z m -22.5,25.5 0,3.8 8,0 0,-3.8 -1.5,0 -0.8,-25.5 2.3,0 0,-3.2 -8,0 0,3.2 2.4,0 -0.9,25.5 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 74.1,83.6 h 51.6 C 124.3,82.7 100,70.7 99.8,70.7 99.6,70.7 74.9,83 74.1,83.6 l 0,0 z"
    }
  ];
  icn["GR.IN.IC.MILITARY INFRASTRUCTURE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 65.2,93.1 c 0,-0.5 15.6,-11.5 17.3,-12.8 1.5,-1.2 17.3,-12.6 17.4,-12.6 0.6,0 15.9,11.2 17.6,12.5 1.7,1.3 17.3,12.4 17.3,12.9 0,0 -6.1,18.6 -6.7,20.3 -1.2,3.4 -2.2,6.8 -3.4,10.3 -1,3 -2.7,7.2 -3.3,10 H 78.4 c -0.1,-1.7 -5.6,-18 -6.5,-20.4 -0.6,-1.4 -6.6,-20.1 -6.6,-20.1 z m 8.4,38.5 2,6.1 49,0 8.4,-26.4 6.6,-20.5 -39.7,-28.7 -39.6,28.8 13.3,40.6 0,0 z M 100,76.2 c 2.7,2.4 26.6,18.7 26.6,19.6 0,0.8 -4.1,12.7 -4.5,13.4 l -5.6,17.4 -32.5,0 c -0.9,0 -3,-7.4 -3.5,-8.7 -0.6,-1.8 -2.9,-7.8 -2.9,-9.4 L 74.3,98.9 73.5,95.5 100,76.2 z m 30.5,18 c -3.1,-2.1 -30,-22.2 -30.7,-22.2 -0.1,0 -13.8,10.1 -15.2,11.1 -2,1.4 -14.3,10.7 -15.2,10.9 v 0.7 c 0,1 2.9,7 2.9,9.3 l 8.7,26.3 37.7,0 5,-15.7 6.6,-20.4 z m -50.4,3.2 c 0.8,-0.2 8.6,-6.1 10,-7 1.2,-0.8 9.5,-7.1 10,-7.1 0,0 9,6.5 10,7.2 1.2,0.8 9.7,6.5 9.7,7.3 0,1.2 -0.4,2 -0.9,2.7 0,1.6 -2.6,8.7 -3.3,10.6 -0.5,1.4 -2.8,10.1 -3.7,10.1 H 88.1 c -0.7,0 -1.8,-4 -2,-4.8 -0.6,-1.7 -1.2,-3.3 -1.7,-5.1 -0.6,-2.1 -3.1,-8.7 -3.1,-10.3 l -0.3,0.1 -0.9,-3.7 z m -3.2,-0.7 8.8,27 28.2,-0 8.7,-27.2 c -3.2,-1.7 -21.7,-16.3 -22.9,-16.3 -0.3,0 -20.6,15 -22.9,16.6 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 77,96.8 c 2.3,-1.5 22.6,-16.6 22.9,-16.6 1.2,0 19.7,14.6 22.9,16.3 l -8.7,27.2 -28.3,0 -8.8,-27 z m -3.6,-1.3 0.9,3.4 3.4,9.7 c 0,1.5 2.3,7.6 2.9,9.4 0.4,1.3 2.5,8.7 3.5,8.7 l 32.5,-0 5.5,-17.4 c 0.4,-0.6 4.5,-12.6 4.5,-13.4 0,-1 -23.9,-17.2 -26.6,-19.6 L 73.5,95.5 z m 6.7,2 0.9,3.7 0.3,-0.1 c 0,1.6 2.4,8.2 3.1,10.3 0.5,1.8 1.1,3.4 1.7,5.1 0.2,0.8 1.3,4.8 2,4.8 h 23.8 c 1,0 3.3,-8.6 3.7,-10.1 0.6,-1.9 3.3,-9 3.3,-10.6 0.5,-0.7 1,-1.5 1,-2.7 0,-0.8 -8.5,-6.5 -9.7,-7.3 -1,-0.7 -9.9,-7.2 -10,-7.2 -0.5,0 -8.8,6.2 -10,7 -1.3,1 -9.2,6.8 -10,7.1 z m 43.8,17.1 -5,15.7 -37.7,-0 -8.7,-26.3 c 0,-2.3 -2.9,-8.3 -2.9,-9.3 v -0.7 c 1,-0.2 13.2,-9.5 15.2,-10.9 1.4,-1 15.1,-11.1 15.2,-11.1 0.7,0 27.6,20 30.7,22.2 l -6.6,20.4 z M 65.2,93.1 c 0,0 6,18.7 6.6,20.1 1,2.4 6.4,18.7 6.5,20.4 h 43.1 c 0.6,-2.8 2.3,-7 3.3,-10 1.2,-3.5 2.1,-6.8 3.4,-10.3 0.6,-1.7 6.7,-20.2 6.7,-20.3 0,-0.5 -15.6,-11.5 -17.3,-12.9 C 115.8,79 100.5,67.7 99.9,67.7 99.8,67.7 84.1,79.2 82.5,80.3 80.8,81.6 65.2,92.7 65.2,93.1 z"
    }
  ];
  icn["GR.IN.IC.POSTAL SERVICE INFRASTRUCTURE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 64.3,86.6 99.9,102.1 135.7,86.6 v 31.8 H 64.3 v -31.8 l 0,0 z m 62.5,1.9 c -3.1,1.2 -5.9,2.6 -9,3.9 -2.2,0.9 -17.1,7.7 -18,7.7 -0.5,0 -15.8,-7 -17.8,-7.8 -3,-1.2 -5.9,-2.8 -8.8,-3.9 -2.3,-0.9 -6.8,-3.4 -8.8,-3.8 v -3.2 h 71.5 v 3.2 c -2.1,0.4 -6.6,2.9 -9,3.9 z m -64.1,31.7 h 74.7 V 79.8 H 62.7 v 40.4 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 64.3,86.6 0,31.8 71.5,0 0,-31.8 -35.8,15.5 z m 0,-2 c 2,0.5 6.5,3 8.8,3.8 2.9,1.1 5.8,2.7 8.8,3.9 2,0.8 17.3,7.8 17.8,7.8 0.9,0 15.9,-6.8 18,-7.7 3.1,-1.3 5.9,-2.6 9,-3.9 2.4,-1 6.9,-3.4 9,-3.9 V 81.4 H 64.3 v 3.2 l 0,0 z"
    }
  ];
  icn["GR.IN.IC.POSTAL DISTRIBUTION CENTER"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 64.3,94.6 99.9,110.1 135.7,94.6 V 126.4 H 64.3 l 4e-4,-31.8 0,0 z m 62.5,1.9 c -3.1,1.2 -5.9,2.6 -9,3.9 -2.2,0.9 -17.1,7.7 -18.1,7.7 -0.5,0 -15.7,-6.9 -17.8,-7.8 -3,-1.2 -5.9,-2.8 -8.8,-3.9 -2.3,-0.9 -6.8,-3.4 -8.8,-3.9 v -3.2 h 71.5 v 3.2 c -2.1,0.5 -6.6,2.9 -9,3.9 z M 62.7,128.2 h 74.7 V 87.8 H 62.7 v 40.5 z m 66.1,-54.4 -5.4,0 0,13.3 -2,0 0,-13.3 -5.4,0 0,-1.8 12.8,0 0,1.8 m -14,9 c -1e-5,0.6 -0.1,1.2 -0.4,1.7 -0.3,0.6 -0.7,1.1 -1.1,1.5 -0.5,0.4 -1.2,0.8 -1.9,1 -0.7,0.2 -1.6,0.4 -2.6,0.4 -1.1,0 -2.1,-0.1 -2.9,-0.3 -0.9,-0.2 -1.8,-0.5 -2.7,-0.9 l 0,-2.5 0.1,0 c 0.8,0.6 1.6,1.1 2.7,1.5 1,0.3 1.9,0.5 2.8,0.5 1.2,10e-7 2.2,-0.2 2.9,-0.7 0.7,-0.5 1,-1.1 1,-1.9 -1e-5,-0.7 -0.2,-1.2 -0.5,-1.5 -0.3,-0.3 -0.8,-0.6 -1.5,-0.7 -0.5,-0.1 -1.1,-0.2 -1.7,-0.3 -0.6,-0.1 -1.2,-0.2 -1.9,-0.3 -1.3,-0.3 -2.3,-0.8 -3,-1.5 -0.6,-0.7 -1,-1.6 -1,-2.7 0,-1.3 0.5,-2.3 1.6,-3.1 1.1,-0.8 2.4,-1.2 4.1,-1.2 1.1,1.6e-5 2,0.1 2.9,0.3 0.9,0.2 1.7,0.5 2.4,0.8 l 0,2.4 -0.1,0 c -0.6,-0.5 -1.3,-0.9 -2.3,-1.2 -0.9,-0.3 -1.9,-0.5 -2.9,-0.5 -1.1,1.3e-5 -1.9,0.2 -2.6,0.7 -0.7,0.4 -1,1 -1,1.7 -1e-5,0.6 0.2,1.1 0.5,1.5 0.3,0.4 0.9,0.6 1.7,0.8 0.4,0.1 1,0.2 1.8,0.3 0.8,0.1 1.5,0.3 2,0.4 1.1,0.3 2,0.7 2.5,1.4 0.6,0.6 0.9,1.4 0.9,2.5 m -14.4,4.3 -6,0 0,-1.5 2,0 0,-12 -2,0 0,-1.5 6,0 0,1.5 -2,0 0,12 2,0 0,1.5 m -8.6,-7.5 c -1.5e-5,1.4 -0.3,2.6 -0.9,3.7 -0.6,1.1 -1.4,2 -2.4,2.6 -0.7,0.4 -1.5,0.7 -2.3,0.9 -0.8,0.2 -2,0.3 -3.4,0.3 l -3.8,0 0,-15.1 3.8,0 c 1.5,1.5e-5 2.6,0.1 3.5,0.3 0.9,0.2 1.6,0.5 2.2,0.9 1,0.6 1.8,1.5 2.4,2.6 0.6,1.1 0.9,2.3 0.9,3.8 m -2.1,-0 c -1.2e-5,-1.2 -0.2,-2.2 -0.6,-3 -0.4,-0.8 -1,-1.5 -1.8,-1.9 -0.6,-0.3 -1.2,-0.6 -1.9,-0.7 -0.7,-0.1 -1.5,-0.2 -2.4,-0.2 l -1.9,0 0,11.7 1.9,0 c 1,2e-6 1.8,-0.1 2.5,-0.2 0.7,-0.1 1.4,-0.4 2,-0.8 0.8,-0.5 1.3,-1.1 1.7,-1.9 0.4,-0.8 0.6,-1.8 0.6,-2.9"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 126.8,96.5 c -3.1,1.2 -5.9,2.6 -9,3.9 -2.2,0.9 -17.1,7.7 -18.1,7.7 -0.5,0 -15.7,-6.9 -17.8,-7.8 -3,-1.2 -5.9,-2.8 -8.8,-3.9 -2.3,-0.9 -6.8,-3.4 -8.8,-3.9 v -3.2 h 71.5 v 3.2 c -2.1,0.5 -6.6,2.9 -9,3.9 z m -62.5,-1.9 35.6,15.5 35.8,-15.5 V 126.4 H 64.3 l 4e-4,-31.8 0,0 z"
    }
  ];
  icn["GR.IN.IC.POST OFFICE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 74.7,92.8 24.9,10.8 L 124.7,92.8 V 115.1 H 74.7 V 92.8 l 0,0 z m 43.7,1.3 c -2.2,0.9 -4.1,1.8 -6.3,2.7 -1.5,0.6 -12,5.4 -12.6,5.4 -0.4,0 -11,-4.9 -12.5,-5.4 -2.1,-0.8 -4.1,-1.9 -6.2,-2.7 -1.6,-0.6 -4.8,-2.4 -6.2,-2.7 v -2.2 h 50 v 2.3 c -1.5,0.3 -4.6,2 -6.3,2.7 z M 73.6,116.4 H 125.8 V 88.1 H 73.6 V 116.4 z M 99.8,64.3 c 0.2,0 35.5,19.8 37.1,21.2 h -4.8 v 38.6 h -63.9 v -38.6 h -4.9 c 1.6,-1.4 6.9,-4.1 9.1,-5.3 3.1,-1.8 6,-3.4 9.1,-5.3 1.6,-1 18.3,-10.6 18.4,-10.6 z m -43.3,23.1 9.9,-0.2 v 38.4 h 67.4 v -38.4 l 9.9,0.2 c -0.5,-0.6 -43.6,-25 -43.9,-25 -0,0 -19.5,11.4 -21.7,12.5 -3.5,1.8 -7.4,4.2 -10.9,6.2 -2.7,1.6 -8.8,4.6 -10.8,6.3 l 0,0 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "M 99.8,64.3 C 99.8,64.3 83.1,73.9 81.5,74.9 c -3,1.8 -6,3.5 -9.1,5.3 -2.2,1.2 -7.5,4 -9.1,5.3 l 4.9,0 0,38.6 63.9,0 0,-38.7 4.8,0 c -1.6,-1.4 -36.9,-21.2 -37.1,-21.2 z M 73.6,88.1 l 52.3,0 0,28.3 -52.3,0 0,-28.3 z m 44.9,6.1 c -2.2,0.9 -4.1,1.8 -6.3,2.7 -1.5,0.6 -12,5.4 -12.6,5.4 -0.4,0 -11,-4.9 -12.5,-5.4 -2.1,-0.8 -4.1,-1.9 -6.2,-2.7 -1.6,-0.6 -4.8,-2.4 -6.2,-2.7 v -2.2 h 50 v 2.3 c -1.5,0.3 -4.6,2 -6.3,2.7 z M 74.7,92.8 99.6,103.7 124.7,92.8 V 115.1 H 74.7 V 92.8 l 0,0 z"
    }
  ];
  icn["GR.IN.IC.ENCLOSED FACITLITY (PUBLIC VENUE)"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 114.9,121.3 0,-1.2 -30.7,0 0,1.2 z m -31.9,-2.5 -10.4,-16.7 -1,0.4 10.6,16.6 z m 13,-13.8 h 7 c 0.6,0 4.4,-6 5,-6.8 H 91 c 0.6,0.9 4.4,6.8 5,6.8 z m 15.3,12 0,-1 -23.5,0 0,1 z m 2.4,-1.6 8.6,-13.6 -0.8,-0.4 -8.5,13.3 z M 76.8,101.9 c 0,0.3 3.7,5.9 4.2,6.7 0.4,0.6 4.2,6.7 4.3,6.7 0.4,0 0.5,-0.2 0.7,-0.5 l -8.5,-13.4 c -0.2,0.1 -0.7,0.2 -0.7,0.5 z m 31,10.8 0,-1 -16.5,0 0,1 z m -19.3,-1.2 0.7,-0.4 -6.7,-10.5 -0.7,0.4 z m 22.3,-0 6.4,-10.5 -0.8,-0.3 -6.6,10.5 z m -6.4,-3 0,-1 -9.7,0 0,1 z m 2.8,-1.8 c 0,0.6 0.3,0.6 0.7,0.6 l 4.2,-6.9 -0.6,-0.4 c -0.2,0.2 -4.3,6.6 -4.3,6.7 z m -20.3,-6.3 4.1,7 c 0.3,-0.1 0.8,-0.2 0.8,-0.5 0,-0.6 -3.7,-5.6 -4,-6.9 l -1,0.4 z m -19.7,18 0.3,-2.8 c 0.1,-3.9 2,-11.4 3,-14.6 1.6,-4.7 3.2,-8.3 5.6,-12 4.4,-6.5 12,-12.4 22.8,-12.4 h 1.1 c 9.6,0 17,4.8 21.3,10.2 1.2,1.5 2.3,2.8 3.2,4.6 0.5,0.9 1,1.6 1.4,2.6 0.4,0.9 0.7,1.9 1.1,2.7 0.8,1.4 3.6,10.3 3.6,12.1 v 0.6 h 0.3 v 1 l 1.2,10.8 -0.1,2.2 H 67 l 0.2,-5 0,0 z m -2.3,-4 -0.3,2.4 -0.4,5.6 v 3.8 h 70.9 v -1 c 0,-2 0.1,-6.4 -0.2,-8.1 -0.4,-2.4 -0.5,-5.2 -1,-7.5 -0.4,-2 -2.9,-12.7 -3.9,-13.1 0,-1.6 -3.5,-7.6 -4.3,-8.8 -1.8,-2.6 -3.8,-5 -6.2,-7 -4.9,-3.9 -10.5,-7 -19.3,-7 h -1 c -11.8,0 -19.6,5.9 -24.6,12.8 -1.4,1.9 -2.4,3.8 -3.5,5.9 -1.2,2.3 -1.7,4.2 -2.6,6.7 -1.2,3 -3.4,11.4 -3.5,15.3 l 0,0 z m 52.2,4.7 c 0.4,-1.3 4.2,-6.6 5.2,-8.3 0.6,-1 5.1,-7.9 5.1,-8.2 0,-0.3 -0.6,-0.4 -0.8,-0.5 l -10.6,16.6 1.1,0.4 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 84.2,120.1 h 30.7 v 1.2 H 84.2 v -1.2 z m 3.6,-4.2 h 23.5 v 1 H 87.8 v -1 z m 3.5,-4.2 h 16.5 v 1 H 91.4 v -1 z m 3.3,-4.2 h 9.7 v 1 h -9.7 v -1 z m 22.4,11.5 -1.1,-0.4 10.6,-16.6 c 0.3,0.1 0.8,0.2 0.8,0.5 0,0.3 -4.6,7.2 -5.1,8.2 -1,1.8 -4.9,7 -5.2,8.3 z m -45.4,-16.6 1,-0.4 10.4,16.7 -0.8,0.4 -10.6,-16.6 z m 13.7,12.8 c -0.2,0 -4,-6 -4.3,-6.7 -0.5,-0.8 -4.2,-6.3 -4.2,-6.6 0,-0.3 0.4,-0.4 0.7,-0.5 l 8.5,13.3 c -0.2,0.3 -0.2,0.5 -0.7,0.5 z m 36.2,-13.8 0.8,0.4 -8.6,13.6 -0.8,-0.6 8.6,-13.4 z m -5.1,-0.6 0.8,0.3 -6.4,10.5 -1,-0.3 6.6,-10.5 z m -33.9,-0 6.7,10.5 -0.7,0.4 -6.7,-10.5 0.7,-0.4 z m 24.7,6 c 0,-0.1 4.1,-6.5 4.3,-6.7 l 0.6,0.4 -4.2,6.9 c -0.4,0 -0.7,-0.1 -0.7,-0.6 z m -19.4,-6.7 c 0.3,1.3 4,6.3 4,6.9 0,0.3 -0.6,0.4 -0.8,0.5 l -4.1,-7 1,-0.4 z m 8.2,4.9 c -0.6,0 -4.4,-6 -5,-6.8 h 17 c -0.6,0.8 -4.4,6.8 -5,6.8 h -7 z m -28.5,10.7 c 0,0.5 -0,2.8 -0.3,2.8 l -0.2,5 h 65.2 l 0.1,-2.2 -1.2,-10.8 v -1 h -0.3 v -0.6 c 0,-1.8 -2.8,-10.6 -3.6,-12.1 -0.4,-0.8 -0.7,-1.8 -1.1,-2.7 -0.5,-1 -1,-1.6 -1.5,-2.6 -0.9,-1.8 -2,-3.1 -3.2,-4.6 -4.2,-5.4 -11.6,-10.2 -21.3,-10.2 h -1 c -10.8,0 -18.5,5.8 -22.8,12.4 -2.5,3.8 -4.1,7.4 -5.7,12 -1.1,3.2 -3,10.7 -3,14.6 l 0,0 z"
    }
  ];
  icn["GR.IN.IC.OPEN FACILITY (OPEN VENUE)"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 122.4,117.1 0,-1.5 -45.1,0 0,1.5 z M 74.5,114 75.6,113.4 59.8,88.8 58.8,89.4 z m 49.6,-0.6 c 0.2,0.1 1,0.5 1.3,0.5 0.2,0 14.4,-22.4 15.9,-24.6 l -1.5,-0.5 -15.7,24.6 z m -6.6,-2.6 0,-1.7 -35,0 0,1.7 z m 2.4,-3.2 c 0,0.2 1,0.8 1.1,0.9 l 12.8,-20 h 0.2 l -1.6,-0.8 c -1.3,2.4 -12.6,19.3 -12.6,20 z m -41.1,0.9 1.4,-0.8 -12.7,-20.1 -1.3,0.8 z m 33.3,-3.9 0,-1.6 -24.4,0 0,1.6 z m 3.4,-2.8 c 0,0.6 0.6,0.7 1.1,0.9 l 9.6,-15.4 -1.2,-0.6 c -0.6,2 -9.4,14.5 -9.4,15.2 z m -32.2,1 1.4,-0.6 -9.7,-15.5 -1.3,0.8 z m 23.4,-4.5 0,-1.7 -13.8,0 0,1.7 z m 5.6,-1.7 6.4,-10.3 -1.2,-0.5 -6.6,10.2 z m -24.6,0.1 1.1,-0.8 -6.5,-10.2 -1.3,0.6 z m 6.6,-4 11,0.1 c 0.6,0 6.4,-8.9 7,-10 H 87.3 l 6.9,9.9 z"
    }
  ];
  icn["GR.IN.IC.RELIGIOUS INSTITUTION"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 101.2,68.1 c 7.9,0 18,3.8 21.7,8 5,5.7 7,12.3 7,22.8 V 131.9 H 101.2 V 68.1 z M 70.1,96.3 c 0,-8.4 3.4,-16.4 7.7,-20.7 3.9,-3.9 13.2,-7.5 20.9,-7.5 v 63.9 H 70.1 V 96.3 z m -2.6,38.3 h 65 V 99.3 c 0,-10.8 -2.5,-19.7 -8.1,-25.2 -4.8,-4.8 -15,-8.7 -24.6,-8.7 -8.3,0 -19.4,3.7 -23.6,7.9 -3.2,3.3 -4.3,5 -6.2,9.5 -1,2.4 -2.5,10 -2.5,13.2 v 38.5 l 0,0 z M 105.1,97.6 v 12.5 c 0,0.5 0.6,1.1 1.1,1.1 h 0.4 c 0.7,0 1.1,-0.8 1.1,-1.5 V 97.8 c 0,-0.5 -0.6,-1.1 -1.1,-1.1 H 106 c -0.5,0 -0.9,0.4 -0.9,0.9 z m -11.2,13.6 c 0.8,0 0.9,-1 0.9,-1.7 V 97.6 c 0,-0.5 -0.4,-0.9 -0.9,-0.9 h -0.6 c -0.5,0 -0.9,0.4 -0.9,0.9 v 12.5 c 0,0.5 0.6,1.1 1.1,1.1 h 0.4 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 105.1,97.6 c 0,-0.5 0.4,-0.9 0.9,-0.9 h 0.7 c 0.5,0 1.1,0.6 1.1,1.1 v 11.8 c 0,0.7 -0.4,1.5 -1.1,1.5 h -0.5 c -0.5,0 -1.1,-0.6 -1.1,-1.1 V 97.6 h 0 z m -3.9,34.4 h 28.7 V 98.9 c 0,-10.5 -2,-17.1 -7,-22.8 C 119.2,71.9 109.1,68.1 101.2,68.1 v 63.9 z M 94,111.2 H 93.5 c -0.5,0 -1.1,-0.6 -1.1,-1.1 V 97.6 c 0,-0.5 0.4,-0.9 0.9,-0.9 h 0.7 c 0.5,0 0.9,0.4 0.9,0.9 v 11.8 c 0,0.8 -0.1,1.8 -0.9,1.8 z M 70.1,96.3 v 35.7 H 98.8 V 68.1 c -7.7,0 -17,3.6 -20.9,7.5 -4.3,4.3 -7.7,12.3 -7.7,20.7 z"
    }
  ];
  icn["GR.IN.IC.CHILD DAY CARE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 76.6,100.3 c 0,1.8 1.1,3.4 3,3.4 h 0.6 c 1.4,0 2.4,-1.5 2.4,-3 0,-4.3 -6,-4.2 -6,-0.4 z m 26.5,-11.9 v 0.4 c 0,1.5 1.4,3.2 2.8,3.2 h 0.4 c 1.6,0 3,-1.2 3,-2.8 V 87.8 c 0,-1 -1.6,-2 -2.8,-2 h -0.2 c -1.5,-0 -3.2,1.4 -3.2,2.6 z m -3.2,-16.8 35.4,21.7 c -1.3,0.2 -4.6,-0.3 -4.6,0.9 v 34.9 H 69.3 V 94.1 c 0,-1.2 -3.3,-0.8 -4.6,-0.9 l 35.2,-21.7 0,0 z m -39.8,22.4 c 0.2,0.8 0.3,1.3 1.3,1.3 h 6.2 v 34.6 c 0,0.5 0.1,0.5 0.2,0.9 h 64 c 0.4,0 0.8,-0.3 0.8,-0.8 V 95.2 h 6 c 0.8,0 1.3,-0.4 1.3,-1.1 0,-0.6 -17.8,-11.2 -19.8,-12.5 -1.6,-1 -20,-12.3 -20,-12.3 -0.2,0 -36.7,22.5 -40,24.7 l 0,0 z m 20.9,14.2 5.9,4.3 -0.1,0.1 -4.8,2.2 c -0.2,-0.8 -1,-1.9 -1,-2.5 v -4.1 z m 28.4,-8.8 c 0.5,-0.8 0.6,-2.9 1,-3.1 0.4,-0.2 2.4,0.8 2.9,0.9 v 3.6 l -4.4,1.7 v -0.6 c -0,-0.9 0.5,-1 0.5,-2.4 z m -3,2 c 0,0.9 0,1.1 -0.4,1.7 V 104 c -2.4,0.2 -15.4,7.5 -17,7.5 -0.5,0 -6.5,-6.7 -7.3,-6.7 h -4.3 c -0.5,0 -2.8,5.2 -2.8,5.6 v 4.7 c 0,0.9 1.8,1.4 2,2.4 l -4.1,1.7 1.3,2.6 6.2,-2.8 c 1.5,0.8 9.3,5.6 10.5,5.6 h 0.6 c 0.8,0 1.9,-0.8 1.9,-1.5 v -0.4 c 0,-0.9 -7.3,-4.8 -8.4,-5.8 l 14,-6.3 v 8.4 h -3 v 6.7 h 8.4 v -6.7 h -2.8 v -9.9 l 13.2,-5.8 c 0,1.6 0.2,3.7 0.4,5.1 0.2,1.8 -0.6,3.9 1.5,3.9 2.1,0 1.3,-2.5 1.3,-4.3 0,-1.9 -0.2,-3.5 -0.2,-5.6 v -0.6 l 9.1,-4 -1,-2.9 -6.2,2.8 c 0.3,-0.6 0.7,-0.8 1,-1.4 0.2,-0.7 0.4,-1.2 0.7,-1.8 0.5,-1 0.9,-2.6 1.4,-3.4 l -11.4,-1.6 c -0.6,0.5 -3.2,3.3 -3.2,4.2 v 0.6 h -0.4 l -1.1,7.1 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 81,112.2 c 0,0.6 0.8,1.7 1,2.5 l 4.8,-2.2 0.2,-0.1 -6,-4.3 v 4.1 z m 28.4,-12.9 c 0,1.4 -0.6,1.6 -0.6,2.4 v 0.6 l 4.5,-1.7 v -3.6 c -0.5,-0.1 -2.6,-1 -2.9,-0.9 -0.4,0.2 -0.5,2.4 -1,3.1 z m -32.9,0.9 c 0,-3.9 6,-4 6,0.4 0,1.4 -1.1,3 -2.4,3 h -0.5 c -1.8,0 -3,-1.6 -3,-3.4 z m 29.5,2.8 0.4,-1.7 1.1,-7.1 h 0.4 v -0.6 c 0,-0.8 2.6,-3.7 3.2,-4.2 l 11.4,1.6 c -0.5,0.8 -0.9,2.4 -1.4,3.4 -0.3,0.6 -0.4,1.1 -0.7,1.8 -0.3,0.7 -0.7,0.8 -1,1.4 l 6.2,-2.8 1,2.9 -9.1,4 v 0.6 c 0,2.1 0.2,3.7 0.2,5.6 0,1.8 0.8,4.3 -1.3,4.3 -2.1,0 -1.3,-2.2 -1.5,-3.9 -0.2,-1.4 -0.4,-3.5 -0.4,-5.1 l -13.2,5.8 v 9.9 h 2.8 v 6.7 h -8.4 v -6.7 h 3 v -8.4 l -14,6.3 c 1.1,0.9 8.4,4.9 8.4,5.8 v 0.4 c 0,0.7 -1,1.5 -1.9,1.5 H 90.6 c -1.2,0 -8.9,-4.8 -10.5,-5.6 l -6.2,2.8 -1.3,-2.6 4.1,-1.7 c -0.3,-1 -2,-1.5 -2,-2.4 v -4.6 c 0,-0.4 2.3,-5.6 2.8,-5.6 h 4.3 c 0.8,0 6.8,6.7 7.3,6.7 1.5,0 14.6,-7.3 17,-7.5 v -0.9 z m -3,-14.8 c 0,-1.2 1.7,-2.6 3.2,-2.6 h 0.2 c 1.2,0 2.8,1.1 2.8,2 v 1.3 c 0,1.6 -1.4,2.8 -3,2.8 h -0.4 c -1.4,0 -2.8,-1.7 -2.8,-3.2 v -0.4 z m -38.4,4.9 c 1.3,0.1 4.6,-0.3 4.6,0.8 v 34.9 h 61.4 V 94.1 c 0,-1.2 3.3,-0.8 4.6,-0.9 l -35.4,-21.7 -35.2,21.8 0,0 z"
    }
  ];
  icn["GR.IN.IC.HELICOPTER LANDING SITE"] = [
    {
      type: "path",
      stroke: black,
      d:
        "M80,70 l10,10 M120,110 l-10,-10 M80,110 l10,-10 M120,70 l-10,10 M100,115 l0,20 M95,135 l10,0",
      fill: false
    },
    {
      type: "path",
      stroke: black,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 113,90 c -0.3,8.8 -1.9,20.3 -10.8,24.6 -7.7,2 -12.3,-7.1 -13.8,-13.3 -2.6,-11.5 -2.3,-26 6.9,-34.6 6.0,-4.9 13.1,1.9 14.9,7.8 2,4.9 2.8,10.2 2.8,15.5 z"
    },
    { type: "circle", fill: false, cx: 100, cy: 100, r: 40 }
  ];
  icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE LOCK"] = [
    { type: "path", fill: false, d: "m 70,70 65,30 -65,30" }
  ];
  icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE SHIP ANCHORAGE"] = [
    {
      type: "path",
      fill: false,
      stroke: "rgb(255, 0, 255)",
      d:
        "m 73.6,112.8 c 0.8,8 26.4,11.2 26.4,11.2 0,0 25.6,-3.2 26.4,-11.2 M 80,88 l 40,0 m -20,-12 0,48"
    }
  ];
  icn["GR.IN.IC.NATURAL GAS FACILITY"] = [
    {
      type: "path",
      fill: false,
      d:
        "m 100,60.5 c -16.4,0 -29.6,13.2 -29.6,29.6 0,12.8 8.3,23.9 19.7,27.8 l 0,19.7 c 3.2,1.2 6.3,1.8 9.9,1.8 3.6,0 6.7,-0.6 9.9,-1.8 l 0,-19.8 c 11.5,-3.9 19.8,-15 19.7,-27.8 0,-16.4 -13.2,-29.6 -29.6,-29.6 z"
    },
    {
      type: "text",
      stroke: false,
      x: 100,
      y: 103,
      fontsize: 35,
      text: "NG"
    }
  ];
  icn["GR.IN.IC.TOLL FACILITY"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 69.1,112.3 c 0,-0.7 0.8,-1.7 1.4,-1.7 h 0.5 c 0.8,0 1.5,0.8 1.5,1.5 v 1.2 c 0,0.5 -0.9,1.2 -1.5,1.2 h -0.2 c -0.8,0 -1.7,-0.8 -1.7,-1.4 v -0.9 l 0,0 z m -1.1,0.5 v 0.3 c 0,1.2 1.5,2.6 2.9,2.6 1.3,0 2.8,-1.5 2.8,-2.5 v -1 c 0,-1.2 -1.4,-2.6 -2.8,-2.6 -1.7,0 -2.9,1.6 -2.9,3.2 z m 27.6,-11.6 -2,-2.8 -2.3,0 4.3,2.8 z m -29.5,17.8 c 0,-0.5 0.8,-0.9 1.4,-0.9 H 99.1 c 0.8,0 1.3,0.6 1.4,1.4 -0.6,0.1 -1,0.3 -1.7,0.3 H 68 c -0.6,0 -1.8,0 -1.8,-0.6 v -0.2 z m 9.4,-10.2 15.1,0 8.2,0.2 c 0.5,0.9 2,3 1.8,4.3 l -0.2,2.6 c -0.5,0.2 -0.5,0.3 -1,0.3 H 67.1 c -0.6,0 -0.5,-0.2 -1.1,-0.3 -0.1,-0.7 -0.3,-1 -0.3,-1.8 v -0.6 c 0,-1.1 1.5,-3.5 2,-4.4 l 7.8,-0.2 z m -5.8,-2 c 0.1,-1.1 3.5,-7.1 4.3,-7.1 h 18.4 c 1,0 4,5.8 4.3,7.1 H 69.7 z m 21.7,-8.4 2.3,-0 2,2.8 -4.3,-2.8 z m 44.3,27.8 V 73.8 c -1,0.2 -10.3,6 -11.9,7 -1.3,0.8 -11.6,6.5 -11.6,7.2 0,0 1.3,2.1 1.4,2.3 l 4.9,-2.8 v 19.2 l -0.4,0.3 c -2.9,-2 -33.4,-22 -33.6,-22 -0.1,0 -3.9,5.6 -4,6.2 l 10.8,7 -18.3,0 c -0.9,1.4 -1.9,2.4 -2.8,3.8 -0.2,0.3 -2,4.4 -2,4.6 v 0.8 h -1.2 c -0.1,0.9 -2.6,4.6 -2.6,5.4 v 0.8 c 0,1.5 0.4,2.9 1.4,3.4 -0.2,0.3 -1,1.1 -1,1.6 v 0.9 c 0,1.1 1.5,1.5 2.6,1.5 v 2.3 l 0.2,2 c 0.5,0.2 0.3,0.5 1.2,0.6 0.6,0.1 1,0.2 1.7,0.2 h 1.1 l 1.7,-0.2 0.3,-0.3 0.2,-2 0,-2.5 h 19.1 v 3.1 c 0,0.8 0.3,1.2 0.6,1.7 l 1.4,0.2 1.2,-0 c 1.7,0 3.1,-0.1 3.1,-1.8 v -3.1 c 0.8,-0.2 2.6,-0.5 2.6,-1.4 v -1.7 c 0,-0.5 -0.5,-0.7 -0.9,-0.8 0.1,-0.5 1.2,-1.1 1.2,-2.5 v -2 c 0,-1.5 -2.1,-4.1 -2.5,-5.4 h -1.2 v -0.4 c 0,-1.1 -2.2,-4.8 -2.5,-5.8 l 19,12.5 c -0.4,1.6 -2,4 -2,5.2 v 7.2 h 22.9 l 0,0 z M 95.9,114.6 H 95.7 c -1.1,0 -1.8,-0.7 -1.8,-1.7 v -0.5 c 0,-1 0.6,-1.8 1.5,-1.8 h 0.5 c 1,0 1.5,1.1 1.5,2 0,1.1 -0.5,2 -1.5,2 z m -3.1,-2.5 v 1.1 c 0,1 1.6,2.5 2.9,2.5 1.4,0 2.6,-1.3 2.6,-2.8 v -0.8 c 0,-1.2 -1.3,-2.6 -2.5,-2.6 H 95.7 c -1.4,0 -2.9,1.4 -2.9,2.6 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 114.5,107.9 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z m -11.2,-7.2 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z m -5.5,-3.7 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z M 108.9,104.5 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z M 92.3,93.5 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z M 86.5,89.8 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z m 35.6,2.6 10.8,0 0,16.1 -10.8,0 z m -55.9,26.4 v 0.2 c 0,0.6 1.2,0.6 1.8,0.6 h 30.8 c 0.7,0 1.1,-0.2 1.7,-0.3 -0.1,-0.8 -0.6,-1.4 -1.4,-1.4 H 67.5 c -0.5,0 -1.4,0.4 -1.4,0.9 z m 26.6,-6.8 c 0,-1.2 1.5,-2.6 2.9,-2.6 h 0.2 c 1.2,0 2.5,1.4 2.5,2.6 v 0.8 c 0,1.4 -1.2,2.8 -2.6,2.8 -1.4,0 -2.9,-1.4 -2.9,-2.5 v -1 h -0 z m -24.8,0.6 c 0,-1.6 1.2,-3.2 2.9,-3.2 1.3,0 2.8,1.5 2.8,2.6 v 1.1 c 0,0.9 -1.4,2.5 -2.8,2.5 -1.4,0 -2.9,-1.4 -2.9,-2.6 v -0.3 z m -0.3,-3.8 c -0.5,1 -2,3.4 -2,4.4 v 0.6 c 0,0.9 0.2,1.1 0.3,1.8 0.5,0.1 0.5,0.3 1.1,0.3 h 32.3 c 0.6,0 0.5,-0.2 1,-0.3 l 0.2,-2.6 c 0.1,-1.2 -1.4,-3.4 -1.8,-4.3 l -8.2,-0.2 -15.1,-0 -7.8,0.2 z m 2,-2.2 h 27.1 c -0.4,-1.3 -3.3,-7.1 -4.3,-7.1 H 74 c -0.8,0 -4.2,6 -4.3,7.1 z m 26.2,7.8 c 1.1,0 1.5,-0.9 1.5,-2 0,-0.9 -0.6,-2 -1.5,-2 h -0.5 c -1,0 -1.5,0.8 -1.5,1.8 v 0.5 c 0,1 0.8,1.7 1.8,1.7 h 0.2 l 0,0 z M 69.1,112.3 v 0.9 c 0,0.6 1,1.4 1.7,1.4 h 0.2 c 0.6,0 1.5,-0.8 1.5,-1.2 v -1.2 c 0,-0.8 -0.8,-1.5 -1.5,-1.5 h -0.5 c -0.6,0 -1.4,1 -1.4,1.7 z"
    }
  ];
  icn["GR.IN.IC.TRAFFIC INSPECTION FACILITY"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 121.4,81.7 h 1.1 v 0.6 c 0,0.6 0.8,2.1 1.2,2.4 0.5,0.4 1.9,0.9 2.7,0.9 2.6,0 3.9,-1.9 3.9,-4.5 v -0.5 h -7.4 c -0.5,0 -1.2,0.8 -1.4,1.1 z m -22.6,23.5 c 0,-1.7 1.7,-3 3.4,-3 1.7,0 3.1,1.4 3.1,3.1 v 0.6 c 0,1.3 -1.7,2.6 -3.1,2.6 -1.7,0 -3.4,-1.3 -3.4,-3 v -0.5 z m -29.7,0 c 0,-1.8 1.3,-3 3.1,-3 1.7,0 3.3,1.4 3.3,3.1 v 0.3 c 0,1.6 -1.6,3 -3.4,3 -1.5,0 -3,-1.2 -3,-2.6 v -0.8 z m 3.7,-7 c 0,-0.4 1.6,-4.2 1.9,-5 0.6,-1.7 0.9,-3.6 3.3,-3.6 H 96.5 c 2.8,0 2.2,1.8 3.2,3.6 0.2,0.4 1.8,4.5 1.8,4.9 H 72.8 z m -3.7,1 c -2.1,0 -3.7,1.5 -3.7,3.6 v 9.2 c 0,1 1.7,2.3 3.1,2.3 v 5.3 c 0,1.8 1.3,3.3 3.3,3.3 1.4,0 3.1,-1.6 3.1,-2.6 v -5.9 h 24.8 v 6.2 c 0,1 1.7,2.3 3,2.3 h 0.2 c 1.4,0 3.1,-1.3 3.1,-2.6 v -5.9 c 1.9,0 3.3,-1.4 3.3,-3.3 v -8.1 c 0,-2 -1.4,-3.3 -3.2,-3.7 -1.4,-0.2 -1.1,-0.8 -1.6,-1.9 -0.4,-0.8 -0.7,-1.6 -1,-2.4 -1.2,-2.6 -2.2,-8.2 -5.6,-8.2 h -21.2 c -2.9,0 -3.5,3.3 -4.5,5.5 -0.6,1.4 -2.7,5.8 -3,7 z m 56.5,20.2 0.3,-3.3 0.5,-6.2 h 1.7 l 0.8,12.9 h 5.8 V 88.9 c 0,-0.6 -1.2,-1.9 -2,-1.9 l -0.6,0.1 -9.9,14.6 h 8.4 v 3.6 h -11.2 v 17.6 h 6.1 l -0,-0.8 0.2,-2.6 z m -16.8,-30.8 c 0.2,-0.9 1,-1.5 2,-1.6 v 2.2 h -2 c 0,1.4 0.8,2.2 2.2,2.2 v -2 h 2 c -0,1.3 -0.8,1.4 -1.4,2 h 7.8 l 0,10.2 10,-14.3 -10.1,-0.2 h -6.4 v -7.6 c 0,-1.2 -0.8,-2.2 -1.9,-2.2 h -0.4 c -2.2,0 -2,2.4 -2,4.7 0,1.3 -0.4,5.8 0.2,6.6 z m 0,0 v 0.6 h 2 v -2.2 c -1.1,0 -1.8,0.7 -2,1.6 z m 2.2,2.8 h 0.6 c 0.6,-0.6 1.4,-0.7 1.4,-2 h -2 v 2 z m 19.3,-12 0,-2 -8.8,-0 1,2 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 130.3,79.4 -7.9,-0 0.4,1.3 7.5,0 z m -8.1,22.2 9.9,-14.6 0.6,-0.1 -3.1,0.2 -10,14.3 -0.1,3.7 11.2,0 0,-3.6 z m -23.3,3.6 v 0.5 c 0,1.7 1.7,3 3.4,3 1.4,0 3.1,-1.4 3.1,-2.6 v -0.6 c 0,-1.7 -1.4,-3.1 -3.1,-3.1 -1.8,0 -3.4,1.3 -3.4,3 z m -29.7,0 v 0.8 c 0,1.4 1.5,2.6 3,2.6 1.8,0 3.4,-1.3 3.4,-3 v -0.3 c 0,-1.6 -1.6,-3.1 -3.3,-3.1 -1.8,0 -3.1,1.2 -3.1,3 z m 3.7,-7 h 28.6 c 0,-0.5 -1.5,-4.5 -1.8,-4.9 -1,-1.8 -0.4,-3.6 -3.2,-3.6 H 77.9 c -2.4,0 -2.6,1.9 -3.3,3.6 -0.2,0.8 -1.8,4.6 -1.8,5 z"
    }
  ];
  icn["GR.IN.IC.TUNNEL"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 94.4,116.8 c 0,-3.5 2.6,-7.2 5.9,-7.2 3.2,0 5.6,4 5.6,7.1 v 0.8 H 94.4 v -0.7 z m 27.2,-4.7 9,-4.2 c 0.2,1.7 0.8,3.2 1,5.2 0.3,1.8 0.6,3.3 0.6,5.6 v 0.5 h -10 l -0.7,-7.1 z m -43.5,4.9 0.1,2.2 H 68 c 0,-1.6 0.3,-3.8 0.6,-5.4 0.1,-0.7 0.2,-1.8 0.5,-2.4 0.1,-0.2 0.7,-2.2 0.7,-2.4 l 9.2,3.1 -0.8,4.9 z m 39,-16.8 6.2,-6.2 c 0.6,1 1.2,1.8 1.9,2.8 0.8,1.1 1.2,2 1.8,3.1 0.6,1 2.8,5.6 2.8,6.9 l -8.7,4.2 c -0.1,-2.5 -3,-9 -4,-10.6 z m -37.9,10.4 -9.1,-3 c 0.1,-1.2 2.4,-5.9 3,-7 1.2,-2.1 3,-4.2 4,-6 l 7.6,4.4 c -0.2,0.5 -2.6,4.3 -3,5.4 -0.8,1.7 -1.6,4.9 -2.4,6.2 z M 111.2,83.2 c 2.8,0.7 9.8,7.1 11.3,9.4 l -6.3,6.2 c -0.5,-1.8 -6,-6.9 -8.2,-7.4 l 3.2,-8.2 z M 78.1,93.4 C 79.7,91 88,83.8 91,83.1 L 94.9,91 c -2.6,0.6 -7.9,5 -9.2,6.9 l -7.6,-4.5 z M 92.6,82.4 c 2.6,-0.6 4.1,-1.8 7.8,-1.8 h 1.4 c 4,0 5.3,1.2 8.1,1.8 -0,1 -1.9,5.2 -2.3,6.3 -0.6,1.4 -0.4,2 -2.2,1.5 -1.1,-0.3 -2.4,-0.6 -3.6,-0.6 h -1 L 96.1,90.3 92.6,82.4 z M 66.5,119.8 H 60.4 c -0.4,0 -0.5,0.1 -0.5,0.5 v 0.2 c 0,0.4 0.1,0.5 0.5,0.5 h 79 c 0.3,0 0.7,-0.3 0.7,-0.5 0,-0.4 -0.3,-0.7 -0.7,-0.7 h -5.7 v -1.5 c 0,-10.1 -4.9,-20.4 -9.5,-25.9 C 119.8,87 111.6,79 102.2,79 h -2 c -9.7,0 -18.8,8.4 -23.6,13.7 -5,5.6 -10.1,16.6 -10.1,27.1 l 0,0 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 79,112 -9.3,-3.1 c -0,0.2 -0.6,2.2 -0.7,2.4 -0.2,0.6 -0.4,1.7 -0.5,2.4 -0.2,1.5 -0.5,3.8 -0.5,5.4 h 10.3 l -0.1,-2.2 0.8,-4.9 z m 15.5,5.4 h 11.4 v -0.8 c 0,-3.1 -2.4,-7.1 -5.6,-7.1 -3.3,0 -5.9,3.8 -5.9,7.2 v 0.7 z m 27.9,1.7 h 10 v -0.5 c 0,-2.3 -0.4,-3.8 -0.6,-5.6 -0.3,-2 -0.9,-3.5 -1,-5.2 l -9,4.2 0.7,7.1 z m -5.2,-19 c 1.1,1.6 4,8.1 4,10.6 l 8.7,-4.2 c 0,-1.2 -2.1,-5.8 -2.8,-6.8 -0.7,-1.1 -1.1,-2 -1.8,-3.1 -0.7,-1 -1.3,-1.8 -1.9,-2.8 l -6.2,6.2 z m -37.9,10.4 c 0.7,-1.4 1.6,-4.5 2.4,-6.2 0.5,-1.1 2.9,-4.9 3,-5.4 l -7.6,-4.4 c -1,1.8 -2.8,4 -4,6 -0.6,1.1 -2.9,5.8 -3,7 l 9.1,3 z m 28.8,-19.1 c 2.1,0.5 7.6,5.6 8.2,7.4 l 6.3,-6.1 c -1.5,-2.3 -8.5,-8.8 -11.3,-9.5 l -3.2,8.2 z m -30,2 7.6,4.6 C 87,96 92.3,91.6 94.9,91 l -3.8,-7.9 c -3.1,0.7 -11.4,7.9 -13,10.3 z M 92.6,82.4 l 3.5,7.9 4.6,-0.6 h 1 c 1.3,0 2.6,0.3 3.6,0.6 1.7,0.4 1.6,-0.1 2.2,-1.5 0.4,-1.1 2.3,-5.3 2.3,-6.3 -2.8,-0.6 -4,-1.9 -8.1,-1.9 h -1.4 c -3.6,0 -5.2,1.3 -7.7,1.9 z"
    }
  ];
  icn["GR.IN.IC.PUMPING STATION"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 83.2,83.8 0,1.2 0,5.6 -11.3,0 0,-0 c -0.2,0 -0.3,0 -0.5,0 -0.1,6.6e-4 -0.1,-9.6e-4 -0.2,0 -2.7,0 -4.9,0.3 -6.5,1.7 -1.4,1.2 -2,3.3 -2.1,5.9 l -0.1,0 0,1.2 c 8e-6,0.1 -0,0.2 -0,0.3 l 0,0 0,14.1 -2.8,0 0,2.4 80.8,0 0,-2.4 -2.8,0 0,-14 0,-1.6 -0.1,0 c -0.1,-2.6 -0.5,-4.6 -1.8,-5.9 -1.5,-1.4 -3.8,-1.7 -6.8,-1.7 l 0,-0 -0.3,0 c -0.2,-5.6e-4 -0.3,-0 -0.4,-0 l 0,0 -11.3,0 0,-5.6 0,-1.2 -1.2,0 -31.2,0 -1.2,0 z m 2.4,2.4 28.8,0 0,27.2 -28.8,0 0,-27.2 z M 71.2,93 c 0.1,-0 0.1,0 0.2,0 l 11.8,0 0,8.4 -7.5,0 c -0.8,-0.1 -1.4,-0.1 -2,-0 -0,0 -0,0 -0.1,0 -0,0 -0,-0 -0,0 l 0,0 c -0.5,0.1 -1.2,0.3 -1.5,0.8 -0.4,0.5 -0.4,1.1 -0.4,1.6 -0,0.4 -0,0.8 0,1.2 l -0,0 0,8.8 -6.8,0 0,-14.5 c 0,-3 0.5,-4.5 1.4,-5.3 C 67.1,93.3 68.7,93.1 71.2,93 z m 45.6,0 11.8,0 c 0.1,9.7e-4 0.1,-0 0.2,0 2.8,0.1 4.5,0.4 5.2,1.1 0.8,0.7 1.2,2.3 1.2,5.2 l 0,14.5 -6.8,0 0,-8 0,0 c -0,-0.1 -0,-0.3 -0,-0.4 0,-0.9 0.2,-1.6 -0.1,-2.5 -0.1,-0.5 -0.6,-1.2 -1.2,-1.4 -0.2,-0.1 -0.5,-0 -0.7,-0 l 0,-0.1 -9.6,0 0,-8.4 z M 74,103.8 l 9.2,0 0,10 -9.2,0 0,-8.5 0,0 c 0,-0.6 -0,-1.1 -0,-1.4 0,-0.1 -0,-0 0,-0.1 z m 42.8,0 9.2,0 c 0,0.2 0,0.8 0,1.6 l -0,0 0,8.4 -9.2,0 0,-10 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 116.8,93 11.8,0 c 0.1,9.7e-4 0.1,-0 0.2,0 2.8,0.1 4.5,0.4 5.2,1.1 0.8,0.7 1.2,2.3 1.2,5.2 l 0,14.5 -6.8,0 0,-8 0,0 c -0,-0.1 -0,-0.3 -0,-0.4 0,-0.9 0.2,-1.6 -0.1,-2.5 -0.1,-0.5 -0.6,-1.2 -1.2,-1.4 -0.2,-0.1 -0.5,-0 -0.7,-0 l 0,-0.1 -9.6,0 0,-8.4 z m -45.6,0 c 0.1,-0 0.1,0 0.2,0 l 11.8,0 0,8.4 -7.5,0 c -0.8,-0.1 -1.4,-0.1 -2,-0 -0,0 -0,0 -0.1,0 -0,0 -0,-0 -0,0 l 0,0 c -0.5,0.1 -1.2,0.3 -1.5,0.8 -0.4,0.5 -0.4,1.1 -0.4,1.6 -0,0.4 -0,0.8 0,1.2 l -0,0 0,8.8 -6.8,0 0,-14.5 c 0,-3 0.5,-4.5 1.4,-5.3 C 67.1,93.3 68.7,93.1 71.2,93 z m 14.4,-6.8 28.8,0 0,27.2 -28.8,0 0,-27.2 z"
    }
  ];
  icn["GR.IN.IC.RESERVOIR"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 127.3 69.1 C 127 69.1 126.7 69.2 126.4 69.2 C 123.4 69.5 120.8 71.9 118.4 74.5 C 115.9 77 113.5 79.7 111.5 80.9 C 108.9 82.4 105.5 82.5 101.9 82.6 C 98.3 82.7 94.7 82.9 91.8 84.9 C 89.7 86.5 88.6 88.5 87.5 90.3 C 86.4 92 85.2 93.4 82.7 94.2 C 79.4 95.3 72 96.4 66.9 98.8 C 64.3 100.1 62.1 101.7 61.5 104 C 60.8 106.3 61.7 109.1 64.7 112.3 L 65.1 111.9 L 65.1 120.1 L 84.3 120.1 L 84.3 129.7 L 86.7 129.7 L 86.7 120.1 L 97.9 120.1 L 97.9 129.7 L 100.3 129.7 L 100.3 120.1 L 117.1 120.1 L 117.1 112.5 C 117.4 112.2 117.7 111.9 118 111.5 C 119 110.1 119.3 108.5 119.5 106.9 C 119.8 103.7 119.5 100.5 121.7 97.7 C 123.1 95.9 126 95.4 129.1 94.7 C 132.1 94.1 135.4 93.3 137.2 90.4 C 139.4 86.7 139.1 81.3 137.2 76.8 C 136.3 74.5 134.9 72.5 133 71.1 C 131.4 69.9 129.5 69.1 127.3 69.1 z M 127.4 70.7 C 129.2 70.7 130.7 71.3 132.1 72.3 C 133.6 73.5 134.9 75.4 135.8 77.4 C 137.5 81.5 137.6 86.6 135.8 89.6 C 134.5 91.8 131.7 92.5 128.7 93.2 C 125.7 93.8 122.4 94.3 120.5 96.7 C 117.8 100 118.2 103.7 117.9 106.7 C 117.8 108.2 117.5 109.5 116.7 110.6 C 116.5 110.8 116.3 111.1 116.1 111.3 L 65.8 111.3 L 65.9 111.3 C 63.1 108.2 62.6 106.1 63 104.4 C 63.5 102.8 65.2 101.4 67.6 100.3 C 72.3 98 79.5 96.9 83.1 95.8 C 86.1 94.8 87.7 92.9 88.8 91.1 C 90 89.3 90.9 87.5 92.8 86.2 C 95.1 84.5 98.4 84.3 102 84.2 C 105.5 84.1 109.2 84.1 112.3 82.3 C 114.7 80.8 117.1 78.1 119.5 75.6 C 121.9 73.1 124.4 71 126.6 70.8 C 126.9 70.8 127.1 70.7 127.4 70.7 z "
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 127.4,70.7 c 1.8,-0 3.3,0.6 4.7,1.6 1.5,1.2 2.8,3 3.7,5.1 1.7,4.1 1.9,9.2 0.1,12.2 -1.3,2.2 -4.1,3 -7.1,3.6 -3,0.6 -6.3,1.1 -8.3,3.5 -2.6,3.3 -2.3,7.1 -2.6,10 -0.1,1.5 -0.4,2.8 -1.2,3.8 -0.2,0.2 -0.4,0.5 -0.6,0.7 l -50.2,0 0,-0 c -2.8,-3 -3.3,-5.2 -2.8,-6.8 0.5,-1.6 2.1,-3 4.5,-4.2 4.8,-2.3 11.9,-3.4 15.6,-4.5 3,-1 4.5,-2.8 5.7,-4.6 1.2,-1.8 2.1,-3.6 3.9,-4.9 2.3,-1.7 5.7,-1.9 9.2,-2 3.5,-0.1 7.3,-0.1 10.3,-1.9 2.5,-1.4 4.8,-4.2 7.2,-6.7 2.4,-2.5 4.9,-4.6 7.1,-4.8 0.3,-0 0.5,-0.1 0.8,-0.1 z m -41.9,49 13.6,0 0,10 -13.6,0 z"
    }
  ];
  icn["GR.IN.IC.STORAGE TOWER"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 118.3,121 0.4,5.3 0.7,12.8 h 2.9 c 0,-6.1 -1.1,-12.6 -1.1,-18.6 0,-3.4 -0.4,-6.2 -0.4,-9.6 -0.1,-5.3 0.2,-3 2.6,-6.6 l -0.3,-3.1 0,-1.1 h -4.2 V 84 c -2.5,0.6 -5.2,1.8 -8.3,2.6 -2.6,0.6 -6.4,1.4 -9.4,1.4 h -2.4 c -7.6,0 -12.2,-2.6 -18,-4 v 16.2 h -4.2 v 0.7 l -0.3,3.7 3.2,3.7 -2,30.8 h 3.1 v -3.3 l 1.4,-21.7 c 0.5,0.4 2.1,2.7 3,3.6 0.9,0.9 2.4,2.2 3.5,2.9 2.2,1.5 5.6,3.8 8.7,4.1 v 14.4 h 5.6 v -14.4 c 3.7,-0.9 6.2,-2.2 8.8,-4.3 1.4,-1.1 2.2,-1.8 3.4,-3 0.7,-0.7 2.5,-3.2 3,-3.4 v 3.1 l 0.2,3.8 z M 99.7,85.2 c 7.4,0 23,-4.4 25.7,-8.4 -2.8,-1.5 -25.1,-16 -25.3,-16 -0.4,0 -24.9,15.4 -25.5,16.2 2.6,3.5 16.6,8.2 23.3,8.2 h 1.8 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 97.9,85.2 c -4.3,0 -11.7,-2 -17,-4.3 l -0,3.2 c 5.8,1.4 10.4,4 18,4 h 2.4 c 3,0 6.9,-0.8 9.4,-1.4 3,-0.8 5.8,-2 8.3,-2.6 V 80.8 c -6,2.4 -14.4,4.4 -19.3,4.4 H 97.9 z"
    }
  ];
  icn["GR.IN.IC.SURFACE WATER INTAKE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 63.4 75.5 L 63.4 76.3 L 63.4 90.7 L 63.4 91.5 L 64.2 91.5 L 75.7 91.5 C 76.5 96.6 79.8 99.1 83.3 101 C 87.1 102.9 91.3 104.3 93.8 107.5 C 94.8 108.9 94.9 110.7 95.2 112.6 C 95.4 113.6 95.6 114.5 96.2 115.4 C 96.7 116.2 97.5 117 98.8 117.5 C 101.2 118.6 108.7 120.7 115.9 122.4 C 119.6 123.2 123.1 123.9 126 124.3 C 127.5 124.4 128.7 124.5 129.8 124.5 C 130.8 124.4 131.6 124.3 132.2 123.8 C 134.8 121.7 136.1 119.9 136.5 118.3 C 136.8 116.8 136.1 115.4 135 114.4 C 133.9 113.4 132.4 112.5 131 111.7 C 129.7 110.8 128.4 109.9 127.7 108.8 C 124.2 103.6 121 95.5 113.4 91.5 L 119 91.5 L 119.8 91.5 L 119.8 90.7 L 119.8 76.3 L 119.8 75.5 L 119 75.5 L 64.2 75.5 L 63.4 75.5 z M 65 77.1 L 118.2 77.1 L 118.2 89.9 L 109.4 89.9 L 109.4 81.1 L 73.8 81.1 L 73.8 89.9 L 65 89.9 L 65 77.1 z M 76.9 91.5 L 110.5 91.5 C 119.4 94.8 122.7 103.5 126.7 109.5 C 127.6 110.8 129 111.8 130.4 112.7 C 131.8 113.6 133.2 114.4 134.2 115.3 C 135.1 116.2 135.6 117 135.3 118.1 C 135.1 119.2 134 120.8 131.4 122.9 C 131.3 123 130.6 123.2 129.7 123.3 C 128.8 123.3 127.6 123.3 126.2 123.1 C 123.3 122.8 119.8 122.1 116.2 121.3 C 109 119.6 101.5 117.3 99.3 116.4 C 98.2 116 97.6 115.4 97.2 114.8 C 96.8 114.1 96.6 113.3 96.4 112.4 C 96.1 110.6 96 108.5 94.7 106.8 C 91.9 103.2 87.6 101.8 83.9 99.9 C 80.5 98.1 77.7 96.1 76.9 91.5 z "
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 76.9,91.5 33.6,0 c 8.9,3.3 12.2,12 16.2,18 0.9,1.3 2.3,2.3 3.7,3.2 1.4,0.9 2.8,1.7 3.8,2.6 0.9,0.9 1.4,1.7 1.2,2.8 -0.2,1.1 -1.3,2.7 -3.9,4.8 -0.2,0.1 -0.8,0.3 -1.7,0.4 -0.9,0 -2.2,-0 -3.6,-0.2 -2.8,-0.3 -6.4,-1 -10,-1.8 -7.2,-1.7 -14.7,-3.9 -16.9,-4.8 -1.1,-0.4 -1.6,-1 -2.1,-1.7 -0.4,-0.7 -0.6,-1.5 -0.8,-2.3 -0.3,-1.8 -0.4,-3.9 -1.7,-5.6 -2.8,-3.6 -7.1,-5 -10.8,-6.9 C 80.5,98.1 77.7,96.1 76.9,91.5 z m -11.9,-14.4 53.2,0 0,12.8 -8.8,0 0,-8.8 -35.6,0 0,8.8 -8.8,0 0,-12.8 z"
    }
  ];
  icn["GR.IN.IC.WAREHOUSE/STORAGE FACILITY"] = [
    { type: "text", stroke: false, x: 100, y: 113, fontsize: 23, text: "STOR" }
  ];
  icn["GR.IN.IC.WASTEWATER TREATMENT FACILITY"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 107.2,114.8 c 1.9,0 3.9,-1 4.3,-2.4 1.5,1 1.7,2.4 4.6,2.4 h 0.4 c 1.8,0 3.8,-1.1 4.1,-2.4 h 0.4 c 0.4,1.4 2.5,2.4 4.5,2.4 h 0.4 c 2.7,0 3,-1.5 4.5,-2.4 0.4,1.4 2.6,2.4 4.5,2.4 v -1.5 c -2.2,0 -3.5,-1.6 -3.9,-3.4 h -1.5 c -0,1.8 -1.7,3.4 -3.6,3.4 h -0.4 c -2.2,0 -3.6,-1.4 -3.8,-3.4 h -1.7 l -0.2,1.3 c -1,0.7 -1.1,2 -3.3,2 h -0.4 c -3.3,0 -3.2,-3.4 -4.1,-3.4 h -1.3 c -0.2,2 -1.4,3.4 -3.6,3.4 v 1.5 z m -2.2,-33.3 h 32 v 37 h -32 V 81.5 z M 65.1,114.8 v -1.5 c 2,0 3.7,-1.6 3.8,-3.4 h 1.9 c 0,1.8 1.5,3.4 3.4,3.4 h 0.4 c 1.8,0 3.5,-1.6 3.6,-3.4 h 1.9 c 0,2 1.7,3.4 3.8,3.4 h 0.2 c 2.2,0 3.2,-1.6 3.6,-3.4 h 1.7 c 0,2 1.7,3.4 3.8,3.4 v 1.5 c -2,0 -4.1,-1 -4.5,-2.4 -1.4,0.9 -1.7,2.5 -4.6,2.5 h -0.6 c -2.9,0 -3.1,-1.5 -4.5,-2.4 -0.4,1.3 -2.4,2.4 -4.1,2.4 H 74.1 c -2.4,0 -3.4,-1.2 -4.5,-2.4 -0.4,1.4 -2.6,2.4 -4.5,2.4 l 0,0 z M 96.5,93.4 h 6.7 v 13.3 H 96.5 V 93.4 z m -31.4,7.9 c 2,0 3.6,-1.5 3.8,-3.4 h 1.9 c 0.2,1.8 1.4,3.4 3.4,3.4 h 0.4 c 1.8,0 3.5,-1.7 3.6,-3.4 h 1.9 c 0,2 1.7,3.4 3.8,3.4 h 0.2 c 1.5,0 3.4,-1.5 3.4,-2.6 v -0.8 h 1.9 c 0,1.9 1.8,3.4 3.8,3.4 v 1.5 c -3.6,0 -3.8,-2 -4.9,-2.2 -0.4,1.3 -2.5,2.2 -4.2,2.2 h -0.6 c -1.7,0 -3.8,-1 -4.1,-2.2 -1,0.3 -1.4,2.2 -4.5,2.2 H 74.1 c -2.7,0 -3,-1.3 -4.5,-2.2 -1,1.4 -2.2,2.2 -4.5,2.2 v -1.5 l 0,0 z m 0,-12 c 2,0 3.6,-1.5 3.8,-3.4 h 1.9 c 0.1,1.8 1.4,3.4 3.4,3.4 h 0.4 c 1.8,0 3.5,-1.7 3.6,-3.4 h 1.9 c 0,2 1.7,3.4 3.8,3.4 h 0.2 c 1.5,0 3.4,-1.5 3.4,-2.6 v -0.8 h 1.9 c 0,1.9 1.8,3.4 3.8,3.4 v 1.5 c -3.1,0 -3,-1 -4.7,-2 -1.4,1 -1.7,2.1 -4.4,2.1 h -0.6 c -2.7,0 -2.9,-1.1 -4.3,-2 -1.6,1 -1.6,2 -4.5,2 H 73.9 c -2.4,0 -2.9,-1.2 -4.1,-2 -1.6,1 -1.7,2 -4.7,2 v -1.5 l 0,0 z m 31.4,21.3 h 6.7 v 10.1 h 35.6 V 79.4 L 103.3,79.2 V 89.5 H 96.5 V 79.4 L 61.2,79.2 v 41.6 h 35.4 v -10.1 z m 14.2,-12.2 c 0,1.4 -1.8,2.8 -3.6,2.8 v 1.5 c 3.4,0 3.5,-1.9 4.7,-2.2 0.4,1.3 2.7,2.2 4.5,2.2 h 0.2 c 2.9,0 3,-1.3 4.3,-2.2 1.2,0.9 1.7,2.2 4.3,2.2 h 0.8 c 2.6,0 3,-1.3 4.3,-2.2 1.4,1 1.5,2.2 4.6,2.2 v -1.5 c -1.7,0 -3.8,-1.6 -3.8,-2.8 v -0.6 h -1.7 c -0.1,1.8 -1.6,3.4 -3.6,3.4 h -0.6 c -1.4,0 -3.4,-1.4 -3.4,-2.4 v -0.9 h -1.9 c 0,1.7 -1.7,3.4 -3.5,3.4 h -0.4 c -1.9,0 -3.5,-1.5 -3.6,-3.4 h -1.8 v 0.6 z m 0,-12 c 0,1.4 -1.8,2.8 -3.6,2.8 v 1.5 c 1.8,0 4,-0.9 4.3,-2.2 1.6,1.1 1.7,2.2 4.9,2.2 h 0.4 c 2.6,0 2.9,-1.3 4.3,-2.2 0.3,1.3 2.4,2.3 4.1,2.3 h 0.8 c 2.7,0 3,-1.3 4.5,-2.2 0.4,1.3 2.7,2.2 4.5,2.2 v -1.5 c -1.7,0 -3.8,-1.6 -3.8,-2.8 v -0.6 h -1.7 c -0.1,1.8 -1.6,3.4 -3.6,3.4 h -0.6 c -1.6,0 -3.4,-1.4 -3.4,-2.8 v -0.6 h -1.9 c 0,1.7 -1.7,3.4 -3.5,3.4 h -0.4 c -1.9,0 -3.5,-1.5 -3.6,-3.4 h -1.8 v 0.5 z"
    },
    {
      type: "path",
      stroke: false,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 65.1,114.8 c 1.9,0 4.1,-1 4.5,-2.4 1.1,1.2 2.2,2.4 4.5,2.4 h 0.6 c 1.8,0 3.8,-1.1 4.1,-2.4 1.4,1 1.6,2.4 4.5,2.4 h 0.6 c 2.8,0 3.2,-1.6 4.5,-2.4 0.4,1.4 2.5,2.4 4.5,2.4 v -1.5 c -2.1,0 -3.7,-1.4 -3.8,-3.4 h -1.6 c -0.4,1.8 -1.4,3.4 -3.6,3.4 h -0.2 c -2.1,0 -3.7,-1.4 -3.8,-3.4 h -1.8 c -0,1.8 -1.7,3.4 -3.6,3.4 H 74.1 c -1.8,0 -3.3,-1.6 -3.4,-3.4 h -1.9 c -0,1.8 -1.8,3.4 -3.8,3.4 v 1.5 l 0,0 z m 0,-13.5 v 1.5 c 2.3,0 3.6,-0.9 4.5,-2.2 1.4,1 1.8,2.2 4.5,2.2 h 0.6 c 3.1,0 3.5,-2 4.5,-2.2 0.4,1.3 2.4,2.2 4.1,2.2 h 0.6 c 1.7,0 3.8,-1 4.1,-2.2 1.1,0.3 1.2,2.2 4.9,2.2 v -1.5 c -2,0 -3.8,-1.4 -3.8,-3.4 h -1.9 v 0.8 c 0,1.2 -1.9,2.6 -3.4,2.6 h -0.2 c -2,0 -3.7,-1.4 -3.8,-3.4 h -1.8 c -0,1.6 -1.7,3.4 -3.6,3.4 H 74.1 c -2,0 -3.2,-1.5 -3.4,-3.4 h -1.9 c -0.2,1.8 -1.7,3.4 -3.8,3.4 l 0,0 z m 0,-12 v 1.5 c 3,0 3.1,-1 4.7,-2 1.2,0.9 1.7,2 4.1,2 h 0.6 c 2.9,0 2.9,-1 4.5,-2 1.4,0.9 1.6,2 4.3,2 h 0.6 c 2.7,0 2.9,-1.1 4.3,-2 1.6,1.1 1.6,2 4.7,2 v -1.5 c -2,0 -3.8,-1.4 -3.8,-3.4 h -1.9 v 0.8 c 0,1.2 -1.9,2.6 -3.4,2.6 h -0.2 c -2,0 -3.7,-1.4 -3.8,-3.4 h -1.8 c -0,1.7 -1.7,3.4 -3.6,3.4 H 74.1 c -2,0 -3.2,-1.5 -3.4,-3.4 h -1.9 c -0.2,1.8 -1.7,3.4 -3.8,3.4 l 0,0 z m 42.1,25.4 v -1.5 c 2.2,0 3.4,-1.4 3.6,-3.4 h 1.3 c 1,0 0.8,3.4 4.1,3.4 h 0.4 c 2.2,0 2.4,-1.4 3.3,-2.1 l 0.2,-1.3 h 1.7 c 0.2,2 1.6,3.4 3.8,3.4 h 0.4 c 1.8,0 3.5,-1.6 3.6,-3.4 h 1.5 c 0.4,1.8 1.7,3.4 3.9,3.4 v 1.5 c -1.9,0 -4.1,-1 -4.5,-2.4 -1.5,1 -1.8,2.5 -4.5,2.5 h -0.4 c -2,0 -4.1,-1 -4.5,-2.4 h -0.4 c -0.4,1.3 -2.3,2.4 -4.1,2.4 h -0.4 c -2.9,0 -3.1,-1.4 -4.7,-2.4 -0.4,1.4 -2.4,2.4 -4.3,2.4 z m 3.6,-16.8 h 1.9 c 0,1.8 1.6,3.4 3.5,3.4 h 0.4 c 1.8,0 3.5,-1.6 3.6,-3.4 h 1.9 v 0.9 c 0,1 2,2.4 3.4,2.4 h 0.6 c 1.9,0 3.4,-1.6 3.6,-3.4 h 1.7 v 0.6 c 0,1.2 2,2.8 3.8,2.8 v 1.5 c -3.1,0 -3.2,-1.2 -4.7,-2.2 -1.3,0.9 -1.7,2.2 -4.4,2.2 h -0.7 c -2.6,0 -3,-1.3 -4.3,-2.2 -1.3,1 -1.4,2.2 -4.3,2.2 h -0.2 c -1.8,0 -4.2,-1 -4.5,-2.2 -1.2,0.3 -1.2,2.2 -4.7,2.2 v -1.5 c 1.8,0 3.6,-1.4 3.6,-2.8 v -0.6 l 0,0 z m 0,-12 h 1.9 c 0,1.9 1.6,3.4 3.5,3.4 h 0.4 c 1.8,0 3.5,-1.6 3.6,-3.4 h 1.9 v 0.6 c 0,1.4 1.8,2.8 3.4,2.8 h 0.6 c 1.9,0 3.4,-1.6 3.6,-3.4 h 1.7 v 0.6 c 0,1.2 2,2.8 3.8,2.8 v 1.5 c -1.8,0 -4.2,-1 -4.5,-2.2 -1.5,1 -1.8,2.2 -4.6,2.2 h -0.7 c -1.7,0 -3.8,-1 -4.1,-2.2 -1.4,0.9 -1.7,2.2 -4.3,2.2 h -0.4 c -3.1,0 -3.2,-1.2 -4.9,-2.2 -0.4,1.3 -2.5,2.2 -4.3,2.2 v -1.5 c 1.8,0 3.6,-1.4 3.6,-2.8 v -0.6 z m -5.8,32.6 h 32 V 81.5 h -32 v 37 z m -1.7,-11.8 0,-13.3 -6.8,0 0,13.3 z"
    }
  ];
  icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE.TRAFFIC CONTROL POINT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 85.5,81.3 0.5,0.7 13.7,18.2 0.3,0.5 0.3,-0.5 13.7,-18.2 0.5,-0.7 -0.9,0 -27.4,0 -0.9,0 z m 1.7,0.9 25.7,0 L 100,99.3 87.2,82.2 z M 106.7,50.7 c 0,0.2 -0,0.5 -0.1,0.7 -0.1,0.2 -0.2,0.4 -0.4,0.5 -0.2,0.2 -0.4,0.3 -0.7,0.4 -0.3,0.1 -0.6,0.1 -1,0.1 l -0.7,0 0,2.1 -0.7,0 0,-5.6 1.5,0 c 0.3,5e-6 0.6,0 0.9,0.1 0.2,0.1 0.4,0.1 0.6,0.3 0.2,0.1 0.4,0.3 0.5,0.5 0.1,0.2 0.2,0.5 0.2,0.8 m -0.8,0 c -1e-5,-0.2 -0,-0.4 -0.1,-0.5 -0.1,-0.1 -0.2,-0.3 -0.3,-0.3 -0.1,-0.1 -0.3,-0.1 -0.4,-0.2 -0.2,-0 -0.3,-0.1 -0.6,-0.1 l -0.7,0 0,2.2 0.6,0 c 0.3,3e-6 0.5,-0 0.7,-0.1 0.2,-0.1 0.3,-0.1 0.5,-0.3 0.1,-0.1 0.2,-0.2 0.2,-0.4 0.1,-0.1 0.1,-0.3 0.1,-0.4 m -3.9,3.5 c -0.1,0.1 -0.3,0.1 -0.4,0.2 -0.1,0.1 -0.3,0.1 -0.4,0.2 -0.2,0 -0.3,0.1 -0.5,0.1 -0.2,0 -0.4,0.1 -0.6,0.1 -0.4,0 -0.8,-0.1 -1.1,-0.2 -0.3,-0.1 -0.6,-0.3 -0.9,-0.5 -0.2,-0.2 -0.4,-0.5 -0.6,-0.9 -0.1,-0.4 -0.2,-0.8 -0.2,-1.3 0,-0.5 0.1,-0.9 0.2,-1.2 0.1,-0.4 0.3,-0.7 0.6,-0.9 0.2,-0.2 0.5,-0.4 0.9,-0.6 0.3,-0.1 0.7,-0.2 1.1,-0.2 0.3,6e-6 0.6,0 0.9,0.1 0.3,0.1 0.6,0.2 1,0.4 l 0,0.9 -0.1,0 c -0.3,-0.3 -0.6,-0.4 -0.9,-0.6 -0.3,-0.1 -0.6,-0.2 -1,-0.2 -0.3,5e-6 -0.5,0 -0.8,0.1 -0.2,0.1 -0.4,0.2 -0.6,0.4 -0.2,0.2 -0.3,0.4 -0.4,0.7 -0.1,0.3 -0.1,0.6 -0.1,1 -10e-7,0.4 0.1,0.7 0.2,1 0.1,0.3 0.2,0.5 0.4,0.7 0.2,0.2 0.4,0.3 0.6,0.4 0.2,0.1 0.5,0.1 0.7,0.1 0.4,10e-7 0.7,-0.1 1,-0.2 0.3,-0.1 0.6,-0.3 0.9,-0.6 l 0.1,0 0,0.9 m -5.1,-4.5 -2,0 0,4.9 -0.7,0 0,-4.9 -2,0 0,-0.7 4.7,0 0,0.7 M 85.9,44.6 l 0,0.4 0,36.5 0,0.4 0.4,0 27.4,0 0.4,0 0,-0.4 0,-36.5 0,-0.4 -0.4,0 -27.4,0 -0.4,0 z m 0.9,0.9 26.5,0 0,35.6 -26.5,0 0,-35.6 z"
    }
  ];
  icn["AC.M1.RIOT"] = textm1("RIOT");
  icn["AC.M1.THREAT"] = textm1("?");
  icn["AC.M1.EMERGENCY COLLECTION EVACUATION POINT"] = textm1("ECEP");
  icn["AC.M1.EMERGENCY INCIDENT COMMAND CENTER"] = textm1("EICC");
  icn["AC.M1.EMERGENCY OPERATIONS CENTER"] = textm1("EOC");
  icn["AC.M1.EMERGENCY SHELTER"] = textm1("ES");
  icn["AC.M1.EMERGENCY STAGING AREA"] = textm1("SA");
  icn["AC.M1.EMERGENCY"] = textm1("EMER");
  icn["AC.M1.COMMERCIAL"] = textm1("COM");
  icn["AC.M1.PRODUCTION"] = textm1("PROD");
  icn["AC.M1.RETAIL"] = textm1("RTL");
  icn["AC.M1.MILITARY ARMORY"] = textm1("RES");
  icn["AC.M1.GENERATION STATION"] = textm1("GEN");

  // Emergency management import
  icn["GR.I.FF.CIVILIAN ROTARY WING"] = [
    {
      type: "path",
      stroke: black,
      d:
        "M80,70 l10,10 M120,110 l-10,-10 M80,110 l10,-10 M120,70 l-10,10 M100,115 l0,20 M95,135 l10,0",
      fill: false
    },
    {
      type: "path",
      stroke: black,
      fill: STD2525 ? iconFillColor : false,
      d:
        "m 113,90 c -0.3,8.8 -1.9,20.3 -10.8,24.6 -7.7,2 -12.3,-7.1 -13.8,-13.3 -2.6,-11.5 -2.3,-26 6.9,-34.6 6.0,-4.9 13.1,1.9 14.9,7.8 2,4.9 2.8,10.2 2.8,15.5 z"
    }
  ];
  icn["GR.IC.HOSPITAL SHIP"] = text("AH");
  icn["GR.IC.LAW ENFORCEMENT VESSEL"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      d: "m 75,100 0,-35 50,0 0,35 20,0 -15,35 -60,0 -15,-35 z"
    },
    { type: "path", d: "m 135,100 -15,35 -10,0 15,-35 z" }
  ];
  /*
  icn["CY.IC.COMMAND AND CONTROL (C2)"] = text("BC2");
  icn["CY.IC.HERDER"] = text("HDR");
  icn["CY.IC.CALLBACK DOMAIN"] = text("CBD");
  icn["CY.IC.ZOMBIE"] = text("ZMB");
  //icn['CY.IC.INFECTION'] = text('XXXXXXX');
  icn["CY.IC.ADVANCED PERSISTENT THREAT (APT)"] = text("APT");
  icn["CY.IC.APT WITH C2"] = text("AC2");
  icn["CY.IC.APT WITH SELF PROPAGATION"] = text("ASP");
  icn["CY.IC.APT WITH C2 AND SELF PROPAGATION"] = text("ACS");
  icn["CY.IC.APT OTHER"] = text("AOT");
  icn["CY.IC.NON-ADVANCED PERSISTENT THREAT (NAPT)"] = text("NAPT");
  icn["CY.IC.NAPT WITH C2"] = text("NC2");
  icn["CY.IC.NAPT WITH SELF PROPAGATION"] = text("NSP");
  icn["CY.IC.NAPT WITH C2 AND SELF PROPAGATION"] = text("NCS");
  icn["CY.IC.NAPT OTHER"] = text("NOH");
  //icn['CY.IC.HEALTH AND STATUS'] = text('XXXXXXX');
  icn["CY.IC.NORMAL"] = text("ON");
  icn["CY.IC.NETWORK OUTAGE"] = text("OUT");
  icn["CY.IC.UNKNOWN"] = text("UNK");
  icn["CY.IC.IMPAIRED"] = text("IMP");
  //icn['CY.IC.DEVICE TYPE'] = text('XXXXXXX');
  icn["CY.IC.CORE ROUTER"] = text("CRT");
  icn["CY.IC.ROUTER"] = text("RTR");
  icn["CY.IC.CROSS DOMAIN SOLUTION"] = text("CDS");
  icn["CY.IC.MAIL SERVER"] = text("MSR");
  icn["CY.IC.WEB SERVER"] = text("WSR");
  icn["CY.IC.DOMAIN SERVER"] = text("DSR");
  icn["CY.IC.FILE SERVER"] = text("FSR");
  icn["CY.IC.PEER-TO-PEER NODE"] = text("P2P");
  icn["CY.IC.FIREW ALL"] = text("FWL");
  icn["CY.IC.SWITCH"] = text("SWT");
  icn["CY.IC.HOST"] = text("HST");
  icn["CY.IC.VIRTUAL PRIVATE NETWORK (VPN)"] = text("VPN");
  //icn['CY.IC.DEVICE DOMAIN'] = text('XXXXXXX');
  icn["CY.IC.DEPARTMENT OF DEFENSE (DOD)"] = text("DOD");
  icn["CY.IC.GOVERNMENT"] = text("GOV");
  icn["CY.IC.CONTRACTOR"] = text("CTR");
  icn["CY.IC.SUPERVISORY CONTROL AND DATA ACQUISITION (SCADA)"] = text("SCD");
  icn["CY.IC.NON-GOVERNMENT"] = text("NGD");
  //icn['CY.IC.EFFECT'] = text('XXXXXXX');
  icn["CY.IC.INFECTION"] = text("INF");
  icn["CY.IC.DEGRADATION"] = text("DGD");
  icn["CY.IC.DATA SPOOFING"] = text("SPF");
  icn["CY.IC.DATA MANIPULATION"] = text("MNP");
  icn["CY.IC.EXFILTRATION"] = text("XFL");
  icn["CY.IC.POWER OUTAGE"] = text("POT");
  icn["CY.IC.NETWORK OUTAGE"] = text("NOT");
  icn["CY.IC.SERVICE OUTAGE"] = text("SOT");
  icn["CY.IC.DEVICE OUTAGE"] = text("DOT");
  */
  icn["CY.IC.COMBAT MISSION TEAM"] = text("CMT");
  icn["CY.IC.NATIONAL MISSION TEAM"] = text("NMT");
  icn["CY.IC.CYBER PROTECTION TEAM"] = text("CPT");
  icn["CY.IC.NATION STATE CYBER THREAT ACTOR"] = text("CTA");
  icn["CY.IC.NON NATION STATE CYBER THREAT ACTOR"] = text("CTA");
  icn["CY.IC.NON NATION STATE CYBER THREAT ACTOR"].fill =
    STD2525 || numberSIDC ? iconFillColor : !frame ? iconFillColor : false;
  icn["CY.IC.NON NATION STATE CYBER THREAT ACTOR"].stroke = black;
  icn["CY.IC.NON NATION STATE CYBER THREAT ACTOR"].strokewidth = 3;

  for (var key in icn) {
    if (!icn.hasOwnProperty(key)) continue;
    if (iconParts.hasOwnProperty(key)) console.warn("Override of: " + key);
    defaultProperties.call(this, icn[key], iconColor);
    iconParts[key] = icn[key];
  }
}
