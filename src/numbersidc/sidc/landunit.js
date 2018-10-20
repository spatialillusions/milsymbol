import { ms } from "../../ms.js";
import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/ground.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function landunit(sId, sIdm1, sIdm2, bbox, symbolSet, icn, _STD2525) {
    //Land Unit
    if (symbolSet == "10") {
      sId["110000"] = [icn["GR.IC.COMMAND AND CONTROL"]];
      sId["110100"] = [icn["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]];
      sId["110200"] = [icn["GR.IC.CIVIL AFFAIRS"]];
      sId["110300"] = [icn["GR.IC.CIVIL-MILITARY-COOPERATION"]];
      sId["110400"] = [icn["GR.IC.INFORMATION OPERATIONS"]];
      sId["110500"] = [icn["GR.IC.LIAISON"]];
      sId["110501"] = [icn["GR.IC.LIAISON"], icn["GR.IC.FF.RECONNAISSANCE"]];
      sId["110600"] = [
        icn["GR.IC.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)"]
      ];
      sId["110601"] = [
        icn["GR.IC.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)"],
        icn["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]
      ];
      sId["110700"] = [icn["GR.IC.RADIO"]];
      sId["110800"] = [icn["GR.IC.RADIO RELAY"]];
      sId["110900"] = [icn["GR.IC.RADIO TELETYPE CENTRE"]];
      sId["111000"] = [icn["GR.IC.FF.SIGNAL"]];
      sId["111001"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.RADIO"]];
      sId["111002"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.RADIO RELAY"]];
      sId["111003"] = [
        icn["GR.IC.FF.SIGNAL"],
        icn["GR.IC.RADIO TELETYPE CENTRE"]
      ];
      sId["111004"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.I.FF.SATELLITE"]];
      sId["111005"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.VIDEO IMAGERY"]];
      //sId['111095'] = [icn['GR.IC.FF.SIGNAL'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      //sId['111097'] = [icn['GR.IC.FF.SIGNAL'],icn['GR.IC.FF.CORPS SUPPORT']];
      //sId['111098'] = [icn['GR.IC.FF.SIGNAL'],icn['GR.IC.FF.THEATRE SUPPORT']];
      sId["111100"] = [icn["GR.I.FF.SATELLITE"]];
      sId["111200"] = [icn["GR.IC.VIDEO IMAGERY"]];
      sId["111300"] = [icn["GR.IC.SPACE"]];
      sId["111400"] = [icn["GR.IC.SPECIAL TROOPS"]];
      sId["120000"] = [];
      sId["120100"] = [icn["GR.IC.FF.AIR ASSAULT WITH ORGANIC LIFT"]];
      sId["120200"] = [icn["GR.IC.AIR TRAFFIC SERVICES"]];
      sId["120300"] = [icn["GR.IC.FF.AMPHIBIOUS"]];
      sId["120400"] = [icn["GR.IC.FF.ANTITANK/ANTIARMOUR"]];
      sId["120401"] = [
        icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
        icn["GR.IC.ARMOUR"]
      ];
      sId["120402"] = [
        icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
        icn["GR.IC.FF.MOTORIZED"]
      ];
      sId["120500"] = [icn["GR.IC.ARMOUR"]];
      sId["120501"] = [icn["GR.IC.ARMOUR"], icn["GR.IC.FF.RECONNAISSANCE"]];
      sId["120502"] = [icn["GR.IC.ARMOUR"], icn["GR.IC.FF.AMPHIBIOUS"]];
      //sId['120595'] = [icn['GR.IC.ARMOUR'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];;
      sId["120600"] = [icn["GR.IC.AVIATION ROTARY WING"]];
      sId["120601"] = [
        icn["GR.IC.AVIATION ROTARY WING"],
        icn["GR.IC.FF.RECONNAISSANCE"]
      ];
      //sId['120695'] = [icn['GR.IC.AVIATION ROTARY WING'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      //sId['120697'] = [icn['GR.IC.AVIATION ROTARY WING'],icn['GR.IC.FF.CORPS SUPPORT']];
      //sId['120698'] = [icn['GR.IC.AVIATION ROTARY WING'],icn['GR.IC.FF.THEATRE SUPPORT']];
      sId["120700"] = [icn["GR.IC.AVIATION COMPOSITE"]];
      //sId['120795'] = [icn['GR.IC.AVIATION COMPOSITE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["120800"] = [icn["GR.IC.AVIATION FIXED WING"]];
      sId["120801"] = [
        icn["GR.IC.AVIATION FIXED WING"],
        icn["GR.IC.FF.RECONNAISSANCE"]
      ];
      //sId['120895'] = [icn['GR.IC.AVIATION FIXED WING'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["120900"] = [icn["GR.IC.COMBAT"]];
      sId["121000"] = [icn["GR.IC.COMBINED ARMS"]];
      //sId['121095'] = [icn['GR.IC.COMBINED ARMS'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["121100"] = [icn["GR.IC.FF.INFANTRY"]];
      sId["121101"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.FF.AMPHIBIOUS"]];
      sId["121102"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.ARMOUR"]];
      sId["121103"] = [
        icn["GR.IC.FF.INFANTRY"],
        icn["GR.IC.FF.MAIN GUN SYSTEM"]
      ];
      sId["121104"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.FF.MOTORIZED"]];
      sId["121105"] = [
        icn["GR.IC.FF.INFANTRY"],
        icn["GR.IC.ARMOUR"],
        icn["GR.IC.FF.MAIN GUN SYSTEM"]
      ];
      sId["121106"] = [icn["GR.IC.FF.MAIN GUN SYSTEM"]];
      //sId['121195'] = [icn['GR.IC.FF.INFANTRY'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["121200"] = [icn["GR.IC.OBSERVER/OBSERVATION"]];
      sId["121300"] = [icn["GR.IC.FF.RECONNAISSANCE"]];
      sId["121301"] = [
        icn["GR.IC.FF.RECONNAISSANCE"],
        icn["GR.IC.SURVEILLANCE"]
      ];
      sId["121302"] = [
        icn["GR.IC.FF.RECONNAISSANCE"],
        icn["GR.IC.FF.AMPHIBIOUS"]
      ];
      sId["121303"] = [
        icn["GR.IC.FF.RECONNAISSANCE"],
        icn["GR.IC.FF.MOTORIZED"]
      ];
      //sId['121395'] = [icn['GR.IC.FF.RECONNAISSANCE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["121400"] = [icn["GR.IC.SEA-AIR-LAND"]];
      sId["121500"] = [icn["GR.IC.SNIPER"]];
      sId["121600"] = [icn["GR.IC.SURVEILLANCE"]];
      sId["121700"] = [icn["GR.IC.SPECIAL FORCES"]];
      //sId['121795'] = [icn['GR.IC.SPECIAL FORCES'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["121800"] = [icn["GR.IC.SPECIAL OPERATIONS FORCES"]];
      sId["121801"] = [icn["GR.IC.FIXED WING MISO"]];
      sId["121802"] = [
        icn["GR.IC.SPECIAL OPERATIONS FORCES"],
        icn["GR.IC.FF.INFANTRY"]
      ];
      sId["121803"] = [
        icn["GR.IC.COMBATANT"],
        icn["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"]
      ]; //SPECIAL BOAT
      sId["121804"] = [
        icn["GR.IC.SUBMARINE NUCLEAR PROPULSION"],
        icn["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"]
      ]; //SPECIAL SSNR)
      sId["121805"] = [icn["SOF.IC.UNDERWATER DEMOLITION TEAM"]];
      sId["121900"] = [icn["GR.IC.UNMANNED SYSTEMS"]];
      sId["122000"] = [icn["GR.IC.RANGER"]];
      sId["130000"] = [];
      sId["130100"] = [icn["GR.IC.FF.AIR DEFENCE"]];
      sId["130101"] = [
        icn["GR.IC.FF.AIR DEFENCE"],
        icn["GR.IC.FF.MAIN GUN SYSTEM"]
      ];
      sId["130102"] = [
        icn["GR.IC.FF.AIR DEFENCE"],
        icn["GR.IC.AIR DEFENSE MISSILE"]
      ];
      sId["130103"] = [
        icn["GR.IC.FF.AIR DEFENCE"],
        icn["GR.IC.AIR AND MISSILE DEFENSE"]
      ];
      //sId['130195'] = [icn['GR.IC.FF.AIR DEFENCE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["130200"] = [
        icn["GR.IC.FIELD ARTILLERY"],
        icn["GR.IC.FF.RECONNAISSANCE"],
        icn["GR.IC.AVIATION ROTARY WING"],
        icn["GR.M1.NAVAL"]
      ];
      sId["130300"] = [icn["GR.IC.FIELD ARTILLERY"]];
      sId["130301"] = [
        ms._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
        icn["GR.IC.ARMOUR"]
      ]; //ARTILLERY SELF-PROPELLED
      sId["130302"] = [
        ms._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
        icn["GR.IC.ARMOUR"],
        icn["GR.IC.FF.RECONNAISSANCE"]
      ]; //ARTILLERY TARGET ACQUISITION
      sId["130303"] = [
        ms._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
        icn["GR.IC.FF.RECONNAISSANCE"]
      ]; //RECONNAISSANCE
      //sId['130395'] = [icn['GR.IC.FIELD ARTILLERY'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["130400"] = [icn["GR.IC.FIELD ARTILLERY OBSERVER"]];
      sId["130500"] = [icn["GR.IC.JOINT FIRE SUPPORT"]];
      sId["130600"] = [icn["GR.IC.METEOROLOGICAL"]];
      sId["130700"] = [icn["GR.IC.MISSILE"]];
      sId["130800"] = [icn["GR.IC.MORTAR"]];
      sId["130801"] = [icn["GR.IC.MORTAR"], icn["GR.M2.TRACKED"]];
      sId["130802"] = [icn["GR.IC.MORTAR"], icn["GR.M2.TRUCK"]];
      sId["130803"] = [icn["GR.IC.MORTAR"], icn["GR.M2.TOWED"]];
      sId["130900"] = [icn["GR.IC.SURVEY"]];
      sId["140000"] = [];
      sId["140100"] = [icn["GR.IC.CBRN"]];
      sId["140101"] = [icn["GR.IC.CBRN"], icn["GR.IC.ARMOUR"]];
      sId["140102"] = [icn["GR.IC.CBRN"], icn["GR.IC.FF.MOTORIZED"]];
      sId["140103"] = [icn["GR.IC.CBRN"], icn["GR.IC.FF.RECONNAISSANCE"]];
      sId["140104"] = [
        icn["GR.IC.CBRN"],
        icn["GR.IC.FF.RECONNAISSANCE"],
        icn["GR.IC.ARMOUR"]
      ];
      sId["140105"] = [
        icn["GR.IC.CBRN"],
        icn["GR.IC.FF.RECONNAISSANCE"],
        icn["GR.IC.FF.MOTORIZED"]
      ];
      sId["140106"] = [
        icn["GR.IC.CBRN"],
        icn[
          "GR.CHEMICAL, BIOLOGICAL, RADIOLOGICAL, NUCLEAR, AND HIGH-YIELD EXPLOSIVES"
        ]
      ];
      //sId['140195'] = [icn['GR.IC.CBRN'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["140200"] = [icn["GR.IC.COMBAT SUPPORT (MANOEUVRE ENHANCEMENT)"]];
      //sId['140295'] = [icn['GR.IC.COMBAT SUPPORT (MANOEUVRE ENHANCEMENT)'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["140300"] = [icn["GR.IC.CRIMINAL INVESTIGATION DIVISION"]];
      sId["140400"] = [icn["GR.IC.DIVER, CIVILIAN"]];
      sId["140500"] = [icn["GR.IC.DOG"]];
      sId["140600"] = [icn["GR.IC.DRILLING"]];
      sId["140700"] = [icn["GR.IC.ENGINEER"]];
      sId["140701"] = [icn["GR.IC.ENGINEER MECHANIZED"]];
      sId["140702"] = [icn["GR.IC.ENGINEER"], icn["GR.IC.FF.MOTORIZED"]];
      sId["140703"] = [icn["GR.IC.ENGINEER"], icn["GR.IC.FF.RECONNAISSANCE"]];
      //sId['140795'] = [icn['GR.IC.ENGINEER'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["140800"] = [icn["GR.IC.EXPLOSIVE ORDNANCE DISPOSAL"]];
      sId["140900"] = [icn["GR.IC.FIELD CAMP CONSTRUCTION"]];
      sId["141000"] = [icn["GR.IC.FIRE PROTECTION"]];
      sId["141100"] = [icn["GR.IC.GEOSPATIAL SUPPORT"]];
      sId["141200"] = [icn["GR.IC.MILITARY POLICE"]];
      //sId['141295'] = [icn['GR.IC.MILITARY POLICE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["141300"] = [icn["GR.IC.MINE"]];
      sId["141400"] = [icn["GR.IC.MINE CLEARING"]];
      sId["141500"] = [icn["GR.IC.MINE LAUNCHING"]];
      sId["141600"] = [icn["GR.IC.MINE LAYING"]];
      sId["141700"] = [icn["GR.IC.SECURITY"]];
      sId["141701"] = [icn["GR.IC.SECURITY"], icn["GR.IC.ARMOUR"]];
      sId["141702"] = [icn["GR.IC.SECURITY"], icn["GR.IC.FF.MOTORIZED"]];
      sId["141800"] = [icn["GR.IC.SEARCH AND RESCUE"]];
      sId["141900"] = [icn["GR.IC.SECURITY POLICE (AIR)"]];
      sId["142000"] = [icn["GR.IC.SHORE PATROL"]];
      sId["142100"] = [icn["GR.IC.TOPOGRAPHIC"]];
      sId["142200"] = [icn["GR.IC.AIR AND MISSILE DEFENSE"]];
      sId["150000"] = [];
      sId["150100"] = [icn["GR.IC.FF.ANALYSIS"]];
      sId["150200"] = [icn["GR.IC.COUNTER-INTELLIGENCE"]];
      sId["150300"] = [icn["GR.IC.FF.DIRECTION FINDING"]];
      sId["150400"] = [icn["GR.IC.ELECTRONIC RANGING"]];
      sId["150500"] = [icn["GR.IC.ELECTRONIC WARFARE"]];
      sId["150501"] = [
        icn["GR.IC.ELECTRONIC WARFARE"],
        icn["GR.IC.FF.ANALYSIS"]
      ];
      sId["150502"] = [
        icn["GR.IC.ELECTRONIC WARFARE"],
        icn["GR.IC.FF.DIRECTION FINDING"]
      ];
      sId["150503"] = [
        icn["GR.IC.ELECTRONIC WARFARE"],
        icn["GR.IC.FF.INTERCEPT"]
      ];
      sId["150504"] = [
        icn["GR.IC.ELECTRONIC WARFARE"],
        icn["GR.IC.FF.JAMMING"]
      ];
      sId["150505"] = [icn["GR.IC.ELECTRONIC WARFARE"], icn["GR.IC.FF.SEARCH"]];
      sId["150600"] = [icn["GR.IC.FF.INTERCEPT"]];
      sId["150700"] = [icn["GR.IC.INTERROGATION"]];
      sId["150800"] = [icn["GR.IC.FF.JAMMING"]];
      sId["150900"] = [icn["GR.IC.JOINT INTELLIGENCE CENTRE"]];
      sId["151000"] = [icn["GR.IC.MILITARY INTELLIGENCE"]];
      //sId['151095'] = [icn['GR.IC.MILITARY INTELLIGENCE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["151100"] = [icn["GR.IC.FF.SEARCH"]];
      sId["151200"] = [icn["GR.IC.SENSOR"]];
      sId["151300"] = [icn["GR.IC.MILITARY HISTORY"]];
      sId["160000"] = [icn["GR.IC.SUSTAINMENT"]];
      //sId['160095'] = [icn['GR.IC.SUSTAINMENT'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      //sId['160097'] = [icn['GR.IC.SUSTAINMENT'],icn['GR.IC.FF.CORPS SUPPORT']];
      //sId['160098'] = [icn['GR.IC.SUSTAINMENT'],icn['GR.IC.FF.THEATRE SUPPORT']];
      sId["160100"] = [icn["GR.IC.ADMINISTRATIVE"]];
      //sId['160197'] = [icn['GR.IC.ADMINISTRATIVE'],icn['GR.IC.FF.CORPS SUPPORT']];
      //sId['160198'] = [icn['GR.IC.ADMINISTRATIVE'],icn['GR.IC.FF.THEATRE SUPPORT']];
      sId["160200"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS ALL"]];
      sId["160300"] = [
        icn["GR.IC.TRANSPORTATION"],
        icn["GR.IC.AIRPORT OF DEBARKATION"]
      ];
      sId["160400"] = [icn["GR.IC.AMMUNITION"]];
      sId["160500"] = [icn["GR.IC.BAND"]];
      sId["160501"] = [icn["GR.IC.ARMY MUSIC"]];
      sId["160600"] = [icn["GR.IC.COMBAT SERVICE SUPPORT"]];
      sId["160700"] = [icn["GR.IC.FINANCE"]];
      //sId['160797'] = [icn['GR.IC.FINANCE'],icn['GR.IC.FF.CORPS SUPPORT']];
      //sId['160798'] = [icn['GR.IC.FINANCE'],icn['GR.IC.FF.THEATRE SUPPORT']];
      sId["160800"] = [icn["GR.IC.JUDGE ADVOCATE GENERAL"]];
      sId["160900"] = [icn["GR.IC.LABOUR"]];
      sId["161000"] = [icn["GR.IC.LAUNDRY/BATH"]];
      sId["161100"] = [icn["GR.IC.MAINTENANCE"]];
      //sId['161195'] = [icn['GR.IC.MAINTENANCE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      //sId['161197'] = [icn['GR.IC.MAINTENANCE'],icn['GR.IC.FF.CORPS SUPPORT']];
      //sId['161198'] = [icn['GR.IC.MAINTENANCE'],icn['GR.IC.FF.THEATRE SUPPORT']];
      sId["161200"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.MATERIEL"]];
      sId["161300"] = [icn["GR.IC.FF.MEDICAL"]];
      //sId['161395'] = [icn['GR.IC.FF.MEDICAL'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      //sId['161397'] = [icn['GR.IC.FF.MEDICAL'],icn['GR.IC.FF.MEDICAL CORPS']
      //sId['161398'] = [icn['GR.IC.FF.MEDICAL'],icn['GR.IC.FF.MEDICAL THEATER']
      sId["161400"] = [icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]];
      sId["161500"] = [icn["GR.IC.MORALE, WELFARE, AND RECREATION"]];
      sId["161600"] = [icn["GR.IC.MORTUARY AFFAIRS"]];
      sId["161700"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS MULTIPLE"]];
      sId["161800"] = [
        icn["GR.IC.FF.SUPPLY"],
        icn["GR.IC.FF.NATO SUPPLY CLASS I"]
      ];
      sId["161900"] = [
        icn["GR.IC.FF.SUPPLY"],
        icn["GR.IC.FF.NATO SUPPLY CLASS II"]
      ];
      sId["162000"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS III"]];
      sId["162100"] = [
        icn["GR.IC.FF.SUPPLY"],
        icn["GR.IC.FF.NATO SUPPLY CLASS IV"]
      ];
      sId["162200"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS V"]];
      sId["162300"] = [icn["GR.IC.ORDNANCE"]];
      //sId['162395'] = [icn['GR.IC.ORDNANCE'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      //sId['162397'] = [icn['GR.IC.ORDNANCE'],icn['GR.IC.FF.CORPS SUPPORT']];
      //sId['162398'] = [icn['GR.IC.ORDNANCE'],icn['GR.IC.FF.THEATRE SUPPORT']];
      sId["162400"] = [icn["GR.IC.PERSONNEL SERVICES"]];
      //sId['162495'] = [icn['GR.IC.PERSONNEL SERVICES'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      sId["162500"] = [icn["GR.IC.PETROLEUM OIL LUBRICANTS"]];
      sId["162600"] = [icn["GR.IC.PIPELINE"]];
      sId["162700"] = [icn["GR.IC.POSTAL"]];
      sId["162800"] = [icn["GR.IC.PUBLIC AFFAIRS"]];
      sId["162900"] = [icn["GR.IC.QUARTERMASTER"]];
      //sId['162995'] = [icn['GR.IC.QUARTERMASTER'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      //sId['162997'] = [icn['GR.IC.QUARTERMASTER'],icn['GR.IC.FF.CORPS SUPPORT']];
      //sId['162998'] = [icn['GR.IC.QUARTERMASTER'],icn['GR.IC.FF.THEATRE SUPPORT']];
      sId["163000"] = [icn["GR.IC.RAILHEAD"]];
      sId["163100"] = [icn["GR.IC.RELIGIOUS SUPPORT"]];
      sId["163200"] = [icn["GR.IC.REPLACEMENT HOLDING UNIT"]];
      sId["163300"] = [icn["GR.IC.SEAPORT OF DEBARKATION"]];
      sId["163400"] = [icn["GR.IC.FF.SUPPLY"]];
      sId["163500"] = [icn["GR.IC.JOINT INFORMATION BUREAU"]];
      //sId['163597'] = [icn['GR.IC.JOINT INFORMATION BUREAU'],icn['GR.IC.FF.CORPS SUPPORT']];
      //sId['163598'] = [icn['GR.IC.JOINT INFORMATION BUREAU'],icn['GR.IC.FF.THEATRE SUPPORT']];
      sId["163600"] = [icn["GR.IC.TRANSPORTATION"]];
      sId["163601"] = [
        icn["GR.IC.TRANSPORTATION"],
        icn["GR.IC.FLOATING CRAFT"]
      ];
      //sId['163695'] = [icn['GR.IC.TRANSPORTATION'],icn['GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT']];
      //sId['163697'] = [icn['GR.IC.TRANSPORTATION'],icn['GR.IC.FF.CORPS SUPPORT']];
      //sId['163698'] = [icn['GR.IC.TRANSPORTATION'],icn['GR.IC.FF.THEATRE SUPPORT']];
      sId["163700"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS I"]];
      sId["163800"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS II"]];
      sId["163900"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS III"]];
      sId["164000"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS IV"]];
      sId["164100"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS V"]];
      sId["164200"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VI"]];
      sId["164300"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VII"]];
      sId["164400"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VIII"]];
      sId["164500"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS IX"]];
      sId["164600"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS X"]];
      sId["164700"] = [icn["GR.IC.WATER"]];
      sId["164800"] = [icn["GR.IC.WATER PURIFICATION"]];
      sId["164900"] = [icn["GR.IC.PUBLIC AFFAIRS BROADCAST"]];
      sId["165000"] = [
        icn["GR.IC.FF.SUPPLY"],
        icn["GR.IC.FF.NATO SUPPLY CLASS ALL"]
      ];
      sId["165100"] = [icn["GR.IC.INTERPRETER/TRANSLATOR"]];
      sId["165200"] = [icn["GR.IC.SUPPORT"]];
      sId["165300"] = [icn["GR.IC.ARMY FIELD SUPPORT"]];
      sId["165400"] = [icn["GR.IC.CONTRACTING SERVICES"]];
      sId["165500"] = [icn["GR.IC.PARACHUTE RIGGER"]];
      sId["170000"] = [];
      sId["170100"] = [icn["GR.IC.NAVAL"]];
      sId["180000"] = [];
      sId["180100"] = [
        icn["GR.IC.ALLIED COMMAND EUROPE RAPID REACTION CORPS (ARRC)"]
      ];
      sId["180200"] = [icn["GR.IC.ALLIED COMMAND OPERATIONS"]];
      sId["180300"] = [
        icn["GR.IC.INTERNATIONAL SECURITY ASSISTANCE FORCE (ISAF)"]
      ];
      sId["180400"] = [icn["GR.IC.MULTINATIONAL (MN)"]];
      sId["190000"] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
      sId["200000"] = [icn["GR.IC.FF.LAW ENFORCEMENT"]];
      sId["200100"] = [
        icn[
          "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
        ]
      ];
      sId["200200"] = [icn["GR.IC.FF.BORDER PATROL"]];
      sId["200300"] = [icn["GR.IC.FF.CUSTOMS SERVICE"]];
      sId["200400"] = [icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]];
      sId["200500"] = [icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]];
      sId["200600"] = [icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]];
      sId["200700"] = [icn["GR.IC.LAW ENFORCEMENT"]];
      sId["200800"] = [icn["GR.IC.FF.PRISON"]];
      sId["200900"] = [icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]];
      sId["201000"] = [icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]];
      sId["201100"] = [icn["GR.IC.LAW ENFORCEMENT VESSEL"]];
      sId["201200"] = [icn["GR.IC.FF.US MARSHALS SERVICE"]];
      sId["201300"] = [icn["ST.IC.INTERNAL SECURITY FORCE"]];

      sIdm1["01"] = [
        _STD2525
          ? icn["GR.M1.TACTICAL SATELLITE COMMUNICATIONS"]
          : icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
      ];
      sIdm1["02"] = [icn["GR.M1.AREA"]];
      sIdm1["03"] = [icn["GR.M1.ATTACK"]];
      sIdm1["04"] = [icn["GR.M1.BIOLOGICAL"]];
      sIdm1["05"] = [icn["GR.M1.BORDER"]];
      sIdm1["06"] = [icn["GR.M1.BRIDGING"]];
      sIdm1["07"] = [icn["GR.M1.CHEMICAL"]];
      sIdm1["08"] = [icn["GR.M1.CLOSE PROTECTION"]];
      sIdm1["09"] = [icn["GR.M1.COMBAT"]];
      sIdm1["10"] = [icn["GR.M1.COMMAND AND CONTROL"]];
      sIdm1["11"] = [icn["GR.M1.COMMUNICATIONS CONTINGENCY PACKAGE"]];
      sIdm1["12"] = [icn["GR.M1.CONSTRUCTION"]];
      sIdm1["13"] = [icn["GR.M1.CROSS CULTURAL COMMUNICATION"]];
      sIdm1["14"] = [icn["GR.M1.CROWD AND RIOT CONTROL"]];
      sIdm1["15"] = [icn["GR.M1.DECONTAMINATION"]];
      sIdm1["16"] = [icn["GR.M1.DETENTION"]];
      sIdm1["17"] = [icn["GR.M1.DIRECT COMMUNICATIONS"]];
      sIdm1["18"] = [icn["GR.M1.DIVING"]];
      sIdm1["19"] = [icn["GR.M1.DIVISION"]];
      sIdm1["20"] = [icn["GR.M1.DOG"]];
      sIdm1["21"] = [icn["GR.M1.DRILLING"]];
      sIdm1["22"] = [icn["GR.M1.ELECTRO-OPTICAL"]];
      sIdm1["23"] = [icn["GR.M1.ENHANCED"]];
      sIdm1["24"] = [icn["GR.M1.EXPLOSIVE ORDNANCE DISPOSAL"]];
      sIdm1["25"] = [icn["GR.M1.FIRE DIRECTION CENTRE"]];
      sIdm1["26"] = [icn["GR.M1.FORCE"]];
      sIdm1["27"] = [icn["GR.M1.FORWARD"]];
      sIdm1["28"] = [icn["GR.M1.GROUND STATION MODULE"]];
      sIdm1["29"] = [icn["GR.M1.LANDING SUPPORT"]];
      sIdm1["30"] = [icn["GR.M1.LARGE EXTENSION NODE"]];
      sIdm1["31"] = [icn["GR.M1.MAINTENANCE"]];
      sIdm1["32"] = [icn["GR.M1.METEOROLOGICAL"]];
      sIdm1["33"] = [icn["GR.M1.MINE COUNTERMEASURE"]];
      sIdm1["34"] = [icn["GR.M1.MISSILE"]];
      sIdm1["35"] = [icn["GR.M1.(MOBILE) ADVISOR AND SUPPORT"]];
      sIdm1["36"] = [icn["GR.M1.MOBILE SUBSCRIBER EQUIPMENT"]];
      sIdm1["37"] = [icn["GR.M1.MOBILITY SUPPORT"]];
      sIdm1["38"] = [icn["GR.M1.MOVEMENT CONTROL CENTRE"]];
      sIdm1["39"] = [icn["GR.M1.MULTINATIONAL"]];
      sIdm1["40"] = [icn["GR.M1.MULTINATIONAL SPECIALIZED UNIT"]];
      sIdm1["41"] = [icn["GR.M1.MULTIPLE ROCKET LAUNCHER"]];
      sIdm1["42"] = [icn["GR.M1.NATO MEDICAL ROLE 1"]];
      sIdm1["43"] = [icn["GR.M1.NATO MEDICAL ROLE 2"]];
      sIdm1["44"] = [icn["GR.M1.NATO MEDICAL ROLE 3"]];
      sIdm1["45"] = [icn["GR.M1.NATO MEDICAL ROLE 4"]];
      sIdm1["46"] = [icn["GR.M1.NAVAL"]];
      sIdm1["47"] = [
        _STD2525
          ? icn["GR.M1.UNMANNED AERIAL VEHICLE"]
          : icn["GR.M1.NODE CENTRE"]
      ];
      sIdm1["48"] = [icn["GR.M1.NUCLEAR"]];
      sIdm1["49"] = [icn["GR.M1.OPERATIONS"]];
      sIdm1["50"] = [icn["GR.M1.RADAR"]];
      sIdm1["51"] = [
        icn["GR.M1.RADIO FREQUENCY IDENTIFICATION (RFID) INTERROGATOR/ SENSOR"]
      ];
      sIdm1["52"] = [icn["GR.M1.RADIOLOGICAL"]];
      sIdm1["53"] = [icn["GR.M1.SEARCH AND RESCUE"]];
      sIdm1["54"] = [icn["GR.M1.SECURITY"]];
      sIdm1["55"] = [icn["GR.M1.SENSOR"]];
      sIdm1["56"] = [
        _STD2525 ? icn["GR.M1.WEAPON"] : icn["GR.M1.SENSOR CONTROL MODULE"]
      ];
      sIdm1["57"] = [icn["GR.M1.SIGNALS INTELLIGENCE"]];
      sIdm1["58"] = [
        _STD2525 ? icn["GR.M1.ARMORED"] : icn["GR.M1.SINGLE SHELTER SWITCH"]
      ];
      sIdm1["59"] = [icn["GR.M1.SINGLE ROCKET LAUNCHER"]];
      sIdm1["60"] = [icn["GR.M1.SMOKE"]];
      sIdm1["61"] = [icn["GR.M1.SNIPER"]];
      sIdm1["62"] = [icn["GR.M1.SOUND RANGING"]];
      sIdm1["63"] = [icn["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"]];
      sIdm1["64"] = [icn["GR.M1.SPECIAL WEAPONS AND TACTICS"]];
      sIdm1["65"] = [icn["GR.M1.SURVEY"]];
      sIdm1["66"] = [icn["GR.M1.TACTICAL EXPLOITATION"]];
      sIdm1["67"] = [icn["GR.M1.TARGET ACQUISITION"]];
      sIdm1["68"] = [icn["GR.M1.TOPOGRAPHIC"]];
      sIdm1["69"] = [icn["GR.M1.UTILITY"]];
      sIdm1["70"] = [icn["GR.M1.VIDEO IMAGERY"]];
      sIdm1["71"] = [
        _STD2525 ? icn["GR.M1.MOBILITY ASSAULT"] : icn["GR.M1.ACCIDENT"]
      ];
      sIdm1["72"] = [
        _STD2525 ? icn["GR.M1.AMPHIBIOUS WARFARE SHIP "] : icn["GR.M1.OTHER"]
      ];
      sIdm1["73"] = [
        _STD2525 ? icn["GR.M1.LOAD HANDLING SYSTEM"] : icn["GR.M1.CIVILIAN"]
      ];
      sIdm1["74"] = [
        _STD2525
          ? icn["GR.M1.PALLETIZED LOAD SYSTEM"]
          : icn["GR.M1.ANTISUBMARINE WARFARE"]
      ];
      sIdm1["75"] = [icn["GR.M1.MEDEVAC"]];
      sIdm1["76"] = [icn["GR.M1.CYBERSPACE"]];
      sIdm1["77"] = [icn["GR.M1.SUPPORT"]];
      sIdm1["78"] = [icn["GR.M1.AVIATION"]];
      sIdm1["79"] = [icn["GR.M1.ROUTE, RECONNAISSANCE, AND CLEARANCE"]];
      sIdm1["80"] = [icn["GR.M1.TILT-ROTOR"]];
      sIdm1["81"] = [icn["GR.M1.COMMAND POST NODE"]];
      sIdm1["82"] = [icn["GR.M1.JOINT NETWORK NODE"]];
      sIdm1["83"] = [icn["GR.M1.RETRANSMISSION SITE"]];
      sIdm1["84"] = [icn["GR.M1.ASSAULT"]];

      sIdm1["85"] = [icn["GR.M1.WEAPONS"]];
      sIdm1["86"] = [icn["GR.M1.CRIMINAL INVESTIGATION DIVISION"]];
      sIdm1["87"] = [icn["GR.M1.DIGITAL"]];
      sIdm1["88"] = [icn["GR.M1.NETWORK OR NETWORK OPERATIONS"]];
      sIdm1["89"] = [
        icn[
          "GR.M1.AIRFIELD, AERIAL PORT OF DEBARKATION, OR AERIAL PORT OF EMBARKATION"
        ]
      ];
      sIdm1["90"] = [icn["GR.M1.PIPELINE"]];
      sIdm1["91"] = [icn["GR.M1.POSTAL"]];
      sIdm1["92"] = [icn["GR.M1.WATER"]];
      sIdm1["93"] = [icn["GR.M1.INDEPENDENT COMMAND"]];

      sIdm1["94"] = [icn["GR.M1.THEATRE"]];
      sIdm1["95"] = [icn["GR.M1.ARMY"]];
      sIdm1["96"] = [icn["GR.M1.CORPS"]];
      sIdm1["97"] = [icn["GR.M1.BRIGADE"]];
      sIdm1["98"] = [icn["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"]];

      sIdm2["01"] = [icn["GR.M2.AIRBORNE"]];
      sIdm2["02"] = [icn["GR.M2.ARCTIC"]];
      sIdm2["03"] = [icn["GR.M2.BATTLE DAMAGE REPAIR"]];
      sIdm2["04"] = [icn["GR.M2.BICYCLE EQUIPPED"]];
      sIdm2["05"] = [icn["GR.M2.CASUALTY STAGING"]];
      sIdm2["06"] = [icn["GR.M2.CLEARING"]];
      sIdm2["07"] = [icn["GR.M2.CLOSE RANGE"]];
      sIdm2["08"] = [icn["GR.M2.CONTROL"]];
      sIdm2["09"] = [icn["GR.M2.DECONTAMINATION"]];
      sIdm2["10"] = [icn["GR.M2.DEMOLITION"]];
      sIdm2["11"] = [icn["GR.M2.DENTAL"]];
      sIdm2["12"] = [icn["GR.M2.DIGITAL"]];
      sIdm2["13"] = [icn["GR.M2.ENHANCED POSITION LOCATION REPORTING SYSTEM"]];
      sIdm2["14"] = [icn["GR.M2.EQUIPMENT"]];
      sIdm2["15"] = [icn["GR.M2.HEAVY"]];
      sIdm2["16"] = [icn["GR.M2.HIGH ALTITUDE"]];
      sIdm2["17"] = [icn["GR.M2.INTERMODAL"]];
      sIdm2["18"] = [icn["GR.M2.INTENSIVE CARE"]];
      sIdm2["19"] = [icn["GR.M2.LIGHT"]];
      sIdm2["20"] = [icn["GR.M2.LABORATORY"]];
      sIdm2["21"] = [icn["GR.M2.LAUNCHER"]];
      sIdm2["22"] = [icn["GR.M2.LONG RANGE"]];
      sIdm2["23"] = [icn["GR.M2.LOW ALTITUDE"]];
      sIdm2["24"] = [icn["GR.M2.MEDIUM"]];
      sIdm2["25"] = [icn["GR.M2.MEDIUM ALTITUDE"]];
      sIdm2["26"] = [icn["GR.M2.MEDIUM RANGE"]];
      sIdm2["27"] = [icn["GR.M2.MOUNTAIN"]];
      sIdm2["28"] = [icn["GR.M2.HIGH TO MEDIUM ALTITUDE"]];
      sIdm2["29"] = [icn["GR.M2.MULTI-CHANNEL"]];
      sIdm2["30"] = [icn["GR.M2.OPTICAL"]];
      sIdm2["31"] = [icn["GR.M2.PACK ANIMAL"]];
      sIdm2["32"] = [icn["GR.M2.PATIENT EVACUATION COORDINATION"]];
      sIdm2["33"] = [icn["GR.M2.PREVENTIVE MAINTENANCE"]];
      sIdm2["34"] = [icn["GR.M2.PSYCHOLOGICAL"]];
      sIdm2["35"] = [icn["GR.M2.RADIO RELAY LINE OF SIGHT"]];
      sIdm2["36"] = [icn["GR.M2.RAILROAD"]];
      sIdm2["37"] = [icn["GR.M2.RECOVERY (UNMANNED SYSTEMS)"]];
      sIdm2["38"] = [icn["GR.M2.RECOVERY (MAINTENANCE)"]];
      sIdm2["39"] = [icn["GR.M2.RESCUE COORDINATION CENTRE"]];
      sIdm2["40"] = [icn["GR.M2.RIVERINE"]];
      sIdm2["41"] = [icn["GR.M2.SINGLE CHANNEL"]];
      sIdm2["42"] = [icn["GR.M2.SKI"]];
      sIdm2["43"] = [icn["GR.M2.SHORT RANGE"]];
      sIdm2["44"] = [icn["GR.M2.STRATEGIC"]];
      sIdm2["45"] = [icn["GR.M2.SUPPORT"]];
      sIdm2["46"] = [icn["GR.M2.TACTICAL"]];
      sIdm2["47"] = [icn["GR.M2.TOWED"]];
      sIdm2["48"] = [icn["GR.M2.TROOP"]];
      sIdm2["49"] = [icn["GR.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING "]];
      sIdm2["50"] = [icn["GR.M2.VETERINARY"]];
      sIdm2["51"] = [icn["GR.M2.WHEELED"]];
      sIdm2["52"] = [icn["GR.M2.HIGH TO LOW ALTITUDE"]];
      sIdm2["53"] = [icn["GR.M2.MEDIUM TO LOW ALTITUDE"]];
      sIdm2["54"] = [icn["GR.M2.ATTACK"]];
      sIdm2["55"] = [icn["GR.M2.REFUEL"]];
      sIdm2["56"] = [icn["GR.M2.UTILITY"]];
      sIdm2["57"] = [icn["GR.M2.COMBAT SEARCH AND RESCUE"]];

      sIdm2["58"] = [icn["GR.M2.GUERILLA"]];
      sIdm2["59"] = [icn["GR.M2.AIR ASSAULT"]];
      sIdm2["60"] = [icn["GR.M2.AMPHIBIOUS"]];
      sIdm2["61"] = [icn["GR.M2.VERY HEAVY"]];
      sIdm2["62"] = [icn["GR.IC.FF.SUPPLY"]];
      sIdm2["63"] = [icn["GR.M2.CYBERSPACE"]];
      sIdm2["64"] = [icn["GR.M2.NAVY BARGE, SELF-PROPELLED"]];
      sIdm2["65"] = [icn["GR.M2.NAVY BARGE, NOT SELF-PROPELLED"]];
      sIdm2["66"] = [icn["GR.M2.LAUNCH"]];
      sIdm2["67"] = [icn["GR.M2.LANDING CRAFT"]];
      sIdm2["68"] = [icn["GR.M2.LANDING SHIP"]];
      sIdm2["69"] = [icn["GR.M2.SERVICE CRAFT/YARD"]];
      sIdm2["70"] = [icn["GR.M2.TUG HARBOR"]];
      sIdm2["71"] = [icn["GR.M2.OCEAN GOING TUG BOAT"]];
      sIdm2["72"] = [icn["GR.M2.SURFACE DEPLOYMENT AND DISTRIBUTION COMMAND"]];
      sIdm2["73"] = [icn["GR.M2.NONCOMBATANT GENERIC VESSEL"]];
      sIdm2["74"] = [icn["GR.M2.COMPOSITE"]];
      sIdm2["75"] = [icn["GR.M2.SHELTER"]];
      sIdm2["76"] = [icn["GR.M2.LIGHT AND MEDIUM"]];
      sIdm2["77"] = [icn["GR.M2.SELF-PROPELLED"]];
      sIdm2["78"] = [icn["GR.M2.SECURITY FORCE ASSISTANCE"]];
    }
  }
};
