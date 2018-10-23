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
  var white = colors.white[affiliation];

  //var numberSIDC = metadata.numberSIDC;
  var icn = {};

  icn["SE.IC.MILITARY"] = text("MIL");
  icn["SE.IC.MANUAL TRACK"] = text("MAN");
  icn["SE.IC.COMBATANT"] = [
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
  icn["SE.IC.SURFACE COMBATANT, LINE"] = {
    type: "path",
    stroke: false,
    d:
      "m 100,120 -25,-17 15,2 0,-10 5,0 0,-5 -15,0 0,-5 15,0 0,-5 10,0 0,5 15,0 0,5 -15,0 0,5 5,0 0,10 15,-2 z"
  };
  icn["SE.IC.CARRIER"] = {
    type: "path",
    d: "m 80,100 20,20 20,-20 -20,0 0,-20 -20,0 z"
  };
  icn["SE.IC.BATTLESHIP"] = text("BB");
  icn["SE.IC.CIVILIAN"] = text("CIV");
  icn["SE.IC.CIVILIAN"].fill =
    STD2525 || numberSIDC ? iconFillColor : !frame ? iconFillColor : false;
  icn["SE.IC.CIVILIAN"].stroke = black;
  icn["SE.IC.CIVILIAN"].strokewidth = 3;
  icn["SE.IC.CRUISER"] = text("CC");
  icn["SE.IC.CRUISER, GUIDED MISSILE"] = text("CG");
  icn["SE.IC.DESTROYER"] = text("DD");
  icn["SE.IC.FRIGATE"] = text("FF");
  icn["SE.IC.CORVETTE"] = text("FS");
  icn["SE.IC.LITTORAL COMBATANT SHIP"] = text("LL");
  icn["SE.IC.AMPHIBIOUS WARFARE SHIP"] = {
    type: "path",
    d: "m 100,120 20,0 m -20,0 -20,-20 10,0 0,-20 20,0 0,20 10,0 z"
  };
  icn["SE.IC.AMPHIBIOUS FORCE FLAGSHIP"] = text("LCC");
  icn["SE.IC.AMPHIBIOUS ASSAULT"] = text("LA");
  icn["SE.IC.AMPHIBIOUS ASSAULT SHIP, GENERAL"] = text("LHA");
  icn["SE.IC.AMPHIBIOUS ASSAULT SHIP, MULTI-PURPOSE"] = text("LHD");
  icn["SE.IC.AMPHIBIOUS TRANSPORT, DOCK"] = text("LPD");
  icn["SE.IC.AMPHIBIOUS ASSAULT SHIP, HELICOPTER"] = text("LPH");
  icn["SE.IC.LANDING SHIP"] = text("LS");
  icn["SE.IC.LANDING CRAFT"] = text("LC");
  icn["SE.IC.MINE WARFARE VESSEL"] = {
    type: "path",
    d:
      "m 98.3,81 0,4.1 c -2.4,0.3 -4.6,1.4 -6.4,2.9 l -3.5,-3.5 -2.4,2.4 3.6,3.6 c -0.9,1.3 -1.5,4.9 -1.8,6.5 l -10.8,0 0,3 3,0 20,20 20,-20 3,0 0,-3 -10,0 c -1,-1.7 -2,-5.3 -3,-6.7 l 4,-3.7 -2,-2.4 -4,3.6 c -2,-1.4 -4,-2.4 -6,-2.7 l 0,-4.1 z"
  };
  icn["SE.IC.MINELAYER"] = text("ML");
  icn["SE.IC.MINESWEEPER"] = text("MS");
  icn["SE.IC.MINESWEEPER, DRONE"] = text("MSD");
  icn["SE.IC.MINEHUNTER"] = text("MH");
  icn["SE.IC.MINE COUNTER MEASURE SUPPORT SHIP"] = text(STD2525 ? "MA" : "MCS");
  icn["SE.IC.MINE COUNTERMEASURES"] = text("MCM");
  icn["SE.IC.SEA SURFACE DECOY"] = {
    type: "path",
    d:
      "M 105,110 90,95 105,80 z M 85,110 70,95 85,80 z m 40,-30 -15,15 15,15 z m -55,40 0,-5 55,0 0,5 z"
  };
  icn["SE.IC.PATROL"] = {
    type: "path",
    d: "m 80,100 20,20 20,-20 -10,0 0,-20 -20,0 0,20 z"
  };
  icn["SE.IC.PATROL CRAFT"] = text("PC");
  icn["SE.IC.PATROL ANTI SUBMARINE WARFARE"] = {
    type: "path",
    d: "m 100,120 -25,-25 5,-5 10,10 5,0 0,-20 10,0 0,20 5,0 10,-10 5,5 z"
  };
  icn["SE.IC.PATROL ANTISHIP MISSILE"] = text("PM");
  icn["SE.IC.PATROL TORPEDO"] = text("PT");
  icn["SE.IC.PATROL GUN"] = text("PG");
  icn["SE.IC.PATROL SHIP"] = [];
  icn["SE.IC.MILITARY SPEEDBOAT"] = {
    type: "path",
    stroke: false,
    d: "m 120,120 -40,0 -15,-25 15,0 5,-15 10,0 -5,15 45,0 z"
  };
  icn["SE.IC.MILITARY SPEEDBOAT, RIGID-HULL INFLATABLE BOAT"] = [
    {
      type: "path",
      stroke: false,
      d:
        "M 85 80 L 80 95 L 65 95 L 80 120 L 120 120 L 135 95 L 90 95 L 95 80 L 85 80 z M 87 100.7 L 93.1 100.7 C 94.6 100.7 95.7 100.8 96.4 101.1 C 97.1 101.3 97.7 101.8 98.1 102.4 C 98.5 103.1 98.7 103.8 98.7 104.7 C 98.7 105.8 98.4 106.7 97.8 107.4 C 97.1 108.1 96.2 108.5 94.9 108.7 C 95.6 109.1 96.1 109.4 96.5 109.9 C 96.9 110.3 97.4 111.1 98.1 112.2 L 99.9 115 L 96.4 115 L 94.3 111.9 C 93.6 110.8 93.1 110.1 92.8 109.8 C 92.5 109.5 92.2 109.3 91.9 109.2 C 91.6 109.1 91.2 109 90.5 109 L 89.9 109 L 89.9 115 L 87 115 L 87 100.7 z M 101.5 100.7 L 107.2 100.7 C 108.3 100.7 109.2 100.7 109.7 100.8 C 110.3 100.9 110.8 101.1 111.2 101.4 C 111.7 101.7 112 102.1 112.3 102.6 C 112.6 103.1 112.7 103.7 112.8 104.3 C 112.7 105 112.6 105.6 112.2 106.1 C 111.9 106.7 111.4 107.1 110.8 107.4 C 111.6 107.7 112.3 108.1 112.8 108.7 C 113.2 109.3 113.5 110 113.5 110.8 C 113.5 111.5 113.3 112.1 113 112.8 C 112.7 113.4 112.3 113.8 111.8 114.2 C 111.2 114.6 110.6 114.8 109.8 114.9 C 109.3 115 108.2 115 106.3 115 L 101.5 115 L 101.5 100.7 z M 104.3 103.1 L 104.3 106.4 L 106.3 106.4 C 107.4 106.4 108.1 106.3 108.3 106.3 C 108.8 106.3 109.2 106.1 109.5 105.8 C 109.8 105.5 109.9 105.1 109.9 104.7 C 109.9 104.2 109.8 103.9 109.6 103.6 C 109.3 103.3 109 103.2 108.5 103.1 C 108.2 103.1 107.4 103.1 106 103.1 L 104.3 103.1 z M 89.9 103.1 L 89.9 106.8 L 92 106.8 C 93.4 106.8 94.3 106.7 94.6 106.6 C 95 106.4 95.2 106.3 95.4 106 C 95.6 105.7 95.7 105.3 95.8 104.9 C 95.7 104.4 95.6 104 95.3 103.7 C 95.1 103.4 94.7 103.2 94.3 103.2 C 94 103.1 93.3 103.1 92.2 103.1 L 89.9 103.1 z M 104.3 108.8 L 104.3 112.6 L 107 112.6 C 108.1 112.6 108.7 112.6 109 112.5 C 109.4 112.4 109.8 112.2 110.1 111.9 C 110.3 111.6 110.5 111.2 110.5 110.7 C 110.5 110.3 110.4 109.9 110.2 109.6 C 109.9 109.3 109.6 109.1 109.3 109 C 108.9 108.8 108 108.8 106.7 108.8 L 104.3 108.8 z"
    },
    {
      type: "text",
      fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      stroke: false,
      x: 100,
      y: 115,
      fontsize: 20,
      text: "RB"
    }
  ];
  icn["SE.IC.MILITARY JETSKI"] = {
    type: "path",
    stroke: false,
    d: "m 135,105 0,15 -60,0 -10,-15 20,-25 10,0 0,10 -5,0 -5,15 z"
  };
  icn["SE.IC.UNMANNED SURFACE WATER VEHICLE"] = {
    type: "path",
    d: "m 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z",
    stroke: false
  };
  icn["SE.IC.NAVY TASK ORGANIZATION UNIT"] = [
    { type: "path", d: "m 110,80 15,15 0,25 M 90,80 75,95 l 0,25", fill: false }
  ];
  if (STD2525)
    icn["SE.IC.NAVY TASK ORGANIZATION UNIT"].push({
      type: "path",
      d: "m 100,80 -15,15 0,25 30,0 0,-25 -15,-15"
    });
  icn["SE.IC.NAVY TASK FORCE"] = [
    icn["SE.IC.NAVY TASK ORGANIZATION UNIT"],
    {
      type: "text",
      stroke: false,
      x: 100,
      y: STD2525 ? 150 : 120,
      fontsize: 30,
      text: "TF"
    }
  ];
  icn["SE.IC.NAVY TASK GROUP"] = [
    icn["SE.IC.NAVY TASK ORGANIZATION UNIT"],
    {
      type: "text",
      stroke: false,
      x: 100,
      y: STD2525 ? 150 : 120,
      fontsize: 30,
      text: "TG"
    }
  ];
  icn["SE.IC.NAVY TASK UNIT"] = [
    icn["SE.IC.NAVY TASK ORGANIZATION UNIT"],
    {
      type: "text",
      stroke: false,
      x: 100,
      y: STD2525 ? 150 : 120,
      fontsize: 30,
      text: "TU"
    }
  ];
  icn["SE.IC.NAVY TASK ELEMENT"] = [
    icn["SE.IC.NAVY TASK ORGANIZATION UNIT"],
    {
      type: "text",
      stroke: false,
      x: 100,
      y: STD2525 ? 150 : 120,
      fontsize: 30,
      text: "TE"
    }
  ];
  icn["SE.IC.CONVOY"] = {
    type: "path",
    d: "m 80,115 -20,0 0,-35 80,0 0,35 -20,0 0,-20 -40,0 z"
  };
  icn["SE.IC.NONCOMBATANT"] = {
    type: "path",
    d: "m 80,100 0,-20 40,0 0,20 15,0 0,20 -70,0 0,-20 z"
  };
  icn["SE.IC.AUXILIARY SHIP"] = text(STD2525 ? "AR" : "AA");
  icn["SE.IC.AMMUNITION SHIP"] = text("AE");
  icn["SE.IC.STORES SHIP"] = text("AF");
  icn["SE.IC.AUXILIARY FLAG OR COMMAND SHIP"] = text("AGF");
  icn["SE.IC.INTELLIGENCE COLLECTOR"] = text(STD2525 ? "JI" : "AI");
  icn["SE.IC.OCEAN RESEARCH SHIP"] = text("AGO");
  icn["SE.IC.SURVEY SHIP"] = text("AGS");
  icn["SE.IC.HOSPITAL SHIP"] = text("AH");
  icn["SE.IC.CARGO SHIP"] = text("AK");
  icn["SE.IC.COMBAT SUPPORT SHIP, FAST"] = text("AOE");
  icn["SE.IC.OILER, REPLENISHMENT"] = text("AO");
  icn["SE.IC.REPAIR SHIP"] = text("AR");
  icn["SE.IC.SUBMARINE TENDER"] = text("AS");
  icn["SE.IC.TUG, OCEAN GOING"] = text(STD2525 ? "AS" : "AT");
  icn["SE.IC.SERVICE CRAFT, YARD, GENERAL"] = STD2525 ? text("YY") : text("YT");
  icn["SE.IC.BARGE, NOT SELF-PROPELLED"] = text("YB");
  icn["SE.IC.BARGE, SELF-PROPELLED"] = text("YS");
  icn["SE.IC.TUG, HARBOUR"] = text("YT");
  icn["SE.IC.LAUNCH"] = text("YFT");
  icn["SE.IC.MERCHANT SHIP, GENERAL"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 75,100 0,-35 50,0 0,35 20,0 -15,35 -60,0 -15,-35 z"
  };
  icn["SE.IC.CARGO, GENERAL"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    {
      type: "text",
      stroke: false,
      x: 100,
      y: 115,
      fontsize: 30,
      text: STD2525 ? "CA" : "A"
    }
  ];
  icn["SE.IC.CONTAINER SHIP"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 30, text: "C" }
  ];
  icn["SE.IC.DREDGE"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 30, text: "D" }
  ];
  icn["SE.IC.RADAR"] = {
    type: "path",
    d: "M72,95 l30,-25 0,25 30,-25 M70,70 c0,35 15,50 50,50",
    fill: false
  };
  icn["SE.IC.ROLL ON-ROLL OFF"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    {
      type: "text",
      stroke: false,
      x: 100,
      y: 115,
      fontsize: STD2525 ? "30" : "30",
      text: STD2525 ? "RO" : "E"
    }
  ];
  icn["SE.IC.FERRY"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    {
      type: "text",
      stroke: false,
      x: 100,
      y: 115,
      fontsize: 30,
      text: STD2525 ? "FE" : "F"
    }
  ];
  icn["SE.IC.HEAVY LIFT"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 30, text: "H" }
  ];
  icn["SE.IC.HOVERCRAFT"] = {
    type: "path",
    d: STD2525
      ? "m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z"
      : "m 90,80 0,15.6 C 78.4,96.9 70,100.6 70,105 c 0,5.5 13.4,10 30,10 16.6,0 30,-4.5 30,-10 0,-4.4 -8.4,-8.1 -20,-9.4 L 110,80 90,80 z m -15,40 50,0"
  };
  icn["SE.IC.HOVERCRAFT 2525D"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 30, text: "J" }
  ];
  icn["SE.IC.HOVERCRAFT CIVILIAN"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: STD2525
      ? "m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z"
      : "m 90,80 0,15.6 C 78.4,96.9 70,100.6 70,105 c 0,5.5 13.4,10 30,10 16.6,0 30,-4.5 30,-10 0,-4.4 -8.4,-8.1 -20,-9.4 L 110,80 90,80 z m -15,40 50,0"
  };
  icn["SE.IC.HOVERCRAFT NONCOMBATANT"] = [
    {
      type: "path",
      d: "m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z",
      strokewidth: false
    },
    STD2525
      ? {
          type: "text",
          fill: white,
          stroke: false,
          x: 100,
          y: 120,
          fontsize: 30,
          text: "NC"
        }
      : []
  ];
  icn["SE.IC.MERCHANT SHIP, LASH CARRIER (WITH BARGES)"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 30, text: "L" }
  ];
  icn["SE.IC.OILER/TANKER"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    {
      type: "text",
      stroke: false,
      x: 100,
      y: 115,
      fontsize: 30,
      text: STD2525 ? "OT" : "O"
    }
  ];
  icn["SE.IC.PASSENGER SHIP"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    {
      type: "text",
      stroke: false,
      x: 100,
      y: 115,
      fontsize: 30,
      text: STD2525 ? "PA" : "P"
    }
  ];
  icn["SE.IC.TUG, OCEAN GOING CIVILIAN"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    {
      type: "text",
      stroke: false,
      x: 100,
      y: 115,
      fontsize: 30,
      text: STD2525 ? "TU" : "T"
    }
  ];
  icn["SE.IC.TOW"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 30, text: "TW" }
  ];
  icn["SE.IC.TRANSPORT SHIP, HAZARDOUS MATERIAL"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 30, text: "HZ" }
  ];
  icn["SE.IC.JUNK/DHOW"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 30, text: "QJ" }
  ];
  icn["SE.IC.BARGE, NOT SELF-PROPELLED"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 30, text: "YB" }
  ];
  icn["SE.IC.HOSPITAL SHIP2"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    {
      type: "path",
      stroke: false,
      d:
        "m 95,95 0,-15 10,0 0,15 15,0 0,10 -15,0 0,15 -10,0 0,-15 -15,0 0,-10 z"
    }
  ];
  icn["SE.IC.FISHING VESSEL"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 75,100 0,-15 20,0 0,15 50,0 -15,35 -60,0 -15,-35 z M 105,57.4 105,100 m 30,-35 -30,35"
  };
  icn["SE.IC.DRIFTER"] = [
    icn["SE.IC.FISHING VESSEL"],
    { type: "text", stroke: false, x: 100, y: 125, fontsize: 30, text: "DF" }
  ];
  icn["SE.IC.TRAWLER"] = [
    icn["SE.IC.FISHING VESSEL"],
    { type: "text", stroke: false, x: 100, y: 125, fontsize: 30, text: "TR" }
  ];
  icn["SE.IC.FISHING VESSEL DREDGE"] = [
    icn["SE.IC.FISHING VESSEL"],
    { type: "text", stroke: false, x: 100, y: 125, fontsize: 30, text: "DR" }
  ];
  icn["SE.IC.LAW ENFORCEMENT VESSEL"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "path", d: "m 135,100 -15,35 -10,0 15,-35 z" }
  ];
  icn["SE.IC.LEISURE CRAFT, SAILING BOAT"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 105,55 0,40 35,0 z m -5,-5 0,50 m 45,0 -15,35 -60,0 -15,-35 z"
  };
  icn["SE.IC.LEISURE CRAFT, MOTORIZED"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 70,97.4 15,-30 10,0 -15,30 65,0 -15,35 -60,0 -15,-35 z"
  };
  icn["SE.IC.LEISURE CRAFT, MOTORIZED, RIGID-HULL INFLATABLE BOAT"] = [
    icn["SE.IC.LEISURE CRAFT, MOTORIZED"],
    { type: "text", stroke: false, x: 100, y: 125, fontsize: 30, text: "RB" }
  ];
  icn["SE.IC.LEISURE CRAFT, MOTORIZED, SPEEDBOAT"] = [
    icn["SE.IC.LEISURE CRAFT, MOTORIZED"],
    { type: "text", stroke: false, x: 100, y: 125, fontsize: 30, text: "SP" }
  ];
  icn["SE.IC.LEISURE CRAFT, JETSKI"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 85,60 -30,45 10,15 75,0 0,-20 -60,0 10,-30 5,0 0,-10 z"
  };
  icn["SE.IC.UNMANNED SURFACE WATER VEHICLE (USV)"] = {
    type: "path",
    fill: STD2525 || numberSIDC ? iconFillColor : false,
    stroke: black,
    d: "m 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z"
  };
  icn["SE.IC.OWN SHIP"] = {
    type: "path",
    fill: false,
    stroke: monoColor ? iconColor : iconFillColor,
    d:
      "m 50,100 100,0 m -50,-50 0,100 m 50,-50 c 0,27.6 -22.4,50 -50,50 -27.6,0 -50,-22.4 -50,-50 0,-27.6 22.4,-50 50,-50 27.6,0 50,22.4 50,50 z"
  };
  icn["SE.IC.DITCHED AIRCRAFT"] = {
    type: "path",
    fill: monoColor ? iconColor : iconFillColor,
    stroke: monoColor ? iconColor : iconFillColor,
    d:
      "m 145,120 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 10,10 25,-30 -10,-10 10,-10 20,20 -10,35 -15,-15 -15,15 z"
  };
  icn["SE.IC.PERSON IN WATER"] = {
    type: "path",
    fill: monoColor ? iconColor : iconFillColor,
    stroke: monoColor ? iconColor : iconFillColor,
    d:
      "m 105,110 10,-10 0,-15 5,0 0,20 -10,10 z m -10,0 -10,-10 0,-15 -5,0 0,20 10,10 z m 5,-5 0,-10 -5,0 -5,-5 0,-10 5,-5 10,0 5,5 0,10 -5,5 -5,0 m -15,25 15,-15 m 45,15 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 45,15 -15,-15"
  };
  icn["SE.IC.DISTRESSED VESSEL"] = {
    type: "path",
    fill: monoColor ? iconColor : iconFillColor,
    stroke: monoColor ? iconColor : iconFillColor,
    d:
      "m 120,65 -20,20 20,-20 m -5,55 -35,-35 0,-20 45,45 z m -30,0 -15,-15 m -15,15 15,-15 m 45,15 15,-15 m 15,15 -15,-15 m -45,15 15,-15"
  };
  icn["SE.IC.SEA MINELIKE"] = {
    type: "path",
    fill: monoColor ? iconColor : iconFillColor,
    stroke: monoColor ? iconColor : iconFillColor,
    d:
      "m 117.7,75 c 3.5,-3.5 7.1,-7.1 7.1,-7.1 l 7.1,7.1 -7.1,7.1 m -49.5,0 c -3.5,-3.5 -7.1,-7.1 -7.1,-7.1 l 7.1,-7.1 7.1,7.1 M 95,70 c 0,-5 0,-10 0,-10 l 10,0 0,10 m 25,30 c 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 16.6,0 30,13.4 30,30 z"
  };
  icn["SE.IC.NAVIGATIONAL"] = {
    type: "path",
    fill: false,
    stroke: monoColor ? iconColor : "red",
    d: "m 75,90 -10,10 70,0 -10,10"
  };
  icn["SE.IC.ICEBERG"] = {
    type: "path",
    fill: monoColor ? iconColor : iconFillColor,
    stroke: monoColor ? iconColor : iconFillColor,
    d: "m 75,100 25,-30 25,30 -5,15 -5,-5 -15,20 -15,-20 -5,5 z m -15,0 80,0"
  };
  icn["SE.IC.FUSED TRACK"] = [
    text("?"),
    {
      type: "path",
      fill: false,
      d: "m 70,65 10,35 -10,35 60,0 -10,-35 10,-35 z"
    }
  ];
  icn["SE.M1.OWN SHIP"] = textm1("OWN");
  icn["SE.M1.ANTIAIR WARFARE"] = textm1("AAW");
  icn["SE.M1.ANTISUBMARINE WARFARE"] = textm1("ASW");
  icn["SE.M1.ESCORT"] = textm1("E");
  icn["SE.M1.ELECTRONIC WARFARE"] = textm1("EW");
  icn["SE.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE"] = textm1("ISR");
  icn["SE.M1.MINE COUNTER MEASURES"] = textm1("MCM");
  icn["SE.M1.MISSILE DEFENSE"] = textm1("MD");
  icn["SE.M1.MEDICAL"] = textm1("ME");
  icn["SE.M1.MINE COUNTERMEASURES"] = textm1("MCM");
  icn["SE.M1.MINE WARFARE"] = textm1("MIW");
  icn["SE.M1.REMOTE MULTI-MISSION VEHIHLE"] = textm1("RMV");
  icn["SE.M1.SPECIAL OPERATIONS FORCE"] = textm1("SOF");
  icn["SE.M1.SURFACE WARFARE"] = textm1("SUW");
  icn["SE.M1.BALLISTIC MISSILE"] = textm1("B");
  icn["SE.M1.GUIDED MISSILE"] = textm1("G");
  icn["SE.M1.OTHER GUIDED MISSILE"] = textm1("M");
  icn["SE.M1.TORPEDO"] = textm1("T");
  icn["SE.M1.CYBERSPACE"] = textm1("CYB");
  icn["SE.M1.HIJACKER"] = textm1("HJ");
  icn["SE.M2.CYBERSPACE"] = textm2("CYB");
  icn["SE.M1.DRONE-EQUIPPED"] = {
    type: "path",
    stroke: false,
    d: "m 80,65 20,13 20,-13 0,-5 -20,10 -20,-10 z"
  };
  icn["SE.M1.HELICOPTER-EQUIPPED"] = textm1("H");
  icn["SE.M1.BALLISTIC MISSILE DEFENSE, SHOOTER"] = textm1("BM");
  icn[
    "SE.M1.BALLISTIC MISSILE DEFENSE, LONG- RANGE SURVEILLANCE AND TRACK (LRS&T)"
  ] = textm1("ST");
  icn["SE.M1.SEA-BASE X-BAND"] = textm1("SBX");
  icn["SE.M1.HIJACKING/HIJACKED"] = textm1("H");
  icn["SE.M2.ANTISUBMARINE WARFARE"] = textm2("ASW");
  icn["SE.M2.MINE WARFARE"] = textm2("MIW");
  icn["SE.M2.SURFACE WARFARE"] = textm2("SUW");
  icn["SE.M2.NUCLEAR POWERED"] = textm2("N");
  icn["SE.M2.HEAVY"] = textm2("H");
  icn["SE.M2.LIGHT"] = textm2("L");
  icn["SE.M2.MEDIUM"] = textm2("M");
  icn["SE.M2.DOCK"] = textm2("D");
  icn["SE.M2.LOGISTICS"] = textm2("LOG");
  icn["SE.M2.TANK"] = textm2("T");
  icn["SE.M2.VEHICLE"] = textm2("V");
  icn["SE.M2.FAST"] = textm2("F");
  icn["SE.M2.AIR-CUSHIONED"] = textm2("J");
  icn["SE.M2.AIR-CUSHIONED (USA ONLY)"] = textm2("AC");
  icn["SE.M2.HYDROFOIL"] = textm2("K");
  icn["SE.M2.AUTONOMOUS CONTROL"] = textm2("AUT");
  icn["SE.M2.REMOTELY PILOTED"] = textm2("RP");
  icn["SE.M2.EXPENDABLE"] = textm2("EXP");

  for (var key in icn) {
    if (!icn.hasOwnProperty(key)) continue;
    if (iconParts.hasOwnProperty(key)) console.warn("Override of: " + key);
    defaultProperties.call(this, icn[key], iconColor);
    iconParts[key] = icn[key];
  }
}
