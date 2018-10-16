import { ms } from "../../ms.js";
export default function asCanvas(ratio) {
  if (typeof ms._brokenPath2D == "undefined") {
    /* 
      In EdgeHTML14 Microsoft implemented support for Path2D, but they didn't implement support 
      for initiating it with a SVG path, and if you initiate it with an SVG path, it will not throw 
      an error, instead it will return an empty path and log a warning.
      This will check for that behaviour and make sure we use the workaround if Path2D is broken. 
      //*/
    if (typeof Path2D == "undefined") {
      // If Path2D dosen't exist it is definetly broken
      ms.setBrokenPath2D(true);
    } else {
      // If Path2D exists we need to check if it is broken
      var canv = document.createElement("canvas");
      canv.widht = 1;
      canv.height = 1;
      var _ctx = canv.getContext("2d");
      // Draw an SVG path to the canvas...
      var p = new Path2D("M0 0 h 10 v 10 h -10 Z");
      _ctx.fill(p);
      // Pick a pixel and see if it is filled with black... (if not SVG is not working)
      var data = _ctx.getImageData(0, 0, 1, 1).data.join();
      ms.setBrokenPath2D(!(data == "0,0,0,255"));
    }
  }

  var canvas = document.createElement("canvas");
  //TODO fix the pixel ratio
  ratio = ratio || 1; //window.devicePixelRatio || 1;
  canvas.width = this.width * ratio;
  canvas.height = this.height * ratio;
  //canvas.style.width = this.width +'px';
  //canvas.style.height = this.height +'px';
  var ctx = canvas.getContext("2d");
  ctx.scale((ratio * this.style.size) / 100, (ratio * this.style.size) / 100);
  ctx.translate(
    -(this.bbox.x1 - this.style.strokeWidth - this.style.outlineWidth),
    -(this.bbox.y1 - this.style.strokeWidth - this.style.outlineWidth)
  );
  this.canvasDraw.call(this, ctx, this.drawInstructions);
  return canvas;
}
