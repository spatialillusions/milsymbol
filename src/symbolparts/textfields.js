//Text Fields ############################################################################
var ms = require("../ms.js");

module.exports = function textfields() {
  var drawArray1 = [];
  var drawArray2 = [];
  var bbox = this.properties.baseGeometry.bbox;
  var fontColor =
    this.infoColor ||
    this.colors.iconColor[this.properties.affiliation] ||
    this.colors.iconColor["Friend"];
  var fontFamily = "Arial";
  var fontSize = this.infoSize;

  var gbbox = new ms.BBox();
  var spaceTextIcon = 20; //The distance between the Icon and the labels

  //Text fields overrides
  function labelOverride(label) {
    var texts = [];
    var labelbox;
    for (var i in label) {
      if (this.hasOwnProperty(i) && this[i] != "") {
        if (!label.hasOwnProperty(i)) continue;
        for (var j = 0; j < (label[i].length || 1); j++) {
          var lbl;
          if (Array.isArray(label[i])) {
            lbl = label[i][j];
          } else {
            lbl = label[i];
          }
          labelbox = { y2: lbl.y, y1: lbl.y - lbl.fontsize };
          if (lbl.textanchor == "start") {
            labelbox.x1 = lbl.x;
            labelbox.x2 = lbl.x + strWidth(this[i]) * (lbl.fontsize / fontSize);
          }
          if (lbl.textanchor == "middle") {
            var w = strWidth(this[i]) * (lbl.fontsize / fontSize);
            labelbox.x1 = lbl.x - w / 2;
            labelbox.x2 = lbl.x + w / 2;
          }
          //if(lbl.textanchor == 'middle'){}
          if (lbl.textanchor == "end") {
            labelbox.x1 = lbl.x - strWidth(this[i]) * (lbl.fontsize / fontSize);
            labelbox.x2 = lbl.x;
          }
          gbbox.merge(labelbox);
          var text = { type: "text", fontfamily: fontFamily, fill: fontColor };
          if (lbl.hasOwnProperty("stroke")) text.stroke = lbl.stroke;
          if (lbl.hasOwnProperty("textanchor"))
            text.textanchor = lbl.textanchor;
          if (lbl.hasOwnProperty("fontsize")) text.fontsize = lbl.fontsize;
          if (lbl.hasOwnProperty("fontweight"))
            text.fontweight = lbl.fontweight;
          text.x = lbl.x;
          text.y = lbl.y;
          text.text = this[i];
          texts.push(text);
        }
      }
    }
    return texts;
  }

  //Function to calculate the width of a string
  function strWidth(str) {
    if (str.length == 0) return 0;
    //We need to calculate how long our string will be in pixels
    var strWidths = {
      " ": 9,
      "!": 10,
      '"': 15,
      "#": 17,
      $: 17,
      "%": 27,
      "&": 22,
      "'": 8,
      "(": 10,
      ")": 10,
      "*": 12,
      "+": 18,
      ",": 9,
      "-": 10,
      ".": 9,
      "/": 9,
      "0": 17,
      "1": 17,
      "2": 17,
      "3": 17,
      "4": 17,
      "5": 17,
      "6": 17,
      "7": 17,
      "8": 17,
      "9": 17,
      ":": 10,
      ";": 10,
      "<": 18,
      "=": 18,
      ">": 18,
      "?": 19,
      "@": 30,
      A: 22,
      B: 22,
      C: 22,
      D: 22,
      E: 21,
      F: 19,
      G: 24,
      H: 22,
      I: 9,
      J: 17,
      K: 22,
      L: 19,
      M: 25,
      N: 22,
      O: 24,
      P: 21,
      Q: 24,
      R: 22,
      S: 21,
      T: 19,
      U: 22,
      V: 21,
      W: 29,
      X: 21,
      Y: 21,
      Z: 19,
      "[": 10,
      "]": 10,
      "^": 18,
      _: 17,
      "`": 10,
      a: 17,
      b: 19,
      c: 17,
      d: 19,
      e: 17,
      f: 10,
      g: 19,
      h: 19,
      i: 9,
      j: 9,
      k: 17,
      l: 9,
      m: 27,
      n: 19,
      o: 19,
      p: 19,
      q: 19,
      r: 12,
      s: 17,
      t: 10,
      u: 19,
      v: 17,
      w: 24,
      x: 17,
      y: 17,
      z: 15,
      "{": 12,
      "|": 9,
      "}": 12,
      "~": 18
    };
    var w = 0;
    for (var i = 0; i < str.length; i++) {
      //If we dont know how wide the char is, set it to 28.5 that is the width of W and no char is wider than that.
      w += fontSize / 30 * (strWidths[str[i]] ? strWidths[str[i]] : 28.5);
    }
    //This is for the space between the text and the symbol.
    w += spaceTextIcon;
    return w;
  }

  // Print text in right position
  function text(str) {
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
      text: str,
      x: 100,
      y: y,
      textanchor: "middle",
      fontsize: size,
      fontfamily: fontFamily,
      fill: fontColor,
      stroke: false,
      fontweight: "bold"
    };
    return t;
  }

  if (this.properties.numberSIDC) {
    //Number based SIDCs.
    //var symbolSet = String(this.SIDC).substr(4, 2);
    //TODO fix add code for Number based labels
  } else {
    //Letter based SIDCs.
    if (!ms._labelCache.hasOwnProperty("letter")) {
      ms._labelCache["letter"] = {};
      for (var i in ms._labelOverrides["letter"]) {
        if (!ms._labelOverrides["letter"].hasOwnProperty(i)) continue;
        ms._labelOverrides["letter"][i].call(this, ms._labelCache["letter"]);
      }
    }
    var genericSIDC =
      this.SIDC.substr(0, 1) +
      "-" +
      this.SIDC.substr(2, 1) +
      "-" +
      this.SIDC.substr(4, 6);
    if (ms._labelCache["letter"].hasOwnProperty(genericSIDC)) {
      drawArray2.push(
        labelOverride.call(this, ms._labelCache["letter"][genericSIDC])
      );

      //outline
      if (this.outlineWidth > 0)
        drawArray1.push(
          ms.outline(
            drawArray2,
            this.outlineWidth,
            this.strokeWidth,
            this.outlineColor
          )
        );
      return { pre: drawArray1, post: drawArray2, bbox: gbbox };
    }
  }

  //Check that we have some texts to print
  var textFields =
    this.quantity ||
    this.reinforcedReduced ||
    this.staffComments ||
    this.additionalInformation ||
    this.evaluationRating ||
    this.combatEffectiveness ||
    this.signatureEquipment ||
    this.higherFormation ||
    this.hostile ||
    this.iffSif ||
    this.sigint ||
    this.uniqueDesignation ||
    this.type ||
    this.dtg ||
    this.altitudeDepth ||
    this.location ||
    this.speed ||
    this.specialHeadquarters ||
    this.platformType ||
    this.equipmentTeardownTime ||
    this.commonIdentifier ||
    this.auxiliaryEquipmentIndicator ||
    this.headquartersElement;
  if (this.infoFields && textFields) {
    if (this.specialHeadquarters) {
      drawArray2.push(text(this.specialHeadquarters));
    }
    if (this.quantity) {
      //geometry
      drawArray2.push({
        type: "text",
        text: this.quantity,
        x: 100,
        y: bbox.y1 - 10,
        textanchor: "middle",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
      gbbox.y1 = bbox.y1 - 10 - fontSize;
    }
    if (this.headquartersElement) {
      if (
        this.properties.condition &&
        this.properties.fill &&
        this.monoColor == ""
      ) {
        //Add the hight of the codition bar to the geometry bounds
        bbox.y2 += 15;
      }
      //geometry
      drawArray2.push({
        type: "text",
        text: this.headquartersElement,
        x: 100,
        y: bbox.y2 + 35,
        textanchor: "middle",
        fontsize: 35,
        fontfamily: fontFamily,
        fontweight: "bold",
        fill: fontColor,
        stroke: false
      });
      gbbox.y2 = bbox.y2 + 35;
    }

    var gStrings = {
      L1: "",
      L2: "",
      L3: "",
      L4: "",
      L5: "",
      R1: "",
      R2: "",
      R3: "",
      R4: "",
      R5: ""
    }; //Text information on left and right sIde.
    var a;
    //Air & Space (They should be different but we skip that at the moment) TODO
    if (!isNaN(this.SIDC) && this.properties.dimension == "Air") {
      gStrings.R1 = this.uniqueDesignation;
      gStrings.R2 = this.iffSif;
      gStrings.R3 = this.type;
      if (this.speed || this.altitudeDepth) {
        a = [];
        if (this.speed) a.push(this.speed);
        if (this.altitudeDepth) a.push(this.altitudeDepth);
        gStrings.R4 = a.join(" ");
      }
      if (this.staffComments || this.additionalInformation) {
        a = [];
        if (this.staffComments) a.push(this.staffComments);
        if (this.additionalInformation) a.push(this.additionalInformation);
        gStrings.R5 = a.join(" ");
      }
    }
    //Land or letterbased SIDC
    if (isNaN(this.SIDC) || this.properties.baseDimension == "Ground") {
      gStrings.L1 = this.dtg;
      if (this.altitudeDepth || this.location) {
        a = [];
        if (this.altitudeDepth) a.push(this.altitudeDepth);
        if (this.location) a.push(this.location);
        gStrings.L2 = a.join(" ");
      }
      if (this.type || this.platformType || this.commonIdentifier) {
        a = [];
        if (this.type) a.push(this.type);
        if (this.platformType) a.push(this.platformType);
        if (this.commonIdentifier) a.push(this.commonIdentifier);
        gStrings.L3 = a.join(" ");
      }
      gStrings.L4 = this.uniqueDesignation;
      gStrings.L5 = this.speed;
      gStrings.R1 = this.reinforcedReduced;
      gStrings.R2 = this.staffComments;
      if (this.additionalInformation || this.equipmentTeardownTime) {
        a = [];
        if (this.additionalInformation) a.push(this.additionalInformation);
        if (this.equipmentTeardownTime) a.push(this.equipmentTeardownTime);
        gStrings.R3 = a.join(" ");
      }
      gStrings.R4 = this.higherFormation;
      if (
        this.evaluationRating ||
        this.combatEffectiveness ||
        this.signatureEquipment ||
        this.hostile ||
        this.iffSif
      ) {
        a = [];
        if (this.evaluationRating) a.push(this.evaluationRating);
        if (this.combatEffectiveness) a.push(this.combatEffectiveness);
        if (this.signatureEquipment) a.push(this.signatureEquipment);
        if (this.hostile) a.push(this.hostile);
        if (this.iffSif) a.push(this.iffSif);
        gStrings.R5 = a.join(" ");
      }
    }
    //Sea numberbased SIDC
    if (!isNaN(this.SIDC) && this.properties.dimension == "Sea") {
      gStrings.R1 = this.uniqueDesignation;
      gStrings.R2 = this.type;
      gStrings.R3 = this.iffSif;
      if (this.staffComments || this.additionalInformation) {
        a = [];
        if (this.staffComments) a.push(this.staffComments);
        if (this.additionalInformation) a.push(this.additionalInformation);
        gStrings.R4 = a.join(" ");
      }
      if (this.location || this.speed) {
        a = [];
        if (this.location) a.push(this.location);
        if (this.speed) a.push(this.speed);
        gStrings.R5 = a.join(" ");
      }
    }
    //Sub numberbased SIDC
    if (!isNaN(this.SIDC) && this.properties.dimension == "Subsurface") {
      gStrings.R1 = this.uniqueDesignation;
      gStrings.R2 = this.type;
      gStrings.R3 = this.altitudeDepth;
      gStrings.R4 = this.staffComments;
      gStrings.R5 = this.additionalInformation;
    }

    //Add space on left sIde
    gbbox.x1 =
      bbox.x1 -
      Math.max(
        this.specialHeadquarters
          ? (strWidth(this.specialHeadquarters) -
              this.properties.baseGeometry.bbox.width()) /
              2
          : 0,
        this.quantity
          ? (strWidth(this.quantity) -
              this.properties.baseGeometry.bbox.width()) /
              2
          : 0,
        strWidth(gStrings.L1),
        strWidth(gStrings.L2),
        strWidth(gStrings.L3),
        strWidth(gStrings.L4),
        strWidth(gStrings.L5)
      );

    //Space on right sIde
    gbbox.x2 =
      bbox.x2 +
      Math.max(
        this.specialHeadquarters
          ? (strWidth(this.specialHeadquarters) -
              this.properties.baseGeometry.bbox.width()) /
              2
          : 0,
        this.quantity
          ? (strWidth(this.quantity) -
              this.properties.baseGeometry.bbox.width()) /
              2
          : 0,
        strWidth(gStrings.R1),
        strWidth(gStrings.R2),
        strWidth(gStrings.R3),
        strWidth(gStrings.R4),
        strWidth(gStrings.R5)
      );

    //Extra space above for field 1
    if (gStrings.L1 || gStrings.R1) {
      gbbox.y1 = Math.min(gbbox.y1, 100 - 2.5 * fontSize);
    }
    //Extra space above for field 2
    if (gStrings.L2 || gStrings.R2) {
      gbbox.y1 = Math.min(gbbox.y1, 100 - 1.5 * fontSize);
    }
    //Extra space below for field 4
    if (gStrings.L4 || gStrings.R4) {
      gbbox.y2 = Math.max(gbbox.y2, 100 + 1.7 * fontSize);
    }
    //Extra space below for field 5
    if (gStrings.L5 || gStrings.R5) {
      gbbox.y2 = Math.max(gbbox.y2, 100 + 2.7 * fontSize);
    }

    //geometries
    if (gStrings.L1)
      drawArray2.push({
        type: "text",
        text: gStrings.L1,
        x: bbox.x1 - spaceTextIcon,
        y: 100 - 1.5 * fontSize,
        textanchor: "end",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.L2)
      drawArray2.push({
        type: "text",
        text: gStrings.L2,
        x: bbox.x1 - spaceTextIcon,
        y: 100 - 0.5 * fontSize,
        textanchor: "end",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.L3)
      drawArray2.push({
        type: "text",
        text: gStrings.L3,
        x: bbox.x1 - spaceTextIcon,
        y: 100 + 0.5 * fontSize,
        textanchor: "end",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.L4)
      drawArray2.push({
        type: "text",
        text: gStrings.L4,
        x: bbox.x1 - spaceTextIcon,
        y: 100 + 1.5 * fontSize,
        textanchor: "end",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.L5)
      drawArray2.push({
        type: "text",
        text: gStrings.L5,
        x: bbox.x1 - spaceTextIcon,
        y: 100 + 2.5 * fontSize,
        textanchor: "end",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });

    //geometries
    if (gStrings.R1)
      drawArray2.push({
        type: "text",
        text: gStrings.R1,
        x: bbox.x2 + spaceTextIcon,
        y: 100 - 1.5 * fontSize,
        textanchor: "start",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.R2)
      drawArray2.push({
        type: "text",
        text: gStrings.R2,
        x: bbox.x2 + spaceTextIcon,
        y: 100 - 0.5 * fontSize,
        textanchor: "start",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.R3)
      drawArray2.push({
        type: "text",
        text: gStrings.R3,
        x: bbox.x2 + spaceTextIcon,
        y: 100 + 0.5 * fontSize,
        textanchor: "start",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.R4)
      drawArray2.push({
        type: "text",
        text: gStrings.R4,
        x: bbox.x2 + spaceTextIcon,
        y: 100 + 1.5 * fontSize,
        textanchor: "start",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });
    if (gStrings.R5)
      drawArray2.push({
        type: "text",
        text: gStrings.R5,
        x: bbox.x2 + spaceTextIcon,
        y: 100 + 2.5 * fontSize,
        textanchor: "start",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });

    //outline
    if (this.outlineWidth > 0)
      drawArray1.push(
        ms.outline(
          drawArray2,
          this.outlineWidth,
          this.strokeWidth,
          this.outlineColor
        )
      );
  }
  return { pre: drawArray1, post: drawArray2, bbox: gbbox };
};
