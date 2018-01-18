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

import { BBox } from "./ms/bbox.js";
import { colormode } from "./ms/colormode.js";
ms.BBox = BBox;
ms.ColorMode = colormode;

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

import outline from "./ms/outline.js";
ms.outline = outline;

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

/* ***************************************************************************************
Add support for getting metadata and icons
*************************************************************************************** */
import { metadata as metadata_letter } from "./lettersidc/metadata.js";
import { metadata as metadata_number } from "./numbersidc/metadata.js";
ms._getMetadata = {};
ms._getMetadata.letter = metadata_letter;
ms._getMetadata.number = metadata_number;

import { geticons as getIcons_letter } from "./lettersidc/geticons.js";
import { geticons as getIcons_number } from "./numbersidc/geticons.js";
ms._getIcons = {};
ms._getIcons.letter = getIcons_letter;
ms._getIcons.number = getIcons_number;

/* ***************************************************************************************
Add default colors
*************************************************************************************** */
import black from "./colormodes/black.js";
import dark from "./colormodes/dark.js";
import framecolor from "./colormodes/framecolor.js";
import iconcolor from "./colormodes/iconcolor.js";
import light from "./colormodes/light.js";
import medium from "./colormodes/medium.js";
import none from "./colormodes/none.js";
import offwhite from "./colormodes/offwhite.js";
import white from "./colormodes/white.js";
ms.setColorMode("Black", black);
ms.setColorMode("Dark", dark);
ms.setColorMode("FrameColor", framecolor);
ms.setColorMode("IconColor", iconcolor);
ms.setColorMode("Light", light);
ms.setColorMode("Medium", medium);
ms.setColorMode("None", none);
ms.setColorMode("OffWhite", offwhite);
ms.setColorMode("White", white);

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
