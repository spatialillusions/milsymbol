import { ms } from "../../ms.js";
export default function canvasDraw(ctx, instruction) {
  for (let i = 0; i < instruction.length; i++) {
    if (Array.isArray(instruction[i])) {
      if (instruction[i].length) {
        canvasDraw.call(this, ctx, instruction[i]);
      }
    } else {
      if (typeof instruction[i] === "object") {
        ctx.lineWidth =
          (instruction[i].non_scaling_stroke || 1) *
          (instruction[i].strokewidth || this.style.strokeWidth);
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
        let x, y;
        switch (instruction[i].type) {
          case "path":
            if (!ms._brokenPath2D) {
              const d = new Path2D(instruction[i].d);
              if (instruction[i].hasOwnProperty("clipPath")) {
                ctx.save();
                ctx.clip(new Path2D(instruction[i].clipPath), "nonzero");
              }
              if (
                typeof instruction[i].fill === "undefined" ||
                (typeof instruction[i].fill !== "undefined" &&
                  instruction[i].fill)
              )
                ctx.fill(d);
              if (instruction[i].hasOwnProperty("clipPath")) {
                ctx.restore();
              }
              if (ctx.globalAlpha != 1) ctx.globalAlpha = 1; //We never have transparent strokes
              if (
                typeof instruction[i].stroke === "undefined" ||
                (typeof instruction[i].stroke !== "undefined" &&
                  instruction[i].stroke)
              )
                ctx.stroke(d);
            } else {
              if (typeof ms.Path2D === "function") {
                ms.Path2D(ctx, instruction[i].d);
                if (
                  typeof instruction[i].fill === "undefined" ||
                  (typeof instruction[i].fill !== "undefined" &&
                    instruction[i].fill)
                )
                  ctx.fill();
                if (ctx.globalAlpha != 1) ctx.globalAlpha = 1;
                if (
                  typeof instruction[i].stroke === "undefined" ||
                  (typeof instruction[i].stroke !== "undefined" &&
                    instruction[i].stroke)
                )
                  ctx.stroke();
              } else {
                console.warn("ms.Path2D() is not present");
              }
            }
            break;
          case "circle":
            if (instruction[i].hasOwnProperty("clipPath")) {
              ctx.save();
              ctx.clip(new Path2D(instruction[i].clipPath), "nonzero");
            }
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
            if (instruction[i].hasOwnProperty("clipPath")) {
              ctx.restore();
            }
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
            ctx.textAlign =
              instruction[i].textanchor == "middle"
                ? "center"
                : instruction[i].textanchor;
            ctx.textBaseline = instruction[i].alignmentBaseline
              ? instruction[i].alignmentBaseline
              : "bottom";
            ctx.fillText(
              instruction[i].text,
              instruction[i].x,
              // There is a small difference in text insertion points between SVG and Canvas
              // add some portion of the fontsize to compensate for this
              instruction[i].y //+ instruction[i].fontsize * 0.2
            );
            if (instruction[i].stroke)
              ctx.strokeText(
                instruction[i].text,
                instruction[i].x,
                // There is a small difference in text insertion points between SVG and Canvas
                // add some portion of the fontsize to compensate for this
                instruction[i].y // + instruction[i].fontsize * 0.2,
              );

            break;
          case "translate":
            ctx.save();
            ctx.translate(instruction[i].x, instruction[i].y);
            canvasDraw.call(this, ctx, instruction[i].draw);
            ctx.restore();
            //ctx.translate(-instruction[i].x, -instruction[i].y);
            break;
          case "rotate":
            x = instruction[i].x;
            y = instruction[i].y;
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate((instruction[i].degree * Math.PI) / 180);
            ctx.translate(-x, -y);
            canvasDraw.call(this, ctx, instruction[i].draw);
            ctx.restore();
            //ctx.translate(x, y);
            //ctx.rotate(-instruction[i].degree * Math.PI / 180);
            //ctx.translate(-x, -y);
            break;
          case "scale":
            ctx.save();
            ctx.scale(instruction[i].factor, instruction[i].factor);
            canvasDraw.call(this, ctx, instruction[i].draw);
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
