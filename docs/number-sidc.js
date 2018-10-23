var size = 70;

/*
        // Since we don't have any geometry types in APP-6 D controle measures, let us get them from 2525D
        var control = milstd["ms2525d"]["25"]["main icon"];
        var std2525lookup = {};
        for (var i = 0; i < control.length; i++) {
          std2525lookup[control[i]["Code"]] = control[i].geometry;
        }
        for (var j = 0; j < milstd["app6d"]["25"]["main icon"].length; j++) {
          milstd["app6d"]["25"]["main icon"][j].geometry = std2525lookup[milstd["app6d"]["25"]["main icon"][j]["Code"]];
        }
    */
/*
        ms.addSymbolPart(function debug() {
          //This debug function is a minimal example of how to extend milsymbol.
          //Create a variable to store your geometries
          var drawArray1 = [];
          var drawArray2 = [];
          //Get a new bounding box and modify it if your geometry extends outside the current bounds.
          var gbbox = new ms.BBox();
          //Draws the icon octagon
          drawArray2.push({
            type: "path",
            fill: false,
            stroke: "rgb(0,0,255)",
            strokewidth: 0.8,
            d:
              "m 120,60 0,80 m -40,-80 0,80 m -20,-20 80,0 m 0,-40 -80,0 M 100,50 135.35534,64.64466 150,100 135.35534,135.35534 100,150.00002 64.644661,135.35534 50,100 64.644661,64.64466 z"
          });
          return { pre: drawArray1, post: drawArray2, bbox: gbbox };
        });
        //*/

function generatenavigation() {
  var i = 0;
  var indexoftables = "";
  document.querySelectorAll("h2, h3").forEach(function(d) {
    i++;
    d.id = "heading-" + i;
    indexoftables +=
      '<a href="#heading-' +
      i +
      '" class="index-' +
      d.tagName.toLowerCase() +
      '">' +
      d.textContent +
      "</a><br>\n";
  });
  document.getElementById("indexoftables").innerHTML = indexoftables;

  i = 0;
  var indexoffigures = "";
  document.querySelectorAll("figure").forEach(function(d) {
    i++;
    d.id = "figure-" + i;
    d = d.getElementsByTagName("figcaption").item(0);
    indexoffigures +=
      '<a href="#figure-' + i + '">' + d.textContent + "</a><br>\n";
  });
  document.getElementById("indexoffigures").innerHTML = indexoffigures;
}

function remarks(remark) {
  if (
    ["From MIL-STD-2525.", "Simplification of MIL-STD-2525 icon TBD."].indexOf(
      remark
    ) != -1
  ) {
    return { monoColor: "Silver" };
  } else {
    return {};
  }
}

function labels(icon) {
  return {
    infoColor: "Silver",
    quantity: "C",
    additionalInformation: "H",
    additionalInformation1: "H1",
    hostile: "N",
    uniqueDesignation: "T",
    uniqueDesignation1: "T1",
    dtg: "W",
    dtg1: "W1",
    altitudeDepth: "X",
    location: "Y",
    targetNumber: "AP"
  };
}

