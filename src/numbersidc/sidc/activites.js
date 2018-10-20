import { ms } from "../../ms.js";
import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/ground.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function activites(sId, sIdm1, sIdm2, bbox, symbolSet, icn, _STD2525) {
    //Adds support for Activities
    if (symbolSet == "40") {
      sId["110000"] = [];
      sId["110100"] = [icn["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"]];
      sId["110101"] = [ms._scale(1.5, icn["ST.IC.ARREST"])];
      sId["110102"] = [icn["ST.IC.ARSON/FIRE"]];
      sId["110103"] = [
        icn["ST.IC.INDIVIDUAL"],
        icn["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]
      ];
      sId["110104"] = [icn["ST.IC.DRIVE-BY SHOOTING"]];
      sId["110105"] = [icn["ST.IC.DRUG RELATED ACTIVITIES"]];
      sId["110106"] = [icn["ST.IC.EXTORTION"]];
      sId["110107"] = [icn["ST.IC.GRAFFITI"]];
      sId["110108"] = [icn["ST.IC.KILLING VICTIM"]];
      sId["110109"] = [icn["ST.IC.POISONING"]];
      sId["110110"] = [icn["ST.IC.RIOT"]];
      sId["110111"] = [ms._scale(1.5, icn["ST.IC.BOOBY TRAP"])];
      sId["110112"] = [icn["ST.IC.HOUSE"], icn["ST.M1.EVICTION"]];
      sId["110113"] = [icn["ST.IC.BLACK MARKETING"]];
      sId["110114"] = [icn["ST.IC.VANDALISM/LOOT/RANSACK/PLUNDER/SACK"]];
      sId["110115"] = [icn["GR.IC.FF.JAIL BREAK"]];
      sId["110116"] = [icn["ST.IC.ROBBERY"]];
      sId["110117"] = [icn["ST.IC.THEFT"]];
      sId["110118"] = [icn["ST.IC.BURGLARY"]];
      sId["110119"] = [icn["ST.IC.SMUGGLING"]];
      sId["110120"] = [icn["ST.IC.ROCK THROWING"]];
      sId["110121"] = [icn["ST.IC.COMPOSITE LOSS"], icn["ST.M1.DEAD BODY"]];
      sId["110122"] = [icn["ST.IC.SABOTAGE"]];
      sId["110123"] = [
        ms._translate(
          0,
          10,
          ms._scale(0.8, icn["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"])
        ),
        icn["AC.M1.THREAT"]
      ];
      sId["110200"] = [icn["ST.IC.BOMB"]];
      sId["110201"] = [icn["ST.IC.BOMB"], icn["AC.M1.THREAT"]];
      sId["110300"] = [icn["ST.IC.IED"]];
      sId["110301"] = [icn["ST.IC.EXPLOSION"], icn["ST.IC.IED"]];
      sId["110302"] = [
        ms._translate(
          0,
          15,
          ms._scale(0.7, [icn["ST.IC.EXPLOSION"], icn["ST.IC.IED"]])
        ),
        icn["ST.M1.PREMATURE"]
      ];
      sId["110303"] = [icn["ST.IC.IED"], icn["GR.IC.FF.SUPPLY"]];
      sId["110304"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.IED"]];
      sId["110400"] = [icn["AC.IC.SHOOTING"]];
      sId["110401"] = [icn["ST.IC.SNIPING"]];
      sId["110500"] = [icn["ST.IC.ILLEGAL DRUG OPERATION"]];
      sId["110501"] = [
        icn["ST.IC.ILLEGAL DRUG OPERATION"],
        icn["ST.M1.TRAFFICKING"]
      ];
      sId["110502"] = [
        icn["ST.IC.ILLEGAL DRUG OPERATION"],
        icn["ST.M1.LABRATORY"]
      ];
      sId["110600"] = [icn["ST.IC.EXPLOSION"]];
      sId["110601"] = [icn["ST.IC.EXPLOSION"], icn["ST.IC.GRENADE"]];
      sId["110602"] = [icn["ST.IC.EXPLOSION"], icn["ST.IC.INCENDIARY"]];
      sId["110603"] = [icn["ST.IC.EXPLOSION"], icn["ST.IC.MINE"]];
      sId["110604"] = [
        icn["ST.IC.EXPLOSION"],
        ms._scale(0.6, icn["GR.EQ.MORTAR"])
      ];
      sId["110605"] = [
        icn["ST.IC.EXPLOSION"],
        ms._scale(0.6, icn["GR.EQ.SINGLE ROCKET LAUNCHER"])
      ];
      sId["110606"] = [
        ms._scale(0.7, icn["ST.IC.BOMB"]),
        icn["ST.IC.EXPLOSION"]
      ];
      sId["120000"] = [icn["AC.IC.CRIMINAL.CIVIL DISTURBANCE"]];
      sId["120100"] = [icn["ST.IC.DEMONSTRATION"]];
      sId["130000"] = [];
      sId["130100"] = [icn["ST.IC.PATROLLING"]];
      sId["130200"] = [icn["ST.IC.PSYCHOLOGICAL OPERATIONS"]];
      sId["130201"] = [
        icn["ST.IC.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS"]
      ];
      sId["130300"] = [icn["ST.IC.SEARCHING"]];
      sId["130400"] = [];
      sId["130401"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.WILLING"]];
      sId["130402"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.COERCED/IMPRESSED"]];
      sId["130500"] = [icn["ST.IC.MINE LAYING"]];
      sId["130600"] = [icn["ST.IC.SPY"]];
      sId["130700"] = [icn["ST.IC.WARRANT SERVED"]];
      sId["130800"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.EXFILTRATION"]];
      sId["130900"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.INFILTRATION"]];
      sId["131000"] = [icn["ST.IC.GROUP"], icn["ST.M1.MEETING"]];
      sId["131001"] = [icn["ST.IC.POLLING PLACE/ELECTION"]];
      sId["131100"] = [icn["ST.IC.HOUSE"], icn["ST.M1.RAID"]];
      sId["131200"] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
      sId["131201"] = [
        ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
        icn["AC.M1.EMERGENCY COLLECTION EVACUATION POINT"]
      ];
      sId["131202"] = [icn["ST.IC.FOOD DISTRIBUTION"]];
      sId["131203"] = [
        ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
        icn["AC.M1.EMERGENCY INCIDENT COMMAND CENTER"]
      ];
      sId["131204"] = [
        ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
        icn["AC.M1.EMERGENCY OPERATIONS CENTER"]
      ];
      sId["131205"] = [icn["AC.IC.EMERGENCY PUBLIC INFORMATION CENTER"]];
      sId["131206"] = [
        ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
        icn["AC.M1.EMERGENCY SHELTER"]
      ];
      sId["131207"] = [
        ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
        icn["AC.M1.EMERGENCY STAGING AREA"]
      ];
      sId["131208"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.WATER"]];
      sId["131300"] = [icn["GR.IC.EMERGENCY MEDICAL OPERATION"]];
      sId["131301"] = [icn["AC.IC.EMT STATION LOCATION"]];
      sId["131302"] = [icn["AC.IC.HEALTH DEPARTMENT FACILITY"]];
      sId["131303"] = [icn["AC.IC.MEDICAL FACILITIES OUTPATIENT"]];
      sId["131304"] = [icn["AC.IC.OPERATION/EMERGENCY MEDICAL OPERATION"]];
      sId["131305"] = [icn["AC.IC.PHARMACY"]];
      sId["131306"] = [icn["AC.IC.TRIAGE"]];
      sId["131400"] = [icn["GR.IC.FIRE PROTECTION"]];
      sId["131401"] = [icn["AC.IC.FIRE HYDRANT"]];
      sId["131402"] = [ms._scale(1.5, icn["GR.IC.FIRE PROTECTION"])];
      sId["131403"] = [icn["AC.IC.OTHER WATER SUPPLY LOCATION"]];
      sId["131500"] = [icn["GR.IC.FF.LAW ENFORCEMENT"]];
      sId["131501"] = [
        icn[
          "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
        ]
      ];
      sId["131502"] = [icn["GR.IC.FF.BORDER PATROL"]];
      sId["131503"] = [icn["GR.IC.FF.CUSTOMS SERVICE"]];
      sId["131504"] = [icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]];
      sId["131505"] = [icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]];
      sId["131506"] = [icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]];
      sId["131507"] = [icn["GR.IC.LAW ENFORCEMENT"]];
      sId["131508"] = [icn["GR.IC.FF.PRISON"]];
      sId["131509"] = [icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]];
      sId["131510"] = [icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]];
      sId["131511"] = [icn["GR.IC.LAW ENFORCEMENT VESSEL"]];
      sId["131512"] = [icn["GR.IC.FF.US MARSHALS SERVICE"]];
      sId["131513"] = [icn["ST.IC.INTERNAL SECURITY FORCE"]];
      sId["140000"] = [icn["AC.IC.FIRE EVENT"]];
      sId["140100"] = [icn["AC.IC.FIRE ORIGIN"]];
      sId["140200"] = [icn["AC.IC.SMOKE"]];
      sId["140300"] = [icn["AC.IC.HOT SPOT"]];
      sId["140400"] = [icn["AC.IC.NON-REsIdENTIAL FIRE"]];
      sId["140500"] = [icn["AC.IC.REsIdENTIAL FIRE"]];
      sId["140600"] = [icn["AC.IC.SCHOOL FIRE"]];
      sId["140700"] = [icn["AC.IC.SPECIAL NEEDS FIRE"]];
      sId["140800"] = [icn["AC.IC.WILD FIRE"]];
      sId["150000"] = [];
      sId["150100"] = [icn["AC.IC.HAZARDOUS MATERIALS INCIDENT"]];
      sId["150101"] = [icn["AC.IC.CHEMICAL AGENT"]];
      sId["150102"] = [icn["AC.IC.CORROSIVE MATERIAL"]];
      sId["150103"] = [icn["AC.IC.HAZARDOUS WHEN WET"]];
      sId["150104"] = [icn["AC.IC.EXPLOSIVE MATERIAL"]];
      sId["150105"] = [icn["AC.IC.FLAMMABLE GAS"]];
      sId["150106"] = [icn["AC.IC.FLAMMABLE LIQUID"]];
      sId["150107"] = [icn["AC.IC.FLAMMABLE SOLID"]];
      sId["150108"] = [icn["AC.IC.NON-FLAMMABLE GAS"]];
      sId["150109"] = [icn["AC.IC.ORGANIC PEROXIDE"]];
      sId["150110"] = [icn["AC.IC.OXIDIZER"]];
      sId["150111"] = [icn["AC.IC.RADIOACTIVE MATERIAL"]];
      sId["150112"] = [icn["AC.IC.SPONTANEOUSLY COMBUSTIBLE MATERIAL"]];
      sId["150113"] = [icn["AC.IC.TOXIC GAS"]];
      sId["150114"] = [icn["AC.IC.TOXIC INFECTIOUS MATERIAL"]];
      sId["150115"] = [icn["AC.IC.UNEXPLODED ORDNANCE"]];
      sId["160000"] = [icn["GR.IC.TRANSPORTATION"]];
      sId["160100"] = [icn["ST.IC.HIJACKING (AIRPLANE)"]];
      sId["160200"] = [icn["ST.IC.HIJACKING (BOAT)"]];
      sId["160300"] = [icn["GR.EQ.TRAIN LOCOMOTIVE"]];
      sId["160400"] = [icn["ST.IC.KNOWN INSURGENT VEHICLE"]];
      sId["160500"] = [
        icn["ST.IC.EXPLOSION"],
        ms._scale(0.7, icn["ST.IC.KNOWN INSURGENT VEHICLE"])
      ];
      sId["170000"] = [icn["ST.IC.NATURAL EVENT"]];
      sId["170100"] = [icn["ST.IC.GEOLOGIC"]];
      sId["170101"] = [icn["AC.IC.AFTERSHOCK"]];
      sId["170102"] = [icn["AC.IC.AVALANCHE"]];
      sId["170103"] = [icn["AC.IC.EARTHQUAKE EPICENTER"]];
      sId["170104"] = [icn["AC.IC.LANDSLIDE"]];
      sId["170105"] = [icn["AC.IC.SUBSIDENCE"]];
      sId["170106"] = [icn["AC.IC.VOLCANIC ERUPTION"]];
      sId["170107"] = [icn["AC.IC.VOLCANIC THREAT"]];
      sId["170108"] = [icn["AC.IC.CAVE ENTRANCE"]];
      sId["170200"] = [icn["ST.IC.HYDRO-METEOROLOGICAL"]];
      sId["170201"] = [icn["AC.IC.DROUGHT"]];
      sId["170202"] = [icn["AC.IC.FLOOD"]];
      sId["170203"] = [icn["AC.IC.TSUNAMI"]];
      sId["170300"] = [icn["ST.IC.INFESTATION"]];
      sId["170301"] = [icn["AC.IC.BIRD"]];
      sId["170302"] = [icn["AC.IC.INSECT"]];
      sId["170303"] = [icn["AC.IC.MICROBIAL"]];
      sId["170304"] = [icn["AC.IC.REPTILE"]];
      sId["170305"] = [icn["AC.IC.RODENT"]];
      sId["180000"] = [];
      sId["180100"] = [
        icn["ST.IC.INDIVIDUAL"],
        icn["ST.M1.LEADER"],
        icn["ST.M2.RELIGIOUS"]
      ];
      sId["180200"] = [icn["ST.IC.INDIVIDUAL"], icn["ST.M1.SPEAKER"]];

      //sIdm1['00'] = 'Unspecified';
      sIdm1["01"] = [icn["ST.M1.ASSASSINATION"]];
      sIdm1["02"] = [icn["ST.M1.EXECUTION (WRONGFUL KILLING)"]];
      sIdm1["03"] = [icn["ST.M1.HIJACKING/HIJACKED"]];
      sIdm1["04"] = [icn["ST.M1.HOUSE-TO-HOUSE"]];
      sIdm1["05"] = [icn["ST.M1.KIDNAPPING"]];
      sIdm1["06"] = [icn["ST.M1.MURDER"]];
      sIdm1["07"] = [icn["ST.M1.PIRACY"]];
      sIdm1["08"] = [icn["ST.M1.RAPE"]];
      sIdm1["09"] = [icn["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"]];
      sIdm1["10"] = [icn["ST.M1.PIRATE"]];
      sIdm1["11"] = [icn["ST.M1.FALSE"]];
      sIdm1["12"] = [icn["ST.M1.FIND"]];
      sIdm1["13"] = [icn["ST.M1.FOUND AND CLEARED"]];
      sIdm1["14"] = [icn["ST.M1.HOAX (DECOY)"]];
      sIdm1["15"] = [icn["ST.M1.ATTEMPTED"]];
      sIdm1["16"] = [icn["ST.M1.ACCIDENT"]];
      sIdm1["17"] = [icn["ST.M1.INCIDENT"]];
      sIdm1["18"] = [icn["ST.M1.THEFT"]];
      sIdm1["19"] = [icn["GR.M1.HIJACKER"]];
      sIdm1["20"] = [icn["GR.M1.CYBERSPACE"]];

      sIdm2["01"] = [icn["GR.M2.CYBERSPACE"]];
      sIdm2["02"] = [icn["GR.M2.SECURITY FORCE ASSISTANCE"]];
    }
  }
};
