import {
  defaultProperties,
  text,
  textm1,
  textm2
} from "./iconparts-functions.js";

export default function(
  iconParts,
  metadata,
  colors,
  STD2525,
  monoColor,
  alternateMedal
) {
  /*
  iconParts
  The existing object of icon parts
  
  metadata
  propterties object
  
  colors
  color object
  
  STD2525
  Is it 2525 then true, otherwise false
  
  alternateMedal
  true/false for sea mine stuff
  */

  var affiliation = metadata.affiliation || "Friend";
  //If hostile and not monoColor, make it red, otherwise use the iconColor.
  var iconColor = colors.iconColor[affiliation];

  //var numberSIDC = metadata.numberSIDC;
  var icn = {};

  // SIGNALS INTELLIGENCE ==========================================================
  //if(symbol.codingscheme == "I"){
  icn["SI.IC.COMMUNICATIONS"] = {
    type: "path",
    d:
      "m 93,120 14,0 0,0 m -7,-27 0,27 m 2,-25 8,2 -5,5 13,3 m -20,-10 -8,2 5,5 -14,3 m 21,-13 8,-2 -5,-5 13,-3 m -37,0 14,3 -5,5 8,2",
    fill: false
  };
  icn["SI.IC.RADAR"] = {
    type: "path",
    d: "m 115,90 -15,15 0,-15 -15,15 M 80,85 c 0,25 15,35 35,35",
    fill: false
  };
  icn["SI.I.JAMMER / ELECTRONIC COUNTER-MEASURES"] = text("J");

  icn["SI.M1.ANTI-AIRCRAFT FIRE CONTROL"] = textm1("AA");
  icn["SI.M1.AIRBORNE SEARCH AND BOMBING"] = textm1("AB");
  icn["SI.M1.AIRBORNE INTERCEPT"] = textm1("AI");
  icn["SI.M1.ALTIMETER"] = textm1("AL");
  icn["SI.M1.AIRBORNE RECONNAISSANCE AND MAPPING"] = textm1("AM");
  icn["SI.M1.AIR TRAFFIC CONTROL"] = textm1("AT");
  icn["SI.M1.BEACON TRANSPONDER (NOT IFF)"] = textm1("BN");
  icn["SI.M1.BATTLEFIELD SURVEILLANCE"] = textm1("BS");
  icn["SI.M1.CONTROLLED APPROACH"] = textm1("CA");
  icn["SI.M1.CONTROLLED INTERCEPT"] = textm1("CI");
  icn["SI.M1.CELLULAR/MOBILE"] = textm1("CM");
  icn["SI.M1.COASTAL SURVEILLANCE"] = textm1("CS");
  icn["SI.M1.CYBER"] = textm1("CYB");
  icn["SI.M1.DECOY/MIMIC"] = textm1("DC");
  icn["SI.M1.DATA TRANSMISSION"] = textm1("DT");
  icn["SI.M1.EARTH SURVEILLANCE"] = textm1("ES");
  icn["SI.M1.EARLY WARNING"] = textm1("EW");
  icn["SI.M1.FIRE CONTROL"] = textm1("FC");
  icn["SI.M1.GROUND MAPPING"] = textm1("GM");
  icn["SI.M1.HEIGHT FINDING"] = textm1("HF");
  icn["SI.M1.HARBOR SURVEILLANCE"] = textm1("HS");
  icn["SI.M1.IDENTIFICATION, FRIEND OR FOE (INTERROGATOR)"] = textm1("IF");
  icn["SI.M1.INSTRUMENT LANDING SYSTEM"] = textm1("IL");
  icn["SI.M1.IONOSPHERIC SOUNDING"] = textm1("IS");
  icn["SI.M1.IDENTIFICATION, FRIEND OR FOE (TRANSPONDER)"] = textm1("IT");
  icn["SI.M1.BARRAGE JAMMER"] = textm1("JB");
  icn["SI.M1.CLICK JAMMER"] = textm1("JC");
  icn["SI.M1.DECEPTIVE JAMMER"] = textm1("JD");
  icn["SI.M1.FREQUENCY SWEPT JAMMER"] = textm1("JF");
  icn["SI.M1.JAMMER (GENERAL)"] = textm1("JG");
  icn["SI.M1.NOISE JAMMER"] = textm1("JN");
  icn["SI.M1.PULSED JAMMER"] = textm1("JP");
  icn["SI.M1.REPEATER JAMMER"] = textm1("JR");
  icn["SI.M1.SPOT NOISE JAMMER"] = textm1("JS");
  icn["SI.M1.TRANSPONDER JAMMER"] = textm1("JT");
  icn["SI.M1.MISSILE ACQUISITION"] = textm1("MA");
  icn["SI.M1.MISSILE CONTROL"] = textm1("MC");
  icn["SI.M1.MISSILE DOWNLINK"] = textm1("MD");
  icn["SI.M1.METEOROLOGICAL"] = textm1("ME");
  icn["SI.M1.MULTI-FUNCTION"] = textm1("MF");
  icn["SI.M1.MISSILE GUIDANCE"] = textm1("MG");
  icn["SI.M1.MISSILE HOMING"] = textm1("MH");
  icn["SI.M1.MISSILE TRACKING"] = textm1("MT");
  icn["SI.M1.NAVIGATIONAL/GENERAL"] = textm1("NA");
  icn["SI.M1.NAVIGATIONAL/DISTANCE MEASURING EQUIPMENT"] = textm1("ND");
  icn["SI.M1.NAVIGATION/TERRAIN FOLLOWING"] = textm1("NT");
  icn["SI.M1.NAVIGATIONAL/WEATHER AVOIDANCE"] = textm1("NW");
  icn["SI.M1.OMNI-LINE OF SIGHT (LOS)"] = textm1("OL");
  icn["SI.M1.PROXIMITY USE"] = textm1("PF");
  icn["SI.M1.POINT-TO-POINT LINE OF SIGHT (LOS)"] = textm1("PP");
  icn["SI.M1.INSTRUMENTATION"] = textm1("RI");
  icn["SI.M1.RANGE ONLY"] = textm1("RO");
  icn["SI.M1.SONOBUOY"] = textm1("SB");
  icn["SI.M1.SATELLITE DOWNLINK"] = textm1("SD");
  icn["SI.M1.SPACE"] = textm1("SP");
  icn["SI.M1.SURFACE SEARCH"] = textm1("SS");
  icn["SI.M1.SHELL TRACKING"] = textm1("ST");
  icn["SI.M1.SATELLITE UPLINK"] = textm1("SU");
  icn["SI.M1.TARGET ACQUISITION"] = textm1("TA");
  icn["SI.M1.TARGET ILLUMINATION"] = textm1("TI");
  icn["SI.M1.TROPOSPHERIC SCATTER"] = textm1("TS");
  icn["SI.M1.TARGET TRACKING"] = textm1("TT");
  icn["SI.M1.UNKNOWN"] = textm1("UN");
  icn["SI.M1.VIDEO REMOTING"] = textm1("VR");
  icn["SI.M1.EXPERIMENTAL"] = textm1("XP");
  icn["SI.M1.ALPHA"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "A"
  };
  icn["SI.M1.BRAVO"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "B"
  };
  icn["SI.M1.CHARLIE"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "C"
  };
  icn["SI.M1.DELTA"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "D"
  };
  icn["SI.M1.ECHO"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "E"
  };
  icn["SI.M1.FOXTROT"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "F"
  };
  icn["SI.M1.HOTEL"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "H"
  };
  icn["SI.M1.INDY"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "I"
  };
  icn["SI.M1.MIKE"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "M"
  };
  icn["SI.M1.OSCAR"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "O"
  };
  icn["SI.M1.PAPA"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "P"
  };
  icn["SI.M1.SIERRA"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "S"
  };
  icn["SI.M1.TANGO"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "T"
  };
  icn["SI.M1.UNIFORM"] = {
    type: "text",
    stroke: false,
    x: 68,
    y: 110,
    fontsize: 25,
    text: "U"
  };
  icn["SI.M2.ALPHA"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "A"
  };
  icn["SI.M2.BRAVO"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "B"
  };
  icn["SI.M2.CHARLIE"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "C"
  };
  icn["SI.M2.CYBER"] = textm2("CYB");
  icn["SI.M2.DELTA"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "D"
  };
  icn["SI.M2.ECHO"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "E"
  };
  icn["SI.M2.FOXTROT"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "F"
  };
  icn["SI.M2.GOLF"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "G"
  };
  icn["SI.M2.INDY"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "I"
  };
  icn["SI.M2.LIMA"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "L"
  };
  icn["SI.M2.MIKE"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "M"
  };
  icn["SI.M2.NOVEMBER"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "N"
  };
  icn["SI.M2.PAPA"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "P"
  };
  icn["SI.M2.SIERRA"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "S"
  };
  icn["SI.M2.TANGO"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "T"
  };
  icn["SI.M2.UNIFORM"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "U"
  };
  icn["SI.M2.WHISKEY"] = {
    type: "text",
    stroke: false,
    x: 132,
    y: 110,
    fontsize: 25,
    text: "W"
  };
  icn["SI.M3.SPACE"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 75,
    fontsize: 25,
    text: "S"
  };
  icn["SI.M3.GROUND"] = {
    type: "text",
    stroke: false,
    x: 100,
    y: 75,
    fontsize: 25,
    text: "G"
  };

  for (var key in icn) {
    if (!icn.hasOwnProperty(key)) continue;
    if (iconParts.hasOwnProperty(key)) console.warn("Override of: " + key);
    defaultProperties.call(this, icn[key], iconColor);
    iconParts[key] = icn[key];
  }
}
