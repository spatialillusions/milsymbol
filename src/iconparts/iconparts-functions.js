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
    if (!instructions.hasOwnProperty("strokewidth"))
      instructions.strokewidth = 3;
    return;
  }
}

export function text(str) {
  let size = 45;
  //let y = 115;
  if (str.length == 1) {
    size = 45;
    //y = 115;
  }
  if (str.length == 3) {
    size = 39;
    //y = 110;
  }
  if (str.length >= 4) {
    size = 33;
    //y = 110;
  }
  return {
    type: "text",
    stroke: false,
    textanchor: "middle",
    alignmentBaseline: "middle",
    x: 100,
    y: 103,
    fontsize: size,
    //fontweight: "normal",
    text: str,
  };
}
export function textm1(str) {
  let size = 28;
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
    alignmentBaseline: "middle",
    x: 100,
    y: 71,
    fontsize: size,
    //fontweight: "normal",
    text: str,
  };
}
export function textm2(str) {
  let size = 28;
  //let y = 143;

  if (str.length == 3) {
    size = 25;
    // y = 140;
  }
  if (str.length >= 4) {
    size = 20;
    // y = 135;
  }
  return {
    type: "text",
    stroke: false,
    textanchor: "middle",
    alignmentBaseline: "middle",
    x: 100,
    y: 134,
    fontsize: size,
    //fontweight: "normal",
    text: str,
  };
}
