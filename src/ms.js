import { version } from "../package.json";
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

  this._autoSVG = false;
  this._autoValidation = false;
  this.version = version;

  if (typeof console === "object") {
    console.info(
      "milsymbol.js " +
        this.version +
        " - Copyright (c) 2017 Måns Beckman  http://www.spatialillusions.com"
    );
  }
}();

import { bbox } from "./ms/bbox.js";
import { colormode } from "./ms/colormode.js";
ms.BBox = bbox;
ms.ColorMode = colormode;

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
  this._autoSVG = mode;
  return this._autoSVG;
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

export { ms };
