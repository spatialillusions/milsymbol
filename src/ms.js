/*! ======================================================================================

Copyright (c) 2017 Måns Beckman  http://www.spatialillusions.com
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

------------------------------------------------------------------------------------------

For updates and more information go to http://www.spatialillusions.com

======================================================================================= */
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
  this._markerParts = [];
  this._numberSIDCicons = [];
  this._STD2525 = true;
  this._svgNS = "http://www.w3.org/2000/svg";
  
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

MS.addIconParts = function(parts) {
  if (typeof parts === 'function') {
    this._iconParts = this._iconParts.concat(parts);
  }
};
MS.addLetterLabelOverrides = function(parts){
  if (typeof parts === 'function') {
    if (!this._labelOverrides.hasOwnProperty('letter')) this._labelOverrides['letter'] = [];
      this._labelOverrides['letter'] = this._labelOverrides['letter'].concat(parts);
    }
};
MS.addLetterSIDCicons = function(parts){
  if (typeof parts === 'function') {
    this._letterSIDCicons = this._letterSIDCicons.concat(parts);
  }
};
MS.addMarkerParts = function(parts) {
  if (typeof parts === 'function') {
    MS.setMarkerParts(MS.getMarkerParts().concat(parts));
  }
};
MS.addNumberLabelOverrides = function(parts){
  if (typeof parts === 'function') {
    if (!this._labelOverrides.hasOwnProperty('number')) this._labelOverrides['number'] = [];
      this._labelOverrides['number'] = this._labelOverrides['number'].concat(parts);
    }
};
MS.addNumberSIDCicons = function(parts){
  if (typeof parts === 'function') {
    this._numberSIDCicons = this._numberSIDCicons.concat(parts);
  }
};
MS.bbox = require('./ms/bbox.js');
MS.buildingBlock = function(pre, post, bbox) {
  if ( pre.length == 1 && Array.isArray(pre[0]) ) pre = pre[0];
  if ( post.length == 1 && Array.isArray(post[0]) ) post = post[0];
  return {pre: pre, post: post, bbox: bbox};
};
MS.colorMode = function(civilian, friend, hostile, neutral, unknown) {
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
  return MS.colorMode(c.Civilian, c.Friend, c.Hostile, c.Neutral, c.Unknown); 
};
MS.getDashArrays = function() {
  return this._dashArrays;
};
MS.getHqStafLength = function() {
  return this._hqStafLength;
};
MS.getMarkerParts = function() {
  return this._markerParts.slice(0);
};
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
MS.rotate = function(angle, instruction){
  return {type:'rotate',degree:angle,x:100,y:100,draw:[instruction]};
};
MS.scale = function(factor, instruction){
  return {type:'translate',x:(100-factor*100),y:(100-factor*100),draw:[{type:'scale',factor:factor,draw:[instruction]}]};
};
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
MS.setMarkerParts = function(parts) {
  this._markerParts = parts;
};
MS.setStandard = require('./ms/setstandard.js');
MS.translate = function(x, y, instruction){
  return {type:'translate',x:x,y:y,draw:[instruction]};
};


// For backward compability
MS.bboxMax = function(box1, box2){
	return box1.merge(box2);
};

module.exports = MS;