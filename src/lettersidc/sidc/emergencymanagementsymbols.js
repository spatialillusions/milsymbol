import { ms } from "../../ms.js";
import { metadata as metadata_letter } from "../metadata.js";
import { geticons as getIcons_letter } from "../geticons.js";
import icons from "../../iconparts/ground.js";
import tacticalpoints from "../../iconparts/tactical-points.js";

export default {
  type: "letter",
  getMetadata: metadata_letter,
  getIcons: getIcons_letter,
  iconParts: [icons, tacticalpoints],
  icons: function emergencymanagementsymbols(sId, bbox, icn, _STD2525) {
    //Adds support for 2525C Emergency Management Symbols
    sId["E-I-A-----"] = [icn["AC.IC.CRIMINAL.CIVIL DISTURBANCE"]];
    sId["E-I-AC----"] = [icn["ST.IC.GROUP"], icn["AC.M1.RIOT"]];
    sId["E-I-B-----"] = [icn["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"]];
    sId["E-I-BA----"] = [icn["ST.IC.BOMB"], icn["AC.M1.THREAT"]];
    sId["E-I-BC----"] = [
      icn["ST.IC.EXPLOSION"],
      ms._scale(0.6, icn["ST.IC.BOMB"])
    ];
    sId["E-I-BD----"] = [icn["ST.IC.GROUP"], icn["ST.M1.LOOT"]];
    sId["E-I-BF----"] = [icn["AC.IC.SHOOTING"]];
    sId["E-I-C-----"] = [icn["AC.IC.FIRE EVENT"]];
    sId["E-I-CA----"] = [icn["AC.IC.HOT SPOT"]];
    sId["E-I-CB----"] = [icn["AC.IC.NON-REsIdENTIAL FIRE"]];
    sId["E-I-CC----"] = [icn["AC.IC.FIRE ORIGIN"]];
    sId["E-I-CD----"] = [icn["AC.IC.REsIdENTIAL FIRE"]];
    sId["E-I-CE----"] = [icn["AC.IC.SCHOOL FIRE"]];
    sId["E-I-CF----"] = [icn["AC.IC.SMOKE"]];
    sId["E-I-CG----"] = [icn["AC.IC.SPECIAL NEEDS FIRE"]];
    sId["E-I-CH----"] = [icn["AC.IC.WILD FIRE"]];
    sId["E-I-D-----"] = [icn["AC.IC.HAZARDOUS MATERIALS INCIDENT"]];
    sId["E-I-DA----"] = [icn["AC.IC.CHEMICAL AGENT"]];
    sId["E-I-DB----"] = [icn["AC.IC.CORROSIVE MATERIAL"]];
    sId["E-I-DC----"] = [icn["AC.IC.HAZARDOUS WHEN WET"]];
    sId["E-I-DD----"] = [icn["AC.IC.EXPLOSIVE MATERIAL"]];
    sId["E-I-DE----"] = [icn["AC.IC.FLAMMABLE GAS"]];
    sId["E-I-DF----"] = [icn["AC.IC.FLAMMABLE LIQUID"]];
    sId["E-I-DG----"] = [icn["AC.IC.FLAMMABLE SOLID"]];
    sId["E-I-DH----"] = [icn["AC.IC.NON-FLAMMABLE GAS"]];
    sId["E-I-DI----"] = [icn["AC.IC.ORGANIC PEROXIDE"]];
    sId["E-I-DJ----"] = [icn["AC.IC.OXIDIZER"]];
    sId["E-I-DK----"] = [icn["AC.IC.RADIOACTIVE MATERIAL"]];
    sId["E-I-DL----"] = [icn["AC.IC.SPONTANEOUSLY COMBUSTIBLE MATERIAL"]];
    sId["E-I-DM----"] = [icn["AC.IC.TOXIC GAS"]];
    sId["E-I-DN----"] = [icn["AC.IC.TOXIC INFECTIOUS MATERIAL"]];
    sId["E-I-DO----"] = [icn["AC.IC.UNEXPLODED ORDNANCE"]];
    sId["E-I-E-----"] = [
      icn["ST.M1.INCIDENT"],
      icn["ST.IC.HIJACKING (AIRPLANE)"]
    ];
    sId["E-I-EA----"] = [
      icn["ST.M1.ACCIDENT"],
      icn["ST.IC.HIJACKING (AIRPLANE)"]
    ];
    sId["E-I-F-----"] = [icn["ST.M1.INCIDENT"], icn["ST.IC.HIJACKING (BOAT)"]];
    sId["E-I-FA----"] = [icn["ST.M1.ACCIDENT"], icn["ST.IC.HIJACKING (BOAT)"]];
    sId["E-I-G-----"] = [icn["ST.M1.INCIDENT"], icn["GR.EQ.TRAIN LOCOMOTIVE"]];
    sId["E-I-GA----"] = [icn["ST.M1.ACCIDENT"], icn["GR.EQ.TRAIN LOCOMOTIVE"]];
    sId["E-I-GB----"] = [
      icn["GR.EQ.TRAIN LOCOMOTIVE"],
      icn["ST.M1.HIJACKING/HIJACKED"]
    ];
    sId["E-I-H-----"] = [
      icn["ST.M1.INCIDENT"],
      icn["ST.IC.KNOWN INSURGENT VEHICLE"]
    ];
    sId["E-I-HA----"] = [
      icn["ST.M1.ACCIDENT"],
      icn["ST.IC.KNOWN INSURGENT VEHICLE"]
    ];
    sId["E-N-A-----"] = []; // N/A
    sId["E-N-AA----"] = [icn["AC.IC.AFTERSHOCK"]];
    sId["E-N-AB----"] = [icn["AC.IC.AVALANCHE"]];
    sId["E-N-AC----"] = [icn["AC.IC.EARTHQUAKE EPICENTER"]];
    sId["E-N-AD----"] = [icn["AC.IC.LANDSLIDE"]];
    sId["E-N-AE----"] = [icn["AC.IC.SUBSIDENCE"]];
    sId["W-S-WSVE--"] = [icn["AC.IC.VOLCANIC ERUPTION"]];
    sId["E-N-AG----"] = [icn["AC.IC.VOLCANIC THREAT"]];
    sId["W-S-WSD-LI"] = [icn["ATMOSPHERIC.IC.DRIZZLE.INTERMITTENT LIGHT"]];
    sId["E-N-B-----"] = []; // N/A
    sId["E-N-BB----"] = [icn["AC.IC.DROUGHT"]];
    sId["E-N-BC----"] = [icn["AC.IC.FLOOD"]];
    sId["W-S-WSFGSO"] = [icn["ATMOSPHERIC.IC.FOG.SKY OBSCURED"]];
    sId["W-S-WSGRL-"] = [
      icn["ATMOSPHERIC.IC.HAIL.LIGHT NOT ASSOCIATED WITH THUNDER"]
    ];
    sId["E-N-BF----"] = [icn["AC.IC.INVERSION"]];
    sId["W-S-WSR-LI"] = [icn["ATMOSPHERIC.IC.RAIN.INTERMITTENT LIGHT"]];
    sId["W-S-WSDSLM"] = [icn["ATMOSPHERIC.IC.DUST OR SAND.LIGHT TO MODERATE"]];
    sId["W-S-WSS-LI"] = [icn["ATMOSPHERIC.IC.SNOW.INTERMITTENT LIGHT"]];
    sId["W-S-WSTMH-"] = [
      icn["ATMOSPHERIC.IC.STORMS.THUNDERSTORM LIGHT TO MODERATE - WITH HAIL"]
    ];
    sId["W-S-WST-FC"] = [
      icn["ATMOSPHERIC.IC.STORMS.FUNNEL CLOUD (TORNADO/WATERSPOUT)"]
    ];
    sId["W-S-WSTSS-"] = [
      icn["ATMOSPHERIC.IC.TROPICAL STORM SYSTEMS.TROPICAL STORM"]
    ];
    sId["E-N-BM----"] = [icn["AC.IC.TSUNAMI"]];
    sId["E-N-C-----"] = []; // N/A
    sId["E-N-CA----"] = [icn["AC.IC.BIRD"]];
    sId["E-N-CB----"] = [icn["AC.IC.INSECT"]];
    sId["E-N-CC----"] = [icn["AC.IC.MICROBIAL"]];
    sId["E-N-CD----"] = [icn["AC.IC.REPTILE"]];
    sId["E-N-CE----"] = [icn["AC.IC.RODENT"]];
    sId["E-O-A-----"] = sId["E-O-AA----"] = sId["E-O-AB----"] = sId[
      "E-O-AC----"
    ] = sId["E-O-AD----"] = [icn["GR.IC.EMERGENCY MEDICAL OPERATION"]];
    sId["E-O-AE----"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
      icn["GR.M1.MEDEVAC"]
    ];
    sId["E-O-AF----"] = [
      ms._translate(0, 10, ms._scale(0.8, icn["GR.I.FF.CIVILIAN ROTARY WING"])),
      icn["GR.M1.MEDEVAC"]
    ];
    sId["E-O-AG----"] = [icn["AC.IC.HEALTH DEPARTMENT FACILITY"]];
    sId["E-O-AJ----"] = [icn["AC.IC.MEDICAL FACILITIES OUTPATIENT"]];
    sId["E-O-AK----"] = [icn["AC.IC.OPERATION/EMERGENCY MEDICAL OPERATION"]];
    sId["E-O-AL----"] = [icn["AC.IC.PHARMACY"]];
    sId["E-O-AM----"] = [icn["AC.IC.TRIAGE"]];
    sId["E-O-B-----"] = sId["E-O-BA----"] = sId["E-O-BB----"] = sId[
      "E-O-BC----"
    ] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
    sId["E-O-BD----"] = [
      ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
      icn["AC.M1.EMERGENCY COLLECTION EVACUATION POINT"]
    ];
    sId["E-O-BE----"] = [
      ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
      icn["AC.M1.EMERGENCY INCIDENT COMMAND CENTER"]
    ];
    sId["E-O-BF----"] = [
      ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
      icn["AC.M1.EMERGENCY OPERATIONS CENTER"]
    ];
    sId["E-O-BG----"] = [icn["AC.IC.EMERGENCY PUBLIC INFORMATION CENTER"]];
    sId["E-O-BH----"] = [
      ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
      icn["AC.M1.EMERGENCY SHELTER"]
    ];
    sId["E-O-BI----"] = [
      ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
      icn["AC.M1.EMERGENCY STAGING AREA"]
    ];
    sId["E-O-BJ----"] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
    sId["E-O-BK----"] = sId["S-G-USSW--"];
    sId["E-O-BL----"] = [
      icn["ST.IC.FOOD DISTRIBUTION"],
      icn["AC.M1.EMERGENCY"]
    ];
    sId["E-O-C-----"] = sId["E-O-CA----"] = sId["E-O-CB----"] = sId[
      "E-O-CE----"
    ] = [icn["GR.IC.FIRE PROTECTION"]];
    sId["E-O-CC----"] = [icn["AC.IC.FIRE HYDRANT"]];
    sId["E-O-CD----"] = [icn["AC.IC.OTHER WATER SUPPLY LOCATION"]];
    sId["E-O-D-----"] = sId["E-O-DA----"] = sId["E-O-DB----"] = sId[
      "E-O-DC----"
    ] = [icn["GR.IC.FF.LAW ENFORCEMENT"]];
    sId["E-O-DD----"] = sId["E-O-DDA---"] = sId["E-O-DDB---"] = sId[
      "E-O-DDC---"
    ] = [
      icn[
        "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
      ]
    ];
    sId["E-O-DE----"] = sId["E-O-DEA---"] = sId["E-O-DEB---"] = sId[
      "E-O-DEC---"
    ] = [icn["GR.IC.FF.BORDER PATROL"]];
    sId["E-O-DF----"] = sId["E-O-DFA---"] = sId["E-O-DFB---"] = sId[
      "E-O-DFC---"
    ] = [icn["GR.IC.FF.CUSTOMS SERVICE"]];
    sId["E-O-DG----"] = sId["E-O-DGA---"] = sId["E-O-DGB---"] = sId[
      "E-O-DGC---"
    ] = [icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]];
    sId["E-O-DH----"] = sId["E-O-DHA---"] = sId["E-O-DHB---"] = sId[
      "E-O-DHC---"
    ] = [icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]];
    sId["E-O-DI----"] = sId["E-O-DIA---"] = sId["E-O-DIB---"] = sId[
      "E-O-DIC---"
    ] = [icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]];
    sId["E-O-DJ----"] = sId["E-O-DJB---"] = sId["E-O-DJC---"] = [
      icn["GR.IC.LAW ENFORCEMENT"]
    ];
    sId["E-O-DK----"] = [icn["GR.IC.FF.PRISON"]];
    sId["E-O-DL----"] = sId["E-O-DLA---"] = sId["E-O-DLB---"] = sId[
      "E-O-DLC---"
    ] = [icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]];
    sId["E-O-DM----"] = sId["E-O-DMA---"] = sId["E-O-DMB---"] = sId[
      "E-O-DMC---"
    ] = [icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]];
    sId["E-O-DN----"] = sId["E-O-DNA---"] = sId["E-O-DNC---"] = [
      icn["GR.IC.LAW ENFORCEMENT VESSEL"]
    ];
    sId["E-O-DO----"] = sId["E-O-DOA---"] = sId["E-O-DOB---"] = sId[
      "E-O-DOC---"
    ] = [icn["GR.IC.FF.US MARSHALS SERVICE"]];
    sId["E-O-EA----"] = [
      ms._scale(0.6, icn["GR.EQ.SENSOR"]),
      icn["GR.M1.BIOLOGICAL"]
    ];
    sId["E-O-EB----"] = [
      ms._scale(0.6, icn["GR.EQ.SENSOR"]),
      icn["GR.M1.CHEMICAL"]
    ];
    sId["E-O-EC----"] = [
      ms._scale(0.6, icn["GR.EQ.SENSOR"]),
      icn["GR.M1.INTRUSION"]
    ];
    sId["E-O-ED----"] = [
      ms._scale(0.6, icn["GR.EQ.SENSOR"]),
      icn["GR.M1.NUCLEAR"]
    ];
    sId["E-O-EE----"] = [
      ms._scale(0.6, icn["GR.EQ.SENSOR"]),
      icn["GR.M1.RADIOLOGICAL"]
    ];
    sId["E-F-A-----"] = [icn["GR.IN.IC.AGRICULTURE AND FOOD INFRASTRUCTURE"]];
    sId["E-F-AA----"] = [icn["GR.IN.IC.AGRICULTURAL LABORATORY"]];
    sId["E-F-AB----"] = [icn["GR.IN.IC.ANIMAL FEEDLOT"]];
    sId["E-F-AC----"] = [
      icn["ST.IC.FOOD DISTRIBUTION"],
      icn["AC.M1.COMMERCIAL"]
    ];
    sId["E-F-AD----"] = [icn["GR.IN.IC.FARM/RANCH"]];
    sId["E-F-AE----"] = [
      icn["ST.IC.FOOD DISTRIBUTION"],
      icn["AC.M1.PRODUCTION"]
    ];
    sId["E-F-AF----"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.RETAIL"]];
    sId["E-F-AG----"] = [icn["GR.IN.IC.GRAIN STORAGE"]];
    sId["E-F-B-----"] = [
      icn["AC.IC.BANKING FINANCE AND INSURANCE INFRASTRUCTURE"]
    ];
    sId["E-F-BA----"] = [icn["GR.IN.IC.ATM"]];
    sId["E-F-BB----"] = [icn["GR.IN.IC.BANK"]];
    sId["E-F-BC----"] = [icn["GR.IN.IC.BULLION STORAGE"]];
    sId["E-F-BD----"] = [icn["GR.IN.IC.FEDERAL RESERVE BANK"]];
    sId["E-F-BE----"] = [icn["GR.IN.IC.FINANCIAL EXCHANGE"]];
    sId["E-F-BF----"] = [icn["GR.IN.IC.FINANCIAL SERVICES, OTHER"]];
    sId["E-F-C-----"] = [icn["GR.IN.IC.COMMERCIAL INFRASTRUCTURE"]];
    sId["E-F-CA----"] = [icn["GR.IN.IC.CHEMICAL PLANT"]];
    sId["E-F-CB----"] = [icn["GR.IN.IC.FIREARMS MANUFACTURER"]];
    sId["E-F-CC----"] = [icn["GR.IN.IC.FIREARMS RETAILER"]];
    sId["E-F-CD----"] = [icn["GR.IN.IC.HAZARDOUS MATERIAL PRODUCTION"]];
    sId["E-F-CE----"] = [icn["GR.IN.IC.HAZARDOUS MATERIAL STORAGE"]];
    sId["E-F-CF----"] = [icn["GR.IN.IC.INDUSTRIAL SITE"]];
    sId["E-F-CG----"] = [icn["GR.IN.IC.LANDFILL"]];
    sId["E-F-CH----"] = [icn["GR.IN.IC.PHARMACEUTICAL MANUFACTURER"]];
    sId["E-F-CI----"] = [icn["GR.IN.IC.CONTAMINATED HAZARDOUS WASTE SITE"]];
    sId["E-F-CJ----"] = [icn["GR.IN.IC.TOXIC RELEASE INVENTORY"]];
    sId["E-F-D-----"] = [icn["GR.IN.IC.EDUCATIONAL FACILITIES INFRASTRUCTURE"]];
    sId["E-F-DA----"] = [icn["GR.IN.IC.COLLEGE/UNIVERSITY"]];
    sId["E-F-DB----"] = [icn["GR.IN.IC.SCHOOL"]];
    sId["E-F-EA----"] = [
      ms._translate(0, 15, ms._scale(0.75, icn["GR.IN.IC.ELECTRIC POWER"])),
      icn["AC.M1.GENERATION STATION"]
    ];
    sId["E-F-EB----"] = [icn["GR.IN.IC.NATURAL GAS FACILITY"]];
    sId["E-F-EE----"] = [icn["GR.IN.IC.PROPANE FACILITY"]];
    sId["E-F-F-----"] = [icn["GR.IN.IC.GOVERNMENT SITE INFRASTRUCTURE"]];
    sId["E-F-G-----"] = [icn["GR.IN.IC.MILITARY INFRASTRUCTURE"]];
    sId["E-F-GA----"] = [icn["GR.IN.IC.BASE"], icn["AC.M1.MILITARY ARMORY"]];
    sId["E-F-H-----"] = [icn["GR.IN.IC.POSTAL SERVICE INFRASTRUCTURE"]];
    sId["E-F-HA----"] = [icn["GR.IN.IC.POSTAL DISTRIBUTION CENTER"]];
    sId["E-F-HB----"] = [icn["GR.IN.IC.POST OFFICE"]];
    sId["E-F-I-----"] = [icn["GR.IN.IC.PUBLIC VENUES INFRASTRUCTURE"]];
    sId["E-F-IA----"] = [icn["GR.IN.IC.ENCLOSED FACITLITY (PUBLIC VENUE)"]];
    sId["E-F-IB----"] = [icn["GR.IN.IC.OPEN FACILITY (OPEN VENUE)"]];
    sId["E-F-IC----"] = [icn["GR.IN.IC.RECREATIONAL AREA"]];
    sId["E-F-ID----"] = [icn["GR.IN.IC.RELIGIOUS INSTITUTION"]];
    sId["E-F-J-----"] = [icn["GR.IN.IC.SPECIAL NEEDS INFRASTRUCTURE"]];
    sId["E-F-JA----"] = [icn["GR.IN.IC.ADULT DAY CARE"]];
    sId["E-F-JB----"] = [icn["GR.IN.IC.CHILD DAY CARE"]];
    sId["E-F-JC----"] = [icn["GR.IN.IC.ELDER CARE"]];
    sId["E-F-K-----"] = [icn["GR.IN.IC.TELECOMMUNICATIONS INFRASTRUCTURE"]];
    sId["E-F-KB----"] = [icn["GR.IN.IC.TELECOMMUNICATIONS TOWER"]];
    sId["E-F-LA----"] = [icn["GR.IN.IC.AIR TRAFFIC CONTROL FACILITY"]];
    sId["G-M-BCB---"] = [icn["GR.IN.IC.BRIDGE"]];
    bbox["G-M-BCB---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
    sId["E-F-LD----"] = [
      icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]
    ];
    sId["E-F-LE----"] = [icn["GR.IC.FERRY"]];
    sId["E-F-LF----"] = [icn["GR.IN.IC.HELICOPTER LANDING SITE"]];
    sId["W-S-ML----"] = [icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE LOCK"]];
    sId["E-F-LH----"] = [icn["GR.IC.MAINTENANCE"]];
    sId["E-F-LJ----"] = [icn["GR.IC.RAILHEAD"]];
    sId["E-F-LK----"] = [icn["GR.IN.IC.REST STOP"]];
    sId["W-S-HPBA--"] = [
      icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE SHIP ANCHORAGE"]
    ];
    sId["E-F-LM----"] = [icn["GR.IN.IC.TOLL FACILITY"]];
    /*sId["G-S-PO----"] = [
      icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE.TRAFFIC CONTROL POINT"]
    ];*/
    sId["G-S-PO----"] = icn["TP.TRAFFIC CONTROL POST"]; //TACGRP.CSS.PNT.TCP
    bbox["G-S-PO----"] = { x1: 60, x2: 140, y1: -60 };
    sId["E-F-LO----"] = [icn["GR.IN.IC.TRAFFIC INSPECTION FACILITY"]];
    sId["E-F-LP----"] = [icn["GR.IN.IC.TUNNEL"]];
    sId["E-F-MA----"] = [icn["GR.IN.IC.CONTROL VALVE"]];
    sId["E-F-MB----"] = [icn["GR.IN.IC.DAM"]];
    sId["E-F-MC----"] = [icn["GR.IN.IC.DISCHARGE OUTFALL"]];
    sId["E-F-MD----"] = [icn["GR.IN.IC.GROUND WATER WELL"]];
    sId["E-F-ME----"] = [icn["GR.IN.IC.PUMPING STATION"]];
    sId["E-F-MF----"] = [icn["GR.IN.IC.RESERVOIR"]];
    sId["E-F-MG----"] = [icn["GR.IN.IC.STORAGE TOWER"]];
    sId["E-F-MH----"] = [icn["GR.IN.IC.SURFACE WATER INTAKE"]];
    sId["E-F-MI----"] = [icn["GR.IN.IC.WASTEWATER TREATMENT FACILITY"]];

    // In other apendixes as well...
    sId["O-O-D-----"] = [icn["ST.IC.DEMONSTRATION"]];
    sId["O-I-R-----"] = [icn["ST.IC.GROUP"]];
    sId["O-V-B-----"] = [icn["ST.IC.BOMB"]];
    sId["O-V-P-----"] = [icn["ST.IC.POISONING"]];
    sId["O-O-HA----"] = [
      icn["ST.IC.HIJACKING (AIRPLANE)"],
      icn["ST.M1.HIJACKING/HIJACKED"]
    ];
    sId["O-O-HV----"] = [
      icn["ST.IC.HIJACKING (BOAT)"],
      icn["ST.M1.HIJACKING/HIJACKED"]
    ];
    sId["O-O-HT----"] = [
      icn["ST.IC.KNOWN INSURGENT VEHICLE"],
      icn["ST.M1.HIJACKING/HIJACKED"]
    ];

    sId["S-G-IXH---"] = [icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]];
    sId["S-S-NM----"] = [icn["GR.IC.HOSPITAL SHIP"]];
    sId["E-O-BK----"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.WATER"]];
    sId["S-G-UULC--"] = [icn["GR.IC.LAW ENFORCEMENT"]];
    sId["S-S-XL----"] = [icn["GR.IC.LAW ENFORCEMENT VESSEL"]];
    sId["S-G-ES----"] = [icn["GR.EQ.SENSOR"]];
    sId["S-G-IUE---"] = [icn["GR.IN.IC.ELECTRIC POWER"]];
    sId["S-G-IUEN--"] = [
      icn["GR.IN.IC.ELECTRIC POWER"],
      icn["GR.IN.IC.ELECTRIC POWER NUCLEAR"]
    ];
    sId["S-G-IRP---"] = [icn["GR.IC.FF.CLASS III"]];
    sId["S-G-IB----"] = [icn["GR.IN.IC.BASE"]];
    sId["S-G-IUT---"] = [icn["GR.IN.IC.TELECOMMUNICATIONS"]];
    sId["S-G-IT----"] = [icn["GR.IC.TRANSPORTATION"]];
    sId["S-G-IBA---"] = [
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.IC.AIRPORT OF DEBARKATION"]
    ];
    sId["S-G-IBN---"] = [icn["GR.IC.NAVAL"]];
    sId["S-G-IUP---"] = [icn["GR.IC.WATER"]];
  }
};
