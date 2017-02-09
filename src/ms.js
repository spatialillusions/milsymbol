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
'use strict';

var MS = new function(){
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
  
  this.autoSVG = true;
  this.version = '0.6.0';	

  if (typeof console === 'object') {
    console.log('milsymbol.js ' + this.version + ' - Copyright (c) 2017 Måns Beckman  http://www.spatialillusions.com');
  }
  if (typeof parseXML === 'undefined') {
    window.parseXML = function (s,doc) {
      doc = doc || document;
      var doc2 = (new DOMParser()).parseFromString(s, "text/xml");
      return doc.adoptNode(doc2.documentElement);
    };
  }
};

MS._scale = function(factor, instruction){
  return {type:'translate',x:(100-factor*100),y:(100-factor*100),draw:[{type:'scale',factor:factor,draw:[instruction]}]};
};
MS._translate = function(x, y, instruction){
  return {type:'translate',x:x,y:y,draw:[instruction]};
};

MS.addIconParts = function(parts) {
  if (typeof parts === 'function') {
    this._iconParts = this._iconParts.concat(parts);
  }
  return MS;
};
MS.addLabelOverrides = function(parts, type){
  if (typeof parts === 'function') {
    if (!this._labelOverrides.hasOwnProperty(type)) this._labelOverrides[type] = [];
    this._labelOverrides[type] = this._labelOverrides[type].concat(parts);
  }
  return MS;
};
MS.addSIDCicons = function(parts, type){
  if (typeof parts === 'function') {
    this['_' + type + 'SIDCicons'] = this['_' + type + 'SIDCicons'].concat(parts);
  }
  return MS;
};
MS.addSymbolPart = function(part) {
  if (typeof part === 'function') {
    MS.setSymbolParts(MS.getSymbolParts().concat(part));
  }
  return MS;
};
MS.BBox = require('./ms/bbox.js');
MS.ColorMode = function(civilian, friend, hostile, neutral, unknown) {
  var o = {};
  o.Civilian = civilian;
  o.Friend 	= friend;
  o.Hostile = hostile;
  o.Neutral = neutral;
  o.Unknown = unknown;
  return o;
};
MS.getColorMode = function(mode) {
  var c = this._colorModes[mode];
  // Clone the mode and return the clone
  return new MS.ColorMode(c.Civilian, c.Friend, c.Hostile, c.Neutral, c.Unknown); 
};
MS.getDashArrays = function() {
  return this._dashArrays;
};
MS.getHqStafLength = function() {
  return this._hqStafLength;
};
MS.getSymbolParts = function() {
  return this._symbolParts.slice(0);
};
MS.getVersion = function() {return this.version};
MS.outline = function(geom, outline, stroke, color){
  if(Array.isArray(geom)){
    var clone = [];
    for(var i in geom){
      clone.push(MS.outline(geom[i],outline,stroke,color));
    }
  }else{
    var clone = {};
    for (var key in geom){
      if(['fill','fillopacity'].indexOf(key) == -1){
        clone[key] = geom[key];
      }
    }
    if(geom.type == 'translate' || geom.type == 'rotate'  || geom.type == 'scale'){
      clone.draw = [];
      for (var draw in geom.draw){
        clone.draw.push(MS.outline(geom.draw[draw],outline,stroke,color));
      }
    }else{
      clone.strokewidth = clone.stroke != false ? (Number(clone.strokewidth||stroke) + 2*outline) : 2*outline;
      clone.stroke = color;
      clone.fill = false;
      clone.linecap = 'round';
    }
  }
  return clone;
};
MS.setAutoSVG = function(mode) {this.autoSVG = mode; return this.autoSVG;};
MS.setColorMode = function(mode, colorMode) {
  this._colorModes[mode] = {};
  this._colorModes[mode].Hostile 	= colorMode.Hostile;
  this._colorModes[mode].Friend 	= colorMode.Friend;
  this._colorModes[mode].Neutral 	= colorMode.Neutral;
  this._colorModes[mode].Unknown 	= colorMode.Unknown;
  this._colorModes[mode].Civilian = colorMode.Civilian;
  return this._colorModes[mode];
};
MS.setDashArrays = function(pending, anticipated, feintDummy) {
  this._dashArrays.pending = pending;
  this._dashArrays.anticipated = anticipated;
  this._dashArrays.feintDummy = feintDummy;
  return this._dashArrays;
};
MS.setHqStafLength = function(len) {
  this._hqStafLength = len;
  return this._hqStafLength;
};
MS.setSymbolParts = function(parts) {
  this._symbolParts = parts;
  return MS;
};
MS.setStandard = require('./ms/setstandard.js');



// For backward compability
MS.addMarkerParts = function(part) {
  console.log('addMarkerParts() is deprecated and should not be used, use addSymbolPart() instead.');
  MS.addSymbolPart(part);
};
MS.bboxMax = function(box1, box2){
  console.log('bboxMax() is deprecated and should not be used, use BBox.merge() instead.');
  return box1.merge(box2);
};
MS.buildingBlock = function(pre, post, bbox) {
  console.log('buildingBlock() is deprecated and should not be used.');
  if ( pre.length == 1 && Array.isArray(pre[0]) ) pre = pre[0];
  if ( post.length == 1 && Array.isArray(post[0]) ) post = post[0];
  return {pre: pre, post: post, bbox: bbox};
};
MS.addLetterLabelOverrides = function(parts){
  console.log('addLetterLabelOverrides() is deprecated and should not be used, use MS.addLabelOverrides() instead.');
  if (typeof parts === 'function') {
    if (!this._labelOverrides.hasOwnProperty('letter')) this._labelOverrides['letter'] = [];
      this._labelOverrides['letter'] = this._labelOverrides['letter'].concat(parts);
    }
};
MS.addLetterSIDCicons = function(parts){
  console.log('addLetterSIDCicons() is deprecated and should not be used, use MS.addSIDCicons() instead.');
  if (typeof parts === 'function') {
    this._letterSIDCicons = this._letterSIDCicons.concat(parts);
  }
};
MS.addNumberLabelOverrides = function(parts){
  console.log('addNumberLabelOverrides() is deprecated and should not be used, use MS.addLabelOverrides() instead.');
  if (typeof parts === 'function') {
    if (!this._labelOverrides.hasOwnProperty('number')) this._labelOverrides['number'] = [];
      this._labelOverrides['number'] = this._labelOverrides['number'].concat(parts);
    }
};
MS.addNumberSIDCicons = function(parts){
  console.log('addNumberSIDCicons() is deprecated and should not be used, use MS.addSIDCicons() instead.');
  if (typeof parts === 'function') {
    this._numberSIDCicons = this._numberSIDCicons.concat(parts);
  }
};

MS.bbox = function(box){
  console.log('bbox() is deprecated and should not be used, use BBox() instead.');
  return MS.BBox(box);
} 

MS.colorMode = function(civilian, friend, hostile, neutral, unknown) {
  console.log('colorMode() is deprecated and should not be used, use ColorMode() instead.');
  return MS.ColorMode(civilian, friend, hostile, neutral, unknown);
};

MS.getMarkerParts = function() {
  console.log('getMarkerParts() is deprecated and should not be used, use MS.getSymbolParts() instead.');
  return MS.getSymbolParts();
};

MS.setMarkerParts = function(parts) {
  console.log('setMarkerParts() is deprecated and should not be used, use MS.setSymbolParts() instead.');
  MS.setSymbolParts(parts);
  return MS;
};

module.exports = MS;