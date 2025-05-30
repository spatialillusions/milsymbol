//Affiliation and dimension addons to base geometries ####################################
export default function affliationdimension(ms) {
  const drawArray1 = [];
  const drawArray2 = [];
  let bbox = this.metadata.baseGeometry.bbox;
  const frameColor = this.colors.frameColor[this.metadata.affiliation];
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
    let spacing = 10;
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
          y: 50,
          fill: frameColor,
          fontfamily: this.style.fontfamily,
          fontsize: 35,
          fontweight: "bold",
          textanchor: "start",
          alignmentBaseline: "middle"
        });
      }
      if (this.metadata.joker) {
        drawArray2.push({
          type: "text",
          text: "J",
          x: bbox.x2 + spacing,
          y: 40,
          fill: frameColor,
          fontfamily: this.style.fontfamily,
          fontsize: 35,
          fontweight: "bold",
          textanchor: "start",
          alignmentBaseline: "middle"
        });
      }
      if (this.metadata.faker) {
        drawArray2.push({
          type: "text",
          text: "K",
          x: bbox.x2 + spacing,
          y: 40,
          fill: frameColor,
          fontfamily: this.style.fontfamily,
          fontsize: 35,
          fontweight: "bold",
          textanchor: "start",
          alignmentBaseline: "middle"
        });
      }
      bbox = { x2: bbox.x2 + spacing + 22, y1: 40 - 25 };
    }
    if (this.metadata.context == "Simulation") {
      drawArray2.push({
        type: "text",
        text: "S",
        x: bbox.x2 + spacing,
        y: 40,
        fill: frameColor,
        fontfamily: this.style.fontfamily,
        fontsize: 35,
        fontweight: "bold",
        textanchor: "start",
        alignmentBaseline: "middle"
      });
      bbox = new ms.BBox({ x2: bbox.x2 + spacing + 22, y1: 40 - 25 });
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
