//Direction Arrow #######################################################################
export default function directionarrow(ms) {
  const drawArray1 = [];
  const drawArray2 = [];
  let bbox = this.metadata.baseGeometry.bbox;
  if (this.metadata.baseGeometry.g == "") {
    // in the case we don't have any frame
    bbox = this.bbox; //Set bbox to the current symbols bounds
  }
  const gbbox = new ms.BBox();
  const color =
    this.colors.iconColor[this.metadata.affiliation] ||
    this.colors.iconColor["Friend"];
  let arrow;
  if (this.style.infoFields) {
    if (
      typeof this.options.direction !== "undefined" &&
      // extra test to be backward compatible with legacy string type
      this.options.direction !== ""
    ) {
      if (this.options.speedLeader == 0) {
        // Movement indicator
        // The length of the lines in a direction of movement indicator are
        // a bit discussed but I use one frame height. (=100px)
        const arrowLength = 95;
        arrow = [
          {
            type: "rotate",
            degree: this.options.direction,
            x: 100,
            y: 100,
            draw: [
              {
                type: "path",
                fill: color,
                stroke: color,
                strokewidth: this.style.strokeWidth,
                d:
                  "M100,100 l0,-" +
                  (arrowLength - 20) +
                  " -5,3 5,-15 5,15 -5,-3",
              },
            ],
          },
        ];

        gbbox.y1 = Math.min(
          100 -
            Math.cos((this.options.direction / 360) * Math.PI * 2) *
              arrowLength,
          100
        );
        gbbox.y2 = Math.max(
          100 -
            Math.cos((this.options.direction / 360) * Math.PI * 2) *
              arrowLength,
          100
        );
        gbbox.x1 = Math.min(
          100 +
            Math.sin((this.options.direction / 360) * Math.PI * 2) *
              arrowLength,
          100
        );
        gbbox.x2 = Math.max(
          100 +
            Math.sin((this.options.direction / 360) * Math.PI * 2) *
              arrowLength,
          100
        );

        if (
          this.metadata.baseDimension == "Ground" ||
          this.metadata.baseDimension == ""
        ) {
          if (!this.metadata.headquarters) {
            // For all symbols not headquarters
            arrow = [
              { type: "translate", x: 0, y: bbox.y2, draw: arrow },
              {
                type: "path",
                fill: color,
                stroke: color,
                strokewidth: this.style.strokeWidth,
                d: "M 100," + bbox.y2 + "l0," + 100,
              },
            ];
          } else {
            // For headquarters
            arrow = [
              {
                type: "translate",
                x: bbox.x1 - 100,
                y:
                  bbox.y2 -
                  (100 - (this.style.hqStaffLength || ms._hqStaffLength)),
                draw: arrow,
              },
            ];
            gbbox.x1 += bbox.x1 - 100;
            gbbox.x2 += bbox.x1 - 100;
          }
        }
        gbbox.y2 += bbox.y2 + parseFloat(this.style.strokeWidth);
        drawArray2.push(arrow);
      } else {
        // This is speed leader
        const length = this.options.speedLeader * (100 / this.style.size);
        const rad = (this.options.direction * Math.PI) / 180;
        const y = -length * Math.cos(rad);
        const x = length * Math.sin(rad);

        gbbox.x1 = Math.min(100, 100 + x);
        gbbox.x2 = Math.max(100, 100 + x);
        gbbox.y1 = Math.min(100, 100 + y);
        gbbox.y2 = Math.max(100, 100 + y);
        arrow = {
          type: "path",
          fill: color,
          stroke: color,
          strokewidth: this.style.strokeWidth,
          d: "M 100,100  l" + x + "," + y,
        };
        drawArray1.push(arrow);
      }
      //outline
      if (this.style.outlineWidth > 0)
        drawArray1.unshift(
          ms.outline(
            arrow,
            this.style.outlineWidth,
            this.style.strokeWidth,
            typeof this.style.outlineColor === "object"
              ? this.style.outlineColor[this.metadata.affiliation]
              : this.style.outlineColor
          )
        );
    }
  }
  return { pre: drawArray1, post: drawArray2, bbox: gbbox };
}
