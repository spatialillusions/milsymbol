import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/sea.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function sea(sId, sIdm1, sIdm2, bbox, symbolSet, icn, _STD2525) {
    //Sea
    if (symbolSet == "30") {
      sId["110000"] = [icn["SE.IC.MILITARY"]];
      sId["120000"] = [icn["SE.IC.COMBATANT"]];
      sId["120100"] = [icn["SE.IC.CARRIER"]];
      sId["120200"] = [icn["SE.IC.SURFACE COMBATANT, LINE"]];
      sId["120201"] = [icn["SE.IC.BATTLESHIP"]];
      sId["120202"] = [icn["SE.IC.CRUISER, GUIDED MISSILE"]];
      sId["120203"] = [icn["SE.IC.DESTROYER"]];
      sId["120204"] = [icn["SE.IC.FRIGATE"]];
      sId["120205"] = [icn["SE.IC.CORVETTE"]];
      sId["120206"] = [icn["SE.IC.LITTORAL COMBATANT SHIP"]];
      sId["120300"] = [icn["SE.IC.AMPHIBIOUS WARFARE SHIP"]];
      sId["120301"] = [icn["SE.IC.AMPHIBIOUS FORCE FLAGSHIP"]];
      sId["120302"] = [icn["SE.IC.AMPHIBIOUS ASSAULT"]];
      sId["120303"] = [icn["SE.IC.AMPHIBIOUS ASSAULT SHIP, GENERAL"]];
      sId["120304"] = [icn["SE.IC.AMPHIBIOUS ASSAULT SHIP, MULTI-PURPOSE"]];
      sId["120305"] = [icn["SE.IC.AMPHIBIOUS ASSAULT SHIP, HELICOPTER"]];
      sId["120306"] = [icn["SE.IC.AMPHIBIOUS TRANSPORT, DOCK"]];
      sId["120307"] = [icn["SE.IC.LANDING SHIP"]];
      sId["120308"] = [icn["SE.IC.LANDING CRAFT"]];
      sId["120400"] = [icn["SE.IC.MINE WARFARE VESSEL"]];
      sId["120401"] = [icn["SE.IC.MINELAYER"]];
      sId["120402"] = [icn["SE.IC.MINESWEEPER"]];
      sId["120403"] = [icn["SE.IC.MINESWEEPER, DRONE"]];
      sId["120404"] = [icn["SE.IC.MINEHUNTER"]];
      sId["120405"] = [icn["SE.IC.MINE COUNTERMEASURES"]];
      sId["120406"] = [icn["SE.IC.MINE COUNTER MEASURE SUPPORT SHIP"]];
      sId["120500"] = [icn["SE.IC.PATROL"]];
      sId["120501"] = [icn["SE.IC.PATROL CRAFT"]];
      sId["120502"] = [icn["SE.IC.PATROL GUN"]];
      sId["120600"] = [icn["SE.IC.SEA SURFACE DECOY"]];
      sId["120700"] = [icn["SE.IC.UNMANNED SURFACE WATER VEHICLE"]];
      sId["120800"] = [icn["SE.IC.MILITARY SPEEDBOAT"]];
      sId["120801"] = [
        icn["SE.IC.MILITARY SPEEDBOAT, RIGID-HULL INFLATABLE BOAT"]
      ];
      sId["120900"] = [icn["SE.IC.MILITARY JETSKI"]];
      sId["121000"] = [icn["SE.IC.NAVY TASK ORGANIZATION UNIT"]];
      sId["121001"] = [icn["SE.IC.NAVY TASK ELEMENT"]];
      sId["121002"] = [icn["SE.IC.NAVY TASK FORCE"]];
      sId["121003"] = [icn["SE.IC.NAVY TASK GROUP"]];
      sId["121004"] = [icn["SE.IC.NAVY TASK UNIT"]];
      sId["121005"] = [icn["SE.IC.CONVOY"]];
      sId["121100"] = [icn["SE.IC.RADAR"]];
      sId["130000"] = [icn["SE.IC.NONCOMBATANT"]];
      sId["130100"] = [icn["SE.IC.AUXILIARY SHIP"]];
      sId["130101"] = [icn["SE.IC.AMMUNITION SHIP"]];
      sId["130102"] = [icn["SE.IC.STORES SHIP"]];
      sId["130103"] = [icn["SE.IC.AUXILIARY FLAG OR COMMAND SHIP"]];
      sId["130104"] = [icn["SE.IC.INTELLIGENCE COLLECTOR"]];
      sId["130105"] = [icn["SE.IC.OCEAN RESEARCH SHIP"]];
      sId["130106"] = [icn["SE.IC.SURVEY SHIP"]];
      sId["130107"] = [icn["SE.IC.HOSPITAL SHIP2"]];
      sId["130108"] = [icn["SE.IC.CARGO SHIP"]];
      sId["130109"] = [icn["SE.IC.COMBAT SUPPORT SHIP, FAST"]];
      sId["130110"] = [icn["SE.IC.OILER, REPLENISHMENT"]];
      sId["130111"] = [icn["SE.IC.REPAIR SHIP"]];
      sId["130112"] = [icn["SE.IC.SUBMARINE TENDER"]];
      sId["130113"] = [icn["SE.IC.TUG, OCEAN GOING"]];
      sId["130200"] = [icn["SE.IC.SERVICE CRAFT, YARD, GENERAL"]];
      sId["130201"] = [icn["SE.IC.BARGE, NOT SELF-PROPELLED"]];
      sId["130202"] = [icn["SE.IC.BARGE, SELF-PROPELLED"]];
      sId["130203"] = [icn["SE.IC.TUG, HARBOUR"]];
      sId["130204"] = [icn["SE.IC.LAUNCH"]];
      sId["140000"] = [icn["SE.IC.CIVILIAN"]];
      sId["140100"] = [icn["SE.IC.MERCHANT SHIP, GENERAL"]];
      sId["140101"] = [icn["SE.IC.CARGO, GENERAL"]];
      sId["140102"] = [icn["SE.IC.CONTAINER SHIP"]];
      sId["140103"] = [icn["SE.IC.DREDGE"]];
      sId["140104"] = [icn["SE.IC.ROLL ON-ROLL OFF"]];
      sId["140105"] = [icn["SE.IC.FERRY"]];
      sId["140106"] = [icn["SE.IC.HEAVY LIFT"]];
      sId["140107"] = [icn["SE.IC.HOVERCRAFT 2525D"]];
      sId["140108"] = [icn["SE.IC.MERCHANT SHIP, LASH CARRIER (WITH BARGES)"]];
      sId["140109"] = [icn["SE.IC.OILER/TANKER"]];
      sId["140110"] = [icn["SE.IC.PASSENGER SHIP"]];
      sId["140111"] = [icn["SE.IC.TUG, OCEAN GOING CIVILIAN"]];
      sId["140112"] = [icn["SE.IC.TOW"]];
      sId["140113"] = [icn["SE.IC.TRANSPORT SHIP, HAZARDOUS MATERIAL"]];
      sId["140114"] = [icn["SE.IC.JUNK/DHOW"]];
      sId["140115"] = [icn["SE.IC.BARGE, NOT SELF-PROPELLED"]];
      sId["140116"] = [icn["SE.IC.HOSPITAL SHIP"]];
      sId["140200"] = [icn["SE.IC.FISHING VESSEL"]];
      sId["140201"] = [icn["SE.IC.DRIFTER"]];
      sId["140202"] = [icn["SE.IC.TRAWLER"]];
      sId["140203"] = [icn["SE.IC.FISHING VESSEL DREDGE"]];
      sId["140300"] = [icn["SE.IC.LAW ENFORCEMENT VESSEL"]];
      sId["140400"] = [icn["SE.IC.LEISURE CRAFT, SAILING BOAT"]];
      sId["140500"] = [icn["SE.IC.LEISURE CRAFT, MOTORIZED"]];
      sId["140501"] = [
        icn["SE.IC.LEISURE CRAFT, MOTORIZED, RIGID-HULL INFLATABLE BOAT"]
      ];
      sId["140502"] = [icn["SE.IC.LEISURE CRAFT, MOTORIZED, SPEEDBOAT"]];
      sId["140600"] = [icn["SE.IC.LEISURE CRAFT, JETSKI"]];
      sId["140700"] = [icn["SE.IC.UNMANNED SURFACE WATER VEHICLE (USV)"]];
      sId["150000"] = [icn["SE.IC.OWN SHIP"]];
      sId["160000"] = [icn["SE.IC.FUSED TRACK"]];
      sId["170000"] = [icn["SE.IC.MANUAL TRACK"]];

      sIdm1["01"] = [icn["SE.M1.OWN SHIP"]];
      sIdm1["02"] = [icn["SE.M1.ANTIAIR WARFARE"]];
      sIdm1["03"] = [icn["SE.M1.ANTISUBMARINE WARFARE"]];
      sIdm1["04"] = [icn["SE.M1.ESCORT"]];
      sIdm1["05"] = [icn["SE.M1.ELECTRONIC WARFARE"]];
      sIdm1["06"] = [icn["SE.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE"]];
      sIdm1["07"] = [icn["SE.M1.MINE COUNTER MEASURES"]];
      sIdm1["08"] = [icn["SE.M1.MISSILE DEFENSE"]];
      sIdm1["09"] = [icn["SE.M1.MEDICAL"]];
      sIdm1["10"] = [icn["SE.M1.MINE WARFARE"]];
      sIdm1["11"] = [icn["SE.M1.REMOTE MULTI-MISSION VEHIHLE"]];
      sIdm1["12"] = [icn["SE.M1.SPECIAL OPERATIONS FORCE"]];
      sIdm1["13"] = [icn["SE.M1.SURFACE WARFARE"]];
      sIdm1["14"] = [icn["SE.M1.BALLISTIC MISSILE"]];
      sIdm1["15"] = [icn["SE.M1.GUIDED MISSILE"]];
      sIdm1["16"] = [icn["SE.M1.OTHER GUIDED MISSILE"]];
      sIdm1["17"] = [icn["SE.M1.TORPEDO"]];
      sIdm1["18"] = [icn["SE.M1.DRONE-EQUIPPED"]];
      sIdm1["19"] = [icn["SE.M1.HELICOPTER-EQUIPPED"]];
      sIdm1["20"] = [icn["SE.M1.BALLISTIC MISSILE DEFENSE, SHOOTER"]];
      sIdm1["21"] = [
        icn[
          "SE.M1.BALLISTIC MISSILE DEFENSE, LONG- RANGE SURVEILLANCE AND TRACK (LRS&T)"
        ]
      ];
      sIdm1["22"] = [icn["SE.M1.SEA-BASE X-BAND"]];
      sIdm1["23"] = [icn["SE.M1.HIJACKING/HIJACKED"]];
      sIdm1["24"] = [icn["SE.M1.HIJACKER"]];
      sIdm1["25"] = [icn["SE.M1.CYBERSPACE"]];

      sIdm2["01"] = [icn["SE.M2.NUCLEAR POWERED"]];
      sIdm2["02"] = [icn["SE.M2.HEAVY"]];
      sIdm2["03"] = [icn["SE.M2.LIGHT"]];
      sIdm2["04"] = [icn["SE.M2.MEDIUM"]];
      sIdm2["05"] = [icn["SE.M2.DOCK"]];
      sIdm2["06"] = [icn["SE.M2.LOGISTICS"]];
      sIdm2["07"] = [icn["SE.M2.TANK"]];
      sIdm2["08"] = [icn["SE.M2.VEHICLE"]];
      sIdm2["09"] = [icn["SE.M2.FAST"]];
      sIdm2["10"] = [icn["SE.M2.AIR-CUSHIONED (USA ONLY)"]];
      sIdm2["11"] = [icn["SE.M2.AIR-CUSHIONED"]];
      sIdm2["12"] = [icn["SE.M2.HYDROFOIL"]];
      sIdm2["13"] = [icn["SE.M2.AUTONOMOUS CONTROL"]];
      sIdm2["14"] = [icn["SE.M2.REMOTELY PILOTED"]];
      sIdm2["15"] = [icn["SE.M2.EXPENDABLE"]];
      sIdm2["16"] = [icn["SE.M2.CYBERSPACE"]];
    }
  }
};
