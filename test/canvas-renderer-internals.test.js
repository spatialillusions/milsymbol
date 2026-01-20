import { ms } from "../index.mjs";
import path2dPolyfill from "../src/ms/path2d.js";
import asCanvas from "../src/ms/symbol/ascanvas.js";
import canvasDraw from "../src/ms/symbol/canvasdraw.js";

ms.reset();

function createPathCtxRecorder() {
  const calls = [];
  return {
    calls,
    beginPath() {
      calls.push({ op: "beginPath" });
    },
    moveTo(x, y) {
      calls.push({ op: "moveTo", args: [x, y] });
    },
    lineTo(x, y) {
      calls.push({ op: "lineTo", args: [x, y] });
    },
    closePath() {
      calls.push({ op: "closePath" });
    },
    bezierCurveTo(x1, y1, x2, y2, x, y) {
      calls.push({ op: "bezierCurveTo", args: [x1, y1, x2, y2, x, y] });
    }
  };
}

function compareCalls(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i].op !== expected[i].op) {
      return false;
    }
    const actualArgs = actual[i].args ? actual[i].args : [];
    const expectedArgs = expected[i].args ? expected[i].args : [];
    if (actualArgs.length !== expectedArgs.length) {
      return false;
    }
    for (let j = 0; j < actualArgs.length; j++) {
      if (actualArgs[j] !== expectedArgs[j]) {
        return false;
      }
    }
  }
  return true;
}

function createCanvasCtxRecorder() {
  const log = [];
  let dash = [];
  return {
    log,
    lineWidth: 0,
    strokeStyle: "",
    fillStyle: "",
    lineCap: "butt",
    lineJoin: "miter",
    globalAlpha: 1,
    setLineDash(values) {
      dash = values.slice();
      log.push({ op: "setLineDash", args: dash.slice() });
    },
    getLineDash() {
      return dash.slice();
    },
    save() {
      log.push({ op: "save" });
    },
    restore() {
      log.push({ op: "restore" });
    },
    clip(path) {
      log.push({
        op: "clip",
        args: [path && path.pathData ? path.pathData : path]
      });
    },
    fill(path) {
      log.push({
        op: "fill",
        args: [path && path.pathData ? path.pathData : null]
      });
    },
    stroke(path) {
      log.push({
        op: "stroke",
        args: [path && path.pathData ? path.pathData : null]
      });
    },
    beginPath() {
      log.push({ op: "beginPath" });
    },
    arc(cx, cy, r) {
      log.push({ op: "arc", args: [cx, cy, r] });
    },
    translate(x, y) {
      log.push({ op: "translate", args: [x, y] });
    },
    rotate(rad) {
      log.push({ op: "rotate", args: [rad] });
    },
    scale(x, y) {
      log.push({ op: "scale", args: [x, y] });
    },
    fillText(text, x, y) {
      log.push({ op: "fillText", args: [text, x, y] });
    },
    strokeText(text, x, y) {
      log.push({ op: "strokeText", args: [text, x, y] });
    }
  };
}

function createAsCanvasCtxRecorder() {
  return {
    scaleCalls: [],
    translateCalls: [],
    scale(x, y) {
      this.scaleCalls.push([x, y]);
    },
    translate(x, y) {
      this.translateCalls.push([x, y]);
    }
  };
}

function createRenderCanvas(ctx) {
  return {
    width: 0,
    height: 0,
    getContext() {
      return ctx;
    }
  };
}

function createDetectionCanvas(pixelString) {
  return {
    widht: 0,
    width: 0,
    height: 0,
    getContext() {
      return {
        fill() {},
        getImageData() {
          return {
            data: {
              join() {
                return pixelString;
              }
            }
          };
        }
      };
    }
  };
}

function createMockSymbol(drawCtx) {
  return {
    width: 60,
    height: 30,
    style: {
      size: 100,
      strokeWidth: 2,
      outlineWidth: 1
    },
    bbox: {
      x1: 4,
      y1: 6
    },
    drawInstructions: ["draw"],
    canvasDraw(ctx, instructions) {
      this._drawCount = (this._drawCount || 0) + 1;
      this._drawArgs = { ctx, instructions };
    }
  };
}

