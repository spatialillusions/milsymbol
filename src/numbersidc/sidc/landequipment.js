import { ms } from "../../ms.js";
import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/ground.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function landequipment(
    sId,
    sIdm1,
    sIdm2,
    bbox,
    symbolSet,
    icn,
    _STD2525
  ) {
    //Land Equipment
    if (symbolSet == "15") {
      sId["110000"] = [icn["GR.EQ.WEAPON"]];
      sId["110100"] = [icn["GR.EQ.RIFLE"]];
      sId["110101"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.SHORT RANGE"]];
      sId["110102"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.INTERMEDIATE RANGE"]];
      sId["110103"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.LONG RANGE"]];
      sId["110200"] = [icn["GR.EQ.MACHINE GUN"]];
      sId["110201"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.SHORT RANGE"]];
      sId["110202"] = [
        icn["GR.EQ.MACHINE GUN"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["110203"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.LONG RANGE"]];
      sId["110300"] = [icn["GR.EQ.GRENADE LAUNCHER"]];
      sId["110301"] = [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
      ];
      sId["110302"] = [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
      ];
      sId["110303"] = [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms._translate(0, 20, icn["GR.EQ.LONG RANGE"])
      ];
      sId["110400"] = [icn["GR.EQ.FLAME THROWER"]];
      sId["110500"] = [icn["GR.EQ.AIR DEFENCE GUN"]];
      sId["110501"] = [icn["GR.EQ.AIR DEFENCE GUN"], icn["GR.EQ.SHORT RANGE"]];
      sId["110502"] = [
        icn["GR.EQ.AIR DEFENCE GUN"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["110503"] = [icn["GR.EQ.AIR DEFENCE GUN"], icn["GR.EQ.LONG RANGE"]];
      sId["110600"] = [icn["GR.EQ.ANTITANK GUN"]];
      sId["110601"] = [icn["GR.EQ.ANTITANK GUN"], icn["GR.EQ.SHORT RANGE"]];
      sId["110602"] = [
        icn["GR.EQ.ANTITANK GUN"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["110603"] = [icn["GR.EQ.ANTITANK GUN"], icn["GR.EQ.LONG RANGE"]];
      sId["110700"] = [icn["GR.EQ.DIRECT FIRE GUN"]];
      sId["110701"] = [icn["GR.EQ.DIRECT FIRE GUN"], icn["GR.EQ.SHORT RANGE"]];
      sId["110702"] = [
        icn["GR.EQ.DIRECT FIRE GUN"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["110703"] = [icn["GR.EQ.DIRECT FIRE GUN"], icn["GR.EQ.LONG RANGE"]];
      sId["110800"] = [icn["GR.EQ.RECOILLESS GUN"]];
      sId["110801"] = [icn["GR.EQ.RECOILLESS GUN"], icn["GR.EQ.SHORT RANGE"]];
      sId["110802"] = [
        icn["GR.EQ.RECOILLESS GUN"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["110803"] = [icn["GR.EQ.RECOILLESS GUN"], icn["GR.EQ.LONG RANGE"]];
      sId["110900"] = [icn["GR.EQ.HOWITZER"]];
      sId["110901"] = [icn["GR.EQ.HOWITZER"], icn["GR.EQ.SHORT RANGE"]];
      sId["110902"] = [icn["GR.EQ.HOWITZER"], icn["GR.EQ.INTERMEDIATE RANGE"]];
      sId["110903"] = [icn["GR.EQ.HOWITZER"], icn["GR.EQ.LONG RANGE"]];
      sId["111000"] = [icn["GR.EQ.MISSILE LAUNCHER"]];
      sId["111001"] = [icn["GR.EQ.MISSILE LAUNCHER"], icn["GR.EQ.SHORT RANGE"]];
      sId["111002"] = [
        icn["GR.EQ.MISSILE LAUNCHER"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["111003"] = [icn["GR.EQ.MISSILE LAUNCHER"], icn["GR.EQ.LONG RANGE"]];
      sId["111100"] = [
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"]
      ];
      sId["111101"] = [
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
        icn["GR.EQ.SHORT RANGE"]
      ];
      sId["111102"] = [
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
        icn["GR.EQ.SHORT RANGE"],
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
      ];
      sId["111103"] = [
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
        icn["GR.EQ.SHORT RANGE"],
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
      ];
      sId["111104"] = [
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["111105"] = [
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
        icn["GR.EQ.INTERMEDIATE RANGE"],
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
      ];
      sId["111106"] = [
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
        icn["GR.EQ.INTERMEDIATE RANGE"],
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
      ];
      sId["111107"] = [
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
        icn["GR.EQ.LONG RANGE"]
      ];
      sId["111108"] = [
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
        icn["GR.EQ.LONG RANGE"],
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
      ];
      sId["111109"] = [
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
        icn["GR.EQ.LONG RANGE"],
        icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
      ];
      sId["111200"] = [icn["GR.EQ.ANTITANK MISSILE LAUNCHER"]];
      sId["111201"] = [
        icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
        icn["GR.EQ.SHORT RANGE"]
      ];
      sId["111202"] = [
        icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["111203"] = [
        icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
        icn["GR.EQ.LONG RANGE"]
      ];
      sId["111300"] = [icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"]];
      sId["111301"] = [
        icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
        icn["GR.EQ.SHORT RANGE"]
      ];
      sId["111302"] = [
        icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["111303"] = [
        icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
        icn["GR.EQ.LONG RANGE"]
      ];
      sId["111400"] = [icn["GR.EQ.MORTAR"]];
      sId["111401"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.SHORT RANGE"]];
      sId["111402"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.INTERMEDIATE RANGE"]];
      sId["111403"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.LONG RANGE"]];
      sId["111500"] = [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]];
      sId["111501"] = [
        icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
        icn["GR.EQ.SHORT RANGE"]
      ];
      sId["111502"] = [
        icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["111503"] = [
        icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
        icn["GR.EQ.LONG RANGE"]
      ];
      sId["111600"] = [icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"]];
      sId["111601"] = [
        icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
        ms._translate(0, 10, icn["GR.EQ.SHORT RANGE"])
      ];
      sId["111602"] = [
        icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
        ms._translate(0, 10, icn["GR.EQ.INTERMEDIATE RANGE"])
      ];
      sId["111603"] = [
        icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
        ms._translate(0, 10, icn["GR.EQ.LONG RANGE"])
      ];
      sId["111700"] = [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]];
      sId["111701"] = [
        icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
        icn["GR.EQ.SHORT RANGE"]
      ];
      sId["111702"] = [
        icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["111703"] = [
        icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
        icn["GR.EQ.LONG RANGE"]
      ];
      sId["111800"] = [icn["GR.EQ.NON-LETHAL WEAPON"]];
      sId["111900"] = [icn["GR.EQ.TASER"]];
      sId["112000"] = [icn["GR.EQ.WATER CANNON"]];
      sId["120000"] = [
        icn[
          "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
        ]
      ];
      sId["120100"] = [
        icn[
          "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
        ],
        icn["GR.EQ.ARMOURED VEHICLE"]
      ];
      sId["120101"] = [icn["GR.EQ.ARMOURED FIGHTING VEHICLE"]];
      sId["120102"] = [
        icn["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"]
      ];
      sId["120103"] = [icn["GR.EQ.ARMOURED PERSONNEL CARRIER"]];
      sId["120104"] = [
        icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
        icn["GR.EQ.MEDICAL EVACUATION"]
      ];
      sId["120105"] = [icn["GR.IC.ARMOUR"]];
      sId["120106"] = [icn["GR.IC.ARMOUR"], icn["GR.EQ.TANK RECOVERY VEHICLE"]];
      sId["120107"] = [icn["GR.IC.ARMOUR"], icn["GR.EQ.MEDICAL EVACUATION"]];
      sId["120108"] = [
        icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
        icn["GR.EQ.TANK RECOVERY VEHICLE"]
      ];
      sId["120109"] = [
        icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
        icn["GR.EQ.COMBAT SERVICE SUPPORT VEHICLE"]
      ];
      sId["120110"] = [
        icn["GR.EQ.ARMOURED FIGHTING VEHICLE"],
        icn["GR.EQ.CROSS-COUNTRY"]
      ];
      sId["120111"] = [
        icn["GR.EQ.ARMOURED FIGHTING VEHICLE"],
        icn["GR.EQ.CROSS-COUNTRY"],
        icn["GR.IC.FF.RECONNAISSANCE EQUPIMENT"]
      ];
      sId["120200"] = [icn["GR.EQ.TANK"]];
      sId["120201"] = [icn["GR.EQ.TANK"], icn["GR.EQ.LIGHT TANK"]];
      sId["120202"] = [icn["GR.EQ.TANK"], icn["GR.EQ.MEDIUM TANK"]];
      sId["120203"] = [icn["GR.EQ.TANK"], icn["GR.EQ.HEAVY TANK"]];
      sId["120300"] = [icn["GR.EQ.TANK"], icn["GR.EQ.TANK RECOVERY VEHICLE"]];
      sId["120301"] = [
        icn["GR.EQ.TANK"],
        icn["GR.EQ.LIGHT TANK"],
        icn["GR.EQ.TANK RECOVERY VEHICLE"]
      ];
      sId["120302"] = [
        icn["GR.EQ.TANK"],
        icn["GR.EQ.MEDIUM TANK"],
        icn["GR.EQ.TANK RECOVERY VEHICLE"]
      ];
      sId["120303"] = [
        icn["GR.EQ.TANK"],
        icn["GR.EQ.HEAVY TANK"],
        icn["GR.EQ.TANK RECOVERY VEHICLE"]
      ];
      sId["130000"] = [
        icn[
          "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
        ],
        ms._scale(0.7, icn["GR.IC.ENGINEER"])
      ];
      sId["130100"] = [icn["GR.IN.IC.BRIDGE"]];
      sId["130200"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        ms._scale(0.8, icn["GR.IN.IC.BRIDGE"])
      ];
      sId["130300"] = [icn["GR.IN.IC.BRIDGE"], icn["GR.EQ.FIXED BRIDGE"]];
      sId["130400"] = [icn["GR.IN.IC.BRIDGE"], icn["GR.M2.RIVERINE"]];
      sId["130500"] = [
        icn["GR.IN.IC.BRIDGE"],
        icn["GR.EQ.FOLDING GIRDER BRIDGE"]
      ];
      sId["130600"] = [icn["GR.IN.IC.BRIDGE"], icn["GR.EQ.HOLLOW DECK BRIDGE"]];
      sId["130700"] = [icn["GR.IC.DRILLING"]];
      sId["130701"] = [
        ms._scale(0.7, icn["GR.IC.DRILLING"]),
        icn["GR.EQ.UTILITY VEHICLE"]
      ];
      sId["130800"] = [icn["GR.EQ.EARTHMOVER"]];
      sId["130801"] = [icn["GR.EQ.MULTIFUNCTIONAL EARTHMOVER/DIGGER"]];
      sId["130900"] = [icn["GR.EQ.MINE CLEARING EQUIPMENT"]];
      sId["130901"] = [
        icn["GR.EQ.MINE CLEARING EQUIPMENT"],
        ms._translate(0, -10, icn["GR.EQ.LIMITED CROSS-COUNTRY"])
      ];
      sId["130902"] = [icn["GR.EQ.MINE CLEARING EQUIPMENT"], icn["GR.EQ.TANK"]];
      sId["130903"] = [
        icn["GR.EQ.ASSAULT BREACHER VEHICLE (ABV) WITH COMBAT DOZER BLADE"]
      ];
      sId["130904"] = [
        icn["GR.M1.ROUTE, RECONNAISSANCE, AND CLEARANCE"],
        icn["GR.IC.ENGINEER UTILITY VEHICLE"],
        icn["GR.M2.MEDIUM"]
      ];
      sId["130905"] = [
        icn["GR.M1.ROUTE, RECONNAISSANCE, AND CLEARANCE"],
        icn["GR.IC.ENGINEER UTILITY VEHICLE"],
        icn["GR.M2.HEAVY"]
      ];
      sId["131000"] = [icn["GR.IC.MINE LAYING"]];
      sId["131001"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        ms._translate(0, 10, ms._scale(0.7, icn["GR.IC.MINE LAYING"]))
      ];
      sId["131002"] = [
        icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
        icn["GR.EQ.ARMORED CARRIER WITH VOLCANO"]
      ];
      sId["131003"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.LIMITED CROSS-COUNTRY"],
        icn["GR.EQ.ARMORED CARRIER WITH VOLCANO"]
      ];
      sId["131100"] = [icn["GR.EQ.DOZER"]];
      sId["131101"] = [icn["GR.EQ.DOZER ARMORED"]];
      sId["131200"] = [
        icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
        ms._scale(0.6, icn["GR.IC.ENGINEER"])
      ];
      sId["131300"] = [
        icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
        ms._scale(0.6, icn["GR.IC.ENGINEER"]),
        icn["GR.EQ.ARMOURED PERSONNEL CARRIER ENGINEER RECON VEHICLE"]
      ];
      sId["131400"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.LIMITED CROSS-COUNTRY"],
        icn["GR.EQ.UTILITY VEHICLE BACKHOE"]
      ];
      sId["131500"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.LIMITED CROSS-COUNTRY"],
        ms._scale(0.6, icn["GR.IC.ENGINEER"])
      ];
      sId["131600"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.CROSS-COUNTRY"],
        icn["GR.EQ.UTILITY VEHICLE FERRY TRANSPORTER"]
      ];
      sId["140000"] = [];
      sId["140100"] = [icn["GR.EQ.UTILITY VEHICLE"]];
      sId["140200"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.MEDICAL VEHICLE"]
      ];
      sId["140300"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.MEDICAL EVACUATION"]
      ];
      sId["140400"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.MOBILE EMERGENCY PHYSICIAN"]
      ];
      sId["140500"] = [icn["GR.EQ.BUS"]];
      sId["140600"] = [icn["GR.EQ.SEMI-TRAILER TRUCK"]];
      sId["140601"] = [
        icn["GR.EQ.SEMI-TRAILER TRUCK"],
        icn["GR.EQ.UTILITY VEHICLE LIGHT"]
      ];
      sId["140602"] = [
        icn["GR.EQ.SEMI-TRAILER TRUCK"],
        icn["GR.EQ.UTILITY VEHICLE MEDIUM"]
      ];
      sId["140603"] = [
        icn["GR.EQ.SEMI-TRAILER TRUCK"],
        icn["GR.EQ.UTILITY VEHICLE HEAVY"]
      ];
      sId["140700"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.LIMITED CROSS-COUNTRY"]
      ];
      sId["140800"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.CROSS-COUNTRY"]
      ];
      sId["140900"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        ms._scale(0.8, icn["GR.IC.FF.CLASS III"])
      ];
      sId["141000"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        ms._scale(0.7, icn["GR.IC.WATER"])
      ];
      sId["141100"] = [
        icn["GR.EQ.WATER VEHICLE"],
        icn["GR.EQ.LIMITED CROSS-COUNTRY"]
      ];
      sId["141200"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"]
      ];
      sId["141201"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],
        icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK.LIGHT"]
      ];
      sId["141202"] = [
        icn["GR.EQ.UTILITY VEHICLE"],
        icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],
        icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK.HEAVY"]
      ];
      sId["150000"] = [];
      sId["150100"] = [icn["GR.EQ.TRAIN LOCOMOTIVE"]];
      sId["150200"] = [icn["GR.EQ.RAILCAR"]];
      sId["160000"] = [];
      sId["160100"] = [icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"]];
      sId["160101"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
        icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
      ];
      sId["160102"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
        icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
      ];
      sId["160103"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
        icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
      ];
      sId["160200"] = [icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"]];
      sId["160201"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
        icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
      ];
      sId["160202"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
        icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
      ];
      sId["160203"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
        icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
      ];
      sId["160300"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]
      ];
      sId["160301"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
      ];
      sId["160302"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
      ];
      sId["160303"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
      ];
      sId["160400"] = [icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"]];
      sId["160401"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
      ];
      sId["160402"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
      ];
      sId["160403"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
      ];
      sId["160500"] = [icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"]];
      sId["160501"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
      ];
      sId["160502"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
      ];
      sId["160503"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
      ];
      sId["160600"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
      ];
      sId["160601"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"],
        icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
      ];
      sId["160602"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],
        icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
      ];
      sId["160603"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
        icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"],
        icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
      ];
      sId["160700"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
        icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
      ];
      sId["160701"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
        icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"],
        icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
      ];
      sId["160702"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
        icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],
        icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
      ];
      sId["160703"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
        icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"],
        icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
      ];
      sId["160800"] = [icn["ST.IC.KNOWN INSURGENT VEHICLE"]];
      sId["160900"] = [icn["ST.IC.KNOWN INSURGENT VEHICLE"], icn["ST.M1.DRUG"]];
      sId["170000"] = [icn["GR.IC.FF.LAW ENFORCEMENT"]];
      sId["170100"] = [
        icn[
          "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
        ]
      ];
      sId["170200"] = [icn["GR.IC.FF.BORDER PATROL"]];
      sId["170300"] = [icn["GR.IC.FF.CUSTOMS SERVICE"]];
      sId["170400"] = [icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]];
      sId["170500"] = [icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]];
      sId["170600"] = [icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]];
      sId["170700"] = [icn["GR.IC.MILITARY POLICE"]];
      sId["170800"] = [icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]];
      sId["170900"] = [icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]];
      sId["171000"] = [icn["GR.IC.LAW ENFORCEMENT VESSEL"]];
      sId["171100"] = [icn["GR.IC.FF.US MARSHALS SERVICE"]];
      sId["180000"] = [icn["GR.EQ.PACK ANIMAL"]];
      sId["190000"] = [
        icn[
          "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
        ],
        icn["GR.EQ.MISSILE SUPPORT"]
      ];
      sId["190100"] = [
        icn[
          "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
        ],
        icn["GR.EQ.MISSILE TRANSLOADER"]
      ];
      sId["190200"] = [
        icn[
          "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
        ],
        icn["GR.EQ.MISSILE TRANSPORTER"]
      ];
      sId["190300"] = [
        icn[
          "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
        ],
        icn["GR.EQ.MISSILE CRANE/LOADING DEVICE"]
      ];
      sId["190400"] = [
        icn[
          "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
        ],
        icn["GR.EQ.MISSILE PROPELLANT TRANSPORTER"]
      ];
      sId["190500"] = [
        icn[
          "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
        ],
        icn["GR.EQ.MISSILE WARHEAD TRANSPORTER"]
      ];
      sId["200000"] = [];
      sId["200100"] = [icn["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]];
      sId["200200"] = [icn["ST.IC.BOMB"]];
      sId["200300"] = [icn["ST.IC.BOOBY TRAP"]];
      sId["200400"] = [icn["GR.EQ.CBRN EQUIPMENT"]];
      sId["200500"] = [icn["GR.EQ.COMPUTER SYSTEM"]];
      sId["200600"] = [icn["GR.EQ.COMMAND LAUNCH EQUIPMENT (CLE)"]];
      sId["200700"] = [icn["GR.EQ.GENERATOR SET"]];
      sId["200800"] = [
        icn[
          "GR.EQ.GROUND-BASED MIDCOURSE DEFENSE (GMD) FIRE CONTROL (GFC) CENTER"
        ]
      ];
      sId["200900"] = [
        icn[
          "GR.EQ.IN-FLIGHT INTERCEPTOR COMMUNICATIONS SYSTEM (IFICS) DATA TERMINAL (IDT)"
        ]
      ];
      sId["201000"] = [icn["GR.EQ.LASER"]];
      sId["201100"] = [icn["GR.EQ.PSYCHOLOGICAL OPERATIONS EQUIPMENT"]];
      sId["201200"] = [icn["GR.IC.SUSTAINMENT"]];
      sId["201300"] = [icn["GR.EQ.TENT"]];
      sId["201301"] = [icn["GR.EQ.TENT CIVILIAN"]];
      sId["201302"] = [icn["GR.EQ.TENT MILITARY"]];
      sId["201400"] = [icn["GR.EQ.UNIT DEPLOYMENT SHIPMENTS"]];
      sId["201500"] = [icn["GR.IC.EMERGENCY MEDICAL OPERATION"]];
      sId["201501"] = [icn["GR.IC.MEDICAL EVACUATION HELICOPTER"]];
      sId["210000"] = [];
      sId["210100"] = [icn["GR.EQ.LAND MINE"]];
      sId["210200"] = [icn["GR.EQ.ANTIPERSONNEL LAND MINE"]];
      sId["210300"] = [icn["GR.EQ.ANTITANK MINE"]];
      sId["210400"] = [icn["GR.EQ.IMPROVISED EXPLOSIVE DEVICE"]];
      sId["210500"] = [icn["GR.EQ.ANTIPERSONNEL LAND MINE LESS THAN LETHAL"]];
      sId["220000"] = [];
      sId["220100"] = [icn["GR.EQ.SENSOR"]];
      sId["220200"] = [icn["GR.EQ.SENSOR EMPLACED"]];
      sId["220300"] = [icn["GR.EQ.RADAR"]];
      sId["230000"] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
      sId["230100"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
        icn["GR.M1.MEDEVAC"]
      ];
      sId["230200"] = [icn["GR.IC.FIRE PROTECTION"]];
      sId["240000"] = [icn["GR.IC.MANUAL TRACK"]];
      sId["250000"] = [icn["GR.IC.AVIATION ROTARY WING"]];

      //sIdm1['00'] = 'Unspecified';
      sIdm1["01"] = [icn["GR.M1.BIOLOGICAL"]];
      sIdm1["02"] = [icn["GR.M1.CHEMICAL"]];
      sIdm1["03"] = [icn["GR.M1.EARLY WARNING RADAR"]];
      sIdm1["04"] = [icn["GR.M1.INTRUSION"]];
      sIdm1["05"] = [icn["GR.M1.NUCLEAR"]];
      sIdm1["06"] = [icn["GR.M1.RADIOLOGICAL"]];
      sIdm1["07"] = [icn["GR.M1.UPGRADED EARLY WARNING RADAR"]];
      sIdm1["08"] = [icn["GR.M1.HIJACKING"]];
      sIdm1["09"] = [icn["GR.M1.CIVILIAN"]];
      sIdm1["10"] = [icn["GR.M1.TILT-ROTOR"]];
      sIdm1["11"] = [];
      sIdm1["12"] = [icn["GR.M1.MULTI-PURPOSE BLADE"]];
      sIdm1["13"] = [icn["GR.M1.TANK-WIDTH MINE PLOW"]];
      sIdm1["14"] = [icn["GR.M1.BRIDGING"]];
      sIdm1["15"] = [icn["GR.M1.CYBERSPACE"]];
      sIdm1["16"] = [icn["GR.M1.ARMORED"]];
      sIdm1["17"] = [icn["GR.M1.ATTACK"]];
      sIdm1["18"] = [icn["GR.M1.CARGO"]];
      sIdm1["19"] = [icn["GR.M1.MAINTENANCE"]];
      sIdm1["20"] = [icn["GR.M1.MEDEVAC"]];
      sIdm1["21"] = [icn["GR.IN.M1.PETROLEUM"]];
      sIdm1["22"] = [icn["GR.M1.UTILITY"]];
      sIdm1["23"] = [icn["GR.M1.WATER"]];
      sIdm1["24"] = [icn["GR.M1.ROBOTIC"]];

      sIdm2["01"] = [icn["GR.M2.CYBERSPACE"]];
      sIdm2["02"] = [icn["GR.M2.LIGHT"]];
      sIdm2["03"] = [icn["GR.M2.MEDIUM"]];
      sIdm2["04"] = [icn["GR.M2.RAILROAD"]];
      sIdm2["05"] = [icn["GR.M2.TRACKED"]];
      sIdm2["06"] = [icn["GR.M2.TRACTOR TRAILER"]];
      sIdm2["07"] = [icn["GR.M2.WHEELED LIMITED"]];
      sIdm2["08"] = [icn["GR.M2.WHEELED"]];
      sIdm2["09"] = [icn["GR.M2.ROBOTIC"]];

      //This sets up the bounding boxes for equipment to have the bottom at the right place. (this will be used for mobility when unframed)
      var equipmentBottom = {
        110000: 140,
        110100: 140,
        110101: 140,
        110102: 140,
        110103: 140,
        110200: 140,
        110201: 140,
        110202: 140,
        110203: 140,
        110300: 140,
        110301: 140,
        110302: 140,
        110303: 140,
        110400: 135,
        110500: 140,
        110501: 140,
        110502: 140,
        110503: 140,
        110600: 140,
        110601: 140,
        110602: 140,
        110603: 140,
        110700: 140,
        110701: 140,
        110702: 140,
        110703: 140,
        110800: 140,
        110801: 140,
        110802: 140,
        110803: 140,
        110900: 140,
        110901: 140,
        110902: 140,
        110903: 140,
        111000: 140,
        111001: 140,
        111002: 140,
        111003: 140,
        111100: 140,
        111101: 140,
        111102: 140,
        111103: 140,
        111104: 140,
        111105: 140,
        111106: 140,
        111107: 140,
        111108: 140,
        111109: 140,
        111200: 140,
        111201: 140,
        111202: 140,
        111203: 140,
        111300: 140,
        111301: 140,
        111302: 140,
        111303: 140,
        111400: 140,
        111401: 140,
        111402: 140,
        111403: 140,
        111500: 140,
        111501: 140,
        111502: 140,
        111503: 140,
        111600: 140,
        111601: 140,
        111602: 140,
        111603: 140,
        111701: 140,
        111702: 140,
        111703: 140,
        111800: 140,
        111900: 140,
        112000: 140,
        120000: 129,
        120100: 129,
        120101: 130,
        120102: 130,
        120103: 130,
        120104: 130,
        120105: 120,
        120106: 120,
        120107: 120,
        120108: 130,
        120109: 130,
        120110: 140,
        120200: 130,
        120201: 130,
        120202: 130,
        120203: 130,
        120300: 130,
        120301: 130,
        120302: 130,
        120303: 130,
        130000: 129,
        130100: 115,
        130200: 130,
        130300: 130,
        130400: 135,
        130500: 120,
        130600: 120,
        130700: 120,
        130701: 130,
        130800: 130,
        130801: 130,
        130900: 120,
        130901: 130,
        130902: 130,
        131000: 115,
        131001: 130,
        131002: 130,
        131003: 140,
        131100: 130,
        131101: 130,
        131200: 130,
        131300: 130,
        131400: 140,
        131500: 140,
        131600: 140,
        140100: 130,
        140200: 130,
        140300: 130,
        140400: 130,
        140500: 130,
        140600: 140,
        140601: 140,
        140602: 140,
        140603: 140,
        140700: 140,
        140800: 140,
        140900: 130,
        141000: 130,
        141100: 140,
        141200: 130,
        141201: 130,
        141202: 130,
        150100: 130,
        150200: 140,
        160100: 132.5,
        160101: 132.5,
        160102: 132.5,
        160103: 132.5,
        160200: 132.5,
        160201: 132.5,
        160202: 132.5,
        160203: 132.5,
        160300: 132.5,
        160301: 132.5,
        160302: 132.5,
        160303: 132.5,
        160400: 132.5,
        160401: 132.5,
        160402: 132.5,
        160403: 132.5,
        160500: 132.5,
        160501: 132.5,
        160502: 132.5,
        160503: 132.5,
        160600: 132.5,
        160601: 132.5,
        160602: 132.5,
        160603: 132.5,
        160700: 132.5,
        160701: 132.5,
        160702: 132.5,
        160703: 132.5,
        160800: 115,
        160900: 115,
        170000: 149.03125,
        170100: 118.75,
        170200: 133.21875,
        170300: 135.21875,
        170400: 118.75,
        170500: 138.1875,
        170600: 118.75,
        170700: 118.75,
        170800: 118,
        170900: 118,
        171000: 135,
        171100: 135,
        180000: 125,
        190000: 129,
        190100: 129,
        190200: 129,
        190300: 129,
        190400: 129,
        190500: 129,
        200100: 140,
        200200: 118.75,
        200300: 120,
        200400: 140,
        200500: 132,
        200600: 118.75,
        200700: 118.75,
        200800: 118.75,
        200900: 119.36222839355469,
        201000: 145,
        201100: 120,
        201200: 118,
        201300: 124.36222076416016,
        201301: 120,
        201302: 120,
        201400: 118.75,
        201500: 140,
        201501: 115,
        210100: 122,
        210200: 122,
        210300: 122,
        210400: 118.75,
        210500: 122,
        220100: 140,
        220200: 136,
        220300: 120,
        230000: 135,
        230100: 132.5,
        230200: 120,
        240000: 118.75
      };
      for (var key in equipmentBottom) {
        if (!equipmentBottom.hasOwnProperty(key)) continue;
        bbox[key] = {
          x1: 50,
          x2: 150,
          y1: 50,
          y2: equipmentBottom[key]
        };
      }
    }
  }
};
