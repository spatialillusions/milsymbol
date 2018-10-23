export default function(ms, sidc) {
  let mainIcon = {};
  for (let i = 0; i < sidc.mainIcon.length; i++) {
    if (
      sidc.mainIcon[i].hasOwnProperty("Geometric Rendering") &&
      sidc.mainIcon[i]["Geometric Rendering"] != "Point"
    ) {
      continue;
    }
    let icon =
      sidc.mainIcon[i]["Code"] +
      " " +
      (sidc.mainIcon[i]["Entity Subtype"] ||
        sidc.mainIcon[i]["Entity Type"] ||
        sidc.mainIcon[i]["Entity"]);
    let valid = new ms.Symbol(
      "1003" + sidc.symbolset + "0000" + sidc.mainIcon[i]["Code"] + "0000"
    ).isValid();
    mainIcon[icon] = [valid, true];
  }

  let modifier1 = {};
  for (let i = 0; i < sidc.modifier1.length; i++) {
    if (sidc.symbolset == "25" && sidc.modifier1[i]["Code"] <= 12) {
      continue; // mobility modifiers for tactical points that we don't support
    }
    let icon =
      sidc.modifier1[i]["Code"] + " " + sidc.modifier1[i]["First Modifier"];
    let valid;
    if (
      sidc.modifier1[i]["Code"].length == 2 &&
      sidc.modifier1[i]["Code"] != 99
    ) {
      valid = new ms.Symbol(
        "1003" +
          sidc.symbolset +
          "0000" +
          "000000" +
          sidc.modifier1[i]["Code"] +
          "00"
      ).isValid();
      modifier1[icon] = [valid, true];
    }
  }

  let modifier2 = {};
  for (let i = 0; i < sidc.modifier2.length; i++) {
    let icon =
      sidc.modifier2[i]["Code"] + " " + sidc.modifier2[i]["Second Modifier"];
    let valid;
    if (
      sidc.modifier2[i]["Code"].length == 2 &&
      sidc.modifier2[i]["Code"] != 99
    ) {
      valid = new ms.Symbol(
        "1003" +
          sidc.symbolset +
          "0000" +
          "000000" +
          "00" +
          sidc.modifier2[i]["Code"]
      ).isValid();
      modifier2[icon] = [valid, true];
    }
  }

  return {
    "Main Icon": mainIcon,
    "Modifier 1": modifier1,
    "Modifier 2": modifier2
  };
}
