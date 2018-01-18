//Affiliation and dimension addons to base geometries ####################################
export default function affliationdimension(ms) {
  var drawArray1 = [];
  var drawArray2 = [];
  var bbox = this.metadata.baseGeometry.bbox;
  var frameColor = this.colors.frameColor[this.metadata.affiliation];
  //Draws the a question mark for some unknown or other dimension symbols
  if (this.metadata.dimensionUnknown && frameColor) {
    drawArray2.push({
      type: "text",
      text: "?",
      x: 100,
      y: 127,
      fill: frameColor,
      fontfamily: this.style.fontfamily,
      fontsize: 80,
      fontweight: "bold",
      textanchor: "middle"
    });
  }
  //If we don't have a geometry we shouldn't add anything.
  if (this.metadata.baseGeometry.g && frameColor) {
    var spacing = 10;
    if (
      this.metadata.affiliation == "Unknown" ||
      (this.metadata.affiliation == "Hostile" &&
        this.metadata.dimension != "Subsurface")
    ) {
      spacing = -10;
    }
    if (this.metadata.context == "Exercise") {
      if (!(this.metadata.joker || this.metadata.faker)) {
        drawArray2.push({
          type: "text",
          text: "X",
          x: bbox.x2 + spacing,
          y: 60,
          fill: frameColor,
          fontfamily: this.style.fontfamily,
          fontsize: 35,
          fontweight: "bold",
          textanchor: "start"
        });
      }
      if (this.metadata.joker) {
        drawArray2.push({
          type: "text",
          text: "J",
          x: bbox.x2 + spacing,
          y: 60,
          fill: frameColor,
          fontfamily: this.style.fontfamily,
          fontsize: 35,
          fontweight: "bold",
          textanchor: "start"
        });
      }
      if (this.metadata.faker) {
        drawArray2.push({
          type: "text",
          text: "K",
          x: bbox.x2 + spacing,
          y: 60,
          fill: frameColor,
          fontfamily: this.style.fontfamily,
          fontsize: 35,
          fontweight: "bold",
          textanchor: "start"
        });
      }
      bbox = { x2: bbox.x2 + spacing + 22, y1: 60 - 25 };
    }
    if (this.metadata.context == "Simulation") {
      drawArray2.push({
        type: "text",
        text: "S",
        x: bbox.x2 + spacing,
        y: 60,
        fill: frameColor,
        fontfamily: this.style.fontfamily,
        fontsize: 35,
        fontweight: "bold",
        textanchor: "start"
      });
      bbox = new ms.BBox({ x2: bbox.x2 + spacing + 22, y1: 60 - 25 });
    }
  }
  //outline
  if (this.style.outlineWidth > 0)
    drawArray1.push(
      ms.outline(
        drawArray2,
        this.style.outlineWidth,
        this.style.strokeWidth,
        typeof this.style.outlineColor === "object"
          ? this.style.outlineColor[this.metadata.affiliation]
          : this.style.outlineColor
      )
    );
  return { pre: drawArray1, post: drawArray2, bbox: bbox };
}
