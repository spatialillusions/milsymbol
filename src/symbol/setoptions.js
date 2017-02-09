var MS = require('../ms.js');

module.exports = function(options){
  if (typeof options === 'object') {
    for (var key in options){
      if (!options.hasOwnProperty(key)) continue;
      this[key] = options[key];
    }
  }
  //Updating the object with properties of the marker
  this.properties = this.getProperties();
  
  //Updating the object with colors
  this.colors = this.getColors();

  this.drawInstructions = [];
  
  this.bbox = new MS.BBox();
  //Processing all parts of the marker, adding them to the drawinstruction and updating the boundingbox
  for (var i in MS._symbolParts){
    if (!MS._symbolParts.hasOwnProperty(i)) continue;
    var m = MS._symbolParts[i].call(this);
    if (!m.pre) continue;
    if(m.pre.length)this.drawInstructions.unshift(m.pre);
    if(m.post.length)this.drawInstructions.push(m.post);
    if (m.bbox)this.bbox.merge(m.bbox);
  }

  this.baseWidth = this.bbox.width() + Number(this.strokeWidth*2) + Number(this.outlineWidth*2);//Adding the stoke width as margins and a little bit extra
  this.baseHeight = this.bbox.height() + Number(this.strokeWidth*2) + Number(this.outlineWidth*2);//Adding the stoke width as margins and a little bit extra

  this.width = this.baseWidth*this.size/100;
  this.height = this.baseHeight*this.size/100;

  var anchor = {x:100,y:100};
  this.octagonAnchor = {
    x: (anchor.x-this.bbox.x1+parseFloat(this.strokeWidth) + parseFloat(this.outlineWidth))*this.size/100,
    y: (anchor.y-this.bbox.y1+parseFloat(this.strokeWidth) + parseFloat(this.outlineWidth))*this.size/100};
  //If it is a headquarters the anchor should be at the end of the staf
  if(this.properties.headquarters){
	var hqStafLength = this.hqStafLength || MS._hqStafLength;
    anchor = {
      x:this.properties.baseGeometry.bbox.x1,
      y:this.properties.baseGeometry.bbox.y2 + hqStafLength};
  }
  this.markerAnchor = {
    x: (anchor.x-this.bbox.x1+parseFloat(this.strokeWidth) + parseFloat(this.outlineWidth))*this.size/100,
    y: (anchor.y-this.bbox.y1+parseFloat(this.strokeWidth) + parseFloat(this.outlineWidth))*this.size/100};

  if(MS.autoSVG)this.asSVG();

  return this;
};