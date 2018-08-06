//import { version } from "../package.json";
var ms = new function() {
  this._brokenPath2D = undefined;
  this._colorModes = {};
  this._dashArrays = {
    pending: "4,4",
    anticipated: "8,12",
    feintDummy: "8,8"
  };
  this._getIcons = {};
  this._getMetadata = {};
  this._hqStaffLength = 100;
  this._iconCache = {}; // A cache of icn to speed stuff up...
  this._iconParts = [];
  this._labelCache = {}; // A cache of label overrides to speed stuff up...
  this._labelOverrides = {};
  this._iconSIDC = {};
  this._iconSIDC.letter = [];
  this._iconSIDC.number = [];
  this._STD2525 = true;
  this._svgNS = "http://www.w3.org/2000/svg";
  this._symbolParts = [];

  //this._autoSVG = false;
  this._autoValidation = false;
  this.version = "2.0.0";

  if (typeof console === "object" && typeof process !== "object") {
    console.info(
      "milsymbol.js " +
        this.version +
        " - Copyright (c) 2018 M" +
        String.fromCharCode(229) +
        "ns Beckman  http://www.spatialillusions.com"
    );
  }
}();

import { BBox } from "./ms/bbox.js";
import { Colormode } from "./ms/colormode.js";

ms.BBox = BBox;
ms.ColorMode = Colormode;

ms.setBrokenPath2D = function(broken) {
  ms._brokenPath2D = broken;
};

ms._getIconParts = function iconparts(
  metadata,
  colors,
  _STD2525,
  monoColor,
  alternateMedal
) {
  var icn = {};

  for (var i in this._iconParts) {
    if (!this._iconParts.hasOwnProperty(i)) continue;
    this._iconParts[i].call(
      this,
      icn,
      metadata,
      colors,
      _STD2525,
      monoColor,
      alternateMedal
    );
  }

  return icn;
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

ms.addIcons = function(obj) {
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      ms.addSIDCicons(obj[i].icons, obj[i].type);
    }
  } else {
    ms.addSIDCicons(obj.icons, obj.type);
  }
};

ms.addSIDCicons = function(parts, type) {
  if (typeof parts === "function") {
    if (this._iconSIDC[type].indexOf(parts) == -1)
      this._iconSIDC[type] = this._iconSIDC[type].concat(parts);
  }
  return ms;
};
ms.addSymbolPart = function(part) {
  if (typeof part === "function") {
    var symbolParts = ms.getSymbolParts();
    if (symbolParts.indexOf(part) == -1)
      ms.setSymbolParts(symbolParts.concat(part));
  }
  return ms;
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
ms.getHqStaffLength = function() {
  return this._hqStaffLength;
};

ms.getSymbolParts = function() {
  return this._symbolParts.slice(0);
};
ms.getVersion = function() {
  return this.version;
};

import outline from "./ms/outline.js";

ms.outline = outline;

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
ms.setHqStaffLength = function(len) {
  this._hqStaffLength = len;
  return this._hqStaffLength;
};
ms.setSymbolParts = function(parts) {
  this._symbolParts = parts;
  return ms;
};
ms.setStandard = function(standard) {
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

/* ***************************************************************************************
Add default colors
*************************************************************************************** */
import ColorModes from "./colormodes.js";
for (var name in ColorModes) {
  ms.setColorMode(name, ColorModes[name]);
}

/* ***************************************************************************************
Add base geometries
*************************************************************************************** */
import geometries from "./ms/symbolgeometries.js";

ms._symbolGeometries = geometries;

/* ***************************************************************************************
Functions that builds the symbol
*************************************************************************************** */
import basegeometry from "./symbolfunctions/basegeometry.js";

ms.addSymbolPart(basegeometry);

import icon from "./symbolfunctions/icon.js";

ms.addSymbolPart(icon);

import modifier from "./symbolfunctions/modifier.js";

ms.addSymbolPart(modifier);

import statusmodifier from "./symbolfunctions/statusmodifier.js";

ms.addSymbolPart(statusmodifier);

import engagmentbar from "./symbolfunctions/engagmentbar.js";

ms.addSymbolPart(engagmentbar);

import affliationdimension from "./symbolfunctions/affliationdimension.js";

ms.addSymbolPart(affliationdimension);

import textfields from "./symbolfunctions/textfields.js";

ms.addSymbolPart(textfields);

import directionarrow from "./symbolfunctions/directionarrow.js";

ms.addSymbolPart(directionarrow);

export { ms };
