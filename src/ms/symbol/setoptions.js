import { ms } from "../../ms.js";
export default function setOptions() {
  var i;
  for (i = 0; i < arguments.length; i++) {
    var options = arguments[i];
    if (typeof options === "object") {
      for (var key in options) {
        if (!options.hasOwnProperty(key)) continue;
        if (key === "SIDC") {
          // backward compability
          this.options.sidc = options[key];
          continue;
        }
        if (this.style.hasOwnProperty(key)) {
          this.style[key] = options[key];
        } else {
          this.options[key] = options[key];
        }
      }
    } else {
      // if there just is something not an object, we asume that it is the SIDC
      this.options.sidc = options;
    }
  }
  // Reset if the icon is valid
  this.validIcon = true;

  //Updating the object with metadata of the symbol
  this.metadata = this.getMetadata();

  //Updating the object with colors
  this.colors = this.getColors();

  this.drawInstructions = [];

  this.bbox = new ms.BBox();
  //Processing all parts of the symbol, adding them to the drawinstruction and updating the boundingbox
  for (i in ms._symbolParts) {
    if (!ms._symbolParts.hasOwnProperty(i)) continue;
    var m = ms._symbolParts[i].call(this, ms);
    var notEmpty = m.pre.length > 0 || m.post.length > 0;
    if (!m.pre) continue;
    if (m.pre.length > 0) {
      while (m.pre.length == 1) {
        m.pre = m.pre[0];
      }
      if (m.pre.length != 0) {
        this.drawInstructions = [].concat(m.pre, this.drawInstructions);
      }
    }
    if (m.post.length > 0) {
      while (m.post.length == 1) {
        m.post = m.post[0];
        if (typeof m.post == "undefined") break;
      }
      if (typeof m.post == "undefined" || m.post.length != 0) {
        /*
        You might think it is strange to add it if it is undefined, and you are correct. 
        But this makes it possible to find invalid symbols using the isValid function.
        //*/
        this.drawInstructions = this.drawInstructions.concat(m.post);
      }
    }
    if (typeof m.bbox === "object" && notEmpty) {
      this.bbox.merge(m.bbox);
    }
  }

  if (this.style.padding) {
    // if set, add extra padding
    this.bbox.x1 -= this.style.padding;
    this.bbox.x2 += this.style.padding;
    this.bbox.y1 -= this.style.padding;
    this.bbox.y2 += this.style.padding;
  }

  var anchor = { x: 100, y: 100 };
  this.octagonAnchor = {
    x:
      ((anchor.x -
        this.bbox.x1 +
        parseFloat(this.style.strokeWidth) +
        parseFloat(this.style.outlineWidth)) *
        this.style.size) /
      100,
    y:
      ((anchor.y -
        this.bbox.y1 +
        parseFloat(this.style.strokeWidth) +
        parseFloat(this.style.outlineWidth)) *
        this.style.size) /
      100
  };
  //If it is a headquarters the anchor should be at the end of the staf
  if (this.metadata.headquarters) {
    var hqStaffLength = this.style.hqStaffLength || ms._hqStaffLength;
    anchor = {
      x: this.metadata.baseGeometry.bbox.x1,
      y: this.metadata.baseGeometry.bbox.y2 + hqStaffLength
    };
  }

  if (this.style.square) {
    var maxx = Math.max(anchor.x - this.bbox.x1, this.bbox.x2 - anchor.x);
    var maxy = Math.max(anchor.y - this.bbox.y1, this.bbox.y2 - anchor.y);
    var max = Math.max(maxx, maxy);
    this.bbox.x1 = anchor.x - max;
    this.bbox.y1 = anchor.y - max;
    this.bbox.x2 = anchor.x + max;
    this.bbox.y2 = anchor.y + max;
  }

  this.baseWidth =
    this.bbox.width() +
    Number(this.style.strokeWidth * 2) +
    Number(this.style.outlineWidth * 2); //Adding the stoke width as margins and a little bit extra
  this.baseHeight =
    this.bbox.height() +
    Number(this.style.strokeWidth * 2) +
    Number(this.style.outlineWidth * 2); //Adding the stoke width as margins and a little bit extra

  this.width = (this.baseWidth * this.style.size) / 100;
  this.height = (this.baseHeight * this.style.size) / 100;

  this.symbolAnchor = {
    x:
      ((anchor.x -
        this.bbox.x1 +
        parseFloat(this.style.strokeWidth) +
        parseFloat(this.style.outlineWidth)) *
        this.style.size) /
      100,
    y:
      ((anchor.y -
        this.bbox.y1 +
        parseFloat(this.style.strokeWidth) +
        parseFloat(this.style.outlineWidth)) *
        this.style.size) /
      100
  };

  //if (ms._autoSVG) this.asSVG();
  if (ms._autoValidation)
    if (!this.isValid()) {
      console.warn("Error in symbol: " + this.options.sidc);
      console.warn(this.isValid(true));
    }

  return this;
}
