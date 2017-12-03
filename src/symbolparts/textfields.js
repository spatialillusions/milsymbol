//Text Fields ############################################################################
var ms = require("../ms.js");

module.exports = function textfields() {
  var drawArray1 = [];
  var drawArray2 = [];
  var bbox = this.properties.baseGeometry.bbox;
  var fontColor =
    this.style.infoColor ||
    this.colors.iconColor[this.properties.affiliation] ||
    this.colors.iconColor["Friend"];
  var fontFamily = "Arial";
  var fontSize = this.style.infoSize;

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
    //var symbolSet = String(this.options.sidc).substr(4, 2);
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
      this.options.sidc.substr(0, 1) +
      "-" +
      this.options.sidc.substr(2, 1) +
      "-" +
      this.options.sidc.substr(4, 6);
    if (ms._labelCache["letter"].hasOwnProperty(genericSIDC)) {
      drawArray2.push(
        labelOverride.call(this, ms._labelCache["letter"][genericSIDC])
      );

      //outline
      if (this.style.outlineWidth > 0)
        drawArray1.push(
          ms.outline(
            drawArray2,
            this.style.outlineWidth,
            this.style.strokeWidth,
            this.style.outlineColor
          )
        );
      return { pre: drawArray1, post: drawArray2, bbox: gbbox };
    }
  }

  //Check that we have some texts to print
  var textFields =
    this.options.quantity ||
    this.options.reinforcedReduced ||
    this.options.staffComments ||
    this.options.additionalInformation ||
    this.options.evaluationRating ||
    this.options.combatEffectiveness ||
    this.options.signatureEquipment ||
    this.options.higherFormation ||
    this.options.hostile ||
    this.options.iffSif ||
    this.options.sigint ||
    this.options.uniqueDesignation ||
    this.options.type ||
    this.options.dtg ||
    this.options.altitudeDepth ||
    this.options.location ||
    this.options.speed ||
    this.options.specialHeadquarters ||
    this.options.platformType ||
    this.options.equipmentTeardownTime ||
    this.options.commonIdentifier ||
    this.options.auxiliaryEquipmentIndicator ||
    this.options.headquartersElement ||
    this.options.installationComposition ||
    this.options.guardedUnit ||
    this.options.specialDesignator;
  if (this.style.infoFields && textFields) {
    if (this.options.specialHeadquarters) {
      drawArray2.push(text(this.options.specialHeadquarters));
    }
    if (this.options.quantity && !this.properties.dismounted) {
      //geometry
      drawArray2.push({
        type: "text",
        text: this.options.quantity,
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
    if (this.options.headquartersElement) {
      /*
      if (
        this.properties.condition &&
        this.properties.fill &&
        this.style.monoColor == ""
      ) {
        //Add the hight of the codition bar to the geometry bounds
        bbox.y2 += 15;
      }
      //*/
      //geometry
      drawArray2.push({
        type: "text",
        text: this.options.headquartersElement,
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
    if (!isNaN(this.options.sidc) && this.properties.baseDimension == "Air") {
      gStrings.R1 = this.options.uniqueDesignation;
      gStrings.R2 = this.options.iffSif;
      gStrings.R3 = this.options.type;
      if (this.options.speed || this.options.altitudeDepth) {
        a = [];
        if (this.options.speed) a.push(this.options.speed);
        if (this.options.altitudeDepth) a.push(this.options.altitudeDepth);
        gStrings.R4 = a.join("/");
      }
      if (this.options.staffComments || this.options.additionalInformation) {
        a = [];
        if (this.options.staffComments) a.push(this.options.staffComments);
        if (this.options.additionalInformation)
          a.push(this.options.additionalInformation);
        gStrings.R5 = a.join("/");
      }
    }
    //Land or letterbased SIDC
    if (isNaN(this.options.sidc) || this.properties.baseDimension == "Ground") {
      gStrings.L1 = this.options.dtg;
      if (this.options.altitudeDepth || this.options.location) {
        a = [];
        if (this.options.altitudeDepth) a.push(this.options.altitudeDepth);
        if (this.options.location) a.push(this.options.location);
        gStrings.L2 = a.join("/");
      }
      gStrings.L4 = this.options.uniqueDesignation;
      gStrings.L5 = this.options.speed;
      gStrings.R2 = this.options.staffComments;
      gStrings.R4 = this.options.higherFormation;
      if (
        this.options.evaluationRating ||
        this.options.combatEffectiveness ||
        this.options.signatureEquipment ||
        this.options.hostile ||
        this.options.iffSif
      ) {
        a = [];
        if (this.options.evaluationRating)
          a.push(this.options.evaluationRating);
        if (this.options.combatEffectiveness)
          a.push(this.options.combatEffectiveness);
        if (this.options.signatureEquipment)
          a.push(this.options.signatureEquipment);
        if (this.options.hostile) a.push(this.options.hostile);
        if (this.options.iffSif) a.push(this.options.iffSif);
        gStrings.R5 = a.join("/");
      }
      if (isNaN(this.options.sidc) || this.properties.unit) {
        if (
          this.options.type ||
          this.options.platformType ||
          this.options.equipmentTeardownTime
        ) {
          a = [];
          if (this.options.type) a.push(this.options.type);
          if (this.options.platformType) a.push(this.options.platformType);
          if (this.options.equipmentTeardownTime)
            a.push(this.options.equipmentTeardownTime);
          gStrings.L3 = a.join("/");
        }
        gStrings.R1 = this.options.reinforcedReduced;
        if (this.properties.activity) gStrings.R1 = this.options.country;
        if (
          this.options.additionalInformation ||
          this.options.commonIdentifier
        ) {
          a = [];
          if (this.options.additionalInformation)
            a.push(this.options.additionalInformation);
          if (this.options.commonIdentifier)
            a.push(this.options.commonIdentifier);
          gStrings.R3 = a.join("/");
        }
      } else {
        if (
          this.options.type ||
          this.options.platformType ||
          this.options.commonIdentifier ||
          this.options.installationComposition
        ) {
          a = [];
          if (this.options.type) a.push(this.options.type);
          if (this.options.platformType) a.push(this.options.platformType);
          if (this.options.commonIdentifier)
            a.push(this.options.commonIdentifier);
          if (this.options.installationComposition)
            a.push(this.options.installationComposition);
          gStrings.L3 = a.join("/");
        }
        gStrings.R1 = this.options.country;
        if (
          this.options.additionalInformation ||
          this.options.equipmentTeardownTime
        ) {
          a = [];
          if (this.options.additionalInformation)
            a.push(this.options.additionalInformation);
          if (this.options.equipmentTeardownTime)
            a.push(this.options.equipmentTeardownTime);
          gStrings.R3 = a.join("/");
        }
      }
    }
    // Dismounted individual
    if (this.properties.dismounted) {
      if (this.options.quantity) {
        //geometry
        drawArray2.push({
          type: "text",
          text: this.options.quantity,
          x: 100,
          y: bbox.y2 + fontSize,
          textanchor: "middle",
          fontsize: fontSize,
          fontfamily: fontFamily,
          fill: fontColor,
          stroke: false
        });
        gbbox.y2 = bbox.y2 + fontSize;
      }

      gStrings.L1 = this.options.dtg;
      if (this.options.altitudeDepth || this.options.location) {
        a = [];
        if (this.options.altitudeDepth) a.push(this.options.altitudeDepth);
        if (this.options.location) a.push(this.options.location);
        gStrings.L2 = a.join("/");
      }
      if (
        this.options.type ||
        this.options.platformType ||
        this.options.commonIdentifier
      ) {
        a = [];
        if (this.options.type) a.push(this.options.type);
        if (this.options.platformType) a.push(this.options.platformType);
        if (this.options.commonIdentifier)
          a.push(this.options.commonIdentifier);
        gStrings.L3 = a.join("/");
      }
      gStrings.L4 = this.options.uniqueDesignation;
      gStrings.L5 = this.options.speed;
      gStrings.R1 = this.options.country;
      gStrings.R2 = this.options.staffComments;
      if (this.options.additionalInformation) {
        a = [];
        if (this.options.additionalInformation)
          a.push(this.options.additionalInformation);

        gStrings.R3 = a.join("/");
      }
      gStrings.R4 = this.options.higherFormation;
      if (
        this.options.evaluationRating ||
        this.options.combatEffectiveness ||
        this.options.signatureEquipment ||
        this.options.hostile ||
        this.options.iffSif
      ) {
        a = [];
        if (this.options.evaluationRating)
          a.push(this.options.evaluationRating);
        if (this.options.combatEffectiveness)
          a.push(this.options.combatEffectiveness);
        if (this.options.signatureEquipment)
          a.push(this.options.signatureEquipment);
        if (this.options.hostile) a.push(this.options.hostile);
        if (this.options.iffSif) a.push(this.options.iffSif);
        gStrings.R5 = a.join("/");
      }
    }

    //Sea numberbased SIDC
    if (!isNaN(this.options.sidc) && this.properties.baseDimension == "Sea") {
      if (this.options.guardedUnit || this.options.specialDesignator) {
        a = [];
        if (this.options.guardedUnit) a.push(this.options.guardedUnit);
        if (this.options.specialDesignator)
          a.push(this.options.specialDesignator);
        gStrings.L1 = a.join("/");
      }
      gStrings.R1 = this.options.uniqueDesignation;
      gStrings.R2 = this.options.type;
      gStrings.R3 = this.options.iffSif;
      if (this.options.staffComments || this.options.additionalInformation) {
        a = [];
        if (this.options.staffComments) a.push(this.options.staffComments);
        if (this.options.additionalInformation)
          a.push(this.options.additionalInformation);
        gStrings.R4 = a.join("/");
      }
      if (this.options.location || this.options.speed) {
        a = [];
        if (this.options.location) a.push(this.options.location);
        if (this.options.speed) a.push(this.options.speed);
        gStrings.R5 = a.join("/");
      }
    }
    //Sub numberbased SIDC
    if (
      !isNaN(this.options.sidc) &&
      this.properties.baseDimension == "Subsurface"
    ) {
      gStrings.L1 = this.options.specialDesignator;
      gStrings.R1 = this.options.uniqueDesignation;
      gStrings.R2 = this.options.type;
      gStrings.R3 = this.options.altitudeDepth;
      gStrings.R4 = this.options.staffComments;
      gStrings.R5 = this.options.additionalInformation;
    }

    //Add space on left side
    gbbox.x1 =
      bbox.x1 -
      Math.max(
        this.options.specialHeadquarters
          ? (strWidth(this.options.specialHeadquarters) -
              this.properties.baseGeometry.bbox.width()) /
            2
          : 0,
        this.options.quantity
          ? (strWidth(this.options.quantity) -
              this.properties.baseGeometry.bbox.width()) /
            2
          : 0,
        strWidth(gStrings.L1),
        strWidth(gStrings.L2),
        strWidth(gStrings.L3),
        strWidth(gStrings.L4),
        strWidth(gStrings.L5)
      );

    //Space on right side
    gbbox.x2 =
      bbox.x2 +
      Math.max(
        this.options.specialHeadquarters
          ? (strWidth(this.options.specialHeadquarters) -
              this.properties.baseGeometry.bbox.width()) /
            2
          : 0,
        this.options.quantity
          ? (strWidth(this.options.quantity) -
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
    if (this.style.outlineWidth > 0)
      drawArray1.push(
        ms.outline(
          drawArray2,
          this.style.outlineWidth,
          this.style.strokeWidth,
          this.style.outlineColor
        )
      );
  }
  return { pre: drawArray1, post: drawArray2, bbox: gbbox };
};
