export function defaultProperties(instructions, iconColor) {
  if (typeof instructions === "object") {
    if (Array.isArray(instructions)) {
      for (var i = 0; i < instructions.length; i++) {
        defaultProperties.call(this, instructions[i], iconColor);
      }
      return;
    }
    instructions.icon = true;
    if (instructions.type == "text") {
      if (!instructions.hasOwnProperty("fontfamily"))
        instructions.fontfamily = "Arial";
      if (!instructions.hasOwnProperty("fontweight"))
        instructions.fontweight = "bold";
      if (!instructions.hasOwnProperty("textanchor"))
        instructions.textanchor = "middle";
      if (!instructions.hasOwnProperty("stroke")) instructions.stroke = false;
    }
    if (!instructions.hasOwnProperty("fill")) instructions.fill = iconColor;
    if (!instructions.hasOwnProperty("stroke")) instructions.stroke = iconColor;
    return;
  }
}

export function text(str) {
  var size = 42;
  var y = 115;
  if (str.length == 1) {
    size = 45;
    y = 115;
  }
  if (str.length == 3) {
    size = 35;
    y = 110;
  }
  if (str.length >= 4) {
    size = 32;
    y = 110;
  }
  var t = {
    type: "text",
    stroke: false,
    textanchor: "middle",
    x: 100,
    y: y,
    fontsize: size,
    text: str
  };
  return t;
}
export function textm1(str) {
  var size = 30;
  if (str.length == 3) {
    size = 25;
  }
  if (str.length >= 4) {
    size = 22;
  }
  return {
    type: "text",
    stroke: false,
    textanchor: "middle",
    x: 100,
    y: 77,
    fontsize: size,
    text: str
  };
}
export function textm2(str) {
  var size = 30;
  var y = 145;

  if (str.length == 3) {
    size = 25;
    y = 140;
  }
  if (str.length >= 4) {
    size = 20;
    y = 135;
  }
  return {
    type: "text",
    stroke: false,
    textanchor: "middle",
    x: 100,
    y: y,
    fontsize: size,
    text: str
  };
}
