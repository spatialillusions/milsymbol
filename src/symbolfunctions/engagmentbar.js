// Engagment bar ##################################################################################
export default function engagement(ms) {
  var drawArray1 = [];
  var drawArray2 = [];
  var bbox = this.bbox;
  var x1 = bbox.x1;
  var x2 = bbox.x2;
  var y1 = bbox.y1;
  var y2 = bbox.y2;

  if (this.options.engagementBar !== "") {
    y1 -= 6;
    var fontFamily = this.style.fontfamily;
    var fontColor =
      this.colors.iconColor[this.metadata.affiliation] ||
      this.colors.iconColor["Friend"];

    drawArray2.push({
      type: "text",
      text: this.options.engagementBar,
      x: 100,
      y: bbox.y1 - 11,
      textanchor: "middle",
      fontsize: 22,
      fontfamily: fontFamily,
      fontweight: "bold",
      fill: fontColor,
      stroke: false
    });

    var color = false;
    if (this.metadata.fill && this.style.monoColor === "") {
      var colors = {
        TARGET: "rgb(255, 0, 0)",
        "NON-TARGET": "rgb(255, 255, 255)",
        EXPIRED: "rgb(255, 120, 0)"
      };
      color =
        colors[this.options.engagementType.toUpperCase()] ||
        this.colors.fillColor[this.metadata.affiliation];
    }
    // Bar width
    var width = Math.max(bbox.width(), this.options.engagementBar.length * 16);
    x1 = Math.min(x1, 100 - width / 2);
    x2 = Math.max(x2, 100 + width / 2);

    //Add the bar to the geometry
    drawArray2.unshift({
      type: "path",
      strokewidth: this.style.strokeWidth,
      fill: color,
      stroke: this.colors.frameColor[this.metadata.affiliation],
      d:
        "M" +
        (100 - width / 2) +
        "," +
        y1 +
        " l" +
        width +
        ",0 0,-25 -" +
        width +
        ",0 z"
    });

    //Add the hight of the codition bar to the geometry bounds
    y1 -= 25;
    //outline
    if (this.style.outlineWidth > 0) {
      var outline;
      if (this.metadata.fill && this.style.monoColor === "") {
        outline = drawArray2[0];
      } else {
        outline = drawArray2;
      }
      drawArray1.push(
        ms.outline(
          outline,
          this.style.outlineWidth,
          this.style.strokeWidth,
          typeof this.style.outlineColor === "object"
            ? this.style.outlineColor[this.metadata.affiliation]
            : this.style.outlineColor
        )
      );
    }
  }

  //A bounding box only needs the values that might change
  return {
    pre: drawArray1,
    post: drawArray2,
    bbox: { x1: x1, x2: x2, y1: y1, y2: y2 }
  };
}
