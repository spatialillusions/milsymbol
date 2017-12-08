import { ms } from "../ms.js";

function Symbol() {
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
  this.options.country = ""; // AC Country
  this.options.platformType = ""; // FieldID AD
  this.options.equipmentTeardownTime = ""; // FieldID AE
  this.options.commonIdentifier = ""; // FieldID AF
  this.options.auxiliaryEquipmentIndicator = ""; // FieldID AG
  this.options.headquartersElement = ""; // FieldID AH
  this.options.installationComposition = ""; // FieldID AI
  // FieldID AM Distance
  // FieldID AN Azimuth
  this.options.engagementBar = ""; // FieldID AO EngagementBar
  this.options.engagementType = ""; // Engagement Bar Type, should be one of "TARGET", "NON-TARGET", or "EXPIRED"
  this.options.guardedUnit; // FieldID AQ
  this.options.specialDesignator; // FieldID AR

  this.bbox = new ms.BBox(); // Contains the bounding box of the current symbol
  this.colors = {}; // Contains the colors for the current symbol
  this._validIcon = true; // If we were able to find a valid icon or not.
  this.markerAnchor = { x: 50, y: 50 }; // The anchor point for the current symbol
  this.octagonAnchor = { x: 50, y: 50 }; // The anchor point for the octagon for the current symbol
  this.metadata = {}; // Metadata of the current symbol
  // Initiate symbol.
  if (arguments.length > 0) {
    this.setOptions.apply(this, arguments);
  }
}

// This is here so that we have it initiated in this.symbol from the beginning

import asCanvas from "./symbol/ascanvas.js";
Symbol.prototype.asCanvas = asCanvas;

Symbol.prototype.asDOM = function() {
  return ms._parseXML(this.asSVG());
};

import asSVG from "./symbol/assvg.js";
Symbol.prototype.asSVG = asSVG;

Symbol.prototype.getAnchor = function() {
  return this.markerAnchor;
};

import getColors from "./symbol/getcolors.js";
Symbol.prototype.getColors = getColors;

Symbol.prototype.getOctagonAnchor = function() {
  return this.octagonAnchor;
};

import getOptions from "./symbol/getoptions.js";
Symbol.prototype.getOptions = getOptions;

import getProperties from "./symbol/getproperties.js";
Symbol.prototype.getProperties = getProperties;

import getSize from "./symbol/getsize.js";
Symbol.prototype.getSize = getSize;

import getStyle from "./symbol/getstyle.js";
Symbol.prototype.getStyle = getStyle;

import isValid from "./symbol/isvalid.js";
Symbol.prototype.isValid = isValid;

import setOptions from "./symbol/setoptions.js";
Symbol.prototype.setOptions = setOptions;

Symbol.prototype.toDataURL = function() {
  return "data:image/svg+xml;base64," + window.btoa(this.asSVG());
};

export default Symbol;
