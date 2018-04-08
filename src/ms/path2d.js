//import { ms } from "../ms.js";

//########################################################################################
// Support for Path2D in IE 11, if you only use other browsers, you can remove the following
//########################################################################################
export default function(ctx, d) {
  // This function converts a svg path to canvas instructions, it does not support everything
  // but most of the commands in paths.
  ctx.beginPath();
  var x, y, x1, y1, x2, y2, i, j;
  var x0, y0;
  var c;
  var parts = d.match(/([MCLHV][^MCLHV]*)/gi);
  for (i = 0; i < parts.length; i++) {
    if (parts[i].charAt(0) == "M") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      x = parseFloat(c[0]);
      y = parseFloat(c[1]);
      x0 = x;
      y0 = y;
      ctx.moveTo(x, y);
      for (j = 2; j < c.length; j += 2) {
        x = parseFloat(c[j]);
        y = parseFloat(c[j + 1]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
        x = x0;
        y = y0;
      }
    }
    if (parts[i].charAt(0) == "m") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      x = x ? x + parseFloat(c[0]) : parseFloat(c[0]);
      y = y ? y + parseFloat(c[1]) : parseFloat(c[1]);
      x0 = x;
      y0 = y;
      ctx.moveTo(x, y);
      for (j = 2; j < c.length; j += 2) {
        x += parseFloat(c[j]);
        y += parseFloat(c[j + 1]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
        x = x0;
        y = y0;
      }
    }
    if (parts[i].charAt(0) == "L") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j += 2) {
        x = parseFloat(c[j]);
        y = parseFloat(c[j + 1]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
        x = x0;
        y = y0;
      }
    }
    if (parts[i].charAt(0) == "l") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j += 2) {
        x += parseFloat(c[j]);
        y += parseFloat(c[j + 1]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "C") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j += 6) {
        x1 = parseFloat(c[j]);
        y1 = parseFloat(c[j + 1]);
        x2 = parseFloat(c[j + 2]);
        y2 = parseFloat(c[j + 3]);
        x = parseFloat(c[j + 4]);
        y = parseFloat(c[j + 5]);
        ctx.bezierCurveTo(x1, y1, x2, y2, x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "c") {
      c = parts[i].match(/[-\d].*[\d]/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j += 6) {
        x1 = x + parseFloat(c[j]);
        y1 = y + parseFloat(c[j + 1]);
        x2 = x + parseFloat(c[j + 2]);
        y2 = y + parseFloat(c[j + 3]);
        x = x + parseFloat(c[j + 4]);
        y = y + parseFloat(c[j + 5]);
        ctx.bezierCurveTo(x1, y1, x2, y2, x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "H") {
      c = parts[i].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j++) {
        x = parseFloat(c[j]);
        //y = parseFloat(c[j+5]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "h") {
      c = parts[i].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j++) {
        x += parseFloat(c[j]);
        //y = parseFloat(c[j+5]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "V") {
      c = parts[i].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j++) {
        //x = parseFloat(c[j]);
        y = parseFloat(c[j]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
    if (parts[i].charAt(0) == "v") {
      c = parts[i].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g);
      for (j = 0; j < c.length; j++) {
        //x = parseFloat(c[j]);
        y += parseFloat(c[j]);
        ctx.lineTo(x, y);
      }
      if (
        parts[i]
          .replace(/\s/g, "")
          .substr(-1, 1)
          .toUpperCase() == "Z"
      ) {
        ctx.closePath();
      }
    }
  }
}
