//Icon #################################################################################
export default function icon(ms) {
  const drawArray1 = [];
  const drawArray2 = [];
  let gbbox = new ms.BBox({ x1: 50, x2: 150, y1: 50, y2: 150 });
  let icons, iconColor;

  //This is the building blocks we use to create icons
  let iconParts = [];
  //Main icon
  //let icon = [];
  //Modifier 1 used in number based SIDCs
  let m1 = [];
  //Modifier 2 used in number based SIDCs
  let m2 = [];
  //Boundingboxes other than normal
  let specialbbox = [];

  if (this.style.icon) {
    const fillColor = this.colors.fillColor[this.metadata.affiliation];
    //So we don't happend to use civilian colors
    const neutralColor = this.colors.fillColor.Neutral;
    iconColor = this.colors.iconColor[this.metadata.affiliation];
    const iconFillColor = this.colors.iconFillColor[this.metadata.affiliation];
    const none = this.colors.none[this.metadata.affiliation];
    const black = this.colors.black[this.metadata.affiliation];
    const white = this.colors.white[this.metadata.affiliation];
    //Store previous used icons in memory.
    const icnet =
      (this.metadata.STD2525 ? "2525" : "APP6") +
      "," +
      this.metadata.dimension +
      this.metadata.affiliation +
      this.metadata.notpresent +
      this.metadata.numberSIDC +
      ",frame:" +
      this.style.frame +
      ",alternateMedal:" +
      this.style.alternateMedal +
      ",colors:{fillcolor:" +
      fillColor +
      ",neutralColor" +
      neutralColor +
      ",iconColor:" +
      iconColor +
      ",iconFillColor:" +
      iconFillColor +
      ",none:" +
      none +
      ",black:" +
      black +
      ",white:" +
      white +
      "}";
    if (ms._iconCache.hasOwnProperty(icnet)) {
      iconParts = ms._iconCache[icnet].iconParts;
    } else {
      ms._iconCache[icnet] = {};
      iconParts = ms._iconCache[icnet].iconParts = ms._getIconParts(
        this.metadata,
        this.colors,
        this.metadata.STD2525,
        this.style.monoColor,
        this.style.alternateMedal
      );
    }

    //Letter based SIDCs.
    if (!this.metadata.numberSIDC) {
      //Sea mine exercise has stuff outsIde the boundingbox...
      //TODO see if we can fix this in another way.
      if (
        ["WMGX--", "WMMX--", "WMFX--", "WMX---", "WMSX--"].indexOf(
          this.metadata.functionid
        ) != -1
      ) {
        gbbox.y1 = 10;
        if (this.metadata.affiliation != "Unknown") {
          gbbox.x2 = this.metadata.baseGeometry.bbox.x2 + 20;
        }
      }

      //Try to fetch the icons form the cache
      if (ms._iconCache[icnet].hasOwnProperty("letterSIDC")) {
        icons = ms._iconCache[icnet].letterSIDC.icons;
        specialbbox = ms._iconCache[icnet].letterSIDC.bbox;
      } else {
        if (typeof ms._getIcons.letter === "function") {
          ms._iconCache[icnet].letterSIDC = ms._getIcons.letter(
            ms,
            iconParts,
            this.metadata.STD2525
          );
          icons = ms._iconCache[icnet].letterSIDC.icons;
          specialbbox = ms._iconCache[icnet].letterSIDC.bbox;
          //THIS IS JUST FOR Printing bottom coords of all equipment ===========================
          /*			This code dosen't work at the moment..... TODO
					if(element){
					listBBoxes = '';
					for (let property in sId) {
						if(property.substr(4,1) == 'E'){
							let BaseGeometry = document.createElementNS(ms._svgNS, "g");
							BaseGeometry.setAttribute('id', 'BaseGeometryEquipment');
								BaseGeometry.appendChild(
									BaseGeometry.ownerDocument.importNode(
										parseXML(
											'<g xmlns="'+ms._svgNS+'">' + sId[property] + '</g>'
										), true
									)
								);
							let svgSymbol = document.createElementNS(ms._svgNS, "svg");
							svgSymbol.setAttribute("width", 200);
							svgSymbol.setAttribute("height", 200);
							svgSymbol.setAttribute("version", 1.1);
							svgSymbol.setAttribute("baseProfile", "tiny");
							svgSymbol.setAttribute("xmlns", ms._svgNS);
							svgSymbol.appendChild(BaseGeometry);

							let targetElement = document.getElementById(element);
							if(targetElement.hasChildNodes()){
								targetElement.removeChild(targetElement.childNodes[0])
							}
							targetElement.appendChild(svgSymbol);
							let BBox = document.getElementById("BaseGeometryEquipment").getBBox()
							listBBoxes += '\'' + property.substr(4,6) + '\':' + (BBox.y+ BBox.height)+',';
						}
						}
					document.getElementById(element).innerHTML=listBBoxes;
				}
		*/
        } else {
          console.warn(
            "ms._getIcons.letter() is not present, you will need to load functionality for letter based SIDCs"
          );
        }
      }
    }

    //Number based SIDCs.
    if (this.metadata.numberSIDC) {
      //Number based SIDCs.
      const symbolSet = String(this.options.sidc).substring(4, 6);
      if (ms._iconCache[icnet].hasOwnProperty("numberSIDC")) {
        if (
          ms._iconCache[icnet].numberSIDC.symbolSet.hasOwnProperty(symbolSet)
        ) {
          icons = ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].icons;
          m1 = ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m1;
          m2 = ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m2;
          specialbbox =
            ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].bbox;
        } else {
          if (typeof ms._getIcons.number === "function") {
            ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet] =
              ms._getIcons.number(
                ms,
                symbolSet,
                iconParts,
                this.metadata.STD2525
              );
            icons = ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].icons;
            m1 = ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m1;
            m2 = ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m2;
            specialbbox =
              ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].bbox;
          } else {
            console.warn(
              "ms._getIcons.number() is not present, you will need to load functionality for number based SIDCs"
            );
          }
        }
      } else {
        ms._iconCache[icnet].numberSIDC = {};
        ms._iconCache[icnet].numberSIDC.symbolSet = {};
        if (typeof ms._getIcons.number === "function") {
          ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet] =
            ms._getIcons.number(
              ms,
              symbolSet,
              iconParts,
              this.metadata.STD2525
            );
          icons = ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].icons;
          m1 = ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m1;
          m2 = ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].m2;
          specialbbox =
            ms._iconCache[icnet].numberSIDC.symbolSet[symbolSet].bbox;
          //for printing equipment bottom  set ms._element to the id of an html element and call milsymbol with an equipment sysbol
          /*
					if(ms._element){
					listBBoxes = '';
					sId = ms._iconCache[icnet].numberSIDC.symbolSet[15].icn;
					for (let property in sId) {
					console.log(property)
							let BaseGeometry = document.createElementNS("http://www.w3.org/2000/svg", "g");
							BaseGeometry.setAttribute('id', 'BaseGeometryEquipment');
								BaseGeometry.appendChild(
									BaseGeometry.ownerDocument.importNode(
										parseXML(
											'<g xmlns="'+"http://www.w3.org/2000/svg"+'">' + sId[property] + '</g>'
										), true
									)
								);
							let svgSymbol = document.createElementNS("http://www.w3.org/2000/svg", "svg");
							svgSymbol.setAttribute("width", 200);
							svgSymbol.setAttribute("height", 200);
							svgSymbol.setAttribute("version", 1.1);
							svgSymbol.setAttribute("baseProfile", "tiny");
							svgSymbol.setAttribute("id", property);

							svgSymbol.setAttribute("xmlns", "http://www.w3.org/2000/svg");
							svgSymbol.appendChild(BaseGeometry);

							let targetElement = document.getElementById(ms._element);
							if(targetElement.hasChildNodes()){
								targetElement.removeChild(targetElement.childNodes[0])
							}
							targetElement.appendChild(svgSymbol);
							console.log(targetElement)
							let BBox = document.getElementById("BaseGeometryEquipment").getBBox()
							listBBoxes +=  property + ':' + (BBox.y+ BBox.height)+',';

						}
					document.getElementById(ms._element).innerHTML=listBBoxes;
					}*/
        } else {
          console.warn(
            "ms._getIcons.number() is not present, you will need to load functionality for number based SIDCs"
          );
        }
      }
    }

    // Put all this togheter and return the Icon. ============================================
    iconColor = this.colors.iconColor[this.metadata.affiliation];
    const undefinedIcon = [
      {
        type: "path",
        stroke: false,
        fill: iconColor,
        d: "m 94.8206,78.1372 c -0.4542,6.8983 0.6532,14.323 5.3424,19.6985 4.509,5.6933 11.309,9.3573 14.98,15.7283 3.164,6.353 -0.09,14.245 -5.903,17.822 -7.268,4.817 -18.6219,2.785 -22.7328,-5.249 -1.5511,-2.796 -2.3828,-5.931 -2.8815,-9.071 -3.5048,0.416 -7.0093,0.835 -10.5142,1.252 0.8239,8.555 5.2263,17.287 13.2544,21.111 7.8232,3.736 17.1891,3.783 25.3291,1.052 8.846,-3.103 15.737,-11.958 15.171,-21.537 0.05,-6.951 -4.272,-12.85 -9.134,-17.403 -4.526,-4.6949 -11.048,-8.3862 -12.401,-15.2748 -1.215,-2.3639 -0.889,-8.129 -0.889,-8.129 z m -0.6253,-20.5177 0,11.6509 11.6527,0 0,-11.6509 z",
      },
    ];
    if (this.metadata.numberSIDC) {
      //Number based SIDC
      let mainIcon = icons[this.metadata.functionid.substr(0, 6)]; //Main symbol
      //*
      if (
        typeof mainIcon === "undefined" &&
        this.metadata.functionid.substr(4, 2) >= 95
      ) {
        //We have some special entity subtype and will try to find original symbol.
        mainIcon = icons[this.metadata.functionid.substr(0, 4) + "00"];
      }
      //*/
      if (typeof mainIcon === "undefined") {
        if (
          !(
            this.metadata.functionid.substr(0, 6) == "000000" ||
            this.metadata.functionid.substr(0, 6) == ""
          )
        ) {
          drawArray2.push(undefinedIcon);
          this.validIcon = false;
          //console.log('Invalid icon code in SIDC: ' + this.options.sidc);
        }
      } else {
        //Handle special cases of dismounted individual where weapons should be scaled
        const symbolSet = String(this.options.sidc).substring(4, 6);
        const mainSIDC = Number(this.metadata.functionid.substr(0, 6));
        if (
          /*this.metadata.dismounted*/ (symbolSet == "27" &&
            mainSIDC >= 110301 &&
            mainSIDC <= 110403) ||
          (symbolSet == "15" &&
            // Symbols that shouldn't scale
            [
              "130100",
              "170000",
              "170400",
              "170600",
              "170700",
              "170800",
              "170900",
              "171100",
              "200200",
              "200300",
              "200600",
              "200700",
              "200800",
              "200900",
              "201100",
              "201301",
              "201302",
              "201400",
              "210100",
              "210200",
              "210300",
              "210400",
              "210500",
              "230200",
              "250000",
            ].indexOf(mainSIDC) == -1)
          //this.metadata.landequipment
        ) {
          if (
            this.metadata._modifier1 != "000" &&
            this.metadata._modifier2 != "000"
          ) {
            mainIcon = [ms._scale(0.45, mainIcon, true)];
          }
          if (
            this.metadata._modifier1 == "000" &&
            this.metadata._modifier2 != "000"
          ) {
            mainIcon = [ms._translate(0, -10, ms._scale(0.7, mainIcon, true))];
          }
          if (
            this.metadata._modifier1 != "000" &&
            this.metadata._modifier2 == "000"
          ) {
            mainIcon = [ms._translate(0, 10, ms._scale(0.7, mainIcon, true))];
          }
          if (
            this.metadata._modifier1 == "000" &&
            this.metadata._modifier2 == "000"
          ) {
            // This is to make sure we reset the stroke width if the symbol shouldn't be scaled.
            // Not the cleanest way to do it, but it works
            // TODO to fix this in a better way, will probably never be done
            mainIcon = [ms._scale(1, mainIcon, true)];
          }
        }
        // End special case, just add to draw array
        drawArray2.push(mainIcon);
      }
      if (specialbbox.hasOwnProperty(this.metadata.functionid.substr(0, 6))) {
        gbbox = new ms.BBox(specialbbox[this.metadata.functionid.substr(0, 6)]);
      }
      if (this.metadata.functionid.substr(4, 2) == "95")
        drawArray2.push(
          iconParts["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"]
        );
      if (this.metadata.functionid.substr(4, 2) == "96")
        drawArray2.push(iconParts["GR.IC.FF.DIVISION AND BELOW SUPPORT"]);
      if (this.metadata.functionid.substr(4, 2) == "97")
        drawArray2.push(iconParts["GR.IC.FF.CORPS SUPPORT"]);
      if (this.metadata.functionid.substr(4, 2) == "98")
        drawArray2.push(iconParts["GR.IC.FF.THEATRE SUPPORT"]);
      //Modifier 1
      if (this.metadata._modifier1.substr(0, 1) == "0") {
        if (this.metadata.functionid.substr(6, 2) != "00") {
          const modifier1 = m1[this.metadata.functionid.substr(6, 2)];
          if (typeof modifier1 === "undefined") {
            this.validIcon = false;
          } else {
            drawArray2.push(modifier1);
          }
        }
      } else {
        const modifier1 = m1[this.metadata._modifier1];
        if (typeof modifier1 === "undefined") {
          this.validIcon = false;
        } else {
          drawArray2.push(modifier1);
        }
      }

      //Modifier 2
      if (this.metadata._modifier2.substr(0, 1) == "0") {
        if (this.metadata.functionid.substr(8, 2) != "00") {
          const modifier2 = m2[this.metadata.functionid.substr(8, 2)];
          if (typeof modifier2 === "undefined") {
            this.validIcon = false;
          } else {
            drawArray2.push(modifier2);
          }
        }
      } else {
        const modifier2 = m2[this.metadata._modifier2];
        if (typeof modifier2 === "undefined") {
          this.validIcon = false;
        } else {
          drawArray2.push(modifier2);
        }
      }
    } else {
      //Letter based SIDC
      const genericSIDC =
        this.options.sidc.substr(0, 1) +
        "-" +
        this.options.sidc.substr(2, 1) +
        "-" +
        this.options.sidc.substr(4, 6);
      if (icons.hasOwnProperty(genericSIDC)) {
        drawArray2.push(icons[genericSIDC]);
      } else {
        if (
          !(
            this.options.sidc.substr(4, 6) == "------" ||
            this.options.sidc.substr(4, 6) == ""
          )
        ) {
          drawArray2.push(undefinedIcon);
          this.validIcon = false;
          //console.info("Invalid icon code in SIDC: " + this.options.sidc);
        }
      }
      if (specialbbox[genericSIDC]) {
        gbbox = new ms.BBox(specialbbox[genericSIDC]);
      }
    }
  }
  //outline
  if (
    !(this.style.frame && this.metadata.fill) ||
    this.style.monoColor ||
    this.metadata.controlMeasure
  ) {
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
  }
  return { pre: drawArray1, post: drawArray2, bbox: gbbox };
}
