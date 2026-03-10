import { ms } from "../../ms.js";

const ATTR_ESCAPE_MAP = {
  "&": "&amp;",
  '"': "&quot;",
  "'": "&apos;",
  "<": "&lt;",
  ">": "&gt;"
};

const TEXT_ESCAPE_MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};

const RAW_SVG_BLOCKLIST =
  /<\s*(script|foreignObject|iframe|object|embed)[\s>]|on[a-z]+\s*=|javascript:/i;
const DASHARRAY_PATTERN = /^[0-9.,\s-]+$/;
const FONT_FAMILY_PATTERN = /^[a-zA-Z0-9 ,"'_:-]+$/;
const LINECAP_VALUES = new Set(["butt", "round", "square"]);
const TEXT_ANCHOR_VALUES = new Set(["start", "middle", "end"]);
const BASELINE_VALUES = new Set([
  "auto",
  "text-bottom",
  "alphabetic",
  "ideographic",
  "middle",
  "central",
  "mathematical",
  "hanging",
  "text-top",
  "text-before-edge",
  "text-after-edge"
]);

function escapeAttr(value) {
  const input = String(
    value === null || typeof value === "undefined" ? "" : value
  );
  return input
    .replace(/[&"'<>]/g, (char) => ATTR_ESCAPE_MAP[char])
    .replace(/[\r\n\t]/g, " ");
}

function escapeText(value) {
  const input = String(
    value === null || typeof value === "undefined" ? "" : value
  );
  return input.replace(/[&<>]/g, (char) => TEXT_ESCAPE_MAP[char]);
}

function attr(name, value) {
  if (value === null || typeof value === "undefined") return "";
  return ` ${name}="${escapeAttr(value)}"`;
}

function safeNumber(value, fallback = 0) {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

function sanitizeDashArray(value) {
  if (value === null || typeof value === "undefined") return "";
  const normalized = String(value).trim();
  return DASHARRAY_PATTERN.test(normalized) ? normalized : "";
}

function sanitizeLineCap(value) {
  const normalized = String(value || "").toLowerCase();
  return LINECAP_VALUES.has(normalized) ? normalized : "";
}

function sanitizeFontWeight(value) {
  const normalized = String(value || "").toLowerCase();
  return /^(normal|bold|bolder|lighter|[1-9]00)$/.test(normalized)
    ? normalized
    : "";
}

function sanitizeTextAnchor(value) {
  const normalized = String(value || "").toLowerCase();
  return TEXT_ANCHOR_VALUES.has(normalized) ? normalized : "";
}

function sanitizeBaseline(value) {
  const normalized = String(value || "").toLowerCase();
  return BASELINE_VALUES.has(normalized) ? normalized : "";
}

function sanitizeFontFamily(value, fallback = "sans-serif") {
  if (value === null || typeof value === "undefined") return fallback;
  const normalized = String(value).trim();
  return FONT_FAMILY_PATTERN.test(normalized)
    ? normalized || fallback
    : fallback;
}

function sanitizeColor(value, fallback = "none") {
  if (value === null || typeof value === "undefined") return fallback;
  const normalized = String(value).trim();
  if (!normalized) return fallback;
  if (
    /url\s*\(/i.test(normalized) ||
    /javascript:/i.test(normalized) ||
    /^data:/i.test(normalized)
  ) {
    return fallback;
  }
  return normalized;
}

function sanitizeSvgFragment(value) {
  if (value === null || typeof value === "undefined") return "";
  const fragment = String(value);
  return RAW_SVG_BLOCKLIST.test(fragment) ? "" : fragment;
}

function sanitizeId(value, fallback = "") {
  if (value === null || typeof value === "undefined") return fallback;
  let normalized = String(value).trim();
  if (!normalized) return fallback;
  normalized = normalized.replace(/[^A-Za-z0-9._:-]/g, "_");
  if (!/^[A-Za-z_]/.test(normalized)) {
    normalized = `id_${normalized}`;
  }
  return normalized || fallback;
}

export default function asSVG() {
  let clipCounter = 0;
  function processInstructions(instruction) {
    let svgxml = "";
    for (let i = 0; i < instruction.length; i++) {
      if (Array.isArray(instruction[i])) {
        if (instruction[i].length) {
          svgxml += processInstructions.call(this, instruction[i]);
        }
      } else if (typeof instruction[i] === "object") {
        let svg = "";
        if (instruction[i].type === "svg") {
          svg += sanitizeSvgFragment(instruction[i].svg);
        } else {
          let inlineClipId = "";
          if (
            instruction[i].hasOwnProperty("clipPath") &&
            instruction[i].type !== "clip"
          ) {
            inlineClipId = `clip-inline-${clipCounter++}`;
            svg += "<clipPath";
            svg += attr("id", inlineClipId);
            svg += ">";
            svg += "<path";
            svg += attr("d", instruction[i].clipPath);
            svg += attr("clip-rule", "nonzero");
            svg += " />";
            svg += "</clipPath>";
          }
          switch (instruction[i].type) {
            case "path":
              svg += "<path";
              svg += attr("d", instruction[i].d);
              if (inlineClipId) {
                svg += attr("clip-path", `url(#${inlineClipId})`);
              }
              break;
            case "circle":
              svg += "<circle";
              svg += attr("cx", safeNumber(instruction[i].cx, 0));
              svg += attr("cy", safeNumber(instruction[i].cy, 0));
              svg += attr("r", safeNumber(instruction[i].r, 0));
              if (inlineClipId) {
                svg += attr("clip-path", `url(#${inlineClipId})`);
              }
              break;
            case "text":
              svg += "<text";
              svg += attr("x", safeNumber(instruction[i].x, 0));
              svg += attr("y", safeNumber(instruction[i].y, 0));
              svg += attr(
                "text-anchor",
                sanitizeTextAnchor(instruction[i].textanchor) || "start"
              );
              svg += attr("font-size", safeNumber(instruction[i].fontsize, 12));
              svg += attr(
                "font-family",
                sanitizeFontFamily(instruction[i].fontfamily)
              );
              const fontWeight = sanitizeFontWeight(instruction[i].fontweight);
              if (fontWeight) {
                svg += attr("font-weight", fontWeight);
              }
              const baseline = sanitizeBaseline(
                instruction[i].alignmentBaseline
              );
              if (baseline) {
                svg += attr("dominant-baseline", baseline);
              }
              if (inlineClipId) {
                svg += attr("clip-path", `url(#${inlineClipId})`);
              }
              break;
            case "translate":
              svg += "<g";
              svg += attr(
                "transform",
                `translate(${safeNumber(instruction[i].x, 0)},${safeNumber(
                  instruction[i].y,
                  0
                )})`
              );
              if (inlineClipId) {
                svg += attr("clip-path", `url(#${inlineClipId})`);
              }
              break;
            case "rotate":
              svg += "<g";
              svg += attr(
                "transform",
                `rotate(${safeNumber(instruction[i].degree, 0)},${safeNumber(
                  instruction[i].x,
                  0
                )},${safeNumber(instruction[i].y, 0)})`
              );
              if (inlineClipId) {
                svg += attr("clip-path", `url(#${inlineClipId})`);
              }
              break;
            case "scale":
              svg += "<g";
              svg += attr(
                "transform",
                `scale(${safeNumber(instruction[i].factor, 1)})`
              );
              if (inlineClipId) {
                svg += attr("clip-path", `url(#${inlineClipId})`);
              }
              break;
            case "clip": {
              svg += "<clipPath";
              const resolvedClipId =
                sanitizeId(instruction[i].clipId) ||
                `clip-custom-${clipCounter++}`;
              svg += attr("id", resolvedClipId);
              svg += ">";
              svg += "<path";
              svg += attr("d", instruction[i].d);
              svg += attr("clip-rule", "nonzero");
              svg += " />";
              svg += "</clipPath>";
              svg += "<g";
              svg += attr("clip-path", `url(#${resolvedClipId})`);
              break;
            }
          }
          if (typeof instruction[i].stroke !== "undefined") {
            const nonScalingStroke = safeNumber(
              instruction[i].non_scaling_stroke,
              1
            );
            const strokeWidthSetting =
              typeof instruction[i].strokewidth !== "undefined"
                ? safeNumber(instruction[i].strokewidth, this.style.strokeWidth)
                : this.style.strokeWidth;
            const computedStrokeWidth = safeNumber(
              nonScalingStroke * strokeWidthSetting,
              this.style.strokeWidth
            );
            svg += attr("stroke-width", computedStrokeWidth);
            const dashArray = sanitizeDashArray(instruction[i].strokedasharray);
            if (dashArray) {
              svg += attr("stroke-dasharray", dashArray);
            }
            const lineCap = sanitizeLineCap(instruction[i].linecap);
            if (lineCap) {
              svg += attr("stroke-linecap", lineCap);
              svg += attr("stroke-linejoin", lineCap);
            }
            const strokeColor = instruction[i].stroke
              ? sanitizeColor(instruction[i].stroke, "none")
              : "none";
            svg += attr("stroke", strokeColor);
          }
          if (typeof instruction[i].fill !== "undefined") {
            let fill = instruction[i].fill;
            if (instruction[i].styleFill && this.style.styleFill) {
              fill = "rgba(255,255,255,0.4)";
            }
            svg += attr("fill", fill ? sanitizeColor(fill, "none") : "none");
          }
          if (typeof instruction[i].fillopacity !== "undefined") {
            const fillOpacity = Math.min(
              Math.max(safeNumber(instruction[i].fillopacity, 1), 0),
              1
            );
            svg += attr("fill-opacity", fillOpacity);
          }
          svg += " >";
          switch (instruction[i].type) {
            case "path":
              svg += "</path>";
              break;
            case "circle":
              svg += "</circle>";
              break;
            case "text":
              svg += `${escapeText(instruction[i].text)}</text>`;
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
            case "clip":
              svg += processInstructions.call(this, instruction[i].draw);
              svg += "</g>";
              break;
          }
        }
        svgxml += svg;
      }
    }
    return svgxml;
  }

  const strokeWidth = safeNumber(this.style.strokeWidth, 0);
  const outlineWidth = safeNumber(this.style.outlineWidth, 0);
  const bboxX = safeNumber(this.bbox.x1, 0) - strokeWidth - outlineWidth;
  const bboxY = safeNumber(this.bbox.y1, 0) - strokeWidth - outlineWidth;
  const width = safeNumber(this.width, this.baseWidth);
  const height = safeNumber(this.height, this.baseHeight);
  const baseWidth = safeNumber(this.baseWidth, width);
  const baseHeight = safeNumber(this.baseHeight, height);
  const viewBox = `${bboxX} ${bboxY} ${baseWidth} ${baseHeight}`;

  let xml = "<svg";
  xml += attr("xmlns", ms._svgNS);
  xml += attr("version", "1.2");
  xml += attr("baseProfile", "tiny");
  xml += attr("width", width);
  xml += attr("height", height);
  xml += attr("viewBox", viewBox);
  xml += ">";
  xml += processInstructions.call(this, this.drawInstructions);
  xml += "</svg>";
  this.XML = xml;
  return xml;
}
