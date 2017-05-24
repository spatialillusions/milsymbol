var ms = require("../ms.js");

module.exports = function() {
  function processInstructions(instruction) {
    var svgxml = "";
    for (var i = 0; i < instruction.length; i++) {
      if (Array.isArray(instruction[i])) {
        if (instruction[i].length) {
          svgxml += processInstructions.call(this, instruction[i]);
        }
      } else {
        if (typeof instruction[i] === "object") {
          var svg;
          if (instruction[i].type == "svg") {
            svg = instruction[i].svg;
          } else {
            switch (instruction[i].type) {
              case "path":
                svg = '<path d="' + instruction[i].d + '" ';
                break;
              case "circle":
                svg =
                  '<circle cx="' +
                  instruction[i].cx +
                  '" cy="' +
                  instruction[i].cy +
                  '" r="' +
                  instruction[i].r +
                  '" ';
                break;
              case "text":
                svg =
                  '<text x="' +
                  instruction[i].x +
                  '" y="' +
                  instruction[i].y +
                  '" text-anchor="' +
                  instruction[i].textanchor +
                  '" font-size="' +
                  instruction[i].fontsize +
                  '" font-family="' +
                  instruction[i].fontfamily +
                  '" ';
                if (instruction[i].fontweight)
                  svg += 'font-weight="' + instruction[i].fontweight + '" ';
                break;
              case "translate":
                svg =
                  '<g transform="translate(' +
                  instruction[i].x +
                  "," +
                  instruction[i].y +
                  ')" ';
                break;
              case "rotate":
                svg =
                  '<g transform="rotate(' +
                  instruction[i].degree +
                  "," +
                  instruction[i].x +
                  "," +
                  instruction[i].y +
                  ')" ';
                break;
              case "scale":
                svg = '<g transform="scale(' + instruction[i].factor + ')" ';
                break;
            }
            if (typeof instruction[i].stroke !== "undefined") {
              svg +=
                'stroke-width="' +
                (instruction[i].strokewidth || this.strokeWidth) +
                '" ';
              if (instruction[i].strokedasharray)
                svg +=
                  'stroke-dasharray="' + instruction[i].strokedasharray + '" ';
              if (instruction[i].linecap) {
                svg += 'stroke-linecap="' + instruction[i].linecap + '" ';
                svg += 'stroke-linejoin="' + instruction[i].linecap + '" ';
              }
              if (instruction[i].stroke) {
                svg += 'stroke="' + instruction[i].stroke + '" ';
              } else {
                svg += 'stroke="none" ';
              }
            }
            if (typeof instruction[i].fill !== "undefined")
              svg +=
                'fill="' +
                (instruction[i].fill ? instruction[i].fill : "none") +
                '" ';
            if (typeof instruction[i].fillopacity !== "undefined")
              svg += 'fill-opacity="' + instruction[i].fillopacity + '" ';
            svg += ">";
            switch (instruction[i].type) {
              case "path":
                svg += "</path>";
                break;
              case "circle":
                svg += "</circle>";
                break;
              case "text":
                svg += instruction[i].text + "</text>";
                break;
              case "translate":
                svg += processInstructions.call(this, instruction[i].draw);
                svg += "</g>";
                break;
              case "rotate":
                svg += processInstructions.call(this, instruction[i].draw);
                svg += "</g>";
                break;
              case "scale":
                svg += processInstructions.call(this, instruction[i].draw);
                svg += "</g>";
                break;
            }
          }
          svgxml += svg;
        }
      }
    }
    return svgxml;
  }
  var xml =
    '<svg xmlns="' +
    ms._svgNS +
    '" version="1.2" baseProfile="tiny" width="' +
    this.width +
    '" height="' +
    this.height +
    '" viewBox="' +
    (this.bbox.x1 - this.strokeWidth - this.outlineWidth) +
    " " +
    (this.bbox.y1 - this.strokeWidth - this.outlineWidth) +
    " " +
    this.baseWidth +
    " " +
    this.baseHeight +
    '">';
  xml += processInstructions.call(this, this.drawInstructions);
  xml += "</svg>";
  this.XML = xml;
  return xml;
};
