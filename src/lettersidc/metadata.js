//import { ms } from "../ms.js";
export function metadata(ms, metadata, mapping) {
  this.options.sidc = this.options.sidc.toUpperCase();

  var codingscheme =
    this.options.sidc.charAt(0) != "" ? this.options.sidc.charAt(0) : "-";
  var affiliation =
    this.options.sidc.charAt(1) != "" ? this.options.sidc.charAt(1) : "-";
  var battledimension =
    this.options.sidc.charAt(2) != "" ? this.options.sidc.charAt(2) : "-";
  var status =
    this.options.sidc.charAt(3) != "" ? this.options.sidc.charAt(3) : "-";
  var functionid = (metadata.functionid =
    this.options.sidc.substr(4, 6) != ""
      ? this.options.sidc.substr(4, 6)
      : "------");
  var symbolmodifier11 =
    this.options.sidc.charAt(10) != "" ? this.options.sidc.charAt(10) : "-";
  var symbolmodifier12 =
    this.options.sidc.charAt(11) != "" ? this.options.sidc.charAt(11) : "-";
  /*
  var countrycode = this.options.sidc.substr(12, 2) != ""
    ? this.options.sidc.substr(12, 2)
    : "--";
  var orderofbattle = this.options.sidc.charAt(14) != "" ? this.options.sidc.charAt(14) : "-";
  */
  if (["H", "S", "J", "K"].indexOf(affiliation) > -1)
    metadata.affiliation = mapping.affiliation[0];
  if (["F", "A", "D", "M"].indexOf(affiliation) > -1)
    metadata.affiliation = mapping.affiliation[1];
  if (["N", "L"].indexOf(affiliation) > -1)
    metadata.affiliation = mapping.affiliation[2];
  if (["P", "U", "G", "W", "O"].indexOf(affiliation) > -1)
    metadata.affiliation = mapping.affiliation[3];

  if (["P", "A"].indexOf(battledimension) > -1)
    metadata.dimension = mapping.dimension[0];
  if (["G", "Z", "F", "X"].indexOf(battledimension) > -1)
    metadata.dimension = mapping.dimension[1];
  if (["S"].indexOf(battledimension) > -1)
    metadata.dimension = mapping.dimension[2];
  if (["U"].indexOf(battledimension) > -1)
    metadata.dimension = mapping.dimension[3];

  //dimension is in Space
  if (battledimension == "P" && codingscheme != "O") metadata.space = true;
  //codingscheme that are Activities
  if (codingscheme == "O" && ["V", "O", "R"].indexOf(battledimension) > -1) {
    metadata.activity = true;
  }
  //SymbolSets that are control-measure
  if (codingscheme == "G") metadata.controlMeasure = true;
  //symbolmodifier11 that are Installations
  if (symbolmodifier11 == "H") metadata.installation = true;
  //Planned/Anticipated/Suspect symbols should have a dashed outline
  if (this.style.frame && status == "A")
    metadata.notpresent = ms._dashArrays.anticipated;
  if (this.style.frame && ["P", "A", "S", "G", "M"].indexOf(affiliation) > -1) {
    metadata.notpresent = ms._dashArrays.pending;
  }
  //Should it have a Condition Bar
  if (status == "C") metadata.condition = mapping.status[2];
  if (status == "D") metadata.condition = mapping.status[3];
  if (status == "X") metadata.condition = mapping.status[4];
  if (status == "F") metadata.condition = mapping.status[5];
  //Is it part of Exercise Symbols
  if (["G", "W", "D", "L", "M", "J", "K"].indexOf(affiliation) > -1) {
    metadata.context = mapping.context[1];
  }
  //Framing of SO tactical symbols differs slightly from C2 Symbology: UEI tactical symbols in that there is only one battle dimension: ground.
  if (codingscheme == "O") metadata.dimension = mapping.dimension[1];
  //Framing of EMS tactical symbols differs slightly from C2 Symbology: UEI tactical symbols in that there is only one battle dimension: ground.
  if (codingscheme == "E") metadata.dimension = mapping.dimension[1];
  //First save the dimensionType and affiliationType before we modifies it...
  metadata.baseDimension = metadata.dimension;
  metadata.baseAffilation = metadata.affiliation;
  //Joker and faker should have the shape of friendly
  if (affiliation == "J") metadata.joker = true;
  if (affiliation == "K") metadata.faker = true;
  if (metadata.joker || metadata.faker) {
    metadata.affiliation = mapping.affiliation[1];
  }
  //Ground Equipment should have the same geometry as sea Friend...
  if (
    codingscheme == "S" &&
    battledimension == "G" &&
    functionid.charAt(0) == "E"
  )
    metadata.dimension = mapping.dimension[2];
  //Signal INTELLIGENCE Ground should have the same geometry as sea Friend...
  if (codingscheme == "I" && battledimension == "G")
    metadata.dimension = mapping.dimension[2];
  //Some EMS symbosls should have the same geometry as sea Friend...
  if (
    codingscheme == "E" &&
    ((battledimension == "O" &&
      [
        "AB----",
        "AE----",
        "AF----",
        "BB----",
        "CB----",
        "CC----",
        "DB----",
        "DDB---",
        "DEB---",
        "DFB---",
        "DGB---",
        "DHB---",
        "DIB---",
        "DJB---",
        "DLB---",
        "DMB---",
        "DOB---",
        "EA----",
        "EB----",
        "EC----",
        "ED----",
        "EE----"
      ].indexOf(functionid) > -1) ||
      (battledimension == "F" &&
        ["BA----", "MA----", "MC----"].indexOf(functionid) > -1))
  ) {
    metadata.dimension = mapping.dimension[2];
  }
  //Setting up Headquarters/task force/dummy
  if (
    ["F", "G", "C", "D"].indexOf(symbolmodifier11) > -1 ||
    (symbolmodifier11 == "H" && symbolmodifier12 == "B")
  ) {
    metadata.feintDummy = true;
  }
  if (["A", "B", "C", "D"].indexOf(symbolmodifier11) > -1) {
    metadata.headquarters = true;
  }
  if (battledimension == "G" && functionid == "UH----") {
    metadata.headquarters = true;
  }
  if (["E", "B", "G", "D"].indexOf(symbolmodifier11) > -1) {
    metadata.taskForce = true;
  }
  //Setting up Echelon/Mobility/Towed Array Amplifier
  if (symbolmodifier12 == "A") metadata.echelon = mapping.echelonMobility[11]; //Team/Crew
  if (symbolmodifier12 == "B" && symbolmodifier11 != "H") {
    metadata.echelon = mapping.echelonMobility[12]; //Squad
  }
  if (symbolmodifier12 == "C") metadata.echelon = mapping.echelonMobility[13]; //Section
  if (symbolmodifier12 == "D") metadata.echelon = mapping.echelonMobility[14]; //Platoon/detachment
  if (symbolmodifier12 == "E") metadata.echelon = mapping.echelonMobility[15]; //Company/battery/troop
  if (symbolmodifier12 == "F") metadata.echelon = mapping.echelonMobility[16]; //Battalion/squadron
  if (symbolmodifier12 == "G") metadata.echelon = mapping.echelonMobility[17]; //Regiment/group
  if (symbolmodifier12 == "H") metadata.echelon = mapping.echelonMobility[18]; //Brigade
  if (symbolmodifier12 == "I") metadata.echelon = mapping.echelonMobility[21]; //Division
  if (symbolmodifier12 == "J") metadata.echelon = mapping.echelonMobility[22]; //Corps/MEF
  if (symbolmodifier12 == "K") metadata.echelon = mapping.echelonMobility[23]; //Army
  if (symbolmodifier12 == "L" && symbolmodifier11 != "N") {
    metadata.echelon = mapping.echelonMobility[24]; //Army Group/front
  }
  if (symbolmodifier12 == "M") metadata.echelon = mapping.echelonMobility[25]; //Region/Theater
  if (symbolmodifier12 == "N") metadata.echelon = mapping.echelonMobility[26]; //Command
  if (symbolmodifier11 == "M") {
    switch (symbolmodifier12) {
      case "O":
        metadata.mobility = mapping.echelonMobility[31]; //Wheeled limited cross country
        break;
      case "P":
        metadata.mobility = mapping.echelonMobility[32]; //Wheeled cross country
        break;
      case "Q":
        metadata.mobility = mapping.echelonMobility[33]; //Tracked
        break;
      case "R":
        metadata.mobility = mapping.echelonMobility[34]; //Wheeled and tracked combination
        break;
      case "S":
        metadata.mobility = mapping.echelonMobility[35]; //Towed
        break;
      case "T":
        metadata.mobility = mapping.echelonMobility[36]; //Rail
        break;
      case "U":
        metadata.mobility = mapping.echelonMobility[41]; //Over snow (prime mover)
        break;
      case "V":
        metadata.mobility = mapping.echelonMobility[42]; //Sled
        break;
      case "W":
        metadata.mobility = mapping.echelonMobility[37]; //Pack animals
        break;
      case "Y":
        metadata.mobility = mapping.echelonMobility[51]; //Barge
        break;
      case "Z":
        metadata.mobility = mapping.echelonMobility[52]; //Amphibious
        break;
      default:
        metadata.mobility = undefined;
    }
  }
  if (symbolmodifier11 == "N") {
    switch (symbolmodifier12) {
      case "S":
        metadata.mobility = mapping.echelonMobility[61]; //Short towed array
        break;
      case "L":
        metadata.mobility = mapping.echelonMobility[62]; //Long towed Array
        break;
      default:
        metadata.mobility = undefined;
    }
  }
  //This is for 2525
  //Civilian stuff
  if (
    (battledimension == "A" && functionid.charAt(0) == "C") ||
    (battledimension == "G" && functionid.substring(0, 3) == "EVC") ||
    (battledimension == "S" && functionid.charAt(0) == "X")
  ) {
    metadata.civilian = true;
  }
  //Colors will be have to be fixed in symbolColors
  if (battledimension == "Z" || battledimension == "X") {
    if (["P", "U", "F", "N", "H", "A", "S", "G", "W"].indexOf(affiliation) > -1)
      metadata.dimensionUnknown = true;
    //To get the correct geometry for a lot of stuff later we will have to modify the affliationType.
    if (["F", "A"].indexOf(affiliation) > -1) metadata.dimension = "Sea";
    //If battle dimension is unknown and the affiliation is D,L,M,J,K we should not have a symbol
    if (["D", "L", "M", "J", "K"].indexOf(affiliation) > -1)
      metadata.affiliation = "none";
  }
  //Forcing unframing of symbols that shouldn't have a frame.
  if (
    battledimension == "S" &&
    [
      "O-----",
      "ED----",
      "EP----",
      "EV----",
      "ZM----",
      "ZN----",
      "ZI----"
    ].indexOf(functionid) > -1
  ) {
    metadata.frame = false;
  }
  if (
    codingscheme == "E" &&
    battledimension == "N" &&
    [
      "AA----",
      "AB----",
      "AC----",
      "AD----",
      "AE----",
      "AG----",
      "BB----",
      "BC----",
      "BF----",
      "BM----",
      "-C-----",
      "CA----",
      "CB----",
      "CC----",
      "CD----",
      "CE----"
    ].indexOf(functionid) > -1
  ) {
    metadata.frame = false;
  }
  if (
    codingscheme == "W" &&
    battledimension == "S" &&
    [
      "WSVE--",
      "WSD-LI",
      "WSFGSO",
      "WSGRL-",
      "WSR-LI",
      "WSDSLM",
      "WSS-LI",
      "WSTMH-",
      "WST-FC",
      "WSTSS-"
    ].indexOf(functionid) > -1
  ) {
    metadata.frame = false;
  }
  //We have some special symbols that should be unframed but filled, like mines, let us fix them.
  if (
    battledimension == "U" &&
    [
      "WM----",
      "WMD---",
      "WMG---",
      "WMGD--",
      "WMGX--",
      "WMGE--",
      "WMGC--",
      "WMGR--",
      "WMGO--",
      "WMM---",
      "WMMD--",
      "WMMX--",
      "WMME--",
      "WMMC--",
      "WMMR--",
      "WMMO--",
      "WMF---",
      "WMFD--",
      "WMFX--",
      "WMFE--",
      "WMFC--",
      "WMFR--",
      "WMFO--",
      "WMO---",
      "WMOD--",
      "WMX---",
      "WME---",
      "WMA---",
      "WMC---",
      "WMR---",
      "WMB---",
      "WMBD--",
      "WMN---",
      "WMS---",
      "WMSX--",
      "WMSD--",
      "WD----",
      "WDM---",
      "WDMG--",
      "WDMM--",
      "ND----",
      "E-----",
      "V-----",
      "X-----",
      "NBS---",
      "NBR---",
      "NBW---",
      "NM----",
      "NA----"
    ].indexOf(functionid) > -1
  ) {
    if (metadata.STD2525) {
      metadata.fill = false;
      if (functionid == "WD----") {
        metadata.fill = true;
      }
      if (
        ["ND----", "NBS---", "NBR---", "NBW---", "NM----", "NA----"].indexOf(
          functionid
        ) > -1
      ) {
        metadata.fill = true;
        metadata.frame = false;
      }
    } else {
      metadata.frame = false;
      if (["E-----", "V-----", "X-----"].indexOf(functionid) > -1) {
        metadata.fill = false;
        metadata.frame = false;
      }
    }
  }

  //Some symbols in EMS and symbols from tactical graphics
  if (
    this.options.sidc.substr(0, 3) == "WAS" ||
    this.options.sidc.substr(0, 3) == "WOS" ||
    codingscheme == "G"
  ) {
    metadata.frame = false;
  }

  //This is for APP6 tactical points with frames
  if (
    codingscheme == "G" &&
    battledimension == "O" &&
    ["V", "L", "P", "I"].indexOf(functionid.charAt(0)) > -1
  ) {
    metadata.frame = true;
    metadata.dimension = mapping.dimension[1];
  }

  return metadata;
}