function callsIncludeOp(log, op) {
  for (let i = 0; i < log.length; i++) {
    if (log[i].op === op) {
      return true;
    }
  }
  return false;
}

const initialBrokenState = ms._brokenPath2D;

const path2dAbsoluteCommands = (() => {
  const ctx = createPathCtxRecorder();
  path2dPolyfill(ctx, "M0 0 L10 0 L10 10 Z");
  const expected = [
    { op: "beginPath" },
    { op: "moveTo", args: [0, 0] },
    { op: "lineTo", args: [10, 0] },
    { op: "lineTo", args: [10, 10] },
    { op: "closePath" }
  ];
  return compareCalls(ctx.calls, expected);
})();

const path2dRelativeCurves = (() => {
  const ctx = createPathCtxRecorder();
  path2dPolyfill(ctx, "M0 0 c5 0 5 5 0 5 z");
  const expected = [
    { op: "beginPath" },
    { op: "moveTo", args: [0, 0] },
    { op: "bezierCurveTo", args: [5, 0, 5, 5, 0, 5] },
    { op: "closePath" }
  ];
  return compareCalls(ctx.calls, expected);
})();

const asCanvasMarksMissingPath2D = (() => {
  const originalDocument = globalThis.document;
  const originalPath2D = globalThis.Path2D;
  const originalBroken = ms._brokenPath2D;

  globalThis.Path2D = undefined;
  const drawCtx = createAsCanvasCtxRecorder();
  globalThis.document = {
    createElement() {
      return createRenderCanvas(drawCtx);
    }
  };

  ms._brokenPath2D = undefined;
  const symbol = createMockSymbol(drawCtx);
  const canvas = asCanvas.call(symbol, 2);

  const expectedScale = (2 * symbol.style.size) / 100;
  const expectedTranslate = -(
    symbol.bbox.x1 -
    symbol.style.strokeWidth -
    symbol.style.outlineWidth
  );
  const translateY = -(
    symbol.bbox.y1 -
    symbol.style.strokeWidth -
    symbol.style.outlineWidth
  );
  const result =
    ms._brokenPath2D === true &&
    canvas.width === symbol.width * 2 &&
    canvas.height === symbol.height * 2 &&
    drawCtx.scaleCalls.length === 1 &&
    drawCtx.scaleCalls[0][0] === expectedScale &&
    drawCtx.scaleCalls[0][1] === expectedScale &&
    drawCtx.translateCalls.length === 1 &&
    drawCtx.translateCalls[0][0] === expectedTranslate &&
    drawCtx.translateCalls[0][1] === translateY &&
    symbol._drawCount === 1 &&
    symbol._drawArgs.instructions === symbol.drawInstructions;

  globalThis.document = originalDocument;
  globalThis.Path2D = originalPath2D;
  ms._brokenPath2D = originalBroken;
  return result;
})();

const asCanvasDetectsBrokenPath2D = (() => {
  const originalDocument = globalThis.document;
  const originalPath2D = globalThis.Path2D;
  const originalBroken = ms._brokenPath2D;

  function RecordingPath2D(d) {
    this.pathData = d;
  }

  globalThis.Path2D = RecordingPath2D;
  const detectionCanvas = createDetectionCanvas("0,0,0,0");
  const drawCtx = createAsCanvasCtxRecorder();
  const renderCanvas = createRenderCanvas(drawCtx);
  const canvases = [detectionCanvas, renderCanvas];
  globalThis.document = {
    createElement() {
      return canvases.shift() || renderCanvas;
    }
  };

  ms._brokenPath2D = undefined;
  const symbol = createMockSymbol(drawCtx);
  asCanvas.call(symbol, 1);

  const result =
    ms._brokenPath2D === true &&
    drawCtx.scaleCalls.length === 1 &&
    symbol._drawCount === 1;

  globalThis.document = originalDocument;
  globalThis.Path2D = originalPath2D;
  ms._brokenPath2D = originalBroken;
  return result;
})();

