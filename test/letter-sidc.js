export default function(ms, name, sidc) {
  const result = {};
  for (let i = 0; i < sidc.mainIcon.length; i++) {
    if (sidc.mainIcon[i].remarks == "N/A") continue;
    const icon =
      sidc.mainIcon[i].codingscheme +
      "F" +
      sidc.mainIcon[i].battledimension +
      "P" +
      sidc.mainIcon[i].functionid +
      " " +
      sidc.mainIcon[i].name;
    const symbol = new ms.Symbol(
      sidc.mainIcon[i].codingscheme +
        "F" +
        sidc.mainIcon[i].battledimension +
        "P" +
        sidc.mainIcon[i].functionid
    );
    let valid = symbol.isValid();
    if (!valid) valid = symbol.drawInstructions; //isValid(true);
    result[icon] = [valid, true];
  }
  //result[ms._iconSIDC["letter"]] = [true, true];
  //result[ms._iconParts.length] = [true, true];

  return { "Main Icon": result };
}
