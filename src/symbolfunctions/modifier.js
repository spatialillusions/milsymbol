//Symbol Modifiers #######################################################################
export default function modifier(ms) {
  var drawArray1 = [];
  var drawArray2 = [];
  var bbox = new ms.BBox(this.metadata.baseGeometry.bbox); // clone the bbox
  var color = this.style.frameColor
    ? this.style.frameColor[this.metadata.affiliation]
    : this.colors.iconColor[this.metadata.affiliation];
  var gbbox = new ms.BBox(); // bounding box for the added geometries
  var geom;

  var hqStaffLength = Number(this.style.hqStaffLength || ms._hqStaffLength);
  if (this.metadata.headquarters && hqStaffLength > 0) {
    //HEADQUARTERS
    var y = 100;
    if (
      [
        "AirFriend",
        "AirNeutral",
        "GroundFriend",
        "GroundNeutral",
        "SeaNeutral",
        "SubsurfaceNeutral"
      ].indexOf(this.metadata.dimension + this.metadata.affiliation) > -1
    )
      y = bbox.y2;
    if (
      this.metadata.dimensionType + this.metadata.affiliationType ==
      "SubsurfaceFriend"
    )
      y = bbox.y1;
    geom = {
      type: "path",
      d:
        "M" +
        bbox.x1 +
        "," +
        y +
        " L" +
        bbox.x1 +
        "," +
        (bbox.y2 + hqStaffLength)
    };

    //outline
    if (this.style.outlineWidth > 0)
      drawArray1.push(
        ms.outline(
          geom,
          this.style.outlineWidth,
          this.style.strokeWidth,
          typeof this.style.outlineColor === "object"
            ? this.style.outlineColor[this.metadata.affiliation]
            : this.style.outlineColor
        )
      );

    drawArray2.push(geom);
    gbbox.y2 = bbox.y2 + hqStaffLength;
  }
  if (this.metadata.taskForce) {
    //TASK FORCE
    var width = {
      "Corps/MEF": 110,
      Army: 145,
      "Army Group/front": 180,
      "Region/Theater": 215
    };
    width = width[this.metadata.echelon] || 90;
    geom = {
      type: "path",
      d:
        "M" +
        (100 - width / 2) +
        "," +
        bbox.y1 +
        " L" +
        (100 - width / 2) +
        "," +
        (bbox.y1 - 40) +
        " " +
        (100 + width / 2) +
        "," +
        (bbox.y1 - 40) +
        " " +
        (100 + width / 2) +
        "," +
        bbox.y1
    };

    //outline
    if (this.style.outlineWidth > 0)
      drawArray1.push(
        ms.outline(
          geom,
          this.style.outlineWidth,
          this.style.strokeWidth,
          typeof this.style.outlineColor === "object"
            ? this.style.outlineColor[this.metadata.affiliation]
            : this.style.outlineColor
        )
      );

    drawArray2.push(geom);
    gbbox.x1 = Math.min(bbox.x1, 100 - width / 2);
    gbbox.x2 = Math.max(bbox.x2, 100 + width / 2);
    gbbox.y1 = bbox.y1 - 40;
  }
  if (this.metadata.installation) {
    //INSTALLATION
    var gapFiller = 0;
    if (
      ["AirHostile", "GroundHostile", "SeaHostile"].indexOf(
        this.metadata.dimension + this.metadata.affiliation
      ) > -1
    )
      gapFiller = 14;
    if (
      [
        "AirUnknown",
        "GroundUnknown",
        "SeaUnknown",
        "AirFriend",
        "SeaFriend"
      ].indexOf(this.metadata.dimension + this.metadata.affiliation) > -1
    )
      gapFiller = 2;
    geom = {
      type: "path",
      fill: color,
      d:
        "M85," +
        (bbox.y1 + gapFiller - this.style.strokeWidth / 2) +
        " 85," +
        (bbox.y1 - 10) +
        " 115," +
        (bbox.y1 - 10) +
        " 115," +
        (bbox.y1 + gapFiller - this.style.strokeWidth / 2) +
        " 100," +
        (bbox.y1 - this.style.strokeWidth) +
        " Z"
    };

    //outline
    if (this.style.outlineWidth > 0)
      drawArray1.push(
        ms.outline(
          geom,
          this.style.outlineWidth,
          this.style.strokeWidth,
          typeof this.style.outlineColor === "object"
            ? this.style.outlineColor[this.metadata.affiliation]
            : this.style.outlineColor
        )
      );

    drawArray2.push(geom);
    gbbox.merge({ y1: bbox.y1 - 10 });
  }
  if (this.metadata.feintDummy) {
    //FEINT DUMMY
    var topPoint = bbox.y1 - 0 - bbox.width() / 2;
    geom = {
      type: "path",
      strokedasharray: ms._dashArrays.feintDummy,
      d:
        "M100," +
        topPoint +
        " L" +
        bbox.x1 +
        "," +
        (bbox.y1 - 0) +
        " M100," +
        topPoint +
        " L" +
        bbox.x2 +
        "," +
        (bbox.y1 - 0)
    };

    //outline
    if (this.style.outlineWidth > 0)
      drawArray1.push(
        ms.outline(
          geom,
          this.style.outlineWidth,
          this.style.strokeWidth,
          typeof this.style.outlineColor === "object"
            ? this.style.outlineColor[this.metadata.affiliation]
            : this.style.outlineColor
        )
      );

    drawArray2.push(geom);
    gbbox.merge({ y1: topPoint });
  }
  //Unit Size
  if (this.metadata.echelon) {
    var installationPadding = this.metadata.installation ? 15 : 0;
    var echelons = {
      "Team/Crew": {
        g: [
          { type: "circle", cx: 100, cy: bbox.y1 - 20, r: 15 },
          {
            type: "path",
            d: "M80," + (bbox.y1 - 10) + "L120," + (bbox.y1 - 30)
          }
        ],
        bbox: { y1: bbox.y1 - 40 - installationPadding }
      },
      Squad: {
        g: [
          {
            type: "circle",
            fill: color,
            cx: 100,
            cy: bbox.y1 - 20,
            r: 7.5
          }
        ],
        bbox: { y1: bbox.y1 - 20 - 7.5 - installationPadding }
      },
      Section: {
        g: [
          {
            type: "circle",
            fill: color,
            cx: 115,
            cy: bbox.y1 - 20,
            r: 7.5
          },
          {
            type: "circle",
            fill: color,
            cx: 85,
            cy: bbox.y1 - 20,
            r: 7.5
          }
        ],
        bbox: { y1: bbox.y1 - 20 - 7.5 - installationPadding }
      },
      "Platoon/detachment": {
        g: [
          {
            type: "circle",
            fill: color,
            cx: 100,
            cy: bbox.y1 - 20,
            r: 7.5
          },
          {
            type: "circle",
            fill: color,
            cx: 70,
            cy: bbox.y1 - 20,
            r: 7.5
          },
          {
            type: "circle",
            fill: color,
            cx: 130,
            cy: bbox.y1 - 20,
            r: 7.5
          }
        ],
        bbox: { y1: bbox.y1 - 20 - 7.5 - installationPadding }
      },
      "Company/battery/troop": {
        g: [
          {
            type: "path",
            d: "M100," + (bbox.y1 - 10) + "L100," + (bbox.y1 - 35)
          }
        ],
        bbox: { y1: bbox.y1 - 40 - installationPadding }
      },
      "Battalion/squadron": {
        g: [
          {
            type: "path",
            d: "M90," + (bbox.y1 - 10) + "L90," + (bbox.y1 - 35)
          },
          {
            type: "path",
            d: "M110," + (bbox.y1 - 10) + "L110," + (bbox.y1 - 35)
          }
        ],
        bbox: { y1: bbox.y1 - 40 - installationPadding }
      },
      "Regiment/group": {
        g: [
          {
            type: "path",
            d: "M100," + (bbox.y1 - 10) + "L100," + (bbox.y1 - 35)
          },
          {
            type: "path",
            d: "M120," + (bbox.y1 - 10) + "L120," + (bbox.y1 - 35)
          },
          { type: "path", d: "M80," + (bbox.y1 - 10) + "L80," + (bbox.y1 - 35) }
        ],
        bbox: { y1: bbox.y1 - 40 - installationPadding }
      },
      Brigade: {
        g: [
          {
            type: "path",
            d: "M87.5," + (bbox.y1 - 10) + " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: { y1: bbox.y1 - 15 - 25 - installationPadding }
      },
      Division: {
        g: [
          {
            type: "path",
            d:
              "M70," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M105," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 70,
          x2: 130
        }
      },
      "Corps/MEF": {
        g: [
          {
            type: "path",
            d:
              "M52.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M87.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M122.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 52.5,
          x2: 147.5
        }
      },
      Army: {
        g: [
          {
            type: "path",
            d:
              "M35," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M70," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M105," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M140," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 35,
          x2: 165
        }
      },
      "Army Group/front": {
        g: [
          {
            type: "path",
            d:
              "M17.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M52.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M87.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M122.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25       M157.5," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 17.5,
          x2: 182.5
        }
      },
      "Region/Theater": {
        g: [
          {
            type: "path",
            d:
              "M0," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M35," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M70," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25   M105," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25    M140," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25     M175," +
              (bbox.y1 - 10) +
              " l25,-25 m0,25 l-25,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 0,
          x2: 200
        }
      },
      Command: {
        g: [
          {
            type: "path",
            d:
              "M70," +
              (bbox.y1 - 22.5) +
              " l25,0 m-12.5,12.5 l0,-25   M105," +
              (bbox.y1 - 22.5) +
              " l25,0 m-12.5,12.5 l0,-25"
          }
        ],
        bbox: {
          y1: bbox.y1 - 15 - 25 - installationPadding,
          x1: 70,
          x2: 130
        }
      }
    };
    if (echelons.hasOwnProperty(this.metadata.echelon)) {
      geom = echelons[this.metadata.echelon].g;

      //outline
      if (this.style.outlineWidth > 0)
        drawArray1.push(
          ms.outline(
            { type: "translate", x: 0, y: -installationPadding, draw: geom },
            this.style.outlineWidth,
            this.style.strokeWidth,
            typeof this.style.outlineColor === "object"
              ? this.style.outlineColor[this.metadata.affiliation]
              : this.style.outlineColor
          )
        );
      //geometry
      drawArray2.push({
        type: "translate",
        x: 0,
        y: -installationPadding,
        draw: geom
      });
      gbbox.merge(echelons[this.metadata.echelon].bbox);
    }
  }
  //This is for movability indicators.
  if (this.metadata.mobility) {
    if (!this.style.frame) {
      bbox.y2 = this.bbox.y2;
    }
    if (this.metadata.affiliation == "Neutral") {
      if (
        this.metadata.mobility == "Towed" ||
        this.metadata.mobility == "Short towed array" ||
        this.metadata.mobility == "Long towed Array"
      ) {
        bbox.y2 += 8;
      }
      if (
        this.metadata.mobility == "Over snow (prime mover)" ||
        this.metadata.mobility == "Sled"
      ) {
        bbox.y2 += 13;
      }
    }
    var mobilities = {
      "Wheeled limited cross country": {
        g: [
          { type: "path", d: "M 53,1 l 94,0" },
          { type: "circle", cx: 58, cy: 8, r: 8 },
          { type: "circle", cx: 142, cy: 8, r: 8 }
        ],
        bbox: { y2: bbox.y2 + 8 * 2 }
      },
      "Wheeled cross country": {
        g: [
          { type: "path", d: "M 53,1 l 94,0" },
          { type: "circle", cx: 58, cy: 8, r: 8 },
          { type: "circle", cx: 142, cy: 8, r: 8 },
          { type: "circle", cx: 100, cy: 8, r: 8 }
        ],
        bbox: { y2: bbox.y2 + 8 * 2 }
      },
      Tracked: {
        g: [
          {
            type: "path",
            d: "M 53,1 l 100,0 c15,0 15,15 0,15 l -100,0 c-15,0 -15,-15 0,-15"
          }
        ],
        bbox: { y2: bbox.y2 + 18, x1: 42, x2: 168 }
      },
      "Wheeled and tracked combination": {
        g: [
          { type: "circle", cx: 58, cy: 8, r: 8 },
          {
            type: "path",
            d: "M 83,1 l 70,0 c15,0 15,15 0,15 l -70,0 c-15,0 -15,-15 0,-15"
          }
        ],
        bbox: { y2: bbox.y2 + 8 * 2, x2: 168 }
      },
      Towed: {
        g: [
          { type: "path", d: "M 63,1 l 74,0" },
          { type: "circle", cx: 58, cy: 3, r: 8 },
          { type: "circle", cx: 142, cy: 3, r: 8 }
        ],
        bbox: { y2: bbox.y2 + 10 }
      },
      Rail: {
        g: [
          { type: "path", d: "M 53,1 l 96,0" },
          { type: "circle", cx: 58, cy: 8, r: 8 },
          { type: "circle", cx: 73, cy: 8, r: 8 },
          { type: "circle", cx: 127, cy: 8, r: 8 },
          { type: "circle", cx: 142, cy: 8, r: 8 }
        ],
        bbox: { y2: bbox.y2 + 8 * 2 }
      },
      "Over snow (prime mover)": {
        g: [{ type: "path", d: "M 50,-9 l10,10 90,0" }],
        bbox: { y2: bbox.y2 + 9 }
      },
      Sled: {
        g: [
          {
            type: "path",
            d: "M 145,-12  c15,0 15,15 0,15 l -90,0 c-15,0 -15,-15 0,-15"
          }
        ],
        bbox: { y2: bbox.y2 + 15, x1: 42, x2: 168 }
      },
      "Pack animals": {
        g: [{ type: "path", d: "M 80,20 l 10,-20 10,20 10,-20 10,20" }],
        bbox: { y2: bbox.y2 + 20 }
      },
      Barge: {
        g: [{ type: "path", d: "M 50,1 l 100,0 c0,10 -100,10 -100,0" }],
        bbox: { y2: bbox.y2 + 10 }
      },
      Amphibious: {
        g: [
          {
            type: "path",
            d:
              "M 65,10 c 0,-10 10,-10 10,0 0,10 10,10 10,0	0,-10 10,-10 10,0 0,10 10,10 10,0	0,-10 10,-10 10,0 0,10 10,10 10,0	0,-10 10,-10 10,0"
          }
        ],
        bbox: { y2: bbox.y2 + 20 }
      },
      "Short towed array": {
        g: [
          {
            type: "path",
            fill: color,
            d:
              "M 50,5 l 100,0 M50,0 l10,0 0,10 -10,0 z M150,0 l-10,0 0,10 10,0 z M100,0 l5,5 -5,5 -5,-5 z"
          }
        ],
        bbox: { y2: bbox.y2 + 10 }
      },
      "Long towed Array": {
        g: [
          {
            type: "path",
            fill: color,
            d:
              "M 50,5 l 100,0 M50,0 l10,0 0,10 -10,0 z M150,0 l-10,0 0,10 10,0 z M105,0 l-10,0 0,10 10,0 z M75,0 l5,5 -5,5 -5,-5 z  M125,0 l5,5 -5,5 -5,-5 z"
          }
        ],
        bbox: { y2: bbox.y2 + 10 }
      }
    };
    if (mobilities.hasOwnProperty(this.metadata.mobility)) {
      geom = mobilities[this.metadata.mobility].g;
      //outline
      if (this.style.outlineWidth > 0)
        drawArray1.push(
          ms.outline(
            { type: "translate", x: 0, y: bbox.y2, draw: geom },
            this.style.outlineWidth,
            this.style.strokeWidth,
            typeof this.style.outlineColor === "object"
              ? this.style.outlineColor[this.metadata.affiliation]
              : this.style.outlineColor
          )
        );
      //geometry
      drawArray2.push({ type: "translate", x: 0, y: bbox.y2, draw: geom });
      gbbox.merge(mobilities[this.metadata.mobility].bbox);
    }
  }

  //Dismounted Leadership
  if (this.metadata.leadership) {
    var leadership = {
      Friend: {
        type: "path",
        d: "m 45,60 55,-25 55,25"
      } /*,
      Neutral: { type: "path", d: "m 45,60 55,-25 55,25" },
      Hostile: { type: "path", d: "m 42,71 57.8,-43.3 58.2,42.8" },
      Unknown: { type: "path", d: "m 50,60 10,-20 80,0 10,20" }//*/
    }[this.metadata.affiliation];
    //if (this.metadata.leadership == "Deputy Individual")
    //  leadership.strokedasharray = ms._dashArrays.feintDummy;
    if (leadership) {
      drawArray1.push(leadership);
      gbbox.merge({ y1: bbox.y1 - 20 });
    }
  }
  //Assign fill, stroke and stroke-width
  for (var i = 0; i < drawArray1.length; i++) {
    if (!drawArray1[i].hasOwnProperty("fill")) drawArray1[i].fill = false;
    if (!drawArray1[i].hasOwnProperty("stroke")) drawArray1[i].stroke = color;
    if (!drawArray1[i].hasOwnProperty("strokewidth"))
      drawArray1[i].strokewidth = this.style.strokeWidth;
  }
  for (i = 0; i < drawArray2.length; i++) {
    if (!drawArray2[i].hasOwnProperty("fill")) drawArray2[i].fill = false;
    if (!drawArray2[i].hasOwnProperty("stroke")) drawArray2[i].stroke = color;
    if (!drawArray2[i].hasOwnProperty("strokewidth"))
      drawArray2[i].strokewidth = this.style.strokeWidth;
  }

  return { pre: drawArray1, post: drawArray2, bbox: gbbox };
}