const canvasDrawUsesNativePath2D = (() => {
  const ctx = createCanvasCtxRecorder();
  const symbol = {
    style: {
      strokeWidth: 2
    }
  };

  const originalPath2D = globalThis.Path2D;
  function RecordingPath2D(d) {
    this.pathData = d;
  }
  globalThis.Path2D = RecordingPath2D;
  const originalBroken = ms._brokenPath2D;
  ms._brokenPath2D = false;

  const instructions = [
    {
      type: "path",
      d: "M0 0 L10 0",
      fill: "#000",
      stroke: "#111",
      strokedasharray: "4,2",
      linecap: "round",
      fillopacity: 0.5,
      clipPath: "M0 0 L1 0"
    },
    {
      type: "circle",
      cx: 5,
      cy: 5,
      r: 2,
      fill: "#222",
      stroke: "#333",
      clipPath: "M0 0 L2 0"
    },
    {
      type: "text",
      text: "A",
      x: 1,
      y: 2,
      fontsize: 12,
      fontfamily: "sans-serif",
      textanchor: "middle",
      fontweight: "bold",
      alignmentBaseline: "top",
      stroke: true
    },
    {
      type: "translate",
      x: 2,
      y: 3,
      draw: [{ type: "path", d: "M0 0 L1 1" }]
    },
    {
      type: "rotate",
      x: 1,
      y: 1,
      degree: 90,
      draw: [{ type: "path", d: "M0 0 L2 2" }]
    },
    {
      type: "scale",
      factor: 2,
      draw: [{ type: "path", d: "M0 0 L3 3" }]
    },
    {
      type: "clip",
      d: "M0 0 L4 4",
      draw: [{ type: "path", d: "M0 0 L4 4" }]
    }
  ];

  canvasDraw.call(symbol, ctx, instructions);

  const saveCount = ctx.log.filter((entry) => entry.op === "save").length;
  const restoreCount = ctx.log.filter((entry) => entry.op === "restore").length;
  const dashEntries = ctx.log.filter((entry) => entry.op === "setLineDash");
  const result =
    callsIncludeOp(ctx.log, "clip") &&
    callsIncludeOp(ctx.log, "fillText") &&
    callsIncludeOp(ctx.log, "strokeText") &&
    callsIncludeOp(ctx.log, "arc") &&
    callsIncludeOp(ctx.log, "translate") &&
    callsIncludeOp(ctx.log, "rotate") &&
    callsIncludeOp(ctx.log, "scale") &&
    saveCount === restoreCount &&
    dashEntries.length >= 2 &&
    ctx.lineCap === "butt" &&
    ctx.globalAlpha === 1;

  globalThis.Path2D = originalPath2D;
  ms._brokenPath2D = originalBroken;
  return result;
})();

const canvasDrawFallsBackToPolyfill = (() => {
  const ctx = createCanvasCtxRecorder();
  const symbol = {
    style: {
      strokeWidth: 1
    }
  };

  const originalBroken = ms._brokenPath2D;
  const originalMsPath2D = ms.Path2D;
  let fallbackCount = 0;
  ms._brokenPath2D = true;
  ms.Path2D = function (ctxArg, d) {
    fallbackCount += 1;
    ctxArg.log.push({ op: "msPath2D", args: [d] });
  };

  canvasDraw.call(symbol, ctx, [
    {
      type: "path",
      d: "M0 0 L5 5",
      fill: "#444",
      stroke: "#555"
    }
  ]);

  const result =
    fallbackCount === 1 &&
    callsIncludeOp(ctx.log, "msPath2D") &&
    callsIncludeOp(ctx.log, "fill") &&
    callsIncludeOp(ctx.log, "stroke");

  ms._brokenPath2D = originalBroken;
  ms.Path2D = originalMsPath2D;
  return result;
})();

if (typeof initialBrokenState === "undefined") {
  ms._brokenPath2D = undefined;
} else {
  ms._brokenPath2D = initialBrokenState;
}

export default {
  "Renderer internals": {
    "path2d converts absolute commands": [path2dAbsoluteCommands, true],
    "path2d converts relative curves": [path2dRelativeCurves, true],
    "asCanvas marks missing Path2D as broken": [
      asCanvasMarksMissingPath2D,
      true
    ],
    "asCanvas detects broken Path2D output": [
      asCanvasDetectsBrokenPath2D,
      true
    ],
    "canvasDraw uses native Path2D features": [
      canvasDrawUsesNativePath2D,
      true
    ],
    "canvasDraw falls back to ms.Path2D": [canvasDrawFallsBackToPolyfill, true]
  }
};
