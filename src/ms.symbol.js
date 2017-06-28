var ms = require("./ms.js");

function symbol(option1, options) {
  //=======================================================================================
  this._options = {}; //initiate options object.
  if (typeof option1 != "object") {
    // The SIDC for the symbol.
    this._options.sidc = option1;
  } else {
    // Enable to initiate directly with an options object.
    options = option1;
  }
  // Setting default values for options
  // TODO place all of these in a style object
  this._options.size = 100; // The symbol size is actually the L variable in the symbols so the symbol will be larger than this size.
  this._options.fill = true; // Should the icon be filled with color
  this._options.fillOpacity = 1; // Possibility to change the fill opacity
  this._options.frame = true; // Should the icon be framed
  this._options.strokeWidth = 4; // The stroke width of he icon frame.
  this._options.outlineColor = "rgb(239, 239, 239)"; // Color of the outline
  this._options.outlineWidth = 0; // Width of the outline.
  this._options.icon = true; // Should we display the icon?
  this._options.monoColor = false; // Should the icon be monocromatic and if so what color
  this._options.civilianColor = true; // Should we use the Civilian Purple defined in 2525? (We set this to default because I like the color.
  this._options.colorMode = ms.getColorMode("Light"); // 2525C Allows you to use Dark; Medium or Light colors. The values you can set are "Dark";"Medium" or "Light"
  this._options.infoFields = true; // If you have set all info fields but don't want the displayed; then just set this to false.
  this._options.infoSize = 40; // Relative size of the info fields
  this._options.alternateMedal = false; // 2525D lets you choose between MEDAL icn and alternate MEDAL icn for Mines; default is set to MEDAL.

  // TODO place all of these in a fields object
  this._options.quantity = ""; // FieldID C
  this._options.reinforcedReduced = ""; // FieldID F
  this._options.staffComments = ""; // FieldID G
  this._options.additionalInformation = ""; // FieldID H
  this._options.evaluationRating = ""; // FieldID J
  this._options.combatEffectiveness = ""; // FieldID K
  this._options.signatureEquipment = ""; // FieldID L
  this._options.higherFormation = ""; // FieldID M
  this._options.hostile = ""; // FieldID N
  this._options.iffSif = ""; // FieldID P
  this._options.direction = ""; // FieldID Q
  this._options.sigint = ""; // FieldID R2
  this._options.uniqueDesignation = ""; // FieldID T
  this._options.type = ""; // FieldID V
  this._options.dtg = ""; // FieldID W
  this._options.altitudeDepth = ""; // FieldID X
  this._options.location = ""; // FieldID Y
  this._options.speed = ""; // FieldID Z
  this._options.specialHeadquarters = ""; // FieldID AA
  this._options.platformType = ""; // FieldID AD
  this._options.equipmentTeardownTime = ""; // FieldID AE
  this._options.commonIdentifier = ""; // FieldID AF
  this._options.auxiliaryEquipmentIndicator = ""; // FieldID AG
  this._options.headquartersElement = ""; // FieldID AH
  // Not implemented.
  // FieldID AM Distance
  // FieldID AN Azimuth
  // FieldID AO EngagementBar

  this.bbox = new ms.BBox(); // Contains the bounding box of the current marker
  this.colors = {}; // Contains the colors for the current marker
  this._validIcon = true; // If we were able to find a valid icon or not.
  this.markerAnchor = { x: 50, y: 50 }; // The anchor point for the current marker
  this.octagonAnchor = { x: 50, y: 50 }; // The anchor point for the octagon for the current marker
  this.properties = {}; // Properties of the current marker

  // Initiate symbol.
  this.setOptions.call(this, options);
}

// This is here so that we have it initiated in this.symbol from the beginning
symbol.prototype.asCanvas = require("./symbol/ascanvas.js");
symbol.prototype.asDOM = function() {
  return ms._parseXML(this.asSVG());
};
symbol.prototype.asSVG = require("./symbol/assvg.js");
symbol.prototype.getAnchor = function() {
  return this.markerAnchor;
};
symbol.prototype.getColors = require("./symbol/getcolors.js");
symbol.prototype.getOctagonAnchor = function() {
  return this.octagonAnchor;
};
symbol.prototype.getProperties = require("./symbol/getproperties.js");
symbol.prototype.getSize = require("./symbol/getsize.js");
symbol.prototype.isValid = require("./symbol/isvalid.js");
symbol.prototype.setOptions = require("./symbol/setoptions.js");
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
module.exports = symbol;
