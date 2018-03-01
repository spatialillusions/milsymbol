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
  //var baseGeometry = metadata.baseGeometry;
  var numberSIDC = metadata.numberSIDC;
  //var fillColor = colors.fillColor[affiliation];
  var iconColor = colors.iconColor[affiliation];
  var iconFillColor = colors.iconFillColor[affiliation];
  //  var none = colors.none[affiliation];
  var black = colors.black[affiliation];
  //var white = colors.white[affiliation];

  //var numberSIDC = metadata.numberSIDC;
  var icn = {};

  icn["AR.I.MILITARY"] = text("MIL");
  icn["AR.I.CIVILIAN"] = text("CIV");
  icn["AR.I.CIVILIAN"].fill =
    STD2525 || numberSIDC ? iconFillColor : !frame ? iconFillColor : false;
  icn["AR.I.CIVILIAN"].stroke = black;
  icn["AR.I.CIVILIAN"].strokewidth = 3;
  icn["AR.I.MILITARY FIXED WING"] = {
    type: "path",
    d:
      "M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z"
  };
  icn["AR.I.CIVILIAN FIXED WING"] = {
    type: "path",
    fill: false,
    d:
      "M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z"
  };
  icn["AR.I.FF.CIVILIAN FIXED WING"] = {
    type: "path",
    stroke: black,
    d:
      "M62,80 l30,0 0,-10 16,0 0,10 30,0 0,15 -30,0 0,25 10,0 0,5 -36,0 0,-5 10,0 0,-25 -30,0 Z M95,70 l0,-5 10,0 0,5",
    fill: STD2525 ? iconFillColor : false
  };
  icn["AR.I.MILITARY ROTARY WING"] = {
    type: "path",
    d: "M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z"
  };
  icn["AR.I.CIVILIAN ROTARY WING"] = {
    type: "path",
    fill: STD2525 || numberSIDC ? iconFillColor : false,
    stroke: black,
    d: "M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z"
  };
  icn["AR.I.FF.CIVILIAN ROTARY WING"] = [
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
  icn["AR.I.MILITARY BALLOON"] = [
    { type: "circle", cx: 100, cy: 95, r: 15 },
    { type: "path", d: "M95,110 l0,10 10,0 0,-10 z" }
  ];
  icn["AR.I.FF.MILITARY BALLOON"] = [
    { type: "path", d: "M90,115 l20,0 0,20 -20,0 z" },
    { type: "circle", cx: 100, cy: 90, r: 35 }
  ];
  icn["AR.I.CIVILIAN BALLOON"] = [
    {
      type: "circle",
      fill: STD2525 || numberSIDC ? iconFillColor : false,
      stroke: black,
      cx: 100,
      cy: 95,
      r: 15
    },
    {
      type: "path",
      fill: STD2525 || numberSIDC ? iconFillColor : false,
      stroke: black,
      d: "M95,110 l0,10 10,0 0,-10 z"
    }
  ];
  icn["AR.I.FF.CIVILIAN BALLOON"] = [
    {
      type: "path",
      fill: STD2525 || numberSIDC ? iconFillColor : false,
      stroke: black,
      d: "M90,125 l20,0 0,10 -20,0 z"
    },
    {
      type: "circle",
      fill: STD2525 || numberSIDC ? iconFillColor : false,
      stroke: black,
      cx: 100,
      cy: 90,
      r: 35
    }
  ];
  icn["AR.I.MILITARY AIRSHIP"] = {
    type: "path",
    d:
      "m 110,110 10,10 10,0 -5,-15 m 0,-10 5,-15 -10,0 -10,10 m 17.2,10 c 0,6.1 -12.2,11.1 -27.2,11.1 -15,0 -27.2,-5 -27.2,-11.1 0,-6.1 12.2,-11.1 27.2,-11.1 15,0 27.2,5 27.2,11.1 z"
  };
  icn["AR.I.CIVILIAN AIRSHIP"] = {
    type: "path",
    fill: STD2525 || numberSIDC ? iconFillColor : false,
    stroke: black,
    d:
      "m 110,110 10,10 10,0 -5,-15 m 0,-10 5,-15 -10,0 -10,10 m 17.2,10 c 0,6.1 -12.2,11.1 -27.2,11.1 -15,0 -27.2,-5 -27.2,-11.1 0,-6.1 12.2,-11.1 27.2,-11.1 15,0 27.2,5 27.2,11.1 z"
  };
  icn["AR.I.UNMANNED AERIAL VEHICLE"] = {
    type: "path",
    d: "m 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z",
    stroke: false
  };
  icn["AR.I.AIR DECOY"] = {
    type: "path",
    d:
      "M65,95 l15,-15 0,30 Z M92.5,95 l15,-15 0,30 Z M120,95 l15,-15 0,30 Z M65,120 l70,0 0,-5 -70,0 Z"
  };
  icn["SU.IC.AIR DECOY DSymbol"] = {
    type: "path",
    d:
      "M 85 81 L 65 98 L 85 119 L 85 81 z M 110 81 L 90 98 L 110 119 L 110 81 z M 135 81 L 115 98 L 135 119 L 135 81 z"
  };
  icn["AR.I.MEDICAL EVACUATION"] = {
    type: "path",
    d: "M93,83 l14,0 0,10 10,0 0,14 -10,0 0,10 -14,0 0,-10 -10,0 0,-14 10,0 Z"
  };
  icn["AR.I.ATTACK/STRIKE"] = text("A");
  icn["AR.I.BOMBER"] = text("B");
  icn["AR.I.CARGO"] = text("C");
  icn["AR.I.ESCORT"] = text("E");
  icn["AR.I.FIGHTER"] = text("F");
  icn["AR.I.FIGHTER INTERCEPTOR"] = text("I");
  icn["AR.I.JAMMER / ELECTRONIC COUNTER-MEASURES"] = text("J");
  icn["AR.I.TANKER"] = text("K");
  icn["AR.I.PATROL"] = text("P");
  icn["AR.I.RECONNAISSANCE"] = text("R");
  icn["AR.I.2525 PHOTOGRAPHIC"] = text("X");
  icn["AR.I.TRAINER"] = text("T");
  icn["AR.I.UTILITY"] = text("U");
  icn["AR.I.VSTOL"] = text(STD2525 && !numberSIDC ? "L" : "V");
  icn["AR.I.AIRBORNE COMMAND POST"] =
    STD2525 && !numberSIDC ? text("D") : text("ACP");
  icn["AR.I.AIRBORNE EARLY WARNING"] =
    STD2525 && !numberSIDC ? text("W") : text("AEW");
  icn["AR.I.ANTISURFACE WARFARE"] =
    STD2525 && !numberSIDC ? text("N") : text("ASUW");
  icn["AR.I.ANTISUBMARINE WARFARE"] =
    STD2525 && !numberSIDC ? text("S") : text("ASW");
  icn["AR.I.COMMUNICATIONS"] = STD2525 && !numberSIDC ? text("Y") : text("COM");
  icn["AR.I.COMBAT SEARCH AND RESCUE"] = text("CSAR");
  icn["AR.I.ELECTRONIC SUPPORT MEASURES"] = STD2525 ? text("Z") : text("ESM");
  icn["AR.I.GOVERNMENT"] = text("GOV");
  icn["AR.I.MINE COUNTERMEASURES"] = text("MCM");
  icn["AR.I.PERSONNEL RECOVERY"] = STD2525 ? text("H") : text("PRO");
  icn["AR.I.PASSENGER"] = text("PX");
  icn["AR.I.SEARCH AND RESCUE"] = text("SAR");
  icn["AR.I.SUPRESSION OF ENEMY AIR DEFENCE"] = text("SEAD");
  icn["AR.I.SPECIAL OPERATIONS FORCES"] = text("SOF");
  icn["AR.I.ULTRA LIGHT"] = text("UL");
  icn["AR.I.VIP"] = text("VIP");
  icn["AR.I.FF.MILITARY FIXED WING"] = {
    type: "path",
    d:
      "m 99.2,58.2 c -3,0.8 -2.5,5.8 -2.5,5.8 l -0.3,16 -37.2,36.5 1.3,4.6 L 96.7,96.6 97,128.6 l -8.5,8.2 0,4.6 9.3,-4.2 c 0.7,0.6 1.8,1.7 1.8,1.7 0,0 1.2,-1.1 1.9,-1.7 l 9.3,4.2 0,-4.6 -8.5,-8.2 0.3,-32 36.2,24.5 1.3,-4.6 -37.2,-36.5 -0.3,-16 c 0,0 0.5,-5 -2.5,-5.8 -0.4,-0.1 -0.7,-0.1 -1.1,0 z",
    stroke: false
  };
  //2525D
  icn["AR.I.FIXED-WING DSymbol"] = {
    type: "path",
    d: STD2525
      ? "M 99.4 80.8 C 97.9 81.1 98.1 83.4 98.1 83.4 L 98 90.7 L 78.6 107.4 L 79.3 109.4 L 98.1 98.3 L 98.3 112.9 L 93.9 116.6 L 93.9 118.7 L 98.8 116.8 C 99.1 117 99.7 117.5 99.7 117.5 C 99.7 117.5 100.4 117 100.7 116.8 L 105.6 118.7 L 105.6 116.6 L 101.1 112.9 L 101.3 98.3 L 120.2 109.4 L 120.9 107.4 L 101.5 90.7 L 101.3 83.4 C 101.3 83.4 101.6 81.1 100 80.8 C 99.8 80.8 99.6 80.8 99.4 80.8 z"
      : "M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z"
  };
  icn["AR.I.CIVILIAN FIXED-WING DSymbol"] = {
    type: "path",
    fill: STD2525 || numberSIDC ? iconFillColor : false,
    stroke: black,
    d: STD2525
      ? "m 75.1,90.3 19.6,0 0,-6.5 10.5,0 0,6.5 19.6,0 0,9.7 -19.6,0 0,16.2 6.5,0 0,3.2 -23.6,0 0,-3.2 6.5,0 0,-16.2 -19.6,0 z m 21.6,-6.5 0,-3.2 6.5,0 0,3.2"
      : "M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z"
  };
  icn["AR.I.FIGHTER/BOMBER"] = text("F/B");
  icn["AR.I.ELECTRONIC SUPPORT"] = STD2525 ? text("ES") : text("ESM");
  icn["AR.I.PERSONNEL RECOVERY DSymbol"] = text("PR");
  icn["AR.I.PHOTOGRAPHIC RECONNAISSANCE"] = text("PH");
  icn["AR.I.ELECTRONIC ATTACK (EA)"] = text("EA");
  icn["AR.I.VERTICAL-TAKEOFF UAV (VT-UAV)"] = {
    type: "path",
    d:
      "m 70,85 30,10 30,-10 0,-5 -30,5 -30,-5 z m -10,5 40,15 40,-15 0,30 -40,-15 -40,15 z"
  };
  icn["AR.I.TETHERED LIGHTER THAN AIR"] = {
    type: "path",
    d:
      "M 75,110 85,95 m -5,20 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m 15,-6 0,11 10,0 0,-11 m 10,-14 c 0,8.3 -6.7,15 -15,15 -8.3,0 -15,-6.7 -15,-15 0,-8.3 6.7,-15 15,-15 8.3,0 15,6.7 15,15 z"
  };
  icn["AR.I.CIVILIAN TETHERED LIGHTER THAN AIR"] = {
    type: "path",
    fill: STD2525 || numberSIDC ? iconFillColor : false,
    stroke: black,
    d:
      "M 75,110 85,95 m -5,20 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m 15,-6 0,11 10,0 0,-11 m 10,-14 c 0,8.3 -6.7,15 -15,15 -8.3,0 -15,-6.7 -15,-15 0,-8.3 6.7,-15 15,-15 8.3,0 15,6.7 15,15 z"
  };
  icn["AR.I.CIVILIAN UNMANNED AERIAL VEHICLE"] = {
    type: "path",
    fill: STD2525 || numberSIDC ? iconFillColor : false,
    stroke: black,
    d: "m 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z"
  };
  icn["AR.I.WEAPON"] = text("WPN");
  icn["AR.I.UNDERWATER DECOY DSymbol"] = {
    type: "path",
    d:
      "M 85 81 L 65 98 L 85 119 L 85 81 z M 110 81 L 90 98 L 110 119 L 110 81 z M 135 81 L 115 98 L 135 119 L 135 81 z"
  };
  icn["AR.I.BOMB"] = text("BOMB");
  icn["AR.I.MANUAL TRACK"] = text("MAN");
  icn["AIR.M1.ATTACK"] = textm1("A");
  icn["AIR.M1.BOMBER"] = textm1("B");
  icn["AIR.M1.CARGO"] = textm1("C");
  icn["AIR.M1.FIGHTER"] = textm1("F");
  icn["AIR.M1.INTERCEPTOR"] = textm1("I");
  icn["AIR.M1.TANKER"] = textm1("K");
  icn["AIR.M1.UTILITY"] = textm1("U");
  icn["AIR.M1.VSTOL"] = textm1(STD2525 && !numberSIDC ? "L" : "V");
  icn["AIR.M1.PASSENGER"] = textm1("PX");
  icn["AIR.M1.ULTRA LIGHT"] = textm1("UL");
  icn["AIR.M1.AIRBORNE COMMAND POST"] =
    STD2525 && !numberSIDC ? textm1("D") : textm1("ACP");
  icn["AIR.M1.ANTISURFACE WARFARE"] =
    STD2525 && !numberSIDC ? textm1("N") : textm1("ASUW");
  icn["AIR.M1.AIRBORNE EARLY WARNING"] =
    STD2525 && !numberSIDC ? textm1("W") : textm1("AEW");
  icn["AIR.M1.GOVERNMENT"] = textm1("GOV");
  icn["AIR.M1.MEDEVAC"] = {
    type: "path",
    stroke: false,
    d: "M95.5,80 l9,0 0,-9 9,0 0,-9 -9,0 0,-9 -9,0 0,9 -9,0 0,9 9,0 Z"
  };
  icn["AIR.M1.ESCORT"] = textm1("E");
  icn["AIR.M1.INTENSIVE CARE"] = textm1("IC");
  icn["AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES"] = textm1("J");
  icn["AIR.M1.PATROL"] = textm1("P");
  icn["AIR.M1.RECONNAISSANCE"] = textm1("R");
  icn["AIR.M1.TRAINER"] = textm1("T");
  icn["AIR.M1.PHOTOGRAPHIC"] =
    STD2525 && !numberSIDC ? textm1("X") : textm1("PH");
  icn["AIR.M1.PERSONNEL RECOVERY"] = textm1("PR");
  icn["AIR.M1.ANTISUBMARINE WARFARE"] =
    STD2525 && !numberSIDC ? textm1("S") : textm1("ASW");
  icn["AIR.M1.COMMUNICATIONS"] =
    STD2525 && !numberSIDC ? textm1("Y") : textm1("COM");
  icn["AIR.M1.ELECTRONIC SURVEILLANCE MEASURES"] = STD2525
    ? textm1("Z")
    : textm1("ESM");
  icn["AIR.M1.MINE COUNTERMEASURES"] = textm1("MCM");
  icn["AIR.M1.SEARCH AND RESCUE"] = textm1("SAR");
  icn["AIR.M1.SPECIAL OPERATIONS FORCES"] = textm1("SOF");
  icn["AIR.M1.SURFACE WARFARE"] = textm1("SUW");
  icn["AIR.M1.VIP"] = textm1("VIP");
  icn["AIR.M1.COMBAT SEARCH AND RESCUE"] =
    STD2525 && !numberSIDC ? textm1("H") : textm1("CSAR");
  icn["AIR.M1.SUPRESSION OF ENEMY AIR DEFENCE"] = textm1("SEAD");
  icn["AIR.M1.UNMANNED AERIAL VEHICLE"] = {
    type: "path",
    stroke: false,
    d: "m 80,65 20,13 20,-13 0,-5 -20,10 -20,-10 z"
  };
  icn["AIR.M1.BOOM-ONLY"] = textm1("B");
  icn["AIR.M1.DROUGE-ONLY"] = textm1("D");
  //2525D
  icn["AIR.M1.ELECTRONIC SUPPORT (ES)"] = STD2525
    ? textm1("ES")
    : textm1("ESM");
  icn["AIR.M1.HIJACKER"] = textm1("HJ");
  icn["AIR.M1.CYBERSPACE"] = textm1("CYB");
  icn["AIR.M1.FIGHTER/BOMBER"] = textm1("F/B");
  icn["AIR.M1.ELECTRONIC ATTACK (EA)"] = textm1("EA");
  icn["AIR.M1.MULTIMISSION"] = textm1("MM");
  icn["AIR.M1.HIJACKING"] = textm1("H");
  icn["AIR.M1.ASW HELO-LAMPS"] = textm1("LP");
  icn["AIR.M1.ASW HELO - SH-60R"] = textm1("60R");
  icn["AIR.M2.HEAVY"] = textm2("H");
  icn["AIR.M2.MEDIUM"] = textm2("M");
  icn["AIR.M2.LIGHT"] = textm2("L");
  icn["AIR.M2.BOOM-ONLY"] = textm2("B");
  icn["AIR.M2.DROUGE-ONLY"] = textm2("D");
  icn["AIR.M2.BOOM AND DROUGE"] = textm2("B/D");
  icn["AIR.M2.CLOSE RANGE"] = textm2("CR");
  icn["AIR.M2.SHORT RANGE"] = textm2("SR");
  icn["AIR.M2.MEDIUM RANGE"] = textm2("MR");
  icn["AIR.M2.LONG RANGE"] = textm2("LR");
  icn["AIR.M2.PHOTOGRAPHIC"] = textm2("P");
  icn["AIR.M2.CYBERSPACE"] = textm2("CYB");
  //2525D
  icn["AIR.M2.DOWNLINKED"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 140,
    fontsize: 25,
    text: "DL"
  };
  icn["AIR.MISSILE.ICON"] = {
    type: "path",
    d: "M90,135 l0,-10 5,-5 0,-55 5,-5 5,5 0,55 5,5 0,10 -10,-10 z"
  };
  if (STD2525 || numberSIDC)
    icn["AIR.MISSILE.ICON"].fill = frame
      ? colors.fillColor.Unknown
      : colors.iconFillColor.Unknown;
  icn["AIR.MISSILE.IC.ANTIBALLISTIC MISSILE"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 25,
    text: "ABM"
  };
  icn["AIR.MISSILE.IC.BOMB"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 25,
    text: "BOMB"
  };
  icn["AIR.MISSILE.M1.AIR"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 30,
    text: "A"
  };
  icn["AIR.MISSILE.M1.SURFACE"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 30,
    text: "S"
  };
  icn["AIR.MISSILE.M1.SUBSURFACE"] = [
    { type: "text", stroke: false, x: 68, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 68, y: 125, fontsize: 30, text: "U" }
  ];
  icn["AIR.MISSILE.M1.SPACE"] = [
    { type: "text", stroke: false, x: 68, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 68, y: 125, fontsize: 30, text: "P" }
  ];
  icn["AIR.MISSILE.M1.ANTI-BALLISTIC"] = [
    { type: "text", stroke: false, x: 68, y: 95, fontsize: 30, text: "A" },
    { type: "text", stroke: false, x: 68, y: 125, fontsize: 30, text: "B" }
  ];
  icn["AIR.MISSILE.M1.BALLISTIC"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 30,
    text: "B"
  };
  icn["AIR.MISSILE.M1.CRUISE"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 30,
    text: "C"
  };
  icn["AIR.MISSILE.M1.LAND"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 30,
    text: "L"
  };
  //2525D
  icn["AIR.MISSILE.M1.INTERCEPTOR"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 30,
    text: "I"
  };
  icn["AIR.MISSILE.M2.AIR"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "A"
  };
  icn["AIR.MISSILE.M2.SURFACE"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "S"
  };
  icn["AIR.MISSILE.M2.SUBSURFACE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "U" }
  ];
  icn["AIR.MISSILE.M2.SPACE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "P" }
  ];
  icn["AIR.MISSILE.M2.LAUNCHED"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "L"
  };
  icn["AIR.MISSILE.M2.MISSILE"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "M"
  };
  //2525D
  icn["AIR.MISSILE.M2.PATRIOT"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "P"
  };
  icn["AIR.MISSILE.M2.STANDARD MISSILE - 2 (SM-2)"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "2" }
  ];
  icn["AIR.MISSILE.M2.STANDARD MISSILE - 6 (SM-6)"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "6" }
  ];
  icn["AIR.MISSILE.M2.EVOLVED SEA SPARROW MISSILE (ESSM)"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "S" }
  ];
  icn["AIR.MISSILE.M2.ROLLING AIRFRAME MISSILE (RAM)"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "R"
  };
  icn["AIR.MISSILE.M2.SHORT RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["AIR.MISSILE.M2.MEDIUM RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "M" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["AIR.MISSILE.M2.INTERMEDIATE RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "I" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["AIR.MISSILE.M2.LONG RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "L" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["AIR.MISSILE.M2.INTERCONTINENTAL"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "I" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "C" }
  ];

  for (var key in icn) {
    if (!icn.hasOwnProperty(key)) continue;
    if (iconParts.hasOwnProperty(key)) console.warn("Override of: " + key);
    defaultProperties.call(this, icn[key], iconColor);
    iconParts[key] = icn[key];
  }
}
