//Sets modifiers depending of status #####################################################
export default function statusmodifier(ms) {
  var drawArray1 = [];
  var drawArray2 = [];
  var bbox = this.metadata.baseGeometry.bbox;
  var y1 = bbox.y1;
  var y2 = bbox.y2;

  if (this.metadata.condition) {
    if (
      this.metadata.fill &&
      this.style.monoColor === "" &&
      !this.style.simpleStatusModifier
    ) {
      var colors = {
        FullyCapable: "rgb(0,255,0)",
        Damaged: "rgb(255,255,0)",
        Destroyed: "rgb(255,0,0)",
        FullToCapacity: "rgb(0, 180, 240)"
      };
      //If it is unframed and equipment use the bottom of the icon
      if (!this.metadata.frame && this.metadata.iconBottom) {
        y2 = this.metadata.iconBottom;
      }
      // If we have headquartersElement add space for the text
      if (this.options.headquartersElement) {
        y2 += 35;
      }
      //If we have a mobility indicator we need to make space for it.
      y2 += this.metadata.mobility ? 25 : 5;
      //Add the bar to the geometry
      drawArray2.push({
        type: "path",
        strokewidth: this.style.strokeWidth,
        fill: colors[this.metadata.condition],
        stroke: this.colors.frameColor[this.metadata.affiliation],
        d:
          "M" +
          bbox.x1 +
          "," +
          y2 +
          " l" +
          bbox.width() +
          ",0 0,25 -" +
          bbox.width() +
          ",0 z"
      });
      //Add the hight of the codition bar to the geometry bounds
      y2 += 25;
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
    } else {
      if (
        this.metadata.condition == "Damaged" ||
        this.metadata.condition == "Destroyed"
      ) {
        drawArray2.push({
          type: "path",
          d: "M150,20 L50,180",
          strokewidth: this.style.strokeWidth * 2,
          stroke: this.colors.frameColor[this.metadata.affiliation]
        });
        //Add space for the modifier to the geometry bounds
        y1 = 20;
        y2 = 180;
      }
      if (this.metadata.condition == "Destroyed")
        drawArray2.push({
          type: "path",
          d: "M50,20 L150,180",
          strokewidth: this.style.strokeWidth * 2,
          stroke: this.colors.frameColor[this.metadata.affiliation]
        });
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
    }
  }

  //A bounding box only needs the values that might change
  return { pre: drawArray1, post: drawArray2, bbox: { y1: y1, y2: y2 } };
}
