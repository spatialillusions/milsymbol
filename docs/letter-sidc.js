var size = 70;
ms._autoValidation = true;

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
  if (remark == "Wrong SIDC in standard") return { monoColor: "Red" };
  if (["N/A"].indexOf(remark) != -1) {
    return { monoColor: "Silver" };
  } else {
    return {};
  }
}

function labels(icon) {
  if (icon.hierarchy.split(".")[0] == "TACGRP") {
    return {
      infoColor: "Silver",
      additionalInformation: "H",
      additionalInformation1: "H1",
      hostile: "N",
      uniqueDesignation: "T",
      dtg: "W",
      dtg1: "W1",
      altitudeDepth: "X"
    };
  } else {
    return {};
  }
}

function renderSymbolSet(symbolset) {
  var output = "";
  var i;

  output += "<h2>" + symbolset.name + "</h2>";
  output += "<table border=1><thead><tr><th>Description</th><th>Icon</th>";

  output += "<th>Remarks</th></tr></thead>";

  for (i = 0; i < symbolset.mainIcon.length; i++) {
    output += "<tr";
    if (symbolset.mainIcon[i].remarks == "N/A") output += ' class="na"';
    output += "><td><b>" + symbolset.mainIcon[i].hierarchy + "</b>";
    for (var j = 0; j < symbolset.mainIcon[i].names.length; j++) {
      if (j == symbolset.mainIcon[i].names.length - 1) {
        output += "<br><b>" + symbolset.mainIcon[i].names[j] + "</b>";
      } else {
        if (
          symbolset.mainIcon[i].names[j] &&
          !(
            symbolset.mainIcon[i].hasOwnProperty("geometry") &&
            symbolset.mainIcon[i].geometry != "POINT"
          )
        )
          output += "<br><em>" + symbolset.mainIcon[i].names[j] + "</em>";
      }
    }

    output +=
      "<br><em>SIDC:</em> " +
      symbolset.mainIcon[i]["codingscheme"] +
      "*" +
      symbolset.mainIcon[i]["battledimension"] +
      "*" +
      symbolset.mainIcon[i].functionid;

    if (
      !(
        symbolset.mainIcon[i].hasOwnProperty("geometry") &&
        symbolset.mainIcon[i].geometry != "POINT"
      )
    ) {
      output +=
        "</td><td>" +
        new ms.Symbol(
          symbolset.mainIcon[i]["codingscheme"] +
            "F" +
            symbolset.mainIcon[i]["battledimension"] +
            "P" +
            symbolset.mainIcon[i].functionid,
          { size: size },
          remarks(symbolset.mainIcon[i].remarks),
          labels(symbolset.mainIcon[i])
        ).asSVG();
      output += "</td>";
    } else {
      output += "</td><td>" + symbolset.mainIcon[i].geometry;
      output += "</td>";
    }

    output +=
      "<td>" +
      (symbolset.mainIcon[i].remarks ? symbolset.mainIcon[i].remarks : "") +
      "</td></tr>";
  }
  output += "</table>";

  return output;
}
