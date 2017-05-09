// Icon parts for tactical points
module.exports = function(
  iconParts,
  properties,
  colors,
  STD2525,
  monoColor,
  alternateMedal
) {
  // Tactical points icon parts
  /*
  iconParts
  The existing object of icon parts
  
  properties
  propterties object
  
  colors
  color object
  
  STD2525
  Is it 2525 then true, otherwise false
  
  alternateMedal
  true/false for sea mine stuff
  */

  var affiliation = properties.affiliation || "Friend";
  //If hostile and not monoColor, make it red, otherwise use the iconColor.
  var iconColor = affiliation == "Hostile" && !monoColor
    ? "rgb(255, 0, 0)"
    : colors.iconColor[affiliation];

  var numberSIDC = properties.numberSIDC;
  var icn = {};

  icn["TP.DESTROY"] = !STD2525 && !numberSIDC
    ? {
        type: "path",
        fill: false,
        strokedasharray: "12,5",
        d: "M 0,155 200,45 M 0,45 200,155"
      }
    : [
        {
          type: "path",
          fill: false,
          d: "m 0,45 85,46.75 m 30,16.5 85,46.75 M 0,155 85,108.25 M 115,91.75 200,45"
        },
        {
          type: "text",
          stroke: false,
          textanchor: "middle",
          x: 100,
          y: 115,
          fontsize: 45,
          text: "D"
        }
      ];
  icn["TP.INTERDICT"] = !STD2525 && !numberSIDC
    ? {
        type: "path",
        fill: false,
        d: "m 0,100 200,0 M 0,155 200,45.2 M 185,85 l 15,15 -15,15 m 9.2,-49.3 5.5,-20.5 -20.5,-5.5"
      }
    : [
        {
          type: "path",
          fill: false,
          d: "m 194.203,65.6674 5.49,-20.4904 -20.49,-5.4904 M 115,91.75 200,45 M 0,155 85,108.25 M 185,85 l 15,15 -15,15 m -70,-15 85,0 m -200,0 85,0"
        },
        {
          type: "text",
          stroke: false,
          textanchor: "middle",
          x: 100,
          y: 115,
          fontsize: 45,
          text: "I"
        }
      ];
  icn["TP.NEUTRALIZE"] = !STD2525 && !numberSIDC
    ? [
        { type: "path", fill: false, d: "M 0,45 200,155" },
        {
          type: "path",
          fill: false,
          strokedasharray: "12,5",
          d: "M 0,155 200,45"
        }
      ]
    : [
        {
          type: "path",
          fill: false,
          d: "M 115,108.25 200,155 M 0,45 85,91.75"
        },
        {
          type: "path",
          fill: false,
          strokedasharray: "12,5",
          d: "M 115,91.75 200,45 M 0,155 85,108.25"
        },
        {
          type: "text",
          stroke: false,
          textanchor: "middle",
          x: 100,
          y: 115,
          fontsize: 45,
          text: "N"
        }
      ];
  icn["TP.DATUM"] = [
    {
      type: "path",
      stroke: false,
      d: "m 100,50 0,50 50,0 C 150,72.3858 127.614,50 100,50 Z m 0,50 -50,0 c 0,27.614 22.3858,50 50,50 z"
    },
    { type: "circle", fill: false, cx: 100, cy: 100, r: 50 }
  ];
  icn["TP.BRIEF CONTACT"] = [
    { type: "path", d: "m 65,0 70,0 m -35,80 0,-80 m 0,100 -45,-20 90,0 z" },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 75,
      y: 55,
      fontsize: 45,
      text: "B"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 125,
      y: 55,
      fontsize: 45,
      text: "C"
    }
  ];
  icn["TP.LOST CONTACT"] = [
    { type: "path", d: "m 65,0 70,0 m -35,80 0,-80 m 0,100 -45,-20 90,0 z" },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 75,
      y: 55,
      fontsize: 45,
      text: "L"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 125,
      y: 55,
      fontsize: 45,
      text: "C"
    }
  ];
  icn["TP.SINKER"] = [
    {
      type: "path",
      fill: false,
      d: "m 100,15 0,65 M 60,15 80,0 100,15 120,0 140,15"
    },
    { type: "path", d: "M 100,100 55,80 145,80 Z" }
  ];
  icn["TP.SONOBUOY"] = [
    { type: "path", fill: false, d: "M 100,60 l 0,-35 10,10 0,-45" },
    { type: "circle", fill: false, cx: 100, cy: 100, r: 40 }
  ];
  icn["TP.SONOBUOY PATTERN CENTER"] = [
    icn["TP.SONOBUOY"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "P"
    }
  ];
  icn["TP.SONOBUOY DIFAR"] = [
    icn["TP.SONOBUOY"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "D"
    }
  ];
  icn["TP.SONOBUOY LOFAR"] = [
    icn["TP.SONOBUOY"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "L"
    }
  ];
  icn["TP.SONOBUOY CASS"] = [
    icn["TP.SONOBUOY"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "C"
    }
  ];
  icn["TP.SONOBUOY DICASS"] = [
    icn["TP.SONOBUOY"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "S"
    }
  ];
  icn["TP.SONOBUOY BT"] = [
    icn["TP.SONOBUOY"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "B"
    }
  ];
  icn["TP.SONOBUOY ANM"] = [
    icn["TP.SONOBUOY"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "A"
    }
  ];
  icn["TP.SONOBUOY VLAD"] = [
    icn["TP.SONOBUOY"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "V"
    }
  ];
  icn["TP.SONOBUOY ATAC"] = [
    icn["TP.SONOBUOY"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "T"
    }
  ];
  icn["TP.SONOBUOY RO"] = [
    icn["TP.SONOBUOY"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "R"
    }
  ];
  icn["TP.SONOBUOY KINGPIN"] = [
    icn["TP.SONOBUOY"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "K"
    }
  ];
  icn["TP.SONOBUOY EXPIRED"] = [
    icn["TP.SONOBUOY"],
    { type: "path", fill: false, d: "M 40,60 l 120,80 M 40,140 l 120,-80" }
  ];
  icn["TP.SEARCH"] = {
    type: "path",
    d: "m 80,80 20,20 -20,20 40,0 -20,-20 20,-20 z M 50,150 150,50 M 50,50 150,150"
  };
  icn["TP.SEARCH AREA"] = [
    icn["TP.SEARCH"],
    !STD2525 && !numberSIDC
      ? {
          type: "text",
          stroke: false,
          textanchor: "end",
          x: 75,
          y: 115,
          fontsize: 40,
          text: "SA"
        }
      : [
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 60,
            y: 115,
            fontsize: 45,
            text: "S"
          },
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 140,
            y: 115,
            fontsize: 45,
            text: "A"
          }
        ]
  ];
  icn["TP.DIP POSITION"] = [
    icn["TP.SEARCH"],
    !STD2525 && !numberSIDC
      ? {
          type: "text",
          stroke: false,
          textanchor: "end",
          x: 75,
          y: 115,
          fontsize: 40,
          text: "DIP"
        }
      : [
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 60,
            y: 115,
            fontsize: 45,
            text: "D"
          },
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 140,
            y: 115,
            fontsize: 45,
            text: "P"
          }
        ]
  ];
  icn["TP.SEARCH CENTER"] = {
    type: "path",
    stroke: false,
    d: "m 100,100 -50,10 0,-20 z m 0,0 10,50 -20,0 z m 0,0 50,-10 0,20 z m 0,0 -10,-50 20,0 z"
  };
  icn["TP.REFERENCE POINT"] = [
    { type: "path", fill: false, d: "M 160,160 40,160 40,40 160,40 Z" },
    { type: "circle", cx: 100, cy: 100, r: 15 }
  ];
  icn["TP.NAVIGATIONAL REFERENCE"] = !numberSIDC && STD2525
    ? {
        type: "path",
        fill: false,
        d: "M 160,160 40,160 40,40 160,40 Z M 160,160 40,40 M 40,160 160,40"
      }
    : { type: "path", fill: false, d: "M 160,160 40,40 M 40,160 160,40" };
  icn["TP.SPECIAL POINT"] = [
    icn["TP.NAVIGATIONAL REFERENCE"],
    { type: "circle", cx: 100, cy: 100, r: 15 }
  ];
  icn["TP.DLRP"] = [
    icn["TP.SPECIAL POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 150,
      fontsize: 40,
      text: "D"
    }
  ];
  icn["TP.POINT OF INTENDED MOVEMENT"] = [
    icn["TP.REFERENCE POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 150,
      fontsize: 40,
      text: "P"
    }
  ];
  icn["TP.MARSHALL POINT"] = [
    icn["TP.REFERENCE POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 150,
      fontsize: 40,
      text: "M"
    }
  ];
  icn["TP.REFERENCE POINT WAYPOINT"] = [
    icn["TP.REFERENCE POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 150,
      fontsize: 40,
      text: "W"
    }
  ];
  icn["TP.CORRIDOR TAB"] = [
    icn["TP.REFERENCE POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 150,
      fontsize: 40,
      text: "C"
    }
  ];
  icn["TP.POINT OF INTEREST"] = [
    {
      type: "path",
      d: "M 129.021,41.957 C 121.48,49.9458 110.986,54.4816 100,54.5 89.0432,54.4928 78.569,49.9914 71.0234,42.0469 L 100,100 Z"
    },
    { type: "circle", fill: false, cx: 100, cy: 15, r: 40 }
  ];
  icn["TP.AIM POINT"] = [
    { type: "circle", cx: 100, cy: 100, r: 15 },
    { type: "circle", cx: 100, cy: 100, r: 35, fill: false },
    { type: "circle", cx: 100, cy: 100, r: 45, fill: false }
  ];
  icn["TP.DROP POINT"] = {
    type: "path",
    fill: false,
    d: "m 130,100 0,-40 m -60,40 0,-40 m 60,40 0,0 c 0,8.284 -6.716,15 -15,15 -8.284,0 -15,-6.716 -15,-15 m 0,0 0,0 c 0,8.284 -6.7157,15 -15,15 -8.2843,0 -15,-6.716 -15,-15 m 30,-40 0,40"
  };
  icn["TP.ENTRY POINT"] = {
    type: "path",
    fill: false,
    d: "m 100,100 0,-50 m -35,15 35,35 35,-35 m -85,35 100,0"
  };
  icn["TP.GROUND ZERO"] = {
    type: "path",
    stroke: false,
    d: "M 100 28 C 100 28 65.4398 29.8261 61.6543 55 C 60.2826 64.1213 75.0115 70.4884 82.2363 71.6543 C 89.4611 72.8201 91.7277 55.3462 98.5098 56.0371 L 93 90 C 93 90 70 90 67 97 C 65.0304 101.596 100 100 100 100 C 100 100 134.97 101.596 133 97 C 130 90 107 90 107 90 L 101.49 56.0371 C 108.272 55.3462 110.539 72.8201 117.764 71.6543 C 124.988 70.4884 139.718 64.1213 138.346 55 C 134.56 29.8261 100 28 100 28 z"
  };
  icn["TP.MSL DETECT POINT"] = {
    type: "path",
    d: "m 95,100 0,-55 -10,0 15,-15 15,15 -10,0 0,55 m -55,0 100,0"
  };
  icn["TP.IMPACT POINT"] = {
    type: "path",
    d: "m 50,100 40,-10 10,-40 10,40 40,10 -40,10 -10,40 -10,-40 -40,-10"
  };
  icn["TP.PREDICTED IMPACT POINT"] = {
    type: "path",
    fill: false,
    strokedasharray: "12,5",
    d: "m 50,100 40,-10 10,-40 10,40 40,10 -40,10 -10,40 -10,-40 -40,-10"
  };
  icn["TP.FORMATION"] = {
    type: "path",
    fill: false,
    d: "m 100,50 0,100 m -50,-50 100,0"
  };
  icn["TP.HARBOR"] = {
    type: "path",
    fill: false,
    d: "M 80,140 50,60 150,60 120,140"
  };
  icn["TP.HARBOR POINT Q"] = [
    icn["TP.HARBOR"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "Q"
    }
  ];
  icn["TP.HARBOR POINT A"] = [
    icn["TP.HARBOR"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "A"
    }
  ];
  icn["TP.HARBOR POINT Y"] = [
    icn["TP.HARBOR"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "Y"
    }
  ];
  icn["TP.HARBOR POINT X"] = [
    icn["TP.HARBOR"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "X"
    }
  ];
  icn["TP.ROUTE"] = {
    type: "path",
    fill: false,
    d: "m 138.484,76.82 c 0,-7.4823 6.066,-13.5478 13.548,-13.548 7.483,-3e-4 13.549,6.0653 13.549,13.548 m -27.097,0 0,0 c 0,6.9484 -5.634,12.5807 -12.582,12.58 -6.948,-4e-4 -12.58,-5.6324 -12.58,-12.58 m -27.097,0 c 2e-4,-7.4823 6.0657,-13.5478 13.548,-13.548 7.483,-3e-4 13.549,6.0653 13.549,13.548 m -79.3554,0 c 2e-4,-7.4824 6.066,-13.548 13.5484,-13.548 7.4824,0 13.5482,6.0656 13.5484,13.548 m 25.1616,0 0,0 C 86.2246,83.7681 80.5918,89.4003 73.6437,89.4 66.696,89.3998 61.0638,83.7677 61.0634,76.82 m 77.4206,47.328 c 0,-7.482 6.066,-13.548 13.548,-13.548 7.483,0 13.549,6.065 13.549,13.548 m -27.097,0 0,0 c 0,6.948 -5.634,12.581 -12.582,12.58 -6.948,0 -12.58,-5.632 -12.58,-12.58 m -27.097,0 c 2e-4,-7.482 6.0657,-13.548 13.548,-13.548 7.483,0 13.549,6.065 13.549,13.548 m -79.3554,0 c 2e-4,-7.482 6.066,-13.548 13.5484,-13.548 7.4824,0 13.5482,6.066 13.5484,13.548 m 25.1616,0 0,0 c -4e-4,6.948 -5.6332,12.58 -12.5813,12.58 -6.9477,0 -12.5799,-5.632 -12.5803,-12.58 m -27.0968,-23.664 132.5184,0"
  };
  icn["TP.ROUTE RENDEZVOUS"] = [
    icn["TP.ROUTE"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 170,
      fontsize: 45,
      text: "R"
    }
  ];
  icn["TP.ROUTE DIVERSIONS"] = [
    icn["TP.ROUTE"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 170,
      fontsize: 45,
      text: "D"
    }
  ];
  icn["TP.ROUTE WAYPOINT"] = [
    icn["TP.ROUTE"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 170,
      fontsize: 45,
      text: "W"
    }
  ];
  icn["TP.ROUTE PIM"] = [
    icn["TP.ROUTE"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 170,
      fontsize: 45,
      text: "M"
    }
  ];
  icn["TP.ROUTE POINT R"] = [
    icn["TP.ROUTE"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 170,
      fontsize: 45,
      text: "P"
    }
  ];
  icn["TP.AIR CONTROL"] = {
    type: "path",
    fill: false,
    d: "m 140,165 0,-130 m -80,0 0,130"
  };
  icn["TP.AIR CONTROL POINT"] = [
    icn["TP.AIR CONTROL"],
    { type: "circle", cx: 100, cy: 100, r: 15 }
  ];
  icn["TP.COMBAT AIR PATROL (CAP)"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "C"
    }
  ];
  icn["TP.AIRBORNE EARLY WARNING (AEW)"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "W"
    }
  ];
  icn["TP.TANKING"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: !numberSIDC && !STD2525 ? 155 : 115,
      fontsize: 45,
      text: "K"
    },
    !numberSIDC && !STD2525 ? { type: "circle", cx: 100, cy: 100, r: 15 } : []
  ];
  icn["TP.FIXED WING"] = [
    icn["TP.AIR CONTROL"],
    !numberSIDC && !STD2525
      ? [
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 100,
            y: 155,
            fontsize: 45,
            text: "F"
          },
          { type: "circle", cx: 100, cy: 100, r: 15 }
        ]
      : [
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 100,
            y: 75,
            fontsize: 32,
            text: "ASW"
          },
          {
            type: "path",
            d: "m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z",
            stroke: false
          }
        ]
  ];
  icn["TP.ROTARY WING"] = [
    icn["TP.AIR CONTROL"],
    !numberSIDC && !STD2525
      ? [
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 100,
            y: 155,
            fontsize: 45,
            text: "H"
          },
          { type: "circle", cx: 100, cy: 100, r: 15 }
        ]
      : [
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 100,
            y: 75,
            fontsize: 32,
            text: "ASW"
          },
          { type: "path", d: "m 65,80 0,40 70,-40 0,40 -70,-40", stroke: false }
        ]
  ];
  icn["TP.SUCAP - FIXED WING"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 75,
      fontsize: 32,
      text: "SUW"
    },
    {
      type: "path",
      d: "m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z",
      stroke: false
    }
  ];
  icn["TP.SUCAP - ROTARY WING"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 75,
      fontsize: 32,
      text: "ASW"
    },
    { type: "path", d: "m 65,80 0,40 70,-40 0,40 -70,-40", stroke: false }
  ];
  icn["TP.MIW - FIXED WING"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 75,
      fontsize: 32,
      text: "MIW"
    },
    {
      type: "path",
      d: "m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z",
      stroke: false
    }
  ];
  icn["TP.MIW - ROTARY WING"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 75,
      fontsize: 32,
      text: "MIW"
    },
    { type: "path", d: "m 65,80 0,40 70,-40 0,40 -70,-40", stroke: false }
  ];
  icn["TP.STRIKE IP"] = [
    icn["TP.AIR CONTROL"],
    !numberSIDC && !STD2525
      ? [
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 100,
            y: 155,
            fontsize: 45,
            text: "S"
          },
          { type: "circle", cx: 100, cy: 100, r: 15 }
        ]
      : {
          type: "text",
          stroke: false,
          textanchor: "middle",
          x: 100,
          y: 115,
          fontsize: 45,
          text: "S"
        }
  ];
  icn["TP.CORRIDOR TAB POINT"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 155,
      fontsize: 45,
      text: "C"
    },
    { type: "circle", cx: 100, cy: 100, r: 15 }
  ];
  icn["TP.TACAN"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: !numberSIDC && !STD2525 ? 155 : 115,
      fontsize: 45,
      text: "T"
    },
    !numberSIDC && !STD2525 ? { type: "circle", cx: 100, cy: 100, r: 15 } : []
  ];
  icn["TP.TOMCAT"] = [
    icn["TP.AIR CONTROL"],
    !numberSIDC && !STD2525
      ? [
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 100,
            y: 155,
            fontsize: 45,
            text: "O"
          },
          { type: "circle", cx: 100, cy: 100, r: 15 }
        ]
      : {
          type: "text",
          stroke: false,
          textanchor: "middle",
          x: 100,
          y: 115,
          fontsize: 45,
          text: "TC"
        }
  ];
  icn["TP.RESCUE"] = [
    icn["TP.AIR CONTROL"],
    !numberSIDC && !STD2525
      ? [
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 100,
            y: 155,
            fontsize: 45,
            text: "R"
          },
          { type: "circle", cx: 100, cy: 100, r: 15 }
        ]
      : {
          type: "text",
          stroke: false,
          textanchor: "middle",
          x: 100,
          y: 115,
          fontsize: 45,
          text: "RC"
        }
  ];
  icn["TP.REPLENISH"] = [
    icn["TP.AIR CONTROL"],
    !numberSIDC && !STD2525
      ? [
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 100,
            y: 155,
            fontsize: 45,
            text: "F"
          },
          { type: "circle", cx: 100, cy: 100, r: 15 }
        ]
      : {
          type: "text",
          stroke: false,
          textanchor: "middle",
          x: 100,
          y: 115,
          fontsize: 45,
          text: "RP"
        }
  ];
  icn["TP.MARSHALL"] = [
    icn["TP.AIR CONTROL"],
    !numberSIDC && !STD2525
      ? [
          {
            type: "text",
            stroke: false,
            textanchor: "middle",
            x: 100,
            y: 155,
            fontsize: 45,
            text: "M"
          },
          { type: "circle", cx: 100, cy: 100, r: 15 }
        ]
      : {
          type: "text",
          stroke: false,
          textanchor: "middle",
          x: 100,
          y: 115,
          fontsize: 45,
          text: "M"
        }
  ];
  icn["TP.UNMANNED AERIAL SYSTEM"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "path",
      stroke: false,
      d: "m 70,85 30,15 30,-15 0,15 -30,15 -30,-15 z"
    }
  ];
  icn["TP.VTUA"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "path",
      stroke: false,
      d: "m 70,95 30,15 30,-15 0,30 -30,-15 -30,15 z m 0,-25 30,15 30,-15 0,15 -30,15 -30,-15 z"
    }
  ];
  icn["TP.ORBIT"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "O"
    }
  ];
  icn["TP.ORBIT - FIGURE EIGHT"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "O"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 150,
      fontsize: 40,
      text: "F8"
    }
  ];
  icn["TP.ORBIT - RACE TRACK"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "O"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 150,
      fontsize: 40,
      text: "RT"
    }
  ];
  icn["TP.ORBIT - RANDOM, CLOSED"] = [
    icn["TP.AIR CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "O"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 150,
      fontsize: 40,
      text: "RC"
    }
  ];
  icn["TP.ACTION POINT"] = {
    type: "path",
    fill: false,
    d: "m 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z"
  };
  icn["TP.ACTION CHECK POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "CKP"
    }
  ];
  icn["TP.CONTACT POINT"] = {
    type: "path",
    fill: false,
    d: "m 100,100 0,-35 -45,0 0,-75 90,0 0,75 -45,0"
  };
  icn["TP.COORDINATION POINT"] = [
    { type: "path", fill: false, d: "m 65,135 70,-70 m -70,0 70,70" },
    { type: "circle", fill: false, cx: 100, cy: 100, r: 50 }
  ];
  icn["TP.DECISION POINT"] = {
    type: "path",
    fill: false,
    d: "M 99.9998,25.5886 117.061,76.5192 170.77,77.0054 127.604,108.968 143.738,160.2 100,129.024 56.2624,160.2 72.3967,108.968 29.2306,77.0059 82.9403,76.5192 Z"
  };
  icn["TP.ACTION LINKUP POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "LU"
    }
  ];
  icn["TP.ACTION PASSAGE POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "PP"
    }
  ];
  icn["TP.ACTION RALLY POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "RLY"
    }
  ];
  icn["TP.ACTION RELEASE POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "RP"
    }
  ];
  icn["TP.ACTION START POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "SP"
    }
  ];
  icn["TP.ACTION AMNESTY POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "AMN"
    }
  ];
  icn["TP.WAYPOINT"] = {
    type: "path",
    fill: false,
    strokewidth: 8,
    d: "m 65,135 70,-70 m -70,0 70,70"
  };
  icn["TP.COMBATANT STATION"] = [
    icn["TP.WAYPOINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "end",
      x: 75,
      y: 115,
      fontsize: 40,
      text: "CBT"
    }
  ];
  icn["TP.PICKET STATION"] = [
    icn["TP.WAYPOINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "end",
      x: 75,
      y: 115,
      fontsize: 40,
      text: "PKT"
    }
  ];
  icn["TP.ASW SHIP STATION"] = [
    icn["TP.WAYPOINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "end",
      x: 75,
      y: 115,
      fontsize: 40,
      text: "ASW"
    }
  ];
  icn["TP.REPLENISHMENT AT SEA (RAS) STATION"] = [
    icn["TP.WAYPOINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "end",
      x: 75,
      y: 115,
      fontsize: 40,
      text: "RAS"
    }
  ];
  icn["TP.RESCUE STATION"] = [
    icn["TP.WAYPOINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "end",
      x: 75,
      y: 115,
      fontsize: 40,
      text: "RSC"
    }
  ];
  icn["TP.SUBMARINE STATION"] = [
    icn["TP.WAYPOINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "end",
      x: 75,
      y: 115,
      fontsize: 40,
      text: "SUB"
    }
  ];
  icn["TP.ASW SUBMARINE STATION"] = [
    icn["TP.WAYPOINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "end",
      x: 75,
      y: 115,
      fontsize: 40,
      text: "ASW/SUB"
    }
  ];
  icn["TP.SEA SURFACE CONTROL"] = {
    type: "path",
    fill: false,
    d: "m 30,60 140,0 m -140,80 140,0"
  };
  icn["TP.SEA SURFACE CONTROL STATION"] = [
    icn["TP.SEA SURFACE CONTROL"],
    { type: "circle", cx: 100, cy: 100, r: 15 }
  ];
  icn["TP.(USV) CONTROL STATION"] = [
    icn["TP.SEA SURFACE CONTROL"],
    {
      type: "path",
      stroke: false,
      d: "m 100,115 45,-20 0,-15 -45,20 -45,-20 0,15 z"
    }
  ];
  icn["TP.(USV)"] = [
    icn["TP.SEA SURFACE CONTROL"],
    {
      type: "path",
      stroke: false,
      d: "m 55,100 45,20 45,-20 0,15 -45,20 -45,-20 z"
    }
  ];
  icn["TP.(RMV) USV CONTROL STATION"] = [
    icn["TP.(USV)"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 95,
      fontsize: 40,
      text: "RMV"
    }
  ];
  icn["TP.USV - ASW CONTROL STATION"] = [
    icn["TP.(USV)"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 95,
      fontsize: 40,
      text: "ASW"
    }
  ];
  icn["TP.USV - SUW CONTROL STATION"] = [
    icn["TP.(USV)"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 95,
      fontsize: 40,
      text: "SUW"
    }
  ];
  icn["TP.USV - MIW CONTROL STATION"] = [
    icn["TP.(USV)"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 95,
      fontsize: 40,
      text: "MIW"
    }
  ];
  icn["TP.ASW CONTROL STATION"] = [
    icn["TP.SEA SURFACE CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "ASW"
    }
  ];
  icn["TP.SUW CONTROL STATION"] = [
    icn["TP.SEA SURFACE CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "SUW"
    }
  ];
  icn["TP.MIW CONTROL STATION"] = [
    icn["TP.SEA SURFACE CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "MIW"
    }
  ];
  icn["TP.PICKET CONTROL STATION"] = [
    icn["TP.SEA SURFACE CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "PK"
    }
  ];
  icn["TP.RENDEZVOUS CONTROL POINT"] = [
    icn["TP.SEA SURFACE CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "RZ"
    }
  ];
  icn["TP.RESCUE CONTROL POINT"] = [
    icn["TP.SEA SURFACE CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "RS"
    }
  ];
  icn["TP.REPLENISHMENT CONTROL POINT"] = [
    icn["TP.SEA SURFACE CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "RP"
    }
  ];
  icn["TP.NONCOMBATANT CONTROL STATION"] = [
    icn["TP.SEA SURFACE CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      text: "NC"
    }
  ];
  icn["TP.SUB SURFACE CONTROL"] = [
    { type: "path", fill: false, d: "m 30,140 140,0" },
    { type: "path", fill: false, strokedasharray: "12,4", d: "m 30,60 140,0" }
  ];
  icn["TP.SUB SURFACE CONTROL STATION"] = [
    icn["TP.SUB SURFACE CONTROL"],
    { type: "circle", cx: 100, cy: 100, r: 15 }
  ];
  icn["TP.(UUV) CONTROL STATION"] = [
    icn["TP.SUB SURFACE CONTROL"],
    {
      type: "path",
      stroke: false,
      d: "m 100,115 45,-20 0,-15 -45,20 -45,-20 0,15 z"
    }
  ];
  icn["TP.(UUV)"] = [
    icn["TP.SUB SURFACE CONTROL"],
    {
      type: "path",
      stroke: false,
      d: "m 55,100 45,20 45,-20 0,15 -45,20 -45,-20 z"
    }
  ];
  icn["TP.UUV - ASW CONTROL STATION"] = [
    icn["TP.(UUV)"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 95,
      fontsize: 40,
      text: "ASW"
    }
  ];
  icn["TP.UUV - SUW CONTROL STATION"] = [
    icn["TP.(UUV)"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 95,
      fontsize: 40,
      text: "SUW"
    }
  ];
  icn["TP.UUV - MIW CONTROL STATION"] = [
    icn["TP.(UUV)"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 95,
      fontsize: 40,
      text: "MIW"
    }
  ];
  icn["TP.SUBMARINE CONTROL STATION"] = [
    icn["TP.SUB SURFACE CONTROL"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 130,
      fontsize: 35,
      text: "SS"
    },
    { type: "path", d: "m 75,95 0,-20 50,0 0,20 z m 25,-30 0,40" }
  ];
  icn["TP.ASW SUBMARINE CONTROL STATION"] = [
    icn["TP.SUB SURFACE CONTROL"],
    {
      type: "path",
      d: "m 68.75,105 -12.5,12.5 12.5,12.5 62.5,0 12.5,-12.5 -12.5,-12.5 z M 75,95 l 0,-20 50,0 0,20 z m 25,-30 0,40"
    }
  ];
  icn["TP.AIR CONTROL POINT (ACP)"] = [
    { type: "circle", fill: false, cx: 100, cy: 100, r: 50 },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 90,
      fontsize: 30,
      text: "ACP"
    }
  ];
  icn["TP.COMMUNICATIONS CHECKPOINT"] = [
    { type: "circle", fill: false, cx: 100, cy: 100, r: 50 },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 90,
      fontsize: 30,
      text: "CCP"
    }
  ];
  icn["TP.PULL-UP POINT"] = [
    { type: "circle", fill: false, cx: 100, cy: 100, r: 50 },
    {
      type: "text",
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 115,
      fontsize: 40,
      text: "PUP"
    },
    { type: "path", fill: false, d: "m 65,80 0,40 70,-40 0,40 z" }
  ];
  icn["TP.DOWNED AIRCREW PICKUP POINT"] = [
    icn["TP.ACTION POINT"],
    { type: "circle", cx: 100, cy: -35, r: 12 },
    {
      type: "path",
      fill: false,
      d: "m 75,35 50,0 m -25,-45 0,45 m -30,-75 30,30 30,-30"
    }
  ];
  icn["TP.DUMMY MINEFIELD"] = [
    {
      type: "path",
      fill: false,
      d: "m 75,100 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z m 70,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -35,0 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z m -70,-40 0,80 120,0 0,-80 z"
    },
    {
      type: "path",
      fill: false,
      strokedasharray: "15,10",
      d: "M 160,60 100,-5 M 40,60 100,-5"
    }
  ];
  icn["TP.TARGET REFERENCE"] = {
    type: "path",
    fill: false,
    d: "m 50,100 100,0 m -50,-50 0,100"
  };
  icn["TP.OBSERVATION POST/OUTPOST"] = {
    type: "path",
    fill: false,
    d: "m 100,45 47.6,82.5 -95.2,0 z"
  };
  icn["TP.COMBAT OUTPOST"] = {
    type: "path",
    fill: false,
    d: "m 140,140 0,-12.5 m -16,12.5 0,-12.5 m -16,12.5 0,-12.5 m -48.0001,12.5 3e-4,-12.5 m 15.9993,12.5 4e-4,-12.501 m 16,12.501 3e-4,-12.5 m -46.43,-12.493 10.8256,6.25 m -2.8256,-20.107 10.8256,6.251 m -2.8257,-20.1071 10.8257,6.2506 m 13.1743,-47.8198 10.8257,6.2506 m -18.8253,7.6056 10.8256,6.2506 m -18.826,7.606 10.8257,6.2506 M 114.43,45.725 l -10.826,6.25 m 18.826,7.6064 -10.826,6.25 m 18.826,7.6064 -10.826,6.25 m 34.826,35.3192 -10.826,6.25 m 2.826,-20.106 -10.826,6.25 m 2.826,-20.1068 -10.826,6.25 M 99.9998,45 l 47.6312,82.5 -95.2623,0 z"
  };
  icn["TP.OBSERVATION POST/RECONNAISSANCE"] = {
    type: "path",
    fill: false,
    d: "M 52.3687,127.5 123.816,86.2499 M 99.9998,45 l 47.6312,82.5 -95.2623,0 z"
  };
  icn["TP.FORWARD OBSERVER POSITION"] = [
    icn["TP.OBSERVATION POST/RECONNAISSANCE"],
    {
      type: "path",
      d: "m 115,100 c 0,8.284 -6.716,15 -15,15 -8.2843,0 -15,-6.716 -15,-15 0,-8.2843 6.7157,-15 15,-15 8.284,0 15,6.7157 15,15 z"
    }
  ];
  icn["TP.SENSOR OUTPOST"] = {
    type: "path",
    fill: false,
    d: "m 61.1738,112.25 23.6601,0 m 30.3321,0 23.66,0 M 80,105 l 10,15 20,0 10,-15 z m 19.9998,-60 47.6312,82.5 -95.2623,0 z"
  };
  icn["TP.CBRN OBSERVATION POST"] = [
    {
      type: "path",
      fill: false,
      d: "m 99.9998,45 47.6312,82.5 -95.2623,0 z M 88,119 c 2.1824,-13.288 7.7157,-24.22 22,-29 m 1.829,29 C 109.664,105.712 104.173,94.78 90,90 M 52.3687,127.5 123.816,86.2499"
    },
    {
      type: "path",
      d: "m 91,92 c 0,2.7614 -2.2386,5 -5,5 -2.7614,0 -5,-2.2386 -5,-5 0,-2.7614 2.2386,-5 5,-5 2.7614,0 5,2.2386 5,5 z m 28.011,0 c 0,2.7678 -2.243,5.0117 -5.011,5.012 -2.768,-3e-4 -5.011,-2.2442 -5.011,-5.012 0,-2.7676 2.243,-5.0112 5.011,-5.0115 2.768,3e-4 5.011,2.2439 5.011,5.0115 z"
    }
  ];
  icn["TP.POINT OF DEPARTURE"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "PD"
    }
  ];
  icn["TP.FIXED AND PREFABRICATED"] = {
    type: "path",
    d: "m 60,100 40,-65 40,65 z"
  };
  icn["TP.TETRAHEDRONS"] = {
    type: "path",
    fill: false,
    d: "m 60,100 40,-65 40,65"
  };
  icn["TP.TETRAHEDRONS MOVABLE"] = {
    type: "path",
    fill: false,
    d: "m 60,100 40,-65 40,65 z"
  };
  icn["TP.BOOBY TRAP"] = {
    type: "path",
    fill: false,
    d: "M 77.2413,87.9311 100,50 122.781,87.9687 M 130,100 c 0,10.24 -13.431,18.541 -30,18.541 -16.5685,0 -30,-8.301 -30,-18.541 0,-10.2399 13.4315,-18.541 30,-18.541 16.569,0 30,8.3011 30,18.541 z"
  };
  icn["TP.UNSPECIFIED MINE"] = {
    type: "path",
    fill: false,
    d: "m 129,100 c 0,16.016 -12.984,29 -29,29 -16.0163,0 -29,-12.984 -29,-29 0,-16.0163 12.9837,-29 29,-29 16.016,0 29,12.9837 29,29 z"
  };
  icn["TP.ANTITANK MINE (AT)"] = {
    type: "path",
    d: "m 129,100 c 0,16.016 -12.984,29 -29,29 -16.0163,0 -29,-12.984 -29,-29 0,-16.0163 12.9837,-29 29,-29 16.016,0 29,12.9837 29,29 z"
  };
  icn["TP.(AT) ANTIHANDLING DEVICE"] = [
    icn["TP.ANTITANK MINE (AT)"],
    { type: "path", fill: false, d: "m 100,130 0,65 15,-15" }
  ];
  icn["TP.(AT) DIRECTIONAL"] = [
    icn["TP.ANTITANK MINE (AT)"],
    { type: "path", fill: false, strokedasharray: "5,5", d: "m 100,70 0,-60" },
    { type: "path", fill: false, d: "m 90,20 10,-10 10,10" }
  ];
  icn["TP.ANTIPERSONNEL (AP) MINES"] = [
    icn["TP.ANTITANK MINE (AT)"],
    { type: "path", fill: false, d: "m 50,50 29.5,29.5 m 41,0 L 150,50" }
  ];
  icn["TP.WIDE AREA MINES"] = [
    icn["TP.ANTITANK MINE (AT)"],
    {
      type: "path",
      fill: false,
      d: "m 50,110 25,40 12,-24 M 113,126 125,150 150,110"
    }
  ];
  icn["TP.PLANNED MINEFIELD"] = [
    {
      type: "path",
      fill: false,
      strokedasharray: "15,15",
      d: "m 40,65 0,70 120,0 0,-70 z"
    },
    {
      type: "path",
      fill: false,
      d: "m 75,100 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z m 70,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -35,0 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z"
    }
  ];
  icn["TP.MINEFIELDS STATIC"] = {
    type: "path",
    fill: false,
    d: "m 40,65 0,70 120,0 0,-70 z m 70,35 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z m 35,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -70,0 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z"
  };
  //This is to solve anticipated minefields... Don't we just love special cases...
  if (properties.notpresent)
    icn["TP.MINEFIELDS STATIC"] = icn["TP.PLANNED MINEFIELD"];
  icn["TP.ANTITANK (AT) MINEFIELD"] = [
    { type: "path", fill: false, d: "m 40,65 0,70 120,0 0,-70 z" },
    {
      type: "path",
      d: "m 75,100 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z m 70,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -35,0 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z"
    }
  ];
  icn["TP.SCATTERABLE MINES"] = [
    icn["TP.MINEFIELDS STATIC"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 60,
      fontsize: 35,
      text: "S"
    }
  ];
  icn["TP.ANTIPERSONNEL (AP) MINEFIELD"] = [
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 60,
      fontsize: 35,
      text: "+S"
    },
    { type: "path", fill: false, d: "m 40,65 0,70 120,0 0,-70 z" },
    {
      type: "path",
      d: "M 72.0703,92.9297 80,82.3622 m -30,0 7.9297,10.5675 m 49.1403,0 7.93,-10.5675 m -30,0 7.9297,10.5675 m 49.1403,0 7.93,-10.5675 m -30,0 7.93,10.5675 M 110,100 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z m 35,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -70,0 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z"
    }
  ];
  icn["TP.SCATTERABLE MINEFIELD WITH SELF-DESTRUCT"] = [
    icn["TP.ANTITANK (AT) MINEFIELD"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 60,
      fontsize: 35,
      text: "S"
    }
  ];
  icn["TP.VOLCANO MINEFIELD"] = [
    icn["TP.ANTITANK (AT) MINEFIELD"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 60,
      fontsize: 35,
      text: "V"
    }
  ];
  icn["TP.TOWER LOW"] = [
    { type: "circle", stroke: false, cx: 100, cy: 100, r: 7 },
    { type: "path", fill: false, strokewidth: 8, d: "m 75,105 25,-65 25,65" }
  ];
  icn["TP.TOWER HIGH"] = [
    { type: "circle", stroke: false, cx: 100, cy: 100, r: 7 },
    {
      type: "path",
      fill: false,
      strokewidth: 8,
      d: "m 100,40 c 2.358,31.6754 7.162,59.2531 25,64.999 M 100,40 c -2.358,31.6754 -7.1624,59.2531 -25,65"
    }
  ];
  icn["TP.ENGINEER REGULATING POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "ERP"
    }
  ];
  icn["TP.EARTHWORK/FORTIFICATION"] = {
    type: "path",
    d: "m 65,65 0,70 70,0 0,-70 -70,0z"
  };
  icn["TP.FORT"] = {
    type: "path",
    fill: false,
    d: "m 135,65 15,-15 m -15,85 15,15 M 65,135 50,150 m 15,-85 0,70 70,0 0,-70 -70,0 -15,-15"
  };
  icn["TP.SURFACE SHELTER"] = {
    type: "path",
    d: "m 135,135 15,0 m -100,0 15,0 m 0,-70 0,70 70,0 0,-70 -70,0"
  };
  icn["TP.UNDERGROUND SHELTER"] = {
    type: "path",
    d: "m 135,65 15,0 m -100,0 15,0 m 0,70 0,-70 70,0 0,70 -70,0"
  };
  icn["TP.NUCLEAR DETONATIONS GROUND ZERO"] = [
    {
      type: "path",
      fill: !monoColor ? "rgb(255,255,0)" : false,
      d: "m 85,25 0,75 30,0 0,-75 m -50,0 c 0,-50 70,-50 70,0 z"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 75,
      fontsize: 35,
      text: "N"
    }
  ];
  icn["TP.NUCLEAR DETONATIONS GROUND ZERO PLANNED"] = [
    {
      type: "path",
      strokedasharray: "5,5",
      fill: !monoColor ? "rgb(255,255,0)" : false,
      d: "m 85,25 0,75 30,0 0,-75 m -50,0 c 0,-50 70,-50 70,0 z"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 75,
      fontsize: 35,
      text: "N"
    }
  ];
  icn["TP.NUCLEAR FALLOUT PRODUCING"] = [
    {
      type: "path",
      fill: false,
      d: "m 120,85 -15,15 m -25,0 40,-35 M 80,80 120,40 M 80,55 115,25 M 80,40 95,25 m -40,0 c 0,-60 90,-60 90,0 z m 25,0 0,75 40,0 0,-75"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 75,
      fontsize: 35,
      text: "N"
    }
  ];
  icn["TP.RELEASE EVENTS BIOLOGICAL"] = [
    {
      type: "path",
      fill: !monoColor ? "rgb(255,255,0)" : false,
      d: "m 85,-15 0,60 -25,55 80,0 -25,-55 0,-60 z"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 85,
      fontsize: 35,
      text: "B"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 60,
      fontsize: 35,
      text: "BIO"
    }
  ];
  icn["TP.RELEASE EVENTS CHEMICAL"] = [
    {
      type: "path",
      fill: !monoColor ? "rgb(255,255,0)" : false,
      d: "m 85,-15 0,59.0625 C 75.7313,49.4137 70.0154,59.2975 70,70 c 0,16.5685 13.4315,30 30,30 16.569,0 30,-13.4315 30,-30 -0.01,-10.7067 -5.728,-20.5959 -15,-25.9492 L 115,-15 Z"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 80,
      fontsize: 35,
      text: "C"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 60,
      fontsize: 35,
      text: "CML"
    }
  ];
  icn["TP.DECON SITE/POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "DCN"
    }
  ];
  icn["TP.ALTERNATE DECON SITE/POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "DCN"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      text: "ALT"
    }
  ];
  icn["TP.DECON SITE/POINT (TROOPS)"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "DCN"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      text: "T"
    }
  ];
  icn["TP.DECON SITE/POINT (EQUIPMENT)"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "DCN"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      text: "E"
    }
  ];
  icn["TP.DECON SITE/POINT (EQUIPMENT AND TROOPS)"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "DCN"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      text: "E/T"
    }
  ];
  icn["TP.DECON SITE/POINT (OPERATIONAL DECONTAMINATION)"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "DCN"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      text: "O"
    }
  ];
  icn["TP.DECON SITE/POINT (THOROUGH DECONTAMINATION)"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "DCN"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      text: "TH"
    }
  ];
  icn["TP.DECON POINT (MAIN) EQUIPMENT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "DCN"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      text: "(M)E"
    }
  ];
  icn["TP.DECON POINT (FORWARD) TROOPS"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "DCN"
    },
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      text: "(F)T"
    }
  ];
  icn["TP.POINT/SINGLE TARGET"] = {
    type: "path",
    fill: false,
    d: "m 50,100 100,0 m -50,-50 0,100"
  };
  icn["TP.NUCLEAR TARGET"] = {
    type: "path",
    fill: false,
    d: "m 90,100 -40,0 m 50,10 0,40 m 10,-50 40,0 m -50,-10 0,-40 m 2.5,50 c 0,1.381 -1.119,2.5 -2.5,2.5 -1.3807,0 -2.5,-1.119 -2.5,-2.5 0,-1.3807 1.1193,-2.5 2.5,-2.5 1.381,0 2.5,1.1193 2.5,2.5 z"
  };
  icn["TP.FIRE SUPPORT STATION"] = {
    type: "path",
    fill: false,
    d: "M 50,50 150,150 M 50,150 150,50"
  };
  icn["TP.SURVEY CONTROL POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "SCP"
    }
  ];
  icn["TP.FIRING POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "FP"
    }
  ];
  icn["TP.RELOAD POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "RLP"
    }
  ];
  icn["TP.HIDE POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "HP"
    }
  ];
  icn["TP.LAUNCH POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "LP"
    }
  ];
  icn["TP.AMBULANCE EXCHANGE POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "AXP"
    }
  ];
  icn["TP.CANNIBALIZATION POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "CAN"
    }
  ];
  icn["TP.CASUALTY COLLECTION POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "CCP"
    }
  ];
  icn["TP.CIVILIAN COLLECTION POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "CIV"
    }
  ];
  icn["TP.DETAINEE COLLECTION POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "DET"
    }
  ];
  icn["TP.EPW COLLECTION POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "EPW"
    }
  ];
  icn["TP.LOGISTICS RELEASE POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "LRP"
    }
  ];
  icn["TP.MAINTENANCE COLLECTION POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "MCP"
    }
  ];
  icn["TP.REARM, REFUEL AND RESUPPLY POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "R3P"
    }
  ];
  icn["TP.REFUEL ON THE MOVE POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "ROM"
    }
  ];
  icn["TP.TRAFFIC CONTROL POST"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "TCP"
    }
  ];
  icn["TP.TRAILER TRANSFER POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "TTP"
    }
  ];
  icn["TP.UNIT MAINTENANCE COLLECTION POINT"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 25,
      text: "UMCP"
    }
  ];
  icn["TP.SUPPLY POINT"] = {
    type: "path",
    fill: false,
    d: "m 60,30 80,0 m -80,15 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z"
  };
  icn["TP.SP CLASS I"] = [
    icn["TP.SUPPLY POINT"],
    {
      type: "path",
      fill: false,
      d: "m 115,-50 c -45,5 -45,65 0,70 -20,-25 -20,-50 0,-70 z"
    }
  ];
  icn["TP.SP CLASS II"] = [
    icn["TP.SUPPLY POINT"],
    {
      type: "path",
      stroke: false,
      d: "m 101.143,3.91602 q 3.662,-0.26368 4.746,-1.08399 1.084,-0.84961 1.084,-4.33594 l 0,-26.68949 q 0,-3.3105 -1.084,-4.248 -1.084,-0.9668 -4.746,-1.1426 l 0,-1.1133 17.753,0 0,1.1133 q -3.662,0.1758 -4.746,1.1426 -1.084,0.9375 -1.084,4.248 l 0,26.68949 q 0,3.48633 1.084,4.33594 1.084,0.82031 4.746,1.08399 l 0,1.08398 -17.753,0 0,-1.08398 z m 8.877,-38.61332 0,0 z M 81.1035,3.91602 q 3.6621,-0.26368 4.7461,-1.08399 1.084,-0.84961 1.084,-4.33594 l 0,-26.68949 q 0,-3.3105 -1.084,-4.248 -1.084,-0.9668 -4.7461,-1.1426 l 0,-1.1133 17.7539,0 0,1.1133 q -3.6621,0.1758 -4.7461,1.1426 -1.084,0.9375 -1.084,4.248 l 0,26.68949 q 0,3.48633 1.084,4.33594 1.084,0.82031 4.7461,1.08399 l 0,1.08398 -17.7539,0 0,-1.08398 z m 8.877,-38.61332 0,0 z"
    }
  ];
  icn["TP.SP CLASS III"] = [
    icn["TP.SUPPLY POINT"],
    { type: "path", fill: false, d: "m 100,20 0,-30 -20,-40 40,0 -20,40" }
  ];
  icn["TP.SP CLASS IV"] = [
    icn["TP.SUPPLY POINT"],
    { type: "path", fill: false, d: "m 100,-40 0,20 m -25,10 0,-30 50,0 0,30" }
  ];
  icn["TP.SP CLASS V"] = [
    icn["TP.SUPPLY POINT"],
    {
      type: "path",
      fill: false,
      d: "m 80,15 0,-50 c 0,-20 40,-20 40,0 l 0,50 m -50,0 60,0"
    }
  ];
  icn["TP.SP CLASS VI"] = [
    icn["TP.SUPPLY POINT"],
    {
      type: "path",
      fill: false,
      d: "m 75,-20 50,0 m -25,15 15,25 m -15,-50 0,25 -20,25 m 30,-60 c 0,5.5228 -4.477,10 -10,10 -5.5228,0 -10,-4.4772 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z"
    }
  ];
  icn["TP.SP CLASS VII"] = [
    icn["TP.SUPPLY POINT"],
    { type: "path", fill: false, d: "m 85,-25 c 10,-10 20,-10 30,0" },
    {
      type: "path",
      d: "m 129.6,-20 c 0,5.3019 -4.298,9.5999 -9.6,9.5998 -5.302,10e-5 -9.6,-4.2979 -9.6,-9.5998 0,-5.3019 4.298,-9.5999 9.6,-9.5998 5.302,-1e-4 9.6,4.2979 9.6,9.5998 z m -40.4886,0 c 0,5.0321 -4.0793,9.1114 -9.1114,9.1114 -5.0321,0 -9.1114,-4.0793 -9.1114,-9.1114 0,-5.0321 4.0793,-9.1114 9.1114,-9.1114 5.0321,0 9.1114,4.0793 9.1114,9.1114 z"
    }
  ];
  icn["TP.SP CLASS VIII"] = [
    icn["TP.SUPPLY POINT"],
    { type: "path", fill: false, d: "m 60,-15 80,0 m -40,-45 0,90" }
  ];
  icn["TP.SP CLASS IX"] = [
    icn["TP.SUPPLY POINT"],
    {
      type: "path",
      fill: false,
      d: "m 121.213,-36.2132 -7.08,7.0802 M 85.8669,-0.866982 78.7868,6.2132 m 0,-42.4264 7.0801,7.0802 m 28.2661,28.266018 7.08,7.080182 M 100,-45 l 0,10 m 0,40 0,10 m -30,-30 10,0 m 40,0 10,0 m -10,0 c 0,11.04569 -8.954,20 -20,20 -11.0457,0 -20,-8.95431 -20,-20 0,-11.0457 8.9543,-20 20,-20 11.046,0 20,8.9543 20,20 z"
    }
  ];
  icn["TP.SP CLASS X"] = [
    icn["TP.SUPPLY POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -10,
      fontsize: 40,
      text: "CA"
    }
  ];
  icn["TP.AMMUNITION SUPPLY POINT (ASP)"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "ASP"
    }
  ];
  icn["TP.AMMUNITION TRANSFER POINT (ATP)"] = [
    icn["TP.ACTION POINT"],
    {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      text: "ATP"
    }
  ];
  icn["TP.DITCHED AIRCRAFT"] = {
    type: "path",
    d: "m 145,120 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 10,10 25,-30 -10,-10 10,-10 20,20 -10,35 -15,-15 -15,15 z"
  };
  icn["TP.PERSON IN WATER"] = {
    type: "path",
    d: "m 105,110 10,-10 0,-15 5,0 0,20 -10,10 z m -10,0 -10,-10 0,-15 -5,0 0,20 10,10 z m 5,-5 0,-10 -5,0 -5,-5 0,-10 5,-5 10,0 5,5 0,10 -5,5 -5,0 m -15,25 15,-15 m 45,15 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 45,15 -15,-15"
  };
  icn["TP.DISTRESSED VESSEL"] = {
    type: "path",
    d: "m 120,65 -20,20 20,-20 m -5,55 -35,-35 0,-20 45,45 z m -30,0 -15,-15 m -15,15 15,-15 m 45,15 15,-15 m 15,15 -15,-15 m -45,15 15,-15"
  };
  icn["TP.SEA MINELIKE"] = {
    type: "path",
    d: "M 75,75 55,55 m 45,-15 0,25 m 25,10 20,-20 m -80,60 0,-30 20,-20 30,0 20,20 0,30 -20,20 -30,0 z"
  };
  icn["TP.ICEBERG"] = {
    type: "path",
    d: "m 75,100 25,-30 25,30 -5,15 -5,-5 -15,20 -15,-20 -5,5 z m -15,0 80,0"
  };
  icn["TP.OIL RIG/PLATFORM"] = [
    {
      type: "path",
      d: "m 55,100 0,-50 m 75,50 0,40 m 20,-40 0,40 m -115,0 0,-40 130,0",
      fill: false
    },
    { type: "path", d: "m 55,100 0,-15 25,0 0,15 z" }
  ];
  icn["TP.BOTTOM RETURN"] = {
    type: "path",
    d: "m 50,100 15,-35 15,30 20,-55 20,55 15,-35 15,40 z"
  };
  icn["TP.INSTALLATION/MANMADE"] = {
    type: "path",
    fill: false,
    d: "m 50,100 15,-35 15,30 20,-55 20,55 15,-35 15,40 z"
  };
  icn["TP.WRECK, NON DANGEROUS"] = {
    type: "path",
    fill: false,
    d: "m 135,85 0,30 m -85,-15 100,0 m -85,-15 0,30 m 35,-40 0,50"
  };
  icn["TP.WRECK, DANGEROUS"] = [
    icn["TP.WRECK, NON DANGEROUS"],
    {
      type: "path",
      strokedasharray: "5,5",
      fill: false,
      d: "m 156.547,100 c 0,16.382 -25.162,29.662 -56.202,29.662 -31.0395,0 -56.2019,-13.28 -56.2017,-29.662 0,-16.3818 25.1624,-29.6618 56.2017,-29.6618 31.039,-1e-4 56.202,13.28 56.202,29.6618 z"
    }
  ];
  icn["TP.MARINE LIFE"] = {
    type: "path",
    stroke: false,
    d: "m 132,75 0,50 83,-37.5 0,25 L 132,75 m -32,25 25.5,-25 0,50 z"
  };
  icn["TP.SEA ANOMALY"] = {
    type: "path",
    fill: false,
    d: "M 150,80 130,35 100,100 70,35 50,80 m 0,20 20,-45 30,65 30,-65 20,45"
  };
  icn["TP.FIX ACOUSTIC"] = {
    type: "path",
    fill: false,
    d: "M 50,150 150,50 M 50,50 150,150 m -50,-100 0,100"
  };
  icn["TP.FIX ELECTRO-MAGNETIC"] = {
    type: "path",
    fill: false,
    d: "m 50,90 15,20 5,-20 15,20 5,-20 20,20 5,-20 15,20 5,-20 15,20 M 50,150 150,50 M 50,50 150,150 m -50,-100 0,100"
  };
  icn["TP.FIX ELECTRO-OPTICAL"] = {
    type: "path",
    fill: false,
    d: "m 150,100 c 0,6.904 -22.386,12.5 -50,12.5 -27.6142,0 -50,-5.596 -50,-12.5 0,-6.9036 22.3858,-12.5 50,-12.5 27.614,0 50,5.5964 50,12.5 z M 50,150 150,50 M 50,50 150,150 m -50,-100 0,100"
  };
  //APP6-B stuff
  icn["TP.FIRE"] = {
    type: "text",
    stroke: false,
    fill: colors.iconColor[affiliation],
    textanchor: "middle",
    x: 100,
    y: 115,
    fontsize: 35,
    text: "FIRE"
  };
  icn["TP.INDIRECT FIRE"] = {
    type: "path",
    stroke: colors.iconColor[affiliation],
    fill: false,
    d: "m 100,60 0,80 m -40,-40 80,0"
  };
  icn["TP.AMBUSH"] = {
    type: "path",
    stroke: colors.iconColor[affiliation],
    fill: false,
    d: "m 77.5,106 20,0 m -20,-12 20,0 M 75,82 95,82 m -20,36 20,0 m -25,12 20,0 M 70,70 90,70 M 80,60 c 25,15 25,65 0,80 m 45,-50 10,10 -10,10 m -25,-10 35,0"
  };
  icn["TP.ROAD BLOCK"] = {
    type: "path",
    stroke: colors.iconColor[affiliation],
    fill: false,
    d: "m 73,133 60,-60 m -66,54 60,-60 m -54,0 60,60 m -66,-54 60,60"
  };
  icn["TP.ROAD BLOCK (UNDER CONSTRUCTION)"] = [
    {
      type: "path",
      stroke: colors.iconColor[affiliation],
      fill: false,
      strokedasharray: "5,5",
      d: "m 73,67 60,60 m -66,-54 60,60"
    },
    {
      type: "path",
      stroke: colors.iconColor[affiliation],
      fill: false,
      d: "M 73,133 133,73 M 67,127 127,67"
    }
  ];

  function defaultProperties(instructions) {
    if (typeof instructions === "object") {
      if (Array.isArray(instructions)) {
        for (var i = 0; i < instructions.length; i++) {
          defaultProperties.call(this, instructions[i]);
        }
        return;
      }
      instructions.icon = true;
      if (!instructions.hasOwnProperty("fill")) instructions.fill = iconColor;
      if (!instructions.hasOwnProperty("stroke"))
        instructions.stroke = iconColor;
      return;
    }
  }
  for (var key in icn) {
    if (!icn.hasOwnProperty(key)) continue;
    defaultProperties.call(this, icn[key]);
    iconParts[key] = icn[key];
  }
};
