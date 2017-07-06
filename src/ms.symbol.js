var ms = require("./ms.js");

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
  this.style.strokeWidth = 4; // The stroke width of he icon frame.
  this.style.outlineColor = "rgb(239, 239, 239)"; // Color of the outline
  this.style.outlineWidth = 0; // Width of the outline.
  this.style.icon = true; // Should we display the icon?
  this.style.monoColor = ""; // Should the icon be monocromatic and if so what color
  this.style.civilianColor = true; // Should we use the Civilian Purple defined in 2525? (We set this to default because I like the color.
  this.style.colorMode = "Light"; // 2525C Allows you to use Dark; Medium or Light colors. The values you can set are "Dark";"Medium" or "Light"
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

  this.bbox = new ms.BBox(); // Contains the bounding box of the current marker
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
symbol.prototype.getOptions = require("./symbol/getoptions.js");
symbol.prototype.getProperties = require("./symbol/getproperties.js");
symbol.prototype.getSize = require("./symbol/getsize.js");
symbol.prototype.getStyle = require("./symbol/getStyle.js");
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
