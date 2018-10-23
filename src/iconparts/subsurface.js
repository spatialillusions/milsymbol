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
  var white = colors.white[affiliation];
  var black = colors.black[affiliation];

  //var numberSIDC = metadata.numberSIDC;
  var icn = {};

  icn["SU.IC.MILITARY"] = text("MIL");
  icn["SU.IC.CIVILIAN"] = text("CIV");
  icn["SU.IC.CIVILIAN"].fill =
    STD2525 || numberSIDC ? iconFillColor : !frame ? iconFillColor : false;
  icn["SU.IC.CIVILIAN"].stroke = black;
  icn["SU.IC.CIVILIAN"].strokewidth = 3;
  icn["SU.IC.MANUAL TRACK"] = text("MAN");
  icn["SU.IC.SUBMARINE"] = {
    type: "path",
    d: "m 75,85 50,0 15,15 -15,15 -50,0 -15,-15 z"
  };
  icn["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"] = {
    type: "path",
    d: "m 75,110 -10,-10 10,-10 20,0 0,-10 10,0 0,10 20,0 10,10 -10,10 z"
  };
  icn["SU.IC.SUBMARINE CONVENTIONAL PROPULSION, SURFACED"] = [
    {
      type: "path",
      d: "m 75,110 -10,-10 10,-10 20,0 0,-10 10,0 0,10 20,0 10,10 -10,10 z"
    },
    {
      type: "path",
      fill: false,
      d: "m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"
    }
  ];
  icn["SU.IC.SUBMARINE NUCLEAR PROPULSION"] = {
    type: "path",
    d: "m 75,110 -10,-10 10,-10 0,-10 50,0 0,10 10,10 -10,10 z"
  };
  icn["SU.IC.SUBMARINE NUCLEAR PROPULSION, SURFACED"] = [
    {
      type: "path",
      d: "m 75,110 -10,-10 10,-10 0,-10 50,0 0,10 10,10 -10,10 z"
    },
    {
      type: "path",
      fill: false,
      d: "m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"
    }
  ];
  icn["SU.IC.SUBMARINE ATTACK (SSN)"] = {
    type: "text",
    fill: white,
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 30,
    text: "A"
  };
  icn["SU.IC.SUBMARINE MISSILE (TYPE UNKNOWN)"] = {
    type: "text",
    fill: white,
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 30,
    text: "M"
  };
  icn["SU.IC.SUBMARINE GUIDED MISSILE (SSGN)"] = {
    type: "text",
    fill: white,
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 30,
    text: "G"
  };
  icn["SU.IC.SUBMARINE BALLISTIC MISSILE (SSBN)"] = {
    type: "text",
    fill: white,
    stroke: false,
    x: 100,
    y: 110,
    fontsize: 30,
    text: "B"
  };
  icn["SU.IC.SUBMARINE, SURFACED"] = [
    { type: "path", d: "m 75,80 50,0 15,15 -15,15 -50,0 -15,-15 z" },
    {
      type: "path",
      fill: false,
      d: "m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"
    }
  ];
  icn["SU.IC.SUBMARINE, BOTTOMED"] = [
    { type: "path", d: "m 75,80 50,0 15,15 -15,15 -50,0 -15,-15 z" },
    { type: "path", d: "m 70,120 0,-5 60,0 0,5 z" }
  ];
  icn["SU.IC.SUBMARINE, SNORKELING"] = [
    {
      type: "path",
      d: "m 75,120 -10,-10 10,-10 20,0 0,-20 10,0 0,20 20,0 10,10 -10,10 z"
    },
    {
      type: "path",
      fill: false,
      d: "m 65,95 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"
    }
  ];
  icn["SU.IC.OTHER SUBMERSIBLE"] = {
    type: "path",
    d:
      "m 85,90 0,-10 30,0 0,10 m 20,10 c 0,5.5 -15.7,10 -35,10 -19.3,0 -35,-4.5 -35,-10 0,-5.5 15.7,-10 35,-10 19.3,0 35,4.5 35,10 z"
  };
  icn["SU.IC.OTHER SUBMERSIBLE, SURFACED"] = [
    icn["SU.IC.OTHER SUBMERSIBLE"],
    {
      type: "path",
      fill: false,
      d: "m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"
    }
  ];
  icn[
    "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"
  ] = {
    type: "path",
    d: "m 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z",
    stroke: false
  };
  icn["SU.IC.NON-SUBMARINE"] =
    STD2525 && !numberSIDC
      ? {
          type: "text",
          stroke: false,
          x: 100,
          y: 110,
          fontsize: 35,
          text: "NON"
        }
      : [
          {
            type: "text",
            stroke: false,
            x: 100,
            y: 100,
            fontsize: 25,
            text: "NON"
          },
          {
            type: "text",
            stroke: false,
            x: 100,
            y: 120,
            fontsize: 25,
            text: "SUB"
          }
        ];
  icn["SU.IC.DIVER, MILITARY"] = {
    type: "path",
    stroke: false,
    d:
      "M 100 80 C 93.7 80 88.3 82.7 85.8 88.3 L 85.8 88.3 L 77.8 88.3 L 77.8 105 L 85.8 105 L 85.8 104.8 C 87.3 108.2 88.8 110 92 111.7 L 92.1 111.7 L 84.2 120 L 115.8 120 L 107.9 111.7 L 108 111.7 C 111.1 110 112.8 108.3 114.3 105 L 122.2 105 L 122.2 88.3 L 114.3 88.3 L 114.3 88.3 C 111.7 82.8 106.3 80 100 80 z M 100 86.6 C 105.4 86.6 109.8 91.1 109.8 96.6 C 109.8 102.1 105.4 106.6 100 106.6 C 94.6 106.6 90.1 102.1 90.1 96.6 C 90.1 91.1 94.6 86.6 100 86.6 z M 100 89.6 C 96.2 89.6 93.1 92.7 93.1 96.6 C 93.1 100.5 96.2 103.6 100 103.6 C 103.8 103.6 106.8 100.5 106.8 96.6 C 106.8 92.7 103.8 89.6 100 89.6 z"
  };
  icn["SU.IC.SUBMERSIBLE, CIVILIAN"] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 85,90 0,-10 30,0 0,10 m 20,10 c 0,5.5 -15.7,10 -35,10 -19.3,0 -35,-4.5 -35,-10 0,-5.5 15.7,-10 35,-10 19.3,0 35,4.5 35,10 z"
  };
  icn[
    "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV), CIVILIAN"
  ] = {
    type: "path",
    fill: STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 60,84 40,20 40,-20 0,8 -40,25 -40,-25 z"
  };
  icn["SU.M1.CYBERSPACE"] = textm1("CYB");
  icn["SU.M1.HIJACKER"] = textm1("HJ");
  icn["SU.M2.CYBERSPACE"] = textm2("CYB");
  icn["SU.IC.DIVER, CIVILIAN"] = {
    type: "path",
    fill: iconFillColor,
    d:
      "M 114.3,94 C 114.3,102.3 107.9,109 100,109 c -7.9,0 -14.2,-6.7 -14.2,-15 0,-8.3 6.4,-15 14.2,-15 7.9,0 14.3,6.7 14.3,15 z m 0,27 14.3,15 -57,0 14.3,-15 M 125.7,79 l 14.3,0 0,30 -14.3,0 m -51.3,0 -14.3,0 0,-30 14.3,0 m 54.2,15 c 0,16.6 -12.8,30 -28.5,30 -15.7,0 -28.5,-13.4 -28.5,-30 C 71.5,77.4 84.3,64 100,64 115.7,64 128.5,77.4 128.5,94 z"
  };
  icn["SU.IC.UNDERWATER WEAPON"] = text("WPN");
  icn["SU.IC.TORPEDO"] = {
    type: "path",
    d: "m 65,105 -5,-5 5,-5 60,0 c 0,0 5,5 5,5 l 5,-5 0,10 -5,-5 -5,5 z"
  };
  icn["SU.IC.IMPROVISED EXPLOSIVE DEVICE (IED)"] = text("IED");
  //Yes the color settings here looks like crap, but the person implementing 2525 mines obviously didn't read the standard so we have to make a lot of special cases...
  icn["SU.IC.UNDERWATER DECOY"] = {
    type: "path",
    stroke: black,
    d: STD2525
      ? "M 105,110 90,95 105,80 z M 85,110 70,95 85,80 z m 40,-30 -15,15 15,15 z m -55,40 0,-5 55,0 0,5 z"
      : "M 105,120 90,105 105,90 z M 85,120 70,105 85,90 z m 40,-30 -15,15 15,15 z m -55,-5 0,-5 55,0 0,5 z",
    fill: STD2525 ? iconColor : iconFillColor
  };
  icn["SU.IC.UNDERWATER DECOY DSymbol"] = {
    type: "path",
    d:
      "M 85 81 L 65 98 L 85 119 L 85 81 z M 110 81 L 90 98 L 110 119 L 110 81 z M 135 81 L 115 98 L 135 119 L 135 81 z"
  };
  icn["SU.IC.ECHO TRACKER CLASSIFIER (ETC)/POSSIBLE CONTACT (POSCON)"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 130,
    fontsize: 60,
    text: "?"
  };
  icn["SU.IC.FUSED TRACK"] = [
    text("?"),
    { type: "path", fill: false, d: "m 70,65 10,35 -10,35 60,0 -10,-35 10,-35" }
  ];
  icn["SU.IC.SEA MINE"] = {
    type: "path",
    fill:
      (STD2525 || numberSIDC) && !monoColor
        ? colors.iconColor.Hostile
        : iconFillColor,
    stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
    d:
      "M 115.9,73 126.5,62.4 137.1,73 126.5,83.6 m -53,0 L 62.9,73 73.5,62.4 84.1,73 m 8.4,-3 0,-15 15,0 0,15 m 22.5,30 c 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 C 116.6,70 130,83.4 130,100 z"
  };
  icn["SU.IC.SEA MINE - BOTTOM"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Hostile
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE - MOORED"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Hostile
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE - FLOATING"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "path",
      fill: false,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.SEA MINE - RISING"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "path",
      fill:
        numberSIDC && alternateMedal
          ? ""
          : (STD2525 || numberSIDC) && !monoColor
            ? colors.iconColor.Hostile
            : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 100,128 -10,15 20,0 z"
    }
  ];
  icn["SU.IC.SEA MINE (IN OTHER POSITION)"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "path",
      fill: false,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 130,100 15,0 M 70,100 l -15,0"
    }
  ];
  icn["SU.IC.SEA MINE - KINGFISHER"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "text",
      stroke: false,
      fill: monoColor
        ? monoColor
        : (STD2525 || numberSIDC) && !alternateMedal
          ? black
          : white,
      x: 100,
      y: 110,
      fontsize: 35,
      text: "K"
    }
  ];
  icn["SU.IC.SEA MINE - SMALL OBJECT"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "text",
      stroke: false,
      fill: monoColor
        ? monoColor
        : (STD2525 || numberSIDC) && !alternateMedal
          ? black
          : white,
      x: 100,
      y: 112,
      fontsize: 30,
      text: "SO"
    }
  ];
  icn["SU.IC.SEA MINE EXERCISE MINE"] = [
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d:
        "M 115.9,73 126.5,62.4 137.1,73 126.5,83.6 m -53,0 L 62.9,73 73.5,62.4 84.1,73 m 8.4,-3 0,-15 15,0 0,15 m 22.5,30 c 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 C 116.6,70 130,83.4 130,100 z"
    },
    {
      type: "text",
      stroke: false,
      fill: monoColor
        ? monoColor
        : (STD2525 || numberSIDC) && !alternateMedal
          ? black
          : white,
      x: 100,
      y: 112,
      fontsize: 30,
      text: "EX"
    },
    numberSIDC
      ? []
      : {
          type: "text",
          stroke: false,
          fill: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
          x: 150,
          y: 46,
          fontsize: 40,
          text: "X"
        }
  ];
  icn["SU.IC.SEA MINE EXERCISE MINE - BOTTOM"] = [
    icn["SU.IC.SEA MINE EXERCISE MINE"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE EXERCISE MINE - MOORED"] = [
    icn["SU.IC.SEA MINE EXERCISE MINE"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE EXERCISE MINE - FLOATING"] = [
    icn["SU.IC.SEA MINE EXERCISE MINE"],
    {
      type: "path",
      fill: false,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.SEA MINE EXERCISE MINE - RISING"] = [
    icn["SU.IC.SEA MINE EXERCISE MINE"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 100,128 -10,15 20,0 z"
    }
  ];
  icn["SU.IC.SEA MINE DECOY"] = {
    type: "path",
    fill:
      (STD2525 || numberSIDC) && !monoColor
        ? alternateMedal
          ? black
          : "rgb(0, 130, 24)"
        : iconFillColor,
    stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
    d:
      "m 106.6,101.6 0,26.3 -13.1,-13.1 z m -19.7,0 0,26.3 -13.1,-13.1 z m 39.4,0 0,26.3 -13.1,-13.1 13.1,-13.1 M 100,75.3 c -14.5,0 -26.3,11.8 -26.3,26.3 l 52.5,0 C 126.3,87.1 114.5,75.3 100,75.3 z m -6.6,0 0,-13.1 13.1,0 0,13.1 m -29.8,12.3 -9.3,-9.3 9.3,-9.3 9.3,9.3 m 27.9,0 9.3,-9.3 9.3,9.3 -9.3,9.3"
  };
  icn["SU.IC.SEA MINE DECOY, BOTTOM/GROUND"] = [
    icn["SU.IC.SEA MINE DECOY"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE DECOY, MOORED"] = [
    icn["SU.IC.SEA MINE DECOY"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75,140 50,0 M 100,100 l 0,40"
    }
  ];
  icn["SU.IC.SEA MINE NEUTRALIZED"] = [
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Neutral
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d:
        "M 115.9,73 126.5,62.4 137.1,73 126.5,83.6 m -53,0 L 62.9,73 73.5,62.4 84.1,73 m 8.4,-3 0,-15 15,0 0,15 m 22.5,30 c 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 C 116.6,70 130,83.4 130,100 z"
    },
    {
      type: "path",
      strokewidth: 5,
      stroke: !alternateMedal ? black : white,
      d: "m 135,65 -70,70 m 0,-70 70,70"
    }
  ];
  icn["SU.IC.SEA MINE NEUTRALIZED - BOTTOM"] = [
    icn["SU.IC.SEA MINE NEUTRALIZED"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Neutral
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE NEUTRALIZED - MOORED"] = [
    icn["SU.IC.SEA MINE NEUTRALIZED"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Neutral
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE NEUTRALIZED - FLOATING"] = [
    icn["SU.IC.SEA MINE NEUTRALIZED"],
    {
      type: "path",
      fill: false,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.SEA MINE NEUTRALIZED - RISING"] = [
    icn["SU.IC.SEA MINE NEUTRALIZED"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Neutral
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 100,128 -10,15 20,0 z"
    }
  ];
  icn["SU.IC.SEA MINE (IN OTHER POSITION) NEUTRALIZED"] = [
    icn["SU.IC.SEA MINE NEUTRALIZED"],
    {
      type: "path",
      fill: false,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 130,100 15,0 M 70,100 l -15,0"
    }
  ];
  icn["SU.IC.SEA MINE MILEC"] = [
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(255,255,0)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill: monoColor
        ? monoColor
        : (STD2525 || numberSIDC) && !alternateMedal
          ? black
          : white,
      x: 100,
      y: 112,
      fontsize: 30,
      text: "E"
    }
  ];
  icn["SU.IC.SEA MINE MILEC - BOTTOM"] = [
    icn["SU.IC.SEA MINE MILEC"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(255,255,0)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE MILEC - MOORED"] = [
    icn["SU.IC.SEA MINE MILEC"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(255,255,0)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE MILEC - FLOATING"] = [
    icn["SU.IC.SEA MINE MILEC"],
    {
      type: "path",
      fill: false,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.SEA MINE MINE ANCHOR"] = [
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : false,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill: monoColor
        ? monoColor
        : (STD2525 || numberSIDC) && !alternateMedal
          ? black
          : white,
      x: 100,
      y: 105,
      fontsize: 18,
      text: "ANCR"
    }
  ];
  icn["SU.IC.SEA MINE MILCO"] = [
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(255,141,42)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    numberSIDC
      ? []
      : {
          type: "text",
          stroke: false,
          fill: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
          x: 100,
          y: 112,
          fontsize: 30,
          text: "#"
        }
  ];
  icn["SU.IC.SEA MINE MILCO - BOTTOM"] = [
    icn["SU.IC.SEA MINE MILCO"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(255,141,42)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE MILCO - MOORED"] = [
    icn["SU.IC.SEA MINE MILCO"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE MILCO - FLOATING"] = [
    icn["SU.IC.SEA MINE MILCO"],
    {
      type: "path",
      fill: false,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"] = {
    type: "text",
    stroke: false,
    fill: monoColor
      ? monoColor
      : (STD2525 || numberSIDC) && !alternateMedal
        ? black
        : white,
    x: 100,
    y: 110,
    fontsize: 35,
    text: "1"
  };
  icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"] = {
    type: "text",
    stroke: false,
    fill: monoColor
      ? monoColor
      : (STD2525 || numberSIDC) && !alternateMedal
        ? black
        : white,
    x: 100,
    y: 110,
    fontsize: 35,
    text: "2"
  };
  icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"] = {
    type: "text",
    stroke: false,
    fill: monoColor
      ? monoColor
      : (STD2525 || numberSIDC) && !alternateMedal
        ? black
        : white,
    x: 100,
    y: 110,
    fontsize: 35,
    text: "3"
  };
  icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"] = {
    type: "text",
    stroke: false,
    fill: monoColor
      ? monoColor
      : (STD2525 || numberSIDC) && !alternateMedal
        ? black
        : white,
    x: 100,
    y: 110,
    fontsize: 35,
    text: "4"
  };
  icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"] = {
    type: "text",
    stroke: false,
    fill: monoColor
      ? monoColor
      : (STD2525 || numberSIDC) && !alternateMedal
        ? black
        : white,
    x: 100,
    y: 110,
    fontsize: 35,
    text: "5"
  };
  icn["SU.IC.SEA MINE NEGATIVE REACQUISITION"] = [
    {
      type: "path",
      strokedasharray: "8,4",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(255,255,0)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill: monoColor
        ? monoColor
        : (STD2525 || numberSIDC) && !alternateMedal
          ? black
          : white,
      x: 100,
      y: 112,
      fontsize: 30,
      text: "NR"
    }
  ];
  icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - BOTTOM"] = [
    icn["SU.IC.SEA MINE NEGATIVE REACQUISITION"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(255,255,0)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - MOORED"] = [
    icn["SU.IC.SEA MINE NEGATIVE REACQUISITION"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(255,255,0)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - FLOATING"] = [
    icn["SU.IC.SEA MINE NEGATIVE REACQUISITION"],
    {
      type: "path",
      fill: false,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.SEA MINE GENERAL OBSTRUCTOR"] = [
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(255,255,0)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill: monoColor
        ? monoColor
        : (STD2525 || numberSIDC) && !alternateMedal
          ? black
          : white,
      x: 100,
      y: 112,
      fontsize: 30,
      text: "OB"
    }
  ];
  icn["SU.IC.SEA MINE GENERAL OBSTRUCTOR NEUTRALIZED"] = [
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Neutral
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill:
        (STD2525 || numberSIDC) && !monoColor && !alternateMedal
          ? black
          : white,
      x: 100,
      y: 112,
      fontsize: 30,
      text: "OB"
    },
    {
      type: "path",
      strokewidth: 5,
      stroke: !alternateMedal ? black : white,
      d: "m 135,65 -70,70 m 0,-70 70,70"
    }
  ];
  icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"] = [
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill: monoColor
        ? monoColor
        : (STD2525 || numberSIDC) && !alternateMedal
          ? black
          : white,
      x: 100,
      y: 112,
      fontsize: 30,
      text: "N"
    }
  ];
  icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - BOTTOM"] = [
    icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - MOORED"] = [
    icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"],
    {
      type: "path",
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? alternateMedal
            ? black
            : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - FLOATING"] = [
    icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"],
    {
      type: "path",
      fill: false,
      stroke: (STD2525 || numberSIDC) && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.UNEXPLODED EXPLOSIVE ORDNANCE"] = [
    {
      type: "path",
      strokedasharray: "8,4",
      fill: false,
      stroke:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Hostile
          : iconColor,
      d: "m 85,65 30,0 20,20 0,30 -20,20 -30,0 -20,-20 0,-30 z"
    },
    {
      type: "text",
      stroke: false,
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Hostile
          : iconColor,
      x: 100,
      y: 110,
      fontsize: 30,
      text: "UXO"
    }
  ];
  icn["SU.IC.ENVIRONMENTAL REPORT LOCATION"] = [
    {
      type: "path",
      fill: false,
      stroke:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Neutral
          : iconColor,
      d: "m 70,70 0,60 60,0 0,-60 z"
    },
    {
      type: "text",
      stroke: false,
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Neutral
          : iconColor,
      x: 100,
      y: 122,
      fontsize: 60,
      text: "E"
    }
  ];
  icn["SU.IC.DIVE REPORT LOCATION"] = [
    {
      type: "path",
      fill: false,
      stroke:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Neutral
          : iconColor,
      d: "m 70,70 0,60 60,0 0,-60 z"
    },
    {
      type: "text",
      stroke: false,
      fill:
        (STD2525 || numberSIDC) && !monoColor
          ? colors.iconColor.Neutral
          : iconColor,
      x: 100,
      y: 122,
      fontsize: 60,
      text: "D"
    }
  ];
  icn["SU.IC.SEABED INSTALLATION/MANMADE"] = {
    type: "path",
    fill: iconFillColor,
    stroke: black,
    d: "m 140,125 -80,0 10,-30 10,20 20,-50 20,50 10,-25 z"
  };
  icn["SU.IC.SEABED INSTALLATION, MAN-MADE, MILITARY"] = {
    type: "path",
    d: "m 75,80 0,40 50,0 0,-15 -15,0 0,-10 -20,0 0,-15 z"
  };
  icn["SU.IC.SEABED INSTALLATION, MAN-MADE, NON-MILITARY"] = {
    type: "path",
    fill: iconFillColor,
    d: "m 75,80 0,40 50,0 0,-15 -15,0 0,-10 -20,0 0,-15 z"
  };
  icn["SU.IC.SEABED ROCK/STONE, OBSTACLE, OTHER"] = {
    type: "path",
    d: "m 140,125 -80,0 10,-30 10,20 20,-50 20,50 10,-25 z"
  };
  icn["SU.IC.WRECK"] = {
    type: "path",
    d: "m 125,85 0,30 m -50,-30 0,30 m 25,-40 0,45 m -40,-20 80,0"
  };
  icn["SU.IC.MARINE LIFE"] = {
    type: "path",
    d: "m 60,100 20,-20 45,20 15,-10 0,20 -15,-10 -45,20 z"
  };
  icn["SU.IC.SEA ANOMALY"] = {
    type: "path",
    fill: false,
    d: "m 65,100 15,-20 20,30 20,-30 15,20 m -70,10 15,-20 20,30 20,-30 15,20"
  };
  icn["SU.M1.ANTISUBMARINE WARFARE"] = textm1("ASW");
  icn["SU.M1.AUXILIARY"] = textm1("AUX");
  icn["SU.M1.COMMAND AND CONTROL"] = textm1("C2");
  icn["SU.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE"] = textm1("ISR");
  icn["SU.M1.MINE COUNTERMEASURES"] = textm1("MCM");
  icn["SU.M1.MINE WARFARE"] = textm1("MIW");
  icn["SU.M1.SURFACE WARFARE"] = textm1("SUW");
  icn["SU.M1.ATTACK"] = textm1("A");
  icn["SU.M1.BALLISTIC MISSILE"] = textm1("B");
  icn["SU.M1.GUIDED MISSILE"] = textm1("G");
  icn["SU.M1.OTHER GUIDED MISSILES (POINT DEFENCE)"] = textm1("M");
  icn["SU.M1.SPECIAL OPERATIONS FORCE"] = textm1("SOF");
  icn["SU.M1.POSSIBLE SUBMARINE - LOW 1"] = textm1("P1");
  icn["SU.M1.POSSIBLE SUBMARINE - LOW 2"] = textm1("P2");
  icn["SU.M1.POSSIBLE SUBMARINE - HIGH 3"] = textm1("P3");
  icn["SU.M1.POSSIBLE SUBMARINE - HIGH 4"] = textm1("P4");
  icn["SU.M1.PROBABLE SUBMARINE"] = textm1("PB");
  icn["SU.M1.CERTAIN SUBMARINE"] = textm1("CT");
  icn["SU.M1.ANTI-TORPEDO TORPEDO"] = textm1("ATT");
  icn["SU.M1.HIJACKING/HIJACKED"] = textm1("H");
  icn["SU.M2.POSSIBLE SUBMARINE - LOW 1"] = textm2("P1");
  icn["SU.M2.POSSIBLE SUBMARINE - LOW 2"] = textm2("P2");
  icn["SU.M2.POSSIBLE SUBMARINE - HIGH 3"] = textm2("P3");
  icn["SU.M2.POSSIBLE SUBMARINE - HIGH 4"] = textm2("P4");
  icn["SU.M2.PROBABLE SUBMARINE"] = textm2("PB");
  icn["SU.M2.AIR INDEPENDENT PROPULSION"] = textm2("AI");
  icn["SU.M2.CERTSUB"] = textm2("CT");
  icn["SU.M2.DIESEL PROPULSION"] = textm2("D");
  icn["SU.M2.DIESEL - TYPE 1"] = textm2("D1");
  icn["SU.M2.DIESEL - TYPE 2"] = textm2("D2");
  icn["SU.M2.DIESEL - TYPE 3"] = textm2("D3");
  icn["SU.M2.NUCLEAR POWERED"] = textm2("N");
  icn["SU.M2.NUCLEAR - TYPE 1"] = textm2("N1");
  icn["SU.M2.NUCLEAR - TYPE 2"] = textm2("N2");
  icn["SU.M2.NUCLEAR - TYPE 3"] = textm2("N3");
  icn["SU.M2.NUCLEAR - TYPE 4"] = textm2("N4");
  icn["SU.M2.NUCLEAR - TYPE 5"] = textm2("N5");
  icn["SU.M2.NUCLEAR - TYPE 6"] = textm2("N6");
  icn["SU.M2.NUCLEAR - TYPE 7"] = textm2("N7");
  icn["SU.M2.AUTONOMOUS CONTROL"] = textm2("AUT");
  icn["SU.M2.REMOTELY PILOTED"] = textm2("RP");
  icn["SU.M2.EXPENDABLE"] = textm2("EXP");

  for (var key in icn) {
    if (!icn.hasOwnProperty(key)) continue;
    if (iconParts.hasOwnProperty(key)) console.warn("Override of: " + key);
    defaultProperties.call(this, icn[key], iconColor);
    iconParts[key] = icn[key];
  }
}