function renderSymbolSet(symbolset) {
  var output = "";
  var i;
  output += "<h2>" + symbolset.name + "</h2>";
  output += "<h3>" + symbolset.name + " Main Icon</h3>";
  output += "<table border=1><thead><tr><th>Description</th><th>Icon</th>";

  if (symbolset.symbolset == 36) output += "<th>Alternate Icon</th>";

  output += "<th>Remarks</th></tr></thead>";

  for (i = 0; i < symbolset.mainIcon.length; i++) {
    var symbol = new ms.Symbol(
      "1003" +
        symbolset.symbolset +
        "0000" +
        symbolset.mainIcon[i]["Code"] +
        "0000",
      { size: size },
      remarks(symbolset.mainIcon[i]["Remarks"]),
      symbolset.symbolset == 25 ? labels() : {}
    );

    output += "<tr";

    if (
      ["N/A", "For training or hierarchical purposes only"].indexOf(
        symbolset.mainIcon[i]["Remarks"]
      ) != -1
    ) {
      output += ' class="na"';
    }

    if (
      !symbol.isValid() &&
      !(
        symbolset.mainIcon[i].hasOwnProperty("Geometric Rendering") &&
        symbolset.mainIcon[i]["Geometric Rendering"] != "Point"
      )
    ) {
      output += ' style="background-color:red"';
      console.warn(
        symbolset.mainIcon[i]["Entity Subtype"] ||
          symbolset.mainIcon[i]["Entity Type"] ||
          symbolset.mainIcon[i]["Entity"] +
            "\n" +
            symbol.getOptions().sidc +
            "\n" +
            symbol.isValid(true)
      );
    }

    output +=
      "><td><b>" +
      (symbolset.mainIcon[i]["Entity Subtype"] ||
        symbolset.mainIcon[i]["Entity Type"] ||
        symbolset.mainIcon[i]["Entity"]) +
      "</b>";

    if (
      !(
        symbolset.mainIcon[i].hasOwnProperty("Geometric Rendering") &&
        symbolset.mainIcon[i]["Geometric Rendering"] != "Point"
      )
    ) {
      output +=
        "<br><br><em>Type:</em> " +
        (symbolset.mainIcon[i]["Entity Subtype"]
          ? "Entity Subtype"
          : symbolset.mainIcon[i]["Entity Type"]
            ? "Entity Type"
            : "Entity");
      if (symbolset.mainIcon[i]["Entity Subtype"]) {
        output +=
          "<br><em>Entity/Entity Type:</em> " +
          symbolset.mainIcon[i]["Entity"] +
          "/" +
          symbolset.mainIcon[i]["Entity Type"];
      } else {
        if (symbolset.mainIcon[i]["Entity Type"]) {
          output += "<br><em>Entity:</em> " + symbolset.mainIcon[i]["Entity"];
        }
      }

      output += "<br><em>Symbol Set Code:</em> " + symbolset.symbolset;
    }

    output += "<br><em>Code:</em> " + symbolset.mainIcon[i]["Code"];

    if (
      !(
        symbolset.mainIcon[i].hasOwnProperty("Geometric Rendering") &&
        symbolset.mainIcon[i]["Geometric Rendering"] != "Point"
      )
    ) {
      output +=
        "</td><td>" +
        "<!--" +
        "1003" +
        symbolset.symbolset +
        "0000" +
        symbolset.mainIcon[i]["Code"] +
        "0000" +
        "-->" +
        symbol.asSVG();
      output += "</td>";
    } else {
      output += "</td><td>" + symbolset.mainIcon[i]["Geometric Rendering"];
      output += "</td>";
    }
    if (symbolset.symbolset == 36) {
      output +=
        "<td>" +
        new ms.Symbol(
          "1003" +
            symbolset.symbolset +
            "0000" +
            symbolset.mainIcon[i]["Code"] +
            "0000",
          { size: size, alternateMedal: true },
          remarks(symbolset.mainIcon[i]["Remarks"])
        ).asSVG();
      output += "</td>";
    }

    output +=
      "<td>" +
      (symbolset.mainIcon[i]["Remarks"]
        ? symbolset.mainIcon[i]["Remarks"]
        : "") +
      "</td></tr>";
  }
  output += "</table>";
  if (symbolset.modifier1.length) {
    output += "<h3>" + symbolset.name + " Modifier 1</h3>";
    output +=
      "<table border=1><thead><tr><th>Description</th><th>Icon</th><th>Remarks</th></tr></thead>";
    for (i = 0; i < symbolset.modifier1.length; i++) {
      var symbol = new ms.Symbol(
        "1003" +
          symbolset.symbolset +
          "0000000000" +
          symbolset.modifier1[i]["Code"] +
          "00",
        { size: size },
        remarks(symbolset.modifier1[i]["Remarks"])
      );
      output += "<tr";

      if (
        symbolset.modifier1[i]["Code"].length == 2 &&
        symbolset.modifier1[i]["Code"] != 99 &&
        !symbol.isValid() &&
        !(symbolset.symbolset == "25" && symbolset.modifier1[i]["Code"] <= 12) // mobility modifiers we don't support
      ) {
        output += ' style="background-color:red"';
        console.warn(
          symbolset.modifier1[i]["First Modifier"] +
            "\n" +
            symbol.getOptions().sidc +
            "\n" +
            symbol.isValid(true)
        );
      }

      output += "><td><b>" + symbolset.modifier1[i]["First Modifier"] + "</b>";
      output += "<br><br><em>Symbol Set Code:</em> " + symbolset.symbolset;
      output += "<br><em>Code:</em> " + symbolset.modifier1[i]["Code"];
      output += "</td><td>";
      if (
        symbolset.modifier1[i]["Code"] != 99 &&
        !isNaN(symbolset.modifier1[i]["Code"])
      )
        output += symbol.asSVG();
      output += "</td><td>" + symbolset.modifier1[i]["Remarks"] + "</td></tr>";
    }
    output += "</table>";
  }
  if (symbolset.modifier2.length != 0) {
    output += "<h3>" + symbolset.name + " Modifier 2</h3>";
    output +=
      "<table border=1><thead><tr><th>Description</th><th>Icon</th><th>Remarks</th></tr></thead>";
    for (i = 0; i < symbolset.modifier2.length; i++) {
      var symbol = new ms.Symbol(
        "1003" +
          symbolset.symbolset +
          "000000000000" +
          symbolset.modifier2[i]["Code"],
        { size: size },
        remarks(symbolset.modifier2[i]["Remarks"])
      );
      output += "<tr";

      if (
        symbolset.modifier2[i]["Code"].length == 2 &&
        symbolset.modifier2[i]["Code"] != 99 &&
        !symbol.isValid()
      ) {
        output += ' style="background-color:red"';
        console.warn(
          symbolset.modifier2[i]["Second Modifier"] +
            "\n" +
            symbol.getOptions().sidc +
            "\n" +
            symbol.isValid(true)
        );
      }

      output += "><td><b>" + symbolset.modifier2[i]["Second Modifier"] + "</b>";
      output += "<br><br><em>Symbol Set Code:</em> " + symbolset.symbolset;
      output += "<br><em>Code:</em> " + symbolset.modifier2[i]["Code"];
      output += "</td><td>";
      if (
        symbolset.modifier2[i]["Code"] != 99 &&
        !isNaN(symbolset.modifier2[i]["Code"])
      )
        output += symbol.asSVG();
      output += "</td><td>" + symbolset.modifier2[i]["Remarks"] + "</td></tr>";
    }
    output += "</table>";
  }
  return output;
}
