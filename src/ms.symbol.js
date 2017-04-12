var ms = require('./ms.js');

function symbol(option1,options){
  //=======================================================================================
  if (typeof option1 != 'object') {
  	// The SIDC for the symbol.
  	this.SIDC = option1;
  }else{
  	// Enable to initiate directly with an options object.
  	options = option1;
  }
  // Setting default values for options
  // TODO place all of these in a style object
  this.size                        = 100; // The symbol size is actually the L variable in the symbols so the symbol will be larger than this size.
  this.fill                        = true; // Should the icon be filled with color
  this.fillOpacity                 = 1; // Possibility to change the fill opacity
  this.frame                       = true; // Should the icon be framed
  this.strokeWidth                 = 4; // The stroke width of he icon frame.
  this.outlineColor                = 'rgb(239, 239, 239)';// Color of the outline
  this.outlineWidth                = 0; // Width of the outline.
  this.icon                        = true; // Should we display the icon?
  this.monoColor                   = false; // Should the icon be monocromatic and if so what color
  this.civilianColor               = true; // Should we use the Civilian Purple defined in 2525? (We set this to default because I like the color.
  this.colorMode                   = ms.getColorMode('Light'); // 2525C Allows you to use Dark; Medium or Light colors. The values you can set are "Dark";"Medium" or "Light"
  this.infoFields                  = true; // If you have set all info fields but don't want the displayed; then just set this to false.
  this.infoSize                    = 40; // Relative size of the info fields
  this.alternateMedal              = false; // 2525D lets you choose between MEDAL icn and alternate MEDAL icn for Mines; default is set to MEDAL.
  
  // TODO place all of these in a fields object
  this.quantity                    = ''; // FieldID C
  this.reinforcedReduced           = ''; // FieldID F
  this.staffComments               = ''; // FieldID G
  this.additionalInformation       = ''; // FieldID H
  this.evaluationRating            = ''; // FieldID J
  this.combatEffectiveness         = ''; // FieldID K
  this.signatureEquipment          = ''; // FieldID L
  this.higherFormation             = ''; // FieldID M
  this.hostile                     = ''; // FieldID N
  this.iffSif                      = ''; // FieldID P
  this.direction                   = ''; // FieldID Q
  this.sigint                      = ''; // FieldID R2
  this.uniqueDesignation           = ''; // FieldID T
  this.type                        = ''; // FieldID V
  this.dtg                         = ''; // FieldID W
  this.altitudeDepth               = ''; // FieldID X
  this.location                    = ''; // FieldID Y
  this.speed                       = ''; // FieldID Z
  this.specialHeadquarters         = ''; // FieldID AA
  this.platformType                = ''; // FieldID AD
  this.equipmentTeardownTime       = ''; // FieldID AE
  this.commonIdentifier            = ''; // FieldID AF
  this.auxiliaryEquipmentIndicator = ''; // FieldID AG
  this.headquartersElement         = ''; // FieldID AH
  // Not implemented.
  // FieldID AM Distance
  // FieldID AN Azimuth
  // FieldID AO EngagementBar

  this.bbox = new ms.BBox(); // Contains the bounding box of the current marker
  this.colors = {}; // Contains the colors for the current marker
  this._validIcon = true; // If we were able to find a valid icon or not.
  this.markerAnchor = {x:50,y:50}; // The anchor point for the current marker
  this.octagonAnchor = {x:50,y:50}; // The anchor point for the octagon for the current marker
  this.properties = {}; // Properties of the current marker

  // Initiate symbol.
  this.setOptions.call(this, options);
}

// This is here so that we have it initiated in this.symbol from the beginning
symbol.prototype.asCanvas = require('./symbol/ascanvas.js');
symbol.prototype.asDOM = function() { return parseXML(this.asSVG()); };
symbol.prototype.asSVG = require('./symbol/assvg.js');
symbol.prototype.getAnchor = function() { return this.markerAnchor; };
symbol.prototype.getColors = require('./symbol/getcolors.js');
symbol.prototype.getOctagonAnchor = function() { return this.octagonAnchor; };
symbol.prototype.getProperties = require('./symbol/getproperties.js');
symbol.prototype.getSize = require('./symbol/getsize.js');
symbol.prototype.isValid = function() {return this._validIcon;};
symbol.prototype.setOptions = require('./symbol/setoptions.js');
symbol.prototype.toDataURL = function() { return ("data:image/svg+xml;base64," + btoa(this.asSVG())); };

// For backward compability
symbol.prototype.asImage = function(){
  console.warn('asImage() is deprecated and should not be used, use toDataURL() instead.');
  return this.toDataURL.call(this);
};
symbol.prototype.getMarker = function(){
  console.warn('getMarker() is deprecated and should not be used, in most cases its not needed and you can use setOptions() instead.');
  return this.setOptions.call(this);
};

module.exports = symbol;