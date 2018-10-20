import { ms } from "../../ms.js";
import { metadata as metadata_letter } from "../metadata.js";
import { geticons as getIcons_letter } from "../geticons.js";
import icons from "../../iconparts/ground.js";

export default {
  type: "letter",
  getMetadata: metadata_letter,
  getIcons: getIcons_letter,
  iconParts: [icons],
  icons: function equipment(sId, bbox, icn, _STD2525) {
    //Adds support for equipment
    sId["S-G-E-----"] = [];
    sId["S-G-EW----"] = []; // N/A
    sId["S-G-EWM---"] = [icn["GR.EQ.MISSILE LAUNCHER"]];
    sId["S-G-EWMA--"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"]
    ];
    sId["S-G-EWMAS-"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["S-G-EWMASR"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.SHORT RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
    ];
    sId["S-G-EWMASE"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.SHORT RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
    ];
    sId["S-G-EWMAI-"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["S-G-EWMAIR"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.INTERMEDIATE RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
    ];
    sId["S-G-EWMAIE"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.INTERMEDIATE RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
    ];
    sId["S-G-EWMAL-"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.LONG RANGE"]
    ];
    sId["S-G-EWMALR"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.LONG RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
    ];
    sId["S-G-EWMALE"] = [
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],
      icn["GR.EQ.LONG RANGE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
    ];
    sId["S-G-EWMAT-"] = [
      ms._translate(
        0,
        -15,
        ms._scale(0.7, icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"])
      ),
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE"]
    ];
    sId["S-G-EWMATR"] = [
      ms._translate(
        0,
        -15,
        ms._scale(0.7, icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"])
      ),
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]
    ];
    sId["S-G-EWMATE"] = [
      ms._translate(
        0,
        -15,
        ms._scale(0.7, icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"])
      ),
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE"],
      icn["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]
    ];
    sId["S-G-EWMS--"] = [icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"]];
    sId["S-G-EWMSS-"] = [
      icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["S-G-EWMSI-"] = [
      icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["S-G-EWMSL-"] = [
      icn["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],
      icn["GR.EQ.LONG RANGE"]
    ];
    sId["S-G-EWMT--"] = [icn["GR.EQ.ANTITANK MISSILE LAUNCHER"]];
    sId["S-G-EWMTL-"] = [
      icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["S-G-EWMTM-"] = [
      icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["S-G-EWMTH-"] = [
      icn["GR.EQ.ANTITANK MISSILE LAUNCHER"],
      icn["GR.EQ.LONG RANGE"]
    ];
    sId["S-G-EWS---"] = [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]];
    sId["S-G-EWSL--"] = [
      icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["S-G-EWSM--"] = [
      icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["S-G-EWSH--"] = [
      icn["GR.EQ.SINGLE ROCKET LAUNCHER"],
      icn["GR.EQ.LONG RANGE"]
    ];
    sId["S-G-EWX---"] = [icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"]];
    sId["S-G-EWXL--"] = [
      icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
      ms._translate(0, 10, icn["GR.EQ.SHORT RANGE"])
    ];
    sId["S-G-EWXM--"] = [
      icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
      ms._translate(0, 10, icn["GR.EQ.INTERMEDIATE RANGE"])
    ];
    sId["S-G-EWXH--"] = [
      icn["GR.EQ.MULTIPLE ROCKET LAUNCHER"],
      ms._translate(0, 10, icn["GR.EQ.LONG RANGE"])
    ];
    sId["S-G-EWT---"] = [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]];
    sId["S-G-EWTL--"] = [
      icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["S-G-EWTM--"] = [
      icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["S-G-EWTH--"] = [
      icn["GR.EQ.ANTITANK ROCKET LAUNCHER"],
      icn["GR.EQ.LONG RANGE"]
    ];
    sId["S-G-EWR---"] = [icn["GR.EQ.RIFLE"]];
    sId["S-G-EWRR--"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.SHORT RANGE"]];
    sId["S-G-EWRL--"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.INTERMEDIATE RANGE"]];
    sId["S-G-EWRH--"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.LONG RANGE"]];
    sId["S-G-EWZ---"] = [icn["GR.EQ.GRENADE LAUNCHER"]];
    sId["S-G-EWZL--"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
    ];
    sId["S-G-EWZM--"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
    ];
    sId["S-G-EWZH--"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms._translate(0, 20, icn["GR.EQ.LONG RANGE"])
    ];
    sId["S-G-EWO---"] = [icn["GR.EQ.MORTAR"]];
    sId["S-G-EWOL--"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.SHORT RANGE"]];
    sId["S-G-EWOM--"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.INTERMEDIATE RANGE"]];
    sId["S-G-EWOH--"] = [icn["GR.EQ.MORTAR"], icn["GR.EQ.LONG RANGE"]];
    sId["S-G-EWH---"] = [icn["GR.EQ.HOWITZER"]];
    sId["S-G-EWHL--"] = [icn["GR.EQ.HOWITZER"], icn["GR.EQ.SHORT RANGE"]];
    sId["S-G-EWHLS-"] = [
      ms._translate(
        0,
        -15,
        ms._scale(0.8, [icn["GR.EQ.HOWITZER"], icn["GR.EQ.SHORT RANGE"]])
      ),
      icn["GR.EQ.HOWITZER TRACKED"]
    ];
    sId["S-G-EWHM--"] = [
      icn["GR.EQ.HOWITZER"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["S-G-EWHMS-"] = [
      ms._translate(
        0,
        -15,
        ms._scale(0.8, [icn["GR.EQ.HOWITZER"], icn["GR.EQ.INTERMEDIATE RANGE"]])
      ),
      icn["GR.EQ.HOWITZER TRACKED"]
    ];
    sId["S-G-EWHH--"] = [icn["GR.EQ.HOWITZER"], icn["GR.EQ.LONG RANGE"]];
    sId["S-G-EWHHS-"] = [
      ms._translate(
        0,
        -15,
        ms._scale(0.8, [icn["GR.EQ.HOWITZER"], icn["GR.EQ.LONG RANGE"]])
      ),
      icn["GR.EQ.HOWITZER TRACKED"]
    ];
    sId["S-G-EWG---"] = [icn["GR.EQ.ANTITANK GUN"]];
    sId["S-G-EWGL--"] = [icn["GR.EQ.ANTITANK GUN"], icn["GR.EQ.SHORT RANGE"]];
    sId["S-G-EWGM--"] = [
      icn["GR.EQ.ANTITANK GUN"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["S-G-EWGH--"] = [icn["GR.EQ.ANTITANK GUN"], icn["GR.EQ.LONG RANGE"]];
    sId["S-G-EWGR--"] = [icn["GR.EQ.RECOILLESS GUN"]];
    sId["S-G-EWD---"] = [icn["GR.EQ.DIRECT FIRE GUN"]];
    sId["S-G-EWDL--"] = [
      icn["GR.EQ.DIRECT FIRE GUN"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["S-G-EWDLS-"] = [
      ms._translate(
        0,
        -15,
        ms._scale(0.8, [icn["GR.EQ.DIRECT FIRE GUN"], icn["GR.EQ.SHORT RANGE"]])
      ),
      icn["GR.EQ.HOWITZER TRACKED"]
    ];
    sId["S-G-EWDM--"] = [
      icn["GR.EQ.DIRECT FIRE GUN"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["S-G-EWDMS-"] = [
      ms._translate(
        0,
        -15,
        ms._scale(0.8, [
          icn["GR.EQ.DIRECT FIRE GUN"],
          icn["GR.EQ.INTERMEDIATE RANGE"]
        ])
      ),
      icn["GR.EQ.HOWITZER TRACKED"]
    ];
    sId["S-G-EWDH--"] = [icn["GR.EQ.DIRECT FIRE GUN"], icn["GR.EQ.LONG RANGE"]];
    sId["S-G-EWDHS-"] = [
      ms._translate(
        0,
        -15,
        ms._scale(0.8, [icn["GR.EQ.DIRECT FIRE GUN"], icn["GR.EQ.LONG RANGE"]])
      ),
      icn["GR.EQ.HOWITZER TRACKED"]
    ];
    sId["S-G-EWA---"] = [icn["GR.EQ.AIR DEFENCE GUN"]];
    sId["S-G-EWAL--"] = [
      icn["GR.EQ.AIR DEFENCE GUN"],
      icn["GR.EQ.SHORT RANGE"]
    ];
    sId["S-G-EWAM--"] = [
      icn["GR.EQ.AIR DEFENCE GUN"],
      icn["GR.EQ.INTERMEDIATE RANGE"]
    ];
    sId["S-G-EWAH--"] = [icn["GR.EQ.AIR DEFENCE GUN"], icn["GR.EQ.LONG RANGE"]];

    sId["S-G-EV----"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ]
    ];
    sId["S-G-EVA---"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.ARMOURED VEHICLE"]
    ];
    sId["S-G-EVAT--"] = [icn["GR.EQ.TANK"]];
    sId["S-G-EVATL-"] = [icn["GR.EQ.TANK"], icn["GR.EQ.LIGHT TANK"]];
    sId["S-G-EVATLR"] = sId["S-G-EVATW-"] = [
      icn["GR.EQ.TANK"],
      icn["GR.EQ.LIGHT TANK"],
      icn["GR.EQ.TANK RECOVERY VEHICLE"]
    ];
    sId["S-G-EVATM-"] = [icn["GR.EQ.TANK"], icn["GR.EQ.MEDIUM TANK"]];
    sId["S-G-EVATMR"] = sId["S-G-EVATX-"] = [
      icn["GR.EQ.TANK"],
      icn["GR.EQ.MEDIUM TANK"],
      icn["GR.EQ.TANK RECOVERY VEHICLE"]
    ];
    sId["S-G-EVATH-"] = [icn["GR.EQ.TANK"], icn["GR.EQ.HEAVY TANK"]];
    sId["S-G-EVATHR"] = sId["S-G-EVATY-"] = [
      icn["GR.EQ.TANK"],
      icn["GR.EQ.HEAVY TANK"],
      icn["GR.EQ.TANK RECOVERY VEHICLE"]
    ];
    sId["S-G-EVAA--"] = [icn["GR.EQ.ARMOURED PERSONNEL CARRIER"]];
    sId["S-G-EVAAR-"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      icn["GR.EQ.TANK RECOVERY VEHICLE"]
    ];
    sId["S-G-EVAI--"] = [icn["GR.EQ.ARMOURED FIGHTING VEHICLE"]];
    sId["S-G-EVAC--"] = [
      icn["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"]
    ];
    sId["S-G-EVAS--"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER COMBAT SERVICE SUPPORT VEHICLE"]
    ];
    sId["S-G-EVAL--"] = [
      icn["GR.EQ.ARMOURED FIGHTING VEHICLE"],
      icn["GR.EQ.CROSS-COUNTRY"]
    ];
    sId["S-G-EVU---"] = [icn["GR.EQ.UTILITY VEHICLE"]];
    sId["S-G-EVUB--"] = [icn["GR.EQ.BUS"]];
    sId["S-G-EVUS--"] = [icn["GR.EQ.SEMI-TRAILER TRUCK"]];
    sId["S-G-EVUSL-"] = [
      icn["GR.EQ.SEMI-TRAILER TRUCK"],
      icn["GR.EQ.UTILITY VEHICLE LIGHT"]
    ];
    sId["S-G-EVUSM-"] = [
      icn["GR.EQ.SEMI-TRAILER TRUCK"],
      icn["GR.EQ.UTILITY VEHICLE MEDIUM"]
    ];
    sId["S-G-EVUSH-"] = [
      icn["GR.EQ.SEMI-TRAILER TRUCK"],
      icn["GR.EQ.UTILITY VEHICLE HEAVY"]
    ];
    sId["S-G-EVUL--"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.LIMITED CROSS-COUNTRY"]
    ];
    sId["S-G-EVUX--"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.CROSS-COUNTRY"]
    ];
    sId["S-G-EVUR--"] = [icn["GR.EQ.WATER VEHICLE"]];
    sId["S-G-EVUT--"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"]
    ];
    sId["S-G-EVUTL-"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],
      icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK.LIGHT"]
    ];
    sId["S-G-EVUTH-"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],
      icn["GR.EQ.UTILITY VEHICLE.TOW TRUCK.HEAVY"]
    ];
    sId["S-G-EVUA--"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.MEDICAL EVACUATION"]
    ];
    sId["S-G-EVUAA-"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      icn["GR.EQ.MEDICAL EVACUATION"]
    ];
    sId["S-G-EVE---"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      ms._scale(0.7, icn["GR.IC.ENGINEER"])
    ];
    sId["S-G-EVEB--"] = [icn["GR.EQ.BRIDGE"]];
    sId["S-G-EVEE--"] = [icn["GR.EQ.EARTHMOVER"]];
    //.X.3.2.2.3.2 .1 WRONG SIDC
    //sId['S-G-EVEE--'] = [];
    sId["S-G-EVEC--"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.LIMITED CROSS-COUNTRY"],
      ms._scale(0.6, icn["GR.IC.ENGINEER"])
    ];
    sId["S-G-EVEM--"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.MINE LAYING VEHICLE"]
    ];
    sId["S-G-EVEMA-"] = [
      icn["GR.EQ.MINE CLEARING EQUIPMENT"],
      icn["GR.EQ.TANK"]
    ];
    sId["S-G-EVEMV-"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      icn["GR.EQ.ARMORED CARRIER WITH VOLCANO"]
    ];
    sId["S-G-EVEMT-"] = [
      icn["GR.EQ.MINE CLEARING EQUIPMENT"],
      ms._translate(0, -10, icn["GR.EQ.LIMITED CROSS-COUNTRY"])
    ];
    sId["S-G-EVEML-"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.LIMITED CROSS-COUNTRY"],
      icn["GR.EQ.ARMORED CARRIER WITH VOLCANO"]
    ];
    sId["S-G-EVEA--"] = [icn["GR.EQ.MINE CLEARING EQUIPMENT"]];
    sId["S-G-EVEAA-"] = [
      icn["GR.EQ.MINE CLEARING EQUIPMENT"],
      icn["GR.EQ.TANK"]
    ];
    sId["S-G-EVEAT-"] = [
      icn["GR.EQ.MINE CLEARING EQUIPMENT"],
      ms._translate(0, -10, icn["GR.EQ.LIMITED CROSS-COUNTRY"])
    ];
    sId["S-G-EVEMSM"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      icn["GR.EQ.MINE SCATTERABLE"]
    ];
    sId["S-G-EVED--"] = [icn["GR.EQ.DOZER"]];
    sId["S-G-EVEDA-"] = [icn["GR.EQ.DOZER ARMORED"]];
    sId["S-G-EVES--"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      ms._scale(0.6, icn["GR.IC.ENGINEER"])
    ];
    sId["S-G-EVER--"] = [
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER"],
      ms._scale(0.6, icn["GR.IC.ENGINEER"]),
      icn["GR.EQ.ARMOURED PERSONNEL CARRIER ENGINEER RECON VEHICLE"]
    ];
    sId["S-G-EVEH--"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.LIMITED CROSS-COUNTRY"],
      icn["GR.EQ.UTILITY VEHICLE BACKHOE"]
    ];
    sId["S-G-EVEF--"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.CROSS-COUNTRY"],
      icn["GR.EQ.UTILITY VEHICLE FERRY TRANSPORTER"]
    ];
    sId["S-G-EVD---"] = [
      icn["GR.EQ.UTILITY VEHICLE"],
      icn["GR.EQ.CROSS-COUNTRY"],
      ms._scale(0.7, icn["GR.IC.DRILLING"])
    ];
    sId["S-G-EVT---"] = [icn["GR.EQ.TRAIN LOCOMOTIVE"]];
    sId["S-G-EVC---"] = [icn["GR.I.CIVILIAN"]];
    sId["S-G-EVCA--"] = [icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"]];
    sId["S-G-EVCAL-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
    ];
    sId["S-G-EVCAM-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
    ];
    sId["S-G-EVCAH-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
    ];
    sId["S-G-EVCO--"] = [icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"]];
    sId["S-G-EVCOL-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
    ];
    sId["S-G-EVCOM-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
    ];
    sId["S-G-EVCOH-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
    ];
    sId["S-G-EVCM--"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]
    ];
    sId["S-G-EVCML-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
    ];
    sId["S-G-EVCMM-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
    ];
    sId["S-G-EVCMH-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
    ];
    sId["S-G-EVCU--"] = [icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"]];
    sId["S-G-EVCUL-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
    ];
    sId["S-G-EVCUM-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
    ];
    sId["S-G-EVCUH-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
    ];
    sId["S-G-EVCJ--"] = [icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"]];
    sId["S-G-EVCJL-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"]
    ];
    sId["S-G-EVCJM-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]
    ];
    sId["S-G-EVCJH-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"]
    ];
    sId["S-G-EVCT--"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["S-G-EVCTL-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["S-G-EVCTM-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["S-G-EVCTH-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["S-G-EVCF--"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["S-G-EVCFL-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.LIGHT"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["S-G-EVCFM-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["S-G-EVCFH-"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],
      icn["GR.EQ.CIVILIAN VEHICLE.HEAVY"],
      icn["GR.EQ.CIVILIAN VEHICLE.TRAILER"]
    ];
    sId["S-G-EVM---"] = [icn["GR.EQ.PACK ANIMAL"]];
    sId["S-G-EVS---"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.MISSILE SUPPORT"]
    ];
    sId["S-G-EVST--"] = _STD2525 // For some strange reason app6 uses this code for other things...
      ? [
          icn[
            "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
          ],
          icn["GR.EQ.MISSILE TRANSLOADER"]
        ]
      : [icn["GR.EQ.TRAIN LOCOMOTIVE"]];
    sId["S-G-EVSR--"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.MISSILE TRANSPORTER"]
    ];
    sId["S-G-EVSC--"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.MISSILE CRANE/LOADING DEVICE"]
    ];
    sId["S-G-EVSP--"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.MISSILE PROPELLANT TRANSPORTER"]
    ];
    sId["S-G-EVSW--"] = [
      icn[
        "GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"
      ],
      icn["GR.EQ.MISSILE WARHEAD TRANSPORTER"]
    ];
    sId["S-G-ES----"] = [icn["GR.EQ.SENSOR"]];
    sId["S-G-ESR---"] = [icn["GR.EQ.RADAR"]];
    sId["S-G-ESE---"] = [icn["GR.EQ.SENSOR EMPLACED"]];
    sId["S-G-EXI---"] = [icn["GR.EQ.IMPROVISED EXPLOSIVE DEVICE"]];
    sId["S-G-EX----"] = []; // N/A
    sId["S-G-EXL---"] = [icn["GR.EQ.LASER"]];
    sId["S-G-EXN---"] = [icn["GR.EQ.CBRN EQUIPMENT"]];
    sId["S-G-EXF---"] = [icn["GR.EQ.FLAME THROWER"]];
    sId["S-G-EXM---"] = [icn["GR.EQ.LAND MINES"]];
    sId["S-G-EXMC--"] = [icn["GR.EQ.ANTIPERSONNEL LAND MINE"]];
    sId["S-G-EXML--"] = [icn["GR.EQ.ANTIPERSONNEL LAND MINE LESS THAN LETHAL"]];

    //This sets up the bounding boxes for equipment to have the bottom at the right place. (this will be used for mobility when unframed)
    var equipmentBottom = {
      "E-----": 0,
      "EWM---": 140,
      "EWMA--": 140,
      "EWMAS-": 140,
      EWMASR: 140,
      EWMASE: 140,
      "EWMAI-": 140,
      EWMAIR: 140,
      EWMAIE: 140,
      "EWMAL-": 140,
      EWMALR: 140,
      EWMALE: 140,
      "EWMAT-": 153,
      EWMATR: 153,
      EWMATE: 153,
      "EWMS--": 140,
      "EWMSS-": 140,
      "EWMSI-": 140,
      "EWMSL-": 140,
      "EWMT--": 140,
      "EWMTL-": 140,
      "EWMTM-": 140,
      "EWMTH-": 140,
      "EWS---": 140,
      "EWSL--": 140,
      "EWSM--": 140,
      "EWSH--": 140,
      "EWX---": 140,
      "EWXL--": 140,
      "EWXM--": 140,
      "EWXH--": 140,
      "EWT---": 140,
      "EWTL--": 140,
      "EWTM--": 140,
      "EWTH--": 140,
      "EWR---": 140,
      "EWRL--": 140,
      "EWRM--": 140,
      "EWRH--": 140,
      "EWZ---": 140,
      "EWZL--": 140,
      "EWZM--": 140,
      "EWZH--": 140,
      "EWO---": 140,
      "EWOL--": 140,
      "EWOM--": 140,
      "EWOH--": 140,
      "EWH---": 140,
      "EWHL--": 140,
      "EWHLS-": 130,
      "EWHM--": 140,
      "EWHMS-": 130,
      "EWHH--": 140,
      "EWHHS-": 130,
      "EWG---": 140,
      "EWGL--": 140,
      "EWGM--": 140,
      "EWGH--": 140,
      "EWGR--": 140,
      "EWD---": 140,
      "EWDL--": 140,
      "EWDLS-": 130,
      "EWDM--": 140,
      "EWDMS-": 130,
      "EWDH--": 140,
      "EWDHS-": 130,
      "EWA---": 140,
      "EWAL--": 140,
      "EWAM--": 140,
      "EWAH--": 140,
      "EV----": 129,
      "EVA---": 129,
      "EVAT--": 130,
      "EVATL-": 130,
      EVATLR: 130,
      "EVATM-": 130,
      EVATMR: 130,
      "EVATH-": 130,
      EVATHR: 130,
      "EVAA--": 130,
      "EVAAR-": 130,
      "EVAI--": 130,
      "EVAC--": 130,
      "EVAS--": 130,
      "EVAL--": 140,
      "EVU---": 130,
      "EVAB--": 130,
      "EVUS--": 140,
      "EVUSL-": 140,
      "EVUSM-": 140,
      "EVUSH-": 140,
      "EVUL--": 140,
      "EVUX--": 140,
      "EVUR--": 130,
      "EVUTL-": 130,
      "EVUTH-": 130,
      "EVUA--": 130,
      "EVUAA-": 130,
      "EVE---": 129,
      "EVEB--": 130,
      "EVEE--": 130,
      "EVEC--": 140,
      "EVEM--": 130,
      "EVEMA-": 130,
      "EVEMV-": 130,
      "EVEMT-": 130,
      "EVEML-": 140,
      "EVEA--": 120,
      "EVEAA-": 130,
      "EVEAT-": 130,
      EVEMSM: 130,
      "EVED--": 130,
      "EVEDA-": 130,
      "EVES--": 130,
      "EVER--": 130,
      "EVEH--": 140,
      "EVEF--": 140,
      "EVD---": 140,
      "EVT--": 130,
      "EVC---": 119,
      "EVCA--": 132.5,
      "EVCAL-": 132.5,
      "EVCAM-": 132.5,
      "EVCAH-": 132.5,
      "EVCO--": 132.5,
      "EVCOL-": 132.5,
      "EVCOM-": 132.5,
      "EVCOH-": 132.5,
      "EVCM--": 132.5,
      "EVCML-": 132.5,
      "EVCMM-": 132.5,
      "EVCMH-": 132.5,
      "EVCU--": 132.5,
      "EVCUL-": 132.5,
      "EVCUM-": 132.5,
      "EVCUH-": 132.5,
      "EVCJ--": 132.5,
      "EVCJL-": 132.5,
      "EVCJM-": 132.5,
      "EVCJH-": 132.5,
      "EVCT--": 132.5,
      "EVCTL-": 132.5,
      "EVCTM-": 132.5,
      "EVCTH-": 132.5,
      "EVCF--": 132.5,
      "EVCFL-": 132.5,
      "EVCFM-": 132.5,
      "EVCFH-": 132.5,
      "EVM---": 125,
      "EVS---": 129,
      "EVST--": 129,
      "EVSR--": 129,
      "EVSC--": 129,
      "EVSP--": 129,
      "EVSW--": 129,
      "ES----": 140,
      "ESR---": 120,
      "ESE---": 136,
      "EXI---": 119,
      "EXL---": 145,
      "EXN---": 140,
      "EXF---": 135,
      "EXM---": 130,
      "EXMC--": 122,
      "EXML--": 122
    };
    for (var key in equipmentBottom) {
      if (!equipmentBottom.hasOwnProperty(key)) continue;
      bbox["S-G-" + key] = {
        x1: 50,
        x2: 150,
        y1: 50,
        y2: equipmentBottom[key]
      };
    }
  }
};
