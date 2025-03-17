//Text Fields ############################################################################
import strWidth from "./string-width.js";
export default function textfieldsMod(ms) {
  const drawArray1 = [];
  const drawArray2 = [];
  const bbox = this.metadata.baseGeometry.bbox;
  let flag = this.options.country_flag ? 70 : 0;
  flag += this.options.signature == "!" ? 30 : 0;
  const stack = this.options.stack ? this.options.stack * 15 : 0;
  const fontColor =
    (typeof this.style.infoColor === "object"
      ? this.style.infoColor[this.metadata.affiliation]
      : this.style.infoColor) ||
    this.colors.iconColor[this.metadata.affiliation] ||
    this.colors.iconColor["Friend"];
  const fontFamily = this.style.fontfamily;
  const fontSize = this.style.infoSize;

  const infoBackground =
    typeof this.style.infoBackground === "object"
      ? this.style.infoBackground[this.metadata.affiliation]
      : this.style.infoBackground;
  const infoBackgroundFrame =
    typeof this.style.infoBackground === "object"
      ? this.style.infoBackground[this.metadata.affiliation]
      : this.style.infoBackground;

  const gbbox = new ms.BBox();
  const spaceTextIcon = 20; //The distance between the Icon and the labels

  //Text fields overrides
  function labelOverride(label) {
    const texts = [];
    let labelbox;
    for (const i in label) {
      if (
        Object.prototype.hasOwnProperty.call(this.options, i) &&
        this.options[i] != ""
      ) {
        if (!Object.prototype.hasOwnProperty.call(label, i)) continue;
        for (let j = 0; j < (label[i].length || 1); j++) {
          let lbl;
          if (Array.isArray(label[i])) {
            lbl = label[i][j];
          } else {
            lbl = label[i];
          }
          labelbox = { y2: lbl.y, y1: lbl.y - lbl.fontsize };
          if (lbl.textanchor == "start") {
            labelbox.x1 = lbl.x;
            labelbox.x2 =
              lbl.x +
              strWidth(this.options[i]) *
                (lbl.fontsize / fontSize, fontSize, spaceTextIcon);
          }
          if (lbl.textanchor == "middle") {
            const w =
              strWidth(this.options[i]) *
              (lbl.fontsize / fontSize, fontSize, spaceTextIcon);
            labelbox.x1 = lbl.x - w / 2;
            labelbox.x2 = lbl.x + w / 2;
          }
          //if(lbl.textanchor == 'middle'){}
          if (lbl.textanchor == "end") {
            labelbox.x1 =
              lbl.x -
              strWidth(this.options[i]) *
                (lbl.fontsize / fontSize, fontSize, spaceTextIcon);
            labelbox.x2 = lbl.x;
          }
          gbbox.merge(labelbox);
          const text = {
            type: "text",
            fontfamily: fontFamily,
            fill: fontColor
          };
          if (Object.prototype.hasOwnProperty.call(lbl, "alignmentBaseline"))
            text.alignmentBaseline = lbl.alignmentBaseline;
          if (Object.prototype.hasOwnProperty.call(lbl, "fill"))
            text.fill = lbl.fill;
          if (Object.prototype.hasOwnProperty.call(lbl, "stroke"))
            text.stroke = lbl.stroke;
          if (Object.prototype.hasOwnProperty.call(lbl, "textanchor"))
            text.textanchor = lbl.textanchor;
          if (Object.prototype.hasOwnProperty.call(lbl, "fontsize"))
            text.fontsize = lbl.fontsize;
          if (Object.prototype.hasOwnProperty.call(lbl, "fontweight"))
            text.fontweight = lbl.fontweight;
          text.x = lbl.x;
          text.y = lbl.y;
          text.text = this.options[i];
          texts.push(text);
        }
      }
    }
    return texts;
  }

  // Print text in right position
  function text(str) {
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
      text: str,
      fontweight: "bold",
      fontfamily: fontFamily,
      fill: fontColor
    };
  }
  let i, genericSIDC;
  if (this.metadata.numberSIDC) {
    //Number based SIDCs.
    if (!Object.prototype.hasOwnProperty.call(ms._labelCache, "number")) {
      ms._labelCache["number"] = {};
      for (i in ms._labelOverrides["number"]) {
        if (
          !Object.prototype.hasOwnProperty.call(ms._labelOverrides["number"], i)
        )
          continue;
        ms._labelOverrides["number"][i].call(this, ms._labelCache["number"]);
      }
    }
    genericSIDC = this.metadata.functionid.substr(0, 6);

    if (
      this.metadata.controlMeasure &&
      Object.prototype.hasOwnProperty.call(
        ms._labelCache["number"],
        genericSIDC
      )
    ) {
      drawArray2.push(
        labelOverride.call(this, ms._labelCache["number"][genericSIDC])
      );

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
      return { pre: drawArray1, post: drawArray2, bbox: gbbox };
    }
  } else {
    //Letter based SIDCs.
    if (!Object.prototype.hasOwnProperty.call(ms._labelCache, "letter")) {
      ms._labelCache["letter"] = {};
      for (i in ms._labelOverrides["letter"]) {
        if (
          !Object.prototype.hasOwnProperty.call(ms._labelOverrides["letter"], i)
        )
          continue;
        ms._labelOverrides["letter"][i].call(this, ms._labelCache["letter"]);
      }
    }
    genericSIDC =
      this.options.sidc.substr(0, 1) +
      "-" +
      this.options.sidc.substr(2, 1) +
      "-" +
      this.options.sidc.substr(4, 6);
    if (
      Object.prototype.hasOwnProperty.call(
        ms._labelCache["letter"],
        genericSIDC
      )
    ) {
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
            typeof this.style.outlineColor === "object"
              ? this.style.outlineColor[this.metadata.affiliation]
              : this.style.outlineColor
          )
        );
      return { pre: drawArray1, post: drawArray2, bbox: gbbox };
    }
  }

  //Check that we have some texts to print
  const textFields =
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
    if (this.options.quantity && !this.metadata.dismounted) {
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
        this.metadata.condition &&
        this.metadata.fill &&
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

    const gStrings = {
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
    let a;
    //Air & Space (They should be different but we skip that at the moment) TODO
    if (!isNaN(this.options.sidc) && this.metadata.baseDimension == "Air") {
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
    if (isNaN(this.options.sidc) || this.metadata.baseDimension == "Ground") {
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
      if (isNaN(this.options.sidc) || this.metadata.unit) {
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
        if (this.metadata.activity) gStrings.R1 = this.options.country;
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
    if (this.metadata.dismounted) {
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
    if (!isNaN(this.options.sidc) && this.metadata.baseDimension == "Sea") {
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
      this.metadata.baseDimension == "Subsurface"
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
          ? (strWidth(
              this.options.specialHeadquarters,
              fontSize,
              spaceTextIcon
            ) -
              this.metadata.baseGeometry.bbox.width()) /
              2
          : 0,
        this.options.quantity
          ? (strWidth(this.options.quantity, fontSize, spaceTextIcon) -
              this.metadata.baseGeometry.bbox.width()) /
              2
          : 0,
        strWidth(gStrings.L1, fontSize, spaceTextIcon),
        strWidth(gStrings.L2, fontSize, spaceTextIcon),
        strWidth(gStrings.L3, fontSize, spaceTextIcon),
        strWidth(gStrings.L4, fontSize, spaceTextIcon),
        strWidth(gStrings.L5, fontSize, spaceTextIcon)
      );

    //Space on right side
    gbbox.x2 =
      bbox.x2 +
      Math.max(
        this.options.specialHeadquarters
          ? (strWidth(
              this.options.specialHeadquarters,
              fontSize,
              spaceTextIcon
            ) -
              this.metadata.baseGeometry.bbox.width()) /
              2
          : 0,
        this.options.quantity
          ? (strWidth(this.options.quantity, fontSize, spaceTextIcon) -
              this.metadata.baseGeometry.bbox.width()) /
              2
          : 0,
        strWidth(gStrings.R1 + stack, fontSize, spaceTextIcon),
        strWidth(gStrings.R2 + stack, fontSize, spaceTextIcon),
        strWidth(gStrings.R3 + stack, fontSize, spaceTextIcon),
        strWidth(gStrings.R4 + stack + flag * 1.5, fontSize, spaceTextIcon),
        strWidth(gStrings.R5 + stack + flag * 1.5, fontSize, spaceTextIcon)
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

    // Background boxes behind text
    if (this.style.infoBackground) {
      let leftBox = { x1: 100, y1: 1000, y2: 0 };
      let rightBox = { x2: 100, y1: 1000, y2: 0 };
      if (gStrings.L1)
        leftBox = {
          x1: Math.min(
            leftBox.x1,
            bbox.x1 - strWidth(gStrings.L1, fontSize, spaceTextIcon)
          ),
          x2: bbox.x1 - spaceTextIcon / 2,
          y1: Math.min(leftBox.y1, 100 - 2.5 * fontSize),
          y2: Math.max(leftBox.y2, 100 - 1.5 * fontSize + spaceTextIcon / 2)
        };
      if (gStrings.L2)
        leftBox = {
          x1: Math.min(
            leftBox.x1,
            bbox.x1 - strWidth(gStrings.L2, fontSize, spaceTextIcon)
          ),
          x2: bbox.x1 - spaceTextIcon / 2,
          y1: Math.min(leftBox.y1, 100 - 1.5 * fontSize),
          y2: Math.max(leftBox.y2, 100 - 0.5 * fontSize + spaceTextIcon / 2)
        };
      if (gStrings.L3)
        leftBox = {
          x1: Math.min(
            leftBox.x1,
            bbox.x1 - strWidth(gStrings.L3, fontSize, spaceTextIcon)
          ),
          x2: bbox.x1 - spaceTextIcon / 2,
          y1: Math.min(leftBox.y1, 100 - 0.5 * fontSize),
          y2: Math.max(leftBox.y2, 100 + 0.5 * fontSize + spaceTextIcon / 2)
        };
      if (gStrings.L4)
        leftBox = {
          x1: Math.min(
            leftBox.x1,
            bbox.x1 - strWidth(gStrings.L4, fontSize, spaceTextIcon)
          ),
          x2: bbox.x1 - spaceTextIcon / 2,
          y1: Math.min(leftBox.y1, 100 + 0.5 * fontSize),
          y2: Math.max(leftBox.y2, 100 + 1.5 * fontSize + spaceTextIcon / 2)
        };
      if (gStrings.L5)
        leftBox = {
          x1: Math.min(
            leftBox.x1,
            bbox.x1 - strWidth(gStrings.L5, fontSize, spaceTextIcon)
          ),
          x2: bbox.x1 - spaceTextIcon / 2,
          y1: Math.min(leftBox.y1, 100 + 1.5 * fontSize),
          y2: Math.max(leftBox.y2, 100 + 2.5 * fontSize + spaceTextIcon / 2)
        };
      if (Object.prototype.hasOwnProperty.call(leftBox, "x2")) {
        gbbox.x1 -= fontSize / 2;
        drawArray2.push({
          type: "path",
          d:
            "M " +
            (leftBox.x1 - fontSize / 2) +
            "," +
            (leftBox.y1 + fontSize / 2) +
            " " +
            leftBox.x1 +
            "," +
            leftBox.y1 +
            " " +
            leftBox.x2 +
            "," +
            leftBox.y1 +
            " " +
            leftBox.x2 +
            "," +
            leftBox.y2 +
            " " +
            (leftBox.x1 - fontSize / 2) +
            "," +
            leftBox.y2 +
            "z",
          fill: infoBackground,
          stroke: infoBackgroundFrame || false
        });
      }
      if (gStrings.R1)
        rightBox = {
          x1: bbox.x2 + spaceTextIcon / 2,
          x2: Math.max(
            rightBox.x2,
            bbox.x2 + strWidth(gStrings.R1, fontSize, spaceTextIcon)
          ),
          y1: Math.min(rightBox.y1, 100 - 2.5 * fontSize),
          y2: Math.max(rightBox.y2, 100 - 1.5 * fontSize + spaceTextIcon / 2)
        };
      if (gStrings.R2)
        rightBox = {
          x1: bbox.x2 + spaceTextIcon / 2,
          x2: Math.max(
            rightBox.x2,
            bbox.x2 + strWidth(gStrings.R2, fontSize, spaceTextIcon)
          ),
          y1: Math.min(rightBox.y1, 100 - 1.5 * fontSize),
          y2: Math.max(rightBox.y2, 100 - 0.5 * fontSize + spaceTextIcon / 2)
        };
      if (gStrings.R3)
        rightBox = {
          x1: bbox.x2 + spaceTextIcon / 2,
          x2: Math.max(
            rightBox.x2,
            bbox.x2 + strWidth(gStrings.R3, fontSize, spaceTextIcon)
          ),
          y1: Math.min(rightBox.y1, 100 - 0.5 * fontSize),
          y2: Math.max(rightBox.y2, 100 + 0.5 * fontSize + spaceTextIcon / 2)
        };
      if (gStrings.R4)
        rightBox = {
          x1: bbox.x2 + spaceTextIcon / 2,
          x2: Math.max(
            rightBox.x2,
            bbox.x2 + strWidth(gStrings.R4, fontSize, spaceTextIcon)
          ),
          y1: Math.min(rightBox.y1, 100 + 0.5 * fontSize),
          y2: Math.max(rightBox.y2, 100 + 1.5 * fontSize + spaceTextIcon / 2)
        };
      if (gStrings.R5)
        rightBox = {
          x1: bbox.x2 + spaceTextIcon / 2,
          x2: Math.max(
            rightBox.x2,
            bbox.x2 + strWidth(gStrings.R5, fontSize, spaceTextIcon)
          ),
          y1: Math.min(rightBox.y1, 100 + 1.5 * fontSize),
          y2: Math.max(rightBox.y2, 100 + 2.5 * fontSize + spaceTextIcon / 2)
        };
      if (Object.prototype.hasOwnProperty.call(rightBox, "x1")) {
        gbbox.x2 += fontSize / 2;
        drawArray2.push({
          type: "path",
          d:
            "M " +
            rightBox.x1 +
            "," +
            rightBox.y1 +
            " " +
            (rightBox.x2 + fontSize / 2) +
            "," +
            rightBox.y1 +
            " " +
            (rightBox.x2 + fontSize / 2) +
            "," +
            (rightBox.y2 - fontSize / 2) +
            " " +
            rightBox.x2 +
            "," +
            rightBox.y2 +
            " " +
            rightBox.x1 +
            "," +
            rightBox.y2 +
            "z",
          fill: infoBackground,
          stroke: infoBackgroundFrame || false
        });
      }
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
        x: bbox.x2 + spaceTextIcon + stack,
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
        x: bbox.x2 + spaceTextIcon + stack,
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
        x: bbox.x2 + spaceTextIcon + stack,
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
        x: flag + bbox.x2 + spaceTextIcon + stack,
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
        x: flag + bbox.x2 + spaceTextIcon + stack,
        y: 100 + 2.5 * fontSize,
        textanchor: "start",
        fontsize: fontSize,
        fontfamily: fontFamily,
        fill: fontColor,
        stroke: false
      });

    //outline
    if (
      this.style.infoOutlineWidth > 0 ||
      (this.style.infoOutlineWidth === false && this.style.outlineWidth > 0)
    )
      drawArray1.push(
        ms.outline(
          drawArray2,
          this.style.infoOutlineWidth === false
            ? this.style.outlineWidth
            : this.style.infoOutlineWidth,
          this.style.strokeWidth,
          this.style.infoOutlineColor
            ? this.style.infoOutlineColor
            : typeof this.style.outlineColor === "object"
              ? this.style.outlineColor[this.metadata.affiliation]
              : this.style.outlineColor
        )
      );
  }
  return { pre: drawArray1, post: drawArray2, bbox: gbbox };
}
