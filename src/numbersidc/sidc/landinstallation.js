import { ms } from "../../ms.js";
import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/ground.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function landinstallation(
    sId,
    sIdm1,
    sIdm2,
    bbox,
    symbolSet,
    icn,
    _STD2525
  ) {
    //Land Installation
    if (symbolSet == "20") {
      sId["110000"] = [icn["GR.IC.MILITARY"]];
      sId["110100"] = [icn["GR.IN.IC.AIRCRAFT PRODUCTION & ASSEMBLY"]];
      sId["110200"] = [ms._scale(1.4, icn["GR.IC.FF.CLASS V"])];
      sId["110300"] = [icn["GR.IC.FF.CLASS V"], icn["GR.IC.FF.SUPPLY"]];
      sId["110400"] = [icn["GR.EQ.TANK"]];
      sId["110500"] = [icn["ST.IC.BLACK LIST LOCATION"]];
      sId["110600"] = [icn["GR.IC.CBRN"]];
      sId["110700"] = [icn["GR.EQ.DOZER"]];
      sId["110701"] = [icn["GR.IN.IC.BRIDGE"]];
      sId["110800"] = [icn["GR.IC.EQUIPMENT MANUFACTURE"]];
      sId["110900"] = [icn["GR.I.GOVERNMENT"]];
      sId["111000"] = [icn["ST.IC.GRAY LIST LOCATION"]];
      sId["111100"] = [icn["ST.IC.MASS GRAVE LOCATION"]];
      sId["111200"] = [
        icn["GR.IN.IC.MILITARY/CIVILIAN.MATERIEL"],
        icn["GR.IC.FF.SUPPLY"]
      ];
      sId["111300"] = [icn["GR.IN.IC.MINE"]];
      sId["111400"] = [icn["GR.EQ.MISSILE LAUNCHER"]];
      sId["111500"] = [ms._scale(0.8, icn["AC.IC.RADIOACTIVE MATERIAL"])];
      sId["111600"] = [icn["GR.IN.IC.MILITARY/CIVILIAN.PRINTED MEDIA"]];
      sId["111700"] = [icn["ST.IC.SAFE HOUSE"]];
      sId["111800"] = [icn["ST.IC.WHITE LIST LOCATION"]];
      sId["111900"] = [icn["GR.EQ.TENT"]];
      sId["111901"] = [
        icn["GR.EQ.TENT"],
        icn["ST.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES"]
      ];
      sId["111902"] = [icn["GR.EQ.TENT"], icn["GR.M1.TRAINING CAMP"]];
      sId["112000"] = [
        icn["GR.IN.IC.INDUSTRIAL SITE"],
        icn["GR.IN.IC.WAREHOUSE/STORAGE FACILITY"]
      ]; //'Military/Civilian.Warehouse/Storage Facility';
      sId["112100"] = [icn["GR.IC.FF.LAW ENFORCEMENT"]];
      sId["112101"] = [
        icn[
          "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
        ]
      ];
      sId["112102"] = [icn["GR.IC.FF.BORDER PATROL"]];
      sId["112103"] = [icn["GR.IC.FF.CUSTOMS SERVICE"]];
      sId["112104"] = [icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]];
      sId["112105"] = [icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]];
      sId["112106"] = [icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]];
      sId["112107"] = [icn["GR.IC.LAW ENFORCEMENT"]];
      sId["112108"] = [icn["GR.IC.FF.PRISON"]];
      sId["112109"] = [icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]];
      sId["112110"] = [icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]];
      sId["112111"] = [icn["GR.IC.LAW ENFORCEMENT VESSEL"]];
      sId["112112"] = [icn["GR.IC.FF.US MARSHALS SERVICE"]];
      sId["112200"] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
      sId["112201"] = [icn["GR.IC.FIRE PROTECTION"]];
      sId["112202"] = [icn["GR.IC.EMERGENCY MEDICAL OPERATION"]];
      sId["120000"] = [];
      sId["120100"] = [icn["GR.IN.IC.AGRICULTURE AND FOOD INFRASTRUCTURE"]];
      sId["120101"] = [icn["GR.IN.IC.AGRICULTURAL LABORATORY"]];
      sId["120102"] = [icn["GR.IN.IC.ANIMAL FEEDLOT"]];
      sId["120103"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.COMMERCIAL"]];
      sId["120104"] = [icn["GR.IN.IC.FARM/RANCH"]];
      sId["120105"] = [icn["ST.IC.FOOD DISTRIBUTION"]];
      sId["120106"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.PRODUCTION"]];
      sId["120107"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.RETAIL"]];
      sId["120108"] = [icn["GR.IN.IC.GRAIN STORAGE"]];
      sId["120200"] = [
        icn["AC.IC.BANKING FINANCE AND INSURANCE INFRASTRUCTURE"]
      ];
      sId["120201"] = [icn["GR.IN.IC.ATM"]];
      sId["120202"] = [icn["GR.IN.IC.BANK"]];
      sId["120203"] = [icn["GR.IN.IC.BULLION STORAGE"]];
      sId["120204"] = [
        icn[
          "GR.IN.IC.INFRASTRUCTURE.BANKING FINANCE AND INSURANCE  INFRASTRUCTURE.ECONOMIC INFRASTRUCTURE ASSET"
        ]
      ];
      sId["120205"] = [icn["GR.IN.IC.FEDERAL RESERVE BANK"]];
      sId["120206"] = [icn["GR.IN.IC.FINANCIAL EXCHANGE"]];
      sId["120207"] = [icn["GR.IN.IC.FINANCIAL SERVICES, OTHER"]];
      sId["120300"] = [icn["GR.IN.IC.COMMERCIAL INFRASTRUCTURE"]];
      sId["120301"] = [icn["GR.IN.IC.CHEMICAL PLANT"]];
      sId["120302"] = [icn["GR.IN.IC.FIREARMS MANUFACTURER"]];
      sId["120303"] = [icn["GR.IN.IC.FIREARMS RETAILER"]];
      sId["120304"] = [icn["GR.IN.IC.HAZARDOUS MATERIAL PRODUCTION"]];
      sId["120305"] = [icn["GR.IN.IC.HAZARDOUS MATERIAL STORAGE"]];
      sId["120306"] = [icn["GR.IN.IC.INDUSTRIAL SITE"]];
      sId["120307"] = [icn["GR.IN.IC.LANDFILL"]];
      sId["120308"] = [icn["GR.IN.IC.PHARMACEUTICAL MANUFACTURER"]];
      sId["120309"] = [icn["GR.IN.IC.CONTAMINATED HAZARDOUS WASTE SITE"]];
      sId["120310"] = [icn["GR.IN.IC.TOXIC RELEASE INVENTORY"]];
      sId["120400"] = [icn["GR.IN.IC.EDUCATIONAL FACILITIES INFRASTRUCTURE"]];
      sId["120401"] = [icn["GR.IN.IC.COLLEGE/UNIVERSITY"]];
      sId["120402"] = [icn["GR.IN.IC.SCHOOL"]];
      sId["120500"] = [icn["GR.IN.IC.ELECTRIC POWER"]];
      sId["120501"] = [ms._scale(0.6, icn["GR.IN.IC.ELECTRIC POWER"])];
      sId["120502"] = [
        ms._translate(0, 15, ms._scale(0.75, icn["GR.IN.IC.ELECTRIC POWER"])),
        icn["AC.M1.GENERATION STATION"]
      ];
      sId["120503"] = [icn["GR.IN.IC.NATURAL GAS FACILITY"]];
      sId["120504"] = [ms._scale(1.5, icn["GR.IC.FF.CLASS III"])];
      sId["120505"] = [icn["GR.IC.FF.CLASS III"]];
      sId["120506"] = [icn["GR.IN.IC.PROPANE FACILITY"]];
      sId["120600"] = [icn["GR.IN.IC.GOVERNMENT SITE INFRASTRUCTURE"]];
      sId["120700"] = []; //'Infrastructure.Medical Infrastructure';
      sId["120701"] = [icn["GR.IC.FF.MEDICAL"]];
      sId["120702"] = [
        icn["GR.IC.FF.MEDICAL"],
        icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]
      ];
      sId["120800"] = [icn["GR.IN.IC.MILITARY INFRASTRUCTURE"]];
      sId["120801"] = [icn["GR.IN.IC.BASE"], icn["AC.M1.MILITARY ARMORY"]];
      sId["120802"] = [icn["GR.IN.IC.BASE"]];
      sId["120900"] = [icn["GR.IN.IC.POSTAL SERVICE INFRASTRUCTURE"]];
      sId["120901"] = [icn["GR.IN.IC.POSTAL DISTRIBUTION CENTER"]];
      sId["120902"] = [icn["GR.IN.IC.POST OFFICE"]];
      sId["121000"] = [icn["GR.IN.IC.PUBLIC VENUES INFRASTRUCTURE"]];
      sId["121001"] = [icn["GR.IN.IC.ENCLOSED FACITLITY (PUBLIC VENUE)"]];
      sId["121002"] = [icn["GR.IN.IC.OPEN FACILITY (OPEN VENUE)"]];
      sId["121003"] = [icn["GR.IN.IC.RECREATIONAL AREA"]];
      sId["121004"] = [icn["GR.IN.IC.RELIGIOUS INSTITUTION"]];
      sId["121100"] = [icn["GR.IN.IC.SPECIAL NEEDS INFRASTRUCTURE"]];
      sId["121101"] = [icn["GR.IN.IC.ADULT DAY CARE"]];
      sId["121102"] = [icn["GR.IN.IC.CHILD DAY CARE"]];
      sId["121103"] = [icn["GR.IN.IC.ELDER CARE"]];
      sId["121200"] = [icn["GR.IN.IC.TELECOMMUNICATIONS INFRASTRUCTURE"]];
      sId["121201"] = [icn["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]];
      sId["121202"] = [
        icn[
          "GR.IN.IC.INFRASTRUCTURE.TELECOMMUNICATIONS INFRASTRUCTURE.TELECOMMUNICATIONS"
        ]
      ];
      sId["121203"] = [icn["GR.IN.IC.TELECOMMUNICATIONS TOWER"]];
      sId["121300"] = [ms._scale(1.5, icn["GR.IC.TRANSPORTATION"])];
      sId["121301"] = [
        icn["GR.IC.TRANSPORTATION"],
        icn["GR.IC.AIRPORT OF DEBARKATION"]
      ];
      sId["121302"] = [icn["GR.IN.IC.AIR TRAFFIC CONTROL FACILITY"]];
      sId["121303"] = [
        icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]
      ];
      sId["121304"] = [icn["GR.IC.FERRY"]];
      sId["121305"] = [icn["GR.IN.IC.HELICOPTER LANDING SITE"]];
      sId["121306"] = [icn["GR.IC.MAINTENANCE"]];
      sId["121307"] = [icn["GR.IC.RAILHEAD"]];
      sId["121308"] = [icn["GR.IN.IC.REST STOP"]];
      sId["121309"] = [icn["GR.IC.TRANSPORTATION"], icn["GR.M1.NAVAL"]];
      sId["121310"] = [icn["GR.IC.NAVAL"], icn["GR.M1.YARD"]];
      sId["121311"] = [icn["GR.IN.IC.TOLL FACILITY"]];
      sId["121312"] = [icn["GR.IN.IC.TRAFFIC INSPECTION FACILITY"]];
      sId["121313"] = [icn["GR.IN.IC.TUNNEL"]];
      sId["121400"] = [icn["GR.IC.WATER"]];
      sId["121401"] = [icn["GR.IN.IC.CONTROL VALVE"]];
      sId["121402"] = [icn["GR.IN.IC.DAM"]];
      sId["121403"] = [icn["GR.IN.IC.DISCHARGE OUTFALL"]];
      sId["121404"] = [icn["GR.IN.IC.GROUND WATER WELL"]];
      sId["121405"] = [icn["GR.IN.IC.PUMPING STATION"]];
      sId["121406"] = [icn["GR.IN.IC.RESERVOIR"]];
      sId["121407"] = [icn["GR.IN.IC.STORAGE TOWER"]];
      sId["121408"] = [icn["GR.IN.IC.SURFACE WATER INTAKE"]];
      sId["121409"] = [icn["GR.IN.IC.WASTEWATER TREATMENT FACILITY"]];
      sId["121410"] = [icn["GR.IC.WATER"]];
      sId["121411"] = [icn["GR.IC.WATER PURIFICATION"]];

      //sIdm1['00'] = 'Unspecified';
      sIdm1["01"] = [icn["GR.M1.BIOLOGICAL"]];
      sIdm1["02"] = [icn["GR.M1.CHEMICAL"]];
      sIdm1["03"] = [icn["GR.M1.NUCLEAR"]];
      sIdm1["04"] = [icn["GR.IN.M1.RADIOLOGICAL"]];
      sIdm1["05"] = [icn["GR.M1.DECONTAMINATION"]];
      sIdm1["06"] = [icn["GR.IN.M1.COAL"]];
      sIdm1["07"] = [icn["GR.IN.M1.GEOTHERMAL"]];
      sIdm1["08"] = [icn["GR.IN.M1.HYDROELECTRIC"]];
      sIdm1["09"] = [icn["GR.IN.M1.NATURAL GAS"]];
      sIdm1["10"] = [icn["GR.IN.M1.PETROLEUM"]];
      sIdm1["11"] = [icn["GR.IN.M1.CIVILIAN"]];
      sIdm1["12"] = [icn["GR.IN.M1.CIVILIAN TELEPHONE"]];
      sIdm1["13"] = [icn["GR.IN.M1.CIVILIAN TELEVISION"]];
      sIdm1["14"] = [icn["GR.M1.CYBERSPACE"]];
      sIdm1["15"] = [icn["GR.M1.JOINT NETWORK NODE"]];
      sIdm1["16"] = [icn["GR.M1.COMMAND POST NODE"]];

      //sIdm2['00'] = 'Unspecified';
      sIdm2["01"] = [icn["GR.IN.M2.CHEMICAL & BIOLOGICAL WARFARE"]];
      sIdm2["02"] = [icn["GR.IN.M2.CHEMICAL WARFARE PRODUCTION"]];
      sIdm2["03"] = [icn["GR.IN.M2.NUCLEAR WARFARE PRODUCTION"]];
      sIdm2["04"] = [icn["GR.IN.M2.RADIOLOGICAL WARFARE PRODUCTION"]];
      sIdm2["05"] = [icn["GR.IN.M2.ATOMIC ENERGY REACTOR"]];
      sIdm2["06"] = [icn["GR.IN.M2.NUCLEAR MATERIAL PRODUCTION"]];
      sIdm2["07"] = [icn["GR.IN.M2.NUCLEAR MATERIAL STORAGE"]];
      sIdm2["08"] = [icn["GR.IN.M2.WEAPONS GRADE PRODUCTION"]];
      sIdm2["09"] = [icn["GR.M2.CYBERSPACE"]];
    }
  }
};
