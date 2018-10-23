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

  var affiliation = metadata.affiliation || "Friend";
  var frame = metadata.frame;
  var numberSIDC = metadata.numberSIDC;

  //If hostile and not monoColor, make it red, otherwise use the iconColor.
  var iconColor = colors.iconColor[affiliation];
  var iconFillColor = colors.iconFillColor[affiliation];
  var none = colors.none[affiliation];
  var black = colors.black[affiliation];

  //var numberSIDC = metadata.numberSIDC;
  var icn = {};

  icn["SP.I.ANTISATELLITE WEAPON"] = {
    type: "path",
    d:
      "m 100,110 0,9 m 0,-34 0,5 m 0,-9 -2,4 4,0 z m -10,9 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"
  };
  icn["SP.I.ASTRONOMICAL SATELLITE"] = {
    type: "path",
    d:
      "m 97,90 -1,-9 8,0 -1,9 m -5,20 1,9 2,0 1,-9 m 8,-10 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
  };
  icn["SP.I.BIOSATELLITE"] = {
    type: "path",
    d:
      "m 100,89 c 0,4.4 -3.6,8 -8,8 -4.4,0 -8,-3.6 -8,-8 0,-4.4 3.6,-8 8,-8 4.4,0 8,3.6 8,8 z m -10,10 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0 m -17,-25 17,10 -1,2 -14,-7"
  };
  icn["SP.I.CAPSULE"] = {
    type: "path",
    d: "m 85,115 c -2,5 32,5 30,0 l -5,-30 c -1,-5 -19,-5 -20,0 z"
  };
  icn["SP.I.CIVILIAN ASTRONOMICAL SATELLITE"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 97,90 -1,-9 8,0 -1,9 m -5,20 1,9 2,0 1,-9 m 8,-10 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
  };
  icn["SP.I.CIVILIAN BIOSATELLITE"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 100,89 c 0,4.4 -3.6,8 -8,8 -4.4,0 -8,-3.6 -8,-8 0,-4.4 3.6,-8 8,-8 4.4,0 8,3.6 8,8 z m -10,10 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0 m -17,-25 17,10 -1,2 -14,-7"
  };
  icn["SP.I.CIVILIAN CAPSULE"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 85,115 c -2,5 32,5 30,0 l -5,-30 c -1,-5 -19,-5 -20,0 z"
  };
  icn["SP.I.CIVILIAN COMMUNICATIONS SATELLITE"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      d:
        "m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
    },
    { type: "path", fill: false, d: "m 100,90 0,9 M 75,81 c 16,12 34,12 50,0" }
  ];
  icn["SP.I.CIVILIAN EARTH OBSERVATION SATELLITE"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      d:
        "m 107,113 c 0,3.9 -3.1,7 -7,7 -3.9,0 -7,-3.1 -7,-7 0,-3.9 3.1,-7 7,-7 3.9,0 7,3.1 7,7 z m -17,-33 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"
    },
    { type: "path", fill: false, d: "m 88,107 c 8,-9 16,-9 24,0" }
  ];
  icn["SP.I.CIVILIAN MINIATURIZED SATELLITE"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      d:
        "m 91.1,92 0,16 17.8,0 0,-16 z m 22.2,0 0,16 22.2,0 0,-16 z m -26.6,0 -22.2,0 0,16 22.2,0 z m 0,8 4.4,0 m 17.8,0 4.4,0"
    },
    {
      type: "path",
      fill: false,
      d:
        "m 90,119 10,-9 10,9 m -20,-38 10,9 10,-9 m 35,9 -10,10 10,10 M 55,90 65,100 55,110"
    }
  ];
  icn["SP.I.CIVILIAN NAVIGATIONAL SATELLITE"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      d:
        "m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
    },
    {
      type: "path",
      fill: false,
      d: "m 88,87 c 8,6 16,6 24,0 m -20,8 8,-14 8,14"
    }
  ];
  icn["SP.I.CIVILIAN ORBITER SHUTTLE"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 89,115 6,-25 c 3,-12 7,-12 10,0 l 6,25 -10,0 -1,5 -1,-5 z"
  };
  icn["SP.I.CIVILIAN SATELLITE"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 110,100 10,0 m -40,0 10,0 m -10,-10 -25,0 0,20 25,0 z m 40,0 0,20 25,0 0,-20 z m -30,0 0,20 20,0 0,-20 z"
  };
  icn["SP.I.CIVILIAN SPACE STATION"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 97.5,112.5 0,7.5 5,0 0,-7.5 z m 0,-32.5 5,0 0,26.4 -5,0 z m -0.3,7.6 C 83.3,88.2 72.5,93.5 72.5,100 c 0,6.9 12.3,12.5 27.5,12.5 15.2,0 27.5,-5.6 27.5,-12.5 0,-6.5 -11,-11.9 -25,-12.4 l 0,5.6 c 9.9,0.4 17.5,3.2 17.5,6.6 0,3.7 -8.9,6.7 -19.8,6.7 -10.9,0 -19.8,-3 -19.8,-6.7 0,-3.4 7.4,-6.1 17.1,-6.6 l 0,-5.6 c -0.1,0 -0.2,-0 -0.3,0 z"
  };
  icn["SP.I.CIVILIAN TETHERED SATELLITE"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 120,87 -20,12 m 33,-12 c 0,3.6 -2.9,6.5 -6.5,6.5 -3.6,0 -6.5,-2.9 -6.5,-6.5 0,-3.6 2.9,-6.5 6.5,-6.5 3.6,0 6.5,2.9 6.5,6.5 z m -23,22 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
  };
  icn["SP.I.CIVILIAN WEATHER SATELLITE"] = [
    {
      type: "path",
      fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      d:
        "m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 95,
      fontsize: 25,
      text: "WX"
    }
  ];
  icn["SP.I.CIVILIAN"] = text("CIV");
  icn["SP.I.CIVILIAN"].fill =
    STD2525 || numberSIDC ? iconFillColor : !frame ? iconFillColor : false;
  icn["SP.I.CIVILIAN"].stroke = black;
  icn["SP.I.CIVILIAN"].strokewidth = 3;
  icn["SP.I.COMMUNICATIONS SATELLITE"] = [
    {
      type: "path",
      d:
        "m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
    },
    { type: "path", fill: false, d: "m 100,90 0,9 M 75,81 c 16,12 34,12 50,0" }
  ];
  icn["SP.M1.CYBERSPACE"] = textm1("CYB");
  icn["SP.M2.CYBERSPACE"] = textm2("CYB");
  icn["SP.I.EARTH OBSERVATION SATELLITE"] = [
    {
      type: "path",
      d:
        "m 107,113 c 0,3.9 -3.1,7 -7,7 -3.9,0 -7,-3.1 -7,-7 0,-3.9 3.1,-7 7,-7 3.9,0 7,3.1 7,7 z m -17,-33 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"
    },
    { type: "path", fill: false, d: "m 88,107 c 8,-9 16,-9 24,0" }
  ];
  icn["SP.I.FF.CREWED SPACE VEHICLE"] = {
    type: "path",
    stroke: false,
    d:
      "m 100.3,62.4 c -1.8,-0 -4.3,3.7 -4.5,5.4 -2.5,11.3 -3.4,23.1 -6.2,33.4 -2.9,6.7 -6.8,8.3 -9.9,12.1 -3,3.6 -8.5,10.4 -8.5,10.4 l 0,6.4 c 0,0 5.9,0.9 8.9,1.2 3,0.2 8.7,0.1 8.7,0.1 l 0.3,4.3 4.3,0.2 0.2,3.1 5.8,0 0.9,6.5 0.9,-6.4 5.8,0 0.2,-3.1 4.3,-0.2 0.3,-4.3 c 0,0 5.7,0.1 8.7,-0.1 3,-0.2 8.9,-1.2 8.9,-1.2 l 0,-6.4 c 0,0 -5.5,-6.7 -8.5,-10.3 -3.1,-3.8 -7,-5.4 -9.9,-12.1 -2.8,-10.4 -3.7,-22.2 -6.2,-33.4 -0.3,-2.9 -2.7,-5.5 -4.5,-5.5 z"
  };
  icn["SP.I.FF.SATELLITE"] = [
    {
      type: "path",
      stroke: false,
      d:
        "m 115,70 20,0 0,55 -20,0 z m -25,5 20,0 0,45 -20,0 z m -25,-5 20,0 0,55 -20,0 z"
    },
    {
      type: "path",
      fill: false,
      d: "M80,135 c10,-10 30,-10 40,0 M100,127 L100,100 M70,100 L130,100"
    }
  ];
  icn["SP.I.FF.SPACE STATION"] = [
    {
      type: "path",
      d:
        "m 103.1,97.4 c -12.4,0.3 -25.7,0.1 -36.7,6.7 -4.1,2.1 -8.5,5.9 -7.8,11 0.2,3.7 0.3,7.4 0.5,11.1 6.2,7.8 16.6,10.4 26,11.8 14,1.8 28.5,1.2 42.1,-3 5.2,-1.7 10.4,-4.3 14.2,-8.3 0.3,-5.1 -0.3,-10.4 0.7,-15.3 -1.2,-4.3 -5.9,-6.4 -9.7,-8.2 -9.2,-4 -19.3,-5.4 -29.2,-5.6 z m -3.2,9.6 c 10.1,-0.2 20.5,1.9 29.1,7.4 -13,8.4 -29.6,9.7 -44.3,6.1 -4.9,-1.3 -9.7,-3.3 -13.7,-6.4 8.8,-4.9 18.9,-6.9 28.9,-7.2 z",
      fill: STD2525 ? iconFillColor : none
    },
    {
      type: "path",
      fill: false,
      stroke: "black",
      d:
        "m 96.9,107 c 0.7,-8.1 1.4,-16.3 2.1,-24.4 M 89.3,121.8 c 3.1,-13.2 6.2,-26.3 9.3,-39.5 4.9,12.7 9.7,25.5 14.6,38.2 m 27.8,-5.3 c -0.1,3.9 -0.2,7.8 -0.3,11.6 M 58.6,113.3 c 0.2,4.5 0.3,9 0.5,13.5 m -0.5,-1.2 c 3.5,6.3 11,8.6 17.6,10.5 16.4,4.1 33.9,3.9 50.1,-0.8 5.5,-1.8 11.8,-4.3 14.7,-9.7 m 0.5,-13 c -0.5,5.4 -6.1,8.1 -10.5,10 -15.4,5.7 -32.4,6.1 -48.5,3.6 -7.9,-1.4 -16.3,-3.4 -22.2,-9.2 -3.6,-3.9 -0.9,-9.6 3.4,-11.7 8.3,-5.2 18.3,-6.6 27.9,-7.5 13.5,-1 27.5,0 40.2,5.1 4.2,1.8 9.3,4.6 9.7,9.7 z m -13.3,1.6 c -8.2,-5.9 -18.8,-6.8 -28.6,-7 -9.5,0.1 -19.5,1.2 -27.6,6.4 l -0.6,0.5 m 58.9,-2.6 c -0.8,4.8 -6.1,6.4 -10,7.8 -13.2,3.7 -27.4,3.7 -40.5,-0 -3.8,-1.2 -8.1,-2.8 -9.8,-6.7 -0.7,-4.9 5,-7.1 8.7,-8.5 12.7,-4 26.6,-4 39.5,-1 4.4,1.2 9.8,2.8 11.9,7.3 l 0.1,0.5 0,0.5 z"
    },
    {
      type: "path",
      fill: "black",
      stroke: false,
      d:
        "M 75.2,93.1 C 88.9,87 102.6,80.8 116.3,74.7 c 2.3,1.3 4.7,2.6 7,3.9 -13.7,6 -27.3,12 -41,18 -2.4,-1.2 -4.8,-2.3 -7.2,-3.5 z"
    }
  ];
  icn["SP.I.MANUAL TRACK"] = text("MAN");
  icn["SP.I.MILITARY"] = text("MIL");
  icn["SP.I.MINIATURIZED SATELLITE"] = [
    {
      type: "path",
      d:
        "m 91.1,92 0,16 17.8,0 0,-16 z m 22.2,0 0,16 22.2,0 0,-16 z m -26.6,0 -22.2,0 0,16 22.2,0 z m 0,8 4.4,0 m 17.8,0 4.4,0"
    },
    {
      type: "path",
      fill: false,
      d:
        "m 90,119 10,-9 10,9 m -20,-38 10,9 10,-9 m 35,9 -10,10 10,10 M 55,90 65,100 55,110"
    }
  ];
  icn["SP.I.NAVIGATIONAL SATELLITE"] = [
    {
      type: "path",
      d:
        "m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
    },
    {
      type: "path",
      fill: false,
      d: "m 88,87 c 8,6 16,6 24,0 m -20,8 8,-14 8,14"
    }
  ];
  icn["SP.I.ORBITER SHUTTLE"] = {
    type: "path",
    d: "m 89,115 6,-25 c 3,-12 7,-12 10,0 l 6,25 -10,0 -1,5 -1,-5 z"
  };
  icn["SP.I.RE-ENTRY VEHICLE"] = text("RV");
  icn["SP.I.RECONNAISSANCE SATELLITE"] = {
    type: "path",
    d:
      "m 106,100 9,20 m -21,-20 -9,20 m 17,-20 3,20 m -7,-20 -3,20 m 15,-30 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
  };
  icn["SP.I.SATELLITE, GENERAL"] = text("SAT");
  icn["SP.I.SATELLITE"] = {
    type: "path",
    d:
      "m 110,100 10,0 m -40,0 10,0 m -10,-10 -25,0 0,20 25,0 z m 40,0 0,20 25,0 0,-20 z m -30,0 0,20 20,0 0,-20 z"
  };
  icn["SP.I.SPACE LAUNCH VEHICLE"] = text("SLV");
  icn["SP.I.SPACE STATION"] = {
    type: "path",
    d:
      "m 97.5,112.5 0,7.5 5,0 0,-7.5 z m 0,-32.5 5,0 0,26.4 -5,0 z m -0.3,7.6 C 83.3,88.2 72.5,93.5 72.5,100 c 0,6.9 12.3,12.5 27.5,12.5 15.2,0 27.5,-5.6 27.5,-12.5 0,-6.5 -11,-11.9 -25,-12.4 l 0,5.6 c 9.9,0.4 17.5,3.2 17.5,6.6 0,3.7 -8.9,6.7 -19.8,6.7 -10.9,0 -19.8,-3 -19.8,-6.7 0,-3.4 7.4,-6.1 17.1,-6.6 l 0,-5.6 c -0.1,0 -0.2,-0 -0.3,0 z"
  };
  icn["SP.I.SPACE VEHICLE"] = text("SV");
  icn["SP.I.TETHERED SATELLITE"] = {
    type: "path",
    d:
      "m 120,87 -20,12 m 33,-12 c 0,3.6 -2.9,6.5 -6.5,6.5 -3.6,0 -6.5,-2.9 -6.5,-6.5 0,-3.6 2.9,-6.5 6.5,-6.5 3.6,0 6.5,2.9 6.5,6.5 z m -23,22 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
  };
  icn["SP.I.WEATHER SATELLITE"] = [
    {
      type: "path",
      d:
        "m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 100,
      fontsize: 25,
      text: "WX"
    }
  ];
  icn["SP.M1.GEOSTATIONARY ORBIT (GO)"] = textm1("GO");
  icn["SP.M1.GEOSYNCHRONOUS ORBIT (GSO)"] = textm1("GSO");
  icn["SP.M1.HIGH EARTH ORBIT (HEO)"] = textm1("HEO");
  icn["SP.M1.LOW EARTH ORBIT (LEO)"] = textm1("LEO");
  icn["SP.M1.MEDIUM EARTH ORBIT (MEO)"] = textm1("MEO");
  icn["SP.M1.MOLNIYA ORBIT (MO)"] = textm1("MO");
  icn["SP.M2.INFRARED"] = textm2("IR");
  icn["SP.M2.OPTICAL"] = textm2("O");
  icn["SP.M2.RADAR"] = textm2("R");
  icn["SP.M2.SIGNALS INTELLIGENCE (SIGINT)"] = textm2("SI"); //Space Missile
  icn["SPACE.MISSILE.ICON"] = {
    type: "path",
    d: "M90,135 l0,-10 5,-5 0,-55 5,-5 5,5 0,55 5,5 0,10 -10,-10 z"
  };
  if (STD2525 || numberSIDC)
    icn["SPACE.MISSILE.ICON"].fill = frame
      ? colors.fillColor.Unknown
      : colors.iconFillColor.Unknown;
  icn["SPACE.MISSILE.M1.BALLISTIC"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 30,
    text: "B"
  };
  icn["SPACE.MISSILE.M1.INTERCEPTOR"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 30,
    text: "I"
  };
  icn["SPACE.MISSILE.M1.SPACE"] = [
    { type: "text", stroke: false, x: 68, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 68, y: 125, fontsize: 30, text: "P" }
  ];
  icn["SPACE.MISSILE.M2.ARROW"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "A" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["SPACE.MISSILE.M2.GROUND-BASED INTERCEPTOR (GBI)"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "G"
  };
  icn["SPACE.MISSILE.M2.INTERCONTINENTAL"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "I" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "C" }
  ];
  icn["SPACE.MISSILE.M2.INTERMEDIATE RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "I" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["SPACE.MISSILE.M2.LONG RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "L" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["SPACE.MISSILE.M2.MEDIUM RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "M" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["SPACE.MISSILE.M2.PATRIOT"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "P"
  };
  icn["SPACE.MISSILE.M2.SHORT RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["SPACE.MISSILE.M2.SPACE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "P" }
  ];
  icn["SPACE.MISSILE.M2.STANDARD MISSILE - 3 (SM-3)"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "3" }
  ];
  icn["SPACE.MISSILE.M2.STANDARD MISSILE - TERMINAL PHASE (SM-T)"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "T" }
  ];
  icn["SPACE.MISSILE.M2.TERMINAL HIGH-ALTITUDE AREA DEFENSE (THAAD)"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "T"
  };
  icn["SPACE.MISSILE.M2.CLOSE RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "C" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["SPACE.MISSILE.M2.DEBRIS"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "D" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "B" }
  ];
  icn["SPACE.MISSILE.M2.UNKNOWN"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "U"
  };
  icn["SPACE.PLANET LANDER"] = text("PL");
  //*/
  for (var key in icn) {
    if (!icn.hasOwnProperty(key)) continue;
    if (iconParts.hasOwnProperty(key)) console.warn("Override of: " + key);
    defaultProperties.call(this, icn[key], iconColor);
    iconParts[key] = icn[key];
  }
}
