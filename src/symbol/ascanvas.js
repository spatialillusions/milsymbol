var ms = require("../ms.js");

module.exports = function(ratio) {
  function processCanvasInstructions(instruction, ctx) {
    for (var i = 0; i < instruction.length; i++) {
      if (Array.isArray(instruction[i])) {
        if (instruction[i].length) {
          processCanvasInstructions.call(this, instruction[i], ctx);
        }
      } else {
        if (typeof instruction[i] === "object") {
          ctx.lineWidth = instruction[i].strokewidth || this.strokeWidth;
          if (typeof instruction[i].stroke !== "undefined") {
            if (instruction[i].stroke) {
              ctx.strokeStyle = instruction[i].stroke;
            } else {
              ctx.strokeStyle = "rgba(0,0,0,0)";
            }
          }
          if (instruction[i].strokedasharray) {
            ctx.setLineDash(instruction[i].strokedasharray.split(","));
          } else {
            if (ctx.getLineDash().length != 0) {
              ctx.setLineDash([]);
            }
          }
          if (instruction[i].linecap) {
            ctx.lineCap = instruction[i].linecap;
            ctx.lineJoin = instruction[i].linecap;
          }
          if (instruction[i].fill) {
            ctx.fillStyle = instruction[i].fill;
          }
          //fill is set to false, make it transparent
          if (!instruction[i].fill) {
            ctx.fillStyle = "rgba(0,0,0,0)";
          }

          if (typeof instruction[i].fillopacity !== "undefined") {
            ctx.globalAlpha = instruction[i].fillopacity;
          }

          switch (instruction[i].type) {
            case "path":
              if (typeof Path2D != "undefined") {
                var d = new Path2D(instruction[i].d);
                if (
                  typeof instruction[i].fill === "undefined" ||
                  (typeof instruction[i].fill !== "undefined" &&
                    instruction[i].fill)
                )
                  ctx.fill(d);
                if (
                  typeof instruction[i].stroke === "undefined" ||
                  (typeof instruction[i].stroke !== "undefined" &&
                    instruction[i].stroke)
                )
                  ctx.stroke(d);
              } else {
                if (typeof ms._Path2D === "function") {
                  ms._Path2D(ctx, instruction[i].d);
                  if (
                    typeof instruction[i].fill === "undefined" ||
                    (typeof instruction[i].fill !== "undefined" &&
                      instruction[i].fill)
                  )
                    ctx.fill();
                  if (
                    typeof instruction[i].stroke === "undefined" ||
                    (typeof instruction[i].stroke !== "undefined" &&
                      instruction[i].stroke)
                  )
                    ctx.stroke();
                } else {
                  console.warn(
                    "ms._Path2D() is not present, you will need to load functionality for using Canvas in older version of Internet Explorer."
                  );
                }
              }
              break;
            case "circle":
              ctx.beginPath();
              ctx.arc(
                instruction[i].cx,
                instruction[i].cy,
                instruction[i].r,
                0,
                2 * Math.PI,
                false
              );
              if (
                typeof instruction[i].fill === "undefined" ||
                (typeof instruction[i].fill !== "undefined" &&
                  instruction[i].fill)
              )
                ctx.fill();
              if (
                typeof instruction[i].stroke === "undefined" ||
                (typeof instruction[i].stroke !== "undefined" &&
                  instruction[i].stroke)
              )
                ctx.stroke();
              break;
            case "text":
              ctx.font =
                (typeof instruction[i].fontweight !== "undefined"
                  ? instruction[i].fontweight + " "
                  : "") +
                instruction[i].fontsize +
                "px " +
                instruction[i].fontfamily;
              ctx.textAlign = instruction[i].textanchor == "middle"
                ? "center"
                : instruction[i].textanchor;
              ctx.fillText(
                instruction[i].text,
                instruction[i].x,
                instruction[i].y
              );
              if (instruction[i].stroke)
                ctx.strokeText(
                  instruction[i].text,
                  instruction[i].x,
                  instruction[i].y
                );
              break;
            case "translate":
              ctx.save();
              ctx.translate(instruction[i].x, instruction[i].y);
              processCanvasInstructions.call(this, instruction[i].draw, ctx);
              ctx.restore();
              //ctx.translate(-instruction[i].x, -instruction[i].y);
              break;
            case "rotate":
              var x = instruction[i].x;
              var y = instruction[i].y;
              ctx.save();
              ctx.translate(x, y);
              ctx.rotate(instruction[i].degree * Math.PI / 180);
              ctx.translate(-x, -y);
              processCanvasInstructions.call(this, instruction[i].draw, ctx);
              ctx.restore();
              //ctx.translate(x, y);
              //ctx.rotate(-instruction[i].degree * Math.PI / 180);
              //ctx.translate(-x, -y);
              break;
            case "scale":
              ctx.save();
              ctx.scale(instruction[i].factor, instruction[i].factor);
              processCanvasInstructions.call(this, instruction[i].draw, ctx);
              ctx.restore();
              //ctx.scale(1/instruction[i].factor,1/instruction[i].factor);
              break;
          }
          if (instruction[i].linecap) {
            ctx.lineCap = "butt";
            ctx.lineJoin = "miter";
          }
          if (typeof instruction[i].fillopacity !== "undefined") {
            ctx.globalAlpha = 1;
          }
        }
      }
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
  ctx.scale(ratio * this.size / 100, ratio * this.size / 100);
  ctx.translate(
    -(this.bbox.x1 - this.strokeWidth - this.outlineWidth),
    -(this.bbox.y1 - this.strokeWidth - this.outlineWidth)
  );
  processCanvasInstructions.call(this, this.drawInstructions, ctx);
  return canvas;
};
