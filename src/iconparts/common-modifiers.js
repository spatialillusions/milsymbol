import {
  defaultProperties,
  //text,
  textm1,
  textm2,
} from "./iconparts-functions.js";

export default function (
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
  properties object
  
  colors
  color object
  
  STD2525
  Is it 2525 then true, otherwise false
  
  alternateMedal
  true/false for sea mine stuff
  */

  //const frame = metadata.frame;
  const affiliation = metadata.affiliation || "Friend";
  //const baseGeometry = metadata.baseGeometry;
  //const numberSIDC = metadata.numberSIDC;
  //const fillColor = colors.fillColor[affiliation];
  const iconColor = colors.iconColor[affiliation];
  //const iconFillColor = colors.iconFillColor[affiliation];
  //  const none = colors.none[affiliation];
  //const black = colors.black[affiliation];
  //const white = colors.white[affiliation];

  //const numberSIDC = metadata.numberSIDC;
  const icn = {};

  icn["COM.M1.UNMANNED AERIAL VEHICLE(UAV)"] = {
    type: "path",
    stroke: false,
    d: "m 80,65 20,13 20,-13 0,-5 -20,10 -20,-10 z",
  };
  //Robotic
  icn["COM.M1.ROBOTIC"] = {
    type: "path",
    d: "m 100,52.7 14.9,14.8 c 0.4,-0.3 0.9,-0.4 1.4,-0.4 1.5,0 2.7,1.2 2.7,2.7 0,1.4 -1.2,2.7 -2.7,2.7 -1.5,0 -2.7,-1.3 -2.7,-2.7 0,-0.4 0.1,-0.7 0.2,-1 l -10.4,-5.2 -2.5,8.6 c 0.2,0.1 0.4,0.2 0.6,0.3 0.7,0.5 1.2,1.3 1.2,2.3 0,1.5 -1.2,2.7 -2.7,2.7 -0.55,0 -1.06,-0.2 -1.49,-0.5 -0.73,-0.4 -1.22,-1.3 -1.22,-2.2 0,-1.2 0.77,-2.2 1.85,-2.6 l -2.53,-8.6 -10.42,5.2 c 0.12,0.3 0.18,0.6 0.18,1 0,1.5 -1.21,2.7 -2.7,2.7 -1.49,0 -2.7,-1.2 -2.7,-2.7 0,-1.5 1.21,-2.7 2.7,-2.7 0.52,0 1.01,0.1 1.42,0.4 l 14.9,-14.8 0,0 0,0 z",
    stroke: false,
  };
  //Fixed Wing
  icn["COM.M1.FIXED WING"] = {
    type: "path",
    d: "m 100,70 22,-8.7 c 11,0 11,17.4 0,17.4 L 100,70 78,78.7 c -10.9,0 -10.9,-17.4 0,-17.4 z",
  };
  //Rotary Wing
  icn["COM.M1.ROTARY WING"] = { type: "path", d: "m 75,60 0,15 50,-15 0,15 z" };
  //Tilt-Rotor
  icn["COM.M1.TILT ROTOR"] = textm1("TR");
  icn["COM.M1.VTOL"] = textm1("VTOL");
  icn["COM.M1.ATTACK"] = textm1("A");
  icn["COM.M1.ARMORED"] = {
    type: "path",
    fill: false,
    d: "m 90,60 20,0 c 10,0 10,15 0,15 L 90,75 C 80,75 80,60 90,60",
  };

  icn["COM.M1.BALLISTIC MISSILE"] = textm1("BM");
  icn["COM.M1.CARGO"] = {
    type: "path",
    fill: false,
    d: "m 100,60 0,15 -15,0 0,-15 30,0 0,15 -15,0",
  };
  icn["COM.M1.UTILITY"] = textm1("U");
  icn["COM.M1.LIGHT"] = textm1("L");
  icn["COM.M1.MEDIUM"] = textm1("M");
  icn["COM.M1.HEAVY"] = textm1("H");
  icn["COM.M1.CYBERSPACE"] = textm1("CYB");
  icn["COM.M1.COMMAND POST NODE"] = textm1("CPN");
  icn["COM.M1.JOINT NETWORK NODE"] = textm1("JNN");
  icn["COM.M1.RETRANSMISSION SITE"] = textm1("RTNS");
  icn["COM.M1.BRIGADE"] = {
    type: "path",
    fill: false,
    d: "m 107.5,62.5 -15,15  m 0,-15 15,15",
  };
  icn["COM.M1.BRIDGE"] = {
    type: "path",
    fill: false,
    d: "m 121,78 -7,-6 H 86 l -7,6  m 42,-18 -7,7 H 86 l -7,-7",
  };
  icn["COM.M1.CLOSE PROTECTION"] = textm1("CLP");
  icn["COM.M1.COMBAT"] = textm1("CBT");
  icn["COM.M1.COMMAND AND CONTROL"] = textm1("C2");
  icn["COM.M1.CROWD AND RIOT CONTROL"] = textm1("CRC");
  icn["COM.M1.EOD"] = textm1("EOD");
  icn["COM.M1.ISR"] = textm1("ISR");
  icn["COM.MQ.LASER"] = {
    type: "path",
    fill: false,
    d: "M 132,70.8 H 114 L 110,78 108,63.6 104,78 100,63.6 96.5,70.8 H 85.7 L 82.1,78 78.5,63.6 74.9,78 71.3,63.6 67.7,78  m 56.3,-14.4 8,7.2 -8,7.2",
  };
  icn["COM.M1.MAINTENANCE"] = {
    type: "path",
    fill: false,
    d: "m 83,70 h 34  m 8,-7 c -10,0 -10,14 0,14  M 75,63 c 10,0 10,14 0,14",
  };
  icn["COM.M1.MEDICAL"] = {
    type: "path",
    stroke: false,
    d: "m 95.3,55 h 9.7 v 6.8 h 7 v 9.4 h -7 V 78 h -9.7 v -6.8 h -6.8 v -9.4 h 6.8 z",
  };

  icn["COM.M1.SEARCH AND RESCUE"] = textm1("SAR");
  icn["COM.M1.SECURITY"] = textm1("SEC");
  icn["COM.M1.SNIPER"] = {
    type: "path",
    d: "m 75,62 h 20  m 5,16 V 62.1  M 125,62 h -20",
    fill: false,
  };
  icn["COM.M1.SPECIAL OPERATION FORCES"] = textm1("SOF");
  icn["COM.M1.SWAT"] = textm1("SWAT");
  icn["COM.M1.GUIDED MISSILE"] = textm1("G");
  icn["COM.M1.OTHER GUIDED MISSILE"] = textm1("GM");
  icn["COM.M1.PETROLEUM"] = {
    type: "path",
    d: "M 100,79 V 69 L 91,57 h 18 l -9,12",
    fill: false,
  };
  icn["COM.M1.WATER"] = {
    type: "path",
    d: "m 92,59 h 16  m -8,9.7 V 59  M 75,69 h 40 c 10,0 15,5 15,10",
    fill: false,
  };
  icn["COM.M1.WEAPON"] = textm1("WPN");
  icn["COM.M1.CHEMICAL"] = textm1("C");
  icn["COM.M1.BIOLOGICAL"] = textm1("B");
  icn["COM.M1.RADIOLOGICAL"] = textm1("R");
  icn["COM.M1.NUKLEAR"] = textm1("N");
  icn["COM.M1.DECONTAMINATION"] = textm1("D");
  icn["COM.M1.CIVILIAN"] = textm1("CIV");
  icn["COM.M1.GOVERNMENT"] = textm1("GO");
  icn["COM.M1.ACCIDENT"] = textm1("ACC");
  icn["COM.M1.ASSASSINATION"] = textm1("AS");
  icn["COM.M1.EXECUTION"] = textm1("EX");
  icn["COM.M1.KIDNAPPING"] = textm1("KNP");
  icn["COM.M1.PIRACY"] = textm1("PI");
  icn["COM.M1.RAPE"] = textm1("RA");
  icn["COM.M1.ANTISUBMARINE WARFARE"] = textm1("ASW");
  icn["COM.M1.ESCORT"] = textm1("E");
  icn["COM.M1.MINE COUNTERMEASURES"] = textm1("MCM");
  icn["COM.M1.MINE WARFARE"] = textm1(STD2525 ? "MIW" : "MW");
  icn["COM.M1.SURFACE WARFARE"] = textm1("SUW");
  icn["COM.M1.INDEPENDENT COMMAND"] = {
    type: "path",
    d: "m 110,59 v 16  m -8,-8 h 16  M 90,59 v 16  m 8,-8 H 82",
    fill: false,
  };
  icn["COM.M1.COMPANY"] = {
    type: "path",
    fill: false,
    d: "M 100,59.6 V 78",
  };
  icn["COM.M1.PLATOON"] = [
    { type: "circle", stroke: false, cx: 80, cy: 68, r: 8 },
    { type: "circle", stroke: false, cx: 100, cy: 68, r: 8 },
    { type: "circle", stroke: false, cx: 120, cy: 68, r: 8 },
  ];
  icn["COM.M1.REGIMENT"] = {
    type: "path",
    fill: false,
    d: "m 110,60 v 18 0  M 90,60 v 18  m 10,-18 v 18",
  };
  icn["COM.M1.SECTION"] = [
    { type: "circle", stroke: false, cx: 90, cy: 68, r: 8 },
    { type: "circle", stroke: false, cx: 110, cy: 68, r: 8 },
  ];
  icn["COM.M1.SQUAD"] = {
    type: "circle",
    stroke: false,
    cx: 100,
    cy: 68,
    r: 8,
  };
  icn["COM.M1.TEAM"] = [
    { type: "circle", fill: false, cx: 100, cy: 65, r: 10 },
    { type: "path", d: "m 90,75 l20,-20" },
  ];
  icn["COM.M1.BATTALION"] = {
    type: "path",
    fill: false,
    d: "m 105,60 v 18 0  M 95,60 v 18",
  };
  icn["COM.M1.HIJACKER"] = textm1("HIJ");
  icn["COM.M1.ELECTROMAGNETIC WARFARE"] = textm1("EW");

  icn["COM.M2.AIRBORNE"] = {
    type: "path",
    d: "M75,140 C75,125 100,125 100,140 C100,125 125,125 125,140",
    fill: false,
  };
  icn["COM.M2.BICYCLE EQUIPPED"] = {
    type: "circle",
    cx: 100,
    cy: 132,
    r: 11,
    fill: false,
  };
  icn["COM.M2.RAILROAD"] = [
    { type: "path", d: "M65,125 l70,0", fill: false },
    { type: "circle", fill: false, cx: 70, cy: 130, r: 5 },
    { type: "circle", fill: false, cx: 80, cy: 130, r: 5 },
    { type: "circle", fill: false, cx: 120, cy: 130, r: 5 },
    { type: "circle", fill: false, cx: 130, cy: 130, r: 5 },
  ];
  icn["COM.M2.FIXED WING"] = {
    type: "path",
    d: "m 100,130 22,-9 c 11,0 11,18 0,18 l -22,-9 -22,9 c -10.9,0 -10.9,-18 0,-18 z",
  };
  //Rotary Wing
  icn["COM.M2.ROTARY WING"] = {
    type: "path",
    d: "m 75,122 v 15 l 50,-15 v 15 z",
  };
  icn["COM.M2.SKI"] = {
    type: "path",
    d: "m 95,145 -9,-8  m 28,0 -9,8  m -15,-24 21,22  m -1,-22 -21,22",
    fill: false,
  };
  icn["COM.M2.TRACKED"] = {
    type: "path",
    d: "m 90,125 h 20 c 10,0 10,15 0,15 H 90 c -10,0 -10,-15 0,-15",
    fill: false,
  };
  icn["COM.M2.WHEELED LIMITED"] = [
    { type: "circle", cx: 80, cy: 130, r: 7, fill: false },
    { type: "circle", cx: 120, cy: 130, r: 7, fill: false },
  ];
  icn["COM.M2.WHEELED"] = [
    { type: "circle", cx: 75, cy: 130, r: 7, fill: false },
    { type: "circle", cx: 100, cy: 130, r: 7, fill: false },
    { type: "circle", cx: 125, cy: 130, r: 7, fill: false },
  ];
  icn["COM.M2.ROBOTIC"] = {
    type: "path",
    d: "M100,121.68L114.895,136.459C115.309,136.201 115.798,136.052 116.321,136.052C117.812,136.052 119.022,137.262 119.022,138.753C119.022,140.243 117.812,141.454 116.321,141.454C114.831,141.454 113.62,140.243 113.62,138.753C113.62,138.407 113.686,138.076 113.805,137.772L103.378,132.6L100.851,141.224C101.072,141.298 101.28,141.4 101.471,141.526C102.211,142.008 102.701,142.843 102.701,143.791C102.701,145.281 101.491,146.492 100,146.492C99.451,146.492 98.939,146.327 98.512,146.045C97.776,145.562 97.29,144.73 97.29,143.785C97.29,142.592 98.064,141.579 99.138,141.222L96.613,132.606L86.186,137.778C86.305,138.082 86.37,138.413 86.37,138.759C86.37,140.25 85.16,141.46 83.669,141.46C82.179,141.46 80.969,140.25 80.969,138.759C80.969,137.268 82.179,136.058 83.669,136.058C84.193,136.058 84.681,136.207 85.095,136.465L99.991,121.671L100,121.662L100,121.68Z",
    stroke: false,
  };

  icn["COM.M2.AUTONOMOUS CONTROL"] = textm2("AUT");
  icn["COM.M2.REMOTELY PILOTED"] = textm2("RP");
  icn["COM.M2.EXPENDABLE"] = textm2("EXP");
  icn["COM.M2.MOUNTAIN"] = {
    type: "path",
    stroke: false,
    d: "m 87,142 10,-20 5,10 3,-5 8,15",
  };
  icn["COM.M2.LONG RANGE"] = textm2("LR");
  icn["COM.M2.MEDIUM RANGE"] = textm2("MR");
  icn["COM.M2.SHORT RANGE"] = textm2("SR");
  icn["COM.M2.CLOSE RANGE"] = textm2("CR");
  icn["COM.M2.HEAVY"] = textm2("H");
  icn["COM.M2.MEDIUM"] = textm2("M");
  icn["COM.M2.LIGHT AND MEDIUM"] = textm2("L/M");
  icn["COM.M2.LIGHT"] = textm2("L");
  icn["COM.M2.CYBERSPACE"] = textm2("CYB");
  icn["COM.M2.SECURITY FORCE ASSISTANCE"] = textm2("SFA");
  icn["COM.M2.BED"] = {
    type: "path",
    fill: false,
    d: "m 107,125 8,6  m 15,-7 v 13  m -23,-16 v 16  m 0,-6 h 23",
  };
  icn["COM.M2.MULTIFUNCTIONAL"] = textm2("MF");

  for (const key in icn) {
    if (!icn.hasOwnProperty(key)) continue;
    if (iconParts.hasOwnProperty(key)) console.warn("Override of: " + key);
    defaultProperties.call(this, icn[key], iconColor);
    iconParts[key] = icn[key];
  }
}
