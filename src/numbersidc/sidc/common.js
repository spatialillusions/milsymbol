import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/common-modifiers.js";

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
    // Common modifiers

    //sIdm1["01"] = [icn["SE.M1.OWN SHIP"]];

    sIdm1["100"] = [icn["COM.M1.UNMANNED AERIAL VEHICLE(UAV)"]];
    //Robotic
    sIdm1["101"] = [icn["COM.M1.ROBOTIC"]];
    //Fixed Wing
    sIdm1["102"] = [icn["COM.M1.FIXED WING"]];
    //Rotary Wing
    sIdm1["103"] = [icn["COM.M1.ROTARY WING"]];
    //Tilt-Rotor
    sIdm1["104"] = [icn["COM.M1.TILT ROTOR"]];
    sIdm1["105"] = [icn["COM.M1.VTOL"]];
    sIdm1["106"] = [icn["COM.M1.ATTACK"]];
    sIdm1["107"] = [icn["COM.M1.ARMORED"]];
    sIdm1["108"] = [icn["COM.M1.BALLISTIC MISSILE"]];
    sIdm1["109"] = [icn["COM.M1.BRIDGE"]];
    sIdm1["110"] = [icn["COM.M1.CARGO"]];
    sIdm1["111"] = [icn["COM.M1.UTILITY"]];
    sIdm1["112"] = [icn["COM.M1.LIGHT"]];
    sIdm1["113"] = [icn["COM.M1.MEDIUM"]];
    sIdm1["114"] = [icn["COM.M1.HEAVY"]];
    sIdm1["115"] = [icn["COM.M1.CYBERSPACE"]];
    sIdm1["116"] = [icn["COM.M1.COMMAND POST NODE"]];
    sIdm1["117"] = [icn["COM.M1.JOINT NETWORK NODE"]];
    sIdm1["118"] = [icn["COM.M1.RETRANSMISSION SITE"]];
    sIdm1["119"] = [icn["COM.M1.BRIGADE"]];
    sIdm1["120"] = [icn["COM.M1.CLOSE PROTECTION"]];
    sIdm1["121"] = [icn["COM.M1.COMBAT"]];
    sIdm1["122"] = [icn["COM.M1.COMMAND AND CONTROL"]];
    sIdm1["123"] = [icn["COM.M1.CROWD AND RIOT CONTROL"]];
    sIdm1["124"] = [icn["COM.M1.EOD"]];
    sIdm1["125"] = [icn["COM.M1.ISR"]];
    sIdm1["126"] = [icn["COM.M1.MAINTENANCE"]];
    sIdm1["127"] = [icn["COM.M1.MEDICAL"]];
    sIdm1["128"] = [icn["COM.M1.SEARCH AND RESCUE"]];
    sIdm1["129"] = [icn["COM.M1.SECURITY"]];
    sIdm1["130"] = [icn["COM.M1.SNIPER"]];
    sIdm1["131"] = [icn["COM.M1.SPECIAL OPERATION FORCES"]];
    sIdm1["132"] = [icn["COM.M1.SWAT"]];
    sIdm1["133"] = [icn["COM.M1.GUIDED MISSILE"]];
    sIdm1["134"] = [icn["COM.M1.OTHER GUIDED MISSILE"]];
    sIdm1["135"] = [icn["COM.M1.PETROLEUM"]];
    sIdm1["136"] = [icn["COM.M1.WATER"]];
    sIdm1["137"] = [icn["COM.M1.WEAPON"]];
    sIdm1["138"] = [icn["COM.M1.CHEMICAL"]];
    sIdm1["139"] = [icn["COM.M1.BIOLOGICAL"]];
    sIdm1["140"] = [icn["COM.M1.RADIOLOGICAL"]];
    sIdm1["141"] = [icn["COM.M1.NUKLEAR"]];
    sIdm1["142"] = [icn["COM.M1.DECONTAMINATION"]];
    sIdm1["143"] = [icn["COM.M1.CIVILIAN"]];
    sIdm1["144"] = [icn["COM.M1.GOVERNMENT"]];
    sIdm1["145"] = [icn["COM.M1.ACCIDENT"]];
    sIdm1["146"] = [icn["COM.M1.ASSASSINATION"]];
    sIdm1["147"] = [icn["COM.M1.EXECUTION"]];
    sIdm1["148"] = [icn["COM.M1.KIDNAPPING"]];
    sIdm1["149"] = [icn["COM.M1.PIRACY"]];
    sIdm1["150"] = [icn["COM.M1.RAPE"]];
    sIdm1["151"] = [icn["COM.M1.ANTISUBMARINE WARFARE"]];
    sIdm1["152"] = [icn["COM.M1.ESCORT"]];
    sIdm1["153"] = [icn["COM.M1.MINE COUNTERMEASURES"]];
    sIdm1["154"] = [icn["COM.M1.MINE WARFARE"]];
    sIdm1["155"] = [icn["COM.M1.SURFACE WARFARE"]];
    sIdm1["156"] = [icn["COM.M1.INDEPENDENT COMMAND"]];
    sIdm1["157"] = [icn["COM.M1.COMPANY"]];
    sIdm1["158"] = [icn["COM.M1.PLATOON"]];
    sIdm1["159"] = [icn["COM.M1.REGIMENT"]];
    sIdm1["160"] = [icn["COM.M1.SECTION"]];
    sIdm1["161"] = [icn["COM.M1.SQUAD"]];
    sIdm1["162"] = [icn["COM.M1.TEAM"]];
    sIdm1["163"] = [icn["COM.M1.BATTALION"]];
    sIdm1["164"] = [icn["COM.MQ.LASER"]];
    sIdm1["165"] = [icn["COM.M1.HIJACKER"]];
    sIdm1["166"] = [icn["COM.M1.ELECTROMAGNETIC WARFARE"]];

    sIdm2["100"] = [icn["COM.M2.AIRBORNE"]];
    sIdm2["101"] = [icn["COM.M2.BICYCLE EQUIPPED"]];
    sIdm2["102"] = [icn["COM.M2.RAILROAD"]];
    sIdm2["103"] = [icn["COM.M2.SKI"]];
    sIdm2["104"] = [icn["COM.M2.TRACKED"]];
    sIdm2["105"] = [icn["COM.M2.WHEELED LIMITED"]];
    sIdm2["106"] = [icn["COM.M2.WHEELED"]];
    sIdm2["107"] = [icn["COM.M2.FIXED WING"]];
    sIdm2["108"] = [icn["COM.M2.ROTARY WING"]];
    sIdm2["109"] = [icn["COM.M2.ROBOTIC"]];
    sIdm2["110"] = [icn["COM.M2.AUTONOMOUS CONTROL"]];
    sIdm2["111"] = [icn["COM.M2.REMOTELY PILOTED"]];
    sIdm2["112"] = [icn["COM.M2.EXPENDABLE"]];
    sIdm2["113"] = [icn["COM.M2.MOUNTAIN"]];
    sIdm2["114"] = [icn["COM.M2.LONG RANGE"]];
    sIdm2["115"] = [icn["COM.M2.MEDIUM RANGE"]];
    sIdm2["116"] = [icn["COM.M2.SHORT RANGE"]];
    sIdm2["117"] = [icn["COM.M2.CLOSE RANGE"]];
    sIdm2["118"] = [icn["COM.M2.HEAVY"]];
    sIdm2["119"] = [icn["COM.M2.MEDIUM"]];
    sIdm2["120"] = [icn["COM.M2.LIGHT AND MEDIUM"]];
    sIdm2["121"] = [icn["COM.M2.LIGHT"]];
    sIdm2["122"] = [icn["COM.M2.CYBERSPACE"]];
    sIdm2["123"] = [icn["COM.M2.SECURITY FORCE ASSISTANCE"]];
    sIdm2["124"] = [icn["COM.M2.BED"]];
    sIdm2["125"] = [icn["COM.M2.MULTIFUNCTIONAL"]];
  },
};
