(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ms = factory());
}(this, (function () { 'use strict';

var bbox = function(box) {
  if (typeof box === "undefined") {
    box = {};
  }
  return {
    x1: typeof box.x1 !== "undefined" ? box.x1 : 100,
    y1: typeof box.y1 !== "undefined" ? box.y1 : 100,
    x2: typeof box.x2 !== "undefined" ? box.x2 : 100,
    y2: typeof box.y2 !== "undefined" ? box.y2 : 100,
    width: function() {
      return this.x2 - this.x1;
    },
    height: function() {
      return this.y2 - this.y1;
    },
    getSize: function() {
      return {
        height: this.y2 - this.y1,
        width: this.x2 - this.x1
      };
    },
    merge: function(box) {
      this.x1 = box.x1 <= this.x1 ? box.x1 : this.x1;
      this.y1 = box.y1 <= this.y1 ? box.y1 : this.y1;
      this.x2 = box.x2 >= this.x2 ? box.x2 : this.x2;
      this.y2 = box.y2 >= this.y2 ? box.y2 : this.y2;
      return this;
    }
  };
};

var setstandard = function(standard) {
  if (standard == "2525") {
    this._STD2525 = true;
    return true;
  }
  if (standard == "APP6") {
    this._STD2525 = false;
    return true;
  }
  return false;
};

/*! 
==========================================================================================

The MIT License (MIT)

Copyright (c) 2017 Måns Beckman - www.spatialillusions.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

------------------------------------------------------------------------------------------

For updates and more information go to http://www.spatialillusions.com

==========================================================================================
*/

var ms = new function() {
  this._colorModes = {};
  this._dashArrays = {
    pending: "4,4",
    anticipated: "8,12",
    feintDummy: "8,8"
  };
  this._hqStafLength = 100;
  this._iconCache = {}; // A cache of icn to speed stuff up...
  this._iconParts = [];
  this._labelCache = {}; // A cache of label overrides to speed stuff up...
  this._labelOverrides = {};
  this._letterSIDCicons = [];
  this._numberSIDCicons = [];
  this._STD2525 = true;
  this._svgNS = "http://www.w3.org/2000/svg";
  this._symbolParts = [];

  this.autoSVG = false;
  this.version = "1.3.3";

  if (typeof console === "object") {
    console.info(
      "milsymbol.js " +
        this.version +
        " - Copyright (c) 2017 Måns Beckman  http://www.spatialillusions.com"
    );
  }
}();

ms._parseXML = function(s, doc) {
  doc = doc || document;
  var doc2 = new DOMParser().parseFromString(s, "text/xml");
  return doc.adoptNode(doc2.documentElement);
};

ms._scale = function(factor, instruction) {
  return {
    type: "translate",
    x: 100 - factor * 100,
    y: 100 - factor * 100,
    draw: [{ type: "scale", factor: factor, draw: [instruction] }]
  };
};
ms._translate = function(x, y, instruction) {
  return { type: "translate", x: x, y: y, draw: [instruction] };
};

ms.addIconParts = function(parts) {
  if (typeof parts === "function" && this._iconParts.indexOf(parts) == -1) {
    this._iconParts = this._iconParts.concat(parts);
  }
  return ms;
};
ms.addLabelOverrides = function(parts, type) {
  if (typeof parts === "function") {
    if (!this._labelOverrides.hasOwnProperty(type)) {
      this._labelOverrides[type] = [];
    }
    this._labelOverrides[type] = this._labelOverrides[type].concat(parts);
  }
  return ms;
};
ms.addSIDCicons = function(parts, type) {
  if (typeof parts === "function") {
    this["_" + type + "SIDCicons"] = this["_" + type + "SIDCicons"].concat(
      parts
    );
  }
  return ms;
};
ms.addSymbolPart = function(part) {
  if (typeof part === "function") {
    ms.setSymbolParts(ms.getSymbolParts().concat(part));
  }
  return ms;
};
ms.BBox = bbox;
ms.ColorMode = function(civilian, friend, hostile, neutral, unknown) {
  var o = {};
  o.Civilian = civilian;
  o.Friend = friend;
  o.Hostile = hostile;
  o.Neutral = neutral;
  o.Unknown = unknown;
  return o;
};
ms.getColorMode = function(mode) {
  var c = this._colorModes[mode];
  // Clone the mode and return the clone
  return new ms.ColorMode(
    c.Civilian,
    c.Friend,
    c.Hostile,
    c.Neutral,
    c.Unknown
  );
};
ms.getDashArrays = function() {
  return this._dashArrays;
};
ms.getHqStafLength = function() {
  return this._hqStafLength;
};
ms.getSymbolParts = function() {
  return this._symbolParts.slice(0);
};
ms.getVersion = function() {
  return this.version;
};
ms.outline = function(geom, outline, stroke, color) {
  var clone;
  if (Array.isArray(geom)) {
    clone = [];
    for (var i in geom) {
      clone.push(ms.outline(geom[i], outline, stroke, color));
    }
  } else {
    clone = {};
    for (var key in geom) {
      if (["fill", "fillopacity"].indexOf(key) == -1) {
        clone[key] = geom[key];
      }
    }
    if (
      geom.type == "translate" ||
      geom.type == "rotate" ||
      geom.type == "scale"
    ) {
      clone.draw = [];
      for (var draw in geom.draw) {
        clone.draw.push(ms.outline(geom.draw[draw], outline, stroke, color));
      }
    } else {
      clone.strokewidth =
        clone.stroke !== false
          ? Number(clone.strokewidth || stroke) + 2 * outline
          : 2 * outline;
      clone.stroke = color;
      clone.fill = false;
      clone.linecap = "round";
    }
  }
  return clone;
};
ms.setAutoSVG = function(mode) {
  this.autoSVG = mode;
  return this.autoSVG;
};
ms.setColorMode = function(mode, colorMode) {
  this._colorModes[mode] = {};
  this._colorModes[mode].Hostile = colorMode.Hostile;
  this._colorModes[mode].Friend = colorMode.Friend;
  this._colorModes[mode].Neutral = colorMode.Neutral;
  this._colorModes[mode].Unknown = colorMode.Unknown;
  this._colorModes[mode].Civilian = colorMode.Civilian;
  return this._colorModes[mode];
};
ms.setDashArrays = function(pending, anticipated, feintDummy) {
  this._dashArrays.pending = pending;
  this._dashArrays.anticipated = anticipated;
  this._dashArrays.feintDummy = feintDummy;
  return this._dashArrays;
};
ms.setHqStafLength = function(len) {
  this._hqStafLength = len;
  return this._hqStafLength;
};
ms.setSymbolParts = function(parts) {
  this._symbolParts = parts;
  return ms;
};
ms.setStandard = setstandard;
/*
// For backward compability
ms.addMarkerParts = function(part) {
  console.warn(
    "addMarkerParts() is deprecated and should not be used, use addSymbolPart() instead."
  );
  ms.addSymbolPart(part);
};
ms.bboxMax = function(box1, box2) {
  console.warn(
    "bboxMax() is deprecated and should not be used, use BBox.merge() instead."
  );
  return box1.merge(box2);
};
ms.buildingBlock = function(pre, post, bbox) {
  console.warn("buildingBlock() is deprecated and should not be used.");
  if (pre.length == 1 && Array.isArray(pre[0])) pre = pre[0];
  if (post.length == 1 && Array.isArray(post[0])) post = post[0];
  return { pre: pre, post: post, bbox: bbox };
};
ms.addLetterLabelOverrides = function(parts) {
  console.warn(
    "addLetterLabelOverrides() is deprecated and should not be used, use addLabelOverrides() instead."
  );
  if (typeof parts === "function") {
    if (!this._labelOverrides.hasOwnProperty("letter"))
      this._labelOverrides["letter"] = [];
    this._labelOverrides["letter"] = this._labelOverrides["letter"].concat(
      parts
    );
  }
};
ms.addLetterSIDCicons = function(parts) {
  console.warn(
    "addLetterSIDCicons() is deprecated and should not be used, use addSIDCicons() instead."
  );
  if (typeof parts === "function") {
    this._letterSIDCicons = this._letterSIDCicons.concat(parts);
  }
};
ms.addNumberLabelOverrides = function(parts) {
  console.warn(
    "addNumberLabelOverrides() is deprecated and should not be used, use addLabelOverrides() instead."
  );
  if (typeof parts === "function") {
    if (!this._labelOverrides.hasOwnProperty("number"))
      this._labelOverrides["number"] = [];
    this._labelOverrides["number"] = this._labelOverrides["number"].concat(
      parts
    );
  }
};
ms.addNumberSIDCicons = function(parts) {
  console.warn(
    "addNumberSIDCicons() is deprecated and should not be used, use addSIDCicons() instead."
  );
  if (typeof parts === "function") {
    this._numberSIDCicons = this._numberSIDCicons.concat(parts);
  }
};

ms.bbox = function(box) {
  console.warn(
    "bbox() is deprecated and should not be used, use BBox() instead."
  );
  return ms.BBox(box);
};

ms.colorMode = function(civilian, friend, hostile, neutral, unknown) {
  console.warn(
    "colorMode() is deprecated and should not be used, use ColorMode() instead."
  );
  return ms.ColorMode(civilian, friend, hostile, neutral, unknown);
};

ms.getMarkerParts = function() {
  console.warn(
    "getMarkerParts() is deprecated and should not be used, use getSymbolParts() instead."
  );
  return ms.getSymbolParts();
};

ms.setMarkerParts = function(parts) {
  console.warn(
    "setMarkerParts() is deprecated and should not be used, use setSymbolParts() instead."
  );
  ms.setSymbolParts(parts);
  return ms;
};
*/
var ms_1 = ms;

var iconparts = function(
  properties,
  colors,
  _STD2525,
  monoColor,
  alternateMedal
) {
  var icn = {};
  var frame = properties.frame;
  var affiliation = properties.affiliation || "Friend";
  var baseGeometry = properties.baseGeometry;
  var numberSIDC = properties.numberSIDC;
  //var fillColor = colors.fillColor[affiliation];
  var iconColor = colors.iconColor[affiliation];
  var iconFillColor = colors.iconFillColor[affiliation];
  var none = colors.none[affiliation];
  var black = colors.black[affiliation];
  var white = colors.white[affiliation];

  function text(str) {
    var size = 42;
    var y = 115;
    if (str.length == 1) {
      size = 45;
      y = 115;
    }
    if (str.length == 3) {
      size = 35;
      y = 110;
    }
    if (str.length >= 4) {
      size = 32;
      y = 110;
    }
    var t = {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: y,
      fontsize: size,
      text: str
    };
    return t;
  }
  function textm1(str) {
    var size = 30;
    if (str.length == 3) {
      size = 25;
    }
    if (str.length >= 4) {
      size = 22;
    }
    return {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 77,
      fontsize: size,
      text: str
    };
  }
  function textm2(str) {
    var size = 30;
    var y = 145;

    if (str.length == 3) {
      size = 25;
      y = 140;
    }
    if (str.length >= 4) {
      size = 20;
      y = 135;
    }
    return {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: y,
      fontsize: size,
      text: str
    };
  }

  // SPACE =========================================================================
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
  icn["SP.I.FF.CREWED SPACE VEHICLE"] = {
    type: "path",
    stroke: false,
    d:
      "m 100.3,62.4 c -1.8,-0 -4.3,3.7 -4.5,5.4 -2.5,11.3 -3.4,23.1 -6.2,33.4 -2.9,6.7 -6.8,8.3 -9.9,12.1 -3,3.6 -8.5,10.4 -8.5,10.4 l 0,6.4 c 0,0 5.9,0.9 8.9,1.2 3,0.2 8.7,0.1 8.7,0.1 l 0.3,4.3 4.3,0.2 0.2,3.1 5.8,0 0.9,6.5 0.9,-6.4 5.8,0 0.2,-3.1 4.3,-0.2 0.3,-4.3 c 0,0 5.7,0.1 8.7,-0.1 3,-0.2 8.9,-1.2 8.9,-1.2 l 0,-6.4 c 0,0 -5.5,-6.7 -8.5,-10.3 -3.1,-3.8 -7,-5.4 -9.9,-12.1 -2.8,-10.4 -3.7,-22.2 -6.2,-33.4 -0.3,-2.9 -2.7,-5.5 -4.5,-5.5 z"
  };
  icn["SP.I.FF.SPACE STATION"] = [
    {
      type: "path",
      d:
        "m 103.1,97.4 c -12.4,0.3 -25.7,0.1 -36.7,6.7 -4.1,2.1 -8.5,5.9 -7.8,11 0.2,3.7 0.3,7.4 0.5,11.1 6.2,7.8 16.6,10.4 26,11.8 14,1.8 28.5,1.2 42.1,-3 5.2,-1.7 10.4,-4.3 14.2,-8.3 0.3,-5.1 -0.3,-10.4 0.7,-15.3 -1.2,-4.3 -5.9,-6.4 -9.7,-8.2 -9.2,-4 -19.3,-5.4 -29.2,-5.6 z m -3.2,9.6 c 10.1,-0.2 20.5,1.9 29.1,7.4 -13,8.4 -29.6,9.7 -44.3,6.1 -4.9,-1.3 -9.7,-3.3 -13.7,-6.4 8.8,-4.9 18.9,-6.9 28.9,-7.2 z",
      fill: _STD2525 ? iconFillColor : none
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
  icn["SP.I.SPACE LAUNCH VEHICLE"] = text("SLV");
  icn["SP.I.MILITARY"] = text("MIL");
  icn["SP.I.SPACE VEHICLE"] = text("SV");
  icn["SP.I.RE-ENTRY VEHICLE"] = text("RV");
  icn["SPACE.PLANET LANDER"] = text("PL");
  icn["SP.I.ORBITER SHUTTLE"] = {
    type: "path",
    d: "m 89,115 6,-25 c 3,-12 7,-12 10,0 l 6,25 -10,0 -1,5 -1,-5 z"
  };
  icn["SP.I.CAPSULE"] = {
    type: "path",
    d: "m 85,115 c -2,5 32,5 30,0 l -5,-30 c -1,-5 -19,-5 -20,0 z"
  };
  icn["SP.I.SATELLITE, GENERAL"] = text("SAT");
  icn["SP.I.SATELLITE"] = {
    type: "path",
    d:
      "m 110,100 10,0 m -40,0 10,0 m -10,-10 -25,0 0,20 25,0 z m 40,0 0,20 25,0 0,-20 z m -30,0 0,20 20,0 0,-20 z"
  };
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
  icn["SP.I.COMMUNICATIONS SATELLITE"] = [
    {
      type: "path",
      d:
        "m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
    },
    { type: "path", fill: false, d: "m 100,90 0,9 M 75,81 c 16,12 34,12 50,0" }
  ];
  icn["SP.I.EARTH OBSERVATION SATELLITE"] = [
    {
      type: "path",
      d:
        "m 107,113 c 0,3.9 -3.1,7 -7,7 -3.9,0 -7,-3.1 -7,-7 0,-3.9 3.1,-7 7,-7 3.9,0 7,3.1 7,7 z m -17,-33 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"
    },
    { type: "path", fill: false, d: "m 88,107 c 8,-9 16,-9 24,0" }
  ];
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
  icn["SP.I.RECONNAISSANCE SATELLITE"] = {
    type: "path",
    d:
      "m 106,100 9,20 m -21,-20 -9,20 m 17,-20 3,20 m -7,-20 -3,20 m 15,-30 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
  };
  icn["SP.I.SPACE STATION"] = {
    type: "path",
    d:
      "m 97.5,112.5 0,7.5 5,0 0,-7.5 z m 0,-32.5 5,0 0,26.4 -5,0 z m -0.3,7.6 C 83.3,88.2 72.5,93.5 72.5,100 c 0,6.9 12.3,12.5 27.5,12.5 15.2,0 27.5,-5.6 27.5,-12.5 0,-6.5 -11,-11.9 -25,-12.4 l 0,5.6 c 9.9,0.4 17.5,3.2 17.5,6.6 0,3.7 -8.9,6.7 -19.8,6.7 -10.9,0 -19.8,-3 -19.8,-6.7 0,-3.4 7.4,-6.1 17.1,-6.6 l 0,-5.6 c -0.1,0 -0.2,-0 -0.3,0 z"
  };
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
  icn["SP.I.CIVILIAN ORBITER SHUTTLE"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 89,115 6,-25 c 3,-12 7,-12 10,0 l 6,25 -10,0 -1,5 -1,-5 z"
  };
  icn["SP.I.CIVILIAN CAPSULE"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 85,115 c -2,5 32,5 30,0 l -5,-30 c -1,-5 -19,-5 -20,0 z"
  };
  icn["SP.I.CIVILIAN SATELLITE"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 110,100 10,0 m -40,0 10,0 m -10,-10 -25,0 0,20 25,0 z m 40,0 0,20 25,0 0,-20 z m -30,0 0,20 20,0 0,-20 z"
  };
  icn["SP.I.CIVILIAN ASTRONOMICAL SATELLITE"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 97,90 -1,-9 8,0 -1,9 m -5,20 1,9 2,0 1,-9 m 8,-10 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
  };
  icn["SP.I.CIVILIAN BIOSATELLITE"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 100,89 c 0,4.4 -3.6,8 -8,8 -4.4,0 -8,-3.6 -8,-8 0,-4.4 3.6,-8 8,-8 4.4,0 8,3.6 8,8 z m -10,10 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0 m -17,-25 17,10 -1,2 -14,-7"
  };
  icn["SP.I.CIVILIAN COMMUNICATIONS SATELLITE"] = [
    {
      type: "path",
      fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      d:
        "m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
    },
    { type: "path", fill: false, d: "m 100,90 0,9 M 75,81 c 16,12 34,12 50,0" }
  ];
  icn["SP.I.CIVILIAN EARTH OBSERVATION SATELLITE"] = [
    {
      type: "path",
      fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      d:
        "m 107,113 c 0,3.9 -3.1,7 -7,7 -3.9,0 -7,-3.1 -7,-7 0,-3.9 3.1,-7 7,-7 3.9,0 7,3.1 7,7 z m -17,-33 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"
    },
    { type: "path", fill: false, d: "m 88,107 c 8,-9 16,-9 24,0" }
  ];
  icn["SP.I.CIVILIAN MINIATURIZED SATELLITE"] = [
    {
      type: "path",
      fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
      d:
        "m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
    },
    {
      type: "path",
      fill: false,
      d: "m 88,87 c 8,6 16,6 24,0 m -20,8 8,-14 8,14"
    }
  ];
  icn["SP.I.CIVILIAN SPACE STATION"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 97.5,112.5 0,7.5 5,0 0,-7.5 z m 0,-32.5 5,0 0,26.4 -5,0 z m -0.3,7.6 C 83.3,88.2 72.5,93.5 72.5,100 c 0,6.9 12.3,12.5 27.5,12.5 15.2,0 27.5,-5.6 27.5,-12.5 0,-6.5 -11,-11.9 -25,-12.4 l 0,5.6 c 9.9,0.4 17.5,3.2 17.5,6.6 0,3.7 -8.9,6.7 -19.8,6.7 -10.9,0 -19.8,-3 -19.8,-6.7 0,-3.4 7.4,-6.1 17.1,-6.6 l 0,-5.6 c -0.1,0 -0.2,-0 -0.3,0 z"
  };
  icn["SP.I.CIVILIAN TETHERED SATELLITE"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 120,87 -20,12 m 33,-12 c 0,3.6 -2.9,6.5 -6.5,6.5 -3.6,0 -6.5,-2.9 -6.5,-6.5 0,-3.6 2.9,-6.5 6.5,-6.5 3.6,0 6.5,2.9 6.5,6.5 z m -23,22 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"
  };
  icn["SP.I.CIVILIAN WEATHER SATELLITE"] = [
    {
      type: "path",
      fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
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
  icn["SP.I.MANUAL TRACK"] = text("MAN");
  icn["SP.M1.LOW EARTH ORBIT (LEO)"] = textm1("LEO");
  icn["SP.M1.MEDIUM EARTH ORBIT (MEO)"] = textm1("MEO");
  icn["SP.M1.HIGH EARTH ORBIT (HEO)"] = textm1("HEO");
  icn["SP.M1.GEOSYNCHRONOUS ORBIT (GSO)"] = textm1("GSO");
  icn["SP.M1.GEOSTATIONARY ORBIT (GO)"] = textm1("GO");
  icn["SP.M1.MOLNIYA ORBIT (MO)"] = textm1("MO");
  icn["SP.M2.OPTICAL"] = textm2("O");
  icn["SP.M2.INFRARED"] = textm2("IR");
  icn["SP.M2.RADAR"] = textm2("R");
  icn["SP.M2.SIGNALS INTELLIGENCE (SIGINT)"] = textm2("SI");
  //Space Missile
  icn["SPACE.MISSILE.M1.BALLISTIC"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 30,
    text: "B"
  };
  icn["SPACE.MISSILE.M1.SPACE"] = [
    { type: "text", stroke: false, x: 68, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 68, y: 125, fontsize: 30, text: "P" }
  ];
  icn["SPACE.MISSILE.M1.INTERCEPTOR"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 30,
    text: "I"
  };
  icn["SPACE.MISSILE.M2.SHORT RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["SPACE.MISSILE.M2.MEDIUM RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "M" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["SPACE.MISSILE.M2.INTERMEDIATE RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "I" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["SPACE.MISSILE.M2.LONG RANGE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "L" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "R" }
  ];
  icn["SPACE.MISSILE.M2.INTERCONTINENTAL"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "I" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "C" }
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
  icn["SPACE.MISSILE.M2.PATRIOT"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "P"
  };
  icn["SPACE.MISSILE.M2.STANDARD MISSILE - TERMINAL PHASE (SM-T)"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "T" }
  ];
  icn["SPACE.MISSILE.M2.STANDARD MISSILE - 3 (SM-3)"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "3" }
  ];
  icn["SPACE.MISSILE.M2.TERMINAL HIGH-ALTITUDE AREA DEFENSE (THAAD)"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "T"
  };
  icn["SPACE.MISSILE.M2.SPACE"] = [
    { type: "text", stroke: false, x: 132, y: 95, fontsize: 30, text: "S" },
    { type: "text", stroke: false, x: 132, y: 125, fontsize: 30, text: "P" }
  ];
  // AIR ===========================================================================
  icn["AR.I.MILITARY"] = text("MIL");
  icn["AR.I.CIVILIAN"] = text("CIV");
  icn["AR.I.CIVILIAN"].fill = _STD2525
    ? iconFillColor
    : !frame ? iconFillColor : false;
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
    fill: _STD2525 ? iconFillColor : false
  };
  icn["AR.I.MILITARY ROTARY WING"] = {
    type: "path",
    d: "M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z"
  };
  icn["AR.I.CIVILIAN ROTARY WING"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
      stroke: black,
      cx: 100,
      cy: 95,
      r: 15
    },
    {
      type: "path",
      fill: _STD2525 ? iconFillColor : false,
      stroke: black,
      d: "M95,110 l0,10 10,0 0,-10 z"
    }
  ];
  icn["AR.I.FF.CIVILIAN BALLOON"] = [
    {
      type: "path",
      fill: _STD2525 ? iconFillColor : false,
      stroke: black,
      d: "M90,125 l20,0 0,10 -20,0 z"
    },
    {
      type: "circle",
      fill: _STD2525 ? iconFillColor : false,
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
    fill: _STD2525 ? iconFillColor : false,
    stroke: black,
    d:
      "m 110,110 10,10 10,0 -5,-15 m 0,-10 5,-15 -10,0 -10,10 m 17.2,10 c 0,6.1 -12.2,11.1 -27.2,11.1 -15,0 -27.2,-5 -27.2,-11.1 0,-6.1 12.2,-11.1 27.2,-11.1 15,0 27.2,5 27.2,11.1 z"
  };
  icn["AR.I.UNMANNED AERIAL VEHICLE"] = {
    type: "path",
    d: "M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z",
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
  icn["AR.I.2525 PHOTOGRAPHIC"] = text("P");
  icn["AR.I.TRAINER"] = text("T");
  icn["AR.I.UTILITY"] = text("U");
  icn["AR.I.VSTOL"] = text(_STD2525 && !numberSIDC ? "L" : "V");
  icn["AR.I.AIRBORNE COMMAND POST"] =
    _STD2525 && !numberSIDC ? text("D") : text("ACP");
  icn["AR.I.AIRBORNE EARLY WARNING"] =
    _STD2525 && !numberSIDC ? text("W") : text("AEW");
  icn["AR.I.ANTISURFACE WARFARE"] =
    _STD2525 && !numberSIDC ? text("N") : text("ASUW");
  icn["AR.I.ANTISUBMARINE WARFARE"] =
    _STD2525 && !numberSIDC ? text("S") : text("ASW");
  icn["AR.I.COMMUNICATIONS"] =
    _STD2525 && !numberSIDC ? text("Y") : text("COM");
  icn["AR.I.COMBAT SEARCH AND RESCUE"] = text("CSAR");
  icn["AR.I.ELECTRONIC SUPPORT MEASURES"] = _STD2525 ? text("Z") : text("ESM");
  icn["AR.I.GOVERNMENT"] = text("GOV");
  icn["AR.I.MINE COUNTERMEASURES"] = text("MCM");
  icn["AR.I.PERSONNEL RECOVERY"] = _STD2525 ? text("H") : text("PRO");
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
    d:
      "M 99.4 80.8 C 97.9 81.1 98.1 83.4 98.1 83.4 L 98 90.7 L 78.6 107.4 L 79.3 109.4 L 98.1 98.3 L 98.3 112.9 L 93.9 116.6 L 93.9 118.7 L 98.8 116.8 C 99.1 117 99.7 117.5 99.7 117.5 C 99.7 117.5 100.4 117 100.7 116.8 L 105.6 118.7 L 105.6 116.6 L 101.1 112.9 L 101.3 98.3 L 120.2 109.4 L 120.9 107.4 L 101.5 90.7 L 101.3 83.4 C 101.3 83.4 101.6 81.1 100 80.8 C 99.8 80.8 99.6 80.8 99.4 80.8 z"
  };
  icn["AR.I.CIVILIAN FIXED-WING DSymbol"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : false,
    stroke: black,
    d:
      "m 75.1,90.3 19.6,0 0,-6.5 10.5,0 0,6.5 19.6,0 0,9.7 -19.6,0 0,16.2 6.5,0 0,3.2 -23.6,0 0,-3.2 6.5,0 0,-16.2 -19.6,0 z m 21.6,-6.5 0,-3.2 6.5,0 0,3.2"
  };
  icn["AR.I.FIGHTER/BOMBER"] = text("F/B");
  icn["AR.I.ELECTRONIC SUPPORT"] = text("ES");
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
    fill: _STD2525 ? iconFillColor : false,
    stroke: black,
    d:
      "M 75,110 85,95 m -5,20 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m 15,-6 0,11 10,0 0,-11 m 10,-14 c 0,8.3 -6.7,15 -15,15 -8.3,0 -15,-6.7 -15,-15 0,-8.3 6.7,-15 15,-15 8.3,0 15,6.7 15,15 z"
  };
  icn["AR.I.CIVILIAN UNMANNED AERIAL VEHICLE"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : false,
    stroke: black,
    d: "M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z"
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
  icn["AIR.M1.VSTOL"] = textm1(_STD2525 && !numberSIDC ? "L" : "V");
  icn["AIR.M1.PASSENGER"] = textm1("PX");
  icn["AIR.M1.ULTRA LIGHT"] = textm1("UL");
  icn["AIR.M1.AIRBORNE COMMAND POST"] =
    _STD2525 && !numberSIDC ? textm1("D") : textm1("ACP");
  icn["AIR.M1.ANTISURFACE WARFARE"] =
    _STD2525 && !numberSIDC ? textm1("N") : textm1("ASUW");
  icn["AIR.M1.AIRBORNE EARLY WARNING"] =
    _STD2525 && !numberSIDC ? textm1("W") : textm1("AEW");
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
    _STD2525 && !numberSIDC ? textm1("X") : textm1("PH");
  icn["AIR.M1.PERSONNEL RECOVERY"] = textm1("PR");
  icn["AIR.M1.ANTISUBMARINE WARFARE"] =
    _STD2525 && !numberSIDC ? textm1("S") : textm1("ASW");
  icn["AIR.M1.COMMUNICATIONS"] =
    _STD2525 && !numberSIDC ? textm1("Y") : textm1("COM");
  icn["AIR.M1.ELECTRONIC SURVEILLANCE MEASURES"] = _STD2525
    ? textm1("Z")
    : textm1("ESM");
  icn["AIR.M1.MINE COUNTERMEASURES"] = textm1("MCM");
  icn["AIR.M1.SEARCH AND RESCUE"] = textm1("SAR");
  icn["AIR.M1.SPECIAL OPERATIONS FORCES"] = textm1("SOF");
  icn["AIR.M1.SURFACE WARFARE"] = textm1("SUW");
  icn["AIR.M1.VIP"] = textm1("VIP");
  icn["AIR.M1.COMBAT SEARCH AND RESCUE"] =
    _STD2525 && !numberSIDC ? textm1("H") : textm1("CSAR");
  icn["AIR.M1.SUPRESSION OF ENEMY AIR DEFENCE"] = textm1("SEAD");
  icn["AIR.M1.UNMANNED AERIAL VEHICLE"] = {
    type: "translate",
    x: 20,
    y: -10,
    draw: [
      {
        type: "scale",
        factor: 0.8,
        draw: [icn["AR.I.UNMANNED AERIAL VEHICLE"]]
      }
    ]
  };
  icn["AIR.M1.BOOM-ONLY"] = textm1("B");
  icn["AIR.M1.DROUGE-ONLY"] = textm1("D");
  //2525D
  icn["AIR.M1.ELECTRONIC SUPPORT (ES)"] = textm1("ES");
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
  if (_STD2525)
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
  icn["AIR.MISSILE.M2.INTERCONTINENTAL"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 30,
    text: "I"
  };
  // GROUND ========================================================================
  icn["GR.IC.ADMINISTRATIVE"] = text("ADM");
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
  icn["GR.IC.AVIATION ROTARY WING"] = icn["AR.I.MILITARY ROTARY WING"];
  icn["GR.IC.AVIATION FIXED WING"] = icn["AR.I.MILITARY FIXED WING"];
  icn["GR.IC.AVIATION COMPOSITE"] = [
    ms_1._scale(0.5, [
      icn["GR.IC.AVIATION FIXED WING"],
      {
        type: "rotate",
        degree: 90,
        x: 100,
        y: 100,
        draw: [icn["GR.IC.AVIATION ROTARY WING"]]
      }
    ])
  ];
  icn["GR.IC.AVIATION TACTICAL AIR CONTROL PARTY"] = text("TACP");
  icn["GR.IC.AVIATION FORWARD AIR CONTROLLER"] = text("FAC");
  icn["GR.IC.BAND"] = text("BAND");
  icn[
    "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
  ] = text("ATF");
  icn["GR.IC.CBRN"] = [
    {
      type: "path",
      d: "M80,120 c0,-20 10,-40 50,-43 m-10,43 c0,-20 -10,-40 -50,-43",
      fill: false
    },
    { type: "circle", cx: 70, cy: 85, r: 8 },
    { type: "circle", cx: 130, cy: 85, r: 8 }
  ];
  icn["GR.IC.CIVIL AFFAIRS"] = text("CA");
  icn["GR.IC.CIVIL-MILITARY-COOPERATION"] = {
    type: "path",
    d: "m 60,80 80,0 0,20 c 0,25 -80,25 -80,0 z",
    fill: false
  };
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
    fill: _STD2525 ? iconFillColor : false
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
      fill: _STD2525 ? iconFillColor : false,
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
    _STD2525 && !numberSIDC ? "IW" : "IO"
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
  icn["GR.IC.LIAISON"] = text("LO");
  icn["GR.IC.MAINTENANCE"] = {
    type: "path",
    d: "M70,90 c10,0 10,20 0,20 m10,-10 l40,0 m10,-10 c-10,0 -10,20 0,20",
    fill: false
  };
  icn["GR.IC.MATERIEL"] = text("MAT");
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
    fill: _STD2525 ? iconFillColor : false,
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
    ms_1._translate(0, -50, [
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
  icn["GR.IC.SEAPORT OF DEBARKATION"] = [
    {
      type: "path",
      fill: false,
      d: "M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19"
    },
    { type: "circle", cx: 100, cy: 100, r: 20, fill: false },
    ms_1._translate(0, -35, ms_1._scale(0.6, icn["GR.IC.NAVAL"]))
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
  icn["GR.IC.SPECIAL FORCES"] = text("SF");
  icn["GR.IC.SPECIAL OPERATIONS FORCES"] =
    icn["AR.I.SPECIAL OPERATIONS FORCES"];
  icn["GR.IC.SURVEILLANCE"] = { type: "path", d: "m 100,80 -25,40 50,0 z" };
  icn["GR.IC.SURVEY"] = [
    { type: "path", d: "M85,120 l15,-15 15,15 ", fill: false },
    {
      type: "path",
      d: "M100,105 l0,-25 20,12.5 z",
      fill: _STD2525 ? iconFillColor : false
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
  icn["GR.IC.UNMANNED SYSTEMS"] = icn["AR.I.UNMANNED AERIAL VEHICLE"];
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
      d: "M65,140 C65,115 135,115 135,140",
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
        "M30,105 c10,0 0,-15 13.5,-15  c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c13.5,0 3.5,15 13.5,15",
      fill: false
    },
    Friend: {
      type: "path",
      d:
        "M25,110 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 20,20",
      fill: false
    },
    Neutral: {
      type: "path",
      d:
        "M45,90 c18.8,0 0,20 18,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18,-20",
      fill: false
    },
    Hostile: {
      type: "path",
      d:
        "M32,105 c10,0 0,-15 11.5,-15  c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c11.5,0 1.5,15 11.5,15",
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
    Unknown: {
      type: "path",
      d: "M 55.7,75.8 148.2,126.3 M 52,126.1 144.4,75.7"
    },
    Friend: { type: "path", d: "m 45,70 110,60 M 45,130 155,70" },
    Neutral: { type: "path", d: "m 45,70 110,60 M 45,130 155,70" },
    Hostile: { type: "path", d: "M 51.7,73.6 144.3,124.1 m -88.4,0 92.6,-50.5" }
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
  icn["GR.IC.FF.MEDICAL DISMOUNTED"] = {
    Unknown: { type: "path", d: "m 47.9,100 104,0 M 100,49.1 100,162" },
    Friend: { type: "path", d: "m 45,100 110,0 m -55,-55 0,110" },
    Neutral: { type: "path", d: "m 45,100 110,0 m -55,-55 0,110" },
    Hostile: { type: "path", d: "m 48.1,100 103.7,0 M 100,37.8 100,150.5" }
  }[affiliation];
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
    Unknown: { type: "path", d: "M 52,126.1 144.4,75.7" },
    Friend: { type: "path", d: "M 45,130 155,70" },
    Neutral: { type: "path", d: "M 45,130 155,70" },
    Hostile: { type: "path", d: "M 54,126.1 148.5,73.5" }
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
      fill: _STD2525 ? iconFillColor : false
    }
  ];
  icn["GR.IC.FF.SIGNAL"] = {
    Unknown: { type: "path", fill: false, d: "M50,65 100,110 100,90 150,135" },
    Friend: { type: "path", fill: false, d: "M25,50 100,110 100,90 175,150" },
    Neutral: { type: "path", fill: false, d: "M45,45 100,110 100,90 155,155" },
    Hostile: { type: "path", fill: false, d: "M57,70 100,110 100,90 143,130" }
  }[affiliation];
  icn["GR.IC.FF.SIGNAL DISMOUNTED"] = {
    Unknown: {
      type: "path",
      fill: false,
      d: "M 57.1,71.4 100,110 l 0,-20 43.8,39.5"
    },
    Friend: {
      type: "path",
      fill: false,
      d: "M 52,66.8 100,110 l 0,-20 47.9,43.1"
    },
    Neutral: {
      type: "path",
      fill: false,
      d: "M 52,66.8 100,110 l 0,-20 47.9,43.1"
    },
    Hostile: {
      type: "path",
      fill: false,
      d: "M 56,70.4 100,110 l 0,-20 42.9,38.6"
    }
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
      fill: _STD2525 ? iconFillColor : false
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
  icn["GR.M1.AMMUNITION"] = {
    type: "path",
    d: "M95,75 L95,60 C95,55 105,55 105,60 L105,75 M90,75 L110,75",
    fill: false
  };
  icn["GR.M1.ANTISUBMARINE WARFARE"] = textm1("P");
  icn["GR.M1.AREA"] = textm1("AREA");
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
  icn["GR.M1.COMMAND AND CONTROL ROTARY WING"] = _STD2525
    ? textm1("Y")
    : textm1("C2");
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
  icn["GR.M1.LANDING SUPPORT"] = textm1("LS");
  icn["GR.M1.LARGE COMMUNICATIONS CONTINGENCY PACKAGE"] = textm1("LCCP");
  icn["GR.M1.LARGE EXTENSION NODE"] = textm1("LEN");
  icn["GR.M1.MAINTENANCE"] = {
    type: "path",
    fill: false,
    d: "m 84,70 32,0 m 4,-5 c -5,0 -5,10 0,10 M 80,65 c 5,0 5,10 0,10"
  };
  icn["GR.M1.MEDEVAC"] = icn["AIR.M1.MEDEVAC"];
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
  icn["GR.M1.NAVAL"] = ms_1._translate(
    0,
    -35,
    ms_1._scale(0.6, icn["GR.IC.NAVAL"])
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
  icn["GR.M1.RAILROAD"] = ms_1._translate(0, -50, [
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
    d: "M75,60 l20,0 M100,80 l0,-20 M125,60 l-20,0",
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
  icn["GR.M1.TOPOGRAPHIC"] = {
    type: "path",
    fill: false,
    d: "m 92,65 c 6,3 10,3 16,0 m -18,13 10,-23 10,23"
  };
  icn["GR.M1.TRAINING CAMP"] = textm1("TNG");
  icn["GR.M1.UNMANNED AERIAL VEHICLE"] = icn["AIR.M1.UNMANNED AERIAL VEHICLE"];
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
  if (!_STD2525) {
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
  if (!_STD2525) {
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
      "m 85,140 15,-15 15,15 M 85,130 85,75 c 0,-20 30,-20 30,0 l 0,55 m -15,-5 0,-65",
    fill: false
  };
  icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"] = [
    icn["GR.EQ.MISSILE LAUNCHER"]
  ];
  if (_STD2525) {
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
    d: "m 70,80 30,-10 30,10 0,0 m -60,50 60,0 m 0,-60 0,60 m -60,-60 0,60 0,0"
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
  ] = [icn["GR.IC.ARMOUR"], icn["GR.M2.WHEELED LIMITED"]];
  icn["GR.EQ.ARMOURED VEHICLE"] = text("A");
  icn["GR.EQ.ARMORED CARRIER WITH VOLCANO"] = text("V");
  icn["GR.EQ.TANK"] = {
    type: "path",
    fill: false,
    d: "m 70,80 60,0 m -60,40 60,0 m -60,-50 0,60 0,0 m 60,-60 0,60"
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
    }
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
    fill: _STD2525 ? iconFillColor : false,
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
      d: _STD2525 ? "m 135,70 -70,0 35,70 z" : "m 65,130 70,0 -35,-70 z"
    }
  ];
  icn["GR.EQ.SENSOR"] = {
    type: "path",
    d:
      "m 100,60 c 0,15 25,40 40,40 -15,0 -40,25 -40,40 0,-15 -25,-40 -40,-40 15,0 40,-25 40,-40 z"
  };
  icn["GR.EQ.SENSOR EMPLACED"] = [
    ms_1._scale(0.9, icn["GR.EQ.SENSOR"]),
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
    fill: _STD2525 ? iconFillColor : false,
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
    d: _STD2525
      ? "M 90.4,82.4 C 84.2,85.8 80,92.4 80,100 l 20,0 -9.6,-17.6 z m 19.3,0.1 L 100,100 l 20,0 c 0,-7.5 -4.2,-14.1 -10.3,-17.5 z M 100,100 89.7,117.1 C 92.7,118.9 96.2,120 100,120 c 3.8,0 7.3,-1.1 10.3,-2.9 L 100,100 z"
      : "M 89.9,82.5 110,82.7 89.7,117.1 80,99.9 120.1,100 110,117.3 z",
    fill: false
  };
  icn["GR.IN.IC.ATOMIC ENERGY WEAPONS GRADE"] = {
    type: "path",
    d: _STD2525
      ? "M 90.4,82.4 C 84.2,85.8 80,92.4 80,100 l 20,0 -9.6,-17.6 z m 19.3,0.1 L 100,100 l 20,0 c 0,-7.5 -4.2,-14.1 -10.3,-17.5 z M 100,100 89.7,117.1 C 92.7,118.9 96.2,120 100,120 c 3.8,0 7.3,-1.1 10.3,-2.9 L 100,100 z"
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
  icn["SE.IC.MILITARY"] = text("MIL");
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
    d:
      "m 100,120 -25,-15 15,0 0,-10 5,0 0,-5 -15,0 0,-5 15,0 0,-5 10,0 0,5 15,0 0,5 -15,0 c 0,0 0,5 0,5 l 5,0 0,10 15,0 z"
  };
  icn["SE.IC.CARRIER"] = {
    type: "path",
    d: "m 80,100 20,20 20,-20 -20,0 0,-20 -20,0 z"
  };
  icn["SE.IC.BATTLESHIP"] = text("BB");
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
      "M 98.3 81 L 98.3 85.1 C 95.9 85.4 93.7 86.5 91.9 88 L 88.4 84.5 L 86 86.9 L 89.6 90.5 C 89.6 90.5 89.6 90.5 89.6 90.5 C 88.3 92.5 87.5 94.9 87.5 97.5 C 87.5 98.4 87.6 99.2 87.8 100 L 80 100 L 100 120 L 120 100 L 112.3 100 C 112.4 99.2 112.5 98.4 112.5 97.5 C 112.5 94.8 111.6 92.3 110.2 90.3 L 113.8 86.6 L 111.5 84.2 L 107.9 87.8 C 106.1 86.4 104 85.4 101.7 85.1 L 101.7 81 L 98.3 81 z"
  };
  icn["SE.IC.MINELAYER"] = text("ML");
  icn["SE.IC.MINESWEEPER"] = text("MS");
  icn["SE.IC.MINESWEEPER, DRONE"] = text("MSD");
  icn["SE.IC.MINEHUNTER"] = text("MH");
  icn["SE.IC.MINE COUNTER MEASURE SUPPORT SHIP"] = text(
    _STD2525 ? "MA" : "MCS"
  );
  icn["SE.IC.MINE COUNTERMEASURES"] = text("MCM");
  icn["SE.IC.SEA SURFACE DECOY"] = {
    type: "path",
    d:
      "M 105,110 90,95 105,80 z M 85,110 70,95 85,80 z m 40,-30 -15,15 15,15 z m -55,40 0,-5 55,0 0,5 z"
  };
  icn["SE.IC.PATROL"] = {
    type: "path",
    d: "m 80,100 20,20 20,-20 -10,0 -10,-20 -10,20 z"
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
      fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
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
  icn["SE.IC.UNMANNED SURFACE WATER VEHICLE"] =
    icn["AR.I.UNMANNED AERIAL VEHICLE"];
  icn["SE.IC.NAVY TASK ORGANIZATION UNIT"] = [
    { type: "path", d: "m 110,80 15,15 0,25 M 90,80 75,95 l 0,25", fill: false }
  ];
  if (_STD2525)
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
      y: _STD2525 ? 150 : 120,
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
      y: _STD2525 ? 150 : 120,
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
      y: _STD2525 ? 150 : 120,
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
      y: _STD2525 ? 150 : 120,
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
  icn["SE.IC.AUXILIARY SHIP"] = text(_STD2525 ? "AR" : "AA");
  icn["SE.IC.AMMUNITION SHIP"] = text("AE");
  icn["SE.IC.STORES SHIP"] = text("AF");
  icn["SE.IC.AUXILIARY FLAG OR COMMAND SHIP"] = text("AGF");
  icn["SE.IC.INTELLIGENCE COLLECTOR"] = text(_STD2525 ? "JI" : "AI");
  icn["SE.IC.OCEAN RESEARCH SHIP"] = text("AGO");
  icn["SE.IC.SURVEY SHIP"] = text("AGS");
  icn["SE.IC.HOSPITAL SHIP"] = text("AH");
  icn["SE.IC.CARGO SHIP"] = text("AK");
  icn["SE.IC.COMBAT SUPPORT SHIP, FAST"] = text("AOE");
  icn["SE.IC.OILER, REPLENISHMENT"] = text("AO");
  icn["SE.IC.REPAIR SHIP"] = text("AR");
  icn["SE.IC.SUBMARINE TENDER"] = text("AS");
  icn["SE.IC.TUG, OCEAN GOING"] = text(_STD2525 ? "AS" : "AT");
  icn["SE.IC.SERVICE CRAFT, YARD, GENERAL"] = text("YY");
  icn["SE.IC.BARGE, NOT SELF-PROPELLED"] = text("YB");
  icn["SE.IC.BARGE, SELF-PROPELLED"] = text("YS");
  icn["SE.IC.TUG, HARBOUR"] = text("YT");
  icn["SE.IC.LAUNCH"] = text("YFT");
  icn["SE.IC.MERCHANT SHIP, GENERAL"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
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
      text: _STD2525 ? "CA" : "A"
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
  icn["SE.IC.ROLL ON-ROLL OFF"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    {
      type: "text",
      stroke: false,
      x: 100,
      y: 115,
      fontsize: _STD2525 ? "30" : "30",
      text: _STD2525 ? "RO" : "E"
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
      text: _STD2525 ? "FE" : "F"
    }
  ];
  icn["SE.IC.HEAVY LIFT"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 30, text: "H" }
  ];
  icn["SE.IC.HOVERCRAFT"] = {
    type: "path",
    d: _STD2525
      ? "m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z"
      : "m 90,80 0,15.6 C 78.4,96.9 70,100.6 70,105 c 0,5.5 13.4,10 30,10 16.6,0 30,-4.5 30,-10 0,-4.4 -8.4,-8.1 -20,-9.4 L 110,80 90,80 z m -15,40 50,0"
  };
  icn["SE.IC.HOVERCRAFT 2525D"] = [
    icn["SE.IC.MERCHANT SHIP, GENERAL"],
    { type: "text", stroke: false, x: 100, y: 115, fontsize: 30, text: "J" }
  ];
  icn["SE.IC.HOVERCRAFT CIVILIAN"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: _STD2525
      ? "m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z"
      : "m 90,80 0,15.6 C 78.4,96.9 70,100.6 70,105 c 0,5.5 13.4,10 30,10 16.6,0 30,-4.5 30,-10 0,-4.4 -8.4,-8.1 -20,-9.4 L 110,80 90,80 z m -15,40 50,0"
  };
  icn["SE.IC.HOVERCRAFT NONCOMBATANT"] = [
    {
      type: "path",
      d: "m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z",
      strokewidth: false
    },
    _STD2525
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
      text: _STD2525 ? "OT" : "O"
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
      text: _STD2525 ? "PA" : "P"
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
      text: _STD2525 ? "TU" : "T"
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
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
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
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 105,55 0,40 35,0 z m -5,-5 0,50 m 45,0 -15,35 -60,0 -15,-35 z"
  };
  icn["SE.IC.LEISURE CRAFT, MOTORIZED"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
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
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "m 85,60 -30,45 10,15 75,0 0,-20 -60,0 10,-30 5,0 0,-10 z"
  };
  icn["SE.IC.UNMANNED SURFACE WATER VEHICLE (USV)"] =
    icn["AR.I.CIVILIAN UNMANNED AERIAL VEHICLE"];
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
  icn["SE.M1.DRONE-EQUIPPED"] = icn["AIR.M1.UNMANNED AERIAL VEHICLE"];
  icn["SE.M1.HELICOPTER-EQUIPPED"] = textm1("H");
  icn["SE.M1.BALLISTIC MISSILE DEFENSE, SHOOTER"] = textm1("BM");
  icn[
    "SE.M1.BALLISTIC MISSILE DEFENSE, LONG- RANGE SURVEILLANCE AND TRACK (LRS&T)"
  ] = textm1("ST");
  icn["SE.M1.SEA-BASE X-BAND"] = textm1("SBX");
  icn["SE.M1.HIJACKING/HIJACKED"] = textm1("H");
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
  icn["SU.IC.MILITARY"] = text("MIL");
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
    d: "M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z",
    stroke: false
  };
  icn["SU.IC.NON-SUBMARINE"] =
    _STD2525 && !numberSIDC
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
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d:
      "m 85,90 0,-10 30,0 0,10 m 20,10 c 0,5.5 -15.7,10 -35,10 -19.3,0 -35,-4.5 -35,-10 0,-5.5 15.7,-10 35,-10 19.3,0 35,4.5 35,10 z"
  };
  icn[
    "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV), CIVILIAN"
  ] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
    d: "M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z"
  };
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
    d: _STD2525
      ? "M 105,110 90,95 105,80 z M 85,110 70,95 85,80 z m 40,-30 -15,15 15,15 z m -55,40 0,-5 55,0 0,5 z"
      : "M 105,120 90,105 105,90 z M 85,120 70,105 85,90 z m 40,-30 -15,15 15,15 z m -55,-5 0,-5 55,0 0,5 z",
    fill: _STD2525 ? iconColor : iconFillColor
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
    fill: _STD2525 && !monoColor ? colors.iconColor.Hostile : iconFillColor,
    stroke: _STD2525 && !monoColor ? black : iconColor,
    d:
      "M 115.9,73 126.5,62.4 137.1,73 126.5,83.6 m -53,0 L 62.9,73 73.5,62.4 84.1,73 m 8.4,-3 0,-15 15,0 0,15 m 22.5,30 c 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 C 116.6,70 130,83.4 130,100 z"
  };
  icn["SU.IC.SEA MINE - BOTTOM"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "path",
      fill: _STD2525 && !monoColor ? colors.iconColor.Hostile : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE - MOORED"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "path",
      fill: _STD2525 && !monoColor ? colors.iconColor.Hostile : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE - FLOATING"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "path",
      fill: false,
      stroke: _STD2525 && !monoColor ? black : iconColor,
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
          : _STD2525 && !monoColor ? colors.iconColor.Hostile : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 100,128 -10,15 20,0 z"
    }
  ];
  icn["SU.IC.SEA MINE (IN OTHER POSITION)"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "path",
      fill: false,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 130,100 15,0 M 70,100 l -15,0"
    }
  ];
  icn["SU.IC.SEA MINE - KINGFISHER"] = [
    icn["SU.IC.SEA MINE"],
    {
      type: "text",
      stroke: false,
      fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
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
      fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
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
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d:
        "M 115.9,73 126.5,62.4 137.1,73 126.5,83.6 m -53,0 L 62.9,73 73.5,62.4 84.1,73 m 8.4,-3 0,-15 15,0 0,15 m 22.5,30 c 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 C 116.6,70 130,83.4 130,100 z"
    },
    {
      type: "text",
      stroke: false,
      fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
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
          fill: _STD2525 && !monoColor ? black : iconColor,
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
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE EXERCISE MINE - MOORED"] = [
    icn["SU.IC.SEA MINE EXERCISE MINE"],
    {
      type: "path",
      fill:
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE EXERCISE MINE - FLOATING"] = [
    icn["SU.IC.SEA MINE EXERCISE MINE"],
    {
      type: "path",
      fill: false,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.SEA MINE EXERCISE MINE - RISING"] = [
    icn["SU.IC.SEA MINE EXERCISE MINE"],
    {
      type: "path",
      fill:
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 100,128 -10,15 20,0 z"
    }
  ];
  icn["SU.IC.SEA MINE DECOY"] = {
    type: "path",
    fill:
      _STD2525 && !monoColor
        ? alternateMedal ? black : "rgb(0, 130, 24)"
        : iconFillColor,
    stroke: _STD2525 && !monoColor ? black : iconColor,
    d:
      "m 106.6,101.6 0,26.3 -13.1,-13.1 z m -19.7,0 0,26.3 -13.1,-13.1 z m 39.4,0 0,26.3 -13.1,-13.1 13.1,-13.1 M 100,75.3 c -14.5,0 -26.3,11.8 -26.3,26.3 l 52.5,0 C 126.3,87.1 114.5,75.3 100,75.3 z m -6.6,0 0,-13.1 13.1,0 0,13.1 m -29.8,12.3 -9.3,-9.3 9.3,-9.3 9.3,9.3 m 27.9,0 9.3,-9.3 9.3,9.3 -9.3,9.3"
  };
  icn["SU.IC.SEA MINE DECOY, BOTTOM/GROUND"] = [
    icn["SU.IC.SEA MINE DECOY"],
    {
      type: "path",
      fill:
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE DECOY, MOORED"] = [
    icn["SU.IC.SEA MINE DECOY"],
    {
      type: "path",
      fill:
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75,140 50,0 M 100,100 l 0,40"
    }
  ];
  icn["SU.IC.SEA MINE NEUTRALIZED"] = [
    {
      type: "path",
      fill: _STD2525 && !monoColor ? colors.iconColor.Neutral : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
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
      fill: _STD2525 && !monoColor ? colors.iconColor.Neutral : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE NEUTRALIZED - MOORED"] = [
    icn["SU.IC.SEA MINE NEUTRALIZED"],
    {
      type: "path",
      fill: _STD2525 && !monoColor ? colors.iconColor.Neutral : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE NEUTRALIZED - FLOATING"] = [
    icn["SU.IC.SEA MINE NEUTRALIZED"],
    {
      type: "path",
      fill: false,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.SEA MINE NEUTRALIZED - RISING"] = [
    icn["SU.IC.SEA MINE NEUTRALIZED"],
    {
      type: "path",
      fill: _STD2525 && !monoColor ? colors.iconColor.Neutral : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 100,128 -10,15 20,0 z"
    }
  ];
  icn["SU.IC.SEA MINE (IN OTHER POSITION) NEUTRALIZED"] = [
    icn["SU.IC.SEA MINE NEUTRALIZED"],
    {
      type: "path",
      fill: false,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 130,100 15,0 M 70,100 l -15,0"
    }
  ];
  icn["SU.IC.SEA MINE MILEC"] = [
    {
      type: "path",
      fill:
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(255,255,0)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
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
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(255,255,0)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE MILEC - MOORED"] = [
    icn["SU.IC.SEA MINE MILEC"],
    {
      type: "path",
      fill:
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(255,255,0)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE MILEC - FLOATING"] = [
    icn["SU.IC.SEA MINE MILEC"],
    {
      type: "path",
      fill: false,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.SEA MINE MINE ANCHOR"] = [
    {
      type: "path",
      fill:
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : false,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
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
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(255,141,42)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    numberSIDC
      ? []
      : {
          type: "text",
          stroke: false,
          fill: _STD2525 && !monoColor ? black : iconColor,
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
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(255,141,42)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE MILCO - MOORED"] = [
    icn["SU.IC.SEA MINE MILCO"],
    {
      type: "path",
      fill:
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE MILCO - FLOATING"] = [
    icn["SU.IC.SEA MINE MILCO"],
    {
      type: "path",
      fill: false,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"] = {
    type: "text",
    stroke: false,
    fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
    x: 100,
    y: 110,
    fontsize: 35,
    text: "1"
  };
  icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"] = {
    type: "text",
    stroke: false,
    fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
    x: 100,
    y: 110,
    fontsize: 35,
    text: "2"
  };
  icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"] = {
    type: "text",
    stroke: false,
    fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
    x: 100,
    y: 110,
    fontsize: 35,
    text: "3"
  };
  icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"] = {
    type: "text",
    stroke: false,
    fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
    x: 100,
    y: 110,
    fontsize: 35,
    text: "4"
  };
  icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"] = {
    type: "text",
    stroke: false,
    fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
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
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(255,255,0)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
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
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(255,255,0)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - MOORED"] = [
    icn["SU.IC.SEA MINE NEGATIVE REACQUISITION"],
    {
      type: "path",
      fill:
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(255,255,0)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - FLOATING"] = [
    icn["SU.IC.SEA MINE NEGATIVE REACQUISITION"],
    {
      type: "path",
      fill: false,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.SEA MINE GENERAL OBSTRUCTOR"] = [
    {
      type: "path",
      fill:
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(255,255,0)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
      x: 100,
      y: 112,
      fontsize: 30,
      text: "OB"
    }
  ];
  icn["SU.IC.SEA MINE GENERAL OBSTRUCTOR NEUTRALIZED"] = [
    {
      type: "path",
      fill: _STD2525 && !monoColor ? colors.iconColor.Neutral : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
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
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d:
        "m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"
    },
    {
      type: "text",
      stroke: false,
      fill: _STD2525 && !monoColor && !alternateMedal ? black : white,
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
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"
    }
  ];
  icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - MOORED"] = [
    icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"],
    {
      type: "path",
      fill:
        _STD2525 && !monoColor
          ? alternateMedal ? black : "rgb(0, 130, 24)"
          : iconFillColor,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"
    }
  ];
  icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - FLOATING"] = [
    icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"],
    {
      type: "path",
      fill: false,
      stroke: _STD2525 && !monoColor ? black : iconColor,
      d: "m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"
    }
  ];
  icn["SU.IC.UNEXPLODED EXPLOSIVE ORDNANCE"] = [
    {
      type: "path",
      strokedasharray: "8,4",
      fill: false,
      stroke: _STD2525 && !monoColor ? colors.iconColor.Hostile : iconColor,
      d: "m 85,65 30,0 20,20 0,30 -20,20 -30,0 -20,-20 0,-30 z"
    },
    {
      type: "text",
      stroke: false,
      fill: _STD2525 && !monoColor ? colors.iconColor.Hostile : iconColor,
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
      stroke: _STD2525 && !monoColor ? colors.iconColor.Neutral : iconColor,
      d: "m 70,70 0,60 60,0 0,-60 z"
    },
    {
      type: "text",
      stroke: false,
      fill: _STD2525 && !monoColor ? colors.iconColor.Neutral : iconColor,
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
      stroke: _STD2525 && !monoColor ? colors.iconColor.Neutral : iconColor,
      d: "m 70,70 0,60 60,0 0,-60 z"
    },
    {
      type: "text",
      stroke: false,
      fill: _STD2525 && !monoColor ? colors.iconColor.Neutral : iconColor,
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
  icn["SOF.M2.COMBAT SEARCH AND RESCUE"] = _STD2525
    ? textm2("CSAR")
    : textm2("H");

  // STABILITY OPERATIONS ==========================================================
  //if(symbol.codingscheme == "O"){
  icn["ST.IC.ARREST"] = {
    type: "path",
    d:
      "m 92.5,100 15,0 m -2.5,-10 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -5,5 0,20 m 20,-15 c 0,11 -9,20 -20,20 -11,0 -20,-9 -20,-20 0,-11 9,-20 20,-20 11,0 20,9 20,20 z",
    fill: false
  };
  icn["ST.IC.ARSON/FIRE"] = _STD2525
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
    fill: _STD2525 ? iconFillColor : false,
    d:
      "m 70,95 0,10 65,0 0,-10 z m 55,10 0,10 5,0 0,-10 z m 0,-10 0,-10 5,0 0,10 z m -45,10 0,15 10,0 0,-15 z m 0,-10 0,-15 10,0 0,15 z"
  };
  icn["ST.IC.HIJACKING (BOAT)"] = {
    type: "path",
    fill: _STD2525 ? iconFillColor : !frame ? iconFillColor : false,
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
    fill: _STD2525 ? iconFillColor : false,
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
    fill: _STD2525 ? iconFillColor : false,
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
    fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
      d:
        "m 121.2,104.9 c 0.4,0.4 0.4,1.5 0.4,2.3 l 1,8.2 v 0.6 h 13 l 1.7,-13.2 h -16.3 l 0.2,2.1 z"
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
      d:
        "m 81,112.2 c 0,0.6 0.8,1.7 1,2.5 l 4.8,-2.2 0.2,-0.1 -6,-4.3 v 4.1 z m 28.4,-12.9 c 0,1.4 -0.6,1.6 -0.6,2.4 v 0.6 l 4.5,-1.7 v -3.6 c -0.5,-0.1 -2.6,-1 -2.9,-0.9 -0.4,0.2 -0.5,2.4 -1,3.1 z m -32.9,0.9 c 0,-3.9 6,-4 6,0.4 0,1.4 -1.1,3 -2.4,3 h -0.5 c -1.8,0 -3,-1.6 -3,-3.4 z m 29.5,2.8 0.4,-1.7 1.1,-7.1 h 0.4 v -0.6 c 0,-0.8 2.6,-3.7 3.2,-4.2 l 11.4,1.6 c -0.5,0.8 -0.9,2.4 -1.4,3.4 -0.3,0.6 -0.4,1.1 -0.7,1.8 -0.3,0.7 -0.7,0.8 -1,1.4 l 6.2,-2.8 1,2.9 -9.1,4 v 0.6 c 0,2.1 0.2,3.7 0.2,5.6 0,1.8 0.8,4.3 -1.3,4.3 -2.1,0 -1.3,-2.2 -1.5,-3.9 -0.2,-1.4 -0.4,-3.5 -0.4,-5.1 l -13.2,5.8 v 9.9 h 2.8 v 6.7 h -8.4 v -6.7 h 3 v -8.4 l -14,6.3 c 1.1,0.9 8.4,4.9 8.4,5.8 v 0.4 c 0,0.7 -1,1.5 -1.9,1.5 H 90.6 c -1.2,0 -8.9,-4.8 -10.5,-5.6 l -6.2,2.8 -1.3,-2.6 4.1,-1.7 c -0.3,-1 -2,-1.5 -2,-2.4 v -4.6 c 0,-0.4 2.3,-5.6 2.8,-5.6 h 4.3 c 0.8,0 6.8,6.7 7.3,6.7 1.5,0 14.6,-7.3 17,-7.5 v -0.9 z m -3,-14.8 c 0,-1.2 1.7,-2.6 3.2,-2.6 h 0.2 c 1.2,0 2.8,1.1 2.8,2 v 1.3 c 0,1.6 -1.4,2.8 -3,2.8 h -0.4 c -1.4,0 -2.8,-1.7 -2.8,-3.2 v -0.4 z m -38.4,4.9 c 1.3,0.1 4.6,-0.3 4.6,0.8 v 34.9 h 61.4 V 94.1 c 0,-1.2 3.3,-0.8 4.6,-0.9 l -35.4,-21.7 -35.2,21.8 0,0 z"
    }
  ];
  icn["GR.IN.IC.HELICOPTER LANDING SITE"] = [
    icn["AR.I.FF.CIVILIAN ROTARY WING"],
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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
      fill: _STD2525 ? iconFillColor : false,
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

  for (var i in ms_1._iconParts) {
    if (!ms_1._iconParts.hasOwnProperty(i)) continue;
    ms_1._iconParts[i].call(
      this,
      icn,
      properties,
      colors,
      _STD2525,
      monoColor,
      alternateMedal
    );
  }

  function defaultProperties(instructions) {
    if (typeof instructions === "object") {
      if (Array.isArray(instructions)) {
        for (var i = 0; i < instructions.length; i++) {
          defaultProperties.call(this, instructions[i]);
        }
        return;
      }
      instructions.icon = true;
      if (instructions.type == "text") {
        if (!instructions.hasOwnProperty("fontfamily"))
          instructions.fontfamily = "Arial";
        if (!instructions.hasOwnProperty("fontweight"))
          instructions.fontweight = "bold";
        if (!instructions.hasOwnProperty("textanchor"))
          instructions.textanchor = "middle";
        if (!instructions.hasOwnProperty("stroke")) instructions.stroke = false;
      }
      if (!instructions.hasOwnProperty("fill")) instructions.fill = iconColor;
      if (!instructions.hasOwnProperty("stroke"))
        instructions.stroke = iconColor;
      return;
    }
  }
  for (var key in icn) {
    if (!icn.hasOwnProperty(key)) continue;
    defaultProperties.call(this, icn[key]);
  }
  return icn;
};

var symbolgeometries = {
  AirHostile: {
    g: { type: "path", d: "M 45,150 L45,70 100,20 155,70 155,150" },
    bbox: new ms_1.BBox({ x1: 45, y1: 20, x2: 45 + 110, y2: 20 + 130 })
  },
  AirFriend: {
    g: {
      type: "path",
      d: "M 155,150 C 155,50 115,30 100,30 85,30 45,50 45,150"
    },
    bbox: new ms_1.BBox({ x1: 45, y1: 30, x2: 45 + 110, y2: 30 + 120 })
  },
  AirNeutral: {
    g: { type: "path", d: "M 45,150 L 45,30,155,30,155,150" },
    bbox: new ms_1.BBox({ x1: 45, y1: 30, x2: 45 + 110, y2: 30 + 120 })
  },
  AirUnknown: {
    g: {
      type: "path",
      d: "M 65,150 c -55,0 -50,-90 0,-90 0,-50 70,-50 70,0 50,0 55,90 0,90"
    },
    bbox: new ms_1.BBox({ x1: 25, y1: 20, x2: 25 + 150, y2: 20 + 130 })
  },
  GroundHostile: {
    g: { type: "path", d: "M 100,28 L172,100 100,172 28,100 100,28 Z" },
    bbox: new ms_1.BBox({ x1: 28, y1: 28, x2: 28 + 144, y2: 28 + 144 })
  },
  GroundFriend: {
    g: { type: "path", d: "M25,50 l150,0 0,100 -150,0 z" },
    bbox: new ms_1.BBox({ x1: 25, y1: 50, x2: 25 + 150, y2: 50 + 100 })
  },
  GroundNeutral: {
    g: { type: "path", d: "M45,45 l110,0 0,110 -110,0 z" },
    bbox: new ms_1.BBox({ x1: 45, y1: 45, x2: 45 + 110, y2: 45 + 110 })
  },
  GroundUnknown: {
    g: {
      type: "path",
      d:
        "M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z"
    },
    bbox: new ms_1.BBox({
      x1: 30.75,
      y1: 30.75,
      x2: 30.75 + 138.5,
      y2: 30.75 + 138.5
    })
  },
  LandDismountedIndividualHostile: {
    g: { type: "path", d: "M 100,28 L172,100 100,172 28,100 100,28 Z" },
    bbox: new ms_1.BBox({ x1: 28, y1: 28, x2: 28 + 144, y2: 28 + 144 })
  },
  LandDismountedIndividualFriend: {
    g: { type: "path", d: "m 100,45 55,25 0,60 -55,25 -55,-25 0,-60 z" },
    bbox: new ms_1.BBox({ x1: 45, y1: 45, x2: 45 + 110, y2: 45 + 110 })
  },
  LandDismountedIndividualNeutral: {
    g: { type: "path", d: "M45,45 l110,0 0,110 -110,0 z" },
    bbox: new ms_1.BBox({ x1: 45, y1: 45, x2: 45 + 110, y2: 45 + 110 })
  },
  LandDismountedIndividualUnknown: {
    g: {
      type: "path",
      d:
        "M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z"
    },
    bbox: new ms_1.BBox({
      x1: 30.75,
      y1: 30.75,
      x2: 30.75 + 138.5,
      y2: 30.75 + 138.5
    })
  },
  SeaHostile: {
    g: { type: "path", d: "M100,28 L172,100 100,172 28,100 100,28 Z" },
    bbox: new ms_1.BBox({ x1: 28, y1: 28, x2: 28 + 144, y2: 28 + 144 })
  },
  SeaFriend: {
    g: { type: "circle", cx: 100, cy: 100, r: 60 },
    bbox: new ms_1.BBox({ x1: 40, y1: 40, x2: 40 + 120, y2: 40 + 120 })
  },
  SeaNeutral: {
    g: { type: "path", d: "M45,45 l110,0 0,110 -110,0 z" },
    bbox: new ms_1.BBox({ x1: 45, y1: 45, x2: 45 + 110, y2: 45 + 110 })
  },
  SeaUnknown: {
    g: {
      type: "path",
      d:
        "M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z"
    },
    bbox: new ms_1.BBox({
      x1: 30.75,
      y1: 30.75,
      x2: 30.75 + 138.5,
      y2: 30.75 + 138.5
    })
  },
  SubsurfaceHostile: {
    g: { type: "path", d: "M45,50 L45,130 100,180 155,130 155,50" },
    bbox: new ms_1.BBox({ x1: 45, y1: 50, x2: 45 + 110, y2: 50 + 130 })
  },
  SubsurfaceFriend: {
    g: { type: "path", d: "m 45,50 c 0,100 40,120 55,120 15,0 55,-20 55,-120" },
    bbox: new ms_1.BBox({ x1: 45, y1: 50, x2: 45 + 110, y2: 50 + 120 })
  },
  SubsurfaceNeutral: {
    g: { type: "path", d: "M45,50 L45,170 155,170 155,50" },
    bbox: new ms_1.BBox({ x1: 45, y1: 50, x2: 45 + 110, y2: 50 + 120 })
  },
  SubsurfaceUnknown: {
    g: {
      type: "path",
      d: "m 65,50 c -55,0 -50,90 0,90 0,50 70,50 70,0 50,0 55,-90 0,-90"
    },
    bbox: new ms_1.BBox({ x1: 25, y1: 50, x2: 25 + 150, y2: 50 + 130 })
  },
  PositionMarker: {
    g: { type: "circle", cx: 100, cy: 100, r: 15 },
    bbox: new ms_1.BBox({ x1: 85, y1: 85, x2: 115, y2: 115 })
  }
};

var ascanvas = function(ratio) {
  function processCanvasInstructions(instruction, ctx) {
    for (var i = 0; i < instruction.length; i++) {
      if (Array.isArray(instruction[i])) {
        if (instruction[i].length) {
          processCanvasInstructions.call(this, instruction[i], ctx);
        }
      } else {
        if (typeof instruction[i] === "object") {
          ctx.lineWidth = instruction[i].strokewidth || this.style.strokeWidth;
          if (typeof instruction[i].stroke !== "undefined") {
            if (instruction[i].stroke) {
              ctx.strokeStyle = instruction[i].stroke;
            } else {
              ctx.strokeStyle = "rgba(0,0,0,0)";
            }
          }
          if (instruction[i].strokedasharray) {
            ctx.setLineDash(instruction[i].strokedasharray.split(","));
          } else {
            if (ctx.getLineDash().length != 0) {
              ctx.setLineDash([]);
            }
          }
          if (instruction[i].linecap) {
            ctx.lineCap = instruction[i].linecap;
            ctx.lineJoin = instruction[i].linecap;
          }
          if (instruction[i].fill) {
            ctx.fillStyle = instruction[i].fill;
          }
          //fill is set to false, make it transparent
          if (!instruction[i].fill) {
            ctx.fillStyle = "rgba(0,0,0,0)";
          }

          if (typeof instruction[i].fillopacity !== "undefined") {
            ctx.globalAlpha = instruction[i].fillopacity;
          }

          switch (instruction[i].type) {
            case "path":
              if (!ms_1._brokenPath2D) {
                var d = new Path2D(instruction[i].d);
                if (
                  typeof instruction[i].fill === "undefined" ||
                  (typeof instruction[i].fill !== "undefined" &&
                    instruction[i].fill)
                )
                  ctx.fill(d);
                if (ctx.globalAlpha != 1) ctx.globalAlpha = 1; //We never have transparent strokes
                if (
                  typeof instruction[i].stroke === "undefined" ||
                  (typeof instruction[i].stroke !== "undefined" &&
                    instruction[i].stroke)
                )
                  ctx.stroke(d);
              } else {
                if (typeof ms_1._Path2D === "function") {
                  ms_1._Path2D(ctx, instruction[i].d);
                  if (
                    typeof instruction[i].fill === "undefined" ||
                    (typeof instruction[i].fill !== "undefined" &&
                      instruction[i].fill)
                  )
                    ctx.fill();
                  if (ctx.globalAlpha != 1) ctx.globalAlpha = 1;
                  if (
                    typeof instruction[i].stroke === "undefined" ||
                    (typeof instruction[i].stroke !== "undefined" &&
                      instruction[i].stroke)
                  )
                    ctx.stroke();
                } else {
                  console.warn(
                    "ms._Path2D() is not present, you will need to load functionality for using Canvas in older version of Internet Explorer."
                  );
                }
              }
              break;
            case "circle":
              ctx.beginPath();
              ctx.arc(
                instruction[i].cx,
                instruction[i].cy,
                instruction[i].r,
                0,
                2 * Math.PI,
                false
              );
              if (
                typeof instruction[i].fill === "undefined" ||
                (typeof instruction[i].fill !== "undefined" &&
                  instruction[i].fill)
              )
                ctx.fill();
              if (
                typeof instruction[i].stroke === "undefined" ||
                (typeof instruction[i].stroke !== "undefined" &&
                  instruction[i].stroke)
              )
                ctx.stroke();
              break;
            case "text":
              ctx.font =
                (typeof instruction[i].fontweight !== "undefined"
                  ? instruction[i].fontweight + " "
                  : "") +
                instruction[i].fontsize +
                "px " +
                instruction[i].fontfamily;
              ctx.textAlign =
                instruction[i].textanchor == "middle"
                  ? "center"
                  : instruction[i].textanchor;
              ctx.fillText(
                instruction[i].text,
                instruction[i].x,
                instruction[i].y
              );
              if (instruction[i].stroke)
                ctx.strokeText(
                  instruction[i].text,
                  instruction[i].x,
                  instruction[i].y
                );
              break;
            case "translate":
              ctx.save();
              ctx.translate(instruction[i].x, instruction[i].y);
              processCanvasInstructions.call(this, instruction[i].draw, ctx);
              ctx.restore();
              //ctx.translate(-instruction[i].x, -instruction[i].y);
              break;
            case "rotate":
              var x = instruction[i].x;
              var y = instruction[i].y;
              ctx.save();
              ctx.translate(x, y);
              ctx.rotate(instruction[i].degree * Math.PI / 180);
              ctx.translate(-x, -y);
              processCanvasInstructions.call(this, instruction[i].draw, ctx);
              ctx.restore();
              //ctx.translate(x, y);
              //ctx.rotate(-instruction[i].degree * Math.PI / 180);
              //ctx.translate(-x, -y);
              break;
            case "scale":
              ctx.save();
              ctx.scale(instruction[i].factor, instruction[i].factor);
              processCanvasInstructions.call(this, instruction[i].draw, ctx);
              ctx.restore();
              //ctx.scale(1/instruction[i].factor,1/instruction[i].factor);
              break;
          }
          if (instruction[i].linecap) {
            ctx.lineCap = "butt";
            ctx.lineJoin = "miter";
          }
          if (typeof instruction[i].fillopacity !== "undefined") {
            ctx.globalAlpha = 1;
          }
        }
      }
    }
  }

  if (typeof ms_1._brokenPath2D == "undefined") {
    /* In EdgeHTML14 Microsoft implemented support for Path2D, but they didn't implement support 
	for initiating it with a SVG path, and if you initiate it with an SVG path, it will not throw 
	an error, instead it will return an empty path and log a warning.
	This will check for that behaviour and make sure we use the workaround if Path2D is broken. */
    if (typeof Path2D == "undefined") {
      // If Path2D dosen't exist it is definetly broken
      ms_1._brokenPath2D = true;
    } else {
      // If Path2D exists we need to check if it is broken
      var canv = document.createElement("canvas");
      canv.widht = 1;
      canv.height = 1;
      var _ctx = canv.getContext("2d");
      // Draw an SVG path to the canvas...
      var p = new Path2D("M0 0 h 10 v 10 h -10 Z");
      _ctx.fill(p);
      // Pick a pixel and see if it is filled with black... (if not SVG is not working)
      var data = _ctx.getImageData(0, 0, 1, 1).data.join();
      ms_1._brokenPath2D = !(data == "0,0,0,255");
    }
  }

  var canvas = document.createElement("canvas");
  //TODO fix the pixel ratio
  ratio = ratio || 1; //window.devicePixelRatio || 1;
  canvas.width = this.width * ratio;
  canvas.height = this.height * ratio;
  //canvas.style.width = this.width +'px';
  //canvas.style.height = this.height +'px';
  var ctx = canvas.getContext("2d");
  ctx.scale(ratio * this.style.size / 100, ratio * this.style.size / 100);
  ctx.translate(
    -(this.bbox.x1 - this.style.strokeWidth - this.style.outlineWidth),
    -(this.bbox.y1 - this.style.strokeWidth - this.style.outlineWidth)
  );
  processCanvasInstructions.call(this, this.drawInstructions, ctx);
  return canvas;
};

var assvg = function() {
  function processInstructions(instruction) {
    var svgxml = "";
    for (var i = 0; i < instruction.length; i++) {
      if (Array.isArray(instruction[i])) {
        if (instruction[i].length) {
          svgxml += processInstructions.call(this, instruction[i]);
        }
      } else {
        if (typeof instruction[i] === "object") {
          var svg;
          if (instruction[i].type == "svg") {
            svg = instruction[i].svg;
          } else {
            switch (instruction[i].type) {
              case "path":
                svg = '<path d="' + instruction[i].d + '" ';
                break;
              case "circle":
                svg =
                  '<circle cx="' +
                  instruction[i].cx +
                  '" cy="' +
                  instruction[i].cy +
                  '" r="' +
                  instruction[i].r +
                  '" ';
                break;
              case "text":
                svg =
                  '<text x="' +
                  instruction[i].x +
                  '" y="' +
                  instruction[i].y +
                  '" text-anchor="' +
                  instruction[i].textanchor +
                  '" font-size="' +
                  instruction[i].fontsize +
                  '" font-family="' +
                  instruction[i].fontfamily +
                  '" ';
                if (instruction[i].fontweight)
                  svg += 'font-weight="' + instruction[i].fontweight + '" ';
                break;
              case "translate":
                svg =
                  '<g transform="translate(' +
                  instruction[i].x +
                  "," +
                  instruction[i].y +
                  ')" ';
                break;
              case "rotate":
                svg =
                  '<g transform="rotate(' +
                  instruction[i].degree +
                  "," +
                  instruction[i].x +
                  "," +
                  instruction[i].y +
                  ')" ';
                break;
              case "scale":
                svg = '<g transform="scale(' + instruction[i].factor + ')" ';
                break;
            }
            if (typeof instruction[i].stroke !== "undefined") {
              svg +=
                'stroke-width="' +
                (instruction[i].strokewidth || this.style.strokeWidth) +
                '" ';
              if (instruction[i].strokedasharray)
                svg +=
                  'stroke-dasharray="' + instruction[i].strokedasharray + '" ';
              if (instruction[i].linecap) {
                svg += 'stroke-linecap="' + instruction[i].linecap + '" ';
                svg += 'stroke-linejoin="' + instruction[i].linecap + '" ';
              }
              if (instruction[i].stroke) {
                svg += 'stroke="' + instruction[i].stroke + '" ';
              } else {
                svg += 'stroke="none" ';
              }
            }
            if (typeof instruction[i].fill !== "undefined")
              svg +=
                'fill="' +
                (instruction[i].fill ? instruction[i].fill : "none") +
                '" ';
            if (typeof instruction[i].fillopacity !== "undefined")
              svg += 'fill-opacity="' + instruction[i].fillopacity + '" ';
            svg += ">";
            switch (instruction[i].type) {
              case "path":
                svg += "</path>";
                break;
              case "circle":
                svg += "</circle>";
                break;
              case "text":
                svg += instruction[i].text + "</text>";
                break;
              case "translate":
                svg += processInstructions.call(this, instruction[i].draw);
                svg += "</g>";
                break;
              case "rotate":
                svg += processInstructions.call(this, instruction[i].draw);
                svg += "</g>";
                break;
              case "scale":
                svg += processInstructions.call(this, instruction[i].draw);
                svg += "</g>";
                break;
            }
          }
          svgxml += svg;
        }
      }
    }
    return svgxml;
  }
  var xml =
    '<svg xmlns="' +
    ms_1._svgNS +
    '" version="1.2" baseProfile="tiny" width="' +
    this.width +
    '" height="' +
    this.height +
    '" viewBox="' +
    (this.bbox.x1 - this.style.strokeWidth - this.style.outlineWidth) +
    " " +
    (this.bbox.y1 - this.style.strokeWidth - this.style.outlineWidth) +
    " " +
    this.baseWidth +
    " " +
    this.baseHeight +
    '">';
  xml += processInstructions.call(this, this.drawInstructions);
  xml += "</svg>";
  this.XML = xml;
  return xml;
};

var getcolors = function() {
  var baseFillColor =
    typeof this.style.colorMode === "object"
      ? this.style.colorMode
      : ms_1.getColorMode(this.style.colorMode);
  var baseFrameColor = ms_1.getColorMode("FrameColor");
  var baseIconColor = ms_1.getColorMode("IconColor");
  var baseIconFillColor = baseFillColor;
  var baseColorBlack = ms_1.getColorMode("Black");
  var baseColorWhite = ms_1.getColorMode("White");
  var baseColorOffWhite = ms_1.getColorMode("OffWhite");
  var baseColorNone = ms_1.getColorMode("None");

  //If it is a Civilian Symbol and civilian colors not are turned off, use civilian colors...
  if (this.style.civilianColor && this.properties.civilian) {
    baseFillColor.Friend = baseFillColor.Neutral = baseFillColor.Unknown =
      baseFillColor.Civilian;
    baseFrameColor.Friend = baseFrameColor.Neutral = baseFrameColor.Unknown =
      baseFrameColor.Civilian;
    baseIconColor.Friend = baseIconColor.Neutral = baseIconColor.Unknown =
      baseIconColor.Civilian;
  }
  //Joker and Faker
  if (this.properties.joker || this.properties.faker) {
    baseFillColor.Friend = baseFillColor.Hostile;
    baseFrameColor.Friend = baseFrameColor.Hostile;
    baseIconColor.Friend = baseIconColor.Hostile;
  }
  //If the user has specified a mono color to use for all symbols.
  if (this.style.monoColor != "") {
    baseFrameColor.Friend = baseFrameColor.Neutral = baseFrameColor.Hostile = baseFrameColor.Unknown = baseFrameColor.Civilian = this.style.monoColor;
    baseColorBlack = baseFrameColor;
    baseColorWhite = baseFillColor = baseColorNone;
  }

  var colors = {
    fillColor: baseFillColor,
    frameColor: baseFrameColor,
    iconColor: baseIconColor,
    iconFillColor: baseIconFillColor,
    none: baseColorNone,
    black: baseColorBlack,
    white: baseColorWhite
  };
  //Turn of the frame
  if (
    this.properties.frame /* || (!this.properties.frame && !this.style.icon)*/
  ) {
    colors.frameColor = baseColorBlack;
  } else {
    colors.frameColor = baseColorNone;
  }
  //Filled or not.
  if (this.properties.fill) {
    //I don't think you can have an unframed but filled icon so we turn off the fill as well, unless you have turned off the icon as well.
    colors.fillColor =
      !this.properties.frame && !(!this.properties.frame && !this.style.icon)
        ? baseColorNone
        : baseFillColor;
    colors.iconColor = baseColorBlack;
    //Dirty override, we want colors in the icon if we just turn off the frame. This is a special fix for filled icn in 2525.
    colors.iconFillColor = !this.properties.frame
      ? baseFillColor
      : baseColorOffWhite;
    colors.white = baseColorOffWhite;
  } else {
    colors.fillColor = baseColorNone;
    //Fix frame color if it should be turned off.
    colors.frameColor = !this.properties.frame ? baseColorNone : baseFrameColor;
    colors.iconColor = baseFrameColor;
    colors.iconFillColor = baseColorNone;
    //If everything turned off, make everything black.
    if (!this.properties.frame && !this.properties.fill && !this.style.icon) {
      colors.frameColor = baseColorBlack;
      colors.fillColor = baseColorBlack;
    }
    //Another dirty override to get correct 2525 colors for special symbols with filled icn.
    //Colors.black = baseFrameColor;
  }
  return colors;
};

//var ms = require("../ms.js");

var getoptions = function(includeStyle) {
  var key;
  var options = {};
  for (key in this.options) {
    if (!this.options.hasOwnProperty(key)) continue;
    // clone all options
    options[key] = this.options[key];
  }
  if (includeStyle || typeof includeStyle === "undefined") {
    for (key in this.style) {
      if (!this.style.hasOwnProperty(key)) continue;
      // clone all styles
      options[key] = this.style[key];
    }
  }
  return options;
};

var getproperties = function() {
  var properties = {
    activity: false, //Is it an Activity
    affiliation: "", //Affiliation it is shown as (Friend/Hostile...)
    baseAffilation: "", //Affiliation it belongs to (Friend/Hostile...)
    baseDimension: "", //Dimension it belongs to (Air/Ground...)
    baseGeometry: { g: "", bbox: {} }, //Geometry is a combination of dimension and affiliation (AirFriend/GroundHostile...)
    civilian: false, //Is it Civilian
    condition: "", //What condition is it in
    context: "", //Context of the symbol (Reality/Exercise...)
    dimension: "", //Dimension it is shown as (Air/Ground...)
    dimensionUnknown: false, //Is the dimension unknown
    echelon: "", //What echelon (Platoon/Company...)
    faker: false, //Is it a Faker
    fenintDummy: false, //Is it a feint/dummy
    fill: this.style.fill, //Standard says it should be filled
    frame: this.style.frame, //Standard says it should be framed
    functionid: "", //Part of SIDC referring to the icon.
    headquarters: false, //Is it a Headquarters
    //"iconBottom"		: 100,		//The bottom of the icon
    installation: false, //Is it an Instalation
    joker: false, //Is it a Joker
    mobility: "", //What mobility (Tracked/Sled)
    notpresent: "", //Is it Anticipated or Pending
    numberSIDC: false, //Is the SIDC number based
    space: false, //Is it in Space
    taskForce: false //Is it a task force
  };
  var mapping = {};
  mapping.context = ["Reality", "Exercise", "Simulation"];
  mapping.status = [
    "Present",
    "Planned",
    "FullyCapable",
    "Damaged",
    "Destroyed",
    "FullToCapacity"
  ];
  mapping.echelonMobility = {
    "11": "Team/Crew",
    "12": "Squad",
    "13": "Section",
    "14": "Platoon/detachment",
    "15": "Company/battery/troop",
    "16": "Battalion/squadron",
    "17": "Regiment/group",
    "18": "Brigade",
    "21": "Division",
    "22": "Corps/MEF",
    "23": "Army",
    "24": "Army Group/front",
    "25": "Region/Theater",
    "26": "Command",
    "31": "Wheeled limited cross country",
    "32": "Wheeled cross country",
    "33": "Tracked",
    "34": "Wheeled and tracked combination",
    "35": "Towed",
    "36": "Rail",
    "37": "Pack animals",
    "41": "Over snow (prime mover)",
    "42": "Sled",
    "51": "Barge",
    "52": "Amphibious",
    "61": "Short towed array",
    "62": "Long towed Array",
    "71": "Leader Individual",
    "72": "Deputy Individual"
  };

  mapping.affiliation = ["Hostile", "Friend", "Neutral", "Unknown"];
  mapping.dimension = ["Air", "Ground", "Sea", "Subsurface"];

  properties.context = mapping.context[0];

  if (this.style.monoColor != "") {
    properties.fill = false;
  }
  this.options.sidc = String(this.options.sidc)
    .replace(/\*/g, "-")
    .replace(/ /g, "");

  properties.numberSIDC = !isNaN(this.options.sidc);
  if (properties.numberSIDC) {
    //This is for new number based SIDCs

    if (typeof ms_1._getNumberProperties === "function") {
      properties = ms_1._getNumberProperties.call(this, properties, mapping);
    } else {
      console.warn(
        "ms._getNumberProperties() is not present, you will need to load functionality for letter based SIDCs"
      );
    }
  } else {
    //This would be old letter based SIDCs

    if (typeof ms_1._getLetterProperties === "function") {
      properties = ms_1._getLetterProperties.call(this, properties, mapping);
    } else {
      console.warn(
        "ms._getNumberProperties() is not present, you will need to load functionality for letter based SIDCs"
      );
    }
  }

  if (
    ms_1._symbolGeometries.hasOwnProperty(
      properties.dimension + properties.affiliation
    )
  ) {
    properties.baseGeometry =
      ms_1._symbolGeometries[properties.dimension + properties.affiliation];
  } else {
    properties.baseGeometry.bbox = new ms_1.BBox();
  }
  //If both frame and icon is turned off we should just have a position marker
  if (!this.style.frame && !this.style.icon) {
    properties.baseGeometry = ms_1._symbolGeometries.PositionMarker;
  }

  return properties;
};

var getsize = function() {
  if (typeof this.width === "undefined" || typeof this.height === "undefined") {
    this.updateSymbol();
  }
  return { width: this.width, height: this.height };
};

//var ms = require("../ms.js");

var getStyle = function() {
  var key;
  var options = {};
  for (key in this.style) {
    if (!this.style.hasOwnProperty(key)) continue;
    // clone all styles
    options[key] = this.style[key];
  }

  return options;
};

var isvalid = function(extended) {
  var drawInstructions =
    JSON.stringify(this.drawInstructions).indexOf("null") != -1;

  if (extended) {
    return {
      drawInstructions: drawInstructions,
      icon: this._validIcon,
      mobility: this.properties.mobility != undefined
    };
  } else {
    return (
      drawInstructions &&
      this._validIcon &&
      this.properties.mobility != undefined
    );
  }
};

var setoptions = function() {
  var i;
  for (i = 0; i < arguments.length; i++) {
    var options = arguments[i];
    if (typeof options === "object") {
      for (var key in options) {
        if (!options.hasOwnProperty(key)) continue;
        if (key === "SIDC") {
          // backward compability
          this.options.sidc = options[key];
          continue;
        }
        if (this.style.hasOwnProperty(key)) {
          this.style[key] = options[key];
        } else {
          this.options[key] = options[key];
        }
      }
    } else {
      // if there just is something not an object, we asume that it is the SIDC
      this.options.sidc = options;
    }
  }
  // Reset if the icon is valid
  this._validIcon = true;

  //Updating the object with properties of the marker
  this.properties = this.getProperties();

  //Updating the object with colors
  this.colors = this.getColors();

  this.drawInstructions = [];

  this.bbox = new ms_1.BBox();
  //Processing all parts of the marker, adding them to the drawinstruction and updating the boundingbox
  for (i in ms_1._symbolParts) {
    if (!ms_1._symbolParts.hasOwnProperty(i)) continue;
    var m = ms_1._symbolParts[i].call(this);
    if (!m.pre) continue;
    if (m.pre.length > 0) {
      while (m.pre.length == 1) {
        m.pre = m.pre[0];
      }
      if (m.pre.length != 0) {
        this.drawInstructions = [].concat(m.pre, this.drawInstructions);
      }
    }
    if (m.post.length > 0) {
      while (m.post.length == 1) {
        m.post = m.post[0];
      }
      if (m.post.length != 0) {
        this.drawInstructions = this.drawInstructions.concat(m.post);
      }
    }
    if (typeof m.bbox === "object") {
      this.bbox.merge(m.bbox);
    }
  }

  this.baseWidth =
    this.bbox.width() +
    Number(this.style.strokeWidth * 2) +
    Number(this.style.outlineWidth * 2); //Adding the stoke width as margins and a little bit extra
  this.baseHeight =
    this.bbox.height() +
    Number(this.style.strokeWidth * 2) +
    Number(this.style.outlineWidth * 2); //Adding the stoke width as margins and a little bit extra

  this.width = this.baseWidth * this.style.size / 100;
  this.height = this.baseHeight * this.style.size / 100;

  var anchor = { x: 100, y: 100 };
  this.octagonAnchor = {
    x:
      (anchor.x -
        this.bbox.x1 +
        parseFloat(this.style.strokeWidth) +
        parseFloat(this.style.outlineWidth)) *
      this.style.size /
      100,
    y:
      (anchor.y -
        this.bbox.y1 +
        parseFloat(this.style.strokeWidth) +
        parseFloat(this.style.outlineWidth)) *
      this.style.size /
      100
  };
  //If it is a headquarters the anchor should be at the end of the staf
  if (this.properties.headquarters) {
    var hqStafLength = this.hqStafLength || ms_1._hqStafLength;
    anchor = {
      x: this.properties.baseGeometry.bbox.x1,
      y: this.properties.baseGeometry.bbox.y2 + hqStafLength
    };
  }
  this.markerAnchor = {
    x:
      (anchor.x -
        this.bbox.x1 +
        parseFloat(this.style.strokeWidth) +
        parseFloat(this.style.outlineWidth)) *
      this.style.size /
      100,
    y:
      (anchor.y -
        this.bbox.y1 +
        parseFloat(this.style.strokeWidth) +
        parseFloat(this.style.outlineWidth)) *
      this.style.size /
      100
  };

  if (ms_1.autoSVG) this.asSVG();

  return this;
};

function symbol() {
  //=======================================================================================
  this.options = {}; //initiate options object.
  this.style = {}; //initiate style object.
  /*if (typeof option1 != "object") {
    // The SIDC for the symbol.
    this.options.sidc = option1;
  } else {
    // Enable to initiate directly with an options object.
    options = option1;
  }*/
  // Setting default values for options
  // TODO place all of these in a style object
  this.style.size = 100; // The symbol size is actually the L variable in the symbols so the symbol will be larger than this size.
  this.style.fill = true; // Should the icon be filled with color
  this.style.fillOpacity = 1; // Possibility to change the fill opacity
  this.style.frame = true; // Should the icon be framed
  this.style.hqStafLength = 0; // The default length of the HQ staf
  this.style.strokeWidth = 4; // The stroke width of he icon frame.
  this.style.outlineColor = "rgb(239, 239, 239)"; // Color of the outline
  this.style.outlineWidth = 0; // Width of the outline.
  this.style.icon = true; // Should we display the icon?
  this.style.monoColor = ""; // Should the icon be monocromatic and if so what color
  this.style.civilianColor = true; // Should we use the Civilian Purple defined in 2525? (We set this to default because I like the color.
  this.style.colorMode = "Light"; // 2525C Allows you to use Dark; Medium or Light colors. The values you can set are "Dark";"Medium" or "Light"
  this.style.infoColor = ""; // Changes the color of the info fields
  this.style.infoFields = true; // If you have set all info fields but don't want the displayed; then just set this to false.
  this.style.infoSize = 40; // Relative size of the info fields
  this.style.alternateMedal = false; // 2525D lets you choose between MEDAL icn and alternate MEDAL icn for Mines; default is set to MEDAL.

  // TODO place all of these in a fields object
  this.options.quantity = ""; // FieldID C
  this.options.reinforcedReduced = ""; // FieldID F
  this.options.staffComments = ""; // FieldID G
  this.options.additionalInformation = ""; // FieldID H
  this.options.evaluationRating = ""; // FieldID J
  this.options.combatEffectiveness = ""; // FieldID K
  this.options.signatureEquipment = ""; // FieldID L
  this.options.higherFormation = ""; // FieldID M
  this.options.hostile = ""; // FieldID N
  this.options.iffSif = ""; // FieldID P
  this.options.direction = ""; // FieldID Q
  this.options.sigint = ""; // FieldID R2
  this.options.uniqueDesignation = ""; // FieldID T
  this.options.type = ""; // FieldID V
  this.options.dtg = ""; // FieldID W
  this.options.altitudeDepth = ""; // FieldID X
  this.options.location = ""; // FieldID Y
  this.options.speed = ""; // FieldID Z
  this.options.specialHeadquarters = ""; // FieldID AA
  this.options.platformType = ""; // FieldID AD
  this.options.equipmentTeardownTime = ""; // FieldID AE
  this.options.commonIdentifier = ""; // FieldID AF
  this.options.auxiliaryEquipmentIndicator = ""; // FieldID AG
  this.options.headquartersElement = ""; // FieldID AH
  // Not implemented.
  // FieldID AM Distance
  // FieldID AN Azimuth
  // FieldID AO EngagementBar

  this.bbox = new ms_1.BBox(); // Contains the bounding box of the current marker
  this.colors = {}; // Contains the colors for the current marker
  this._validIcon = true; // If we were able to find a valid icon or not.
  this.markerAnchor = { x: 50, y: 50 }; // The anchor point for the current marker
  this.octagonAnchor = { x: 50, y: 50 }; // The anchor point for the octagon for the current marker
  this.properties = {}; // Properties of the current marker
  // Initiate symbol.
  if (arguments.length > 0) {
    this.setOptions.apply(this, arguments);
  }
}

// This is here so that we have it initiated in this.symbol from the beginning
symbol.prototype.asCanvas = ascanvas;
symbol.prototype.asDOM = function() {
  return ms_1._parseXML(this.asSVG());
};
symbol.prototype.asSVG = assvg;
symbol.prototype.getAnchor = function() {
  return this.markerAnchor;
};
symbol.prototype.getColors = getcolors;
symbol.prototype.getOctagonAnchor = function() {
  return this.octagonAnchor;
};
symbol.prototype.getOptions = getoptions;
symbol.prototype.getProperties = getproperties;
symbol.prototype.getSize = getsize;
symbol.prototype.getStyle = getStyle;
symbol.prototype.isValid = isvalid;
symbol.prototype.setOptions = setoptions;
symbol.prototype.toDataURL = function() {
  return "data:image/svg+xml;base64," + window.btoa(this.asSVG());
};
/*
// For backward compability
symbol.prototype.asImage = function() {
  console.warn(
    "asImage() is deprecated and should not be used, use toDataURL() instead."
  );
  return this.toDataURL.call(this);
};
symbol.prototype.getMarker = function() {
  console.warn(
    "getMarker() is deprecated and should not be used, in most cases its not needed and you can use setOptions() instead."
  );
  return this.setOptions.call(this);
};
*/
var ms_symbol = symbol;

var light = new ms_1.ColorMode(
  "rgb(255,161,255)",
  "rgb(128,224,255)",
  "rgb(255,128,128)",
  "rgb(170,255,170)",
  "rgb(255,255,128)"
);

var medium = new ms_1.ColorMode(
  "rgb(128,0,128)",
  "rgb(0,168,220)",
  "rgb(255,48,49)",
  "rgb(0,226,110)",
  "rgb(255,255,0)"
);

var dark = new ms_1.ColorMode(
  "rgb(80,0,80)",
  "rgb(0,107,140)",
  "rgb(200,0,0)",
  "rgb(0,160,0)",
  "rgb(225,220,0)"
);

var framecolor = new ms_1.ColorMode(
  "rgb(255,0,255)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(255, 255, 0)"
);

var iconcolor = new ms_1.ColorMode(
  "rgb(255,0,255)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(255, 255, 0)"
);

var black = new ms_1.ColorMode("black", "black", "black", "black", "black");

var white = new ms_1.ColorMode("white", "white", "white", "white", "white");

var offwhite = new ms_1.ColorMode(
  "rgb(239, 239, 239)",
  "rgb(239, 239, 239)",
  "rgb(239, 239, 239)",
  "rgb(239, 239, 239)",
  "rgb(239, 239, 239)"
);

var none = new ms_1.ColorMode(false, false, false, false, false);

var properties = function(properties, mapping) {
  this.options.sidc = this.options.sidc.toUpperCase();

  var codingscheme =
    this.options.sidc.charAt(0) != "" ? this.options.sidc.charAt(0) : "-";
  var affiliation =
    this.options.sidc.charAt(1) != "" ? this.options.sidc.charAt(1) : "-";
  var battledimension =
    this.options.sidc.charAt(2) != "" ? this.options.sidc.charAt(2) : "-";
  var status =
    this.options.sidc.charAt(3) != "" ? this.options.sidc.charAt(3) : "-";
  var functionid = (properties.functionid =
    this.options.sidc.substr(4, 6) != ""
      ? this.options.sidc.substr(4, 6)
      : "------");
  var symbolmodifier11 =
    this.options.sidc.charAt(10) != "" ? this.options.sidc.charAt(10) : "-";
  var symbolmodifier12 =
    this.options.sidc.charAt(11) != "" ? this.options.sidc.charAt(11) : "-";
  /*
  var countrycode = this.options.sidc.substr(12, 2) != ""
    ? this.options.sidc.substr(12, 2)
    : "--";
  var orderofbattle = this.options.sidc.charAt(14) != "" ? this.options.sidc.charAt(14) : "-";
  */
  if (["H", "S", "J", "K"].indexOf(affiliation) > -1)
    properties.affiliation = mapping.affiliation[0];
  if (["F", "A", "D", "M"].indexOf(affiliation) > -1)
    properties.affiliation = mapping.affiliation[1];
  if (["N", "L"].indexOf(affiliation) > -1)
    properties.affiliation = mapping.affiliation[2];
  if (["P", "U", "G", "W", "O"].indexOf(affiliation) > -1)
    properties.affiliation = mapping.affiliation[3];

  if (["P", "A"].indexOf(battledimension) > -1)
    properties.dimension = mapping.dimension[0];
  if (["G", "Z", "F", "X"].indexOf(battledimension) > -1)
    properties.dimension = mapping.dimension[1];
  if (["S"].indexOf(battledimension) > -1)
    properties.dimension = mapping.dimension[2];
  if (["U"].indexOf(battledimension) > -1)
    properties.dimension = mapping.dimension[3];

  //dimension is in Space
  if (battledimension == "P" && codingscheme != "O") properties.space = true;
  //codingscheme that are Activities
  if (codingscheme == "O" && ["V", "O", "R"].indexOf(battledimension) > -1) {
    properties.activity = true;
  }
  //symbolmodifier11 that are Installations
  if (symbolmodifier11 == "H") properties.installation = true;
  //Planned/Anticipated/Suspect symbols should have a dashed outline
  if (this.style.frame && status == "A")
    properties.notpresent = ms_1._dashArrays.anticipated;
  if (this.style.frame && ["P", "A", "S", "G", "M"].indexOf(affiliation) > -1) {
    properties.notpresent = ms_1._dashArrays.pending;
  }
  //Should it have a Condition Bar
  if (status == "C") properties.condition = mapping.status[2];
  if (status == "D") properties.condition = mapping.status[3];
  if (status == "X") properties.condition = mapping.status[4];
  if (status == "F") properties.condition = mapping.status[5];
  //Is it part of Exercise Symbols
  if (["G", "W", "D", "L", "M", "J", "K"].indexOf(affiliation) > -1) {
    properties.context = mapping.context[1];
  }
  //Framing of SO tactical symbols differs slightly from C2 Symbology: UEI tactical symbols in that there is only one battle dimension: ground.
  if (codingscheme == "O") properties.dimension = mapping.dimension[1];
  //Framing of EMS tactical symbols differs slightly from C2 Symbology: UEI tactical symbols in that there is only one battle dimension: ground.
  if (codingscheme == "E") properties.dimension = mapping.dimension[1];
  //First save the dimensionType and affiliationType before we modifies it...
  properties.baseDimension = properties.dimension;
  properties.baseAffilation = properties.affiliation;
  //Joker and faker should have the shape of friendly
  if (affiliation == "J") properties.joker = true;
  if (affiliation == "K") properties.faker = true;
  if (properties.joker || properties.faker) {
    properties.affiliation = mapping.affiliation[1];
  }
  //Ground Equipment should have the same geometry as sea Friend...
  if (
    codingscheme == "S" &&
    battledimension == "G" &&
    functionid.charAt(0) == "E"
  )
    properties.dimension = mapping.dimension[2];
  //Signal INTELLIGENCE Ground should have the same geometry as sea Friend...
  if (codingscheme == "I" && battledimension == "G")
    properties.dimension = mapping.dimension[2];
  //Some EMS symbosls should have the same geometry as sea Friend...
  if (
    codingscheme == "E" &&
    ((battledimension == "O" &&
      [
        "AB----",
        "AE----",
        "AF----",
        "BB----",
        "CB----",
        "CC----",
        "DB----",
        "DDB---",
        "DEB---",
        "DFB---",
        "DGB---",
        "DHB---",
        "DIB---",
        "DJB---",
        "DLB---",
        "DMB---",
        "DOB---",
        "EA----",
        "EB----",
        "EC----",
        "ED----",
        "EE----"
      ].indexOf(functionid) > -1) ||
      (battledimension == "F" &&
        ["BA----", "MA----", "MC----"].indexOf(functionid) > -1))
  ) {
    properties.dimension = mapping.dimension[2];
  }
  //Setting up Headquarters/task force/dummy
  if (
    ["F", "G", "C", "D"].indexOf(symbolmodifier11) > -1 ||
    (symbolmodifier11 == "H" && symbolmodifier12 == "B")
  ) {
    properties.feintDummy = true;
  }
  if (["A", "B", "C", "D"].indexOf(symbolmodifier11) > -1) {
    properties.headquarters = true;
  }
  if (["E", "B", "G", "D"].indexOf(symbolmodifier11) > -1) {
    properties.taskForce = true;
  }
  //Setting up Echelon/Mobility/Towed Array Amplifier
  if (symbolmodifier12 == "A") properties.echelon = mapping.echelonMobility[11]; //Team/Crew
  if (symbolmodifier12 == "B" && symbolmodifier11 != "H") {
    properties.echelon = mapping.echelonMobility[12]; //Squad
  }
  if (symbolmodifier12 == "C") properties.echelon = mapping.echelonMobility[13]; //Section
  if (symbolmodifier12 == "D") properties.echelon = mapping.echelonMobility[14]; //Platoon/detachment
  if (symbolmodifier12 == "E") properties.echelon = mapping.echelonMobility[15]; //Company/battery/troop
  if (symbolmodifier12 == "F") properties.echelon = mapping.echelonMobility[16]; //Battalion/squadron
  if (symbolmodifier12 == "G") properties.echelon = mapping.echelonMobility[17]; //Regiment/group
  if (symbolmodifier12 == "H") properties.echelon = mapping.echelonMobility[18]; //Brigade
  if (symbolmodifier12 == "I") properties.echelon = mapping.echelonMobility[21]; //Division
  if (symbolmodifier12 == "J") properties.echelon = mapping.echelonMobility[22]; //Corps/MEF
  if (symbolmodifier12 == "K") properties.echelon = mapping.echelonMobility[23]; //Army
  if (symbolmodifier12 == "L" && symbolmodifier11 != "N") {
    properties.echelon = mapping.echelonMobility[24]; //Army Group/front
  }
  if (symbolmodifier12 == "M") properties.echelon = mapping.echelonMobility[25]; //Region/Theater
  if (symbolmodifier12 == "N") properties.echelon = mapping.echelonMobility[26]; //Command
  if (symbolmodifier11 == "M") {
    switch (symbolmodifier12) {
      case "O":
        properties.mobility = mapping.echelonMobility[31]; //Wheeled limited cross country
        break;
      case "P":
        properties.mobility = mapping.echelonMobility[32]; //Wheeled cross country
        break;
      case "Q":
        properties.mobility = mapping.echelonMobility[33]; //Tracked
        break;
      case "R":
        properties.mobility = mapping.echelonMobility[34]; //Wheeled and tracked combination
        break;
      case "S":
        properties.mobility = mapping.echelonMobility[35]; //Towed
        break;
      case "T":
        properties.mobility = mapping.echelonMobility[36]; //Rail
        break;
      case "U":
        properties.mobility = mapping.echelonMobility[41]; //Over snow (prime mover)
        break;
      case "V":
        properties.mobility = mapping.echelonMobility[42]; //Sled
        break;
      case "W":
        properties.mobility = mapping.echelonMobility[37]; //Pack animals
        break;
      case "Y":
        properties.mobility = mapping.echelonMobility[51]; //Barge
        break;
      case "Z":
        properties.mobility = mapping.echelonMobility[52]; //Amphibious
        break;
      default:
        properties.mobility = undefined;
    }
  }
  if (symbolmodifier11 == "N") {
    switch (symbolmodifier12) {
      case "S":
        properties.mobility = mapping.echelonMobility[61]; //Short towed array
        break;
      case "L":
        properties.mobility = mapping.echelonMobility[62]; //Long towed Array
        break;
      default:
        properties.mobility = undefined;
    }
  }
  //This is for 2525
  //Civilian stuff
  if (
    (battledimension == "A" && functionid.charAt(0) == "C") ||
    (battledimension == "G" && functionid.substring(0, 3) == "EVC") ||
    (battledimension == "S" && functionid.charAt(0) == "X")
  ) {
    properties.civilian = true;
  }
  //Colors will be have to be fixed in symbolColors
  if (battledimension == "Z" || battledimension == "X") {
    if (["P", "U", "F", "N", "H", "A", "S", "G", "W"].indexOf(affiliation) > -1)
      properties.dimensionUnknown = true;
    //To get the correct geometry for a lot of stuff later we will have to modify the affliationType.
    if (["F", "A"].indexOf(affiliation) > -1) properties.dimension = "Sea";
    //If battle dimension is unknown and the affiliation is D,L,M,J,K we should not have a symbol
    if (["D", "L", "M", "J", "K"].indexOf(affiliation) > -1)
      properties.affiliation = "none";
  }
  //Forcing unframing of symbols that shouldn't have a frame.
  if (
    battledimension == "S" &&
    [
      "O-----",
      "ED----",
      "EP----",
      "EV----",
      "ZM----",
      "ZN----",
      "ZI----"
    ].indexOf(functionid) > -1
  ) {
    properties.frame = false;
  }
  if (
    codingscheme == "E" &&
    battledimension == "N" &&
    [
      "AA----",
      "AB----",
      "AC----",
      "AD----",
      "AE----",
      "AG----",
      "BB----",
      "BC----",
      "BF----",
      "BM----",
      "-C-----",
      "CA----",
      "CB----",
      "CC----",
      "CD----",
      "CE----"
    ].indexOf(functionid) > -1
  ) {
    properties.frame = false;
  }

  //We have some special symbols that should be unframed but filled, like mines, let us fix them.
  if (
    battledimension == "U" &&
    [
      "WM----",
      "WMD---",
      "WMG---",
      "WMGD--",
      "WMGX--",
      "WMGE--",
      "WMGC--",
      "WMGR--",
      "WMGO--",
      "WMM---",
      "WMMD--",
      "WMMX--",
      "WMME--",
      "WMMC--",
      "WMMR--",
      "WMMO--",
      "WMF---",
      "WMFD--",
      "WMFX--",
      "WMFE--",
      "WMFC--",
      "WMFR--",
      "WMFO--",
      "WMO---",
      "WMOD--",
      "WMX---",
      "WME---",
      "WMA---",
      "WMC---",
      "WMR---",
      "WMB---",
      "WMBD--",
      "WMN---",
      "WMS---",
      "WMSX--",
      "WMSD--",
      "WD----",
      "WDM---",
      "WDMG--",
      "WDMM--",
      "ND----",
      "E-----",
      "V-----",
      "X-----",
      "NBS---",
      "NBR---",
      "NBW---",
      "NM----",
      "NA----"
    ].indexOf(functionid) > -1
  ) {
    if (ms_1._STD2525) {
      properties.fill = false;
      if (properties.functionid == "WD----") {
        properties.fill = true;
      }
      if (
        ["ND----", "NBS---", "NBR---", "NBW---", "NM----", "NA----"].indexOf(
          functionid
        ) > -1
      ) {
        properties.fill = true;
        properties.frame = false;
      }
    } else {
      properties.frame = false;
      if (["E-----", "V-----", "X-----"].indexOf(functionid) > -1) {
        properties.fill = false;
        properties.frame = false;
      }
    }
  }

  //Some symbols in EMS and symbols from tactical graphics
  if (
    this.options.sidc.substr(0, 3) == "WAS" ||
    this.options.sidc.substr(0, 3) == "WOS" ||
    codingscheme == "G"
  ) {
    properties.frame = false;
  }

  //This is for APP6 tactical points with frames
  if (
    codingscheme == "G" &&
    battledimension == "O" &&
    ["V", "L", "P", "I"].indexOf(functionid.charAt(0)) > -1
  ) {
    properties.frame = true;
    properties.dimension = mapping.dimension[1];
  }

  return properties;
};

var geticon = function(iconParts, STD2525) {
  var iconSIDC = {};
  var iconBbox = {};

  for (var i in ms_1._letterSIDCicons) {
    if (!ms_1._letterSIDCicons.hasOwnProperty(i)) continue;
    ms_1._letterSIDCicons[i].call(this, iconSIDC, iconBbox, iconParts, STD2525);
  }
  return { icons: iconSIDC, bbox: iconBbox };
};

//var ms = require("../ms.js");

var iconsSpace = function space(sId, bbox, icn, _STD2525) {
  // SPACE =========================================================================
  sId["S-P-------"] = [];
  sId["S-P-S-----"] = [icn["SP.I.FF.SATELLITE"]];
  sId["S-P-V-----"] = [icn["SP.I.FF.CREWED SPACE VEHICLE"]];
  sId["S-P-T-----"] = [icn["SP.I.FF.SPACE STATION"]];
  sId["S-P-L-----"] = [icn["SP.I.SPACE LAUNCH VEHICLE"]];
};

//var ms = require("../ms.js");

var iconsAir = function air(sId, bbox, icn, _STD2525) {
  // AIR ===========================================================================
  sId["S-A-------"] = [];
  sId["S-A-M-----"] = [icn["AR.I.MILITARY"]];
  sId["S-A-MF----"] = [icn["AR.I.FF.MILITARY FIXED WING"]];
  sId["S-A-MFB---"] = [icn["AR.I.BOMBER"]];
  sId["S-A-MFF---"] = [icn["AR.I.FIGHTER"]];
  sId["S-A-MFFI--"] = [icn["AR.I.FIGHTER INTERCEPTOR"]];
  sId["S-A-MFT---"] = [icn["AR.I.TRAINER"]];
  sId["S-A-MFA---"] = [icn["AR.I.ATTACK/STRIKE"]];
  sId["S-A-MFL---"] = [icn["AR.I.VSTOL"]];
  sId["S-A-MFK---"] = [icn["AR.I.TANKER"]];
  sId["S-A-MFKB--"] = [icn["AR.I.TANKER"], icn["AIR.M1.BOOM-ONLY"]];
  sId["S-A-MFKD--"] = [icn["AR.I.TANKER"], icn["AIR.M1.DROUGE-ONLY"]];
  sId["S-A-MFC---"] = [icn["AR.I.CARGO"]];
  sId["S-A-MFCL--"] = [icn["AR.I.CARGO"], icn["AIR.M2.LIGHT"]];
  sId["S-A-MFCM--"] = [icn["AR.I.CARGO"], icn["AIR.M2.MEDIUM"]];

  sId["S-A-MFCH--"] = [icn["AR.I.CARGO"], icn["AIR.M2.HEAVY"]];
  sId["S-A-MFJ---"] = [icn["AR.I.JAMMER / ELECTRONIC COUNTER-MEASURES"]];
  sId["S-A-MFO---"] = [icn["AR.I.MEDICAL EVACUATION"]];
  sId["S-A-MFR---"] = [icn["AR.I.RECONNAISSANCE"]];
  sId["S-A-MFRW--"] = [icn["AR.I.AIRBORNE EARLY WARNING"]];
  sId["S-A-MFRZ--"] = [icn["AR.I.ELECTRONIC SUPPORT MEASURES"]];
  sId["S-A-MFRX--"] = [
    (_STD2525 ? icn["AR.I.2525 PHOTOGRAPHIC"] : icn["AR.I.RECONNAISSANCE"], icn["AIR.M2.PHOTOGRAPHIC"])
  ];
  sId["S-A-MFP---"] = [icn["AR.I.PATROL"]];
  sId["S-A-MFPN--"] = [icn["AR.I.ANTISURFACE WARFARE"]];
  sId["S-A-MFPM--"] = [icn["AR.I.MINE COUNTERMEASURES"]];
  sId["S-A-MFU---"] = [icn["AR.I.UTILITY"]];
  sId["S-A-MFUL--"] = [icn["AR.I.UTILITY"], icn["AIR.M2.LIGHT"]];
  sId["S-A-MFUM--"] = [icn["AR.I.UTILITY"], icn["AIR.M2.MEDIUM"]];
  sId["S-A-MFUH--"] = [icn["AR.I.UTILITY"], icn["AIR.M2.HEAVY"]];
  sId["S-A-MFY---"] = [icn["AR.I.COMMUNICATIONS"]];
  sId["S-A-MFH---"] = [icn["AR.I.PERSONNEL RECOVERY"]];
  sId["S-A-MFD---"] = [icn["AR.I.AIRBORNE COMMAND POST"]];
  sId["S-A-MFQ---"] = [icn["AR.I.UNMANNED AERIAL VEHICLE"]];
  sId["S-A-MFQA--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.ATTACK"]
  ];
  sId["S-A-MFQB--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.BOMBER"]
  ];
  sId["S-A-MFQC--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.CARGO"]
  ];
  sId["S-A-MFQD--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.AIRBORNE COMMAND POST"]
  ];
  sId["S-A-MFQF--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.FIGHTER"]
  ];
  sId["S-A-MFQH--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.COMBAT SEARCH AND RESCUE"]
  ];
  sId["S-A-MFQJ--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES"]
  ];
  sId["S-A-MFQK--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.TANKER"]
  ];
  sId["S-A-MFQL--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.VSTOL"]
  ];
  sId["S-A-MFQM--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
  ];
  sId["S-A-MFQI--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.MINE COUNTERMEASURES"]
  ];
  sId["S-A-MFQN--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.ANTISURFACE WARFARE"]
  ];
  sId["S-A-MFQP--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.PATROL"]
  ];
  sId["S-A-MFQR--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.RECONNAISSANCE"]
  ];
  sId["S-A-MFQRW-"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.AIRBORNE EARLY WARNING"]
  ];
  sId["S-A-MFQRZ-"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.ELECTRONIC SURVEILLANCE MEASURES"]
  ];
  sId["S-A-MFQRX-"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.PHOTOGRAPHIC"]
  ];
  sId["S-A-MFQS--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.ANTISUBMARINE WARFARE"]
  ];
  sId["S-A-MFQT--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.TRAINER"]
  ];
  sId["S-A-MFQU--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.UTILITY"]
  ];
  sId["S-A-MFQY--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.COMMUNICATIONS"]
  ];
  sId["S-A-MFQO--"] = [
    icn["AR.I.UNMANNED AERIAL VEHICLE"],
    icn["AIR.M1.MEDEVAC"]
  ];
  sId["S-A-MFS---"] = [icn["AR.I.ANTISUBMARINE WARFARE"]];
  sId["S-A-MFM---"] = [icn["AR.I.SPECIAL OPERATIONS FORCES"]];
  sId["S-A-MH----"] = [icn["AR.I.MILITARY ROTARY WING"]];
  sId["S-A-MHA---"] = [icn["AR.I.MILITARY ROTARY WING"], icn["AIR.M1.ATTACK"]];
  sId["S-A-MHS---"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.ANTISUBMARINE WARFARE"]
  ];
  sId["S-A-MHU---"] = [icn["AR.I.MILITARY ROTARY WING"], icn["AIR.M1.UTILITY"]];
  sId["S-A-MHUL--"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.UTILITY"],
    icn["AIR.M2.LIGHT"]
  ];
  sId["S-A-MHUM--"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.UTILITY"],
    icn["AIR.M2.MEDIUM"]
  ];
  sId["S-A-MHUH--"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.UTILITY"],
    icn["AIR.M2.HEAVY"]
  ];
  sId["S-A-MHI---"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.MINE COUNTERMEASURES"]
  ];
  sId["S-A-MHH---"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.COMBAT SEARCH AND RESCUE"]
  ];
  sId["S-A-MHR---"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.RECONNAISSANCE"]
  ];
  sId["S-A-MHQ---"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.UNMANNED AERIAL VEHICLE"]
  ];
  sId["S-A-MHC---"] = [icn["AR.I.MILITARY ROTARY WING"], icn["AIR.M1.CARGO"]];
  sId["S-A-MHCL--"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.CARGO"],
    icn["AIR.M2.LIGHT"]
  ];
  sId["S-A-MHCM--"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.CARGO"],
    icn["AIR.M2.MEDIUM"]
  ];
  sId["S-A-MHCH--"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.CARGO"],
    icn["AIR.M2.HEAVY"]
  ];
  sId["S-A-MHT---"] = [icn["AR.I.MILITARY ROTARY WING"], icn["AIR.M1.TRAINER"]];
  sId["S-A-MHO---"] = [icn["AR.I.MILITARY ROTARY WING"], icn["AIR.M1.MEDEVAC"]];
  sId["S-A-MHM---"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
  ];
  sId["S-A-MHD---"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.AIRBORNE COMMAND POST"]
  ];
  sId["S-A-MHK---"] = [icn["AR.I.MILITARY ROTARY WING"], icn["AIR.M1.TANKER"]];
  sId["S-A-MHJ---"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES"]
  ];
  sId["S-A-ML----"] = [icn["AR.I.FF.MILITARY BALLOON"]];
  sId["S-A-MV----"] = [icn["AR.I.VIP"]];
  sId["S-A-ME----"] = [icn["AR.I.ESCORT"]];
  sId["S-A-W-----"] = [icn["AIR.MISSILE.ICON"]];
  sId["S-A-WM----"] = [icn["AIR.MISSILE.ICON"]];
  sId["S-A-WMS---"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.SURFACE"],
    icn["AIR.MISSILE.M2.LAUNCHED"]
  ];
  sId["S-A-WMSS--"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.SURFACE"],
    icn["AIR.MISSILE.M2.SURFACE"]
  ];
  sId["S-A-WMSA--"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.SURFACE"],
    icn["AIR.MISSILE.M2.AIR"]
  ];
  sId["S-A-WMSU--"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.SURFACE"],
    icn["AIR.MISSILE.M2.SUBSURFACE"]
  ];
  sId["S-A-WMSB--"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.IC.ANTIBALLISTIC MISSILE"]
  ];
  sId["S-A-WMA---"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.AIR"],
    icn["AIR.MISSILE.M2.LAUNCHED"]
  ];
  sId["S-A-WMAS--"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.AIR"],
    icn["AIR.MISSILE.M2.SURFACE"]
  ];
  sId["S-A-WMAA--"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.AIR"],
    icn["AIR.MISSILE.M2.AIR"]
  ];
  sId["S-A-WMAP--"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.AIR"],
    icn["AIR.MISSILE.M2.SPACE"]
  ];
  sId["S-A-WMU---"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.SUBSURFACE"],
    icn["AIR.MISSILE.M2.SURFACE"]
  ];
  sId["S-A-WML---"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.LAND"],
    icn["AIR.MISSILE.M2.AIR"]
  ];
  sId["S-A-WMCM--"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.CRUISE"],
    icn["AIR.MISSILE.M2.MISSILE"]
  ];
  sId["S-A-WMB---"] = [
    icn["AIR.MISSILE.ICON"],
    icn["AIR.MISSILE.M1.BALLISTIC"],
    icn["AIR.MISSILE.M2.MISSILE"]
  ];
  sId["S-A-WB----"] = [icn["AIR.MISSILE.IC.BOMB"]];
  sId["S-A-WD----"] = [icn["AR.I.AIR DECOY"]];
  sId["S-A-C-----"] = [icn["AR.I.CIVILIAN"]];
  sId["S-A-CF----"] = [icn["AR.I.FF.CIVILIAN FIXED WING"]];
  sId["S-A-CH----"] = [icn["AR.I.FF.CIVILIAN ROTARY WING"]];
  sId["S-A-CL----"] = [icn["AR.I.FF.CIVILIAN BALLOON"]];
};

var iconsGround = function ground(sId, bbox, icn, _STD2525) {
  // GROUND ========================================================================
  sId["S-G-------"] = [];
  sId["S-G-U-----"] = [];
  sId["S-G-UC----"] = [icn["GR.IC.COMBAT"]];
  sId["S-G-UCD---"] = [icn["GR.IC.FF.AIR DEFENCE"]];
  sId["S-G-UCDS--"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE SHORT RANGE"]
  ];
  sId["S-G-UCDSC-"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE MISSILE"],
    icn["GR.IC.AIR DEFENSE CHAPARRAL"]
  ];
  sId["S-G-UCDSS-"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE MISSILE"],
    icn["GR.IC.AIR DEFENSE STINGER"]
  ];
  sId["S-G-UCDSV-"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.FF.MAIN GUN SYSTEM"],
    icn["GR.IC.AIR DEFENSE VULCAN"]
  ];
  sId["S-G-UCDM--"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE MISSILE"]
  ];
  sId["S-G-UCDML-"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE MISSILE"],
    icn["GR.IC.MISSILE.LIGHT"]
  ];
  sId["S-G-UCDMLA"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE MISSILE"],
    icn["GR.IC.FF.MOTORIZED"]
  ];
  sId["S-G-UCDMM-"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE MISSILE"],
    icn["GR.IC.MISSILE.MEDIUM"]
  ];
  sId["S-G-UCDMH-"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE MISSILE"],
    icn["GR.IC.MISSILE.HEAVY"]
  ];
  sId["S-G-UCDH--"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE H/MAD"]
  ];
  sId["S-G-UCDHH-"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE MISSILE"],
    icn["GR.IC.AIR DEFENSE H/MAD HAWK"]
  ];
  sId["S-G-UCDHP-"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE MISSILE"],
    icn["GR.IC.AIR DEFENSE H/MAD PATRIOT"]
  ];
  sId["S-G-UCDG--"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE GUN UNIT"]
  ];
  sId["S-G-UCDC--"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE COMPOSITE"]
  ];
  sId["S-G-UCDT--"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE TARGETING UNIT"]
  ];
  sId["S-G-UCDO--"] = [
    icn["GR.IC.FF.AIR DEFENCE"],
    icn["GR.IC.AIR DEFENSE THEATER MISSILE DEFENSE UNIT"]
  ];
  sId["S-G-UCA---"] = [icn["GR.IC.ARMOUR"]];
  sId["S-G-UCAT--"] = [icn["GR.IC.ARMOUR"]];
  sId["S-G-UCATA-"] = [icn["GR.IC.ARMOUR"], icn["GR.M2.AIRBORNE"]];
  sId["S-G-UCATW-"] = [icn["GR.IC.ARMOUR"], icn["GR.IC.FF.AMPHIBIOUS"]];
  sId["S-G-UCATWR"] = [
    icn["GR.IC.ARMOUR"],
    icn["GR.IC.FF.AMPHIBIOUS"],
    icn["GR.M2.RECOVERY (MAINTENANCE)"]
  ];
  sId["S-G-UCATL-"] = [icn["GR.IC.ARMOUR"], icn["GR.M2.LIGHT"]];
  sId["S-G-UCATM-"] = [icn["GR.IC.ARMOUR"], icn["GR.M2.MEDIUM"]];
  sId["S-G-UCATH-"] = [icn["GR.IC.ARMOUR"], icn["GR.M2.HEAVY"]];
  sId["S-G-UCATR-"] = [
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.RECOVERY (MAINTENANCE)"]
  ];
  sId["S-G-UCAW--"] = [icn["GR.IC.ARMOUR"], icn["GR.M2.WHEELED"]];
  sId["S-G-UCAWS-"] = [
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"],
    icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
  ];
  sId["S-G-UCAWA-"] = [
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"],
    icn["GR.M2.AIRBORNE"]
  ];
  sId["S-G-UCAWW-"] = [
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"],
    icn["GR.IC.FF.AMPHIBIOUS"]
  ];
  sId["S-G-UCAWWR"] = [
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"],
    icn["GR.IC.FF.AMPHIBIOUS"],
    icn["GR.M2.RECOVERY (MAINTENANCE)"]
  ];
  sId["S-G-UCAWL-"] = [
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"],
    icn["GR.M2.LIGHT"]
  ];
  sId["S-G-UCAWM-"] = [
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"],
    icn["GR.M2.MEDIUM"]
  ];
  sId["S-G-UCAWH-"] = [
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"],
    icn["GR.M2.HEAVY"]
  ];
  sId["S-G-UCAWR-"] = [
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"],
    icn["GR.M2.RECOVERY (MAINTENANCE)"]
  ];
  sId["S-G-UCAA--"] = [icn["GR.IC.FF.ANTITANK/ANTIARMOUR"]];
  sId["S-G-UCAAD-"] = [icn["GR.IC.FF.ANTITANK/ANTIARMOUR"]];
  sId["S-G-UCAAL-"] = [icn["GR.IC.FF.ANTITANK/ANTIARMOUR"], icn["GR.M2.LIGHT"]];
  sId["S-G-UCAAM-"] = [
    icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
    icn["GR.M2.AIRBORNE"]
  ];
  sId["S-G-UCAAS-"] = [
    icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
    icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
  ];
  sId["S-G-UCAAU-"] = [
    icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
    icn["GR.M2.MOUNTAIN"]
  ];
  sId["S-G-UCAAC-"] = [
    icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
    icn["GR.M2.ARCTIC"]
  ];
  sId["S-G-UCAAA-"] = [
    icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
    icn["GR.IC.ARMOUR"]
  ];
  sId["S-G-UCAAAT"] = [
    icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
    icn["GR.IC.ARMOUR"]
  ];
  sId["S-G-UCAAAW"] = [
    icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"]
  ];
  sId["S-G-UCAAAS"] = [
    icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
    icn["GR.IC.ARMOUR"],
    icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
  ];
  sId["S-G-UCAAO-"] = [
    icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
    icn["GR.IC.FF.MOTORIZED"]
  ];
  sId["S-G-UCAAOS"] = [
    icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
    icn["GR.IC.FF.MOTORIZED"],
    icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
  ];
  sId["S-G-UCV---"] = [icn["GR.IC.AVIATION ROTARY WING"]];
  sId["S-G-UCVF--"] = [icn["GR.IC.AVIATION FIXED WING"]];
  sId["S-G-UCVFU-"] = [icn["GR.IC.AVIATION FIXED WING"], icn["GR.M1.UTILITY"]];
  sId["S-G-UCVFA-"] = [icn["GR.IC.AVIATION FIXED WING"], icn["GR.M1.ATTACK"]];
  sId["S-G-UCVUTP"] = [icn["GR.IC.AVIATION TACTICAL AIR CONTROL PARTY"]];
  sId["S-G-UCVUFC"] = [icn["GR.IC.AVIATION FORWARD AIR CONTROLLER"]];
  sId["S-G-UCVFR-"] = [icn["GR.IC.AVIATION FIXED WING"], icn["GR.M1.RECON"]];
  sId["S-G-UCVR--"] = [icn["GR.IC.AVIATION ROTARY WING"]];
  if (_STD2525)
    sId["S-G-UCVR--"].push({ type: "path", d: "M100,100 L100,140" });
  sId["S-G-UCVRA-"] = [icn["GR.IC.AVIATION ROTARY WING"], icn["GR.M1.ATTACK"]];
  sId["S-G-UCVRS-"] = [icn["GR.IC.AVIATION ROTARY WING"], icn["GR.M1.RECON"]];
  sId["S-G-UCVRW-"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["GR.M1.ANTISUBMARINE WARFARE"]
  ];
  sId["S-G-UCVRU-"] = [icn["GR.IC.AVIATION ROTARY WING"], icn["GR.M1.UTILITY"]];
  sId["S-G-UCVRUL"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["GR.M1.UTILITY"],
    icn["GR.M2.LIGHT"]
  ];
  sId["S-G-UCVRUM"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["GR.M1.UTILITY"],
    icn["GR.M2.MEDIUM"]
  ];
  sId["S-G-UCVRUH"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["GR.M1.UTILITY"],
    icn["GR.M2.HEAVY"]
  ];
  sId["S-G-UCVRUC"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["GR.M1.COMMAND AND CONTROL ROTARY WING"]
  ];
  sId["S-G-UCVRUE"] = [icn["GR.IC.AVIATION ROTARY WING"], icn["GR.M1.MEDEVAC"]];
  sId["S-G-UCVRM-"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["GR.M1.MINE COUNTERMEASURE"]
  ];
  sId["S-G-UCVS--"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["GR.M1.PERSONNEL RECOVERY"]
  ];
  sId["S-G-UCVC--"] = [icn["GR.IC.AVIATION COMPOSITE"]];
  sId["S-G-UCVV--"] = [
    icn["GR.IC.AVIATION FIXED WING"],
    icn["GR.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING "]
  ];
  sId["S-G-UCVU--"] = [icn["GR.IC.UNMANNED SYSTEMS"]];
  sId["S-G-UCVUF-"] = [
    icn["GR.IC.AVIATION FIXED WING"],
    icn["GR.M1.UNMANNED AERIAL VEHICLE"]
  ];
  //1.X.3.1.1.4.6.1.1 WRONG SIDC IN STANDARD APP6B
  //sId['S-G-UCVU--'] = [icn['GR.IC.UNMANNED SYSTEMS'],icn['GR.M2.CONTROL']];
  //1.X.3.1.1.4.6.1.2 WRONG SIDC IN STANDARD APP6B
  //sId['S-G-UCVU--'] = [icn['GR.IC.UNMANNED SYSTEMS'],icn['GR.M2.LAUNCHER']];
  //1.X.3.1.1.4.6.1.3 WRONG SIDC IN STANDARD APP6B
  //sId['S-G-UCVU--'] = [icn['GR.IC.UNMANNED SYSTEMS'],icn['GR.M2.RECOVERY (UNMANNED SYSTEMS)']];
  sId["S-G-UCVUR-"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["GR.M1.UNMANNED AERIAL VEHICLE"]
  ];
  sId["S-G-UCI---"] = [icn["GR.IC.FF.INFANTRY"]];
  sId["S-G-UCIL--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.M2.LIGHT"]];
  sId["S-G-UCIM--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.FF.MOTORIZED"]];
  sId["S-G-UCIO--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.M2.MOUNTAIN"]];
  sId["S-G-UCIA--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.M2.AIRBORNE"]];
  sId["S-G-UCIS--"] = [
    icn["GR.IC.FF.INFANTRY"],
    icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
  ];
  sId["S-G-UCIZ--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.ARMOUR"]];
  sId["S-G-UCIN--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.FF.NAVAL"]];
  sId["S-G-UCII--"] = [
    icn["GR.IC.FF.INFANTRY"],
    icn["GR.IC.ARMOUR"],
    icn["GR.IC.FF.MAIN GUN SYSTEM"]
  ];
  sId["S-G-UCIC--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.M2.ARCTIC"]];
  //1.X.3.1.1.5.10  WRONG SIDC IN STANDARD APP6B
  //sId['S-G-UCIC--'] = [icn['GR.IC.FF.INFANTRY'],icn['GR.M1.SNIPER']];
  sId["S-G-UCE---"] = [icn["GR.IC.ENGINEER"]];
  sId["S-G-UCEC--"] = [icn["GR.IC.ENGINEER"], icn["GR.M1.COMBAT"]];
  sId["S-G-UCECS-"] = [
    icn["GR.IC.ENGINEER"],
    icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
  ];
  sId["S-G-UCECA-"] = [icn["GR.IC.ENGINEER"], icn["GR.M2.AIRBORNE"]];
  sId["S-G-UCECC-"] = [icn["GR.IC.ENGINEER"], icn["GR.M2.ARCTIC"]];
  sId["S-G-UCECL-"] = [
    icn["GR.IC.ENGINEER"],
    icn["GR.M1.COMBAT"],
    icn["GR.M2.LIGHT"]
  ];
  sId["S-G-UCECM-"] = [
    icn["GR.IC.ENGINEER"],
    icn["GR.M1.COMBAT"],
    icn["GR.M2.MEDIUM"]
  ];
  sId["S-G-UCECH-"] = [
    icn["GR.IC.ENGINEER"],
    icn["GR.M1.COMBAT"],
    icn["GR.M2.HEAVY"]
  ];
  sId["S-G-UCECT-"] = [
    ms_1._scale(0.7, icn["GR.IC.ENGINEER"]),
    icn["GR.IC.ARMOUR"]
  ];
  sId["S-G-UCECW-"] = [icn["GR.IC.ENGINEER"], icn["GR.IC.FF.MOTORIZED"]];
  sId["S-G-UCECO-"] = [icn["GR.IC.ENGINEER"], icn["GR.M2.MOUNTAIN"]];
  sId["S-G-UCECR-"] = [icn["GR.IC.ENGINEER"], icn["GR.IC.FF.RECONNAISSANCE"]];
  //1.X.3.1.1.6.1.11  WRONG SIDC IN STANDARD APP6B
  //sId['S-G-UCEC--'] = [
  //1.X.3.1.1.6.1.12  WRONG SIDC IN STANDARD APP6B
  //sId['S-G-UCEC--'] = [
  //1.X.3.1.1.6.1.13  WRONG SIDC IN STANDARD APP6B
  //sId['S-G-UCEC--'] = [
  //1.X.3.1.1.6.1.14  WRONG SIDC IN STANDARD APP6B
  //sId['S-G-UCEC--'] = [
  sId["S-G-UCEN--"] = [icn["GR.IC.ENGINEER"], icn["GR.M1.CONSTRUCTION"]];
  sId["S-G-UCENN-"] = [icn["GR.IC.ENGINEER"], icn["GR.M1.NAVAL"]];
  sId["S-G-UCF---"] = [icn["GR.IC.FIELD ARTILLERY"]];
  sId["S-G-UCFH--"] = [icn["GR.IC.FIELD ARTILLERY"]];
  sId["S-G-UCFHE-"] = [
    ms_1._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
    icn["GR.IC.ARMOUR"]
  ];
  sId["S-G-UCFHS-"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
  ];
  sId["S-G-UCFHA-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.AIRBORNE"]];
  sId["S-G-UCFHC-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.ARCTIC"]];
  sId["S-G-UCFHO-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.MOUNTAIN"]];
  sId["S-G-UCFHL-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.LIGHT"]];
  sId["S-G-UCFHM-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.MEDIUM"]];
  sId["S-G-UCFHH-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.HEAVY"]];
  sId["S-G-UCFHX-"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.IC.FF.AMPHIBIOUS"]
  ];
  sId["S-G-UCFR--"] = [icn["GR.IC.FF.FIELD ARTILLERY ROCKET"]];
  sId["S-G-UCFRS-"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.M1.SINGLE ROCKET LAUNCHER"]
  ];
  sId["S-G-UCFRS-"] = [
    ms_1._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
    icn["GR.M1.SINGLE ROCKET LAUNCHER"],
    _STD2525 ? [] : icn["GR.IC.ARMOUR"]
  ];
  sId["S-G-UCFRSS"] = [
    ms_1._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
    icn["GR.M1.SINGLE ROCKET LAUNCHER"],
    icn["GR.IC.ARMOUR"]
  ];
  sId["S-G-UCFRSR"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.M1.SINGLE ROCKET LAUNCHER"],
    icn["GR.M2.TRUCK"]
  ];
  sId["S-G-UCFRST"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.M1.SINGLE ROCKET LAUNCHER"],
    icn["GR.M2.TOWED"]
  ];
  sId["S-G-UCFRM-"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.M1.MULTIPLE ROCKET LAUNCHER"],
    _STD2525 ? "" : icn["GR.M2.CROSS-COUNTRY TRUCK"]
  ];
  sId["S-G-UCFRMS"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.M1.MULTIPLE ROCKET LAUNCHER"],
    icn["GR.IC.ARMOUR"]
  ];
  sId["S-G-UCFRMR"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.M1.MULTIPLE ROCKET LAUNCHER"],
    icn["GR.M2.TRUCK"]
  ];
  sId["S-G-UCFRMT"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.M1.MULTIPLE ROCKET LAUNCHER"],
    icn["GR.M2.TOWED"]
  ];
  sId["S-G-UCFT--"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.M2.TARGET ACQUISITION"]
  ];
  sId["S-G-UCFTR-"] = [
    ms_1._translate(-30, 10, ms_1._scale(0.6, icn["GR.IC.FIELD ARTILLERY"])),
    icn["GR.IC.RADAR"]
  ];
  sId["S-G-UCFTS-"] = [
    ms_1._translate(0, 30, ms_1._scale(0.7, icn["GR.IC.FIELD ARTILLERY"])),
    icn["GR.IC.FF.SOUND"]
  ];
  sId["S-G-UCFTF-"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.M1.OPTICAL"],
    icn["GR.M2.TARGET ACQUISITION"]
  ];
  sId["S-G-UCFTC-"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.IC.FF.MOTORIZED"],
    icn["GR.IC.FF.RECONNAISSANCE"]
  ];
  sId["S-G-UCFTCD"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.IC.FF.RECONNAISSANCE"]
  ];
  sId["S-G-UCFTCM"] = [
    ms_1._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.IC.ARMOUR"]
  ];
  sId["S-G-UCFTA-"] = [
    icn["GR.IC.FIELD ARTILLERY"],
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["GR.M1.NAVAL"]
  ];
  sId["S-G-UCFM--"] = [icn["GR.IC.MORTAR"]];
  sId["S-G-UCFMS-"] = [icn["GR.IC.MORTAR"], icn["GR.M2.TRACKED"]];
  sId["S-G-UCFMW-"] = sId["S-G-UCFMSW"] = [
    icn["GR.IC.MORTAR"],
    icn["GR.M2.TRUCK"]
  ];
  sId["S-G-UCFMT-"] = [icn["GR.IC.MORTAR"], icn["GR.M2.TOWED"]];
  sId["S-G-UCFMTA"] = [
    icn["GR.IC.MORTAR"],
    icn["GR.M2.TOWED"],
    icn["GR.M2.AIRBORNE"]
  ];
  sId["S-G-UCFMTS"] = [
    icn["GR.IC.MORTAR"],
    icn["GR.M2.TOWED"],
    icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
  ];
  sId["S-G-UCFMTC"] = [icn["GR.IC.MORTAR"], icn["GR.M2.ARCTIC"]];
  sId["S-G-UCFMTO"] = [
    icn["GR.IC.MORTAR"],
    icn["GR.M2.TOWED"],
    icn["GR.M2.MOUNTAIN"]
  ];
  sId["S-G-UCFML-"] = [
    ms_1._translate(0, -20, icn["GR.IC.MORTAR"]),
    icn["GR.IC.FF.AMPHIBIOUS"]
  ];
  sId["S-G-UCFS--"] = [icn["GR.IC.SURVEY"]];
  sId["S-G-UCFSS-"] = [icn["GR.IC.SURVEY"], icn["GR.M1.AIRMOBILE/AIR ASSAULT"]];
  sId["S-G-UCFSA-"] = [icn["GR.IC.SURVEY"], icn["GR.M2.AIRBORNE"]];
  sId["S-G-UCFSL-"] = [icn["GR.IC.SURVEY"], icn["GR.M2.LIGHT"]];
  sId["S-G-UCFSO-"] = [icn["GR.IC.SURVEY"], icn["GR.M2.MOUNTAIN"]];
  sId["S-G-UCFO--"] = [icn["GR.IC.METEOROLOGICAL"]];
  sId["S-G-UCFOS-"] = [
    icn["GR.IC.METEOROLOGICAL"],
    icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
  ];
  sId["S-G-UCFOA-"] = [icn["GR.IC.METEOROLOGICAL"], icn["GR.M2.AIRBORNE"]];
  sId["S-G-UCFOL-"] = [icn["GR.IC.METEOROLOGICAL"], icn["GR.M2.LIGHT"]];
  sId["S-G-UCFOO-"] = [icn["GR.IC.METEOROLOGICAL"], icn["GR.M2.MOUNTAIN"]];
  //1.X.3.1.1.7.7  WRONG SIDC IN STANDARD APP6B
  //sId['S-G-UCF---'] = [icn['GR.IC.FIELD ARTILLERY'],icn['GR.M1.FIRE DIRECTION CENTRE']];
  //1.X.3.1.1.7.8  WRONG SIDC IN STANDARD APP6B
  //sId['S-G-UCF---'] = [icn['GR.IC.FIELD ARTILLERY OBSERVER']];
  sId["S-G-UCR---"] = [icn["GR.IC.FF.RECONNAISSANCE"]];
  sId["S-G-UCRH--"] = [icn["GR.IC.FF.HORSE"]];
  sId["S-G-UCRV--"] = [
    icn["GR.IC.FF.RECONNAISSANCE"],
    _STD2525 ? icn["GR.M2.CAVALRY"] : []
  ];
  sId["S-G-UCRVA-"] = [icn["GR.IC.FF.RECONNAISSANCE"], icn["GR.IC.ARMOUR"]];
  sId["S-G-UCRVM-"] = [
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.IC.FF.MOTORIZED"]
  ];
  sId["S-G-UCRVG-"] = [icn["GR.IC.FF.RECONNAISSANCE"]];
  sId["S-G-UCRVO-"] = [
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.IC.AVIATION ROTARY WING"]
  ];
  sId["S-G-UCRC--"] = [icn["GR.IC.FF.RECONNAISSANCE"], icn["GR.M2.ARCTIC"]];
  sId["S-G-UCRS--"] = [
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
  ];
  sId["S-G-UCRA--"] = [icn["GR.IC.FF.RECONNAISSANCE"], icn["GR.M2.AIRBORNE"]];
  sId["S-G-UCRO--"] = [icn["GR.IC.FF.RECONNAISSANCE"], icn["GR.M2.MOUNTAIN"]];
  sId["S-G-UCRL--"] = sId["S-G-UCRLL-"] = [
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.M2.LIGHT"]
  ];
  sId["S-G-UCRR--"] = [
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.IC.FF.AMPHIBIOUS"]
  ];
  sId["S-G-UCRRD-"] = [
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.IC.FF.AMPHIBIOUS"],
    _STD2525 ? icn["GR.M1.DIVISION"] : []
  ];
  sId["S-G-UCRRF-"] = [
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.IC.FF.AMPHIBIOUS"],
    icn["GR.M1.FORCE"]
  ];
  sId["S-G-UCRRL-"] = [
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"]
  ];
  sId["S-G-UCRX--"] = [
    icn["GR.IC.FF.RECONNAISSANCE"],
    _STD2525
      ? icn["GR.M2.LONG RANGE SURVEILLANCE"]
      : [ms_1._translate(0, -20, icn["GR.M2.MOUNTAIN"]), icn["GR.M2.LONG RANGE"]]
  ];
  sId["S-G-UCM---"] = [icn["GR.IC.MISSILE"]];
  sId["S-G-UCMT--"] = [icn["GR.IC.MISSILE"], icn["GR.M2.TACTICAL MISSILE"]];
  sId["S-G-UCMS--"] = [icn["GR.IC.MISSILE"], icn["GR.M2.STRATEGIC MISSILE"]];
  sId["S-G-UCS---"] = [icn["GR.IC.SECURITY"]];
  sId["S-G-UCSW--"] = [
    ms_1._translate(0, -20, icn["GR.IC.SECURITY"]),
    icn["GR.IC.FF.AMPHIBIOUS"]
  ];
  sId["S-G-UCSG--"] = [icn["GR.IC.SECURITY"]];
  sId["S-G-UCSGD-"] = [icn["GR.IC.SECURITY"], icn["GR.IC.FF.INFANTRY"]];
  sId["S-G-UCSGM-"] = [icn["GR.IC.SECURITY"], icn["GR.IC.FF.MOTORIZED"]];
  sId["S-G-UCSGA-"] = [icn["GR.IC.SECURITY"], icn["GR.IC.ARMOUR"]];
  sId["S-G-UCSM--"] = [
    icn["GR.IC.SECURITY"],
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"]
  ];
  sId["S-G-UCSR--"] = [icn["GR.IC.SECURITY"], icn["GR.M2.RAILROAD"]];
  sId["S-G-UCSA--"] = [
    ms_1._translate(0, -20, icn["GR.IC.SECURITY"]),
    icn["GR.IC.AVIATION ROTARY WING"]
  ];
  sId["S-G-F-S---"] = icn["GR.IC.SURVEILLANCE"];
  sId["S-G-UU----"] = [icn["GR.IC.COMBAT SUPPORT"]];
  sId["S-G-UUA---"] = [icn["GR.IC.CBRN"]];
  sId["S-G-UUAC--"] = [icn["GR.IC.CBRN"], icn["GR.M1.CHEMICAL"]];
  sId["S-G-UUACC-"] = [icn["GR.IC.CBRN"], icn["GR.M1.SMOKE/DECON"]];
  sId["S-G-UUACCK"] = [
    icn["GR.IC.CBRN"],
    icn["GR.M1.SMOKE/DECON"],
    icn["GR.IC.ARMOUR"]
  ];
  sId["S-G-UUACCM"] = [
    icn["GR.IC.CBRN"],
    icn["GR.M1.SMOKE/DECON"],
    icn["GR.IC.FF.MOTORIZED"]
  ];
  sId["S-G-UUACS-"] = [icn["GR.IC.CBRN"], icn["GR.M1.SMOKE"]];
  sId["S-G-UUACSM"] = [
    icn["GR.IC.CBRN"],
    icn["GR.M1.SMOKE"],
    icn["GR.IC.FF.MOTORIZED"]
  ];
  sId["S-G-UUACSA"] = [
    icn["GR.IC.CBRN"],
    icn["GR.M1.SMOKE"],
    icn["GR.IC.ARMOUR"]
  ];
  sId["S-G-UUACR-"] = [
    icn["GR.IC.CBRN"],
    icn["GR.M1.CHEMICAL"],
    icn["GR.IC.FF.RECONNAISSANCE"]
  ];
  sId["S-G-UUACRW"] = [
    icn["GR.IC.CBRN"],
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"]
  ];
  sId["S-G-UUACRS"] = [
    icn["GR.IC.CBRN"],
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"],
    _STD2525 ? icn["GR.M1.CHEMICAL SURVEILLANCE"] : []
  ];
  sId["S-G-UUAN--"] = [icn["GR.IC.CBRN"], icn["GR.M1.NUCLEAR"]];
  sId["S-G-UUAB--"] = [icn["GR.IC.CBRN"], icn["GR.M1.BIOLOGICAL"]];
  sId["S-G-UUABR-"] = [
    icn["GR.IC.CBRN"],
    icn["GR.M1.BIOLOGICAL"],
    icn["GR.IC.FF.MOTORIZED"],
    icn["GR.IC.FF.RECONNAISSANCE"]
  ];
  sId["S-G-UUAD--"] = [icn["GR.IC.CBRN"], icn["GR.M1.DECONTAMINATION"]];
  sId["S-G-UUADT-"] = [
    icn["GR.IC.CBRN"],
    icn["GR.M1.DECONTAMINATION"],
    icn["GR.M2.TROOP"]
  ];
  sId["S-G-UUADE-"] = [
    icn["GR.IC.CBRN"],
    icn["GR.M1.DECONTAMINATION"],
    icn["GR.M2.EQUIPMENT"]
  ];
  sId["S-G-UUADET"] = [
    icn["GR.IC.CBRN"],
    icn["GR.M1.DECONTAMINATION"],
    icn["GR.M2.EQUIMENT/TROOP"]
  ];
  sId["S-G-UUAL--"] = [icn["GR.IC.CBRN"], icn["GR.M2.LABORATORY"]];
  sId["S-G-UUM---"] = [icn["GR.IC.MILITARY INTELLIGENCE"]];
  sId["S-G-UUMA--"] = [
    icn["GR.IC.MILITARY INTELLIGENCE"],
    icn["GR.M1.UNMANNED AERIAL VEHICLE"]
  ];
  sId["S-G-UUMS--"] = [
    ms_1._translate(-25, 0, icn["GR.IC.MILITARY INTELLIGENCE"]),
    icn["GR.IC.RADIO"]
  ];
  sId["S-G-UUMSE-"] = [icn["GR.IC.ELECTRONIC WARFARE"]];
  sId["S-G-UUMSEA"] = [
    icn["GR.IC.ELECTRONIC WARFARE"],
    icn["GR.IC.FF.RECONNAISSANCE"],
    icn["GR.IC.ARMOUR"],
    icn["GR.M2.WHEELED"]
  ];
  sId["S-G-UUMSED"] = [
    icn["GR.IC.ELECTRONIC WARFARE"],
    icn["GR.IC.FF.DIRECTION FINDING"]
  ];
  sId["S-G-UUMSEI"] = [
    icn["GR.IC.ELECTRONIC WARFARE"],
    icn["GR.IC.FF.INTERCEPT"]
  ];
  sId["S-G-UUMSEJ"] = [
    icn["GR.IC.ELECTRONIC WARFARE"],
    icn["GR.IC.FF.JAMMING"]
  ];
  sId["S-G-UUMSET"] = [
    icn["GR.IC.ELECTRONIC WARFARE"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-UUMSEC"] = [
    icn["GR.IC.ELECTRONIC WARFARE"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-UUMC--"] = [icn["GR.IC.COUNTER-INTELLIGENCE"]];
  sId["S-G-UUMR--"] = [icn["GR.IC.MILITARY INTELLIGENCE"]];
  sId["S-G-UUMRG-"] = [icn["GR.IC.MILITARY INTELLIGENCE"], icn["GR.M1.RADAR"]];
  sId["S-G-UUMRS-"] = [
    ms_1._translate(0, 30, ms_1._scale(0.8, icn["GR.IC.MILITARY INTELLIGENCE"])),
    icn["GR.IC.FF.SENSOR"]
  ];
  sId["S-G-UUMRSS"] = [
    ms_1._translate(0, 30, ms_1._scale(0.8, icn["GR.IC.MILITARY INTELLIGENCE"])),
    icn["GR.IC.FF.SENSOR"],
    icn["GR.M1.SENSOR CONTROL MODULE"]
  ];
  sId["S-G-UUMRX-"] = [
    icn["GR.IC.MILITARY INTELLIGENCE"],
    icn["GR.M1.GROUND STATION MODULE"]
  ];
  sId["S-G-UUMMO-"] = [
    icn["GR.IC.MILITARY INTELLIGENCE"],
    icn["GR.M1.METEOROLOGICAL"]
  ];
  sId["S-G-UUMO--"] = [
    icn["GR.IC.MILITARY INTELLIGENCE"],
    icn["GR.M1.OPERATIONS"]
  ];
  sId["S-G-UUMT--"] = [
    icn["GR.IC.MILITARY INTELLIGENCE"],
    icn["GR.M1.TACTICAL EXPLOITATION"]
  ];
  sId["S-G-UUMQ--"] = [icn["GR.IC.INTERROGATION"]];
  sId["S-G-UUMJ--"] = [icn["GR.IC.JOINT INTELLIGENCE CENTRE"]];
  sId["S-G-UUL---"] = [
    icn["GR.IC.FF.MILITARY POLICE"],
    icn["GR.IC.MILITARY POLICE"]
  ];
  sId["S-G-UULS--"] = [icn["GR.IC.SHORE PATROL"]];
  sId["S-G-UULM--"] = [icn["GR.IC.MILITARY POLICE"]];
  sId["S-G-UULC--"] = [icn["GR.IC.LAW ENFORCEMENT"]];
  sId["S-G-UULF--"] = [
    ms_1._translate(0, -20, icn["GR.IC.SHORE PATROL"]),
    icn["GR.IC.AVIATION FIXED WING"]
  ];
  sId["S-G-UULD--"] = [icn["GR.IC.CRIMINAL INVESTIGATION DIVISION"]];
  sId["S-G-UUS---"] = [icn["GR.IC.FF.SIGNAL"]];
  sId["S-G-UUSA--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.M1.AREA"]];
  sId["S-G-UUSC--"] = [
    icn["GR.IC.FF.SIGNAL"],
    icn["GR.M1.COMMUNICATIONS CONTINGENCY PACKAGE"]
  ];
  sId["S-G-UUSCL-"] = [
    icn["GR.IC.FF.SIGNAL"],
    icn["GR.M1.LARGE COMMUNICATIONS CONTINGENCY PACKAGE"],
    icn["GR.M2.AIRBORNE"]
  ];
  sId["S-G-UUSO--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.M1.OPERATIONS"]];
  sId["S-G-UUSF--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.M1.FORWARD"]];
  sId["S-G-UUSM--"] = [
    icn["GR.IC.FF.SIGNAL"],
    icn["GR.M1.MOBILE SUBSCRIBER EQUIPMENT"]
  ];
  sId["S-G-UUSMS-"] = [
    icn["GR.IC.FF.SIGNAL"],
    icn["GR.M1.SMALL EXTENSION NODE"]
  ];
  sId["S-G-UUSML-"] = [
    icn["GR.IC.FF.SIGNAL"],
    icn["GR.M1.LARGE EXTENSION NODE"]
  ];
  sId["S-G-UUSMN-"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.M1.NODE CENTRE"]];
  sId["S-G-UUSR--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.RADIO"]];
  sId["S-G-UUSRS-"] = [icn["GR.IC.FF.SIGNAL"], icn["SP.I.FF.SATELLITE"]];
  sId["S-G-UUSRT-"] = [
    icn["GR.IC.FF.SIGNAL"],
    icn["GR.IC.RADIO TELETYPE CENTRE"]
  ];
  sId["S-G-UUSRW-"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.RADIO RELAY"]];
  sId["S-G-UUSS--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.M1.SIGNAL SUPPORT"]];
  sId["S-G-UUSW--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.TELEPHONE SWITCH"]];
  sId["S-G-UUSX--"] = [icn["GR.IC.ELECTRONIC RANGING"]];
  sId["S-G-UUI---"] = [icn["GR.IC.INFORMATION OPERATIONS"]];
  sId["S-G-UUP---"] = sId["S-G-UUX---"] = [
    icn["GR.IC.FF.AMPHIBIOUS"],
    icn["GR.M1.LANDING SUPPORT"]
  ];
  sId["S-G-UUE---"] = [icn["GR.IC.EXPLOSIVE ORDNANCE DISPOSAL"]];
  sId["S-G-UUT---"] = [icn["GR.IC.TOPOGRAPHIC"]];
  //1.X.3.1.2.9 WRONG SIDC IN STANDARD APP6B
  //sId['S-G-UU----'] = [icn['GR.IC.DOG']];
  sId["S-G-UUD---"] = [icn["GR.IC.DRILLING"]];
  sId["S-G-US----"] = [icn["GR.IC.COMBAT SERVICE SUPPORT"]];
  sId["S-G-USA---"] = [icn["GR.IC.ADMINISTRATIVE"]];
  sId["S-G-USAT--"] = [
    icn["GR.IC.ADMINISTRATIVE"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USAC--"] = [
    icn["GR.IC.ADMINISTRATIVE"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-USAJ--"] = [icn["GR.IC.JUDGE ADVOCATE GENERAL"]];
  sId["S-G-USAJT-"] = [
    icn["GR.IC.JUDGE ADVOCATE GENERAL"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USAJC-"] = [
    icn["GR.IC.JUDGE ADVOCATE GENERAL"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-USAO--"] = [icn["GR.IC.POSTAL"]];
  sId["S-G-USAOT-"] = [icn["GR.IC.POSTAL"], icn["GR.IC.FF.THEATRE SUPPORT"]];
  sId["S-G-USAOC-"] = [icn["GR.IC.POSTAL"], icn["GR.IC.FF.CORPS SUPPORT"]];
  sId["S-G-USAF--"] = [icn["GR.IC.FINANCE"]];
  sId["S-G-USAFT-"] = [icn["GR.IC.FINANCE"], icn["GR.IC.FF.THEATRE SUPPORT"]];
  sId["S-G-USAFC-"] = [icn["GR.IC.FINANCE"], icn["GR.IC.FF.CORPS SUPPORT"]];
  sId["S-G-USAS--"] = [icn["GR.IC.PERSONNEL SERVICES"]];
  sId["S-G-USAST-"] = [
    icn["GR.IC.PERSONNEL SERVICES"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USASC-"] = [
    icn["GR.IC.PERSONNEL SERVICES"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-USAM--"] = [icn["GR.IC.MORTUARY AFFAIRS"]];
  sId["S-G-USAMT-"] = [
    icn["GR.IC.MORTUARY AFFAIRS"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USAMC-"] = [
    icn["GR.IC.MORTUARY AFFAIRS"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-USAR--"] = [icn["GR.IC.RELIGIOUS SUPPORT"]];
  sId["S-G-USART-"] = [
    icn["GR.IC.RELIGIOUS SUPPORT"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USARC-"] = [
    icn["GR.IC.RELIGIOUS SUPPORT"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-USAP--"] = [icn["GR.IC.PUBLIC AFFAIRS"]];
  sId["S-G-USAPT-"] = [
    icn["GR.IC.PUBLIC AFFAIRS"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USAPC-"] = [
    icn["GR.IC.PUBLIC AFFAIRS"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-USAPB-"] = [icn["GR.IC.PUBLIC AFFAIRS BROADCAST"]];
  sId["S-G-USAPBT"] = [
    icn["GR.IC.PUBLIC AFFAIRS BROADCAST"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USAPBC"] = [
    icn["GR.IC.PUBLIC AFFAIRS BROADCAST"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-USAPM-"] = [icn["GR.IC.JOINT INFORMATION BUREAU"]];
  sId["S-G-USAPMT"] = [
    icn["GR.IC.JOINT INFORMATION BUREAU"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USAPMC"] = [
    icn["GR.IC.JOINT INFORMATION BUREAU"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-USAX--"] = [icn["GR.IC.REPLACEMENT HOLDING UNIT"]];
  sId["S-G-USAXT-"] = [
    icn["GR.IC.REPLACEMENT HOLDING UNIT"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USAXC-"] = [
    icn["GR.IC.REPLACEMENT HOLDING UNIT"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-USAL--"] = [icn["GR.IC.LABOUR"]];
  sId["S-G-USALT-"] = [icn["GR.IC.LABOUR"], icn["GR.IC.FF.THEATRE SUPPORT"]];
  sId["S-G-USALC-"] = [icn["GR.IC.LABOUR"], icn["GR.IC.FF.CORPS SUPPORT"]];
  sId["S-G-USAW--"] = [icn["GR.IC.MORALE, WELFARE, AND RECREATION"]];
  sId["S-G-USAWT-"] = [
    icn["GR.IC.MORALE, WELFARE, AND RECREATION"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USAWC-"] = [
    icn["GR.IC.MORALE, WELFARE, AND RECREATION"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-USAQ--"] = [icn["GR.IC.QUARTERMASTER"]];
  sId["S-G-USAQT-"] = [
    icn["GR.IC.QUARTERMASTER"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USAQC-"] = [
    icn["GR.IC.QUARTERMASTER"],
    icn["GR.IC.FF.CORPS SUPPORT"]
  ];
  sId["S-G-USM---"] = [icn["GR.IC.FF.MEDICAL"]];
  sId["S-G-USMT--"] = [icn["GR.IC.FF.MEDICAL THEATER"]];
  sId["S-G-USMC--"] = [icn["GR.IC.FF.MEDICAL CORPS"]];
  sId["S-G-USMM--"] = [
    icn["GR.IC.FF.MEDICAL"],
    icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]
  ];
  sId["S-G-USMMT-"] = [
    icn["GR.IC.FF.MEDICAL THEATER"],
    icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]
  ];
  sId["S-G-USMMC-"] = [
    icn["GR.IC.FF.MEDICAL CORPS"],
    icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]
  ];
  sId["S-G-USMV--"] = [icn["GR.IC.FF.MEDICAL"], icn["GR.M2.VETERINARY"]];
  sId["S-G-USMVT-"] = [
    icn["GR.IC.FF.MEDICAL THEATER"],
    icn["GR.M2.VETERINARY"]
  ];
  sId["S-G-USMVC-"] = [icn["GR.IC.FF.MEDICAL CORPS"], icn["GR.M2.VETERINARY"]];
  sId["S-G-USMD--"] = [icn["GR.IC.FF.MEDICAL"], icn["GR.M2.DENTAL"]];
  sId["S-G-USMDT-"] = [icn["GR.IC.FF.MEDICAL THEATER"], icn["GR.M2.DENTAL"]];
  sId["S-G-USMDC-"] = [icn["GR.IC.FF.MEDICAL CORPS"], icn["GR.M2.DENTAL"]];
  sId["S-G-USMP--"] = [icn["GR.IC.FF.MEDICAL"], icn["GR.M2.PSYCHOLOGICAL"]];
  sId["S-G-USMPT-"] = [
    icn["GR.IC.FF.MEDICAL THEATER"],
    icn["GR.M2.PSYCHOLOGICAL"]
  ];
  sId["S-G-USMPC-"] = [
    icn["GR.IC.FF.MEDICAL CORPS"],
    icn["GR.M2.PSYCHOLOGICAL"]
  ];
  sId["S-G-USS---"] = [icn["GR.IC.FF.SUPPLY"]];
  sId["S-G-USST--"] = [icn["GR.IC.FF.SUPPLY THEATER"]];
  sId["S-G-USSC--"] = [icn["GR.IC.FF.SUPPLY CORPS"]];
  sId["S-G-USS1--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS I"]];
  sId["S-G-USS1T-"] = [icn["GR.IC.FF.SUPPLY THEATER"], icn["GR.IC.FF.CLASS I"]];
  sId["S-G-USS1C-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS I"]];
  sId["S-G-USS2--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS II"]];
  sId["S-G-USS2T-"] = [
    icn["GR.IC.FF.SUPPLY THEATER"],
    icn["GR.IC.FF.CLASS II"]
  ];
  sId["S-G-USS2C-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS II"]];
  sId["S-G-USS3--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS III"]];
  sId["S-G-USS3T-"] = [
    icn["GR.IC.FF.SUPPLY THEATER"],
    icn["GR.IC.FF.CLASS III"]
  ];
  sId["S-G-USS3C-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS III"]];
  sId["S-G-USS3A-"] = [
    icn["GR.IC.FF.SUPPLY"],
    icn["GR.IC.FF.CLASS III"],
    ms_1._translate(25, 5, ms_1._scale(0.5, icn["GR.IC.AVIATION ROTARY WING"]))
  ];
  sId["S-G-USS3AT"] = [
    icn["GR.IC.FF.SUPPLY THEATER"],
    icn["GR.IC.FF.CLASS III"],
    ms_1._translate(25, 5, ms_1._scale(0.5, icn["GR.IC.AVIATION ROTARY WING"]))
  ];
  sId["S-G-USS3AC"] = [
    icn["GR.IC.FF.SUPPLY CORPS"],
    icn["GR.IC.FF.CLASS III"],
    ms_1._translate(25, 5, ms_1._scale(0.5, icn["GR.IC.AVIATION ROTARY WING"]))
  ];
  sId["S-G-USS4--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS IV"]];
  sId["S-G-USS4T-"] = [
    icn["GR.IC.FF.SUPPLY THEATER"],
    icn["GR.IC.FF.CLASS IV"]
  ];
  sId["S-G-USS4C-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS IV"]];
  sId["S-G-USS5--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS V"]];
  sId["S-G-USS5T-"] = [icn["GR.IC.FF.SUPPLY THEATER"], icn["GR.IC.FF.CLASS V"]];
  sId["S-G-USS5C-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS V"]];
  sId["S-G-USS6--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VI"]];
  sId["S-G-USS6T-"] = [
    icn["GR.IC.FF.SUPPLY THEATER"],
    icn["GR.IC.FF.CLASS VI"]
  ];
  sId["S-G-USS6C-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS VI"]];
  sId["S-G-USS7--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VII"]];
  sId["S-G-USS7T-"] = [
    icn["GR.IC.FF.SUPPLY THEATER"],
    icn["GR.IC.FF.CLASS VII"]
  ];
  sId["S-G-USS7C-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS VII"]];
  sId["S-G-USS8--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VIII"]];
  sId["S-G-USS8T-"] = [
    icn["GR.IC.FF.SUPPLY THEATER"],
    icn["GR.IC.FF.CLASS VIII"]
  ];
  sId["S-G-USS8C-"] = [
    icn["GR.IC.FF.SUPPLY CORPS"],
    icn["GR.IC.FF.CLASS VIII"]
  ];
  sId["S-G-USS9--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS IX"]];
  sId["S-G-USS9T-"] = [
    icn["GR.IC.FF.SUPPLY THEATER"],
    icn["GR.IC.FF.CLASS IX"]
  ];
  sId["S-G-USS9C-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS IX"]];
  sId["S-G-USSX--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS X"]];
  sId["S-G-USSXT-"] = [icn["GR.IC.FF.SUPPLY THEATER"], icn["GR.IC.FF.CLASS X"]];
  sId["S-G-USSXC-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS X"]];
  sId["S-G-USSL--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.LAUNDRY/BATH"]];
  sId["S-G-USSLT-"] = [
    icn["GR.IC.FF.SUPPLY THEATER"],
    icn["GR.IC.LAUNDRY/BATH"]
  ];
  sId["S-G-USSLC-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.LAUNDRY/BATH"]];
  sId["S-G-USSW--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.WATER"]];
  sId["S-G-USSWT-"] = [icn["GR.IC.FF.SUPPLY THEATER"], icn["GR.IC.WATER"]];
  sId["S-G-USSWC-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.WATER"]];
  sId["S-G-USSWP-"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.WATER PURIFICATION"]];
  sId["S-G-USSWPT"] = [
    icn["GR.IC.FF.SUPPLY THEATER"],
    icn["GR.IC.WATER PURIFICATION"]
  ];
  sId["S-G-USSWPC"] = [
    icn["GR.IC.FF.SUPPLY CORPS"],
    icn["GR.IC.WATER PURIFICATION"]
  ];
  //1.X.3.1.3.3.15  ANOTHER SIDC THAT DOESN'T WORK OUT...
  //sId['S-G-US----'] = [icn['GR.IC.FF.SUPPLY CORPS'],icn['GR.IC.WATER PURIFICATION']];
  sId["S-G-UST---"] = [icn["GR.IC.TRANSPORTATION"]];
  sId["S-G-USTT--"] = [
    icn["GR.IC.FF.THEATRE SUPPORT"],
    icn["GR.IC.TRANSPORTATION"]
  ];
  sId["S-G-USTC--"] = [
    icn["GR.IC.FF.CORPS SUPPORT"],
    icn["GR.IC.TRANSPORTATION"]
  ];
  sId["S-G-USTM--"] = [
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.M1.MOVEMENT CONTROL CENTRE"]
  ];
  sId["S-G-USTMT-"] = [
    icn["GR.IC.FF.THEATRE SUPPORT"],
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.M1.MOVEMENT CONTROL CENTRE"]
  ];
  sId["S-G-USTMC-"] = [
    icn["GR.IC.FF.CORPS SUPPORT"],
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.M1.MOVEMENT CONTROL CENTRE"]
  ];
  sId["S-G-USTR--"] = [icn["GR.IC.TRANSPORTATION"], icn["GR.M1.RAILROAD"]];
  sId["S-G-USTRT-"] = [
    icn["GR.IC.FF.THEATRE SUPPORT"],
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.M1.RAILROAD"]
  ];
  sId["S-G-USTRC-"] = [
    icn["GR.IC.FF.CORPS SUPPORT"],
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.M1.RAILROAD"]
  ];
  sId["S-G-USTS--"] = [icn["GR.IC.TRANSPORTATION"], icn["GR.M1.NAVAL"]];
  sId["S-G-USTST-"] = [
    icn["GR.IC.FF.THEATRE SUPPORT"],
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.M1.NAVAL"]
  ];
  sId["S-G-USTSC-"] = [
    icn["GR.IC.FF.CORPS SUPPORT"],
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.M1.NAVAL"]
  ];
  sId["S-G-USTA--"] = [
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.IC.AIRPORT OF DEBARKATION"]
  ];
  sId["S-G-USTAT-"] = [
    icn["GR.IC.FF.THEATRE SUPPORT"],
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.IC.AIRPORT OF DEBARKATION"]
  ];
  sId["S-G-USTAC-"] = [
    icn["GR.IC.FF.CORPS SUPPORT"],
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.IC.AIRPORT OF DEBARKATION"]
  ];
  sId["S-G-USTI--"] = [icn["GR.IC.TRANSPORTATION"], icn["GR.M1.MISSILE"]];
  sId["S-G-USTIT-"] = [
    icn["GR.IC.FF.THEATRE SUPPORT"],
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.M1.MISSILE"]
  ];
  sId["S-G-USTIC-"] = [
    icn["GR.IC.FF.CORPS SUPPORT"],
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.M1.MISSILE"]
  ];
  //1.X.3.1.3.4.8 SIDC BROKEN
  //sId['S-G-UST---']
  sId["S-G-USX---"] = [icn["GR.IC.MAINTENANCE"]];
  sId["S-G-USXT--"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.IC.FF.THEATRE SUPPORT"]
  ];
  sId["S-G-USXC--"] = [icn["GR.IC.MAINTENANCE"], icn["GR.IC.FF.CORPS SUPPORT"]];
  sId["S-G-USXH--"] = [icn["GR.IC.MAINTENANCE"], icn["GR.M2.HEAVY"]];
  sId["S-G-USXHT-"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.IC.FF.THEATRE SUPPORT"],
    icn["GR.M2.HEAVY"]
  ];
  sId["S-G-USXHC-"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.IC.FF.CORPS SUPPORT"],
    icn["GR.M2.HEAVY"]
  ];
  sId["S-G-USXR--"] = [icn["GR.IC.MAINTENANCE"], icn["GR.M2.RAILROAD"]];
  sId["S-G-USXRT-"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.IC.FF.THEATRE SUPPORT"],
    icn["GR.M2.RAILROAD"]
  ];
  sId["S-G-USXRC-"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.IC.FF.CORPS SUPPORT"],
    icn["GR.M2.RAILROAD"]
  ];
  sId["S-G-USXO--"] = [icn["GR.IC.MAINTENANCE"], icn["GR.M1.AMMUNITION"]];
  sId["S-G-USXOT-"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.IC.FF.THEATRE SUPPORT"],
    icn["GR.M1.AMMUNITION"]
  ];
  sId["S-G-USXOC-"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.IC.FF.CORPS SUPPORT"],
    icn["GR.M1.AMMUNITION"]
  ];
  sId["S-G-USXOM-"] = [icn["GR.IC.MAINTENANCE"], icn["GR.M1.MISSILE"]];
  sId["S-G-USXOMT"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.IC.FF.THEATRE SUPPORT"],
    icn["GR.M1.MISSILE"]
  ];
  sId["S-G-USXOMC"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.IC.FF.CORPS SUPPORT"],
    icn["GR.M1.MISSILE"]
  ];
  sId["S-G-USXE--"] = [icn["GR.IC.MAINTENANCE"], icn["GR.M1.ELECTRO-OPTICAL"]];
  sId["S-G-USXET-"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.IC.FF.THEATRE SUPPORT"],
    icn["GR.M1.ELECTRO-OPTICAL"]
  ];
  sId["S-G-USXEC-"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.IC.FF.CORPS SUPPORT"],
    icn["GR.M1.ELECTRO-OPTICAL"]
  ];
  sId["S-G-USXBDR"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.M2.BATTLE DAMAGE REPAIR"]
  ];
  sId["S-G-USXPM-"] = [
    icn["GR.IC.MAINTENANCE"],
    icn["GR.M2.PREVENTIVE MAINTENANCE"]
  ];
  sId["S-G-USXP--"] = [icn["GR.IC.PIPELINE"]];
  sId["S-G-USXEP-"] = [icn["GR.IC.ENVIRONMENTAL PROTECTION"]];
  sId["S-G-UH----"] = [];
  //1.X.3.1.5 BROKEN SIDC
  sId["S-G-UH1---"] = [icn["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"]];
  //1.X.3.1.6 BROKEN SIDC
  sId["S-G-UH2---"] = [
    icn["GR.IC.FF.SUPPLY"],
    icn["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"]
  ];
  sId["S-G-UHGL--"] = sId["S-G-GL----"] = [icn["GR.IC.LIAISON"]];
};

var iconsEquipment = function equipment(sId, bbox, icn, _STD2525) {
  //Adds support for equipment
  sId["S-G-E-----"] = [];
  sId["S-G-EWM---"] = [icn["GR.EQ.MISSILE LAUNCHER"]];
  sId["S-G-EWMA--"] = [
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"]
  ];
  sId["S-G-EWMAS-"] = [
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
    icn["GR.EQ.SHORT RANGE"]
  ];
  sId["S-G-EWMASR"] = [
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
    icn["GR.EQ.SHORT RANGE"],
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
  ];
  sId["S-G-EWMASE"] = [
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
    icn["GR.EQ.SHORT RANGE"],
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
  ];
  sId["S-G-EWMAI-"] = [
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
    icn["GR.EQ.INTERMEDIATE RANGE"]
  ];
  sId["S-G-EWMAIR"] = [
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
    icn["GR.EQ.INTERMEDIATE RANGE"],
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
  ];
  sId["S-G-EWMAIE"] = [
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
    icn["GR.EQ.INTERMEDIATE RANGE"],
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
  ];
  sId["S-G-EWMAL-"] = [
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
    icn["GR.EQ.LONG RANGE"]
  ];
  sId["S-G-EWMALR"] = [
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
    icn["GR.EQ.LONG RANGE"],
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
  ];
  sId["S-G-EWMALE"] = [
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
    icn["GR.EQ.LONG RANGE"],
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
  ];
  sId["S-G-EWMAT-"] = [
    ms_1._translate(
      0,
      -15,
      ms_1._scale(0.7, icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"])
    ),
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE"]
  ];
  sId["S-G-EWMATR"] = [
    ms_1._translate(
      0,
      -15,
      ms_1._scale(0.7, icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"])
    ),
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE"],
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
  ];
  sId["S-G-EWMATE"] = [
    ms_1._translate(
      0,
      -15,
      ms_1._scale(0.7, icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"])
    ),
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE"],
    icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
  ];
  sId["S-G-EWMS--"] = [icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"]];
  sId["S-G-EWMSS-"] = [
    icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
    icn["GR.EQ.SHORT RANGE"]
  ];
  sId["S-G-EWMSI-"] = [
    icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
    icn["GR.EQ.INTERMEDIATE RANGE"]
  ];
  sId["S-G-EWMSL-"] = [
    icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
    icn["GR.EQ.LONG RANGE"]
  ];
  sId["S-G-EWMT--"] = [icn["GR.EQ.ANTITANK MISSILE LAUNCHER"]];
  sId["S-G-EWMTL-"] = [
    icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
    icn["GR.EQ.SHORT RANGE"]
  ];
  sId["S-G-EWMTM-"] = [
    icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
    icn["GR.EQ.INTERMEDIATE RANGE"]
  ];
  sId["S-G-EWMTH-"] = [
    icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
    icn["GR.EQ.LONG RANGE"]
  ];
  sId["S-G-EWS---"] = [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]];
  sId["S-G-EWSL--"] = [
    icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
    icn["GR.EQ.SHORT RANGE"]
  ];
  sId["S-G-EWSM--"] = [
    icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
    icn["GR.EQ.INTERMEDIATE RANGE"]
  ];
  sId["S-G-EWSH--"] = [
    icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
    icn["GR.EQ.LONG RANGE"]
  ];
  sId["S-G-EWX---"] = [icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"]];
  sId["S-G-EWXL--"] = [
    icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
    ms_1._translate(0, 10, icn["GR.EQ.SHORT RANGE"])
  ];
  sId["S-G-EWXM--"] = [
    icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
    ms_1._translate(0, 10, icn["GR.EQ.INTERMEDIATE RANGE"])
  ];
  sId["S-G-EWXH--"] = [
    icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
    ms_1._translate(0, 10, icn["GR.EQ.LONG RANGE"])
  ];
  sId["S-G-EWT---"] = [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]];
  sId["S-G-EWTL--"] = [
    icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
    icn["GR.EQ.SHORT RANGE"]
  ];
  sId["S-G-EWTM--"] = [
    icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
    icn["GR.EQ.INTERMEDIATE RANGE"]
  ];
  sId["S-G-EWTH--"] = [
    icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
    icn["GR.EQ.LONG RANGE"]
  ];
  sId["S-G-EWR---"] = [icn["GR.EQ.RIFLE"]];
  sId["S-G-EWRR--"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.SHORT RANGE"]];
  sId["S-G-EWRL--"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.INTERMEDIATE RANGE"]];
  sId["S-G-EWRH--"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.LONG RANGE"]];
  sId["S-G-EWZ---"] = [icn["GR.EQ.GRENADE LAUNCHER"]];
  sId["S-G-EWZL--"] = [
    icn["GR.EQ.GRENADE LAUNCHER"],
    ms_1._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
  ];
  sId["S-G-EWZM--"] = [
    icn["GR.EQ.GRENADE LAUNCHER"],
    ms_1._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
  ];
  sId["S-G-EWZH--"] = [
    icn["GR.EQ.GRENADE LAUNCHER"],
    ms_1._translate(0, 20, icn["GR.EQ.LONG RANGE"])
  ];
  sId["S-G-EWO---"] = [icn["GR.EQ.MORTAR"]];
  sId["S-G-EWOL--"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.SHORT RANGE"]];
  sId["S-G-EWOM--"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.INTERMEDIATE RANGE"]];
  sId["S-G-EWOH--"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.LONG RANGE"]];
  sId["S-G-EWH---"] = [icn["GR.EQ.HOWITZER"]];
  sId["S-G-EWHL--"] = [icn["GR.EQ.HOWITZER"], icn["GR.EQ.SHORT RANGE"]];
  sId["S-G-EWHLS-"] = [
    ms_1._translate(
      0,
      -15,
      ms_1._scale(0.8, [icn["GR.EQ.HOWITZER"], icn["GR.EQ.SHORT RANGE"]])
    ),
    icn["GR.EQ.HOWITZER TRACKED"]
  ];
  sId["S-G-EWHM--"] = [icn["GR.EQ.HOWITZER"], icn["GR.EQ.INTERMEDIATE RANGE"]];
  sId["S-G-EWHMS-"] = [
    ms_1._translate(
      0,
      -15,
      ms_1._scale(0.8, [icn["GR.EQ.HOWITZER"], icn["GR.EQ.INTERMEDIATE RANGE"]])
    ),
    icn["GR.EQ.HOWITZER TRACKED"]
  ];
  sId["S-G-EWHH--"] = [icn["GR.EQ.HOWITZER"], icn["GR.EQ.LONG RANGE"]];
  sId["S-G-EWHHS-"] = [
    ms_1._translate(
      0,
      -15,
      ms_1._scale(0.8, [icn["GR.EQ.HOWITZER"], icn["GR.EQ.LONG RANGE"]])
    ),
    icn["GR.EQ.HOWITZER TRACKED"]
  ];
  sId["S-G-EWG---"] = [icn["GR.EQ.ANTITANK GUN"]];
  sId["S-G-EWGL--"] = [icn["GR.EQ.ANTITANK GUN"], icn["GR.EQ.SHORT RANGE"]];
  sId["S-G-EWGM--"] = [
    icn["GR.EQ.ANTITANK GUN"],
    icn["GR.EQ.INTERMEDIATE RANGE"]
  ];
  sId["S-G-EWGH--"] = [icn["GR.EQ.ANTITANK GUN"], icn["GR.EQ.LONG RANGE"]];
  sId["S-G-EWGR--"] = [icn["GR.EQ.RECOILLESS GUN"]];
  sId["S-G-EWD---"] = [icn["GR.EQ.DIRECT FIRE GUN"]];
  sId["S-G-EWDL--"] = [icn["GR.EQ.DIRECT FIRE GUN"], icn["GR.EQ.SHORT RANGE"]];
  sId["S-G-EWDLS-"] = [
    ms_1._translate(
      0,
      -15,
      ms_1._scale(0.8, [icn["GR.EQ.DIRECT FIRE GUN"], icn["GR.EQ.SHORT RANGE"]])
    ),
    icn["GR.EQ.HOWITZER TRACKED"]
  ];
  sId["S-G-EWDM--"] = [
    icn["GR.EQ.DIRECT FIRE GUN"],
    icn["GR.EQ.INTERMEDIATE RANGE"]
  ];
  sId["S-G-EWDMS-"] = [
    ms_1._translate(
      0,
      -15,
      ms_1._scale(0.8, [
        icn["GR.EQ.DIRECT FIRE GUN"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ])
    ),
    icn["GR.EQ.HOWITZER TRACKED"]
  ];
  sId["S-G-EWDH--"] = [icn["GR.EQ.DIRECT FIRE GUN"], icn["GR.EQ.LONG RANGE"]];
  sId["S-G-EWDHS-"] = [
    ms_1._translate(
      0,
      -15,
      ms_1._scale(0.8, [icn["GR.EQ.DIRECT FIRE GUN"], icn["GR.EQ.LONG RANGE"]])
    ),
    icn["GR.EQ.HOWITZER TRACKED"]
  ];
  sId["S-G-EWA---"] = [icn["GR.EQ.AIR DEFENCE GUN"]];
  sId["S-G-EWAL--"] = [icn["GR.EQ.AIR DEFENCE GUN"], icn["GR.EQ.SHORT RANGE"]];
  sId["S-G-EWAM--"] = [
    icn["GR.EQ.AIR DEFENCE GUN"],
    icn["GR.EQ.INTERMEDIATE RANGE"]
  ];
  sId["S-G-EWAH--"] = [icn["GR.EQ.AIR DEFENCE GUN"], icn["GR.EQ.LONG RANGE"]];

  sId["S-G-EV----"] = [
    icn["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"]
  ];
  sId["S-G-EVA---"] = [
    icn["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],
    icn["GR.EQ.ARMOURED VEHICLE"]
  ];
  sId["S-G-EVAT--"] = [icn["GR.EQ.TANK"]];
  sId["S-G-EVATL-"] = [icn["GR.EQ.TANK"], icn["GR.EQ.LIGHT TANK"]];
  sId["S-G-EVATLR"] = sId["S-G-EVATW-"] = [
    icn["GR.EQ.TANK"],
    icn["GR.EQ.LIGHT TANK"],
    icn["GR.EQ.TANK RECOVERY VEHICLE"]
  ];
  sId["S-G-EVATM-"] = [icn["GR.EQ.TANK"], icn["GR.EQ.MEDIUM TANK"]];
  sId["S-G-EVATMR"] = sId["S-G-EVATX-"] = [
    icn["GR.EQ.TANK"],
    icn["GR.EQ.MEDIUM TANK"],
    icn["GR.EQ.TANK RECOVERY VEHICLE"]
  ];
  sId["S-G-EVATH-"] = [icn["GR.EQ.TANK"], icn["GR.EQ.HEAVY TANK"]];
  sId["S-G-EVATHR"] = sId["S-G-EVATY-"] = [
    icn["GR.EQ.TANK"],
    icn["GR.EQ.HEAVY TANK"],
    icn["GR.EQ.TANK RECOVERY VEHICLE"]
  ];
  sId["S-G-EVAA--"] = [icn["GR.EQ.ARMOURED PERSONNEL CARRIER"]];
  sId["S-G-EVAAR-"] = [
    icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
    icn["GR.EQ.TANK RECOVERY VEHICLE"]
  ];
  sId["S-G-EVAI--"] = [icn["GR.EQ.ARMOURED FIGHTING VEHICLE"]];
  sId["S-G-EVAC--"] = [
    icn["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"]
  ];
  sId["S-G-EVAS--"] = [
    icn["GR.EQ.ARMOURED PERSONNEL CARRIER COMBAT SERVICE SUPPORT VEHICLE"]
  ];
  sId["S-G-EVAL--"] = [
    icn["GR.EQ.ARMOURED FIGHTING VEHICLE"],
    icn["GR.EQ.CROSS-COUNTRY"]
  ];
  sId["S-G-EVU---"] = [icn["GR.EQ.UTILITY VEHICLE"]];
  sId["S-G-EVUB--"] = [icn["GR.EQ.BUS"]];
  sId["S-G-EVUS--"] = [icn["GR.EQ.SEMI-TRAILER TRUCK"]];
  sId["S-G-EVUSL-"] = [
    icn["GR.EQ.SEMI-TRAILER TRUCK"],
    icn["GR.EQ.UTILITY VEHICLE LIGHT"]
  ];
  sId["S-G-EVUSM-"] = [
    icn["GR.EQ.SEMI-TRAILER TRUCK"],
    icn["GR.EQ.UTILITY VEHICLE MEDIUM"]
  ];
  sId["S-G-EVUSH-"] = [
    icn["GR.EQ.SEMI-TRAILER TRUCK"],
    icn["GR.EQ.UTILITY VEHICLE HEAVY"]
  ];
  sId["S-G-EVUL--"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.LIMITED CROSS-COUNTRY"]
  ];
  sId["S-G-EVUX--"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.CROSS-COUNTRY"]
  ];
  sId["S-G-EVUR--"] = [icn["GR.EQ.WATER VEHICLE"]];
  sId["S-G-EVUT--"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"]
  ];
  sId["S-G-EVUTL-"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],
    icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK.LIGHT"]
  ];
  sId["S-G-EVUTH-"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],
    icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK.HEAVY"]
  ];
  sId["S-G-EVUA--"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.MEDICAL EVACUATION"]
  ];
  sId["S-G-EVUAA-"] = [
    icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
    icn["GR.EQ.MEDICAL EVACUATION"]
  ];
  sId["S-G-EVE---"] = [
    icn["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],
    ms_1._scale(0.7, icn["GR.IC.ENGINEER"])
  ];
  sId["S-G-EVEB--"] = [icn["GR.EQ.BRIDGE"]];
  sId["S-G-EVEE--"] = [icn["GR.EQ.EARTHMOVER"]];
  //.X.3.2.2.3.2 .1 WRONG SIDC
  //sId['S-G-EVEE--'] = [];
  sId["S-G-EVEC--"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.LIMITED CROSS-COUNTRY"],
    ms_1._scale(0.6, icn["GR.IC.ENGINEER"])
  ];
  sId["S-G-EVEM--"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.MINE LAYING VEHICLE"]
  ];
  sId["S-G-EVEMA-"] = [icn["GR.EQ.MINE CLEARING EQUIPMENT"], icn["GR.EQ.TANK"]];
  sId["S-G-EVEMV-"] = [
    icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
    icn["GR.EQ.ARMORED CARRIER WITH VOLCANO"]
  ];
  sId["S-G-EVEMT-"] = [
    icn["GR.EQ.MINE CLEARING EQUIPMENT"],
    ms_1._translate(0, -10, icn["GR.EQ.LIMITED CROSS-COUNTRY"])
  ];
  sId["S-G-EVEML-"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.LIMITED CROSS-COUNTRY"],
    icn["GR.EQ.ARMORED CARRIER WITH VOLCANO"]
  ];
  sId["S-G-EVEA--"] = [icn["GR.EQ.MINE CLEARING EQUIPMENT"]];
  sId["S-G-EVEAA-"] = [icn["GR.EQ.MINE CLEARING EQUIPMENT"], icn["GR.EQ.TANK"]];
  sId["S-G-EVEAT-"] = [
    icn["GR.EQ.MINE CLEARING EQUIPMENT"],
    ms_1._translate(0, -10, icn["GR.EQ.LIMITED CROSS-COUNTRY"])
  ];
  sId["S-G-EVEMSM"] = [
    icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
    icn["GR.EQ.MINE SCATTERABLE"]
  ];
  sId["S-G-EVED--"] = [icn["GR.EQ.DOZER"]];
  sId["S-G-EVEDA-"] = [icn["GR.EQ.DOZER ARMORED"]];
  sId["S-G-EVES--"] = [
    icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
    ms_1._scale(0.6, icn["GR.IC.ENGINEER"])
  ];
  sId["S-G-EVER--"] = [
    icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
    ms_1._scale(0.6, icn["GR.IC.ENGINEER"]),
    icn["GR.EQ.ARMOURED PERSONNEL CARRIER ENGINEER RECON VEHICLE"]
  ];
  sId["S-G-EVEH--"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.LIMITED CROSS-COUNTRY"],
    icn["GR.EQ.UTILITY VEHICLE BACKHOE"]
  ];
  sId["S-G-EVEF--"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.CROSS-COUNTRY"],
    icn["GR.EQ.UTILITY VEHICLE FERRY TRANSPORTER"]
  ];
  sId["S-G-EVD---"] = [
    icn["GR.EQ.UTILITY VEHICLE"],
    icn["GR.EQ.CROSS-COUNTRY"],
    ms_1._scale(0.7, icn["GR.IC.DRILLING"])
  ];
  sId["S-G-EVT---"] = [icn["GR.EQ.TRAIN LOCOMOTIVE"]];
  sId["S-G-EVC---"] = [icn["AR.I.CIVILIAN"]];
  sId["S-G-EVCA--"] = [icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"]];
  sId["S-G-EVCAL-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
    icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
  ];
  sId["S-G-EVCAM-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
    icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
  ];
  sId["S-G-EVCAH-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
    icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
  ];
  sId["S-G-EVCO--"] = [icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"]];
  sId["S-G-EVCOL-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
    icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
  ];
  sId["S-G-EVCOM-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
    icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
  ];
  sId["S-G-EVCOH-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
    icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
  ];
  sId["S-G-EVCM--"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]
  ];
  sId["S-G-EVCML-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
  ];
  sId["S-G-EVCMM-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
  ];
  sId["S-G-EVCMH-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
  ];
  sId["S-G-EVCU--"] = [icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"]];
  sId["S-G-EVCUL-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
  ];
  sId["S-G-EVCUM-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
  ];
  sId["S-G-EVCUH-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
  ];
  sId["S-G-EVCJ--"] = [icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"]];
  sId["S-G-EVCJL-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
  ];
  sId["S-G-EVCJM-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
  ];
  sId["S-G-EVCJH-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
  ];
  sId["S-G-EVCT--"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
  ];
  sId["S-G-EVCTL-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"],
    icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
  ];
  sId["S-G-EVCTM-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],
    icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
  ];
  sId["S-G-EVCTH-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
    icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"],
    icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
  ];
  sId["S-G-EVCF--"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
    icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
  ];
  sId["S-G-EVCFL-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
    icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"],
    icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
  ];
  sId["S-G-EVCFM-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
    icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],
    icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
  ];
  sId["S-G-EVCFH-"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
    icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"],
    icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
  ];
  sId["S-G-EVM---"] = [icn["GR.EQ.PACK ANIMAL"]];
  sId["S-G-EVS---"] = [
    icn["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],
    icn["GR.EQ.MISSILE SUPPORT"]
  ];
  sId["S-G-EVST--"] = [
    icn["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],
    icn["GR.EQ.MISSILE TRANSLOADER"]
  ];
  sId["S-G-EVSR--"] = [
    icn["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],
    icn["GR.EQ.MISSILE TRANSPORTER"]
  ];
  sId["S-G-EVSC--"] = [
    icn["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],
    icn["GR.EQ.MISSILE CRANE/LOADING DEVICE"]
  ];
  sId["S-G-EVSP--"] = [
    icn["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],
    icn["GR.EQ.MISSILE PROPELLANT TRANSPORTER"]
  ];
  sId["S-G-EVSW--"] = [
    icn["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],
    icn["GR.EQ.MISSILE WARHEAD TRANSPORTER"]
  ];
  sId["S-G-ES----"] = [icn["GR.EQ.SENSOR"]];
  sId["S-G-ESR---"] = [icn["GR.EQ.RADAR"]];
  sId["S-G-ESE---"] = [icn["GR.EQ.SENSOR EMPLACED"]];
  sId["S-G-EXI---"] = [icn["GR.EQ.IMPROVISED EXPLOSIVE DEVICE"]];
  sId["S-G-EXL---"] = [icn["GR.EQ.LASER"]];
  sId["S-G-EXN---"] = [icn["GR.EQ.CBRN EQUIPMENT"]];
  sId["S-G-EXF---"] = [icn["GR.EQ.FLAME THROWER"]];
  sId["S-G-EXM---"] = [icn["GR.EQ.LAND MINES"]];
  sId["S-G-EXMC--"] = [icn["GR.EQ.ANTIPERSONNEL LAND MINE"]];
  sId["S-G-EXML--"] = [icn["GR.EQ.ANTIPERSONNEL LAND MINE LESS THAN LETHAL"]];

  //This sets up the bounding boxes for equipment to have the bottom at the right place. (this will be used for mobility when unframed)
  var equipmentBottom = {
    "E-----": 0,
    "EWM---": 140,
    "EWMA--": 140,
    "EWMAS-": 140,
    EWMASR: 140,
    EWMASE: 140,
    "EWMAI-": 140,
    EWMAIR: 140,
    EWMAIE: 140,
    "EWMAL-": 140,
    EWMALR: 140,
    EWMALE: 140,
    "EWMAT-": 153,
    EWMATR: 153,
    EWMATE: 153,
    "EWMS--": 140,
    "EWMSS-": 140,
    "EWMSI-": 140,
    "EWMSL-": 140,
    "EWMT--": 140,
    "EWMTL-": 140,
    "EWMTM-": 140,
    "EWMTH-": 140,
    "EWS---": 140,
    "EWSL--": 140,
    "EWSM--": 140,
    "EWSH--": 140,
    "EWX---": 140,
    "EWXL--": 140,
    "EWXM--": 140,
    "EWXH--": 140,
    "EWT---": 140,
    "EWTL--": 140,
    "EWTM--": 140,
    "EWTH--": 140,
    "EWR---": 140,
    "EWRL--": 140,
    "EWRM--": 140,
    "EWRH--": 140,
    "EWZ---": 140,
    "EWZL--": 140,
    "EWZM--": 140,
    "EWZH--": 140,
    "EWO---": 140,
    "EWOL--": 140,
    "EWOM--": 140,
    "EWOH--": 140,
    "EWH---": 140,
    "EWHL--": 140,
    "EWHLS-": 130,
    "EWHM--": 140,
    "EWHMS-": 130,
    "EWHH--": 140,
    "EWHHS-": 130,
    "EWG---": 140,
    "EWGL--": 140,
    "EWGM--": 140,
    "EWGH--": 140,
    "EWGR--": 140,
    "EWD---": 140,
    "EWDL--": 140,
    "EWDLS-": 130,
    "EWDM--": 140,
    "EWDMS-": 130,
    "EWDH--": 140,
    "EWDHS-": 130,
    "EWA---": 140,
    "EWAL--": 140,
    "EWAM--": 140,
    "EWAH--": 140,
    "EV----": 129,
    "EVA---": 129,
    "EVAT--": 130,
    "EVATL-": 130,
    EVATLR: 130,
    "EVATM-": 130,
    EVATMR: 130,
    "EVATH-": 130,
    EVATHR: 130,
    "EVAA--": 130,
    "EVAAR-": 130,
    "EVAI--": 130,
    "EVAC--": 130,
    "EVAS--": 130,
    "EVAL--": 140,
    "EVU---": 130,
    "EVAB--": 130,
    "EVUS--": 140,
    "EVUSL-": 140,
    "EVUSM-": 140,
    "EVUSH-": 140,
    "EVUL--": 140,
    "EVUX--": 140,
    "EVUR--": 130,
    "EVUTL-": 130,
    "EVUTH-": 130,
    "EVUA--": 130,
    "EVUAA-": 130,
    "EVE---": 129,
    "EVEB--": 130,
    "EVEE--": 130,
    "EVEC--": 140,
    "EVEM--": 130,
    "EVEMA-": 130,
    "EVEMV-": 130,
    "EVEMT-": 130,
    "EVEML-": 140,
    "EVEA--": 120,
    "EVEAA-": 130,
    "EVEAT-": 130,
    EVEMSM: 130,
    "EVED--": 130,
    "EVEDA-": 130,
    "EVES--": 130,
    "EVER--": 130,
    "EVEH--": 140,
    "EVEF--": 140,
    "EVD---": 140,
    "EVT--": 130,
    "EVC---": 119,
    "EVCA--": 132.5,
    "EVCAL-": 132.5,
    "EVCAM-": 132.5,
    "EVCAH-": 132.5,
    "EVCO--": 132.5,
    "EVCOL-": 132.5,
    "EVCOM-": 132.5,
    "EVCOH-": 132.5,
    "EVCM--": 132.5,
    "EVCML-": 132.5,
    "EVCMM-": 132.5,
    "EVCMH-": 132.5,
    "EVCU--": 132.5,
    "EVCUL-": 132.5,
    "EVCUM-": 132.5,
    "EVCUH-": 132.5,
    "EVCJ--": 132.5,
    "EVCJL-": 132.5,
    "EVCJM-": 132.5,
    "EVCJH-": 132.5,
    "EVCT--": 132.5,
    "EVCTL-": 132.5,
    "EVCTM-": 132.5,
    "EVCTH-": 132.5,
    "EVCF--": 132.5,
    "EVCFL-": 132.5,
    "EVCFM-": 132.5,
    "EVCFH-": 132.5,
    "EVM---": 125,
    "EVS---": 129,
    "EVST--": 129,
    "EVSR--": 129,
    "EVSC--": 129,
    "EVSP--": 129,
    "EVSW--": 129,
    "ES----": 140,
    "ESR---": 120,
    "ESE---": 136,
    "EXI---": 119,
    "EXL---": 145,
    "EXN---": 140,
    "EXF---": 135,
    "EXM---": 130,
    "EXMC--": 122,
    "EXML--": 122
  };
  for (var key in equipmentBottom) {
    if (!equipmentBottom.hasOwnProperty(key)) continue;
    bbox["S-G-" + key] = { x1: 50, x2: 150, y1: 50, y2: equipmentBottom[key] };
  }
};

//var ms = require("../ms.js");

var iconsInstallations = function installations(sId, bbox, icn, _STD2525) {
  //Adds support for installations
  sId["S-G-I-----"] = [];
  sId["S-G-IR----"] = [icn["GR.IN.IC.RAW MATERIAL PRODUCTION/STORAGE"]];
  sId["S-G-IRM---"] = [icn["GR.IN.IC.MINE"]];
  sId["S-G-IRP---"] = [icn["GR.IC.FF.CLASS III"]];
  sId["S-G-IRN---"] = [icn["GR.IC.CBRN"]];
  sId["S-G-IRNB--"] = [icn["GR.IC.CBRN"], icn["GR.M1.BIOLOGICAL"]];
  sId["S-G-IRNC--"] = [icn["GR.IC.CBRN"], icn["GR.M1.CHEMICAL"]];
  sId["S-G-IRNN--"] = [icn["GR.IC.CBRN"], icn["GR.M1.NUCLEAR"]];
  sId["S-G-IP----"] = [icn["GR.IN.IC.PROCESSING FACILITY"]];
  sId["S-G-IPD---"] = [icn["GR.IC.CBRN"], icn["GR.M1.DECONTAMINATION"]];
  sId["S-G-IE----"] = [icn["GR.IC.FF.CLASS IX"]];
  sId["S-G-IU----"] = [icn["GR.IN.IC.UTILITY FACILITY"]];
  sId["S-G-IUR---"] = [icn["GR.IN.IC.RESEARCH"]];
  sId["S-G-IUT---"] = [icn["GR.IN.IC.TELECOMMUNICATIONS"]];
  sId["S-G-IUE---"] = [icn["GR.IN.IC.ELECTRIC POWER"]];
  sId["S-G-IUEN--"] = [
    icn["GR.IN.IC.ELECTRIC POWER"],
    icn["GR.IN.IC.ELECTRIC POWER NUCLEAR"]
  ];
  sId["S-G-IUED--"] = [
    icn["GR.IN.IC.ELECTRIC POWER"],
    icn["GR.IN.IC.ELECTRIC POWER DAM"]
  ];
  sId["S-G-IUEF--"] = [
    icn["GR.IN.IC.ELECTRIC POWER"],
    icn["GR.IN.IC.ELECTRIC POWER FOSSIL"]
  ];
  sId["S-G-IUP---"] = [icn["GR.IC.WATER"]];
  sId["S-G-IMF---"] = [icn["GR.IN.IC.ATOMIC ENERGY"]];
  sId["S-G-IMFA--"] = [
    icn["GR.IN.IC.ATOMIC ENERGY"],
    icn["GR.IN.M2.ATOMIC ENERGY REACTOR"]
  ];
  sId["S-G-IMFP--"] = [
    icn["GR.IN.IC.ATOMIC ENERGY"],
    icn["GR.IN.M2.NUCLEAR MATERIAL PRODUCTION"]
  ];
  sId["S-G-IMFPW-"] = [
    icn["GR.IN.IC.ATOMIC ENERGY WEAPONS GRADE"],
    icn["GR.IN.M2.NUCLEAR MATERIAL PRODUCTION"]
  ];
  sId["S-G-IMFS--"] = [
    icn["GR.IN.IC.ATOMIC ENERGY"],
    icn["GR.IN.M2.NUCLEAR MATERIAL STORAGE"]
  ];
  sId["S-G-IMA---"] = [icn["GR.IN.IC.AIRCRAFT PRODUCTION & ASSEMBLY"]];
  sId["S-G-IME---"] = [icn["GR.IC.FF.CLASS V"]];
  sId["S-G-IMG---"] = [icn["GR.EQ.TANK"]];
  sId["S-G-IMV---"] = [icn["GR.IC.MAINTENANCE"]];
  sId["S-G-IMN---"] = [icn["GR.EQ.DOZER"]];
  sId["S-G-IMNB--"] = [icn["GR.IN.IC.BRIDGE"]];
  sId["S-G-IMC---"] = [
    icn["GR.IC.CBRN"],
    icn["GR.IN.M2.CHEMICAL & BIOLOGICAL WARFARE"]
  ];
  sId["S-G-IMS---"] = [icn["GR.IC.NAVAL"], icn["GR.IN.M2.SHIP CONSTRUCTION"]];
  sId["S-G-IMM---"] = [icn["GR.IC.MISSILE"]];
  sId["S-G-IG----"] = [icn["AR.I.GOVERNMENT"]];
  sId["S-G-IB----"] = [icn["GR.IN.IC.BASE"]];
  sId["S-G-IBA---"] = [
    icn["GR.IC.TRANSPORTATION"],
    icn["GR.IC.AIRPORT OF DEBARKATION"]
  ];
  sId["S-G-IBN---"] = [icn["GR.IC.NAVAL"]];
  sId["S-G-IT----"] = [icn["GR.IC.TRANSPORTATION"]];
  sId["S-G-IX----"] = [icn["GR.IC.FF.MEDICAL"]];
  sId["S-G-IXH---"] = [icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]];
  sId["S-G-IRR---"] = sId["S-G-IRSR--"] = [
    icn["GR.IN.IC.SEA SURFACE INSTALLATION, OIL RIG/PLATFORM"]
  ];
};

//var ms = require("../ms.js");

var iconsSea = function sea(sId, bbox, icn, _STD2525) {
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
    icn["SE.M1.ANTISUBMARINE WARFARE"]
  ];
  sId["S-S-CLLLMI"] = [
    icn["SE.IC.LITTORAL COMBATANT SHIP"],
    icn["SE.M1.MINE WARFARE"]
  ];
  sId["S-S-CLLLSU"] = [
    icn["SE.IC.LITTORAL COMBATANT SHIP"],
    icn["SE.M1.SURFACE WARFARE"]
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
  sId["S-S-NS----"] = [icn["SE.IC.TUG, HARBOUR"]];
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
  sId["S-S-ED----"] = [icn["SE.IC.DITCHED AIRCRAFT"]];
  sId["S-S-EP----"] = [icn["SE.IC.PERSON IN WATER"]];
  sId["S-S-EV----"] = [icn["SE.IC.DISTRESSED VESSEL"]];
  sId["S-S-ZM----"] = [icn["SE.IC.SEA MINELIKE"]];
  sId["S-S-ZN----"] = [icn["SE.IC.NAVIGATIONAL"]];
  sId["S-S-ZI----"] = [icn["SE.IC.ICEBERG"]];
};

//var ms = require("../ms.js");

var iconsSubsurface = function subsurface(sId, bbox, icn, _STD2525) {
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
    icn["SU.M1.POSSIBLE SUBMARINE - LOW 1"]
  ];
  sId["S-U-S2----"] = [
    icn["SU.IC.SUBMARINE"],
    icn["SU.M1.POSSIBLE SUBMARINE - LOW 2"]
  ];
  sId["S-U-S3----"] = [
    icn["SU.IC.SUBMARINE"],
    icn["SU.M1.POSSIBLE SUBMARINE - HIGH 3"]
  ];
  sId["S-U-S4----"] = [
    icn["SU.IC.SUBMARINE"],
    icn["SU.M1.POSSIBLE SUBMARINE - HIGH 4"]
  ];
  sId["S-U-SL----"] = [icn["SU.IC.SUBMARINE"], icn["SU.M1.PROBABLE SUBMARINE"]];
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
  sId["S-U-WMFR--"] = [icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - FLOATING"]];
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
  sId["S-U-E-----"] = [icn["SU.IC.ENVIRONMENTAL REPORT LOCATION"]];
  sId["S-U-V-----"] = [icn["SU.IC.DIVE REPORT LOCATION"]];
  sId["S-U-X-----"] = [icn["SU.IC.UNEXPLODED EXPLOSIVE ORDNANCE"]];
  sId["S-U-NBS---"] = [icn["SU.IC.SEABED INSTALLATION/MANMADE"]];
  sId["S-U-NBR---"] = [icn["SU.IC.SEABED ROCK/STONE, OBSTACLE, OTHER"]];
  sId["S-U-NBW---"] = [icn["SU.IC.WRECK"]];
  sId["S-U-NM----"] = [icn["SU.IC.MARINE LIFE"]];
  sId["S-U-NA----"] = [icn["SU.IC.SEA ANOMALY"]];
};

var iconsSof = function sof(sId, bbox, icn, _STD2525) {
  // SOF ===========================================================================
  sId["S-F-------"] = [icn["AR.I.SPECIAL OPERATIONS FORCES"]];
  sId["S-F-A-----"] = [
    icn["AR.I.MILITARY ROTARY WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
  ];
  sId["S-F-AF----"] = [
    icn["AR.I.MILITARY FIXED WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
  ];
  sId["S-F-AFA---"] = [
    icn["AR.I.MILITARY FIXED WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["SOF.M2.ATTACK"]
  ];
  sId["S-F-AFK---"] = [
    icn["AR.I.MILITARY FIXED WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["SOF.M2.REFUEL"]
  ];
  sId["S-F-AFU---"] = [
    icn["AR.I.MILITARY FIXED WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["SOF.M2.UTILITY"]
  ];
  sId["S-F-AFUL--"] = [
    icn["AR.I.MILITARY FIXED WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["AIR.M2.LIGHT"]
  ];
  sId["S-F-AFUM--"] = [
    icn["AR.I.MILITARY FIXED WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["AIR.M2.MEDIUM"]
  ];
  sId["S-F-AFUH--"] = [
    icn["AR.I.MILITARY FIXED WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["AIR.M2.HEAVY"]
  ];
  sId["S-F-AV----"] = [
    icn["AR.I.MILITARY FIXED WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["SOF.M2.VSTOL"]
  ];
  sId["S-F-AH----"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    _STD2525 ? "<line x1='100' y1='100' x2='100' y2='140' />" : "",
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
  ];
  sId["S-F-AHH---"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["SOF.M2.COMBAT SEARCH AND RESCUE"]
  ];
  sId["S-F-AHA---"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["SOF.M2.ATTACK"]
  ];
  sId["S-F-AHU---"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["SOF.M2.UTILITY"]
  ];
  sId["S-F-AHUL--"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["AIR.M2.LIGHT"]
  ];
  sId["S-F-AHUM--"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["AIR.M2.MEDIUM"]
  ];
  sId["S-F-AHUH--"] = [
    icn["GR.IC.AVIATION ROTARY WING"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"],
    icn["AIR.M2.HEAVY"]
  ];
  sId["S-F-SN----"] = sId["S-F-N-----"] = [
    icn["GR.IC.NAVAL"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
  ];
  sId["S-F-SNS---"] = sId["S-F-NS----"] = [icn["GR.IC.SEA-AIR-LAND"]];
  sId["S-F-SNU---"] = sId["S-F-NU----"] = [
    icn["SOF.IC.UNDERWATER DEMOLITION TEAM"]
  ];
  sId["S-F-SNB---"] = sId["S-F-NB----"] = [
    icn["SE.IC.COMBATANT"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
  ];
  sId["S-F-SNN---"] = sId["S-F-NN----"] = [
    icn["SU.IC.SUBMARINE NUCLEAR PROPULSION"],
    icn["AIR.M1.SPECIAL OPERATIONS FORCES"]
  ];
  sId["S-F-G-----"] = [
    icn["GR.IC.FF.INFANTRY"],
    icn["AR.I.SPECIAL OPERATIONS FORCES"]
  ];
  sId["S-F-GS----"] = [icn["GR.IC.SPECIAL FORCES"]];
  sId["S-F-GR----"] = sId["S-F-GSR---"] = [
    icn["GR.IC.FF.INFANTRY"],
    icn["AIR.M1.RECONNAISSANCE"],
    icn["GR.M2.AIRBORNE"]
  ];
  sId["S-F-GP----"] = sId["S-F-GSP---"] = [
    icn["GR.EQ.PSYCHOLOGICAL OPERATIONS EQUIPMENT"]
  ];
  sId["S-F-GPA---"] = sId["S-F-GSPA--"] = [
    icn["GR.EQ.PSYCHOLOGICAL OPERATIONS EQUIPMENT"],
    ms_1._translate(0, -30, ms_1._scale(0.7, icn["AR.I.MILITARY FIXED WING"]))
  ];
  sId["S-F-GC----"] = sId["S-F-GCA---"] = [icn["GR.IC.CIVIL AFFAIRS"]];
  sId["S-F-GB----"] = sId["S-F-B-----"] = [
    icn["AR.I.SPECIAL OPERATIONS FORCES"],
    icn["GR.M2.SUPPORT"]
  ];
};

// Icon parts for SIGNALS INTELLIGENCE
var signalsIntelligence = function(
  iconParts,
  properties,
  colors,
  STD2525,
  monoColor,
  alternateMedal
) {
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
  function textm1(str) {
    var size = 30;
    if (str.length == 3) {
      size = 25;
    }
    if (str.length >= 4) {
      size = 22;
    }
    return {
      type: "text",
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 77,
      fontsize: size,
      text: str
    };
  }

  var affiliation = properties.affiliation || "Friend";
  //If hostile and not monoColor, make it red, otherwise use the iconColor.
  var iconColor = colors.iconColor[affiliation];

  //var numberSIDC = properties.numberSIDC;
  var icn = {};

  // SIGNALS INTELLIGENCE ==========================================================
  //if(symbol.codingscheme == "I"){
  icn["SI.IC.COMMUNICATIONS"] = {
    type: "path",
    d:
      "m 93,120 14,0 0,0 m -7,-27 0,27 m 2,-25 8,2 -5,5 13,3 m -20,-10 -8,2 5,5 -14,3 m 21,-13 8,-2 -5,-5 13,-3 m -37,0 14,3 -5,5 8,2",
    fill: false
  };
  icn["SI.IC.RADAR"] = {
    type: "path",
    d: "m 115,90 -15,15 0,-15 -15,15 M 80,85 c 0,25 15,35 35,35",
    fill: false
  };
  icn["SI.M1.ANTI-AIRCRAFT FIRE CONTROL"] = textm1("AA");
  icn["SI.M1.AIRBORNE SEARCH AND BOMBING"] = textm1("AB");
  icn["SI.M1.AIRBORNE INTERCEPT"] = textm1("AI");
  icn["SI.M1.ALTIMETER"] = textm1("AL");
  icn["SI.M1.AIRBORNE RECONNAISSANCE AND MAPPING"] = textm1("AM");
  icn["SI.M1.AIR TRAFFIC CONTROL"] = textm1("AT");
  icn["SI.M1.BEACON TRANSPONDER (NOT IFF)"] = textm1("BN");
  icn["SI.M1.BATTLEFIELD SURVEILLANCE"] = textm1("BS");
  icn["SI.M1.CONTROLLED APPROACH"] = textm1("CA");
  icn["SI.M1.CONTROLLED INTERCEPT"] = textm1("CI");
  icn["SI.M1.CELLULAR/MOBILE"] = textm1("CM");
  icn["SI.M1.COASTAL SURVEILLANCE"] = textm1("CS");
  icn["SI.M1.DECOY/MIMIC"] = textm1("DC");
  icn["SI.M1.DATA TRANSMISSION"] = textm1("DT");
  icn["SI.M1.EARTH SURVEILLANCE"] = textm1("ES");
  icn["SI.M1.EARLY WARNING"] = textm1("EW");
  icn["SI.M1.FIRE CONTROL"] = textm1("FC");
  icn["SI.M1.GROUND MAPPING"] = textm1("GM");
  icn["SI.M1.HEIGHT FINDING"] = textm1("HF");
  icn["SI.M1.HARBOR SURVEILLANCE"] = textm1("HS");
  icn["SI.M1.IDENTIFICATION, FRIEND OR FOE (INTERROGATOR)"] = textm1("IF");
  icn["SI.M1.INSTRUMENT LANDING SYSTEM"] = textm1("IL");
  icn["SI.M1.IONOSPHERIC SOUNDING"] = textm1("IS");
  icn["SI.M1.IDENTIFICATION, FRIEND OR FOE (TRANSPONDER)"] = textm1("IT");
  icn["SI.M1.BARRAGE JAMMER"] = textm1("JB");
  icn["SI.M1.CLICK JAMMER"] = textm1("JC");
  icn["SI.M1.DECEPTIVE JAMMER"] = textm1("JD");
  icn["SI.M1.FREQUENCY SWEPT JAMMER"] = textm1("JF");
  icn["SI.M1.JAMMER (GENERAL)"] = textm1("JG");
  icn["SI.M1.NOISE JAMMER"] = textm1("JN");
  icn["SI.M1.PULSED JAMMER"] = textm1("JP");
  icn["SI.M1.REPEATER JAMMER"] = textm1("JR");
  icn["SI.M1.SPOT NOISE JAMMER"] = textm1("JS");
  icn["SI.M1.TRANSPONDER JAMMER"] = textm1("JT");
  icn["SI.M1.MISSILE ACQUISITION"] = textm1("MA");
  icn["SI.M1.MISSILE CONTROL"] = textm1("MC");
  icn["SI.M1.MISSILE DOWNLINK"] = textm1("MD");
  icn["SI.M1.METEOROLOGICAL"] = textm1("ME");
  icn["SI.M1.MULTI-FUNCTION"] = textm1("MF");
  icn["SI.M1.MISSILE GUIDANCE"] = textm1("MG");
  icn["SI.M1.MISSILE HOMING"] = textm1("MH");
  icn["SI.M1.MISSILE TRACKING"] = textm1("MT");
  icn["SI.M1.NAVIGATIONAL/GENERAL"] = textm1("NA");
  icn["SI.M1.NAVIGATIONAL/DISTANCE MEASURING EQUIPMENT"] = textm1("ND");
  icn["SI.M1.NAVIGATION/TERRAIN FOLLOWING"] = textm1("NT");
  icn["SI.M1.NAVIGATIONAL/WEATHER AVOIDANCE"] = textm1("NW");
  icn["SI.M1.OMNI-LINE OF SIGHT (LOS)"] = textm1("OL");
  icn["SI.M1.PROXIMITY USE"] = textm1("PF");
  icn["SI.M1.POINT-TO-POINT LINE OF SIGHT (LOS)"] = textm1("PP");
  icn["SI.M1.INSTRUMENTATION"] = textm1("RI");
  icn["SI.M1.RANGE ONLY"] = textm1("RO");
  icn["SI.M1.SONOBUOY"] = textm1("SB");
  icn["SI.M1.SATELLITE DOWNLINK"] = textm1("SD");
  icn["SI.M1.SPACE"] = textm1("SP");
  icn["SI.M1.SURFACE SEARCH"] = textm1("SS");
  icn["SI.M1.SHELL TRACKING"] = textm1("ST");
  icn["SI.M1.SATELLITE UPLINK"] = textm1("SU");
  icn["SI.M1.TARGET ACQUISITION"] = textm1("TA");
  icn["SI.M1.TARGET ILLUMINATION"] = textm1("TI");
  icn["SI.M1.TROPOSPHERIC SCATTER"] = textm1("TS");
  icn["SI.M1.TARGET TRACKING"] = textm1("TT");
  icn["SI.M1.UNKNOWN"] = textm1("UN");
  icn["SI.M1.VIDEO REMOTING"] = textm1("VR");
  icn["SI.M1.EXPERIMENTAL"] = textm1("XP");
  icn["SI.M1.ALPHA"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "A"
  };
  icn["SI.M1.BRAVO"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "B"
  };
  icn["SI.M1.CHARLIE"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "C"
  };
  icn["SI.M1.DELTA"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "D"
  };
  icn["SI.M1.ECHO"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "E"
  };
  icn["SI.M1.FOXTROT"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "F"
  };
  icn["SI.M1.HOTEL"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "H"
  };
  icn["SI.M1.INDY"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "I"
  };
  icn["SI.M1.MIKE"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "M"
  };
  icn["SI.M1.OSCAR"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "O"
  };
  icn["SI.M1.PAPA"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "P"
  };
  icn["SI.M1.SIERRA"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "S"
  };
  icn["SI.M1.TANGO"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "T"
  };
  icn["SI.M1.UNIFORM"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "U"
  };
  icn["SI.M2.ALPHA"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "A"
  };
  icn["SI.M2.BRAVO"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "B"
  };
  icn["SI.M2.CHARLIE"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "C"
  };
  icn["SI.M2.DELTA"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "D"
  };
  icn["SI.M2.ECHO"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "E"
  };
  icn["SI.M2.FOXTROT"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "F"
  };
  icn["SI.M2.GOLF"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "G"
  };
  icn["SI.M2.INDY"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "I"
  };
  icn["SI.M2.LIMA"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "L"
  };
  icn["SI.M2.MIKE"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "M"
  };
  icn["SI.M2.NOVEMBER"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "N"
  };
  icn["SI.M2.PAPA"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "P"
  };
  icn["SI.M2.SIERRA"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "S"
  };
  icn["SI.M2.TANGO"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "T"
  };
  icn["SI.M2.UNIFORM"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "U"
  };
  icn["SI.M2.WHISKEY"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "W"
  };
  icn["SI.M3.SPACE"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 75,
    fontsize: 25,
    text: "S"
  };
  icn["SI.M3.GROUND"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 75,
    fontsize: 25,
    text: "G"
  };

  function defaultProperties(instructions) {
    if (typeof instructions === "object") {
      if (Array.isArray(instructions)) {
        for (var i = 0; i < instructions.length; i++) {
          defaultProperties.call(this, instructions[i]);
        }
        return;
      }
      instructions.icon = true;
      if (instructions.type == "text") {
        if (!instructions.hasOwnProperty("fontfamily"))
          instructions.fontfamily = "Arial";
        if (!instructions.hasOwnProperty("fontweight"))
          instructions.fontweight = "bold";
        if (!instructions.hasOwnProperty("textanchor"))
          instructions.textanchor = "middle";
        if (!instructions.hasOwnProperty("stroke")) instructions.stroke = false;
      }
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

ms_1.addIconParts(signalsIntelligence);

var iconsSignalsIntelligence = function signalsIntelligence$$1(sId, bbox, icn, _STD2525) {
  //Adds support for 2525C Signals Intelligence
  sId["I-P-SCD---"] = [
    icn["SI.IC.COMMUNICATIONS"],
    icn["SI.M1.SIERRA"],
    icn["SI.M2.DELTA"],
    icn["SI.M3.SPACE"]
  ];
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
};

//var ms = require("../ms.js");

var iconsStabilityoperations = function stabilityoperations(sId, bbox, icn, _STD2525) {
  //Adds support for 2525C Stability Operations
  sId["O-V-A-----"] = [icn["ST.IC.ARSON/FIRE"]];
  sId["O-V-M-----"] = [icn["ST.IC.KILLING VICTIM"]];
  sId["O-V-MA----"] = [icn["ST.IC.KILLING VICTIM"], icn["ST.M1.MURDER"]];
  sId["O-V-MB----"] = [
    icn["ST.IC.KILLING VICTIM"],
    icn["ST.M1.EXECUTION (WRONGFUL KILLING)"]
  ];
  sId["O-V-MC----"] = [icn["ST.IC.KILLING VICTIM"], icn["ST.M1.ASSASSINATION"]];
  sId["O-V-B-----"] = [icn["ST.IC.BOMB"]];
  sId["O-V-Y-----"] = [icn["ST.IC.BOOBY TRAP"]];
  sId["O-V-D-----"] = [icn["ST.IC.DRIVE-BY SHOOTING"]];
  sId["O-V-S-----"] = [icn["ST.IC.SNIPING"]];
  sId["O-V-P-----"] = [icn["ST.IC.POISONING"]];
  sId["O-V-E-----"] = [icn["ST.IC.EXPLOSION"]];
  sId["O-V-EI----"] = [icn["ST.IC.EXPLOSION"], icn["ST.IC.IED"]];
  sId["O-L-B-----"] = [icn["ST.IC.BLACK LIST LOCATION"]];
  sId["O-L-G-----"] = [icn["ST.IC.GRAY LIST LOCATION"]];
  sId["O-L-W-----"] = [icn["ST.IC.WHITE LIST LOCATION"]];
  sId["O-L-M-----"] = [icn["ST.IC.MASS GRAVE LOCATION"]];
  sId["O-O-P-----"] = [icn["ST.IC.PATROLLING"]];
  sId["O-O-RW----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.WILLING"]];
  sId["O-O-RC----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.COERCED/IMPRESSED"]];
  sId["O-O-D-----"] = [icn["ST.IC.DEMONSTRATION"]];
  sId["O-O-M-----"] = [icn["ST.IC.MINE LAYING"]];
  sId["O-O-Y-----"] = [icn["ST.IC.PSYCHOLOGICAL OPERATIONS"]];
  sId["O-O-YT----"] = [
    icn["ST.IC.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS"]
  ];
  sId["O-O-YW----"] = [
    icn["ST.IC.PSYCHOLOGICAL OPERATIONS"],
    icn["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"]
  ];
  sId["O-O-YH----"] = [
    icn["ST.IC.PSYCHOLOGICAL OPERATIONS"],
    icn["ST.M1.HOUSE-TO-HOUSE"]
  ];
  sId["O-O-F-----"] = [icn["ST.IC.SEARCHING"]];
  sId["O-O-S-----"] = [icn["ST.IC.SPY"]];
  sId["O-O-O-----"] = [icn["ST.IC.FOOD DISTRIBUTION"]];
  sId["O-O-E-----"] = [icn["ST.IC.EXTORTION"]];
  sId["O-O-HT----"] = [
    icn["ST.IC.KNOWN INSURGENT VEHICLE"],
    icn["ST.M1.HIJACKING/HIJACKED"]
  ];
  sId["O-O-HA----"] = [
    icn["ST.IC.HIJACKING (AIRPLANE)"],
    icn["ST.M1.HIJACKING/HIJACKED"]
  ];
  sId["O-O-HV----"] = [
    icn["ST.IC.HIJACKING (BOAT)"],
    icn["ST.M1.HIJACKING/HIJACKED"]
  ];
  sId["O-O-K-----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.KIDNAPPING"]];
  sId["O-O-KA----"] = [
    icn["ST.IC.INDIVIDUAL"],
    icn["ST.M1.KIDNAPPING"],
    icn["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]
  ];
  sId["O-O-A-----"] = [icn["ST.IC.ARREST"]];
  sId["O-O-U-----"] = [icn["ST.IC.DRUG RELATED ACTIVITIES"]];
  sId["O-O-C-----"] = [icn["ST.IC.COMPOSITE LOSS"]];
  sId["O-O-CA----"] = [icn["ST.IC.COMPOSITE LOSS"], icn["ST.M1.COMBAT"]];
  sId["O-O-CB----"] = [icn["ST.IC.COMPOSITE LOSS"], icn["ST.M1.ACCIDENT"]];
  sId["O-O-CC----"] = [icn["ST.IC.COMPOSITE LOSS"], icn["ST.M1.OTHER"]];
  sId["O-I-R-----"] = [icn["ST.IC.GROUP"]];
  sId["O-I-S-----"] = [icn["ST.IC.SAFE HOUSE"]];
  sId["O-I-G-----"] = [icn["ST.IC.GRAFFITI"]];
  sId["O-I-V-----"] = [icn["ST.IC.VANDALISM/LOOT/RANSACK/PLUNDER/SACK"]];
  sId["O-I-I-----"] = [icn["ST.IC.KNOWN INSURGENT VEHICLE"]];
  sId["O-I-D-----"] = [icn["ST.IC.KNOWN INSURGENT VEHICLE"], icn["ST.M1.DRUG"]];
  sId["O-I-F-----"] = [icn["ST.IC.INTERNAL SECURITY FORCE"]];
  sId["O-P-------"] = [icn["ST.IC.INDIVIDUAL"]];
  sId["O-P-A-----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.LEADER"]];
  sId["O-P-B-----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.TARGETED"]];
  sId["O-P-C-----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.TERRORIST"]];
  sId["O-G-------"] = [icn["ST.IC.GROUP"]];
  sId["O-G-A-----"] = [
    icn["ST.IC.GROUP"],
    icn["ST.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES"]
  ];
  sId["O-G-B-----"] = [
    icn["ST.IC.GROUP"],
    icn["ST.M1.NONGOVERNMENTAL ORGANIZATION (NGO)"]
  ];
  sId["O-G-C-----"] = [icn["ST.IC.GROUP"], icn["ST.M1.TERRORIST"]];
  sId["O-G-D-----"] = [icn["ST.IC.GROUP"], icn["ST.M1.RELIGIOUS"]];
  sId["O-G-E-----"] = [icn["ST.IC.GROUP"], icn["ST.M1.FOREIGN FIGHTERS"]];
  sId["O-G-F-----"] = [icn["ST.IC.GROUP"], icn["ST.M1.GANG"]];
  sId["O-R-------"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.RAPE"]];
  sId["O-R-A-----"] = [
    icn["ST.IC.INDIVIDUAL"],
    icn["ST.M1.RAPE"],
    icn["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]
  ];
};

var iconsEmergencymanagementsymbols = function emergencymanagementsymbols(sId, bbox, icn, _STD2525) {
  //Adds support for 2525C Emergency Management Symbols
  sId["E-I-A-----"] = [icn["AC.IC.CRIMINAL.CIVIL DISTURBANCE"]];
  sId["E-I-AC----"] = [icn["ST.IC.GROUP"], icn["AC.M1.RIOT"]];
  sId["E-I-B-----"] = [icn["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"]];
  sId["E-I-BA----"] = [icn["ST.IC.BOMB"], icn["AC.M1.THREAT"]];
  sId["E-I-BC----"] = [
    icn["ST.IC.EXPLOSION"],
    ms_1._scale(0.6, icn["ST.IC.BOMB"])
  ];
  sId["E-I-BD----"] = [icn["ST.IC.GROUP"], icn["ST.M1.LOOT"]];
  sId["E-I-BF----"] = [icn["AC.IC.SHOOTING"]];
  sId["E-I-C-----"] = [icn["AC.IC.FIRE EVENT"]];
  sId["E-I-CA----"] = [icn["AC.IC.HOT SPOT"]];
  sId["E-I-CB----"] = [icn["AC.IC.NON-REsIdENTIAL FIRE"]];
  sId["E-I-CC----"] = [icn["AC.IC.FIRE ORIGIN"]];
  sId["E-I-CD----"] = [icn["AC.IC.REsIdENTIAL FIRE"]];
  sId["E-I-CE----"] = [icn["AC.IC.SCHOOL FIRE"]];
  sId["E-I-CF----"] = [icn["AC.IC.SMOKE"]];
  sId["E-I-CG----"] = [icn["AC.IC.SPECIAL NEEDS FIRE"]];
  sId["E-I-CH----"] = [icn["AC.IC.WILD FIRE"]];
  sId["E-I-D-----"] = [icn["AC.IC.HAZARDOUS MATERIALS INCIDENT"]];
  sId["E-I-DA----"] = [icn["AC.IC.CHEMICAL AGENT"]];
  sId["E-I-DB----"] = [icn["AC.IC.CORROSIVE MATERIAL"]];
  sId["E-I-DC----"] = [icn["AC.IC.HAZARDOUS WHEN WET"]];
  sId["E-I-DD----"] = [icn["AC.IC.EXPLOSIVE MATERIAL"]];
  sId["E-I-DE----"] = [icn["AC.IC.FLAMMABLE GAS"]];
  sId["E-I-DF----"] = [icn["AC.IC.FLAMMABLE LIQUID"]];
  sId["E-I-DG----"] = [icn["AC.IC.FLAMMABLE SOLID"]];
  sId["E-I-DH----"] = [icn["AC.IC.NON-FLAMMABLE GAS"]];
  sId["E-I-DI----"] = [icn["AC.IC.ORGANIC PEROXIDE"]];
  sId["E-I-DJ----"] = [icn["AC.IC.OXIDIZER"]];
  sId["E-I-DK----"] = [icn["AC.IC.RADIOACTIVE MATERIAL"]];
  sId["E-I-DL----"] = [icn["AC.IC.SPONTANEOUSLY COMBUSTIBLE MATERIAL"]];
  sId["E-I-DM----"] = [icn["AC.IC.TOXIC GAS"]];
  sId["E-I-DN----"] = [icn["AC.IC.TOXIC INFECTIOUS MATERIAL"]];
  sId["E-I-DO----"] = [icn["AC.IC.UNEXPLODED ORDNANCE"]];
  sId["E-I-E-----"] = [
    icn["ST.M1.INCIDENT"],
    icn["ST.IC.HIJACKING (AIRPLANE)"]
  ];
  sId["E-I-EA----"] = [
    icn["ST.M1.ACCIDENT"],
    icn["ST.IC.HIJACKING (AIRPLANE)"]
  ];
  sId["E-I-F-----"] = [icn["ST.M1.INCIDENT"], icn["ST.IC.HIJACKING (BOAT)"]];
  sId["E-I-FA----"] = [icn["ST.M1.ACCIDENT"], icn["ST.IC.HIJACKING (BOAT)"]];
  sId["E-I-G-----"] = [icn["ST.M1.INCIDENT"], icn["GR.EQ.TRAIN LOCOMOTIVE"]];
  sId["E-I-GA----"] = [icn["ST.M1.ACCIDENT"], icn["GR.EQ.TRAIN LOCOMOTIVE"]];
  sId["E-I-GB----"] = [
    icn["GR.EQ.TRAIN LOCOMOTIVE"],
    icn["ST.M1.HIJACKING/HIJACKED"]
  ];
  sId["E-I-H-----"] = [
    icn["ST.M1.INCIDENT"],
    icn["ST.IC.KNOWN INSURGENT VEHICLE"]
  ];
  sId["E-I-HA----"] = [
    icn["ST.M1.ACCIDENT"],
    icn["ST.IC.KNOWN INSURGENT VEHICLE"]
  ];
  sId["E-N-AA----"] = [icn["AC.IC.AFTERSHOCK"]];
  sId["E-N-AB----"] = [icn["AC.IC.AVALANCHE"]];
  sId["E-N-AC----"] = [icn["AC.IC.EARTHQUAKE EPICENTER"]];
  sId["E-N-AD----"] = [icn["AC.IC.LANDSLIDE"]];
  sId["E-N-AE----"] = [icn["AC.IC.SUBSIDENCE"]];
  sId["W-S-WSVE--"] = [icn["AC.IC.VOLCANIC ERUPTION"]];
  sId["E-N-AG----"] = [icn["AC.IC.VOLCANIC THREAT"]];
  sId["W-S-WSD-LI"] = [icn["ATMOSPHERIC.IC.DRIZZLE.INTERMITTENT LIGHT"]];
  sId["E-N-BB----"] = [icn["AC.IC.DROUGHT"]];
  sId["E-N-BC----"] = [icn["AC.IC.FLOOD"]];
  sId["W-S-WSFGSO"] = [icn["ATMOSPHERIC.IC.FOG.SKY OBSCURED"]];
  sId["W-S-WSGRL-"] = [
    icn["ATMOSPHERIC.IC.HAIL.LIGHT NOT ASSOCIATED WITH THUNDER"]
  ];
  sId["E-N-BF----"] = [icn["AC.IC.INVERSION"]];
  sId["W-S-WSR-LI"] = [icn["ATMOSPHERIC.IC.RAIN.INTERMITTENT LIGHT"]];
  sId["W-S-WSDSLM"] = [icn["ATMOSPHERIC.IC.DUST OR SAND.LIGHT TO MODERATE"]];
  sId["W-S-WSS-LI"] = [icn["ATMOSPHERIC.IC.SNOW.INTERMITTENT LIGHT"]];
  sId["W-S-WSTMH-"] = [
    icn["ATMOSPHERIC.IC.STORMS.THUNDERSTORM LIGHT TO MODERATE - WITH HAIL"]
  ];
  sId["W-S-WST-FC"] = [
    icn["ATMOSPHERIC.IC.STORMS.FUNNEL CLOUD (TORNADO/WATERSPOUT)"]
  ];
  sId["W-S-WSTSS-"] = [
    icn["ATMOSPHERIC.IC.TROPICAL STORM SYSTEMS.TROPICAL STORM"]
  ];
  sId["E-N-BM----"] = [icn["AC.IC.TSUNAMI"]];
  sId["E-N-CA----"] = [icn["AC.IC.BIRD"]];
  sId["E-N-CB----"] = [icn["AC.IC.INSECT"]];
  sId["E-N-CC----"] = [icn["AC.IC.MICROBIAL"]];
  sId["E-N-CD----"] = [icn["AC.IC.REPTILE"]];
  sId["E-N-CE----"] = [icn["AC.IC.RODENT"]];
  sId["E-O-A-----"] = sId["E-O-AA----"] = sId["E-O-AB----"] = sId[
    "E-O-AC----"
  ] = sId["E-O-AD----"] = [icn["GR.IC.EMERGENCY MEDICAL OPERATION"]];
  sId["E-O-AE----"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
    icn["GR.M1.MEDEVAC"]
  ];
  sId["E-O-AF----"] = [
    ms_1._translate(0, 10, ms_1._scale(0.8, icn["AR.I.FF.CIVILIAN ROTARY WING"])),
    icn["GR.M1.MEDEVAC"]
  ];
  sId["E-O-AG----"] = [icn["AC.IC.HEALTH DEPARTMENT FACILITY"]];
  sId["E-O-AJ----"] = [icn["AC.IC.MEDICAL FACILITIES OUTPATIENT"]];
  sId["E-O-AK----"] = [icn["AC.IC.OPERATION/EMERGENCY MEDICAL OPERATION"]];
  sId["E-O-AL----"] = [icn["AC.IC.PHARMACY"]];
  sId["E-O-AM----"] = [icn["AC.IC.TRIAGE"]];
  sId["E-O-B-----"] = sId["E-O-BA----"] = sId["E-O-BB----"] = sId[
    "E-O-BC----"
  ] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
  sId["E-O-BD----"] = [
    ms_1._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
    icn["AC.M1.EMERGENCY COLLECTION EVACUATION POINT"]
  ];
  sId["E-O-BE----"] = [
    ms_1._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
    icn["AC.M1.EMERGENCY INCIDENT COMMAND CENTER"]
  ];
  sId["E-O-BF----"] = [
    ms_1._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
    icn["AC.M1.EMERGENCY OPERATIONS CENTER"]
  ];
  sId["E-O-BG----"] = [icn["AC.IC.EMERGENCY PUBLIC INFORMATION CENTER"]];
  sId["E-O-BH----"] = [
    ms_1._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
    icn["AC.M1.EMERGENCY SHELTER"]
  ];
  sId["E-O-BI----"] = [
    ms_1._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
    icn["AC.M1.EMERGENCY STAGING AREA"]
  ];
  sId["E-O-BJ----"] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
  sId["E-O-BK----"] = sId["S-G-USSW--"];
  sId["E-O-BL----"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.EMERGENCY"]];
  sId["E-O-C-----"] = sId["E-O-CA----"] = sId["E-O-CB----"] = sId[
    "E-O-CE----"
  ] = [icn["GR.IC.FIRE PROTECTION"]];
  sId["E-O-CC----"] = [icn["AC.IC.FIRE HYDRANT"]];
  sId["E-O-CD----"] = [icn["AC.IC.OTHER WATER SUPPLY LOCATION"]];
  sId["E-O-D-----"] = sId["E-O-DA----"] = sId["E-O-DB----"] = sId[
    "E-O-DC----"
  ] = [icn["GR.IC.FF.LAW ENFORCEMENT"]];
  sId["E-O-DD----"] = sId["E-O-DDA---"] = sId["E-O-DDB---"] = sId[
    "E-O-DDC---"
  ] = [
    icn[
      "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
    ]
  ];
  sId["E-O-DE----"] = sId["E-O-DEA---"] = sId["E-O-DEB---"] = sId[
    "E-O-DEC---"
  ] = [icn["GR.IC.FF.BORDER PATROL"]];
  sId["E-O-DF----"] = sId["E-O-DFA---"] = sId["E-O-DFB---"] = sId[
    "E-O-DFC---"
  ] = [icn["GR.IC.FF.CUSTOMS SERVICE"]];
  sId["E-O-DG----"] = sId["E-O-DGA---"] = sId["E-O-DGB---"] = sId[
    "E-O-DGC---"
  ] = [icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]];
  sId["E-O-DH----"] = sId["E-O-DHA---"] = sId["E-O-DHB---"] = sId[
    "E-O-DHC---"
  ] = [icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]];
  sId["E-O-DI----"] = sId["E-O-DIA---"] = sId["E-O-DIB---"] = sId[
    "E-O-DIC---"
  ] = [icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]];
  sId["E-O-DJ----"] = sId["E-O-DJB---"] = sId["E-O-DJC---"] = [
    icn["GR.IC.LAW ENFORCEMENT"]
  ];
  sId["E-O-DK----"] = [icn["GR.IC.FF.PRISON"]];
  sId["E-O-DL----"] = sId["E-O-DLA---"] = sId["E-O-DLB---"] = sId[
    "E-O-DLC---"
  ] = [icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]];
  sId["E-O-DM----"] = sId["E-O-DMA---"] = sId["E-O-DMB---"] = sId[
    "E-O-DMC---"
  ] = [icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]];
  sId["E-O-DN----"] = sId["E-O-DNA---"] = sId["E-O-DNC---"] = [
    icn["SE.IC.LAW ENFORCEMENT VESSEL"]
  ];
  sId["E-O-DO----"] = sId["E-O-DOA---"] = sId["E-O-DOB---"] = sId[
    "E-O-DOC---"
  ] = [icn["GR.IC.FF.US MARSHALS SERVICE"]];
  sId["E-O-EA----"] = [
    ms_1._scale(0.6, icn["GR.EQ.SENSOR"]),
    icn["GR.M1.BIOLOGICAL"]
  ];
  sId["E-O-EB----"] = [
    ms_1._scale(0.6, icn["GR.EQ.SENSOR"]),
    icn["GR.M1.CHEMICAL"]
  ];
  sId["E-O-EC----"] = [
    ms_1._scale(0.6, icn["GR.EQ.SENSOR"]),
    icn["GR.M1.INTRUSION"]
  ];
  sId["E-O-ED----"] = [
    ms_1._scale(0.6, icn["GR.EQ.SENSOR"]),
    icn["GR.M1.NUCLEAR"]
  ];
  sId["E-O-EE----"] = [
    ms_1._scale(0.6, icn["GR.EQ.SENSOR"]),
    icn["GR.M1.RADIOLOGICAL"]
  ];
  sId["E-F-A-----"] = [icn["GR.IN.IC.AGRICULTURE AND FOOD INFRASTRUCTURE"]];
  sId["E-F-AA----"] = [icn["GR.IN.IC.AGRICULTURAL LABORATORY"]];
  sId["E-F-AB----"] = [icn["GR.IN.IC.ANIMAL FEEDLOT"]];
  sId["E-F-AC----"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.COMMERCIAL"]];
  sId["E-F-AD----"] = [icn["GR.IN.IC.FARM/RANCH"]];
  sId["E-F-AE----"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.PRODUCTION"]];
  sId["E-F-AF----"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.RETAIL"]];
  sId["E-F-AG----"] = [icn["GR.IN.IC.GRAIN STORAGE"]];
  sId["E-F-B-----"] = [
    icn["AC.IC.BANKING FINANCE AND INSURANCE INFRASTRUCTURE"]
  ];
  sId["E-F-BA----"] = [icn["GR.IN.IC.ATM"]];
  sId["E-F-BB----"] = [icn["GR.IN.IC.BANK"]];
  sId["E-F-BC----"] = [icn["GR.IN.IC.BULLION STORAGE"]];
  sId["E-F-BD----"] = [icn["GR.IN.IC.FEDERAL RESERVE BANK"]];
  sId["E-F-BE----"] = [icn["GR.IN.IC.FINANCIAL EXCHANGE"]];
  sId["E-F-BF----"] = [icn["GR.IN.IC.FINANCIAL SERVICES, OTHER"]];
  sId["E-F-C-----"] = [icn["GR.IN.IC.COMMERCIAL INFRASTRUCTURE"]];
  sId["E-F-CA----"] = [icn["GR.IN.IC.CHEMICAL PLANT"]];
  sId["E-F-CB----"] = [icn["GR.IN.IC.FIREARMS MANUFACTURER"]];
  sId["E-F-CC----"] = [icn["GR.IN.IC.FIREARMS RETAILER"]];
  sId["E-F-CD----"] = [icn["GR.IN.IC.HAZARDOUS MATERIAL PRODUCTION"]];
  sId["E-F-CE----"] = [icn["GR.IN.IC.HAZARDOUS MATERIAL STORAGE"]];
  sId["E-F-CF----"] = [icn["GR.IN.IC.INDUSTRIAL SITE"]];
  sId["E-F-CG----"] = [icn["GR.IN.IC.LANDFILL"]];
  sId["E-F-CH----"] = [icn["GR.IN.IC.PHARMACEUTICAL MANUFACTURER"]];
  sId["E-F-CI----"] = [icn["GR.IN.IC.CONTAMINATED HAZARDOUS WASTE SITE"]];
  sId["E-F-CJ----"] = [icn["GR.IN.IC.TOXIC RELEASE INVENTORY"]];
  sId["E-F-D-----"] = [icn["GR.IN.IC.EDUCATIONAL FACILITIES INFRASTRUCTURE"]];
  sId["E-F-DA----"] = [icn["GR.IN.IC.COLLEGE/UNIVERSITY"]];
  sId["E-F-DB----"] = [icn["GR.IN.IC.SCHOOL"]];
  sId["E-F-EA----"] = [
    ms_1._translate(0, 15, ms_1._scale(0.75, icn["GR.IN.IC.ELECTRIC POWER"])),
    icn["AC.M1.GENERATION STATION"]
  ];
  sId["E-F-EB----"] = [icn["GR.IN.IC.NATURAL GAS FACILITY"]];
  sId["E-F-EE----"] = [icn["GR.IN.IC.PROPANE FACILITY"]];
  sId["E-F-F-----"] = [icn["GR.IN.IC.GOVERNMENT SITE INFRASTRUCTURE"]];
  sId["E-F-G-----"] = [icn["GR.IN.IC.MILITARY INFRASTRUCTURE"]];
  sId["E-F-GA----"] = [icn["GR.IN.IC.BASE"], icn["AC.M1.MILITARY ARMORY"]];
  sId["E-F-H-----"] = [icn["GR.IN.IC.POSTAL SERVICE INFRASTRUCTURE"]];
  sId["E-F-HA----"] = [icn["GR.IN.IC.POSTAL DISTRIBUTION CENTER"]];
  sId["E-F-HB----"] = [icn["GR.IN.IC.POST OFFICE"]];
  sId["E-F-I-----"] = [icn["GR.IN.IC.PUBLIC VENUES INFRASTRUCTURE"]];
  sId["E-F-IA----"] = [icn["GR.IN.IC.ENCLOSED FACITLITY (PUBLIC VENUE)"]];
  sId["E-F-IB----"] = [icn["GR.IN.IC.OPEN FACILITY (OPEN VENUE)"]];
  sId["E-F-IC----"] = [icn["GR.IN.IC.RECREATIONAL AREA"]];
  sId["E-F-ID----"] = [icn["GR.IN.IC.RELIGIOUS INSTITUTION"]];
  sId["E-F-J-----"] = [icn["GR.IN.IC.SPECIAL NEEDS INFRASTRUCTURE"]];
  sId["E-F-JA----"] = [icn["GR.IN.IC.ADULT DAY CARE"]];
  sId["E-F-JB----"] = [icn["GR.IN.IC.CHILD DAY CARE"]];
  sId["E-F-JC----"] = [icn["GR.IN.IC.ELDER CARE"]];
  sId["E-F-K-----"] = [icn["GR.IN.IC.TELECOMMUNICATIONS INFRASTRUCTURE"]];
  sId["E-F-KB----"] = [icn["GR.IN.IC.TELECOMMUNICATIONS TOWER"]];
  sId["E-F-LA----"] = [icn["GR.IN.IC.AIR TRAFFIC CONTROL FACILITY"]];
  sId["G-M-BCB---"] = [icn["GR.IN.IC.BRIDGE"]];
  bbox["G-M-BCB---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sId["E-F-LD----"] = [
    icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]
  ];
  sId["E-F-LE----"] = [icn["SE.IC.FERRY"]];
  sId["E-F-LF----"] = [icn["GR.IN.IC.HELICOPTER LANDING SITE"]];
  sId["W-S-ML----"] = [icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE LOCK"]];
  sId["E-F-LH----"] = [icn["GR.IC.MAINTENANCE"]];
  sId["E-F-LJ----"] = [icn["GR.IC.RAILHEAD"]];
  sId["E-F-LK----"] = [icn["GR.IN.IC.REST STOP"]];
  sId["W-S-HPBA--"] = [
    icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE SHIP ANCHORAGE"]
  ];
  sId["E-F-LM----"] = [icn["GR.IN.IC.TOLL FACILITY"]];
  sId["G-S-PO----"] = [
    icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE.TRAFFIC CONTROL POINT"]
  ];
  sId["E-F-LO----"] = [icn["GR.IN.IC.TRAFFIC INSPECTION FACILITY"]];
  sId["E-F-LP----"] = [icn["GR.IN.IC.TUNNEL"]];
  sId["E-F-MA----"] = [icn["GR.IN.IC.CONTROL VALVE"]];
  sId["E-F-MB----"] = [icn["GR.IN.IC.DAM"]];
  sId["E-F-MC----"] = [icn["GR.IN.IC.DISCHARGE OUTFALL"]];
  sId["E-F-MD----"] = [icn["GR.IN.IC.GROUND WATER WELL"]];
  sId["E-F-ME----"] = [icn["GR.IN.IC.PUMPING STATION"]];
  sId["E-F-MF----"] = [icn["GR.IN.IC.RESERVOIR"]];
  sId["E-F-MG----"] = [icn["GR.IN.IC.STORAGE TOWER"]];
  sId["E-F-MH----"] = [icn["GR.IN.IC.SURFACE WATER INTAKE"]];
  sId["E-F-MI----"] = [icn["GR.IN.IC.WASTEWATER TREATMENT FACILITY"]];
};

// Icon parts for tactical points
var _2525b = function(
  iconParts,
  properties,
  colors,
  STD2525,
  monoColor,
  alternateMedal
) {
  //  2525B extra icon parts
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
  var iconColor = colors.iconColor[affiliation];

  //var numberSIDC = properties.numberSIDC;
  var icn = {};

  icn["2525B.STN"] = {
    type: "path",
    fill: false,
    d:
      "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60 m 35.411,-4.824 a 42.8324,42.8324 0 0 1 -47.888,15.56 42.8324,42.8324 0 0 1 -29.5964,-40.7361 42.8324,42.8324 0 0 1 29.5966,-40.736 42.8324,42.8324 0 0 1 47.8878,15.56"
  }; //WAR.SSUF.CBTT.STN
  icn["2525B.STN.PKT"] = [
    { type: "path", fill: false, d: "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60" },
    { type: "text", stroke: false, x: 100, y: 145, fontsize: 30, text: "PK" }
  ]; //WAR.SSUF.CBTT.STN.PKT
  icn["2525B.STN.ASWSHP"] = [
    { type: "path", fill: false, d: "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60" },
    { type: "text", stroke: false, x: 100, y: 145, fontsize: 30, text: "AS" }
  ]; //WAR.SSUF.CBTT.STN.ASWSHP
  icn["2525B.NCBTT.STN"] = [
    { type: "path", fill: false, d: "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60" },
    { type: "text", stroke: false, x: 100, y: 145, fontsize: 30, text: "NC" }
  ]; //WAR.SSUF.NCBTT.STN
  icn["2525B.STN.RSC"] = [
    { type: "path", fill: false, d: "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60" },
    { type: "text", stroke: false, x: 100, y: 145, fontsize: 30, text: "RS" }
  ]; //WAR.SSUF.NCBTT.STN.RSC

  icn["2525B.SUB.STN"] = [
    { type: "path", d: "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60" },
    { type: "text", stroke: false, x: 100, y: 145, fontsize: 30, text: "SS" }
  ]; //WAR.SBSUF.SUB.STN
  icn["2525B.ASWSUB"] = {
    type: "path",
    d:
      "m 80,85 40,0 0,-20 -40,0 z m 20,-30 0,40 m -40,15 15,15 50,0 15,-15 -15,-15 -50,0 z"
  }; //WAR.SBSUF.SUB.STN.ASWSUB

  function defaultProperties(instructions) {
    if (typeof instructions === "object") {
      if (Array.isArray(instructions)) {
        for (var i = 0; i < instructions.length; i++) {
          defaultProperties.call(this, instructions[i]);
        }
        return;
      }
      instructions.icon = true;
      if (instructions.type == "text") {
        if (!instructions.hasOwnProperty("fontfamily"))
          instructions.fontfamily = "Arial";
        if (!instructions.hasOwnProperty("fontweight"))
          instructions.fontweight = "bold";
        if (!instructions.hasOwnProperty("textanchor"))
          instructions.textanchor = "middle";
        if (!instructions.hasOwnProperty("stroke")) instructions.stroke = false;
      }
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

ms_1.addIconParts(_2525b);

var icons2525bCh2 = function air(sId, bbox, icn, _STD2525) {
  // These symbols are in 2525B but not in 2525C and because of this they need to be added
  // The icons are in iconparts/2525b.js

  sId["S-S-S-----"] = icn["2525B.STN"]; //WAR.SSUF.CBTT.STN
  sId["S-S-SP----"] = icn["2525B.STN.PKT"]; //WAR.SSUF.CBTT.STN.PKT
  sId["S-S-SA----"] = icn["2525B.STN.ASWSHP"]; //WAR.SSUF.CBTT.STN.ASWSHP
  sId["S-S-NN----"] = icn["2525B.NCBTT.STN"]; //WAR.SSUF.NCBTT.STN
  sId["S-S-NNR---"] = icn["2525B.STN.RSC"]; //WAR.SSUF.NCBTT.STN.RSC

  sId["S-U-SS----"] = icn["2525B.SUB.STN"]; //WAR.SBSUF.SUB.STN
  sId["S-U-SSA---"] = icn["2525B.ASWSUB"]; //WAR.SBSUF.SUB.STN.ASWSUB

  // Tactical points
  sId["G-O-SBWD--"] = icn["TP.WRECK, DANGEROUS"]; //TACGRP.OTH.SSUBSR.BTMRTN.WRKD
  bbox["G-O-SBXD--"] = { x1: 35, x2: 165, y1: 70, y2: 130 };
};

// Icon parts for tactical points
var tacticalPoints = function(
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
  var iconColor =
    affiliation == "Hostile" && !monoColor
      ? "rgb(255, 0, 0)"
      : colors.iconColor[affiliation];

  var numberSIDC = properties.numberSIDC;
  var icn = {};

  icn["TP.DESTROY"] =
    !STD2525 && !numberSIDC
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
            d:
              "m 0,45 85,46.75 m 30,16.5 85,46.75 M 0,155 85,108.25 M 115,91.75 200,45"
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
  icn["TP.INTERDICT"] =
    !STD2525 && !numberSIDC
      ? {
          type: "path",
          fill: false,
          d:
            "m 0,100 200,0 M 0,155 200,45.2 M 185,85 l 15,15 -15,15 m 9.2,-49.3 5.5,-20.5 -20.5,-5.5"
        }
      : [
          {
            type: "path",
            fill: false,
            d:
              "m 194.203,65.6674 5.49,-20.4904 -20.49,-5.4904 M 115,91.75 200,45 M 0,155 85,108.25 M 185,85 l 15,15 -15,15 m -70,-15 85,0 m -200,0 85,0"
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
  icn["TP.NEUTRALIZE"] =
    !STD2525 && !numberSIDC
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
      d:
        "m 100,50 0,50 50,0 C 150,72.3858 127.614,50 100,50 Z m 0,50 -50,0 c 0,27.614 22.3858,50 50,50 z"
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
    d:
      "m 80,80 20,20 -20,20 40,0 -20,-20 20,-20 z M 50,150 150,50 M 50,50 150,150"
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
    d:
      "m 100,100 -50,10 0,-20 z m 0,0 10,50 -20,0 z m 0,0 50,-10 0,20 z m 0,0 -10,-50 20,0 z"
  };
  icn["TP.REFERENCE POINT"] = [
    { type: "path", fill: false, d: "M 160,160 40,160 40,40 160,40 Z" },
    { type: "circle", cx: 100, cy: 100, r: 15 }
  ];
  icn["TP.NAVIGATIONAL REFERENCE"] =
    !numberSIDC && STD2525
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
      d:
        "M 129.021,41.957 C 121.48,49.9458 110.986,54.4816 100,54.5 89.0432,54.4928 78.569,49.9914 71.0234,42.0469 L 100,100 Z"
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
    d:
      "m 130,100 0,-40 m -60,40 0,-40 m 60,40 0,0 c 0,8.284 -6.716,15 -15,15 -8.284,0 -15,-6.716 -15,-15 m 0,0 0,0 c 0,8.284 -6.7157,15 -15,15 -8.2843,0 -15,-6.716 -15,-15 m 30,-40 0,40"
  };
  icn["TP.ENTRY POINT"] = {
    type: "path",
    fill: false,
    d: "m 100,100 0,-50 m -35,15 35,35 35,-35 m -85,35 100,0"
  };
  icn["TP.GROUND ZERO"] = {
    type: "path",
    stroke: false,
    d:
      "M 100 28 C 100 28 65.4398 29.8261 61.6543 55 C 60.2826 64.1213 75.0115 70.4884 82.2363 71.6543 C 89.4611 72.8201 91.7277 55.3462 98.5098 56.0371 L 93 90 C 93 90 70 90 67 97 C 65.0304 101.596 100 100 100 100 C 100 100 134.97 101.596 133 97 C 130 90 107 90 107 90 L 101.49 56.0371 C 108.272 55.3462 110.539 72.8201 117.764 71.6543 C 124.988 70.4884 139.718 64.1213 138.346 55 C 134.56 29.8261 100 28 100 28 z"
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
    d:
      "m 138.484,76.82 c 0,-7.4823 6.066,-13.5478 13.548,-13.548 7.483,-3e-4 13.549,6.0653 13.549,13.548 m -27.097,0 0,0 c 0,6.9484 -5.634,12.5807 -12.582,12.58 -6.948,-4e-4 -12.58,-5.6324 -12.58,-12.58 m -27.097,0 c 2e-4,-7.4823 6.0657,-13.5478 13.548,-13.548 7.483,-3e-4 13.549,6.0653 13.549,13.548 m -79.3554,0 c 2e-4,-7.4824 6.066,-13.548 13.5484,-13.548 7.4824,0 13.5482,6.0656 13.5484,13.548 m 25.1616,0 0,0 C 86.2246,83.7681 80.5918,89.4003 73.6437,89.4 66.696,89.3998 61.0638,83.7677 61.0634,76.82 m 77.4206,47.328 c 0,-7.482 6.066,-13.548 13.548,-13.548 7.483,0 13.549,6.065 13.549,13.548 m -27.097,0 0,0 c 0,6.948 -5.634,12.581 -12.582,12.58 -6.948,0 -12.58,-5.632 -12.58,-12.58 m -27.097,0 c 2e-4,-7.482 6.0657,-13.548 13.548,-13.548 7.483,0 13.549,6.065 13.549,13.548 m -79.3554,0 c 2e-4,-7.482 6.066,-13.548 13.5484,-13.548 7.4824,0 13.5482,6.066 13.5484,13.548 m 25.1616,0 0,0 c -4e-4,6.948 -5.6332,12.58 -12.5813,12.58 -6.9477,0 -12.5799,-5.632 -12.5803,-12.58 m -27.0968,-23.664 132.5184,0"
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
            d:
              "m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z",
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
      d:
        "m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z",
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
      d:
        "m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z",
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
      d:
        "m 70,95 30,15 30,-15 0,30 -30,-15 -30,15 z m 0,-25 30,15 30,-15 0,15 -30,15 -30,-15 z"
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
    d:
      "M 99.9998,25.5886 117.061,76.5192 170.77,77.0054 127.604,108.968 143.738,160.2 100,129.024 56.2624,160.2 72.3967,108.968 29.2306,77.0059 82.9403,76.5192 Z"
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
      d:
        "m 68.75,105 -12.5,12.5 12.5,12.5 62.5,0 12.5,-12.5 -12.5,-12.5 z M 75,95 l 0,-20 50,0 0,20 z m 25,-30 0,40"
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
      d:
        "m 75,100 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z m 70,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -35,0 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z m -70,-40 0,80 120,0 0,-80 z"
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
    d:
      "m 140,140 0,-12.5 m -16,12.5 0,-12.5 m -16,12.5 0,-12.5 m -48.0001,12.5 3e-4,-12.5 m 15.9993,12.5 4e-4,-12.501 m 16,12.501 3e-4,-12.5 m -46.43,-12.493 10.8256,6.25 m -2.8256,-20.107 10.8256,6.251 m -2.8257,-20.1071 10.8257,6.2506 m 13.1743,-47.8198 10.8257,6.2506 m -18.8253,7.6056 10.8256,6.2506 m -18.826,7.606 10.8257,6.2506 M 114.43,45.725 l -10.826,6.25 m 18.826,7.6064 -10.826,6.25 m 18.826,7.6064 -10.826,6.25 m 34.826,35.3192 -10.826,6.25 m 2.826,-20.106 -10.826,6.25 m 2.826,-20.1068 -10.826,6.25 M 99.9998,45 l 47.6312,82.5 -95.2623,0 z"
  };
  icn["TP.OBSERVATION POST/RECONNAISSANCE"] = {
    type: "path",
    fill: false,
    d:
      "M 52.3687,127.5 123.816,86.2499 M 99.9998,45 l 47.6312,82.5 -95.2623,0 z"
  };
  icn["TP.FORWARD OBSERVER POSITION"] = [
    icn["TP.OBSERVATION POST/RECONNAISSANCE"],
    {
      type: "path",
      d:
        "m 115,100 c 0,8.284 -6.716,15 -15,15 -8.2843,0 -15,-6.716 -15,-15 0,-8.2843 6.7157,-15 15,-15 8.284,0 15,6.7157 15,15 z"
    }
  ];
  icn["TP.SENSOR OUTPOST"] = {
    type: "path",
    fill: false,
    d:
      "m 61.1738,112.25 23.6601,0 m 30.3321,0 23.66,0 M 80,105 l 10,15 20,0 10,-15 z m 19.9998,-60 47.6312,82.5 -95.2623,0 z"
  };
  icn["TP.CBRN OBSERVATION POST"] = [
    {
      type: "path",
      fill: false,
      d:
        "m 99.9998,45 47.6312,82.5 -95.2623,0 z M 88,119 c 2.1824,-13.288 7.7157,-24.22 22,-29 m 1.829,29 C 109.664,105.712 104.173,94.78 90,90 M 52.3687,127.5 123.816,86.2499"
    },
    {
      type: "path",
      d:
        "m 91,92 c 0,2.7614 -2.2386,5 -5,5 -2.7614,0 -5,-2.2386 -5,-5 0,-2.7614 2.2386,-5 5,-5 2.7614,0 5,2.2386 5,5 z m 28.011,0 c 0,2.7678 -2.243,5.0117 -5.011,5.012 -2.768,-3e-4 -5.011,-2.2442 -5.011,-5.012 0,-2.7676 2.243,-5.0112 5.011,-5.0115 2.768,3e-4 5.011,2.2439 5.011,5.0115 z"
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
    d:
      "M 77.2413,87.9311 100,50 122.781,87.9687 M 130,100 c 0,10.24 -13.431,18.541 -30,18.541 -16.5685,0 -30,-8.301 -30,-18.541 0,-10.2399 13.4315,-18.541 30,-18.541 16.569,0 30,8.3011 30,18.541 z"
  };
  icn["TP.UNSPECIFIED MINE"] = {
    type: "path",
    fill: false,
    d:
      "m 129,100 c 0,16.016 -12.984,29 -29,29 -16.0163,0 -29,-12.984 -29,-29 0,-16.0163 12.9837,-29 29,-29 16.016,0 29,12.9837 29,29 z"
  };
  icn["TP.ANTITANK MINE (AT)"] = {
    type: "path",
    d:
      "m 129,100 c 0,16.016 -12.984,29 -29,29 -16.0163,0 -29,-12.984 -29,-29 0,-16.0163 12.9837,-29 29,-29 16.016,0 29,12.9837 29,29 z"
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
      d:
        "m 75,100 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z m 70,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -35,0 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z"
    }
  ];
  icn["TP.MINEFIELDS STATIC"] = {
    type: "path",
    fill: false,
    d:
      "m 40,65 0,70 120,0 0,-70 z m 70,35 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z m 35,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -70,0 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z"
  };
  //This is to solve anticipated minefields... Don't we just love special cases...
  if (properties.notpresent)
    icn["TP.MINEFIELDS STATIC"] = icn["TP.PLANNED MINEFIELD"];
  icn["TP.ANTITANK (AT) MINEFIELD"] = [
    { type: "path", fill: false, d: "m 40,65 0,70 120,0 0,-70 z" },
    {
      type: "path",
      d:
        "m 75,100 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z m 70,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -35,0 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z"
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
      d:
        "M 72.0703,92.9297 80,82.3622 m -30,0 7.9297,10.5675 m 49.1403,0 7.93,-10.5675 m -30,0 7.9297,10.5675 m 49.1403,0 7.93,-10.5675 m -30,0 7.93,10.5675 M 110,100 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z m 35,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -70,0 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z"
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
      d:
        "m 100,40 c 2.358,31.6754 7.162,59.2531 25,64.999 M 100,40 c -2.358,31.6754 -7.1624,59.2531 -25,65"
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
    d:
      "m 135,65 15,-15 m -15,85 15,15 M 65,135 50,150 m 15,-85 0,70 70,0 0,-70 -70,0 -15,-15"
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
      d:
        "m 120,85 -15,15 m -25,0 40,-35 M 80,80 120,40 M 80,55 115,25 M 80,40 95,25 m -40,0 c 0,-60 90,-60 90,0 z m 25,0 0,75 40,0 0,-75"
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
      d:
        "m 85,-15 0,59.0625 C 75.7313,49.4137 70.0154,59.2975 70,70 c 0,16.5685 13.4315,30 30,30 16.569,0 30,-13.4315 30,-30 -0.01,-10.7067 -5.728,-20.5959 -15,-25.9492 L 115,-15 Z"
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
    d:
      "m 90,100 -40,0 m 50,10 0,40 m 10,-50 40,0 m -50,-10 0,-40 m 2.5,50 c 0,1.381 -1.119,2.5 -2.5,2.5 -1.3807,0 -2.5,-1.119 -2.5,-2.5 0,-1.3807 1.1193,-2.5 2.5,-2.5 1.381,0 2.5,1.1193 2.5,2.5 z"
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
      d:
        "m 101.143,3.91602 q 3.662,-0.26368 4.746,-1.08399 1.084,-0.84961 1.084,-4.33594 l 0,-26.68949 q 0,-3.3105 -1.084,-4.248 -1.084,-0.9668 -4.746,-1.1426 l 0,-1.1133 17.753,0 0,1.1133 q -3.662,0.1758 -4.746,1.1426 -1.084,0.9375 -1.084,4.248 l 0,26.68949 q 0,3.48633 1.084,4.33594 1.084,0.82031 4.746,1.08399 l 0,1.08398 -17.753,0 0,-1.08398 z m 8.877,-38.61332 0,0 z M 81.1035,3.91602 q 3.6621,-0.26368 4.7461,-1.08399 1.084,-0.84961 1.084,-4.33594 l 0,-26.68949 q 0,-3.3105 -1.084,-4.248 -1.084,-0.9668 -4.7461,-1.1426 l 0,-1.1133 17.7539,0 0,1.1133 q -3.6621,0.1758 -4.7461,1.1426 -1.084,0.9375 -1.084,4.248 l 0,26.68949 q 0,3.48633 1.084,4.33594 1.084,0.82031 4.7461,1.08399 l 0,1.08398 -17.7539,0 0,-1.08398 z m 8.877,-38.61332 0,0 z"
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
      d:
        "m 75,-20 50,0 m -25,15 15,25 m -15,-50 0,25 -20,25 m 30,-60 c 0,5.5228 -4.477,10 -10,10 -5.5228,0 -10,-4.4772 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z"
    }
  ];
  icn["TP.SP CLASS VII"] = [
    icn["TP.SUPPLY POINT"],
    { type: "path", fill: false, d: "m 85,-25 c 10,-10 20,-10 30,0" },
    {
      type: "path",
      d:
        "m 129.6,-20 c 0,5.3019 -4.298,9.5999 -9.6,9.5998 -5.302,10e-5 -9.6,-4.2979 -9.6,-9.5998 0,-5.3019 4.298,-9.5999 9.6,-9.5998 5.302,-1e-4 9.6,4.2979 9.6,9.5998 z m -40.4886,0 c 0,5.0321 -4.0793,9.1114 -9.1114,9.1114 -5.0321,0 -9.1114,-4.0793 -9.1114,-9.1114 0,-5.0321 4.0793,-9.1114 9.1114,-9.1114 5.0321,0 9.1114,4.0793 9.1114,9.1114 z"
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
      d:
        "m 121.213,-36.2132 -7.08,7.0802 M 85.8669,-0.866982 78.7868,6.2132 m 0,-42.4264 7.0801,7.0802 m 28.2661,28.266018 7.08,7.080182 M 100,-45 l 0,10 m 0,40 0,10 m -30,-30 10,0 m 40,0 10,0 m -10,0 c 0,11.04569 -8.954,20 -20,20 -11.0457,0 -20,-8.95431 -20,-20 0,-11.0457 8.9543,-20 20,-20 11.046,0 20,8.9543 20,20 z"
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
    d:
      "m 145,120 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 10,10 25,-30 -10,-10 10,-10 20,20 -10,35 -15,-15 -15,15 z"
  };
  icn["TP.PERSON IN WATER"] = {
    type: "path",
    d:
      "m 105,110 10,-10 0,-15 5,0 0,20 -10,10 z m -10,0 -10,-10 0,-15 -5,0 0,20 10,10 z m 5,-5 0,-10 -5,0 -5,-5 0,-10 5,-5 10,0 5,5 0,10 -5,5 -5,0 m -15,25 15,-15 m 45,15 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 45,15 -15,-15"
  };
  icn["TP.DISTRESSED VESSEL"] = {
    type: "path",
    d:
      "m 120,65 -20,20 20,-20 m -5,55 -35,-35 0,-20 45,45 z m -30,0 -15,-15 m -15,15 15,-15 m 45,15 15,-15 m 15,15 -15,-15 m -45,15 15,-15"
  };
  icn["TP.SEA MINELIKE"] = {
    type: "path",
    d:
      "M 75,75 55,55 m 45,-15 0,25 m 25,10 20,-20 m -80,60 0,-30 20,-20 30,0 20,20 0,30 -20,20 -30,0 z"
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
      d:
        "m 156.547,100 c 0,16.382 -25.162,29.662 -56.202,29.662 -31.0395,0 -56.2019,-13.28 -56.2017,-29.662 0,-16.3818 25.1624,-29.6618 56.2017,-29.6618 31.039,-1e-4 56.202,13.28 56.202,29.6618 z"
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
    d:
      "m 50,90 15,20 5,-20 15,20 5,-20 20,20 5,-20 15,20 5,-20 15,20 M 50,150 150,50 M 50,50 150,150 m -50,-100 0,100"
  };
  icn["TP.FIX ELECTRO-OPTICAL"] = {
    type: "path",
    fill: false,
    d:
      "m 150,100 c 0,6.904 -22.386,12.5 -50,12.5 -27.6142,0 -50,-5.596 -50,-12.5 0,-6.9036 22.3858,-12.5 50,-12.5 27.614,0 50,5.5964 50,12.5 z M 50,150 150,50 M 50,50 150,150 m -50,-100 0,100"
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
    d:
      "m 77.5,106 20,0 m -20,-12 20,0 M 75,82 95,82 m -20,36 20,0 m -25,12 20,0 M 70,70 90,70 M 80,60 c 25,15 25,65 0,80 m 45,-50 10,10 -10,10 m -25,-10 35,0"
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

// Label overrides for tactical points
var tacticalPoints2525 = function tacticalPoints(sidc) {
  // Tactical Point Symbols =========================================================================
  sidc["G-T-D-----"] = {}; //TACGRP.TSK.DSTY
  sidc["G-T-I-----"] = {}; //TACGRP.TSK.ITDT
  sidc["G-T-N-----"] = {}; //TACGRP.TSK.NEUT
  sidc["G-G-GPUUD-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.UH2.DTM
  sidc["G-G-GPUUB-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.UH2.BCON
  sidc["G-G-GPUUL-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.UH2.LCON
  sidc["G-G-GPUUS-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.UH2.SNK
  sidc["G-G-GPUY--"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY
  sidc["G-G-GPUYP-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.PTNCTR
  sidc["G-G-GPUYD-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.DIFAR
  sidc["G-G-GPUYL-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.LOFAR
  sidc["G-G-GPUYC-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.CASS
  sidc["G-G-GPUYS-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.DICASS
  sidc["G-G-GPUYB-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.BT
  sidc["G-G-GPUYA-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.ANM
  sidc["G-G-GPUYV-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.VLAD
  sidc["G-G-GPUYT-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.ATAC
  sidc["G-G-GPUYR-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.RO
  sidc["G-G-GPUYK-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.KGP
  sidc["G-G-GPUYX-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.EXP
  sidc["G-G-GPUS--"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SRH
  sidc["G-G-GPUSA-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SRH.ARA
  sidc["G-G-GPUSD-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SRH.DIPPSN
  sidc["G-G-GPUSC-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SRH.CTR
  sidc["G-G-GPR---"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT
  sidc["G-G-GPRN--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.NAVREF
  sidc["G-G-GPRS--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.SPLPNT
  sidc["G-G-GPRD--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.DLRP
  sidc["G-G-GPRP--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.PIM
  sidc["G-G-GPRM--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.MRSH
  sidc["G-G-GPRW--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.WAP
  sidc["G-G-GPRC--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.CRDRTB
  sidc["G-G-GPRI--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 30,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.REFPNT.PNTINR
  sidc["G-G-GPWA--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.AIMPNT
  sidc["G-G-GPWD--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.DRPPNT
  sidc["G-G-GPWE--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.ENTPNT
  sidc["G-G-GPWG--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.GRDZRO
  sidc["G-G-GPWM--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.MSLPNT
  sidc["G-G-GPWI--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.IMTPNT
  sidc["G-G-GPWP--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.PIPNT
  sidc["G-G-GPF---"] = {}; //TACGRP.C2GM.GNL.PNT.FRMN
  sidc["G-G-GPH---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.HBR
  sidc["G-G-GPHQ--"] = {}; //TACGRP.C2GM.GNL.PNT.HBR.PNTQ
  sidc["G-G-GPHA--"] = {}; //TACGRP.C2GM.GNL.PNT.HBR.PNTA
  sidc["G-G-GPHY--"] = {}; //TACGRP.C2GM.GNL.PNT.HBR.PNTY
  sidc["G-G-GPHX--"] = {}; //TACGRP.C2GM.GNL.PNT.HBR.PNTX
  sidc["G-G-GPO---"] = {}; //TACGRP.C2GM.GNL.PNT.RTE
  sidc["G-G-GPOZ--"] = {}; //TACGRP.C2GM.GNL.PNT.RTE.RDV
  sidc["G-G-GPOD--"] = {}; //TACGRP.C2GM.GNL.PNT.RTE.DVSN
  sidc["G-G-GPOW--"] = {}; //TACGRP.C2GM.GNL.PNT.RTE.WAP
  sidc["G-G-GPOP--"] = {}; //TACGRP.C2GM.GNL.PNT.RTE.PIM
  sidc["G-G-GPOR--"] = {}; //TACGRP.C2GM.GNL.PNT.RTE.PNTR
  sidc["G-G-GPA---"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL
  sidc["G-G-GPAP--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.CAP
  sidc["G-G-GPAW--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ABNEW
  sidc["G-G-GPAK--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.TAK
  sidc["G-G-GPAA--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ASBWF
  sidc["G-G-GPAH--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ASBWR
  sidc["G-G-GPAB--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.SUWF
  sidc["G-G-GPAC--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.SUWR
  sidc["G-G-GPAD--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.MIWF
  sidc["G-G-GPAE--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.MIWR
  sidc["G-G-GPAS--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.SKEIP
  sidc["G-G-GPAT--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.TCN
  sidc["G-G-GPAO--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.TMC
  sidc["G-G-GPAR--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.RSC
  sidc["G-G-GPAL--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.RPH
  sidc["G-G-GPAF--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.UA
  sidc["G-G-GPAG--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.VTUA
  sidc["G-G-GPAI--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ORB
  sidc["G-G-GPAJ--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ORBF8
  sidc["G-G-GPAM--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ORBRT
  sidc["G-G-GPAN--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ORBRD
  sidc["G-G-GPP---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    additionalInformation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35,
      fontweight: "bold"
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT
  sidc["G-G-GPPK--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  sidc["G-G-GPPC--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 40,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT
  sidc["G-G-GPPO--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTPNT.CRDPNT
  sidc["G-G-GPPD--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.DCNPNT
  sidc["G-G-GPPL--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  sidc["G-G-GPPP--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  sidc["G-G-GPPR--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  sidc["G-G-GPPE--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  sidc["G-G-GPPS--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  sidc["G-G-GPPA--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  sidc["G-G-GPPW--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 125,
      fontsize: 70
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  //TACGRP.C2GM.GNL.PNT.ACTPNT.WAP
  sidc["G-G-GPC---"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL
  sidc["G-G-GPCU--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.USV
  sidc["G-G-GPCUR-"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.USV.RMV
  sidc["G-G-GPCUA-"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.USV.ASW
  sidc["G-G-GPCUS-"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.USV.SUW
  sidc["G-G-GPCUM-"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.USV.MIW
  sidc["G-G-GPCA--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.ASW
  sidc["G-G-GPCS--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.SUW
  sidc["G-G-GPCM--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.MIW
  sidc["G-G-GPCP--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.PKT
  sidc["G-G-GPCR--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.RDV
  sidc["G-G-GPCC--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.RSC
  sidc["G-G-GPCE--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.REP
  sidc["G-G-GPCN--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.NCBTT
  sidc["G-G-GPB---"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL
  sidc["G-G-GPBU--"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.UUV
  sidc["G-G-GPBUA-"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.ASW
  sidc["G-G-GPBUS-"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.SUW
  sidc["G-G-GPBUM-"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.MIW
  sidc["G-G-GPBS--"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.SBSTN
  sidc["G-G-GPBSA-"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.SBSTN.ASW
  //TACGRP.C2GM.AVN.PNT.ACP
  sidc["G-G-APP---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  //TACGRP.C2GM.AVN.PNT.COMMCP
  sidc["G-G-APC---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  sidc["G-G-APU---"] = {}; //TACGRP.C2GM.AVN.PNT.PUP
  sidc["G-G-APD---"] = {}; //TACGRP.C2GM.AVN.PNT.DAPP
  sidc["G-G-PN----"] = {}; //TACGRP.C2GM.DCPN.DMYMS
  //TACGRP.C2GM.DEF.PNT.TGTREF
  sidc["G-G-DPT---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 115,
      y: 85,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  sidc["G-G-DPO---"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST
  sidc["G-G-DPOC--"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST.CBTPST
  sidc["G-G-DPOR--"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST.RECON
  sidc["G-G-DPOF--"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST.FWDOP
  sidc["G-G-DPOS--"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST.SOP
  sidc["G-G-DPON--"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST.CBRNOP
  sidc["G-G-OPP---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  sidc["G-M-OAOF--"] = {}; //TACGRP.MOBSU.OBST.ATO.TDTSM.FIXPFD
  sidc["G-M-OAOM--"] = {}; //TACGRP.MOBSU.OBST.ATO.TDTSM.MVB
  sidc["G-M-OAOP--"] = {}; //TACGRP.MOBSU.OBST.ATO.TDTSM.MVBPFD
  sidc["G-M-OB----"] = {}; //TACGRP.MOBSU.OBST.BBY
  sidc["G-M-OMU---"] = {}; //TACGRP.MOBSU.OBST.MNE.USPMNE
  sidc["G-M-OMT---"] = {}; //TACGRP.MOBSU.OBST.MNE.ATMNE
  sidc["G-M-OMD---"] = {}; //TACGRP.MOBSU.OBST.MNE.ATMAHD
  sidc["G-M-OME---"] = {}; //TACGRP.MOBSU.OBST.MNE.ATMDIR
  sidc["G-M-OMP---"] = {}; //TACGRP.MOBSU.OBST.MNE.APMNE
  sidc["G-M-OMW---"] = {}; //TACGRP.MOBSU.OBST.MNE.WAMNE
  //TACGRP.MOBSU.OBST.MNEFLD.STC
  sidc["G-M-OFS---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 55,
      fontsize: 40
    },
    hostile: [
      {
        stroke: false,
        textanchor: "end",
        x: 35,
        y: 110,
        fontsize: 30,
        fontweight: "bold"
      },
      {
        stroke: false,
        textanchor: "start",
        x: 165,
        y: 110,
        fontsize: 30,
        fontweight: "bold"
      }
    ],
    dtg: { stroke: false, textanchor: "middle", x: 100, y: 175, fontsize: 40 }
  };
  //TACGRP.MOBSU.OBST.AVN.TWR.LOW
  sidc["G-M-OHTL--"] = {
    altitudeDepth: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 60,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT
  //TACGRP.MOBSU.OBST.AVN.TWR.HIGH
  sidc["G-M-OHTH--"] = {
    altitudeDepth: {
      stroke: false,
      textanchor: "start",
      x: 115,
      y: 60,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  //TACGRP.MOBSU.OBSTBP.CSGSTE.ERP
  sidc["G-M-BCP---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  sidc["G-M-SE----"] = {}; //TACGRP.MOBSU.SU.ESTOF
  sidc["G-M-SF----"] = {}; //TACGRP.MOBSU.SU.FRT
  sidc["G-M-SS----"] = {}; //TACGRP.MOBSU.SU.SUFSHL
  sidc["G-M-SU----"] = {}; //TACGRP.MOBSU.SU.UGDSHL
  //TACGRP.MOBSU.CBRN.NDGZ
  sidc["G-M-NZ----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 20,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: 20, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 100,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 140,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 35
    },
    type: { stroke: false, textanchor: "end", x: 50, y: 60, fontsize: 35 },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  };
  sidc["G-M-NF----"] = {}; //TACGRP.MOBSU.CBRN.FAOTP
  //TACGRP.MOBSU.CBRN.REEVNT.BIO
  sidc["G-M-NEB---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 20,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: 20, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 100,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 140,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 35
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  };
  //TACGRP.MOBSU.CBRN.REEVNT.CML
  sidc["G-M-NEC---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 20,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: 20, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 100,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 140,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 35
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  };
  //TACGRP.MOBSU.CBRN.DECONP.USP
  sidc["G-M-NDP---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.MOBSU.CBRN.DECONP.ALTUSP
  sidc["G-M-NDA---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  //TACGRP.MOBSU.CBRN.DECONP.TRP
  sidc["G-M-NDT---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.MOBSU.CBRN.DECONP.EQT
  sidc["G-M-NDE---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.MOBSU.CBRN.DECONP.EQTTRP
  sidc["G-M-NDB---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.MOBSU.CBRN.DECONP.OPDECN
  sidc["G-M-NDO---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  //TACGRP.MOBSU.CBRN.DECONP.TRGH
  sidc["G-M-NDD---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  //TACGRP.FSUPP.PNT.TGT.PTGT
  sidc["G-F-PTS---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 145,
      fontsize: 40
    },
    altitudeDepth: {
      stroke: false,
      textanchor: "end",
      x: 80,
      y: 145,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 80,
      fontsize: 40
    }
  };

  //TACGRP.FSUPP.PNT.TGT.NUCTGT
  sidc["G-F-PTN---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 80,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  //TACGRP.FSUPP.PNT.C2PNT.FSS
  sidc["G-F-PCF---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 125,
      y: 115,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  //TACGRP.FSUPP.PNT.C2PNT.SCP
  sidc["G-F-PCS---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  //TACGRP.FSUPP.PNT.C2PNT.FP
  sidc["G-F-PCB---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.FSUPP.PNT.C2PNT.RP
  sidc["G-F-PCR---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.FSUPP.PNT.C2PNT.HP
  sidc["G-F-PCH---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.FSUPP.PNT.C2PNT.LP
  sidc["G-F-PCL---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  //TACGRP.CSS.PNT.AEP
  sidc["G-S-PX----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT
  //TACGRP.CSS.PNT.CBNP
  sidc["G-S-PC----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.CCP
  sidc["G-S-PY----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.CVP
  sidc["G-S-PT----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.DCP
  sidc["G-S-PD----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.EPWCP
  sidc["G-S-PE----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.LRP
  sidc["G-S-PL----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.MCP
  sidc["G-S-PM----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.RRRP
  sidc["G-S-PR----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.ROM
  sidc["G-S-PU----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.TCP
  sidc["G-S-PO----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.TTP
  sidc["G-S-PI----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.UMC
  sidc["G-S-PN----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  sidc["G-S-PS----"] = {}; //TACGRP.CSS.PNT.SPT
  //TACGRP.CSS.PNT.SPT.GNL
  sidc["G-S-PSZ---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.SPT.CLS1
  sidc["G-S-PSA---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.SPT.CLS2
  sidc["G-S-PSB---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.SPT.CLS3
  sidc["G-S-PSC---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.SPT.CLS4
  sidc["G-S-PSD---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.SPT.CLS5
  sidc["G-S-PSE---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.SPT.CLS6
  sidc["G-S-PSF---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.SPT.CLS7
  sidc["G-S-PSG---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };

  //TACGRP.CSS.PNT.SPT.CLS8
  sidc["G-S-PSH---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  //TACGRP.CSS.PNT.SPT.CLS9
  sidc["G-S-PSI---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  //TACGRP.CSS.PNT.SPT.CLS10
  sidc["G-S-PSJ---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  sidc["G-S-PA----"] = {}; //TACGRP.CSS.PNT.AP
  //TACGRP.CSS.PNT.AP.ASP
  sidc["G-S-PAS---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  //TACGRP.CSS.PNT.AP.ATP
  sidc["G-S-PAT---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  sidc["G-O-ED----"] = {}; //TACGRP.OTH.ER.DTHAC
  sidc["G-O-EP----"] = {}; //TACGRP.OTH.ER.PIW
  sidc["G-O-EV----"] = {}; //TACGRP.OTH.ER.DSTVES
  sidc["G-O-HM----"] = {}; //TACGRP.OTH.HAZ.SML
  sidc["G-O-HI----"] = {}; //TACGRP.OTH.HAZ.IB
  sidc["G-O-HO----"] = {}; //TACGRP.OTH.HAZ.OLRG
  sidc["G-O-SB----"] = {}; //TACGRP.OTH.SSUBSR.BTMRTN
  sidc["G-O-SBM---"] = {}; //TACGRP.OTH.SSUBSR.BTMRTN.INS
  sidc["G-O-SBN---"] = {}; //TACGRP.OTH.SSUBSR.BTMRTN.SBRSOO
  sidc["G-O-SBW---"] = {}; //TACGRP.OTH.SSUBSR.BTMRTN.WRKND
  sidc["G-O-SBX---"] = {}; //TACGRP.OTH.SSUBSR.BTMRTN.WRKD
  sidc["G-O-SM----"] = {}; //TACGRP.OTH.SSUBSR.MARLFE
  sidc["G-O-SS----"] = {}; //TACGRP.OTH.SSUBSR.SA
  sidc["G-O-FA----"] = {}; //TACGRP.OTH.FIX.ACU
  sidc["G-O-FE----"] = {}; //TACGRP.OTH.FIX.EM
  sidc["G-O-FO----"] = {}; //TACGRP.OTH.FIX.EOP
};

ms_1.addIconParts(tacticalPoints);
ms_1.addLabelOverrides(
  tacticalPoints2525,
  "letter"
);

// SIDC parts for tactical points
var iconsTacticalPoints2525 = function tacticalPoints$$1(sidc, bbox, icn, std2525) {
  // Tactical Point Symbols =========================================================================
  sidc["G-T-D-----"] = icn["TP.DESTROY"]; //TACGRP.TSK.DSTY
  bbox["G-T-D-----"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
  sidc["G-T-I-----"] = icn["TP.INTERDICT"]; //TACGRP.TSK.ITDT
  bbox["G-T-I-----"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
  sidc["G-T-N-----"] = icn["TP.NEUTRALIZE"]; //TACGRP.TSK.NEUT
  bbox["G-T-N-----"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
  sidc["G-G-GPUUD-"] = icn["TP.DATUM"]; //TACGRP.C2GM.GNL.PNT.USW.UH2.DTM
  bbox["G-G-GPUUD-"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPUUB-"] = icn["TP.BRIEF CONTACT"]; //TACGRP.C2GM.GNL.PNT.USW.UH2.BCON
  bbox["G-G-GPUUB-"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
  sidc["G-G-GPUUL-"] = icn["TP.LOST CONTACT"]; //TACGRP.C2GM.GNL.PNT.USW.UH2.LCON
  bbox["G-G-GPUUL-"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
  sidc["G-G-GPUUS-"] = icn["TP.SINKER"]; //TACGRP.C2GM.GNL.PNT.USW.UH2.SNK
  bbox["G-G-GPUUS-"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
  sidc["G-G-GPUY--"] = icn["TP.SONOBUOY"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY
  bbox["G-G-GPUY--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYP-"] = icn["TP.SONOBUOY PATTERN CENTER"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.PTNCTR
  bbox["G-G-GPUYP-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYD-"] = icn["TP.SONOBUOY DIFAR"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.DIFAR
  bbox["G-G-GPUYD-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYL-"] = icn["TP.SONOBUOY LOFAR"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.LOFAR
  bbox["G-G-GPUYL-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYC-"] = icn["TP.SONOBUOY CASS"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.CASS
  bbox["G-G-GPUYC-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYS-"] = icn["TP.SONOBUOY DICASS"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.DICASS
  bbox["G-G-GPUYS-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYB-"] = icn["TP.SONOBUOY BT"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.BT
  bbox["G-G-GPUYB-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYA-"] = icn["TP.SONOBUOY ANM"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.ANM
  bbox["G-G-GPUYA-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYV-"] = icn["TP.SONOBUOY VLAD"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.VLAD
  bbox["G-G-GPUYV-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYT-"] = icn["TP.SONOBUOY ATAC"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.ATAC
  bbox["G-G-GPUYT-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYR-"] = icn["TP.SONOBUOY RO"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.RO
  bbox["G-G-GPUYR-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYK-"] = icn["TP.SONOBUOY KINGPIN"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.KGP
  bbox["G-G-GPUYK-"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-G-GPUYX-"] = icn["TP.SONOBUOY EXPIRED"]; //TACGRP.C2GM.GNL.PNT.USW.SNBY.EXP
  bbox["G-G-GPUYX-"] = { x1: 40, x2: 160, y1: -10, y2: 160 };
  sidc["G-G-GPUS--"] = icn["TP.SEARCH"]; //TACGRP.C2GM.GNL.PNT.USW.SRH
  bbox["G-G-GPUS--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPUSA-"] = icn["TP.SEARCH AREA"]; //TACGRP.C2GM.GNL.PNT.USW.SRH.ARA
  bbox["G-G-GPUSA-"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPUSD-"] = icn["TP.DIP POSITION"]; //TACGRP.C2GM.GNL.PNT.USW.SRH.DIPPSN
  bbox["G-G-GPUSD-"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPUSC-"] = icn["TP.SEARCH CENTER"]; //TACGRP.C2GM.GNL.PNT.USW.SRH.CTR
  bbox["G-G-GPUSC-"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPR---"] = icn["TP.REFERENCE POINT"]; //TACGRP.C2GM.GNL.PNT.REFPNT
  bbox["G-G-GPR---"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRN--"] = icn["TP.NAVIGATIONAL REFERENCE"]; //TACGRP.C2GM.GNL.PNT.REFPNT.NAVREF
  bbox["G-G-GPRN--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRS--"] = icn["TP.SPECIAL POINT"]; //TACGRP.C2GM.GNL.PNT.REFPNT.SPLPNT
  bbox["G-G-GPRS--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRD--"] = icn["TP.DLRP"]; //TACGRP.C2GM.GNL.PNT.REFPNT.DLRP
  bbox["G-G-GPRD--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRP--"] = icn["TP.POINT OF INTENDED MOVEMENT"]; //TACGRP.C2GM.GNL.PNT.REFPNT.PIM
  bbox["G-G-GPRP--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRM--"] = icn["TP.MARSHALL POINT"]; //TACGRP.C2GM.GNL.PNT.REFPNT.MRSH
  bbox["G-G-GPRM--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRW--"] = icn["TP.REFERENCE POINT WAYPOINT"]; //TACGRP.C2GM.GNL.PNT.REFPNT.WAP
  bbox["G-G-GPRW--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRC--"] = icn["TP.CORRIDOR TAB"]; //TACGRP.C2GM.GNL.PNT.REFPNT.CRDRTB
  bbox["G-G-GPRC--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-G-GPRI--"] = icn["TP.POINT OF INTEREST"]; //TACGRP.C2GM.GNL.PNT.REFPNT.PNTINR
  bbox["G-G-GPRI--"] = { x1: 50, x2: 150, y1: -25 };
  sidc["G-G-GPWA--"] = icn["TP.AIM POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.AIMPNT
  bbox["G-G-GPWA--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPWD--"] = icn["TP.DROP POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.DRPPNT
  bbox["G-G-GPWD--"] = { x1: 50, x2: 150, y1: 50, y2: 120 };
  sidc["G-G-GPWE--"] = icn["TP.ENTRY POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.ENTPNT
  bbox["G-G-GPWE--"] = { x1: 50, x2: 150, y1: 50 };
  sidc["G-G-GPWG--"] = icn["TP.GROUND ZERO"]; //TACGRP.C2GM.GNL.PNT.WPN.GRDZRO
  bbox["G-G-GPWG--"] = { x1: 50, x2: 150, y1: 30 };
  sidc["G-G-GPWM--"] = icn["TP.MSL DETECT POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.MSLPNT
  bbox["G-G-GPWM--"] = { x1: 50, x2: 150, y1: 30 };
  sidc["G-G-GPWI--"] = icn["TP.IMPACT POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.IMTPNT
  bbox["G-G-GPWI--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPWP--"] = icn["TP.PREDICTED IMPACT POINT"]; //TACGRP.C2GM.GNL.PNT.WPN.PIPNT
  bbox["G-G-GPWP--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPF---"] = icn["TP.FORMATION"]; //TACGRP.C2GM.GNL.PNT.FRMN
  bbox["G-G-GPF---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPH---"] = icn["TP.HARBOR"]; //TACGRP.C2GM.GNL.PNT.HBR
  bbox["G-G-GPH---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPHQ--"] = icn["TP.HARBOR POINT Q"]; //TACGRP.C2GM.GNL.PNT.HBR.PNTQ
  bbox["G-G-GPHQ--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPHA--"] = icn["TP.HARBOR POINT A"]; //TACGRP.C2GM.GNL.PNT.HBR.PNTA
  bbox["G-G-GPHA--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPHY--"] = icn["TP.HARBOR POINT Y"]; //TACGRP.C2GM.GNL.PNT.HBR.PNTY
  bbox["G-G-GPHY--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPHX--"] = icn["TP.HARBOR POINT X"]; //TACGRP.C2GM.GNL.PNT.HBR.PNTX
  bbox["G-G-GPHX--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPO---"] = icn["TP.ROUTE"]; //TACGRP.C2GM.GNL.PNT.RTE
  bbox["G-G-GPO---"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPOZ--"] = icn["TP.ROUTE RENDEZVOUS"]; //TACGRP.C2GM.GNL.PNT.RTE.RDV
  bbox["G-G-GPOZ--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-G-GPOD--"] = icn["TP.ROUTE DIVERSIONS"]; //TACGRP.C2GM.GNL.PNT.RTE.DVSN
  bbox["G-G-GPOD--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-G-GPOW--"] = icn["TP.ROUTE WAYPOINT"]; //TACGRP.C2GM.GNL.PNT.RTE.WAP
  bbox["G-G-GPOW--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-G-GPOP--"] = icn["TP.ROUTE PIM"]; //TACGRP.C2GM.GNL.PNT.RTE.PIM
  bbox["G-G-GPOP--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-G-GPOR--"] = icn["TP.ROUTE POINT R"]; //TACGRP.C2GM.GNL.PNT.RTE.PNTR
  bbox["G-G-GPOR--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-G-GPA---"] = icn["TP.AIR CONTROL POINT"]; //TACGRP.C2GM.GNL.PNT.ACTL
  bbox["G-G-GPA---"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAP--"] = icn["TP.COMBAT AIR PATROL (CAP)"]; //TACGRP.C2GM.GNL.PNT.ACTL.CAP
  bbox["G-G-GPAP--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAW--"] = icn["TP.AIRBORNE EARLY WARNING (AEW)"]; //TACGRP.C2GM.GNL.PNT.ACTL.ABNEW
  bbox["G-G-GPAW--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAK--"] = icn["TP.TANKING"]; //TACGRP.C2GM.GNL.PNT.ACTL.TAK
  bbox["G-G-GPAK--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAA--"] = icn["TP.FIXED WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.ASBWF
  bbox["G-G-GPAA--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAH--"] = icn["TP.ROTARY WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.ASBWR
  bbox["G-G-GPAH--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAB--"] = icn["TP.SUCAP - FIXED WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.SUWF
  bbox["G-G-GPAB--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAC--"] = icn["TP.SUCAP - ROTARY WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.SUWR
  bbox["G-G-GPAC--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAD--"] = icn["TP.MIW - FIXED WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.MIWF
  bbox["G-G-GPAD--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAE--"] = icn["TP.MIW - ROTARY WING"]; //TACGRP.C2GM.GNL.PNT.ACTL.MIWR
  bbox["G-G-GPAE--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-G-GPAS--"] = icn["TP.STRIKE IP"]; //TACGRP.C2GM.GNL.PNT.ACTL.SKEIP
  bbox["G-G-GPAS--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAT--"] = icn["TP.TACAN"]; //TACGRP.C2GM.GNL.PNT.ACTL.TCN
  bbox["G-G-GPAT--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAO--"] = icn["TP.TOMCAT"]; //TACGRP.C2GM.GNL.PNT.ACTL.TMC
  bbox["G-G-GPAO--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAR--"] = icn["TP.RESCUE"]; //TACGRP.C2GM.GNL.PNT.ACTL.RSC
  bbox["G-G-GPAR--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAL--"] = icn["TP.REPLENISH"]; //TACGRP.C2GM.GNL.PNT.ACTL.RPH
  bbox["G-G-GPAL--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAF--"] = icn["TP.UNMANNED AERIAL SYSTEM"]; //TACGRP.C2GM.GNL.PNT.ACTL.UA
  bbox["G-G-GPAF--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAG--"] = icn["TP.VTUA"]; //TACGRP.C2GM.GNL.PNT.ACTL.VTUA
  bbox["G-G-GPAG--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAI--"] = icn["TP.ORBIT"]; //TACGRP.C2GM.GNL.PNT.ACTL.ORB
  bbox["G-G-GPAI--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAJ--"] = icn["TP.ORBIT - FIGURE EIGHT"]; //TACGRP.C2GM.GNL.PNT.ACTL.ORBF8
  bbox["G-G-GPAJ--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAM--"] = icn["TP.ORBIT - RACE TRACK"]; //TACGRP.C2GM.GNL.PNT.ACTL.ORBRT
  bbox["G-G-GPAM--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPAN--"] = icn["TP.ORBIT - RANDOM, CLOSED"]; //TACGRP.C2GM.GNL.PNT.ACTL.ORBRD
  bbox["G-G-GPAN--"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
  sidc["G-G-GPP---"] = icn["TP.ACTION POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT
  bbox["G-G-GPP---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPK--"] = icn["TP.ACTION CHECK POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.CHKPNT
  bbox["G-G-GPPK--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPC--"] = icn["TP.CONTACT POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT
  bbox["G-G-GPPC--"] = { x1: 55, x2: 145, y1: -10 };
  sidc["G-G-GPPO--"] = icn["TP.COORDINATION POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.CRDPNT
  bbox["G-G-GPPO--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-GPPD--"] = icn["TP.DECISION POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.DCNPNT
  bbox["G-G-GPPD--"] = { x1: 30, x2: 170, y1: 25, y2: 160 };
  sidc["G-G-GPPL--"] = icn["TP.ACTION LINKUP POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.LNKUPT
  bbox["G-G-GPPL--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPP--"] = icn["TP.ACTION PASSAGE POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.PSSPNT
  bbox["G-G-GPPP--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPR--"] = icn["TP.ACTION RALLY POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.RAYPNT
  bbox["G-G-GPPR--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPE--"] = icn["TP.ACTION RELEASE POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.RELPNT
  bbox["G-G-GPPE--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPS--"] = icn["TP.ACTION START POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.STRPNT
  bbox["G-G-GPPS--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPA--"] = icn["TP.ACTION AMNESTY POINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.AMNPNT
  bbox["G-G-GPPA--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-GPPW--"] = icn["TP.WAYPOINT"]; //TACGRP.C2GM.GNL.PNT.ACTPNT.WAP
  bbox["G-G-GPPW--"] = { x1: 60, x2: 140, y1: 60, y2: 140 };
  sidc["G-G-GPC---"] = icn["TP.SEA SURFACE CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL
  bbox["G-G-GPC---"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCU--"] = icn["TP.(USV) CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.USV
  bbox["G-G-GPCU--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCUR-"] = icn["TP.(RMV) USV CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.USV.RMV
  bbox["G-G-GPCUR-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCUA-"] = icn["TP.USV - ASW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.USV.ASW
  bbox["G-G-GPCUA-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCUS-"] = icn["TP.USV - SUW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.USV.SUW
  bbox["G-G-GPCUS-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCUM-"] = icn["TP.USV - MIW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.USV.MIW
  bbox["G-G-GPCUM-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCA--"] = icn["TP.ASW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.ASW
  bbox["G-G-GPCA--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCS--"] = icn["TP.SUW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.SUW
  bbox["G-G-GPCS--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCM--"] = icn["TP.MIW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.MIW
  bbox["G-G-GPCM--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCP--"] = icn["TP.PICKET CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.PKT
  bbox["G-G-GPCP--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCR--"] = icn["TP.RENDEZVOUS CONTROL POINT"]; //TACGRP.C2GM.GNL.PNT.SCTL.RDV
  bbox["G-G-GPCR--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCC--"] = icn["TP.RESCUE CONTROL POINT"]; //TACGRP.C2GM.GNL.PNT.SCTL.RSC
  bbox["G-G-GPCC--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCE--"] = icn["TP.REPLENISHMENT CONTROL POINT"]; //TACGRP.C2GM.GNL.PNT.SCTL.REP
  bbox["G-G-GPCE--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPCN--"] = icn["TP.NONCOMBATANT CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.SCTL.NCBTT
  bbox["G-G-GPCN--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPB---"] = icn["TP.SUB SURFACE CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL
  bbox["G-G-GPB---"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBU--"] = icn["TP.(UUV) CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.UUV
  bbox["G-G-GPBU--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBUA-"] = icn["TP.UUV - ASW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.ASW
  bbox["G-G-GPBUA-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBUS-"] = icn["TP.UUV - SUW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.SUW
  bbox["G-G-GPBUS-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBUM-"] = icn["TP.UUV - MIW CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.MIW
  bbox["G-G-GPBUM-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBS--"] = icn["TP.SUBMARINE CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.SBSTN
  bbox["G-G-GPBS--"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-GPBSA-"] = icn["TP.ASW SUBMARINE CONTROL STATION"]; //TACGRP.C2GM.GNL.PNT.UCTL.SBSTN.ASW
  bbox["G-G-GPBSA-"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-G-APP---"] = icn["TP.AIR CONTROL POINT (ACP)"]; //TACGRP.C2GM.AVN.PNT.ACP
  bbox["G-G-APP---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-APC---"] = icn["TP.COMMUNICATIONS CHECKPOINT"]; //TACGRP.C2GM.AVN.PNT.COMMCP
  bbox["G-G-APC---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-G-APU---"] = icn["TP.PULL-UP POINT"]; //TACGRP.C2GM.AVN.PNT.PUP
  bbox["G-G-APU---"] = { x1: 50, x2: 240, y1: 50, y2: 150 };
  sidc["G-G-APD---"] = icn["TP.DOWNED AIRCREW PICKUP POINT"]; //TACGRP.C2GM.AVN.PNT.DAPP
  bbox["G-G-APD---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-G-PN----"] = icn["TP.DUMMY MINEFIELD"]; //TACGRP.C2GM.DCPN.DMYMS
  bbox["G-G-PN----"] = { x1: 40, x2: 160, y1: -10, y2: 140 };
  sidc["G-G-DPT---"] = icn["TP.TARGET REFERENCE"]; //TACGRP.C2GM.DEF.PNT.TGTREF
  sidc["G-G-DPO---"] = icn["TP.OBSERVATION POST/OUTPOST"]; //TACGRP.C2GM.DEF.PNT.OBSPST
  bbox["G-G-DPO---"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-DPOC--"] = icn["TP.COMBAT OUTPOST"]; //TACGRP.C2GM.DEF.PNT.OBSPST.CBTPST
  bbox["G-G-DPOC--"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-DPOR--"] = icn["TP.OBSERVATION POST/RECONNAISSANCE"]; //TACGRP.C2GM.DEF.PNT.OBSPST.RECON
  bbox["G-G-DPOR--"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-DPOF--"] = icn["TP.FORWARD OBSERVER POSITION"]; //TACGRP.C2GM.DEF.PNT.OBSPST.FWDOP
  bbox["G-G-DPOF--"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-DPOS--"] = icn["TP.SENSOR OUTPOST"]; //TACGRP.C2GM.DEF.PNT.OBSPST.SOP
  bbox["G-G-DPOS--"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-DPON--"] = icn["TP.CBRN OBSERVATION POST"]; //TACGRP.C2GM.DEF.PNT.OBSPST.CBRNOP
  bbox["G-G-DPON--"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-G-OPP---"] = icn["TP.POINT OF DEPARTURE"]; //TACGRP.C2GM.OFF.PNT.PNTD
  bbox["G-G-OPP---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-OAOF--"] = icn["TP.FIXED AND PREFABRICATED"]; //TACGRP.MOBSU.OBST.ATO.TDTSM.FIXPFD
  bbox["G-M-OAOF--"] = { x1: 60, x2: 140, y1: 30 };
  sidc["G-M-OAOM--"] = icn["TP.TETRAHEDRONS"]; //TACGRP.MOBSU.OBST.ATO.TDTSM.MVB
  bbox["G-M-OAOM--"] = { x1: 60, x2: 140, y1: 30 };
  sidc["G-M-OAOP--"] = icn["TP.TETRAHEDRONS MOVABLE"]; //TACGRP.MOBSU.OBST.ATO.TDTSM.MVBPFD
  bbox["G-M-OAOP--"] = { x1: 60, x2: 140, y1: 30 };
  sidc["G-M-OB----"] = icn["TP.BOOBY TRAP"]; //TACGRP.MOBSU.OBST.BBY
  sidc["G-M-OMU---"] = icn["TP.UNSPECIFIED MINE"]; //TACGRP.MOBSU.OBST.MNE.USPMNE
  sidc["G-M-OMT---"] = icn["TP.ANTITANK MINE (AT)"]; //TACGRP.MOBSU.OBST.MNE.ATMNE
  sidc["G-M-OMD---"] = icn["TP.(AT) ANTIHANDLING DEVICE"]; //TACGRP.MOBSU.OBST.MNE.ATMAHD
  bbox["G-M-OMD---"] = { x1: 60, x2: 140, y1: 40, y2: 195 };
  sidc["G-M-OME---"] = icn["TP.(AT) DIRECTIONAL"]; //TACGRP.MOBSU.OBST.MNE.ATMDIR
  bbox["G-M-OME---"] = { x1: 60, x2: 140, y1: 10, y2: 140 };
  sidc["G-M-OMP---"] = icn["TP.ANTIPERSONNEL (AP) MINES"]; //TACGRP.MOBSU.OBST.MNE.APMNE
  sidc["G-M-OMW---"] = icn["TP.WIDE AREA MINES"]; //TACGRP.MOBSU.OBST.MNE.WAMNE
  sidc["G-M-OFS---"] = icn["TP.MINEFIELDS STATIC"]; //TACGRP.MOBSU.OBST.MNEFLD.STC
  bbox["G-M-OFS---"] = { x1: 40, x2: 160, y1: 60, y2: 140 };
  sidc["G-M-OHTL--"] = icn["TP.TOWER LOW"]; //TACGRP.MOBSU.OBST.AVN.TWR.LOW
  bbox["G-M-OHTL--"] = { x1: 50, x2: 150, y1: 30, y2: 120 };
  sidc["G-M-OHTH--"] = icn["TP.TOWER HIGH"]; //TACGRP.MOBSU.OBST.AVN.TWR.HIGH
  bbox["G-M-OHTH--"] = { x1: 50, x2: 150, y1: 30, y2: 120 };
  sidc["G-M-BCP---"] = icn["TP.ENGINEER REGULATING POINT"]; //TACGRP.MOBSU.OBSTBP.CSGSTE.ERP
  bbox["G-M-BCP---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-SE----"] = icn["TP.EARTHWORK/FORTIFICATION"]; //TACGRP.MOBSU.SU.ESTOF
  sidc["G-M-SF----"] = icn["TP.FORT"]; //TACGRP.MOBSU.SU.FRT
  sidc["G-M-SS----"] = icn["TP.SURFACE SHELTER"]; //TACGRP.MOBSU.SU.SUFSHL
  sidc["G-M-SU----"] = icn["TP.UNDERGROUND SHELTER"]; //TACGRP.MOBSU.SU.UGDSHL
  sidc["G-M-NZ----"] = icn["TP.NUCLEAR DETONATIONS GROUND ZERO"]; //TACGRP.MOBSU.CBRN.NDGZ
  bbox["G-M-NZ----"] = { x1: 60, x2: 140, y1: -20 };
  sidc["G-M-NF----"] = icn["TP.NUCLEAR FALLOUT PRODUCING"]; //TACGRP.MOBSU.CBRN.FAOTP
  bbox["G-M-NF----"] = { x1: 50, x2: 150, y1: -20 };
  sidc["G-M-NEB---"] = icn["TP.RELEASE EVENTS BIOLOGICAL"]; //TACGRP.MOBSU.CBRN.REEVNT.BIO
  bbox["G-M-NEB---"] = { x1: -10, x2: 140, y1: -20 };
  sidc["G-M-NEC---"] = icn["TP.RELEASE EVENTS CHEMICAL"]; //TACGRP.MOBSU.CBRN.REEVNT.CML
  bbox["G-M-NEC---"] = { x1: -20, x2: 140, y1: -20 };
  sidc["G-M-NDP---"] = icn["TP.DECON SITE/POINT"]; //TACGRP.MOBSU.CBRN.DECONP.USP
  bbox["G-M-NDP---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDA---"] = icn["TP.ALTERNATE DECON SITE/POINT"]; //TACGRP.MOBSU.CBRN.DECONP.ALTUSP
  bbox["G-M-NDA---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDT---"] = icn["TP.DECON SITE/POINT (TROOPS)"]; //TACGRP.MOBSU.CBRN.DECONP.TRP
  bbox["G-M-NDT---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDE---"] = icn["TP.DECON SITE/POINT (EQUIPMENT)"]; //TACGRP.MOBSU.CBRN.DECONP.EQT
  bbox["G-M-NDE---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDB---"] = icn["TP.DECON SITE/POINT (EQUIPMENT AND TROOPS)"]; //TACGRP.MOBSU.CBRN.DECONP.EQTTRP
  bbox["G-M-NDB---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDO---"] = icn["TP.DECON SITE/POINT (OPERATIONAL DECONTAMINATION)"]; //TACGRP.MOBSU.CBRN.DECONP.OPDECN
  bbox["G-M-NDO---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-M-NDD---"] = icn["TP.DECON SITE/POINT (THOROUGH DECONTAMINATION)"]; //TACGRP.MOBSU.CBRN.DECONP.TRGH
  bbox["G-M-NDD---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-F-PTS---"] = icn["TP.POINT/SINGLE TARGET"]; //TACGRP.FSUPP.PNT.TGT.PTGT
  sidc["G-F-PTN---"] = icn["TP.NUCLEAR TARGET"]; //TACGRP.FSUPP.PNT.TGT.NUCTGT
  sidc["G-F-PCF---"] = icn["TP.FIRE SUPPORT STATION"]; //TACGRP.FSUPP.PNT.C2PNT.FSS
  sidc["G-F-PCS---"] = icn["TP.SURVEY CONTROL POINT"]; //TACGRP.FSUPP.PNT.C2PNT.SCP
  bbox["G-F-PCS---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-F-PCB---"] = icn["TP.FIRING POINT"]; //TACGRP.FSUPP.PNT.C2PNT.FP
  bbox["G-F-PCB---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-F-PCR---"] = icn["TP.RELOAD POINT"]; //TACGRP.FSUPP.PNT.C2PNT.RP
  bbox["G-F-PCR---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-F-PCH---"] = icn["TP.HIDE POINT"]; //TACGRP.FSUPP.PNT.C2PNT.HP
  bbox["G-F-PCH---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-F-PCL---"] = icn["TP.LAUNCH POINT"]; //TACGRP.FSUPP.PNT.C2PNT.LP
  bbox["G-F-PCL---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PX----"] = icn["TP.AMBULANCE EXCHANGE POINT"]; //TACGRP.CSS.PNT.AEP
  bbox["G-S-PX----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PC----"] = icn["TP.CANNIBALIZATION POINT"]; //TACGRP.CSS.PNT.CBNP
  bbox["G-S-PC----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PY----"] = icn["TP.CASUALTY COLLECTION POINT"]; //TACGRP.CSS.PNT.CCP
  bbox["G-S-PY----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PT----"] = icn["TP.CIVILIAN COLLECTION POINT"]; //TACGRP.CSS.PNT.CVP
  bbox["G-S-PT----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PD----"] = icn["TP.DETAINEE COLLECTION POINT"]; //TACGRP.CSS.PNT.DCP
  bbox["G-S-PD----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PE----"] = icn["TP.EPW COLLECTION POINT"]; //TACGRP.CSS.PNT.EPWCP
  bbox["G-S-PE----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PL----"] = icn["TP.LOGISTICS RELEASE POINT"]; //TACGRP.CSS.PNT.LRP
  bbox["G-S-PL----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PM----"] = icn["TP.MAINTENANCE COLLECTION POINT"]; //TACGRP.CSS.PNT.MCP
  bbox["G-S-PM----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PR----"] = icn["TP.REARM, REFUEL AND RESUPPLY POINT"]; //TACGRP.CSS.PNT.RRRP
  bbox["G-S-PR----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PU----"] = icn["TP.REFUEL ON THE MOVE POINT"]; //TACGRP.CSS.PNT.ROM
  bbox["G-S-PU----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PO----"] = icn["TP.TRAFFIC CONTROL POST"]; //TACGRP.CSS.PNT.TCP
  bbox["G-S-PO----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PI----"] = icn["TP.TRAILER TRANSFER POINT"]; //TACGRP.CSS.PNT.TTP
  bbox["G-S-PI----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PN----"] = icn["TP.UNIT MAINTENANCE COLLECTION POINT"]; //TACGRP.CSS.PNT.UMC
  bbox["G-S-PN----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSZ---"] = icn["TP.SUPPLY POINT"]; //TACGRP.CSS.PNT.SPT.GNL
  bbox["G-S-PSZ---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSA---"] = icn["TP.SP CLASS I"]; //TACGRP.CSS.PNT.SPT.CLS1
  bbox["G-S-PSA---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSB---"] = icn["TP.SP CLASS II"]; //TACGRP.CSS.PNT.SPT.CLS2
  bbox["G-S-PSB---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSC---"] = icn["TP.SP CLASS III"]; //TACGRP.CSS.PNT.SPT.CLS3
  bbox["G-S-PSC---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSD---"] = icn["TP.SP CLASS IV"]; //TACGRP.CSS.PNT.SPT.CLS4
  bbox["G-S-PSD---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSE---"] = icn["TP.SP CLASS V"]; //TACGRP.CSS.PNT.SPT.CLS5
  bbox["G-S-PSE---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSF---"] = icn["TP.SP CLASS VI"]; //TACGRP.CSS.PNT.SPT.CLS6
  bbox["G-S-PSF---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSG---"] = icn["TP.SP CLASS VII"]; //TACGRP.CSS.PNT.SPT.CLS7
  bbox["G-S-PSG---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSH---"] = icn["TP.SP CLASS VIII"]; //TACGRP.CSS.PNT.SPT.CLS8
  bbox["G-S-PSH---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSI---"] = icn["TP.SP CLASS IX"]; //TACGRP.CSS.PNT.SPT.CLS9
  bbox["G-S-PSI---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PSJ---"] = icn["TP.SP CLASS X"]; //TACGRP.CSS.PNT.SPT.CLS10
  bbox["G-S-PSJ---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PAS---"] = icn["TP.AMMUNITION SUPPLY POINT (ASP)"]; //TACGRP.CSS.PNT.AP.ASP
  bbox["G-S-PAS---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-S-PAT---"] = icn["TP.AMMUNITION TRANSFER POINT (ATP)"]; //TACGRP.CSS.PNT.AP.ATP
  bbox["G-S-PAT---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-O-ED----"] = icn["TP.DITCHED AIRCRAFT"]; //TACGRP.OTH.ER.DTHAC
  sidc["G-O-EP----"] = icn["TP.PERSON IN WATER"]; //TACGRP.OTH.ER.PIW
  sidc["G-O-EV----"] = icn["TP.DISTRESSED VESSEL"]; //TACGRP.OTH.ER.DSTVES
  sidc["G-O-HM----"] = icn["TP.SEA MINELIKE"]; //TACGRP.OTH.HAZ.SML
  bbox["G-O-HM----"] = { x1: 40, x2: 160, y1: 40, y2: 150 };
  sidc["G-O-HI----"] = icn["TP.ICEBERG"]; //TACGRP.OTH.HAZ.IB
  bbox["G-O-HI----"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-O-HO----"] = icn["TP.OIL RIG/PLATFORM"]; //TACGRP.OTH.HAZ.OLRG
  bbox["G-O-HO----"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-O-SB----"] = icn["TP.BOTTOM RETURN"]; //TACGRP.OTH.SSUBSR.BTMRTN
  bbox["G-O-SB----"] = { x1: 40, x2: 160, y1: 40, y2: 100 };
  sidc["G-O-SBM---"] = icn["TP.INSTALLATION/MANMADE"]; //TACGRP.OTH.SSUBSR.BTMRTN.INS
  bbox["G-O-SBM---"] = { x1: 40, x2: 160, y1: 40, y2: 100 };
  sidc["G-O-SBN---"] = icn["TP.BOTTOM RETURN"]; //TACGRP.OTH.SSUBSR.BTMRTN.SBRSOO
  bbox["G-O-SBN---"] = { x1: 40, x2: 160, y1: 40, y2: 100 };
  sidc["G-O-SBW---"] = icn["TP.WRECK, NON DANGEROUS"]; //TACGRP.OTH.SSUBSR.BTMRTN.WRKND
  bbox["G-O-SBW---"] = { x1: 40, x2: 160, y1: 70, y2: 130 };
  sidc["G-O-SBX---"] = icn["TP.WRECK, DANGEROUS"]; //TACGRP.OTH.SSUBSR.BTMRTN.WRKD
  bbox["G-O-SBX---"] = { x1: 40, x2: 160, y1: 70, y2: 130 };
  sidc["G-O-SM----"] = icn["TP.MARINE LIFE"]; //TACGRP.OTH.SSUBSR.MARLFE
  bbox["G-O-SM----"] = { x1: 100, x2: 220, y1: 70, y2: 130 };
  sidc["G-O-SS----"] = icn["TP.SEA ANOMALY"]; //TACGRP.OTH.SSUBSR.SA
  bbox["G-O-SS----"] = { x1: 50, x2: 150, y1: 30, y2: 120 };
  sidc["G-O-FA----"] = icn["TP.FIX ACOUSTIC"]; //TACGRP.OTH.FIX.ACU
  sidc["G-O-FE----"] = icn["TP.FIX ELECTRO-MAGNETIC"]; //TACGRP.OTH.FIX.EM
  sidc["G-O-FO----"] = icn["TP.FIX ELECTRO-OPTICAL"]; //TACGRP.OTH.FIX.EOP
};

// Label overrides for tactical points
var tacticalPointsApp6 = function tacticalPoints(sidc) {
  // Tactical Point Symbols =========================================================================
  sidc["G-T-GD----"] = {}; //2.X.1.1.9 DESTROY
  sidc["G-T-GI----"] = {}; //2.X.1.1.13 INTERDICT
  sidc["G-T-GN----"] = {}; //2.X.1.1.15 NEUTRALIZE
  sidc["G-C-MGPFE-"] = {}; //2.X.2.1.1.1.1.1 ELECTRO-MAGNETIC
  sidc["G-C-MGPFA-"] = {}; //2.X.2.1.1.1.1.2 ACOUSTIC
  sidc["G-C-MGPFO-"] = {}; //2.X.2.1.1.1.1.3 ELECTRO-OPTICAL
  sidc["G-C-MGPI--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 30,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.1.1.1.2 POINT OF INTEREST
  sidc["G-C-MAAP--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.1.2.1.1 AIR CONTROL POINT (ACP)
  sidc["G-C-MAAC--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.1.2.1.2 COMMUNICATIONS CHECKPOINT (CCP)
  sidc["G-C-MAAU--"] = {}; //2.X.2.1.2.1.3 POP UP POINT (PUP)
  sidc["G-C-MAAD--"] = {}; //2.X.2.1.2.1.4 DOWNED AIRCREW PICK UP POINT
  sidc["G-C-MDN---"] = {}; //2.X.2.1.3.6 DUMMY MINEFIELD
  sidc["G-C-MMPT--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 115,
      y: 85,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.1.4.1.1 TARGET REFERENCE POINT (TRP)
  sidc["G-C-MMPO--"] = {}; //2.X.2.1.4.1.4 OBSERVATION POST/OUTPOST
  sidc["G-C-MMPOC-"] = {}; //2.X.2.1.4.1.4.1 COMBAT OUTPOST
  sidc["G-C-MMPOR-"] = {}; //2.X.2.1.4.1.4.2 OBSERVATION POST OCCUPIED BY DISMOUNTED SCOUTS OR RECONNAISSANCE
  sidc["G-C-MMPOF-"] = {}; //2.X.2.1.4.1.4.3 FORWARD OBSERVER POSITION
  sidc["G-C-MMPOS-"] = {}; //2.X.2.1.4.1.4.4 SENSOR OUTPOST/LISTENING POST (OP/LP)
  sidc["G-C-MMPON-"] = {}; //2.X.2.1.4.1.4.5 CBRN OBSERVATION POST (DISMOUNTED)
  sidc["G-C-MMPON-"] = {}; //2.X.2.1.4.1.4.6 FORWARD AIR CONTROLLER (FAC)
  sidc["G-C-MMPON-"] = {}; //2.X.2.1.4.1.4.7 TACTICAL AIR CONTROL PARTY (TACP)
  sidc["G-C-MOPD--"] = {}; //2.X.2.1.5.1.1 POINT OF DEPARTURE
  sidc["G-C-BOATD-"] = {}; //2.X.2.2.1.3.3 ANTITANK OBSTACLES, TETRAHEDRONS, DRAGON'S TEETH AND OTHER SIMILAR OBSTACLES
  sidc["G-C-BOAB--"] = {}; //2.X.2.2.1.4 BOOBY TRAP
  sidc["G-C-BOAMA-"] = {}; //2.X.2.2.1.5.1 ANTIPERSONNEL (AP) MINE
  sidc["G-C-BOAMT-"] = {}; //2.X.2.2.1.5.2 ANTITANK (AT) MINE
  sidc["G-C-BOAMD-"] = {}; //2.X.2.2.1.5.3 ANTITANK MINE WITH ANTIHANDLING DEVISE
  sidc["G-C-BOAMC-"] = {}; //2.X.2.2.1.5.4 ANTITANK MINE (ARROW SHOWS EFFECTS) "CLAYMORE MINE"
  sidc["G-C-BOAMU-"] = {}; //2.X.2.2.1.5.5 UNSPECIFIED MINE
  sidc["G-C-BOAMN-"] = {}; //2.X.2.2.1.5.6 MINE CLUSTER
  sidc["G-C-BOAIP-"] = {}; //2.X.2.2.1.6.1 PLANNED MINEFIELD
  sidc["G-C-BOAIC-"] = {}; //2.X.2.2.1.6.2 COMPLETED MINEFIELD
  sidc["G-C-BOAIN-"] = {}; //2.X.2.2.1.6.5 ANTITANK (AT) MINEFIELD
  sidc["G-C-BOAIS-"] = {
    dtg: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 165,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.2.1.6.6 SCATTERABLE MINES
  sidc["G-C-BOAIH-"] = {
    dtg: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 165,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.2.1.6.7 ANTIPERSONNEL (AP) MINEFIELD REINFORCED WITH SCATTERABLE WITH SELF-DESTRUCT DATE-TIME-GROUP
  sidc["G-C-BOAID-"] = {
    dtg: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 165,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.2.1.6.8 SCATTERABLE MINEFIELD WITH SELF-DESTRUCT DATE-TIME-GROUP
  sidc["G-C-BOAV--"] = {
    dtg: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 165,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.2.1.6.8 SCATTERABLE MINEFIELD WITH SELF-DESTRUCT DATE-TIME-GROUP
  sidc["G-C-BYCG--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.2.2.8 ENGINEER REGULATING POINT
  sidc["G-C-BSE---"] = {}; //2.X.2.2.3.1 EARTHWORK, SMALL TRENCH OR FORTIFICATION
  sidc["G-C-BSF---"] = {}; //2.X.2.2.3.2 FORT
  sidc["G-C-BSH---"] = {}; //2.X.2.2.3.6 SURFACE SHELTER
  sidc["G-C-BSU---"] = {}; //2.X.2.2.3.7 UNDERGROUND SHELTER
  sidc["G-C-BWN---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 20,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: 20, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 100,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 140,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 35
    },
    type: { stroke: false, textanchor: "end", x: 50, y: 60, fontsize: 35 },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  }; //2.X.2.2.4.2 NUCLEAR DETONATIONS FRIENDLY GROUND ZERO
  sidc["G-C-BWE---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 20,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: 20, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 100,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 140,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 35
    },
    type: { stroke: false, textanchor: "end", x: 50, y: 60, fontsize: 35 },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  }; //2.X.2.2.4.3 ENEMY KNOWN GROUND ZERO
  sidc["G-C-BWI---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 20,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: 20, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 100,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 140,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 35
    },
    type: { stroke: false, textanchor: "end", x: 50, y: 60, fontsize: 35 },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  }; //2.X.2.2.4.4 ENEMY TEMPLATED
  sidc["G-C-BWF---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 20,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: 20, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 100,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 140,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 35
    },
    type: { stroke: false, textanchor: "end", x: 50, y: 60, fontsize: 35 },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  }; //2.X.2.2.4.5 FRIENDLY PLANNED OR ON-ORDER
  sidc["G-C-BWP---"] = {}; //2.X.2.2.4.6 FALLOUT PRODUCING
  sidc["G-C-BWDP--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.1 DECON SITE/POINT (UNSPECIFIED)
  sidc["G-C-BWDA--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.2 ALTERNATE DECON SITE/POINT (UNSPECIFIED)
  sidc["G-C-BWDT--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.3 DECON SITE/POINT (TROOPS)
  sidc["G-C-BWDE--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.4 DECON SITE/POINT (EQUIPMENT)
  sidc["G-C-BWDS--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.5 DECON SITE/POINT (EQUIPMENT AND TROOPS)
  sidc["G-C-BWDO--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.6 DECON SITE/POINT (OPERATIONAL DECONTAMINATION)
  sidc["G-C-BWDG--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.7 DECON SITE/POINT (THOROUGH DECONTAMINATION)
  sidc["G-C-BWDEM-"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.8 DECON POINT (MAIN) EQUIPMENT
  sidc["G-C-BWDTF-"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.9 DECON POINT (FORWARD) TROOPS
  sidc["G-C-FSTP--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 145,
      fontsize: 40
    },
    altitudeDepth: {
      stroke: false,
      textanchor: "end",
      x: 80,
      y: 145,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 80,
      fontsize: 40
    }
  }; //2.X.2.3.1.1.1 POINT /SINGLE TARGET
  sidc["G-C-FSS---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 125,
      y: 115,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //2.X.2.3.1.2 FIRE SUPPORT STATION
  sidc["G-C-FAU---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 80,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //2.X.2.3.3.9 NUCLEAR TARGET
  sidc["G-C-SPA---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.1 AMBULANCE EXCHANGE POINT
  sidc["G-C-SPC---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.2 CANNIBALIZATION POINT
  sidc["G-C-SPY---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.3 CASUALTY COLLECTION POINT
  sidc["G-C-SPT---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.4 CIVILIAN COLLECTION POINT
  sidc["G-C-SPD---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.5 DETAINEE COLLECTION POINT
  sidc["G-C-SPE---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.6 ENEMY PRISONER OF WAR (EPW) COLLECTION POINT
  sidc["G-C-SPL---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.7 LOGISTICS RELEASE POINT (LRP)
  sidc["G-C-SPM---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.8 MAINTENANCE COLLECTION POINT
  sidc["G-C-SPR---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.9 REARM, REFUEL AND RE-SUPPLY POINT
  sidc["G-C-SPU---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.10 REFUEL ON THE MOVE (ROM) POINT
  sidc["G-C-SPO---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.11 TRAFFIC CONTROL POST (TCP)
  sidc["G-C-SPI---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.12 TRAILER TRANSFER POINT
  sidc["G-C-SPN---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.13 UNIT MAINTENANCE COLLECTION POINT
  sidc["G-C-SPQT--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.1 GENERAL
  sidc["G-C-SPQA--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.2 CLASS I
  sidc["G-C-SPQB--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.3 CLASS II
  sidc["G-C-SPQC--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.4 CLASS III
  sidc["G-C-SPQD--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.5 CLASS IV
  sidc["G-C-SPQE--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.6 CLASS V
  sidc["G-C-SPQF--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.7 CLASS VI
  sidc["G-C-SPQG--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.8 CLASS VII
  sidc["G-C-SPQH--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.9 CLASS VIII
  sidc["G-C-SPQI--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.10 CLASS IX
  sidc["G-C-SPQJ--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.11 CLASS X
  sidc["G-C-SPMA--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.15.1 AMMUNITION SUPPLY POINT (ASP)
  sidc["G-C-SPMT--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.15.2 AMMUNITION TRANSFER POINT (ATP)
  sidc["G-C-OX----"] = {}; //2.X.2.5.1 SPECIAL POINT
  sidc["G-C-OXRN--"] = {}; //2.X.2.5.1.1.1 NAV REFERENCE
  sidc["G-C-OXRD--"] = {}; //2.X.2.5.1.1.2 DLRP
  sidc["G-C-OXUD--"] = {}; //2.X.2.5.1.2.1 DATUM
  sidc["G-C-OXUB--"] = {}; //2.X.2.5.1.2.2 BRIEF CONTACT
  sidc["G-C-OXUL--"] = {}; //2.X.2.5.1.2.3 LOST CONTACT
  sidc["G-C-OXUS--"] = {}; //2.X.2.5.1.2.4 SINKER
  sidc["G-C-OXWA--"] = {}; //2.X.2.5.1.3.1 AIM POINT
  sidc["G-C-OXWD--"] = {}; //2.X.2.5.1.3.2 DROP POINT
  sidc["G-C-OXWE--"] = {}; //2.X.2.5.1.3.3 ENTRY POINT
  sidc["G-C-OXWG--"] = {}; //2.X.2.5.1.3.4 GROUND ZERO
  sidc["G-C-OXWM--"] = {}; //2.X.2.5.1.3.5 MSL DETECT POINT
  sidc["G-C-OXWI--"] = {}; //2.X.2.5.1.3.6 IMPACT POINT
  sidc["G-C-OXWP--"] = {}; //2.X.2.5.1.3.7 PREDICTED IMPACT POINT
  sidc["G-C-OXY---"] = {}; //2.X.2.5.1.4 SONOBUOY
  sidc["G-C-OXYP--"] = {}; //2.X.2.5.1.4.1 PATTERN CENTRE
  sidc["G-C-OXYD--"] = {}; //2.X.2.5.1.4.2 DIFAR
  sidc["G-C-OXYL--"] = {}; //2.X.2.5.1.4.3 LOFAR
  sidc["G-C-OXYC--"] = {}; //2.X.2.5.1.4.4 CASS
  sidc["G-C-OXYS--"] = {}; //2.X.2.5.1.4.5 DICASS
  sidc["G-C-OXYB--"] = {}; //2.X.2.5.1.4.6 BT
  sidc["G-C-OXYA--"] = {}; //2.X.2.5.1.4.7 ANM
  sidc["G-C-OXYV--"] = {}; //2.X.2.5.1.4.8 VLAD
  sidc["G-C-OXYT--"] = {}; //2.X.2.5.1.4.9 ATAC
  sidc["G-C-OXYR--"] = {}; //2.X.2.5.1.4.10 RO
  sidc["G-C-OXYK--"] = {}; //2.X.2.5.1.4.11 KINGPIN
  sidc["G-C-OXN---"] = {}; //2.X.2.5.1.5 FORMATION
  sidc["G-C-OXH---"] = {}; //2.X.2.5.1.6 HARBOUR
  sidc["G-C-OXHQ--"] = {}; //2.X.2.5.1.6.1 POINT Q
  sidc["G-C-OXHA--"] = {}; //2.X.2.5.1.6.2 POINT A
  sidc["G-C-OXHY--"] = {}; //2.X.2.5.1.6.3 POINT Y
  sidc["G-C-OXHX--"] = {}; //2.X.2.5.1.6.4 POINT X
  sidc["G-C-OXR---"] = {}; //2.X.2.5.1.7 ROUTE
  sidc["G-C-OXRR--"] = {}; //2.X.2.5.1.7.1 RENDEZVOUS
  sidc["G-C-OXRD--"] = {}; //2.X.2.5.1.7.2 DIVERSIONS
  sidc["G-C-OXRW--"] = {}; //2.X.2.5.1.7.3 WAYPOINT
  sidc["G-C-OXRP--"] = {}; //2.X.2.5.1.7.4 PIM
  sidc["G-C-OXRT--"] = {}; //2.X.2.5.1.7.5 POINT R
  sidc["G-C-OXSTC-"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.1 COMBATANT STATION
  sidc["G-C-OXSTCP"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.1.1 PICKET STATION
  sidc["G-C-OXSTCA"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.1.2 ASW SHIP STATION
  sidc["G-C-OXSTR-"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.2 REPLENISHMENT AT SEA (RAS) STATION
  sidc["G-C-OXSTH-"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.3 RESCUE STATION
  sidc["G-C-OXSTS-"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.4 SUBMARINE STATION
  sidc["G-C-OXSTSA"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.5 ASW SUBMARINE STATION
  sidc["G-C-OXS---"] = {}; //2.X.2.5.1.9 SEARCH
  sidc["G-C-OXSA--"] = {}; //2.X.2.5.1.9.1 SEARCH AREA
  sidc["G-C-OXSD--"] = {}; //2.X.2.5.1.9.2 DIP POSITION
  sidc["G-C-OXSC--"] = {}; //2.X.2.5.1.9.3 SEARCH CENTRE
  sidc["G-C-OXAC--"] = {}; //2.X.2.5.1.10.1 COMBAT AIR PATROL (CAP)
  sidc["G-C-OXAA--"] = {}; //2.X.2.5.1.10.2 AIRBORNE EARLY WARNING (AEW)
  sidc["G-C-OXAT--"] = {}; //2.X.2.5.1.10.3 TACAN
  sidc["G-C-OXAK--"] = {}; //2.X.2.5.1.10.4 TANKING
  sidc["G-C-OXAF--"] = {}; //2.X.2.5.1.10.5 ANTISUBMARINE WARFARE FIXED WING
  sidc["G-C-OXAH--"] = {}; //2.X.2.5.1.10.6 ANTISUBMARINE WARFARE ROTARY WING
  sidc["G-C-OXAO--"] = {}; //2.X.2.5.1.10.7 TOMCAT
  sidc["G-C-OXAR--"] = {}; //2.X.2.5.1.10.8 RESCUE
  sidc["G-C-OXAP--"] = {}; //2.X.2.5.1.10.9 REPLENISH
  sidc["G-C-OXAM--"] = {}; //2.X.2.5.1.10.10 MARSHALL
  sidc["G-C-OXAS--"] = {}; //2.X.2.5.1.10.11 STRIKE IP
  sidc["G-C-OXAD--"] = {}; //2.X.2.5.1.10.12 CORRIDOR TAB
  sidc["G-C-OG----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2 GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT
  sidc["G-C-OGC---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.1 CHECKPOINT
  sidc["G-C-OGP---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 40,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.5.2.2 CONTACT POINT
  sidc["G-C-OGT---"] = {}; //2.X.2.5.2.3 COORDINATION POINT
  sidc["G-C-OGD---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.5.2.4 DECISION POINT
  sidc["G-C-OGL---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.5 LINKUP POINT
  sidc["G-C-OGN---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.6 PASSAGE POINT
  sidc["G-C-OGR---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.7 RALLY POINT
  sidc["G-C-OGS---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.8 RELEASE POINT
  sidc["G-C-OGI---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.9 START POINT
  sidc["G-C-OGW---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 125,
      fontsize: 70
    }
  }; //2.X.2.5.2.10 WAY POINT
  sidc["G-O-VA----"] = {}; //2.X.3.1.1 ARSON/FIRE
  sidc["G-O-VR----"] = {}; //2.X.3.1.2 ARTILLERY/ARTILLERY FIRE
  sidc["G-O-VE----"] = {}; //2.X.3.1.3 ASSASSINA TION/MURDER/ EXECUTION
  sidc["G-O-VB----"] = {}; //2.X.3.1.4 BOMB/BOMBING
  sidc["G-O-VY----"] = {}; //2.X.3.1.5 BOOBYTRAP
  sidc["G-O-VD----"] = {}; //2.X.3.1.6 DRIVE-BY SHOOTING
  sidc["G-O-VI----"] = {}; //2.X.3.1.7 INDIRECT FIRE (UNSPECIFIED TYPE)
  sidc["G-O-VM----"] = {}; //2.X.3.1.8 MORTAR/MORTAR FIRE
  sidc["G-O-VK----"] = {}; //2.X.3.1.9 ROCKET/ROCKET FIRE
  sidc["G-O-VS----"] = {}; //2.X.3.1.10 SNIPING
  sidc["G-O-VP----"] = {}; //2.X.3.1.11 POISONING
  sidc["G-O-VU----"] = {}; //2.X.3.1.12 AMBUSH
  sidc["G-O-VC----"] = {}; //2.X.3.1.13 AMMUNITION CACHE
  sidc["G-O-VH----"] = {}; //2.X.3.1.14 HELICOPTER (CIVILIAN BEING USED BY HOSTILE OR INSURGENTS
  sidc["G-O-VF----"] = {}; //2.X.3.1.15 HOSTILE OR INSURGENT MOTORIZED INFANTRY
  sidc["G-O-VO----"] = {}; //2.X.3.1.16 HOSTILE OR INSURGENT INFANTRY
  sidc["G-O-VL----"] = {}; //2.X.3.1.17 RECONNAISSANCE/SURVEILLANC E
  sidc["G-O-VX----"] = {}; //2.X.3.1.18 SIGNAL/RADIO STATION
  sidc["G-O-VZ----"] = {}; //2.X.3.1.19 SUPPLY CACHE
  sidc["G-O-LB----"] = {}; //2.X.3.2.1 BLACK LIST LOCATION
  sidc["G-O-LG----"] = {}; //2.X.3.2.2 GRAY LIST LOCATION
  sidc["G-O-LW----"] = {}; //2.X.3.2.3 WHITE LIST LOCATION
  sidc["G-O-PR----"] = {}; //2.X.3.3.1 ROAD BLOCK
  sidc["G-O-PRB---"] = {}; //2.X.3.3.1.1 ROAD BLOCK (UNDER CONSTRUCTION)
  sidc["G-O-PT----"] = {}; //2.X.3.3.2 PATROLLING
  sidc["G-O-PC----"] = {}; //2.X.3.3.3 RECRUITMENT (WILLING)
  sidc["G-O-PCU---"] = {}; //2.X.3.3.3.1 RECRUITMENT (COERCED/IMPRESSED)
  sidc["G-O-PD----"] = {}; //2.X.3.3.4 DEMONSTRATION
  sidc["G-O-PM----"] = {}; //2.X.3.3.5 MINELAYING
  sidc["G-O-PH----"] = {}; //2.X.3.3.6 PSYCHOLOGICAL OPERATIONS (PSYOP)
  sidc["G-O-PHY---"] = {}; //2.X.3.3.6.1 PSYOP (TV AND RADIO PROPAGANDA)
  sidc["G-O-PHW---"] = {}; //2.X.3.3.6.2 PSYOP (WRITTEN PROPAGANDA)
  sidc["G-O-PHG---"] = {}; //2.X.3.3.6.3 WRITTEN PROPAGANDA
  sidc["G-O-PHT---"] = {}; //2.X.3.3.6.4 HOUSE-TO-HOUSE PROPAGANDA
  sidc["G-O-PG----"] = {}; //2.X.3.3.7 FORAGING/SEARCHING
  sidc["G-O-PS----"] = {}; //2.X.3.3.8 SPY
  sidc["G-O-PF----"] = {}; //2.X.3.3.9 FOOD DISTRIBUTION
  sidc["G-O-PI----"] = {}; //2.X.3.3.10 MEDICAL TREATMENT FACILITY
  sidc["G-O-PE----"] = {}; //2.X.3.3.11 ELECTRONIC WARFARE INTERCEPT
  sidc["G-O-PX----"] = {}; //2.X.3.3.12 EXTORTION
  sidc["G-O-PJV---"] = {}; //2.X.3.3.13.1 HIJACKING (VEHICLE)
  sidc["G-O-PJA---"] = {}; //2.X.3.3.13.2 HIJACKING (AIRPLANE)
  sidc["G-O-PJB---"] = {}; //2.X.3.3.13.3 HIJACKING (BOAT)
  sidc["G-O-PK----"] = {}; //2.X.3.3.14 KIDNAPPING
  sidc["G-O-PA----"] = {}; //2.X.3.3.15 ARREST
  sidc["G-O-PO----"] = {}; //2.X.3.3.16 DRUG OPERATION
  sidc["G-O-IR----"] = {}; //2.X.3.4.1 REFUGEES
  sidc["G-O-IS----"] = {}; //2.X.3.4.2 SAFE HOUSE
  sidc["G-O-IG----"] = {}; //2.X.3.4.3 GRAFFITI
  sidc["G-O-IV----"] = {}; //2.X.3.4.4 V ANDALISM/RAPE/LOOT/ RANSACK/PLUNDER/SACK
  sidc["G-O-IK----"] = {}; //2.X.3.4.5 KNOWN INSURGENT VEHICLE
  sidc["G-O-ID----"] = {}; //2.X.3.4.6 DRUG VEHICLE
  sidc["G-O-IF----"] = {}; //2.X.3.4.7 INTERNAL SECURITY FORCE
};

ms_1.addIconParts(tacticalPoints);
ms_1.addLabelOverrides(
  tacticalPointsApp6,
  "letter"
);

// SIDC parts for tactical points
var iconsTacticalPointsApp6 = function tacticalPoints$$2(sidc, bbox, icn, std2525) {
  // Tactical Point Symbols =========================================================================
  sidc["G-T-GD----"] = icn["TP.DESTROY"]; //2.X.1.1.9
  bbox["G-T-GD----"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
  sidc["G-T-GI----"] = icn["TP.INTERDICT"]; //2.X.1.1.13
  bbox["G-T-GI----"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
  sidc["G-T-GN----"] = icn["TP.NEUTRALIZE"]; //2.X.1.1.15
  bbox["G-T-GN----"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
  sidc["G-C-MGPFE-"] = icn["TP.FIX ELECTRO-MAGNETIC"]; //2.X.2.1.1.1.1.2
  sidc["G-C-MGPFA-"] = icn["TP.FIX ACOUSTIC"]; //2.X.2.1.1.1.1.2
  sidc["G-C-MGPFO-"] = icn["TP.FIX ELECTRO-OPTICAL"]; //2.X.2.1.1.1.1.3
  sidc["G-C-MGPI--"] = icn["TP.POINT OF INTEREST"]; //2.X.2.1.1.1.2
  bbox["G-C-MGPI--"] = { x1: 50, x2: 150, y1: -25 };
  sidc["G-C-MAAP--"] = icn["TP.AIR CONTROL POINT (ACP)"]; //2.X.2.1.2.1.1
  bbox["G-C-MAAP--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-MAAC--"] = icn["TP.COMMUNICATIONS CHECKPOINT"]; //2.X.2.1.2.1.2
  bbox["G-C-MAAC--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-MAAU--"] = icn["TP.PULL-UP POINT"]; //2.X.2.1.2.1.3
  bbox["G-C-MAAU--"] = { x1: 50, x2: 240, y1: 50, y2: 150 };
  sidc["G-C-MAAD--"] = icn["TP.DOWNED AIRCREW PICKUP POINT"]; //2.X.2.1.2.1.4
  bbox["G-C-MAAD--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-MDN---"] = icn["TP.DUMMY MINEFIELD"]; //2.X.2.1.3.6
  bbox["G-C-MDN---"] = { x1: 40, x2: 160, y1: -10, y2: 140 };
  sidc["G-C-MMPT--"] = icn["TP.TARGET REFERENCE"]; //2.X.2.1.4.1.1
  sidc["G-C-MMPO--"] = icn["TP.OBSERVATION POST/OUTPOST"]; //2.X.2.1.4.1.4
  bbox["G-C-MMPO--"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-C-MMPOC-"] = icn["TP.COMBAT OUTPOST"]; //2.X.2.1.4.1.4.1
  bbox["G-C-MMPOC-"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-C-MMPOR-"] = icn["TP.OBSERVATION POST/RECONNAISSANCE"]; //2.X.2.1.4.1.4.2
  bbox["G-C-MMPOR-"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-C-MMPOF-"] = icn["TP.FORWARD OBSERVER POSITION"]; //2.X.2.1.4.1.4.3
  bbox["G-C-MMPOF-"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-C-MMPOS-"] = icn["TP.SENSOR OUTPOST"]; //2.X.2.1.4.1.4.4
  bbox["G-C-MMPOS-"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  sidc["G-C-MMPON-"] = icn["TP.CBRN OBSERVATION POST"]; //2.X.2.1.4.1.4.5
  bbox["G-C-MMPON-"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
  // Go home APP6 you are drunk sidc['G-C-MMPON-'] = [];//2.X.2.1.4.1.4.6
  // Go home APP6 you are drunk sidc['G-C-MMPON-'] = [];//2.X.2.1.4.1.4.7
  sidc["G-C-MOPD--"] = icn["TP.POINT OF DEPARTURE"]; //2.X.2.1.5.1.1
  bbox["G-C-MOPD--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-BOATD-"] = icn["TP.FIXED AND PREFABRICATED"]; //2.X.2.2.1.3.3
  bbox["G-C-BOATD-"] = { x1: 60, x2: 140, y1: 30 };
  sidc["G-C-BOAB--"] = icn["TP.BOOBY TRAP"]; //2.X.2.2.1.4
  sidc["G-C-BOAMA-"] = icn["TP.ANTIPERSONNEL (AP) MINES"]; //2.X.2.2.1.5.1
  sidc["G-C-BOAMT-"] = icn["TP.ANTITANK MINE (AT)"]; //2.X.2.2.1.5.2
  sidc["G-C-BOAMD-"] = icn["TP.(AT) ANTIHANDLING DEVICE"]; //2.X.2.2.1.5.3
  bbox["G-C-BOAMD-"] = { x1: 60, x2: 140, y1: 40, y2: 195 };
  sidc["G-C-BOAMC-"] = icn["TP.(AT) DIRECTIONAL"]; //2.X.2.2.1.5.4
  bbox["G-C-BOAMC-"] = { x1: 60, x2: 140, y1: 10, y2: 140 };
  sidc["G-C-BOAMU-"] = icn["TP.UNSPECIFIED MINE"]; //2.X.2.2.1.5.5
  sidc["G-C-BOAMW-"] = icn["TP.WIDE AREA MINES"]; //2.X.2.2.1.5.7
  sidc["G-C-BOAIP-"] = icn["TP.PLANNED MINEFIELD"]; //2.X.2.2.1.6.1
  bbox["G-C-BOAIP-"] = { x1: 40, x2: 160, y1: 60, y2: 140 };
  sidc["G-C-BOAIC-"] = icn["TP.MINEFIELDS STATIC"]; //2.X.2.2.1.6.2
  bbox["G-C-BOAIC-"] = { x1: 40, x2: 160, y1: 60, y2: 140 };
  sidc["G-C-BOAIN-"] = icn["TP.ANTITANK (AT) MINEFIELD"]; //2.X.2.2.1.6.5
  bbox["G-C-BOAIN-"] = { x1: 40, x2: 160, y1: 60, y2: 140 };
  sidc["G-C-BOAIS-"] = icn["TP.SCATTERABLE MINES"]; //2.X.2.2.1.6.6
  bbox["G-C-BOAIS-"] = { x1: 40, x2: 160, y1: 20, y2: 140 };
  sidc["G-C-BOAIH-"] = icn["TP.ANTIPERSONNEL (AP) MINEFIELD"]; //2.X.2.2.1.6.7 ANTIPERSONNEL (AP) MINEFIELD REINFORCED WITH SCATTERABLE WITH SELF-DESTRUCT DATE-TIME-GROUP
  bbox["G-C-BOAIH-"] = { x1: 40, x2: 160, y1: 20, y2: 140 };
  sidc["G-C-BOAID-"] = icn["TP.SCATTERABLE MINEFIELD WITH SELF-DESTRUCT"]; //2.X.2.2.1.6.8 SCATTERABLE MINEFIELD WITH SELF-DESTRUCT DATE-TIME-GROUP
  bbox["G-C-BOAID-"] = { x1: 40, x2: 160, y1: 20, y2: 140 };
  sidc["G-C-BOAV--"] = icn["TP.VOLCANO MINEFIELD"]; //2.X.2.2.1.7
  bbox["G-C-BOAV--"] = { x1: 40, x2: 160, y1: 20, y2: 140 };
  sidc["G-C-BYCG--"] = icn["TP.ENGINEER REGULATING POINT"]; //2.X.2.2.2.2.8
  bbox["G-C-BYCG--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-BSE---"] = icn["TP.EARTHWORK/FORTIFICATION"]; //2.X.2.2.3.1
  sidc["G-C-BSF---"] = icn["TP.FORT"]; //2.X.2.2.3.2
  sidc["G-C-BSH---"] = icn["TP.SURFACE SHELTER"]; //2.X.2.2.3.6
  sidc["G-C-BSU---"] = icn["TP.UNDERGROUND SHELTER"]; //2.X.2.2.3.7
  sidc["G-C-BWN---"] = icn["TP.NUCLEAR DETONATIONS GROUND ZERO"]; //2.X.2.2.4.2
  bbox["G-C-BWN---"] = { x1: 60, x2: 140, y1: -20 };
  sidc["G-C-BWE---"] = icn["TP.NUCLEAR DETONATIONS GROUND ZERO"]; //2.X.2.2.4.2
  bbox["G-C-BWE---"] = { x1: 60, x2: 140, y1: -20 };
  sidc["G-C-BWI---"] = icn["TP.NUCLEAR DETONATIONS GROUND ZERO PLANNED"]; //2.X.2.2.4.4
  bbox["G-C-BWI---"] = { x1: 60, x2: 140, y1: -20 };
  sidc["G-C-BWF---"] = icn["TP.NUCLEAR DETONATIONS GROUND ZERO PLANNED"]; //2.X.2.2.4.5
  bbox["G-C-BWF---"] = { x1: 60, x2: 140, y1: -20 };
  sidc["G-C-BWP---"] = icn["TP.NUCLEAR FALLOUT PRODUCING"]; //2.X.2.2.4.6
  bbox["G-C-BWP---"] = { x1: 50, x2: 150, y1: -20 };
  sidc["G-C-BWDP--"] = icn["TP.DECON SITE/POINT"]; //2.X.2.2.4.11.1
  bbox["G-C-BWDP--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-BWDA--"] = icn["TP.ALTERNATE DECON SITE/POINT"]; //2.X.2.2.4.11.2
  bbox["G-C-BWDA--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-BWDT--"] = icn["TP.DECON SITE/POINT (TROOPS)"]; //2.X.2.2.4.11.3
  bbox["G-C-BWDT--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-BWDE--"] = icn["TP.DECON SITE/POINT (EQUIPMENT)"]; //2.X.2.2.4.11.4
  bbox["G-C-BWDE--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-BWDS--"] = icn["TP.DECON SITE/POINT (EQUIPMENT AND TROOPS)"]; //2.X.2.2.4.11.5
  bbox["G-C-BWDS--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-BWDO--"] = icn["TP.DECON SITE/POINT (OPERATIONAL DECONTAMINATION)"]; //2.X.2.2.4.11.6
  bbox["G-C-BWDO--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-BWDG--"] = icn["TP.DECON SITE/POINT (THOROUGH DECONTAMINATION)"]; //2.X.2.2.4.11.7
  bbox["G-C-BWDG--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-BWDEM-"] = icn["TP.DECON POINT (MAIN) EQUIPMENT"]; //2.X.2.2.4.11.8
  bbox["G-C-BWDEM-"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-BWDTF-"] = icn["TP.DECON POINT (FORWARD) TROOPS"]; //2.X.2.2.4.11.9
  bbox["G-C-BWDTF-"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-FSTP--"] = icn["TP.POINT/SINGLE TARGET"]; //2.X.2.3.1.1.1
  sidc["G-C-FSS---"] = icn["TP.FIRE SUPPORT STATION"]; //2.X.2.3.1.2
  sidc["G-C-FAU---"] = icn["TP.NUCLEAR TARGET"]; //2.X.2.3.3.9
  sidc["G-C-SPA---"] = icn["TP.AMBULANCE EXCHANGE POINT"]; //2.X.2.4.1.1
  bbox["G-C-SPA---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPC---"] = icn["TP.CANNIBALIZATION POINT"]; //2.X.2.4.1.2
  bbox["G-C-SPC---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPY---"] = icn["TP.CASUALTY COLLECTION POINT"]; //2.X.2.4.1.3
  bbox["G-C-SPY---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPT---"] = icn["TP.CIVILIAN COLLECTION POINT"]; //2.X.2.4.1.4
  bbox["G-C-SPT---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPD---"] = icn["TP.DETAINEE COLLECTION POINT"]; //2.X.2.4.1.5
  bbox["G-C-SPD---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPE---"] = icn["TP.EPW COLLECTION POINT"]; //2.X.2.4.1.6
  bbox["G-C-SPE---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPL---"] = icn["TP.LOGISTICS RELEASE POINT"]; //2.X.2.4.1.7
  bbox["G-C-SPL---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPM---"] = icn["TP.MAINTENANCE COLLECTION POINT"]; //2.X.2.4.1.8
  bbox["G-C-SPM---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPR---"] = icn["TP.REARM, REFUEL AND RESUPPLY POINT"]; //2.X.2.4.1.9
  bbox["G-C-SPR---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPU---"] = icn["TP.REFUEL ON THE MOVE POINT"]; //2.X.2.4.1.10
  bbox["G-C-SPU---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPO---"] = icn["TP.TRAFFIC CONTROL POST"]; //2.X.2.4.1.11
  bbox["G-C-SPO---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPI---"] = icn["TP.TRAILER TRANSFER POINT"]; //2.X.2.4.1.12
  bbox["G-C-SPI---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPN---"] = icn["TP.UNIT MAINTENANCE COLLECTION POINT"]; //2.X.2.4.1.13
  bbox["G-C-SPN---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPQT--"] = icn["TP.SUPPLY POINT"]; //2.X.2.4.1.14.1
  bbox["G-C-SPQT--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPQA--"] = icn["TP.SP CLASS I"]; //2.X.2.4.1.14.2
  bbox["G-C-SPQA--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPQB--"] = icn["TP.SP CLASS II"]; //2.X.2.4.1.14.3
  bbox["G-C-SPQB--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPQC--"] = icn["TP.SP CLASS III"]; //2.X.2.4.1.14.4
  bbox["G-C-SPQC--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPQD--"] = icn["TP.SP CLASS IV"]; //2.X.2.4.1.14.5
  bbox["G-C-SPQD--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPQE--"] = icn["TP.SP CLASS V"]; //2.X.2.4.1.14.6
  bbox["G-C-SPQE--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPQF--"] = icn["TP.SP CLASS VI"]; //2.X.2.4.1.14.7
  bbox["G-C-SPQF--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPQG--"] = icn["TP.SP CLASS VII"]; //2.X.2.4.1.14.8
  bbox["G-C-SPQG--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPQH--"] = icn["TP.SP CLASS VIII"]; //2.X.2.4.1.14.9
  bbox["G-C-SPQH--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPQI--"] = icn["TP.SP CLASS IX"]; //2.X.2.4.1.14.10
  bbox["G-C-SPQI--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPQJ--"] = icn["TP.SP CLASS X"]; //2.X.2.4.1.14.11
  bbox["G-C-SPQJ--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPMA--"] = icn["TP.AMMUNITION SUPPLY POINT (ASP)"]; //2.X.2.4.1.15.1
  bbox["G-C-SPMA--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-SPMT--"] = icn["TP.AMMUNITION TRANSFER POINT (ATP)"]; //2.X.2.4.1.15.2
  bbox["G-C-SPMT--"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-OX----"] = icn["TP.SPECIAL POINT"]; //2.X.2.5.1
  bbox["G-C-OX----"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  sidc["G-C-OXRN--"] = icn["TP.NAVIGATIONAL REFERENCE"]; //2.X.2.5.1.1.1
  bbox["G-C-OXRN--"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
  // Go home APP6 you are drunk sidc['G-C-OXRD--'] = [];//2.X.2.5.1.1.2 WRONG SIDC IN STANDARD
  sidc["G-C-OXUD--"] = icn["TP.DATUM"]; //2.X.2.5.1.2.1
  bbox["G-C-OXUD--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXUB--"] = icn["TP.BRIEF CONTACT"]; //2.X.2.5.1.2.2
  bbox["G-C-OXUB--"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
  sidc["G-C-OXUL--"] = icn["TP.LOST CONTACT"]; //2.X.2.5.1.2.3
  bbox["G-C-OXUL--"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
  sidc["G-C-OXUS--"] = icn["TP.SINKER"]; //2.X.2.5.1.2.4
  bbox["G-C-OXUS--"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
  sidc["G-C-OXWA--"] = icn["TP.AIM POINT"]; //2.X.2.5.1.3.1
  bbox["G-C-OXWA--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXWD--"] = icn["TP.DROP POINT"]; //2.X.2.5.1.3.2
  bbox["G-C-OXWD--"] = { x1: 50, x2: 150, y1: 50, y2: 120 };
  sidc["G-C-OXWE--"] = icn["TP.ENTRY POINT"]; //2.X.2.5.1.3.3
  bbox["G-C-OXWE--"] = { x1: 50, x2: 150, y1: 50 };
  sidc["G-C-OXWG--"] = icn["TP.GROUND ZERO"]; //2.X.2.5.1.3.4
  bbox["G-C-OXWG--"] = { x1: 50, x2: 150, y1: 30 };
  sidc["G-C-OXWM--"] = icn["TP.MSL DETECT POINT"]; //2.X.2.5.1.3.5
  bbox["G-C-OXWM--"] = { x1: 50, x2: 150, y1: 30 };
  sidc["G-C-OXWI--"] = icn["TP.IMPACT POINT"]; //2.X.2.5.1.3.6
  bbox["G-C-OXWI--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXWP--"] = icn["TP.PREDICTED IMPACT POINT"]; //2.X.2.5.1.3.7
  bbox["G-C-OXWP--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXY---"] = icn["TP.SONOBUOY"]; //2.X.2.5.1.4
  bbox["G-C-OXY---"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXYP--"] = icn["TP.SONOBUOY PATTERN CENTER"]; //2.X.2.5.1.4.1
  bbox["G-C-OXYP--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXYD--"] = icn["TP.SONOBUOY DIFAR"]; //2.X.2.5.1.4.2
  bbox["G-C-OXYD--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXYL--"] = icn["TP.SONOBUOY LOFAR"]; //2.X.2.5.1.4.3
  bbox["G-C-OXYL--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXYC--"] = icn["TP.SONOBUOY CASS"]; //2.X.2.5.1.4.4
  bbox["G-C-OXYC--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXYS--"] = icn["TP.SONOBUOY DICASS"]; //2.X.2.5.1.4.5
  bbox["G-C-OXYS--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXYB--"] = icn["TP.SONOBUOY BT"]; //2.X.2.5.1.4.6
  bbox["G-C-OXYB--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXYA--"] = icn["TP.SONOBUOY ANM"]; //2.X.2.5.1.4.7
  bbox["G-C-OXYA--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXYV--"] = icn["TP.SONOBUOY VLAD"]; //2.X.2.5.1.4.8
  bbox["G-C-OXYV--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXYT--"] = icn["TP.SONOBUOY ATAC"]; //2.X.2.5.1.4.9
  bbox["G-C-OXYT--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXYR--"] = icn["TP.SONOBUOY RO"]; //2.X.2.5.1.4.10
  bbox["G-C-OXYR--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXYK--"] = icn["TP.SONOBUOY KINGPIN"]; //2.X.2.5.1.4.11
  bbox["G-C-OXYK--"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
  sidc["G-C-OXN---"] = icn["TP.FORMATION"]; //2.X.2.5.1.5
  bbox["G-C-OXN---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXH---"] = icn["TP.HARBOR"]; //2.X.2.5.1.6
  bbox["G-C-OXH---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXHQ--"] = icn["TP.HARBOR POINT Q"]; //2.X.2.5.1.6.1
  bbox["G-C-OXHQ--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXHA--"] = icn["TP.HARBOR POINT A"]; //2.X.2.5.1.6.2
  bbox["G-C-OXHA--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXHY--"] = icn["TP.HARBOR POINT Y"]; //2.X.2.5.1.6.3
  bbox["G-C-OXHY--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXHX--"] = icn["TP.HARBOR POINT X"]; //2.X.2.5.1.6.4
  bbox["G-C-OXHX--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXR---"] = icn["TP.ROUTE"]; //2.X.2.5.1.7
  bbox["G-C-OXR---"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
  sidc["G-C-OXRR--"] = icn["TP.ROUTE RENDEZVOUS"]; //2.X.2.5.1.7.1
  bbox["G-C-OXRR--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-C-OXRD--"] = icn["TP.ROUTE DIVERSIONS"]; //2.X.2.5.1.7.2
  bbox["G-C-OXRD--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-C-OXRW--"] = icn["TP.ROUTE WAYPOINT"]; //2.X.2.5.1.7.3
  bbox["G-C-OXRW--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-C-OXRP--"] = icn["TP.ROUTE PIM"]; //2.X.2.5.1.7.4
  bbox["G-C-OXRP--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-C-OXRT--"] = icn["TP.ROUTE POINT R"]; //2.X.2.5.1.7.5
  bbox["G-C-OXRT--"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
  sidc["G-C-OXSTC-"] = icn["TP.COMBATANT STATION"]; //2.X.2.5.1.8.1
  bbox["G-C-OXSTC-"] = { x1: -15, x2: 140, y1: 60, y2: 140 };
  sidc["G-C-OXSTCP"] = icn["TP.PICKET STATION"]; //2.X.2.5.1.8.1.1
  bbox["G-C-OXSTCP"] = { x1: -15, x2: 140, y1: 60, y2: 140 };
  sidc["G-C-OXSTCA"] = icn["TP.ASW SHIP STATION"]; //2.X.2.5.1.8.1.2
  bbox["G-C-OXSTCA"] = { x1: -15, x2: 140, y1: 60, y2: 140 };
  sidc["G-C-OXSTR-"] = icn["TP.REPLENISHMENT AT SEA (RAS) STATION"]; //2.X.2.5.1.8.2
  bbox["G-C-OXSTR-"] = { x1: -15, x2: 140, y1: 60, y2: 140 };
  sidc["G-C-OXSTH-"] = icn["TP.RESCUE STATION"]; //2.X.2.5.1.8.3
  bbox["G-C-OXSTH-"] = { x1: -15, x2: 140, y1: 60, y2: 140 };
  sidc["G-C-OXSTS-"] = icn["TP.SUBMARINE STATION"]; //2.X.2.5.1.8.4
  bbox["G-C-OXSTS-"] = { x1: -15, x2: 140, y1: 60, y2: 140 };
  sidc["G-C-OXSTSA"] = icn["TP.ASW SUBMARINE STATION"]; //2.X.2.5.1.8.5
  bbox["G-C-OXSTSA"] = { x1: -115, x2: 140, y1: 60, y2: 140 };
  sidc["G-C-OXS---"] = icn["TP.SEARCH"]; //2.X.2.5.1.9
  bbox["G-C-OXS---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXSA--"] = icn["TP.SEARCH AREA"]; //2.X.2.5.1.9.1 TODO
  bbox["G-C-OXSA--"] = { x1: 20, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXSD--"] = icn["TP.DIP POSITION"]; //2.X.2.5.1.9.2 TODO
  bbox["G-C-OXSD--"] = { x1: 10, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXSC--"] = icn["TP.SEARCH CENTER"]; //2.X.2.5.1.9.3
  bbox["G-C-OXSC--"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OXAC--"] = icn["TP.COMBAT AIR PATROL (CAP)"]; //2.X.2.5.1.10.1
  bbox["G-C-OXAC--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OXAA--"] = icn["TP.AIRBORNE EARLY WARNING (AEW)"]; //2.X.2.5.1.10.2
  bbox["G-C-OXAA--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OXAT--"] = icn["TP.TACAN"]; //2.X.2.5.1.10.3
  bbox["G-C-OXAT--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OXAK--"] = icn["TP.TANKING"]; //2.X.2.5.1.10.4
  bbox["G-C-OXAK--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OXAF--"] = icn["TP.FIXED WING"]; //2.X.2.5.1.10.5
  bbox["G-C-OXAF--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OXAH--"] = icn["TP.ROTARY WING"]; //2.X.2.5.1.10.6
  bbox["G-C-OXAH--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OXAO--"] = icn["TP.TOMCAT"]; //2.X.2.5.1.10.7
  bbox["G-C-OXAO--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OXAR--"] = icn["TP.RESCUE"]; //2.X.2.5.1.10.8
  bbox["G-C-OXAR--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OXAP--"] = icn["TP.REPLENISH"]; //2.X.2.5.1.10.9
  bbox["G-C-OXAP--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OXAM--"] = icn["TP.MARSHALL"]; //2.X.2.5.1.10.10
  bbox["G-C-OXAM--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OXAS--"] = icn["TP.STRIKE IP"]; //2.X.2.5.1.10.11
  bbox["G-C-OXAS--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OXAD--"] = icn["TP.CORRIDOR TAB POINT"]; //2.X.2.5.1.10.12
  bbox["G-C-OXAD--"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
  sidc["G-C-OG----"] = icn["TP.ACTION POINT"]; //2.X.2.5.2
  bbox["G-C-OG----"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-OGC---"] = icn["TP.ACTION POINT"]; //2.X.2.5.2.1
  bbox["G-C-OGC---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-OGP---"] = icn["TP.CONTACT POINT"]; //2.X.2.5.2.2
  bbox["G-C-OGP---"] = { x1: 55, x2: 145, y1: -10 };
  sidc["G-C-OGT---"] = icn["TP.COORDINATION POINT"]; //2.X.2.5.2.3
  bbox["G-C-OGT---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
  sidc["G-C-OGD---"] = icn["TP.DECISION POINT"]; //2.X.2.5.2.4
  bbox["G-C-OGD---"] = { x1: 30, x2: 170, y1: 25, y2: 160 };
  sidc["G-C-OGL---"] = icn["TP.ACTION LINKUP POINT"]; //2.X.2.5.2.5
  bbox["G-C-OGL---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-OGN---"] = icn["TP.ACTION PASSAGE POINT"]; //2.X.2.5.2.6
  bbox["G-C-OGN---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-OGR---"] = icn["TP.ACTION RALLY POINT"]; //2.X.2.5.2.7
  bbox["G-C-OGR---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-OGS---"] = icn["TP.ACTION RELEASE POINT"]; //2.X.2.5.2.8
  bbox["G-C-OGS---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-OGI---"] = icn["TP.ACTION START POINT"]; //2.X.2.5.2.9
  bbox["G-C-OGI---"] = { x1: 60, x2: 140, y1: -60 };
  sidc["G-C-OGW---"] = icn["TP.WAYPOINT"]; //2.X.2.5.2.10
  bbox["G-C-OGW---"] = { x1: 60, x2: 140, y1: 60, y2: 140 };
  sidc["G-O-VA----"] = icn["TP.FIRE"]; //2.X.3.1.1
  sidc["G-O-VR----"] = icn["GR.EQ.HOWITZER"]; //2.X.3.1.2
  sidc["G-O-VE----"] = icn["ST.IC.KILLING VICTIM"]; //2.X.3.1.3
  sidc["G-O-VB----"] = icn["AIR.MISSILE.IC.BOMB"]; //2.X.3.1.4
  sidc["G-O-VY----"] = icn["ST.IC.BOOBY TRAP"]; //2.X.3.1.5
  sidc["G-O-VD----"] = icn["ST.IC.DRIVE-BY SHOOTING"]; //2.X.3.1.6
  sidc["G-O-VI----"] = icn["TP.INDIRECT FIRE"]; //2.X.3.1.7
  sidc["G-O-VM----"] = icn["GR.EQ.MORTAR"]; //2.X.3.1.8
  sidc["G-O-VK----"] = icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"]; //2.X.3.1.9
  sidc["G-O-VS----"] = icn["ST.IC.SNIPING"]; //2.X.3.1.10
  sidc["G-O-VP----"] = icn["ST.IC.POISONING"]; //2.X.3.1.11
  sidc["G-O-VU----"] = icn["TP.AMBUSH"]; //2.X.3.1.12
  sidc["G-O-VC----"] = icn["GR.IC.FF.CLASS V"]; //2.X.3.1.13
  sidc["G-O-VH----"] = icn["AR.I.FF.CIVILIAN ROTARY WING"]; //2.X.3.1.14
  sidc["G-O-VF----"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.FF.MOTORIZED"]]; //2.X.3.1.15
  sidc["G-O-VO----"] = icn["GR.IC.FF.INFANTRY"]; //2.X.3.1.16
  sidc["G-O-VL----"] = icn["GR.IC.FF.RECONNAISSANCE"]; //2.X.3.1.17
  sidc["G-O-VX----"] = icn["GR.IC.FF.SIGNAL"]; //2.X.3.1.18
  sidc["G-O-VZ----"] = icn["GR.IC.FF.SUPPLY"]; //2.X.3.1.19
  sidc["G-O-LB----"] = icn["ST.IC.BLACK LIST LOCATION"]; //2.X.3.2.1
  sidc["G-O-LG----"] = icn["ST.IC.GRAY LIST LOCATION"]; //2.X.3.2.2
  sidc["G-O-LW----"] = icn["ST.IC.WHITE LIST LOCATION"]; //2.X.3.2.3
  sidc["G-O-PR----"] = icn["TP.ROAD BLOCK"]; //2.X.3.3.1
  sidc["G-O-PRB---"] = icn["TP.ROAD BLOCK (UNDER CONSTRUCTION)"]; //2.X.3.3.1.1
  sidc["G-O-PT----"] = icn["ST.IC.PATROLLING"]; //2.X.3.3.2
  sidc["G-O-PC----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.WILLING"]]; //2.X.3.3.3
  sidc["G-O-PCU---"] = [
    icn["ST.IC.INDIVIDUAL"],
    icn["ST.M1.COERCED/IMPRESSED"]
  ]; //2.X.3.3.3.1
  sidc["G-O-PD----"] = icn["ST.IC.DEMONSTRATION"]; //2.X.3.3.4
  sidc["G-O-PM----"] = icn["ST.IC.MINE LAYING"]; //2.X.3.3.5
  sidc["G-O-PH----"] = icn["ST.IC.PSYCHOLOGICAL OPERATIONS"]; //2.X.3.3.6
  sidc["G-O-PHY---"] =
    icn["ST.IC.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS"]; //2.X.3.3.6.1
  sidc["G-O-PHW---"] = [
    icn["ST.IC.PSYCHOLOGICAL OPERATIONS"],
    icn["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"]
  ]; //2.X.3.3.6.2
  sidc["G-O-PHG---"] = [
    icn["ST.IC.PSYCHOLOGICAL OPERATIONS"],
    icn["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"]
  ]; //2.X.3.3.6.3
  sidc["G-O-PHT---"] = [
    icn["ST.IC.PSYCHOLOGICAL OPERATIONS"],
    icn["ST.M1.HOUSE-TO-HOUSE"]
  ]; //2.X.3.3.6.4
  sidc["G-O-PG----"] = icn["ST.IC.SEARCHING"]; //2.X.3.3.7
  sidc["G-O-PS----"] = icn["ST.IC.SPY"]; //2.X.3.3.8
  sidc["G-O-PF----"] = icn["ST.IC.FOOD DISTRIBUTION"]; //2.X.3.3.9
  sidc["G-O-PI----"] = icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]; //2.X.3.3.10
  sidc["G-O-PE----"] = [
    icn["GR.IC.ELECTRONIC WARFARE"],
    icn["GR.IC.FF.INTERCEPT"]
  ]; //2.X.3.3.11
  sidc["G-O-PX----"] = icn["ST.IC.EXTORTION"]; //2.X.3.3.12
  sidc["G-O-PJV---"] = [
    icn["ST.IC.KNOWN INSURGENT VEHICLE"],
    icn["ST.M1.HIJACKING/HIJACKED"]
  ]; //2.X.3.3.13.1
  sidc["G-O-PJA---"] = [
    icn["ST.IC.HIJACKING (AIRPLANE)"],
    icn["ST.M1.HIJACKING/HIJACKED"]
  ]; //2.X.3.3.13.2
  sidc["G-O-PJB---"] = [
    icn["ST.IC.HIJACKING (BOAT)"],
    icn["ST.M1.HIJACKING/HIJACKED"]
  ]; //2.X.3.3.13.3
  sidc["G-O-PK----"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.KIDNAPPING"]]; //2.X.3.3.14
  sidc["G-O-PA----"] = icn["ST.IC.ARREST"]; //2.X.3.3.15
  sidc["G-O-PO----"] = icn["ST.IC.DRUG RELATED ACTIVITIES"]; //2.X.3.3.16
  sidc["G-O-IR----"] = icn["ST.IC.GROUP"]; //2.X.3.4.1
  sidc["G-O-IS----"] = icn["ST.IC.SAFE HOUSE"]; //2.X.3.4.2
  sidc["G-O-IG----"] = icn["ST.IC.GRAFFITI"]; //2.X.3.4.3
  sidc["G-O-IV----"] = icn["ST.IC.VANDALISM/LOOT/RANSACK/PLUNDER/SACK"]; //2.X.3.4.4
  sidc["G-O-IK----"] = icn["ST.IC.KNOWN INSURGENT VEHICLE"]; //2.X.3.4.5
  sidc["G-O-ID----"] = [
    icn["ST.IC.KNOWN INSURGENT VEHICLE"],
    icn["ST.M1.DRUG"]
  ]; //2.X.3.4.6
  sidc["G-O-IF----"] = icn["ST.IC.INTERNAL SECURITY FORCE"]; //2.X.3.4.7
};

var properties$2 = function(properties, mapping) {
  //var version = this.options.sidc.substr(0, 2);
  var standardIdentity1 = this.options.sidc.substr(2, 1);
  var standardIdentity2 = this.options.sidc.substr(3, 1);
  var symbolSet = this.options.sidc.substr(4, 2);
  var status = this.options.sidc.substr(6, 1);
  var headquartersTaskForceDummy = this.options.sidc.substr(7, 1);
  var echelonMobility = this.options.sidc.substr(8, 2);

  var affiliationMapping = {
    "0": "Unknown",
    "1": "Unknown",
    "2": "Friend",
    "3": "Friend",
    "4": "Neutral",
    "5": "Hostile",
    "6": "Hostile"
  };

  var dimensionMapping = {
    "00": "Sea",
    "01": "Air",
    "02": "Air",
    "05": "Air",
    "06": "Air",
    "10": "Ground",
    "11": "Ground",
    "12": "Ground",
    "15": "Ground",
    "20": "Ground",
    "30": "Sea",
    "35": "Subsurface",
    "36": "Subsurface",
    "39": "Subsurface",
    "40": "Ground",
    "50": "Air",
    "51": "Air",
    "52": "Ground",
    "53": "Sea",
    "54": "Subsurface",
    "60": "Ground"
  };

  var functionid = (properties.functionid = this.options.sidc.substr(10, 10));

  properties.context =
    mapping.context[parseInt(this.options.sidc.substr(2, 1))];
  properties.affiliation = affiliationMapping[standardIdentity2];
  properties.dimension = dimensionMapping[symbolSet];

  //SymbolSets in Space
  if (symbolSet == "05" || symbolSet == "06" || symbolSet == "50")
    properties.space = true;
  //SymbolSets that are Activities
  if (symbolSet == "40") properties.activity = true;
  //SymbolSets that are Installations
  if (symbolSet == "20") properties.installation = true;
  //Sea Mines with MEDAL icn
  if (symbolSet == "36" && this.style.alternateMedal === false)
    properties.fill = false;
  //Sea own track
  if (symbolSet == "30" && functionid.substr(0, 6) == 150000)
    properties.frame = false;

  //Planned/Anticipated/Suspect symbols should have a dashed outline
  if (status == "1") properties.notpresent = ms_1._dashArrays.anticipated;
  if (
    standardIdentity2 == "0" ||
    standardIdentity2 == "2" ||
    standardIdentity2 == "5"
  )
    properties.notpresent = ms_1._dashArrays.pending;

  //All ETC/POSCON tracks shall have a pending standard identity frame.
  //All fused tracks shall have a pending standard identity frame.
  if (symbolSet == "30" && functionid.substr(0, 6) == 160000)
    properties.notpresent = ms_1._dashArrays.pending;
  if (symbolSet == "35" && functionid.substr(0, 6) == 140000)
    properties.notpresent = ms_1._dashArrays.pending;
  if (symbolSet == "35" && functionid.substr(0, 6) == 150000)
    properties.notpresent = ms_1._dashArrays.pending;

  //Should it have a Condition Bar
  if (status == "2" || status == "3" || status == "4" || status == "5")
    properties.condition = mapping.status[parseInt(status)];

  //First save the dimensionType and affiliationType before we modifies it...
  properties.baseDimension = properties.dimension;
  properties.baseAffilation = properties.affiliation;

  //Joker and faker should have the shape of friendly
  if (standardIdentity2 == "5" && standardIdentity1 == "1")
    properties.joker = true;
  if (standardIdentity2 == "6" && standardIdentity1 == "1")
    properties.faker = true;
  if (properties.joker || properties.faker) {
    properties.affiliation = mapping.affiliation[1];
  }

  if (symbolSet == "00") properties.dimensionUnknown = true;

  //If battle dimension is unknown, standard identity is Exersize and other than Unknown we should not have a symbol
  if (
    symbolSet == "00" &&
    standardIdentity1 == "1" &&
    properties.affiliation != "Unknown"
  )
    properties.affiliation = "";

  //Land Dismounted Individual should have special icons
  if (symbolSet == "27") {
    properties.dimension = "LandDismountedIndividual";
    properties.dismounted = true;
  }

  //Ground Equipment should have the same geometry as sea Friend...
  //Signal INTELLIGENCE Ground should have the same geometry as sea Friend...
  if (symbolSet == "15" || symbolSet == "52")
    properties.dimension = mapping.dimension[2];

  //Setting up Headquarters/task force/dummy
  if (["1", "3", "5", "7"].indexOf(headquartersTaskForceDummy) > -1)
    properties.feintDummy = true;
  if (["2", "3", "6", "7"].indexOf(headquartersTaskForceDummy) > -1)
    properties.headquarters = true;
  if (["4", "5", "6", "7"].indexOf(headquartersTaskForceDummy) > -1)
    properties.taskForce = true;

  //Setting up Echelon/Mobility/Towed Array Amplifier
  if (echelonMobility <= 30) {
    properties.echelon = mapping.echelonMobility[echelonMobility];
  }
  if (echelonMobility >= 30 && echelonMobility < 70) {
    properties.mobility = mapping.echelonMobility[echelonMobility];
  }
  if (echelonMobility >= 70 && echelonMobility < 80) {
    properties.leadership = mapping.echelonMobility[echelonMobility];
  }
  //Civilian stuff
  if (
    (symbolSet == "01" && functionid.substring(0, 2) == "12") ||
    (symbolSet == "05" && functionid.substring(0, 2) == "12") ||
    symbolSet == "11" ||
    (symbolSet == "12" && functionid.substring(0, 2) == "12") ||
    (symbolSet == "15" && functionid.substring(0, 2) == "16") ||
    (symbolSet == "30" && functionid.substring(0, 2) == "14") ||
    (symbolSet == "35" && functionid.substring(0, 2) == "12")
  ) {
    properties.civilian = true;
  }

  return properties;
};

var geticon$2 = function(symbolSet, iconParts, STD2525) {
  var iconSIDC = {};
  var iconModifier1 = {};
  var iconModifier2 = {};
  var iconBbox = {};

  for (var i in ms_1._numberSIDCicons) {
    if (!ms_1._numberSIDCicons.hasOwnProperty(i)) continue;
    ms_1._numberSIDCicons[i].call(
      this,
      iconSIDC,
      iconModifier1,
      iconModifier2,
      iconBbox,
      symbolSet,
      iconParts,
      STD2525
    );
  }
  return {
    icons: iconSIDC,
    m1: iconModifier1,
    m2: iconModifier2,
    bbox: iconBbox
  };
};

//var ms = require("../ms.js");

var iconsAir$2 = function air(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Air
  if (symbolSet == "01") {
    sId["110000"] = [icn["AR.I.MILITARY"]];
    sId["110100"] = [icn["AR.I.FIXED-WING DSymbol"]];
    sId["110101"] = [icn["AR.I.MEDICAL EVACUATION"]];
    sId["110102"] = [icn["AR.I.ATTACK/STRIKE"]];
    sId["110103"] = [icn["AR.I.BOMBER"]];
    sId["110104"] = [icn["AR.I.FIGHTER"]];
    sId["110105"] = [icn["AR.I.FIGHTER/BOMBER"]];
    //sId['110106'] = '';//{Reserved for Future Use}
    sId["110107"] = [icn["AR.I.CARGO"]];
    sId["110108"] = [icn["AR.I.JAMMER / ELECTRONIC COUNTER-MEASURES"]];
    sId["110109"] = [icn["AR.I.TANKER"]];
    sId["110110"] = [icn["AR.I.PATROL"]];
    sId["110111"] = [icn["AR.I.RECONNAISSANCE"]];
    sId["110112"] = [icn["AR.I.TRAINER"]];
    sId["110113"] = [icn["AR.I.UTILITY"]];
    sId["110114"] = [icn["AR.I.VSTOL"]];
    sId["110115"] = [icn["AR.I.AIRBORNE COMMAND POST"]];
    sId["110116"] = [icn["AR.I.AIRBORNE EARLY WARNING"]];
    sId["110117"] = [icn["AR.I.ANTISURFACE WARFARE"]];
    sId["110118"] = [icn["AR.I.ANTISUBMARINE WARFARE"]];
    sId["110119"] = [icn["AR.I.COMMUNICATIONS"]];
    sId["110120"] = [icn["AR.I.COMBAT SEARCH AND RESCUE"]];
    sId["110121"] = [icn["AR.I.ELECTRONIC SUPPORT"]];
    sId["110122"] = [icn["AR.I.GOVERNMENT"]];
    sId["110123"] = [icn["AR.I.MINE COUNTERMEASURES"]];
    sId["110124"] = [icn["AR.I.PERSONNEL RECOVERY DSymbol"]];
    sId["110125"] = [icn["AR.I.SEARCH AND RESCUE"]];
    sId["110126"] = [icn["AR.I.SPECIAL OPERATIONS FORCES"]];
    sId["110127"] = [icn["AR.I.ULTRA LIGHT"]];
    sId["110128"] = [icn["AR.I.PHOTOGRAPHIC RECONNAISSANCE"]];
    sId["110129"] = [icn["AR.I.VIP"]];
    sId["110130"] = [icn["AR.I.SUPRESSION OF ENEMY AIR DEFENCE"]];
    sId["110131"] = [icn["AR.I.PASSENGER"]];
    sId["110132"] = [icn["AR.I.ESCORT"]];
    sId["110133"] = [icn["AR.I.ELECTRONIC ATTACK (EA)"]];
    sId["110200"] = [icn["AR.I.MILITARY ROTARY WING"]];
    sId["110300"] = [icn["AR.I.UNMANNED AERIAL VEHICLE"]];
    sId["110400"] = [icn["AR.I.VERTICAL-TAKEOFF UAV (VT-UAV)"]];
    sId["110500"] = [icn["AR.I.MILITARY BALLOON"]];
    sId["110600"] = [icn["AR.I.MILITARY AIRSHIP"]];
    sId["110700"] = [icn["AR.I.TETHERED LIGHTER THAN AIR"]];
    sId["120000"] = [icn["AR.I.CIVILIAN"]];
    sId["120100"] = [icn["AR.I.CIVILIAN FIXED-WING DSymbol"]];
    sId["120200"] = [icn["AR.I.CIVILIAN ROTARY WING"]];
    sId["120300"] = [icn["AR.I.CIVILIAN UNMANNED AERIAL VEHICLE"]];
    sId["120400"] = [icn["AR.I.CIVILIAN BALLOON"]];
    sId["120500"] = [icn["AR.I.CIVILIAN AIRSHIP"]];
    sId["120600"] = [icn["AR.I.CIVILIAN TETHERED LIGHTER THAN AIR"]];
    sId["130000"] = [icn["AR.I.WEAPON"]];
    sId["130100"] = [icn["AR.I.BOMB"]];
    sId["130200"] = [icn["AR.I.UNDERWATER DECOY DSymbol"]];
    sId["140000"] = [icn["AR.I.MANUAL TRACK"]];

    sIdm1["01"] = [icn["AIR.M1.ATTACK"]];
    sIdm1["02"] = [icn["AIR.M1.BOMBER"]];
    sIdm1["03"] = [icn["AIR.M1.CARGO"]];
    sIdm1["04"] = [icn["AIR.M1.FIGHTER"]];
    sIdm1["05"] = [icn["AIR.M1.INTERCEPTOR"]];
    sIdm1["06"] = [icn["AIR.M1.TANKER"]];
    sIdm1["07"] = [icn["AIR.M1.UTILITY"]];
    sIdm1["08"] = [icn["AIR.M1.VSTOL"]];
    sIdm1["09"] = [icn["AIR.M1.PASSENGER"]];
    sIdm1["10"] = [icn["AIR.M1.ULTRA LIGHT"]];
    sIdm1["11"] = [icn["AIR.M1.AIRBORNE COMMAND POST"]];
    sIdm1["12"] = [icn["AIR.M1.AIRBORNE EARLY WARNING"]];
    sIdm1["13"] = [icn["AIR.M1.GOVERNMENT"]];
    sIdm1["14"] = [icn["AIR.M1.MEDEVAC"]];
    sIdm1["15"] = [icn["AIR.M1.ESCORT"]];
    sIdm1["16"] = [icn["AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES"]];
    sIdm1["17"] = [icn["AIR.M1.PATROL"]];
    sIdm1["18"] = [icn["AIR.M1.RECONNAISSANCE"]];
    sIdm1["19"] = [icn["AIR.M1.TRAINER"]];
    sIdm1["20"] = [icn["AIR.M1.PHOTOGRAPHIC"]];
    sIdm1["21"] = [icn["AIR.M1.PERSONNEL RECOVERY"]];
    sIdm1["22"] = [icn["AIR.M1.ANTISUBMARINE WARFARE"]];
    sIdm1["23"] = [icn["AIR.M1.COMMUNICATIONS"]];
    sIdm1["24"] = [icn["AIR.M1.ELECTRONIC SUPPORT (ES)"]];
    sIdm1["25"] = [icn["AIR.M1.MINE COUNTERMEASURES"]];
    sIdm1["26"] = [icn["AIR.M1.SEARCH AND RESCUE"]];
    sIdm1["27"] = [icn["AIR.M1.SPECIAL OPERATIONS FORCES"]];
    sIdm1["28"] = [icn["AIR.M1.SURFACE WARFARE"]];
    sIdm1["29"] = [icn["AIR.M1.VIP"]];
    sIdm1["30"] = [icn["AIR.M1.COMBAT SEARCH AND RESCUE"]];
    sIdm1["31"] = [icn["AIR.M1.SUPRESSION OF ENEMY AIR DEFENCE"]];
    sIdm1["32"] = [icn["AIR.M1.ANTISURFACE WARFARE"]];
    sIdm1["33"] = [icn["AIR.M1.FIGHTER/BOMBER"]];
    sIdm1["34"] = [icn["AIR.M1.INTENSIVE CARE"]];
    sIdm1["35"] = [icn["AIR.M1.ELECTRONIC ATTACK (EA)"]];
    sIdm1["36"] = [icn["AIR.M1.MULTIMISSION"]];
    sIdm1["37"] = [icn["AIR.M1.HIJACKING"]];
    sIdm1["38"] = [icn["AIR.M1.ASW HELO-LAMPS"]];
    sIdm1["39"] = [icn["AIR.M1.ASW HELO - SH-60R"]];

    sIdm2["01"] = [icn["AIR.M2.HEAVY"]];
    sIdm2["02"] = [icn["AIR.M2.MEDIUM"]];
    sIdm2["03"] = [icn["AIR.M2.LIGHT"]];
    sIdm2["04"] = [icn["AIR.M2.BOOM-ONLY"]];
    sIdm2["05"] = [icn["AIR.M2.DROUGE-ONLY"]];
    sIdm2["06"] = [icn["AIR.M2.BOOM AND DROUGE"]];
    sIdm2["07"] = [icn["AIR.M2.CLOSE RANGE"]];
    sIdm2["08"] = [icn["AIR.M2.SHORT RANGE"]];
    sIdm2["09"] = [icn["AIR.M2.MEDIUM RANGE"]];
    sIdm2["10"] = [icn["AIR.M2.LONG RANGE"]];
    sIdm2["11"] = [icn["AIR.M2.DOWNLINKED"]];
  }
};

//var ms = require("../ms.js");

var iconsAirmissile = function airmissile(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Air Missile
  if (symbolSet == "02") {
    sId["110000"] = [icn["AIR.MISSILE.ICON"]];

    sIdm1["01"] = [icn["AIR.MISSILE.M1.AIR"]];
    sIdm1["02"] = [icn["AIR.MISSILE.M1.SURFACE"]];
    sIdm1["03"] = [icn["AIR.MISSILE.M1.SUBSURFACE"]];
    sIdm1["04"] = [icn["AIR.MISSILE.M1.SPACE"]];
    sIdm1["05"] = [icn["AIR.MISSILE.M1.ANTI-BALLISTIC"]];
    sIdm1["06"] = [icn["AIR.MISSILE.M1.BALLISTIC"]];
    sIdm1["07"] = [icn["AIR.MISSILE.M1.CRUISE"]];
    sIdm1["08"] = [icn["AIR.MISSILE.M1.INTERCEPTOR"]];

    sIdm2["01"] = [icn["AIR.MISSILE.M2.AIR"]];
    sIdm2["02"] = [icn["AIR.MISSILE.M2.SURFACE"]];
    sIdm2["03"] = [icn["AIR.MISSILE.M2.SUBSURFACE"]];
    sIdm2["04"] = [icn["AIR.MISSILE.M2.SPACE"]];
    sIdm2["05"] = [icn["AIR.MISSILE.M2.LAUNCHED"]];
    sIdm2["06"] = [icn["AIR.MISSILE.M2.MISSILE"]];
    sIdm2["07"] = [icn["AIR.MISSILE.M2.PATRIOT"]];
    sIdm2["08"] = [icn["AIR.MISSILE.M2.STANDARD MISSILE - 2 (SM-2)"]];
    sIdm2["09"] = [icn["AIR.MISSILE.M2.STANDARD MISSILE - 6 (SM-6)"]];
    sIdm2["10"] = [icn["AIR.MISSILE.M2.EVOLVED SEA SPARROW MISSILE (ESSM)"]];
    sIdm2["11"] = [icn["AIR.MISSILE.M2.ROLLING AIRFRAME MISSILE (RAM)"]];
    sIdm2["12"] = [icn["AIR.MISSILE.M2.SHORT RANGE"]];
    sIdm2["13"] = [icn["AIR.MISSILE.M2.MEDIUM RANGE"]];
    sIdm2["14"] = [icn["AIR.MISSILE.M2.INTERMEDIATE RANGE"]];
    sIdm2["15"] = [icn["AIR.MISSILE.M2.LONG RANGE"]];
    sIdm2["16"] = [icn["SPACE.MISSILE.M2.SPACE"]];
  }
};

//var ms = require("../ms.js");

var iconsSpace$2 = function space(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Space
  if (symbolSet == "05") {
    sId["110000"] = [icn["SP.I.MILITARY"]];
    sId["110100"] = [icn["SP.I.SPACE VEHICLE"]];
    sId["110200"] = [icn["SP.I.RE-ENTRY VEHICLE"]];
    sId["110300"] = [icn["SPACE.PLANET LANDER"]];
    sId["110400"] = [icn["SP.I.ORBITER SHUTTLE"]];
    sId["110500"] = [icn["SP.I.CAPSULE"]];
    sId["110600"] = [icn["SP.I.SATELLITE, GENERAL"]];
    sId["110700"] = [icn["SP.I.SATELLITE"]];
    sId["110800"] = [icn["SP.I.ANTISATELLITE WEAPON"]];
    sId["110900"] = [icn["SP.I.ASTRONOMICAL SATELLITE"]];
    sId["111000"] = [icn["SP.I.BIOSATELLITE"]];
    sId["111100"] = [icn["SP.I.COMMUNICATIONS SATELLITE"]];
    sId["111200"] = [icn["SP.I.EARTH OBSERVATION SATELLITE"]];
    sId["111300"] = [icn["SP.I.MINIATURIZED SATELLITE"]];
    sId["111400"] = [icn["SP.I.NAVIGATIONAL SATELLITE"]];
    sId["111500"] = [icn["SP.I.RECONNAISSANCE SATELLITE"]];
    sId["111600"] = [icn["SP.I.SPACE STATION"]];
    sId["111700"] = [icn["SP.I.TETHERED SATELLITE"]];
    sId["111800"] = [icn["SP.I.WEATHER SATELLITE"]];
    sId["111900"] = [icn["SP.I.SPACE LAUNCH VEHICLE"]];

    sId["120000"] = [icn["AR.I.CIVILIAN"]];
    sId["120100"] = [icn["SP.I.CIVILIAN ORBITER SHUTTLE"]];
    sId["120200"] = [icn["SP.I.CIVILIAN CAPSULE"]];
    sId["120300"] = [icn["SP.I.CIVILIAN SATELLITE"]];
    sId["120400"] = [icn["SP.I.CIVILIAN ASTRONOMICAL SATELLITE"]];
    sId["120500"] = [icn["SP.I.CIVILIAN BIOSATELLITE"]];
    sId["120600"] = [icn["SP.I.CIVILIAN COMMUNICATIONS SATELLITE"]];
    sId["120700"] = [icn["SP.I.CIVILIAN EARTH OBSERVATION SATELLITE"]];
    sId["120800"] = [icn["SP.I.CIVILIAN MINIATURIZED SATELLITE"]];
    sId["120900"] = [icn["SP.I.CIVILIAN NAVIGATIONAL SATELLITE"]];
    sId["121000"] = [icn["SP.I.CIVILIAN SPACE STATION"]];
    sId["121100"] = [icn["SP.I.CIVILIAN TETHERED SATELLITE"]];
    sId["121200"] = [icn["SP.I.CIVILIAN WEATHER SATELLITE"]];
    sId["130000"] = [icn["SP.I.MANUAL TRACK"]];

    sIdm1["01"] = [icn["SP.M1.LOW EARTH ORBIT (LEO)"]];
    sIdm1["02"] = [icn["SP.M1.MEDIUM EARTH ORBIT (MEO)"]];
    sIdm1["03"] = [icn["SP.M1.HIGH EARTH ORBIT (HEO)"]];
    sIdm1["04"] = [icn["SP.M1.GEOSYNCHRONOUS ORBIT (GSO)"]];
    sIdm1["05"] = [icn["SP.M1.GEOSTATIONARY ORBIT (GO)"]];
    sIdm1["06"] = [icn["SP.M1.MOLNIYA ORBIT (MO)"]];

    sIdm2["01"] = [icn["SP.M2.OPTICAL"]];
    sIdm2["02"] = [icn["SP.M2.INFRARED"]];
    sIdm2["03"] = [icn["SP.M2.RADAR"]];
    sIdm2["04"] = [icn["SP.M2.SIGNALS INTELLIGENCE (SIGINT)"]];
  }
};

//var ms = require("../ms.js");

var iconsSpacemissile = function spacemissile(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Space Missile
  if (symbolSet == "06") {
    sId["110000"] = [icn["AIR.MISSILE.ICON"]];

    sIdm1["01"] = [icn["SPACE.MISSILE.M1.BALLISTIC"]];
    sIdm1["02"] = [icn["SPACE.MISSILE.M1.SPACE"]];
    sIdm1["03"] = [icn["SPACE.MISSILE.M1.INTERCEPTOR"]];

    sIdm2["01"] = [icn["SPACE.MISSILE.M2.SHORT RANGE"]];
    sIdm2["02"] = [icn["SPACE.MISSILE.M2.MEDIUM RANGE"]];
    sIdm2["03"] = [icn["SPACE.MISSILE.M2.INTERMEDIATE RANGE"]];
    sIdm2["04"] = [icn["SPACE.MISSILE.M2.LONG RANGE"]];
    sIdm2["05"] = [icn["SPACE.MISSILE.M2.INTERCONTINENTAL"]];
    sIdm2["06"] = [icn["SPACE.MISSILE.M2.ARROW"]];
    sIdm2["07"] = [icn["SPACE.MISSILE.M2.GROUND-BASED INTERCEPTOR (GBI)"]];
    sIdm2["08"] = [icn["SPACE.MISSILE.M2.PATRIOT"]];
    sIdm2["09"] = [
      icn["SPACE.MISSILE.M2.STANDARD MISSILE - TERMINAL PHASE (SM-T)"]
    ];
    sIdm2["10"] = [icn["SPACE.MISSILE.M2.STANDARD MISSILE - 3 (SM-3)"]];
    sIdm2["11"] = [
      icn["SPACE.MISSILE.M2.TERMINAL HIGH-ALTITUDE AREA DEFENSE (THAAD)"]
    ];
    sIdm2["12"] = [icn["SPACE.MISSILE.M2.SPACE"]];
  }
};

var iconsLandunit = function landunit(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Land Unit
  if (symbolSet == "10") {
    sId["110000"] = [icn["GR.IC.COMMAND AND CONTROL"]];
    sId["110100"] = [icn["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]];
    sId["110200"] = [icn["GR.IC.CIVIL AFFAIRS"]];
    sId["110300"] = [icn["GR.IC.CIVIL-MILITARY-COOPERATION"]];
    sId["110400"] = [icn["GR.IC.INFORMATION OPERATIONS"]];
    sId["110500"] = [icn["GR.IC.LIAISON"]];
    sId["110600"] = [
      icn["GR.IC.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)"]
    ];
    sId["110601"] = [
      icn["GR.IC.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)"],
      icn["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]
    ];
    sId["110700"] = [icn["GR.IC.RADIO"]];
    sId["110800"] = [icn["GR.IC.RADIO RELAY"]];
    sId["110900"] = [icn["GR.IC.RADIO TELETYPE CENTRE"]];
    sId["111000"] = [icn["GR.IC.FF.SIGNAL"]];
    sId["111001"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.RADIO"]];
    sId["111002"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.RADIO RELAY"]];
    sId["111003"] = [
      icn["GR.IC.FF.SIGNAL"],
      icn["GR.IC.RADIO TELETYPE CENTRE"]
    ];
    sId["111004"] = [icn["GR.IC.FF.SIGNAL"], icn["SP.I.FF.SATELLITE"]];
    sId["111005"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.VIDEO IMAGERY"]];
    //sId['111095'] = [icn['GR.IC.FF.SIGNAL'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    //sId['111097'] = [icn['GR.IC.FF.SIGNAL'],icn['GR.IC.FF.CORPS SUPPORT']];
    //sId['111098'] = [icn['GR.IC.FF.SIGNAL'],icn['GR.IC.FF.THEATRE SUPPORT']];
    sId["111100"] = [icn["SP.I.FF.SATELLITE"]];
    sId["111200"] = [icn["GR.IC.VIDEO IMAGERY"]];
    sId["120100"] = [icn["GR.IC.FF.AIR ASSAULT WITH ORGANIC LIFT"]];
    sId["120200"] = [icn["GR.IC.AIR TRAFFIC SERVICES"]];
    sId["120300"] = [icn["GR.IC.FF.AMPHIBIOUS"]];
    sId["120400"] = [icn["GR.IC.FF.ANTITANK/ANTIARMOUR"]];
    sId["120401"] = [icn["GR.IC.FF.ANTITANK/ANTIARMOUR"], icn["GR.IC.ARMOUR"]];
    sId["120402"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.IC.FF.MOTORIZED"]
    ];
    sId["120500"] = [icn["GR.IC.ARMOUR"]];
    sId["120501"] = [icn["GR.IC.ARMOUR"], icn["GR.IC.FF.RECONNAISSANCE"]];
    sId["120502"] = [icn["GR.IC.ARMOUR"], icn["GR.IC.FF.AMPHIBIOUS"]];
    //sId['120595'] = [icn['GR.IC.ARMOUR'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];;
    sId["120600"] = [icn["GR.IC.AVIATION ROTARY WING"]];
    sId["120601"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.IC.FF.RECONNAISSANCE"]
    ];
    //sId['120695'] = [icn['GR.IC.AVIATION ROTARY WING'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    //sId['120697'] = [icn['GR.IC.AVIATION ROTARY WING'],icn['GR.IC.FF.CORPS SUPPORT']];
    //sId['120698'] = [icn['GR.IC.AVIATION ROTARY WING'],icn['GR.IC.FF.THEATRE SUPPORT']];
    sId["120700"] = [icn["GR.IC.AVIATION COMPOSITE"]];
    //sId['120795'] = [icn['GR.IC.AVIATION COMPOSITE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["120800"] = [icn["GR.IC.AVIATION FIXED WING"]];
    sId["120801"] = [
      icn["GR.IC.AVIATION FIXED WING"],
      icn["GR.IC.FF.RECONNAISSANCE"]
    ];
    //sId['120895'] = [icn['GR.IC.AVIATION FIXED WING'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["120900"] = [icn["GR.IC.COMBAT"]];
    sId["121000"] = [icn["GR.IC.COMBINED ARMS"]];
    //sId['121095'] = [icn['GR.IC.COMBINED ARMS'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["121100"] = [icn["GR.IC.FF.INFANTRY"]];
    sId["121101"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.FF.AMPHIBIOUS"]];
    sId["121102"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.ARMOUR"]];
    sId["121103"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.FF.MAIN GUN SYSTEM"]];
    sId["121104"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.FF.MOTORIZED"]];
    sId["121105"] = [
      icn["GR.IC.FF.INFANTRY"],
      icn["GR.IC.ARMOUR"],
      icn["GR.IC.FF.MAIN GUN SYSTEM"]
    ];
    //sId['121195'] = [icn['GR.IC.FF.INFANTRY'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["121200"] = [icn["GR.IC.OBSERVER/OBSERVATION"]];
    sId["121300"] = [icn["GR.IC.FF.RECONNAISSANCE"]];
    sId["121301"] = [icn["GR.IC.FF.RECONNAISSANCE"], icn["GR.IC.SURVEILLANCE"]];
    sId["121302"] = [
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.FF.AMPHIBIOUS"]
    ];
    sId["121303"] = [icn["GR.IC.FF.RECONNAISSANCE"], icn["GR.IC.FF.MOTORIZED"]];
    //sId['121395'] = [icn['GR.IC.FF.RECONNAISSANCE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["121400"] = [icn["GR.IC.SEA-AIR-LAND"]];
    sId["121500"] = [icn["GR.IC.SNIPER"]];
    sId["121600"] = [icn["GR.IC.SURVEILLANCE"]];
    sId["121700"] = [icn["GR.IC.SPECIAL FORCES"]];
    //sId['121795'] = [icn['GR.IC.SPECIAL FORCES'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["121800"] = [icn["GR.IC.SPECIAL OPERATIONS FORCES"]];
    sId["121801"] = [icn["GR.IC.FIXED WING MISO"]];
    sId["121802"] = [
      icn["GR.IC.SPECIAL OPERATIONS FORCES"],
      icn["GR.IC.FF.INFANTRY"]
    ];
    sId["121803"] = [
      icn["SE.IC.COMBATANT"],
      icn["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"]
    ]; //SPECIAL BOAT
    sId["121804"] = [
      icn["SU.IC.SUBMARINE NUCLEAR PROPULSION"],
      icn["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"]
    ]; //SPECIAL SSNR)
    sId["121805"] = [icn["SOF.IC.UNDERWATER DEMOLITION TEAM"]];
    sId["121900"] = [icn["GR.IC.UNMANNED SYSTEMS"]];
    sId["130100"] = [icn["GR.IC.FF.AIR DEFENCE"]];
    sId["130101"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.FF.MAIN GUN SYSTEM"]
    ];
    sId["130102"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE MISSILE"]
    ];
    //sId['130195'] = [icn['GR.IC.FF.AIR DEFENCE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["130200"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.NAVAL"]
    ];
    sId["130300"] = [icn["GR.IC.FIELD ARTILLERY"]];
    sId["130301"] = [
      ms_1._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
      icn["GR.IC.ARMOUR"]
    ]; //ARTILLERY SELF-PROPELLED
    sId["130302"] = [
      ms_1._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
      icn["GR.IC.ARMOUR"],
      icn["GR.IC.FF.RECONNAISSANCE"]
    ]; //ARTILLERY TARGET ACQUISITION
    //sId['130395'] = [icn['GR.IC.FIELD ARTILLERY'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["130400"] = [icn["GR.IC.FIELD ARTILLERY OBSERVER"]];
    sId["130500"] = [icn["GR.IC.JOINT FIRE SUPPORT"]];
    sId["130600"] = [icn["GR.IC.METEOROLOGICAL"]];
    sId["130700"] = [icn["GR.IC.MISSILE"]];
    sId["130800"] = [icn["GR.IC.MORTAR"]];
    sId["130801"] = [icn["GR.IC.MORTAR"], icn["GR.M2.TRACKED"]];
    sId["130802"] = [icn["GR.IC.MORTAR"], icn["GR.M2.TRUCK"]];
    sId["130803"] = [icn["GR.IC.MORTAR"], icn["GR.M2.TOWED"]];
    sId["130900"] = [icn["GR.IC.SURVEY"]];
    sId["140100"] = [icn["GR.IC.CBRN"]];
    sId["140101"] = [icn["GR.IC.CBRN"], icn["GR.IC.ARMOUR"]];
    sId["140102"] = [icn["GR.IC.CBRN"], icn["GR.IC.FF.MOTORIZED"]];
    sId["140103"] = [icn["GR.IC.CBRN"], icn["GR.IC.FF.RECONNAISSANCE"]];
    sId["140104"] = [
      icn["GR.IC.CBRN"],
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.ARMOUR"]
    ];
    sId["140105"] = [
      icn["GR.IC.CBRN"],
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.FF.MOTORIZED"]
    ];
    //sId['140195'] = [icn['GR.IC.CBRN'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["140200"] = [icn["GR.IC.COMBAT SUPPORT (MANOEUVRE ENHANCEMENT)"]];
    //sId['140295'] = [icn['GR.IC.COMBAT SUPPORT (MANOEUVRE ENHANCEMENT)'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["140300"] = [icn["GR.IC.CRIMINAL INVESTIGATION DIVISION"]];
    sId["140400"] = [icn["SU.IC.DIVER, CIVILIAN"]];
    sId["140500"] = [icn["GR.IC.DOG"]];
    sId["140600"] = [icn["GR.IC.DRILLING"]];
    sId["140700"] = [icn["GR.IC.ENGINEER"]];
    sId["140701"] = [
      ms_1._scale(0.7, icn["GR.IC.ENGINEER"]),
      icn["GR.IC.ARMOUR"]
    ];
    sId["140702"] = [icn["GR.IC.ENGINEER"], icn["GR.IC.FF.MOTORIZED"]];
    sId["140703"] = [icn["GR.IC.ENGINEER"], icn["GR.IC.FF.RECONNAISSANCE"]];
    //sId['140795'] = [icn['GR.IC.ENGINEER'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["140800"] = [icn["GR.IC.EXPLOSIVE ORDNANCE DISPOSAL"]];
    sId["140900"] = [icn["GR.IC.FIELD CAMP CONSTRUCTION"]];
    sId["141000"] = [icn["GR.IC.FIRE PROTECTION"]];
    sId["141100"] = [icn["GR.IC.GEOSPATIAL SUPPORT"]];
    sId["141200"] = [icn["GR.IC.MILITARY POLICE"]];
    //sId['141295'] = [icn['GR.IC.MILITARY POLICE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["141300"] = [icn["GR.IC.MINE"]];
    sId["141400"] = [icn["GR.IC.MINE CLEARING"]];
    sId["141500"] = [icn["GR.IC.MINE LAUNCHING"]];
    sId["141600"] = [icn["GR.IC.MINE LAYING"]];
    sId["141700"] = [icn["GR.IC.SECURITY"]];
    sId["141701"] = [icn["GR.IC.SECURITY"], icn["GR.IC.ARMOUR"]];
    sId["141702"] = [icn["GR.IC.SECURITY"], icn["GR.IC.FF.MOTORIZED"]];
    sId["141800"] = [icn["AR.I.SEARCH AND RESCUE"]];
    sId["141900"] = [icn["GR.IC.SECURITY POLICE (AIR)"]];
    sId["142000"] = [icn["GR.IC.SHORE PATROL"]];
    sId["142100"] = [icn["GR.IC.TOPOGRAPHIC"]];
    sId["150100"] = [icn["GR.IC.FF.ANALYSIS"]];
    sId["150200"] = [icn["GR.IC.COUNTER-INTELLIGENCE"]];
    sId["150300"] = [icn["GR.IC.FF.DIRECTION FINDING"]];
    sId["150400"] = [icn["GR.IC.ELECTRONIC RANGING"]];
    sId["150500"] = [icn["GR.IC.ELECTRONIC WARFARE"]];
    sId["150501"] = [icn["GR.IC.ELECTRONIC WARFARE"], icn["GR.IC.FF.ANALYSIS"]];
    sId["150502"] = [
      icn["GR.IC.ELECTRONIC WARFARE"],
      icn["GR.IC.FF.DIRECTION FINDING"]
    ];
    sId["150503"] = [
      icn["GR.IC.ELECTRONIC WARFARE"],
      icn["GR.IC.FF.INTERCEPT"]
    ];
    sId["150504"] = [icn["GR.IC.ELECTRONIC WARFARE"], icn["GR.IC.FF.JAMMING"]];
    sId["150505"] = [icn["GR.IC.ELECTRONIC WARFARE"], icn["GR.IC.FF.SEARCH"]];
    sId["150600"] = [icn["GR.IC.FF.INTERCEPT"]];
    sId["150700"] = [icn["GR.IC.INTERROGATION"]];
    sId["150800"] = [icn["GR.IC.FF.JAMMING"]];
    sId["150900"] = [icn["GR.IC.JOINT INTELLIGENCE CENTRE"]];
    sId["151000"] = [icn["GR.IC.MILITARY INTELLIGENCE"]];
    //sId['151095'] = [icn['GR.IC.MILITARY INTELLIGENCE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["151100"] = [icn["GR.IC.FF.SEARCH"]];
    sId["151200"] = [icn["GR.IC.SENSOR"]];
    sId["160000"] = [icn["GR.IC.SUSTAINMENT"]];
    //sId['160095'] = [icn['GR.IC.SUSTAINMENT'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    //sId['160097'] = [icn['GR.IC.SUSTAINMENT'],icn['GR.IC.FF.CORPS SUPPORT']];
    //sId['160098'] = [icn['GR.IC.SUSTAINMENT'],icn['GR.IC.FF.THEATRE SUPPORT']];
    sId["160100"] = [icn["GR.IC.ADMINISTRATIVE"]];
    //sId['160197'] = [icn['GR.IC.ADMINISTRATIVE'],icn['GR.IC.FF.CORPS SUPPORT']];
    //sId['160198'] = [icn['GR.IC.ADMINISTRATIVE'],icn['GR.IC.FF.THEATRE SUPPORT']];
    sId["160200"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS ALL"]];
    sId["160300"] = [
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.IC.AIRPORT OF DEBARKATION"]
    ];
    sId["160400"] = [icn["GR.IC.AMMUNITION"]];
    sId["160500"] = [icn["GR.IC.BAND"]];
    sId["160600"] = [icn["GR.IC.COMBAT SERVICE SUPPORT"]];
    sId["160700"] = [icn["GR.IC.FINANCE"]];
    //sId['160797'] = [icn['GR.IC.FINANCE'],icn['GR.IC.FF.CORPS SUPPORT']];
    //sId['160798'] = [icn['GR.IC.FINANCE'],icn['GR.IC.FF.THEATRE SUPPORT']];
    sId["160800"] = [icn["GR.IC.JUDGE ADVOCATE GENERAL"]];
    sId["160900"] = [icn["GR.IC.LABOUR"]];
    sId["161000"] = [icn["GR.IC.LAUNDRY/BATH"]];
    sId["161100"] = [icn["GR.IC.MAINTENANCE"]];
    //sId['161195'] = [icn['GR.IC.MAINTENANCE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    //sId['161197'] = [icn['GR.IC.MAINTENANCE'],icn['GR.IC.FF.CORPS SUPPORT']];
    //sId['161198'] = [icn['GR.IC.MAINTENANCE'],icn['GR.IC.FF.THEATRE SUPPORT']];
    sId["161200"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.MATERIEL"]];
    sId["161300"] = [icn["GR.IC.FF.MEDICAL"]];
    //sId['161395'] = [icn['GR.IC.FF.MEDICAL'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    //sId['161397'] = [icn['GR.IC.FF.MEDICAL'],icn['GR.IC.FF.MEDICAL CORPS']
    //sId['161398'] = [icn['GR.IC.FF.MEDICAL'],icn['GR.IC.FF.MEDICAL THEATER']
    sId["161400"] = [icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]];
    sId["161500"] = [icn["GR.IC.MORALE, WELFARE, AND RECREATION"]];
    sId["161600"] = [icn["GR.IC.MORTUARY AFFAIRS"]];
    sId["161700"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS MULTIPLE"]];
    sId["161800"] = [
      icn["GR.IC.FF.SUPPLY"],
      icn["GR.IC.FF.NATO SUPPLY CLASS I"]
    ];
    sId["161900"] = [
      icn["GR.IC.FF.SUPPLY"],
      icn["GR.IC.FF.NATO SUPPLY CLASS II"]
    ];
    sId["162000"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS III"]];
    sId["162100"] = [
      icn["GR.IC.FF.SUPPLY"],
      icn["GR.IC.FF.NATO SUPPLY CLASS IV"]
    ];
    sId["162200"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS V"]];
    sId["162300"] = [icn["GR.IC.ORDNANCE"]];
    //sId['162395'] = [icn['GR.IC.ORDNANCE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    //sId['162397'] = [icn['GR.IC.ORDNANCE'],icn['GR.IC.FF.CORPS SUPPORT']];
    //sId['162398'] = [icn['GR.IC.ORDNANCE'],icn['GR.IC.FF.THEATRE SUPPORT']];
    sId["162400"] = [icn["GR.IC.PERSONNEL SERVICES"]];
    //sId['162495'] = [icn['GR.IC.PERSONNEL SERVICES'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    sId["162500"] = [icn["GR.IC.PETROLEUM OIL LUBRICANTS"]];
    sId["162600"] = [icn["GR.IC.PIPELINE"]];
    sId["162700"] = [icn["GR.IC.POSTAL"]];
    sId["162800"] = [icn["GR.IC.PUBLIC AFFAIRS"]];
    sId["162900"] = [icn["GR.IC.QUARTERMASTER"]];
    //sId['162995'] = [icn['GR.IC.QUARTERMASTER'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    //sId['162997'] = [icn['GR.IC.QUARTERMASTER'],icn['GR.IC.FF.CORPS SUPPORT']];
    //sId['162998'] = [icn['GR.IC.QUARTERMASTER'],icn['GR.IC.FF.THEATRE SUPPORT']];
    sId["163000"] = [icn["GR.IC.RAILHEAD"]];
    sId["163100"] = [icn["GR.IC.RELIGIOUS SUPPORT"]];
    sId["163200"] = [icn["GR.IC.REPLACEMENT HOLDING UNIT"]];
    sId["163300"] = [icn["GR.IC.SEAPORT OF DEBARKATION"]];
    sId["163400"] = [icn["GR.IC.FF.SUPPLY"]];
    sId["163500"] = [icn["GR.IC.JOINT INFORMATION BUREAU"]];
    //sId['163597'] = [icn['GR.IC.JOINT INFORMATION BUREAU'],icn['GR.IC.FF.CORPS SUPPORT']];
    //sId['163598'] = [icn['GR.IC.JOINT INFORMATION BUREAU'],icn['GR.IC.FF.THEATRE SUPPORT']];
    sId["163600"] = [icn["GR.IC.TRANSPORTATION"]];
    //sId['163695'] = [icn['GR.IC.TRANSPORTATION'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
    //sId['163697'] = [icn['GR.IC.TRANSPORTATION'],icn['GR.IC.FF.CORPS SUPPORT']];
    //sId['163698'] = [icn['GR.IC.TRANSPORTATION'],icn['GR.IC.FF.THEATRE SUPPORT']];
    sId["163700"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS I"]];
    sId["163800"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS II"]];
    sId["163900"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS III"]];
    sId["164000"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS IV"]];
    sId["164100"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS V"]];
    sId["164200"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VI"]];
    sId["164300"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VII"]];
    sId["164400"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VIII"]];
    sId["164500"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS IX"]];
    sId["164600"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS X"]];
    sId["164700"] = [icn["GR.IC.WATER"]];
    sId["164800"] = [icn["GR.IC.WATER PURIFICATION"]];
    sId["164900"] = [icn["GR.IC.PUBLIC AFFAIRS BROADCAST"]];
    sId["170100"] = [icn["GR.IC.NAVAL"]];
    sId["180100"] = [
      icn["GR.IC.ALLIED COMMAND EUROPE RAPID REACTION CORPS (ARRC)"]
    ];
    sId["180200"] = [icn["GR.IC.ALLIED COMMAND OPERATIONS"]];
    sId["180300"] = [
      icn["GR.IC.INTERNATIONAL SECURITY ASSISTANCE FORCE (ISAF)"]
    ];
    sId["180400"] = [icn["GR.IC.MULTINATIONAL (MN)"]];
    sId["190000"] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
    sId["200000"] = [icn["GR.IC.FF.LAW ENFORCEMENT"]];
    sId["200100"] = [
      icn[
        "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
      ]
    ];
    sId["200200"] = [icn["GR.IC.FF.BORDER PATROL"]];
    sId["200300"] = [icn["GR.IC.FF.CUSTOMS SERVICE"]];
    sId["200400"] = [icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]];
    sId["200500"] = [icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]];
    sId["200600"] = [icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]];
    sId["200700"] = [icn["GR.IC.LAW ENFORCEMENT"]];
    sId["200800"] = [icn["GR.IC.FF.PRISON"]];
    sId["200900"] = [icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]];
    sId["201000"] = [icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]];
    sId["201100"] = [icn["SE.IC.LAW ENFORCEMENT VESSEL"]];
    sId["201200"] = [icn["GR.IC.FF.US MARSHALS SERVICE"]];
    sId["201300"] = [icn["ST.IC.INTERNAL SECURITY FORCE"]];

    sIdm1["01"] = [icn["GR.M1.AIRMOBILE/AIR ASSAULT"]];
    sIdm1["02"] = [icn["GR.M1.AREA"]];
    sIdm1["03"] = [icn["GR.M1.ATTACK"]];
    sIdm1["04"] = [icn["GR.M1.BIOLOGICAL"]];
    sIdm1["05"] = [icn["GR.M1.BORDER"]];
    sIdm1["06"] = [icn["GR.M1.BRIDGING"]];
    sIdm1["07"] = [icn["GR.M1.CHEMICAL"]];
    sIdm1["08"] = [icn["GR.M1.CLOSE PROTECTION"]];
    sIdm1["09"] = [icn["GR.M1.COMBAT"]];
    sIdm1["10"] = [icn["GR.M1.COMMAND AND CONTROL"]];
    sIdm1["11"] = [icn["GR.M1.COMMUNICATIONS CONTINGENCY PACKAGE"]];
    sIdm1["12"] = [icn["GR.M1.CONSTRUCTION"]];
    sIdm1["13"] = [icn["GR.M1.CROSS CULTURAL COMMUNICATION"]];
    sIdm1["14"] = [icn["GR.M1.CROWD AND RIOT CONTROL"]];
    sIdm1["15"] = [icn["GR.M1.DECONTAMINATION"]];
    sIdm1["16"] = [icn["GR.M1.DETENTION"]];
    sIdm1["17"] = [icn["GR.M1.DIRECT COMMUNICATIONS"]];
    sIdm1["18"] = [icn["GR.M1.DIVING"]];
    sIdm1["19"] = [icn["GR.M1.DIVISION"]];
    sIdm1["20"] = [icn["GR.M1.DOG"]];
    sIdm1["21"] = [icn["GR.M1.DRILLING"]];
    sIdm1["22"] = [icn["GR.M1.ELECTRO-OPTICAL"]];
    sIdm1["23"] = [icn["GR.M1.ENHANCED"]];
    sIdm1["24"] = [icn["GR.M1.EXPLOSIVE ORDNANCE DISPOSAL"]];
    sIdm1["25"] = [icn["GR.M1.FIRE DIRECTION CENTRE"]];
    sIdm1["26"] = [icn["GR.M1.FORCE"]];
    sIdm1["27"] = [icn["GR.M1.FORWARD"]];
    sIdm1["28"] = [icn["GR.M1.GROUND STATION MODULE"]];
    sIdm1["29"] = [icn["GR.M1.LANDING SUPPORT"]];
    sIdm1["30"] = [icn["GR.M1.LARGE EXTENSION NODE"]];
    sIdm1["31"] = [icn["GR.M1.MAINTENANCE"]];
    sIdm1["32"] = [icn["GR.M1.METEOROLOGICAL"]];
    sIdm1["33"] = [icn["GR.M1.MINE COUNTERMEASURE"]];
    sIdm1["34"] = [icn["GR.M1.MISSILE"]];
    sIdm1["35"] = [icn["GR.M1.(MOBILE) ADVISOR AND SUPPORT"]];
    sIdm1["36"] = [icn["GR.M1.MOBILE SUBSCRIBER EQUIPMENT"]];
    sIdm1["37"] = [icn["GR.M1.MOBILITY SUPPORT"]];
    sIdm1["38"] = [icn["GR.M1.MOVEMENT CONTROL CENTRE"]];
    sIdm1["39"] = [icn["GR.M1.MULTINATIONAL"]];
    sIdm1["40"] = [icn["GR.M1.MULTINATIONAL SPECIALIZED UNIT"]];
    sIdm1["41"] = [icn["GR.M1.MULTIPLE ROCKET LAUNCHER"]];
    sIdm1["42"] = [icn["GR.M1.NATO MEDICAL ROLE 1"]];
    sIdm1["43"] = [icn["GR.M1.NATO MEDICAL ROLE 2"]];
    sIdm1["44"] = [icn["GR.M1.NATO MEDICAL ROLE 3"]];
    sIdm1["45"] = [icn["GR.M1.NATO MEDICAL ROLE 4"]];
    sIdm1["46"] = [icn["GR.M1.NAVAL"]];
    sIdm1["47"] = [icn["GR.M1.NODE CENTRE"]];
    sIdm1["48"] = [icn["GR.M1.NUCLEAR"]];
    sIdm1["49"] = [icn["GR.M1.OPERATIONS"]];
    sIdm1["50"] = [icn["GR.M1.RADAR"]];
    sIdm1["51"] = [
      icn["GR.M1.RADIO FREQUENCY IDENTIFICATION (RFID) INTERROGATOR/ SENSOR"]
    ];
    sIdm1["52"] = [icn["GR.M1.RADIOLOGICAL"]];
    sIdm1["53"] = [icn["GR.M1.SEARCH AND RESCUE"]];
    sIdm1["54"] = [icn["GR.M1.SECURITY"]];
    sIdm1["55"] = [icn["GR.M1.SENSOR"]];
    sIdm1["56"] = [icn["GR.M1.SENSOR CONTROL MODULE"]];
    sIdm1["57"] = [icn["GR.M1.SIGNALS INTELLIGENCE"]];
    sIdm1["58"] = [icn["GR.M1.SINGLE SHELTER SWITCH"]];
    sIdm1["59"] = [icn["GR.M1.SINGLE ROCKET LAUNCHER"]];
    sIdm1["60"] = [icn["GR.M1.SMOKE"]];
    sIdm1["61"] = [icn["GR.M1.SNIPER"]];
    sIdm1["62"] = [icn["GR.M1.SOUND RANGING"]];
    sIdm1["63"] = [icn["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"]];
    sIdm1["64"] = [icn["GR.M1.SPECIAL WEAPONS AND TACTICS"]];
    sIdm1["65"] = [icn["GR.M1.SURVEY"]];
    sIdm1["66"] = [icn["GR.M1.TACTICAL EXPLOITATION"]];
    sIdm1["67"] = [icn["GR.M1.TARGET ACQUISITION"]];
    sIdm1["68"] = [icn["GR.M1.TOPOGRAPHIC"]];
    sIdm1["69"] = [icn["GR.M1.UTILITY"]];
    sIdm1["70"] = [icn["GR.M1.VIDEO IMAGERY"]];
    sIdm1["71"] = [icn["GR.M1.ACCIDENT"]];
    sIdm1["72"] = [icn["GR.M1.OTHER"]];
    sIdm1["73"] = [icn["GR.M1.CIVILIAN"]];
    sIdm1["74"] = [icn["GR.M1.ANTISUBMARINE WARFARE"]];
    sIdm1["75"] = [icn["GR.M1.MEDEVAC"]];
    sIdm1["76"] = [icn["GR.M1.RANGER"]];
    sIdm1["77"] = [icn["GR.M1.SUPPORT"]];
    sIdm1["78"] = [icn["GR.M1.AVIATION"]];

    sIdm2["01"] = [icn["GR.M2.AIRBORNE"]];
    sIdm2["02"] = [icn["GR.M2.ARCTIC"]];
    sIdm2["03"] = [icn["GR.M2.BATTLE DAMAGE REPAIR"]];
    sIdm2["04"] = [icn["GR.M2.BICYCLE EQUIPPED"]];
    sIdm2["05"] = [icn["GR.M2.CASUALTY STAGING"]];
    sIdm2["06"] = [icn["GR.M2.CLEARING"]];
    sIdm2["07"] = [icn["GR.M2.CLOSE RANGE"]];
    sIdm2["08"] = [icn["GR.M2.CONTROL"]];
    sIdm2["09"] = [icn["GR.M2.DECONTAMINATION"]];
    sIdm2["10"] = [icn["GR.M2.DEMOLITION"]];
    sIdm2["11"] = [icn["GR.M2.DENTAL"]];
    sIdm2["12"] = [icn["GR.M2.DIGITAL"]];
    sIdm2["13"] = [icn["GR.M2.ENHANCED POSITION LOCATION REPORTING SYSTEM"]];
    sIdm2["14"] = [icn["GR.M2.EQUIPMENT"]];
    sIdm2["15"] = [icn["GR.M2.HEAVY"]];
    sIdm2["16"] = [icn["GR.M2.HIGH ALTITUDE"]];
    sIdm2["17"] = [icn["GR.M2.INTERMODAL"]];
    sIdm2["18"] = [icn["GR.M2.INTENSIVE CARE"]];
    sIdm2["19"] = [icn["GR.M2.LIGHT"]];
    sIdm2["20"] = [icn["GR.M2.LABORATORY"]];
    sIdm2["21"] = [icn["GR.M2.LAUNCHER"]];
    sIdm2["22"] = [icn["GR.M2.LONG RANGE"]];
    sIdm2["23"] = [icn["GR.M2.LOW ALTITUDE"]];
    sIdm2["24"] = [icn["GR.M2.MEDIUM"]];
    sIdm2["25"] = [icn["GR.M2.MEDIUM ALTITUDE"]];
    sIdm2["26"] = [icn["GR.M2.MEDIUM RANGE"]];
    sIdm2["27"] = [icn["GR.M2.MOUNTAIN"]];
    sIdm2["28"] = [icn["GR.M2.HIGH TO MEDIUM ALTITUDE"]];
    sIdm2["29"] = [icn["GR.M2.MULTI-CHANNEL"]];
    sIdm2["30"] = [icn["GR.M2.OPTICAL"]];
    sIdm2["31"] = [icn["GR.M2.PACK ANIMAL"]];
    sIdm2["32"] = [icn["GR.M2.PATIENT EVACUATION COORDINATION"]];
    sIdm2["33"] = [icn["GR.M2.PREVENTIVE MAINTENANCE"]];
    sIdm2["34"] = [icn["GR.M2.PSYCHOLOGICAL"]];
    sIdm2["35"] = [icn["GR.M2.RADIO RELAY LINE OF SIGHT"]];
    sIdm2["36"] = [icn["GR.M2.RAILROAD"]];
    sIdm2["37"] = [icn["GR.M2.RECOVERY (UNMANNED SYSTEMS)"]];
    sIdm2["38"] = [icn["GR.M2.RECOVERY (MAINTENANCE)"]];
    sIdm2["39"] = [icn["GR.M2.RESCUE COORDINATION CENTRE"]];
    sIdm2["40"] = [icn["GR.M2.RIVERINE"]];
    sIdm2["41"] = [icn["GR.M2.SINGLE CHANNEL"]];
    sIdm2["42"] = [icn["GR.M2.SKI"]];
    sIdm2["43"] = [icn["GR.M2.SHORT RANGE"]];
    sIdm2["44"] = [icn["GR.M2.STRATEGIC"]];
    sIdm2["45"] = [icn["GR.M2.SUPPORT"]];
    sIdm2["46"] = [icn["GR.M2.TACTICAL"]];
    sIdm2["47"] = [icn["GR.M2.TOWED"]];
    sIdm2["48"] = [icn["GR.M2.TROOP"]];
    sIdm2["49"] = [icn["GR.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING "]];
    sIdm2["50"] = [icn["GR.M2.VETERINARY"]];
    sIdm2["51"] = [icn["GR.M2.WHEELED"]];
    sIdm2["52"] = [icn["GR.M2.HIGH TO LOW ALTITUDE"]];
    sIdm2["53"] = [icn["GR.M2.MEDIUM TO LOW ALTITUDE"]];
    sIdm2["54"] = [icn["GR.M2.ATTACK"]];
    sIdm2["55"] = [icn["GR.M2.REFUEL"]];
    sIdm2["56"] = [icn["GR.M2.UTILITY"]];
    sIdm2["57"] = [icn["GR.M2.COMBAT SEARCH AND RESCUE"]];
  }
};

//var ms = require("../ms.js");

var iconsLandcivilian = function landcivilian(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Land civilian individuals/organization
  if (symbolSet == "11") {
    sId["110000"] = [icn["AR.I.CIVILIAN"]];
    sId["110100"] = [icn["GR.IC.ENVIRONMENTAL PROTECTION"]];
    sId["110200"] = [icn["GR.IC.GOVERNMENT ORGANIZATION"]];
    sId["110300"] = [icn["ST.IC.INDIVIDUAL"]];
    sId["110400"] = [icn["ST.IC.GROUP"]];
    sId["110500"] = [icn["ST.IC.KILLING VICTIM"]];
    sId["110600"] = [icn["ST.IC.KILLING VICTIMS"]];
    sId["110700"] = [
      icn["ST.IC.INDIVIDUAL"],
      icn["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]
    ]; //VICTIM OF AN ATTEMPTED CRIME
    sId["110800"] = [icn["ST.IC.SPY"]];
    sId["110900"] = [icn["ST.IC.COMPOSITE LOSS"]];
    sId["111000"] = [icn["GR.IC.EMERGENCY MEDICAL OPERATION"]];

    sIdm1["01"] = [icn["ST.M1.ASSASSINATION"]];
    sIdm1["02"] = [icn["ST.M1.EXECUTION (WRONGFUL KILLING)"]];
    sIdm1["03"] = [icn["ST.M1.MURDER"]];
    sIdm1["04"] = [icn["ST.M1.HIJACKING/HIJACKED"]];
    sIdm1["05"] = [icn["ST.M1.KIDNAPPING"]];
    sIdm1["06"] = [icn["ST.M1.PIRACY"]];
    sIdm1["07"] = [icn["ST.M1.RAPE"]];
    sIdm1["08"] = [icn["ST.M1.CIVILIAN"]];
    sIdm1["09"] = [icn["ST.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES"]];
    sIdm1["10"] = [icn["ST.M1.FOREIGN FIGHTERS"]];
    sIdm1["11"] = [icn["ST.M1.GANG"]];
    sIdm1["12"] = [icn["ST.M1.GOVERNMENT ORGANIZATION"]];
    sIdm1["13"] = [icn["ST.M1.LEADER"]];
    sIdm1["14"] = [icn["ST.M1.NONGOVERNMENTAL ORGANIZATION (NGO)"]];
    sIdm1["15"] = [icn["ST.M1.COERCED/IMPRESSED"]];
    sIdm1["16"] = [icn["ST.M1.WILLING RECRUIT"]];
    sIdm1["17"] = [icn["ST.M1.RELIGIOUS"]];
    sIdm1["18"] = [icn["ST.M1.TARGETED"]];
    sIdm1["19"] = [icn["ST.M1.TERRORIST"]];
    sIdm1["20"] = [icn["ST.M1.SPEAKER"]];
    sIdm1["21"] = [icn["ST.M1.ACCIDENT"]];
    sIdm1["22"] = [icn["ST.M1.COMBAT"]];
    sIdm1["23"] = [icn["ST.M1.OTHER"]];
    sIdm1["24"] = [icn["ST.M1.LOOT"]];

    sIdm2["01"] = [icn["ST.M2.LEADER OR LEADERSHIP"]];
  }
};

var iconsLandequipment = function landequipment(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Land Equipment
  if (symbolSet == "15") {
    sId["110000"] = [icn["GR.EQ.WEAPON"]];
    sId["110100"] = [icn["GR.EQ.RIFLE"]];
    sId["110101"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.SHORT RANGE"]];
    sId["110102"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.INTERMEDIATE RANGE"]];
    sId["110103"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.LONG RANGE"]];
    sId["110200"] = [icn["GR.EQ.MACHINE GUN"]];
    sId["110201"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.SHORT RANGE"]];
    sId["110202"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.INTERMEDIATE RANGE"]];
    sId["110203"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.LONG RANGE"]];
    sId["110300"] = [icn["GR.EQ.GRENADE LAUNCHER"]];
    sId["110301"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms_1._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
    ];
    sId["110302"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms_1._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
    ];
    sId["110303"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms_1._translate(0, 20, icn["GR.EQ.LONG RANGE"])
    ];
    sId["110400"] = [icn["GR.EQ.FLAME THROWER"]];
    sId["110500"] = [icn["GR.EQ.AIR DEFENCE GUN"]];
    sId["110501"] = [icn["GR.EQ.AIR DEFENCE GUN"], icn["GR.EQ.SHORT RANGE"]];
    sId["110502"] = [
      icn["GR.EQ.AIR DEFENCE GUN"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["110503"] = [icn["GR.EQ.AIR DEFENCE GUN"], icn["GR.EQ.LONG RANGE"]];
    sId["110600"] = [icn["GR.EQ.ANTITANK GUN"]];
    sId["110601"] = [icn["GR.EQ.ANTITANK GUN"], icn["GR.EQ.SHORT RANGE"]];
    sId["110602"] = [
      icn["GR.EQ.ANTITANK GUN"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["110603"] = [icn["GR.EQ.ANTITANK GUN"], icn["GR.EQ.LONG RANGE"]];
    sId["110700"] = [icn["GR.EQ.DIRECT FIRE GUN"]];
    sId["110701"] = [icn["GR.EQ.DIRECT FIRE GUN"], icn["GR.EQ.SHORT RANGE"]];
    sId["110702"] = [
      icn["GR.EQ.DIRECT FIRE GUN"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["110703"] = [icn["GR.EQ.DIRECT FIRE GUN"], icn["GR.EQ.LONG RANGE"]];
    sId["110800"] = [icn["GR.EQ.RECOILLESS GUN"]];
    sId["110801"] = [icn["GR.EQ.RECOILLESS GUN"], icn["GR.EQ.SHORT RANGE"]];
    sId["110802"] = [
      icn["GR.EQ.RECOILLESS GUN"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["110803"] = [icn["GR.EQ.RECOILLESS GUN"], icn["GR.EQ.LONG RANGE"]];
    sId["110900"] = [icn["GR.EQ.HOWITZER"]];
    sId["110901"] = [icn["GR.EQ.HOWITZER"], icn["GR.EQ.SHORT RANGE"]];
    sId["110902"] = [icn["GR.EQ.HOWITZER"], icn["GR.EQ.INTERMEDIATE RANGE"]];
    sId["110903"] = [icn["GR.EQ.HOWITZER"], icn["GR.EQ.LONG RANGE"]];
    sId["111000"] = [icn["GR.EQ.MISSILE LAUNCHER"]];
    sId["111001"] = [icn["GR.EQ.MISSILE LAUNCHER"], icn["GR.EQ.SHORT RANGE"]];
    sId["111002"] = [
      icn["GR.EQ.MISSILE LAUNCHER"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["111003"] = [icn["GR.EQ.MISSILE LAUNCHER"], icn["GR.EQ.LONG RANGE"]];
    sId["111100"] = [icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"]];
    sId["111101"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["111102"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.SHORT RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
    ];
    sId["111103"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.SHORT RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
    ];
    sId["111104"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["111105"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.INTERMEDIATE RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
    ];
    sId["111106"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.INTERMEDIATE RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
    ];
    sId["111107"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.LONG RANGE"]
    ];
    sId["111108"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.LONG RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
    ];
    sId["111109"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.LONG RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
    ];
    sId["111200"] = [icn["GR.EQ.ANTITANK MISSILE LAUNCHER"]];
    sId["111201"] = [
      icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["111202"] = [
      icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["111203"] = [
      icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
      icn["GR.EQ.LONG RANGE"]
    ];
    sId["111300"] = [icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"]];
    sId["111301"] = [
      icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["111302"] = [
      icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["111303"] = [
      icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
      icn["GR.EQ.LONG RANGE"]
    ];
    sId["111400"] = [icn["GR.EQ.MORTAR"]];
    sId["111401"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.SHORT RANGE"]];
    sId["111402"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.INTERMEDIATE RANGE"]];
    sId["111403"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.LONG RANGE"]];
    sId["111500"] = [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]];
    sId["111501"] = [
      icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["111502"] = [
      icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["111503"] = [
      icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
      icn["GR.EQ.LONG RANGE"]
    ];
    sId["111600"] = [icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"]];
    sId["111601"] = [
      icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
      ms_1._translate(0, 10, icn["GR.EQ.SHORT RANGE"])
    ];
    sId["111602"] = [
      icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
      ms_1._translate(0, 10, icn["GR.EQ.INTERMEDIATE RANGE"])
    ];
    sId["111603"] = [
      icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
      ms_1._translate(0, 10, icn["GR.EQ.LONG RANGE"])
    ];
    sId["111700"] = [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]];
    sId["111701"] = [
      icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["111702"] = [
      icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["111703"] = [
      icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
      icn["GR.EQ.LONG RANGE"]
    ];
    sId["111800"] = [icn["GR.EQ.NON-LETHAL WEAPON"]];
    sId["111900"] = [icn["GR.EQ.TASER"]];
    sId["112000"] = [icn["GR.EQ.WATER CANNON"]];
    sId["120000"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ]
    ];
    sId["120100"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.ARMOURED VEHICLE"]
    ];
    sId["120101"] = [icn["GR.EQ.ARMOURED FIGHTING VEHICLE"]];
    sId["120102"] = [
      icn["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"]
    ];
    sId["120103"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER COMBAT SERVICE SUPPORT VEHICLE"]
    ];
    sId["120104"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      icn["GR.EQ.MEDICAL EVACUATION"]
    ];
    sId["120105"] = [icn["GR.IC.ARMOUR"]];
    sId["120106"] = [icn["GR.IC.ARMOUR"], icn["GR.EQ.TANK RECOVERY VEHICLE"]];
    sId["120107"] = [icn["GR.IC.ARMOUR"], icn["GR.EQ.MEDICAL EVACUATION"]];
    sId["120108"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      icn["GR.EQ.TANK RECOVERY VEHICLE"]
    ];
    sId["120109"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      icn["GR.EQ.COMBAT SERVICE SUPPORT VEHICLE"]
    ];
    sId["120110"] = [
      icn["GR.EQ.ARMOURED FIGHTING VEHICLE"],
      icn["GR.EQ.CROSS-COUNTRY"]
    ];
    sId["120200"] = [icn["GR.EQ.TANK"]];
    sId["120201"] = [icn["GR.EQ.TANK"], icn["GR.EQ.LIGHT TANK"]];
    sId["120202"] = [icn["GR.EQ.TANK"], icn["GR.EQ.MEDIUM TANK"]];
    sId["120203"] = [icn["GR.EQ.TANK"], icn["GR.EQ.HEAVY TANK"]];
    sId["120300"] = [icn["GR.EQ.TANK"], icn["GR.EQ.TANK RECOVERY VEHICLE"]];
    sId["120301"] = [
      icn["GR.EQ.TANK"],
      icn["GR.EQ.LIGHT TANK"],
      icn["GR.EQ.TANK RECOVERY VEHICLE"]
    ];
    sId["120302"] = [
      icn["GR.EQ.TANK"],
      icn["GR.EQ.MEDIUM TANK"],
      icn["GR.EQ.TANK RECOVERY VEHICLE"]
    ];
    sId["120303"] = [
      icn["GR.EQ.TANK"],
      icn["GR.EQ.HEAVY TANK"],
      icn["GR.EQ.TANK RECOVERY VEHICLE"]
    ];
    sId["130000"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      ms_1._scale(0.7, icn["GR.IC.ENGINEER"])
    ];
    sId["130100"] = [icn["GR.IN.IC.BRIDGE"]];
    sId["130200"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      ms_1._scale(0.8, icn["GR.IN.IC.BRIDGE"])
    ];
    sId["130300"] = [icn["GR.IN.IC.BRIDGE"], icn["GR.EQ.FIXED BRIDGE"]];
    sId["130400"] = [icn["GR.IN.IC.BRIDGE"], icn["GR.M2.RIVERINE"]];
    sId["130500"] = [
      icn["GR.IN.IC.BRIDGE"],
      icn["GR.EQ.FOLDING GIRDER BRIDGE"]
    ];
    sId["130600"] = [icn["GR.IN.IC.BRIDGE"], icn["GR.EQ.HOLLOW DECK BRIDGE"]];
    sId["130700"] = [icn["GR.IC.DRILLING"]];
    sId["130701"] = [
      ms_1._scale(0.7, icn["GR.IC.DRILLING"]),
      icn["GR.EQ.UTILITY VEHICLE"]
    ];
    sId["130800"] = [icn["GR.EQ.EARTHMOVER"]];
    sId["130801"] = [icn["GR.EQ.MULTIFUNCTIONAL EARTHMOVER/DIGGER"]];
    sId["130900"] = [icn["GR.EQ.MINE CLEARING EQUIPMENT"]];
    sId["130901"] = [
      icn["GR.EQ.MINE CLEARING EQUIPMENT"],
      ms_1._translate(0, -10, icn["GR.EQ.LIMITED CROSS-COUNTRY"])
    ];
    sId["130902"] = [icn["GR.EQ.MINE CLEARING EQUIPMENT"], icn["GR.EQ.TANK"]];
    sId["131000"] = [icn["GR.IC.MINE LAYING"]];
    sId["131001"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      ms_1._translate(0, 10, ms_1._scale(0.7, icn["GR.IC.MINE LAYING"]))
    ];
    sId["131002"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      icn["GR.EQ.ARMORED CARRIER WITH VOLCANO"]
    ];
    sId["131003"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.LIMITED CROSS-COUNTRY"],
      icn["GR.EQ.ARMORED CARRIER WITH VOLCANO"]
    ];
    sId["131100"] = [icn["GR.EQ.DOZER"]];
    sId["131101"] = [icn["GR.EQ.DOZER ARMORED"]];
    sId["131200"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      ms_1._scale(0.6, icn["GR.IC.ENGINEER"])
    ];
    sId["131300"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      ms_1._scale(0.6, icn["GR.IC.ENGINEER"]),
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER ENGINEER RECON VEHICLE"]
    ];
    sId["131400"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.LIMITED CROSS-COUNTRY"],
      icn["GR.EQ.UTILITY VEHICLE BACKHOE"]
    ];
    sId["131500"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.LIMITED CROSS-COUNTRY"],
      ms_1._scale(0.6, icn["GR.IC.ENGINEER"])
    ];
    sId["131600"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.CROSS-COUNTRY"],
      icn["GR.EQ.UTILITY VEHICLE FERRY TRANSPORTER"]
    ];
    //sId['140000'] = 'Utility Vehicles';
    sId["140100"] = [icn["GR.EQ.UTILITY VEHICLE"]];
    sId["140200"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.MEDICAL VEHICLE"]
    ];
    sId["140300"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.MEDICAL EVACUATION"]
    ];
    sId["140400"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.MOBILE EMERGENCY PHYSICIAN"]
    ];
    sId["140500"] = [icn["GR.EQ.BUS"]];
    sId["140600"] = [icn["GR.EQ.SEMI-TRAILER TRUCK"]];
    sId["140601"] = [
      icn["GR.EQ.SEMI-TRAILER TRUCK"],
      icn["GR.EQ.UTILITY VEHICLE LIGHT"]
    ];
    sId["140602"] = [
      icn["GR.EQ.SEMI-TRAILER TRUCK"],
      icn["GR.EQ.UTILITY VEHICLE MEDIUM"]
    ];
    sId["140603"] = [
      icn["GR.EQ.SEMI-TRAILER TRUCK"],
      icn["GR.EQ.UTILITY VEHICLE HEAVY"]
    ];
    sId["140700"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.LIMITED CROSS-COUNTRY"]
    ];
    sId["140800"] = [icn["GR.EQ.UTILITY VEHICLE"], icn["GR.EQ.CROSS-COUNTRY"]];
    sId["140900"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      ms_1._scale(0.8, icn["GR.IC.FF.CLASS III"])
    ];
    sId["141000"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      ms_1._scale(0.7, icn["GR.IC.WATER"])
    ];
    sId["141100"] = [
      icn["GR.EQ.WATER VEHICLE"],
      icn["GR.EQ.LIMITED CROSS-COUNTRY"]
    ];
    sId["141200"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"]
    ];
    sId["141201"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],
      icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK.LIGHT"]
    ];
    sId["141202"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],
      icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK.HEAVY"]
    ];
    //sId['150000'] = 'Train';
    sId["150100"] = [icn["GR.EQ.TRAIN LOCOMOTIVE"]];
    sId["150200"] = [icn["GR.EQ.RAILCAR"]];
    //sId['160000'] = 'Civilian Vehicle';
    sId["160100"] = [icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"]];
    sId["160101"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
    ];
    sId["160102"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
    ];
    sId["160103"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
    ];
    sId["160200"] = [icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"]];
    sId["160201"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
    ];
    sId["160202"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
    ];
    sId["160203"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
    ];
    sId["160300"] = [icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]];
    sId["160301"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
    ];
    sId["160302"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
    ];
    sId["160303"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
    ];
    sId["160400"] = [icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"]];
    sId["160401"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
    ];
    sId["160402"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
    ];
    sId["160403"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
    ];
    sId["160500"] = [icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"]];
    sId["160501"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
    ];
    sId["160502"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
    ];
    sId["160503"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
    ];
    sId["160600"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["160601"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["160602"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["160603"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["160700"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["160701"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["160702"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["160703"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["160800"] = [icn["ST.IC.KNOWN INSURGENT VEHICLE"]];
    sId["160900"] = [icn["ST.IC.KNOWN INSURGENT VEHICLE"], icn["ST.M1.DRUG"]];
    sId["170000"] = [icn["GR.IC.FF.LAW ENFORCEMENT"]];
    sId["170100"] = [
      icn[
        "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
      ]
    ];
    sId["170200"] = [icn["GR.IC.FF.BORDER PATROL"]];
    sId["170300"] = [icn["GR.IC.FF.CUSTOMS SERVICE"]];
    sId["170400"] = [icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]];
    sId["170500"] = [icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]];
    sId["170600"] = [icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]];
    sId["170700"] = [icn["GR.IC.MILITARY POLICE"]];
    sId["170800"] = [icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]];
    sId["170900"] = [icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]];
    sId["171000"] = [icn["SE.IC.LAW ENFORCEMENT VESSEL"]];
    sId["171100"] = [icn["GR.IC.FF.US MARSHALS SERVICE"]];
    sId["180000"] = [icn["GR.EQ.PACK ANIMAL"]];
    sId["190000"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.MISSILE SUPPORT"]
    ];
    sId["190100"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.MISSILE TRANSLOADER"]
    ];
    sId["190200"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.MISSILE TRANSPORTER"]
    ];
    sId["190300"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.MISSILE CRANE/LOADING DEVICE"]
    ];
    sId["190400"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.MISSILE PROPELLANT TRANSPORTER"]
    ];
    sId["190500"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.MISSILE WARHEAD TRANSPORTER"]
    ];
    //sId['200000'] = 'Other Equipment';
    sId["200100"] = [icn["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]];
    sId["200200"] = [icn["ST.IC.BOMB"]];
    sId["200300"] = [icn["ST.IC.BOOBY TRAP"]];
    sId["200400"] = [icn["GR.EQ.CBRN EQUIPMENT"]];
    sId["200500"] = [icn["GR.EQ.COMPUTER SYSTEM"]];
    sId["200600"] = [icn["GR.EQ.COMMAND LAUNCH EQUIPMENT (CLE)"]];
    sId["200700"] = [icn["GR.EQ.GENERATOR SET"]];
    sId["200800"] = [
      icn[
        "GR.EQ.GROUND-BASED MIDCOURSE DEFENSE (GMD) FIRE CONTROL (GFC) CENTER"
      ]
    ];
    sId["200900"] = [
      icn[
        "GR.EQ.IN-FLIGHT INTERCEPTOR COMMUNICATIONS SYSTEM (IFICS) DATA TERMINAL (IDT)"
      ]
    ];
    sId["201000"] = [icn["GR.EQ.LASER"]];
    sId["201100"] = [icn["GR.EQ.PSYCHOLOGICAL OPERATIONS EQUIPMENT"]];
    sId["201200"] = [icn["GR.IC.SUSTAINMENT"]];
    sId["201300"] = [icn["GR.EQ.TENT"]];
    sId["201400"] = [icn["GR.EQ.UNIT DEPLOYMENT SHIPMENTS"]];
    sId["201500"] = [icn["GR.IC.EMERGENCY MEDICAL OPERATION"]];
    sId["201501"] = [icn["AR.I.MILITARY ROTARY WING"], icn["AIR.M1.MEDEVAC"]];
    //sId['210000'] = 'Land Mines';
    sId["210100"] = [icn["GR.EQ.LAND MINE"]];
    sId["210200"] = [icn["GR.EQ.ANTIPERSONNEL LAND MINE"]];
    sId["210300"] = [icn["GR.EQ.ANTITANK MINE"]];
    sId["210400"] = [icn["GR.EQ.IMPROVISED EXPLOSIVE DEVICE"]];
    sId["210500"] = [icn["GR.EQ.ANTIPERSONNEL LAND MINE LESS THAN LETHAL"]];
    //sId['220000'] = 'Sensors';
    sId["220100"] = [icn["GR.EQ.SENSOR"]];
    sId["220200"] = [icn["GR.EQ.SENSOR EMPLACED"]];
    sId["220300"] = [icn["GR.EQ.RADAR"]];
    sId["230000"] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
    sId["230100"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.M1.MEDEVAC"]
    ];
    sId["230200"] = [icn["GR.IC.FIRE PROTECTION"]];
    sId["240000"] = [icn["SP.I.MANUAL TRACK"]];

    //sIdm1['00'] = 'Unspecified';
    sIdm1["01"] = [icn["GR.M1.BIOLOGICAL"]];
    sIdm1["02"] = [icn["GR.M1.CHEMICAL"]];
    sIdm1["03"] = [icn["GR.M1.EARLY WARNING RADAR"]];
    sIdm1["04"] = [icn["GR.M1.INTRUSION"]];
    sIdm1["05"] = [icn["GR.M1.NUCLEAR"]];
    sIdm1["06"] = [icn["GR.M1.RADIOLOGICAL"]];
    sIdm1["07"] = [icn["GR.M1.UPGRADED EARLY WARNING RADAR"]];
    sIdm1["08"] = [icn["AIR.M1.HIJACKING"]];
    sIdm1["09"] = [icn["GR.M1.CIVILIAN"]];

    //This sets up the bounding boxes for equipment to have the bottom at the right place. (this will be used for mobility when unframed)
    var equipmentBottom = {
      110000: 140,
      110100: 140,
      110101: 140,
      110102: 140,
      110103: 140,
      110200: 140,
      110201: 140,
      110202: 140,
      110203: 140,
      110300: 140,
      110301: 140,
      110302: 140,
      110303: 140,
      110400: 135,
      110500: 140,
      110501: 140,
      110502: 140,
      110503: 140,
      110600: 140,
      110601: 140,
      110602: 140,
      110603: 140,
      110700: 140,
      110701: 140,
      110702: 140,
      110703: 140,
      110800: 140,
      110801: 140,
      110802: 140,
      110803: 140,
      110900: 140,
      110901: 140,
      110902: 140,
      110903: 140,
      111000: 140,
      111001: 140,
      111002: 140,
      111003: 140,
      111100: 140,
      111101: 140,
      111102: 140,
      111103: 140,
      111104: 140,
      111105: 140,
      111106: 140,
      111107: 140,
      111108: 140,
      111109: 140,
      111200: 140,
      111201: 140,
      111202: 140,
      111203: 140,
      111300: 140,
      111301: 140,
      111302: 140,
      111303: 140,
      111400: 140,
      111401: 140,
      111402: 140,
      111403: 140,
      111500: 140,
      111501: 140,
      111502: 140,
      111503: 140,
      111600: 140,
      111601: 140,
      111602: 140,
      111603: 140,
      111701: 140,
      111702: 140,
      111703: 140,
      111800: 140,
      111900: 140,
      112000: 140,
      120000: 129,
      120100: 129,
      120101: 130,
      120102: 130,
      120103: 130,
      120104: 130,
      120105: 120,
      120106: 120,
      120107: 120,
      120108: 130,
      120109: 130,
      120110: 140,
      120200: 130,
      120201: 130,
      120202: 130,
      120203: 130,
      120300: 130,
      120301: 130,
      120302: 130,
      120303: 130,
      130000: 129,
      130100: 115,
      130200: 130,
      130300: 130,
      130400: 135,
      130500: 120,
      130600: 120,
      130700: 120,
      130701: 130,
      130800: 130,
      130801: 130,
      130900: 120,
      130901: 130,
      130902: 130,
      131000: 115,
      131001: 130,
      131002: 130,
      131003: 140,
      131100: 130,
      131101: 130,
      131200: 130,
      131300: 130,
      131400: 140,
      131500: 140,
      131600: 140,
      140100: 130,
      140200: 130,
      140300: 130,
      140400: 130,
      140500: 130,
      140600: 140,
      140601: 140,
      140602: 140,
      140603: 140,
      140700: 140,
      140800: 140,
      140900: 130,
      141000: 130,
      141100: 140,
      141200: 130,
      141201: 130,
      141202: 130,
      150100: 130,
      150200: 140,
      160100: 132.5,
      160101: 132.5,
      160102: 132.5,
      160103: 132.5,
      160200: 132.5,
      160201: 132.5,
      160202: 132.5,
      160203: 132.5,
      160300: 132.5,
      160301: 132.5,
      160302: 132.5,
      160303: 132.5,
      160400: 132.5,
      160401: 132.5,
      160402: 132.5,
      160403: 132.5,
      160500: 132.5,
      160501: 132.5,
      160502: 132.5,
      160503: 132.5,
      160600: 132.5,
      160601: 132.5,
      160602: 132.5,
      160603: 132.5,
      160700: 132.5,
      160701: 132.5,
      160702: 132.5,
      160703: 132.5,
      160800: 115,
      160900: 115,
      170000: 149.03125,
      170100: 118.75,
      170200: 133.21875,
      170300: 135.21875,
      170400: 118.75,
      170500: 138.1875,
      170600: 118.75,
      170700: 118.75,
      170800: 118,
      170900: 118,
      171000: 135,
      171100: 135,
      180000: 125,
      190000: 129,
      190100: 129,
      190200: 129,
      190300: 129,
      190400: 129,
      190500: 129,
      200100: 140,
      200200: 118.75,
      200300: 120,
      200400: 140,
      200500: 132,
      200600: 118.75,
      200700: 118.75,
      200800: 118.75,
      200900: 119.36222839355469,
      201000: 145,
      201100: 120,
      201200: 118,
      201300: 124.36222076416016,
      201400: 118.75,
      201500: 140,
      201501: 115,
      210100: 122,
      210200: 122,
      210300: 122,
      210400: 118.75,
      210500: 122,
      220100: 140,
      220200: 136,
      220300: 120,
      230000: 135,
      230100: 132.5,
      230200: 120,
      240000: 118.75
    };
    for (var key in equipmentBottom) {
      if (!equipmentBottom.hasOwnProperty(key)) continue;
      bbox[key] = { y2: equipmentBottom[key] };
    }
  }
};

var iconsLandinstallation = function landinstallation(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Land Installation
  if (symbolSet == "20") {
    sId["110000"] = [icn["AR.I.MILITARY"]];
    sId["110100"] = [icn["GR.IN.IC.AIRCRAFT PRODUCTION & ASSEMBLY"]];
    sId["110200"] = [ms_1._scale(1.4, icn["GR.IC.FF.CLASS V"])];
    sId["110300"] = [icn["GR.IC.FF.CLASS V"], icn["GR.IC.FF.SUPPLY"]];
    sId["110400"] = [icn["GR.EQ.TANK"]];
    sId["110500"] = [icn["ST.IC.BLACK LIST LOCATION"]];
    sId["110600"] = [icn["GR.IC.CBRN"]];
    sId["110700"] = [icn["GR.EQ.DOZER"]];
    sId["110701"] = [icn["GR.IN.IC.BRIDGE"]];
    sId["110800"] = [ms_1._scale(1.4, icn["GR.IC.FF.CLASS IX"])];
    sId["110900"] = [icn["AR.I.GOVERNMENT"]];
    sId["111000"] = [icn["ST.IC.GRAY LIST LOCATION"]];
    sId["111100"] = [icn["ST.IC.MASS GRAVE LOCATION"]];
    sId["111200"] = [
      icn["GR.IN.IC.MILITARY/CIVILIAN.MATERIEL"],
      icn["GR.IC.FF.SUPPLY"]
    ];
    sId["111300"] = [icn["GR.IN.IC.MINE"]];
    sId["111400"] = [icn["GR.EQ.MISSILE LAUNCHER"]];
    sId["111500"] = [ms_1._scale(0.8, icn["AC.IC.RADIOACTIVE MATERIAL"])];
    sId["111600"] = [icn["GR.IN.IC.MILITARY/CIVILIAN.PRINTED MEDIA"]];
    sId["111700"] = [icn["ST.IC.SAFE HOUSE"]];
    sId["111800"] = [icn["ST.IC.WHITE LIST LOCATION"]];
    sId["111900"] = [icn["GR.EQ.TENT"]];
    sId["111901"] = [
      icn["GR.EQ.TENT"],
      icn["ST.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES"]
    ];
    sId["111902"] = [icn["GR.EQ.TENT"], icn["GR.M1.TRAINING CAMP"]];
    sId["112000"] = [
      icn["GR.IN.IC.INDUSTRIAL SITE"],
      icn["GR.IN.IC.WAREHOUSE/STORAGE FACILITY"]
    ]; //'Military/Civilian.Warehouse/Storage Facility';
    sId["112100"] = [icn["GR.IC.FF.LAW ENFORCEMENT"]];
    sId["112101"] = [
      icn[
        "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
      ]
    ];
    sId["112102"] = [icn["GR.IC.FF.BORDER PATROL"]];
    sId["112103"] = [icn["GR.IC.FF.CUSTOMS SERVICE"]];
    sId["112104"] = [icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]];
    sId["112105"] = [icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]];
    sId["112106"] = [icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]];
    sId["112107"] = [icn["GR.IC.LAW ENFORCEMENT"]];
    sId["112108"] = [icn["GR.IC.FF.PRISON"]];
    sId["112109"] = [icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]];
    sId["112110"] = [icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]];
    sId["112111"] = [icn["SE.IC.LAW ENFORCEMENT VESSEL"]];
    sId["112112"] = [icn["GR.IC.FF.US MARSHALS SERVICE"]];
    sId["112200"] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
    sId["112201"] = [icn["GR.IC.FIRE PROTECTION"]];
    sId["112202"] = [icn["GR.IC.EMERGENCY MEDICAL OPERATION"]];
    //sId['120000'] = 'Infrastructure';
    sId["120100"] = [icn["GR.IN.IC.AGRICULTURE AND FOOD INFRASTRUCTURE"]];
    sId["120101"] = [icn["GR.IN.IC.AGRICULTURAL LABORATORY"]];
    sId["120102"] = [icn["GR.IN.IC.ANIMAL FEEDLOT"]];
    sId["120103"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.COMMERCIAL"]];
    sId["120104"] = [icn["GR.IN.IC.FARM/RANCH"]];
    sId["120105"] = [icn["ST.IC.FOOD DISTRIBUTION"]];
    sId["120106"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.PRODUCTION"]];
    sId["120107"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.RETAIL"]];
    sId["120108"] = [icn["GR.IN.IC.GRAIN STORAGE"]];
    sId["120200"] = [icn["AC.IC.BANKING FINANCE AND INSURANCE INFRASTRUCTURE"]];
    sId["120201"] = [icn["GR.IN.IC.ATM"]];
    sId["120202"] = [icn["GR.IN.IC.BANK"]];
    sId["120203"] = [icn["GR.IN.IC.BULLION STORAGE"]];
    sId["120204"] = [
      icn[
        "GR.IN.IC.INFRASTRUCTURE.BANKING FINANCE AND INSURANCE  INFRASTRUCTURE.ECONOMIC INFRASTRUCTURE ASSET"
      ]
    ];
    sId["120205"] = [icn["GR.IN.IC.FEDERAL RESERVE BANK"]];
    sId["120206"] = [icn["GR.IN.IC.FINANCIAL EXCHANGE"]];
    sId["120207"] = [icn["GR.IN.IC.FINANCIAL SERVICES, OTHER"]];
    sId["120300"] = [icn["GR.IN.IC.COMMERCIAL INFRASTRUCTURE"]];
    sId["120301"] = [icn["GR.IN.IC.CHEMICAL PLANT"]];
    sId["120302"] = [icn["GR.IN.IC.FIREARMS MANUFACTURER"]];
    sId["120303"] = [icn["GR.IN.IC.FIREARMS RETAILER"]];
    sId["120304"] = [icn["GR.IN.IC.HAZARDOUS MATERIAL PRODUCTION"]];
    sId["120305"] = [icn["GR.IN.IC.HAZARDOUS MATERIAL STORAGE"]];
    sId["120306"] = [icn["GR.IN.IC.INDUSTRIAL SITE"]];
    sId["120307"] = [icn["GR.IN.IC.LANDFILL"]];
    sId["120308"] = [icn["GR.IN.IC.PHARMACEUTICAL MANUFACTURER"]];
    sId["120309"] = [icn["GR.IN.IC.CONTAMINATED HAZARDOUS WASTE SITE"]];
    sId["120310"] = [icn["GR.IN.IC.TOXIC RELEASE INVENTORY"]];
    sId["120400"] = [icn["GR.IN.IC.EDUCATIONAL FACILITIES INFRASTRUCTURE"]];
    sId["120401"] = [icn["GR.IN.IC.COLLEGE/UNIVERSITY"]];
    sId["120402"] = [icn["GR.IN.IC.SCHOOL"]];
    sId["120500"] = [icn["GR.IN.IC.ELECTRIC POWER"]];
    sId["120501"] = [ms_1._scale(0.6, icn["GR.IN.IC.ELECTRIC POWER"])];
    sId["120502"] = [
      ms_1._translate(0, 15, ms_1._scale(0.75, icn["GR.IN.IC.ELECTRIC POWER"])),
      icn["AC.M1.GENERATION STATION"]
    ];
    sId["120503"] = [icn["GR.IN.IC.NATURAL GAS FACILITY"]];
    sId["120504"] = [ms_1._scale(1.5, icn["GR.IC.FF.CLASS III"])];
    sId["120505"] = [icn["GR.IC.FF.CLASS III"]];
    sId["120506"] = [icn["GR.IN.IC.PROPANE FACILITY"]];
    sId["120600"] = [icn["GR.IN.IC.GOVERNMENT SITE INFRASTRUCTURE"]];
    //sId['120700'] = 'Infrastructure.Medical Infrastructure';
    sId["120701"] = [icn["GR.IC.FF.MEDICAL"]];
    sId["120702"] = [
      icn["GR.IC.FF.MEDICAL"],
      icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]
    ];
    sId["120800"] = [icn["GR.IN.IC.MILITARY INFRASTRUCTURE"]];
    sId["120801"] = [icn["GR.IN.IC.BASE"], icn["AC.M1.MILITARY ARMORY"]];
    sId["120802"] = [icn["GR.IN.IC.BASE"]];
    sId["120900"] = [icn["GR.IN.IC.POSTAL SERVICE INFRASTRUCTURE"]];
    sId["120901"] = [icn["GR.IN.IC.POSTAL DISTRIBUTION CENTER"]];
    sId["120902"] = [icn["GR.IN.IC.POST OFFICE"]];
    sId["121000"] = [icn["GR.IN.IC.PUBLIC VENUES INFRASTRUCTURE"]];
    sId["121001"] = [icn["GR.IN.IC.ENCLOSED FACITLITY (PUBLIC VENUE)"]];
    sId["121002"] = [icn["GR.IN.IC.OPEN FACILITY (OPEN VENUE)"]];
    sId["121003"] = [icn["GR.IN.IC.RECREATIONAL AREA"]];
    sId["121004"] = [icn["GR.IN.IC.RELIGIOUS INSTITUTION"]];
    sId["121100"] = [icn["GR.IN.IC.SPECIAL NEEDS INFRASTRUCTURE"]];
    sId["121101"] = [icn["GR.IN.IC.ADULT DAY CARE"]];
    sId["121102"] = [icn["GR.IN.IC.CHILD DAY CARE"]];
    sId["121103"] = [icn["GR.IN.IC.ELDER CARE"]];
    sId["121200"] = [icn["GR.IN.IC.TELECOMMUNICATIONS INFRASTRUCTURE"]];
    sId["121201"] = [icn["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]];
    sId["121202"] = [
      icn[
        "GR.IN.IC.INFRASTRUCTURE.TELECOMMUNICATIONS INFRASTRUCTURE.TELECOMMUNICATIONS"
      ]
    ];
    sId["121203"] = [icn["GR.IN.IC.TELECOMMUNICATIONS TOWER"]];
    sId["121300"] = [ms_1._scale(1.5, icn["GR.IC.TRANSPORTATION"])];
    sId["121301"] = [
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.IC.AIRPORT OF DEBARKATION"]
    ];
    sId["121302"] = [icn["GR.IN.IC.AIR TRAFFIC CONTROL FACILITY"]];
    sId["121303"] = [icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]];
    sId["121304"] = [icn["SE.IC.FERRY"]];
    sId["121305"] = [icn["GR.IN.IC.HELICOPTER LANDING SITE"]];
    sId["121306"] = [icn["GR.IC.MAINTENANCE"]];
    sId["121307"] = [icn["GR.IC.RAILHEAD"]];
    sId["121308"] = [icn["GR.IN.IC.REST STOP"]];
    sId["121309"] = [icn["GR.IC.TRANSPORTATION"], icn["GR.M1.NAVAL"]];
    sId["121310"] = [icn["GR.IC.NAVAL"], icn["GR.M1.YARD"]];
    sId["121311"] = [icn["GR.IN.IC.TOLL FACILITY"]];
    sId["121312"] = [icn["GR.IN.IC.TRAFFIC INSPECTION FACILITY"]];
    sId["121313"] = [icn["GR.IN.IC.TUNNEL"]];
    sId["121400"] = [icn["GR.IC.WATER"]];
    sId["121401"] = [icn["GR.IN.IC.CONTROL VALVE"]];
    sId["121402"] = [icn["GR.IN.IC.DAM"]];
    sId["121403"] = [icn["GR.IN.IC.DISCHARGE OUTFALL"]];
    sId["121404"] = [icn["GR.IN.IC.GROUND WATER WELL"]];
    sId["121405"] = [icn["GR.IN.IC.PUMPING STATION"]];
    sId["121406"] = [icn["GR.IN.IC.RESERVOIR"]];
    sId["121407"] = [icn["GR.IN.IC.STORAGE TOWER"]];
    sId["121408"] = [icn["GR.IN.IC.SURFACE WATER INTAKE"]];
    sId["121409"] = [icn["GR.IN.IC.WASTEWATER TREATMENT FACILITY"]];
    sId["121410"] = [icn["GR.IC.WATER"]];
    sId["121411"] = [icn["GR.IC.WATER PURIFICATION"]];

    //sIdm1['00'] = 'Unspecified';
    sIdm1["01"] = [icn["GR.M1.BIOLOGICAL"]];
    sIdm1["02"] = [icn["GR.M1.CHEMICAL"]];
    sIdm1["03"] = [icn["GR.M1.NUCLEAR"]];
    sIdm1["04"] = [icn["GR.IN.M1.RADIOLOGICAL"]];
    sIdm1["05"] = [icn["GR.M1.DECONTAMINATION"]];
    sIdm1["06"] = [icn["GR.IN.M1.COAL"]];
    sIdm1["07"] = [icn["GR.IN.M1.GEOTHERMAL"]];
    sIdm1["08"] = [icn["GR.IN.M1.HYDROELECTRIC"]];
    sIdm1["09"] = [icn["GR.IN.M1.NATURAL GAS"]];
    sIdm1["10"] = [icn["GR.IN.M1.PETROLEUM"]];
    sIdm1["11"] = [icn["GR.IN.M1.CIVILIAN"]];
    sIdm1["12"] = [icn["GR.IN.M1.CIVILIAN TELEPHONE"]];
    sIdm1["13"] = [icn["GR.IN.M1.CIVILIAN TELEVISION"]];

    //sIdm2['00'] = 'Unspecified';
    sIdm2["01"] = [icn["GR.IN.M2.CHEMICAL & BIOLOGICAL WARFARE"]];
    sIdm2["02"] = [icn["GR.IN.M2.CHEMICAL WARFARE PRODUCTION"]];
    sIdm2["03"] = [icn["GR.IN.M2.NUCLEAR WARFARE PRODUCTION"]];
    sIdm2["04"] = [icn["GR.IN.M2.RADIOLOGICAL WARFARE PRODUCTION"]];
    sIdm2["05"] = [icn["GR.IN.M2.ATOMIC ENERGY REACTOR"]];
    sIdm2["06"] = [icn["GR.IN.M2.NUCLEAR MATERIAL PRODUCTION"]];
    sIdm2["07"] = [icn["GR.IN.M2.NUCLEAR MATERIAL STORAGE"]];
    sIdm2["08"] = [icn["GR.IN.M2.WEAPONS GRADE PRODUCTION"]];
  }
};

//var ms = require("../ms.js");

var iconsSea$2 = function sea(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Sea
  if (symbolSet == "30") {
    sId["110000"] = [icn["SE.IC.MILITARY"]];
    sId["120000"] = [icn["SE.IC.COMBATANT"]];
    sId["120100"] = [icn["SE.IC.CARRIER"]];
    sId["120200"] = [icn["SE.IC.SURFACE COMBATANT, LINE"]];
    sId["120201"] = [icn["SE.IC.BATTLESHIP"]];
    sId["120202"] = [icn["SE.IC.CRUISER, GUIDED MISSILE"]];
    sId["120203"] = [icn["SE.IC.DESTROYER"]];
    sId["120204"] = [icn["SE.IC.FRIGATE"]];
    sId["120205"] = [icn["SE.IC.CORVETTE"]];
    sId["120206"] = [icn["SE.IC.LITTORAL COMBATANT SHIP"]];
    sId["120300"] = [icn["SE.IC.AMPHIBIOUS WARFARE SHIP"]];
    sId["120301"] = [icn["SE.IC.AMPHIBIOUS FORCE FLAGSHIP"]];
    sId["120302"] = [icn["SE.IC.AMPHIBIOUS ASSAULT"]];
    sId["120303"] = [icn["SE.IC.AMPHIBIOUS ASSAULT SHIP, GENERAL"]];
    sId["120304"] = [icn["SE.IC.AMPHIBIOUS ASSAULT SHIP, MULTI-PURPOSE"]];
    sId["120305"] = [icn["SE.IC.AMPHIBIOUS ASSAULT SHIP, HELICOPTER"]];
    sId["120306"] = [icn["SE.IC.AMPHIBIOUS TRANSPORT, DOCK"]];
    sId["120307"] = [icn["SE.IC.LANDING SHIP"]];
    sId["120308"] = [icn["SE.IC.LANDING CRAFT"]];
    sId["120400"] = [icn["SE.IC.MINE WARFARE VESSEL"]];
    sId["120401"] = [icn["SE.IC.MINELAYER"]];
    sId["120402"] = [icn["SE.IC.MINESWEEPER"]];
    sId["120403"] = [icn["SE.IC.MINESWEEPER, DRONE"]];
    sId["120404"] = [icn["SE.IC.MINEHUNTER"]];
    sId["120405"] = [icn["SE.IC.MINE COUNTERMEASURES"]];
    sId["120406"] = [icn["SE.IC.MINE COUNTER MEASURE SUPPORT SHIP"]];
    sId["120500"] = [icn["SE.IC.PATROL"]];
    sId["120501"] = [icn["SE.IC.PATROL CRAFT"]];
    sId["120502"] = [icn["SE.IC.PATROL GUN"]];
    sId["120600"] = [icn["SE.IC.SEA SURFACE DECOY"]];
    sId["120700"] = [icn["SE.IC.UNMANNED SURFACE WATER VEHICLE"]];
    sId["120800"] = [icn["SE.IC.MILITARY SPEEDBOAT"]];
    sId["120801"] = [
      icn["SE.IC.MILITARY SPEEDBOAT, RIGID-HULL INFLATABLE BOAT"]
    ];
    sId["120900"] = [icn["SE.IC.MILITARY JETSKI"]];
    sId["121000"] = [icn["SE.IC.NAVY TASK ORGANIZATION UNIT"]];
    sId["121001"] = [icn["SE.IC.NAVY TASK ELEMENT"]];
    sId["121002"] = [icn["SE.IC.NAVY TASK FORCE"]];
    sId["121003"] = [icn["SE.IC.NAVY TASK GROUP"]];
    sId["121004"] = [icn["SE.IC.NAVY TASK UNIT"]];
    sId["121005"] = [icn["SE.IC.CONVOY"]];
    sId["121100"] = [icn["GR.IC.RADAR"]];
    sId["130000"] = [icn["SE.IC.NONCOMBATANT"]];
    sId["130100"] = [icn["SE.IC.AUXILIARY SHIP"]];
    sId["130101"] = [icn["SE.IC.AMMUNITION SHIP"]];
    sId["130102"] = [icn["SE.IC.STORES SHIP"]];
    sId["130103"] = [icn["SE.IC.AUXILIARY FLAG OR COMMAND SHIP"]];
    sId["130104"] = [icn["SE.IC.INTELLIGENCE COLLECTOR"]];
    sId["130105"] = [icn["SE.IC.OCEAN RESEARCH SHIP"]];
    sId["130106"] = [icn["SE.IC.SURVEY SHIP"]];
    sId["130107"] = [icn["SE.IC.HOSPITAL SHIP2"]];
    sId["130108"] = [icn["SE.IC.CARGO SHIP"]];
    sId["130109"] = [icn["SE.IC.COMBAT SUPPORT SHIP, FAST"]];
    sId["130110"] = [icn["SE.IC.OILER, REPLENISHMENT"]];
    sId["130111"] = [icn["SE.IC.REPAIR SHIP"]];
    sId["130112"] = [icn["SE.IC.SUBMARINE TENDER"]];
    sId["130113"] = [icn["SE.IC.TUG, OCEAN GOING"]];
    sId["130200"] = [icn["SE.IC.SERVICE CRAFT, YARD, GENERAL"]];
    sId["130201"] = [icn["SE.IC.BARGE, NOT SELF-PROPELLED"]];
    sId["130202"] = [icn["SE.IC.BARGE, SELF-PROPELLED"]];
    sId["130203"] = [icn["SE.IC.TUG, HARBOUR"]];
    sId["130204"] = [icn["SE.IC.LAUNCH"]];
    sId["140000"] = [icn["AR.I.CIVILIAN"]];
    sId["140100"] = [icn["SE.IC.MERCHANT SHIP, GENERAL"]];
    sId["140101"] = [icn["SE.IC.CARGO, GENERAL"]];
    sId["140102"] = [icn["SE.IC.CONTAINER SHIP"]];
    sId["140103"] = [icn["SE.IC.DREDGE"]];
    sId["140104"] = [icn["SE.IC.ROLL ON-ROLL OFF"]];
    sId["140105"] = [icn["SE.IC.FERRY"]];
    sId["140106"] = [icn["SE.IC.HEAVY LIFT"]];
    sId["140107"] = [icn["SE.IC.HOVERCRAFT 2525D"]];
    sId["140108"] = [icn["SE.IC.MERCHANT SHIP, LASH CARRIER (WITH BARGES)"]];
    sId["140109"] = [icn["SE.IC.OILER/TANKER"]];
    sId["140110"] = [icn["SE.IC.PASSENGER SHIP"]];
    sId["140111"] = [icn["SE.IC.TUG, OCEAN GOING CIVILIAN"]];
    sId["140112"] = [icn["SE.IC.TOW"]];
    sId["140113"] = [icn["SE.IC.TRANSPORT SHIP, HAZARDOUS MATERIAL"]];
    sId["140114"] = [icn["SE.IC.JUNK/DHOW"]];
    sId["140115"] = [icn["SE.IC.BARGE, NOT SELF-PROPELLED"]];
    sId["140116"] = [icn["SE.IC.HOSPITAL SHIP"]];
    sId["140200"] = [icn["SE.IC.FISHING VESSEL"]];
    sId["140201"] = [icn["SE.IC.DRIFTER"]];
    sId["140202"] = [icn["SE.IC.TRAWLER"]];
    sId["140203"] = [icn["SE.IC.FISHING VESSEL DREDGE"]];
    sId["140300"] = [icn["SE.IC.LAW ENFORCEMENT VESSEL"]];
    sId["140400"] = [icn["SE.IC.LEISURE CRAFT, SAILING BOAT"]];
    sId["140500"] = [icn["SE.IC.LEISURE CRAFT, MOTORIZED"]];
    sId["140501"] = [
      icn["SE.IC.LEISURE CRAFT, MOTORIZED, RIGID-HULL INFLATABLE BOAT"]
    ];
    sId["140502"] = [icn["SE.IC.LEISURE CRAFT, MOTORIZED, SPEEDBOAT"]];
    sId["140600"] = [icn["SE.IC.LEISURE CRAFT, JETSKI"]];
    sId["140700"] = [icn["SE.IC.UNMANNED SURFACE WATER VEHICLE (USV)"]];
    sId["150000"] = [icn["SE.IC.OWN SHIP"]];
    sId["160000"] = [icn["SE.IC.FUSED TRACK"]];
    sId["170000"] = [icn["SP.I.MANUAL TRACK"]];

    sIdm1["01"] = [icn["SE.M1.OWN SHIP"]];
    sIdm1["02"] = [icn["SE.M1.ANTIAIR WARFARE"]];
    sIdm1["03"] = [icn["SE.M1.ANTISUBMARINE WARFARE"]];
    sIdm1["04"] = [icn["SE.M1.ESCORT"]];
    sIdm1["05"] = [icn["SE.M1.ELECTRONIC WARFARE"]];
    sIdm1["06"] = [icn["SE.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE"]];
    sIdm1["07"] = [icn["SE.M1.MINE COUNTER MEASURES"]];
    sIdm1["08"] = [icn["SE.M1.MISSILE DEFENSE"]];
    sIdm1["09"] = [icn["SE.M1.MEDICAL"]];
    sIdm1["10"] = [icn["SE.M1.MINE WARFARE"]];
    sIdm1["11"] = [icn["SE.M1.REMOTE MULTI-MISSION VEHIHLE"]];
    sIdm1["12"] = [icn["SE.M1.SPECIAL OPERATIONS FORCE"]];
    sIdm1["13"] = [icn["SE.M1.SURFACE WARFARE"]];
    sIdm1["14"] = [icn["SE.M1.BALLISTIC MISSILE"]];
    sIdm1["15"] = [icn["SE.M1.GUIDED MISSILE"]];
    sIdm1["16"] = [icn["SE.M1.OTHER GUIDED MISSILE"]];
    sIdm1["17"] = [icn["SE.M1.TORPEDO"]];
    sIdm1["18"] = [icn["SE.M1.DRONE-EQUIPPED"]];
    sIdm1["19"] = [icn["SE.M1.HELICOPTER-EQUIPPED"]];
    sIdm1["20"] = [icn["SE.M1.BALLISTIC MISSILE DEFENSE, SHOOTER"]];
    sIdm1["21"] = [
      icn[
        "SE.M1.BALLISTIC MISSILE DEFENSE, LONG- RANGE SURVEILLANCE AND TRACK (LRS&T)"
      ]
    ];
    sIdm1["22"] = [icn["SE.M1.SEA-BASE X-BAND"]];
    sIdm1["23"] = [icn["SE.M1.HIJACKING/HIJACKED"]];

    sIdm2["01"] = [icn["SE.M2.NUCLEAR POWERED"]];
    sIdm2["02"] = [icn["SE.M2.HEAVY"]];
    sIdm2["03"] = [icn["SE.M2.LIGHT"]];
    sIdm2["04"] = [icn["SE.M2.MEDIUM"]];
    sIdm2["05"] = [icn["SE.M2.DOCK"]];
    sIdm2["06"] = [icn["SE.M2.LOGISTICS"]];
    sIdm2["07"] = [icn["SE.M2.TANK"]];
    sIdm2["08"] = [icn["SE.M2.VEHICLE"]];
    sIdm2["09"] = [icn["SE.M2.FAST"]];
    sIdm2["10"] = [icn["SE.M2.AIR-CUSHIONED (USA ONLY)"]];
    sIdm2["11"] = [icn["SE.M2.AIR-CUSHIONED"]];
    sIdm2["12"] = [icn["SE.M2.HYDROFOIL"]];
    sIdm2["13"] = [icn["SE.M2.AUTONOMOUS CONTROL"]];
    sIdm2["14"] = [icn["SE.M2.REMOTELY PILOTED"]];
    sIdm2["15"] = [icn["SE.M2.EXPENDABLE"]];
  }
};

//var ms = require("../ms.js");

var iconsSubsurface$2 = function subsurface(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Subsurface
  if (symbolSet == "35") {
    sId["110000"] = [icn["SU.IC.MILITARY"]];
    sId["110100"] = [icn["SU.IC.SUBMARINE"]];
    sId["110101"] = [icn["SU.IC.SUBMARINE, SURFACED"]];
    sId["110102"] = [icn["SU.IC.SUBMARINE, SNORKELING"]];
    sId["110103"] = [icn["SU.IC.SUBMARINE, BOTTOMED"]];
    sId["110200"] = [icn["SU.IC.OTHER SUBMERSIBLE"]];
    sId["110300"] = [icn["SU.IC.NON-SUBMARINE"]];
    sId["110400"] = [
      icn[
        "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"
      ]
    ];
    sId["110500"] = [icn["SU.IC.DIVER, MILITARY"]];
    sId["120000"] = [icn["AR.I.CIVILIAN"]];
    sId["120100"] = [icn["SU.IC.SUBMERSIBLE, CIVILIAN"]];
    sId["120200"] = [
      icn[
        "SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV), CIVILIAN"
      ]
    ];
    sId["120300"] = [icn["SU.IC.DIVER, CIVILIAN"]];
    sId["130000"] = [icn["SU.IC.UNDERWATER WEAPON"]];
    sId["130100"] = [icn["SU.IC.TORPEDO"]];
    sId["130200"] = [icn["SU.IC.IMPROVISED EXPLOSIVE DEVICE (IED)"]];
    sId["130300"] = [icn["SU.IC.UNDERWATER DECOY DSymbol"]];
    sId["140000"] = [
      icn["SU.IC.ECHO TRACKER CLASSIFIER (ETC)/POSSIBLE CONTACT (POSCON)"]
    ];
    sId["150000"] = [icn["SU.IC.FUSED TRACK"]];
    sId["160000"] = [icn["SP.I.MANUAL TRACK"]];

    sIdm1["01"] = [icn["SU.M1.ANTISUBMARINE WARFARE"]];
    sIdm1["02"] = [icn["SU.M1.AUXILIARY"]];
    sIdm1["03"] = [icn["SU.M1.COMMAND AND CONTROL"]];
    sIdm1["04"] = [icn["SU.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE"]];
    sIdm1["05"] = [icn["SU.M1.MINE COUNTERMEASURES"]];
    sIdm1["06"] = [icn["SU.M1.MINE WARFARE"]];
    sIdm1["07"] = [icn["SU.M1.SURFACE WARFARE"]];
    sIdm1["08"] = [icn["SU.M1.ATTACK"]];
    sIdm1["09"] = [icn["SU.M1.BALLISTIC MISSILE"]];
    sIdm1["10"] = [icn["SU.M1.GUIDED MISSILE"]];
    sIdm1["11"] = [icn["SU.M1.OTHER GUIDED MISSILES (POINT DEFENCE)"]];
    sIdm1["12"] = [icn["SU.M1.SPECIAL OPERATIONS FORCE"]];
    sIdm1["13"] = [icn["SU.M1.POSSIBLE SUBMARINE - LOW 1"]];
    sIdm1["14"] = [icn["SU.M1.POSSIBLE SUBMARINE - LOW 2"]];
    sIdm1["15"] = [icn["SU.M1.POSSIBLE SUBMARINE - HIGH 3"]];
    sIdm1["16"] = [icn["SU.M1.POSSIBLE SUBMARINE - HIGH 4"]];
    sIdm1["17"] = [icn["SU.M1.PROBABLE SUBMARINE"]];
    sIdm1["18"] = [icn["SU.M1.CERTAIN SUBMARINE"]];
    sIdm1["19"] = [icn["SU.M1.ANTI-TORPEDO TORPEDO"]];
    sIdm1["20"] = [icn["SU.M1.HIJACKING/HIJACKED"]];

    sIdm2["01"] = [icn["SU.M2.AIR INDEPENDENT PROPULSION"]];
    sIdm2["02"] = [icn["SU.M2.DIESEL PROPULSION"]];
    sIdm2["03"] = [icn["SU.M2.DIESEL - TYPE 1"]];
    sIdm2["04"] = [icn["SU.M2.DIESEL - TYPE 2"]];
    sIdm2["05"] = [icn["SU.M2.DIESEL - TYPE 3"]];
    sIdm2["06"] = [icn["SU.M2.NUCLEAR POWERED"]];
    sIdm2["07"] = [icn["SU.M2.NUCLEAR - TYPE 1"]];
    sIdm2["08"] = [icn["SU.M2.NUCLEAR - TYPE 2"]];
    sIdm2["09"] = [icn["SU.M2.NUCLEAR - TYPE 3"]];
    sIdm2["10"] = [icn["SU.M2.NUCLEAR - TYPE 4"]];
    sIdm2["11"] = [icn["SU.M2.NUCLEAR - TYPE 5"]];
    sIdm2["12"] = [icn["SU.M2.NUCLEAR - TYPE 6"]];
    sIdm2["13"] = [icn["SU.M2.NUCLEAR - TYPE 7"]];
    sIdm2["14"] = [icn["SU.M2.AUTONOMOUS CONTROL"]];
    sIdm2["15"] = [icn["SU.M2.REMOTELY PILOTED"]];
    sIdm2["16"] = [icn["SU.M2.EXPENDABLE"]];
  }
};

var iconsMinewarfare = function minewarfare(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Mine Warfare
  if (symbolSet == "36") {
    sId["110000"] = [icn["SU.IC.SEA MINE"]];
    sId["110100"] = [icn["SU.IC.SEA MINE - BOTTOM"]];
    sId["110200"] = [icn["SU.IC.SEA MINE - MOORED"]];
    sId["110300"] = [icn["SU.IC.SEA MINE - FLOATING"]];
    sId["110400"] = [icn["SU.IC.SEA MINE - RISING"]];
    sId["110500"] = [icn["SU.IC.SEA MINE (IN OTHER POSITION)"]];
    sId["110600"] = [icn["SU.IC.SEA MINE - KINGFISHER"]];
    sId["110700"] = [icn["SU.IC.SEA MINE - SMALL OBJECT"]];
    sId["110800"] = [icn["SU.IC.SEA MINE EXERCISE MINE"]];
    sId["110801"] = [icn["SU.IC.SEA MINE EXERCISE MINE - BOTTOM"]];
    sId["110802"] = [icn["SU.IC.SEA MINE EXERCISE MINE - MOORED"]];
    sId["110803"] = [icn["SU.IC.SEA MINE EXERCISE MINE - FLOATING"]];
    sId["110804"] = [icn["SU.IC.SEA MINE EXERCISE MINE - RISING"]];
    sId["110900"] = [icn["SU.IC.SEA MINE NEUTRALIZED"]];
    sId["110901"] = [icn["SU.IC.SEA MINE NEUTRALIZED - BOTTOM"]];
    sId["110902"] = [icn["SU.IC.SEA MINE NEUTRALIZED - MOORED"]];
    sId["110903"] = [icn["SU.IC.SEA MINE NEUTRALIZED - FLOATING"]];
    sId["110904"] = [icn["SU.IC.SEA MINE NEUTRALIZED - RISING"]];
    sId["110905"] = [icn["SU.IC.SEA MINE (IN OTHER POSITION) NEUTRALIZED"]];
    sId["120000"] = [icn["SU.IC.UNEXPLODED EXPLOSIVE ORDNANCE"]];
    sId["130000"] = [icn["SU.IC.SEA MINE DECOY"]];
    sId["130100"] = [icn["SU.IC.SEA MINE DECOY, BOTTOM/GROUND"]];
    sId["130200"] = [icn["SU.IC.SEA MINE DECOY, MOORED"]];
    //sId['140000'] = 'Mine-Like Contact (MILCO)';
    sId["140100"] = [ms_1._scale(1.3, icn["SU.IC.SEA MINE MILCO"])];
    sId["140101"] = [
      ms_1._scale(1.3, [
        icn["SU.IC.SEA MINE MILCO"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]
      ])
    ];
    sId["140102"] = [
      ms_1._scale(1.3, [
        icn["SU.IC.SEA MINE MILCO"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]
      ])
    ];
    sId["140103"] = [
      ms_1._scale(1.3, [
        icn["SU.IC.SEA MINE MILCO"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]
      ])
    ];
    sId["140104"] = [
      ms_1._scale(1.3, [
        icn["SU.IC.SEA MINE MILCO"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]
      ])
    ];
    sId["140105"] = [
      ms_1._scale(1.3, [
        icn["SU.IC.SEA MINE MILCO"],
        icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]
      ])
    ];
    sId["140200"] = [icn["SU.IC.SEA MINE MILCO - BOTTOM"]];
    sId["140201"] = [
      icn["SU.IC.SEA MINE MILCO - BOTTOM"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]
    ];
    sId["140202"] = [
      icn["SU.IC.SEA MINE MILCO - BOTTOM"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]
    ];
    sId["140203"] = [
      icn["SU.IC.SEA MINE MILCO - BOTTOM"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]
    ];
    sId["140204"] = [
      icn["SU.IC.SEA MINE MILCO - BOTTOM"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]
    ];
    sId["140205"] = [
      icn["SU.IC.SEA MINE MILCO - BOTTOM"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]
    ];
    sId["140300"] = [icn["SU.IC.SEA MINE MILCO - MOORED"]];
    sId["140301"] = [
      icn["SU.IC.SEA MINE MILCO - MOORED"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]
    ];
    sId["140302"] = [
      icn["SU.IC.SEA MINE MILCO - MOORED"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]
    ];
    sId["140303"] = [
      icn["SU.IC.SEA MINE MILCO - MOORED"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]
    ];
    sId["140304"] = [
      icn["SU.IC.SEA MINE MILCO - MOORED"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]
    ];
    sId["140305"] = [
      icn["SU.IC.SEA MINE MILCO - MOORED"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]
    ];
    sId["140400"] = [icn["SU.IC.SEA MINE MILCO - FLOATING"]];
    sId["140401"] = [
      icn["SU.IC.SEA MINE MILCO - FLOATING"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]
    ];
    sId["140402"] = [
      icn["SU.IC.SEA MINE MILCO - FLOATING"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]
    ];
    sId["140403"] = [
      icn["SU.IC.SEA MINE MILCO - FLOATING"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]
    ];
    sId["140404"] = [
      icn["SU.IC.SEA MINE MILCO - FLOATING"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]
    ];
    sId["140405"] = [
      icn["SU.IC.SEA MINE MILCO - FLOATING"],
      icn["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]
    ];
    sId["150000"] = [ms_1._scale(1.3, icn["SU.IC.SEA MINE MILEC"])];
    sId["150100"] = [icn["SU.IC.SEA MINE MILEC - BOTTOM"]];
    sId["150200"] = [icn["SU.IC.SEA MINE MILEC - MOORED"]];
    sId["150300"] = [icn["SU.IC.SEA MINE MILEC - FLOATING"]];
    sId["160000"] = [
      ms_1._scale(1.3, icn["SU.IC.SEA MINE NEGATIVE REACQUISITION"])
    ];
    sId["160100"] = [icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - BOTTOM"]];
    sId["160200"] = [icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - MOORED"]];
    sId["160300"] = [icn["SU.IC.SEA MINE NEGATIVE REACQUISITION - FLOATING"]];
    sId["170000"] = [ms_1._scale(1.3, icn["SU.IC.SEA MINE GENERAL OBSTRUCTOR"])];
    sId["170100"] = [icn["SU.IC.SEA MINE GENERAL OBSTRUCTOR NEUTRALIZED"]];
    sId["180000"] = [ms_1._scale(1.3, icn["SU.IC.SEA MINE MINE ANCHOR"])];
    sId["190000"] = [
      ms_1._scale(1.3, icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"])
    ];
    sId["190100"] = [icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - BOTTOM"]];
    sId["190200"] = [icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - MOORED"]];
    sId["190300"] = [
      icn["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - FLOATING"]
    ];
    sId["200000"] = [icn["SU.IC.ENVIRONMENTAL REPORT LOCATION"]];
    sId["210000"] = [icn["SU.IC.DIVE REPORT LOCATION"]];
  }
};

//var ms = require("../ms.js");

var iconsSeabedinstallations = function seabedinstallations(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Seabed Installations
  if (symbolSet == "39") {
    sId["110000"] = [icn["SU.IC.SEABED INSTALLATION, MAN-MADE, MILITARY"]];
    sId["120000"] = [icn["SU.IC.SEABED INSTALLATION, MAN-MADE, NON-MILITARY"]];
  }
};

var iconsActivites = function activites(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Adds support for Activities
  if (symbolSet == "40") {
    //sId['110000'] = 'Incident';
    sId["110100"] = [icn["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"]];
    sId["110101"] = [ms_1._scale(1.5, icn["ST.IC.ARREST"])];
    sId["110102"] = [icn["ST.IC.ARSON/FIRE"]];
    sId["110103"] = [
      icn["ST.IC.INDIVIDUAL"],
      icn["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]
    ];
    sId["110104"] = [icn["ST.IC.DRIVE-BY SHOOTING"]];
    sId["110105"] = [icn["ST.IC.DRUG RELATED ACTIVITIES"]];
    sId["110106"] = [icn["ST.IC.EXTORTION"]];
    sId["110107"] = [icn["ST.IC.GRAFFITI"]];
    sId["110108"] = [icn["ST.IC.KILLING VICTIM"]];
    sId["110109"] = [icn["ST.IC.POISONING"]];
    sId["110110"] = [icn["ST.IC.RIOT"]];
    sId["110111"] = [ms_1._scale(1.5, icn["ST.IC.BOOBY TRAP"])];
    sId["110112"] = [icn["ST.IC.HOUSE"], icn["ST.M1.EVICTION"]];
    sId["110113"] = [icn["ST.IC.BLACK MARKETING"]];
    sId["110114"] = [icn["ST.IC.VANDALISM/LOOT/RANSACK/PLUNDER/SACK"]];
    sId["110115"] = [icn["GR.IC.FF.JAIL BREAK"]];
    sId["110116"] = [icn["ST.IC.ROBBERY"]];
    sId["110117"] = [icn["ST.IC.THEFT"]];
    sId["110118"] = [icn["ST.IC.BURGLARY"]];
    sId["110119"] = [icn["ST.IC.SMUGGLING"]];
    sId["110120"] = [icn["ST.IC.ROCK THROWING"]];
    sId["110121"] = [icn["ST.IC.COMPOSITE LOSS"], icn["ST.M1.DEAD BODY"]];
    sId["110122"] = [icn["ST.IC.SABOTAGE"]];
    sId["110123"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.8, icn["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"])
      ),
      icn["AC.M1.THREAT"]
    ];
    sId["110200"] = [icn["ST.IC.BOMB"]];
    sId["110201"] = [icn["ST.IC.BOMB"], icn["AC.M1.THREAT"]];
    sId["110300"] = [icn["ST.IC.IED"]];
    sId["110301"] = [icn["ST.IC.EXPLOSION"], icn["ST.IC.IED"]];
    sId["110302"] = [
      ms_1._translate(
        0,
        15,
        ms_1._scale(0.7, [icn["ST.IC.EXPLOSION"], icn["ST.IC.IED"]])
      ),
      icn["ST.M1.PREMATURE"]
    ];
    sId["110303"] = [icn["ST.IC.IED"], icn["GR.IC.FF.SUPPLY"]];
    sId["110304"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.IED"]];
    sId["110400"] = [icn["AC.IC.SHOOTING"]];
    sId["110401"] = [icn["ST.IC.SNIPING"]];
    sId["110500"] = [icn["ST.IC.ILLEGAL DRUG OPERATION"]];
    sId["110501"] = [
      icn["ST.IC.ILLEGAL DRUG OPERATION"],
      icn["ST.M1.TRAFFICKING"]
    ];
    sId["110502"] = [
      icn["ST.IC.ILLEGAL DRUG OPERATION"],
      icn["ST.M1.LABRATORY"]
    ];
    sId["110600"] = [icn["ST.IC.EXPLOSION"]];
    sId["110601"] = [icn["ST.IC.EXPLOSION"], icn["ST.IC.GRENADE"]];
    sId["110602"] = [icn["ST.IC.EXPLOSION"], icn["ST.IC.INCENDIARY"]];
    sId["110603"] = [icn["ST.IC.EXPLOSION"], icn["ST.IC.MINE"]];
    sId["110604"] = [
      icn["ST.IC.EXPLOSION"],
      ms_1._scale(0.6, icn["GR.EQ.MORTAR"])
    ];
    sId["110605"] = [
      icn["ST.IC.EXPLOSION"],
      ms_1._scale(0.6, icn["GR.EQ.SINGLE ROCKET LAUNCHER"])
    ];
    sId["110606"] = [ms_1._scale(0.7, icn["ST.IC.BOMB"]), icn["ST.IC.EXPLOSION"]];
    sId["120000"] = [icn["AC.IC.CRIMINAL.CIVIL DISTURBANCE"]];
    sId["120100"] = [icn["ST.IC.DEMONSTRATION"]];
    //sId['130000'] = 'Operation';
    sId["130100"] = [icn["ST.IC.PATROLLING"]];
    sId["130200"] = [icn["ST.IC.PSYCHOLOGICAL OPERATIONS"]];
    sId["130201"] = [
      icn["ST.IC.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS"]
    ];
    sId["130300"] = [icn["ST.IC.SEARCHING"]];
    //sId['130400'] = 'Operation.Recruitment';
    sId["130401"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.WILLING"]];
    sId["130402"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.COERCED/IMPRESSED"]];
    sId["130500"] = [icn["ST.IC.MINE LAYING"]];
    sId["130600"] = [icn["ST.IC.SPY"]];
    sId["130700"] = [icn["ST.IC.WARRANT SERVED"]];
    sId["130800"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.EXFILTRATION"]];
    sId["130900"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.INFILTRATION"]];
    sId["131000"] = [icn["ST.IC.GROUP"], icn["ST.M1.MEETING"]];
    sId["131001"] = [icn["ST.IC.POLLING PLACE/ELECTION"]];
    sId["131100"] = [icn["ST.IC.HOUSE"], icn["ST.M1.RAID"]];
    sId["131200"] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
    sId["131201"] = [
      ms_1._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
      icn["AC.M1.EMERGENCY COLLECTION EVACUATION POINT"]
    ];
    sId["131202"] = [icn["ST.IC.FOOD DISTRIBUTION"]];
    sId["131203"] = [
      ms_1._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
      icn["AC.M1.EMERGENCY INCIDENT COMMAND CENTER"]
    ];
    sId["131204"] = [
      ms_1._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
      icn["AC.M1.EMERGENCY OPERATIONS CENTER"]
    ];
    sId["131205"] = [icn["AC.IC.EMERGENCY PUBLIC INFORMATION CENTER"]];
    sId["131206"] = [
      ms_1._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
      icn["AC.M1.EMERGENCY SHELTER"]
    ];
    sId["131207"] = [
      ms_1._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
      icn["AC.M1.EMERGENCY STAGING AREA"]
    ];
    sId["131208"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.WATER"]];
    sId["131300"] = [icn["GR.IC.EMERGENCY MEDICAL OPERATION"]];
    sId["131301"] = [icn["AC.IC.EMT STATION LOCATION"]];
    sId["131302"] = [icn["AC.IC.HEALTH DEPARTMENT FACILITY"]];
    sId["131303"] = [icn["AC.IC.MEDICAL FACILITIES OUTPATIENT"]];
    sId["131304"] = [icn["AC.IC.OPERATION/EMERGENCY MEDICAL OPERATION"]];
    sId["131305"] = [icn["AC.IC.PHARMACY"]];
    sId["131306"] = [icn["AC.IC.TRIAGE"]];
    sId["131400"] = [icn["GR.IC.FIRE PROTECTION"]];
    sId["131401"] = [icn["AC.IC.FIRE HYDRANT"]];
    sId["131402"] = [ms_1._scale(1.5, icn["GR.IC.FIRE PROTECTION"])];
    sId["131403"] = [icn["AC.IC.OTHER WATER SUPPLY LOCATION"]];
    sId["131500"] = [icn["GR.IC.FF.LAW ENFORCEMENT"]];
    sId["131501"] = [
      icn[
        "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
      ]
    ];
    sId["131502"] = [icn["GR.IC.FF.BORDER PATROL"]];
    sId["131503"] = [icn["GR.IC.FF.CUSTOMS SERVICE"]];
    sId["131504"] = [icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]];
    sId["131505"] = [icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]];
    sId["131506"] = [icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]];
    sId["131507"] = [icn["GR.IC.LAW ENFORCEMENT"]];
    sId["131508"] = [icn["GR.IC.FF.PRISON"]];
    sId["131509"] = [icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]];
    sId["131510"] = [icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]];
    sId["131511"] = [icn["SE.IC.LAW ENFORCEMENT VESSEL"]];
    sId["131512"] = [icn["GR.IC.FF.US MARSHALS SERVICE"]];
    sId["131513"] = [icn["ST.IC.INTERNAL SECURITY FORCE"]];
    sId["140000"] = [icn["AC.IC.FIRE EVENT"]];
    sId["140100"] = [icn["AC.IC.FIRE ORIGIN"]];
    sId["140200"] = [icn["AC.IC.SMOKE"]];
    sId["140300"] = [icn["AC.IC.HOT SPOT"]];
    sId["140400"] = [icn["AC.IC.NON-REsIdENTIAL FIRE"]];
    sId["140500"] = [icn["AC.IC.REsIdENTIAL FIRE"]];
    sId["140600"] = [icn["AC.IC.SCHOOL FIRE"]];
    sId["140700"] = [icn["AC.IC.SPECIAL NEEDS FIRE"]];
    sId["140800"] = [icn["AC.IC.WILD FIRE"]];
    //sId['150000'] = 'Hazardous Materials';
    sId["150100"] = [icn["AC.IC.HAZARDOUS MATERIALS INCIDENT"]];
    sId["150101"] = [icn["AC.IC.CHEMICAL AGENT"]];
    sId["150102"] = [icn["AC.IC.CORROSIVE MATERIAL"]];
    sId["150103"] = [icn["AC.IC.HAZARDOUS WHEN WET"]];
    sId["150104"] = [icn["AC.IC.EXPLOSIVE MATERIAL"]];
    sId["150105"] = [icn["AC.IC.FLAMMABLE GAS"]];
    sId["150106"] = [icn["AC.IC.FLAMMABLE LIQUID"]];
    sId["150107"] = [icn["AC.IC.FLAMMABLE SOLID"]];
    sId["150108"] = [icn["AC.IC.NON-FLAMMABLE GAS"]];
    sId["150109"] = [icn["AC.IC.ORGANIC PEROXIDE"]];
    sId["150110"] = [icn["AC.IC.OXIDIZER"]];
    sId["150111"] = [icn["AC.IC.RADIOACTIVE MATERIAL"]];
    sId["150112"] = [icn["AC.IC.SPONTANEOUSLY COMBUSTIBLE MATERIAL"]];
    sId["150113"] = [icn["AC.IC.TOXIC GAS"]];
    sId["150114"] = [icn["AC.IC.TOXIC INFECTIOUS MATERIAL"]];
    sId["150115"] = [icn["AC.IC.UNEXPLODED ORDNANCE"]];
    sId["160000"] = [icn["GR.IC.TRANSPORTATION"]];
    sId["160100"] = [icn["ST.IC.HIJACKING (AIRPLANE)"]];
    sId["160200"] = [icn["ST.IC.HIJACKING (BOAT)"]];
    sId["160300"] = [icn["GR.EQ.TRAIN LOCOMOTIVE"]];
    sId["160400"] = [icn["ST.IC.KNOWN INSURGENT VEHICLE"]];
    sId["160500"] = [
      icn["ST.IC.EXPLOSION"],
      ms_1._scale(0.7, icn["ST.IC.KNOWN INSURGENT VEHICLE"])
    ];
    sId["170000"] = [icn["ST.IC.NATURAL EVENT"]];
    sId["170100"] = [icn["ST.IC.GEOLOGIC"]];
    sId["170101"] = [icn["AC.IC.AFTERSHOCK"]];
    sId["170102"] = [icn["AC.IC.AVALANCHE"]];
    sId["170103"] = [icn["AC.IC.EARTHQUAKE EPICENTER"]];
    sId["170104"] = [icn["AC.IC.LANDSLIDE"]];
    sId["170105"] = [icn["AC.IC.SUBSIDENCE"]];
    sId["170106"] = [icn["AC.IC.VOLCANIC ERUPTION"]];
    sId["170107"] = [icn["AC.IC.VOLCANIC THREAT"]];
    sId["170108"] = [icn["AC.IC.CAVE ENTRANCE"]];
    sId["170200"] = [icn["ST.IC.HYDRO-METEOROLOGICAL"]];
    sId["170201"] = [icn["AC.IC.DROUGHT"]];
    sId["170202"] = [icn["AC.IC.FLOOD"]];
    sId["170203"] = [icn["AC.IC.TSUNAMI"]];
    sId["170300"] = [icn["ST.IC.INFESTATION"]];
    sId["170301"] = [icn["AC.IC.BIRD"]];
    sId["170302"] = [icn["AC.IC.INSECT"]];
    sId["170303"] = [icn["AC.IC.MICROBIAL"]];
    sId["170304"] = [icn["AC.IC.REPTILE"]];
    sId["170305"] = [icn["AC.IC.RODENT"]];
    //sId['180000'] = 'Individual';
    sId["180100"] = [
      icn["ST.IC.INDIVIDUAL"],
      icn["ST.M1.LEADER"],
      icn["ST.M2.RELIGIOUS"]
    ];
    sId["180200"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.SPEAKER"]];

    //sIdm1['00'] = 'Unspecified';
    sIdm1["01"] = [icn["ST.M1.ASSASSINATION"]];
    sIdm1["02"] = [icn["ST.M1.EXECUTION (WRONGFUL KILLING)"]];
    sIdm1["03"] = [icn["ST.M1.HIJACKING/HIJACKED"]];
    sIdm1["04"] = [icn["ST.M1.HOUSE-TO-HOUSE"]];
    sIdm1["05"] = [icn["ST.M1.KIDNAPPING"]];
    sIdm1["06"] = [icn["ST.M1.MURDER"]];
    sIdm1["07"] = [icn["ST.M1.PIRACY"]];
    sIdm1["08"] = [icn["ST.M1.RAPE"]];
    sIdm1["09"] = [icn["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"]];
    sIdm1["10"] = [icn["ST.M1.PIRATE"]];
    sIdm1["11"] = [icn["ST.M1.FALSE"]];
    sIdm1["12"] = [icn["ST.M1.FIND"]];
    sIdm1["13"] = [icn["ST.M1.FOUND AND CLEARED"]];
    sIdm1["14"] = [icn["ST.M1.HOAX (DECOY)"]];
    sIdm1["15"] = [icn["ST.M1.ATTEMPTED"]];
    sIdm1["16"] = [icn["ST.M1.ACCIDENT"]];
    sIdm1["17"] = [icn["ST.M1.INCIDENT"]];
    sIdm1["18"] = [icn["ST.M1.THEFT"]];
  }
};

ms_1.addIconParts(signalsIntelligence);

var iconsSignalsintelligence = function signalsintelligence(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Adds support for Signals Intelligence
  if (
    symbolSet == "50" ||
    symbolSet == "51" ||
    symbolSet == "52" ||
    symbolSet == "53" ||
    symbolSet == "54"
  ) {
    //sId['110000'] = 'Signal Intercept';
    sId["110100"] = [icn["SI.IC.COMMUNICATIONS"]];
    sId["110200"] = [icn["AR.I.JAMMER / ELECTRONIC COUNTER-MEASURES"]];
    sId["110300"] = [icn["SI.IC.RADAR"]];

    //sIdm1['00'] = 'Unspecified';
    sIdm1["01"] = [icn["SI.M1.ANTI-AIRCRAFT FIRE CONTROL"]];
    sIdm1["02"] = [icn["SI.M1.AIRBORNE SEARCH AND BOMBING"]];
    sIdm1["03"] = [icn["SI.M1.AIRBORNE INTERCEPT"]];
    sIdm1["04"] = [icn["SI.M1.ALTIMETER"]];
    sIdm1["05"] = [icn["SI.M1.AIRBORNE RECONNAISSANCE AND MAPPING"]];
    sIdm1["06"] = [icn["SI.M1.AIR TRAFFIC CONTROL"]];
    sIdm1["07"] = [icn["SI.M1.BEACON TRANSPONDER (NOT IFF)"]];
    sIdm1["08"] = [icn["SI.M1.BATTLEFIELD SURVEILLANCE"]];
    sIdm1["09"] = [icn["SI.M1.CONTROLLED APPROACH"]];
    sIdm1["10"] = [icn["SI.M1.CONTROLLED INTERCEPT"]];
    sIdm1["11"] = [icn["SI.M1.CELLULAR/MOBILE"]];
    sIdm1["12"] = [icn["SI.M1.COASTAL SURVEILLANCE"]];
    sIdm1["13"] = [icn["SI.M1.DECOY/MIMIC"]];
    sIdm1["14"] = [icn["SI.M1.DATA TRANSMISSION"]];
    sIdm1["15"] = [icn["SI.M1.EARTH SURVEILLANCE"]];
    sIdm1["16"] = [icn["SI.M1.EARLY WARNING"]];
    sIdm1["17"] = [icn["SI.M1.FIRE CONTROL"]];
    sIdm1["18"] = [icn["SI.M1.GROUND MAPPING"]];
    sIdm1["19"] = [icn["SI.M1.HEIGHT FINDING"]];
    sIdm1["20"] = [icn["SI.M1.HARBOR SURVEILLANCE"]];
    sIdm1["21"] = [icn["SI.M1.IDENTIFICATION, FRIEND OR FOE (INTERROGATOR)"]];
    sIdm1["22"] = [icn["SI.M1.INSTRUMENT LANDING SYSTEM"]];
    sIdm1["23"] = [icn["SI.M1.IONOSPHERIC SOUNDING"]];
    sIdm1["24"] = [icn["SI.M1.IDENTIFICATION, FRIEND OR FOE (TRANSPONDER)"]];
    sIdm1["25"] = [icn["SI.M1.BARRAGE JAMMER"]];
    sIdm1["26"] = [icn["SI.M1.CLICK JAMMER"]];
    sIdm1["27"] = [icn["SI.M1.DECEPTIVE JAMMER"]];
    sIdm1["28"] = [icn["SI.M1.FREQUENCY SWEPT JAMMER"]];
    sIdm1["29"] = [icn["SI.M1.JAMMER (GENERAL)"]];
    sIdm1["30"] = [icn["SI.M1.NOISE JAMMER"]];
    sIdm1["31"] = [icn["SI.M1.PULSED JAMMER"]];
    sIdm1["32"] = [icn["SI.M1.REPEATER JAMMER"]];
    sIdm1["33"] = [icn["SI.M1.SPOT NOISE JAMMER"]];
    sIdm1["34"] = [icn["SI.M1.TRANSPONDER JAMMER"]];
    sIdm1["35"] = [icn["SI.M1.MISSILE ACQUISITION"]];
    sIdm1["36"] = [icn["SI.M1.MISSILE CONTROL"]];
    sIdm1["37"] = [icn["SI.M1.MISSILE DOWNLINK"]];
    sIdm1["38"] = [icn["SI.M1.METEOROLOGICAL"]];
    sIdm1["39"] = [icn["SI.M1.MULTI-FUNCTION"]];
    sIdm1["40"] = [icn["SI.M1.MISSILE GUIDANCE"]];
    sIdm1["41"] = [icn["SI.M1.MISSILE HOMING"]];
    sIdm1["42"] = [icn["SI.M1.MISSILE TRACKING"]];
    sIdm1["43"] = [icn["SI.M1.NAVIGATIONAL/GENERAL"]];
    sIdm1["44"] = [icn["SI.M1.NAVIGATIONAL/DISTANCE MEASURING EQUIPMENT"]];
    sIdm1["45"] = [icn["SI.M1.NAVIGATION/TERRAIN FOLLOWING"]];
    sIdm1["46"] = [icn["SI.M1.NAVIGATIONAL/WEATHER AVOIDANCE"]];
    sIdm1["47"] = [icn["SI.M1.OMNI-LINE OF SIGHT (LOS)"]];
    sIdm1["48"] = [icn["SI.M1.PROXIMITY USE"]];
    sIdm1["49"] = [icn["SI.M1.POINT-TO-POINT LINE OF SIGHT (LOS)"]];
    sIdm1["50"] = [icn["SI.M1.INSTRUMENTATION"]];
    sIdm1["51"] = [icn["SI.M1.RANGE ONLY"]];
    sIdm1["52"] = [icn["SI.M1.SONOBUOY"]];
    sIdm1["53"] = [icn["SI.M1.SATELLITE DOWNLINK"]];
    sIdm1["54"] = [icn["SI.M1.SPACE"]];
    sIdm1["55"] = [icn["SI.M1.SURFACE SEARCH"]];
    sIdm1["56"] = [icn["SI.M1.SHELL TRACKING"]];
    sIdm1["57"] = [icn["SI.M1.SATELLITE UPLINK"]];
    sIdm1["58"] = [icn["SI.M1.TARGET ACQUISITION"]];
    sIdm1["59"] = [icn["SI.M1.TARGET ILLUMINATION"]];
    sIdm1["60"] = [icn["SI.M1.TROPOSPHERIC SCATTER"]];
    sIdm1["61"] = [icn["SI.M1.TARGET TRACKING"]];
    sIdm1["62"] = [icn["SI.M1.UNKNOWN"]];
    sIdm1["63"] = [icn["SI.M1.VIDEO REMOTING"]];
    sIdm1["64"] = [icn["SI.M1.EXPERIMENTAL"]];
  }
};

//var ms = require("../ms.js");

var iconsCyberspace = function cyberspace(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Adds support for Cyberspace
  if (symbolSet == "60") {
    //sId['110000'] = 'Botnet';
    sId["110100"] = [icn["CY.IC.COMMAND AND CONTROL (C2)"]];
    sId["110200"] = [icn["CY.IC.HERDER"]];
    sId["110300"] = [icn["CY.IC.CALLBACK DOMAIN"]];
    sId["110400"] = [icn["CY.IC.ZOMBIE"]];
    //sId['120000'] = 'Infection';
    sId["120100"] = [icn["CY.IC.ADVANCED PERSISTENT THREAT (APT)"]];
    sId["120101"] = [icn["CY.IC.APT WITH C2"]];
    sId["120102"] = [icn["CY.IC.APT WITH SELF PROPAGATION"]];
    sId["120103"] = [icn["CY.IC.APT WITH C2 AND SELF PROPAGATION"]];
    sId["120104"] = [icn["CY.IC.APT OTHER"]];
    sId["120200"] = [icn["CY.IC.NON-ADVANCED PERSISTENT THREAT (NAPT)"]];
    sId["120201"] = [icn["CY.IC.NAPT WITH C2"]];
    sId["120202"] = [icn["CY.IC.NAPT WITH SELF PROPAGATION"]];
    sId["120203"] = [icn["CY.IC.NAPT WITH C2 AND SELF PROPAGATION"]];
    sId["120204"] = [icn["CY.IC.NAPT OTHER"]];
    //sId['130000'] = 'Health and Status';
    sId["130100"] = [icn["CY.IC.NORMAL"]];
    sId["130200"] = [icn["CY.IC.NETWORK OUTAGE"]];
    sId["130300"] = [icn["CY.IC.UNKNOWN"]];
    sId["130400"] = [icn["CY.IC.IMPAIRED"]];
    //sId['140000'] = 'Device Type';
    sId["140100"] = [icn["CY.IC.CORE ROUTER"]];
    sId["140200"] = [icn["CY.IC.ROUTER"]];
    sId["140300"] = [icn["CY.IC.CROSS DOMAIN SOLUTION"]];
    sId["140400"] = [icn["CY.IC.MAIL SERVER"]];
    sId["140500"] = [icn["CY.IC.WEB SERVER"]];
    sId["140600"] = [icn["CY.IC.DOMAIN SERVER"]];
    sId["140700"] = [icn["CY.IC.FILE SERVER"]];
    sId["140800"] = [icn["CY.IC.PEER-TO-PEER NODE"]];
    sId["140900"] = [icn["CY.IC.FIREW ALL"]];
    sId["141000"] = [icn["CY.IC.SWITCH"]];
    sId["141100"] = [icn["CY.IC.HOST"]];
    sId["141200"] = [icn["CY.IC.VIRTUAL PRIVATE NETWORK (VPN)"]];
    //sId['150000'] = 'Device Domain';
    sId["150100"] = [icn["CY.IC.DEPARTMENT OF DEFENSE (DOD)"]];
    sId["150200"] = [icn["CY.IC.GOVERNMENT"]];
    sId["150300"] = [icn["CY.IC.CONTRACTOR"]];
    sId["150400"] = [
      icn["CY.IC.SUPERVISORY CONTROL AND DATA ACQUISITION (SCADA)"]
    ];
    sId["150500"] = [icn["CY.IC.NON-GOVERNMENT"]];
    //sId['160000'] = 'Effect';
    sId["160100"] = [icn["CY.IC.INFECTION"]];
    sId["160200"] = [icn["CY.IC.DEGRADATION"]];
    sId["160300"] = [icn["CY.IC.DATA SPOOFING"]];
    sId["160400"] = [icn["CY.IC.DATA MANIPULATION"]];
    sId["160500"] = [icn["CY.IC.EXFILTRATION"]];
    sId["160600"] = [icn["CY.IC.POWER OUTAGE"]];
    sId["160700"] = [icn["CY.IC.NETWORK OUTAGE"]];
    sId["160800"] = [icn["CY.IC.SERVICE OUTAGE"]];
    sId["160900"] = [icn["CY.IC.DEVICE OUTAGE"]];
  }
};

var iconsDismountedindividual = function dismounted(
  sId,
  sIdm1,
  sIdm2,
  bbox,
  symbolSet,
  icn,
  _STD2525
) {
  //Adds support for Dismounted Individual
  if (symbolSet == "27") {
    //sId['110000'] = [icn[']];
    //sId['110100'] = [icn['']];
    sId["110101"] = [icn["GR.IC.FF.INFANTRY DISMOUNTED"]];
    sId["110102"] = [icn["GR.IC.FF.MEDICAL DISMOUNTED"]];
    sId["110103"] = [icn["GR.IC.FF.RECONNAISSANCE DISMOUNTED"]];
    sId["110104"] = [icn["GR.IC.FF.SIGNAL DISMOUNTED"]];
    //sId['110200'] = [icn['']];
    sId["110201"] = [icn["GR.IC.EXPLOSIVE ORDNANCE DISPOSAL"]];
    sId["110202"] = [icn["GR.IC.FIELD ARTILLERY OBSERVER"]];
    sId["110203"] = [icn["GR.IC.JOINT FIRE SUPPORT"]];
    sId["110204"] = [icn["GR.IC.LIAISON"]];
    sId["110205"] = [icn["GR.IC.MESSENGER"]];
    sId["110206"] = [icn["GR.IC.MILITARY POLICE"]];
    sId["110207"] = [icn["GR.IC.OBSERVER/OBSERVATION"]];
    sId["110208"] = [icn["GR.IC.SECURITY"]];
    sId["110209"] = [icn["GR.IC.SNIPER"]];
    sId["110210"] = [icn["GR.IC.SPECIAL OPERATIONS FORCES"]];
    //sId['110300'] = [icn['']];
    sId["110301"] = [icn["GR.EQ.RIFLE"]];
    sId["110302"] = [ms_1._scale(0.5, icn["GR.EQ.RIFLE"])];
    sId["110303"] = [ms_1._translate(0, -10, ms_1._scale(0.7, icn["GR.EQ.RIFLE"]))];
    sId["110304"] = [ms_1._translate(0, 10, ms_1._scale(0.7, icn["GR.EQ.RIFLE"]))];
    sId["110305"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.SHORT RANGE"]];
    sId["110306"] = [
      ms_1._scale(0.5, [icn["GR.EQ.RIFLE"], icn["GR.EQ.SHORT RANGE"]])
    ];
    sId["110307"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [icn["GR.EQ.RIFLE"], icn["GR.EQ.SHORT RANGE"]])
      )
    ];
    sId["110308"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [icn["GR.EQ.RIFLE"], icn["GR.EQ.SHORT RANGE"]])
      )
    ];
    sId["110309"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.INTERMEDIATE RANGE"]];
    sId["110310"] = [
      ms_1._scale(0.5, [icn["GR.EQ.RIFLE"], icn["GR.EQ.INTERMEDIATE RANGE"]])
    ];
    sId["110311"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [icn["GR.EQ.RIFLE"], icn["GR.EQ.INTERMEDIATE RANGE"]])
      )
    ];
    sId["110312"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [icn["GR.EQ.RIFLE"], icn["GR.EQ.INTERMEDIATE RANGE"]])
      )
    ];
    sId["110313"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.LONG RANGE"]];
    sId["110314"] = [
      ms_1._scale(0.5, [icn["GR.EQ.RIFLE"], icn["GR.EQ.LONG RANGE"]])
    ];
    sId["110315"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [icn["GR.EQ.RIFLE"], icn["GR.EQ.LONG RANGE"]])
      )
    ];
    sId["110316"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [icn["GR.EQ.RIFLE"], icn["GR.EQ.LONG RANGE"]])
      )
    ];
    sId["110317"] = [icn["GR.EQ.MACHINE GUN"]];
    sId["110318"] = [ms_1._scale(0.5, [icn["GR.EQ.MACHINE GUN"]])];
    sId["110319"] = [
      ms_1._translate(0, -10, ms_1._scale(0.7, [icn["GR.EQ.MACHINE GUN"]]))
    ];
    sId["110320"] = [
      ms_1._translate(0, 10, ms_1._scale(0.7, [icn["GR.EQ.MACHINE GUN"]]))
    ];
    sId["110321"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.SHORT RANGE"]];
    sId["110322"] = [
      ms_1._scale(0.5, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.SHORT RANGE"]])
    ];
    sId["110323"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.SHORT RANGE"]])
      )
    ];
    sId["110324"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.SHORT RANGE"]])
      )
    ];
    sId["110325"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.INTERMEDIATE RANGE"]];
    sId["110326"] = [
      ms_1._scale(0.5, [
        icn["GR.EQ.MACHINE GUN"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ])
    ];
    sId["110327"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [
          icn["GR.EQ.MACHINE GUN"],
          icn["GR.EQ.INTERMEDIATE RANGE"]
        ])
      )
    ];
    sId["110328"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [
          icn["GR.EQ.MACHINE GUN"],
          icn["GR.EQ.INTERMEDIATE RANGE"]
        ])
      )
    ];
    sId["110329"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.LONG RANGE"]];
    sId["110330"] = [
      ms_1._scale(0.5, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.LONG RANGE"]])
    ];
    sId["110331"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.LONG RANGE"]])
      )
    ];
    sId["110332"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.LONG RANGE"]])
      )
    ];
    sId["110333"] = [icn["GR.EQ.GRENADE LAUNCHER"]];
    sId["110334"] = [ms_1._scale(0.5, [icn["GR.EQ.GRENADE LAUNCHER"]])];
    sId["110335"] = [
      ms_1._translate(0, -10, ms_1._scale(0.7, [icn["GR.EQ.GRENADE LAUNCHER"]]))
    ];
    sId["110336"] = [
      ms_1._translate(0, 10, ms_1._scale(0.7, [icn["GR.EQ.GRENADE LAUNCHER"]]))
    ];
    sId["110337"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms_1._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
    ];
    sId["110338"] = [
      ms_1._scale(0.5, [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms_1._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
      ])
    ];
    sId["110339"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms_1._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
        ])
      )
    ];
    sId["110340"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms_1._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
        ])
      )
    ];
    sId["110341"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms_1._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
    ];
    sId["110342"] = [
      ms_1._scale(0.5, [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms_1._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
      ])
    ];
    sId["110343"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms_1._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
        ])
      )
    ];
    sId["110344"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms_1._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
        ])
      )
    ];
    sId["110345"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms_1._translate(0, 20, icn["GR.EQ.LONG RANGE"])
    ];
    sId["110346"] = [
      ms_1._scale(0.5, [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms_1._translate(0, 20, icn["GR.EQ.LONG RANGE"])
      ])
    ];
    sId["110347"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms_1._translate(0, 20, icn["GR.EQ.LONG RANGE"])
        ])
      )
    ];
    sId["110348"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms_1._translate(0, 20, icn["GR.EQ.LONG RANGE"])
        ])
      )
    ];
    sId["110349"] = [icn["GR.EQ.FLAME THROWER"]];
    sId["110350"] = [ms_1._scale(0.5, [icn["GR.EQ.FLAME THROWER"]])];
    sId["110351"] = [
      ms_1._translate(0, -10, ms_1._scale(0.7, [icn["GR.EQ.FLAME THROWER"]]))
    ];
    sId["110352"] = [
      ms_1._translate(0, 10, ms_1._scale(0.7, [icn["GR.EQ.FLAME THROWER"]]))
    ];
    sId["110353"] = [icn["GR.EQ.MORTAR"]];
    sId["110354"] = [ms_1._scale(0.5, [icn["GR.EQ.MORTAR"]])];
    sId["110355"] = [
      ms_1._translate(0, -10, ms_1._scale(0.7, [icn["GR.EQ.MORTAR"]]))
    ];
    sId["110356"] = [
      ms_1._translate(0, 10, ms_1._scale(0.7, [icn["GR.EQ.MORTAR"]]))
    ];
    sId["110357"] = [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]];
    sId["110358"] = [ms_1._scale(0.5, [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]])];
    sId["110359"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]])
      )
    ];
    sId["110360"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]])
      )
    ];
    sId["110361"] = [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]];
    sId["110362"] = [ms_1._scale(0.5, [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]])];
    sId["110363"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]])
      )
    ];
    sId["110364"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]])
      )
    ];
    sId["110400"] = [icn[""]];
    sId["110401"] = [icn["GR.EQ.NON-LETHAL WEAPON"]];
    sId["110402"] = [ms_1._scale(0.5, [icn["GR.EQ.NON-LETHAL WEAPON"]])];
    sId["110403"] = [
      ms_1._translate(0, -10, ms_1._scale(0.7, [icn["GR.EQ.NON-LETHAL WEAPON"]]))
    ];
    sId["110404"] = [
      ms_1._translate(0, 10, ms_1._scale(0.7, [icn["GR.EQ.NON-LETHAL WEAPON"]]))
    ];
    sId["110405"] = [icn["GR.EQ.NON-LETHAL GRENADE LAUNCHER"]];
    sId["110406"] = [
      ms_1._scale(0.5, [icn["GR.EQ.NON-LETHAL GRENADE LAUNCHER"]])
    ];
    sId["110407"] = [
      ms_1._translate(
        0,
        -10,
        ms_1._scale(0.7, [icn["GR.EQ.NON-LETHAL GRENADE LAUNCHER"]])
      )
    ];
    sId["110408"] = [
      ms_1._translate(
        0,
        10,
        ms_1._scale(0.7, [icn["GR.EQ.NON-LETHAL GRENADE LAUNCHER"]])
      )
    ];
    sId["110409"] = [icn["GR.EQ.TASER"]];
    sId["110410"] = [ms_1._scale(0.5, [icn["GR.EQ.TASER"]])];
    sId["110411"] = [
      ms_1._translate(0, -10, ms_1._scale(0.7, [icn["GR.EQ.TASER"]]))
    ];
    sId["110412"] = [
      ms_1._translate(0, 10, ms_1._scale(0.7, [icn["GR.EQ.TASER"]]))
    ];
    //sId['120000'] = [icn['']];
    //sId['120100'] = [icn['']];
    sId["120101"] = [icn["GR.IC.LAW ENFORCEMENT"]];

    //sIdm1['00'] = [icn['']];
    sIdm1["01"] = [icn["GR.M1.BATTALION"]];
    sIdm1["02"] = [icn["GR.M1.BRIGADE"]];
    sIdm1["03"] = [icn["GR.M1.COMPANY"]];
    sIdm1["04"] = [icn["GR.M1.CLOSE PROTECTION"]];
    sIdm1["05"] = [icn["GR.M1.CROWD AND RIOT CONTROL"]];
    sIdm1["06"] = [icn["GR.M1.DEPUTY"]];
    sIdm1["07"] = [icn["GR.M1.DIVISION"]];
    sIdm1["08"] = [icn["GR.M1.EXPLOSIVE ORDNANCE DISPOSAL"]];
    sIdm1["09"] = [icn["GR.M1.J1"]];
    sIdm1["10"] = [icn["GR.M1.J2"]];
    sIdm1["11"] = [icn["GR.M1.J3"]];
    sIdm1["12"] = [icn["GR.M1.J4"]];
    sIdm1["13"] = [icn["GR.M1.J5"]];
    sIdm1["14"] = [icn["GR.M1.J6"]];
    sIdm1["15"] = [icn["GR.M1.J7"]];
    sIdm1["16"] = [icn["GR.M1.J8"]];
    sIdm1["17"] = [icn["GR.M1.J9"]];
    sIdm1["18"] = [icn["ST.M1.GOVERNMENT ORGANIZATION"]];
    sIdm1["19"] = [icn["ST.M1.LEADER"]];
    sIdm1["20"] = [icn["GR.M1.MULTINATIONAL"]];
    sIdm1["21"] = [icn["GR.M1.MULTINATIONAL SPECIALIZED UNIT"]];
    sIdm1["22"] = [icn["ST.M1.NONGOVERNMENTAL ORGANIZATION (NGO)"]];
    sIdm1["23"] = [icn["GR.M1.PLATOON"]];
    sIdm1["24"] = [icn["GR.M1.OF-1"]];
    sIdm1["25"] = [icn["GR.M1.OF-2"]];
    sIdm1["26"] = [icn["GR.M1.OF-3"]];
    sIdm1["27"] = [icn["GR.M1.OF-4"]];
    sIdm1["28"] = [icn["GR.M1.OF-5"]];
    sIdm1["29"] = [icn["GR.M1.OF-6"]];
    sIdm1["30"] = [icn["GR.M1.OF-7"]];
    sIdm1["31"] = [icn["GR.M1.OF-8"]];
    sIdm1["32"] = [icn["GR.M1.OF-9"]];
    sIdm1["33"] = [icn["GR.M1.OF-10"]];
    sIdm1["34"] = [icn["GR.M1.OF-D"]];
    sIdm1["35"] = [icn["GR.M1.OR-1"]];
    sIdm1["36"] = [icn["GR.M1.OR-2"]];
    sIdm1["37"] = [icn["GR.M1.OR-3"]];
    sIdm1["38"] = [icn["GR.M1.OR-4"]];
    sIdm1["39"] = [icn["GR.M1.OR-5"]];
    sIdm1["40"] = [icn["GR.M1.OR-6"]];
    sIdm1["41"] = [icn["GR.M1.OR-7"]];
    sIdm1["42"] = [icn["GR.M1.OR-8"]];
    sIdm1["43"] = [icn["GR.M1.OR-9"]];
    sIdm1["44"] = [icn["GR.M1.WO-1"]];
    sIdm1["45"] = [icn["GR.M1.WO-2"]];
    sIdm1["46"] = [icn["GR.M1.WO-3"]];
    sIdm1["47"] = [icn["GR.M1.WO-4"]];
    sIdm1["48"] = [icn["GR.M1.WO-5"]];
    sIdm1["49"] = [icn["GR.M1.REGIMENT"]];
    sIdm1["50"] = [icn["GR.M1.SECTION"]];
    sIdm1["51"] = [icn["GR.M1.SECURITY"]];
    sIdm1["52"] = [icn["GR.M1.SNIPER"]];
    sIdm1["53"] = [icn["GR.M1.SPECIAL WEAPONS AND TACTICS"]];
    sIdm1["54"] = [icn["GR.M1.SQUAD"]];
    sIdm1["55"] = [icn["GR.M1.TEAM"]];
    sIdm1["56"] = [icn["GR.M1.VIDEO IMAGERY"]];

    //sIdm2['00'] = [icn['']];
    sIdm2["01"] = [icn["GR.M2.AIRBORNE"]];
    sIdm2["02"] = [icn["GR.M2.BICYCLE EQUIPPED"]];
    sIdm2["03"] = [icn["GR.M2.DEMOLITION"]];
    sIdm2["04"] = [icn["GR.M2.J1"]];
    sIdm2["05"] = [icn["GR.M2.J2"]];
    sIdm2["06"] = [icn["GR.M2.J3"]];
    sIdm2["07"] = [icn["GR.M2.J4"]];
    sIdm2["08"] = [icn["GR.M2.J5"]];
    sIdm2["09"] = [icn["GR.M2.J6"]];
    sIdm2["10"] = [icn["GR.M2.J7"]];
    sIdm2["11"] = [icn["GR.M2.J8"]];
    sIdm2["12"] = [icn["GR.M2.J9"]];
    sIdm2["13"] = [icn["GR.M2.MOUNTAIN"]];
    sIdm2["14"] = [icn["GR.M2.OF-1"]];
    sIdm2["15"] = [icn["GR.M2.OF-2"]];
    sIdm2["16"] = [icn["GR.M2.OF-3"]];
    sIdm2["17"] = [icn["GR.M2.OF-4"]];
    sIdm2["18"] = [icn["GR.M2.OF-5"]];
    sIdm2["19"] = [icn["GR.M2.OF-6"]];
    sIdm2["20"] = [icn["GR.M2.OF-7"]];
    sIdm2["21"] = [icn["GR.M2.OF-8"]];
    sIdm2["22"] = [icn["GR.M2.OF-9"]];
    sIdm2["23"] = [icn["GR.M2.OF-10"]];
    sIdm2["24"] = [icn["GR.M2.OF-D"]];
    sIdm2["25"] = [icn["GR.M2.OR-1"]];
    sIdm2["26"] = [icn["GR.M2.OR-2"]];
    sIdm2["27"] = [icn["GR.M2.OR-3"]];
    sIdm2["28"] = [icn["GR.M2.OR-4"]];
    sIdm2["29"] = [icn["GR.M2.OR-5"]];
    sIdm2["30"] = [icn["GR.M2.OR-6"]];
    sIdm2["31"] = [icn["GR.M2.OR-7"]];
    sIdm2["32"] = [icn["GR.M2.OR-8"]];
    sIdm2["33"] = [icn["GR.M2.OR-9"]];
    sIdm2["34"] = [icn["GR.M2.WO-1"]];
    sIdm2["35"] = [icn["GR.M2.WO-2"]];
    sIdm2["36"] = [icn["GR.M2.WO-3"]];
    sIdm2["37"] = [icn["GR.M2.WO-4"]];
    sIdm2["38"] = [icn["GR.M2.WO-5"]];
    sIdm2["39"] = [icn["GR.M2.SKI"]];
  }
};

//Base Geometry for the Symbol ###########################################################


var basegeometry = function basegeometry() {
  var modifier;
  var drawArray1 = [];
  var drawArray2 = [];
  var frameColor = this.colors.frameColor[this.properties.affiliation];

  //If unframed but with icon, then just return.
  if (!this.properties.frame && this.style.icon) {
    return [];
  }

  //Clone the base geometry
  var geom = { type: this.properties.baseGeometry.g.type };
  switch (geom.type) {
    case "path":
      geom.d = this.properties.baseGeometry.g.d;
      break;
    case "circle":
      geom.cx = this.properties.baseGeometry.g.cx;
      geom.cy = this.properties.baseGeometry.g.cy;
      geom.r = this.properties.baseGeometry.g.r;
  }
  geom.fill = this.colors.fillColor[this.properties.affiliation];
  geom.fillopacity = this.style.fillOpacity;
  geom.stroke = frameColor;
  geom.strokewidth = this.style.size >= 10 ? this.style.strokeWidth : 10;
  //outline
  if (this.style.frame && this.style.outlineWidth > 0) {
    var outline;
    if (geom.type == "path" && this.style.fill && !this.style.monoColor) {
      outline = { type: this.properties.baseGeometry.g.type };
      outline.d = this.properties.baseGeometry.g.d + " Z"; //Making sure the path is closed
      outline.strokewidth = this.style.size >= 10 ? this.style.strokeWidth : 10;
    } else {
      outline = geom;
    }
    drawArray1.push(
      ms_1.outline(
        outline,
        this.style.outlineWidth,
        this.style.strokeWidth,
        this.style.outlineColor
      )
    );
  }
  //Add a dashed outline to the frame if we are using monocolor and the status is not present.
  if (
    (this.style.monoColor != "" || !this.style.fill) &&
    this.properties.notpresent
  )
    geom.strokedasharray = this.properties.notpresent;
  drawArray2.push(geom);

  // Dismounted Individual
  /*
  if (this.properties.dismounted) {
    modifier = {
      Neutral: {
        type: "path",
        stroke: false,
        fill: frameColor,
        d:
          "M 92.6 140.1 L 92.6 151.6 L 100 155 L 108 151.3 L 108 140.1 L 92.6 140.1 z "
      },
      Unknown: {
        type: "path",
        stroke: false,
        fill: frameColor,
        d:
          "M 92.5 147.1 L 92.5 156.5 L 99.8 162 L 107.5 156.3 L 107.5 147.1 L 92.5 147.1 z "
      }
    };
    if (modifier.hasOwnProperty(this.properties.affiliation))
      drawArray2.push(modifier[this.properties.affiliation]);
  }
  //*/
  // Space Modifiers
  if (this.properties.space) {
    modifier = {
      Friend: {
        type: "path",
        stroke: false,
        fill: frameColor,
        d:
          "M 100,30 C 90,30 80,35 68.65625,50 l 62.6875,0 C 120,35 110,30 100,30"
      },
      Hostile: {
        type: "path",
        stroke: false,
        fill: frameColor,
        d: "M67,50 L100,20 133,50 z"
      },
      Neutral: {
        type: "path",
        stroke: false,
        fill: frameColor,
        d: "M45,50 l0,-20 110,0 0,20 z"
      },
      Unknown: {
        type: "path",
        stroke: false,
        fill: frameColor,
        d:
          "M 100 22.5 C 85 22.5 70 31.669211 66 50 L 134 50 C 130 31.669204 115 22.5 100 22.5 z"
      }
    };
    drawArray2.push(modifier[this.properties.affiliation]);
  }
  // Modifiers for activity.
  if (this.properties.activity) {
    modifier = {
      Friend: {
        type: "path",
        stroke: false,
        fill: frameColor,
        d:
          "m 160,135 0,15 15,0 0,-15 z m -135,0 15,0 0,15 -15,0 z m 135,-85 0,15 15,0 0,-15 z m -135,0 15,0 0,15 -15,0 z"
      },
      Hostile: {
        type: "path",
        stroke: false,
        fill: frameColor,
        d:
          "M 100 28 L 89.40625 38.59375 L 100 49.21875 L 110.59375 38.59375 L 100 28 z M 38.6875 89.3125 L 28.0625 99.9375 L 38.6875 110.53125 L 49.28125 99.9375 L 38.6875 89.3125 z M 161.40625 89.40625 L 150.78125 100 L 161.40625 110.59375 L 172 100 L 161.40625 89.40625 z M 99.9375 150.71875 L 89.3125 161.3125 L 99.9375 171.9375 L 110.53125 161.3125 L 99.9375 150.71875"
      },
      Neutral: {
        type: "path",
        stroke: false,
        fill: frameColor,
        d:
          "m 140,140 15,0 0,15 -15,0 z m -80,0 0,15 -15,0 0,-15 z m 80,-80 0,-15 15,0 0,15 z m -80,0 -15,0 0,-15 15,0 z"
      },
      Unknown: {
        type: "path",
        stroke: false,
        fill: frameColor,
        d:
          "M 107.96875 31.46875 L 92.03125 31.71875 L 92.03125 46.4375 L 107.71875 46.4375 L 107.96875 31.46875 z M 47.03125 92.5 L 31.09375 92.75 L 31.09375 107.5 L 46.78125 107.5 L 47.03125 92.5 z M 168.4375 92.5 L 152.5 92.75 L 152.5 107.5 L 168.1875 107.5 L 168.4375 92.5 z M 107.96875 153.5625 L 92.03125 153.8125 L 92.03125 168.53125 L 107.71875 168.53125 L 107.96875 153.5625 z"
      }
    };
    drawArray2.push(modifier[this.properties.affiliation]);
  }
  //Add a dashed outline to the frame if the status is not present.
  if (
    this.style.fill &&
    this.style.frame &&
    this.properties.notpresent &&
    !this.properties.unframed
  ) {
    //Clone the base geometry
    geom = { type: this.properties.baseGeometry.g.type };
    switch (geom.type) {
      case "path":
        geom.d = this.properties.baseGeometry.g.d;
        break;
      case "circle":
        geom.cx = this.properties.baseGeometry.g.cx;
        geom.cy = this.properties.baseGeometry.g.cy;
        geom.r = this.properties.baseGeometry.g.r;
    }
    geom.fill = false;
    geom.stroke = this.colors.white[this.properties.affiliation];
    geom.strokewidth = parseFloat(this.style.strokeWidth) + 1;
    geom.strokedasharray = this.properties.notpresent;
    drawArray2.push(geom);
  }
  return {
    pre: drawArray1,
    post: drawArray2,
    bbox: this.properties.baseGeometry.bbox
  };
};

//Icon ##################################################################################


var icon = function icon() {
  var drawArray1 = [];
  var drawArray2 = [];
  var gbbox = new ms_1.BBox({ x1: 50, x2: 150, y1: 50, y2: 150 });
  var icons, iconColor;

  //This is the building blocks we use to create icons
  var iconParts = [];
  //Main icon
  //var icon = [];
  //Modifier 1 used in number based SIDCs
  var m1 = [];
  //Modifier 2 used in number based SIDCs
  var m2 = [];
  //Boundingboxes other than normal
  var specialbbox = [];

  if (this.style.icon) {
    var fillColor = this.colors.fillColor[this.properties.affiliation];
    //So we don't happend to use civilian colors
    var neutralColor = this.colors.fillColor.Neutral;
    iconColor = this.colors.iconColor[this.properties.affiliation];
    var iconFillColor = this.colors.iconFillColor[this.properties.affiliation];
    var none = this.colors.none[this.properties.affiliation];
    var black = this.colors.black[this.properties.affiliation];
    var white = this.colors.white[this.properties.affiliation];
    //Store previous used icons in memory.
    var icnet =
      (ms_1._STD2525 ? "2525" : "APP6") +
      "," +
      this.properties.dimension +
      this.properties.affiliation +
      this.properties.notpresent +
      ",frame:" +
      this.style.frame +
      ",alternateMedal:" +
      this.style.alternateMedal +
      ",colors:{fillcolor:" +
      fillColor +
      ",neutralColor" +
      neutralColor +
      ",iconColor:" +
      iconColor +
      ",iconFillColor:" +
      iconFillColor +
      ",none:" +
      none +
      ",black:" +
      black +
      ",white:" +
      white +
      "}";
    if (ms_1._iconCache.hasOwnProperty(icnet)) {
      iconParts = ms_1._iconCache[icnet].iconParts;
    } else {
      ms_1._iconCache[icnet] = {};
      iconParts = ms_1._iconCache[icnet].iconParts = ms_1._geticnParts(
        this.properties,
        this.colors,
        ms_1._STD2525,
        this.style.monoColor,
        this.style.alternateMedal
      );
    }

    //Letter based SIDCs.
    if (!this.properties.numberSIDC) {
      //Sea mine exercise has stuff outsIde the boundingbox...
      //TODO see if we can fix this in another way.
      if (
        ["WMGX--", "WMMX--", "WMFX--", "WMX---", "WMSX--"].indexOf(
          this.properties.functionid
        ) != -1
      ) {
        gbbox.y1 = 10;
        if (this.properties.affiliation != "Unknown") {
          gbbox.x2 = this.properties.baseGeometry.bbox.x2 + 20;
        }
      }

      //Try to fetch the icons form the cache
      if (ms_1._iconCache[icnet].hasOwnProperty("letterSIDC")) {
        icons = ms_1._iconCache[icnet].letterSIDC.icons;
        specialbbox = ms_1._iconCache[icnet].letterSIDC.bbox;
      } else {
        if (typeof ms_1._getLetterSIDCicn === "function") {
          ms_1._iconCache[icnet].letterSIDC = ms_1._getLetterSIDCicn(
            iconParts,
            ms_1._STD2525
          );
          icons = ms_1._iconCache[icnet].letterSIDC.icons;
          specialbbox = ms_1._iconCache[icnet].letterSIDC.bbox;
          //THIS IS JUST FOR Printing bottom coords of all equipment ===========================
          /*			This code dosen't work at the moment..... TODO
					if(element){
					listBBoxes = '';
					for (var property in sId) {
						if(property.substr(4,1) == 'E'){
							var BaseGeometry = document.createElementNS(ms._svgNS, "g");
							BaseGeometry.setAttribute('id', 'BaseGeometryEquipment');
								BaseGeometry.appendChild(
									BaseGeometry.ownerDocument.importNode(
										parseXML(
											'<g xmlns="'+ms._svgNS+'">' + sId[property] + '</g>'
										), true
									)
								);
							var svgSymbol = document.createElementNS(ms._svgNS, "svg");
							svgSymbol.setAttribute("width", 200);
							svgSymbol.setAttribute("height", 200);
							svgSymbol.setAttribute("version", 1.1);
							svgSymbol.setAttribute("baseProfile", "tiny");
							svgSymbol.setAttribute("xmlns", ms._svgNS);
							svgSymbol.appendChild(BaseGeometry);

							var targetElement = document.getElementById(element);
							if(targetElement.hasChildNodes()){
								targetElement.removeChild(targetElement.childNodes[0])
							}
							targetElement.appendChild(svgSymbol);
							var BBox = document.getElementById("BaseGeometryEquipment").getBBox()
							listBBoxes += '\'' + property.substr(4,6) + '\':' + (BBox.y+ BBox.height)+',';
						}
						}
					document.getElementById(element).innerHTML=listBBoxes;
				}
		*/
        } else {
          console.warn(
            "ms._getLetterSIDCicn() is not present, you will need to load functionality for letter based SIDCs"
          );
        }
      }
    }

    //Number based SIDCs.
    if (this.properties.numberSIDC) {
      //Number based SIDCs.
      var symbolSet = String(this.options.sidc).substr(4, 2);
      if (ms_1._iconCache[icnet].hasOwnProperty("numberSIDC")) {
        if (
          ms_1._iconCache[icnet].numberSIDC.symbolSet.hasOwnProperty(symbolSet)
        ) {
          icons = ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].icons;
          m1 = ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m1;
          m2 = ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m2;
          specialbbox =
            ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].bbox;
        } else {
          if (typeof ms_1._getNumberSIDCicn === "function") {
            ms_1._iconCache[icnet].numberSIDC.symbolSet[
              symbolSet
            ] = ms_1._getNumberSIDCicn(symbolSet, iconParts, ms_1._STD2525);
            icons = ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].icons;
            m1 = ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m1;
            m2 = ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m2;
            specialbbox =
              ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].bbox;
          } else {
            console.warn(
              "ms._getNumberSIDCicn() is not present, you will need to load functionality for number based SIDCs"
            );
          }
        }
      } else {
        ms_1._iconCache[icnet].numberSIDC = {};
        ms_1._iconCache[icnet].numberSIDC.symbolSet = {};
        if (typeof ms_1._getNumberSIDCicn === "function") {
          ms_1._iconCache[icnet].numberSIDC.symbolSet[
            symbolSet
          ] = ms_1._getNumberSIDCicn(symbolSet, iconParts, ms_1._STD2525);
          icons = ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].icons;
          m1 = ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m1;
          m2 = ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m2;
          specialbbox =
            ms_1._iconCache[icnet].numberSIDC.symbolSet[symbolSet].bbox;
          //for printing equipment bottom  set ms._element to the id of an html element and call milsymbol with an equipment sysbol
          /*
					if(ms._element){
					listBBoxes = '';
					sId = ms._iconCache[icnet].numberSIDC.symbolSet[15].icn;
					for (var property in sId) {
					console.log(property)
							var BaseGeometry = document.createElementNS("http://www.w3.org/2000/svg", "g");
							BaseGeometry.setAttribute('id', 'BaseGeometryEquipment');
								BaseGeometry.appendChild(
									BaseGeometry.ownerDocument.importNode(
										parseXML(
											'<g xmlns="'+"http://www.w3.org/2000/svg"+'">' + sId[property] + '</g>'
										), true
									)
								);
							var svgSymbol = document.createElementNS("http://www.w3.org/2000/svg", "svg");
							svgSymbol.setAttribute("width", 200);
							svgSymbol.setAttribute("height", 200);
							svgSymbol.setAttribute("version", 1.1);
							svgSymbol.setAttribute("baseProfile", "tiny");
							svgSymbol.setAttribute("id", property);

							svgSymbol.setAttribute("xmlns", "http://www.w3.org/2000/svg");
							svgSymbol.appendChild(BaseGeometry);

							var targetElement = document.getElementById(ms._element);
							if(targetElement.hasChildNodes()){
								targetElement.removeChild(targetElement.childNodes[0])
							}
							targetElement.appendChild(svgSymbol);
							console.log(targetElement)
							var BBox = document.getElementById("BaseGeometryEquipment").getBBox()
							listBBoxes +=  property + ':' + (BBox.y+ BBox.height)+',';

						}
					document.getElementById(ms._element).innerHTML=listBBoxes;
					}*/
        } else {
          console.warn(
            "ms._getNumberSIDCicn() is not present, you will need to load functionality for number based SIDCs"
          );
        }
      }
    }

    // Put all this togheter and return the Icon. ============================================
    iconColor = this.colors.iconColor[this.properties.affiliation];
    var undefinedIcon = [
      {
        type: "path",
        stroke: false,
        fill: iconColor,
        d:
          "m 94.8206,78.1372 c -0.4542,6.8983 0.6532,14.323 5.3424,19.6985 4.509,5.6933 11.309,9.3573 14.98,15.7283 3.164,6.353 -0.09,14.245 -5.903,17.822 -7.268,4.817 -18.6219,2.785 -22.7328,-5.249 -1.5511,-2.796 -2.3828,-5.931 -2.8815,-9.071 -3.5048,0.416 -7.0093,0.835 -10.5142,1.252 0.8239,8.555 5.2263,17.287 13.2544,21.111 7.8232,3.736 17.1891,3.783 25.3291,1.052 8.846,-3.103 15.737,-11.958 15.171,-21.537 0.05,-6.951 -4.272,-12.85 -9.134,-17.403 -4.526,-4.6949 -11.048,-8.3862 -12.401,-15.2748 -1.215,-2.3639 -0.889,-8.129 -0.889,-8.129 z m -0.6253,-20.5177 0,11.6509 11.6527,0 0,-11.6509 z"
      }
    ];
    if (this.properties.numberSIDC) {
      //Number based SIDC
      var mainIcon = icons[this.properties.functionid.substr(0, 6)]; //Main symbol

      if (typeof mainIcon === "undefined") {
        //We have some special entity subtype and will try to find original symbol.
        mainIcon = icons[this.properties.functionid.substr(0, 4) + "00"];
      }

      if (typeof mainIcon === "undefined") {
        if (
          !(
            this.properties.functionid.substr(0, 6) == "000000" ||
            this.properties.functionid.substr(0, 6) == ""
          )
        ) {
          drawArray2.push(undefinedIcon);
          this._validIcon = false;
          //console.log('Invalid icon code in SIDC: ' + this.options.sidc);
        }
      } else {
        drawArray2.push(mainIcon);
      }

      if (specialbbox.hasOwnProperty(this.properties.functionid.substr(0, 6))) {
        gbbox = new ms_1.BBox(
          specialbbox[this.properties.functionid.substr(0, 6)]
        );
      }
      if (this.properties.functionid.substr(4, 2) == "95")
        drawArray2.push(
          iconParts["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"]
        );
      if (this.properties.functionid.substr(4, 2) == "96")
        drawArray2.push(iconParts["GR.IC.FF.DIVISION AND BELOW SUPPORT"]);
      if (this.properties.functionid.substr(4, 2) == "97")
        drawArray2.push(iconParts["GR.IC.FF.CORPS SUPPORT"]);
      if (this.properties.functionid.substr(4, 2) == "98")
        drawArray2.push(iconParts["GR.IC.FF.THEATRE SUPPORT"]);
      //Modifier 1
      var modifier1 =
        this.properties.functionid.substr(6, 2) != "00"
          ? m1[this.properties.functionid.substr(6, 2)] || []
          : [];
      if (modifier1.length) {
        drawArray2.push(modifier1);
      }
      //Modifier 2
      var modifier2 =
        this.properties.functionid.substr(8, 2) != "00"
          ? m2[this.properties.functionid.substr(8, 2)] || []
          : [];
      if (modifier2.length) {
        drawArray2.push(modifier2);
      }
    } else {
      //Letter based SIDC
      var genericSIDC =
        this.options.sidc.substr(0, 1) +
        "-" +
        this.options.sidc.substr(2, 1) +
        "-" +
        this.options.sidc.substr(4, 6);
      if (icons[genericSIDC]) {
        drawArray2.push(icons[genericSIDC]);
      } else {
        if (
          !(
            this.options.sidc.substr(4, 6) == "------" ||
            this.options.sidc.substr(4, 6) == ""
          )
        ) {
          drawArray2.push(undefinedIcon);
          this._validIcon = false;
          //console.log("Invalid icon code in SIDC: " + this.options.sidc);
        }
      }
      if (specialbbox[genericSIDC]) {
        gbbox = new ms_1.BBox(specialbbox[genericSIDC]);
      }
    }
  }
  //outline
  if (!(this.style.frame && this.style.fill) || this.style.monoColor) {
    if (this.style.outlineWidth > 0)
      drawArray1.push(
        ms_1.outline(
          drawArray2,
          this.style.outlineWidth,
          this.style.strokeWidth,
          this.style.outlineColor
        )
      );
  }
  return { pre: drawArray1, post: drawArray2, bbox: gbbox };
};

//Symbol Modifiers #######################################################################


var modifier = function modifier() {
  var drawArray1 = [];
  var drawArray2 = [];
  var bbox = new ms_1.BBox(this.properties.baseGeometry.bbox); // clone the bbox
  var gbbox = new ms_1.BBox(); // bounding box for the added geometries
  var geom;
  if (this.properties.headquarters) {
    //HEADQUARTERS
    var y = 100;
    var hqStafLength = Number(this.style.hqStafLength || ms_1._hqStafLength);
    if (
      [
        "AirFriend",
        "AirNeutral",
        "GroundFriend",
        "GroundNeutral",
        "SeaNeutral",
        "SubsurfaceNeutral"
      ].indexOf(this.properties.dimension + this.properties.affiliation) > -1
    )
      y = bbox.y2;
    if (
      this.properties.dimensionType + this.properties.affiliationType ==
      "SubsurfaceFriend"
    )
      y = bbox.y1;
    geom = {
      type: "path",
      d:
        "M" +
        bbox.x1 +
        "," +
        y +
        " L" +
        bbox.x1 +
        "," +
        (bbox.y2 + hqStafLength)
    };

    //outline
    if (this.style.outlineWidth > 0)
      drawArray1.push(
        ms_1.outline(
          geom,
          this.style.outlineWidth,
          this.style.strokeWidth,
          this.style.outlineColor
        )
      );

    drawArray2.push(geom);
    gbbox.y2 = bbox.y2 + hqStafLength;
  }
  if (this.properties.taskForce) {
    //TASK FORCE
    geom = {
      type: "path",
      d:
        "M55," +
        bbox.y1 +
        " L55," +
        (bbox.y1 - 40) +
        " 145," +
        (bbox.y1 - 40) +
        " 145," +
        bbox.y1
    };

    //outline
    if (this.style.outlineWidth > 0)
      drawArray1.push(
        ms_1.outline(
          geom,
          this.style.outlineWidth,
          this.style.strokeWidth,
          this.style.outlineColor
        )
      );

    drawArray2.push(geom);
    gbbox.y1 = bbox.y1 - 40;
  }
  if (this.properties.installation) {
    //INSTALLATION
    var gapFiller = 0;
    if (
      ["AirHostile", "GroundHostile", "SeaHostile"].indexOf(
        this.properties.dimension + this.properties.affiliation
      ) > -1
    )
      gapFiller = 14;
    if (
      [
        "AirUnknown",
        "GroundUnknown",
        "SeaUnknown",
        "AirFriend",
        "SeaFriend"
      ].indexOf(this.properties.dimension + this.properties.affiliation) > -1
    )
      gapFiller = 2;
    geom = {
      type: "path",
      fill: this.colors.frameColor[this.properties.affiliation],
      d:
        "M85," +
        (bbox.y1 + gapFiller - this.style.strokeWidth / 2) +
        " 85," +
        (bbox.y1 - 10) +
        " 115," +
        (bbox.y1 - 10) +
        " 115," +
        (bbox.y1 + gapFiller - this.style.strokeWidth / 2) +
        " 100," +
        (bbox.y1 - this.style.strokeWidth) +
        " Z"
    };

    //outline
    if (this.style.outlineWidth > 0)
      drawArray1.push(
        ms_1.outline(
          geom,
          this.style.outlineWidth,
          this.style.strokeWidth,
          this.style.outlineColor
        )
      );

    drawArray2.push(geom);
    gbbox.merge({ y1: bbox.y1 - 10 });
  }
  if (this.properties.feintDummy) {
    //FEINT DUMMY
    var topPoint = bbox.y1 - 40 - bbox.width() / 2;
    geom = {
      type: "path",
      strokedasharray: ms_1._dashArrays.feintDummy,
      d:
        "M100," +
        topPoint +
        " L" +
        bbox.x1 +
        "," +
        (bbox.y1 - 40) +
        " M100," +
        topPoint +
        " L" +
        bbox.x2 +
        "," +
        (bbox.y1 - 40)
    };

    //outline
    if (this.style.outlineWidth > 0)
      drawArray1.push(
        ms_1.outline(
          geom,
          this.style.outlineWidth,
          this.style.strokeWidth,
          this.style.outlineColor
        )
      );

    drawArray2.push(geom);
    gbbox.merge({ y1: topPoint });
  }
  //Unit Size
  if (this.properties.echelon) {
    var installationPadding = this.properties.installation ? 15 : 0;
    var echelons = {
      "Team/Crew": {
        g: [
          { type: "circle", cx: 100, cy: bbox.y1 - 20, r: 15 },
          {
            type: "path",
            d: "M80," + (bbox.y1 - 10) + "L120," + (bbox.y1 - 30)
          }
        ],
        bbox: { y1: bbox.y1 - 40 - installationPadding }
      },
      Squad: {
        g: [
          {
            type: "circle",
            fill: this.colors.frameColor[this.properties.affiliation],
            cx: 100,
            cy: bbox.y1 - 20,
            r: 7.5
          }
        ],
        bbox: { y1: bbox.y1 - 20 - 7.5 - installationPadding }
      },
      Section: {
        g: [
          {
            type: "circle",
            fill: this.colors.frameColor[this.properties.affiliation],
            cx: 115,
            cy: bbox.y1 - 20,
            r: 7.5
          },
          {
            type: "circle",
            fill: this.colors.frameColor[this.properties.affiliation],
            cx: 85,
            cy: bbox.y1 - 20,
            r: 7.5
          }
        ],
        bbox: { y1: bbox.y1 - 20 - 7.5 - installationPadding }
      },
      "Platoon/detachment": {
        g: [
          {
            type: "circle",
            fill: this.colors.frameColor[this.properties.affiliation],
            cx: 100,
            cy: bbox.y1 - 20,
            r: 7.5
          },
          {
            type: "circle",
            fill: this.colors.frameColor[this.properties.affiliation],
            cx: 70,
            cy: bbox.y1 - 20,
            r: 7.5
          },
          {
            type: "circle",
            fill: this.colors.frameColor[this.properties.affiliation],
            cx: 130,
            cy: bbox.y1 - 20,
            r: 7.5
          }
        ],
        bbox: { y1: bbox.y1 - 20 - 7.5 - installationPadding }
      },
      "Company/battery/troop": {
        g: [
          {
            type: "path",
            d: "M100," + (bbox.y1 - 10) + "L100," + (bbox.y1 - 35)
          }
        ],
        bbox: { y1: bbox.y1 - 40 - installationPadding }
      },
      "Battalion/squadron": {
        g: [
          {
            type: "path",
            d: "M90," + (bbox.y1 - 10) + "L90," + (bbox.y1 - 35)
          },
          {
            type: "path",
            d: "M110," + (bbox.y1 - 10) + "L110," + (bbox.y1 - 35)
          }
        ],
        bbox: { y1: bbox.y1 - 40 - installationPadding }
      },
      "Regiment/group": {
        g: [
          {
            type: "path",
            d: "M100," + (bbox.y1 - 10) + "L100," + (bbox.y1 - 35)
          },
          {
            type: "path",
            d: "M120," + (bbox.y1 - 10) + "L120," + (bbox.y1 - 35)
          },
          { type: "path", d: "M80," + (bbox.y1 - 10) + "L80," + (bbox.y1 - 35) }
        ],
        bbox: { y1: bbox.y1 - 40 - installationPadding }
      },
      Brigade: {
        g: [
          {
            type: "path",
            d: "M87.5," + (bbox.y1 - 10) + " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: { y1: bbox.y1 - 15 - 25 - installationPadding }
      },
      Division: {
        g: [
          {
            type: "path",
            d:
              "M70," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M105," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 70,
          x2: 130
        }
      },
      "Corps/MEF": {
        g: [
          {
            type: "path",
            d:
              "M52.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M87.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M122.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 52.5,
          x2: 147.5
        }
      },
      Army: {
        g: [
          {
            type: "path",
            d:
              "M35," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M70," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M105," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M140," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 35,
          x2: 165
        }
      },
      "Army Group/front": {
        g: [
          {
            type: "path",
            d:
              "M17.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M52.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M87.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M122.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25       M157.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 17.5,
          x2: 182.5
        }
      },
      "Region/Theater": {
        g: [
          {
            type: "path",
            d:
              "M0," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M35," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M70," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M105," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M140," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25     M175," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 0,
          x2: 200
        }
      },
      Command: {
        g: [
          {
            type: "path",
            d:
              "M70," +
              (bbox.y1 - 22.5) +
              " l25,0 m-12.5,12.5 l0,-25   M105," +
              (bbox.y1 - 22.5) +
              " l25,0 m-12.5,12.5 l0,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 70,
          x2: 130
        }
      }
    };
    if (echelons.hasOwnProperty(this.properties.echelon)) {
      geom = echelons[this.properties.echelon].g;

      //outline
      if (this.style.outlineWidth > 0)
        drawArray1.push(
          ms_1.outline(
            { type: "translate", x: 0, y: -installationPadding, draw: geom },
            this.style.outlineWidth,
            this.style.strokeWidth,
            this.style.outlineColor
          )
        );
      //geometry
      drawArray2.push({
        type: "translate",
        x: 0,
        y: -installationPadding,
        draw: geom
      });
      gbbox.merge(echelons[this.properties.echelon].bbox);
    }
  }
  //This is for movability indicators.
  if (this.properties.mobility) {
    if (!this.style.frame) {
      bbox.y2 = this.bbox.y2;
    }
    if (this.properties.affiliation == "Neutral") {
      if (
        this.properties.mobility == "Towed" ||
        this.properties.mobility == "Short towed array" ||
        this.properties.mobility == "Long towed Array"
      ) {
        bbox.y2 += 8;
      }
      if (
        this.properties.mobility == "Over snow (prime mover)" ||
        this.properties.mobility == "Sled"
      ) {
        bbox.y2 += 13;
      }
    }
    var mobilities = {
      "Wheeled limited cross country": {
        g: [
          { type: "path", d: "M 50,1 l 100,0" },
          { type: "circle", cx: 55, cy: 8, r: 8 },
          { type: "circle", cx: 145, cy: 8, r: 8 }
        ],
        bbox: { y2: bbox.y2 + 8 * 2 }
      },
      "Wheeled cross country": {
        g: [
          { type: "path", d: "M 50,1 l 100,0" },
          { type: "circle", cx: 55, cy: 8, r: 8 },
          { type: "circle", cx: 145, cy: 8, r: 8 },
          { type: "circle", cx: 100, cy: 8, r: 8 }
        ],
        bbox: { y2: bbox.y2 + 8 * 2 }
      },
      Tracked: {
        g: [
          {
            type: "path",
            d: "M 50,1 l 100,0 c15,0 15,15 0,15 l -100,0 c-15,0 -15,-15 0,-15"
          }
        ],
        bbox: { y2: bbox.y2 + 18, x1: 42, x2: 168 }
      },
      "Wheeled and tracked combination": {
        g: [
          { type: "circle", cx: 55, cy: 8, r: 8 },
          {
            type: "path",
            d: "M 80,1 l 70,0 c15,0 15,15 0,15 l -70,0 c-15,0 -15,-15 0,-15"
          }
        ],
        bbox: { y2: bbox.y2 + 8 * 2, x2: 168 }
      },
      Towed: {
        g: [
          { type: "path", d: "M 60,1 l 80,0" },
          { type: "circle", cx: 55, cy: 3, r: 8 },
          { type: "circle", cx: 145, cy: 3, r: 8 }
        ],
        bbox: { y2: bbox.y2 + 10 }
      },
      Rail: {
        g: [
          { type: "path", d: "M 50,1 l 100,0" },
          { type: "circle", cx: 55, cy: 8, r: 8 },
          { type: "circle", cx: 70, cy: 8, r: 8 },
          { type: "circle", cx: 130, cy: 8, r: 8 },
          { type: "circle", cx: 145, cy: 8, r: 8 }
        ],
        bbox: { y2: bbox.y2 + 8 * 2 }
      },
      "Over snow (prime mover)": {
        g: [{ type: "path", d: "M 50,-9 l10,10 90,0" }],
        bbox: { y2: bbox.y2 + 9 }
      },
      Sled: {
        g: [
          {
            type: "path",
            d: "M 145,-12  c15,0 15,15 0,15 l -90,0 c-15,0 -15,-15 0,-15"
          }
        ],
        bbox: { y2: bbox.y2 + 15, x1: 42, x2: 168 }
      },
      "Pack animals": {
        g: [{ type: "path", d: "M 80,20 l 10,-20 10,20 10,-20 10,20" }],
        bbox: { y2: bbox.y2 + 20 }
      },
      Barge: {
        g: [{ type: "path", d: "M 50,1 l 100,0 c0,10 -100,10 -100,0" }],
        bbox: { y2: bbox.y2 + 10 }
      },
      Amphibious: {
        g: [
          {
            type: "path",
            d:
              "M 65,10 c 0,-10 10,-10 10,0 0,10 10,10 10,0	0,-10 10,-10 10,0 0,10 10,10 10,0	0,-10 10,-10 10,0 0,10 10,10 10,0	0,-10 10,-10 10,0"
          }
        ],
        bbox: { y2: bbox.y2 + 20 }
      },
      "Short towed array": {
        g: [
          {
            type: "path",
            fill: this.colors.frameColor[this.properties.affiliation],
            d:
              "M 50,5 l 100,0 M50,0 l10,0 0,10 -10,0 z M150,0 l-10,0 0,10 10,0 z M100,0 l5,5 -5,5 -5,-5 z"
          }
        ],
        bbox: { y2: bbox.y2 + 10 }
      },
      "Long towed Array": {
        g: [
          {
            type: "path",
            fill: this.colors.frameColor[this.properties.affiliation],
            d:
              "M 50,5 l 100,0 M50,0 l10,0 0,10 -10,0 z M150,0 l-10,0 0,10 10,0 z M105,0 l-10,0 0,10 10,0 z M75,0 l5,5 -5,5 -5,-5 z  M125,0 l5,5 -5,5 -5,-5 z"
          }
        ],
        bbox: { y2: bbox.y2 + 10 }
      }
    };
    if (mobilities.hasOwnProperty(this.properties.mobility)) {
      geom = mobilities[this.properties.mobility].g;
      //outline
      if (this.style.outlineWidth > 0)
        drawArray1.push(
          ms_1.outline(
            { type: "translate", x: 0, y: bbox.y2, draw: geom },
            this.style.outlineWidth,
            this.style.strokeWidth,
            this.style.outlineColor
          )
        );
      //geometry
      drawArray2.push({ type: "translate", x: 0, y: bbox.y2, draw: geom });
      gbbox.merge(mobilities[this.properties.mobility].bbox);
    }
  }

  //Dismounted Leadership
  if (this.properties.leadership) {
    var leadership = {
      Friend: {
        type: "path",
        d: "m 45,60 55,-25 55,25"
      } /*,
      Neutral: { type: "path", d: "m 45,60 55,-25 55,25" },
      Hostile: { type: "path", d: "m 42,71 57.8,-43.3 58.2,42.8" },
      Unknown: { type: "path", d: "m 50,60 10,-20 80,0 10,20" }//*/
    }[this.properties.affiliation];
    //if (this.properties.leadership == "Deputy Individual")
    //  leadership.strokedasharray = ms._dashArrays.feintDummy;
    if (leadership) {
      drawArray1.push(leadership);
      gbbox.merge({ y1: bbox.y1 - 20 });
    }
  }
  //Assign fill, stroke and stroke-width
  for (var i = 0; i < drawArray1.length; i++) {
    if (!drawArray1[i].hasOwnProperty("fill")) drawArray1[i].fill = false;
    if (!drawArray1[i].hasOwnProperty("stroke"))
      drawArray1[i].stroke = this.colors.iconColor[this.properties.affiliation];
    if (!drawArray1[i].hasOwnProperty("strokewidth"))
      drawArray1[i].strokewidth = this.style.strokeWidth;
  }
  for (i = 0; i < drawArray2.length; i++) {
    if (!drawArray2[i].hasOwnProperty("fill")) drawArray2[i].fill = false;
    if (!drawArray2[i].hasOwnProperty("stroke"))
      drawArray2[i].stroke = this.colors.iconColor[this.properties.affiliation];
    if (!drawArray2[i].hasOwnProperty("strokewidth"))
      drawArray2[i].strokewidth = this.style.strokeWidth;
  }

  /*
	if(this.options.sigint){
		g += '<text font-family="Arial" font-weight="bold" stroke="none" text-anchor="middle" x="100" y="'+ (30 + bbox.y2 )+'" font-size="35" >'+this.options.sigint+'</text>';
		gbbox.merge({y2:(bbox.y2-28)});
	}
	g += '</g>';*/
  return { pre: drawArray1, post: drawArray2, bbox: gbbox };
};

//Sets modifiers depending of status #####################################################


var statusmodifier = function statusmodifier() {
  var drawArray1 = [];
  var drawArray2 = [];
  var bbox = this.properties.baseGeometry.bbox;
  var y1 = bbox.y1;
  var y2 = bbox.y2;

  if (this.properties.condition) {
    if (this.properties.fill && this.style.monoColor === "") {
      var colors = {
        FullyCapable: "rgb(0,255,0)",
        Damaged: "rgb(255,255,0)",
        Destroyed: "rgb(255,0,0)",
        FullToCapacity: "rgb(0, 180, 240)"
      };
      //If it is unframed and equipment use the bottom of the icon
      if (!this.properties.frame && this.properties.iconBottom) {
        y2 = this.properties.iconBottom;
      }
      //If we have a mobility indicator we need to make space for it.
      y2 += this.properties.mobility ? 25 : 5;
      //Add the bar to the geometry
      drawArray2.push({
        type: "path",
        strokewidth: this.style.strokeWidth,
        fill: colors[this.properties.condition],
        stroke: this.colors.frameColor[this.properties.affiliation],
        d:
          "M" +
          bbox.x1 +
          "," +
          y2 +
          " l" +
          bbox.width() +
          ",0 0,15 -" +
          bbox.width() +
          ",0 z"
      });
      //Add the hight of the codition bar to the geometry bounds
      y2 += 15;
      //outline
      if (this.style.outlineWidth > 0)
        drawArray1.push(
          ms_1.outline(
            drawArray2,
            this.style.outlineWidth,
            this.style.strokeWidth,
            this.style.outlineColor
          )
        );
    } else {
      if (
        this.properties.condition == "Damaged" ||
        this.properties.condition == "Destroyed"
      ) {
        drawArray2.push({
          type: "path",
          d: "M150,20 L50,180",
          strokewidth: this.style.strokeWidth * 2,
          stroke: this.colors.frameColor[this.properties.affiliation]
        });
        //Add space for the modifier to the geometry bounds
        y1 = 20;
        y2 = 180;
      }
      if (this.properties.condition == "Destroyed")
        drawArray2.push({
          type: "path",
          d: "M50,20 L150,180",
          strokewidth: this.style.strokeWidth * 2,
          stroke: this.colors.frameColor[this.properties.affiliation]
        });
      //outline
      if (this.style.outlineWidth > 0)
        drawArray1.push(
          ms_1.outline(
            drawArray2,
            this.style.outlineWidth,
            this.style.strokeWidth,
            this.style.outlineColor
          )
        );
    }
  }

  //A bounding box only needs the values that might change
  return { pre: drawArray1, post: drawArray2, bbox: { y1: y1, y2: y2 } };
};

//Affiliation and dimension addons to base geometries ####################################


var affliationdimension = function affliationdimension() {
  var drawArray1 = [];
  var drawArray2 = [];
  var bbox = this.properties.baseGeometry.bbox;
  var frameColor = this.colors.frameColor[this.properties.affiliation];
  //Draws the a question mark for some unknown or other dimension symbols
  if (this.properties.dimensionUnknown && frameColor) {
    drawArray2.push({
      type: "text",
      text: "?",
      x: 100,
      y: 127,
      fill: frameColor,
      fontfamily: "Arial",
      fontsize: 80,
      fontweight: "bold",
      textanchor: "middle"
    });
  }
  //If we don't have a geometry we shouldn't add anything.
  if (this.properties.baseGeometry.g && frameColor) {
    var spacing = 10;
    if (
      this.properties.affiliation == "Unknown" ||
      (this.properties.affiliation == "Hostile" &&
        this.properties.dimension != "Subsurface")
    ) {
      spacing = -10;
    }
    if (this.properties.context == "Exercise") {
      if (!(this.properties.joker || this.properties.faker)) {
        drawArray2.push({
          type: "text",
          text: "X",
          x: bbox.x2 + spacing,
          y: 60,
          fill: frameColor,
          fontfamily: "Arial",
          fontsize: 35,
          fontweight: "bold",
          textanchor: "start"
        });
      }
      if (this.properties.joker) {
        drawArray2.push({
          type: "text",
          text: "J",
          x: bbox.x2 + spacing,
          y: 60,
          fill: frameColor,
          fontfamily: "Arial",
          fontsize: 35,
          fontweight: "bold",
          textanchor: "start"
        });
      }
      if (this.properties.faker) {
        drawArray2.push({
          type: "text",
          text: "K",
          x: bbox.x2 + spacing,
          y: 60,
          fill: frameColor,
          fontfamily: "Arial",
          fontsize: 35,
          fontweight: "bold",
          textanchor: "start"
        });
      }
      bbox = { x2: bbox.x2 + spacing + 22, y1: 60 - 25 };
    }
    if (this.properties.context == "Simulation") {
      drawArray2.push({
        type: "text",
        text: "S",
        x: bbox.x2 + spacing,
        y: 60,
        fill: frameColor,
        fontfamily: "Arial",
        fontsize: 35,
        fontweight: "bold",
        textanchor: "start"
      });
      bbox = new ms_1.BBox({ x2: bbox.x2 + spacing + 22, y1: 60 - 25 });
    }
  }
  //outline
  if (this.style.outlineWidth > 0)
    drawArray1.push(
      ms_1.outline(
        drawArray2,
        this.style.outlineWidth,
        this.style.strokeWidth,
        this.style.outlineColor
      )
    );
  return { pre: drawArray1, post: drawArray2, bbox: bbox };
};

//Text Fields ############################################################################


var textfields = function textfields() {
  var drawArray1 = [];
  var drawArray2 = [];
  var bbox = this.properties.baseGeometry.bbox;
  var fontColor =
    this.style.infoColor ||
    this.colors.iconColor[this.properties.affiliation] ||
    this.colors.iconColor["Friend"];
  var fontFamily = "Arial";
  var fontSize = this.style.infoSize;

  var gbbox = new ms_1.BBox();
  var spaceTextIcon = 20; //The distance between the Icon and the labels

  //Text fields overrides
  function labelOverride(label) {
    var texts = [];
    var labelbox;
    for (var i in label) {
      if (this.hasOwnProperty(i) && this[i] != "") {
        if (!label.hasOwnProperty(i)) continue;
        for (var j = 0; j < (label[i].length || 1); j++) {
          var lbl;
          if (Array.isArray(label[i])) {
            lbl = label[i][j];
          } else {
            lbl = label[i];
          }
          labelbox = { y2: lbl.y, y1: lbl.y - lbl.fontsize };
          if (lbl.textanchor == "start") {
            labelbox.x1 = lbl.x;
            labelbox.x2 = lbl.x + strWidth(this[i]) * (lbl.fontsize / fontSize);
          }
          if (lbl.textanchor == "middle") {
            var w = strWidth(this[i]) * (lbl.fontsize / fontSize);
            labelbox.x1 = lbl.x - w / 2;
            labelbox.x2 = lbl.x + w / 2;
          }
          //if(lbl.textanchor == 'middle'){}
          if (lbl.textanchor == "end") {
            labelbox.x1 = lbl.x - strWidth(this[i]) * (lbl.fontsize / fontSize);
            labelbox.x2 = lbl.x;
          }
          gbbox.merge(labelbox);
          var text = { type: "text", fontfamily: fontFamily, fill: fontColor };
          if (lbl.hasOwnProperty("stroke")) text.stroke = lbl.stroke;
          if (lbl.hasOwnProperty("textanchor"))
            text.textanchor = lbl.textanchor;
          if (lbl.hasOwnProperty("fontsize")) text.fontsize = lbl.fontsize;
          if (lbl.hasOwnProperty("fontweight"))
            text.fontweight = lbl.fontweight;
          text.x = lbl.x;
          text.y = lbl.y;
          text.text = this[i];
          texts.push(text);
        }
      }
    }
    return texts;
  }

  //Function to calculate the width of a string
  function strWidth(str) {
    if (str.length == 0) return 0;
    //We need to calculate how long our string will be in pixels
    var strWidths = {
      " ": 9,
      "!": 10,
      '"': 15,
      "#": 17,
      $: 17,
      "%": 27,
      "&": 22,
      "'": 8,
      "(": 10,
      ")": 10,
      "*": 12,
      "+": 18,
      ",": 9,
      "-": 10,
      ".": 9,
      "/": 9,
      "0": 17,
      "1": 17,
      "2": 17,
      "3": 17,
      "4": 17,
      "5": 17,
      "6": 17,
      "7": 17,
      "8": 17,
      "9": 17,
      ":": 10,
      ";": 10,
      "<": 18,
      "=": 18,
      ">": 18,
      "?": 19,
      "@": 30,
      A: 22,
      B: 22,
      C: 22,
      D: 22,
      E: 21,
      F: 19,
      G: 24,
      H: 22,
      I: 9,
      J: 17,
      K: 22,
      L: 19,
      M: 25,
      N: 22,
      O: 24,
      P: 21,
      Q: 24,
      R: 22,
      S: 21,
      T: 19,
      U: 22,
      V: 21,
      W: 29,
      X: 21,
      Y: 21,
      Z: 19,
      "[": 10,
      "]": 10,
      "^": 18,
      _: 17,
      "`": 10,
      a: 17,
      b: 19,
      c: 17,
      d: 19,
      e: 17,
      f: 10,
      g: 19,
      h: 19,
      i: 9,
      j: 9,
      k: 17,
      l: 9,
      m: 27,
      n: 19,
      o: 19,
      p: 19,
      q: 19,
      r: 12,
      s: 17,
      t: 10,
      u: 19,
      v: 17,
      w: 24,
      x: 17,
      y: 17,
      z: 15,
      "{": 12,
      "|": 9,
      "}": 12,
      "~": 18
    };
    var w = 0;
    for (var i = 0; i < str.length; i++) {
      //If we dont know how wide the char is, set it to 28.5 that is the width of W and no char is wider than that.
      w += fontSize / 30 * (strWidths[str[i]] ? strWidths[str[i]] : 28.5);
    }
    //This is for the space between the text and the symbol.
    w += spaceTextIcon;
    return w;
  }

  // Print text in right position
  function text(str) {
    var size = 42;
    var y = 115;
    if (str.length == 1) {
      size = 45;
      y = 115;
    }
    if (str.length == 3) {
      size = 35;
      y = 110;
    }
    if (str.length >= 4) {
      size = 32;
      y = 110;
    }
    var t = {
      type: "text",
      text: str,
      x: 100,
      y: y,
      textanchor: "middle",
      fontsize: size,
      fontfamily: fontFamily,
      fill: fontColor,
      stroke: false,
      fontweight: "bold"
    };
    return t;
  }

  if (this.properties.numberSIDC) {
    //Number based SIDCs.
    //var symbolSet = String(this.options.sidc).substr(4, 2);
    //TODO fix add code for Number based labels
  } else {
    //Letter based SIDCs.
    if (!ms_1._labelCache.hasOwnProperty("letter")) {
      ms_1._labelCache["letter"] = {};
      for (var i in ms_1._labelOverrides["letter"]) {
        if (!ms_1._labelOverrides["letter"].hasOwnProperty(i)) continue;
        ms_1._labelOverrides["letter"][i].call(this, ms_1._labelCache["letter"]);
      }
    }
    var genericSIDC =
      this.options.sidc.substr(0, 1) +
      "-" +
      this.options.sidc.substr(2, 1) +
      "-" +
      this.options.sidc.substr(4, 6);
    if (ms_1._labelCache["letter"].hasOwnProperty(genericSIDC)) {
      drawArray2.push(
        labelOverride.call(this, ms_1._labelCache["letter"][genericSIDC])
      );

      //outline
      if (this.style.outlineWidth > 0)
        drawArray1.push(
          ms_1.outline(
            drawArray2,
            this.style.outlineWidth,
            this.style.strokeWidth,
            this.style.outlineColor
          )
        );
      return { pre: drawArray1, post: drawArray2, bbox: gbbox };
    }
  }

  //Check that we have some texts to print
  var textFields =
    this.options.quantity ||
    this.options.reinforcedReduced ||
    this.options.staffComments ||
    this.options.additionalInformation ||
    this.options.evaluationRating ||
    this.options.combatEffectiveness ||
    this.options.signatureEquipment ||
    this.options.higherFormation ||
    this.options.hostile ||
    this.options.iffSif ||
    this.options.sigint ||
    this.options.uniqueDesignation ||
    this.options.type ||
    this.options.dtg ||
    this.options.altitudeDepth ||
    this.options.location ||
    this.options.speed ||
    this.options.specialHeadquarters ||
    this.options.platformType ||
    this.options.equipmentTeardownTime ||
    this.options.commonIdentifier ||
    this.options.auxiliaryEquipmentIndicator ||
    this.options.headquartersElement;
  if (this.style.infoFields && textFields) {
    if (this.options.specialHeadquarters) {
      drawArray2.push(text(this.options.specialHeadquarters));
    }
    if (this.options.quantity) {
      //geometry
      drawArray2.push({
        type: "text",
        text: this.options.quantity,
        x: 100,
        y: bbox.y1 - 10,
        textanchor: "middle",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
      gbbox.y1 = bbox.y1 - 10 - fontSize;
    }
    if (this.options.headquartersElement) {
      if (
        this.properties.condition &&
        this.properties.fill &&
        this.style.monoColor == ""
      ) {
        //Add the hight of the codition bar to the geometry bounds
        bbox.y2 += 15;
      }
      //geometry
      drawArray2.push({
        type: "text",
        text: this.options.headquartersElement,
        x: 100,
        y: bbox.y2 + 35,
        textanchor: "middle",
        fontsize: 35,
        fontfamily: fontFamily,
        fontweight: "bold",
        fill: fontColor,
        stroke: false
      });
      gbbox.y2 = bbox.y2 + 35;
    }

    var gStrings = {
      L1: "",
      L2: "",
      L3: "",
      L4: "",
      L5: "",
      R1: "",
      R2: "",
      R3: "",
      R4: "",
      R5: ""
    }; //Text information on left and right sIde.
    var a;
    //Air & Space (They should be different but we skip that at the moment) TODO
    if (!isNaN(this.options.sidc) && this.properties.dimension == "Air") {
      gStrings.R1 = this.options.uniqueDesignation;
      gStrings.R2 = this.options.iffSif;
      gStrings.R3 = this.options.type;
      if (this.options.speed || this.options.altitudeDepth) {
        a = [];
        if (this.options.speed) a.push(this.options.speed);
        if (this.options.altitudeDepth) a.push(this.options.altitudeDepth);
        gStrings.R4 = a.join(" ");
      }
      if (this.options.staffComments || this.options.additionalInformation) {
        a = [];
        if (this.options.staffComments) a.push(this.options.staffComments);
        if (this.options.additionalInformation)
          a.push(this.options.additionalInformation);
        gStrings.R5 = a.join(" ");
      }
    }
    //Land or letterbased SIDC
    if (isNaN(this.options.sidc) || this.properties.baseDimension == "Ground") {
      gStrings.L1 = this.options.dtg;
      if (this.options.altitudeDepth || this.options.location) {
        a = [];
        if (this.options.altitudeDepth) a.push(this.options.altitudeDepth);
        if (this.options.location) a.push(this.options.location);
        gStrings.L2 = a.join(" ");
      }
      if (
        this.options.type ||
        this.options.platformType ||
        this.options.commonIdentifier
      ) {
        a = [];
        if (this.options.type) a.push(this.options.type);
        if (this.options.platformType) a.push(this.options.platformType);
        if (this.options.commonIdentifier)
          a.push(this.options.commonIdentifier);
        gStrings.L3 = a.join(" ");
      }
      gStrings.L4 = this.options.uniqueDesignation;
      gStrings.L5 = this.options.speed;
      gStrings.R1 = this.options.reinforcedReduced;
      gStrings.R2 = this.options.staffComments;
      if (
        this.options.additionalInformation ||
        this.options.equipmentTeardownTime
      ) {
        a = [];
        if (this.options.additionalInformation)
          a.push(this.options.additionalInformation);
        if (this.options.equipmentTeardownTime)
          a.push(this.options.equipmentTeardownTime);
        gStrings.R3 = a.join(" ");
      }
      gStrings.R4 = this.options.higherFormation;
      if (
        this.options.evaluationRating ||
        this.options.combatEffectiveness ||
        this.options.signatureEquipment ||
        this.options.hostile ||
        this.options.iffSif
      ) {
        a = [];
        if (this.options.evaluationRating)
          a.push(this.options.evaluationRating);
        if (this.options.combatEffectiveness)
          a.push(this.options.combatEffectiveness);
        if (this.options.signatureEquipment)
          a.push(this.options.signatureEquipment);
        if (this.options.hostile) a.push(this.options.hostile);
        if (this.options.iffSif) a.push(this.options.iffSif);
        gStrings.R5 = a.join(" ");
      }
    }
    //Sea numberbased SIDC
    if (!isNaN(this.options.sidc) && this.properties.dimension == "Sea") {
      gStrings.R1 = this.options.uniqueDesignation;
      gStrings.R2 = this.options.type;
      gStrings.R3 = this.options.iffSif;
      if (this.options.staffComments || this.options.additionalInformation) {
        a = [];
        if (this.options.staffComments) a.push(this.options.staffComments);
        if (this.options.additionalInformation)
          a.push(this.options.additionalInformation);
        gStrings.R4 = a.join(" ");
      }
      if (this.options.location || this.options.speed) {
        a = [];
        if (this.options.location) a.push(this.options.location);
        if (this.options.speed) a.push(this.options.speed);
        gStrings.R5 = a.join(" ");
      }
    }
    //Sub numberbased SIDC
    if (
      !isNaN(this.options.sidc) &&
      this.properties.dimension == "Subsurface"
    ) {
      gStrings.R1 = this.options.uniqueDesignation;
      gStrings.R2 = this.options.type;
      gStrings.R3 = this.options.altitudeDepth;
      gStrings.R4 = this.options.staffComments;
      gStrings.R5 = this.options.additionalInformation;
    }

    //Add space on left sIde
    gbbox.x1 =
      bbox.x1 -
      Math.max(
        this.options.specialHeadquarters
          ? (strWidth(this.options.specialHeadquarters) -
              this.properties.baseGeometry.bbox.width()) /
            2
          : 0,
        this.options.quantity
          ? (strWidth(this.options.quantity) -
              this.properties.baseGeometry.bbox.width()) /
            2
          : 0,
        strWidth(gStrings.L1),
        strWidth(gStrings.L2),
        strWidth(gStrings.L3),
        strWidth(gStrings.L4),
        strWidth(gStrings.L5)
      );

    //Space on right sIde
    gbbox.x2 =
      bbox.x2 +
      Math.max(
        this.options.specialHeadquarters
          ? (strWidth(this.options.specialHeadquarters) -
              this.properties.baseGeometry.bbox.width()) /
            2
          : 0,
        this.options.quantity
          ? (strWidth(this.options.quantity) -
              this.properties.baseGeometry.bbox.width()) /
            2
          : 0,
        strWidth(gStrings.R1),
        strWidth(gStrings.R2),
        strWidth(gStrings.R3),
        strWidth(gStrings.R4),
        strWidth(gStrings.R5)
      );

    //Extra space above for field 1
    if (gStrings.L1 || gStrings.R1) {
      gbbox.y1 = Math.min(gbbox.y1, 100 - 2.5 * fontSize);
    }
    //Extra space above for field 2
    if (gStrings.L2 || gStrings.R2) {
      gbbox.y1 = Math.min(gbbox.y1, 100 - 1.5 * fontSize);
    }
    //Extra space below for field 4
    if (gStrings.L4 || gStrings.R4) {
      gbbox.y2 = Math.max(gbbox.y2, 100 + 1.7 * fontSize);
    }
    //Extra space below for field 5
    if (gStrings.L5 || gStrings.R5) {
      gbbox.y2 = Math.max(gbbox.y2, 100 + 2.7 * fontSize);
    }

    //geometries
    if (gStrings.L1)
      drawArray2.push({
        type: "text",
        text: gStrings.L1,
        x: bbox.x1 - spaceTextIcon,
        y: 100 - 1.5 * fontSize,
        textanchor: "end",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.L2)
      drawArray2.push({
        type: "text",
        text: gStrings.L2,
        x: bbox.x1 - spaceTextIcon,
        y: 100 - 0.5 * fontSize,
        textanchor: "end",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.L3)
      drawArray2.push({
        type: "text",
        text: gStrings.L3,
        x: bbox.x1 - spaceTextIcon,
        y: 100 + 0.5 * fontSize,
        textanchor: "end",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.L4)
      drawArray2.push({
        type: "text",
        text: gStrings.L4,
        x: bbox.x1 - spaceTextIcon,
        y: 100 + 1.5 * fontSize,
        textanchor: "end",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.L5)
      drawArray2.push({
        type: "text",
        text: gStrings.L5,
        x: bbox.x1 - spaceTextIcon,
        y: 100 + 2.5 * fontSize,
        textanchor: "end",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });

    //geometries
    if (gStrings.R1)
      drawArray2.push({
        type: "text",
        text: gStrings.R1,
        x: bbox.x2 + spaceTextIcon,
        y: 100 - 1.5 * fontSize,
        textanchor: "start",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.R2)
      drawArray2.push({
        type: "text",
        text: gStrings.R2,
        x: bbox.x2 + spaceTextIcon,
        y: 100 - 0.5 * fontSize,
        textanchor: "start",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.R3)
      drawArray2.push({
        type: "text",
        text: gStrings.R3,
        x: bbox.x2 + spaceTextIcon,
        y: 100 + 0.5 * fontSize,
        textanchor: "start",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.R4)
      drawArray2.push({
        type: "text",
        text: gStrings.R4,
        x: bbox.x2 + spaceTextIcon,
        y: 100 + 1.5 * fontSize,
        textanchor: "start",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.R5)
      drawArray2.push({
        type: "text",
        text: gStrings.R5,
        x: bbox.x2 + spaceTextIcon,
        y: 100 + 2.5 * fontSize,
        textanchor: "start",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });

    //outline
    if (this.style.outlineWidth > 0)
      drawArray1.push(
        ms_1.outline(
          drawArray2,
          this.style.outlineWidth,
          this.style.strokeWidth,
          this.style.outlineColor
        )
      );
  }
  return { pre: drawArray1, post: drawArray2, bbox: gbbox };
};

//Direction Arrow ########################################################################


var directionarrow = function directionarrow() {
  var drawArray1 = [];
  var drawArray2 = [];
  var bbox = this.properties.baseGeometry.bbox;
  if (this.properties.baseGeometry.g == "") {
    // in the case we don't have any frame
    bbox = this.bbox; //Set bbox to the current symbols bounds
  }
  var gbbox = new ms_1.BBox();
  var color =
    this.colors.iconColor[this.properties.affiliation] ||
    this.colors.iconColor["Friend"];

  if (this.style.infoFields) {
    if (this.options.direction && this.options.direction != "") {
      //Movement indicator
      //The length of the lines in a direction of movement indicator is a bit discussed but I use one frame height. (=100px)
      var arrowLength = 95;
      var arrow = [
        {
          type: "rotate",
          degree: this.options.direction,
          x: 100,
          y: 100,
          draw: [
            {
              type: "path",
              fill: color,
              stroke: color,
              strokewidth: this.style.strokeWidth,
              d: "M100,100 l0,-" + (arrowLength - 20) + " -5,3 5,-15 5,15 -5,-3"
            }
          ]
        }
      ];

      gbbox.y1 = Math.min(
        100 -
          Math.cos(this.options.direction / 360 * Math.PI * 2) * arrowLength,
        100
      );
      gbbox.y2 = Math.max(
        100 -
          Math.cos(this.options.direction / 360 * Math.PI * 2) * arrowLength,
        100
      );
      gbbox.x1 = Math.min(
        100 +
          Math.sin(this.options.direction / 360 * Math.PI * 2) * arrowLength,
        100
      );
      gbbox.x2 = Math.max(
        100 +
          Math.sin(this.options.direction / 360 * Math.PI * 2) * arrowLength,
        100
      );

      if (
        this.properties.baseDimension == "Ground" ||
        this.properties.baseDimension == ""
      ) {
        arrow = [
          { type: "translate", x: 0, y: bbox.y2, draw: arrow },
          {
            type: "path",
            fill: color,
            stroke: color,
            strokewidth: this.style.strokeWidth,
            d: "M 100," + bbox.y2 + "l0," + 100
          }
        ];
        gbbox.y2 += bbox.y2 + parseFloat(this.style.strokeWidth);
      }
      //outline
      if (this.style.outlineWidth > 0)
        drawArray1.push(
          ms_1.outline(
            arrow,
            this.style.outlineWidth,
            this.style.strokeWidth,
            this.style.outlineColor
          )
        );
      //geometry
      drawArray2.push(arrow);
    }
  }
  return { pre: drawArray1, post: drawArray2, bbox: gbbox };
};

//########################################################################################
// Support for Path2D in IE 11, if you only use other browsers, you can remove the following
//########################################################################################
var ms_path2d = function(ctx, d) {
  // This function converts a svg path to canvas instructions, it does not support everything
  // but most of the commands in paths.
  ctx.beginPath();
  var x, y, i, j;
  var x0, y0;
  var c;
  var parts = d.match(/([MCLHV][^MCLHV]*)/gi);
  for (i = 0; i < parts.length; i++) {
    if (parts[i].charAt(0) == "M") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      x = parseFloat(c[0]);
      y = parseFloat(c[1]);
      x0 = x;
      y0 = y;
      ctx.moveTo(x, y);
      for (j = 2; j < c.length; j += 2) {
        x = parseFloat(c[j]);
        y = parseFloat(c[j + 1]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
        x = x0;
        y = y0;
      }
    }
    if (parts[i].charAt(0) == "m") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      x = x ? x + parseFloat(c[0]) : parseFloat(c[0]);
      y = y ? y + parseFloat(c[1]) : parseFloat(c[1]);
      x0 = x;
      y0 = y;
      ctx.moveTo(x, y);
      for (j = 2; j < c.length; j += 2) {
        x += parseFloat(c[j]);
        y += parseFloat(c[j + 1]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
        x = x0;
        y = y0;
      }
    }
    if (parts[i].charAt(0) == "L") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j += 2) {
        x = parseFloat(c[j]);
        y = parseFloat(c[j + 1]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
        x = x0;
        y = y0;
      }
    }
    if (parts[i].charAt(0) == "l") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j += 2) {
        x += parseFloat(c[j]);
        y += parseFloat(c[j + 1]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "C") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j += 6) {
        x = parseFloat(c[j + 4]);
        y = parseFloat(c[j + 5]);
        ctx.bezierCurveTo(
          c[j],
          c[j + 1],
          c[j + 2],
          c[j + 3],
          c[j + 4],
          c[j + 5]
        );
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "c") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j += 6) {
        var x1 = x + parseFloat(c[j]);
        var y1 = y + parseFloat(c[j + 1]);
        var x2 = x + parseFloat(c[j + 2]);
        var y2 = y + parseFloat(c[j + 3]);
        x = x + parseFloat(c[j + 4]);
        y = y + parseFloat(c[j + 5]);
        ctx.bezierCurveTo(x1, y1, x2, y2, x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "H") {
      c = parts[i].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j++) {
        x = parseFloat(c[j]);
        //y = parseFloat(c[j+5]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "h") {
      c = parts[i].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j++) {
        x += parseFloat(c[j]);
        //y = parseFloat(c[j+5]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "V") {
      c = parts[i].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j++) {
        //x = parseFloat(c[j]);
        y = parseFloat(c[j]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "v") {
      c = parts[i].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j++) {
        //x = parseFloat(c[j]);
        y += parseFloat(c[j]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
  }
};

/* ***************************************************************************************
Creating the base of milsymbol
*************************************************************************************** */


// Adding things to ms that can't be done in ms.js since they reference ms.js
ms_1._geticnParts = iconparts;
ms_1._symbolGeometries = symbolgeometries;

// Initiating the symbol class
ms_1.Symbol = ms_symbol;
// Backwards compatibility, will be removed in future version
//ms.symbol = ms.Symbol;

// Standard colors for symbols
ms_1.setColorMode("Light", light);
ms_1.setColorMode("Medium", medium);
ms_1.setColorMode("Dark", dark);
ms_1.setColorMode("FrameColor", framecolor);
ms_1.setColorMode("IconColor", iconcolor);
ms_1.setColorMode("Black", black);
ms_1.setColorMode("White", white);
ms_1.setColorMode("OffWhite", offwhite);
ms_1.setColorMode("None", none);

/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */
ms_1._getLetterProperties = properties;
ms_1._getLetterSIDCicn = geticon;

ms_1.addSIDCicons(iconsSpace, "letter");
ms_1.addSIDCicons(iconsAir, "letter");
ms_1.addSIDCicons(iconsGround, "letter");
ms_1.addSIDCicons(iconsEquipment, "letter");
ms_1.addSIDCicons(iconsInstallations, "letter");
ms_1.addSIDCicons(iconsSea, "letter");
ms_1.addSIDCicons(iconsSubsurface, "letter");
ms_1.addSIDCicons(iconsSof, "letter");
ms_1.addSIDCicons(
  iconsSignalsIntelligence,
  "letter"
);
ms_1.addSIDCicons(
  iconsStabilityoperations,
  "letter"
);
ms_1.addSIDCicons(
  iconsEmergencymanagementsymbols,
  "letter"
);

// Adding support for symbols in MIL-STD-2525B change 2 that are missing in 2525C
ms_1.addSIDCicons(icons2525bCh2, "letter");

// Adding support for tactical points
ms_1.addSIDCicons(
  iconsTacticalPoints2525,
  "letter"
);

ms_1.addSIDCicons(
  iconsTacticalPointsApp6,
  "letter"
);

/* ***************************************************************************************
Number based SIDC
*************************************************************************************** */
ms_1._getNumberProperties = properties$2;
ms_1._getNumberSIDCicn = geticon$2;

ms_1.addSIDCicons(iconsAir$2, "number");
ms_1.addSIDCicons(iconsAirmissile, "number");
ms_1.addSIDCicons(iconsSpace$2, "number");
ms_1.addSIDCicons(iconsSpacemissile, "number");
ms_1.addSIDCicons(iconsLandunit, "number");
ms_1.addSIDCicons(iconsLandcivilian, "number");
ms_1.addSIDCicons(iconsLandequipment, "number");
ms_1.addSIDCicons(iconsLandinstallation, "number");
ms_1.addSIDCicons(iconsSea$2, "number");
ms_1.addSIDCicons(iconsSubsurface$2, "number");
ms_1.addSIDCicons(iconsMinewarfare, "number");
ms_1.addSIDCicons(
  iconsSeabedinstallations,
  "number"
);
ms_1.addSIDCicons(iconsActivites, "number");
ms_1.addSIDCicons(
  iconsSignalsintelligence,
  "number"
);
ms_1.addSIDCicons(iconsCyberspace, "number");
//APP6-D dismounted individual
ms_1.addSIDCicons(
  iconsDismountedindividual,
  "number"
);

/* ***************************************************************************************
Functions that builds the symbol
*************************************************************************************** */
ms_1.addSymbolPart(basegeometry);
ms_1.addSymbolPart(icon);
ms_1.addSymbolPart(modifier);
ms_1.addSymbolPart(statusmodifier);
ms_1.addSymbolPart(affliationdimension);
ms_1.addSymbolPart(textfields);
ms_1.addSymbolPart(directionarrow);
//ms.addSymbolPart(require('./symbolparts/debug.js')); // This draws the symbol octagon, can be good for debugging.

/* ***************************************************************************************
This makes it possible to draw canvas paths in IE11
*************************************************************************************** */
ms_1._Path2D = ms_path2d;

/* ***************************************************************************************
Export ms to the world
*************************************************************************************** */
var src = ms_1;

return src;

})));
