const ms = new (function() {
  this._autoValidation = false;
  this.version = "3.0.0";
  if (typeof console === "object" && typeof process !== "object") {
    console.info(
      "milsymbol.js " +
        this.version +
        " - Copyright (c) 2024 M" +
        String.fromCharCode(229) +
        "ns Beckman  http://www.spatialillusions.com"
    );
  }
})();

import ColorModes from "./colormodes.js";
import basegeometry from "./symbolfunctions/basegeometry.js";
import icon from "./symbolfunctions/icon.js";
import modifier from "./symbolfunctions/modifier.js";
import statusmodifier from "./symbolfunctions/statusmodifier.js";
import engagmentbar from "./symbolfunctions/engagmentbar.js";
import affliationdimension from "./symbolfunctions/affliationdimension.js";
import textfields from "./symbolfunctions/textfields.js";
import directionarrow from "./symbolfunctions/directionarrow.js";
import debug from "./symbolfunctions/debug.js";

ms.setColorMode = function(mode, colorMode) {
  this._colorModes[mode] = {};
  this._colorModes[mode].Hostile = colorMode.Hostile;
  this._colorModes[mode].Friend = colorMode.Friend;
  this._colorModes[mode].Neutral = colorMode.Neutral;
  this._colorModes[mode].Unknown = colorMode.Unknown;
  this._colorModes[mode].Civilian = colorMode.Civilian;
  this._colorModes[mode].Suspect = colorMode.Suspect;
  return this._colorModes[mode];
};

ms.addSymbolPart = function(part) {
  if (typeof part === "function") {
    const symbolParts = ms.getSymbolParts();
    if (symbolParts.indexOf(part) == -1)
      ms.setSymbolParts(symbolParts.concat(part));
  }
  return ms;
};

ms.getSymbolParts = function() {
  return this._symbolParts.slice(0);
};

ms.setSymbolParts = function(parts) {
  this._symbolParts = parts;
  return ms;
};

ms.reset = function() {
  this._brokenPath2D = undefined;
  this._colorModes = {};
  for (const name in ColorModes) {
    ms.setColorMode(name, ColorModes[name]);
  }
  this._dashArrays = {
    pending: "4,4",
    anticipated: "8,12",
    feintDummy: "8,8",
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
  ms.addSymbolPart(basegeometry);
  ms.addSymbolPart(icon);
  ms.addSymbolPart(modifier);
  ms.addSymbolPart(statusmodifier);
  ms.addSymbolPart(engagmentbar);
  ms.addSymbolPart(affliationdimension);
  ms.addSymbolPart(textfields);
  ms.addSymbolPart(directionarrow);
};

ms.reset();

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
  const icn = {};

  for (const i in this._iconParts) {
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

ms._scale = function(factor, instruction, non_scaling_stroke) {
  function recurse_scale(instruction, factor) {
    if (Array.isArray(instruction)) {
      instruction.forEach(d => {
        d.non_scaling_stroke = 1 / factor;
        if (d.hasOwnProperty("draw")) {
          recurse_scale(d.draw, factor);
        }
        if (Array.isArray(d)) {
          d.forEach(e => {
            recurse_scale(e, factor);
          });
        }
      });
    } else {
      instruction.non_scaling_stroke = 1 / factor;
    }
  }

  if (non_scaling_stroke) {
    recurse_scale(instruction, factor);
  }

  return {
    type: "translate",
    x: 100 - factor * 100,
    y: 100 - factor * 100,
    draw: [{ type: "scale", factor: factor, draw: [instruction] }],
  };
};
ms._translate = function(x, y, instruction) {
  return { type: "translate", x: x, y: y, draw: [instruction] };
};

ms.addIconParts = function(parts) {
  if (!Array.isArray(parts)) parts = [parts];
  for (let i = 0; i < parts.length; i++) {
    if (
      typeof parts[i] === "function" &&
      this._iconParts.indexOf(parts[i]) == -1
    ) {
      this._iconParts = this._iconParts.concat(parts[i]);
    }
  }
  return ms;
};
ms.addLabelOverrides = function(parts, type) {
  this._labelCache = {}; // Clear the cache
  if (typeof parts === "function") {
    if (!this._labelOverrides.hasOwnProperty(type)) {
      this._labelOverrides[type] = [];
    }
    this._labelOverrides[type] = this._labelOverrides[type].concat(parts);
  }
  return ms;
};

ms.addIcons = function(obj) {
  this._iconCache = {}; // Clear the cache
  if (!Array.isArray(obj)) obj = [obj];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].hasOwnProperty("getMetadata"))
      ms._getMetadata[obj[i].type] = obj[i].getMetadata;
    if (obj[i].hasOwnProperty("getIcons"))
      ms._getIcons[obj[i].type] = obj[i].getIcons;
    if (obj[i].hasOwnProperty("iconParts")) ms.addIconParts(obj[i].iconParts);
    if (obj[i].hasOwnProperty("labels"))
      ms.addLabelOverrides(obj[i].labels, obj[i].type);
    if (obj[i].hasOwnProperty("icons"))
      ms.addSIDCicons(obj[i].icons, obj[i].type);
  }
};

ms.addSIDCicons = function(parts, type) {
  if (typeof parts === "function") {
    if (this._iconSIDC[type].indexOf(parts) == -1)
      this._iconSIDC[type] = this._iconSIDC[type].concat(parts);
  }
  return ms;
};

ms.getColorMode = function(mode) {
  const c = this._colorModes[mode];
  // Clone the mode and return the clone
  return new ms.ColorMode(
    c.Civilian,
    c.Friend,
    c.Hostile,
    c.Neutral,
    c.Unknown,
    c.Suspect
  );
};
ms.getDashArrays = function() {
  return this._dashArrays;
};
ms.getHqStaffLength = function() {
  return this._hqStaffLength;
};

ms.getVersion = function() {
  return this.version;
};

import outline from "./ms/outline.js";

ms.outline = outline;

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

ms.showOctagon = function() {
  ms.addSymbolPart(debug);
};
/* ***************************************************************************************
Add base geometries
*************************************************************************************** */
import geometries from "./ms/symbolgeometries.js";

ms._symbolGeometries = geometries;

export { ms };
